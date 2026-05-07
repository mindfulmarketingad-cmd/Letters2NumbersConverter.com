"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw } from "lucide-react"
import {
  decimalToEgyptian,
  getEgyptianVisual,
  getDetailedBreakdown,
  isValidEgyptianNumber,
  getSystemInfo,
  EGYPTIAN_SYMBOLS,
} from "@/lib/egyptian-converter"

export function EgyptianConverter() {
  const [input, setInput] = useState("123")
  const [error, setError] = useState("")

  const breakdown = useMemo(() => {
    if (!input.trim()) {
      return null
    }

    try {
      if (!isValidEgyptianNumber(input)) {
        setError("Please enter a number between 1 and 9,999,999")
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

  const egyptianVisual = useMemo(() => {
    if (!input.trim() || !isValidEgyptianNumber(input)) return ""
    return getEgyptianVisual(parseInt(input))
  }, [input])

  const systemInfo = getSystemInfo()

  const handleClear = () => {
    setInput("")
    setError("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Trigger conversion
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">About Egyptian Numerals</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          The system of ancient Egyptian numerals was used in Ancient Egypt from around 3000 BC until the early first millennium AD. It was a system of numeration based on multiples of ten, often rounded off to the higher power, written in hieroglyphs. The Egyptians had no concept of a place-valued system such as the decimal system. The hieratic form of numerals stressed an exact finite series notation, ciphered one to one onto the Egyptian alphabet.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Enter the number to translate to Egyptian numeral.
        </p>
      </div>

      {/* System Info */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-3">
        <h3 className="text-sm font-semibold text-foreground">System Characteristics</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {systemInfo.characteristics.map((char, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span>{char}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conversion Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Convert Number to Egyptian Numeral</h3>

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Number (1-9,999,999)</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter a number"
              min="1"
              max="9999999"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              onClick={handleClear}
              className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            if (isValidEgyptianNumber(input)) {
              copyToClipboard(egyptianVisual)
            }
          }}
          disabled={!egyptianVisual}
          className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Translate to Egyptian Numeral
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Result Display */}
      {breakdown && breakdown.length > 0 && (
        <div className="space-y-6">
          {/* Visual Representation */}
          <div className="bg-card border border-border rounded-lg p-8 space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Egyptian Numeral Representation</h3>
            <div className="text-center space-y-3">
              <div className="text-5xl font-bold text-amber-600 font-serif leading-relaxed break-words">
                {egyptianVisual}
              </div>
              <button
                onClick={() => copyToClipboard(egyptianVisual)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Breakdown by Value</h3>
            <div className="space-y-3">
              {breakdown.map((item, index) => (
                <div key={index} className="bg-background border border-border rounded p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-muted-foreground uppercase">{item.symbol.name}</p>
                      <p className="text-sm text-muted-foreground">{item.symbol.description}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-2xl font-bold text-foreground">{item.symbol.hieroglyph}</p>
                      <p className="text-xs text-muted-foreground">×{item.count}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-foreground border-t border-border pt-2">
                    {item.count} × {item.value} = {item.subtotal}
                  </p>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-amber-500/10 border border-amber-500/20 rounded p-4 flex items-center justify-between">
              <p className="font-semibold text-foreground">Total:</p>
              <p className="text-2xl font-bold text-foreground">{input}</p>
            </div>
          </div>
        </div>
      )}

      {/* Symbol Reference Chart */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Egyptian Numeral Symbols Reference</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EGYPTIAN_SYMBOLS.map((symbol) => (
            <div key={symbol.value} className="bg-card border border-border rounded-lg p-4 space-y-2 text-center">
              <div className="text-4xl font-bold">{symbol.hieroglyph}</div>
              <p className="text-sm font-semibold text-foreground">{symbol.name}</p>
              <p className="text-xs text-muted-foreground">{symbol.value.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground italic">{symbol.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
