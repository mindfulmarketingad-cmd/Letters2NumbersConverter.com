'use client'

import { useState } from 'react'
import { Copy, Download } from 'lucide-react'

export function UrlPercentEncodingDecoding() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const encodeUrl = (text: string): string => {
    try {
      return encodeURIComponent(text)
    } catch (err) {
      throw new Error('Error encoding URL')
    }
  }

  const decodeUrl = (text: string): string => {
    try {
      return decodeURIComponent(text)
    } catch (err) {
      throw new Error('Invalid URL encoding format')
    }
  }

  const handleEncode = () => {
    setError('')
    setOutput('')

    if (!input.trim()) {
      setError('Please enter some text')
      return
    }

    try {
      const result = encodeUrl(input)
      setOutput(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Encoding error')
    }
  }

  const handleDecode = () => {
    setError('')
    setOutput('')

    if (!input.trim()) {
      setError('Please enter some text')
      return
    }

    try {
      const result = decodeUrl(input)
      setOutput(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Decoding error')
    }
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
      alert('Copied to clipboard!')
    } catch (err) {
      alert('Failed to copy')
    }
  }

  const downloadResult = () => {
    const element = document.createElement('a')
    const file = new Blob([output], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'url-encoded.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">URL Percent Encoding and Decoding</h2>
        <p className="text-lg text-muted-foreground">
          Convert text to and from URL-safe percent-encoded format instantly. Perfect for developers, API testing, and web professionals.
        </p>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {/* Main two-column input/output area */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Input Column */}
        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-black dark:text-white mb-3">Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter the text that you wish to encode or decode."
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-background text-black dark:text-white placeholder-muted-foreground resize-none font-mono text-sm min-h-96"
          />
        </div>

        {/* Output Column */}
        <div className="flex flex-col">
          <label className="block text-sm font-semibold text-black dark:text-white mb-3">Result</label>
          <textarea
            value={output}
            readOnly
            placeholder="Your results will appear here."
            className="flex-1 px-4 py-3 border border-border rounded-lg bg-secondary/50 text-black dark:text-white placeholder-muted-foreground resize-none font-mono text-sm min-h-96"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleEncode}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity"
          style={{ backgroundColor: '#3b82f6' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span>→</span>
          Encode url
        </button>
        <button
          onClick={handleDecode}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity"
          style={{ backgroundColor: '#3b82f6' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span>←</span>
          Decode url
        </button>
      </div>

      {/* Copy and Download Buttons */}
      {output && (
        <div className="flex gap-3 mb-8">
          <button
            onClick={copyToClipboard}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            <Copy className="w-4 h-4" />
            Copy Result
          </button>
          <button
            onClick={downloadResult}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      )}

      {/* Information Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">About URL Percent Encoding</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          URL percent encoding (also known as URL encoding or percent-encoding) is a mechanism for encoding information in a URL. This tool helps you:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>Encode text to URL-safe percent format (%20 for space, %26 for &, etc.)</li>
          <li>Decode percent-encoded URLs back to plain text</li>
          <li>Handle special characters and spaces in URLs</li>
          <li>Test API parameters and query strings</li>
          <li>Prepare data for web transmission</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
          Common encoded characters include: space (%20), ! (%21), # (%23), $ (%24), & (%26), ' (%27), ( (%28), ) (%29), * (%2A), + (%2B), / (%2F), : (%3A), ; (%3B), ? (%3F), @ (%40), [ (%5B), ] (%5D), and many more.
        </p>
      </div>
    </div>
  )
}
