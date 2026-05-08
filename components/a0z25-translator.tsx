"use client"

import { useState, useCallback, useMemo, useRef, useEffect } from "react"
import { Copy, ClipboardPaste, FolderOpen, Pencil, Download, Save, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useInstantTrackUsage } from "@/lib/use-instant-track-usage"
import { UpgradeModal } from "@/components/upgrade-modal"

type ConversionMode = "letters-to-numbers" | "numbers-to-letters"
type CodeType = "a0" | "a1" | "ascii" | "hex" | "binary"

interface Language {
  name: string
  nativeName: string
  alphabet: string
}

interface WorkspaceItem {
  id: string
  name: string
  content: string
  timestamp: number
}

const languages: Record<string, Language> = {
  english: { name: "English", nativeName: "English", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
}

const codeTypes: Record<CodeType, string> = {
  a0: "A=0, B=1, C=2, ...",
  a1: "A=1, B=2, C=3, ...",
  ascii: "ASCII",
  hex: "HEX ASCII",
  binary: "BINARY ASCII",
}

export function A0Z25Translator() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<ConversionMode>("letters-to-numbers")
  const [language, setLanguage] = useState("english")
  const [codeType, setCodeType] = useState<CodeType>("a0")
  const [isLargeEditor, setIsLargeEditor] = useState(false)
  const [workspace, setWorkspace] = useState<WorkspaceItem[]>([])
  const [showWorkspaceDialog, setShowWorkspaceDialog] = useState(false)
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [workspaceName, setWorkspaceName] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const { scheduleTracking, resetTracking, showUpgradeModal, setShowUpgradeModal, remainingUses } = useInstantTrackUsage("A0Z25 Translator")

  const alphabet = useMemo(() => languages[language]?.alphabet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ", [language])

  // Track usage when output changes (debounced)
  useEffect(() => {
    if (input.trim()) {
      scheduleTracking()
    } else {
      resetTracking()
    }
  }, [input, scheduleTracking, resetTracking])

  const convert = useCallback(() => {
    let result = ""

    if (mode === "letters-to-numbers") {
      const chars = input.toUpperCase().split("")
      const converted: string[] = []

      chars.forEach((char) => {
        if (alphabet.includes(char)) {
          const index = alphabet.indexOf(char)
          const value = codeType === "a0" ? index : index + 1

          switch (codeType) {
            case "ascii":
              converted.push(char.charCodeAt(0).toString())
              break
            case "hex":
              converted.push(char.charCodeAt(0).toString(16).toUpperCase())
              break
            case "binary":
              converted.push(char.charCodeAt(0).toString(2).padStart(8, "0"))
              break
            default:
              converted.push(value.toString())
          }
        } else if (char === " ") {
          converted.push("|")
        }
      })

      result = converted.join("-")
    } else {
      const parts = input.split(/[\s-]+/).filter((p) => p.length > 0)
      const converted: string[] = []

      parts.forEach((part) => {
        try {
          let charCode = 0

          if (codeType === "ascii") {
            charCode = parseInt(part, 10)
          } else if (codeType === "hex") {
            charCode = parseInt(part, 16)
          } else if (codeType === "binary") {
            charCode = parseInt(part, 2)
          } else {
            const num = parseInt(part, 10)
            const offset = codeType === "a0" ? 0 : -1
            charCode = num + offset + 65
          }

          if (charCode >= 65 && charCode <= 90) {
            converted.push(String.fromCharCode(charCode))
          }
        } catch {
          // Skip invalid conversions
        }
      })

      result = converted.join("")
    }

    return result
  }, [input, mode, codeType, alphabet])

  const output = useMemo(() => convert(), [convert])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  const pasteFromClipboard = async () => {
    const text = await navigator.clipboard.readText()
    setInput(text)
  }

  const downloadAsFile = () => {
    const element = document.createElement("a")
    const file = new Blob([output], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `a0z25-translation-${Date.now()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const saveToWorkspace = () => {
    setSaveDialogOpen(true)
  }

  const confirmSave = () => {
    if (workspaceName.trim()) {
      setWorkspace([
        ...workspace,
        {
          id: Math.random().toString(36).substr(2, 9),
          name: workspaceName,
          content: output,
          timestamp: Date.now(),
        },
      ])
      setWorkspaceName("")
      setSaveDialogOpen(false)
    }
  }

  const loadFromWorkspace = (id: string) => {
    const item = workspace.find((w) => w.id === id)
    if (item) {
      setInput(item.content)
      setShowWorkspaceDialog(false)
    }
  }

  const deleteFromWorkspace = (id: string) => {
    setWorkspace(workspace.filter((w) => w.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Mode and Type Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Conversion Mode</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {mode === "letters-to-numbers" ? "Letters to Numbers" : "Numbers to Letters"}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem onClick={() => setMode("letters-to-numbers")}>
                Letters to Numbers
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMode("numbers-to-letters")}>
                Numbers to Letters
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground block mb-2">Encoding Type</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {codeTypes[codeType]}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              {Object.entries(codeTypes).map(([key, value]) => (
                <DropdownMenuItem key={key} onClick={() => setCodeType(key as CodeType)}>
                  {value}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Input Textarea */}
      <div>
        <label htmlFor="input" className="text-sm font-medium text-foreground block mb-2">
          Input
        </label>
        <textarea
          ref={textareaRef}
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={`w-full border border-border rounded-lg p-4 bg-background text-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary ${
            isLargeEditor ? "h-96" : "h-48"
          }`}
          placeholder={mode === "letters-to-numbers" ? "Enter text here..." : "Enter numbers here..."}
        />
      </div>

      {/* Output Textarea */}
      <div>
        <label htmlFor="output" className="text-sm font-medium text-foreground block mb-2">
          Output
        </label>
        <textarea
          id="output"
          value={output}
          readOnly
          className={`w-full border border-border rounded-lg p-4 bg-card text-foreground font-mono text-sm focus:outline-none ${
            isLargeEditor ? "h-96" : "h-48"
          }`}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={copyToClipboard} variant="outline" size="sm" className="gap-2">
          <Copy className="w-4 h-4" />
          Copy
        </Button>
        <Button onClick={pasteFromClipboard} variant="outline" size="sm" className="gap-2">
          <ClipboardPaste className="w-4 h-4" />
          Paste
        </Button>
        <Button onClick={downloadAsFile} variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download
        </Button>
        <Button onClick={saveToWorkspace} variant="outline" size="sm" className="gap-2">
          <Save className="w-4 h-4" />
          Save
        </Button>
        <Button onClick={() => setShowWorkspaceDialog(true)} variant="outline" size="sm" className="gap-2">
          <FolderOpen className="w-4 h-4" />
          Workspace ({workspace.length})
        </Button>
        <Button
          onClick={() => setIsLargeEditor(!isLargeEditor)}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Pencil className="w-4 h-4" />
          {isLargeEditor ? "Compact" : "Expand"}
        </Button>
      </div>

      {/* Save Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save to Workspace</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Enter a name for this translation"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              className="w-full border border-border rounded-lg px-4 py-2 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={confirmSave}>Save</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Workspace Dialog */}
      <Dialog open={showWorkspaceDialog} onOpenChange={setShowWorkspaceDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Workspace</DialogTitle>
          </DialogHeader>
          {workspace.length === 0 ? (
            <p className="text-muted-foreground">No saved translations yet</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {workspace.map((item) => (
                <div key={item.id} className="flex items-center justify-between gap-2 p-3 bg-card rounded-lg border border-border">
                  <button
                    onClick={() => loadFromWorkspace(item.id)}
                    className="flex-1 text-left hover:text-primary transition-colors"
                  >
                    <p className="font-medium text-foreground truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleDateString()}
                    </p>
                  </button>
                  <button
                    onClick={() => deleteFromWorkspace(item.id)}
                    className="p-2 hover:bg-red-500/10 text-red-500 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Remaining Uses Display */}
      {remainingUses !== null && remainingUses > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Remaining uses today: <span className="font-bold">{remainingUses}</span>
          </p>
        </div>
      )}

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  )
}
