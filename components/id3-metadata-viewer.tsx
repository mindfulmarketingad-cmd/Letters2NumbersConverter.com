'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, FileAudio, X, Eye, Music, Clock, Info, Image as ImageIcon } from 'lucide-react'

declare global {
  interface Window {
    jsmediatags: any
  }
}

interface ID3Tag {
  title?: string
  artist?: string
  album?: string
  year?: string
  track?: string
  genre?: string
  comment?: { text: string }
  composer?: string
  lyrics?: { lyrics: string }
  bpm?: string
  picture?: { format: string; data: number[] }
  [key: string]: any
}

interface FileMetadata {
  // ID3 tags
  tags: ID3Tag
  // File-level info
  fileName: string
  fileSize: number
  fileType: string
  lastModified: string
  // Cover art data URI
  coverArt?: string
}

async function loadJsMediaTags(): Promise<void> {
  if (window.jsmediatags) return
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsmediatags/3.9.7/jsmediatags.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load jsmediatags'))
    document.head.appendChild(script)
  })
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function pictureToDataUri(picture: { format: string; data: number[] }): string {
  const bytes = new Uint8Array(picture.data)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
  return `data:${picture.format};base64,${btoa(binary)}`
}

const SUPPORTED = '.mp3,.mp4,.m4a,.aiff,.aif,.wav,.ogg,.flac'

export function ID3MetadataViewer() {
  const [file, setFile] = useState<File | null>(null)
  const [metadata, setMetadata] = useState<FileMetadata | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    setFile(f)
    setMetadata(null)
    setError(null)
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
    setMetadata(null)
    setError(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleViewMetadata = async () => {
    if (!file) return
    setLoading(true)
    setError(null)

    try {
      await loadJsMediaTags()

      const tags = await new Promise<ID3Tag>((resolve, reject) => {
        window.jsmediatags.read(file, {
          onSuccess: (result: { tags: ID3Tag }) => resolve(result.tags),
          onError: (err: any) => reject(new Error(err.message || 'Could not read tags')),
        })
      })

      let coverArt: string | undefined
      if (tags.picture) {
        try { coverArt = pictureToDataUri(tags.picture) } catch {}
      }

      setMetadata({
        tags,
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type || 'audio/*',
        lastModified: new Date(file.lastModified).toLocaleString(),
        coverArt,
      })
    } catch (err: any) {
      setError(err?.message ?? 'Failed to read metadata. The file may not contain ID3 tags.')
    } finally {
      setLoading(false)
    }
  }

  const tagRows: { label: string; value: string | undefined }[] = metadata
    ? [
        { label: 'Title',    value: metadata.tags.title },
        { label: 'Artist',   value: metadata.tags.artist },
        { label: 'Album',    value: metadata.tags.album },
        { label: 'Year',     value: metadata.tags.year },
        { label: 'Track',    value: typeof metadata.tags.track === 'object' ? `${(metadata.tags.track as any).no} / ${(metadata.tags.track as any).of}` : metadata.tags.track },
        { label: 'Genre',    value: Array.isArray(metadata.tags.genre) ? (metadata.tags.genre as string[]).join(', ') : metadata.tags.genre },
        { label: 'Composer', value: metadata.tags.composer },
        { label: 'BPM',      value: metadata.tags.bpm },
        { label: 'Comment',  value: metadata.tags.comment?.text ?? (typeof metadata.tags.comment === 'string' ? metadata.tags.comment : undefined) },
        { label: 'Lyrics',   value: metadata.tags.lyrics?.lyrics },
      ].filter(r => r.value)
    : []

  const fileRows: { label: string; value: string }[] = metadata
    ? [
        { label: 'File name',      value: metadata.fileName },
        { label: 'File size',      value: formatFileSize(metadata.fileSize) },
        { label: 'MIME type',      value: metadata.fileType },
        { label: 'Last modified',  value: metadata.lastModified },
      ]
    : []

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Load panel ────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Privacy badge */}
          <div className="flex justify-end">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Your data stays local.
            </span>
          </div>

          <div>
            <h2 className="text-sm font-bold text-foreground mb-2">
              Load audio file <span className="font-normal text-muted-foreground">(MP3, MP4/M4A, AIFF, WAV)</span>
            </h2>

            {/* Drop zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50 hover:bg-secondary/30'
              }`}
              onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm font-medium text-foreground">Paste or drag &amp; drop a file here</p>
              <p className="text-xs text-muted-foreground mt-1">Supports MP3, MP4/M4A, AIFF, WAV, OGG, FLAC</p>
              <input
                ref={fileInputRef}
                type="file"
                accept={SUPPORTED}
                onChange={handleInputChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600/10 text-sm font-medium transition-colors"
            >
              <FileAudio className="w-4 h-4" />
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

          {/* Selected file chip */}
          {file && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border text-sm">
              <Music className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="truncate text-foreground font-medium">{file.name}</span>
              <span className="text-muted-foreground ml-auto flex-shrink-0">{formatFileSize(file.size)}</span>
            </div>
          )}

          {/* View metadata button */}
          <button
            onClick={handleViewMetadata}
            disabled={!file || loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Eye className="w-4 h-4" />
            {loading ? 'Reading metadata…' : 'View metadata'}
          </button>

          <p className="text-xs text-muted-foreground">
            Load an audio file (MP3, MP4/M4A, AIFF, WAV) to inspect its ID3 metadata.
          </p>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600">
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

          {!metadata && !loading && (
            <div className="flex-1 flex items-start p-4">
              <p className="text-sm text-muted-foreground">Waiting for an audio file…</p>
            </div>
          )}

          {loading && (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-2">
                <Music className="w-8 h-8 mx-auto text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">Reading ID3 tags…</p>
              </div>
            </div>
          )}

          {metadata && !loading && (
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Cover art */}
              {metadata.coverArt && (
                <div className="flex items-start gap-4">
                  <img
                    src={metadata.coverArt}
                    alt="Album artwork"
                    className="w-24 h-24 rounded-lg object-cover border border-border shadow-sm flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Album Art</p>
                    <p className="text-xs text-muted-foreground">Embedded cover image found</p>
                  </div>
                </div>
              )}

              {/* ID3 Tags */}
              {tagRows.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Music className="w-3.5 h-3.5" /> ID3 Tags
                  </p>
                  <div className="space-y-1">
                    {tagRows.map(({ label, value }) => (
                      <div key={label} className="grid grid-cols-[120px_1fr] gap-2 py-1.5 border-b border-border/40 last:border-0">
                        <span className="text-xs text-muted-foreground font-medium">{label}</span>
                        <span className="text-xs text-foreground break-words">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {tagRows.length === 0 && (
                <div className="p-3 rounded-lg bg-secondary/40 border border-border text-sm text-muted-foreground">
                  No ID3 tags found in this file.
                </div>
              )}

              {/* File-level info */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> File Info
                </p>
                <div className="space-y-1">
                  {fileRows.map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-[120px_1fr] gap-2 py-1.5 border-b border-border/40 last:border-0">
                      <span className="text-xs text-muted-foreground font-medium">{label}</span>
                      <span className="text-xs text-foreground break-all">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Raw tag count */}
              <p className="text-xs text-muted-foreground">
                {Object.keys(metadata.tags).length} tag field{Object.keys(metadata.tags).length !== 1 ? 's' : ''} detected
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
