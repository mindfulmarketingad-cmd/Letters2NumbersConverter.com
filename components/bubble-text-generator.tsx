'use client'

import { useState } from 'react'
import { Copy, Check, Twitter, X } from 'lucide-react'

// ── Unicode conversion functions ───────────────────────────────────────────────

function toBubble(text: string): string {
  return text.split('').map(c => {
    const code = c.charCodeAt(0)
    if (c >= 'a' && c <= 'z') return String.fromCodePoint(0x24D0 + code - 97) // ⓐ–ⓩ
    if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0x24B6 + code - 65) // Ⓐ–Ⓩ
    if (c === '0') return '⓪'
    if (c >= '1' && c <= '9') return String.fromCodePoint(0x2460 + code - 49) // ①–⑨
    return c
  }).join('')
}

function toBlackBubble(text: string): string {
  return text.split('').map(c => {
    const uc = c.toUpperCase()
    if (uc >= 'A' && uc <= 'Z') return String.fromCodePoint(0x1F150 + uc.charCodeAt(0) - 65) // 🅐–🅩
    if (c >= '0' && c <= '9') return String.fromCodePoint(0x2776 + c.charCodeAt(0) - 49) // ❶–❾
    return c
  }).join('')
}

function toAlternatingBubble(text: string): string {
  let bubbleCount = 0
  return text.split('').map(c => {
    const lc = c.toLowerCase()
    if (lc >= 'a' && lc <= 'z') {
      const useBlack = bubbleCount % 2 === 1
      bubbleCount++
      const idx = lc.charCodeAt(0) - 97
      return useBlack
        ? String.fromCodePoint(0x1F150 + idx) // 🅐–🅩
        : c >= 'A' && c <= 'Z'
          ? String.fromCodePoint(0x24B6 + idx) // Ⓐ–Ⓩ
          : String.fromCodePoint(0x24D0 + idx) // ⓐ–ⓩ
    }
    if (c !== ' ') bubbleCount++
    return c
  }).join('')
}

function toParenthesis(text: string): string {
  return text.split('').map(c => c === ' ' ? '  ' : `(${c})`).join('')
}

function toBigBubbles(text: string): string {
  return text.split('').map(c => {
    const uc = c.toUpperCase()
    if (uc >= 'A' && uc <= 'Z') return String.fromCodePoint(0x1F130 + uc.charCodeAt(0) - 65) // 🄰–🄿
    if (c >= '0' && c <= '9') return String.fromCodePoint(0x1F100 + c.charCodeAt(0) - 48) // 🄀–🄉
    return c
  }).join('')
}

function toKeycap(text: string): string {
  return text.split('').map(c => {
    if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) return c.toLowerCase() + '⃣'
    if (c >= '0' && c <= '9') return c + '⃣'
    if (c === '#' || c === '*') return c + '⃣'
    return c
  }).join('')
}

function toFullwidth(text: string): string {
  return text.split('').map(c => {
    if (c >= 'a' && c <= 'z') return String.fromCodePoint(0xFF41 + c.charCodeAt(0) - 97) // ａ–ｚ
    if (c >= 'A' && c <= 'Z') return String.fromCodePoint(0xFF21 + c.charCodeAt(0) - 65) // Ａ–Ｚ
    if (c >= '0' && c <= '9') return String.fromCodePoint(0xFF10 + c.charCodeAt(0) - 48) // ０–９
    if (c === ' ') return '　'
    return c
  }).join('')
}

function toDoubleStruck(text: string): string {
  const lower = '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫'
  const upper = '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ'
  return text.split('').map(c => {
    if (c >= 'a' && c <= 'z') return [...lower][c.charCodeAt(0) - 97]
    if (c >= 'A' && c <= 'Z') return [...upper][c.charCodeAt(0) - 65]
    return c
  }).join('')
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface Style {
  name: string
  fn: (text: string) => string
  description: string
}

const STYLES: Style[] = [
  { name: 'Bubble text', fn: toBubble, description: 'Circled outline letters' },
  { name: 'Black bubble text', fn: toBlackBubble, description: 'Filled dark circles' },
  { name: 'Alternating Bubble', fn: toAlternatingBubble, description: 'Alternating outline & filled' },
  { name: 'Parenthesis', fn: toParenthesis, description: 'Each letter in parentheses' },
  { name: 'Big bubbles', fn: toBigBubbles, description: 'Squared block letters' },
  { name: 'Keycap bubbles', fn: toKeycap, description: 'Keyboard key style' },
  { name: 'Fullwidth', fn: toFullwidth, description: 'Wide aesthetic letters' },
  { name: 'Double struck', fn: toDoubleStruck, description: 'Mathematical double outline' },
]

// ── Preview Modal ─────────────────────────────────────────────────────────────

function PreviewModal({ text, styleName, onClose }: { text: string; styleName: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card border border-border rounded-2xl max-w-lg w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="font-semibold text-foreground">{styleName} — Preview</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-secondary rounded-lg transition-colors">
            <X size={18} className="text-muted-foreground" />
          </button>
        </div>
        <div className="p-8 min-h-[140px] flex items-center justify-center">
          <p className="text-3xl text-foreground text-center leading-relaxed break-all font-sans">{text}</p>
        </div>
        <div className="p-5 border-t border-border flex gap-3">
          <button
            onClick={copy}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
          >
            {copied ? <><Check size={15} /> Copied!</> : <><Copy size={15} /> Copy Text</>}
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Twitter size={15} />
            Tweet
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Style Row ─────────────────────────────────────────────────────────────────

function StyleRow({ style, input }: { style: Style; input: string }) {
  const [copied, setCopied] = useState(false)
  const [previewing, setPreviewing] = useState(false)

  const converted = style.fn(input || 'Hello')
  const isEmpty = !input.trim()

  const copy = async () => {
    await navigator.clipboard.writeText(converted)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <div className="grid grid-cols-[160px_1fr_auto] gap-3 items-center px-4 py-3.5 border-b border-border last:border-0 hover:bg-secondary/20 transition-colors group">
        <div>
          <p className="text-sm font-medium text-foreground">{style.name}</p>
          <p className="text-xs text-muted-foreground">{style.description}</p>
        </div>
        <p className="text-lg text-foreground font-sans break-all leading-relaxed min-w-0">
          {converted}
        </p>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={() => setPreviewing(true)}
            disabled={isEmpty}
            className="px-2.5 py-1.5 text-xs font-medium border border-border rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            Preview
          </button>
          <button
            onClick={copy}
            disabled={isEmpty}
            className="px-2.5 py-1.5 text-xs font-medium border border-border rounded-md hover:bg-secondary transition-colors flex items-center gap-1 text-muted-foreground hover:text-foreground disabled:opacity-40"
          >
            {copied ? <><Check size={11} /> Done</> : <><Copy size={11} /> Copy</>}
          </button>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(converted)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 text-xs font-medium border border-border rounded-md hover:bg-secondary transition-colors flex items-center gap-1 text-muted-foreground hover:text-foreground"
          >
            <Twitter size={11} />
            Tweet
          </a>
        </div>
      </div>
      {previewing && (
        <PreviewModal text={converted} styleName={style.name} onClose={() => setPreviewing(false)} />
      )}
    </>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export function BubbleTextGenerator() {
  const [input, setInput] = useState('')

  return (
    <div className="flex flex-col h-full">
      {/* Input */}
      <div className="p-5 border-b border-border bg-secondary/20">
        <label className="block text-sm font-medium text-foreground mb-2">Your Text</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type something..."
          rows={4}
          maxLength={200}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground text-sm"
        />
        <div className="flex justify-between mt-1.5">
          <p className="text-xs text-muted-foreground">Type or paste text to instantly generate bubble text styles</p>
          <p className="text-xs text-muted-foreground">{input.length}/200</p>
        </div>
      </div>

      {/* Results table */}
      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-border">
          {STYLES.map(style => (
            <StyleRow key={style.name} style={style} input={input} />
          ))}
        </div>
      </div>
    </div>
  )
}
