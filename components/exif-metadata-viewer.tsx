'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, FileImage, X, Eye, Info, Clock, MapPin, Camera, Settings } from 'lucide-react'

declare global {
  interface Window {
    ExifReader: any
  }
}

interface ExifGroup {
  label: string
  icon: React.ReactNode
  fields: { tag: string; value: string }[]
}

async function loadExifReader(): Promise<void> {
  if (window.ExifReader) return
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/exif-js/2.3.0/exif.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load ExifReader'))
    document.head.appendChild(script)
  })
}

// Minimal built-in EXIF parser using DataView
function parseExif(buffer: ArrayBuffer): Record<string, string> {
  const result: Record<string, string> = {}
  try {
    const view = new DataView(buffer)
    // Check JPEG SOI marker
    if (view.getUint16(0) !== 0xffd8) return result

    let offset = 2
    while (offset < view.byteLength - 2) {
      const marker = view.getUint16(offset)
      offset += 2
      if (marker === 0xffe1) {
        // APP1 — EXIF
        const length = view.getUint16(offset)
        const exifHeader = String.fromCharCode(
          view.getUint8(offset + 2),
          view.getUint8(offset + 3),
          view.getUint8(offset + 4),
          view.getUint8(offset + 5)
        )
        if (exifHeader === 'Exif') {
          const tiffOffset = offset + 8
          const littleEndian = view.getUint16(tiffOffset) === 0x4949
          const ifdOffset = view.getUint32(tiffOffset + 4, littleEndian)
          const entryCount = view.getUint16(tiffOffset + ifdOffset, littleEndian)

          const TAG_NAMES: Record<number, string> = {
            0x010f: 'Make',         0x0110: 'Model',
            0x0112: 'Orientation',  0x011a: 'XResolution',
            0x011b: 'YResolution',  0x0128: 'ResolutionUnit',
            0x0131: 'Software',     0x0132: 'DateTime',
            0x013b: 'Artist',       0x013e: 'WhitePoint',
            0x8769: 'ExifIFD',      0x8825: 'GPSIFD',
            0x9000: 'ExifVersion',  0x9003: 'DateTimeOriginal',
            0x9004: 'DateTimeDigitized',
            0x9201: 'ShutterSpeedValue', 0x9202: 'ApertureValue',
            0x9203: 'BrightnessValue',   0x9204: 'ExposureBiasValue',
            0x9205: 'MaxApertureValue',  0x9207: 'MeteringMode',
            0x9208: 'LightSource',       0x9209: 'Flash',
            0x920a: 'FocalLength',       0xa001: 'ColorSpace',
            0xa002: 'PixelXDimension',   0xa003: 'PixelYDimension',
            0xa20e: 'FocalPlaneXRes',    0xa20f: 'FocalPlaneYRes',
            0xa210: 'FocalPlaneResUnit', 0xa401: 'CustomRendered',
            0xa402: 'ExposureMode',      0xa403: 'WhiteBalance',
            0xa404: 'DigitalZoomRatio',  0xa405: 'FocalLengthIn35mm',
            0xa406: 'SceneCaptureType',  0xa408: 'Contrast',
            0xa409: 'Saturation',        0xa40a: 'Sharpness',
            0x8827: 'ISOSpeedRatings',
          }

          for (let i = 0; i < entryCount; i++) {
            const entryOffset = tiffOffset + ifdOffset + 2 + i * 12
            const tag = view.getUint16(entryOffset, littleEndian)
            const type = view.getUint16(entryOffset + 2, littleEndian)
            const count = view.getUint32(entryOffset + 4, littleEndian)
            const valueOffset = entryOffset + 8

            const name = TAG_NAMES[tag]
            if (!name) continue

            let val = ''
            if (type === 2) {
              // ASCII
              let strOffset: number
              if (count <= 4) strOffset = valueOffset
              else strOffset = tiffOffset + view.getUint32(valueOffset, littleEndian)
              for (let c = 0; c < count - 1; c++) val += String.fromCharCode(view.getUint8(strOffset + c))
            } else if (type === 3) {
              val = String(view.getUint16(valueOffset, littleEndian))
            } else if (type === 4) {
              val = String(view.getUint32(valueOffset, littleEndian))
            } else if (type === 5) {
              const ratOffset = tiffOffset + view.getUint32(valueOffset, littleEndian)
              const num = view.getUint32(ratOffset, littleEndian)
              const den = view.getUint32(ratOffset + 4, littleEndian)
              val = den !== 0 ? `${num}/${den}` : String(num)
            } else if (type === 10) {
              const ratOffset = tiffOffset + view.getUint32(valueOffset, littleEndian)
              const num = view.getInt32(ratOffset, littleEndian)
              const den = view.getInt32(ratOffset + 4, littleEndian)
              val = den !== 0 ? `${num}/${den}` : String(num)
            }
            if (val) result[name] = val
          }
        }
        offset += length
      } else if ((marker & 0xff00) === 0xff00) {
        offset += view.getUint16(offset)
      } else {
        break
      }
    }
  } catch {}
  return result
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function getImageDimensions(file: File): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => { URL.revokeObjectURL(url); resolve({ width: img.naturalWidth, height: img.naturalHeight }) }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not load image')) }
    img.src = url
  })
}

const SUPPORTED = '.jpg,.jpeg,.tiff,.tif,.webp,.png,.heic,.heif'

export function ExifMetadataViewer() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [groups, setGroups] = useState<ExifGroup[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    setFile(f)
    setGroups([])
    setError(null)
    const url = URL.createObjectURL(f)
    setPreview(url)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }

  const handleClear = () => {
    setFile(null)
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    setGroups([])
    setError(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleViewMetadata = async () => {
    if (!file) return
    setLoading(true)
    setError(null)

    try {
      const buffer = await file.arrayBuffer()
      const raw = parseExif(buffer)

      let dims: { width: number; height: number } | null = null
      try { dims = await getImageDimensions(file) } catch {}

      // Group the tags
      const camera: { tag: string; value: string }[] = []
      const datetime: { tag: string; value: string }[] = []
      const settings: { tag: string; value: string }[] = []
      const fileInfo: { tag: string; value: string }[] = []

      fileInfo.push({ tag: 'File name', value: file.name })
      fileInfo.push({ tag: 'File size', value: formatFileSize(file.size) })
      fileInfo.push({ tag: 'MIME type', value: file.type || 'image/*' })
      fileInfo.push({ tag: 'Last modified', value: new Date(file.lastModified).toLocaleString() })
      if (dims) {
        fileInfo.push({ tag: 'Width', value: `${dims.width} px` })
        fileInfo.push({ tag: 'Height', value: `${dims.height} px` })
        fileInfo.push({ tag: 'Megapixels', value: `${((dims.width * dims.height) / 1_000_000).toFixed(1)} MP` })
      }

      const cameraKeys = ['Make', 'Model', 'Software', 'Artist', 'ColorSpace']
      const dateKeys = ['DateTime', 'DateTimeOriginal', 'DateTimeDigitized']
      const settingsKeys = [
        'FocalLength', 'FocalLengthIn35mm', 'ShutterSpeedValue', 'ApertureValue',
        'ISOSpeedRatings', 'Flash', 'WhiteBalance', 'ExposureMode', 'MeteringMode',
        'ExposureBiasValue', 'MaxApertureValue', 'LightSource', 'DigitalZoomRatio',
        'SceneCaptureType', 'Contrast', 'Saturation', 'Sharpness',
        'XResolution', 'YResolution', 'ResolutionUnit', 'Orientation',
        'PixelXDimension', 'PixelYDimension',
      ]

      for (const [k, v] of Object.entries(raw)) {
        if (cameraKeys.includes(k)) camera.push({ tag: k, value: v })
        else if (dateKeys.includes(k)) datetime.push({ tag: k, value: v })
        else if (settingsKeys.includes(k)) settings.push({ tag: k, value: v })
      }

      const result: ExifGroup[] = []
      result.push({ label: 'File Info', icon: <Info className="w-3.5 h-3.5" />, fields: fileInfo })
      if (camera.length) result.push({ label: 'Camera', icon: <Camera className="w-3.5 h-3.5" />, fields: camera })
      if (datetime.length) result.push({ label: 'Date & Time', icon: <Clock className="w-3.5 h-3.5" />, fields: datetime })
      if (settings.length) result.push({ label: 'Camera Settings', icon: <Settings className="w-3.5 h-3.5" />, fields: settings })

      if (result.length === 1 && fileInfo.length > 0) {
        setError('No EXIF data found. The image may not contain embedded metadata.')
      }

      setGroups(result)
    } catch (err: any) {
      setError(err?.message ?? 'Failed to read EXIF data.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Load panel ────────────────────── */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Your data stays local.
            </span>
          </div>

          <div>
            <h2 className="text-sm font-bold text-foreground mb-2">
              Load an image <span className="font-normal text-muted-foreground">(JPEG, TIFF, WebP)</span>
            </h2>

            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-secondary/30'
              }`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-32 mx-auto rounded object-contain" />
              ) : (
                <>
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground">Paste or drag &amp; drop a file here</p>
                  <p className="text-xs text-muted-foreground mt-1">Supports JPEG, TIFF, WebP, PNG, HEIC</p>
                </>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept={SUPPORTED}
                onChange={handleInputChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600/10 text-sm font-medium transition-colors"
            >
              <FileImage className="w-4 h-4" />
              Select file
            </button>
            <button
              onClick={handleClear}
              disabled={!file}
              className="flex items-center gap-2 px-3 py-2 rounded border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          </div>

          {file && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm">
              <FileImage className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="truncate text-foreground font-medium">{file.name}</span>
              <span className="text-muted-foreground ml-auto flex-shrink-0">{formatFileSize(file.size)}</span>
            </div>
          )}

          <button
            onClick={handleViewMetadata}
            disabled={!file || loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Eye className="w-4 h-4" />
            {loading ? 'Reading metadata…' : 'View metadata'}
          </button>

          <p className="text-xs text-muted-foreground">
            Load a JPEG, TIFF, or WebP image to inspect its EXIF metadata.
          </p>

          {error && (
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm text-amber-700 dark:text-amber-400">
              {error}
            </div>
          )}
        </div>

        {/* ── Right: File info panel ───────────────── */}
        <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <Info className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">File info</span>
          </div>

          {groups.length === 0 && !loading && (
            <div className="flex-1 flex items-start p-4">
              <p className="text-sm text-muted-foreground">Waiting for an image…</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <FileImage className="w-8 h-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">Parsing EXIF data…</p>
              </div>
            </div>
          )}

          {groups.length > 0 && !loading && (
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {groups.map(group => (
                <div key={group.label}>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    {group.icon} {group.label}
                  </p>
                  <div className="space-y-0">
                    {group.fields.map(({ tag, value }) => (
                      <div key={tag} className="grid grid-cols-[140px_1fr] gap-2 py-1.5 border-b border-border/40 last:border-0">
                        <span className="text-xs text-muted-foreground font-medium">{tag}</span>
                        <span className="text-xs text-foreground break-words">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
