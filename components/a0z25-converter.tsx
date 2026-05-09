'use client'

import { useState, useCallback } from 'react'
import { Copy, Download } from 'lucide-react'

export function A0Z25Converter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')

  const convertLettersToNumbers = useCallback((text: string): string => {
    return text
      .toUpperCase()
      .split('')
      .map((char) => {
        if (/[A-Z]/.test(char)) {
          return String(char.charCodeAt(0) - 65)
        }
        return char
      })
      .join(' ')
  }, [])

  const convertNumbersToLetters = useCallback((text: string): string => {
    return text
      .trim()
      .split(/[\s,]+/)
      .map((num) => {
        const n = parseInt(num, 10)
        if (n >= 0 && n <= 25) {
          return String.fromCharCode(65 + n)
        }
        return ''
      })
      .join('')
  }, [])

  const handleConvert = useCallback(() => {
    if (!input.trim()) {
      setOutput('')
      return
    }

    const result = mode === 'encode' ? convertLettersToNumbers(input) : convertNumbersToLetters(input)
    setOutput(result)
  }, [input, mode, convertLettersToNumbers, convertNumbersToLetters])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output)
  }, [output])

  const handleDownload = useCallback(() => {
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output))
    element.setAttribute('download', `a0z25-${mode}-output.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }, [output, mode])

  return (
    <div className="w-full space-y-6">
      {/* Mode Selection */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode('encode')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            mode === 'encode'
              ? 'bg-teal-600 text-white'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          Encode (Letters → Numbers)
        </button>
        <button
          onClick={() => setMode('decode')}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            mode === 'decode'
              ? 'bg-teal-600 text-white'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          Decode (Numbers → Letters)
        </button>
      </div>

      {/* Input Section */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground">
          {mode === 'encode' ? 'Enter Text to Encode' : 'Enter Numbers to Decode'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            mode === 'encode' ? 'Enter letters (e.g., HELLO)' : 'Enter numbers (e.g., 7 4 11 11 14)'
          }
          className="w-full h-40 p-4 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
        />
        <p className="text-xs text-muted-foreground mt-2">
          {mode === 'encode'
            ? 'Non-alphabetic characters will be preserved as-is'
            : 'Use spaces or commas to separate numbers. Numbers should be 0-25.'}
        </p>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="w-full px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
      >
        Convert
      </button>

      {/* Output Section */}
      {output && (
        <div>
          <label className="block text-sm font-semibold mb-2 text-foreground">Result</label>
          <div className="relative">
            <textarea
              value={output}
              readOnly
              className="w-full h-40 p-4 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-background rounded transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
              <button
                onClick={handleDownload}
                className="p-2 hover:bg-background rounded transition-colors"
                title="Download as text file"
              >
                <Download className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {mode === 'encode'
              ? `Encoded: ${output.split(' ').filter((n) => n).length} numbers`
              : `Decoded: ${output.length} characters`}
          </p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-8 p-4 bg-secondary/50 border border-border rounded-lg">
        <h3 className="font-semibold text-foreground mb-2">A0Z25 Chart Reference</h3>
        <div className="grid grid-cols-13 gap-1 text-xs">
          {Array.from({ length: 26 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="font-bold text-teal-600">{String.fromCharCode(65 + i)}</div>
              <div className="text-muted-foreground">{i}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
