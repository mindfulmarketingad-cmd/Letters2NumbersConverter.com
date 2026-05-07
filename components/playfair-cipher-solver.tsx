"use client"

import { useState } from "react"
import { Copy, RotateCcw, Zap } from "lucide-react"
import { playfairCipher, validatePlayfairInput, type PlayfairResult } from "@/lib/playfair-cipher"

export function PlayfairCipherSolver() {
  const [text, setText] = useState("")
  const [keyword, setKeyword] = useState("")
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt")
  const [mergeWith, setMergeWith] = useState("J")
  const [paddingLetter, setPaddingLetter] = useState("X")
  const [error, setError] = useState("")
  const [result, setResult] = useState<PlayfairResult | null>(null)

  const handleSolve = () => {
    try {
      setError("")
      const validation = validatePlayfairInput(text, keyword)
      if (!validation.valid) {
        setError(validation.error || "Invalid input")
        return
      }

      const solved = playfairCipher(text, keyword, {
        mode,
        mergeLetterWith: mergeWith,
        paddingLetter,
      })

      setResult(solved)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Encryption failed")
    }
  }

  const handleClear = () => {
    setText("")
    setKeyword("")
    setResult(null)
    setError("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-100/50 border border-amber-500/30 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">About Playfair Cipher</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          The Playfair cipher is a classic digraph substitution that encrypts text in pairs of letters, invented by (Sir) Charles Wheatstone in 1854 and named after Lord Lyon Playfair who popularized its use.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong>How it works:</strong> The Playfair cipher uses a 5×5 key square to encrypt pairs of letters. It's significantly more secure than simple substitution ciphers and was widely used in military and diplomatic communications.
        </p>
      </div>

      {/* Input Section */}
      <div className="space-y-6 bg-card border border-border rounded-lg p-6">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Language</label>
          <select className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>English (English)</option>
          </select>
          <p className="text-xs text-muted-foreground">Non-English letters will be translated to English.</p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Ciphertext or plaintext</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste the Playfair text here..."
            className="w-full h-32 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground">Mode</label>
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value as "encrypt" | "decrypt")}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="encrypt">Encrypt</option>
              <option value="decrypt">Decrypt</option>
            </select>
            <p className="text-xs text-muted-foreground">
              {mode === "encrypt" ? "Encrypt = plaintext to ciphertext" : "Decrypt = ciphertext to plaintext"}
            </p>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground">Key</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Enter a keyword or phrase"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <p className="text-xs text-muted-foreground">Duplicates are removed and only letters from A-Z are used.</p>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 pt-4 border-t border-border">
          <p className="text-sm font-semibold text-foreground">Options</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground">Merge letters for 5x5 square</label>
              <select
                value={mergeWith}
                onChange={(e) => setMergeWith(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="J">J</option>
                <option value="I">I</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Playfair uses 25 letters. English typically merges J into I.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground">Padding letter</label>
              <input
                type="text"
                value={paddingLetter}
                onChange={(e) => setPaddingLetter(e.target.value.slice(0, 1).toUpperCase())}
                maxLength={1}
                className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
              />
              <p className="text-xs text-muted-foreground">
                Used to split duplicates and pad odd-length text.
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-foreground">Duplicate letters</label>
              <select className="w-full px-3 py-2 border border-border rounded text-sm bg-background focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Split duplicates</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Applies when encrypting only.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleSolve}
          className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Find The Biggest Words
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Result */}
      {result && (
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <label className="text-sm font-semibold text-foreground block mb-3">Result</label>
            <textarea
              value={result.output}
              readOnly
              className="w-full h-32 px-4 py-3 border border-border rounded-lg bg-muted text-foreground resize-none font-mono text-sm"
            />
            <button
              onClick={() => copyToClipboard(result.output)}
              className="mt-2 w-full px-3 py-2 border border-border rounded bg-background hover:bg-muted transition-colors text-sm flex items-center justify-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Copy Result
            </button>
          </div>

          {/* Key Square */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Key square</h3>
            <p className="text-xs text-muted-foreground">The square is rebuilt as you change the key and merged letter.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-center text-sm">
                <tbody>
                  {result.keySquare.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      {row.map((letter, colIdx) => (
                        <td
                          key={colIdx}
                          className="border border-border p-3 w-12 h-12 font-semibold text-foreground bg-muted"
                        >
                          {letter}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Keyed alphabet</p>
              <p className="text-xs text-muted-foreground font-mono break-all">{result.keyedAlphabet}</p>
            </div>
          </div>

          <button
            onClick={handleClear}
            className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>
      )}

      {/* Related Links */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
        <p><strong>See also:</strong></p>
        <div className="space-y-1">
          <p><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher encryption</p>
          <p><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number conversion</p>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
