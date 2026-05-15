'use client'

import { useState } from 'react'
import { Copy, Check, RefreshCw, ArrowRight, Trash2, Sparkles, ChevronDown } from 'lucide-react'

type Tone = 'professional' | 'casual' | 'academic' | 'creative' | 'persuasive'
type Style = 'natural' | 'descriptive' | 'examples' | 'context' | 'formal' | 'simplified'
type TargetLength = '2x' | '3x' | '4x'

const TONES: { value: Tone; label: string; desc: string }[] = [
  { value: 'professional', label: 'Professional', desc: 'Formal, business-appropriate' },
  { value: 'casual', label: 'Casual', desc: 'Friendly and conversational' },
  { value: 'academic', label: 'Academic', desc: 'Scholarly and precise' },
  { value: 'creative', label: 'Creative', desc: 'Vivid and expressive' },
  { value: 'persuasive', label: 'Persuasive', desc: 'Compelling and influential' },
]

const STYLES: { value: Style; label: string; desc: string }[] = [
  { value: 'natural', label: 'Natural', desc: 'Preserve original style' },
  { value: 'descriptive', label: 'Descriptive', desc: 'Add rich details' },
  { value: 'examples', label: 'Add Examples', desc: 'Include illustrations' },
  { value: 'context', label: 'Add Context', desc: 'Background & history' },
  { value: 'formal', label: 'More Formal', desc: 'Structured & logical' },
  { value: 'simplified', label: 'Simplified', desc: 'Easy to understand' },
]

const LENGTHS: { value: TargetLength; label: string }[] = [
  { value: '2x', label: '2× longer' },
  { value: '3x', label: '3× longer' },
  { value: '4x', label: '4× longer' },
]

function wordCount(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

function SelectButton<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string; desc: string }[]
  value: T
  onChange: (v: T) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          title={opt.desc}
          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
            value === opt.value
              ? 'bg-primary text-primary-foreground border-primary shadow-sm'
              : 'border-border text-foreground hover:bg-muted hover:border-primary/40'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export function AIParagraphExpander() {
  const [input, setInput] = useState('')
  const [tone, setTone] = useState<Tone>('professional')
  const [style, setStyle] = useState<Style>('natural')
  const [targetLength, setTargetLength] = useState<TargetLength>('2x')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [expandCount, setExpandCount] = useState(0)

  const inputWords = wordCount(input)
  const outputWords = wordCount(output)

  async function expand(textToExpand: string) {
    if (!textToExpand.trim() || textToExpand.trim().length < 10) {
      setError('Please enter at least 10 characters.')
      return
    }
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/ai-paragraph-expand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textToExpand, tone, style, targetLength }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Expansion failed.')
      setOutput(data.expanded)
      setExpandCount(c => c + 1)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Expansion failed.')
    } finally {
      setLoading(false)
    }
  }

  async function copyOutput() {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  function useOutputAsInput() {
    setInput(output)
    setOutput('')
    setExpandCount(0)
  }

  function clearAll() {
    setInput('')
    setOutput('')
    setError('')
    setExpandCount(0)
  }

  return (
    <div className="space-y-5">
      {/* Settings */}
      <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tone</p>
          <SelectButton options={TONES} value={tone} onChange={setTone} />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Expansion Style</p>
          <SelectButton options={STYLES} value={style} onChange={setStyle} />
        </div>
        <div className="space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Target Length</p>
          <div className="flex gap-2">
            {LENGTHS.map(l => (
              <button
                key={l.value}
                onClick={() => setTargetLength(l.value)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                  targetLength === l.value
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'border-border text-foreground hover:bg-muted hover:border-primary/40'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Your Text</label>
          <span className="text-xs text-muted-foreground">{inputWords} {inputWords === 1 ? 'word' : 'words'}</span>
        </div>
        <textarea
          value={input}
          onChange={e => { setInput(e.target.value); setError('') }}
          placeholder="Type or paste the paragraph you want to expand…"
          className="w-full min-h-[140px] resize-y rounded-lg border bg-background p-3 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
          maxLength={5000}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => expand(input)}
          disabled={loading || !input.trim()}
          className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
        >
          {loading
            ? <><RefreshCw className="w-4 h-4 animate-spin" /> Expanding…</>
            : <><Sparkles className="w-4 h-4" /> Expand Paragraph</>}
        </button>
        {output && (
          <button
            onClick={() => expand(input)}
            disabled={loading}
            className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium hover:bg-muted transition-colors disabled:opacity-50"
            title="Generate a different expansion"
          >
            <RefreshCw className="w-4 h-4" /> Regenerate
          </button>
        )}
        {(input || output) && (
          <button
            onClick={clearAll}
            className="flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Clear
          </button>
        )}
      </div>

      {/* Output */}
      {output && (
        <div className="space-y-3">
          {/* Stats bar */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <span className="font-medium text-foreground">{inputWords} words</span>
            <ArrowRight className="w-3.5 h-3.5" />
            <span className="font-semibold text-primary">{outputWords} words</span>
            <span className="text-muted-foreground">
              ({inputWords > 0 ? `${Math.round(outputWords / inputWords * 10) / 10}× expansion` : ''})
            </span>
            {expandCount > 1 && (
              <span className="text-muted-foreground">· Regenerated {expandCount - 1} time{expandCount > 2 ? 's' : ''}</span>
            )}
          </div>

          {/* Output box */}
          <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Expanded Text</p>
              <div className="flex gap-2">
                <button
                  onClick={copyOutput}
                  className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
                >
                  {copied ? <><Check className="w-3.5 h-3.5 text-emerald-600" /> Copied!</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                </button>
              </div>
            </div>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{output}</p>
          </div>

          {/* Chain expand */}
          <button
            onClick={useOutputAsInput}
            className="flex items-center gap-2 text-xs text-primary hover:underline font-medium"
          >
            <ChevronDown className="w-3.5 h-3.5" /> Use this as input to expand further
          </button>
        </div>
      )}
    </div>
  )
}
