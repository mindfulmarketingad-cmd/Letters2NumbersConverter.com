'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RotateCcw, ArrowLeftRight, AlertCircle } from 'lucide-react'
import { useSaveState } from '@/lib/save-context'

type Mode = 'decode' | 'encode'
type Format = 'decimal' | 'hex' | 'binary' | 'octal'
type Separator = 'space' | 'comma' | 'newline' | 'none'

// ── Conversion helpers ────────────────────────────────────────────────────────

function codeToChar(token: string, format: Format): string | null {
  const s = token.trim()
  if (!s) return null
  let code: number
  switch (format) {
    case 'decimal': code = parseInt(s, 10); break
    case 'hex':     code = parseInt(s.replace(/^0x/i, ''), 16); break
    case 'binary':  code = parseInt(s.replace(/^0b/i, ''), 2); break
    case 'octal':   code = parseInt(s.replace(/^0o/i, ''), 8); break
  }
  if (isNaN(code) || code < 0 || code > 127) return null
  return String.fromCharCode(code)
}

function charToCode(ch: string, format: Format): string {
  const code = ch.charCodeAt(0)
  switch (format) {
    case 'decimal': return String(code)
    case 'hex':     return code.toString(16).toUpperCase().padStart(2, '0')
    case 'binary':  return code.toString(2).padStart(7, '0')
    case 'octal':   return code.toString(8).padStart(3, '0')
  }
}

function separatorChar(sep: Separator): string {
  switch (sep) {
    case 'space':   return ' '
    case 'comma':   return ', '
    case 'newline': return '\n'
    case 'none':    return ''
  }
}

// Split tokens that may be space, comma, or newline separated
function tokenise(input: string): string[] {
  return input.split(/[\s,]+/).filter(Boolean)
}

function decode(input: string, format: Format): { output: string; errors: string[] } {
  const tokens = tokenise(input)
  const errors: string[] = []
  const chars: string[] = []
  tokens.forEach((t, i) => {
    const ch = codeToChar(t, format)
    if (ch === null) {
      errors.push(`Token ${i + 1} ("${t}") is not a valid ${format} ASCII code`)
    } else {
      chars.push(ch)
    }
  })
  return { output: chars.join(''), errors }
}

function encode(input: string, format: Format, sep: Separator): { output: string; errors: string[] } {
  const errors: string[] = []
  const codes: string[] = []
  for (const ch of input) {
    const code = ch.charCodeAt(0)
    if (code > 127) {
      errors.push(`Character "${ch}" (U+${code.toString(16).toUpperCase().padStart(4,'0')}) is outside ASCII range (0–127)`)
      codes.push('?')
    } else {
      codes.push(charToCode(ch, format))
    }
  }
  return { output: codes.join(separatorChar(sep)), errors }
}

// ── ASCII table data ──────────────────────────────────────────────────────────

const PRINTABLE_ASCII = Array.from({ length: 95 }, (_, i) => ({
  dec: i + 32,
  hex: (i + 32).toString(16).toUpperCase().padStart(2, '0'),
  char: String.fromCharCode(i + 32),
}))

// ── Component ─────────────────────────────────────────────────────────────────

export function ASCIIDecoder() {
  const [mode, setMode]   = useState<Mode>('decode')
  const [format, setFormat] = useState<Format>('decimal')
  const [sep, setSep]     = useState<Separator>('space')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [showTable, setShowTable] = useState(false)

  useSaveState(
    () => ({ input, mode, format }),
    (s) => {
      setInput((s.input as string) ?? '')
      setMode((s.mode as Mode) === 'encode' ? 'encode' : 'decode')
      setFormat((s.format as Format) ?? 'decimal')
    }
  )

  const { output, errors } = mode === 'decode'
    ? decode(input, format)
    : encode(input, format, sep)

  const handleSwap = useCallback(() => {
    setInput(output)
    setMode(m => m === 'decode' ? 'encode' : 'decode')
  }, [output])

  const handleCopy = useCallback(async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [output])

  const inputLabel  = mode === 'decode' ? `ASCII codes (${format})` : 'Text to encode'
  const outputLabel = mode === 'decode' ? 'Decoded text' : `ASCII codes (${format})`

  const placeholder = mode === 'decode'
    ? format === 'decimal' ? '72 101 108 108 111'
    : format === 'hex'     ? '48 65 6C 6C 6F'
    : format === 'binary'  ? '1001000 1100101 1101100 1101100 1101111'
    :                        '110 145 154 154 157'
    : 'Type or paste text here…'

  return (
    <div className="flex flex-col h-full bg-background">

      {/* Controls */}
      <div className="px-4 py-3 border-b border-border space-y-3">

        {/* Mode */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground w-14 flex-shrink-0">Mode</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            {(['decode', 'encode'] as Mode[]).map(m => (
              <button key={m} onClick={() => { setMode(m); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {m === 'decode' ? 'Codes → Text' : 'Text → Codes'}
              </button>
            ))}
          </div>
        </div>

        {/* Format */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground w-14 flex-shrink-0">Format</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1 flex-wrap">
            {(['decimal', 'hex', 'binary', 'octal'] as Format[]).map(f => (
              <button key={f} onClick={() => setFormat(f)}
                className={`px-3 py-1.5 rounded text-sm font-medium capitalize transition-colors ${format === f ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {f === 'decimal' ? 'Decimal' : f === 'hex' ? 'Hex' : f === 'binary' ? 'Binary' : 'Octal'}
              </button>
            ))}
          </div>
        </div>

        {/* Separator (encode only) */}
        {mode === 'encode' && (
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-medium text-muted-foreground w-14 flex-shrink-0">Separator</span>
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              {([['space', 'Space'], ['comma', 'Comma'], ['newline', 'Newline'], ['none', 'None']] as [Separator, string][]).map(([val, label]) => (
                <button key={val} onClick={() => setSep(val)}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${sep === val ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* I/O */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{inputLabel}</label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={placeholder}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-foreground placeholder-muted-foreground font-mono text-sm"
          />
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={handleSwap} disabled={!output}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed">
            <ArrowLeftRight className="w-4 h-4" />
            Swap
          </button>
          <button onClick={() => setInput('')}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium">
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* Errors */}
        {errors.length > 0 && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-600 dark:text-yellow-400">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              {errors.slice(0, 3).map((e, i) => <p key={i}>{e}</p>)}
              {errors.length > 3 && <p>…and {errors.length - 3} more</p>}
            </div>
          </div>
        )}

        {/* Output */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-foreground">{outputLabel}</label>
            {output && (
              <button onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>
          <div className={`min-h-[80px] p-4 rounded-lg border border-border bg-secondary/30 font-mono text-sm text-foreground break-all whitespace-pre-wrap ${!output ? 'text-muted-foreground/40' : ''}`}>
            {output || (mode === 'decode' ? 'decoded text appears here' : 'ASCII codes appear here')}
          </div>
        </div>

        {/* Quick reference stats */}
        {output && mode === 'encode' && (
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>{input.length} character{input.length !== 1 ? 's' : ''}</span>
            <span>{tokenise(output).length} code{tokenise(output).length !== 1 ? 's' : ''}</span>
          </div>
        )}

        {/* ASCII table */}
        <div>
          <button onClick={() => setShowTable(s => !s)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <span>{showTable ? '▲' : '▼'}</span>
            {showTable ? 'Hide' : 'Show'} ASCII reference table (32–126)
          </button>

          {showTable && (
            <div className="mt-3 overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Char</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Dec</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Hex</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Bin</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold">Oct</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {PRINTABLE_ASCII.map(({ dec, hex, char }) => (
                    <tr key={dec}
                      onClick={() => setInput(mode === 'decode' ? charToCode(char, format) : char)}
                      className="hover:bg-secondary/40 cursor-pointer transition-colors">
                      <td className="py-1.5 px-3 font-mono font-bold text-foreground">
                        {char === ' ' ? <span className="text-muted-foreground text-[10px]">SPACE</span> : char}
                      </td>
                      <td className="py-1.5 px-3 font-mono text-muted-foreground">{dec}</td>
                      <td className="py-1.5 px-3 font-mono text-muted-foreground">{hex}</td>
                      <td className="py-1.5 px-3 font-mono text-muted-foreground">{dec.toString(2).padStart(7,'0')}</td>
                      <td className="py-1.5 px-3 font-mono text-muted-foreground">{dec.toString(8).padStart(3,'0')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
