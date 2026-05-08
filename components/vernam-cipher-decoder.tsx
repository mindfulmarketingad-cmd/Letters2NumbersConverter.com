'use client'

import { useState, useMemo } from 'react'
import { Copy, Download, Lock } from 'lucide-react'

type DecryptionMode = 'vigenere' | 'xor'

export function VernamCipherDecoder() {
  const [ciphertext, setCiphertext] = useState('')
  const [key, setKey] = useState('')
  const [mode, setMode] = useState<DecryptionMode>('vigenere')
  const [preserveCase, setPreserveCase] = useState(true)
  const [copied, setCopied] = useState('')

  // Vigenere decryption
  const decryptVigenere = (cipher: string, k: string): string => {
    if (!cipher || !k) return ''
    
    const keyUpper = k.toUpperCase()
    let keyIndex = 0
    let result = ''

    for (let i = 0; i < cipher.length; i++) {
      const char = cipher[i]
      
      if (/[a-z]/i.test(char)) {
        const keyChar = keyUpper[keyIndex % keyUpper.length]
        const shift = keyChar.charCodeAt(0) - 65
        
        if (/[a-z]/.test(char)) {
          const charCode = char.charCodeAt(0) - 97
          const decrypted = (charCode - shift + 26) % 26
          result += String.fromCharCode(decrypted + 97)
        } else {
          const charCode = char.charCodeAt(0) - 65
          const decrypted = (charCode - shift + 26) % 26
          result += String.fromCharCode(decrypted + 65)
        }
        
        keyIndex++
      } else {
        result += char
      }
    }

    return result
  }

  // XOR decryption
  const decryptXOR = (cipher: string, k: string): string => {
    if (!cipher || !k) return ''
    
    const keyBytes = Array.from(k).map(c => c.charCodeAt(0))
    let result = ''
    
    for (let i = 0; i < cipher.length; i++) {
      const cipherChar = cipher.charCodeAt(i)
      const keyChar = keyBytes[i % keyBytes.length]
      const decryptedChar = cipherChar ^ keyChar
      result += String.fromCharCode(decryptedChar)
    }

    return result
  }

  // Perform decryption
  const decryptedText = useMemo(() => {
    if (!ciphertext || !key) return ''

    let result = ''
    if (mode === 'vigenere') {
      result = decryptVigenere(ciphertext, key)
    } else {
      result = decryptXOR(ciphertext, key)
    }

    return preserveCase ? result : result.toLowerCase()
  }, [ciphertext, key, mode, preserveCase])

  const handleCopy = () => {
    if (decryptedText) {
      navigator.clipboard.writeText(decryptedText)
      setCopied('decrypt')
      setTimeout(() => setCopied(''), 2000)
    }
  }

  const handleDownload = () => {
    if (!decryptedText) return
    
    const element = document.createElement('a')
    const file = new Blob([decryptedText], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'decrypted_message.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleClear = () => {
    setCiphertext('')
  }

  return (
    <div className="w-full space-y-6">
      {/* Main Decryption Area */}
      <div className="border border-border rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 gap-px bg-border">
          {/* Ciphertext Input */}
          <div className="bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-muted-foreground" />
                <h3 className="font-semibold">Ciphertext Input</h3>
              </div>
              <button
                onClick={handleClear}
                disabled={!ciphertext}
                className="text-xs text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors"
              >
                Clear
              </button>
            </div>
            <textarea
              value={ciphertext}
              onChange={e => setCiphertext(e.target.value)}
              placeholder="Enter the encrypted text..."
              className="w-full h-80 px-3 py-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none font-mono text-sm"
              spellCheck="false"
            />
            <div className="text-xs text-muted-foreground">
              {ciphertext.length} characters
            </div>
          </div>

          {/* Decrypted Output */}
          <div className="bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Decrypted Text</h3>
              <span className="text-xs text-muted-foreground">{decryptedText.length} characters</span>
            </div>
            <div className="w-full h-80 px-3 py-2 border border-border rounded bg-background overflow-y-auto font-mono text-sm break-words">
              {decryptedText ? decryptedText : <span className="text-muted-foreground">Decrypted text will appear here...</span>}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                disabled={!decryptedText}
                className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Copy"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={handleDownload}
                disabled={!decryptedText}
                className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decryption Key Input */}
      <div className="space-y-3">
        <label className="text-sm font-semibold">Decryption Key Required</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <input
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="Enter the original encryption key..."
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Decryption Mode and Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-card border border-border rounded-lg p-6">
        {/* Decryption Mode */}
        <div>
          <h4 className="font-semibold text-sm mb-3">DECRYPTION MODE</h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="vigenere"
                checked={mode === 'vigenere'}
                onChange={e => setMode(e.target.value as DecryptionMode)}
                className="w-4 h-4"
              />
              <span className="text-sm">Vigenere Mode</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="mode"
                value="xor"
                checked={mode === 'xor'}
                onChange={e => setMode(e.target.value as DecryptionMode)}
                className="w-4 h-4"
              />
              <span className="text-sm">XOR Mode</span>
            </label>
          </div>
        </div>

        {/* Options */}
        <div>
          <h4 className="font-semibold text-sm mb-3">OPTIONS</h4>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={preserveCase}
              onChange={e => setPreserveCase(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm">Preserve case</span>
          </label>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-semibold text-sm">How It Works:</h4>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>Vigenere Mode:</strong> Uses the key as a repeating pattern for alphabetic shift decryption</li>
          <li>• <strong>XOR Mode:</strong> Applies bitwise XOR operation between ciphertext and key (mathematically unbreakable when key length equals message length)</li>
          <li>• The same key used for encryption must be used for decryption</li>
          <li>• All processing happens locally in your browser - no data is transmitted</li>
        </ul>
      </div>
    </div>
  )
}
