'use client'

import { useState, useRef, useEffect } from 'react'
import { Upload, Download, AlertCircle, Plus, Share2, FileText, Maximize2, Trash2, Loader2, CheckCircle } from 'lucide-react'
import pako from 'pako'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface WorkspaceItem {
  id: string
  name: string
  timestamp: number
  url: string
}

declare global {
  interface Window {
    pdfjsLib: any
  }
}

function makeCrc32Table() {
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i++) {
    let c = i
    for (let j = 0; j < 8; j++) c = c & 1 ? (0xedb88320 ^ (c >>> 1)) : c >>> 1
    table[i] = c
  }
  return table
}

function crc32(data: Uint8Array): number {
  const table = makeCrc32Table()
  let crc = 0xffffffff
  for (const b of data) crc = table[(crc ^ b) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function buildZip(files: Array<{ name: string; data: Uint8Array }>): Uint8Array {
  const enc = new TextEncoder()
  const localParts: Uint8Array[] = []
  const centralParts: Uint8Array[] = []
  let offset = 0

  for (const file of files) {
    const nameBytes = enc.encode(file.name)
    const compressed = pako.deflateRaw(file.data, { level: 6 })
    const checksum = crc32(file.data)

    const local = new DataView(new ArrayBuffer(30 + nameBytes.length))
    local.setUint32(0, 0x04034b50, true)
    local.setUint16(4, 20, true)
    local.setUint16(6, 0, true)
    local.setUint16(8, 8, true)
    local.setUint16(10, 0, true)
    local.setUint16(12, 0, true)
    local.setUint32(14, checksum, true)
    local.setUint32(18, compressed.length, true)
    local.setUint32(22, file.data.length, true)
    local.setUint16(26, nameBytes.length, true)
    local.setUint16(28, 0, true)
    nameBytes.forEach((b, i) => local.setUint8(30 + i, b))
    const localBytes = new Uint8Array(local.buffer)

    localParts.push(localBytes, compressed)

    const central = new DataView(new ArrayBuffer(46 + nameBytes.length))
    central.setUint32(0, 0x02014b50, true)
    central.setUint16(4, 20, true)
    central.setUint16(6, 20, true)
    central.setUint16(8, 0, true)
    central.setUint16(10, 8, true)
    central.setUint16(12, 0, true)
    central.setUint16(14, 0, true)
    central.setUint32(16, checksum, true)
    central.setUint32(20, compressed.length, true)
    central.setUint32(24, file.data.length, true)
    central.setUint16(28, nameBytes.length, true)
    central.setUint16(30, 0, true)
    central.setUint16(32, 0, true)
    central.setUint16(34, 0, true)
    central.setUint16(36, 0, true)
    central.setUint32(38, 0, true)
    central.setUint32(42, offset, true)
    nameBytes.forEach((b, i) => central.setUint8(46 + i, b))
    centralParts.push(new Uint8Array(central.buffer))

    offset += localBytes.length + compressed.length
  }

  const centralStart = offset
  const centralSize = centralParts.reduce((s, p) => s + p.length, 0)

  const eocd = new DataView(new ArrayBuffer(22))
  eocd.setUint32(0, 0x06054b50, true)
  eocd.setUint16(4, 0, true)
  eocd.setUint16(6, 0, true)
  eocd.setUint16(8, files.length, true)
  eocd.setUint16(10, files.length, true)
  eocd.setUint32(12, centralSize, true)
  eocd.setUint32(16, centralStart, true)
  eocd.setUint16(20, 0, true)

  const all = [...localParts, ...centralParts, new Uint8Array(eocd.buffer)]
  const total = all.reduce((s, p) => s + p.length, 0)
  const out = new Uint8Array(total)
  let pos = 0
  for (const p of all) { out.set(p, pos); pos += p.length }
  return out
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function createDocx(pages: string[]): Uint8Array {
  const enc = new TextEncoder()

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
</Types>`

  const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
</Relationships>`

  const wordRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`

  const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml">
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
    <w:rPr><w:sz w:val="24"/><w:szCs w:val="24"/></w:rPr>
  </w:style>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1"/>
    <w:basedOn w:val="Normal"/>
    <w:pPr><w:outlineLvl w:val="0"/></w:pPr>
    <w:rPr><w:b/><w:sz w:val="32"/><w:szCs w:val="32"/></w:rPr>
  </w:style>
</w:styles>`

  const coreProps = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:creator>Letters2NumbersConverter.com</dc:creator>
  <cp:lastModifiedBy>Letters2NumbersConverter.com</cp:lastModifiedBy>
</cp:coreProperties>`

  let body = ''
  pages.forEach((pageText, pageIdx) => {
    const lines = pageText.split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed) {
        body += '<w:p/>\n'
        continue
      }
      // Heuristic: short lines with caps are likely headings
      const isHeading = trimmed.length < 80 && trimmed === trimmed.toUpperCase() && trimmed.length > 3
      const styleId = isHeading ? 'Heading1' : 'Normal'
      body += `<w:p><w:pPr><w:pStyle w:val="${styleId}"/></w:pPr><w:r><w:t xml:space="preserve">${escapeXml(trimmed)}</w:t></w:r></w:p>\n`
    }
    if (pageIdx < pages.length - 1) {
      body += `<w:p><w:r><w:br w:type="page"/></w:r></w:p>\n`
    }
  })

  const document = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
${body}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>`

  return buildZip([
    { name: '[Content_Types].xml', data: enc.encode(contentTypes) },
    { name: '_rels/.rels', data: enc.encode(rels) },
    { name: 'word/_rels/document.xml.rels', data: enc.encode(wordRels) },
    { name: 'word/styles.xml', data: enc.encode(styles) },
    { name: 'word/document.xml', data: enc.encode(document) },
    { name: 'docProps/core.xml', data: enc.encode(coreProps) },
  ])
}

async function loadPdfJs(): Promise<void> {
  if (window.pdfjsLib) return
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js'
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
      resolve()
    }
    script.onerror = () => reject(new Error('Failed to load PDF.js'))
    document.head.appendChild(script)
  })
}

async function extractTextFromPdf(file: File): Promise<string[]> {
  await loadPdfJs()
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise
  const pages: string[] = []
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const content = await page.getTextContent()
    const lines: string[] = []
    let lastY: number | null = null
    for (const item of content.items) {
      if ('str' in item) {
        const y = (item as any).transform?.[5] ?? 0
        if (lastY !== null && Math.abs(y - lastY) > 5) {
          lines.push('\n')
        }
        lines.push((item as any).str)
        lastY = y
      }
    }
    pages.push(lines.join(''))
  }
  return pages
}

export function PdfToWordConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [isConverting, setIsConverting] = useState(false)
  const [progress, setProgress] = useState('')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [outputName, setOutputName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [workspace, setWorkspace] = useState<WorkspaceItem[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl)
    }
  }, [downloadUrl])

  const handleFileSelect = (selectedFile: File) => {
    if (!selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setError('Please select a valid PDF file.')
      return
    }
    setFile(selectedFile)
    setError(null)
    setDownloadUrl(null)
    setProgress('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFileSelect(f)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) handleFileSelect(f)
  }

  const handleConvert = async () => {
    if (!file) return
    setIsConverting(true)
    setError(null)
    setDownloadUrl(null)

    try {
      setProgress('Loading PDF engine...')
      const pages = await extractTextFromPdf(file)

      setProgress(`Extracted ${pages.length} page${pages.length !== 1 ? 's' : ''}. Building Word document...`)
      const docxBytes = createDocx(pages)

      const blob = new Blob([docxBytes], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      })
      const url = URL.createObjectURL(blob)
      const name = file.name.replace(/\.pdf$/i, '.docx')

      setDownloadUrl(url)
      setOutputName(name)
      setProgress('')

      setWorkspace(prev =>
        [{ id: Date.now().toString(), name, timestamp: Date.now(), url }, ...prev].slice(0, 10)
      )
    } catch (err: any) {
      setError(err?.message ?? 'Conversion failed. Please try again with a different PDF.')
    } finally {
      setIsConverting(false)
    }
  }

  const handleReset = () => {
    setFile(null)
    setDownloadUrl(null)
    setError(null)
    setProgress('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="p-2 hover:bg-secondary rounded transition-colors"
            title="New conversion"
          >
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="Share">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="File info">
            <FileText className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded transition-colors" title="Fullscreen">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Workspace</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 py-1 text-sm border border-border rounded hover:bg-secondary transition-colors">
                {workspace.length > 0 ? `${workspace.length} file${workspace.length !== 1 ? 's' : ''}` : 'Empty'}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {workspace.length === 0 ? (
                <DropdownMenuItem disabled>No saved conversions</DropdownMenuItem>
              ) : (
                workspace.map(item => (
                  <DropdownMenuItem key={item.id} asChild>
                    <a href={item.url} download={item.name} className="cursor-pointer">
                      {item.name}
                    </a>
                  </DropdownMenuItem>
                ))
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Upload */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Input File</label>
          <div
            className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
            <p className="text-foreground font-medium mb-1">Drop your PDF here</p>
            <p className="text-sm text-muted-foreground mb-3">or</p>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors font-medium">
              Choose PDF file
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleInputChange}
              className="hidden"
            />
            <p className="text-xs text-muted-foreground mt-4">Supports PDF files up to 100 MB</p>
          </div>

          {file && (
            <div className="mt-3 flex items-center justify-between p-3 bg-secondary/50 rounded-lg border border-border">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                <span className="text-xs text-muted-foreground">({(file.size / 1024).toFixed(1)} KB)</span>
              </div>
              <button
                onClick={e => { e.stopPropagation(); handleReset() }}
                className="p-1 hover:bg-secondary rounded transition-colors text-muted-foreground hover:text-foreground"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Output format */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">Output Format</label>
          <div className="px-4 py-3 border border-border rounded-lg bg-secondary/50 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="font-medium">Word Document (.docx)</span>
            <span className="text-xs text-muted-foreground ml-auto">Microsoft Word / LibreOffice</span>
          </div>
        </div>

        {/* Convert button */}
        <button
          onClick={handleConvert}
          disabled={!file || isConverting}
          className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isConverting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Converting…
            </>
          ) : (
            'Convert to Word'
          )}
        </button>

        {/* Progress */}
        {progress && (
          <p className="text-sm text-muted-foreground text-center">{progress}</p>
        )}

        {/* Success */}
        {downloadUrl && (
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Conversion complete</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[180px]">{outputName}</p>
                </div>
              </div>
              <a
                href={downloadUrl}
                download={outputName}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors font-medium text-sm flex items-center gap-1"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex gap-3 text-red-600">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
