'use client'

import { useState, useEffect } from 'react'
import { Copy, Link as LinkIcon } from 'lucide-react'

const BACONIAN_CIPHER = {
  A: 'AAAAA', B: 'AAAAB', C: 'AAABA', D: 'AAABB', E: 'AABAA',
  F: 'AABAB', G: 'AABBA', H: 'AABBB', I: 'ABAAA', J: 'ABAAB',
  K: 'ABABA', L: 'ABABB', M: 'ABBAA', N: 'ABBAB', O: 'ABBBA',
  P: 'ABBBB', Q: 'BAAAA', R: 'BAAAB', S: 'BAABA', T: 'BAABB',
  U: 'BABAA', V: 'BABAB', W: 'BABBA', X: 'BABBB', Y: 'BBAAA',
  Z: 'BBAAB', // Original 24 letters (no J/I, no W)
}

const BACONIAN_REVERSE = Object.fromEntries(
  Object.entries(BACONIAN_CIPHER).map(([k, v]) => [v, k])
)

export function BaconianCipher() {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState('')
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt')
  const [version, setVersion] = useState<'original'>('original')
  const [invert, setInvert] = useState(false)
  const [format, setFormat] = useState<'a-b' | 'embed'>('a-b')
  const [symbols, setSymbols] = useState<'a-b' | 'zero-one'>('a-b')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!message) {
      setResult('')
      return
    }

    try {
      if (mode === 'encrypt') {
        const encrypted = encryptBaconian(message, format, symbols, invert)
        setResult(encrypted)
      } else {
        const decrypted = decryptBaconian(message, symbols, invert)
        setResult(decrypted)
      }
    } catch (error) {
      setResult(`Error: ${error instanceof Error ? error.message : 'Invalid input'}`)
    }
  }, [message, mode, version, invert, format, symbols])

  const encryptBaconian = (text: string, fmt: string, sym: string, inv: boolean): string => {
    const cleanText = text.toUpperCase().replace(/[^A-Z]/g, '')
    if (!cleanText) return ''

    let encrypted = ''
    for (const char of cleanText) {
      if (char in BACONIAN_CIPHER) {
        let code = BACONIAN_CIPHER[char as keyof typeof BACONIAN_CIPHER]
        
        if (inv) {
          code = code.split('').map(c => c === 'A' ? 'B' : 'A').join('')
        }

        if (sym === 'zero-one') {
          code = code.replace(/A/g, '0').replace(/B/g, '1')
        }

        if (fmt === 'embed') {
          encrypted += code
        } else {
          encrypted += (encrypted ? ' ' : '') + code
        }
      }
    }

    return encrypted
  }

  const decryptBaconian = (text: string, sym: string, inv: boolean): string => {
    let cleanText = text.toUpperCase().replace(/\s+/g, ' ').trim()
    
    if (sym === 'zero-one') {
      cleanText = cleanText.replace(/0/g, 'A').replace(/1/g, 'B')
    } else {
      cleanText = cleanText.replace(/[^AB\s]/gi, '')
    }

    const codes = cleanText.split(/[\s]+/).filter(c => c.length === 5)
    
    let decrypted = ''
    for (const code of codes) {
      let lookup = code
      if (inv) {
        lookup = lookup.split('').map(c => c === 'A' ? 'B' : 'A').join('')
      }

      if (lookup in BACONIAN_REVERSE) {
        decrypted += BACONIAN_REVERSE[lookup as keyof typeof BACONIAN_REVERSE]
      }
    }

    return decrypted
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateShareLink = () => {
    const encoded = encodeURIComponent(result)
    const url = `${window.location.origin}${window.location.pathname}?text=${encoded}&mode=${mode}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Message Input */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-lg font-semibold">Message</label>
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter text to encode or decode..."
          className="w-full h-32 p-4 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <p className="text-sm text-muted-foreground mt-2">Non A-Z letter characters are ignored when encoding.</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Mode</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as 'encrypt' | 'decrypt')}
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
          >
            <option value="encrypt">Encrypt</option>
            <option value="decrypt">Decrypt</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Encrypt = plaintext to code, Decrypt = code to plaintext.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Version</label>
          <select
            value={version}
            onChange={(e) => setVersion(e.target.value as 'original')}
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
            disabled
          >
            <option value="original">Original (24 letters)</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Original merges I/J and U/V into single codes.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Invert</label>
          <select
            value={invert ? 'yes' : 'no'}
            onChange={(e) => setInvert(e.target.value === 'yes')}
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Swaps A and B before output or decoding.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as 'a-b' | 'embed')}
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
          >
            <option value="a-b">A/B</option>
            <option value="embed">Embed</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            A/B shows the pattern directly; Embed hides it in host text.
          </p>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Symbols</label>
          <select
            value={symbols}
            onChange={(e) => setSymbols(e.target.value as 'a-b' | 'zero-one')}
            className="w-full p-2 border border-border rounded-lg bg-background text-foreground"
          >
            <option value="a-b">A/B</option>
            <option value="zero-one">0/1</option>
          </select>
          <p className="text-xs text-muted-foreground mt-1">
            Used for A/B input/output. Embed ignores this setting.
          </p>
        </div>
      </div>

      {/* Result */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-lg font-semibold">Result</label>
          {result && (
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                title="Copy"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={generateShareLink}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                title="Share"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <textarea
          value={result}
          readOnly
          placeholder="The output will be shown here..."
          className="w-full h-32 p-4 border border-border rounded-lg bg-background text-foreground resize-none"
        />
        {copied && <p className="text-sm text-green-500 mt-2">Copied to clipboard!</p>}
      </div>
    </div>
  )
}
