'use client'

import { useState, useCallback } from 'react'
import { Copy, Link2 } from 'lucide-react'

export function ReverseTextConverter() {
  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  const reversed = input.split('').reverse().join('')

  const handleCopy = useCallback(async () => {
    if (reversed) {
      await navigator.clipboard.writeText(reversed)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [reversed])

  const handleCopyLink = useCallback(async () => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/tools/reverse-text-converter?text=${encodeURIComponent(reversed)}`
    await navigator.clipboard.writeText(url)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }, [reversed])

  const handleClear = () => {
    setInput('')
  }

  return (
    <div className="w-full space-y-6">
      {/* Input Section */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Text to Reverse
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to reverse..."
          className="w-full h-48 p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            {input.length} characters
          </div>
          <button
            onClick={handleClear}
            className="px-3 py-1 text-sm rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Output Section */}
      {input && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Reversed Text
          </label>
          <div className="relative">
            <div className="w-full p-4 border border-border rounded-lg bg-secondary/50 text-foreground break-words whitespace-pre-wrap overflow-auto max-h-48">
              {reversed}
            </div>
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg bg-background hover:bg-secondary transition-colors group"
                title="Copy to clipboard"
              >
                <Copy className="w-4 h-4 group-hover:text-primary transition-colors" />
              </button>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-background hover:bg-secondary transition-colors group"
                title="Copy shareable link"
              >
                <Link2 className="w-4 h-4 group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-secondary/50 border border-border rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-foreground">How it Works</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Enter or paste any text in the input area</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>The tool instantly reverses all characters</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Copy the reversed text or share a link</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary">•</span>
            <span>Works with all languages and special characters</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
