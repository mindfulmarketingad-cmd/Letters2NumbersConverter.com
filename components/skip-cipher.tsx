"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Zap } from "lucide-react"
import {
  encryptSkipCipher,
  decryptSkipCipher,
  bruteForceSkipCipher,
  isValidSkipParameters,
} from "@/lib/skip-cipher"

type ActiveTab = "encrypt" | "decrypt"

export function SkipCipherTool() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("encrypt")
  const [plaintext, setPlaintext] = useState("dCode Skip")
  const [ciphertext, setCiphertext] = useState("ddSpo 1Cek")
  const [skipSize, setSkipSize] = useState("17")
  const [startPosition, setStartPosition] = useState("1")
  const [ignoreSpecial, setIgnoreSpecial] = useState(true)
  const [error, setError] = useState("")
  const [result, setResult] = useState("")
  const [bruteForceResults, setBruteForceResults] = useState<any[]>([])
  const [showBruteResults, setShowBruteResults] = useState(false)

  const handleEncrypt = () => {
    try {
      setError("")
      const validation = isValidSkipParameters(skipSize, startPosition, plaintext.length)
      if (!validation.valid) {
        setError(validation.error || "Invalid parameters")
        return
      }

      const encrypted = encryptSkipCipher(
        plaintext,
        parseInt(skipSize),
        parseInt(startPosition),
        ignoreSpecial
      )
      setResult(encrypted.result)
      setCiphertext(encrypted.result)
      setBruteForceResults([])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Encryption failed")
    }
  }

  const handleDecrypt = () => {
    try {
      setError("")
      const validation = isValidSkipParameters(skipSize, startPosition, ciphertext.length)
      if (!validation.valid) {
        setError(validation.error || "Invalid parameters")
        return
      }

      const decrypted = decryptSkipCipher(
        ciphertext,
        parseInt(skipSize),
        parseInt(startPosition),
        ignoreSpecial
      )
      setResult(decrypted.result)
      setPlaintext(decrypted.result)
      setBruteForceResults([])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Decryption failed")
    }
  }

  const handleBruteForce = () => {
    try {
      setError("")
      const results = bruteForceSkipCipher(ciphertext, ignoreSpecial, 100)
      setBruteForceResults(results.slice(0, 20)) // Top 20 results
      setShowBruteResults(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Brute force failed")
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleClear = () => {
    setPlaintext("")
    setCiphertext("")
    setResult("")
    setError("")
    setBruteForceResults([])
  }

  return (
    <div className="w-full space-y-8">
      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => setActiveTab("encrypt")}
          className={`px-4 py-2 font-medium text-sm transition-colors ${
            activeTab === "encrypt"
              ? "text-amber-600 border-b-2 border-amber-600"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Encrypt
        </button>
        <button
          onClick={() => setActiveTab("decrypt")}
          className={`px-4 py-2 font-medium text-sm transition-colors ${
            activeTab === "decrypt"
              ? "text-amber-600 border-b-2 border-amber-600"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Decrypt
        </button>
      </div>

      {/* Encrypt Tab */}
      {activeTab === "encrypt" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Plaintext</label>
            <textarea
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              placeholder="Enter text to encrypt"
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-24 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Skip Size</label>
              <input
                type="number"
                value={skipSize}
                onChange={(e) => setSkipSize(e.target.value)}
                min="1"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Initial Position (Start = 1)</label>
              <input
                type="number"
                value={startPosition}
                onChange={(e) => setStartPosition(e.target.value)}
                min="1"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={ignoreSpecial}
              onChange={(e) => setIgnoreSpecial(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-muted-foreground">Ignore punctuation (and space, etc.)</span>
          </label>

          <button
            onClick={handleEncrypt}
            className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Encrypt
          </button>
        </div>
      )}

      {/* Decrypt Tab */}
      {activeTab === "decrypt" && (
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Ciphertext</label>
            <textarea
              value={ciphertext}
              onChange={(e) => setCiphertext(e.target.value)}
              placeholder="Enter text to decrypt"
              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-24 resize-none"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Automatic Skip Parameter Finder (Brute Force)</h3>
            <button
              onClick={handleBruteForce}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Decrypt (Auto)
            </button>
          </div>

          <div className="border-t border-border pt-6 space-y-3">
            <h3 className="text-sm font-semibold text-foreground">Manual Parameters</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Skip Size</label>
                <input
                  type="number"
                  value={skipSize}
                  onChange={(e) => setSkipSize(e.target.value)}
                  min="1"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Initial Position (Start = 1)</label>
                <input
                  type="number"
                  value={startPosition}
                  onChange={(e) => setStartPosition(e.target.value)}
                  min="1"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={ignoreSpecial}
                onChange={(e) => setIgnoreSpecial(e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-muted-foreground">Ignore punctuation (and space, etc.)</span>
            </label>

            <button
              onClick={handleDecrypt}
              className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Decrypt (Manual)
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Result Display */}
      {result && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Result</h3>
          <div className="bg-background border border-border rounded p-4 space-y-3">
            <p className="font-mono text-foreground break-all">{result}</p>
            <button
              onClick={() => copyToClipboard(result)}
              className="inline-flex items-center gap-2 px-3 py-2 rounded bg-muted hover:bg-muted/80 transition-colors text-sm"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Brute Force Results */}
      {showBruteResults && bruteForceResults.length > 0 && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Possible Decryptions (Top Results)</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {bruteForceResults.map((item, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded p-3 cursor-pointer hover:border-amber-500 transition-colors"
                onClick={() => {
                  setResult(item.result)
                  setSkipSize(item.skipSize.toString())
                  setStartPosition(item.startPosition.toString())
                }}
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-sm text-foreground break-all">{item.result}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Skip: {item.skipSize}, Start: {item.startPosition}, Score: {item.score}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      copyToClipboard(item.result)
                    }}
                    className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors flex-shrink-0"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Clear Button */}
      {(result || plaintext || ciphertext) && (
        <button
          onClick={handleClear}
          className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm"
        >
          Clear All
        </button>
      )}

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
