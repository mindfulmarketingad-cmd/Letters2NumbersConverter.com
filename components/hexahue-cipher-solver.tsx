"use client"

import { useState, useCallback } from "react"
import { Copy, RotateCcw, Download } from "lucide-react"
import { HEXAHUE_ALPHABET, textToHexahue, hexahueToText, type HexahueCharacter } from "@/lib/hexahue-cipher"

export function HexahueCipherSolver() {
  const [selectedSequence, setSelectedSequence] = useState<HexahueCharacter[]>([])
  const [textInput, setTextInput] = useState("")
  const [mode, setMode] = useState<"click" | "text">("click")

  // Handle clicking on a color block
  const handleCharacterClick = useCallback((char: HexahueCharacter) => {
    setSelectedSequence(prev => [...prev, char])
  }, [])

  // Handle text input mode
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setTextInput(text)
    setSelectedSequence(textToHexahue(text))
  }

  // Clear all selections
  const handleClear = useCallback(() => {
    setSelectedSequence([])
    setTextInput("")
  }, [])

  // Remove last character
  const handleUndo = useCallback(() => {
    setSelectedSequence(prev => prev.slice(0, -1))
  }, [])

  // Copy result to clipboard
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(hexahueToText(selectedSequence))
  }, [selectedSequence])

  // Download as image
  const handleDownload = useCallback(() => {
    const canvas = document.getElementById("hexahue-result-canvas") as HTMLCanvasElement
    if (canvas) {
      const link = document.createElement("a")
      link.href = canvas.toDataURL("image/png")
      link.download = "hexahue.png"
      link.click()
    }
  }, [])

  const characters = Object.keys(HEXAHUE_ALPHABET) as HexahueCharacter[]

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-100/50 border border-amber-500/30 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">About Hexahue Cipher</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Hexahue Cipher is a unique color-based encoding system invented by Josh Cramer. It uses combinations of common, easily distinguishable colors (red, green, blue, yellow, cyan, magenta) in HTML notation to represent letters, numbers, and punctuation. Each character is represented as a 2×4 grid of colored squares.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong>Goal:</strong> Translate text into colorful visual blocks for unique communication and artistic expression.
        </p>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-3 border-b border-border pb-4">
        <button
          onClick={() => setMode("click")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === "click"
              ? "bg-amber-600 text-white"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Click Blocks
        </button>
        <button
          onClick={() => setMode("text")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === "text"
              ? "bg-amber-600 text-white"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          Type Text
        </button>
      </div>

      {/* Text Input Mode */}
      {mode === "text" && (
        <div className="space-y-3 bg-card border border-border rounded-lg p-6">
          <label className="text-sm font-semibold text-foreground">Enter text to encode:</label>
          <textarea
            value={textInput}
            onChange={handleTextChange}
            placeholder="Type text here to convert to Hexahue..."
            className="w-full h-32 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      )}

      {/* Click Mode - Character Grid */}
      {mode === "click" && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">Click on any color block below to add it to your translation:</p>
          <div className="bg-card border border-border rounded-lg p-6 space-y-6">
            {/* Group characters by rows */}
            {[
              ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
              ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
              ["U", "V", "W", "X", "Y", "Z", ".", ",", " "],
              ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            ].map((row, rowIdx) => (
              <div key={rowIdx} className="space-y-2">
                <div className="flex flex-wrap gap-3 items-start">
                  {row.map((char) => (
                    <button
                      key={char}
                      onClick={() => handleCharacterClick(char as HexahueCharacter)}
                      className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
                    >
                      {/* Color block grid */}
                      <div
                        className="grid grid-cols-4 gap-0.5 border-2 border-border group-hover:border-amber-500 transition-colors rounded"
                      >
                        {HEXAHUE_ALPHABET[char as HexahueCharacter][0].map((color, idx) => (
                          <div
                            key={`top-${idx}`}
                            className="w-5 h-5 rounded-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {HEXAHUE_ALPHABET[char as HexahueCharacter][1].map((color, idx) => (
                          <div
                            key={`bot-${idx}`}
                            className="w-5 h-5 rounded-sm"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-foreground">
                        {char === " " ? "Space" : char}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Result Display */}
      {selectedSequence.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Translation Result</h3>
          
          {/* Visual result */}
          <div className="bg-card border border-border rounded-lg p-6 overflow-x-auto">
            <div className="flex flex-wrap gap-4 justify-start">
              {selectedSequence.map((char, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="grid grid-cols-4 gap-1 bg-muted p-2 rounded">
                    {HEXAHUE_ALPHABET[char][0].map((color, cidx) => (
                      <div
                        key={`top-${cidx}`}
                        className="w-6 h-6 rounded-sm border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                    {HEXAHUE_ALPHABET[char][1].map((color, cidx) => (
                      <div
                        key={`bot-${cidx}`}
                        className="w-6 h-6 rounded-sm border border-border"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text result */}
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted-foreground mb-3">Text representation:</p>
            <div className="bg-background p-4 rounded border border-border">
              <p className="font-mono text-foreground break-all">{hexahueToText(selectedSequence)}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleUndo}
              className="px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium transition-colors"
            >
              Undo
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Text
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Reference Chart */}
      <div className="space-y-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-foreground">Hexahue Reference Chart</h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>All Hexahue characters use combinations of common HTML colors:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><span style={{ color: "#FF0000" }}>■</span> Red (#FF0000)</li>
            <li><span style={{ color: "#00FF00" }}>■</span> Green (#00FF00)</li>
            <li><span style={{ color: "#0000FF" }}>■</span> Blue (#0000FF)</li>
            <li><span style={{ color: "#FFFF00" }}>■</span> Yellow (#FFFF00)</li>
            <li><span style={{ color: "#00FFFF" }}>■</span> Cyan (#00FFFF)</li>
            <li><span style={{ color: "#FF00FF" }}>■</span> Magenta (#FF00FF)</li>
            <li className="text-gray-500">■ Black/White (for numbers)</li>
          </ul>
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 space-y-3 text-sm text-muted-foreground">
        <p><strong>See also:</strong></p>
        <ul className="space-y-1">
          <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher Translator</a> - Letter to number conversion</li>
          <li><a href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</a> - Classic digraph substitution</li>
          <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher</li>
        </ul>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
