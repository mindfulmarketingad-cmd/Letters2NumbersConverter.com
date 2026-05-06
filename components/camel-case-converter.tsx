"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw } from "lucide-react"
import { convertText, getExamples, countCharacters, countLines } from "@/lib/camel-case-converter"

type CaseFormat = "camelCase" | "PascalCase"

export function CamelCaseConverter() {
  const [input, setInput] = useState("")
  const [format, setFormat] = useState<CaseFormat>("camelCase")

  const output = useMemo(() => {
    return convertText(input, format)
  }, [input, format])

  const inputCharCount = countCharacters(input)
  const inputLineCount = countLines(input)
  const outputCharCount = countCharacters(output)

  const handleTryExample = () => {
    const examples = getExamples(format)
    setInput(examples)
  }

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output)
    }
  }

  const clearAll = () => {
    setInput("")
  }

  const toggleFormat = (newFormat: CaseFormat) => {
    setFormat(newFormat)
  }

  return (
    <div className="w-full space-y-6">
      {/* Format Toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => toggleFormat("camelCase")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            format === "camelCase"
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          camelCase
        </button>
        <button
          onClick={() => toggleFormat("PascalCase")}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            format === "PascalCase"
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-muted hover:bg-muted/80 text-foreground"
          }`}
        >
          PascalCase
        </button>
      </div>

      {/* Input/Output Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Input */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-foreground">Input Text</label>
            <span className="text-xs text-muted-foreground">{inputCharCount} chars</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste text here... Supports multiple lines for batch conversion"
            className="flex-1 min-h-64 p-4 border border-border rounded-lg bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">• space separated • snake_case • kebab-case</p>
        </div>

        {/* Output */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-foreground">Output ({format})</label>
            <span className="text-xs text-muted-foreground">{outputCharCount} chars</span>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="Converted text appears here..."
            className="flex-1 min-h-64 p-4 border border-border rounded-lg bg-card text-foreground font-mono text-sm focus:outline-none resize-none"
          />
          <p className="text-xs text-muted-foreground mt-2">Read-only: Your updates will be shown here</p>
        </div>
      </div>

      {/* Info Message */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Start typing or click &apos;Try Example&apos; to see the conversion in action</p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={handleTryExample}
          className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium text-foreground"
        >
          Try Example
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!output}
          className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy to Clipboard
        </button>
        <button
          onClick={clearAll}
          className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium text-foreground"
        >
          Clear All
        </button>
      </div>

      {/* Format Examples */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Format Examples</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Space Separated */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">SPACE SEPARATED</p>
            <div className="text-foreground">hello world</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500">{format === "camelCase" ? "helloWorld" : "HelloWorld"}</div>
          </div>

          {/* Snake Case */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">SNAKE_CASE</p>
            <div className="text-foreground">user_profile_data</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500">{format === "camelCase" ? "userProfileData" : "UserProfileData"}</div>
          </div>

          {/* Kebab Case */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">KEBAB-CASE</p>
            <div className="text-foreground">my-page-component</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500">{format === "camelCase" ? "myPageComponent" : "MyPageComponent"}</div>
          </div>

          {/* Pascal Case */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">PASCALCASE MODE</p>
            <div className="text-foreground">user_settings</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500">{format === "camelCase" ? "userSettings" : "UserSettings"}</div>
          </div>

          {/* Multiple Words */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">MIXED FORMAT</p>
            <div className="text-foreground">product_name-field</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500">{format === "camelCase" ? "productNameField" : "ProductNameField"}</div>
          </div>

          {/* Batch Processing */}
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-xs space-y-2">
            <p className="font-semibold text-muted-foreground">BATCH MODE (MULTIPLE LINES)</p>
            <div className="text-foreground text-[10px]">hello_world<br/>user_name<br/>api_key</div>
            <div className="text-muted-foreground">→</div>
            <div className="text-orange-500 text-[10px]">{format === "camelCase" ? "helloWorld\nuserName\napiKey" : "HelloWorld\nUserName\nApiKey"}</div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
