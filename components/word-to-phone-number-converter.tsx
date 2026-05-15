'use client'

import { useState, useCallback } from 'react'
import { Copy, RotateCcw, Phone } from 'lucide-react'

const LETTER_TO_DIGIT: Record<string, string> = {
  A: '2', B: '2', C: '2',
  D: '3', E: '3', F: '3',
  G: '4', H: '4', I: '4',
  J: '5', K: '5', L: '5',
  M: '6', N: '6', O: '6',
  P: '7', Q: '7', R: '7', S: '7',
  T: '8', U: '8', V: '8',
  W: '9', X: '9', Y: '9', Z: '9',
}

const KEYPAD: Array<{ digit: string; letters: string }> = [
  { digit: '1', letters: '' },
  { digit: '2', letters: 'ABC' },
  { digit: '3', letters: 'DEF' },
  { digit: '4', letters: 'GHI' },
  { digit: '5', letters: 'JKL' },
  { digit: '6', letters: 'MNO' },
  { digit: '7', letters: 'PQRS' },
  { digit: '8', letters: 'TUV' },
  { digit: '9', letters: 'WXYZ' },
  { digit: '*', letters: '' },
  { digit: '0', letters: '+' },
  { digit: '#', letters: '' },
]

type FormatStyle = 'raw' | 'dashes' | 'dots' | 'spaces' | 'us'

const FORMATS: { value: FormatStyle; label: string }[] = [
  { value: 'raw', label: 'Raw (no spaces)' },
  { value: 'dashes', label: 'Dashes (XXX-XXXX)' },
  { value: 'dots', label: 'Dots (XXX.XXXX)' },
  { value: 'spaces', label: 'Spaces (XXX XXXX)' },
  { value: 'us', label: 'US (+1 XXX-XXX-XXXX)' },
]

const SAMPLES = [
  { label: 'FLOWERS', word: 'FLOWERS' },
  { label: 'PIZZA', word: 'PIZZA' },
  { label: 'HELP ME', word: 'HELP ME' },
  { label: '1-800-TAXI CAB', word: '1-800-TAXI CAB' },
]

type CharResult = { char: string; digit: string | null; type: 'letter' | 'digit' | 'separator' | 'other' }

function parseInput(text: string): CharResult[] {
  return text.split('').map(ch => {
    const upper = ch.toUpperCase()
    if (/[A-Z]/.test(upper)) {
      return { char: ch, digit: LETTER_TO_DIGIT[upper], type: 'letter' }
    }
    if (/[0-9]/.test(ch)) {
      return { char: ch, digit: ch, type: 'digit' }
    }
    if (/[\s\-.]/.test(ch)) {
      return { char: ch, digit: null, type: 'separator' }
    }
    return { char: ch, digit: null, type: 'other' }
  })
}

function formatNumber(digits: string, style: FormatStyle): string {
  if (style === 'raw') return digits
  if (style === 'us') {
    const clean = digits.replace(/\D/g, '')
    if (clean.length <= 7) {
      return `+1 ${clean.slice(0, 3)}-${clean.slice(3, 6)}-${clean.slice(6)}`.replace(/-$/, '')
    }
    const area = clean.slice(0, 3)
    const prefix = clean.slice(3, 6)
    const line = clean.slice(6, 10)
    return `+1 ${area}-${prefix}-${line}`
  }
  const sep = style === 'dashes' ? '-' : style === 'dots' ? '.' : ' '
  if (digits.length <= 7) {
    return `${digits.slice(0, 3)}${sep}${digits.slice(3)}`
  }
  if (digits.length <= 10) {
    return `${digits.slice(0, 3)}${sep}${digits.slice(3, 6)}${sep}${digits.slice(6)}`
  }
  return digits
}

export function WordToPhoneNumberConverter() {
  const [input, setInput] = useState('')
  const [format, setFormat] = useState<FormatStyle>('dashes')
  const [copied, setCopied] = useState(false)
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const parsed = parseInput(input)
  const rawDigits = parsed.map(r => r.digit ?? '').join('')
  const formatted = rawDigits ? formatNumber(rawDigits, format) : ''

  const handleCopy = useCallback(async () => {
    if (!formatted) return
    await navigator.clipboard.writeText(formatted)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }, [formatted])

  const activeDigits = new Set(
    activeKey
      ? parsed.filter(r => r.digit === activeKey).map(() => activeKey)
      : [],
  )
  void activeDigits

  return (
    <div className="flex flex-col gap-6">
      {/* Input row */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Word or Phrase</label>
          <div className="flex gap-2">
            {SAMPLES.map(s => (
              <button
                key={s.label}
                onClick={() => setInput(s.word)}
                className="rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D]"
              >
                {s.label}
              </button>
            ))}
            <button
              onClick={() => setInput('')}
              disabled={!input}
              className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-600 transition-colors hover:border-red-400 hover:text-red-500 disabled:opacity-40"
            >
              <RotateCcw className="h-3 w-3" />
              Clear
            </button>
          </div>
        </div>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a word, phrase, or vanity number… e.g. FLOWERS"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-lg tracking-widest text-gray-800 placeholder:text-base placeholder:tracking-normal placeholder:text-gray-400 focus:border-[#00BD9D] focus:outline-none focus:ring-2 focus:ring-[#00BD9D]/20"
        />
      </div>

      {/* Character mapping strip */}
      {input && (
        <div className="flex flex-wrap gap-1">
          {parsed.map((r, i) => (
            <div
              key={i}
              className={`flex flex-col items-center rounded-lg border px-2 py-1.5 ${
                r.type === 'letter'
                  ? 'border-[#00BD9D]/30 bg-[#00BD9D]/5'
                  : r.type === 'digit'
                  ? 'border-[#49C6E5]/30 bg-[#49C6E5]/5'
                  : r.type === 'separator'
                  ? 'border-transparent bg-transparent'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              <span className="text-xs font-semibold uppercase text-gray-800">
                {r.char === ' ' ? '␣' : r.char}
              </span>
              <span
                className={`mt-0.5 text-xs font-bold ${
                  r.digit ? 'text-[#00BD9D]' : 'text-gray-300'
                }`}
              >
                {r.digit ?? '·'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Result + format */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Phone className="h-5 w-5 text-[#00BD9D]" />
          <span className="text-sm font-medium text-gray-600">Format:</span>
          {FORMATS.map(f => (
            <button
              key={f.value}
              onClick={() => setFormat(f.value)}
              className={`rounded-lg border px-3 py-1 text-xs transition-colors ${
                format === f.value
                  ? 'border-[#00BD9D] bg-[#00BD9D] text-white'
                  : 'border-gray-200 bg-white text-gray-600 hover:border-[#00BD9D] hover:text-[#00BD9D]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 rounded-xl border border-gray-200 bg-white px-5 py-4">
            {formatted ? (
              <span className="font-mono text-3xl font-bold tracking-widest text-gray-900">
                {formatted}
              </span>
            ) : (
              <span className="text-base text-gray-400">
                Phone number will appear here…
              </span>
            )}
          </div>
          <button
            onClick={handleCopy}
            disabled={!formatted}
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D] disabled:opacity-40"
          >
            <Copy className="h-4 w-4" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Visual keypad */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
        <p className="mb-4 text-sm font-medium text-gray-700">Phone keypad reference</p>
        <div className="grid max-w-xs grid-cols-3 gap-3">
          {KEYPAD.map(k => {
            const isActive = input
              .toUpperCase()
              .split('')
              .some(ch => LETTER_TO_DIGIT[ch] === k.digit)
            return (
              <div
                key={k.digit}
                onMouseEnter={() => setActiveKey(k.digit)}
                onMouseLeave={() => setActiveKey(null)}
                className={`flex cursor-default flex-col items-center rounded-xl border py-3 transition-colors ${
                  isActive
                    ? 'border-[#00BD9D] bg-[#00BD9D]/10'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <span className="text-xl font-bold text-gray-900">{k.digit}</span>
                <span className="mt-0.5 text-[10px] tracking-widest text-gray-400">
                  {k.letters}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
