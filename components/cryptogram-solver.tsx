"use client"

import { useState } from "react"
import { Copy, RotateCcw, Zap } from "lucide-react"
import {
  removeText,
  changeCase,
  makeGroups,
  findPossibleWords,
  analyzeCipherText,
} from "@/lib/cryptogram-solver"

export default function CryptogramSolver() {
  const [cipherText, setCipherText] = useState("")
  const [groupSize, setGroupSize] = useState(5)
  const [lineBreakAfter, setLineBreakAfter] = useState(10)
  const [copied, setCopied] = useState(false)

  const handleRemove = (what: 'letters' | 'numbers' | 'whitespace' | 'other') => {
    setCipherText(removeText(cipherText, what))
  }

  const handleChangeCase = (caseType: 'lowercase' | 'uppercase' | 'titlecase' | 'naturalcase' | 'swapcase' | 'reverse') => {
    setCipherText(changeCase(cipherText, caseType))
  }

  const handleMakeGroups = () => {
    setCipherText(makeGroups(cipherText, groupSize, lineBreakAfter))
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cipherText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error("Failed to copy")
    }
  }

  const handleReset = () => {
    setCipherText("")
  }

  const frequency = analyzeCipherText(cipherText)
  const frequencyChars = Object.entries(frequency).slice(0, 10)

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Cryptogram Solver</h1>
        <p className="text-lg text-muted-foreground">
          The cryptogram solver tool helps you solve substitution cipher puzzles easily. Paste your cipher text and use interactive tools to manipulate, analyze, and decode the message.
        </p>
      </div>

      {/* Main Input */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <label className="block text-sm font-semibold text-foreground mb-3">The cipher text to decode:</label>
        <textarea
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
          placeholder="Paste your cryptogram here..."
          rows={8}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none font-mono"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Text Manipulation */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-foreground mb-4">Text Manipulation</h2>

            {/* Remove Options */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Remove:</p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { label: "letters", value: "letters" as const },
                    { label: "numbers", value: "numbers" as const },
                    { label: "whitespace", value: "whitespace" as const },
                    { label: "other things", value: "other" as const },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleRemove(option.value)}
                    className="px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 underline transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Case Options */}
            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Change:</p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { label: "lowercase", value: "lowercase" as const },
                    { label: "Natural case", value: "naturalcase" as const },
                    { label: "Title Case", value: "titlecase" as const },
                    { label: "UPPERCASE", value: "uppercase" as const },
                    { label: "swap case", value: "swapcase" as const },
                    { label: "reverse", value: "reverse" as const },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleChangeCase(option.value)}
                    className="px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 underline transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Group Options */}
            <div className="mb-6">
              <label className="text-sm font-medium text-foreground block mb-3">
                Make groups of{" "}
                <input
                  type="number"
                  value={groupSize}
                  onChange={(e) => setGroupSize(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  max="20"
                  className="w-12 px-2 py-1 bg-background border border-border rounded inline-block ml-1"
                />
                {" "}and next line after{" "}
                <input
                  type="number"
                  value={lineBreakAfter}
                  onChange={(e) => setLineBreakAfter(Math.max(1, parseInt(e.target.value) || 1))}
                  min="1"
                  max="50"
                  className="w-12 px-2 py-1 bg-background border border-border rounded inline-block ml-1"
                />
                {" "}groups
              </label>
              <button
                onClick={handleMakeGroups}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Apply Grouping
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium flex items-center gap-2 justify-center"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied!" : "Copy Text"}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-2 bg-background border border-border text-foreground rounded-lg hover:bg-card transition-colors font-medium flex items-center gap-2 justify-center"
              >
                <RotateCcw className="w-4 h-4" />
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Analysis Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Letter Frequency
            </h2>
            {frequencyChars.length > 0 ? (
              <div className="space-y-2">
                {frequencyChars.map(([char, count]) => (
                  <div key={char} className="flex items-center gap-3">
                    <div className="w-8 font-bold text-lg text-primary">{char}</div>
                    <div className="flex-1 bg-background rounded h-6 overflow-hidden">
                      <div
                        className="bg-primary h-full flex items-center justify-end pr-2 text-xs font-bold text-primary-foreground"
                        style={{
                          width: `${(count / (frequencyChars[0][1] || 1)) * 100}%`,
                        }}
                      >
                        {count > 3 && count}
                      </div>
                    </div>
                    <div className="w-8 text-right text-sm text-muted-foreground">{count}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Enter cipher text to see letter frequency analysis
              </p>
            )}
          </div>

          {/* Tips */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-4 mt-6">
            <h3 className="font-semibold text-foreground text-sm mb-2">Solving Tips:</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Common letters: E, T, A, O, I, N</li>
              <li>• Common digraphs: TH, HE, IN, ER, RE</li>
              <li>• One-letter words: A, I</li>
              <li>• Use frequency analysis</li>
              <li>• Look for patterns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">How to Use the Cryptogram Solver:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">1. Paste cipher:</span>
            <span>Enter the encrypted text in the main textarea</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">2. Analyze:</span>
            <span>Check letter frequencies to identify common letters</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">3. Manipulate:</span>
            <span>Use remove and change options to format the text</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">4. Solve:</span>
            <span>Use the frequency analysis and tips to figure out letter substitutions</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
