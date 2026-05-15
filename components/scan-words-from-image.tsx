'use client'

import { useState, useRef } from 'react'
import { Upload, Copy, Download, Loader } from 'lucide-react'
import Tesseract from 'tesseract.js'

export function ScanWordsFromImage() {
  const [image, setImage] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const [progress, setProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const supportedFormats = ['JPG', 'PNG', 'GIF', 'JFIF', 'JPEG', 'HEIC', 'PDF']

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = async (file: File) => {
    setError('')
    setExtractedText('')
    setProgress(0)

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'application/pdf']
    if (!validTypes.includes(file.type)) {
      setError(`Invalid file type. Supported formats: ${supportedFormats.join(', ')}`)
      return
    }

    if (file.size > 50 * 1024 * 1024) {
      setError('File size exceeds 50MB limit')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageData = e.target?.result as string
      setImage(imageData)
      extractTextFromImage(imageData)
    }
    reader.readAsDataURL(file)
  }

  const extractTextFromImage = async (imageData: string) => {
    setIsProcessing(true)
    try {
      const worker = await Tesseract.createWorker()
      
      const result = await worker.recognize(imageData, {
        logger: (m) => {
          if (m.status === 'recognizing') {
            setProgress(Math.round(m.progress * 100))
          }
        },
      })

      setExtractedText(result.data.text)
      setProgress(100)
      await worker.terminate()
    } catch (err) {
      setError(`OCR failed: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData?.items
    if (!items) return

    for (let item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile()
        if (file) {
          processFile(file)
        }
        break
      }
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const files = e.dataTransfer?.files
    if (files?.[0]) {
      processFile(files[0])
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(extractedText)
      alert('Text copied to clipboard!')
    } catch (err) {
      alert('Failed to copy text')
    }
  }

  const downloadText = () => {
    const element = document.createElement('a')
    const file = new Blob([extractedText], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'extracted-text.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const clearAll = () => {
    setImage(null)
    setExtractedText('')
    setProgress(0)
    setError('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">Scan Words From Image</h2>
        <p className="text-lg text-muted-foreground">
          Extract text from images using advanced OCR technology. Upload an image and instantly get the text content.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Upload Section */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onPaste={handlePaste}
          className="border-2 border-dashed border-border rounded-lg p-8 bg-secondary/50 hover:bg-secondary/70 transition-colors cursor-pointer"
        >
          <div className="text-center">
            <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Drop, Upload or Paste Images
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Supported formats: {supportedFormats.join(', ')}
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition mb-4"
            >
              Browse
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.pdf"
              onChange={handleImageChange}
              className="hidden"
            />

            <p className="text-xs text-muted-foreground mt-4">
              *Your privacy is protected! No data is transmitted or stored.
            </p>
          </div>

          {/* Preview Image */}
          {image && (
            <div className="mt-6 border border-border rounded-lg p-4 bg-background">
              <img
                src={image}
                alt="Preview"
                className="w-full h-auto max-h-96 object-contain rounded"
              />
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-6 bg-secondary/50 min-h-96">
            <h3 className="font-semibold text-foreground mb-3">Extracted Text</h3>

            {isProcessing && (
              <div className="flex items-center justify-center gap-3 h-64">
                <Loader className="w-6 h-6 animate-spin text-purple-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Processing image...</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{progress}%</p>
                </div>
              </div>
            )}

            {!isProcessing && extractedText && (
              <textarea
                value={extractedText}
                readOnly
                className="w-full h-64 p-4 border border-border rounded-lg bg-background text-foreground resize-none font-mono text-sm"
              />
            )}

            {!isProcessing && !extractedText && !error && (
              <div className="h-64 flex items-center justify-center">
                <p className="text-muted-foreground text-center">Upload an image to extract text</p>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          {extractedText && (
            <div className="flex gap-3">
              <button
                onClick={copyToClipboard}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
              <button
                onClick={downloadText}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
              <button
                onClick={clearAll}
                className="flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-foreground rounded-lg font-medium transition"
              >
                Clear
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-foreground mb-3">About This Tool</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          Scan Words From Image uses advanced OCR (Optical Character Recognition) technology to extract text from images instantly. This tool is perfect for:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>Digitizing printed documents and forms</li>
          <li>Extracting text from screenshots and photos</li>
          <li>Converting scanned images to editable text</li>
          <li>Processing receipts, invoices, and handwritten notes</li>
          <li>Automating data entry and document management</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
          Simply upload an image, and the tool will automatically extract all readable text. All processing is done locally in your browser—no data is sent to external servers.
        </p>
      </div>
    </div>
  )
}
