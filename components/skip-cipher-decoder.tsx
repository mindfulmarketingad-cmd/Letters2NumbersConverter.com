'use client'

import { useState } from 'react'
import { Copy, RotateCcw, Zap } from 'lucide-react'
import {
  decryptSkipCipher,
  bruteForceSkipCipher,
  isValidSkipParameters,
} from '@/lib/skip-cipher'

export function SkipCipherDecoder() {
  const [ciphertext, setCiphertext] = useState('ddSpo 1Cek')
  const [skipSize, setSkipSize] = useState('17')
  const [startPosition, setStartPosition] = useState('1')
  const [ignoreSpecial, setIgnoreSpecial] = useState(true)
  const [error, setError] = useState('')
  const [result, setResult] = useState('')
  const [bruteForceResults, setBruteForceResults] = useState<any[]>([])
  const [showBruteResults, setShowBruteResults] = useState(false)
  const [useManual, setUseManual] = useState(false)

  const handleDecryptManual = () => {
    try {
      setError('')
      const validation = isValidSkipParameters(skipSize, startPosition, ciphertext.length)
      if (!validation.valid) {
        setError(validation.error || 'Invalid parameters')
        return
      }

      const decrypted = decryptSkipCipher(
        ciphertext,
        parseInt(skipSize),
        parseInt(startPosition),
        ignoreSpecial
      )
      setResult(decrypted.result)
      setBruteForceResults([])
      setShowBruteResults(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decryption failed')
    }
  }

  const handleBruteForce = () => {
    try {
      setError('')
      const results = bruteForceSkipCipher(ciphertext, ignoreSpecial, 100)
      setBruteForceResults(results.slice(0, 20))
      setShowBruteResults(true)
      if (results.length > 0) {
        setResult(results[0].result)
        setSkipSize(results[0].skipSize.toString())
        setStartPosition(results[0].startPosition.toString())
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Brute force failed')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleClear = () => {
    setCiphertext('')
    setResult('')
    setError('')
    setBruteForceResults([])
    setShowBruteResults(false)
  }

  return (
    <div className="w-full space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Ciphertext (Encrypted Message)</label>
          <textarea
            value={ciphertext}
            onChange={(e) => setCiphertext(e.target.value)}
            placeholder="Enter your encrypted skip cipher text here..."
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-24 resize-none"
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={ignoreSpecial}
            onChange={(e) => setIgnoreSpecial(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm text-muted-foreground">Ignore punctuation and spaces</span>
        </label>

        {/* Brute Force Section */}
        <div className="border-t border-border pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Automatic Decoder (Brute Force)</h3>
            <span className="text-xs bg-blue-500/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded">Recommended</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Let our tool automatically find the skip size and starting position by testing all possible combinations.
          </p>
          <button
            onClick={handleBruteForce}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Crack Code (Auto Detect)
          </button>
        </div>

        {/* Manual Decryption */}
        <div className="border-t border-border pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="useManual"
              checked={useManual}
              onChange={(e) => setUseManual(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="useManual" className="text-sm font-medium cursor-pointer text-foreground">
              Manual Parameters
            </label>
          </div>

          {useManual && (
            <div className="space-y-4 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                If you know the skip size and starting position, enter them here:
              </p>
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
                  <label className="text-sm font-medium text-foreground">Starting Position</label>
                  <input
                    type="number"
                    value={startPosition}
                    onChange={(e) => setStartPosition(e.target.value)}
                    min="1"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
              <button
                onClick={handleDecryptManual}
                className="w-full px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Decrypt (Manual)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Decrypted Message</h3>
          <div className="bg-background border border-border rounded p-4 space-y-3">
            <p className="font-mono text-foreground break-all text-lg">{result}</p>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(result)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded bg-muted hover:bg-muted/80 transition-colors text-sm"
              >
                <Copy className="w-4 h-4" />
                Copy Result
              </button>
              {!useManual && (
                <div className="text-xs text-muted-foreground flex items-center ml-auto">
                  Skip: {skipSize} | Start: {startPosition}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Brute Force Results */}
      {showBruteResults && bruteForceResults.length > 0 && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Possible Decryptions (Top Results)</h3>
          <p className="text-xs text-muted-foreground">Click any result to select it:</p>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {bruteForceResults.map((item, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded p-3 cursor-pointer hover:border-blue-500 transition-colors group"
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
                    className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors flex-shrink-0 opacity-0 group-hover:opacity-100"
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
      {(result || ciphertext) && (
        <button
          onClick={handleClear}
          className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Clear All
        </button>
      )}

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
        <p>Your data is processed locally in your browser. Nothing is stored on our servers.</p>
      </div>
    </div>
  )
}
