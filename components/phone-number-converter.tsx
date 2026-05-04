"use client"

import { useState, useCallback, useEffect } from "react"
import { Copy, Download, ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Phone keypad mapping: letter -> digit
const letterToDigit: Record<string, string> = {
  'A': '2', 'B': '2', 'C': '2',
  'D': '3', 'E': '3', 'F': '3',
  'G': '4', 'H': '4', 'I': '4',
  'J': '5', 'K': '5', 'L': '5',
  'M': '6', 'N': '6', 'O': '6',
  'P': '7', 'Q': '7', 'R': '7', 'S': '7',
  'T': '8', 'U': '8', 'V': '8',
  'W': '9', 'X': '9', 'Y': '9', 'Z': '9',
}

// Digit to letters mapping for reverse conversion
const digitToLetters: Record<string, string[]> = {
  '2': ['A', 'B', 'C'],
  '3': ['D', 'E', 'F'],
  '4': ['G', 'H', 'I'],
  '5': ['J', 'K', 'L'],
  '6': ['M', 'N', 'O'],
  '7': ['P', 'Q', 'R', 'S'],
  '8': ['T', 'U', 'V'],
  '9': ['W', 'X', 'Y', 'Z'],
}

// Phone keypad layout
const keypadNumbers = [
  { digit: '1', letters: '' },
  { digit: '2', letters: 'ABC' },
  { digit: '3', letters: 'DEF' },
  { digit: '4', letters: 'GHI' },
  { digit: '5', letters: 'JKL' },
  { digit: '6', letters: 'MNO' },
  { digit: '7', letters: 'PQRS' },
  { digit: '8', letters: 'TUV' },
  { digit: '9', letters: 'WXYZ' },
  { digit: '0', letters: '' },
]

// Letter keyboard layout (QWERTY-style)
const letterRows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

export function PhoneNumberConverter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [mode, setMode] = useState<"letters-to-numbers" | "numbers-to-letters">("letters-to-numbers")
  const [copied, setCopied] = useState(false)

  // Convert input based on mode
  const convert = useCallback((text: string) => {
    if (mode === "letters-to-numbers") {
      // Convert letters to phone digits
      let result = ""
      for (const char of text.toUpperCase()) {
        if (letterToDigit[char]) {
          result += letterToDigit[char]
        } else if (/[0-9\-\s\(\)\+]/.test(char)) {
          result += char
        }
      }
      return result
    } else {
      // Show possible letters for each digit
      let result = ""
      for (const char of text) {
        if (digitToLetters[char]) {
          result += `[${digitToLetters[char].join('/')}]`
        } else if (/[\-\s\(\)\+]/.test(char)) {
          result += char
        } else if (char === '0' || char === '1') {
          result += char
        }
      }
      return result
    }
  }, [mode])

  // Update output when input or mode changes
  useEffect(() => {
    setOutput(convert(input))
  }, [input, mode, convert])

  // Handle keypad button click
  const handleKeyClick = (key: string) => {
    if (mode === "letters-to-numbers") {
      setInput(prev => prev + key)
    } else {
      // In numbers-to-letters mode, only add digits
      if (/[0-9]/.test(key)) {
        setInput(prev => prev + key)
      }
    }
  }

  // Handle special keys
  const handleDelete = () => {
    setInput(prev => prev.slice(0, -1))
  }

  const handleClear = () => {
    setInput("")
    setOutput("")
  }

  const handleHyphen = () => {
    setInput(prev => prev + "-")
  }

  // Handle keyboard input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  // Download result
  const handleDownload = () => {
    const content = `Input: ${input}\nOutput: ${output}\nMode: ${mode === "letters-to-numbers" ? "Letters → Numbers" : "Numbers → Letters"}`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "phone-number-conversion.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Swap input/output
  const handleSwap = () => {
    if (mode === "letters-to-numbers") {
      setMode("numbers-to-letters")
      setInput(output)
    } else {
      setMode("letters-to-numbers")
      // Only keep the digits when swapping
      setInput(input)
    }
  }

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault()
        handleDelete()
      } else if (e.key === "Escape") {
        handleClear()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        {/* Mode Toggle */}
        <div className="p-4 border-b border-border bg-muted/30">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Conversion Direction</span>
          </div>
          <div className="flex items-center justify-center mt-3">
            <div className="inline-flex rounded-lg bg-muted p-1">
              <button
                onClick={() => setMode("letters-to-numbers")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  mode === "letters-to-numbers"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Letters → Numbers
              </button>
              <button
                onClick={() => setMode("numbers-to-letters")}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  mode === "numbers-to-letters"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Numbers → Letters
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              {mode === "letters-to-numbers" ? "Phone Number or Word" : "Phone Number"}
            </label>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder={mode === "letters-to-numbers" ? "e.g. 1-800-FLOWERS" : "e.g. 1-800-356-9377"}
              className="w-full px-4 py-3 text-lg font-mono bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>

          {/* Virtual Keypad */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Tap keys or use your keyboard · Backspace to delete · Esc to clear
            </p>
            
            {/* Number pad */}
            <div className="grid grid-cols-5 gap-2 mb-3 max-w-md mx-auto">
              {keypadNumbers.map(({ digit, letters }) => (
                <button
                  key={digit}
                  onClick={() => handleKeyClick(digit)}
                  className="flex flex-col items-center justify-center p-3 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  <span className="text-lg font-bold text-foreground">{digit}</span>
                  {letters && (
                    <span className="text-[10px] text-muted-foreground tracking-wider">{letters}</span>
                  )}
                </button>
              ))}
            </div>

            {/* Letter keyboard */}
            {mode === "letters-to-numbers" && (
              <div className="space-y-2 max-w-lg mx-auto">
                {letterRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1">
                    {row.map((letter) => (
                      <button
                        key={letter}
                        onClick={() => handleKeyClick(letter)}
                        className="w-9 h-10 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md text-sm font-semibold text-foreground transition-colors"
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex justify-center gap-2 mt-4 max-w-md mx-auto">
              <button
                onClick={handleHyphen}
                className="flex-1 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground font-medium transition-colors"
              >
                -
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground font-medium transition-colors"
              >
                Delete
              </button>
              <button
                onClick={handleClear}
                className="flex-1 py-2 bg-muted hover:bg-muted/80 rounded-lg text-foreground font-medium transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-muted/30 border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-foreground">
                Result
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSwap}
                  className="h-8 px-2"
                  title="Swap"
                >
                  <ArrowRightLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8 px-2"
                  disabled={!output}
                >
                  <Copy className="h-4 w-4 mr-1" />
                  {copied ? "Copied!" : "Copy"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                  className="h-8 px-2"
                  disabled={!output}
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
            <div className="min-h-[60px] p-3 bg-background rounded-md border border-border">
              <p className="font-mono text-lg text-foreground break-all">
                {output || <span className="text-muted-foreground">Result will appear here...</span>}
              </p>
            </div>
            {output && (
              <p className="text-xs text-muted-foreground mt-2 text-right">
                {mode === "letters-to-numbers" 
                  ? `Converted ${input.length} characters`
                  : `Showing letter options for ${input.replace(/[^0-9]/g, '').length} digits`
                }
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
