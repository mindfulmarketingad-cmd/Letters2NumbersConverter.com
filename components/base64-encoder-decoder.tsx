'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RotateCcw, ArrowLeftRight, AlertCircle } from 'lucide-react'
import { useSaveState } from '@/lib/save-context'

type Mode = 'encode' | 'decode'
type Charset = 'standard' | 'urlsafe'

function toBase64(text: string, urlSafe: boolean): { output: string; error: string } {
  try {
    // Encode UTF-8 via TextEncoder → Uint8Array → base64
    const bytes = new TextEncoder().encode(text)
    let binary = ''
    bytes.forEach(b => { binary += String.fromCharCode(b) })
    let b64 = btoa(binary)
    if (urlSafe) b64 = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
    return { output: b64, error: '' }
  } catch {
    return { output: '', error: 'Encoding failed. Input contains characters that cannot be processed.' }
  }
}

function fromBase64(b64: string, urlSafe: boolean): { output: string; error: string } {
  try {
    let normalized = b64.trim()
    if (urlSafe) {
      normalized = normalized.replace(/-/g, '+').replace(/_/g, '/')
      // Re-add padding
      while (normalized.length % 4 !== 0) normalized += '='
    }
    const binary = atob(normalized)
    // Decode UTF-8
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0))
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes)
    return { output: text, error: '' }
  } catch {
    return { output: '', error: 'Invalid Base64 input. Make sure you selected the correct charset (Standard vs URL-safe).' }
  }
}

export function Base64EncoderDecoder() {
  const [mode, setMode] = useState<Mode>('encode')
  const [charset, setCharset] = useState<Charset>('standard')
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)

  useSaveState(
    () => ({ input, mode, charset }),
    (s) => {
      setInput((s.input as string) ?? '')
      setMode((s.mode as Mode) === 'decode' ? 'decode' : 'encode')
      setCharset((s.charset as Charset) === 'urlsafe' ? 'urlsafe' : 'standard')
    }
  )

  const urlSafe = charset === 'urlsafe'
  const { output, error } = mode === 'encode'
    ? toBase64(input, urlSafe)
    : fromBase64(input, urlSafe)

  const handleSwap = useCallback(() => {
    setInput(output)
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }, [output])

  const handleCopy = useCallback(async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [output])

  const inputLabel  = mode === 'encode' ? 'Text to encode' : 'Base64 to decode'
  const outputLabel = mode === 'encode' ? 'Base64 output' : 'Decoded text'
  const placeholder = mode === 'encode'
    ? 'Type or paste any text here…'
    : 'Paste Base64 string here…'

  return (
    <div className="flex flex-col h-full bg-background">

      {/* Controls */}
      <div className="px-4 py-3 border-b border-border space-y-3">

        {/* Mode */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground w-14 flex-shrink-0">Mode</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            {(['encode', 'decode'] as Mode[]).map(m => (
              <button key={m} onClick={() => { setMode(m); setInput('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                {m === 'encode' ? 'Text → Base64' : 'Base64 → Text'}
              </button>
            ))}
          </div>
        </div>

        {/* Charset */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-medium text-muted-foreground w-14 flex-shrink-0">Charset</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            <button onClick={() => setCharset('standard')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${charset === 'standard' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              Standard <span className="text-xs opacity-60">(+/=)</span>
            </button>
            <button onClick={() => setCharset('urlsafe')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${charset === 'urlsafe' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              URL-safe <span className="text-xs opacity-60">(-_)</span>
            </button>
          </div>
        </div>
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

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button onClick={handleSwap} disabled={!output || !!error}
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

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-600 dark:text-yellow-400">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
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
          <div className={`min-h-[80px] p-4 rounded-lg border border-border bg-secondary/30 font-mono text-sm break-all whitespace-pre-wrap ${!output ? 'text-muted-foreground/40' : 'text-foreground'}`}>
            {output || (mode === 'encode' ? 'Base64 output appears here' : 'Decoded text appears here')}
          </div>
        </div>

        {/* Stats */}
        {output && !error && (
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Input: {input.length} char{input.length !== 1 ? 's' : ''}</span>
            <span>Output: {output.length} char{output.length !== 1 ? 's' : ''}</span>
            {mode === 'encode' && input.length > 0 && (
              <span>Ratio: {(output.length / input.length).toFixed(2)}×</span>
            )}
          </div>
        )}

        {/* Reference */}
        <div className="rounded-lg border border-border p-4 bg-secondary/20 space-y-2 text-xs text-muted-foreground">
          <p className="font-semibold text-foreground text-sm">Quick reference</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              ['Standard Base64', 'Uses A–Z, a–z, 0–9, +, /, = (padding). RFC 4648 §4.'],
              ['URL-safe Base64', 'Replaces + → -, / → _, omits = padding. RFC 4648 §5. Safe in URLs and filenames.'],
              ['Encoding ratio', 'Base64 output is ~33% larger than the input (every 3 bytes → 4 chars).'],
              ['UTF-8 support', 'This tool handles full Unicode — emoji, accented letters, CJK characters all encode correctly.'],
            ].map(([title, desc]) => (
              <div key={title} className="space-y-0.5">
                <p className="font-medium text-foreground">{title}</p>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
