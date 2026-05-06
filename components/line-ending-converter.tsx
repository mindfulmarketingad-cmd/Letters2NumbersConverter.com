"use client"

import { useState, useMemo } from "react"
import { Copy, Download, RotateCcw, Upload } from "lucide-react"
import {
  convertLineEndings,
  detectLineEnding,
  getLineCount,
  getCharacterCount,
  getByteSize,
  LINE_ENDING_FORMATS,
  type LineEndingFormat,
} from "@/lib/line-ending-converter"

export function LineEndingConverter() {
  const [input, setInput] = useState("")
  const [targetFormat, setTargetFormat] = useState<LineEndingFormat>("LF")

  const output = useMemo(() => {
    return convertLineEndings(input, targetFormat)
  }, [input, targetFormat])

  const detectedFormat = useMemo(() => {
    return detectLineEnding(input)
  }, [input])

  const inputStats = useMemo(() => {
    return {
      lines: getLineCount(input),
      chars: getCharacterCount(input),
      bytes: getByteSize(input),
    }
  }, [input])

  const outputStats = useMemo(() => {
    return {
      lines: getLineCount(output),
      chars: getCharacterCount(output),
      bytes: getByteSize(output),
    }
  }, [output])

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setInput(text)
    } catch (err) {
      console.error("Failed to paste:", err)
    }
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const text = event.target?.result as string
        setInput(text)
      }
      reader.readAsText(file)
    }
  }

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const downloadFile = () => {
    if (!output) return

    const element = document.createElement("a")
    const file = new Blob([output], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `converted.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const clearAll = () => {
    setInput("")
  }

  return (
    <div className="w-full space-y-6">
      {/* Target Format Selection */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-foreground">Target Line Ending Format</label>
        <select
          value={targetFormat}
          onChange={(e) => setTargetFormat(e.target.value as LineEndingFormat)}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {LINE_ENDING_FORMATS.map((format) => (
            <option key={format.format} value={format.format}>
              {format.name}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted-foreground">
          {LINE_ENDING_FORMATS.find((f) => f.format === targetFormat)?.description}
        </p>
      </div>

      {/* Detected Format */}
      {detectedFormat && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Detected Format:</strong> {LINE_ENDING_FORMATS.find((f) => f.format === detectedFormat)?.name}
          </p>
        </div>
      )}

      {/* Input Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">Input Text</label>
          <div className="flex gap-2">
            <button
              onClick={handlePaste}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs border border-border rounded hover:bg-muted transition-colors"
            >
              <Copy className="w-3 h-3" />
              Paste
            </button>
            <label className="inline-flex items-center gap-1 px-3 py-1 text-xs border border-border rounded hover:bg-muted transition-colors cursor-pointer">
              <Upload className="w-3 h-3" />
              Upload
              <input type="file" onChange={handleUpload} className="hidden" accept="text/*" />
            </label>
          </div>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to convert line endings..."
          className="w-full min-h-80 p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>Lines: {inputStats.lines}</span>
          <span>Characters: {inputStats.chars}</span>
          <span>Bytes: {inputStats.bytes}</span>
        </div>
      </div>

      {/* Output Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">
            Converted Text ({targetFormat})
          </label>
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs border border-border rounded hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Copy className="w-3 h-3" />
              Copy
            </button>
            <button
              onClick={downloadFile}
              disabled={!output}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs border border-border rounded hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download className="w-3 h-3" />
              Download
            </button>
          </div>
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="Converted text will appear here..."
          className="w-full min-h-80 p-4 border border-border rounded-lg bg-card text-foreground font-mono text-sm resize-none"
        />
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span>Lines: {outputStats.lines}</span>
          <span>Characters: {outputStats.chars}</span>
          <span>Bytes: {outputStats.bytes}</span>
        </div>
      </div>

      {/* Info */}
      <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 space-y-2 text-sm text-muted-foreground">
        <p>
          <strong className="text-foreground">Line Ending Formats:</strong>
        </p>
        <ul className="space-y-1 ml-4 list-disc">
          <li><strong>LF</strong> - Unix, Linux, macOS (single newline character)</li>
          <li><strong>CRLF</strong> - Windows (carriage return + line feed)</li>
          <li><strong>CR</strong> - Old Mac OS 9 and earlier (carriage return only)</li>
        </ul>
      </div>

      {/* Clear Button */}
      <button
        onClick={clearAll}
        className="w-full px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium text-foreground inline-flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Clear All
      </button>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
