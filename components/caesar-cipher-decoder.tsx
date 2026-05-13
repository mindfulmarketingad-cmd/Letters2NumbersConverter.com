'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RotateCcw, Info, ArrowLeftRight, List, ChevronDown, ChevronUp } from 'lucide-react'

function caesarShift(text: string, shift: number): string {
  const s = ((shift % 26) + 26) % 26
  return text.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch <= 'Z' ? 65 : 97
    return String.fromCharCode(((ch.charCodeAt(0) - base + s) % 26) + base)
  })
}

// Simple English letter frequency score — higher = more English-like
function englishnessScore(text: string): number {
  const freq: Record<string, number> = {
    e:12.7,t:9.1,a:8.2,o:7.5,i:7.0,n:6.7,s:6.3,h:6.1,r:6.0,
    d:4.3,l:4.0,c:2.8,u:2.8,m:2.4,w:2.4,f:2.2,g:2.0,y:2.0,
    p:1.9,b:1.5,v:1.0,k:0.8,j:0.2,x:0.2,q:0.1,z:0.1,
  }
  const letters = text.toLowerCase().replace(/[^a-z]/g, '')
  if (!letters) return 0
  let score = 0
  for (const ch of letters) score += freq[ch] ?? 0
  return score / letters.length
}

export function CaesarCipherDecoder() {
  const [input, setInput] = useState('')
  const [shift, setShift] = useState(3)
  const [mode, setMode] = useState<'encode' | 'decode'>('decode')
  const [showAll, setShowAll] = useState(false)
  const [copied, setCopied] = useState<number | 'main' | null>(null)

  const effectiveShift = mode === 'decode' ? (26 - shift) % 26 : shift
  const output = caesarShift(input, effectiveShift)

  const allShifts = Array.from({ length: 25 }, (_, i) => {
    const s = i + 1
    const text = caesarShift(input, s)
    return { shift: s, text, score: englishnessScore(text) }
  }).sort((a, b) => b.score - a.score)

  const handleCopy = useCallback(async (text: string, key: number | 'main') => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 1600)
  }, [])

  const handleSwap = () => {
    setInput(output)
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }

  const handleClear = () => setInput('')

  const bestGuess = input ? allShifts[0] : null

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Input & Controls ───────────────── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">Input text</h2>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Processed locally.
            </span>
          </div>

          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste your text here…"
            className="flex-1 min-h-[160px] w-full rounded-lg border border-border bg-secondary/30 px-3 py-2.5 text-sm font-mono text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />

          {/* Mode toggle */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Mode</p>
            <div className="flex rounded overflow-hidden border border-border w-fit">
              {(['decode', 'encode'] as const).map(m => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    mode === m ? 'bg-green-600 text-white' : 'bg-background text-muted-foreground hover:bg-secondary border-l border-border first:border-0'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Shift slider */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shift</p>
              <div className="flex items-center gap-2">
                <button onClick={() => setShift(s => Math.max(1, s - 1))} className="w-6 h-6 rounded border border-border text-muted-foreground hover:bg-secondary flex items-center justify-center text-sm">−</button>
                <span className="text-lg font-black text-foreground w-8 text-center">{shift}</span>
                <button onClick={() => setShift(s => Math.min(25, s + 1))} className="w-6 h-6 rounded border border-border text-muted-foreground hover:bg-secondary flex items-center justify-center text-sm">+</button>
              </div>
            </div>
            <input
              type="range"
              min={1}
              max={25}
              value={shift}
              onChange={e => setShift(Number(e.target.value))}
              className="w-full accent-green-600"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-0.5">
              <span>1</span>
              <span className="text-primary font-semibold">13 = ROT13</span>
              <span>25</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleSwap}
              disabled={!output}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" /> Swap
            </button>
            <button
              onClick={handleClear}
              disabled={!input}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Clear
            </button>
          </div>

          {/* Best guess chip */}
          {bestGuess && input.replace(/[^a-zA-Z]/g, '').length >= 6 && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-600/10 border border-green-600/30 text-xs">
              <span className="text-green-600 font-semibold">Best guess:</span>
              <span className="text-foreground">Shift {bestGuess.shift} looks most like English</span>
              <button
                onClick={() => { setShift(bestGuess.shift); setMode('decode') }}
                className="ml-auto text-green-600 font-semibold hover:underline"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {/* ── Right: Output ────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">
              Output <span className="text-muted-foreground font-normal">(shift {shift}, {mode})</span>
            </h2>
            <button
              onClick={() => handleCopy(output, 'main')}
              disabled={!output}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied === 'main' ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied === 'main' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex-1 min-h-[160px] rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-mono text-foreground overflow-y-auto whitespace-pre-wrap break-words">
            {output || <span className="text-muted-foreground">Output appears here as you type…</span>}
          </div>

          {input && (
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>{input.length} chars</span>
              <span>{input.replace(/[^a-zA-Z]/g, '').length} letters shifted</span>
            </div>
          )}

          {/* Brute force all shifts */}
          <button
            onClick={() => setShowAll(v => !v)}
            disabled={!input}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <List className="w-3.5 h-3.5" />
            {showAll ? 'Hide' : 'Show'} all 25 shifts
            {showAll ? <ChevronUp className="w-3.5 h-3.5 ml-auto" /> : <ChevronDown className="w-3.5 h-3.5 ml-auto" />}
          </button>
        </div>
      </div>

      {/* ── All-shifts brute force panel ─────────── */}
      {showAll && input && (
        <div className="border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-border bg-secondary/40 flex items-center gap-2">
            <List className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-semibold text-foreground">All 25 shifts — sorted by English likelihood</span>
            <span className="ml-auto text-xs text-muted-foreground">Click a row to apply that shift</span>
          </div>
          <div className="max-h-64 overflow-y-auto divide-y divide-border/40">
            {allShifts.map(({ shift: s, text: t }, idx) => (
              <div
                key={s}
                onClick={() => { setShift(s); setMode('decode'); setShowAll(false) }}
                className={`flex items-start gap-3 px-4 py-2.5 cursor-pointer hover:bg-secondary/50 transition-colors ${idx === 0 ? 'bg-green-600/8' : ''}`}
              >
                <span className={`text-xs font-bold w-12 flex-shrink-0 pt-0.5 ${idx === 0 ? 'text-green-600' : 'text-muted-foreground'}`}>
                  {idx === 0 ? '★ ' : ''}{s}
                </span>
                <span className="text-xs font-mono text-foreground truncate flex-1">{t.slice(0, 80)}{t.length > 80 ? '…' : ''}</span>
                <button
                  onClick={e => { e.stopPropagation(); handleCopy(t, s) }}
                  className="flex-shrink-0 text-muted-foreground hover:text-foreground"
                >
                  {copied === s ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
