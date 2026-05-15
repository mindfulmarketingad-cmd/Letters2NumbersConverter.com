'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Download, RefreshCw, FileText, Trash2, CheckCircle } from 'lucide-react'

declare global {
  interface Window {
    pdfjsLib: any
    jspdf: any
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(s)
  })
}

async function ensureLibs() {
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js')
  if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
  }
  await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
}

export function PdfGrayscaleConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [pageCount, setPageCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [quality, setQuality] = useState(0.92)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const outputRef = useRef<Blob | null>(null)

  const loadFile = useCallback((f: File) => {
    if (f.type !== 'application/pdf') {
      setError('Please upload a PDF file.')
      return
    }
    if (f.size > 100 * 1024 * 1024) {
      setError('PDF must be under 100 MB.')
      return
    }
    setFile(f)
    setDone(false)
    setError('')
    setProgress(0)
    setPreviewUrl(null)
    outputRef.current = null

    // Count pages preview
    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        await ensureLibs()
        const pdf = await window.pdfjsLib.getDocument({ data: e.target?.result }).promise
        setPageCount(pdf.numPages)
      } catch {
        setError('Could not read PDF. Make sure it is not password-protected.')
      }
    }
    reader.readAsArrayBuffer(f)
  }, [])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (f) loadFile(f)
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files?.[0]
    if (f) loadFile(f)
  }

  function reset() {
    setFile(null)
    setPageCount(0)
    setProgress(0)
    setDone(false)
    setError('')
    setPreviewUrl(null)
    outputRef.current = null
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function convert() {
    if (!file) return
    setLoading(true)
    setError('')
    setDone(false)
    setProgress(0)

    try {
      await ensureLibs()
      const arrayBuffer = await file.arrayBuffer()
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise
      const numPages = pdf.numPages

      const { jsPDF } = window.jspdf
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      let jspdfDoc: any = null

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i)
        const scale = 2 // 2× for quality
        const viewport = page.getViewport({ scale })

        canvas.width = viewport.width
        canvas.height = viewport.height
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        await page.render({ canvasContext: ctx, viewport }).promise

        // Convert to grayscale
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const d = imageData.data
        for (let p = 0; p < d.length; p += 4) {
          const gray = Math.round(0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2])
          d[p] = d[p + 1] = d[p + 2] = gray
        }
        ctx.putImageData(imageData, 0, 0)

        const imgData = canvas.toDataURL('image/jpeg', quality)

        // Save first page as preview
        if (i === 1) setPreviewUrl(imgData)

        // PDF dimensions in points (1pt = 1/72 inch; at scale=2 and 96dpi pixels)
        const wPt = viewport.width / scale * 0.75   // px → pt at 96dpi
        const hPt = viewport.height / scale * 0.75

        if (!jspdfDoc) {
          jspdfDoc = new jsPDF({
            orientation: wPt > hPt ? 'landscape' : 'portrait',
            unit: 'pt',
            format: [wPt, hPt],
          })
        } else {
          jspdfDoc.addPage([wPt, hPt], wPt > hPt ? 'landscape' : 'portrait')
        }
        jspdfDoc.addImage(imgData, 'JPEG', 0, 0, wPt, hPt)

        setProgress(Math.round((i / numPages) * 100))
      }

      const blob: Blob = jspdfDoc.output('blob')
      outputRef.current = blob
      setDone(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Conversion failed. Please try another PDF.')
    } finally {
      setLoading(false)
    }
  }

  function download() {
    if (!outputRef.current || !file) return
    const url = URL.createObjectURL(outputRef.current)
    const a = document.createElement('a')
    a.href = url
    a.download = file.name.replace(/\.pdf$/i, '') + '-grayscale.pdf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-5">
      {/* Upload */}
      {!file ? (
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 cursor-pointer transition-colors ${
            dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }`}
        >
          <FileText className="w-8 h-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">Drop a PDF here or click to upload</p>
            <p className="text-xs text-muted-foreground mt-1">PDF files only — up to 100 MB</p>
          </div>
          <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" className="hidden" onChange={onFileChange} />
        </div>
      ) : (
        <div className="space-y-4">
          {/* File info */}
          <div className="flex items-center justify-between rounded-xl border bg-muted/30 p-4">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium truncate max-w-[280px]">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                  {pageCount > 0 && ` · ${pageCount} page${pageCount !== 1 ? 's' : ''}`}
                </p>
              </div>
            </div>
            <button onClick={reset} className="text-muted-foreground hover:text-foreground transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Quality */}
          <div className="rounded-xl border bg-muted/30 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Output Quality</p>
              <span className="text-xs text-muted-foreground">
                {quality >= 0.95 ? 'Maximum' : quality >= 0.85 ? 'High' : quality >= 0.75 ? 'Medium' : 'Compact'}
              </span>
            </div>
            <input
              type="range"
              min={0.6}
              max={0.99}
              step={0.01}
              value={quality}
              onChange={e => setQuality(parseFloat(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Smaller file</span>
              <span>Best quality</span>
            </div>
          </div>

          {/* Progress */}
          {loading && (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Converting page {Math.ceil(progress * (pageCount || 1) / 100)} of {pageCount}…</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Preview */}
          {previewUrl && (
            <div className="rounded-xl border bg-muted/20 p-3 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Preview — Page 1</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Grayscale page 1 preview" className="w-full rounded-lg object-contain max-h-[320px] bg-white" />
            </div>
          )}

          {error && <p className="text-sm text-destructive">{error}</p>}

          {/* Done banner */}
          {done && (
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4 shrink-0" />
              Conversion complete — {pageCount} page{pageCount !== 1 ? 's' : ''} converted to grayscale.
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {!done ? (
              <button
                onClick={convert}
                disabled={loading || pageCount === 0}
                className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
              >
                {loading
                  ? <><RefreshCw className="w-4 h-4 animate-spin" /> Converting…</>
                  : <><Upload className="w-4 h-4" /> Convert to Grayscale</>}
              </button>
            ) : (
              <button
                onClick={download}
                className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Grayscale PDF
              </button>
            )}
            {done && (
              <button
                onClick={convert}
                disabled={loading}
                className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Re-convert
              </button>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
            >
              <Trash2 className="w-4 h-4" /> New PDF
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
