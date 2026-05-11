'use client'

import { useState } from 'react'
import { Download, Copy, Upload } from 'lucide-react'
import html2canvas from 'html2canvas'

export function YamlToJpgConverter() {
  const [yamlInput, setYamlInput] = useState(`website:
  name: My Website
  url: https://example.com
  version: 1.0.0
database:
  host: localhost
  port: 5432
  name: mydb
features:
  - authentication
  - api
  - analytics`)

  const [copied, setCopied] = useState(false)

  const parseYaml = (yamlStr: string): JSX.Element => {
    const lines = yamlStr.split('\n')
    const result: JSX.Element[] = []

    lines.forEach((line, idx) => {
      const indent = line.match(/^\s*/)?.[0].length || 0
      const content = line.trim()

      if (content.length === 0) return

      const level = Math.floor(indent / 2)

      if (content.endsWith(':')) {
        result.push(
          <div key={idx} style={{ paddingLeft: `${level * 20}px` }} className="py-1">
            <span className="font-bold text-blue-600">{content}</span>
          </div>
        )
      } else if (content.startsWith('-')) {
        result.push(
          <div key={idx} style={{ paddingLeft: `${level * 20}px` }} className="py-1">
            <span className="text-green-600">{content}</span>
          </div>
        )
      } else {
        const [key, value] = content.split(':').map(s => s.trim())
        if (key && value) {
          result.push(
            <div key={idx} style={{ paddingLeft: `${level * 20}px` }} className="py-1">
              <span className="text-purple-600">{key}:</span>
              <span className="ml-2 text-gray-800">{value}</span>
            </div>
          )
        } else {
          result.push(
            <div key={idx} style={{ paddingLeft: `${level * 20}px` }} className="py-1 text-gray-700">
              {content}
            </div>
          )
        }
      }
    })

    return <div className="font-mono text-sm">{result}</div>
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setYamlInput(event.target?.result as string)
      }
      reader.readAsText(file)
    }
  }

  const downloadAsJpg = async () => {
    const element = document.getElementById('yaml-preview')
    if (!element) return

    try {
      const canvas = await html2canvas(element, {
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
      })

      const link = document.createElement('a')
      link.href = canvas.toDataURL('image/jpeg', 0.95)
      link.download = 'yaml-visualization.jpg'
      link.click()
    } catch (error) {
      console.error('Error converting to JPG:', error)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(yamlInput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div>
        <label className="block text-sm font-semibold mb-2">YAML Input</label>
        <div className="relative">
          <textarea
            value={yamlInput}
            onChange={(e) => setYamlInput(e.target.value)}
            placeholder="Paste your YAML here..."
            className="w-full h-64 p-4 border border-border rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <label className="absolute bottom-3 right-3 cursor-pointer p-2 bg-secondary rounded hover:bg-secondary/80 transition-colors">
            <Upload className="w-4 h-4" />
            <input
              type="file"
              accept=".yaml,.yml"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Preview Section */}
      <div>
        <label className="block text-sm font-semibold mb-2">Preview</label>
        <div
          id="yaml-preview"
          className="bg-white p-6 rounded-lg border border-border min-h-64 overflow-auto"
        >
          {parseYaml(yamlInput)}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={downloadAsJpg}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
        >
          <Download className="w-4 h-4" />
          Download as JPG
        </button>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy YAML'}
        </button>
      </div>
    </div>
  )
}
