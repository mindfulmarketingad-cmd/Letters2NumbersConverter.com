"use client"

import { useState, useMemo } from "react"
import { Search, RotateCcw, Copy, Check } from "lucide-react"
import { solveAnagrams, normalizeInput, filterAnagrams, AnagramResult } from "@/lib/anagram-solver"

interface AnagramMatch {
  word: string
  length: number
}

export default function AnagramSolver() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState<AnagramResult>({})
  const [startsWith, setStartsWith] = useState("")
  const [endsWith, setEndsWith] = useState("")
  const [contains, setContains] = useState("")
  const [exactLength, setExactLength] = useState<number | undefined>()
  const [copied, setCopied] = useState(false)

  const filteredResults = useMemo(() => {
    return filterAnagrams(results, startsWith || undefined, endsWith || undefined, contains || undefined, exactLength)
  }, [results, startsWith, endsWith, contains, exactLength])

  const totalMatches = useMemo(() => {
    return Object.values(filteredResults).reduce((sum, words) => sum + words.length, 0)
  }, [filteredResults])

  const handleSearch = () => {
    if (input.trim()) {
      const newResults = solveAnagrams(input)
      setResults(newResults)
    }
  }

  const handleReset = () => {
    setInput("")
    setResults({})
    setStartsWith("")
    setEndsWith("")
    setContains("")
    setExactLength(undefined)
  }

  const handleCopyResults = () => {
    const text = Object.entries(filteredResults)
      .map(([len, words]) => `${len} letters:\n${words.map((w) => w.word).join(", ")}`)
      .join("\n\n")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const wildcardCount = (input.match(/\?/g) || []).length
  const letterCount = input.replace(/\?/g, "").length

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Anagram Solver with Wildcard</h1>
        <p className="text-lg text-muted-foreground">
          The anagram solver with wildcard finds all possible words from the letters you enter. Use ? for wildcards (matches any letter).
        </p>
      </div>

      {/* Main Input Section */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        {/* Input Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-2">Your Letters & Wildcards</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Enter letters and up to 3 wildcards (?)"
              maxLength={23}
              className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground"
            />
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {letterCount} letters, {wildcardCount} wildcards
          </div>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Starts with</label>
            <input
              type="text"
              value={startsWith}
              onChange={(e) => setStartsWith(e.target.value)}
              placeholder="Optional"
              maxLength={5}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Ends with</label>
            <input
              type="text"
              value={endsWith}
              onChange={(e) => setEndsWith(e.target.value)}
              placeholder="Optional"
              maxLength={5}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Contains</label>
            <input
              type="text"
              value={contains}
              onChange={(e) => setContains(e.target.value)}
              placeholder="Optional"
              maxLength={5}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground text-sm"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Exact length</label>
            <input
              type="number"
              value={exactLength || ""}
              onChange={(e) => setExactLength(e.target.value ? parseInt(e.target.value) : undefined)}
              placeholder="Optional"
              min="1"
              max="20"
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground text-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSearch}
            disabled={!input.trim()}
            className="flex-1 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Search className="w-4 h-4 inline mr-2" />
            Search
          </button>
          <button
            onClick={handleReset}
            variant="outline"
            className="px-6 py-3 bg-background border border-border text-foreground rounded-lg hover:bg-card transition-colors"
          >
            <RotateCcw className="w-4 h-4 inline mr-2" />
            Reset
          </button>
        </div>
      </div>

      {/* Results Section */}
      {Object.keys(results).length > 0 && (
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {totalMatches} {totalMatches === 1 ? "word" : "words"} found
              </h2>
              <p className="text-sm text-muted-foreground">Grouped by letter count</p>
            </div>
            {totalMatches > 0 && (
              <button
                onClick={handleCopyResults}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Results
                  </>
                )}
              </button>
            )}
          </div>

          {totalMatches === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No words match your search criteria. Try adjusting your filters.
            </p>
          ) : (
            <div className="space-y-6">
              {Object.entries(filteredResults)
                .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                .map(([length, words]) => (
                  <div key={length}>
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {length}
                      </span>
                      {words.length} {words.length === 1 ? "word" : "words"}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                      {words.map((match, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-2 bg-background border border-border rounded-lg hover:border-primary/50 hover:bg-card transition-colors cursor-default"
                        >
                          <span className="text-sm font-medium text-foreground">{match.word}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      {/* Info Section */}
      <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">How to use the anagram solver with wildcard:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">1. Enter letters:</span>
            <span>Type the letters you want to use. You can enter up to 20 letters.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">2. Add wildcards:</span>
            <span>Use ? to represent any letter. You can use up to 3 wildcards.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">3. Filter (optional):</span>
            <span>Use the filter options to narrow down results by starting letter, ending letter, containing a letter, or exact length.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">4. View results:</span>
            <span>Results are grouped by word length for easy browsing. Copy all results or click individual words to use them.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
