'use client'

import { useState, useMemo } from 'react'
import { Copy, Download } from 'lucide-react'

interface EditorStats {
  characters: number
  words: number
  lines: number
  size: string
}

export function BatchFileEditor() {
  const [content, setContent] = useState('')

  const stats = useMemo((): EditorStats => {
    const characters = content.length
    const words = content
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0).length
    const lines = content.split('\n').length
    const sizeInBytes = new Blob([content]).size
    
    let sizeString = `${sizeInBytes} B`
    if (sizeInBytes >= 1024 * 1024) {
      sizeString = `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`
    } else if (sizeInBytes >= 1024) {
      sizeString = `${(sizeInBytes / 1024).toFixed(2)} KB`
    }

    return {
      characters,
      words: content.trim() === '' ? 0 : words,
      lines: content === '' ? 0 : lines,
      size: sizeString
    }
  }, [content])

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'batch-file.bat'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="w-full space-y-4">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-3 bg-secondary rounded-t-lg border border-b-0 border-border">
        <h3 className="text-sm font-semibold">Batch File Editor</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-background rounded transition-colors"
            title="Copy to clipboard"
          >
            <Copy className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-background rounded transition-colors"
            title="Download as .bat file"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative rounded-b-lg overflow-hidden border border-border">
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="w-full h-96 px-4 py-3 bg-black text-white font-mono text-sm leading-relaxed resize-none focus:outline-none"
          placeholder="Enter your batch file commands here..."
          spellCheck="false"
        />
        
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-black border-r border-border text-muted-foreground text-sm font-mono leading-relaxed pointer-events-none">
          <div className="pt-3 text-right pr-2">
            {content.split('\n').map((_, i) => (
              <div key={i} className="h-6">{i + 1}</div>
            ))}
          </div>
        </div>

        {/* Adjust textarea padding to account for line numbers */}
        <style jsx>{`
          textarea {
            padding-left: 3.5rem !important;
          }
        `}</style>
      </div>

      {/* Statistics Panel */}
      <div className="grid grid-cols-4 gap-0 border border-border rounded-lg overflow-hidden">
        <div className="text-center p-4 border-r border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-2">Characters</div>
          <div className="text-xl font-bold">{stats.characters}</div>
        </div>
        <div className="text-center p-4 border-r border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-2">Words</div>
          <div className="text-xl font-bold">{stats.words}</div>
        </div>
        <div className="text-center p-4 border-r border-border">
          <div className="text-xs font-semibold text-muted-foreground mb-2">Lines</div>
          <div className="text-xl font-bold">{stats.lines}</div>
        </div>
        <div className="text-center p-4">
          <div className="text-xs font-semibold text-muted-foreground mb-2">Size</div>
          <div className="text-xl font-bold">{stats.size}</div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-2">
        <h4 className="text-sm font-semibold">Quick Tips:</h4>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Use <code className="bg-background px-1.5 py-0.5 rounded text-xs">@echo off</code> to suppress command echoing</li>
          <li>• Use <code className="bg-background px-1.5 py-0.5 rounded text-xs">REM</code> for comments</li>
          <li>• Use <code className="bg-background px-1.5 py-0.5 rounded text-xs">PAUSE</code> to pause execution</li>
          <li>• Download and save with <code className="bg-background px-1.5 py-0.5 rounded text-xs">.bat</code> extension</li>
        </ul>
      </div>
    </div>
  )
}
