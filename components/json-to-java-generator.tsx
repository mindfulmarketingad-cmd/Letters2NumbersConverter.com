"use client"

import { useState, useCallback } from "react"
import { Copy, ClipboardPaste, Download, RotateCcw } from "lucide-react"
import { generateJavaCode } from "@/lib/json-to-java-generator"

export function JsonToJavaGenerator() {
  const [input, setInput] = useState("")
  const [className, setClassName] = useState("JsonObject")
  const [error, setError] = useState("")

  const generate = useCallback(() => {
    if (!input.trim()) {
      setError("")
      return ""
    }
    try {
      setError("")
      return generateJavaCode(input, className)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Generation failed"
      setError(errorMsg)
      return ""
    }
  }, [input, className])

  const output = generate()

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setInput(text)
    } catch (err) {
      console.error("Failed to paste:", err)
    }
  }

  const downloadAsFile = () => {
    if (output) {
      const element = document.createElement("a")
      const file = new Blob([output], { type: "text/plain" })
      element.href = URL.createObjectURL(file)
      element.download = `${className}.java`
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }
  }

  const clearAll = () => {
    setInput("")
    setError("")
  }

  return (
    <div className="w-full space-y-6">
      {/* Class Name Input */}
      <div className="max-w-md">
        <label className="text-sm font-medium text-foreground block mb-2">
          Java Class Name
        </label>
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value || "JsonObject")}
          placeholder="Enter class name (e.g., Employee)"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Converter Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            JSON Input
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your JSON schema here..."
            className="flex-1 min-h-96 w-full p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            Java Code Output
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Generated Java code will appear here..."
            className="flex-1 min-h-96 w-full p-4 border border-border rounded-lg bg-card text-foreground font-mono text-sm focus:outline-none resize-none"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={copyToClipboard}
          disabled={!output}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
        <button
          onClick={pasteFromClipboard}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <ClipboardPaste className="w-4 h-4" />
          Paste
        </button>
        <button
          onClick={downloadAsFile}
          disabled={!output}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
        <button
          onClick={clearAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Clear
        </button>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
