'use client'

import { useState, useRef, useCallback } from 'react'

interface ColorStop {
  hex: string
  position: number
}

type GradientType = 'linear' | 'radial' | 'conic'
type Direction = 'to right' | 'to bottom right' | 'to bottom' | 'to bottom left' | 'to left' | 'to top left' | 'to top' | 'to top right'

const DIRECTION_LABELS: { value: Direction; label: string }[] = [
  { value: 'to top left', label: '↖' },
  { value: 'to top', label: '↑' },
  { value: 'to top right', label: '↗' },
  { value: 'to left', label: '←' },
  { value: 'to right', label: '→' },
  { value: 'to bottom left', label: '↙' },
  { value: 'to bottom', label: '↓' },
  { value: 'to bottom right', label: '↘' },
]

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => Math.min(255, Math.max(0, Math.round(v))).toString(16).padStart(2, '0')).join('')
}

function clamp(v: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, v))
}

// K-means clustering to extract dominant colors
function kMeans(pixels: [number, number, number][], k: number, iterations = 10): [number, number, number][] {
  if (pixels.length === 0) return []
  k = Math.min(k, pixels.length)

  // Initialize centroids by picking spread-out pixels
  const step = Math.floor(pixels.length / k)
  let centroids: [number, number, number][] = Array.from({ length: k }, (_, i) => [...pixels[i * step]] as [number, number, number])

  for (let iter = 0; iter < iterations; iter++) {
    const clusters: [number, number, number][][] = Array.from({ length: k }, () => [])

    for (const px of pixels) {
      let best = 0
      let bestDist = Infinity
      for (let c = 0; c < k; c++) {
        const dr = px[0] - centroids[c][0]
        const dg = px[1] - centroids[c][1]
        const db = px[2] - centroids[c][2]
        const dist = dr * dr + dg * dg + db * db
        if (dist < bestDist) { bestDist = dist; best = c }
      }
      clusters[best].push(px)
    }

    centroids = clusters.map((cluster, i) => {
      if (cluster.length === 0) return centroids[i]
      const r = Math.round(cluster.reduce((s, p) => s + p[0], 0) / cluster.length)
      const g = Math.round(cluster.reduce((s, p) => s + p[1], 0) / cluster.length)
      const b = Math.round(cluster.reduce((s, p) => s + p[2], 0) / cluster.length)
      return [r, g, b] as [number, number, number]
    })
  }

  return centroids
}

// Sort colors by perceptual luminance for a natural gradient flow
function sortByLuminance(colors: [number, number, number][]): [number, number, number][] {
  return [...colors].sort((a, b) => {
    const la = 0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2]
    const lb = 0.299 * b[0] + 0.587 * b[1] + 0.114 * b[2]
    return la - lb
  })
}

function buildGradientCSS(stops: ColorStop[], type: GradientType, direction: Direction): string {
  const stopStr = stops.map(s => `${s.hex} ${s.position}%`).join(', ')
  if (type === 'linear') return `linear-gradient(${direction}, ${stopStr})`
  if (type === 'radial') return `radial-gradient(circle, ${stopStr})`
  return `conic-gradient(${stopStr})`
}

function interpolate(stops: ColorStop[], t: number): string {
  if (stops.length === 0) return '#000000'
  if (t <= stops[0].position / 100) return stops[0].hex
  if (t >= stops[stops.length - 1].position / 100) return stops[stops.length - 1].hex
  for (let i = 0; i < stops.length - 1; i++) {
    const p0 = stops[i].position / 100
    const p1 = stops[i + 1].position / 100
    if (t >= p0 && t <= p1) {
      const ratio = (t - p0) / (p1 - p0)
      const [r0, g0, b0] = hexToRgb(stops[i].hex)
      const [r1, g1, b1] = hexToRgb(stops[i + 1].hex)
      return rgbToHex(r0 + (r1 - r0) * ratio, g0 + (g1 - g0) * ratio, b0 + (b1 - b0) * ratio)
    }
  }
  return stops[stops.length - 1].hex
}

function generatePalette(stops: ColorStop[], steps: number): string[] {
  return Array.from({ length: steps }, (_, i) => interpolate(stops, i / (steps - 1)))
}

export function GradientFromImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [colorStops, setColorStops] = useState<ColorStop[]>([])
  const [gradientType, setGradientType] = useState<GradientType>('linear')
  const [direction, setDirection] = useState<Direction>('to right')
  const [steps, setSteps] = useState(5)
  const [colorCount, setColorCount] = useState(5)
  const [isDragging, setIsDragging] = useState(false)
  const [copiedCSS, setCopiedCSS] = useState(false)
  const [copiedPalette, setCopiedPalette] = useState(false)
  const [copiedSwatch, setCopiedSwatch] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const extractColors = useCallback((file: File) => {
    setError(null)
    setIsProcessing(true)
    const url = URL.createObjectURL(file)
    setImageUrl(url)

    const img = new window.Image()
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const MAX = 100
        const scale = Math.min(MAX / img.width, MAX / img.height, 1)
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

        const pixels: [number, number, number][] = []
        // Sample every 4th pixel to stay fast
        for (let i = 0; i < data.length; i += 16) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
          if (a > 128) pixels.push([r, g, b])
        }

        const rawCentroids = kMeans(pixels, colorCount)
        const sorted = sortByLuminance(rawCentroids)
        const stops: ColorStop[] = sorted.map((c, i) => ({
          hex: rgbToHex(c[0], c[1], c[2]),
          position: Math.round((i / (sorted.length - 1)) * 100),
        }))
        setColorStops(stops)
      } catch {
        setError('Could not process image. Please try a different file.')
      } finally {
        setIsProcessing(false)
        URL.revokeObjectURL(url)
        // Keep the object URL for display — create a fresh one
        setImageUrl(URL.createObjectURL(file))
      }
    }
    img.onerror = () => {
      setError('Could not load image. Please try a JPEG, PNG, or WebP file.')
      setIsProcessing(false)
    }
    img.src = url
  }, [colorCount])

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (JPEG, PNG, WebP, GIF).')
      return
    }
    extractColors(file)
  }, [extractColors])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }, [handleFile])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const gradientCSS = colorStops.length >= 2 ? buildGradientCSS(colorStops, gradientType, direction) : null
  const palette = colorStops.length >= 2 ? generatePalette(colorStops, steps) : []

  const copyCSS = async () => {
    if (!gradientCSS) return
    await navigator.clipboard.writeText(`background: ${gradientCSS};`)
    setCopiedCSS(true)
    setTimeout(() => setCopiedCSS(false), 2000)
  }

  const copyPalette = async () => {
    if (palette.length === 0) return
    await navigator.clipboard.writeText(palette.join(', '))
    setCopiedPalette(true)
    setTimeout(() => setCopiedPalette(false), 2000)
  }

  const copySwatch = async (hex: string) => {
    await navigator.clipboard.writeText(hex)
    setCopiedSwatch(hex)
    setTimeout(() => setCopiedSwatch(null), 1500)
  }

  const reExtract = () => {
    if (!imageUrl) return
    // Re-run with updated colorCount by re-fetching from current image element
    // Trigger file input click instead
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-5">
      {/* Upload area */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl cursor-pointer transition-colors ${isDragging ? 'border-violet-400 bg-violet-500/10' : 'border-gray-700 bg-gray-800/50 hover:border-gray-500'}`}
      >
        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileInput} />
        {imageUrl ? (
          <div className="flex flex-col items-center gap-3 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Uploaded image for gradient extraction" className="max-h-48 rounded-lg object-contain" />
            <p className="text-xs text-gray-400">Click to upload a different image</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 py-10 px-4 text-center">
            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-gray-300">Drop an image here or click to browse</p>
              <p className="text-xs text-gray-500 mt-1">JPEG, PNG, WebP, GIF — processed entirely in your browser</p>
            </div>
          </div>
        )}
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-gray-900/70">
            <div className="flex items-center gap-2 text-sm text-violet-300">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
              </svg>
              Extracting colors…
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {/* Controls row */}
      {imageUrl && !isProcessing && (
        <div className="flex flex-wrap gap-3 items-end">
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Colors to extract</label>
            <div className="flex items-center gap-2">
              <input
                type="range" min={2} max={8} value={colorCount}
                onChange={e => setColorCount(Number(e.target.value))}
                className="w-24 accent-violet-500"
              />
              <span className="text-sm font-mono text-white w-4">{colorCount}</span>
            </div>
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 text-xs rounded-lg border border-gray-600 text-gray-300 hover:border-violet-400 hover:text-violet-300 transition-colors"
          >
            Re-upload &amp; extract
          </button>
        </div>
      )}

      {/* Gradient preview */}
      {gradientCSS && (
        <>
          <div
            className="w-full h-20 rounded-xl shadow-lg"
            style={{ background: gradientCSS }}
          />

          {/* Color stops */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Extracted Color Stops</p>
            <div className="flex flex-wrap gap-2">
              {colorStops.map((stop, i) => (
                <button
                  key={i}
                  onClick={() => copySwatch(stop.hex)}
                  title={`Copy ${stop.hex}`}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-lg border border-gray-700 bg-gray-800/60 hover:border-gray-500 transition-colors text-xs font-mono text-gray-300"
                >
                  <span className="w-4 h-4 rounded-sm border border-gray-600 inline-block" style={{ background: stop.hex }} />
                  {stop.hex}
                  {copiedSwatch === stop.hex && <span className="text-green-400 ml-1">✓</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Gradient type */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Gradient Type</p>
            <div className="flex gap-2">
              {(['linear', 'radial', 'conic'] as GradientType[]).map(t => (
                <button
                  key={t}
                  onClick={() => setGradientType(t)}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors capitalize ${gradientType === t ? 'border-violet-500 bg-violet-500/20 text-violet-300' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Direction compass (linear only) */}
          {gradientType === 'linear' && (
            <div className="space-y-2">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Direction</p>
              <div className="grid grid-cols-3 gap-1 w-28">
                {[
                  { value: 'to top left', label: '↖' },
                  { value: 'to top', label: '↑' },
                  { value: 'to top right', label: '↗' },
                  { value: 'to left', label: '←' },
                  { value: null, label: '' },
                  { value: 'to right', label: '→' },
                  { value: 'to bottom left', label: '↙' },
                  { value: 'to bottom', label: '↓' },
                  { value: 'to bottom right', label: '↘' },
                ].map((d, i) => d.value ? (
                  <button
                    key={i}
                    onClick={() => setDirection(d.value as Direction)}
                    className={`w-8 h-8 text-sm rounded flex items-center justify-center border transition-colors ${direction === d.value ? 'border-violet-500 bg-violet-500/20 text-violet-300' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                  >
                    {d.label}
                  </button>
                ) : <div key={i} className="w-8 h-8" />)}
              </div>
            </div>
          )}

          {/* Palette swatches */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Palette Swatches</p>
              <div className="flex items-center gap-2">
                <input
                  type="range" min={3} max={12} value={steps}
                  onChange={e => setSteps(Number(e.target.value))}
                  className="w-20 accent-violet-500"
                />
                <span className="text-xs text-gray-300 w-4 font-mono">{steps}</span>
              </div>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {palette.map((hex, i) => (
                <button
                  key={i}
                  onClick={() => copySwatch(hex)}
                  title={`Copy ${hex}`}
                  className="group relative w-10 h-10 rounded-lg border border-gray-700 hover:border-gray-400 transition-colors shadow-sm"
                  style={{ background: hex }}
                >
                  {copiedSwatch === hex && (
                    <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 text-white text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* CSS output */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">CSS</p>
              <button
                onClick={copyCSS}
                className={`text-xs px-3 py-1 rounded-lg border transition-colors ${copiedCSS ? 'border-green-500 text-green-400' : 'border-gray-600 text-gray-400 hover:border-violet-400 hover:text-violet-300'}`}
              >
                {copiedCSS ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="text-xs bg-gray-800/80 border border-gray-700 rounded-lg p-3 text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
              {`background: ${gradientCSS};`}
            </pre>
          </div>

          {/* Hex palette */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Hex Palette</p>
              <button
                onClick={copyPalette}
                className={`text-xs px-3 py-1 rounded-lg border transition-colors ${copiedPalette ? 'border-green-500 text-green-400' : 'border-gray-600 text-gray-400 hover:border-violet-400 hover:text-violet-300'}`}
              >
                {copiedPalette ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-xs bg-gray-800/80 border border-gray-700 rounded-lg p-3 text-gray-300 font-mono break-all">
              {palette.join(', ')}
            </p>
          </div>
        </>
      )}
    </div>
  )
}
