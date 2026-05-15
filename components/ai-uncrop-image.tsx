'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Download, RefreshCw, Sparkles, Trash2, ZoomIn, ZoomOut, ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react'

type Direction = 'left' | 'right' | 'up' | 'down'

const EXPAND_STEPS = [0, 64, 128, 192, 256, 384, 512]

function ExpandControl({
  label,
  icon,
  value,
  onChange,
}: {
  label: string
  icon: React.ReactNode
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 w-20 shrink-0">
        <span className="text-muted-foreground">{icon}</span>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <div className="flex gap-1 flex-wrap">
        {EXPAND_STEPS.map(step => (
          <button
            key={step}
            onClick={() => onChange(step)}
            className={`rounded px-2 py-0.5 text-xs font-medium border transition-all ${
              value === step
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
            }`}
          >
            {step === 0 ? 'Off' : `+${step}`}
          </button>
        ))}
      </div>
    </div>
  )
}

export function AIUncropImage() {
  const [imageData, setImageData] = useState<string | null>(null)
  const [imageType, setImageType] = useState('image/png')
  const [fileName, setFileName] = useState('')
  const [originalSize, setOriginalSize] = useState<{ w: number; h: number } | null>(null)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [up, setUp] = useState(0)
  const [down, setDown] = useState(0)
  const [prompt, setPrompt] = useState('')
  const [creativity, setCreativity] = useState(0.5)

  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const [showOriginal, setShowOriginal] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  const loadImage = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file (PNG, JPG, WebP).')
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      setError('Image must be under 20 MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string
      const img = new window.Image()
      img.onload = () => setOriginalSize({ w: img.naturalWidth, h: img.naturalHeight })
      img.src = dataUrl
      setImageData(dataUrl)
      setImageType(file.type || 'image/png')
      setFileName(file.name)
      setResult(null)
      setError('')
    }
    reader.readAsDataURL(file)
  }, [])

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) loadImage(file)
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) loadImage(file)
  }

  function reset() {
    setImageData(null)
    setResult(null)
    setError('')
    setFileName('')
    setOriginalSize(null)
    setLeft(0)
    setRight(0)
    setUp(0)
    setDown(0)
    setPrompt('')
    setCreativity(0.5)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function uncrop() {
    if (!imageData) return
    const expandTotal = left + right + up + down
    if (expandTotal === 0) {
      setError('Select at least one direction to expand.')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)

    try {
      // Strip the data URL prefix to get raw base64
      const base64 = imageData.split(',')[1]
      const res = await fetch('/api/ai-uncrop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, imageType, left, right, up, down, prompt, creativity }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Uncrop failed.')
      setResult(`data:image/webp;base64,${data.image}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Uncrop failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function download() {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = `uncropped-${fileName.replace(/\.[^.]+$/, '')}.webp`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const newW = originalSize ? originalSize.w + left + right : null
  const newH = originalSize ? originalSize.h + up + down : null

  return (
    <div className="space-y-5">
      {/* Upload zone */}
      {!imageData ? (
        <div
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 cursor-pointer transition-colors ${
            dragOver ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'
          }`}
        >
          <Upload className="w-8 h-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">Drop an image here or click to upload</p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WebP — up to 20 MB</p>
          </div>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={onFileChange} />
        </div>
      ) : (
        <div className="space-y-5">
          {/* Preview */}
          <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {result ? (showOriginal ? 'Original' : 'Uncropped Result') : 'Original Image'}
              </p>
              <div className="flex items-center gap-2">
                {result && (
                  <button
                    onClick={() => setShowOriginal(v => !v)}
                    className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
                  >
                    {showOriginal ? <ZoomIn className="w-3.5 h-3.5" /> : <ZoomOut className="w-3.5 h-3.5" />}
                    {showOriginal ? 'Show Result' : 'Compare Original'}
                  </button>
                )}
                <button onClick={reset} className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted transition-colors">
                  <Trash2 className="w-3.5 h-3.5" /> Remove
                </button>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={result && !showOriginal ? result : imageData}
              alt={result && !showOriginal ? 'Uncropped result' : 'Original'}
              className="w-full rounded-lg object-contain max-h-[400px] bg-checkerboard"
            />
            {originalSize && (
              <p className="text-xs text-muted-foreground">
                {result && !showOriginal && newW && newH
                  ? `${newW} × ${newH} px (expanded from ${originalSize.w} × ${originalSize.h})`
                  : `${originalSize.w} × ${originalSize.h} px`}
              </p>
            )}
          </div>

          {/* Expand controls */}
          <div className="rounded-xl border bg-muted/30 p-4 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Expand Edges (pixels)</p>
            <div className="space-y-2">
              <ExpandControl label="Top" icon={<ArrowUp className="w-3.5 h-3.5" />} value={up} onChange={setUp} />
              <ExpandControl label="Bottom" icon={<ArrowDown className="w-3.5 h-3.5" />} value={down} onChange={setDown} />
              <ExpandControl label="Left" icon={<ArrowLeft className="w-3.5 h-3.5" />} value={left} onChange={setLeft} />
              <ExpandControl label="Right" icon={<ArrowRight className="w-3.5 h-3.5" />} value={right} onChange={setRight} />
            </div>

            {newW && newH && (left + right + up + down > 0) && (
              <p className="text-xs text-muted-foreground">
                Result: <span className="font-medium text-foreground">{newW} × {newH} px</span>
              </p>
            )}

            {/* Creativity */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Creativity</p>
                <span className="text-xs text-muted-foreground">
                  {creativity < 0.35 ? 'Conservative — follows edges closely' : creativity < 0.65 ? 'Balanced' : 'Creative — imaginative fill'}
                </span>
              </div>
              <input
                type="range"
                min={0.1}
                max={0.9}
                step={0.05}
                value={creativity}
                onChange={e => setCreativity(parseFloat(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Conservative</span>
                <span>Creative</span>
              </div>
            </div>

            {/* Prompt */}
            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Prompt <span className="font-normal normal-case">(optional — describe what should fill the new space)</span>
              </p>
              <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="e.g. blurry green forest, city skyline at dusk, white studio background…"
                className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                maxLength={200}
              />
            </div>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={uncrop}
              disabled={loading || (left + right + up + down === 0)}
              className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              {loading
                ? <><RefreshCw className="w-4 h-4 animate-spin" /> Uncropping…</>
                : <><Sparkles className="w-4 h-4" /> Uncrop Image</>}
            </button>
            {result && (
              <button
                onClick={download}
                className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
              >
                <Download className="w-4 h-4" /> Download
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
