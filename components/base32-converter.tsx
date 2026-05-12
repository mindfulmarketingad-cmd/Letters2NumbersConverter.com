'use client'

import { useState, useMemo } from 'react'
import { Copy, MoreVertical, Plus, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

// ─── Base32 variants ──────────────────────────────────────────────────────────
const VARIANTS = [
  { id: 'rfc4648',    label: 'Base32 (RFC 3548, RFC 4648)', alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567', pad: true },
  { id: 'base32hex',  label: 'Base32 Hex (RFC 4648)',        alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV', pad: true },
  { id: 'zbase32',    label: 'z-base-32',                    alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769', pad: false },
  { id: 'crockford',  label: "Crockford's Base32",           alphabet: '0123456789ABCDEFGHJKMNPQRSTVWXYZ', pad: false },
]

function base32Encode(input: string, alphabet: string, usePad: boolean): string {
  const bytes = new TextEncoder().encode(input)
  let bits = 0
  let value = 0
  let output = ''
  for (const byte of bytes) {
    value = (value << 8) | byte
    bits += 8
    while (bits >= 5) {
      output += alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }
  if (bits > 0) {
    output += alphabet[(value << (5 - bits)) & 31]
  }
  if (usePad) {
    while (output.length % 8 !== 0) output += '='
  }
  return output
}

function base32Decode(input: string, alphabet: string): string {
  const clean = input.replace(/=/g, '').toUpperCase()
  let bits = 0
  let value = 0
  const bytes: number[] = []
  const upperAlphabet = alphabet.toUpperCase()
  for (const ch of clean) {
    const idx = upperAlphabet.indexOf(ch)
    if (idx === -1) continue
    value = (value << 5) | idx
    bits += 5
    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 255)
      bits -= 8
    }
  }
  try {
    return new TextDecoder().decode(new Uint8Array(bytes))
  } catch {
    return bytes.map(b => String.fromCharCode(b)).join('')
  }
}

// ─── Panel arrow accent ───────────────────────────────────────────────────────
function PanelAccent() {
  return (
    <div
      className="w-10 flex-shrink-0 flex items-center justify-center text-white font-bold"
      style={{
        background: '#0e9994',
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
        minHeight: '100%',
      }}
    >
      <Plus className="w-5 h-5" />
    </div>
  )
}

export function Base32Converter() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [variantId, setVariantId] = useState('rfc4648')
  const [inputType, setInputType] = useState<'text' | 'hex'>('text')
  const [outputType, setOutputType] = useState<'encoded' | 'decoded'>('encoded')
  const [copied, setCopied] = useState(false)

  const variant = VARIANTS.find(v => v.id === variantId) ?? VARIANTS[0]

  const output = useMemo(() => {
    if (!input.trim()) return ''
    try {
      if (mode === 'encode') {
        return base32Encode(input, variant.alphabet, variant.pad)
      } else {
        return base32Decode(input, variant.alphabet)
      }
    } catch {
      return 'Invalid input for decoding.'
    }
  }, [input, mode, variant])

  const charInfo = output
    ? `→ ${mode === 'encode' ? 'Encoded' : 'Decoded'} ${output.length} chars`
    : '→ 0 chars'

  const handleCopy = async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex flex-col h-full bg-background p-3 gap-3">
      {/* Three-column panel row */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-3 min-h-0">

        {/* ── Left: Input panel ───────────────────── */}
        <div className="flex rounded-lg border border-border bg-card shadow-sm overflow-hidden min-h-[260px]">
          <PanelAccent />
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">View</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-lg font-black" style={{ color: '#0e9994' }}>
                      {inputType === 'text' ? 'Text' : 'Hex'}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setInputType('text')}>Text</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setInputType('hex')}>Hex</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </div>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={mode === 'encode' ? 'Enter text to encode…' : 'Enter Base32 to decode…'}
              className="flex-1 px-4 py-2 bg-transparent text-foreground placeholder-muted-foreground text-sm resize-none focus:outline-none font-mono"
            />
          </div>
        </div>

        {/* ── Middle: Operation panel ──────────────── */}
        <div className="flex rounded-lg border border-border bg-card shadow-sm overflow-hidden min-h-[260px] md:w-[260px]">
          <PanelAccent />
          <div className="flex-1 flex flex-col">
            {/* Encode / Decode tabs */}
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMode('encode')}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${mode === 'encode' ? 'text-amber-500' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Encode
                </button>
                <button
                  onClick={() => setMode('decode')}
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${mode === 'decode' ? 'text-amber-500' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Decode
                </button>
              </div>
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Algorithm */}
            <div className="px-4 pb-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-0.5">Algorithm</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 text-lg font-black" style={{ color: '#0e9994' }}>
                    Base32
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Base32</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mx-4 my-2 border-t border-border" />

            {/* Variant */}
            <div className="px-4 flex-1">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-2">Variant</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="w-full flex items-center justify-between px-3 py-2 rounded border border-border bg-secondary/40 hover:bg-secondary transition-colors text-sm font-semibold text-foreground text-left">
                    <span>{variant.label}</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  {VARIANTS.map(v => (
                    <DropdownMenuItem key={v.id} onClick={() => setVariantId(v.id)}>
                      {v.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <p className="text-xs text-muted-foreground mt-3">{charInfo}</p>
            </div>
          </div>
        </div>

        {/* ── Right: Output panel ──────────────────── */}
        <div className="flex rounded-lg border border-border bg-card shadow-sm overflow-hidden min-h-[260px]">
          <PanelAccent />
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between px-4 pt-3 pb-1">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">View</p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 text-lg font-black" style={{ color: '#0e9994' }}>
                      {mode === 'encode' ? 'Encoded' : 'Decoded'}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setOutputType('encoded')}>Encoded</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOutputType('decoded')}>Decoded</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <button onClick={handleCopy} disabled={!output} title="Copy output" className="disabled:opacity-40">
                <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>
            <div className="flex-1 px-4 py-2 text-sm font-mono text-foreground whitespace-pre-wrap break-all overflow-y-auto">
              {output || (
                <span className="text-muted-foreground italic font-sans text-sm">
                  Output will appear here…
                </span>
              )}
            </div>
            {copied && (
              <div className="text-center text-xs text-green-600 py-1 bg-green-50 dark:bg-green-950/20">
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Alphabet reference ────────────────────── */}
      <div className="rounded-lg border border-border bg-card shadow-sm p-4">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          {variant.label} Alphabet
        </p>
        <p className="text-xs font-mono text-foreground tracking-widest break-all">
          {variant.alphabet.split('').map((ch, i) => (
            <span key={i} className="inline-block mr-1 mb-1 px-1.5 py-0.5 rounded bg-secondary/50 border border-border/50 text-center">
              {ch}
            </span>
          ))}
          {variant.pad && <span className="inline-block mr-1 mb-1 px-1.5 py-0.5 rounded bg-secondary/50 border border-border/50">=</span>}
        </p>
      </div>
    </div>
  )
}
