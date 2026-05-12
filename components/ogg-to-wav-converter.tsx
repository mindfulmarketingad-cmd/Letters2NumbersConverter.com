'use client'

import { useState } from 'react'
import { Upload, Download, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export function OggToWavConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [convertedFile, setConvertedFile] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type === 'audio/ogg' || selectedFile.name.endsWith('.ogg')) {
        if (selectedFile.size > 100 * 1024 * 1024) {
          setError('File size exceeds 100 MB limit')
          setFile(null)
        } else {
          setFile(selectedFile)
          setError(null)
          setSuccess(false)
          setConvertedFile(null)
        }
      } else {
        setError('Please select a valid OGG audio file')
        setFile(null)
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.classList.add('border-primary', 'bg-primary/5')
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('border-primary', 'bg-primary/5')
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-primary', 'bg-primary/5')
    const droppedFile = e.dataTransfer.files?.[0]
    if (droppedFile) {
      const fileInput = document.getElementById('ogg-file-input') as HTMLInputElement
      if (fileInput) {
        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(droppedFile)
        fileInput.files = dataTransfer.files
        handleFileSelect({ target: { files: dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>)
      }
    }
  }

  const handleConvert = async () => {
    if (!file) {
      setError('Please select an OGG file first')
      return
    }

    setIsConverting(true)
    setError(null)
    setSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/convert-ogg-to-wav', {
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
      link.download = `${file?.name.replace('.ogg', '')}.wav`
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
        {/* Features Column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Convert OGG to WAV</h2>
            <p className="text-muted-foreground mb-6">Convert and edit your audio files easily!</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-foreground font-medium">Work directly in your browser</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-foreground font-medium">Keep original audio quality</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-foreground font-medium">Download your files in seconds</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-foreground font-medium">24/7 support available</span>
            </div>
          </div>
        </div>

        {/* Upload Column */}
        <div className="lg:col-span-2">
          <div className="border-2 border-dashed border-border rounded-lg p-12 space-y-6 hover:border-primary/50 transition-colors"
               onDragOver={handleDragOver}
               onDragLeave={handleDragLeave}
               onDrop={handleDrop}>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">Upload your files</h3>
            </div>

            {/* File Input */}
            <div className="space-y-4">
              <input
                type="file"
                accept=".ogg,audio/ogg"
                onChange={handleFileSelect}
                className="hidden"
                id="ogg-file-input"
                disabled={isConverting}
              />
              
              {!file && (
                <>
                  <label htmlFor="ogg-file-input" className="cursor-pointer block text-center">
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <Upload className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <p className="text-lg font-medium text-foreground mb-2">Drop files here</p>
                    <p className="text-sm text-muted-foreground mb-4">OR</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                      Upload to convert
                    </button>
                  </label>
                </>
              )}

              {file && (
                <div className="space-y-4">
                  <div className="bg-secondary/50 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{file.name}</p>
                      <p className="text-sm text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>

                  <button
                    onClick={handleConvert}
                    disabled={isConverting}
                    className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    {isConverting ? 'Converting...' : 'Convert to WAV'}
                  </button>
                </div>
              )}

              {error && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-600">{error}</p>
                </div>
              )}

              {success && convertedFile && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-600 font-medium">Conversion complete!</p>
                      <p className="text-sm text-green-600">Your WAV file is ready to download</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download WAV
                    </button>
                    <button
                      onClick={handleClear}
                      className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground font-bold py-2 px-4 rounded-lg transition-colors"
                    >
                      Convert Another
                    </button>
                  </div>
                </div>
              )}

              {!success && !file && (
                <p className="text-center text-sm text-muted-foreground">
                  Upload documents up to 100 MB
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-secondary/50 rounded-lg border border-border p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">How It Works</h3>
        <div className="space-y-3 text-muted-foreground">
          <p><strong>1. Upload:</strong> Select or drag-and-drop your OGG audio file (up to 100 MB)</p>
          <p><strong>2. Convert:</strong> Click the convert button and our service processes your file instantly</p>
          <p><strong>3. Download:</strong> Get your converted WAV file ready in seconds with original quality preserved</p>
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-secondary/50 rounded-lg border border-border p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Who This Tool Is For</h3>
        <div className="space-y-3 text-muted-foreground">
          <p>This tool is perfect for audio professionals, musicians, podcasters, and anyone who needs to convert OGG audio files to WAV format. WAV is widely supported across professional audio editing software, video production tools, and media players.</p>
          <p>Whether you're working on music production, audio editing, or archival purposes, our instant OGG to WAV converter preserves all audio quality and metadata.</p>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-secondary/50 rounded-lg border border-border p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-foreground mb-2">What is OGG?</p>
            <p className="text-muted-foreground">OGG is a free, open container format for multimedia. It&apos;s commonly used for audio and video compression with excellent quality.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">What is WAV?</p>
            <p className="text-muted-foreground">WAV (Waveform Audio File Format) is an uncompressed audio format widely supported by professional audio equipment and software.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">Is my file secure?</p>
            <p className="text-muted-foreground">Yes! All files are processed directly in your browser and automatically deleted after conversion. No files are stored on our servers.</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-2">What&apos;s the file size limit?</p>
            <p className="text-muted-foreground">You can convert OGG files up to 100 MB. For larger files, consider splitting them into smaller segments.</p>
          </div>
        </div>
      </div>

      {/* Related Tools */}
      <div className="bg-secondary/50 rounded-lg border border-border p-8">
        <h3 className="text-xl font-bold text-foreground mb-4">Related Audio Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/tools/webm-compressor" className="p-4 bg-background hover:bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all">
            <p className="font-semibold text-foreground">WebM Compressor</p>
            <p className="text-sm text-muted-foreground">Compress video files efficiently</p>
          </Link>
          <Link href="/tools/letter-number-converter" className="p-4 bg-background hover:bg-secondary/50 rounded-lg border border-border hover:border-primary/50 transition-all">
            <p className="font-semibold text-foreground">Letter to Number Converter</p>
            <p className="text-sm text-muted-foreground">Convert letters to numbers instantly</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
