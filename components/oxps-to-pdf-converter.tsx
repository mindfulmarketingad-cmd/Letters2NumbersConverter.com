'use client'

import { useState, useRef } from 'react'
import { Upload, Download, AlertCircle, FileText, Trash2 } from 'lucide-react'

export function OxpsToPdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (!selectedFile.name.toLowerCase().endsWith('.oxps')) {
        setError('Please select a valid OXPS file')
        return
      }
      setFile(selectedFile)
      setError(null)
      setConvertedFile(null)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      if (!droppedFile.name.toLowerCase().endsWith('.oxps')) {
        setError('Please select a valid OXPS file')
        return
      }
      setFile(droppedFile)
      setError(null)
      setConvertedFile(null)
    }
  }

  const handleConvert = async () => {
    if (!file) return

    setIsConverting(true)
    setError(null)

    try {
      // Simulate conversion process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Create a mock PDF blob for demonstration
      const pdfBlob = new Blob(['%PDF-1.4 mock content'], { type: 'application/pdf' })
      const url = URL.createObjectURL(pdfBlob)
      setConvertedFile(url)
    } catch (err) {
      setError('Conversion failed. Please try again.')
    } finally {
      setIsConverting(false)
    }
  }

  const handleNewConversion = () => {
    setFile(null)
    setConvertedFile(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="flex flex-col h-full bg-background">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* File Input Section */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Input File
          </label>
          <div 
            className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
            <p className="text-foreground font-medium mb-1">Drop files here</p>
            <p className="text-sm text-muted-foreground mb-3">or</p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium">
              Upload to convert
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".oxps"
              onChange={handleFileSelect}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground mt-4">Upload documents up to 100 MB</p>
          </div>
          
          {file && (
            <div className="mt-3 flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button 
                onClick={handleNewConversion}
                className="p-1 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Output Format */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Output Format
          </label>
          <div className="px-4 py-3 border border-border rounded-lg bg-secondary/50 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="font-medium">PDF</span>
            <span className="text-xs text-muted-foreground ml-auto">Portable Document Format</span>
          </div>
        </div>

        {/* Convert Button */}
        <div>
          <button
            onClick={handleConvert}
            disabled={!file || isConverting}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConverting ? 'Converting...' : 'Convert to PDF'}
          </button>
        </div>

        {/* Download Section */}
        {convertedFile && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Download className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Conversion Complete</p>
                  <p className="text-xs text-muted-foreground">{file?.name.replace('.oxps', '.pdf')}</p>
                </div>
              </div>
              <a
                href={convertedFile}
                download={file?.name.replace('.oxps', '.pdf')}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium text-sm"
              >
                Download PDF
              </a>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3 text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
