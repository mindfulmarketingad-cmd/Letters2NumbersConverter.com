'use client'

import { useState, useRef } from 'react'
import { Copy, Download, RotateCcw } from 'lucide-react'

type CharacterSet = {
  lowercase: boolean
  uppercase: boolean
  digits: boolean
  symbols: boolean
}

export function RandomStringGenerator() {
  const [characterSet, setCharacterSet] = useState<CharacterSet>({
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
  })
  const [numStrings, setNumStrings] = useState(10)
  const [stringLength, setStringLength] = useState(30)
  const [outputFormat, setOutputFormat] = useState<'oneline' | 'separate'>('separate')
  const [separator, setSeparator] = useState('\n')
  const [generatedStrings, setGeneratedStrings] = useState<string[]>([])
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const generateStrings = () => {
    let charset = ''
    if (characterSet.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
    if (characterSet.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (characterSet.digits) charset += '0123456789'
    if (characterSet.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

    if (charset.length === 0) {
      alert('Please select at least one character set')
      return
    }

    const newStrings: string[] = []
    for (let i = 0; i < numStrings; i++) {
      let str = ''
      for (let j = 0; j < stringLength; j++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length))
      }
      newStrings.push(str)
    }
    setGeneratedStrings(newStrings)
  }

  const getDisplayText = () => {
    if (outputFormat === 'oneline') {
      return generatedStrings.join(separator)
    }
    return generatedStrings.join('\n')
  }

  const handleCopyAll = async () => {
    const text = getDisplayText()
    await navigator.clipboard.writeText(text)
  }

  const handleSelectAll = () => {
    if (textareaRef.current) {
      textareaRef.current.select()
    }
  }

  const handleDownload = () => {
    const text = getDisplayText()
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
    element.setAttribute('download', 'random-strings.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleOpenNewTab = () => {
    const text = getDisplayText()
    const newTab = window.open()
    if (newTab) {
      newTab.document.write('<pre>' + text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>')
      newTab.document.close()
    }
  }

  const handleClear = () => {
    setGeneratedStrings([])
    if (textareaRef.current) {
      textareaRef.current.value = ''
    }
  }

  const toggleCharacterSet = (key: keyof CharacterSet) => {
    setCharacterSet(prev => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Options Panel */}
        <div className="space-y-6 bg-card p-6 rounded-lg border border-border">
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Options
            </h3>

            {/* Character Selection */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-foreground block mb-3">
                Select the characters
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={characterSet.lowercase}
                    onChange={() => toggleCharacterSet('lowercase')}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">Use lowercase letters (a-z)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={characterSet.uppercase}
                    onChange={() => toggleCharacterSet('uppercase')}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">Use uppercase letters (A-Z)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={characterSet.digits}
                    onChange={() => toggleCharacterSet('digits')}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">Use numeric digits (0-9)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={characterSet.symbols}
                    onChange={() => toggleCharacterSet('symbols')}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm text-muted-foreground">Use symbols</span>
                </label>
              </div>
            </div>

            {/* Number of Strings */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-foreground block mb-2">
                Number of strings
              </label>
              <input
                type="number"
                value={numStrings}
                onChange={(e) => setNumStrings(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="10000"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* String Length */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-foreground block mb-2">
                Length of each string
              </label>
              <input
                type="number"
                value={stringLength}
                onChange={(e) => setStringLength(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max="1000"
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Output Format */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-foreground block mb-3">
                Strings listed in the same line or in separate lines
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setOutputFormat('oneline')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    outputFormat === 'oneline'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  One line
                </button>
                <button
                  onClick={() => setOutputFormat('separate')}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    outputFormat === 'separate'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  Separate lines
                </button>
              </div>
            </div>

            {/* Separator */}
            {outputFormat === 'oneline' && (
              <div className="mb-6">
                <label className="text-sm font-semibold text-foreground block mb-2">
                  Separator
                </label>
                <input
                  type="text"
                  value={separator}
                  onChange={(e) => setSeparator(e.target.value)}
                  placeholder="Enter separator (e.g., comma, space, etc.)"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={generateStrings}
              className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Generate Random Strings
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
              Generated Strings
            </h3>
            <textarea
              ref={textareaRef}
              value={getDisplayText()}
              readOnly
              className="w-full h-64 px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Your generated strings will appear here..."
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleClear}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              <RotateCcw size={16} />
              Clear
            </button>
            <button
              onClick={handleSelectAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              Select all
            </button>
            <button
              onClick={handleCopyAll}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Copy size={16} />
              Copy all
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Download size={16} />
              Download text
            </button>
            <button
              onClick={handleOpenNewTab}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              Open in new tab
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
