'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, FileKey, X, Shield, Info, ChevronDown, ChevronUp, Lock, Globe, Calendar, Key, Hash } from 'lucide-react'

// ── Minimal ASN.1 / DER parser ────────────────────────────────────────────────

type ASN1Node = {
  tag: number
  constructed: boolean
  children?: ASN1Node[]
  value?: Uint8Array
  raw: Uint8Array
}

function readLength(buf: Uint8Array, offset: number): { length: number; bytesRead: number } {
  const first = buf[offset]
  if (first < 0x80) return { length: first, bytesRead: 1 }
  const numBytes = first & 0x7f
  let length = 0
  for (let i = 0; i < numBytes; i++) {
    length = (length << 8) | buf[offset + 1 + i]
  }
  return { length, bytesRead: 1 + numBytes }
}

function parseASN1(buf: Uint8Array, offset = 0, end?: number): ASN1Node[] {
  const nodes: ASN1Node[] = []
  const limit = end ?? buf.length
  while (offset < limit) {
    const tag = buf[offset]
    const constructed = (tag & 0x20) !== 0
    offset++
    const { length, bytesRead } = readLength(buf, offset)
    offset += bytesRead
    const valueEnd = offset + length
    const raw = buf.slice(offset - bytesRead - 1, valueEnd)
    if (constructed) {
      const children = parseASN1(buf, offset, valueEnd)
      nodes.push({ tag, constructed, children, raw })
    } else {
      nodes.push({ tag, constructed, value: buf.slice(offset, valueEnd), raw })
    }
    offset = valueEnd
  }
  return nodes
}

function oidToString(bytes: Uint8Array): string {
  const values: number[] = []
  values.push(Math.floor(bytes[0] / 40))
  values.push(bytes[0] % 40)
  let current = 0
  for (let i = 1; i < bytes.length; i++) {
    current = (current << 7) | (bytes[i] & 0x7f)
    if ((bytes[i] & 0x80) === 0) {
      values.push(current)
      current = 0
    }
  }
  return values.join('.')
}

const OID_NAMES: Record<string, string> = {
  '2.5.4.3': 'CN', '2.5.4.6': 'C', '2.5.4.7': 'L', '2.5.4.8': 'ST',
  '2.5.4.10': 'O', '2.5.4.11': 'OU', '2.5.4.5': 'Serial',
  '1.2.840.113549.1.1.1': 'RSA', '1.2.840.113549.1.1.11': 'sha256WithRSAEncryption',
  '1.2.840.113549.1.1.12': 'sha384WithRSAEncryption', '1.2.840.113549.1.1.13': 'sha512WithRSAEncryption',
  '1.2.840.113549.1.1.5': 'sha1WithRSAEncryption',
  '1.2.840.10045.2.1': 'EC', '1.2.840.10045.4.3.2': 'ecdsa-with-SHA256',
  '1.2.840.10045.4.3.3': 'ecdsa-with-SHA384', '1.2.840.10045.4.3.4': 'ecdsa-with-SHA512',
  '2.5.29.17': 'subjectAltName', '2.5.29.15': 'keyUsage', '2.5.29.37': 'extKeyUsage',
  '2.5.29.19': 'basicConstraints', '2.5.29.14': 'subjectKeyIdentifier',
  '2.5.29.35': 'authorityKeyIdentifier', '2.5.29.31': 'cRLDistributionPoints',
  '1.3.6.1.5.5.7.1.1': 'authorityInfoAccess', '2.5.29.32': 'certificatePolicies',
  '1.3.6.1.4.1.11129.2.4.2': 'ctPoison',
  '1.2.840.113549.1.9.1': 'emailAddress', '2.5.4.9': 'streetAddress',
  '2.5.4.17': 'postalCode', '1.2.840.113549.1.1.4': 'md5WithRSAEncryption',
}

function oidName(bytes: Uint8Array): string {
  const str = oidToString(bytes)
  return OID_NAMES[str] ?? str
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join(':')
}

function bytesToHexPlain(bytes: Uint8Array): string {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
}

function parseString(node: ASN1Node): string {
  if (!node.value) return ''
  try { return new TextDecoder('utf-8').decode(node.value) } catch { return '' }
}

function parseGeneralizedTime(s: string): string {
  // Format: YYYYMMDDHHMMSSZ or YYMMDDHHMMSSZ
  try {
    if (s.length >= 13) {
      let year = s.slice(0, 4)
      if (s.length === 13) {
        // UTCTime: YYMMDDHHMMSSZ
        year = (parseInt(s.slice(0, 2)) >= 50 ? '19' : '20') + s.slice(0, 2)
        const m = s.slice(2, 4), d = s.slice(4, 6), h = s.slice(6, 8), mi = s.slice(8, 10), sec = s.slice(10, 12)
        return new Date(`${year}-${m}-${d}T${h}:${mi}:${sec}Z`).toUTCString()
      }
      const m = s.slice(4, 6), d = s.slice(6, 8), h = s.slice(8, 10), mi = s.slice(10, 12), sec = s.slice(12, 14)
      return new Date(`${year}-${m}-${d}T${h}:${mi}:${sec}Z`).toUTCString()
    }
  } catch {}
  return s
}

function parseUTCTime(node: ASN1Node): string {
  if (!node.value) return ''
  return parseGeneralizedTime(new TextDecoder().decode(node.value))
}

function parseDN(seq: ASN1Node): string {
  const parts: string[] = []
  for (const rdn of seq.children ?? []) {
    for (const atv of rdn.children ?? []) {
      const oidNode = atv.children?.[0]
      const valNode = atv.children?.[1]
      if (oidNode && valNode && oidNode.value) {
        const name = oidName(oidNode.value)
        parts.push(`${name}=${parseString(valNode)}`)
      }
    }
  }
  return parts.join(', ')
}

function parseBitKeySize(bitString: Uint8Array): number {
  // RSA key size from modulus: skip leading 0x00 byte (sign) and count bits
  // bitString[0] = unused bits
  const data = bitString.slice(1)
  // parse inner INTEGER from DER sequence
  try {
    const inner = parseASN1(data)
    if (inner[0]?.children) {
      const modulus = inner[0].children[0]?.value
      if (modulus) {
        let len = modulus.length
        // strip leading 0x00 sign byte
        if (modulus[0] === 0x00) len--
        return len * 8
      }
    }
  } catch {}
  return (bitString.length - 1) * 8
}

// ── SHA-256 fingerprint using Web Crypto ──────────────────────────────────────

async function sha256Hex(data: Uint8Array): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-256', data)
  return bytesToHexPlain(new Uint8Array(hash))
}

async function sha1Hex(data: Uint8Array): Promise<string> {
  const hash = await crypto.subtle.digest('SHA-1', data)
  return bytesToHexPlain(new Uint8Array(hash))
}

// ── PEM / DER input helpers ───────────────────────────────────────────────────

function pemToBytes(pem: string): Uint8Array | null {
  const match = pem.match(/-----BEGIN [^-]+-----\s*([\s\S]+?)\s*-----END [^-]+-----/)
  if (!match) {
    // Try raw base64
    const stripped = pem.replace(/\s+/g, '')
    if (/^[A-Za-z0-9+/]+=*$/.test(stripped)) {
      try {
        const bin = atob(stripped)
        return new Uint8Array(bin.split('').map(c => c.charCodeAt(0)))
      } catch {}
    }
    // Try hex
    const hexStripped = pem.replace(/[\s:]/g, '')
    if (/^[0-9a-fA-F]+$/.test(hexStripped) && hexStripped.length % 2 === 0) {
      const bytes = new Uint8Array(hexStripped.length / 2)
      for (let i = 0; i < bytes.length; i++) {
        bytes[i] = parseInt(hexStripped.slice(i * 2, i * 2 + 2), 16)
      }
      return bytes
    }
    return null
  }
  try {
    const bin = atob(match[1].replace(/\s+/g, ''))
    return new Uint8Array(bin.split('').map(c => c.charCodeAt(0)))
  } catch { return null }
}

function detectPemType(pem: string): string {
  if (pem.includes('CERTIFICATE REQUEST') || pem.includes('NEW CERTIFICATE REQUEST')) return 'CSR'
  if (pem.includes('PKCS7') || pem.includes('PKCS #7') || pem.includes('SIGNED DATA')) return 'PKCS7'
  if (pem.includes('PRIVATE KEY')) return 'PRIVATE KEY'
  if (pem.includes('PUBLIC KEY')) return 'PUBLIC KEY'
  return 'CERTIFICATE'
}

// ── Certificate field extraction ─────────────────────────────────────────────

type DecodedCert = {
  type: string
  subject?: string
  issuer?: string
  notBefore?: string
  notAfter?: string
  serialNumber?: string
  sigAlg?: string
  pubKeyAlg?: string
  pubKeyBits?: number
  san?: string[]
  keyUsage?: string
  extKeyUsage?: string[]
  isCA?: boolean
  sha1?: string
  sha256?: string
  rawHex?: string
}

async function decodeCertificate(der: Uint8Array, type: string): Promise<DecodedCert> {
  const [sha1fp, sha256fp] = await Promise.all([sha1Hex(der), sha256Hex(der)])
  const result: DecodedCert = {
    type,
    sha1: sha1fp,
    sha256: sha256fp,
    rawHex: bytesToHexPlain(der).slice(0, 64) + '…',
  }

  try {
    const root = parseASN1(der)
    const top = root[0]
    if (!top?.children) return result

    if (type === 'CERTIFICATE') {
      const tbs = top.children[0]
      if (!tbs?.children) return result

      let idx = 0
      // Optional version [0]
      if ((tbs.children[0]?.tag & 0x1f) === 0) idx++

      // Serial number
      const serial = tbs.children[idx++]
      if (serial?.value) result.serialNumber = bytesToHex(serial.value).toUpperCase()

      // Signature algorithm
      const sigAlgNode = tbs.children[idx++]
      if (sigAlgNode?.children?.[0]?.value) result.sigAlg = oidName(sigAlgNode.children[0].value)

      // Issuer
      const issuerNode = tbs.children[idx++]
      if (issuerNode) result.issuer = parseDN(issuerNode)

      // Validity
      const validity = tbs.children[idx++]
      if (validity?.children) {
        result.notBefore = parseUTCTime(validity.children[0])
        result.notAfter = parseUTCTime(validity.children[1])
      }

      // Subject
      const subjectNode = tbs.children[idx++]
      if (subjectNode) result.subject = parseDN(subjectNode)

      // SubjectPublicKeyInfo
      const spki = tbs.children[idx++]
      if (spki?.children) {
        const alg = spki.children[0]?.children?.[0]?.value
        if (alg) result.pubKeyAlg = oidName(alg)
        const bits = spki.children[1]?.value
        if (bits) result.pubKeyBits = parseBitKeySize(bits)
      }

      // Extensions
      const exts = tbs.children.find(c => (c.tag & 0x1f) === 3)
      if (exts?.children?.[0]?.children) {
        const sans: string[] = []
        for (const ext of exts.children[0].children) {
          const oidBytes = ext.children?.[0]?.value
          if (!oidBytes) continue
          const name = oidName(oidBytes)

          if (name === 'subjectAltName') {
            // value is OCTET STRING wrapping a SEQUENCE of GeneralNames
            const octet = ext.children?.find(c => c.tag === 0x04)
            if (octet?.value) {
              const inner = parseASN1(octet.value)
              for (const gn of inner[0]?.children ?? []) {
                if (gn.value) sans.push(new TextDecoder().decode(gn.value))
              }
            }
          } else if (name === 'basicConstraints') {
            const octet = ext.children?.find(c => c.tag === 0x04)
            if (octet?.value) {
              const inner = parseASN1(octet.value)
              const boolNode = inner[0]?.children?.[0]
              result.isCA = boolNode?.value?.[0] === 0xff
            }
          }
        }
        if (sans.length > 0) result.san = sans
      }
    } else if (type === 'CSR') {
      // PKCS#10: SEQUENCE { certificationRequestInfo, signatureAlgorithm, signature }
      const cri = top.children[0]
      if (cri?.children) {
        const subject = cri.children[1]
        if (subject) result.subject = parseDN(subject)
        const spki = cri.children[2]
        if (spki?.children) {
          const alg = spki.children[0]?.children?.[0]?.value
          if (alg) result.pubKeyAlg = oidName(alg)
          const bits = spki.children[1]?.value
          if (bits) result.pubKeyBits = parseBitKeySize(bits)
        }
      }
      const sigAlgNode = top.children[1]
      if (sigAlgNode?.children?.[0]?.value) result.sigAlg = oidName(sigAlgNode.children[0].value)
    }
  } catch {}

  return result
}

// ── UI helpers ────────────────────────────────────────────────────────────────

function Row({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-2 py-1.5 border-b border-border/40 last:border-0">
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
      <span className={`text-xs text-foreground break-all ${mono ? 'font-mono' : ''}`}>{value}</span>
    </div>
  )
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
        {icon} {title}
      </p>
      <div className="space-y-0">{children}</div>
    </div>
  )
}

const SUPPORTED_EXTS = '.pem,.crt,.cer,.der,.p7b,.p7c,.pfx,.p12,.csr'

export function CertificateDecoder() {
  const [mode, setMode] = useState<'text' | 'file'>('text')
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<DecodedCert | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [showRaw, setShowRaw] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    setFile(f)
    setResult(null)
    setError(null)
  }, [])

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const handleClear = () => {
    setText('')
    setFile(null)
    setResult(null)
    setError(null)
    setPassword('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDecode = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      let der: Uint8Array | null = null
      let type = 'CERTIFICATE'

      if (mode === 'text') {
        if (!text.trim()) throw new Error('Please paste a PEM block, Base64, or hex string.')
        type = detectPemType(text)
        der = pemToBytes(text.trim())
        if (!der) throw new Error('Could not parse the input. Make sure it is a valid PEM block, Base64, or hex-encoded DER.')
      } else {
        if (!file) throw new Error('Please select a certificate file.')
        const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
        if (['pfx', 'p12'].includes(ext)) throw new Error('PFX/P12 decoding is not yet supported in the browser. Try converting to PEM first with: openssl pkcs12 -in file.pfx -nodes -out file.pem')
        const arrayBuffer = await file.arrayBuffer()
        const bytes = new Uint8Array(arrayBuffer)
        // Detect if it's PEM (text) or binary DER
        const text = new TextDecoder('utf-8', { fatal: false }).decode(bytes.slice(0, 64))
        if (text.includes('-----BEGIN')) {
          const fullText = new TextDecoder().decode(bytes)
          type = detectPemType(fullText)
          der = pemToBytes(fullText)
        } else {
          der = bytes
          if (ext === 'csr') type = 'CSR'
        }
        if (!der) throw new Error('Could not parse the file.')
      }

      const decoded = await decodeCertificate(der, type)
      setResult(decoded)
    } catch (err: any) {
      setError(err?.message ?? 'Failed to decode. Please check your input.')
    } finally {
      setLoading(false)
    }
  }

  const isExpired = result?.notAfter ? new Date(result.notAfter) < new Date() : false
  const isExpiringSoon = result?.notAfter && !isExpired
    ? (new Date(result.notAfter).getTime() - Date.now()) < 30 * 24 * 3600 * 1000
    : false

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Input panel ────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Privacy badge */}
          <div className="flex justify-end">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Your data stays local.
            </span>
          </div>

          {/* Mode toggle */}
          <div>
            <h2 className="text-sm font-bold text-foreground mb-2">Choose input type</h2>
            <div className="flex gap-0 rounded overflow-hidden border border-border w-fit">
              <button
                onClick={() => { setMode('text'); setResult(null); setError(null) }}
                className={`px-4 py-2 text-sm font-medium transition-colors ${mode === 'text' ? 'bg-green-600 text-white' : 'bg-background text-muted-foreground hover:bg-secondary'}`}
              >
                Text
              </button>
              <button
                onClick={() => { setMode('file'); setResult(null); setError(null) }}
                className={`px-4 py-2 text-sm font-medium transition-colors border-l border-border ${mode === 'file' ? 'bg-green-600 text-white' : 'bg-background text-muted-foreground hover:bg-secondary'}`}
              >
                File / binary
              </button>
            </div>
          </div>

          {/* Text input */}
          {mode === 'text' && (
            <div>
              <h2 className="text-sm font-bold text-foreground mb-2">Certificate input</h2>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                rows={8}
                placeholder="Paste PEM blocks, Base64, or hex here..."
                className="w-full rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm font-mono text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-y"
              />
              <p className="text-xs text-primary mt-1">
                Supports PEM blocks (certificates, CSRs, PKCS#7, keys), raw Base64, or hex-encoded DER.
              </p>
            </div>
          )}

          {/* File input */}
          {mode === 'file' && (
            <div>
              <h2 className="text-sm font-bold text-foreground mb-2">Certificate file</h2>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                  isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-secondary/30'
                }`}
                onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-7 h-7 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium text-foreground">Drag & drop or click to select</p>
                <p className="text-xs text-muted-foreground mt-1">.pem .crt .cer .der .p7b .pfx .csr</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={SUPPORTED_EXTS}
                  onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
                  className="hidden"
                />
              </div>
              {file && (
                <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm">
                  <FileKey className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate font-medium text-foreground">{file.name}</span>
                  <button onClick={handleClear} className="ml-auto flex-shrink-0 text-muted-foreground hover:text-foreground">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Password (optional) */}
          <div>
            <h2 className="text-sm font-bold text-foreground mb-1">Password (if needed)</h2>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password for PFX or encrypted keys"
              className="w-full rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm font-mono text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-xs text-muted-foreground mt-1">Leave blank if the file or key is not encrypted.</p>
          </div>

          {/* Decode button */}
          <button
            onClick={handleDecode}
            disabled={loading || (mode === 'text' ? !text.trim() : !file)}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shield className="w-4 h-4" />
            {loading ? 'Decoding…' : 'Decode'}
          </button>

          {/* Clear button */}
          {(text || file || result) && (
            <button
              onClick={handleClear}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors"
            >
              <X className="w-4 h-4" /> Clear
            </button>
          )}

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
              {error}
            </div>
          )}
        </div>

        {/* ── Right: Results panel ─────────────────── */}
        <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <Shield className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">Decoded output</span>
            {result && (
              <span className={`ml-auto text-xs font-semibold px-2 py-0.5 rounded-full ${
                result.type === 'CSR' ? 'bg-blue-500/15 text-blue-600' :
                isExpired ? 'bg-red-500/15 text-red-600' :
                isExpiringSoon ? 'bg-orange-500/15 text-orange-600' :
                'bg-green-500/15 text-green-600'
              }`}>
                {result.type === 'CSR' ? 'CSR' : isExpired ? 'Expired' : isExpiringSoon ? 'Expiring Soon' : 'Valid'}
              </span>
            )}
          </div>

          {!result && !loading && (
            <div className="flex-1 flex items-start p-4">
              <p className="text-sm text-muted-foreground">Paste a certificate or select a file to decode it.</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <Shield className="w-8 h-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">Parsing ASN.1 structure…</p>
              </div>
            </div>
          )}

          {result && !loading && (
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Type badge */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">{result.type}</span>
                {result.isCA && <span className="ml-auto text-xs bg-purple-500/15 text-purple-600 font-semibold px-2 py-0.5 rounded-full">CA Certificate</span>}
              </div>

              {/* Subject */}
              {result.subject && (
                <Section title="Subject" icon={<Globe className="w-3.5 h-3.5" />}>
                  <Row label="Subject" value={result.subject} />
                </Section>
              )}

              {/* Issuer */}
              {result.issuer && (
                <Section title="Issuer" icon={<Lock className="w-3.5 h-3.5" />}>
                  <Row label="Issuer" value={result.issuer} />
                </Section>
              )}

              {/* Validity */}
              {(result.notBefore || result.notAfter) && (
                <Section title="Validity" icon={<Calendar className="w-3.5 h-3.5" />}>
                  {result.notBefore && <Row label="Not before" value={result.notBefore} />}
                  {result.notAfter && (
                    <div className="grid grid-cols-[140px_1fr] gap-2 py-1.5 border-b border-border/40 last:border-0">
                      <span className="text-xs text-muted-foreground font-medium">Not after</span>
                      <span className={`text-xs break-all font-medium ${isExpired ? 'text-red-600' : isExpiringSoon ? 'text-orange-600' : 'text-foreground'}`}>
                        {result.notAfter}
                      </span>
                    </div>
                  )}
                </Section>
              )}

              {/* Public key */}
              {(result.pubKeyAlg || result.pubKeyBits) && (
                <Section title="Public Key" icon={<Key className="w-3.5 h-3.5" />}>
                  {result.pubKeyAlg && <Row label="Algorithm" value={result.pubKeyAlg} />}
                  {result.pubKeyBits && <Row label="Key size" value={`${result.pubKeyBits} bits`} />}
                  {result.sigAlg && <Row label="Signature alg" value={result.sigAlg} />}
                  {result.serialNumber && <Row label="Serial number" value={result.serialNumber} mono />}
                </Section>
              )}

              {/* SANs */}
              {result.san && result.san.length > 0 && (
                <Section title="Subject Alternative Names" icon={<Globe className="w-3.5 h-3.5" />}>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {result.san.map((s, i) => (
                      <span key={i} className="text-xs bg-secondary/60 border border-border rounded px-2 py-0.5 font-mono text-foreground">{s}</span>
                    ))}
                  </div>
                </Section>
              )}

              {/* Fingerprints */}
              {(result.sha1 || result.sha256) && (
                <Section title="Fingerprints" icon={<Hash className="w-3.5 h-3.5" />}>
                  {result.sha256 && <Row label="SHA-256" value={result.sha256} mono />}
                  {result.sha1 && <Row label="SHA-1" value={result.sha1} mono />}
                </Section>
              )}

              {/* Raw hex (collapsible) */}
              {result.rawHex && (
                <div>
                  <button
                    onClick={() => setShowRaw(r => !r)}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showRaw ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    {showRaw ? 'Hide' : 'Show'} raw DER (hex preview)
                  </button>
                  {showRaw && (
                    <div className="mt-2 p-2 rounded bg-secondary/40 border border-border text-xs font-mono text-muted-foreground break-all">
                      {result.rawHex}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
