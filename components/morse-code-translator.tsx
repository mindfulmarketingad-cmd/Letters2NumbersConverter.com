'use client'

import { useState, useCallback, useRef } from 'react'
import { Copy, RotateCcw, Volume2, ArrowLeftRight } from 'lucide-react'

const MORSE: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-',
  '"': '.-..-.', '$': '...-..-', '@': '.--.-.', ' ': '/',
}

const MORSE_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(MORSE).map(([k, v]) => [v, k])
)

function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(ch => MORSE[ch] ?? '')
    .filter(Boolean)
    .join(' ')
}

function morseToText(morse: string): string {
  return morse
    .trim()
    .split('   ')
    .map(word =>
      word
        .split(' ')
        .map(code => MORSE_REVERSE[code] ?? (code === '/' ? ' ' : '?'))
        .join('')
    )
    .join(' ')
}

function playMorse(morse: string, wpm = 15) {
  const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
  if (!AudioCtx) return
  const ctx = new AudioCtx()
  const dotDuration = 1.2 / wpm
  let t = ctx.currentTime + 0.1

  const beep = (duration: number) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 600
    osc.type = 'sine'
    gain.gain.setValueAtTime(0, t)
    gain.gain.linearRampToValueAtTime(0.5, t + 0.005)
    gain.gain.setValueAtTime(0.5, t + duration - 0.005)
    gain.gain.linearRampToValueAtTime(0, t + duration)
    osc.start(t)
    osc.stop(t + duration)
    t += duration
  }

  const gap = (duration: number) => { t += duration }

  for (const token of morse.split(' ')) {
    if (token === '/') {
      gap(dotDuration * 7)
    } else {
      for (const sym of token) {
        if (sym === '.') beep(dotDuration)
        else if (sym === '-') beep(dotDuration * 3)
        gap(dotDuration)
      }
      gap(dotDuration * 2)
    }
  }
}

type Mode = 'encode' | 'decode'

export function MorseCodeTranslator() {
  const [mode, setMode] = useState<Mode>('encode')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const output = useCallback(() => {
    if (!input.trim()) return ''
    return mode === 'encode' ? textToMorse(input) : morseToText(input)
  }, [input, mode])

  const result = output()

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleSwap = () => {
    setInput(result)
    setMode(m => (m === 'encode' ? 'decode' : 'encode'))
  }

  const handlePlay = () => {
    const morse = mode === 'encode' ? result : input
    if (morse) playMorse(morse)
  }

  const handleReset = () => {
    setInput('')
    textareaRef.current?.focus()
  }

  const inputLabel = mode === 'encode' ? 'Text' : 'Morse Code'
  const outputLabel = mode === 'encode' ? 'Morse Code' : 'Text'
  const inputPlaceholder =
    mode === 'encode'
      ? 'Type your message here…'
      : 'Enter Morse code (use spaces between letters, 3 spaces between words, / for word gap)…'

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Mode toggle */}
      <div className="flex justify-end px-4 py-3 border-b border-border">
        <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
          <button
            onClick={() => { setMode('encode'); setInput('') }}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${mode === 'encode' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Text → Morse
          </button>
          <button
            onClick={() => { setMode('decode'); setInput('') }}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${mode === 'decode' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Morse → Text
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{inputLabel}</label>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-foreground placeholder-muted-foreground font-mono text-sm"
          />
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSwap}
            disabled={!result}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Swap
          </button>
          <button
            onClick={handlePlay}
            disabled={!result && !input}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Volume2 className="w-4 h-4" />
            Play audio
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* Output */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">{outputLabel}</label>
            {result && (
              <button
                onClick={() => handleCopy(result)}
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>
          <div className="min-h-[120px] px-4 py-3 rounded-lg border border-border bg-secondary/10 font-mono text-sm text-foreground whitespace-pre-wrap break-all">
            {result || <span className="text-muted-foreground italic">Output will appear here…</span>}
          </div>
        </div>

        {/* Reference table */}
        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors select-none list-none flex items-center gap-2">
            <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
            Morse Code Reference Chart
          </summary>
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-6 gap-1 text-xs">
            {Object.entries(MORSE).filter(([k]) => k !== ' ').map(([char, code]) => (
              <div key={char} className="flex items-center justify-between px-2 py-1 bg-secondary/40 rounded border border-border/50">
                <span className="font-bold">{char}</span>
                <span className="font-mono text-muted-foreground ml-1">{code}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  )
}
