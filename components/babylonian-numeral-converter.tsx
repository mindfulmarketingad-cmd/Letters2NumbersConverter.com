"use client"

import { useState, useMemo } from "react"
import { Copy, Download, RotateCcw } from "lucide-react"
import { decimalToBabylonian, getCuneiformSymbol, getBabylonianSimpleRepresentation } from "@/lib/babylonian-numeral-converter"

interface BabylonianDigit {
  value: number
  tens: number
  ones: number
}

function BabylonianSymbolDisplay({ digit, index }: { digit: BabylonianDigit; index: number }) {
  const canvasHeight = 100
  const canvasWidth = 120
  const chevronWidth = 30
  const wedgeWidth = 20

  const symbol = getCuneiformSymbol(digit)

  return (
    <div key={index} className="flex flex-col items-center gap-2">
      <div className="border border-border rounded bg-background p-4 min-h-24 flex items-center justify-center">
        <div className="text-5xl font-bold text-foreground select-none">{symbol}</div>
      </div>
      <div className="text-xs text-center">
        <p className="font-mono font-semibold">{digit.value}</p>
        <p className="text-muted-foreground text-xs">{getBabylonianSimpleRepresentation(digit)}</p>
      </div>
    </div>
  )
}

export function BabylonianNumeralConverter() {
  const [input, setInput] = useState("")
  const [babylonianDigits, setBabylonianDigits] = useState<BabylonianDigit[]>([])
  const [error, setError] = useState("")

  const result = useMemo(() => {
    if (!input.trim()) {
      return { digits: [] as BabylonianDigit[], error: "" }
    }

    try {
      const num = parseInt(input, 10)

      if (isNaN(num)) {
        return { digits: [], error: "Please enter a valid number" }
      }

      if (num < 0) {
        return { digits: [], error: "Please enter a non-negative number" }
      }

      const digits = decimalToBabylonian(num)
      return { digits, error: "" }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Conversion failed"
      return { digits: [], error: errorMsg }
    }
  }, [input])

  const handleConvert = () => {
    if (result.digits.length > 0) {
      setBabylonianDigits(result.digits)
      setError(result.error)
    } else if (result.error) {
      setError(result.error)
      setBabylonianDigits([])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleConvert()
    }
  }

  const copyToClipboard = () => {
    if (babylonianDigits.length > 0) {
      const symbols = babylonianDigits.map((d) => getCuneiformSymbol(d)).join("")
      navigator.clipboard.writeText(symbols)
    }
  }

  const downloadAsText = () => {
    if (babylonianDigits.length === 0) return

    const text = `${input} in Babylonian numeral:\n${babylonianDigits.map((d) => getCuneiformSymbol(d)).join("")}\n\nBreakdown:\n${babylonianDigits
      .map((d, i) => `Position ${i}: ${getBabylonianSimpleRepresentation(d)}`)
      .join("\n")}`

    const element = document.createElement("a")
    const file = new Blob([text], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `babylonian-${input}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const clearAll = () => {
    setInput("")
    setBabylonianDigits([])
    setError("")
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">How the Babylonian Numeral System Works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Babylonian numeral system uses base-60 (sexagesimal) with two symbols: a chevron (𒐛) for tens and a wedge (𒐏) for ones. This elegant system was inherited from the Sumerians and Akkadians. Unlike our decimal system requiring 10 symbols, Babylonians needed only two symbols to represent all values 0-59. Numbers are written left to right, with each position representing a power of 60.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Number</label>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter the number to translate to Babylonian numeral"
            min="0"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <p className="text-xs text-muted-foreground mt-1">Enter a non-negative integer</p>
        </div>

        <button
          onClick={handleConvert}
          className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
        >
          Translate to Babylonian Numeral
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Output Section */}
      {babylonianDigits.length > 0 && (
        <div className="space-y-6">
          {/* Result Display */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Babylonian Numeral Representation</h3>
            <div className="text-center mb-4">
              <p className="text-lg font-semibold text-foreground mb-2">{input} in Babylonian numeral is</p>
              <p className="text-6xl font-bold text-foreground select-none">{babylonianDigits.map((d) => getCuneiformSymbol(d)).join("")}</p>
            </div>
          </div>

          {/* Symbol Grid */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Position Breakdown (Base-60)</h3>
            <div className="flex flex-wrap gap-4 bg-background border border-border rounded-lg p-6">
              {babylonianDigits.map((digit, index) => (
                <BabylonianSymbolDisplay key={index} digit={digit} index={index} />
              ))}
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Calculation Details</h3>
            <div className="space-y-2 text-sm text-muted-foreground font-mono">
              <p>
                <strong className="text-foreground">Decimal:</strong> {input}
              </p>
              <p>
                <strong className="text-foreground">Base-60 Digits:</strong> {babylonianDigits.map((d) => d.value).join(", ")} (reading left to right)
              </p>
              <p>
                <strong className="text-foreground">Calculation:</strong>{" "}
                {babylonianDigits
                  .map((d, i) => `${d.value} × 60^${babylonianDigits.length - 1 - i}`)
                  .join(" + ")}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={downloadAsText}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Clear
            </button>
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
