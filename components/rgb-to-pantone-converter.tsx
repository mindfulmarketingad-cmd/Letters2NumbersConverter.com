'use client'

import { useState, useMemo } from 'react'
import { Copy } from 'lucide-react'

// Pantone color database (selected common Pantone colors)
const pantoneDatabase = [
  { pms: '7475 C', rgb: { r: 72, g: 122, b: 123 }, hex: '#487A7B' },
  { pms: '5545 C', rgb: { r: 67, g: 105, b: 91 }, hex: '#43695B' },
  { pms: '625 C', rgb: { r: 80, g: 127, b: 112 }, hex: '#507F70' },
  { pms: '7730 C', rgb: { r: 75, g: 149, b: 96 }, hex: '#4B9560' },
  { pms: '2617 C', rgb: { r: 71, g: 10, b: 104 }, hex: '#470A68' },
  { pms: '2685 C', rgb: { r: 51, g: 0, b: 114 }, hex: '#330072' },
  { pms: '186 C', rgb: { r: 230, g: 0, b: 0 }, hex: '#E60000' },
  { pms: '109 C', rgb: { r: 255, g: 184, b: 28 }, hex: '#FFB81C' },
  { pms: '376 C', rgb: { r: 0, g: 170, b: 79 }, hex: '#00AA4F' },
  { pms: '300 C', rgb: { r: 22, g: 0, b: 77 }, hex: '#16004D' },
  { pms: '7442 C', rgb: { r: 184, g: 212, b: 232 }, hex: '#B8D4E8' },
  { pms: '279 C', rgb: { r: 0, g: 149, b: 218 }, hex: '#0095DA' },
]

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase()
}

function calculateColorDistance(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }): number {
  const dr = c1.r - c2.r
  const dg = c1.g - c2.g
  const db = c1.b - c2.b
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

interface PantoneMatch {
  pms: string
  hex: string
  distance: number
}

export function RGBToPantoneConverter() {
  const [red, setRed] = useState(64)
  const [green, setGreen] = useState(128)
  const [blue, setBlue] = useState(96)
  const [copied, setCopied] = useState('')

  const currentRGB = { r: red, g: green, b: blue }
  const hexColor = useMemo(() => rgbToHex(red, green, blue), [red, green, blue])

  const pantoneMatches = useMemo(() => {
    return pantoneDatabase
      .map(p => ({
        pms: p.pms,
        hex: p.hex,
        distance: calculateColorDistance(currentRGB, p.rgb)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
  }, [red, green, blue])

  const closestPantone = pantoneMatches[0]
  const distance = Math.round(closestPantone?.distance || 0)

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - RGB Input */}
        <div className="space-y-6">
          {/* Color Preview */}
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video" style={{ backgroundColor: hexColor }} />

          {/* RGB Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Red (R):</label>
                <input
                  type="number"
                  value={red}
                  onChange={e => setRed(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="255"
                value={red}
                onChange={e => setRed(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-red-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Green (G):</label>
                <input
                  type="number"
                  value={green}
                  onChange={e => setGreen(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="255"
                value={green}
                onChange={e => setGreen(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-green-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Blue (B):</label>
                <input
                  type="number"
                  value={blue}
                  onChange={e => setBlue(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="255"
                value={blue}
                onChange={e => setBlue(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-blue-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Distance Display */}
          <div className="bg-card border border-border rounded-lg p-4">
            <label className="text-xs font-semibold text-muted-foreground mb-2 block">Distance:</label>
            <input
              type="number"
              value={distance}
              readOnly
              className="w-full px-3 py-2 border border-border rounded bg-background text-center font-semibold"
            />
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          {/* Hex Value Display */}
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold">Current Color</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-lg border-2 border-border" style={{ backgroundColor: hexColor }} />
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between bg-background rounded px-3 py-2">
                  <span className="text-sm font-mono">{hexColor}</span>
                  <button
                    onClick={() => handleCopy(hexColor, 'hex')}
                    className="text-xs p-1 hover:bg-secondary rounded transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs text-muted-foreground">
                  RGB({red}, {green}, {blue})
                </div>
              </div>
            </div>
          </div>

          {/* Color Picker Gradient */}
          <div className="bg-card border border-border rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold">Color Picker</h3>
            <div className="relative w-full h-40 rounded border border-border overflow-hidden shadow-lg"
              style={{
                background: `linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(${red}, ${green}, ${blue}) 100%)`
              }}>
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgb(0, 0, 0) 100%)'
              }} />
              <div className="absolute inset-0 w-full h-full" style={{
                background: `linear-gradient(to right, hsl(0, 100%, 50%) 0%, hsl(60, 100%, 50%) 16.66%, hsl(120, 100%, 50%) 33.33%, hsl(180, 100%, 50%) 50%, hsl(240, 100%, 50%) 66.66%, hsl(300, 100%, 50%) 83.33%, hsl(360, 100%, 50%) 100%)`
              }} />
              <div className="absolute w-3 h-3 border-2 border-white rounded-full shadow-lg pointer-events-none"
                style={{
                  left: `${(red / 255) * 100}%`,
                  top: `${((255 - blue) / 255) * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }} />
            </div>
          </div>

          {/* Closest Pantone Match */}
          {closestPantone && (
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Closest Pantone Match</h3>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg border-2 border-border" style={{ backgroundColor: closestPantone.hex }} />
                <div className="flex-1 space-y-2">
                  <div className="text-lg font-bold">{closestPantone.pms}</div>
                  <div className="flex items-center justify-between bg-background rounded px-3 py-2">
                    <span className="text-sm font-mono">{closestPantone.hex}</span>
                    <button
                      onClick={() => handleCopy(closestPantone.pms, 'pms')}
                      className="text-xs p-1 hover:bg-secondary rounded transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Alternative Matches */}
          {pantoneMatches.length > 1 && (
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <h3 className="text-sm font-semibold">Related Pantone Colors</h3>
              <div className="grid grid-cols-2 gap-3">
                {pantoneMatches.slice(1).map((match, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-3 space-y-2">
                    <div className="w-full h-16 rounded" style={{ backgroundColor: match.hex }} />
                    <div className="text-sm font-semibold">{match.pms}</div>
                    <div className="text-xs text-muted-foreground font-mono">{match.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
