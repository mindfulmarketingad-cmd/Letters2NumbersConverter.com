'use client'

import { useState, useRef, useEffect } from 'react'
import { Upload, Download, AlertCircle, Plus, Share2, FileText, Maximize2, Trash2, Loader2, CheckCircle } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface WorkspaceItem {
  id: string
  name: string
  timestamp: number
  url: string
}

declare global {
  interface Window {
    mammoth: any
    html2pdf: any
  }
}

async function loadMammoth(): Promise<void> {
  if (window.mammoth) return
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Mammoth.js'))
    document.head.appendChild(script)
  })
}

async function loadHtml2pdf(): Promise<void> {
  if (window.html2pdf) return
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load html2pdf.js'))
    document.head.appendChild(script)
  })
}

async function convertWordToPdf(file: File): Promise<Blob> {
  await Promise.all([loadMammoth(), loadHtml2pdf()])

  const arrayBuffer = await file.arrayBuffer()
  const result = await window.mammoth.convertToHtml({ arrayBuffer })
  const html = result.value

  const container = document.createElement('div')
  container.innerHTML = html
  container.style.cssText =
    'font-family: Arial, sans-serif; font-size: 12pt; line-height: 1.6; padding: 20px; color: #000;'
  document.body.appendChild(container)

  const blob: Blob = await window.html2pdf()
    .set({
      margin: [15, 15, 15, 15],
      filename: file.name.replace(/\.(docx|doc)$/i, '.pdf'),
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    })
    .from(container)
    .outputPdf('blob')

  document.body.removeChild(container)
  return blob
}

export function WordToPdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState('')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [outputName, setOutputName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [workspace, setWorkspace] = useState<WorkspaceItem[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => { if (downloadUrl) URL.revokeObjectURL(downloadUrl) }
  }, [downloadUrl])

  const handleFileSelect = (selectedFile: File) => {
    const name = selectedFile.name.toLowerCase()
    if (!name.endsWith('.docx') && !name.endsWith('.doc')) {
      setError('Please select a valid Word document (.docx or .doc).')
      return
    }
    setFile(selectedFile)
    setError(null)
    setDownloadUrl(null)
    setProgress('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFileSelect(f)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) handleFileSelect(f)
  }

  const handleConvert = async () => {
    if (!file) return
    setIsConverting(true)
    setError(null)
    setDownloadUrl(null)

    try {
      setProgress('Loading conversion engine…')
      const blob = await convertWordToPdf(file)
      const name = file.name.replace(/\.(docx|doc)$/i, '.pdf')
      const url = URL.createObjectURL(blob)

      setDownloadUrl(url)
      setOutputName(name)
      setProgress('')

      setWorkspace(prev =>
        [{ id: Date.now().toString(), name, timestamp: Date.now(), url }, ...prev].slice(0, 10)
      )
    } catch (err: any) {
      setError(err?.message ?? 'Conversion failed. Please try again with a different file.')
    } finally {
      setIsConverting(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setDownloadUrl(null)
    setError(null)
    setProgress('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-1">
          <button onClick={handleReset} className="p-2 hover:bg-secondary rounded transition-colors" title="New conversion">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="Share">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="File info">
            <FileText className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="Fullscreen">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Workspace</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-1 text-sm border border-border rounded hover:bg-secondary transition-colors">
                {workspace.length > 0 ? `${workspace.length} file${workspace.length !== 1 ? 's' : ''}` : 'Empty'}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {workspace.length === 0 ? (
                <DropdownMenuItem disabled>No saved conversions</DropdownMenuItem>
              ) : (
                workspace.map(item => (
                  <DropdownMenuItem key={item.id} asChild>
                    <a href={item.url} download={item.name} className="cursor-pointer">{item.name}</a>
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Input File</label>
          <div
            className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
            <p className="text-foreground font-medium mb-1">Drop your Word document here</p>
            <p className="text-sm text-muted-foreground mb-3">or</p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium">
              Choose Word file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".docx,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
              onChange={handleInputChange}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground mt-4">Supports .docx and .doc files up to 100 MB</p>
          </div>

          {file && (
            <div className="mt-3 flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button
                onClick={e => { e.stopPropagation(); handleReset() }}
                className="p-1 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Output format */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Output Format</label>
          <div className="px-4 py-3 border border-border rounded-lg bg-secondary/50 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="font-medium">PDF Document (.pdf)</span>
            <span className="text-xs text-muted-foreground ml-auto">Portable Document Format</span>
          </div>
        </div>

        {/* Convert button */}
        <button
          onClick={handleConvert}
          disabled={!file || isConverting}
          className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isConverting ? (
            <><Loader2 className="w-4 h-4 animate-spin" />Converting…</>
          ) : (
            'Convert to PDF'
          )}
        </button>

        {progress && <p className="text-sm text-muted-foreground text-center">{progress}</p>}

        {downloadUrl && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Conversion complete</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[180px]">{outputName}</p>
                </div>
              </div>
              <a
                href={downloadUrl}
                download={outputName}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium text-sm flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3 text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
