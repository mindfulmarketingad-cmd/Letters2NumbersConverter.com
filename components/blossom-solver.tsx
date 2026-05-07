"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Zap } from "lucide-react"
import { solveBlossom, validateBlossomInput, type BlossomResult } from "@/lib/blossom-solver"

export function BlossomSolver() {
  const [center, setCenter] = useState("A")
  const [petals, setPetals] = useState("BCDEFG")
  const [error, setError] = useState("")
  const [results, setResults] = useState<BlossomResult[]>([])
  const [commonOnly, setCommonOnly] = useState(true)
  const [showOnlyPangrams, setShowOnlyPangrams] = useState(false)

  const handleSolve = () => {
    try {
      setError("")
      const validation = validateBlossomInput(center, petals)
      if (!validation.valid) {
        setError(validation.error || "Invalid input")
        return
      }

      const solved = solveBlossom(center, petals, commonOnly, showOnlyPangrams)
      if (solved.length === 0) {
        setError("No words found with these letters")
        return
      }

      setResults(solved)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Solve failed")
    }
  }

  const handleClear = () => {
    setCenter("")
    setPetals("")
    setResults([])
    setError("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const totalScore = useMemo(() => results.reduce((sum, r) => sum + r.score, 0), [results])
  const pangrams = useMemo(() => results.filter(r => r.isPangram), [results])

  return (
    <div className="w-full space-y-8">
      {/* Input Section */}
      <div className="space-y-6 bg-card border border-border rounded-lg p-6">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-amber-600">●</span> Central Letter
          </label>
          <input
            type="text"
            value={center}
            onChange={(e) => setCenter(e.target.value.toUpperCase().slice(0, 1))}
            placeholder="A"
            maxLength={1}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-amber-600">●</span> 6 Petal Letters
          </label>
          <input
            type="text"
            value={petals}
            onChange={(e) => setPetals(e.target.value.toUpperCase().slice(0, 6))}
            placeholder="BCDEFG"
            maxLength={6}
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
          />
          <p className="text-xs text-muted-foreground">{petals.length}/6 letters</p>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-amber-600">●</span> Dictionary
          </label>
          <select className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>ENGLISH Common Dictionary (usual words only)</option>
          </select>
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showOnlyPangrams}
            onChange={(e) => setShowOnlyPangrams(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm text-foreground">Show only pangrams (words with the 7 letters)</span>
        </label>

        <button
          onClick={handleSolve}
          className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Show Answers
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Results Summary */}
      {results.length > 0 && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{results.length}</p>
              <p className="text-xs text-muted-foreground">Total Words</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{pangrams.length}</p>
              <p className="text-xs text-muted-foreground">Pangrams</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">{totalScore}</p>
              <p className="text-xs text-muted-foreground">Total Score</p>
            </div>
          </div>
        </div>
      )}

      {/* Results List */}
      {results.length > 0 && (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {results.map((result, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-4 hover:border-amber-500 transition-colors"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground text-lg">{result.word.toUpperCase()}</p>
                    {result.isPangram && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-700 text-xs font-semibold rounded">
                        PANGRAM
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{result.length} letters • {result.score} points</p>
                </div>
                <button
                  onClick={() => copyToClipboard(result.word)}
                  className="p-2 rounded bg-muted hover:bg-muted/80 transition-colors flex-shrink-0"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Related Links */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-2 text-sm text-muted-foreground">
        <p><strong>See also:</strong></p>
        <div className="space-y-1">
          <p><a href="/tools/wordle-solver" className="text-primary hover:underline">Wordle Solver</a> - Spelling Bee</p>
        </div>
      </div>

      {/* Clear Button */}
      {results.length > 0 && (
        <button
          onClick={handleClear}
          className="w-full px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Clear
        </button>
      )}

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
