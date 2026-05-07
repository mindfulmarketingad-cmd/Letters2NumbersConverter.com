"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw } from "lucide-react"
import {
  processAtbash,
  getAtbashMappings,
  generateAtbashAlphabet,
  getConversionChart,
  validateAlphabet,
} from "@/lib/atbash-cipher"

export function AtbashCipherSolver() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [alphabet, setAlphabet] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const [error, setError] = useState("")
  const [showChart, setShowChart] = useState(true)
  const [preserveCase, setPreserveCase] = useState(true)

  // Generate Atbash mappings
  const mappings = useMemo(() => {
    const validation = validateAlphabet(alphabet)
    if (!validation.valid) {
      setError(validation.error || "Invalid alphabet")
      return new Map()
    }
    setError("")
    return getAtbashMappings("ABCDEFGHIJKLMNOPQRSTUVWXYZ", generateAtbashAlphabet(alphabet))
  }, [alphabet])

  // Process input when it changes
  const handleInputChange = (text: string) => {
    setInput(text)
    if (text && mappings.size > 0) {
      const result = processAtbash(text, mappings, preserveCase)
      setOutput(result)
    } else {
      setOutput("")
    }
  }

  // Reset all
  const handleReset = () => {
    setInput("")
    setOutput("")
    setAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    setError("")
  }

  // Copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  // Get conversion chart
  const chart = useMemo(() => getConversionChart(alphabet), [alphabet])

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="space-y-4 bg-card border border-border rounded-lg p-6">
        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Language</label>
          <select className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>English (English)</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-foreground mb-2 block">Alphabet</label>
          <input
            type="text"
            value={alphabet}
            onChange={(e) => setAlphabet(e.target.value.toUpperCase())}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono text-sm"
          />
          <p className="text-xs text-muted-foreground mt-1">{alphabet.length} characters</p>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={preserveCase}
            onChange={(e) => setPreserveCase(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm text-foreground">Preserve case</span>
        </label>

        {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded text-red-600 text-sm">{error}</div>}
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">Input</label>
          <button
            onClick={() => copyToClipboard(input)}
            disabled={!input}
            className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter your text here..."
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none h-32"
        />
      </div>

      {/* Output Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">Output</label>
          <button
            onClick={() => copyToClipboard(output)}
            disabled={!output}
            className="p-1 text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="The output will be shown here..."
          className="w-full px-4 py-3 border border-border rounded-lg bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none resize-none h-32"
        />
      </div>

      {/* Conversion Chart */}
      <div className="space-y-3">
        <button
          onClick={() => setShowChart(!showChart)}
          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          <span>{showChart ? "▼" : "▶"}</span>
          <span>Conversion Chart</span>
        </button>

        {showChart && (
          <div className="bg-green-700 text-white rounded-lg p-6 overflow-x-auto">
            <h3 className="text-base font-bold mb-4">Atbash Cipher translation (English)</h3>
            <div className="grid grid-cols-4 gap-8 text-sm font-mono">
              {chart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-bold">{item.from}</span>
                  <span>=</span>
                  <span className="font-bold">{item.to}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        className="w-full px-4 py-3 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </button>

      {/* Info Box */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-3 text-sm text-muted-foreground">
        <p>
          <strong>How it works:</strong> The Atbash cipher maps each letter to its reverse in the alphabet. Since it's symmetric, decryption uses the same process as encryption.
        </p>
        <p>
          <strong>Privacy:</strong> Your data stays local and is never stored or transmitted.
        </p>
      </div>
    </div>
  )
}
