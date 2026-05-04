"use client"

import { useState, useCallback, useMemo, useRef } from "react"
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

type ConversionMode = "letters-to-numbers" | "numbers-to-letters"
type CodeType = "a1" | "a0" | "ascii" | "hex" | "binary"

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
  bosnian: { name: "Bosnian", nativeName: "Bosanski", alphabet: "ABCČĆDĐEFGHIJKLMNOPRSŠTUVZŽ" },
  croatian: { name: "Croatian", nativeName: "Hrvatski", alphabet: "ABCČĆDĐEFGHIJKLMNOPRSŠTUVZŽ" },
  czech: { name: "Czech", nativeName: "Čeština", alphabet: "AÁBCČDĎEÉĚFGHIÍJKLMNŇOÓPQRŘSŠTŤUÚŮVWXYÝZŽ" },
  danish: { name: "Danish", nativeName: "Dansk", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ" },
  dutch: { name: "Dutch", nativeName: "Nederlands", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  finnish: { name: "Finnish", nativeName: "Suomi", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ" },
  french: { name: "French", nativeName: "Français", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  german: { name: "German", nativeName: "Deutsch", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß" },
  greek: { name: "Greek", nativeName: "Ελληνικά", alphabet: "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ" },
  hebrew: { name: "Hebrew", nativeName: "עברית", alphabet: "אבגדהוזחטיכלמנסעפצקרשת" },
  hungarian: { name: "Hungarian", nativeName: "Magyar", alphabet: "AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ" },
  icelandic: { name: "Icelandic", nativeName: "Íslenska", alphabet: "AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ" },
  italian: { name: "Italian", nativeName: "Italiano", alphabet: "ABCDEFGHILMNOPQRSTUVZ" },
  norwegian: { name: "Norwegian", nativeName: "Norsk", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ" },
  polish: { name: "Polish", nativeName: "Polski", alphabet: "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUWYZŹŻ" },
  portuguese: { name: "Portuguese", nativeName: "Português", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
  romanian: { name: "Romanian", nativeName: "Română", alphabet: "AĂÂBCDEFGHIÎJKLMNOPQRSȘTȚUVWXYZ" },
  russian: { name: "Russian", nativeName: "Русский", alphabet: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ" },
  serbian: { name: "Serbian", nativeName: "Srpski", alphabet: "АБВГДЂЕЖЗИЈКЛЉМНЊОПРСТЋУФХЦЧЏШ" },
  slovak: { name: "Slovak", nativeName: "Slovenčina", alphabet: "AÁÄBCČDĎEÉFGHIÍJKLĹĽMNŇOÓÔPQRŔSŠTŤUÚVWXYÝZŽ" },
  spanish: { name: "Spanish", nativeName: "Español", alphabet: "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" },
  swedish: { name: "Swedish", nativeName: "Svenska", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ" },
  turkish: { name: "Turkish", nativeName: "Türkçe", alphabet: "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ" },
  ukrainian: { name: "Ukrainian", nativeName: "Українська", alphabet: "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ" },
}

const codeTypes: Record<CodeType, string> = {
  a1: "A=1, B=2, C=3, ...",
  a0: "A=0, B=1, C=2, ...",
  ascii: "ASCII",
  hex: "HEX ASCII",
  binary: "BINARY ASCII",
}

export function LetterNumberConverter() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<ConversionMode>("letters-to-numbers")
  const [language, setLanguage] = useState("english")
  const [codeType, setCodeType] = useState<CodeType>("a1")
  const [isLargeEditor, setIsLargeEditor] = useState(false)
  const [workspace, setWorkspace] = useState<WorkspaceItem[]>([])
  const [showWorkspaceDialog, setShowWorkspaceDialog] = useState(false)
  const [saveDialogOpen, setSaveDialogOpen] = useState(false)
  const [saveName, setSaveName] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const currentAlphabet = languages[language].alphabet

  const convertLetterToNumber = useCallback(
    (char: string): string => {
      const upperChar = char.toUpperCase()
      const index = currentAlphabet.indexOf(upperChar)
      
      if (index === -1) {
        if (char === " ") return " "
        return char
      }

      switch (codeType) {
        case "a1":
          return String(index + 1)
        case "a0":
          return String(index)
        case "ascii":
          return String(char.charCodeAt(0))
        case "hex":
          return char.charCodeAt(0).toString(16).toUpperCase()
        case "binary":
          return char.charCodeAt(0).toString(2).padStart(8, "0")
        default:
          return String(index + 1)
      }
    },
    [currentAlphabet, codeType]
  )

  const convertLettersToNumbers = useCallback(
    (text: string): string => {
      return text
        .split("")
        .map((char) => convertLetterToNumber(char))
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    },
    [convertLetterToNumber]
  )

  const convertNumberToLetter = useCallback(
    (num: string): string => {
      const n = parseInt(num, 10)
      
      switch (codeType) {
        case "a1":
          if (n >= 1 && n <= currentAlphabet.length) {
            return currentAlphabet[n - 1]
          }
          break
        case "a0":
          if (n >= 0 && n < currentAlphabet.length) {
            return currentAlphabet[n]
          }
          break
        case "ascii":
          if (n >= 32 && n <= 127) {
            return String.fromCharCode(n)
          }
          break
        case "hex":
          const hexNum = parseInt(num, 16)
          if (!isNaN(hexNum) && hexNum >= 32 && hexNum <= 127) {
            return String.fromCharCode(hexNum)
          }
          break
        case "binary":
          const binNum = parseInt(num, 2)
          if (!isNaN(binNum) && binNum >= 32 && binNum <= 127) {
            return String.fromCharCode(binNum)
          }
          break
      }
      return num
    },
    [currentAlphabet, codeType]
  )

  const convertNumbersToLetters = useCallback(
    (text: string): string => {
      const numbers = text.split(/[\s,]+/).filter((n) => n.trim() !== "")
      return numbers.map((num) => convertNumberToLetter(num)).join("")
    },
    [convertNumberToLetter]
  )

  const output = useMemo(() => {
    return mode === "letters-to-numbers"
      ? convertLettersToNumbers(input)
      : convertNumbersToLetters(input)
  }, [mode, input, convertLettersToNumbers, convertNumbersToLetters])

  const switchMode = () => {
    setMode((prev) =>
      prev === "letters-to-numbers" ? "numbers-to-letters" : "letters-to-numbers"
    )
    setInput("")
  }

  // Options handlers
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(input)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const copyOutputToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output)
    } catch (err) {
      console.error("Failed to copy:", err)
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

  const saveToWorkspace = () => {
    if (!input.trim()) return
    setSaveDialogOpen(true)
  }

  const confirmSaveToWorkspace = () => {
    const newItem: WorkspaceItem = {
      id: Date.now().toString(),
      name: saveName || `Save ${workspace.length + 1}`,
      content: input,
      timestamp: Date.now(),
    }
    setWorkspace([...workspace, newItem])
    setSaveDialogOpen(false)
    setSaveName("")
  }

  const chooseFromWorkspace = () => {
    setShowWorkspaceDialog(true)
  }

  const loadFromWorkspace = (item: WorkspaceItem) => {
    setInput(item.content)
    setShowWorkspaceDialog(false)
  }

  const deleteFromWorkspace = (id: string) => {
    setWorkspace(workspace.filter(item => item.id !== id))
  }

  const downloadAsFile = () => {
    const content = `Input:\n${input}\n\nOutput:\n${output}`
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "letter-number-conversion.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const toggleLargeEditor = () => {
    setIsLargeEditor(!isLargeEditor)
  }

  const inputLabel = mode === "letters-to-numbers" ? "Letters" : "Numbers"
  const outputLabel = mode === "letters-to-numbers" ? "Numbers" : "Letters"
  const switchText = mode === "letters-to-numbers" ? "Numbers to Letters" : "Letters to Numbers"

  const placeholderText =
    mode === "letters-to-numbers"
      ? "Type letters here..."
      : "Enter numbers here..."

  return (
    <>
      <div className={`w-full mx-auto transition-all duration-300 ${isLargeEditor ? "max-w-7xl" : "max-w-4xl"}`}>
        {/* Switch Mode Link */}
        <div className="mb-6">
          <span className="text-sm text-muted-foreground">Switch to </span>
          <button
            onClick={switchMode}
            className="text-sm text-primary hover:underline font-medium"
          >
            {switchText}
          </button>
          <span className="text-sm text-muted-foreground">.</span>
        </div>

        {/* Language and Alphabet Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Language
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between bg-card border-border text-foreground hover:bg-secondary"
                >
                  {languages[language].name} ({languages[language].nativeName})
                  <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 max-h-80 overflow-y-auto">
                {Object.entries(languages).map(([key, lang]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setLanguage(key)}
                    className={language === key ? "bg-primary/10" : ""}
                  >
                    {lang.name} ({lang.nativeName})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Alphabet
            </label>
            <div className="w-full p-2.5 bg-card border border-border rounded-md text-foreground font-mono text-sm overflow-x-auto whitespace-nowrap">
              {currentAlphabet}
            </div>
          </div>
        </div>

        {/* Code Type */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-foreground mb-2">
            Code Type
          </label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between bg-card border-border text-foreground hover:bg-secondary"
              >
                {codeTypes[codeType]}
                <ChevronDown className="h-4 w-4 ml-2 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full">
              {Object.entries(codeTypes).map(([key, label]) => (
                <DropdownMenuItem
                  key={key}
                  onClick={() => setCodeType(key as CodeType)}
                  className={codeType === key ? "bg-primary/10" : ""}
                >
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Input Area */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-foreground">{inputLabel}</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  Options
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={copyToClipboard}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy to clipboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={saveToWorkspace}>
                  <Save className="h-4 w-4 mr-2" />
                  Save to workspace
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={pasteFromClipboard}>
                  <ClipboardPaste className="h-4 w-4 mr-2" />
                  Paste from clipboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={chooseFromWorkspace}>
                  <FolderOpen className="h-4 w-4 mr-2" />
                  Choose from workspace...
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={toggleLargeEditor}>
                  <Pencil className="h-4 w-4 mr-2" />
                  {isLargeEditor ? "Close large editor" : "Open large editor"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={downloadAsFile}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholderText}
            className={`w-full p-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y font-mono transition-all ${isLargeEditor ? "h-64" : "h-32"}`}
            aria-label={`${inputLabel} input`}
          />
        </div>

        {/* Output Area */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <label className="text-lg font-bold text-foreground">{outputLabel}</label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  Options
                  <ChevronDown className="h-3 w-3 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={copyOutputToClipboard}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy to clipboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={downloadAsFile}>
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <textarea
            value={output}
            readOnly
            className={`w-full p-3 bg-secondary/50 border border-border rounded-lg text-foreground font-mono resize-y ${isLargeEditor ? "h-64" : "h-32"}`}
            aria-label={`${outputLabel} output`}
          />
        </div>

        {/* Reference Table */}
        <div>
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
            Reference Table ({languages[language].name})
          </h2>
          <div className="overflow-x-auto">
            <div className="inline-flex gap-1 pb-2">
              {currentAlphabet.split("").map((letter, i) => {
                let value: string
                switch (codeType) {
                  case "a1":
                    value = String(i + 1)
                    break
                  case "a0":
                    value = String(i)
                    break
                  case "ascii":
                    value = String(letter.charCodeAt(0))
                    break
                  case "hex":
                    value = letter.charCodeAt(0).toString(16).toUpperCase()
                    break
                  case "binary":
                    value = letter.charCodeAt(0).toString(2)
                    break
                  default:
                    value = String(i + 1)
                }
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-2 min-w-10 bg-card border border-border rounded-md hover:border-primary/50 transition-colors"
                  >
                    <span className="text-sm font-bold text-foreground">{letter}</span>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Workspace Dialog */}
      <Dialog open={showWorkspaceDialog} onOpenChange={setShowWorkspaceDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose from Workspace</DialogTitle>
          </DialogHeader>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {workspace.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No saved items in workspace. Save some text first.
              </p>
            ) : (
              workspace.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <button
                    onClick={() => loadFromWorkspace(item)}
                    className="flex-1 text-left"
                  >
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-xs">
                      {item.content.substring(0, 50)}...
                    </p>
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteFromWorkspace(item.id)}
                    className="ml-2"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Save Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save to Workspace</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Name (optional)
              </label>
              <input
                type="text"
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Enter a name for this save..."
                className="w-full p-2 bg-card border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={confirmSaveToWorkspace}>
                Save
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
