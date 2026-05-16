'use client'

import { useState } from 'react'
import { Copy, Download, RotateCcw, ImageIcon } from 'lucide-react'

function getImageSrc(input: string): string {
  const clean = input.trim()
  if (!clean) return ''
  if (clean.startsWith('data:')) return clean
  return `data:image/png;base64,${clean}`
}

function detectFormat(input: string): string {
  if (input.includes('jpeg') || input.includes('jpg')) return 'JPEG'
  if (input.includes('gif')) return 'GIF'
  if (input.includes('svg')) return 'SVG'
  if (input.includes('webp')) return 'WebP'
  if (input.includes('png')) return 'PNG'
  return 'PNG'
}

function formatSize(chars: number): string {
  if (chars >= 1024 * 1024) return `${(chars / (1024 * 1024)).toFixed(2)} MB`
  if (chars >= 1024) return `${(chars / 1024).toFixed(2)} KB`
  return `${chars} B`
}

export function Base64ImageViewer() {
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [copied, setCopied] = useState(false)

  const imageSrc = getImageSrc(input)

  const handleCopy = async () => {
    if (!input) return
    await navigator.clipboard.writeText(input)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleDownload = () => {
    if (!imageSrc || error) return
    const a = document.createElement('a')
    a.href = imageSrc
    a.download = `image.${detectFormat(input).toLowerCase()}`
    a.click()
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Left — input */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Base64 String</span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                disabled={!input}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#00BD9D] hover:text-[#00BD9D] disabled:opacity-40"
              >
                <Copy className="h-3 w-3" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={handleDownload}
                disabled={!imageSrc || error}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#49C6E5] hover:text-[#49C6E5] disabled:opacity-40"
              >
                <Download className="h-3 w-3" />
                Download
              </button>
              <button
                onClick={() => { setInput(''); setError(false) }}
                disabled={!input}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-red-400 hover:text-red-500 disabled:opacity-40"
              >
                <RotateCcw className="h-3 w-3" />
                Clear
              </button>
            </div>
          </div>

          <textarea
            value={input}
            onChange={e => { setInput(e.target.value); setError(false) }}
            placeholder="Paste your base64 image string here — with or without the data:image/... prefix…"
            spellCheck={false}
            className="h-[360px] w-full resize-none rounded-xl border border-gray-200 bg-white p-4 font-mono text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#00BD9D] focus:outline-none focus:ring-2 focus:ring-[#00BD9D]/20"
          />

          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>{input.length.toLocaleString()} characters</span>
            <span>{formatSize(input.length)}</span>
          </div>

          {/* Tips */}
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Tips</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>Paste with or without the <code className="rounded bg-white px-1 py-0.5 text-xs font-mono border border-gray-200">data:image/...</code> prefix</li>
              <li>Supports PNG, JPEG, GIF, SVG, WebP and more</li>
              <li>Runs entirely in your browser — nothing is uploaded</li>
            </ul>
          </div>
        </div>

        {/* Right — preview */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Image Preview</span>

          <div className="flex h-[360px] items-center justify-center overflow-auto rounded-xl border border-gray-200 bg-gray-50 p-4">
            {error ? (
              <div className="text-center">
                <p className="text-sm font-semibold text-red-500">Invalid base64 string</p>
                <p className="mt-1 text-xs text-gray-500">Check your input and try again.</p>
              </div>
            ) : imageSrc ? (
              <img
                src={imageSrc}
                alt="Decoded base64"
                onError={() => setError(true)}
                onLoad={() => setError(false)}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <ImageIcon className="h-10 w-10" />
                <p className="text-sm">Paste a base64 string to preview</p>
              </div>
            )}
          </div>

          {/* Image info */}
          {imageSrc && !error && (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex justify-between py-1 text-sm">
                <span className="text-gray-500">Format</span>
                <span className="font-medium text-gray-800">{detectFormat(input)}</span>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-gray-500">Base64 size</span>
                <span className="font-medium text-gray-800">{formatSize(input.length)}</span>
              </div>
              <div className="flex justify-between py-1 text-sm">
                <span className="text-gray-500">Has data URI prefix</span>
                <span className="font-medium text-gray-800">{input.trim().startsWith('data:') ? 'Yes' : 'No'}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
