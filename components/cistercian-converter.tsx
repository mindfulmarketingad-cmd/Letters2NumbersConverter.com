"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, X } from "lucide-react"
import {
  decimalToCistercian,
  getCompositeGlyph,
  getDetailedBreakdown,
  isValidCistercianNumber,
  getAllCistercianSymbols,
  CISTERCIAN_ONES,
  CISTERCIAN_TENS,
  CISTERCIAN_HUNDREDS,
  CISTERCIAN_THOUSANDS,
} from "@/lib/cistercian-converter"

export function CistercianConverter() {
  const [input, setInput] = useState("1234")
  const [error, setError] = useState("")

  const breakdown = useMemo(() => {
    if (!input.trim()) {
      return null
    }

    try {
      if (!isValidCistercianNumber(input)) {
        setError("Please enter a number between 1 and 9999")
        return null
      }

      const num = parseInt(input)
      setError("")
      return getDetailedBreakdown(num)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid number")
      return null
    }
  }, [input])

  const symbolRepresentation = useMemo(() => {
    if (!input.trim() || !isValidCistercianNumber(input)) return ""
    return getCompositeGlyph(parseInt(input))
  }, [input])

  const handleClear = () => {
    setInput("")
    setError("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">What are Cistercian Numerals?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Cistercian numerals are a compact medieval number system used by Cistercian monks to represent numbers 1-9999 using a single glyph. Each digit position (ones, tens, hundreds, thousands) is represented by a distinct symbol placed in specific positions around a central vertical line, creating an elegant and space-efficient notation system.
        </p>
      </div>

      {/* Symbol Chart */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">
          Cistercian Symbols (Up to 4 Parts for a Number)
        </h3>
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ones */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground">ONES (1-9)</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(CISTERCIAN_ONES).map(([key, val]) => {
                  const num = parseInt(key)
                  if (num === 0) return null
                  return (
                    <div key={num} className="flex flex-col items-center p-2 bg-background border border-border rounded">
                      <div className="text-lg font-semibold text-foreground">{val.symbol}</div>
                      <div className="text-xs text-muted-foreground">{num}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tens */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground">TENS (10-90)</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(CISTERCIAN_TENS).map(([key, val]) => {
                  const num = parseInt(key)
                  if (num === 0) return null
                  return (
                    <div key={num} className="flex flex-col items-center p-2 bg-background border border-border rounded">
                      <div className="text-lg font-semibold text-foreground">{val.symbol}</div>
                      <div className="text-xs text-muted-foreground">{num * 10}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Hundreds */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground">HUNDREDS (100-900)</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(CISTERCIAN_HUNDREDS).map(([key, val]) => {
                  const num = parseInt(key)
                  if (num === 0) return null
                  return (
                    <div key={num} className="flex flex-col items-center p-2 bg-background border border-border rounded">
                      <div className="text-lg font-semibold text-foreground">{val.symbol}</div>
                      <div className="text-xs text-muted-foreground">{num * 100}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Thousands */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-foreground">THOUSANDS (1000-9000)</h4>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(CISTERCIAN_THOUSANDS).map(([key, val]) => {
                  const num = parseInt(key)
                  if (num === 0) return null
                  return (
                    <div key={num} className="flex flex-col items-center p-2 bg-background border border-border rounded">
                      <div className="text-lg font-semibold text-foreground">{val.symbol}</div>
                      <div className="text-xs text-muted-foreground">{num * 1000}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Section */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Convert to Cistercian Number</h3>

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Number (1-9999)</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a number"
              min="1"
              max="9999"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={handleClear}
              className="px-3 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            if (isValidCistercianNumber(input)) {
              copyToClipboard(symbolRepresentation)
            }
          }}
          disabled={!symbolRepresentation}
          className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Convert
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Result Display */}
      {breakdown && breakdown.length > 0 && (
        <div className="space-y-6">
          {/* Symbol Representation */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Cistercian Representation</h3>
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-amber-600 font-mono">{symbolRepresentation}</div>
              <button
                onClick={() => copyToClipboard(symbolRepresentation)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Breakdown by Position</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {breakdown.map((part, index) => (
                <div key={index} className="bg-background border border-border rounded p-4 space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">{part.position}</p>
                  <p className="text-2xl font-bold text-foreground">{part.symbol}</p>
                  <p className="text-sm text-muted-foreground">{part.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Formula */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Calculation:</strong> {breakdown.map((p) => p.value).join(" + ")} = <strong>{input}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
