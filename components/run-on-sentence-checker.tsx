'use client'

import { useState, useMemo, useRef, useCallback } from 'react'
import { Copy, Trash2, FileText, ChevronLeft, ChevronRight, Check, AlertTriangle, Clock } from 'lucide-react'

/* ─── Types ──────────────────────────────────────────────────────────────── */

type IssueType = 'comma-splice' | 'long-sentence'

interface Issue {
  id: number
  sentence: string
  type: IssueType
  explanation: string
  fixes: string[]
  start: number
  end: number
}

/* ─── Sample text (contains deliberate run-ons) ──────────────────────────── */

const SAMPLE_TEXT = `The weather was beautiful this morning, I decided to walk to work instead of taking the bus. The streets were quiet at that hour, most people were still at home having breakfast. I passed by the old bakery on Fifth Street, it had just opened for the day and the smell of fresh bread filled the air, it was impossible to walk past without stopping. I bought a croissant and kept walking, the warm pastry made the rest of the commute much more enjoyable. By the time I reached the office I felt completely refreshed and ready for the day ahead, I was glad I had made that simple choice to leave the car behind and experience the morning on foot.`

/* ─── Detection logic ────────────────────────────────────────────────────── */

function tokenizeSentences(text: string): Array<{ text: string; start: number; end: number }> {
  const result: Array<{ text: string; start: number; end: number }> = []
  // Match sentence-ending punctuation followed by whitespace+capital or end-of-string
  const regex = /[^.!?]+[.!?]+["'\])]*/g
  let match: RegExpExecArray | null
  let searchFrom = 0

  while ((match = regex.exec(text)) !== null) {
    const raw = match[0]
    const trimmed = raw.trim()
    if (trimmed.length >= 8) {
      // Find actual position in text to get accurate offsets
      const pos = text.indexOf(trimmed, searchFrom)
      if (pos !== -1) {
        result.push({ text: trimmed, start: pos, end: pos + trimmed.length })
        searchFrom = pos + trimmed.length
      }
    }
  }

  // Catch any trailing fragment not ending in punctuation
  const remainder = text.slice(searchFrom).trim()
  if (remainder.length >= 8) {
    result.push({ text: remainder, start: text.lastIndexOf(remainder), end: text.length })
  }

  return result
}

// Subordinating conjunctions that legitimately introduce a dependent clause
// before a comma — these are NOT comma splices
const SUBORDINATING = /^(although|because|when|while|if|since|after|before|until|unless|though|as\s+soon|as\s+long|wherever|whenever|whether|once|provided|given\s+that|in\s+order)\b/i

function hasCommaSplice(sentence: string): boolean {
  const commaIndex = sentence.search(/,\s+/)
  if (commaIndex === -1) return false

  // Split on all commas and check consecutive pairs
  const parts = sentence.split(/,\s+/)
  if (parts.length < 2) return false

  for (let i = 0; i < parts.length - 1; i++) {
    const before = parts[i].trim()
    const after = parts[i + 1].trim()

    const beforeWords = before.split(/\s+/).filter(Boolean)

    // Skip if the "before" part is a short introductory phrase (no verb)
    if (beforeWords.length < 4) continue

    // Skip if the "before" part starts with a subordinating conjunction
    if (SUBORDINATING.test(before)) continue

    // "Before" must contain a finite verb to be an independent clause
    const finiteVerbBefore = /\b(is|are|was|were|have|has|had|do|does|did|will|would|can|could|should|shall|may|might|must|go|goes|went|come|came|feel|felt|look|looked|seem|seemed|get|got|make|made|take|took|know|knew|think|thought|say|said|see|saw|want|wanted|need|needed|love|loved|hate|hated|help|helped|found|find|show|showed|decide|decided|keep|kept|start|started|begin|began|stop|stopped|stay|stayed|walk|walked|run|ran)\b/i
    if (!finiteVerbBefore.test(before)) continue

    // "After" must start with a subject pronoun or common article-noun combo + verb
    const independentClauseStart = /^(I|you|he|she|it|we|they|this|that|these|those)\s+(am|is|are|was|were|have|has|had|do|does|did|will|would|can|could|should|shall|may|might|must|\w+ed\b|\w+s\b|\w+ing\s)/i
    if (independentClauseStart.test(after)) return true
  }

  return false
}

function detectRunOns(text: string): Issue[] {
  if (!text.trim()) return []

  const sentences = tokenizeSentences(text)
  const issues: Issue[] = []
  let id = 0

  for (const { text: sentence, start, end } of sentences) {
    const words = sentence.trim().split(/\s+/).filter(Boolean)
    if (words.length < 5) continue

    // ── Rule 1: Comma splice ─────────────────────────────────────────────
    if (hasCommaSplice(sentence)) {
      issues.push({
        id: id++,
        sentence,
        type: 'comma-splice',
        explanation:
          'Two independent clauses are joined with only a comma. Each clause can stand on its own as a complete sentence.',
        fixes: [
          'Replace the comma with a period to create two separate sentences.',
          'Add a coordinating conjunction after the comma (and, but, so, yet, for, or, nor).',
          'Replace the comma with a semicolon if the clauses are closely related.',
        ],
        start,
        end,
      })
      continue
    }

    // ── Rule 2: Excessively long / fused sentence ────────────────────────
    const wordCount = words.length
    const weakConnectors = (sentence.match(/\b(and then|and so|and also|and I|and we|and he|and she|and they|so then|then I|then we)\b/gi) || []).length

    if (wordCount >= 45 || (wordCount >= 30 && weakConnectors >= 2)) {
      issues.push({
        id: id++,
        sentence,
        type: 'long-sentence',
        explanation: `This sentence is ${wordCount} words long with multiple clauses chained together, making it hard to follow.`,
        fixes: [
          'Break it into two or three shorter sentences at natural clause boundaries.',
          'Replace weak connectors like "and then" or "and so" with a period.',
          'Use a semicolon between closely related independent clauses.',
        ],
        start,
        end,
      })
    }
  }

  return issues
}

/* ─── UI constants ───────────────────────────────────────────────────────── */

const TYPE_LABEL: Record<IssueType, string> = {
  'comma-splice': 'Comma Splice',
  'long-sentence': 'Long Sentence',
}

const TYPE_COLOR: Record<IssueType, string> = {
  'comma-splice': 'bg-orange-100 text-orange-700 border-orange-200',
  'long-sentence': 'bg-blue-100 text-blue-700 border-blue-200',
}

const TYPE_ICON: Record<IssueType, typeof AlertTriangle> = {
  'comma-splice': AlertTriangle,
  'long-sentence': Clock,
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export function RunOnSentenceChecker() {
  const [text, setText] = useState('')
  const [currentIdx, setCurrentIdx] = useState(0)
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const issues = useMemo(() => detectRunOns(text), [text])
  const safeIdx = issues.length > 0 ? Math.min(currentIdx, issues.length - 1) : 0
  const currentIssue = issues[safeIdx] ?? null

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    setCurrentIdx(0)
  }

  const handleCopy = useCallback(async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [text])

  const handleClear = () => {
    setText('')
    setCurrentIdx(0)
    textareaRef.current?.focus()
  }

  const handleSample = () => {
    setText(SAMPLE_TEXT)
    setCurrentIdx(0)
    textareaRef.current?.focus()
  }

  const prev = () => setCurrentIdx(i => Math.max(0, i - 1))
  const next = () => setCurrentIdx(i => Math.min(issues.length - 1, i + 1))

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0

  const IssueIcon = currentIssue ? TYPE_ICON[currentIssue.type] : null

  return (
    <div className="flex flex-col lg:flex-row rounded-xl border border-border bg-card overflow-hidden shadow-sm">
      {/* ── Left: Editor ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 border-b lg:border-b-0 lg:border-r border-border">
        {/* Toolbar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
          <select className="text-sm font-medium bg-background border border-border rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground">
            <option>English (US)</option>
            <option>English (UK)</option>
            <option>English (AU)</option>
          </select>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={!text}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleClear}
              disabled={!text}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-foreground"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Clear
            </button>
          </div>
        </div>

        {/* Text area */}
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            placeholder="Paste or type your text to check for run-on sentences."
            className="w-full h-full min-h-[320px] resize-none text-sm leading-relaxed p-4 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground"
            data-save-key="run-on-text"
          />

          {/* Sample text button — centered when textarea is empty */}
          {!text && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={handleSample}
                className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors bg-background shadow-sm text-foreground"
              >
                <FileText className="w-4 h-4" />
                Use sample text
              </button>
            </div>
          )}
        </div>

        {/* Footer: word count + issue count summary */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-border bg-secondary/20 text-xs text-muted-foreground">
          <span>{wordCount > 0 ? `${wordCount} words · ${text.length} characters` : 'No text entered'}</span>
          {text && issues.length > 0 && (
            <span className="text-orange-600 font-medium">
              {issues.length} run-on{issues.length !== 1 ? 's' : ''} detected
            </span>
          )}
          {text && issues.length === 0 && (
            <span className="text-green-600 font-medium">No run-ons detected</span>
          )}
        </div>
      </div>

      {/* ── Right: Suggestions ───────────────────────────────────────────── */}
      <div className="w-full lg:w-72 xl:w-80 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/10">
          <div className="flex items-center gap-2.5">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                issues.length > 0 ? 'bg-orange-100 text-orange-700' : 'bg-muted text-muted-foreground'
              }`}
            >
              {issues.length}
            </span>
            <span className="text-sm font-semibold text-foreground">
              {issues.length === 1 ? 'Issue found' : 'Issues found'}
            </span>
          </div>
          {issues.length > 1 && (
            <div className="flex items-center gap-0.5">
              <button
                onClick={prev}
                disabled={safeIdx === 0}
                className="p-1.5 rounded-md hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous issue"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-muted-foreground tabular-nums w-10 text-center">
                {safeIdx + 1} / {issues.length}
              </span>
              <button
                onClick={next}
                disabled={safeIdx === issues.length - 1}
                className="p-1.5 rounded-md hover:bg-secondary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next issue"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Suggestion content */}
        <div className="flex-1 p-4 overflow-y-auto">
          {issues.length === 0 ? (
            <p className="text-sm text-muted-foreground leading-relaxed">
              {text
                ? '✓ No run-on sentences detected. Your text looks good!'
                : "Your suggestions will show once you've entered some text."}
            </p>
          ) : currentIssue && IssueIcon ? (
            <div className="space-y-4">
              {/* Type badge */}
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${TYPE_COLOR[currentIssue.type]}`}
                >
                  <IssueIcon className="w-3 h-3" />
                  {TYPE_LABEL[currentIssue.type]}
                </span>
              </div>

              {/* Detected sentence */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <p className="text-[10px] font-semibold text-amber-700 uppercase tracking-widest mb-1.5">
                  Detected sentence
                </p>
                <p className="text-xs text-amber-900 leading-relaxed font-mono break-words">
                  &ldquo;{currentIssue.sentence.length > 130
                    ? currentIssue.sentence.slice(0, 130) + '…'
                    : currentIssue.sentence}&rdquo;
                </p>
              </div>

              {/* What's wrong */}
              <div>
                <p className="text-[10px] font-semibold text-foreground uppercase tracking-widest mb-1.5">
                  What&apos;s wrong
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {currentIssue.explanation}
                </p>
              </div>

              {/* How to fix */}
              <div>
                <p className="text-[10px] font-semibold text-foreground uppercase tracking-widest mb-2">
                  How to fix it
                </p>
                <ul className="space-y-2">
                  {currentIssue.fixes.map((fix, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center flex-shrink-0 font-bold">
                        {i + 1}
                      </span>
                      {fix}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>

        {/* Navigation dots */}
        {issues.length > 1 && (
          <div className="px-4 pb-4 pt-2 border-t border-border flex items-center gap-1.5 flex-wrap">
            {issues.map((issue, i) => (
              <button
                key={issue.id}
                onClick={() => setCurrentIdx(i)}
                title={TYPE_LABEL[issue.type]}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === safeIdx
                    ? 'bg-primary scale-125'
                    : issue.type === 'comma-splice'
                    ? 'bg-orange-300 hover:bg-orange-400'
                    : 'bg-blue-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
