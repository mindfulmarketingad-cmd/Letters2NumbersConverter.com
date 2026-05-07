"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Search, X } from "lucide-react"
import { solveLongestWord, validateInput, getRemainingLetters, type WordResult } from "@/lib/longest-word-solver"

export function LongestWordSolver() {
  const [availableLetters, setAvailableLetters] = useState("ABCDEFGHIJ")
  const [allowReuse, setAllowReuse] = useState(false)
  const [keepOrder, setKeepOrder] = useState(false)
  const [showRemaining, setShowRemaining] = useState(false)
  const [startsWith, setStartsWith] = useState("")
  const [contains, setContains] = useState("")
  const [minLetters, setMinLetters] = useState("")
  const [error, setError] = useState("")
  const [results, setResults] = useState<WordResult[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const handleFindWords = () => {
    try {
      setError("")
      const validation = validateInput(availableLetters)
      if (!validation.valid) {
        setError(validation.error || "Invalid input")
        return
      }

      const minLen = minLetters ? parseInt(minLetters) : undefined
      const solved = solveLongestWord(availableLetters, allowReuse, keepOrder, startsWith, contains, minLen)

      if (solved.length === 0) {
        setError("No words found with these letters and filters")
        return
      }

      setResults(solved)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Solve failed")
    }
  }

  const handleClear = () => {
    setAvailableLetters("")
    setResults([])
    setError("")
    setStartsWith("")
    setContains("")
    setMinLetters("")
  }

  const handleFilterWords = () => {
    // Re-run search with current filters
    handleFindWords()
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const longestWord = useMemo(() => results[0]?.word || "", [results])
  const totalWords = useMemo(() => results.length, [results])

  return (
    <div className="w-full space-y-8">
      {/* Input Section */}
      <div className="space-y-6 bg-card border border-border rounded-lg p-6">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-amber-600">●</span> Available Letters
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={availableLetters}
              onChange={(e) => setAvailableLetters(e.target.value.toUpperCase())}
              placeholder="Enter letters here"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 uppercase"
            />
            <button
              onClick={() => setAvailableLetters("")}
              className="px-3 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              title="Clear letters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground flex items-center gap-2">
            <span className="text-amber-600">●</span> Dictionary
          </label>
          <select className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500">
            <option>ENGLISH dCode Dictionary (full - all words)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={allowReuse}
              onChange={(e) => setAllowReuse(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">Letter can be used multiple times (more than once)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={keepOrder}
              onChange={(e) => setKeepOrder(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">Keep letter order (no scrambling)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showRemaining}
              onChange={(e) => setShowRemaining(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground">Show remaining unused letters</span>
          </label>
        </div>

        <button
          onClick={handleFindWords}
          className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Search className="w-4 h-4" />
          Find The Biggest Words
        </button>
      </div>

      {/* Filter Section */}
      {results.length > 0 && (
        <div className="space-y-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-6">
          <h3 className="font-semibold text-foreground flex items-center gap-2 cursor-pointer" onClick={() => setShowFilters(!showFilters)}>
            <span className="text-amber-600">●</span> Filter Results {showFilters ? "▼" : "▶"}
          </h3>

          {showFilters && (
            <div className="space-y-4 mt-4 pt-4 border-t border-blue-500/20">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Number of letters</label>
                <input
                  type="number"
                  value={minLetters}
                  onChange={(e) => setMinLetters(e.target.value)}
                  placeholder="e.g., 5"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Words starting with this letter (or sequence)</label>
                <input
                  type="text"
                  value={startsWith}
                  onChange={(e) => setStartsWith(e.target.value.toUpperCase())}
                  placeholder="e.g., A or AB"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Words containing this letter (or sequence)</label>
                <input
                  type="text"
                  value={contains}
                  onChange={(e) => setContains(e.target.value.toUpperCase())}
                  placeholder="e.g., D or DE"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 uppercase"
                />
              </div>

              <button
                onClick={handleFilterWords}
                className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Filter Matching Words
              </button>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Results Summary */}
      {results.length > 0 && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-3xl font-bold text-foreground">{longestWord}</p>
              <p className="text-xs text-muted-foreground mt-1">Longest word ({longestWord.length} letters)</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">{totalWords}</p>
              <p className="text-xs text-muted-foreground mt-1">Total words found</p>
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
                  <p className="font-semibold text-foreground text-lg">{result.word.toUpperCase()}</p>
                  <div className="flex gap-3 mt-1">
                    <p className="text-xs text-muted-foreground">{result.length} letters</p>
                    {showRemaining && (
                      <p className="text-xs text-muted-foreground">
                        Remaining: {getRemainingLetters(result.word, availableLetters)}
                      </p>
                    )}
                  </div>
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
          <p><a href="/tools/scrabble-solver" className="text-primary hover:underline">Scrabble Solver</a> - Anagrams Generator</p>
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
