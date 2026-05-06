"use client"

import { useState, useCallback } from "react"
import { Copy, Download, RotateCcw } from "lucide-react"
import { decimalToMayan, getMayanVisualRepresentation } from "@/lib/mayan-numeral-converter"

interface MayanDigit {
  value: number
  dots: number
  bars: number
}

function MayanSymbolDisplay({ digit, index }: { digit: MayanDigit; index: number }) {
  const canvasHeight = 120
  const canvasWidth = 80
  const barHeight = 15
  const barWidth = 40
  const dotRadius = 6

  if (digit.value === 0) {
    return (
      <div key={index} className="flex flex-col items-center gap-2">
        <svg width={canvasWidth} height={canvasHeight} className="border border-border rounded bg-background">
          {/* Shell shape for zero */}
          <ellipse cx={canvasWidth / 2} cy={canvasHeight / 2} rx={15} ry={20} fill="none" stroke="currentColor" strokeWidth="2" />
          <line x1={canvasWidth / 2 - 8} y1={canvasHeight / 2 - 10} x2={canvasWidth / 2 + 8} y2={canvasHeight / 2 - 10} stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-xs font-mono font-semibold">0</span>
      </div>
    )
  }

  return (
    <div key={index} className="flex flex-col items-center gap-2">
      <svg width={canvasWidth} height={canvasHeight} className="border border-border rounded bg-background">
        {/* Draw bars */}
        {Array.from({ length: digit.bars }).map((_, i) => (
          <rect
            key={`bar-${i}`}
            x={(canvasWidth - barWidth) / 2}
            y={10 + i * 25}
            width={barWidth}
            height={barHeight}
            fill="currentColor"
            rx="3"
          />
        ))}
        {/* Draw dots */}
        {Array.from({ length: digit.dots }).map((_, i) => (
          <circle
            key={`dot-${i}`}
            cx={canvasWidth / 2 - 12 + (i % 2) * 24}
            cy={10 + digit.bars * 25 + 15 + Math.floor(i / 2) * 20}
            r={dotRadius}
            fill="currentColor"
          />
        ))}
      </svg>
      <span className="text-xs font-mono font-semibold">{digit.value}</span>
    </div>
  )
}

export function MayanNumeralConverter() {
  const [input, setInput] = useState("")
  const [mayanDigits, setMayanDigits] = useState<MayanDigit[]>([])
  const [error, setError] = useState("")

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setError("")
      setMayanDigits([])
      return
    }

    try {
      const num = parseInt(input, 10)

      if (isNaN(num)) {
        setError("Please enter a valid number")
        setMayanDigits([])
        return
      }

      if (num < 0) {
        setError("Please enter a non-negative number")
        setMayanDigits([])
        return
      }

      const result = decimalToMayan(num)
      setMayanDigits(result)
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Conversion failed")
      setMayanDigits([])
    }
  }, [input])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleConvert()
    }
  }

  const copyToClipboard = () => {
    if (mayanDigits.length > 0) {
      const text = mayanDigits.map((d) => getMayanVisualRepresentation(d)).join("\n---\n")
      navigator.clipboard.writeText(text)
    }
  }

  const downloadAsImage = () => {
    if (mayanDigits.length === 0) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = mayanDigits.length * 100 + 20
    canvas.height = 160

    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "#000000"
    ctx.font = "14px monospace"
    ctx.textAlign = "center"

    let x = 10
    for (const digit of mayanDigits) {
      // Draw value label
      ctx.fillText(digit.value.toString(), x + 40, 20)

      // Draw representation
      ctx.strokeStyle = "#000000"
      ctx.lineWidth = 2

      if (digit.value === 0) {
        // Draw shell
        ctx.beginPath()
        ctx.ellipse(x + 40, 70, 15, 20, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(x + 25, 50)
        ctx.lineTo(x + 55, 50)
        ctx.stroke()
      } else {
        // Draw bars
        for (let i = 0; i < digit.bars; i++) {
          ctx.fillRect(x + 20, 40 + i * 25, 40, 15)
        }

        // Draw dots
        ctx.fillStyle = "#000000"
        for (let i = 0; i < digit.dots; i++) {
          ctx.beginPath()
          ctx.arc(x + 28 + (i % 2) * 24, 55 + digit.bars * 25 + Math.floor(i / 2) * 20, 6, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      x += 100
    }

    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = `mayan-${input}.png`
    link.click()
  }

  const clearAll = () => {
    setInput("")
    setMayanDigits([])
    setError("")
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">How the Mayan Numeral System Works</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The Mayan numeral system uses base-20 (vigesimal) with three symbols: a shell shape for zero (⊘), a dot (•) for one, and a bar (━) for five. Numbers are written vertically, with each position representing a power of 20. For example, the number 13 is shown as three dots above two bars (3 dots + 2 bars = 3 + 10 = 13).
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
            placeholder="Enter the number to translate to Mayan numeral"
            min="0"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          onClick={handleConvert}
          className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
        >
          Translate to Mayan Numeral
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Output Section */}
      {mayanDigits.length > 0 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Mayan Numeral Representation</h3>
            <div className="flex flex-wrap gap-4 bg-card border border-border rounded-lg p-6">
              {mayanDigits.map((digit, index) => (
                <MayanSymbolDisplay key={index} digit={digit} index={index} />
              ))}
            </div>
          </div>

          {/* Breakdown */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Breakdown</h3>
            <div className="space-y-2 text-sm text-muted-foreground font-mono">
              <p>
                <strong className="text-foreground">Decimal:</strong> {input}
              </p>
              <p>
                <strong className="text-foreground">Base-20 Digits:</strong> {mayanDigits.map((d) => d.value).join(" × 20 + ")} (reading top to bottom)
              </p>
              <p>
                <strong className="text-foreground">Calculation:</strong>{" "}
                {mayanDigits
                  .map((d, i) => `${d.value} × 20^${mayanDigits.length - 1 - i}`)
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
              onClick={downloadAsImage}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Image
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
