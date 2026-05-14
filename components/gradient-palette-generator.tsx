'use client'

import { useState, useCallback, useRef } from 'react'
import { Copy, Check, RotateCcw, RefreshCw, Plus, Minus } from 'lucide-react'
import { useSaveState } from '@/lib/save-context'

type ColorStop = { hex: string; position: number }
type GradientType = 'linear' | 'radial' | 'conic'
type Direction = '90deg' | '135deg' | '45deg' | '180deg' | '0deg' | '225deg' | '315deg' | '270deg'

interface SavedState {
  colors: ColorStop[]
  gradientType: GradientType
  direction: Direction
  steps: number
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return [r, g, b]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(v => Math.min(255, Math.max(0, Math.round(v))).toString(16).padStart(2, '0')).join('')
}

function interpolate(colorA: string, colorB: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(colorA)
  const [r2, g2, b2] = hexToRgb(colorB)
  return rgbToHex(
    Math.round(r1 + (r2 - r1) * t),
    Math.round(g1 + (g2 - g1) * t),
    Math.round(b1 + (b2 - b1) * t),
  )
}

function generatePalette(colors: ColorStop[], steps: number): string[] {
  if (colors.length < 2) return [colors[0]?.hex ?? '#000000']
  const sorted = [...colors].sort((a, b) => a.position - b.position)
  const palette: string[] = []
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1)
    // Find which segment this t falls in
    let segStart = sorted[0]
    let segEnd = sorted[sorted.length - 1]
    for (let j = 0; j < sorted.length - 1; j++) {
      const start = sorted[j].position / 100
      const end = sorted[j + 1].position / 100
      if (t >= start && t <= end) {
        segStart = sorted[j]
        segEnd = sorted[j + 1]
        const segT = end === start ? 0 : (t - start) / (end - start)
        palette.push(interpolate(segStart.hex, segEnd.hex, segT))
        break
      }
    }
    if (palette.length < i + 1) {
      palette.push(sorted[sorted.length - 1].hex)
    }
  }
  return palette
}

function buildGradientCSS(colors: ColorStop[], type: GradientType, direction: Direction): string {
  const sorted = [...colors].sort((a, b) => a.position - b.position)
  const stops = sorted.map(c => `${c.hex} ${c.position}%`).join(', ')
  if (type === 'linear') return `linear-gradient(${direction}, ${stops})`
  if (type === 'radial') return `radial-gradient(circle, ${stops})`
  return `conic-gradient(${stops})`
}

const PRESETS: { name: string; colors: ColorStop[] }[] = [
  { name: 'Sunset', colors: [{ hex: '#ff6b35', position: 0 }, { hex: '#f7c948', position: 50 }, { hex: '#ff3366', position: 100 }] },
  { name: 'Ocean', colors: [{ hex: '#0077b6', position: 0 }, { hex: '#00b4d8', position: 50 }, { hex: '#90e0ef', position: 100 }] },
  { name: 'Forest', colors: [{ hex: '#1b4332', position: 0 }, { hex: '#40916c', position: 50 }, { hex: '#95d5b2', position: 100 }] },
  { name: 'Aurora', colors: [{ hex: '#7400b8', position: 0 }, { hex: '#00bbf9', position: 50 }, { hex: '#9bf6ff', position: 100 }] },
  { name: '4-Stop', colors: [{ hex: '#ef476f', position: 0 }, { hex: '#ffd166', position: 33 }, { hex: '#06d6a0', position: 66 }, { hex: '#118ab2', position: 100 }] },
  { name: 'Neon', colors: [{ hex: '#ff00ff', position: 0 }, { hex: '#00ffff', position: 50 }, { hex: '#ff00ff', position: 100 }] },
]

const DIRECTIONS: { label: string; value: Direction }[] = [
  { label: '→', value: '90deg' },
  { label: '↘', value: '135deg' },
  { label: '↗', value: '45deg' },
  { label: '↓', value: '180deg' },
  { label: '↑', value: '0deg' },
  { label: '↙', value: '225deg' },
  { label: '↖', value: '315deg' },
  { label: '←', value: '270deg' },
]

const DEFAULT_STATE: SavedState = {
  colors: [
    { hex: '#6366f1', position: 0 },
    { hex: '#8b5cf6', position: 33 },
    { hex: '#d946ef', position: 66 },
    { hex: '#f43f5e', position: 100 },
  ],
  gradientType: 'linear',
  direction: '90deg',
  steps: 8,
}

export function GradientPaletteGenerator() {
  const [colors, setColors] = useState<ColorStop[]>(DEFAULT_STATE.colors)
  const [gradientType, setGradientType] = useState<GradientType>(DEFAULT_STATE.gradientType)
  const [direction, setDirection] = useState<Direction>(DEFAULT_STATE.direction)
  const [steps, setSteps] = useState(DEFAULT_STATE.steps)
  const [copied, setCopied] = useState<string | null>(null)

  useSaveState<SavedState>(
    'gradient-palette-generator',
    { colors, gradientType, direction, steps },
    (s) => { setColors(s.colors); setGradientType(s.gradientType); setDirection(s.direction); setSteps(s.steps) },
  )

  const gradientCSS = buildGradientCSS(colors, gradientType, direction)
  const palette = generatePalette(colors, steps)

  const copyText = useCallback(async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }, [])

  const updateColor = (index: number, hex: string) => {
    setColors(prev => prev.map((c, i) => i === index ? { ...c, hex } : c))
  }

  const updatePosition = (index: number, position: number) => {
    setColors(prev => prev.map((c, i) => i === index ? { ...c, position } : c))
  }

  const addColor = () => {
    if (colors.length >= 6) return
    const sorted = [...colors].sort((a, b) => a.position - b.position)
    // Insert at midpoint of largest gap
    let maxGap = 0
    let insertPos = 50
    let insertHex = '#888888'
    for (let i = 0; i < sorted.length - 1; i++) {
      const gap = sorted[i + 1].position - sorted[i].position
      if (gap > maxGap) {
        maxGap = gap
        insertPos = Math.round((sorted[i].position + sorted[i + 1].position) / 2)
        insertHex = interpolate(sorted[i].hex, sorted[i + 1].hex, 0.5)
      }
    }
    setColors(prev => [...prev, { hex: insertHex, position: insertPos }])
  }

  const removeColor = (index: number) => {
    if (colors.length <= 2) return
    setColors(prev => prev.filter((_, i) => i !== index))
  }

  const randomize = () => {
    const count = colors.length
    const newColors: ColorStop[] = Array.from({ length: count }, (_, i) => ({
      hex: '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0'),
      position: count === 1 ? 0 : Math.round((i / (count - 1)) * 100),
    }))
    setColors(newColors)
  }

  const reset = () => {
    setColors(DEFAULT_STATE.colors)
    setGradientType(DEFAULT_STATE.gradientType)
    setDirection(DEFAULT_STATE.direction)
    setSteps(DEFAULT_STATE.steps)
  }

  const cssOutput = `background: ${gradientCSS};`
  const paletteHexList = palette.join(', ')

  return (
    <div className="flex flex-col h-full">
      {/* Gradient Preview */}
      <div
        className="w-full h-32 flex-shrink-0"
        style={{ background: gradientCSS }}
        aria-label="Gradient preview"
      />

      <div className="flex-1 overflow-y-auto p-4 space-y-5">

        {/* Presets */}
        <div>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Presets</p>
          <div className="grid grid-cols-3 gap-2">
            {PRESETS.map(preset => (
              <button
                key={preset.name}
                onClick={() => setColors(preset.colors)}
                className="group relative h-10 rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
                style={{ background: buildGradientCSS(preset.colors, 'linear', '90deg') }}
                title={preset.name}
              >
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-xs font-medium">
                  {preset.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Color Stops */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Color Stops</p>
            <div className="flex items-center gap-1">
              <button
                onClick={randomize}
                className="flex items-center gap-1 px-2 py-1 rounded text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <RefreshCw className="w-3 h-3" /> Random
              </button>
              <button
                onClick={addColor}
                disabled={colors.length >= 6}
                className="p-1 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-40"
                title="Add color stop"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {[...colors].map((color, i) => (
              <div key={i} className="flex items-center gap-2">
                {/* Color picker */}
                <div className="relative w-9 h-9 flex-shrink-0 rounded-lg overflow-hidden border border-border cursor-pointer">
                  <div className="absolute inset-0 rounded-lg" style={{ background: color.hex }} />
                  <input
                    type="color"
                    value={color.hex}
                    onChange={e => updateColor(i, e.target.value)}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    aria-label={`Color stop ${i + 1}`}
                  />
                </div>

                {/* Hex input */}
                <input
                  type="text"
                  value={color.hex.toUpperCase()}
                  onChange={e => {
                    const v = e.target.value
                    if (/^#[0-9A-Fa-f]{0,6}$/.test(v)) updateColor(i, v.toLowerCase())
                  }}
                  className="w-24 px-2 py-1.5 rounded bg-secondary/50 border border-border text-xs font-mono text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />

                {/* Position slider */}
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={color.position}
                  onChange={e => updatePosition(i, Number(e.target.value))}
                  className="flex-1 h-1.5 accent-primary"
                />
                <span className="text-xs text-muted-foreground w-8 text-right">{color.position}%</span>

                {/* Remove */}
                <button
                  onClick={() => removeColor(i)}
                  disabled={colors.length <= 2}
                  className="p-1 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-red-500 disabled:opacity-30"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Type + Direction */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Type</p>
            <div className="flex gap-1">
              {(['linear', 'radial', 'conic'] as GradientType[]).map(t => (
                <button
                  key={t}
                  onClick={() => setGradientType(t)}
                  className={`flex-1 py-1.5 rounded text-xs font-medium capitalize transition-colors ${gradientType === t ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {gradientType === 'linear' && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Direction</p>
              <div className="grid grid-cols-4 gap-1">
                {DIRECTIONS.map(d => (
                  <button
                    key={d.value}
                    onClick={() => setDirection(d.value)}
                    className={`py-1 rounded text-sm transition-colors ${direction === d.value ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Palette Steps */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Palette Swatches — {steps} colors
            </p>
            <input
              type="range"
              min={3}
              max={12}
              value={steps}
              onChange={e => setSteps(Number(e.target.value))}
              className="w-28 h-1.5 accent-primary"
            />
          </div>
          <div className="flex rounded-lg overflow-hidden border border-border h-12">
            {palette.map((hex, i) => (
              <button
                key={i}
                className="flex-1 relative group transition-all"
                style={{ background: hex }}
                onClick={() => copyText(hex, `swatch-${i}`)}
                title={hex}
              >
                <span className="absolute inset-0 flex items-end justify-center pb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[9px] font-mono bg-black/50 text-white px-1 rounded">{hex}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* CSS Output */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">CSS</p>
            <button
              onClick={() => copyText(cssOutput, 'css')}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied === 'css' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {copied === 'css' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="bg-secondary/40 rounded-lg border border-border p-3 text-xs font-mono text-foreground overflow-x-auto whitespace-pre-wrap break-all">
            {cssOutput}
          </pre>
        </div>

        {/* Hex Palette List */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hex Palette</p>
            <button
              onClick={() => copyText(paletteHexList, 'hex')}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied === 'hex' ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
              {copied === 'hex' ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="font-mono text-xs text-muted-foreground break-all leading-relaxed">{paletteHexList}</p>
        </div>

        {/* Reset */}
        <div className="pt-1 border-t border-border/50">
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset to default
          </button>
        </div>
      </div>
    </div>
  )
}
