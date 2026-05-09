'use client'

import { useState } from 'react'
import { Copy, Download } from 'lucide-react'

export function A0Z25Decoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const decode = () => {
    try {
      // Handle both space-separated and comma-separated formats
      const numbers = input
        .trim()
        .split(/[\s,]+/)
        .filter(n => n.length > 0)
        .map(n => parseInt(n, 10))

      // Validate that all are valid A0Z25 numbers (0-25)
      if (numbers.some(n => isNaN(n) || n < 0 || n > 25)) {
        setOutput('Error: All numbers must be between 0 and 25')
        return
      }

      // Convert to letters
      const result = numbers.map(n => String.fromCharCode(65 + n)).join('')
      setOutput(result)
    } catch {
      setOutput('Error: Invalid input format. Use space or comma-separated numbers 0-25.')
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadOutput = () => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output))
    element.setAttribute('download', 'decoded.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const clear = () => {
    setInput('')
    setOutput('')
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-black dark:text-white">
            A0Z25 Encoded Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter A0Z25 encoded numbers (space or comma separated)&#10;Example: 7 4 11 11 14 or 7,4,11,11,14"
            className="w-full h-48 p-4 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-[#11a099]"
          />
          <div className="text-xs text-muted-foreground">
            Enter numbers 0-25 separated by spaces or commas. 0=A, 1=B, ..., 25=Z
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-black dark:text-white">
            Decoded Output
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Your decoded text will appear here..."
            className="w-full h-48 p-4 border border-border rounded-lg bg-secondary text-foreground resize-none focus:outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#11a099] text-white hover:opacity-90 transition-opacity"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
            {output && (
              <button
                onClick={downloadOutput}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#11a099] text-[#11a099] hover:bg-[#11a099] hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={decode}
          className="px-8 py-3 rounded-lg bg-[#11a099] text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Decode
        </button>
        <button
          onClick={clear}
          className="px-8 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Clear
        </button>
      </div>

      {/* Info Section */}
      <div className="bg-secondary/50 border border-border rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-black dark:text-white">How A0Z25 Decoding Works</h3>
        <p className="text-sm text-muted-foreground">
          The A0Z25 decoder converts numbers (0-25) back into their corresponding letters:
          0=A, 1=B, 2=C... up to 25=Z. Simply enter your encoded numbers separated by spaces
          or commas, and the decoder will instantly convert them to readable text.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold text-black dark:text-white mb-2">Supported Formats:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Space-separated: 7 4 11 11 14</li>
              <li>• Comma-separated: 7,4,11,11,14</li>
              <li>• Mixed: 7 4, 11 11, 14</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-black dark:text-white mb-2">Example:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• 7 4 11 11 14 → HELLO</li>
              <li>• 22 14 18 11 3 → WORLD</li>
              <li>• 0 → A</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
