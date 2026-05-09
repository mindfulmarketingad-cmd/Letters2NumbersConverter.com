'use client'

import { useState, useRef } from 'react'
import { Copy, Download, RefreshCw } from 'lucide-react'

export function SteganographyImageDecoder() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>('')
  const [password, setPassword] = useState('')
  const [decodedData, setDecodedData] = useState('')
  const [isDecoding, setIsDecoding] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file')
      return
    }

    setSelectedImage(file)
    setError('')
    setDecodedData('')

    const reader = new FileReader()
    reader.onload = (event) => {
      setImagePreview(event.target?.result as string)
    }
    reader.readAsDataURL(file)
  }

  const decodeImageLSB = async (imageData: Uint8ClampedArray, password: string): Promise<string> => {
    let bits: string[] = []

    // Extract LSBs from image data
    for (let i = 0; i < imageData.length; i += 4) {
      // Skip alpha channel, extract LSB from RGB
      const r = imageData[i] & 1
      const g = imageData[i + 1] & 1
      const b = imageData[i + 2] & 1

      bits.push(r.toString(), g.toString(), b.toString())
    }

    // Convert bits to bytes
    let bytes: number[] = []
    for (let i = 0; i < bits.length; i += 8) {
      const byte = parseInt(bits.slice(i, i + 8).join(''), 2)
      if (byte === 0) break // Stop at null terminator
      bytes.push(byte)
    }

    let text = String.fromCharCode(...bytes)

    // Decrypt if password is provided
    if (password) {
      text = await decryptData(text, password)
    }

    return text
  }

  const decryptData = async (encryptedData: string, password: string): Promise<string> => {
    try {
      // Use SubtleCrypto for AES-GCM decryption
      const encoder = new TextEncoder()
      const decoder = new TextDecoder()

      // Derive key from password
      const passwordBuffer = encoder.encode(password)
      const key = await crypto.subtle.importKey('raw', passwordBuffer, 'PBKDF2', false, [
        'deriveBits',
      ])

      const salt = encoder.encode('steganography')
      const derivedBits = await crypto.subtle.deriveBits(
        {
          name: 'PBKDF2',
          salt,
          iterations: 100000,
          hash: 'SHA-256',
        },
        key,
        256
      )

      const decryptionKey = await crypto.subtle.importKey('raw', derivedBits, 'AES-GCM', false, [
        'decrypt',
      ])

      // Parse IV and ciphertext
      const data = atob(encryptedData)
      const iv = new Uint8Array(12)
      for (let i = 0; i < 12; i++) {
        iv[i] = data.charCodeAt(i)
      }

      const ciphertext = new Uint8Array(data.length - 12)
      for (let i = 0; i < ciphertext.length; i++) {
        ciphertext[i] = data.charCodeAt(i + 12)
      }

      const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, decryptionKey, ciphertext)
      return decoder.decode(decrypted)
    } catch (err) {
      throw new Error('Failed to decrypt: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  const handleDecode = async () => {
    if (!selectedImage || !imagePreview) {
      setError('Please select an image first')
      return
    }

    setIsDecoding(true)
    setError('')

    try {
      const img = new Image()
      img.onload = async () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height

        const ctx = canvas.getContext('2d')
        if (!ctx) throw new Error('Failed to get canvas context')

        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, img.width, img.height)

        try {
          const decoded = await decodeImageLSB(imageData.data, password)
          if (!decoded) {
            setError('No hidden data found in this image')
          } else {
            setDecodedData(decoded)
          }
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Decoding failed')
        } finally {
          setIsDecoding(false)
        }
      }
      img.onerror = () => {
        setError('Failed to load image')
        setIsDecoding(false)
      }
      img.src = imagePreview
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setIsDecoding(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(decodedData)
  }

  const downloadData = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(decodedData))
    element.setAttribute('download', 'decoded_data.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleClear = () => {
    setSelectedImage(null)
    setImagePreview('')
    setPassword('')
    setDecodedData('')
    setError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="space-y-6">
      <div className="bg-secondary/50 rounded-lg p-6 space-y-6">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-semibold mb-2">Select a picture:</label>
          <div
            className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            {imagePreview ? (
              <div className="space-y-2">
                <img src={imagePreview} alt="Selected" className="max-h-48 mx-auto rounded" />
                <p className="text-sm text-muted-foreground">{selectedImage?.name}</p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="font-semibold">Click to upload image</p>
                <p className="text-sm text-muted-foreground">PNG, JPG, GIF, WebP</p>
              </div>
            )}
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-semibold mb-2">Password or leave blank:</label>
          <textarea
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter the password if there is no password, leave it blank."
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            rows={3}
          />
        </div>

        {/* Error Message */}
        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-600 text-sm">{error}</div>}

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleDecode}
            disabled={!selectedImage || isDecoding}
            className="flex-1 px-6 py-2 rounded-lg font-semibold text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: '#11a099' }}
            onMouseEnter={(e) => !isDecoding && (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => !isDecoding && (e.currentTarget.style.opacity = '1')}
          >
            {isDecoding ? 'Decoding...' : 'Decode Image'}
          </button>
          <button
            onClick={handleClear}
            className="px-6 py-2 rounded-lg font-semibold border border-border hover:bg-secondary transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Decoded Data Output */}
      {decodedData && (
        <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold">Decoded Data:</h3>
          <div className="bg-background border border-border rounded-lg p-4">
            <p className="whitespace-pre-wrap break-words text-foreground">{decodedData}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={downloadData}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
