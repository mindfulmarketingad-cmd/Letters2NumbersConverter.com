'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Copy, Download } from 'lucide-react'

export function OnlineUrlDecoderEncoder() {
  const [mode, setMode] = useState<'decode' | 'encode'>('decode')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [liveMode, setLiveMode] = useState(false)
  const [decodeEachLine, setDecodeEachLine] = useState(false)
  const [decodeRecursively, setDecodeRecursively] = useState(false)
  const [recursionCount, setRecursionCount] = useState(1)
  const [error, setError] = useState('')

  const decodeUrl = (text: string, recursive: boolean = false): string => {
    try {
      let result = text
      if (recursive) {
        for (let i = 0; i < 16; i++) {
          const decoded = decodeURIComponent(result)
          if (decoded === result) break
          result = decoded
          setRecursionCount(i + 1)
        }
      } else {
        result = decodeURIComponent(text)
      }
      return result
    } catch (err) {
      throw new Error('Invalid URL encoding')
    }
  }

  const encodeUrl = (text: string): string => {
    try {
      return encodeURIComponent(text)
    } catch (err) {
      throw new Error('Error encoding URL')
    }
  }

  const handleProcess = () => {
    setError('')
    setRecursionCount(1)

    if (!input.trim()) {
      setError('Please enter some text')
      return
    }

    try {
      let result = ''
      
      if (mode === 'decode') {
        if (decodeEachLine) {
          result = input
            .split('\n')
            .map(line => decodeUrl(line.trim(), decodeRecursively))
            .join('\n')
        } else {
          result = decodeUrl(input, decodeRecursively)
        }
      } else {
        if (decodeEachLine) {
          result = input
            .split('\n')
            .map(line => encodeUrl(line.trim()))
            .join('\n')
        } else {
          result = encodeUrl(input)
        }
      }
      
      setOutput(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion error')
    }
  }

  const handleInputChange = (value: string) => {
    setInput(value)
    if (liveMode && mode === 'decode') {
      try {
        const decoded = decodeEachLine
          ? value
              .split('\n')
              .map(line => decodeUrl(line.trim(), decodeRecursively))
              .join('\n')
          : decodeUrl(value, decodeRecursively)
        setOutput(decoded)
        setError('')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Conversion error')
      }
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
    element.download = `url-${mode}d.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Online URL Decoder Encoder</h2>
        <p className="text-lg text-muted-foreground">
          Instantly encode and decode URLs. Perfect for web developers, security professionals, and anyone working with URL-encoded data.
        </p>
      </div>

      <Tabs value={mode} onValueChange={(v) => setMode(v as 'decode' | 'encode')} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="decode">Decode</TabsTrigger>
          <TabsTrigger value="encode">Encode</TabsTrigger>
        </TabsList>

        <TabsContent value="decode" className="space-y-6 mt-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-black dark:text-white mb-2">Decode from URL-encoded format</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Simply enter your data then push the decode button.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="encode" className="space-y-6 mt-6">
          <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-black dark:text-white mb-2">Encode to URL-encoded format</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Convert your text to URL-safe format instantly.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Input Section */}
      <div className="bg-secondary/50 p-6 rounded-lg border border-border mb-6">
        <label className="block text-sm font-semibold text-black dark:text-white mb-3">
          {mode === 'decode' ? 'URL-Encoded Text' : 'Text to Encode'}
        </label>
        <textarea
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Type (or paste) here..."
          className="w-full h-40 px-4 py-3 border border-border rounded-lg bg-background text-black dark:text-white placeholder-muted-foreground resize-none font-mono text-sm"
        />
      </div>

      {/* Options Section */}
      <div className="bg-secondary/50 p-6 rounded-lg border border-border mb-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="decodeLine"
              checked={decodeEachLine}
              onChange={(e) => setDecodeEachLine(e.target.checked)}
              className="w-4 h-4 rounded border-border"
            />
            <label htmlFor="decodeLine" className="text-sm font-medium text-foreground">
              Process each line separately (useful for multiple entries)
            </label>
          </div>

          {mode === 'decode' && (
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="recursive"
                checked={decodeRecursively}
                onChange={(e) => setDecodeRecursively(e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <label htmlFor="recursive" className="text-sm font-medium text-foreground">
                Decode recursively (up to 16 times; useful for multiple encoding layers)
              </label>
            </div>
          )}

          {mode === 'decode' && (
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="liveMode"
                checked={liveMode}
                onChange={(e) => setLiveMode(e.target.checked)}
                className="w-4 h-4 rounded border-border"
              />
              <label htmlFor="liveMode" className="text-sm font-medium text-foreground">
                Live mode (decodes in real-time as you type)
              </label>
            </div>
          )}
        </div>
      </div>

      {/* Process Button */}
      {!liveMode && (
        <button
          onClick={handleProcess}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-opacity mb-6"
          style={{ backgroundColor: '#11a099' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {mode === 'decode' ? 'DECODE' : 'ENCODE'}
        </button>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {/* Output Section */}
      <div className="bg-secondary/50 p-6 rounded-lg border border-border mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-black dark:text-white">
            Result
            {decodeRecursively && recursionCount > 1 && (
              <span className="ml-2 text-xs text-muted-foreground">
                (decoded {recursionCount} times)
              </span>
            )}
          </label>
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="Result goes here..."
          className="w-full h-40 px-4 py-3 border border-border rounded-lg bg-background text-black dark:text-white placeholder-muted-foreground resize-none font-mono text-sm"
        />
      </div>

      {/* Action Buttons */}
      {output && (
        <div className="flex gap-3 mb-8">
          <button
            onClick={copyToClipboard}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            <Copy className="w-4 h-4" />
            Copy to clipboard
          </button>
          <button
            onClick={downloadResult}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-black dark:text-white mb-3">About URL Encoding/Decoding</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          URL encoding converts special characters into a format that is safe for URLs and web transmission. This tool helps you:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>Decode URL-encoded strings instantly</li>
          <li>Encode text to URL-safe format</li>
          <li>Handle multiple encoding layers with recursive decoding</li>
          <li>Process multiple entries line by line</li>
          <li>Support real-time conversion for quick workflows</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
          Perfect for web developers, API testing, security professionals, and anyone working with URL parameters and encoded data.
        </p>
      </div>
    </div>
  )
}
