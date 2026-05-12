'use client'

import { useState } from 'react'
import { Upload, Download, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function XpsToPdfConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

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
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Converter */}
        <div className="lg:col-span-2">
          <div className="bg-secondary/50 rounded-lg border border-border p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Convert XPS To PDF</h2>
            
            {/* Upload Section */}
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground mb-2 block">Select XPS File</span>
                <div className="relative">
                  <input
                    type="file"
                    accept=".xps,application/vnd.ms-xpsdocument"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="xps-file-input"
                    disabled={isConverting}
                  />
                  <label
                    htmlFor="xps-file-input"
                    className="flex items-center justify-center w-full px-6 py-4 border-2 border-dashed border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 cursor-pointer transition-colors"
                  >
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm font-medium text-foreground">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">XPS files only</p>
                    </div>
                  </label>
                </div>
              </label>
            </div>

            {/* Status Messages */}
            {error && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {success && (
              <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <p className="text-sm text-green-500">Conversion successful!</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleConvert}
                disabled={!file || isConverting || !!convertedFile}
                className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isConverting ? 'Converting...' : 'Convert to PDF'}
              </button>
              {convertedFile && (
                <button
                  onClick={handleDownload}
                  className="flex-1 px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              )}
              {file && (
                <button
                  onClick={handleClear}
                  className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary/50 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* File Info */}
            {file && (
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Selected File:</strong> {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* How It Works */}
          <div className="bg-secondary/50 rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">How It Works</h3>
            <ol className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">1</span>
                <span>Select your XPS file by clicking the upload area</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">2</span>
                <span>Click the "Convert to PDF" button to start the conversion</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">3</span>
                <span>Download your PDF file once the conversion is complete</span>
              </li>
            </ol>
          </div>

          {/* Who It's For */}
          <div className="bg-secondary/50 rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Who It's For</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Business professionals handling XPS documents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Students converting assignment files</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Anyone needing to convert XPS to PDF format</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Document management professionals</span>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="bg-secondary/50 rounded-lg border border-border p-6">
            <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Fast and accurate XPS to PDF conversion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Preserves formatting and layout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>No file size limits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Completely free to use</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Works directly in your browser</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-secondary/50 rounded-lg border border-border p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Related Conversion Tools</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/tools/image-converter" className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors">
            <p className="font-medium text-foreground hover:text-primary transition-colors">Image Converter</p>
            <p className="text-xs text-muted-foreground mt-1">Convert between image formats</p>
          </Link>
          <Link href="/tools/pdf-converter" className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors">
            <p className="font-medium text-foreground hover:text-primary transition-colors">PDF Converter</p>
            <p className="text-xs text-muted-foreground mt-1">Convert to and from PDF</p>
          </Link>
          <Link href="/tools/document-converter" className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors">
            <p className="font-medium text-foreground hover:text-primary transition-colors">Document Converter</p>
            <p className="text-xs text-muted-foreground mt-1">Convert document formats</p>
          </Link>
          <Link href="/tools/letter-number-converter" className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-secondary/50 transition-colors">
            <p className="font-medium text-foreground hover:text-primary transition-colors">Letter to Number</p>
            <p className="text-xs text-muted-foreground mt-1">Convert text to numbers</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
