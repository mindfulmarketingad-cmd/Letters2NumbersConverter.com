"use client"

import { useState, useCallback } from "react"
import { Upload, Trash2, HelpCircle, BarChart3, Copy, Check, Shield } from "lucide-react"

type FormatPart = "page" | "line" | "word" | "character" | "none"

interface FormatConfig {
  part1: FormatPart
  part2: FormatPart
  part3: FormatPart
}

interface BookStats {
  pages: number
  lines: number
  words: number
  characters: number
}

export function BookCipherDecoder() {
  const [bookText, setBookText] = useState("")
  const [codes, setCodes] = useState("")
  const [result, setResult] = useState("")
  const [showHelp, setShowHelp] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [copied, setCopied] = useState(false)
  const [format, setFormat] = useState<FormatConfig>({
    part1: "line",
    part2: "word",
    part3: "none"
  })
  const [options, setOptions] = useState({
    firstLetterOnly: false,
    ignoreSpaces: false,
    numberingStart: 1,
    ignoreSymbols: "-.:;!?\"\"'&()/"
  })

  const parseBookText = useCallback(() => {
    if (!bookText.trim()) return { pages: [], lines: [], words: [] }

    const pages = bookText.split("---PAGE---").map(p => p.trim()).filter(p => p)
    const allLines: string[][] = []
    const allWords: string[][][] = []

    pages.forEach(page => {
      const pageLines = page.split("\n").map(l => l.trim()).filter(l => l)
      const pageWords = pageLines.map(line => {
        let words = line.split(/\s+/).filter(w => w)
        if (options.ignoreSpaces) {
          words = words.map(w => w.replace(/\s/g, ""))
        }
        // Remove ignored symbols from words
        words = words.map(w => {
          let cleaned = w
          for (const symbol of options.ignoreSymbols) {
            cleaned = cleaned.split(symbol).join("")
          }
          return cleaned
        }).filter(w => w)
        return words
      })
      allLines.push(pageLines)
      allWords.push(pageWords)
    })

    return { pages, lines: allLines, words: allWords }
  }, [bookText, options.ignoreSpaces, options.ignoreSymbols])

  const getStats = useCallback((): BookStats => {
    const { pages, lines, words } = parseBookText()
    return {
      pages: pages.length || 1,
      lines: lines.flat().length,
      words: words.flat(2).length,
      characters: bookText.replace(/\s/g, "").length
    }
  }, [parseBookText, bookText])

  const decode = useCallback(() => {
    if (!bookText.trim() || !codes.trim()) {
      setResult("")
      return
    }

    const { pages, lines, words } = parseBookText()
    const codeEntries = codes.split(/[\s,]+/).filter(c => c.trim())
    const results: string[] = []
    const offset = options.numberingStart

    for (const code of codeEntries) {
      const parts = code.split(/[:\-.]/).map(p => parseInt(p, 10) - offset)
      
      let pageIdx = 0
      let lineIdx = 0
      let wordIdx = 0
      let charIdx = 0
      let partIndex = 0

      // Map format parts to indices
      const formatParts = [format.part1, format.part2, format.part3]
      
      for (const formatPart of formatParts) {
        if (formatPart === "none") continue
        const value = parts[partIndex] ?? 0
        partIndex++

        switch (formatPart) {
          case "page":
            pageIdx = value
            break
          case "line":
            lineIdx = value
            break
          case "word":
            wordIdx = value
            break
          case "character":
            charIdx = value
            break
        }
      }

      try {
        // Get the word based on format
        let targetWord = ""
        
        if (pages.length === 0) {
          results.push("?")
          continue
        }

        const actualPageIdx = Math.min(pageIdx, pages.length - 1)
        const pageLines = lines[actualPageIdx] || []
        const pageWords = words[actualPageIdx] || []

        if (format.part1 === "line" || format.part2 === "line" || format.part3 === "line") {
          const actualLineIdx = Math.min(lineIdx, pageLines.length - 1)
          const lineWords = pageWords[actualLineIdx] || []
          
          if (format.part1 === "word" || format.part2 === "word" || format.part3 === "word") {
            const actualWordIdx = Math.min(wordIdx, lineWords.length - 1)
            targetWord = lineWords[actualWordIdx] || ""
          } else if (format.part1 === "character" || format.part2 === "character" || format.part3 === "character") {
            const lineText = pageLines[actualLineIdx] || ""
            targetWord = lineText[charIdx] || ""
          } else {
            targetWord = lineWords[0] || ""
          }
        } else if (format.part1 === "word" || format.part2 === "word") {
          // Direct word indexing across the whole page/document
          const flatWords = pageWords.flat()
          const actualWordIdx = Math.min(wordIdx, flatWords.length - 1)
          targetWord = flatWords[actualWordIdx] || ""
        }

        if (format.part1 === "character" || format.part2 === "character" || format.part3 === "character") {
          if (targetWord && charIdx < targetWord.length) {
            results.push(targetWord[charIdx])
          } else {
            results.push(targetWord ? targetWord[0] : "?")
          }
        } else if (options.firstLetterOnly && targetWord) {
          results.push(targetWord[0])
        } else {
          results.push(targetWord || "?")
        }
      } catch {
        results.push("?")
      }
    }

    setResult(results.join(options.firstLetterOnly ? "" : " "))
  }, [bookText, codes, parseBookText, format, options])

  const handleCopy = async () => {
    if (result) {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const clearAll = () => {
    setBookText("")
    setCodes("")
    setResult("")
  }

  const stats = getStats()

  return (
    <div className="space-y-6">
      {/* Privacy Notice */}
      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
        <Shield className="w-4 h-4" />
        <span>Your data stays local.</span>
      </div>

      {/* Book Text Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-lg font-semibold text-foreground">Book Text</label>
        </div>
        <textarea
          value={bookText}
          onChange={(e) => setBookText(e.target.value)}
          placeholder="Paste the book text here..."
          className="w-full h-40 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y font-mono text-sm"
        />
        <p className="text-sm text-muted-foreground">
          If your text has multiple pages, you should separate them with <code className="bg-muted px-1.5 py-0.5 rounded text-primary">---PAGE---</code>.
        </p>
      </div>

      {/* Codes Section */}
      <div className="space-y-3">
        <label className="text-lg font-semibold text-foreground">Codes</label>
        <textarea
          value={codes}
          onChange={(e) => setCodes(e.target.value)}
          placeholder="Type the numbers here. For example: 14:3 8:2 5:1"
          className="w-full h-20 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-y font-mono text-sm"
        />
      </div>

      {/* Result Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-lg font-semibold text-foreground">Result</label>
          {result && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
        <div className="w-full min-h-[80px] px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground font-mono">
          {result || <span className="text-muted-foreground">The result will show here...</span>}
        </div>
      </div>

      {/* Format Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-foreground">Format</h3>
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            {showHelp ? "Hide Help" : "Show Help"}
          </button>
        </div>

        {showHelp && (
          <div className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-muted-foreground space-y-2">
            <p><strong>How codes work:</strong> Each code references a location in your book text.</p>
            <p>For example, with format Line:Word, the code <code className="bg-muted px-1 rounded">5:3</code> means &quot;Line 5, Word 3&quot;</p>
            <p>With format Page:Line:Word, code <code className="bg-muted px-1 rounded">2:5:3</code> means &quot;Page 2, Line 5, Word 3&quot;</p>
            <p>Separate multiple codes with spaces or commas.</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(["part1", "part2", "part3"] as const).map((part, idx) => (
            <div key={part} className="space-y-2">
              <h4 className="font-medium text-foreground">Part {idx + 1}</h4>
              <div className="space-y-1">
                {(["page", "line", "word", "character", "none"] as FormatPart[]).map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={part}
                      checked={format[part] === option}
                      onChange={() => setFormat(prev => ({ ...prev, [part]: option }))}
                      className="w-4 h-4 text-primary border-border focus:ring-primary"
                    />
                    <span className="text-sm text-foreground capitalize">{option === "none" ? "None" : `${option.charAt(0).toUpperCase() + option.slice(1)} number`}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Options Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Options</h3>
        
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={options.firstLetterOnly}
              onChange={(e) => setOptions(prev => ({ ...prev, firstLetterOnly: e.target.checked }))}
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <span className="text-sm text-foreground">Only take the first letter of each word</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={options.ignoreSpaces}
              onChange={(e) => setOptions(prev => ({ ...prev, ignoreSpaces: e.target.checked }))}
              className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
            />
            <span className="text-sm text-foreground">Ignore spaces</span>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Numbering start</label>
            <input
              type="number"
              value={options.numberingStart}
              onChange={(e) => setOptions(prev => ({ ...prev, numberingStart: parseInt(e.target.value) || 0 }))}
              className="w-24 px-3 py-2 bg-card border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Ignore these symbols</label>
            <input
              type="text"
              value={options.ignoreSymbols}
              onChange={(e) => setOptions(prev => ({ ...prev, ignoreSymbols: e.target.value }))}
              className="w-full px-3 py-2 bg-card border border-border rounded-md text-foreground font-mono focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={decode}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Upload className="w-4 h-4" />
          Decode
        </button>
        <button
          onClick={clearAll}
          className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
        <button
          onClick={() => setShowStats(!showStats)}
          className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
        >
          <BarChart3 className="w-4 h-4" />
          {showStats ? "Hide Statistics" : "Show Book Text Statistics"}
        </button>
      </div>

      {/* Statistics */}
      {showStats && bookText && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Book Text Statistics</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{stats.pages}</p>
              <p className="text-sm text-muted-foreground">Pages</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{stats.lines}</p>
              <p className="text-sm text-muted-foreground">Lines</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{stats.words}</p>
              <p className="text-sm text-muted-foreground">Words</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold text-primary">{stats.characters}</p>
              <p className="text-sm text-muted-foreground">Characters</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
