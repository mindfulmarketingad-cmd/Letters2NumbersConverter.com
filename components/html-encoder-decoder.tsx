'use client'

import { useState } from 'react'
import { Copy, Download, Maximize2 } from 'lucide-react'

const HTML_ENTITY_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;',
}

const REVERSE_ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#x2F;': '/',
  '&#x60;': '`',
  '&#x3D;': '=',
}

export function HtmlEncoderDecoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [error, setError] = useState('')

  const encodeHtml = (text: string): string => {
    try {
      return text.replace(/[&<>"'`=\/]/g, (char) => HTML_ENTITY_MAP[char] || char)
    } catch (err) {
      throw new Error('Error encoding HTML')
    }
  }

  const decodeHtml = (text: string): string => {
    try {
      let decoded = text
      
      // Decode named entities
      Object.entries(REVERSE_ENTITY_MAP).forEach(([entity, char]) => {
        decoded = decoded.replace(new RegExp(entity, 'g'), char)
      })
      
      // Decode numeric entities (&#123; or &#xAB;)
      decoded = decoded.replace(/&#(\d+);/g, (match, code) => {
        return String.fromCharCode(parseInt(code, 10))
      })
      
      decoded = decoded.replace(/&#x([0-9A-Fa-f]+);/g, (match, code) => {
        return String.fromCharCode(parseInt(code, 16))
      })
      
      return decoded
    } catch (err) {
      throw new Error('Error decoding HTML')
    }
  }

  const handleEncode = () => {
    setError('')
    if (!input.trim()) {
      setError('Please enter some text to encode')
      return
    }
    try {
      setOutput(encodeHtml(input))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Encoding error')
    }
  }

  const handleDecode = () => {
    setError('')
    if (!input.trim()) {
      setError('Please enter some HTML to decode')
      return
    }
    try {
      setOutput(decodeHtml(input))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decoding error')
    }
  }

  const handleClear = () => {
    setInput('')
    setOutput('')
    setError('')
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied to clipboard!')
    } catch (err) {
      alert('Failed to copy')
    }
  }

  const downloadResult = (text: string, filename: string) => {
    const element = document.createElement('a')
    const file = new Blob([text], { type: 'text/html' })
    element.href = URL.createObjectURL(file)
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const containerClass = isFullscreen
    ? 'fixed inset-0 z-50 bg-background p-4 overflow-auto'
    : 'w-full max-w-6xl mx-auto p-8 bg-background rounded-lg'

  return (
    <div className={containerClass}>
      <div className="mb-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">HTML Encoder and Decoder</h2>
            <p className="text-lg text-muted-foreground">
              Instantly encode and decode HTML entities. Perfect for web developers, content creators, and anyone working with HTML markup.
            </p>
          </div>
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {/* Two Column Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Input Column */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-foreground mb-3">Input</label>
          <div className="flex-1 border border-border rounded-lg overflow-hidden bg-secondary/50">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter HTML code or text to encode..."
              className="w-full h-96 p-4 bg-background text-foreground placeholder-muted-foreground resize-none font-mono text-sm border-none focus:outline-none"
            />
          </div>
          {input && (
            <button
              onClick={() => copyToClipboard(input)}
              className="mt-2 flex items-center gap-2 px-3 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded transition"
            >
              <Copy className="w-4 h-4" />
              Copy input
            </button>
          )}
        </div>

        {/* Output Column */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-foreground mb-3">Output</label>
          <div className="flex-1 border border-border rounded-lg overflow-hidden bg-yellow-50 dark:bg-yellow-950">
            <textarea
              value={output}
              readOnly
              placeholder="Encoded or decoded result will appear here..."
              className="w-full h-96 p-4 bg-background text-foreground placeholder-muted-foreground resize-none font-mono text-sm border-none focus:outline-none"
            />
          </div>
          {output && (
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => copyToClipboard(output)}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              >
                <Copy className="w-4 h-4" />
                Copy output
              </button>
              <button
                onClick={() => downloadResult(output, 'output.html')}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white rounded transition"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <button
          onClick={handleEncode}
          className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-lg font-semibold transition"
        >
          Encode
        </button>
        <button
          onClick={handleDecode}
          className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white rounded-lg font-semibold transition"
        >
          Decode
        </button>
        <button
          onClick={handleClear}
          className="px-6 py-3 border-2 border-gray-400 hover:border-gray-500 text-foreground rounded-lg font-semibold transition"
        >
          Clear
        </button>
      </div>

      {/* Information Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-foreground mb-3">About HTML Encoding/Decoding</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          HTML encoding converts special characters and symbols into HTML entities, making them safe for use in web pages. This tool helps you:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside mb-3">
          <li>Encode special characters to HTML entities (&lt;, &gt;, &amp;, etc.)</li>
          <li>Decode HTML entities back to their original characters</li>
          <li>Handle numeric and named entity references</li>
          <li>Safely display user-generated content</li>
          <li>Prepare code for web publication</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Common HTML Entities:</strong> &lt; (&amp;lt;), &gt; (&amp;gt;), &amp; (&amp;amp;), &quot; (&amp;quot;), &apos; (&amp;#39;)
        </p>
      </div>
    </div>
  )
}
