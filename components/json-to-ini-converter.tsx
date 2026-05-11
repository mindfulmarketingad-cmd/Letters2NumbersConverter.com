'use client'

import { useState } from 'react'
import { Copy, Download, Upload } from 'lucide-react'

export function JsonToIniConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')

  const convertJsonToIni = (jsonString: string) => {
    try {
      setError('')
      if (!jsonString.trim()) {
        setOutput('')
        return
      }

      const json = JSON.parse(jsonString)
      let ini = ''

      const processValue = (obj: any, prefix = ''): string => {
        let result = ''
        
        for (const [key, value] of Object.entries(obj)) {
          if (value === null || value === undefined) {
            result += `${key}=\n`
          } else if (typeof value === 'object' && !Array.isArray(value)) {
            // Nested object becomes a section
            const sectionName = prefix ? `${prefix}.${key}` : key
            result += `[${sectionName}]\n`
            result += processValue(value, sectionName)
            result += '\n'
          } else if (Array.isArray(value)) {
            // Arrays are converted to comma-separated values
            result += `${key}=${value.join(',')}\n`
          } else {
            // Primitives
            const stringValue = String(value).replace(/\n/g, '\\n')
            result += `${key}=${stringValue}\n`
          }
        }
        return result
      }

      ini = processValue(json)
      setOutput(ini)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON')
      setOutput('')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)
    convertJsonToIni(value)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setInput(content)
        convertJsonToIni(content)
      }
      reader.readAsText(file)
    }
  }

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const downloadINI = () => {
    if (output) {
      const element = document.createElement('a')
      const file = new Blob([output], { type: 'text/plain' })
      element.href = URL.createObjectURL(file)
      element.download = 'config.ini'
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Input Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">JSON Input</label>
          <label className="flex items-center gap-2 cursor-pointer text-xs text-muted-foreground hover:text-foreground">
            <Upload size={14} />
            <span>Upload JSON</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
        <textarea
          value={input}
          onChange={handleInputChange}
          placeholder='{"database": {"host": "localhost", "port": 5432}}'
          className="w-full h-48 p-3 border border-border rounded-lg bg-background font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Output Section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium">INI Output</label>
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Copy size={14} />
              Copy
            </button>
            <button
              onClick={downloadINI}
              disabled={!output}
              className="flex items-center gap-1 px-2 py-1 text-xs rounded bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Download size={14} />
              Download
            </button>
          </div>
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="INI output will appear here..."
          className="w-full h-48 p-3 border border-border rounded-lg bg-background font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Info */}
      <div className="p-3 bg-secondary/30 rounded-lg text-xs text-muted-foreground space-y-1">
        <p>
          <strong>How it works:</strong> Paste your JSON file or upload one. Top-level objects become INI sections, and key-value pairs become properties. Nested objects use dot notation for section names.
        </p>
      </div>
    </div>
  )
}
