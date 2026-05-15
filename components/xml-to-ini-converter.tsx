'use client'

import { useState, useCallback } from 'react'
import { Copy, Download, RotateCcw, FileText, AlertCircle } from 'lucide-react'

interface Options {
  delimiter: '=' | ':'
  commentChar: ';' | '#'
  attributePrefix: string
  flattenDepth: 'sections' | 'dotted'
  includeAttributes: boolean
  trimValues: boolean
}

const DEFAULT_OPTS: Options = {
  delimiter: '=',
  commentChar: ';',
  attributePrefix: '@',
  flattenDepth: 'sections',
  includeAttributes: true,
  trimValues: true,
}

const SAMPLE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<config>
  <database>
    <host>localhost</host>
    <port>5432</port>
    <name>myapp_db</name>
    <user>admin</user>
    <password>secret123</password>
    <ssl>true</ssl>
  </database>

  <server>
    <host>0.0.0.0</host>
    <port>8080</port>
    <debug>false</debug>
    <timeout>30</timeout>
    <workers>4</workers>
  </server>

  <cache>
    <driver>redis</driver>
    <host>127.0.0.1</host>
    <port>6379</port>
    <ttl>3600</ttl>
  </cache>
</config>`

type FlatEntry = { key: string; value: string }
type Section = { name: string; entries: FlatEntry[] }

function elementToText(el: Element): string {
  return Array.from(el.childNodes)
    .filter(n => n.nodeType === Node.TEXT_NODE)
    .map(n => n.textContent ?? '')
    .join('')
    .trim()
}

function flattenElement(
  el: Element,
  prefix: string,
  opts: Options,
): FlatEntry[] {
  const entries: FlatEntry[] = []

  if (opts.includeAttributes) {
    for (const attr of Array.from(el.attributes)) {
      const key = prefix ? `${prefix}.${opts.attributePrefix}${attr.name}` : `${opts.attributePrefix}${attr.name}`
      entries.push({ key, value: opts.trimValues ? attr.value.trim() : attr.value })
    }
  }

  const children = Array.from(el.children)
  if (children.length === 0) {
    const text = elementToText(el)
    if (text !== '') {
      entries.push({ key: prefix, value: opts.trimValues ? text : text })
    }
    return entries
  }

  for (const child of children) {
    const childKey = prefix ? `${prefix}.${child.tagName}` : child.tagName
    const grandchildren = Array.from(child.children)

    if (grandchildren.length === 0) {
      const text = elementToText(child)
      entries.push({ key: childKey, value: opts.trimValues ? text.trim() : text })
      if (opts.includeAttributes) {
        for (const attr of Array.from(child.attributes)) {
          entries.push({
            key: `${childKey}.${opts.attributePrefix}${attr.name}`,
            value: opts.trimValues ? attr.value.trim() : attr.value,
          })
        }
      }
    } else {
      entries.push(...flattenElement(child, childKey, opts))
    }
  }

  return entries
}

function xmlToIni(xml: string, opts: Options): string {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xml, 'application/xml')

  const parseError = doc.querySelector('parsererror')
  if (parseError) {
    throw new Error(parseError.textContent?.split('\n')[0] ?? 'Invalid XML')
  }

  const root = doc.documentElement
  const sections: Section[] = []
  const topChildren = Array.from(root.children)

  if (topChildren.length === 0) {
    const text = elementToText(root)
    if (text) {
      sections.push({ name: root.tagName, entries: [{ key: 'value', value: text }] })
    }
    return sections.map(s => `[${s.name}]\n${s.entries.map(e => `${e.key} ${opts.delimiter} ${e.value}`).join('\n')}`).join('\n\n')
  }

  if (opts.flattenDepth === 'sections') {
    for (const child of topChildren) {
      const entries: FlatEntry[] = []

      if (opts.includeAttributes) {
        for (const attr of Array.from(child.attributes)) {
          entries.push({ key: `${opts.attributePrefix}${attr.name}`, value: attr.value.trim() })
        }
      }

      const grandchildren = Array.from(child.children)
      if (grandchildren.length === 0) {
        const text = elementToText(child)
        if (text) entries.push({ key: child.tagName, value: text })
      } else {
        entries.push(...flattenElement(child, '', opts).filter(e => e.key !== ''))
      }

      if (entries.length > 0) {
        sections.push({ name: child.tagName, entries })
      }
    }
  } else {
    const allEntries = flattenElement(root, '', opts)
    const sectionMap = new Map<string, FlatEntry[]>()

    for (const entry of allEntries) {
      const dotIdx = entry.key.indexOf('.')
      if (dotIdx === -1) {
        const list = sectionMap.get(root.tagName) ?? []
        list.push({ key: entry.key, value: entry.value })
        sectionMap.set(root.tagName, list)
      } else {
        const sectionName = entry.key.slice(0, dotIdx)
        const subKey = entry.key.slice(dotIdx + 1)
        const list = sectionMap.get(sectionName) ?? []
        list.push({ key: subKey, value: entry.value })
        sectionMap.set(sectionName, list)
      }
    }

    for (const [name, entries] of sectionMap) {
      sections.push({ name, entries })
    }
  }

  return sections
    .map(s => `[${s.name}]\n${s.entries.map(e => `${e.key} ${opts.delimiter} ${e.value}`).join('\n')}`)
    .join('\n\n')
}

export function XmlToIniConverter() {
  const [input, setInput] = useState('')
  const [opts, setOpts] = useState<Options>(DEFAULT_OPTS)
  const [copied, setCopied] = useState<'input' | 'output' | null>(null)
  const [error, setError] = useState<string | null>(null)

  const output = (() => {
    if (!input.trim()) return ''
    try {
      const result = xmlToIni(input, opts)
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
        <label className="flex items-center gap-1.5 text-gray-600">
          Delimiter
          <select
            value={opts.delimiter}
            onChange={e => setOpt('delimiter', e.target.value as '=' | ':')}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value="=">=</option>
            <option value=":">:</option>
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Comment char
          <select
            value={opts.commentChar}
            onChange={e => setOpt('commentChar', e.target.value as ';' | '#')}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value=";">;</option>
            <option value="#">#</option>
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-gray-600">
          Nesting
          <select
            value={opts.flattenDepth}
            onChange={e => setOpt('flattenDepth', e.target.value as 'sections' | 'dotted')}
            className="rounded border border-gray-200 bg-white px-2 py-0.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00BD9D]"
          >
            <option value="sections">Top-level = sections</option>
            <option value="dotted">Dotted keys</option>
          </select>
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.includeAttributes}
            onChange={e => setOpt('includeAttributes', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Include XML attributes
        </label>

        <label className="flex cursor-pointer select-none items-center gap-1.5 text-gray-600">
          <input
            type="checkbox"
            checked={opts.trimValues}
            onChange={e => setOpt('trimValues', e.target.checked)}
            className="accent-[#00BD9D]"
          />
          Trim values
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
            <span className="text-sm font-medium text-gray-700">XML Input</span>
            <div className="flex gap-2">
              <button
                onClick={() => setInput(SAMPLE_XML)}
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
              placeholder={`Paste your XML here…\n\nExample:\n<config>\n  <database>\n    <host>localhost</host>\n    <port>5432</port>\n  </database>\n</config>`}
              className="h-[440px] w-full resize-none rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#00BD9D] focus:outline-none focus:ring-2 focus:ring-[#00BD9D]/20"
            />
            {!input && (
              <button
                onClick={() => setInput(SAMPLE_XML)}
                className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-[#00BD9D] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#00a888]"
              >
                <FileText className="h-4 w-4" />
                Use sample XML
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
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">XML Input</p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`<config>
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
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">INI Output</p>
            <pre className="overflow-x-auto whitespace-pre rounded-lg border border-gray-200 bg-white p-3 text-xs text-gray-700">{`[database]
host = localhost
port = 5432

[server]
host = 0.0.0.0
port = 8080`}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
