'use client'

import { useState, useCallback } from 'react'
import { Copy, Check, RotateCcw, ArrowLeftRight, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react'
import { useSaveState } from '@/lib/save-context'

// ── Base64 helpers ────────────────────────────────────────────────────────────

function base64Encode(str: string): string {
  try {
    return btoa(unescape(encodeURIComponent(str)))
  } catch {
    return btoa(str)
  }
}

function base64Decode(b64: string): string {
  // Normalise URL-safe base64 and strip whitespace
  const clean = b64.replace(/[\s]/g, '').replace(/-/g, '+').replace(/_/g, '/')
  const padded = clean + '=='.slice((clean.length % 4 === 0) ? 4 : clean.length % 4)
  try {
    return decodeURIComponent(escape(atob(padded)))
  } catch {
    return atob(padded)
  }
}

// ── Deflate / Inflate via CompressionStream (raw deflate, no zlib header) ────

async function deflateRaw(input: string): Promise<Uint8Array> {
  const bytes = new TextEncoder().encode(input)
  const cs = new CompressionStream('deflate-raw')
  const writer = cs.writable.getWriter()
  writer.write(bytes)
  writer.close()
  const chunks: Uint8Array[] = []
  const reader = cs.readable.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }
  const total = chunks.reduce((n, c) => n + c.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const c of chunks) { out.set(c, offset); offset += c.length }
  return out
}

async function inflateRaw(input: Uint8Array): Promise<string> {
  const ds = new DecompressionStream('deflate-raw')
  const writer = ds.writable.getWriter()
  writer.write(input)
  writer.close()
  const chunks: Uint8Array[] = []
  const reader = ds.readable.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }
  const total = chunks.reduce((n, c) => n + c.length, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const c of chunks) { out.set(c, offset); offset += c.length }
  return new TextDecoder().decode(out)
}

// Uint8Array → base64
function uint8ToBase64(bytes: Uint8Array): string {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
  return btoa(binary)
}

// base64 → Uint8Array
function base64ToUint8(b64: string): Uint8Array {
  const clean = b64.replace(/[\s]/g, '').replace(/-/g, '+').replace(/_/g, '/')
  const padded = clean + '=='.slice((clean.length % 4 === 0) ? 4 : clean.length % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

// ── XML prettifier ────────────────────────────────────────────────────────────

function prettifyXml(xml: string): string {
  try {
    let indent = 0
    return xml
      .replace(/></g, '>\n<')
      .split('\n')
      .map(line => {
        line = line.trim()
        if (!line) return ''
        if (line.startsWith('</')) indent = Math.max(0, indent - 1)
        const result = '  '.repeat(indent) + line
        if (!line.startsWith('</') && !line.endsWith('/>') && !line.startsWith('<?') && line.includes('<') && !line.includes('</')) indent++
        return result
      })
      .filter(Boolean)
      .join('\n')
  } catch {
    return xml
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

type Mode = 'encode' | 'decode'
type SamlType = 'request' | 'response'

export function SAMLEncoder() {
  const [mode, setMode] = useState<Mode>('decode')
  const [samlType, setSamlType] = useState<SamlType>('request')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [urlEncode, setUrlEncode] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  useSaveState(
    () => ({ input, mode, samlType }),
    (s) => {
      setInput((s.input as string) ?? '')
      setMode((s.mode as Mode) === 'encode' ? 'encode' : 'decode')
      setSamlType((s.samlType as SamlType) === 'response' ? 'response' : 'request')
    }
  )

  const process = useCallback(async () => {
    setError('')
    setOutput('')
    if (!input.trim()) return
    setProcessing(true)

    try {
      if (mode === 'decode') {
        // 1. Strip URL encoding if present
        let b64 = input.trim()
        try { b64 = decodeURIComponent(b64) } catch {}

        if (samlType === 'request') {
          // SAMLRequest: base64 → deflate-raw inflate → XML
          const bytes = base64ToUint8(b64)
          const xml = await inflateRaw(bytes)
          setOutput(prettifyXml(xml))
        } else {
          // SAMLResponse: base64 → XML (no compression)
          const xml = base64Decode(b64)
          setOutput(prettifyXml(xml))
        }
      } else {
        // Encode
        const xml = input.trim()
        if (samlType === 'request') {
          // SAMLRequest: XML → deflate-raw → base64 (→ URL encode optionally)
          const bytes = await deflateRaw(xml)
          let result = uint8ToBase64(bytes)
          if (urlEncode) result = encodeURIComponent(result)
          setOutput(result)
        } else {
          // SAMLResponse: XML → base64
          let result = base64Encode(xml)
          if (urlEncode) result = encodeURIComponent(result)
          setOutput(result)
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Processing failed. Check your input format.')
    } finally {
      setProcessing(false)
    }
  }, [input, mode, samlType, urlEncode])

  const handleCopy = useCallback(async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }, [output])

  const handleSwap = () => {
    setInput(output)
    setOutput('')
    setMode(m => m === 'encode' ? 'decode' : 'encode')
  }

  const handleClear = () => { setInput(''); setOutput(''); setError('') }

  const inputLabel = mode === 'decode'
    ? (samlType === 'request' ? 'SAMLRequest parameter value (Base64 + deflated)' : 'SAMLResponse parameter value (Base64)')
    : 'XML to encode'

  const outputLabel = mode === 'decode' ? 'Decoded XML' : (samlType === 'request' ? 'Encoded SAMLRequest' : 'Encoded SAMLResponse')

  return (
    <div className="flex flex-col h-full bg-background">

      {/* Mode + Type toggles */}
      <div className="px-4 py-3 border-b border-border space-y-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium w-12">Mode</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            {(['decode', 'encode'] as Mode[]).map(m => (
              <button
                key={m}
                onClick={() => { setMode(m); setOutput(''); setError('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium capitalize transition-colors ${mode === m ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-muted-foreground font-medium w-12">Type</span>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            {([['request', 'SAMLRequest'], ['response', 'SAMLResponse']] as [SamlType, string][]).map(([val, label]) => (
              <button
                key={val}
                onClick={() => { setSamlType(val); setOutput(''); setError('') }}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${samlType === val ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowInfo(s => !s)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
          >
            {showInfo ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            What&apos;s the difference?
          </button>
        </div>

        {showInfo && (
          <div className="text-xs text-muted-foreground bg-secondary/40 rounded-lg p-3 space-y-1 border border-border">
            <p><strong className="text-foreground">SAMLRequest</strong> (redirect binding): XML is deflated (raw deflate, no zlib wrapper), then Base64-encoded, then URL-encoded. Used in the query string of an HTTP redirect.</p>
            <p><strong className="text-foreground">SAMLResponse</strong> (POST binding): XML is only Base64-encoded — no compression. Sent as a hidden form field via HTTP POST.</p>
          </div>
        )}

        {mode === 'encode' && (
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <input
              type="checkbox"
              checked={urlEncode}
              onChange={e => setUrlEncode(e.target.checked)}
              className="w-4 h-4 rounded border-border"
            />
            Also URL-encode the output
          </label>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">{inputLabel}</label>
          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setOutput(''); setError('') }}
            placeholder={mode === 'decode' ? 'Paste the raw parameter value here…' : '<samlp:AuthnRequest xmlns:samlp="urn:oasis:names:tc:SAML:2.0:protocol" …>…</samlp:AuthnRequest>'}
            rows={8}
            className="w-full px-4 py-3 rounded-lg border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none text-foreground placeholder-muted-foreground font-mono text-sm"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={process}
            disabled={!input.trim() || processing}
            className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {processing ? 'Processing…' : mode === 'decode' ? 'Decode' : 'Encode'}
          </button>
          <button
            onClick={handleSwap}
            disabled={!output}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowLeftRight className="w-4 h-4" />
            Swap
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
          >
            <RotateCcw className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-foreground">{outputLabel}</label>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="w-full p-4 rounded-lg border border-border bg-secondary/30 text-foreground font-mono text-xs overflow-x-auto whitespace-pre-wrap break-all">
              {output}
            </pre>
          </div>
        )}

        {/* Quick decode guide */}
        <details className="group border border-border rounded-lg overflow-hidden">
          <summary className="flex items-center justify-between px-4 py-3 cursor-pointer text-sm font-medium text-foreground bg-secondary/20 hover:bg-secondary/40 transition-colors list-none">
            <span>SAML parameter format guide</span>
            <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="px-4 py-3 text-xs text-muted-foreground space-y-2 border-t border-border">
            <div>
              <p className="font-semibold text-foreground mb-1">SAMLRequest (redirect binding)</p>
              <code className="block bg-secondary/40 rounded p-2 text-[11px] font-mono">?SAMLRequest=&lt;Base64(Deflate(XML))&gt;&amp;RelayState=…</code>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">SAMLResponse (POST binding)</p>
              <code className="block bg-secondary/40 rounded p-2 text-[11px] font-mono">&lt;input name="SAMLResponse" value="&lt;Base64(XML)&gt;" /&gt;</code>
            </div>
            <p>To decode from a browser URL: copy the value after <code className="bg-secondary/40 px-1 rounded">SAMLRequest=</code>, URL-decode it if needed, then use this tool in Decode mode.</p>
          </div>
        </details>
      </div>
    </div>
  )
}
