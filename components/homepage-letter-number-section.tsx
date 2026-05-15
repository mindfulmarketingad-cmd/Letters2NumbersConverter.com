'use client'

import Link from 'next/link'
import { ArrowRight, Hash } from 'lucide-react'
import { useState, useCallback } from 'react'
import { Copy, RotateCcw, ArrowLeftRight } from 'lucide-react'

/* ─── Conversion logic ───────────────────────────────────────────────────── */

type Mode = 'encode' | 'decode'
type CodeType = 'a1' | 'a0' | 'ascii' | 'hex' | 'binary'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function lettersToNumbers(text: string, codeType: CodeType): string {
  return text
    .toUpperCase()
    .split('')
    .map(ch => {
      if (ch === ' ') return ' '
      const idx = ALPHABET.indexOf(ch)
      if (idx === -1) return ch
      if (codeType === 'a1') return String(idx + 1)
      if (codeType === 'a0') return String(idx)
      const code = ch.charCodeAt(0)
      if (codeType === 'ascii') return String(code)
      if (codeType === 'hex') return code.toString(16).toUpperCase()
      if (codeType === 'binary') return code.toString(2).padStart(8, '0')
      return ch
    })
    .join('-')
    .replace(/ -|- /g, ' ')
    .replace(/^-|-$/g, '')
}

function numbersToLetters(text: string, codeType: CodeType): string {
  return text
    .split(' ')
    .map(word => {
      return word
        .split('-')
        .map(token => {
          const num = codeType === 'hex'
            ? parseInt(token, 16)
            : codeType === 'binary'
            ? parseInt(token, 2)
            : parseInt(token, 10)
          if (isNaN(num)) return token
          if (codeType === 'a1') {
            const idx = num - 1
            return idx >= 0 && idx < 26 ? ALPHABET[idx] : token
          }
          if (codeType === 'a0') {
            return num >= 0 && num < 26 ? ALPHABET[num] : token
          }
          return String.fromCharCode(num)
        })
        .join('')
    })
    .join(' ')
}

/* ─── Component ──────────────────────────────────────────────────────────── */

const CODE_LABELS: Record<CodeType, string> = {
  a1: 'A=1 (A1Z26)',
  a0: 'A=0',
  ascii: 'ASCII',
  hex: 'HEX',
  binary: 'Binary',
}

export function HomepageLetterNumberSection() {
  const [mode, setMode] = useState<Mode>('encode')
  const [codeType, setCodeType] = useState<CodeType>('a1')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)

  const result = mode === 'encode'
    ? lettersToNumbers(input, codeType)
    : numbersToLetters(input, codeType)

  const handleSwap = () => {
    setInput(result)
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }

  const handleCopy = useCallback(async () => {
    if (!result) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [result])

  const inputPlaceholder = mode === 'encode'
    ? 'Type letters to convert to numbers…'
    : 'Enter numbers to convert to letters…'

  return (
    <section className="py-14 md:py-20 border-b border-border/50 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Hash className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Featured Tool
              </span>
            </div>
            <h2 id="letters-to-numbers-converter" className="text-2xl md:text-3xl font-bold text-foreground">
              Letters To Numbers Converter
            </h2>
            <p className="text-muted-foreground mt-1 text-sm md:text-base max-w-md">
              Convert letters to numbers and back — A=1, ASCII, hex, binary, and more.
            </p>
          </div>
          <Link
            href="/tools/letters-to-numbers-converter"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline flex-shrink-0"
          >
            Open full tool
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tool card */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/30 flex-wrap gap-3">
            <div className="flex items-center gap-1 bg-background border border-border rounded-lg p-1">
              <button
                onClick={() => { setMode('encode'); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  mode === 'encode' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Letters → Numbers
              </button>
              <button
                onClick={() => { setMode('decode'); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  mode === 'decode' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Numbers → Letters
              </button>
            </div>
            <div className="flex items-center gap-1 bg-background border border-border rounded-lg p-1">
              {(Object.keys(CODE_LABELS) as CodeType[]).map(ct => (
                <button
                  key={ct}
                  onClick={() => setCodeType(ct)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    codeType === ct ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {ct === 'a1' ? 'A=1' : ct === 'a0' ? 'A=0' : ct.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Two-column I/O */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Input */}
            <div className="p-5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {mode === 'encode' ? 'Letters / Text' : 'Numbers'}
              </label>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={inputPlaceholder}
                rows={5}
                className="w-full bg-transparent resize-none text-foreground placeholder-muted-foreground text-sm focus:outline-none font-mono leading-relaxed"
              />
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                <button
                  onClick={handleSwap}
                  disabled={!result}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  Swap
                </button>
                <button
                  onClick={() => setInput('')}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Clear
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="p-5 bg-secondary/20">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {mode === 'encode' ? `Numbers (${CODE_LABELS[codeType]})` : 'Letters / Text'}
                </label>
                {result && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Copy className="w-3 h-3" />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              <div className="min-h-[120px] font-mono text-sm text-foreground leading-relaxed break-all whitespace-pre-wrap">
                {result || (
                  <span className="text-muted-foreground/50">
                    {mode === 'encode' ? '8-5-12-12-15' : 'result appears here'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick examples */}
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {[['HELLO', '8-5-12-12-15'], ['SOS', '19-15-19'], ['ABC', '1-2-3'], ['Z', '26']].map(([letters, nums]) => (
            <button
              key={letters}
              onClick={() => { setMode('encode'); setCodeType('a1'); setInput(letters) }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary text-xs font-mono transition-colors"
            >
              <span className="text-foreground font-semibold">{letters}</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-primary">{nums}</span>
            </button>
          ))}
          <span className="flex items-center text-xs text-muted-foreground px-2">← try these</span>
        </div>
      </div>
    </section>
  )
}
