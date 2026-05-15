'use client'

import { useState, useCallback } from 'react'
import { Copy, Download, RotateCcw, FileText, AlertCircle } from 'lucide-react'

interface Options {
  rootElement: string
  indent: '2' | '4' | 'tab'
  xmlDeclaration: boolean
  encoding: 'UTF-8' | 'UTF-16' | 'ISO-8859-1'
  attributePrefix: string
  treatAsAttributes: boolean
}

const DEFAULT_OPTS: Options = {
  rootElement: 'config',
  indent: '2',
  xmlDeclaration: true,
  encoding: 'UTF-8',
  attributePrefix: '@',
  treatAsAttributes: false,
}

const SAMPLE_INI = `[database]
host = localhost
port = 5432
name = myapp_db
user = admin
password = secret123
ssl = true

[server]
host = 0.0.0.0
port = 8080
debug = false
timeout = 30
workers = 4

[cache]
driver = redis
host = 127.0.0.1
port = 6379
ttl = 3600`

function indentStr(opts: Options): string {
  if (opts.indent === 'tab') return '\t'
  return ' '.repeat(Number(opts.indent))
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function safeTagName(name: string): string {
  let safe = name.replace(/[^a-zA-Z0-9_\-.:]/g, '_')
  if (/^[^a-zA-Z_]/.test(safe)) safe = '_' + safe
  return safe || '_'
}

type ParsedIni = Array<{ section: string; entries: Array<{ key: string; value: string }> }>

function parseIni(text: string): ParsedIni {
  const lines = text.split('\n')
  const sections: ParsedIni = []
  let current: ParsedIni[0] | null = null

  for (const raw of lines) {
    const line = raw.trim()
    if (!line || line.startsWith(';') || line.startsWith('#')) continue

    if (line.startsWith('[') && line.includes(']')) {
      const name = line.slice(1, line.indexOf(']')).trim()
      current = { section: name, entries: [] }
      sections.push(current)
      continue
    }

    const eqIdx = line.indexOf('=')
    const colonIdx = line.indexOf(':')
    let delimIdx = -1
    if (eqIdx !== -1 && colonIdx !== -1) delimIdx = Math.min(eqIdx, colonIdx)
    else if (eqIdx !== -1) delimIdx = eqIdx
    else if (colonIdx !== -1) delimIdx = colonIdx

    if (delimIdx === -1) continue
    const key = line.slice(0, delimIdx).trim()
    const value = line.slice(delimIdx + 1).trim()

    if (!current) {
      current = { section: 'general', entries: [] }
      sections.push(current)
    }
    current.entries.push({ key, value })
  }

  return sections
}

function iniToXml(text: string, opts: Options): string {
  const sections = parseIni(text)
  if (sections.length === 0) return ''

  const ind = indentStr(opts)
  const lines: string[] = []

  if (opts.xmlDeclaration) {
    lines.push(`<?xml version="1.0" encoding="${opts.encoding}"?>`)
  }

  const root = safeTagName(opts.rootElement)
  lines.push(`<${root}>`)

  for (const { section, entries } of sections) {
    if (entries.length === 0) continue
    const tag = safeTagName(section)

    if (opts.treatAsAttributes) {
      const attrParts = entries
        .filter(e => !e.key.startsWith(opts.attributePrefix))
        .map(e => `${safeTagName(e.key)}="${escapeXml(e.value)}"`)
        .join(' ')
      lines.push(`${ind}<${tag}${attrParts ? ' ' + attrParts : ''} />`)
    } else {
      const attrEntries = opts.attributePrefix
        ? entries.filter(e => e.key.startsWith(opts.attributePrefix))
        : []
      const childEntries = entries.filter(e => !e.key.startsWith(opts.attributePrefix))

      const attrStr = attrEntries
        .map(e => `${safeTagName(e.key.slice(opts.attributePrefix.length))}="${escapeXml(e.value)}"`)
        .join(' ')

      if (childEntries.length === 0) {
        lines.push(`${ind}<${tag}${attrStr ? ' ' + attrStr : ''} />`)
      } else {
        lines.push(`${ind}<${tag}${attrStr ? ' ' + attrStr : ''}>`)
        for (const { key, value } of childEntries) {
          const childTag = safeTagName(key)
          lines.push(`${ind}${ind}<${childTag}>${escapeXml(value)}</${childTag}>`)
        }
        lines.push(`${ind}</${tag}>`)
      }
    }
  }

  lines.push(`</${root}>`)
  return lines.join('\n')
}

export function IniToXmlConverter() {
  const [input, setInput] = useState('')
  const [opts, setOpts] = useState<Options>(DEFAULT_OPTS)
  const [copied, setCopied] = useState<'input' | 'output' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const output = (() => {
    if (!input.trim()) return ''
    try {
      const result = iniToXml(input, opts)
      setError(null)
      return result
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Conversion failed')
      return ''
    }
  })()

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
    const blob = new Blob([output], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'output.xml'
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
        <label className="flex items-center gap-1.5 text-gray-600">
          Root element
          <input
            type="text"
            value={opts.rootElement}
            onChange={e => setOpt('rootElement', e.target.value || 'config')}
            className="w-24 rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          />
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Indent
          <select
            value={opts.indent}
            onChange={e => setOpt('indent', e.target.value as '2' | '4' | 'tab')}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value="2">2 spaces</option>
            <option value="4">4 spaces</option>
            <option value="tab">Tab</option>
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Encoding
          <select
            value={opts.encoding}
            onChange={e => setOpt('encoding', e.target.value as Options['encoding'])}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value="UTF-8">UTF-8</option>
            <option value="UTF-16">UTF-16</option>
            <option value="ISO-8859-1">ISO-8859-1</option>
          </select>
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.xmlDeclaration}
            onChange={e => setOpt('xmlDeclaration', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          XML declaration
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.treatAsAttributes}
            onChange={e => setOpt('treatAsAttributes', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Keys as XML attributes
        </label>
      </div>

      {/* Error banner */}
      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Main panels */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Input panel */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">INI Input</span>
            <div className="flex gap-2">
              <button
                onClick={() => setInput(SAMPLE_INI)}
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
              placeholder={`Paste your INI here…\n\nExample:\n[database]\nhost = localhost\nport = 5432\n\n[server]\nhost = 0.0.0.0\nport = 8080`}
              className="h-[440px] w-full resize-none rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#00BD9D] focus:outline-none focus:ring-2 focus:ring-[#00BD9D]/20"
            />
            {!input && (
              <button
                onClick={() => setInput(SAMPLE_INI)}
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-[#00BD9D] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#00a888]"
              >
                <FileText className="h-4 w-4" />
                Use sample INI
              </button>
            )}
          </div>
          <p className="text-right text-xs text-gray-400">
            {input.split('\n').filter(l => l.trim() && !l.trim().startsWith(';') && !l.trim().startsWith('#')).length} active lines
          </p>
        </div>

        {/* Output panel */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">XML Output</span>
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
                Download .xml
              </button>
            </div>
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="XML output will appear here…"
            className="h-[440px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
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
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">INI Input</p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`[database]
host = localhost
port = 5432

[server]
host = 0.0.0.0
port = 8080`}</pre>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">XML Output</p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`<?xml version="1.0" encoding="UTF-8"?>
<config>
  <database>
    <host>localhost</host>
    <port>5432</port>
  </database>
  <server>
    <host>0.0.0.0</host>
    <port>8080</port>
  </server>
</config>`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
