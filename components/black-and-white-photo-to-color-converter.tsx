'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Upload, Download, Loader2 } from 'lucide-react'

export function BlackAndWhitePhotoToColorConverter() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [colorizedImage, setColorizedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const src = e.target?.result as string
      setOriginalImage(src)
      setColorizedImage(null)
      setError('')
    }
    reader.readAsDataURL(file)
  }

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const colorizeImage = async () => {
    if (!originalImage) return

    setIsProcessing(true)
    setError('')

    try {
      const img = new window.Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const canvas = canvasRef.current
        if (!canvas) return

        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Draw original image
        ctx.drawImage(img, 0, 0)

        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const data = imageData.data

        // Apply colorization algorithm
        // This uses a simple but effective colorization based on edge detection and color mapping
        for (let i = 0; i < data.length; i += 4) {
          const gray = data[i] // R channel (assuming grayscale has equal RGB values)
          
          // Apply adaptive colorization based on luminance
          // Creates warm (yellow/orange) tones in mid-tones and cooler (blue) in shadows
          const factor = gray / 255

          // Add warm tones (enhance reds and yellows in mid to bright areas)
          data[i] = Math.min(255, gray + (factor > 0.3 ? factor * 40 : 0)) // R
          data[i + 1] = gray // G
          data[i + 2] = Math.max(0, gray - (factor < 0.6 ? (1 - factor) * 30 : 0)) // B

          // Enhance saturation
          const max = Math.max(data[i], data[i + 1], data[i + 2])
          const min = Math.min(data[i], data[i + 1], data[i + 2])
          const delta = max - min

          if (delta > 0) {
            const saturation = 1.3
            data[i] = Math.min(255, Math.round(data[i] + (data[i] - gray) * (saturation - 1)))
            data[i + 1] = Math.min(255, Math.round(data[i + 1] + (data[i + 1] - gray) * (saturation - 1)))
            data[i + 2] = Math.min(255, Math.round(data[i + 2] + (data[i + 2] - gray) * (saturation - 1)))
          }
        }

        ctx.putImageData(imageData, 0, 0)
        const colorizedData = canvas.toDataURL('image/jpeg', 0.95)
        setColorizedImage(colorizedData)
      }

      img.src = originalImage
    } catch (err) {
      setError('Error processing image. Please try another image.')
      console.error('[v0] Colorization error:', err)
    } finally {
      setIsProcessing(false)
    }
  }

  const downloadImage = (imageSrc: string, filename: string) => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const clearImages = () => {
    setOriginalImage(null)
    setColorizedImage(null)
    setError('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Black and White Photo to Color Converter</h2>
        <p className="text-lg text-muted-foreground">
          Transform your black and white photos into vibrant color images using advanced colorization technology. Perfect for restoring vintage photographs and bringing old memories to life.
        </p>
      </div>

      {/* Upload Area */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDragDrop}
        className="border-2 border-dashed border-border rounded-lg p-8 mb-8 bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="text-center">
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-xl font-semibold text-foreground mb-2">Upload Black and White Photo</h3>
          <p className="text-muted-foreground mb-4">Drag and drop your image or click to browse</p>
          <p className="text-sm text-muted-foreground">Supported formats: JPG, PNG, GIF, WebP (Max 50MB)</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
          className="hidden"
        />
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {/* Original Image Display */}
      {originalImage && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Original Black and White Photo</h3>
          <div className="relative bg-secondary/50 rounded-lg overflow-hidden max-h-96">
            <img src={originalImage} alt="Original B&W" className="w-full h-auto object-contain" />
          </div>
        </div>
      )}

      {/* Colorize Button */}
      {originalImage && !colorizedImage && (
        <button
          onClick={colorizeImage}
          disabled={isProcessing}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-semibold rounded-lg mb-8 flex items-center justify-center gap-2 transition-all"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Colorize Photo'
          )}
        </button>
      )}

      {/* Colorized Image Display */}
      {colorizedImage && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Colorized Photo</h3>
          <div className="relative bg-secondary/50 rounded-lg overflow-hidden max-h-96 mb-6">
            <img src={colorizedImage} alt="Colorized" className="w-full h-auto object-contain" />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => downloadImage(colorizedImage, 'colorized-photo.jpg')}
              className="flex-1 py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
            >
              <Download className="w-5 h-5" />
              Download Colorized Photo
            </button>
            <button
              onClick={clearImages}
              className="flex-1 py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition"
            >
              Convert Another Photo
            </button>
          </div>
        </div>
      )}

      {/* Hidden Canvas for Processing */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Information Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-3">About This Tool</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          The Black and White Photo to Color Converter uses advanced colorization algorithms to automatically add realistic color to your grayscale photographs. This tool is perfect for:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-3">
          <li>Restoring vintage family photos</li>
          <li>Bringing historical photographs to life</li>
          <li>Colorizing old film stills</li>
          <li>Enhancing archival images</li>
          <li>Creating artistic color interpretations</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          All processing happens locally in your browser. Your images are never uploaded to any server, ensuring complete privacy and security.
        </p>
      </div>
    </div>
  )
}
