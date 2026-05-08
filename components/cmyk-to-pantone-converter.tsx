'use client'

import { useState, useMemo } from 'react'
import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Pantone color database (selected common Pantone colors)
const pantoneDatabase = [
  { pms: '2617 C', cmyk: { c: 88, m: 72, y: 0, k: 0 }, hex: '#470A68', rgb: { r: 71, g: 10, b: 104 } },
  { pms: '2685 C', cmyk: { c: 75, m: 100, y: 0, k: 5 }, hex: '#330072', rgb: { r: 51, g: 0, b: 114 } },
  { pms: '2735 C', cmyk: { c: 100, m: 100, y: 0, k: 0 }, hex: '#2E0071', rgb: { r: 46, g: 0, b: 113 } },
  { pms: '2745 C', cmyk: { c: 100, m: 80, y: 0, k: 0 }, hex: '#280071', rgb: { r: 40, g: 0, b: 113 } },
  { pms: '2755 C', cmyk: { c: 95, m: 90, y: 0, k: 0 }, hex: '#250E62', rgb: { r: 37, g: 14, b: 98 } },
  { pms: '7442 C', cmyk: { c: 30, m: 10, y: 0, k: 0 }, hex: '#B8D4E8', rgb: { r: 184, g: 212, b: 232 } },
  { pms: '186 C', cmyk: { c: 0, m: 100, y: 100, k: 0 }, hex: '#E60000', rgb: { r: 230, g: 0, b: 0 } },
  { pms: '300 C', cmyk: { c: 100, m: 100, y: 0, k: 20 }, hex: '#16004D', rgb: { r: 22, g: 0, b: 77 } },
  { pms: '109 C', cmyk: { c: 0, m: 30, y: 100, k: 0 }, hex: '#FFB81C', rgb: { r: 255, g: 184, b: 28 } },
  { pms: '376 C', cmyk: { c: 100, m: 0, y: 100, k: 0 }, hex: '#00AA4F', rgb: { r: 0, g: 170, b: 79 } },
]

function cmykToHex(c: number, m: number, y: number, k: number): string {
  const r = Math.round(255 * (1 - c / 100) * (1 - k / 100))
  const g = Math.round(255 * (1 - m / 100) * (1 - k / 100))
  const b = Math.round(255 * (1 - y / 100) * (1 - k / 100))
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase()
}

function calculateColorDistance(c1: { c: number; m: number; y: number; k: number }, c2: { c: number; m: number; y: number; k: number }): number {
  const dc = c1.c - c2.c
  const dm = c1.m - c2.m
  const dy = c1.y - c2.y
  const dk = c1.k - c2.k
  return Math.sqrt(dc * dc + dm * dm + dy * dy + dk * dk)
}

interface PantoneMatch {
  pms: string
  hex: string
  distance: number
}

export function CMYKToPantoneConverter() {
  const [cyan, setCyan] = useState(60)
  const [magenta, setMagenta] = useState(83)
  const [yellow, setYellow] = useState(0)
  const [black, setBlack] = useState(51)
  const [copied, setCopied] = useState('')

  const currentCMYK = { c: cyan, m: magenta, y: yellow, k: black }
  const hexColor = useMemo(() => cmykToHex(cyan, magenta, yellow, black), [cyan, magenta, yellow, black])

  const pantoneMatches = useMemo(() => {
    return pantoneDatabase
      .map(p => ({
        pms: p.pms,
        hex: p.hex,
        distance: calculateColorDistance(currentCMYK, p.cmyk)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
  }, [cyan, magenta, yellow, black])

  const closestPantone = pantoneMatches[0]

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - CMYK Input */}
        <div className="space-y-6">
          {/* Color Preview */}
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video" style={{ backgroundColor: hexColor }} />

          {/* CMYK Sliders */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Cyan (C):</label>
                <input
                  type="number"
                  value={cyan}
                  onChange={e => setCyan(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={cyan}
                onChange={e => setCyan(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-cyan-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Magenta (M):</label>
                <input
                  type="number"
                  value={magenta}
                  onChange={e => setMagenta(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={magenta}
                onChange={e => setMagenta(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-magenta-500 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Yellow (Y):</label>
                <input
                  type="number"
                  value={yellow}
                  onChange={e => setYellow(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={yellow}
                onChange={e => setYellow(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-yellow-400 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold">Black (K):</label>
                <input
                  type="number"
                  value={black}
                  onChange={e => setBlack(Math.max(0, Math.min(100, parseInt(e.target.value) || 0)))}
                  className="w-16 px-2 py-1 border border-border rounded text-sm"
                />
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={black}
                onChange={e => setBlack(parseInt(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-transparent to-black rounded-lg appearance-none cursor-pointer"
              />
            </div>
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
                  CMYK({cyan}, {magenta}, {yellow}, {black})
                </div>
              </div>
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
