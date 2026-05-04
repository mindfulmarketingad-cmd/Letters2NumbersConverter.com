"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { Upload, FileAudio, X, Download, Play, Pause, Volume2, VolumeX, Lock } from "lucide-react"

export function AudioSpectrogram() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [spectrogramGenerated, setSpectrogramGenerated] = useState(false)
  
  // Settings
  const [minFreq, setMinFreq] = useState("0")
  const [maxFreq, setMaxFreq] = useState("20000")
  const [freqScale, setFreqScale] = useState("linear")
  const [windowSize, setWindowSize] = useState("1024")
  const [xAxisScale, setXAxisScale] = useState(1)

  const audioRef = useRef<HTMLAudioElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)

  const handleFileSelect = useCallback((file: File) => {
    const validTypes = ['audio/wav', 'audio/flac', 'audio/ogg', 'audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/mp3']
    const validExtensions = ['.wav', '.flac', '.ogg', '.mp3', '.m4a']
    
    const hasValidExtension = validExtensions.some(ext => file.name.toLowerCase().endsWith(ext))
    const hasValidType = validTypes.includes(file.type) || file.type.startsWith('audio/')
    
    if (!hasValidType && !hasValidExtension) {
      alert("Please select a valid audio file (WAV, FLAC, OGG, MP3, M4A)")
      return
    }

    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }

    setAudioFile(file)
    setAudioUrl(URL.createObjectURL(file))
    setSpectrogramGenerated(false)
    setCurrentTime(0)
    setIsPlaying(false)
  }, [audioUrl])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleFileSelect(file)
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFileSelect(file)
  }, [handleFileSelect])

  const clearFile = useCallback(() => {
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl)
    }
    setAudioFile(null)
    setAudioUrl(null)
    setSpectrogramGenerated(false)
    setCurrentTime(0)
    setDuration(0)
    setIsPlaying(false)
    
    // Clear canvas
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.fillStyle = '#1a1a2e'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
    }
    
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }, [audioUrl])

  const generateSpectrogram = useCallback(async () => {
    if (!audioFile || !canvasRef.current) return

    setIsAnalyzing(true)

    try {
      const arrayBuffer = await audioFile.arrayBuffer()
      const audioContext = new AudioContext()
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
      
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const fftSize = parseInt(windowSize) * 2
      const channelData = audioBuffer.getChannelData(0)
      const sampleRate = audioBuffer.sampleRate
      
      // Calculate spectrogram dimensions
      const hopSize = fftSize / 4
      const numFrames = Math.floor((channelData.length - fftSize) / hopSize)
      const numBins = fftSize / 2
      
      // Set canvas size based on scale
      canvas.width = Math.min(numFrames * xAxisScale, 2000)
      canvas.height = 300
      
      // Create offline context for analysis
      const offlineContext = new OfflineAudioContext(1, channelData.length, sampleRate)
      const source = offlineContext.createBufferSource()
      source.buffer = audioBuffer
      
      const analyser = offlineContext.createAnalyser()
      analyser.fftSize = fftSize
      analyser.smoothingTimeConstant = 0
      
      source.connect(analyser)
      analyser.connect(offlineContext.destination)
      
      // Clear canvas
      ctx.fillStyle = '#0a0a14'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Process audio in chunks
      const minFreqVal = parseInt(minFreq) || 0
      const maxFreqVal = parseInt(maxFreq) || 20000
      const minBin = Math.floor(minFreqVal * fftSize / sampleRate)
      const maxBin = Math.min(Math.floor(maxFreqVal * fftSize / sampleRate), numBins)
      
      // Create image data
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      
      // Simple FFT-based spectrogram generation
      for (let frame = 0; frame < Math.min(numFrames, canvas.width); frame++) {
        const startSample = frame * hopSize
        const frameData = channelData.slice(startSample, startSample + fftSize)
        
        // Apply Hanning window
        const windowedData = new Float32Array(fftSize)
        for (let i = 0; i < fftSize; i++) {
          const windowValue = 0.5 * (1 - Math.cos(2 * Math.PI * i / (fftSize - 1)))
          windowedData[i] = (frameData[i] || 0) * windowValue
        }
        
        // Simple DFT (for demonstration - real implementation would use FFT)
        const magnitudes = new Float32Array(numBins)
        for (let k = minBin; k < maxBin; k++) {
          let real = 0, imag = 0
          for (let n = 0; n < fftSize; n++) {
            const angle = -2 * Math.PI * k * n / fftSize
            real += windowedData[n] * Math.cos(angle)
            imag += windowedData[n] * Math.sin(angle)
          }
          magnitudes[k] = Math.sqrt(real * real + imag * imag)
        }
        
        // Draw column
        const x = Math.floor(frame * canvas.width / Math.min(numFrames, canvas.width))
        for (let bin = minBin; bin < maxBin; bin++) {
          let y: number
          if (freqScale === 'logarithmic') {
            const logMin = Math.log(minFreqVal + 1)
            const logMax = Math.log(maxFreqVal)
            const freq = bin * sampleRate / fftSize
            const logFreq = Math.log(freq + 1)
            y = canvas.height - Math.floor((logFreq - logMin) / (logMax - logMin) * canvas.height)
          } else {
            y = canvas.height - Math.floor((bin - minBin) / (maxBin - minBin) * canvas.height)
          }
          
          // Normalize and apply color
          const normalizedMagnitude = Math.min(magnitudes[bin] / 50, 1)
          const intensity = Math.pow(normalizedMagnitude, 0.5) // Gamma correction
          
          // Color mapping (dark blue to yellow/white for high intensity)
          const r = Math.floor(intensity * 255)
          const g = Math.floor(intensity * 200)
          const b = Math.floor(50 + (1 - intensity) * 150)
          
          if (y >= 0 && y < canvas.height && x >= 0 && x < canvas.width) {
            const pixelIndex = (y * canvas.width + x) * 4
            imageData.data[pixelIndex] = r
            imageData.data[pixelIndex + 1] = g
            imageData.data[pixelIndex + 2] = b
            imageData.data[pixelIndex + 3] = 255
          }
        }
      }
      
      ctx.putImageData(imageData, 0, 0)
      
      // Add frequency axis labels
      ctx.fillStyle = '#ffffff'
      ctx.font = '10px sans-serif'
      ctx.fillText(`${maxFreqVal} Hz`, 5, 15)
      ctx.fillText(`${minFreqVal} Hz`, 5, canvas.height - 5)
      
      audioContext.close()
      setSpectrogramGenerated(true)
    } catch (error) {
      console.error('Error generating spectrogram:', error)
      alert('Error analyzing audio file. Please try a different file.')
    } finally {
      setIsAnalyzing(false)
    }
  }, [audioFile, minFreq, maxFreq, freqScale, windowSize, xAxisScale])

  const downloadImage = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !spectrogramGenerated) return

    const link = document.createElement('a')
    link.download = `spectrogram-${audioFile?.name || 'audio'}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }, [spectrogramGenerated, audioFile])

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }, [isMuted])

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }, [])

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl)
      }
    }
  }, [audioUrl])

  return (
    <div className="space-y-6">
      {/* Privacy Notice */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="w-4 h-4" />
        <span>Your data stays local. Audio files are processed in your browser.</span>
      </div>

      {/* File Upload */}
      <div className="space-y-3">
        <h3 className="font-medium text-foreground">Load audio file (WAV, FLAC, OGG, MP3, M4A)</h3>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          {audioFile ? (
            <div className="flex items-center justify-center gap-3">
              <FileAudio className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-medium text-foreground">{audioFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(audioFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Upload className="w-10 h-10 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">Paste or drag & drop a file here</p>
              <p className="text-sm text-muted-foreground">Supports audio files</p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".wav,.flac,.ogg,.mp3,.m4a,audio/*"
          onChange={handleFileInput}
          className="hidden"
        />
        <div className="flex gap-2">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Select file
          </button>
          <button
            onClick={clearFile}
            disabled={!audioFile}
            className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Minimum frequency (Hz)</label>
          <input
            type="number"
            value={minFreq}
            onChange={(e) => setMinFreq(e.target.value)}
            min="0"
            max="20000"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Maximum frequency (Hz)</label>
          <input
            type="number"
            value={maxFreq}
            onChange={(e) => setMaxFreq(e.target.value)}
            min="0"
            max="48000"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Frequency scale</label>
          <select
            value={freqScale}
            onChange={(e) => setFreqScale(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="linear">Linear</option>
            <option value="logarithmic">Logarithmic</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Window size</label>
          <select
            value={windowSize}
            onChange={(e) => setWindowSize(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground"
          >
            <option value="256">256 samples</option>
            <option value="512">512 samples</option>
            <option value="1024">1024 samples</option>
            <option value="2048">2048 samples</option>
            <option value="4096">4096 samples</option>
          </select>
        </div>
      </div>

      {/* X Axis Scaling */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          X axis scaling ({xAxisScale.toFixed(1)}x)
        </label>
        <input
          type="range"
          min="0.5"
          max="4"
          step="0.1"
          value={xAxisScale}
          onChange={(e) => setXAxisScale(parseFloat(e.target.value))}
          className="w-full accent-primary"
        />
        <p className="text-xs text-muted-foreground">Increase to zoom horizontally.</p>
      </div>

      {/* Update Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={generateSpectrogram}
          disabled={!audioFile || isAnalyzing}
          className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnalyzing ? "Analyzing..." : "Update spectrogram"}
        </button>
        {!audioFile && (
          <p className="text-sm text-muted-foreground">
            Load an audio file (WAV, FLAC, OGG, MP3, M4A) to get started.
          </p>
        )}
      </div>

      {/* Audio Playback */}
      {audioUrl && (
        <div className="space-y-2">
          <h3 className="font-medium text-foreground">Playback</h3>
          <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <span className="text-sm text-muted-foreground w-20">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
            <input
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 accent-primary"
            />
            <button
              onClick={toggleMute}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
          <audio
            ref={audioRef}
            src={audioUrl}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}

      {/* Spectrogram Display */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-foreground">Spectrogram</h3>
          <p className="text-sm text-muted-foreground">High intensity → brighter colors.</p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden bg-[#0a0a14]">
          <div className="overflow-x-auto">
            <canvas
              ref={canvasRef}
              width={800}
              height={300}
              className="min-w-full"
            />
          </div>
          {!spectrogramGenerated && (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Load an audio file (WAV, FLAC, OGG, MP3, M4A) to get started.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadImage}
        disabled={!spectrogramGenerated}
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4" />
        Download image
      </button>
    </div>
  )
}
