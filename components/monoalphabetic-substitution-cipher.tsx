"use client"

import { useState, useMemo } from "react"
import { RefreshCw, Shuffle, Copy, Check, ChevronDown, ChevronUp } from "lucide-react"

export function MonoalphabeticSubstitutionCipher() {
  const [language, setLanguage] = useState("english")
  const [mode, setMode] = useState<"manual" | "autosolver">("manual")
  const [input, setInput] = useState("")
  const [alphabet, setAlphabet] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const [key, setKey] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  const [expandFrequency, setExpandFrequency] = useState(false)
  const [expandSolver, setExpandSolver] = useState(false)
  const [copied, setCopied] = useState(false)

  const originalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  // Calculate letter frequencies from input
  const letterFrequencies = useMemo(() => {
    const freq: Record<string, number> = {}
    const inputUpper = input.toUpperCase()
    
    for (const char of inputUpper) {
      if (/[A-Z]/.test(char)) {
        freq[char] = (freq[char] || 0) + 1
      }
    }

    return Object.entries(freq)
      .map(([letter, count]) => ({
        letter,
        count,
        percentage: ((count / inputUpper.replace(/[^A-Z]/g, "").length) * 100).toFixed(1),
      }))
      .sort((a, b) => b.count - a.count)
  }, [input])

  // Encrypt/Decrypt function
  const processText = (text: string, isEncrypt: boolean = true): string => {
    return text
      .toUpperCase()
      .split("")
      .map(char => {
        if (!/[A-Z]/.test(char)) return char
        
        if (isEncrypt) {
          const index = originalAlphabet.indexOf(char)
          return index >= 0 ? key[index] : char
        } else {
          const index = key.indexOf(char)
          return index >= 0 ? originalAlphabet[index] : char
        }
      })
      .join("")
  }

  const output = processText(input, mode === "manual")

  // Control functions
  const clearKey = () => setKey(originalAlphabet)

  const randomizeKey = () => {
    const arr = originalAlphabet.split("")
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    setKey(arr.join(""))
  }

  const invertKey = () => {
    const newKey = Array(26).fill("")
    for (let i = 0; i < key.length; i++) {
      const targetIndex = originalAlphabet.indexOf(key[i])
      newKey[targetIndex] = originalAlphabet[i]
    }
    setKey(newKey.join(""))
  }

  const updateKeyLetter = (index: number, value: string) => {
    const upper = value.toUpperCase()
    if (upper.length === 0) {
      const newKey = key.split("")
      newKey[index] = ""
      setKey(newKey.join(""))
    } else if (/^[A-Z]$/.test(upper)) {
      const newKey = key.split("")
      newKey[index] = upper
      setKey(newKey.join(""))
    }
  }

  const copyOutput = () => {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetAlphabet = () => setAlphabet(originalAlphabet)

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      {/* Language and Alphabet */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Language
          </label>
          <p className="text-xs text-muted-foreground mb-2">
            Note: Autosolver supports fewer languages.
          </p>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:border-primary"
          >
            <option value="english">English (English)</option>
            <option value="german">German (Deutsch)</option>
            <option value="french">French (Français)</option>
            <option value="spanish">Spanish (Español)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Alphabet
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={alphabet}
              onChange={(e) => setAlphabet(e.target.value.toUpperCase())}
              className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-foreground text-sm focus:outline-none focus:border-primary font-mono"
            />
            <button
              onClick={resetAlphabet}
              className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium whitespace-nowrap"
            >
              Original ({originalAlphabet.length})
            </button>
          </div>
        </div>
      </div>

      {/* Mode Selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          Manual/autosolver mode
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => setMode("manual")}
            className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all font-medium flex items-center justify-center gap-2 ${
              mode === "manual"
                ? "bg-primary border-primary text-primary-foreground"
                : "bg-background border-border text-foreground hover:border-primary/50"
            }`}
          >
            ✏️ Manual
          </button>
          <button
            onClick={() => setMode("autosolver")}
            className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all font-medium flex items-center justify-center gap-2 ${
              mode === "autosolver"
                ? "bg-primary border-primary text-primary-foreground"
                : "bg-background border-border text-foreground hover:border-primary/50"
            }`}
          >
            🤖 Autosolver
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          {mode === "manual"
            ? "Manual mode: Enter text and fill the mapping one by one or string."
            : "Autosolver mode: Use automatic solver to crack the cipher."}
        </p>
      </div>

      {/* Input Area */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">
          Ciphertext or plaintext
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste the substitution cipher text or plaintext here..."
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
          rows={5}
        />
      </div>

      {/* Letter Translations */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-foreground">Letter translations</h3>
          <div className="flex gap-2">
            <button
              onClick={clearKey}
              className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Clear key
            </button>
            <button
              onClick={randomizeKey}
              className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-1"
            >
              <Shuffle className="w-3 h-3" />
              Randomize key
            </button>
            <button
              onClick={invertKey}
              className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            >
              Invert key
            </button>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">
          This is a monoalphabetic string. The string and the grid below stay in sync. Unassigned letters are shown in grey.
        </p>

        {/* Key Display */}
        <div className="mb-4 p-3 bg-background border border-border rounded-lg">
          <div className="font-mono text-center text-sm tracking-widest break-all">
            {key}
          </div>
        </div>

        {/* Letter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-2">
          {originalAlphabet.split("").map((letter, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div className="text-xs font-semibold text-muted-foreground text-center w-full">{letter}</div>
              <input
                type="text"
                maxLength={1}
                value={key[idx] || ""}
                onChange={(e) => updateKeyLetter(idx, e.target.value)}
                className="w-8 h-8 text-center font-mono font-bold bg-background border border-border rounded-md focus:border-primary outline-none uppercase"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Output Area */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-foreground">Output</label>
          <button
            onClick={copyOutput}
            className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <textarea
          value={output}
          readOnly
          placeholder="The output will be shown here..."
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
          rows={5}
        />
      </div>

      {/* Letter Frequencies */}
      <div className="border border-border rounded-lg">
        <button
          onClick={() => setExpandFrequency(!expandFrequency)}
          className="w-full px-4 py-3 flex items-center justify-between bg-card hover:bg-card/80 transition-colors rounded-lg"
        >
          <h3 className="font-semibold text-foreground">Letter frequencies</h3>
          {expandFrequency ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>

        {expandFrequency && (
          <div className="p-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              These are the letter frequencies of your input text. They can help you identify common letters and make educated guesses.
              <br />
              Add input text to see letter frequencies.
            </p>

            {letterFrequencies.length > 0 ? (
              <div className="space-y-2">
                {letterFrequencies.map(({ letter, count, percentage }) => (
                  <div key={letter} className="flex items-center gap-3">
                    <div className="w-8 font-mono font-bold text-center">{letter}</div>
                    <div className="flex-1 h-6 bg-background rounded-md overflow-hidden">
                      <div
                        className="h-full bg-primary/50 transition-all"
                        style={{
                          width: `${(count / (letterFrequencies[0]?.count || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground w-12 text-right">
                      {percentage}%
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No letter frequencies available.</p>
            )}
          </div>
        )}
      </div>

      {/* Inplace Solver */}
      <div className="border border-border rounded-lg">
        <button
          onClick={() => setExpandSolver(!expandSolver)}
          className="w-full px-4 py-3 flex items-center justify-between bg-card hover:bg-card/80 transition-colors rounded-lg"
        >
          <h3 className="font-semibold text-foreground">Inplace solver</h3>
          {expandSolver ? (
            <ChevronUp className="w-5 h-5 text-muted-foreground" />
          ) : (
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          )}
        </button>

        {expandSolver && (
          <div className="p-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Here you can easily test assigning letters directly and see the results. Your edits here are automatically synced with the letter translations and above.
              <br />
              Add input text to try the inplace solver.
            </p>

            {input.length > 0 && (
              <div className="mt-4 p-3 bg-background border border-border rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Click on output letters to assign them:</p>
                <div className="font-mono text-center text-sm break-all leading-relaxed">
                  {output.split("").map((char, idx) => (
                    <span
                      key={idx}
                      onClick={() => {
                        if (/[A-Z]/.test(char)) {
                          const inputChar = input.toUpperCase()[idx]
                          if (/[A-Z]/.test(inputChar)) {
                            updateKeyLetter(
                              originalAlphabet.indexOf(inputChar),
                              char
                            )
                          }
                        }
                      }}
                      className={`cursor-pointer hover:bg-primary/20 px-1 py-0.5 rounded transition-colors ${
                        /[A-Z]/.test(char) ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
