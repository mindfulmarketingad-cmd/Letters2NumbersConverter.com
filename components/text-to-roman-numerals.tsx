'use client'

import { useState, useMemo } from 'react'
import { Copy, Share2, Code, Bookmark, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// ─── Roman numeral logic ──────────────────────────────────────────────────────
const ROMAN_MAP: [number, string][] = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100,  'C'], [90,  'XC'], [50,  'L'], [40,  'XL'],
  [10,   'X'], [9,   'IX'], [5,   'V'], [4,   'IV'], [1, 'I'],
]

function toRoman(n: number): string {
  if (n <= 0 || n > 9999) return '?'
  let result = ''
  for (const [val, sym] of ROMAN_MAP) {
    while (n >= val) { result += sym; n -= val }
  }
  return result
}

function fromRoman(s: string): number {
  const vals: Record<string, number> = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
  let total = 0
  const upper = s.toUpperCase()
  for (let i = 0; i < upper.length; i++) {
    const cur = vals[upper[i]] ?? 0
    const nxt = vals[upper[i + 1]] ?? 0
    total += cur < nxt ? -cur : cur
  }
  return total
}

// ─── Conversion modes ─────────────────────────────────────────────────────────
type InterpretAs = 'text' | 'numbers'
type ConvertTo   = 'roman' | 'text'

const SEPARATORS: { label: string; value: string }[] = [
  { label: 'Space',   value: ' '  },
  { label: 'Comma',   value: ', ' },
  { label: 'Hyphen',  value: '-'  },
  { label: 'Period',  value: '. ' },
  { label: 'Newline', value: '\n' },
  { label: 'None',    value: ''   },
]

function convertTextToRoman(text: string, sep: string): string {
  return text
    .split('')
    .map(ch => toRoman(ch.charCodeAt(0)))
    .join(sep)
}

function convertNumbersToRoman(text: string, sep: string): string {
  return text
    .trim()
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(tok => {
      const n = parseInt(tok, 10)
      return isNaN(n) ? '?' : toRoman(n)
    })
    .join(sep)
}

function convertRomanToText(text: string): string {
  return text
    .trim()
    .split(/[\s,\-\.]+/)
    .filter(Boolean)
    .map(tok => {
      const n = fromRoman(tok)
      return n > 0 ? String.fromCharCode(n) : '?'
    })
    .join('')
}

function convertRomanToNumbers(text: string): string {
  return text
    .trim()
    .split(/[\s,\-\.]+/)
    .filter(Boolean)
    .map(tok => {
      const n = fromRoman(tok)
      return n > 0 ? String(n) : '?'
    })
    .join(' ')
}

export function TextToRomanNumerals() {
  const [input, setInput] = useState('')
  const [interpretAs, setInterpretAs] = useState<InterpretAs>('text')
  const [convertTo, setConvertTo] = useState<ConvertTo>('roman')
  const [separator, setSeparator] = useState(' ')
  const [customSep, setCustomSep] = useState('')
  const [showCustom, setShowCustom] = useState(false)
  const [copied, setCopied] = useState(false)

  const activeSep = showCustom ? customSep : separator

  const output = useMemo(() => {
    if (!input.trim()) return ''
    if (interpretAs === 'text' && convertTo === 'roman') return convertTextToRoman(input, activeSep)
    if (interpretAs === 'numbers' && convertTo === 'roman') return convertNumbersToRoman(input, activeSep)
    if (interpretAs === 'text' && convertTo === 'text') return input
    // roman → text or roman → numbers
    if (interpretAs === 'numbers' && convertTo === 'text') return convertRomanToText(input)
    return convertRomanToText(input)
  }, [input, interpretAs, convertTo, activeSep])

  // Auto-infer: if convertTo is roman the output is roman; let user decode too
  const effectiveOutput = useMemo(() => {
    if (!input.trim()) return ''
    if (convertTo === 'roman') {
      if (interpretAs === 'text') return convertTextToRoman(input, activeSep)
      return convertNumbersToRoman(input, activeSep)
    }
    // convertTo = text → decode roman input
    if (interpretAs === 'text') return convertRomanToText(input)
    return convertRomanToNumbers(input)
  }, [input, interpretAs, convertTo, activeSep])

  const inputCharCount = input.length
  const outputCharCount = effectiveOutput.length

  const handleCopy = async () => {
    if (!effectiveOutput) return
    await navigator.clipboard.writeText(effectiveOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const currentSepLabel = showCustom
    ? `"${customSep}"`
    : (SEPARATORS.find(s => s.value === separator)?.label ?? 'Space')

  return (
    <div className="flex flex-col h-full bg-background">
      {/* ── Arrow header bar ─────────────────────────────────── */}
      <div className="flex items-stretch gap-0 px-4 pt-4 pb-2">
        {/* Interpret As */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-3 px-6 py-3 text-white font-medium rounded-l-sm"
              style={{ background: 'linear-gradient(90deg, #0e9994 85%, transparent 100%)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 50%,calc(100% - 16px) 100%,0 100%)', minWidth: '200px' }}
            >
              <div className="text-left">
                <p className="text-xs opacity-80 uppercase tracking-wider font-normal">Interpret as</p>
                <p className="text-lg font-black uppercase flex items-center gap-1">
                  {interpretAs === 'text' ? 'TEXT' : 'NUMBERS'}
                  <ChevronDown className="w-4 h-4" />
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setInterpretAs('text')}>Text (ASCII)</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setInterpretAs('numbers')}>Numbers</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Spacer arrow */}
        <div className="w-4" />

        {/* Convert To */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex items-center gap-3 px-6 py-3 text-white font-medium rounded-l-sm flex-1"
              style={{ background: 'linear-gradient(90deg, #0e9994 85%, transparent 100%)', clipPath: 'polygon(0 0,calc(100% - 16px) 0,100% 50%,calc(100% - 16px) 100%,0 100%)' }}
            >
              <div className="text-left">
                <p className="text-xs opacity-80 uppercase tracking-wider font-normal">Convert to</p>
                <p className="text-lg font-black uppercase flex items-center gap-1">
                  {convertTo === 'roman' ? 'ROMAN NUMERALS' : 'TEXT / NUMBERS'}
                  <ChevronDown className="w-4 h-4" />
                </p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setConvertTo('roman')}>Roman Numerals</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setConvertTo('text')}>Text / Numbers (decode)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* ── Two-panel body ───────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 px-4 pb-4 min-h-0">
        {/* Input panel */}
        <div className="flex flex-col rounded border border-border bg-secondary/20 overflow-hidden">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={
              interpretAs === 'text'
                ? 'Type text here… (e.g. Hello)'
                : 'Enter numbers… (e.g. 8 9 or 104, 105)'
            }
            className="flex-1 w-full px-4 py-3 bg-transparent text-foreground placeholder-muted-foreground text-sm resize-none focus:outline-none min-h-[200px] font-mono"
          />
          <div className="flex items-center justify-end gap-3 px-3 py-2 border-t border-border bg-secondary/30">
            <Code className="w-4 h-4 text-muted-foreground" />
            <Bookmark className="w-4 h-4 text-muted-foreground" />
            <div className="w-px h-4 bg-border" />
            <span className="text-xs font-semibold text-white bg-muted-foreground/70 rounded-full w-7 h-7 flex items-center justify-center">
              {inputCharCount}
            </span>
          </div>
        </div>

        {/* Output panel */}
        <div className="flex flex-col rounded border border-border bg-secondary/20 overflow-hidden">
          {/* Separator tab row */}
          <div className="flex items-center border-b border-border">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors border-r border-border">
                  Separator: <span className="font-semibold ml-1">{currentSepLabel}</span>
                  <ChevronDown className="w-3.5 h-3.5 ml-1 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {SEPARATORS.map(s => (
                  <DropdownMenuItem key={s.label} onClick={() => { setSeparator(s.value); setShowCustom(false) }}>
                    {s.label} {s.value ? `("${s.value.replace('\n', '↵')}")` : ''}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem onClick={() => setShowCustom(true)}>Custom…</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {showCustom && (
              <input
                value={customSep}
                onChange={e => setCustomSep(e.target.value)}
                placeholder="type separator"
                className="flex-1 px-3 py-1.5 text-sm bg-transparent focus:outline-none"
              />
            )}
          </div>

          {/* Output text */}
          <div className="flex-1 px-4 py-3 text-sm font-mono text-foreground whitespace-pre-wrap break-all overflow-y-auto min-h-[180px]">
            {effectiveOutput || (
              <span className="text-muted-foreground italic not-italic font-sans text-sm">
                Output will appear here…
              </span>
            )}
          </div>

          <div className="flex items-center justify-end gap-3 px-3 py-2 border-t border-border bg-secondary/30">
            <button onClick={handleCopy} disabled={!effectiveOutput} title="Copy">
              <Share2 className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
            <Code className="w-4 h-4 text-muted-foreground" />
            <button onClick={handleCopy} disabled={!effectiveOutput} title="Copy output" className="disabled:opacity-40">
              <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
            </button>
            <div className="w-px h-4 bg-border" />
            <span className="text-xs font-semibold text-white bg-muted-foreground/70 rounded-full w-7 h-7 flex items-center justify-center">
              {outputCharCount > 99 ? '99+' : outputCharCount}
            </span>
          </div>
          {copied && (
            <div className="text-center text-xs text-green-600 py-1 bg-green-50 dark:bg-green-950/20">
              Copied to clipboard!
            </div>
          )}
        </div>
      </div>

      {/* ── Quick reference ──────────────────────────────────── */}
      <div className="px-4 pb-4">
        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-muted-foreground hover:text-foreground transition-colors select-none list-none flex items-center gap-2">
            <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
            Roman Numeral Reference Chart
          </summary>
          <div className="mt-3 grid grid-cols-4 sm:grid-cols-7 gap-1.5 text-xs">
            {[['I','1'],['IV','4'],['V','5'],['IX','9'],['X','10'],['XL','40'],['L','50'],
              ['XC','90'],['C','100'],['CD','400'],['D','500'],['CM','900'],['M','1000']].map(([r, n]) => (
              <div key={r} className="flex items-center justify-between px-2 py-1 bg-secondary/40 rounded border border-border/50">
                <span className="font-bold font-mono">{r}</span>
                <span className="text-muted-foreground ml-1">{n}</span>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  )
}
