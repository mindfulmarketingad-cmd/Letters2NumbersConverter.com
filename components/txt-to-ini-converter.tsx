'use client'

import { useState, useCallback } from 'react'
import { Copy, Download, RotateCcw, FileText, Settings } from 'lucide-react'

type Delimiter = '=' | ':' | '\t' | ' '
type CommentChar = ';' | '#'

interface Options {
  delimiter: Delimiter
  defaultSection: string
  commentChar: CommentChar
  blankLineNewSection: boolean
  trimWhitespace: boolean
  quoteValues: boolean
}

const DEFAULT_OPTS: Options = {
  delimiter: '=',
  defaultSection: 'General',
  commentChar: ';',
  blankLineNewSection: true,
  trimWhitespace: true,
  quoteValues: false,
}

const SAMPLE_TXT = `# Database settings
host=localhost
port=5432
name=mydb
user=admin
password=secret123

# Server settings
server_host=0.0.0.0
server_port=8080
debug=false
timeout=30

# Cache settings
cache_driver=redis
cache_host=127.0.0.1
cache_port=6379
cache_ttl=3600`

function txtToIni(text: string, opts: Options): string {
  const lines = text.split('\n')
  const sections: Array<{ name: string; lines: string[] }> = []
  let currentSection: { name: string; lines: string[] } | null = null
  let sectionCounter = 1

  const pushSection = () => {
    if (currentSection && currentSection.lines.length > 0) {
      sections.push(currentSection)
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    const line = opts.trimWhitespace ? raw.trim() : raw

    if (line === '') {
      if (opts.blankLineNewSection && currentSection && currentSection.lines.length > 0) {
        pushSection()
        const newName =
          sectionCounter === 1
            ? opts.defaultSection
            : `${opts.defaultSection}${sectionCounter}`
        sectionCounter++
        currentSection = { name: newName, lines: [] }
      }
      continue
    }

    if (line.startsWith('#') || line.startsWith(';')) {
      if (!currentSection) {
        currentSection = { name: opts.defaultSection, lines: [] }
      }
      currentSection.lines.push(`${opts.commentChar} ${line.slice(1).trim()}`)
      continue
    }

    if (line.startsWith('[') && line.includes(']')) {
      pushSection()
      const name = line.slice(1, line.indexOf(']'))
      currentSection = { name, lines: [] }
      sectionCounter++
      continue
    }

    if (!currentSection) {
      currentSection = { name: opts.defaultSection, lines: [] }
    }

    const delimChar =
      opts.delimiter === '\t' ? '\t' : opts.delimiter === ' ' ? ' ' : opts.delimiter
    const delimIdx = line.indexOf(delimChar)

    if (delimIdx === -1) {
      currentSection.lines.push(line)
    } else {
      const key = opts.trimWhitespace ? line.slice(0, delimIdx).trim() : line.slice(0, delimIdx)
      let val = opts.trimWhitespace ? line.slice(delimIdx + 1).trim() : line.slice(delimIdx + 1)
      if (opts.quoteValues && val && !val.startsWith('"')) {
        val = `"${val}"`
      }
      currentSection.lines.push(`${key} ${opts.delimiter} ${val}`)
    }
  }

  pushSection()

  if (sections.length === 0) return ''

  return sections
    .map(s => `[${s.name}]\n${s.lines.join('\n')}`)
    .join('\n\n')
}

export function TxtToIniConverter() {
  const [input, setInput] = useState('')
  const [opts, setOpts] = useState<Options>(DEFAULT_OPTS)
  const [copied, setCopied] = useState<'input' | 'output' | null>(null)

  const output = input.trim() ? txtToIni(input, opts) : ''

  const handleCopy = useCallback(
    async (which: 'input' | 'output') => {
      const text = which === 'input' ? input : output
      if (!text) return
      await navigator.clipboard.writeText(text)
      setCopied(which)
      setTimeout(() => setCopied(null), 1500)
    },
    [input, output],
  )

  const handleDownload = useCallback(() => {
    if (!output) return
    const blob = new Blob([output], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'output.ini'
    a.click()
    URL.revokeObjectURL(url)
  }, [output])

  const setOpt = <K extends keyof Options>(key: K, value: Options[K]) => {
    setOpts(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Options bar */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm">
        <Settings className="h-4 w-4 shrink-0 text-gray-400" />

        <label className="flex items-center gap-1.5 text-gray-600">
          Delimiter
          <select
            value={opts.delimiter}
            onChange={e => setOpt('delimiter', e.target.value as Delimiter)}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value="=">=</option>
            <option value=":">:</option>
            <option value={'\t'}>Tab</option>
            <option value=" ">Space</option>
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Default section
          <input
            type="text"
            value={opts.defaultSection}
            onChange={e => setOpt('defaultSection', e.target.value || 'General')}
            className="w-24 rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          />
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Comment char
          <select
            value={opts.commentChar}
            onChange={e => setOpt('commentChar', e.target.value as CommentChar)}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value=";">;</option>
            <option value="#">#</option>
          </select>
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.blankLineNewSection}
            onChange={e => setOpt('blankLineNewSection', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Blank line = new section
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.trimWhitespace}
            onChange={e => setOpt('trimWhitespace', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Trim whitespace
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.quoteValues}
            onChange={e => setOpt('quoteValues', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Quote values
        </label>
      </div>

      {/* Main panels */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Input panel */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">TXT Input</span>
            <div className="flex gap-2">
              <button
                onClick={() => setInput(SAMPLE_TXT)}
                className="rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D]"
              >
                Sample
              </button>
              <button
                onClick={() => handleCopy('input')}
                disabled={!input}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D] disabled:opacity-40"
              >
                <Copy className="h-3 w-3" />
                {copied === 'input' ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={() => setInput('')}
                disabled={!input}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-red-400 hover:text-red-500 disabled:opacity-40"
              >
                <RotateCcw className="h-3 w-3" />
                Clear
              </button>
            </div>
          </div>
          <div className="relative">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={`Paste your TXT content here…\n\nExample:\n# Database settings\nhost=localhost\nport=5432\n\n# Server settings\nserver_host=0.0.0.0`}
              className="h-[420px] w-full resize-none rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#00BD9D] focus:outline-none focus:ring-2 focus:ring-[#00BD9D]/20"
            />
            {!input && (
              <button
                onClick={() => setInput(SAMPLE_TXT)}
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-[#00BD9D] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#00a888]"
              >
                <FileText className="h-4 w-4" />
                Use sample text
              </button>
            )}
          </div>
          <p className="text-right text-xs text-gray-400">
            {input.split('\n').filter(l => l.trim()).length} non-empty lines
          </p>
        </div>

        {/* Output panel */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">INI Output</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleCopy('output')}
                disabled={!output}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D] disabled:opacity-40"
              >
                <Copy className="h-3 w-3" />
                {copied === 'output' ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={handleDownload}
                disabled={!output}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#49C6E5] hover:text-[#49C6E5] disabled:opacity-40"
              >
                <Download className="h-3 w-3" />
                Download .ini
              </button>
            </div>
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="INI output will appear here…"
            className="h-[420px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
          />
          <p className="text-right text-xs text-gray-400">
            {output ? `${output.split('\n').length} lines` : '0 lines'}
          </p>
        </div>
      </div>

      {/* Format guide */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <p className="mb-3 text-sm font-medium text-gray-700">Format guide</p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
              TXT Input
            </p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`# Comment
key=value
another_key=another value

# New section (blank line)
host=localhost
port=5432`}</pre>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
              INI Output
            </p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`[General]
; Comment
key = value
another_key = another value

[General2]
; New section (blank line)
host = localhost
port = 5432`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
