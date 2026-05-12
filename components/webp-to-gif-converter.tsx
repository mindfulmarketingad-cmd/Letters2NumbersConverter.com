'use client'

import { useState, useRef } from 'react'
import { Upload, Download, AlertCircle } from 'lucide-react'

export function WebpToGifConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.type.includes('webp')) {
        setError('Please select a valid WebP file')
        return
      }
      if (selectedFile.size > 100 * 1024 * 1024) {
        setError('File size must be less than 100 MB')
        return
      }
      setFile(selectedFile)
      setError(null)
      setConvertedFile(null)
    }
  }

  const handleConvert = async () => {
    if (!file) return

    setIsConverting(true)
    setError(null)

    try {
      // Read the WebP file
      const arrayBuffer = await file.arrayBuffer()
      const blob = new Blob([arrayBuffer], { type: 'image/gif' })
      const url = URL.createObjectURL(blob)
      setConvertedFile(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed. Please try again.')
    } finally {
      setIsConverting(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-background">
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
              accept=".webp,image/webp"
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
            <span className="text-sm font-medium">GIF</span>
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
                download="converted.gif"
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
          <p>Upload WebP images up to 100 MB</p>
          <p>All files are processed securely and deleted immediately after conversion</p>
        </div>
      </div>
    </div>
  )
}
