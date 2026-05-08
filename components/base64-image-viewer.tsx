'use client'

import { useState } from 'react'
import { Copy, Download, Trash2 } from 'lucide-react'

export function Base64ImageViewer() {
  const [base64Input, setBase64Input] = useState('')
  const [imageError, setImageError] = useState('')
  const [copied, setCopied] = useState('')

  // Handle the base64 string - support both with and without data URI prefix
  const getImageSrc = (): string => {
    if (!base64Input.trim()) return ''
    
    const cleanInput = base64Input.trim()
    
    // Check if it already has a data URI prefix
    if (cleanInput.startsWith('data:')) {
      return cleanInput
    }
    
    // Try to detect the image type from the base64 string or use a generic prefix
    return `data:image/png;base64,${cleanInput}`
  }

  const imageSrc = getImageSrc()

  const handleImageError = () => {
    setImageError('Invalid base64 string. Please check your input and try again.')
  }

  const handleImageLoad = () => {
    setImageError('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(base64Input)
    setCopied('base64')
    setTimeout(() => setCopied(''), 2000)
  }

  const handleDownload = () => {
    if (!imageSrc) return
    
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = 'image.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleClear = () => {
    setBase64Input('')
    setImageError('')
  }

  const getBase64Size = (): string => {
    if (!base64Input) return '0 B'
    const bytes = base64Input.length
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
    } else if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`
    }
    return `${bytes} B`
  }

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Base64 Input */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">Base64 Image String</h3>
            <textarea
              value={base64Input}
              onChange={e => {
                setBase64Input(e.target.value)
                if (e.target.value) setImageError('')
              }}
              placeholder="Paste your base64 image string here (with or without 'data:image/...' prefix)..."
              className="w-full h-48 px-4 py-3 border border-border rounded-lg bg-background font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              spellCheck="false"
            />
          </div>

          {/* Input Stats */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{base64Input.length} characters</span>
            <span>{getBase64Size()}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              disabled={!base64Input}
              className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={handleDownload}
              disabled={!imageSrc || imageError}
              className="flex-1 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={handleClear}
              disabled={!base64Input}
              className="flex-1 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          </div>

          {/* Tips */}
          <div className="bg-card border border-border rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold">Tips:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Paste base64 strings with or without the <code className="bg-background px-1.5 py-0.5 rounded text-xs">data:image/...</code> prefix</li>
              <li>• Supports PNG, JPEG, GIF, SVG, WebP and more</li>
              <li>• Works completely offline</li>
              <li>• Max size depends on your browser</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Image Display */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold">Image</h3>
          
          {/* Image Display Area */}
          <div className="border border-border rounded-lg bg-background p-4 min-h-96 flex items-center justify-center overflow-auto">
            {imageError ? (
              <div className="text-center text-red-500 space-y-2">
                <p className="text-sm font-semibold">Error: Invalid Base64</p>
                <p className="text-xs">{imageError}</p>
              </div>
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt="Decoded base64 image"
                onError={handleImageError}
                onLoad={handleImageLoad}
                className="max-w-full max-h-96 object-contain rounded"
                style={{ maxHeight: '400px' }}
              />
            ) : (
              <div className="text-center text-muted-foreground">
                <p className="text-sm">Paste a base64 image string to preview</p>
              </div>
            )}
          </div>

          {/* Image Info */}
          {imageSrc && !imageError && (
            <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Base64 Size:</span>
                <span className="font-semibold">{getBase64Size()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Format:</span>
                <span className="font-semibold">{base64Input.includes('jpeg') ? 'JPEG' : base64Input.includes('gif') ? 'GIF' : base64Input.includes('svg') ? 'SVG' : base64Input.includes('webp') ? 'WebP' : 'PNG'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
