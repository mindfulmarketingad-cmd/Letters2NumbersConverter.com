'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Music, X, Activity, Info, RefreshCw } from 'lucide-react'

const SUPPORTED = '.mp3,.wav,.ogg,.flac,.aac,.m4a,.mp4,.aiff,.aif,.webm'

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── BPM detection using autocorrelation on a low-pass energy envelope ─────────

async function detectBPM(file: File, onProgress: (p: number) => void): Promise<{ bpm: number; confidence: number }> {
  const arrayBuffer = await file.arrayBuffer()
  onProgress(20)

  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
  audioCtx.close()
  onProgress(50)

  // Mix down to mono
  const numChannels = audioBuffer.numberOfChannels
  const sampleRate = audioBuffer.sampleRate
  const length = audioBuffer.length
  const mono = new Float32Array(length)
  for (let ch = 0; ch < numChannels; ch++) {
    const data = audioBuffer.getChannelData(ch)
    for (let i = 0; i < length; i++) mono[i] += data[i] / numChannels
  }

  // Downsample to ~200 Hz energy signal (one sample per 5ms window)
  const windowSize = Math.floor(sampleRate / 200)
  const energyLength = Math.floor(length / windowSize)
  const energy = new Float32Array(energyLength)
  for (let i = 0; i < energyLength; i++) {
    let sum = 0
    const base = i * windowSize
    for (let j = 0; j < windowSize && base + j < length; j++) {
      sum += mono[base + j] * mono[base + j]
    }
    energy[i] = Math.sqrt(sum / windowSize)
  }
  onProgress(70)

  // First-order difference (onset strength), half-wave rectified
  const onset = new Float32Array(energyLength)
  for (let i = 1; i < energyLength; i++) {
    onset[i] = Math.max(0, energy[i] - energy[i - 1])
  }

  // Autocorrelation on first 30s of onset signal
  const energyRate = 200 // samples per second
  const analyzeLength = Math.min(onset.length, energyRate * 30)
  const minLag = Math.floor(energyRate * 60 / 200) // 200 BPM
  const maxLag = Math.floor(energyRate * 60 / 50)  // 50 BPM

  const autocorr = new Float32Array(maxLag + 1)
  for (let lag = minLag; lag <= maxLag; lag++) {
    let sum = 0
    for (let i = 0; i < analyzeLength - lag; i++) {
      sum += onset[i] * onset[i + lag]
    }
    autocorr[lag] = sum / (analyzeLength - lag)
  }
  onProgress(90)

  // Find peak lag
  let bestLag = minLag
  let bestVal = autocorr[minLag]
  for (let lag = minLag; lag <= maxLag; lag++) {
    if (autocorr[lag] > bestVal) {
      bestVal = autocorr[lag]
      bestLag = lag
    }
  }

  // Parabolic interpolation for sub-sample precision
  let refinedLag = bestLag
  if (bestLag > minLag && bestLag < maxLag) {
    const y1 = autocorr[bestLag - 1]
    const y2 = autocorr[bestLag]
    const y3 = autocorr[bestLag + 1]
    const delta = (y3 - y1) / (2 * (2 * y2 - y1 - y3))
    refinedLag = bestLag + delta
  }

  const bpm = Math.round((energyRate * 60) / refinedLag * 10) / 10

  // Confidence: ratio of peak to mean of autocorr range
  let mean = 0
  for (let lag = minLag; lag <= maxLag; lag++) mean += autocorr[lag]
  mean /= (maxLag - minLag + 1)
  const confidence = Math.min(100, Math.round((bestVal / (mean + 1e-10) - 1) * 20))

  onProgress(100)
  return { bpm, confidence }
}

// ── Component ─────────────────────────────────────────────────────────────────

type Result = { bpm: number; confidence: number; half: number; double: number }

export function GetSongBPM() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    setFile(f)
    setResult(null)
    setError(null)
    setProgress(0)
  }, [])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const handleClear = () => {
    setFile(null)
    setResult(null)
    setError(null)
    setProgress(0)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDetect = async () => {
    if (!file) return
    setLoading(true)
    setError(null)
    setResult(null)
    setProgress(0)
    try {
      const { bpm, confidence } = await detectBPM(file, setProgress)
      // Snap to nearest 0.5 BPM
      const snapped = Math.round(bpm * 2) / 2
      setResult({ bpm: snapped, confidence, half: Math.round(snapped / 2 * 10) / 10, double: snapped * 2 })
    } catch (err: any) {
      setError(err?.message ?? 'Could not analyse this audio file.')
    } finally {
      setLoading(false)
    }
  }

  const confColor = (c: number) => c >= 60 ? 'text-green-600' : c >= 30 ? 'text-orange-500' : 'text-red-500'
  const confLabel = (c: number) => c >= 60 ? 'High' : c >= 30 ? 'Medium' : 'Low'

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Load panel ────────────────────── */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Your data stays local.
            </span>
          </div>

          <div>
            <h2 className="text-sm font-bold text-foreground mb-2">
              Load audio file <span className="font-normal text-muted-foreground">(MP3, WAV, FLAC, M4A, OGG…)</span>
            </h2>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-secondary/30'
              }`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">Drag & drop an audio file here</p>
              <p className="text-xs text-muted-foreground mt-1">Supports MP3, WAV, FLAC, M4A, OGG, AIFF, WebM</p>
              <input ref={fileInputRef} type="file" accept={SUPPORTED} onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }} className="hidden" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600/10 text-sm font-medium transition-colors">
              <Music className="w-4 h-4" /> Select file
            </button>
            <button onClick={handleClear} disabled={!file} className="flex items-center gap-2 px-3 py-2 rounded border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
              <X className="w-4 h-4" /> Clear
            </button>
          </div>

          {file && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm">
              <Music className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="truncate text-foreground font-medium">{file.name}</span>
              <span className="text-muted-foreground ml-auto flex-shrink-0">{formatFileSize(file.size)}</span>
            </div>
          )}

          <button onClick={handleDetect} disabled={!file || loading} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Activity className="w-4 h-4" />
            {loading ? 'Analysing…' : 'Detect BPM'}
          </button>

          {loading && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Analysing audio…</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-green-600 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">{error}</div>
          )}

          <p className="text-xs text-muted-foreground">
            BPM is estimated from the audio's rhythmic onset pattern. Best results on songs with a clear kick drum.
          </p>
        </div>

        {/* ── Right: Results panel ─────────────────── */}
        <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">BPM Result</span>
          </div>

          {!result && !loading && (
            <div className="flex-1 flex items-start p-4">
              <p className="text-sm text-muted-foreground">Load an audio file and click "Detect BPM".</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <Activity className="w-8 h-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">Running autocorrelation analysis…</p>
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="flex-1 p-6 flex flex-col gap-6">
              {/* Big BPM number */}
              <div className="text-center py-6 rounded-xl bg-secondary/40 border border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Detected Tempo</p>
                <p className="text-7xl font-black text-foreground tracking-tight">{result.bpm}</p>
                <p className="text-xl font-semibold text-muted-foreground mt-1">BPM</p>
              </div>

              {/* Confidence */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Confidence</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full bg-green-600 transition-all" style={{ width: `${Math.max(5, result.confidence)}%` }} />
                  </div>
                  <span className={`text-sm font-bold ${confColor(result.confidence)}`}>{confLabel(result.confidence)}</span>
                </div>
              </div>

              {/* Variations */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tempo Variations</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-secondary/30 p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Half time</p>
                    <p className="text-2xl font-bold text-foreground">{result.half}</p>
                    <p className="text-xs text-muted-foreground">BPM</p>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/30 p-3 text-center">
                    <p className="text-xs text-muted-foreground mb-1">Double time</p>
                    <p className="text-2xl font-bold text-foreground">{result.double}</p>
                    <p className="text-xs text-muted-foreground">BPM</p>
                  </div>
                </div>
              </div>

              {/* Tempo feel */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tempo Feel</p>
                <p className="text-sm text-foreground">
                  {result.bpm < 60 ? 'Larghetto — very slow' :
                   result.bpm < 66 ? 'Largo — broad and slow' :
                   result.bpm < 76 ? 'Adagio — slow and stately' :
                   result.bpm < 108 ? 'Andante — walking pace' :
                   result.bpm < 120 ? 'Moderato — moderate' :
                   result.bpm < 156 ? 'Allegro — fast and lively' :
                   result.bpm < 176 ? 'Vivace — very fast' :
                   'Presto — extremely fast'}
                </p>
              </div>

              <button onClick={handleDetect} className="flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <RefreshCw className="w-3.5 h-3.5" /> Re-analyse
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
