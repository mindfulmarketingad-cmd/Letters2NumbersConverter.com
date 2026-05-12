'use client'

import { useState, useMemo, useRef } from 'react'
import { Copy, RotateCcw, ChevronDown, ChevronUp, Shuffle } from 'lucide-react'

const LANGUAGES = [
  'English', 'Spanish', 'French', 'German', 'Italian',
  'Portuguese', 'Dutch', 'Polish', 'Turkish', 'Russian',
]

// Common English filler/stop words to deprioritise when ordering
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
  'has', 'have', 'had', 'do', 'does', 'did', 'will', 'would', 'could',
  'should', 'may', 'might', 'shall', 'can', 'not', 'no', 'it', 'its',
  'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'we', 'they',
  'my', 'your', 'his', 'her', 'our', 'their', 'me', 'him', 'us', 'them',
])

// Score a candidate sentence using simple heuristics
function scoreSentence(words: string[]): number {
  let score = 0
  // Capitalised first word
  if (words[0] && words[0][0] === words[0][0].toUpperCase()) score += 10
  // Ends with punctuation
  const last = words[words.length - 1]
  if (last && /[.!?]$/.test(last)) score += 8
  // Prefer non-stop-word as first word
  if (words[0] && !STOP_WORDS.has(words[0].toLowerCase())) score += 5
  // Penalise stop words at the end
  if (last && STOP_WORDS.has(last.toLowerCase().replace(/[^a-z]/g, ''))) score -= 4
  // Reward subject-like words (capitalised non-first position is bad)
  words.slice(1).forEach(w => {
    if (w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase()) score -= 2
  })
  return score
}

// Try a smarter ordering: capitalised/proper nouns first, then content words, then stop words
function unscrambleSentence(raw: string): string {
  const sentences = raw.split(/(?<=[.!?])\s+/)
  return sentences
    .map(sentence => {
      const tokens = sentence.trim().split(/\s+/).filter(Boolean)
      if (tokens.length <= 1) return sentence.trim()

      // Separate punctuation-trailing word
      const hasFinalPunct = /[.!?]$/.test(tokens[tokens.length - 1])

      // Score every permutation for short sentences (≤7 words), else use heuristic
      if (tokens.length <= 7) {
        const perms = permutations(tokens)
        let best = tokens
        let bestScore = -Infinity
        for (const p of perms) {
          const s = scoreSentence(p)
          if (s > bestScore) { bestScore = s; best = p }
        }
        return best.join(' ')
      }

      // Heuristic for longer sentences
      const sorted = [...tokens].sort((a, b) => {
        const aLower = a.toLowerCase().replace(/[^a-z]/g, '')
        const bLower = b.toLowerCase().replace(/[^a-z]/g, '')
        const aStop = STOP_WORDS.has(aLower)
        const bStop = STOP_WORDS.has(bLower)
        const aCapital = a[0] === a[0].toUpperCase() && a[0] !== a[0].toLowerCase()
        const bCapital = b[0] === b[0].toUpperCase() && b[0] !== b[0].toLowerCase()
        const aHasPunct = /[.!?]$/.test(a)
        const bHasPunct = /[.!?]$/.test(b)
        if (aHasPunct && !bHasPunct) return 1
        if (!aHasPunct && bHasPunct) return -1
        if (aCapital && !bCapital) return -1
        if (!aCapital && bCapital) return 1
        if (!aStop && bStop) return -1
        if (aStop && !bStop) return 1
        return 0
      })
      return sorted.join(' ')
    })
    .join(' ')
}

function permutations<T>(arr: T[]): T[][] {
  if (arr.length <= 1) return [arr]
  const result: T[][] = []
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]
    for (const p of permutations(rest)) result.push([arr[i], ...p])
    if (result.length > 5040) break // cap at 7! for performance
  }
  return result
}

function countStats(text: string) {
  const chars = text.length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const sentences = text.trim() ? (text.match(/[^.!?]*[.!?]+/g) || []).length : 0
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 1
  return { chars, words, sentences, paragraphs }
}

export function SentenceUnscrambler() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('English')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [preservePunctuation, setPreservePunctuation] = useState(true)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const inputStats = useMemo(() => countStats(input), [input])
  const outputStats = useMemo(() => countStats(output), [output])
  const stats = output ? outputStats : inputStats

  const handleGenerate = () => {
    if (!input.trim()) return
    let text = input
    if (!caseSensitive) {
      // normalise leading caps per sentence for better scoring
    }
    if (!preservePunctuation) {
      text = text.replace(/[.!?,;:]/g, '')
    }
    const result = unscrambleSentence(text)
    setOutput(result)
  }

  const handleReset = () => {
    setInput('')
    setOutput('')
    textareaRef.current?.focus()
  }

  const handleCopy = async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      {/* Main card */}
      <div className="flex-1 bg-card rounded-xl border border-border p-5 flex flex-col gap-4 shadow-sm">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-bold text-foreground">Unscramble sentences</h2>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            {LANGUAGES.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your scrambled sentence or paragraph here…"
          className="flex-1 min-h-[160px] w-full px-3 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary/20"
        />

        {/* Advanced toggle */}
        <div>
          <button
            onClick={() => setShowAdvanced(v => !v)}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            Advanced
          </button>
          {showAdvanced && (
            <div className="mt-3 flex flex-col gap-2 p-3 rounded-lg bg-secondary/40 border border-border text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={caseSensitive}
                  onChange={e => setCaseSensitive(e.target.checked)}
                  className="rounded"
                />
                <span className="text-foreground">Case-sensitive ordering</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={preservePunctuation}
                  onChange={e => setPreservePunctuation(e.target.checked)}
                  className="rounded"
                />
                <span className="text-foreground">Preserve punctuation</span>
              </label>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-secondary/50 hover:bg-secondary text-foreground text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
          <button
            onClick={handleGenerate}
            disabled={!input.trim()}
            className="flex-[2] px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            Generate Output
          </button>
        </div>
      </div>

      {/* Output */}
      {output && (
        <div className="bg-card rounded-xl border border-border p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Unscrambled Result</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{output}</p>
        </div>
      )}

      {/* Stats panel */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Characters', value: stats.chars },
          { label: 'Words', value: stats.words },
          { label: 'Sentences', value: stats.sentences },
          { label: 'Paragraphs', value: stats.paragraphs },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-card rounded-xl border border-dashed border-primary/40 p-4 text-center shadow-sm"
          >
            <p className="text-xs text-muted-foreground mb-1">{label}:</p>
            <p className="text-3xl font-bold text-primary">{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
