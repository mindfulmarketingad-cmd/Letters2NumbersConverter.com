"use client"

import { useState, useCallback } from "react"
import { Copy, ClipboardPaste, Download, RotateCcw } from "lucide-react"
import { yamlToIni, iniToYaml } from "@/lib/yaml-ini-converter"

type ConversionMode = "yaml-to-ini" | "ini-to-yaml"

export function YamlIniConverter() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<ConversionMode>("yaml-to-ini")

  const convert = useCallback(() => {
    if (!input.trim()) return ""
    try {
      return mode === "yaml-to-ini" ? yamlToIni(input) : iniToYaml(input)
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : "Conversion failed"}`
    }
  }, [input, mode])

  const output = convert()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
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
    const extension = mode === "yaml-to-ini" ? "ini" : "yaml"
    const element = document.createElement("a")
    const file = new Blob([output], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `converted-${Date.now()}.${extension}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const clearAll = () => {
    setInput("")
  }

  const toggleMode = () => {
    setMode(mode === "yaml-to-ini" ? "ini-to-yaml" : "yaml-to-ini")
    setInput("")
  }

  return (
    <div className="w-full space-y-6">
      {/* Mode Toggle */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={toggleMode}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === "yaml-to-ini"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          YAML to INI
        </button>
        <span className="text-muted-foreground">↔</span>
        <button
          onClick={toggleMode}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === "ini-to-yaml"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          INI to YAML
        </button>
      </div>

      {/* Converter Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            {mode === "yaml-to-ini" ? "YAML Input" : "INI Input"}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={
              mode === "yaml-to-ini"
                ? "Paste YAML content here..."
                : "Paste INI content here..."
            }
            className="flex-1 min-h-96 w-full p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-foreground mb-2">
            {mode === "yaml-to-ini" ? "INI Output" : "YAML Output"}
          </label>
          <textarea
            value={output}
            readOnly
            placeholder="Converted content will appear here..."
            className="flex-1 min-h-96 w-full p-4 border border-border rounded-lg bg-card text-foreground font-mono text-sm focus:outline-none resize-none"
          />
        </div>
      </div>

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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
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
