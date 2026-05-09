'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Upload, Download, RotateCcw } from 'lucide-react'

export function GrayscaleImageConverter() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [grayscaleImage, setGrayscaleImage] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const convertToGrayscale = (imageDataUrl: string) => {
    const img = new (typeof window !== 'undefined' ? window.Image : Image)()
    img.onload = () => {
      const canvas = canvasRef.current
      if (!canvas) return

      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, img.width, img.height)
      const data = imageData.data

      // Convert to grayscale using luminosity method
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]

        // Luminosity formula: 0.299*R + 0.587*G + 0.114*B
        const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b)

        data[i] = gray
        data[i + 1] = gray
        data[i + 2] = gray
      }

      ctx.putImageData(imageData, 0, 0)
      setGrayscaleImage(canvas.toDataURL('image/png'))
      setIsProcessing(false)
    }
    img.src = imageDataUrl
  }

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const imageDataUrl = e.target?.result as string
      setOriginalImage(imageDataUrl)
      setFileName(file.name)
      setIsProcessing(true)
      setTimeout(() => convertToGrayscale(imageDataUrl), 100)
    }
    reader.readAsDataURL(file)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
  }

  const downloadImage = () => {
    if (!grayscaleImage) return
    const link = document.createElement('a')
    link.href = grayscaleImage
    link.download = `grayscale-${fileName || 'image.png'}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const reset = () => {
    setOriginalImage(null)
    setGrayscaleImage(null)
    setFileName('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Grayscale Image Online</h2>
        <p className="text-lg text-muted-foreground">
          Scan Words From Image and convert any image to grayscale instantly. Our online tool transforms colored images to black and white with just one click. Perfect for web design, professional photography, creative projects, and document processing.
        </p>
      </div>

      {/* Upload Section */}
      {!originalImage ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDragDrop}
          className="border-2 border-dashed border-border rounded-lg p-12 text-center bg-secondary/50 mb-8 cursor-pointer hover:border-primary transition-colors"
        >
          <Upload className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-black dark:text-white mb-2">Drop Your Image Here</h3>
          <p className="text-muted-foreground mb-4">or click to browse</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
            >
              Browse Files
            </button>
          </label>
          <p className="text-xs text-muted-foreground mt-4">
            Supported formats: JPG, PNG, GIF, WebP, BMP, TIFF
          </p>
        </div>
      ) : (
        <>
          {/* Preview Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Original Image */}
            <div className="bg-secondary/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-black dark:text-white mb-3">Original Image</h3>
              <div className="relative w-full aspect-video bg-background rounded-lg overflow-hidden flex items-center justify-center">
                {originalImage && (
                  <img
                    src={originalImage}
                    alt="Original image"
                    className="max-w-full max-h-full object-contain"
                  />
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-2">{fileName}</p>
            </div>

            {/* Grayscale Image */}
            <div className="bg-secondary/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-black dark:text-white mb-3">Grayscale Result</h3>
              <div className="relative w-full aspect-video bg-background rounded-lg overflow-hidden flex items-center justify-center">
                {isProcessing ? (
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Converting...</p>
                  </div>
                ) : grayscaleImage ? (
                  <img
                    src={grayscaleImage}
                    alt="Grayscale image"
                    className="max-w-full max-h-full object-contain"
                  />
                ) : null}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-8 justify-center flex-wrap">
            {grayscaleImage && (
              <button
                onClick={downloadImage}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Grayscale Image
              </button>
            )}
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Convert Another Image
            </button>
          </div>
        </>
      )}

      {/* Hidden Canvas for Processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Info Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">About Grayscale Image Conversion</h3>
        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-3">
          <p>
            <strong>What it does:</strong> Convert any colored image to grayscale (black and white) instantly using advanced image processing technology.
          </p>
          <p>
            <strong>Who it&apos;s for:</strong> Web designers, photographers, graphic designers, archivists, students, and professionals who need to convert images to grayscale for presentations, websites, or creative projects.
          </p>
          <p>
            <strong>How it works:</strong> Our tool uses the luminosity method to convert RGB color values to grayscale, preserving the relative brightness of colors for optimal visual quality. The conversion happens entirely in your browser, ensuring your images remain private.
          </p>
          <div className="mt-4">
            <strong className="block mb-2">Benefits:</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>Fast, instant conversion with no quality loss</li>
              <li>Works with all common image formats</li>
              <li>100% privacy - processing happens locally</li>
              <li>No file size limitations</li>
              <li>Free and easy to use</li>
              <li>Professional-quality grayscale output</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
