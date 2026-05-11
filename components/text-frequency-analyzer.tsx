"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Download } from "lucide-react"

interface FrequencyItem {
  char: string
  count: number
  percentage: number
}

export function TextFrequencyAnalyzer() {
  const [input, setInput] = useState("")
  const [analysisType, setAnalysisType] = useState<"characters" | "words">("characters")
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [ignoreSpaces, setIgnoreSpaces] = useState(false)

  const analysis = useMemo(() => {
    let text = input
    
    if (!caseSensitive && analysisType === "characters") {
      text = text.toLowerCase()
    }
    
    if (!caseSensitive && analysisType === "words") {
      text = text.toLowerCase()
    }

    const frequency: Record<string, number> = {}
    let totalCount = 0

    if (analysisType === "characters") {
      for (const char of text) {
        if (ignoreSpaces && /\s/.test(char)) continue
        if (!/[\s\w\s]/.test(char) && /\s/.test(char)) continue
        frequency[char] = (frequency[char] || 0) + 1
        totalCount++
      }
    } else {
      const words = text.split(/\s+/).filter(word => word.length > 0)
      for (const word of words) {
        frequency[word] = (frequency[word] || 0) + 1
        totalCount++
      }
    }

    const sorted = Object.entries(frequency)
      .map(([char, count]) => ({
        char,
        count,
        percentage: totalCount > 0 ? (count / totalCount) * 100 : 0,
      }))
      .sort((a, b) => b.count - a.count)

    return {
      items: sorted,
      total: totalCount,
      unique: Object.keys(frequency).length,
    }
  }, [input, analysisType, caseSensitive, ignoreSpaces])

  const clearAll = () => {
    setInput("")
  }

  const copyResults = () => {
    const text = analysis.items
      .map(item => `${item.char}: ${item.count} (${item.percentage.toFixed(2)}%)`)
      .join("\n")
    navigator.clipboard.writeText(text)
  }

  const downloadResults = () => {
    const text = analysis.items
      .map(item => `${item.char},${item.count},${item.percentage.toFixed(2)}`)
      .join("\n")
    const csv = `${analysisType === "characters" ? "Character" : "Word"},Count,Percentage\n${text}`
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `text-frequency-${analysisType}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full space-y-6">
      {/* Analysis Type Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setAnalysisType("characters")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            analysisType === "characters"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          Characters
        </button>
        <button
          onClick={() => setAnalysisType("words")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            analysisType === "words"
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          Words
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="w-4 h-4 rounded border-border"
          />
          <span className="text-foreground">Case Sensitive</span>
        </label>
        {analysisType === "characters" && (
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={ignoreSpaces}
              onChange={(e) => setIgnoreSpaces(e.target.checked)}
              className="w-4 h-4 rounded border-border"
            />
            <span className="text-foreground">Ignore Spaces</span>
          </label>
        )}
      </div>

      {/* Input/Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-foreground">Input Text</label>
            <span className="text-xs text-muted-foreground">
              {input.length} chars
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Paste ${analysisType === "characters" ? "text" : "text with words"} here for frequency analysis...`}
            className="flex-1 min-h-64 p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={clearAll}
              className="text-xs px-3 py-1 rounded bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors flex items-center gap-1"
            >
              <RotateCcw size={14} />
              Clear
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-foreground">Frequency Analysis</label>
            <span className="text-xs text-muted-foreground">
              {analysis.total} {analysisType === "characters" ? "chars" : "words"}
            </span>
          </div>
          
          <div className="flex-1 min-h-64 border border-border rounded-lg bg-card overflow-hidden flex flex-col">
            <div className="flex-1 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-secondary border-b border-border">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-foreground">{analysisType === "characters" ? "Character" : "Word"}</th>
                    <th className="px-4 py-2 text-right font-medium text-foreground">Count</th>
                    <th className="px-4 py-2 text-right font-medium text-foreground">%</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.items.length === 0 ? (
                    <tr>
                      <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                        Enter text to analyze
                      </td>
                    </tr>
                  ) : (
                    analysis.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                        <td className="px-4 py-2 font-mono text-foreground">
                          {item.char === " " ? "␣ (space)" : item.char === "\n" ? "↵ (newline)" : item.char}
                        </td>
                        <td className="px-4 py-2 text-right text-foreground">{item.count}</td>
                        <td className="px-4 py-2 text-right text-foreground">{item.percentage.toFixed(2)}%</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              onClick={copyResults}
              disabled={analysis.items.length === 0}
              className="text-xs px-3 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <Copy size={14} />
              Copy
            </button>
            <button
              onClick={downloadResults}
              disabled={analysis.items.length === 0}
              className="text-xs px-3 py-1 rounded bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <Download size={14} />
              CSV
            </button>
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      {analysis.items.length > 0 && (
        <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/50 rounded-lg">
          <div>
            <p className="text-xs text-muted-foreground">Total {analysisType}</p>
            <p className="text-lg font-bold text-foreground">{analysis.total}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Unique</p>
            <p className="text-lg font-bold text-foreground">{analysis.unique}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Most Frequent</p>
            <p className="text-lg font-bold text-foreground">
              {analysis.items[0]?.char === " " ? "␣" : analysis.items[0]?.char === "\n" ? "↵" : analysis.items[0]?.char} ({analysis.items[0]?.count})
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
