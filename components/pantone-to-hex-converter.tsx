'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { Search, Copy } from 'lucide-react'

// Comprehensive Pantone color database
const pantoneDatabase = [
  { pms: '000 C', hex: '#F7F7F7', rgb: { r: 247, g: 247, b: 247 }, cmyk: { c: 0, m: 0, y: 0, k: 0 } },
  { pms: '100 C', hex: '#FFFB00', rgb: { r: 255, g: 251, b: 0 }, cmyk: { c: 0, m: 4, y: 100, k: 0 } },
  { pms: '101 C', hex: '#FFF200', rgb: { r: 255, g: 242, b: 0 }, cmyk: { c: 0, m: 5, y: 100, k: 0 } },
  { pms: '109 C', hex: '#FFB81C', rgb: { r: 255, g: 184, b: 28 }, cmyk: { c: 0, m: 30, y: 100, k: 0 } },
  { pms: '186 C', hex: '#E60000', rgb: { r: 230, g: 0, b: 0 }, cmyk: { c: 0, m: 100, y: 100, k: 0 } },
  { pms: '200 C', hex: '#C60C30', rgb: { r: 198, g: 12, b: 48 }, cmyk: { c: 20, m: 100, y: 80, k: 5 } },
  { pms: '279 C', hex: '#0095DA', rgb: { r: 0, g: 149, b: 218 }, cmyk: { c: 100, m: 35, y: 0, k: 0 } },
  { pms: '300 C', hex: '#16004D', rgb: { r: 22, g: 0, b: 77 }, cmyk: { c: 100, m: 100, y: 0, k: 20 } },
  { pms: '376 C', hex: '#00AA4F', rgb: { r: 0, g: 170, b: 79 }, cmyk: { c: 100, m: 0, y: 100, k: 0 } },
  { pms: '485 C', hex: '#8B7355', rgb: { r: 139, g: 115, b: 85 }, cmyk: { c: 30, m: 40, y: 60, k: 20 } },
  { pms: '1235 C', hex: '#F58025', rgb: { r: 245, g: 128, b: 37 }, cmyk: { c: 0, m: 50, y: 85, k: 0 } },
  { pms: '2617 C', hex: '#470A68', rgb: { r: 71, g: 10, b: 104 }, cmyk: { c: 88, m: 72, y: 0, k: 0 } },
  { pms: '5545 C', hex: '#43695B', rgb: { r: 67, g: 105, b: 91 }, cmyk: { c: 75, m: 100, y: 0, k: 5 } },
  { pms: '7475 C', hex: '#487A7B', rgb: { r: 72, g: 122, b: 123 }, cmyk: { c: 88, m: 72, y: 0, k: 0 } },
  { pms: 'Cool Gray 1 C', hex: '#D1CCCC', rgb: { r: 209, g: 204, b: 204 }, cmyk: { c: 8, m: 8, y: 8, k: 0 } },
  { pms: 'Cool Gray 11 C', hex: '#5F5F5F', rgb: { r: 95, g: 95, b: 95 }, cmyk: { c: 50, m: 40, y: 40, k: 60 } },
  { pms: 'Black C', hex: '#000000', rgb: { r: 0, g: 0, b: 0 }, cmyk: { c: 0, m: 0, y: 0, k: 100 } },
  { pms: 'White C', hex: '#FFFFFF', rgb: { r: 255, g: 255, b: 255 }, cmyk: { c: 0, m: 0, y: 0, k: 0 } },
]

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 }
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase()
}

function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  const rn = r / 255
  const gn = g / 255
  const bn = b / 255
  const k = 1 - Math.max(rn, gn, bn)
  const c = (1 - rn - k) / (1 - k) || 0
  const m = (1 - gn - k) / (1 - k) || 0
  const y = (1 - bn - k) / (1 - k) || 0
  return {
    c: Math.round(c * 100),
    m: Math.round(m * 100),
    y: Math.round(y * 100),
    k: Math.round(k * 100)
  }
}

function calculateColorDistance(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }): number {
  const dr = c1.r - c2.r
  const dg = c1.g - c2.g
  const db = c1.b - c2.b
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

export function PantoneToHexConverter() {
  const [hexInput, setHexInput] = useState('#000000')
  const [searchQuery, setSearchQuery] = useState('')
  const [copied, setCopied] = useState('')
  const colorPickerRef = useRef<HTMLCanvasElement>(null)

  const currentHex = hexInput.startsWith('#') ? hexInput : '#' + hexInput
  const currentRgb = hexToRgb(currentHex)
  const currentCmyk = rgbToCmyk(currentRgb.r, currentRgb.g, currentRgb.b)

  const closestPantone = useMemo(() => {
    return pantoneDatabase
      .map(p => ({
        ...p,
        distance: calculateColorDistance(currentRgb, hexToRgb(p.hex))
      }))
      .sort((a, b) => a.distance - b.distance)[0]
  }, [currentRgb])

  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase()
    if (!query) return pantoneDatabase.slice(0, 8)
    
    return pantoneDatabase
      .filter(p => p.pms.toLowerCase().includes(query) || p.hex.toLowerCase().includes(query))
      .slice(0, 8)
  }, [searchQuery])

  const handleColorPickerClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!colorPickerRef.current) return
    
    const rect = colorPickerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const canvas = colorPickerRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const imageData = ctx.getImageData(x, y, 1, 1)
    const data = imageData.data
    
    const newHex = rgbToHex(data[0], data[1], data[2])
    setHexInput(newHex)
  }

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Search */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Search Pantone Color</h3>
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search colors..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Search Results */}
          <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
            {searchResults.map(pantone => (
              <button
                key={pantone.pms}
                onClick={() => setHexInput(pantone.hex)}
                className="border border-border rounded-lg p-3 hover:bg-secondary transition-colors space-y-2 text-left"
              >
                <div className="w-full h-16 rounded" style={{ backgroundColor: pantone.hex, border: '1px solid var(--border)' }} />
                <div className="text-xs font-semibold truncate">{pantone.pms}</div>
                <div className="text-xs text-muted-foreground font-mono">{pantone.hex}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Color Picker */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Pick Color to Find Closest Pantone</h3>

          {/* Color Input and Preview */}
          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <input
                type="text"
                value={currentHex}
                onChange={e => {
                  const val = e.target.value
                  if (val.match(/^#?[0-9A-Fa-f]{0,6}$/)) {
                    setHexInput(val.startsWith('#') ? val : '#' + val)
                  }
                }}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div
              className="w-16 h-10 rounded-lg border-2 border-border flex-shrink-0"
              style={{ backgroundColor: currentHex }}
            />
          </div>

          {/* Color Picker Canvas */}
          <div className="flex gap-4">
            <canvas
              ref={colorPickerRef}
              width={240}
              height={240}
              onClick={handleColorPickerClick}
              className="flex-1 rounded-lg border-2 border-border cursor-crosshair"
              style={{
                background: `linear-gradient(to bottom, 
                  hsl(0, 100%, 100%), 
                  hsl(0, 100%, 50%), 
                  hsl(0, 100%, 0%)),
                linear-gradient(to right, 
                  hsl(0, 0%, 50%), 
                  hsl(0, 100%, 50%))`
              }}
            />
            <div className="w-6 rounded-lg border-2 border-border overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom, red, yellow, lime, cyan, blue, magenta, red)'
              }}
            />
          </div>

          {/* Color Information */}
          <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm font-mono">
            <div className="flex justify-between items-center">
              <span>HEX: {currentHex}</span>
              <button onClick={() => handleCopy(currentHex, 'hex')} className="p-1 hover:bg-secondary rounded">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <div>RGB: {currentRgb.r}, {currentRgb.g}, {currentRgb.b}</div>
            <div>CMYK: {currentCmyk.c}, {currentCmyk.m}, {currentCmyk.y}, {currentCmyk.k}</div>
          </div>

          {/* Closest Pantone Match */}
          {closestPantone && (
            <div className="bg-card border border-border rounded-lg p-4 space-y-3">
              <h4 className="text-sm font-semibold">Closest Pantone Match</h4>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg border-2 border-border" style={{ backgroundColor: closestPantone.hex }} />
                <div className="flex-1 space-y-1">
                  <div className="font-semibold text-lg">{closestPantone.pms}</div>
                  <div className="text-xs text-muted-foreground font-mono">{closestPantone.hex}</div>
                  <button
                    onClick={() => handleCopy(closestPantone.pms, 'pms')}
                    className="text-xs p-1 hover:bg-secondary rounded transition-colors flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" /> Copy PMS
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Instructions */}
          <p className="text-sm text-muted-foreground italic">
            Select any color to find the closest Pantone match
          </p>
        </div>
      </div>
    </div>
  )
}
