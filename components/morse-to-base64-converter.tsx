'use client'

import { useState, useMemo } from 'react'
import { Copy, Share2, Code2 } from 'lucide-react'

// Morse code to character mapping
const morseToChar: Record<string, string> = {
  '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
  '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
  '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
  '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
  '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
  '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
  '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
  '-----': '0', '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'",
  '!.-.-.-': '!', '-.--.-.': '(', '-.--.-': ')', '.-..-.': '"',
  '...-..-': '$', '.-.-.-': '.', '-....-': '-', '-.--.': '@'
}

export function MorseToBase64Converter() {
  const [morseInput, setMorseInput] = useState('')
  const [longSeparator, setLongSeparator] = useState('−')
  const [shortSeparator, setShortSeparator] = useState('·')
  const [spaceSeparator, setSpaceSeparator] = useState('/')
  const [copied, setCopied] = useState('')

  // Convert Morse code to text
  const decodeFromMorse = (morse: string, longChar: string, shortChar: string, spaceChar: string): string => {
    if (!morse.trim()) return ''

    // Split by space separator to get words
    const words = morse.split(spaceChar)
    
    const decodedWords = words.map(word => {
      // Split each word by character separator (space or other character)
      const chars = word.trim().split(' ')
      
      return chars.map(char => {
        // Convert custom separators to standard morse
        const standardMorse = char
          .replace(new RegExp(`\\${longChar}`, 'g'), '-')
          .replace(new RegExp(`\\${shortChar}`, 'g'), '.')
        
        return morseToChar[standardMorse] || '?'
      }).join('')
    }).join(' ')

    return decodedWords
  }

  // Convert text to Base64
  const textToBase64 = (text: string): string => {
    try {
      return btoa(unescape(encodeURIComponent(text)))
    } catch {
      return ''
    }
  }

  // Decode morse and convert to base64
  const base64Output = useMemo(() => {
    const decodedText = decodeFromMorse(morseInput, longSeparator, shortSeparator, spaceSeparator)
    return decodedText ? textToBase64(decodedText) : ''
  }, [morseInput, longSeparator, shortSeparator, spaceSeparator])

  // Get intermediate text for reference
  const decodedText = useMemo(() => {
    return decodeFromMorse(morseInput, longSeparator, shortSeparator, spaceSeparator)
  }, [morseInput, longSeparator, shortSeparator, spaceSeparator])

  const handleCopy = (text: string, type: string) => {
    if (!text) return
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="w-full space-y-8">
      {/* Header Banner */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-teal-600 text-white p-6 rounded-lg space-y-2">
          <p className="text-sm font-semibold tracking-wide">INTERPRET AS</p>
          <p className="text-3xl font-bold">MORSE CODE</p>
        </div>
        <div className="bg-teal-600 text-white p-6 rounded-lg space-y-2">
          <p className="text-sm font-semibold tracking-wide">CONVERT TO</p>
          <p className="text-3xl font-bold">BASE64</p>
        </div>
      </div>

      {/* Separator Configuration */}
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <tbody>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-semibold bg-secondary text-sm w-32">Separator</td>
              <td className="px-4 py-3 bg-secondary"></td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-semibold text-sm">Long</td>
              <td className="px-4 py-3">
                <input
                  type="text"
                  value={longSeparator}
                  onChange={e => setLongSeparator(e.target.value || '−')}
                  maxLength={3}
                  className="w-16 px-2 py-1 border border-border rounded"
                />
              </td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-3 font-semibold text-sm">Short</td>
              <td className="px-4 py-3">
                <input
                  type="text"
                  value={shortSeparator}
                  onChange={e => setShortSeparator(e.target.value || '·')}
                  maxLength={3}
                  className="w-16 px-2 py-1 border border-border rounded"
                />
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-sm">Space</td>
              <td className="px-4 py-3">
                <input
                  type="text"
                  value={spaceSeparator}
                  onChange={e => setSpaceSeparator(e.target.value || '/')}
                  maxLength={3}
                  className="w-16 px-2 py-1 border border-border rounded"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Input and Output */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Morse Input */}
        <div className="space-y-4">
          <textarea
            value={morseInput}
            onChange={e => setMorseInput(e.target.value)}
            placeholder="Enter Morse code here..."
            className="w-full h-64 px-4 py-3 border border-border rounded-lg bg-background resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 font-mono text-sm"
            spellCheck="false"
          />
          
          {/* Morse Input Actions */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(morseInput, 'morse')}
                disabled={!morseInput}
                className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                className="p-2 hover:bg-secondary rounded transition-colors"
                title="View Code"
              >
                <Code2 className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs text-muted-foreground">{morseInput.length}</span>
          </div>

          {/* Decoded Text Display */}
          {decodedText && (
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-xs font-semibold text-muted-foreground mb-2">Decoded Text</p>
              <p className="text-sm font-mono break-words">{decodedText}</p>
            </div>
          )}
        </div>

        {/* Right Column - Base64 Output */}
        <div className="space-y-4">
          <textarea
            value={base64Output}
            readOnly
            placeholder="Base64 output will appear here..."
            className="w-full h-64 px-4 py-3 border border-border rounded-lg bg-background resize-none focus:outline-none font-mono text-sm text-muted-foreground"
            spellCheck="false"
          />
          
          {/* Base64 Output Actions */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => handleCopy(base64Output, 'base64')}
                disabled={!base64Output}
                className="p-2 hover:bg-secondary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Copy"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                className="p-2 hover:bg-secondary rounded transition-colors"
                title="View Code"
              >
                <Code2 className="w-4 h-4" />
              </button>
            </div>
            <span className="text-xs text-muted-foreground">{base64Output.length}</span>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-2">
        <h4 className="text-sm font-semibold">How to Use:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Enter Morse code using the configured separators (default: − for dash, · for dot, / for spaces)</li>
          <li>• Use spaces to separate individual characters</li>
          <li>• Use the space separator to separate words</li>
          <li>• The tool will decode the Morse code and convert it to Base64</li>
          <li>• Customize separators as needed for different Morse code formats</li>
        </ul>
      </div>
    </div>
  )
}
