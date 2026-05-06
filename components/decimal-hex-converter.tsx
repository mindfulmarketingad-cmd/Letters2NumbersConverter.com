"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, ArrowRightLeft } from "lucide-react"
import {
  decimalToHex,
  hexToDecimal,
  isValidDecimal,
  isValidHex,
  formatHex,
  getConversionDetails,
  MAX_DECIMAL,
  MIN_DECIMAL,
} from "@/lib/decimal-hex-converter"

export function DecimalHexConverter() {
  const [decimalInput, setDecimalInput] = useState("79")
  const [hexOutput, setHexOutput] = useState("")
  const [error, setError] = useState("")
  const [converted, setConverted] = useState(false)

  const handleConvert = () => {
    if (!decimalInput.trim()) {
      setError("Please enter a decimal value")
      return
    }

    try {
      if (!isValidDecimal(decimalInput)) {
        setError(`Value must be between ${MIN_DECIMAL.toLocaleString()} and ${MAX_DECIMAL.toLocaleString()}`)
        return
      }

      const hex = decimalToHex(decimalInput)
      setHexOutput(hex)
      setError("")
      setConverted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed")
      setHexOutput("")
    }
  }

  const handleSwap = () => {
    if (!hexOutput.trim()) return

    try {
      if (!isValidHex(hexOutput)) {
        setError("Invalid hexadecimal value")
        return
      }

      const decimal = hexToDecimal(hexOutput)
      setDecimalInput(decimal)
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed")
    }
  }

  const conversionDetails = useMemo(() => {
    if (!converted && !hexOutput) return null
    return getConversionDetails(decimalInput, hexOutput)
  }, [decimalInput, hexOutput, converted])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const clearAll = () => {
    setDecimalInput("")
    setHexOutput("")
    setError("")
    setConverted(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleConvert()
    }
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">How Decimal to Hex Conversion Works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Decimal (base-10) numbers use digits 0-9, while hexadecimal (base-16) uses digits 0-9 and letters A-F. This converter transforms decimal numbers into their hexadecimal equivalents, supporting values up to 19 digits with a maximum value of 9,223,372,036,854,775,807.
        </p>
      </div>

      {/* Conversion Section */}
      <div className="bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20 rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Decimal Input */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground">
              Decimal Value (max: {MAX_DECIMAL.toLocaleString()})
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={decimalInput}
                onChange={(e) => setDecimalInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter decimal number"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Convert Button */}
          <div className="flex items-end">
            <button
              onClick={handleConvert}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Convert
            </button>
          </div>
        </div>

        {/* Hex Output */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Hexadecimal Value</label>
          <textarea
            value={hexOutput}
            readOnly
            placeholder="Converted hexadecimal value will appear here"
            className="w-full px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none resize-none min-h-24"
          />
        </div>

        {/* Swap Link */}
        {hexOutput && (
          <div className="text-center">
            <button
              onClick={handleSwap}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <ArrowRightLeft className="w-4 h-4" />
              swap conversion: Hex to Decimal
            </button>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Conversion Details */}
      {conversionDetails && (
        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Decimal to hex conversion result in base numbers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-background border border-border rounded p-3">
              <p className="text-xs text-muted-foreground font-medium mb-1">Decimal</p>
              <p className="font-mono font-semibold text-foreground break-all">{conversionDetails.decimal}</p>
            </div>
            <div className="bg-background border border-border rounded p-3">
              <p className="text-xs text-muted-foreground font-medium mb-1">Hexadecimal</p>
              <p className="font-mono font-semibold text-foreground">{conversionDetails.hex}</p>
            </div>
            <div className="bg-background border border-border rounded p-3">
              <p className="text-xs text-muted-foreground font-medium mb-1">With Prefix</p>
              <p className="font-mono font-semibold text-foreground">{conversionDetails.hexWithPrefix}</p>
            </div>
            <div className="bg-background border border-border rounded p-3">
              <p className="text-xs text-muted-foreground font-medium mb-1">Bits</p>
              <p className="font-mono font-semibold text-foreground">{conversionDetails.binaryLength}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => copyToClipboard(hexOutput)}
          disabled={!hexOutput}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
        <button
          onClick={clearAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Clear All
        </button>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
