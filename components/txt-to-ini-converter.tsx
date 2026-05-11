'use client'

import { useState } from 'react'
import { Copy, Download, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export function TxtToIniConverter() {
  const [input, setText] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const convertToIni = (text: string) => {
    if (!text.trim()) {
      setOutput('')
      return
    }

    const lines = text.split('\n').filter(line => line.trim())
    let iniContent = ''
    let currentSection = ''

    lines.forEach(line => {
      const trimmed = line.trim()

      // Skip empty lines
      if (!trimmed) return

      // Check if line is a section header (wrapped in brackets or should be)
      if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
        iniContent += `${trimmed}\n`
        currentSection = trimmed
      }
      // Check if line contains an equals sign (key=value format)
      else if (trimmed.includes('=')) {
        iniContent += `${trimmed}\n`
      }
      // Check if line contains a colon (convert to equals format)
      else if (trimmed.includes(':')) {
        const [key, ...rest] = trimmed.split(':')
        const value = rest.join(':').trim()
        iniContent += `${key.trim()}=${value}\n`
      }
      // Lines that might be key-value pairs separated by space
      else if (trimmed.includes(' ') && !trimmed.startsWith(';')) {
        const parts = trimmed.split(/\s+/)
        if (parts.length >= 2) {
          const key = parts[0]
          const value = parts.slice(1).join(' ')
          iniContent += `${key}=${value}\n`
        }
      }
      // Treat as comment if starts with # or ;
      else if (trimmed.startsWith('#') || trimmed.startsWith(';')) {
        iniContent += `; ${trimmed.replace(/^[#;]\s*/, '')}\n`
      }
    })

    setOutput(iniContent.trim())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setText(text)
    convertToIni(text)
  }

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadIni = () => {
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setText(content)
        convertToIni(content)
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="w-full space-y-4">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground">
          TXT Content
        </label>
        <div className="flex gap-2 mb-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <Upload className="w-4 h-4" />
            <span className="text-sm">Upload File</span>
            <input
              type="file"
              accept=".txt,.text"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter TXT content or paste text here...

Example:
[database]
server=localhost
port=5432
user=admin

[logging]
level=debug
file=app.log"
          className="font-mono text-sm h-64"
        />
      </div>

      {/* Output Section */}
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground">
          INI Format
        </label>
        <Textarea
          value={output}
          readOnly
          placeholder="Converted INI format will appear here..."
          className="font-mono text-sm h-64 bg-secondary/30"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 flex-wrap">
        <Button
          onClick={copyToClipboard}
          disabled={!output}
          variant="default"
          size="sm"
        >
          <Copy className="w-4 h-4 mr-2" />
          {copied ? 'Copied!' : 'Copy'}
        </Button>
        <Button
          onClick={downloadIni}
          disabled={!output}
          variant="outline"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download .ini
        </Button>
      </div>
    </div>
  )
}
