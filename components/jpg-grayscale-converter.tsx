'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Download, RefreshCw, Trash2, ArrowRight } from 'lucide-react'

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

export function JpgGrayscaleConverter() {
  const [original, setOriginal] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [fileName, setFileName] = useState('')
  const [originalSize, setOriginalSize] = useState(0)
  const [resultSize, setResultSize] = useState(0)
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null)
  const [quality, setQuality] = useState(0.92)
  const [dragOver, setDragOver] = useState(false)
  const [processing, setProcessing] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const processFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      return
    }

    setOriginalSize(file.size)
    setFileName(file.name)
    setResult(null)
    setResultSize(0)
    setProcessing(true)

    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      setOriginal(dataUrl)

      const img = new window.Image()
      img.onload = () => {
        const canvas = canvasRef.current!
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        setDims({ w: img.naturalWidth, h: img.naturalHeight })

        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0)

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const d = imageData.data
        for (let i = 0; i < d.length; i += 4) {
          const gray = Math.round(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2])
          d[i] = d[i + 1] = d[i + 2] = gray
        }
        ctx.putImageData(imageData, 0, 0)

        canvas.toBlob(
          (blob) => {
            if (!blob) return
            setResultSize(blob.size)
            const url = URL.createObjectURL(blob)
            setResult(url)
            setProcessing(false)
          },
          'image/jpeg',
          quality
        )
      }
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  }, [quality])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0]
    if (f) processFile(f)
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files?.[0]
    if (f) processFile(f)
  }

  function reprocess() {
    if (!original) return
    setProcessing(true)
    setResult(null)

    const img = new window.Image()
    img.onload = () => {
      const canvas = canvasRef.current!
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        const gray = Math.round(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2])
        d[i] = d[i + 1] = d[i + 2] = gray
      }
      ctx.putImageData(imageData, 0, 0)
      canvas.toBlob(
        (blob) => {
          if (!blob) return
          setResultSize(blob.size)
          const url = URL.createObjectURL(blob)
          setResult(url)
          setProcessing(false)
        },
        'image/jpeg',
        quality
      )
    }
    img.src = original
  }

  function download() {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = fileName.replace(/\.[^.]+$/, '') + '-grayscale.jpg'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  function reset() {
    setOriginal(null)
    setResult(null)
    setFileName('')
    setOriginalSize(0)
    setResultSize(0)
    setDims(null)
    setProcessing(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const sizeDiff = originalSize && resultSize
    ? Math.round((1 - resultSize / originalSize) * 100)
    : null

  return (
    <div className="space-y-5">
      <canvas ref={canvasRef} className="hidden" />

      {/* Upload zone */}
      {!original ? (
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 cursor-pointer transition-colors ${
            dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }`}
        >
          <Upload className="w-8 h-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">Drop a JPG here or click to upload</p>
            <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WebP, BMP — conversion always outputs JPG</p>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
        </div>
      ) : (
        <div className="space-y-4">
          {/* Before / After */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Original</p>
              <div className="rounded-lg border bg-muted/10 overflow-hidden flex items-center justify-center min-h-[180px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={original} alt="Original" className="w-full object-contain max-h-[300px]" />
              </div>
              <p className="text-xs text-muted-foreground">{formatBytes(originalSize)}</p>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Grayscale JPG</p>
              <div className="rounded-lg border bg-muted/10 overflow-hidden flex items-center justify-center min-h-[180px]">
                {processing ? (
                  <div className="flex flex-col items-center gap-2 text-muted-foreground p-6">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <p className="text-xs">Converting…</p>
                  </div>
                ) : result ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={result} alt="Grayscale result" className="w-full object-contain max-h-[300px]" />
                ) : null}
              </div>
              {resultSize > 0 && (
                <p className="text-xs text-muted-foreground">
                  {formatBytes(resultSize)}
                  {sizeDiff !== null && sizeDiff !== 0 && (
                    <span className={`ml-1.5 font-medium ${sizeDiff > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                      ({sizeDiff > 0 ? `-${sizeDiff}%` : `+${Math.abs(sizeDiff)}%`})
                    </span>
                  )}
                </p>
              )}
            </div>
          </div>

          {/* Stats */}
          {dims && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>{dims.w} × {dims.h} px</span>
              {resultSize > 0 && (
                <>
                  <ArrowRight className="w-3 h-3" />
                  <span className="font-medium text-foreground">{formatBytes(resultSize)} grayscale JPG</span>
                </>
              )}
            </div>
          )}

          {/* Quality */}
          <div className="rounded-xl border bg-muted/30 p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">JPG Quality</p>
              <span className="text-xs text-muted-foreground">
                {Math.round(quality * 100)}% — {quality >= 0.95 ? 'Maximum' : quality >= 0.85 ? 'High' : quality >= 0.75 ? 'Medium' : 'Compact'}
              </span>
            </div>
            <input
              type="range"
              min={0.5}
              max={1.0}
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

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            {result && (
              <button
                onClick={download}
                className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Download className="w-4 h-4" /> Download Grayscale JPG
              </button>
            )}
            <button
              onClick={reprocess}
              disabled={processing}
              className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${processing ? 'animate-spin' : ''}`} /> Apply Quality
            </button>
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
            >
              <Trash2 className="w-4 h-4" /> New Image
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
