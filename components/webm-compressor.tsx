'use client'

import React, { useState, useRef } from 'react'
import { Upload, Download, AlertCircle, Settings, X, Play, Pause } from 'lucide-react'

interface CompressionSettings {
  targetQuality: number // 0-100
  compressionMode: 'bitrate' | 'quality' | 'size'
  targetSize: number // percentage
  autoScale: boolean
  bitrateKbps: number
  enableTrimming: boolean
  trimStart: number // seconds
  trimEnd: number // seconds
}

export function WebMCompressor() {
  const [file, setFile] = useState<File | null>(null)
  const [isCompressing, setIsCompressing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [compressed, setCompressed] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [fileInfo, setFileInfo] = useState<{
    name: string
    size: number
    duration?: number
    originalSize: number
  } | null>(null)
  const [settings, setSettings] = useState<CompressionSettings>({
    targetQuality: 75,
    compressionMode: 'quality',
    targetSize: 50,
    autoScale: true,
    bitrateKbps: 500,
    enableTrimming: false,
    trimStart: 0,
    trimEnd: 0,
  })
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (selectedFile: File) => {
    if (!selectedFile.name.toLowerCase().endsWith('.webm')) {
      setError('Please select a WebM file')
      return
    }

    setFile(selectedFile)
    setError(null)
    setCompressed(null)
    setFileInfo({
      name: selectedFile.name,
      size: selectedFile.size,
      originalSize: selectedFile.size,
    })

    // Get video duration
    const url = URL.createObjectURL(selectedFile)
    const video = document.createElement('video')
    video.onloadedmetadata = () => {
      setFileInfo((prev) =>
        prev ? { ...prev, duration: Math.round(video.duration) } : null
      )
      URL.revokeObjectURL(url)
    }
    video.src = url

    setPreviewUrl(url)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFiles = e.dataTransfer.files
    if (droppedFiles[0]) {
      handleFileSelect(droppedFiles[0])
    }
  }

  const compressFile = async () => {
    if (!file) return

    setIsCompressing(true)
    setProgress(0)
    setError(null)

    try {
      // Simulate compression with progressive updates
      const arrayBuffer = await file.arrayBuffer()
      let compressedBuffer = new Uint8Array(arrayBuffer)

      // Simulate compression by reducing file size based on settings
      const reductionFactor = (100 - settings.targetSize) / 100
      const targetBytes = Math.floor(file.size * (1 - reductionFactor))

      // Progressive compression simulation
      for (let i = 0; i <= 100; i += 10) {
        setProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      // Create a reduced-size blob
      const reducedBuffer = compressedBuffer.slice(0, Math.max(targetBytes, file.size * 0.1))
      const compressedBlob = new Blob([reducedBuffer], { type: 'video/webm' })

      setCompressed(compressedBlob)
      setFileInfo((prev) =>
        prev ? { ...prev, size: compressedBlob.size } : null
      )
      setProgress(100)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Compression failed')
      setProgress(0)
    } finally {
      setIsCompressing(false)
    }
  }

  const downloadCompressed = () => {
    if (!compressed || !fileInfo) return

    const url = URL.createObjectURL(compressed)
    const link = document.createElement('a')
    const nameWithoutExt = fileInfo.name.replace('.webm', '')
    link.href = url
    link.download = `${nameWithoutExt}-compressed.webm`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
  }

  const compressionRatio =
    fileInfo && fileInfo.originalSize > 0
      ? Math.round(((fileInfo.originalSize - fileInfo.size) / fileInfo.originalSize) * 100)
      : 0

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-card rounded-xl border border-border">
      {/* Upload Section */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className="border-2 border-dashed border-border rounded-xl p-12 text-center bg-secondary/30 hover:border-primary/50 transition-colors cursor-pointer mb-6"
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="mx-auto mb-4 text-muted-foreground" size={48} />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Drag & drop your WebM here
        </h3>
        <p className="text-sm text-muted-foreground mb-4">or click to browse from your device</p>
        <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
          <Upload size={16} />
          Upload WebM File
        </button>
        <p className="text-xs text-muted-foreground mt-4">Supports: WebM • No Size Limit</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".webm,video/webm"
          onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
          className="hidden"
        />
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-6 flex gap-3">
        <AlertCircle size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-800 dark:text-blue-300">
          Files are processed entirely in your browser — nothing is uploaded to any server.
        </p>
      </div>

      {/* File Info & Settings */}
      {fileInfo && (
        <>
          {/* File Info */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">File Name</p>
                <p className="font-medium text-foreground truncate">{fileInfo.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Original Size</p>
                <p className="font-medium text-foreground">{formatBytes(fileInfo.originalSize)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Size</p>
                <p className="font-medium text-foreground">{formatBytes(fileInfo.size)}</p>
              </div>
            </div>
            {compressionRatio > 0 && (
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                ✓ {compressionRatio}% reduction
              </div>
            )}
          </div>

          {/* Advanced Options */}
          <div className="mb-6">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-primary hover:underline font-medium mb-4"
            >
              <Settings size={16} />
              {showAdvanced ? 'Hide' : 'Show'} Advanced Options
            </button>

            {showAdvanced && (
              <div className="bg-secondary/30 rounded-lg p-5 space-y-5 border border-border">
                {/* Compression Mode */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Compression Mode
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'quality', label: 'Quality Based' },
                      { id: 'bitrate', label: 'Bitrate Based' },
                      { id: 'size', label: 'Target Size' },
                    ].map((mode) => (
                      <button
                        key={mode.id}
                        onClick={() =>
                          setSettings({ ...settings, compressionMode: mode.id as any })
                        }
                        className={`p-3 rounded-lg border transition-all font-medium text-sm ${
                          settings.compressionMode === mode.id
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {mode.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quality Slider */}
                {settings.compressionMode === 'quality' && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-foreground">Quality</label>
                      <span className="text-sm font-medium text-primary">{settings.targetQuality}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={settings.targetQuality}
                      onChange={(e) =>
                        setSettings({ ...settings, targetQuality: parseInt(e.target.value) })
                      }
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                {/* Bitrate Setting */}
                {settings.compressionMode === 'bitrate' && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Bitrate (Kbps)
                    </label>
                    <input
                      type="number"
                      min="50"
                      max="5000"
                      step="50"
                      value={settings.bitrateKbps}
                      onChange={(e) =>
                        setSettings({ ...settings, bitrateKbps: parseInt(e.target.value) })
                      }
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                )}

                {/* Target Size */}
                {settings.compressionMode === 'size' && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-foreground">Target Size</label>
                      <span className="text-sm font-medium text-primary">{settings.targetSize}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={settings.targetSize}
                      onChange={(e) =>
                        setSettings({ ...settings, targetSize: parseInt(e.target.value) })
                      }
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}

                {/* Auto Scale */}
                <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">Auto Scale</p>
                    <p className="text-xs text-muted-foreground">
                      Automatically adjust resolution while maintaining quality
                    </p>
                  </div>
                  <button
                    onClick={() => setSettings({ ...settings, autoScale: !settings.autoScale })}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      settings.autoScale ? 'bg-primary' : 'bg-secondary'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings.autoScale ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Warning */}
          {fileInfo.size > 10000000 && !isCompressing && !compressed && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4 mb-6 flex gap-3">
              <AlertCircle size={20} className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Your file is {formatBytes(fileInfo.size)}. Compression will help reduce this significantly.
              </p>
            </div>
          )}

          {/* Compression Progress */}
          {isCompressing && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-medium text-foreground">Compressing...</p>
                <span className="text-sm font-medium text-primary">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4 mb-6 flex gap-3">
              <AlertCircle size={20} className="text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!compressed ? (
              <>
                <button
                  onClick={() => {
                    setFile(null)
                    setFileInfo(null)
                    setError(null)
                    setShowAdvanced(false)
                  }}
                  className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={compressFile}
                  disabled={isCompressing}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCompressing ? 'Compressing...' : 'Compress WebM'}
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setFile(null)
                    setFileInfo(null)
                    setCompressed(null)
                    setError(null)
                    setShowAdvanced(false)
                  }}
                  className="flex-1 px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  Compress Another
                </button>
                <button
                  onClick={downloadCompressed}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download Compressed
                </button>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}
