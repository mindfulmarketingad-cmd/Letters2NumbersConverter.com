'use client'

import { useState } from 'react'
import { Copy, Download, Upload } from 'lucide-react'

export function YamlToXmlConverter() {
  const [yamlInput, setYamlInput] = useState('')
  const [xmlOutput, setXmlOutput] = useState('')

  // Simple YAML to XML conversion
  const yamlToXml = (yaml: string): string => {
    if (!yaml.trim()) return ''

    try {
      const lines = yaml.split('\n')
      let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n'
      let stack: { indent: number; tag: string }[] = []

      for (const line of lines) {
        const trimmed = line.trimStart()
        if (!trimmed || trimmed.startsWith('#')) continue

        const indent = line.length - trimmed.length
        const colonIndex = trimmed.indexOf(':')

        if (colonIndex === -1) continue

        const key = trimmed.substring(0, colonIndex).trim()
        const value = trimmed.substring(colonIndex + 1).trim()

        // Close tags if indent decreased
        while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
          const popped = stack.pop()
          if (popped) {
            xml += '  '.repeat(stack.length) + `</${popped.tag}>\n`
          }
        }

        // Add new element
        xml += '  '.repeat(stack.length + 1) + `<${key}>`

        if (value) {
          xml += escapeXml(value) + `</${key}>\n`
        } else {
          xml += '\n'
          stack.push({ indent, tag: key })
        }
      }

      // Close remaining tags
      while (stack.length > 0) {
        const popped = stack.pop()
        if (popped) {
          xml += '  '.repeat(stack.length) + `</${popped.tag}>\n`
        }
      }

      xml += '</root>'
      return xml
    } catch (error) {
      return `<!-- Error converting YAML to XML: ${error} -->`
    }
  }

  const escapeXml = (str: string): string => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
  }

  const handleConvert = () => {
    const result = yamlToXml(yamlInput)
    setXmlOutput(result)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setYamlInput(content)
      }
      reader.readAsText(file)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(xmlOutput)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([xmlOutput], { type: 'application/xml' })
    element.href = URL.createObjectURL(file)
    element.download = 'converted.xml'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="space-y-4">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-medium mb-2">YAML Input</label>
        <textarea
          value={yamlInput}
          onChange={(e) => setYamlInput(e.target.value)}
          placeholder="Paste your YAML content here..."
          className="w-full h-48 p-3 border border-border rounded-lg bg-background font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="flex gap-2 mt-2">
          <label className="flex items-center gap-2 px-3 py-2 bg-secondary border border-border rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors text-sm font-medium">
            <Upload className="w-4 h-4" />
            Upload File
            <input
              type="file"
              accept=".yaml,.yml"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
      >
        Convert to XML
      </button>

      {/* Output Section */}
      {xmlOutput && (
        <div>
          <label className="block text-sm font-medium mb-2">XML Output</label>
          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <div className="max-h-48 overflow-y-auto p-3 font-mono text-sm whitespace-pre-wrap break-words bg-secondary/30">
              {xmlOutput}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              <Copy className="w-4 h-4" />
              Copy
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary border border-border rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
