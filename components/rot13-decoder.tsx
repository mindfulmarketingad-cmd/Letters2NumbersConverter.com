'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RotateCcw, Info, ArrowLeftRight } from 'lucide-react'
import { useSaveState } from '@/lib/save-context'

function rot13(input: string): string {
  return input.replace(/[a-zA-Z]/g, (ch) => {
    const base = ch <= 'Z' ? 65 : 97
    return String.fromCharCode(((ch.charCodeAt(0) - base + 13) % 26) + base)
  })
}

const ALPHABET_TABLE = Array.from({ length: 26 }, (_, i) => ({
  plain: String.fromCharCode(65 + i),
  rot13: String.fromCharCode(((i + 13) % 26) + 65),
}))

export function ROT13Decoder() {
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [showTable, setShowTable] = useState(false)

  useSaveState(
    () => ({ input }),
    (s) => setInput((s.input as string) ?? '')
  )

  const output = rot13(input)

  const handleCopy = useCallback(async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [output])

  const handleSwap = () => setInput(output)
  const handleClear = () => setInput('')

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Input ──────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">Input text</h2>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Processed locally — no uploads.
            </span>
          </div>

          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste plain text or ROT13 here…"
            className="flex-1 min-h-[220px] w-full rounded-lg border border-border bg-secondary/30 px-3 py-2.5 text-sm font-mono text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />

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

          <p className="text-xs text-muted-foreground">
            ROT13 is self-inverse — encoding and decoding use the same operation. Paste encoded or plain text and it transforms instantly.
          </p>
        </div>

        {/* ── Right: Output ────────────────────────── */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">ROT13 output</h2>
            <button
              onClick={handleCopy}
              disabled={!output}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex-1 min-h-[220px] rounded-lg border border-border bg-card px-3 py-2.5 text-sm font-mono text-foreground overflow-y-auto whitespace-pre-wrap break-words">
            {output || <span className="text-muted-foreground">Output appears here as you type…</span>}
          </div>

          {/* Stats */}
          {input && (
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>{input.length} characters</span>
              <span>{input.replace(/[^a-zA-Z]/g, '').length} letters shifted</span>
              <span>{input.trim().split(/\s+/).filter(Boolean).length} words</span>
            </div>
          )}
        </div>
      </div>

      {/* ── ROT13 Alphabet Table (collapsible) ───── */}
      <div className="border-t border-border pt-3">
        <button
          onClick={() => setShowTable(t => !t)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
        >
          <Info className="w-3 h-3" />
          {showTable ? 'Hide' : 'Show'} ROT13 alphabet table
        </button>

        {showTable && (
          <div className="mt-3 overflow-x-auto">
            <table className="text-xs w-full border-collapse">
              <thead>
                <tr>
                  <td className="py-1 pr-2 text-muted-foreground font-semibold w-16">Plain</td>
                  {ALPHABET_TABLE.map(({ plain }) => (
                    <td key={plain} className="text-center px-1 py-1 font-mono text-foreground border-b border-border/40">{plain}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-1 pr-2 text-muted-foreground font-semibold">ROT13</td>
                  {ALPHABET_TABLE.map(({ plain, rot13: r }) => (
                    <td key={plain} className="text-center px-1 py-1 font-mono text-green-600">{r}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
