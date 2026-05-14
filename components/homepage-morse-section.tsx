'use client'

import Link from 'next/link'
import { ArrowRight, Radio } from 'lucide-react'
import { useState, useCallback, useRef } from 'react'
import { Copy, RotateCcw, Volume2, ArrowLeftRight } from 'lucide-react'

/* ─── Morse encode / decode ──────────────────────────────────────────────── */

const MORSE: Record<string, string> = {
  A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',
  I:'..',J:'.---',K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',
  Q:'--.-',R:'.-.',S:'...',T:'-',U:'..-',V:'...-',W:'.--',X:'-..-',
  Y:'-.--',Z:'--..',
  '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-',
  '5':'.....','6':'-....','7':'--...','8':'---..','9':'----.',
  '.':'.-.-.-',',':'--..--','?':'..--..',':':'---...',' ':'/',
}

const MORSE_REV: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE).map(([k, v]) => [v, k])
)

function textToMorse(text: string) {
  return text.toUpperCase().split('').map(c => MORSE[c] ?? '').filter(Boolean).join(' ')
}

function morseToText(morse: string) {
  return morse.trim().split('   ').map(word =>
    word.split(' ').map(code => MORSE_REV[code] ?? (code === '/' ? ' ' : '?')).join('')
  ).join(' ')
}

function playMorse(morse: string, wpm = 15) {
  const Ctx = window.AudioContext || (window as any).webkitAudioContext
  if (!Ctx) return
  const ctx = new Ctx()
  const dot = 1.2 / wpm
  let t = ctx.currentTime + 0.05
  const beep = (dur: number) => {
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.connect(g); g.connect(ctx.destination)
    osc.frequency.value = 600; osc.type = 'sine'
    g.gain.setValueAtTime(0, t)
    g.gain.linearRampToValueAtTime(0.45, t + 0.005)
    g.gain.setValueAtTime(0.45, t + dur - 0.005)
    g.gain.linearRampToValueAtTime(0, t + dur)
    osc.start(t); osc.stop(t + dur); t += dur
  }
  const gap = (d: number) => { t += d }
  for (const tok of morse.split(' ')) {
    if (tok === '/') { gap(dot * 7); continue }
    for (const sym of tok) {
      if (sym === '.') beep(dot)
      else if (sym === '-') beep(dot * 3)
      gap(dot)
    }
    gap(dot * 2)
  }
}

/* ─── Component ──────────────────────────────────────────────────────────── */

export function HomepageMorseSection() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const result = mode === 'encode' ? textToMorse(input) : morseToText(input)

  const handleSwap = () => {
    setInput(result)
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }

  const handlePlay = useCallback(() => {
    const morse = mode === 'encode' ? result : input
    if (morse) playMorse(morse)
  }, [mode, result, input])

  const handleCopy = useCallback(async () => {
    if (!result) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [result])

  const inputPlaceholder = mode === 'encode'
    ? 'Type a message to convert to Morse…'
    : 'Enter Morse code (dots, dashes, spaces)…'

  return (
    <section className="py-14 md:py-20 border-b border-border/50 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Radio className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Featured Tool
              </span>
            </div>
            <h2 id="morse-code-translator" className="text-2xl md:text-3xl font-bold text-foreground">
              Morse Code Translator
            </h2>
            <p className="text-muted-foreground mt-1 text-sm md:text-base max-w-md">
              Convert text to Morse code and back — instantly, with audio playback.
            </p>
          </div>
          <Link
            href="/tools/morse-code-translator"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline flex-shrink-0"
          >
            Open full tool
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tool card */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          {/* Mode toggle */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-1 bg-background border border-border rounded-lg p-1">
              <button
                onClick={() => { setMode('encode'); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  mode === 'encode' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Text → Morse
              </button>
              <button
                onClick={() => { setMode('decode'); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  mode === 'decode' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Morse → Text
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePlay}
                disabled={!result && !input}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-lg hover:bg-background transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Play
              </button>
            </div>
          </div>

          {/* Two-column I/O */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Input */}
            <div className="p-5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {mode === 'encode' ? 'Plain text' : 'Morse code'}
              </label>
              <textarea
                ref={textareaRef}
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
                  onClick={() => { setInput(''); textareaRef.current?.focus() }}
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
                  {mode === 'encode' ? 'Morse code' : 'Plain text'}
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
                    {mode === 'encode' ? '... / ... / ...' : 'translation appears here'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick reference dots */}
        <div className="mt-5 flex flex-wrap gap-2 justify-center">
          {[['SOS','... --- ...'],['HELLO','.... . .-.. .-.. ---'],['OK','-.- -.-.'],[' ','/']] .map(([letter, code]) => (
            <button
              key={letter}
              onClick={() => { setMode('encode'); setInput(letter === ' ' ? '' : letter) }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/30 hover:bg-secondary text-xs font-mono transition-colors"
            >
              <span className="text-foreground font-semibold">{letter === ' ' ? 'word gap' : letter}</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-primary">{code}</span>
            </button>
          ))}
          <span className="flex items-center text-xs text-muted-foreground px-2">← try these</span>
        </div>
      </div>
    </section>
  )
}
