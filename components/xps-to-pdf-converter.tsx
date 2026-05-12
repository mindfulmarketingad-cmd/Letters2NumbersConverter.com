'use client'

import { useState, useRef } from 'react'
import { Upload, Download, AlertCircle, CheckCircle, Plus, Share2, FileText, Maximize2 } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface WorkspaceItem {
  id: string
  name: string
  fileName: string
  timestamp: number
}

export function XpsToPdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [workspace, setWorkspace] = useState<WorkspaceItem[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type === 'application/vnd.ms-xpsdocument' || selectedFile.name.endsWith('.xps')) {
        setFile(selectedFile)
        setError(null)
        setSuccess(false)
        setConvertedFile(null)
      } else {
        setError('Please select a valid XPS file')
        setFile(null)
      }
    }
  }

  const handleConvert = async () => {
    if (!file) {
      setError('Please select an XPS file first')
      return
    }

    setIsConverting(true)
    setError(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/convert-xps-to-pdf', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Conversion failed. Please try again.')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      setConvertedFile(url)
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during conversion')
    } finally {
      setIsConverting(false)
    }
  }

  const handleDownload = () => {
    if (convertedFile) {
      const link = document.createElement('a')
      link.href = convertedFile
      link.download = `${file?.name.replace('.xps', '')}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleClear = () => {
    setFile(null)
    setConvertedFile(null)
    setError(null)
    setSuccess(false)
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setFile(null)}
            className="p-2 hover:bg-secondary rounded transition-colors"
            title="New conversion"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="Share">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="File">
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
                ↓
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {workspace.length === 0 ? (
                <DropdownMenuItem disabled>No saved conversions</DropdownMenuItem>
              ) : (
                workspace.map((item) => (
                  <DropdownMenuItem key={item.id}>
                    {item.name}
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* File Input Section */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Input File
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium"
            >
              <Upload className="w-4 h-4 inline mr-2" />
              Upload a file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xps,application/vnd.ms-xpsdocument"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="flex-1 flex items-center px-4 py-2 border border-border rounded bg-secondary/50">
              <span className="text-sm text-muted-foreground">
                {file ? file.name : 'File not added'}
              </span>
            </div>
          </div>
        </div>

        {/* Output Format */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Output Format
          </label>
          <div className="px-4 py-2 border border-border rounded bg-secondary/50">
            <span className="text-sm font-medium">PDF</span>
          </div>
        </div>

        {/* Output File */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Output File
          </label>
          <div className="flex gap-2">
            <button
              onClick={handleConvert}
              disabled={!file || isConverting}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isConverting ? 'Converting...' : 'Run Code'}
            </button>
            {convertedFile && (
              <a
                href={convertedFile}
                download="converted.pdf"
                className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download
              </a>
            )}
          </div>
          {convertedFile && (
            <div className="mt-2 text-sm text-green-600">✓ Conversion successful</div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded flex gap-2 text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* Info Section */}
        <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t border-border">
          <p>Upload documents up to 100 MB</p>
          <p>All files are processed securely and deleted immediately after conversion</p>
        </div>
      </div>
    </div>
  )
}
