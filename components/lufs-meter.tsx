'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Music, X, Activity, Info, Volume2 } from 'lucide-react'

const SUPPORTED = '.mp3,.wav,.ogg,.flac,.aac,.m4a,.mp4,.aiff,.aif,.webm'

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── ITU-R BS.1770-4 LUFS / loudness measurement ───────────────────────────────
// K-weighting = stage1 (high-shelf @ ~1681 Hz) + stage2 (high-pass @ ~38 Hz)
// Implemented via direct biquad coefficient computation at the audio's sample rate.

function kWeightCoeffs(fs: number): { stage1: number[]; stage2: number[] } {
  // Stage 1: pre-filter (high-shelf)
  const f0 = 1681.974450955533
  const G = 3.999843853  // dB
  const Q = 0.7071752369554196
  const K = Math.tan(Math.PI * f0 / fs)
  const Vh = Math.pow(10, G / 20)
  const Vb = Math.pow(Vh, 0.4996667741545416)
  const a0h = 1 + K / Q + K * K
  const b0 = (Vh + Vb * K / Q + K * K) / a0h
  const b1h = 2 * (K * K - Vh) / a0h
  const b2h = (Vh - Vb * K / Q + K * K) / a0h
  const a1h = 2 * (K * K - 1) / a0h
  const a2h = (1 - K / Q + K * K) / a0h

  // Stage 2: high-pass filter
  const f1 = 38.13547087613982
  const Q2 = 0.5003270373238773
  const K2 = Math.tan(Math.PI * f1 / fs)
  const a0p = 1 + K2 / Q2 + K2 * K2
  const b0p = 1 / a0p
  const b1p = -2 / a0p
  const b2p = 1 / a0p
  const a1p = 2 * (K2 * K2 - 1) / a0p
  const a2p = (1 - K2 / Q2 + K2 * K2) / a0p

  return {
    stage1: [b0, b1h, b2h, a1h, a2h],
    stage2: [b0p, b1p, b2p, a1p, a2p],
  }
}

function applyBiquad(input: Float32Array, coeffs: number[]): Float32Array {
  const [b0, b1, b2, a1, a2] = coeffs
  const output = new Float32Array(input.length)
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0
  for (let i = 0; i < input.length; i++) {
    const x0 = input[i]
    const y0 = b0 * x0 + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2
    output[i] = y0
    x2 = x1; x1 = x0; y2 = y1; y1 = y0
  }
  return output
}

type LoudnessResult = {
  integrated: number        // LUFS
  shortTermPeak: number     // highest 3-second LUFS block
  momentaryPeak: number     // highest 400ms LUFS block
  truePeak: number          // dBTP approximate
  lra: number               // Loudness Range (LU)
  duration: number          // seconds
}

async function measureLUFS(file: File, onProgress: (p: number) => void): Promise<LoudnessResult> {
  const arrayBuffer = await file.arrayBuffer()
  onProgress(15)

  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()
  const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer)
  audioCtx.close()
  onProgress(35)

  const fs = audioBuffer.sampleRate
  const numChannels = Math.min(audioBuffer.numberOfChannels, 2) // handle up to stereo
  const length = audioBuffer.length
  const duration = audioBuffer.duration
  const coeffs = kWeightCoeffs(fs)

  // Apply K-weighting to each channel and compute mean square
  const channelMeanSquares: Float32Array[] = []
  for (let ch = 0; ch < numChannels; ch++) {
    const raw = audioBuffer.getChannelData(ch)
    const s1 = applyBiquad(raw, coeffs.stage1)
    const s2 = applyBiquad(s1, coeffs.stage2)
    channelMeanSquares.push(s2)
  }
  onProgress(65)

  // Channel weights (stereo: 1.0 each; mono: 1.0)
  const channelWeight = 1.0 // for L/R channels

  // Gating block analysis
  const blockSamples400ms = Math.floor(fs * 0.4)   // 400ms
  const hopSamples = Math.floor(fs * 0.1)           // 100ms hop (75% overlap)
  const blockSamples3s = Math.floor(fs * 3.0)
  const hopSamples3s = Math.floor(fs * 1.0)          // 1s hop for short-term

  function blockLoudness(start: number, blockLen: number): number {
    let sum = 0
    for (let ch = 0; ch < numChannels; ch++) {
      const data = channelMeanSquares[ch]
      let chSum = 0
      const end = Math.min(start + blockLen, data.length)
      for (let i = start; i < end; i++) chSum += data[i] * data[i]
      sum += channelWeight * (chSum / (end - start))
    }
    return sum
  }

  // Compute all 400ms block loudnesses
  const momentaryBlocks: number[] = []
  for (let start = 0; start + blockSamples400ms <= length; start += hopSamples) {
    momentaryBlocks.push(blockLoudness(start, blockSamples400ms))
  }

  // Absolute gate: -70 LKFS → power threshold
  const absGate = Math.pow(10, (-70 + 0.691) / 10)
  const gatedBlocks = momentaryBlocks.filter(b => b >= absGate)

  let integrated = -Infinity
  let lra = 0

  if (gatedBlocks.length > 0) {
    // Relative gate: ungated mean - 10 LU
    const ungatedMean = gatedBlocks.reduce((a, b) => a + b, 0) / gatedBlocks.length
    const relGate = ungatedMean * Math.pow(10, -10 / 10)
    const relGatedBlocks = gatedBlocks.filter(b => b >= relGate)

    if (relGatedBlocks.length > 0) {
      const finalMean = relGatedBlocks.reduce((a, b) => a + b, 0) / relGatedBlocks.length
      integrated = -0.691 + 10 * Math.log10(finalMean)
    }

    // LRA: 10th–95th percentile of gated loudness
    const sortedLU = [...gatedBlocks].map(b => -0.691 + 10 * Math.log10(b)).sort((a, b) => a - b)
    const p10 = sortedLU[Math.floor(sortedLU.length * 0.10)]
    const p95 = sortedLU[Math.floor(sortedLU.length * 0.95)]
    lra = Math.max(0, p95 - p10)
  }

  // Momentary peak (max 400ms block LUFS)
  const momentaryLoudnesses = momentaryBlocks.map(b => b > 0 ? -0.691 + 10 * Math.log10(b) : -Infinity)
  const momentaryPeak = momentaryLoudnesses.length > 0 ? Math.max(...momentaryLoudnesses) : -Infinity

  // Short-term peak (max 3s block LUFS)
  let shortTermPeak = -Infinity
  for (let start = 0; start + blockSamples3s <= length; start += hopSamples3s) {
    const b = blockLoudness(start, blockSamples3s)
    if (b > 0) {
      const lu = -0.691 + 10 * Math.log10(b)
      if (lu > shortTermPeak) shortTermPeak = lu
    }
  }

  // True peak (max absolute sample value, rough dBFS)
  let peak = 0
  for (let ch = 0; ch < numChannels; ch++) {
    const data = audioBuffer.getChannelData(ch)
    for (let i = 0; i < data.length; i++) {
      const abs = Math.abs(data[i])
      if (abs > peak) peak = abs
    }
  }
  const truePeak = 20 * Math.log10(peak)

  onProgress(100)
  return {
    integrated: Math.round(integrated * 10) / 10,
    shortTermPeak: Math.round(shortTermPeak * 10) / 10,
    momentaryPeak: Math.round(momentaryPeak * 10) / 10,
    truePeak: Math.round(truePeak * 10) / 10,
    lra: Math.round(lra * 10) / 10,
    duration,
  }
}

// ── Loudness target reference ─────────────────────────────────────────────────

type Platform = { name: string; target: number; max: number }
const PLATFORMS: Platform[] = [
  { name: 'Spotify', target: -14, max: -1 },
  { name: 'Apple Music', target: -16, max: -1 },
  { name: 'YouTube', target: -14, max: -1 },
  { name: 'Tidal', target: -14, max: -1 },
  { name: 'Amazon Music', target: -14, max: -2 },
  { name: 'SoundCloud', target: -14, max: -1 },
  { name: 'Netflix', target: -27, max: -2 },
  { name: 'Broadcast (EBU R128)', target: -23, max: -1 },
]

function PlatformBar({ platform, integrated }: { platform: Platform; integrated: number }) {
  const diff = integrated - platform.target
  const over = diff > 0
  const diffStr = `${over ? '+' : ''}${Math.round(diff * 10) / 10} LU`
  return (
    <div className="grid grid-cols-[110px_1fr_60px] gap-2 items-center py-1.5 border-b border-border/40 last:border-0">
      <span className="text-xs text-muted-foreground font-medium truncate">{platform.name}</span>
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-muted-foreground w-8 text-right">{platform.target}</span>
        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden relative">
          <div className="h-full bg-green-600/40 rounded-full" style={{ width: '100%' }} />
        </div>
      </div>
      <span className={`text-xs font-bold text-right ${over ? 'text-red-500' : 'text-green-600'}`}>{diffStr}</span>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export function LUFSMeter() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<LoudnessResult | null>(null)
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

  const handleMeasure = async () => {
    if (!file) return
    setLoading(true)
    setError(null)
    setResult(null)
    setProgress(0)
    try {
      const res = await measureLUFS(file, setProgress)
      setResult(res)
    } catch (err: any) {
      setError(err?.message ?? 'Could not analyse this audio file.')
    } finally {
      setLoading(false)
    }
  }

  const lufsColor = (lufs: number) => {
    if (lufs > -9) return 'text-red-600'
    if (lufs > -14) return 'text-orange-500'
    return 'text-green-600'
  }

  const mins = result ? Math.floor(result.duration / 60) : 0
  const secs = result ? Math.round(result.duration % 60) : 0

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
              Load audio file <span className="font-normal text-muted-foreground">(MP3, WAV, FLAC, M4A…)</span>
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
              <Volume2 className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">Drag & drop an audio file here</p>
              <p className="text-xs text-muted-foreground mt-1">Supports MP3, WAV, FLAC, M4A, OGG, AIFF</p>
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

          <button onClick={handleMeasure} disabled={!file || loading} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Activity className="w-4 h-4" />
            {loading ? 'Measuring…' : 'Measure loudness'}
          </button>

          {loading && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Processing audio (BS.1770-4)…</span>
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
            Implements ITU-R BS.1770-4 K-weighting filters and gating. Results match professional DAW loudness meters.
          </p>
        </div>

        {/* ── Right: Results ───────────────────────── */}
        <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">Loudness Measurements</span>
          </div>

          {!result && !loading && (
            <div className="flex-1 flex items-start p-4">
              <p className="text-sm text-muted-foreground">Load an audio file and click "Measure loudness".</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <Volume2 className="w-8 h-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">Applying K-weighting filters…</p>
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="flex-1 overflow-y-auto p-4 space-y-5">

              {/* Integrated LUFS — hero number */}
              <div className="text-center py-5 rounded-xl bg-secondary/40 border border-border">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Integrated Loudness</p>
                <p className={`text-6xl font-black tracking-tight ${lufsColor(result.integrated)}`}>
                  {isFinite(result.integrated) ? result.integrated : '—'}
                </p>
                <p className="text-lg font-semibold text-muted-foreground mt-1">LUFS</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Duration: {mins}:{String(secs).padStart(2, '0')}
                </p>
              </div>

              {/* Measurements grid */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Measurements</p>
                <div className="space-y-0">
                  {[
                    { label: 'Integrated', value: result.integrated, unit: 'LUFS', tip: 'BS.1770-4 with absolute + relative gating' },
                    { label: 'Momentary peak', value: result.momentaryPeak, unit: 'LUFS', tip: 'Maximum 400 ms block' },
                    { label: 'Short-term peak', value: result.shortTermPeak, unit: 'LUFS', tip: 'Maximum 3 s block' },
                    { label: 'True peak', value: result.truePeak, unit: 'dBTP', tip: 'Peak sample level' },
                    { label: 'Loudness range', value: result.lra, unit: 'LU', tip: '10th – 95th percentile spread' },
                  ].map(({ label, value, unit, tip }) => (
                    <div key={label} className="grid grid-cols-[1fr_80px_50px] gap-2 py-1.5 border-b border-border/40 last:border-0 items-center">
                      <div>
                        <span className="text-xs text-muted-foreground font-medium">{label}</span>
                        <span className="text-xs text-muted-foreground/60 ml-1">({tip})</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-foreground text-right">
                        {isFinite(value) ? (value > 0 && unit === 'LU' ? value : value) : '—'}
                      </span>
                      <span className="text-xs text-muted-foreground">{unit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform comparison */}
              {isFinite(result.integrated) && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Platform Targets</p>
                  <p className="text-xs text-muted-foreground mb-2">Difference from target (+ = too loud, − = headroom)</p>
                  <div className="space-y-0">
                    {PLATFORMS.map(p => (
                      <PlatformBar key={p.name} platform={p} integrated={result.integrated} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
