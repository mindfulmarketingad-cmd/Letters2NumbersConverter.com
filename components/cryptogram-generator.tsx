"use client"

import { useState } from "react"
import { Lock, Share2, Copy, RotateCcw, Zap, Lightbulb, Flame } from "lucide-react"
import { generateCryptogram, FAMOUS_QUOTES, CryptogramData } from "@/lib/cryptogram-generator"

export default function CryptogramGenerator() {
  const [customText, setCustomText] = useState("")
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium')
  const [cryptogram, setCryptogram] = useState<CryptogramData | null>(null)
  const [copied, setCopied] = useState(false)

  const handleQuickExample = (quote: string) => {
    setCustomText(quote)
    setSelectedQuote(quote)
  }

  const handleCustomText = () => {
    setSelectedQuote(null)
  }

  const generateNew = () => {
    const textToUse = customText.trim()
    if (!textToUse) {
      alert('Please enter some text or select an example')
      return
    }

    const generated = generateCryptogram(textToUse, difficulty)
    setCryptogram(generated)
  }

  const handleCopyShareLink = async () => {
    if (!cryptogram) return
    
    try {
      const data = btoa(JSON.stringify({
        encoded: cryptogram.encoded,
        key: cryptogram.key,
        difficulty: cryptogram.difficulty,
      }))
      const shareUrl = `${window.location.origin}/tools/cryptogram-solver?puzzle=${data}`
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const handleCopyCryptogram = async () => {
    if (!cryptogram) return
    
    try {
      const text = `Cryptogram (${difficulty}):\n${cryptogram.encoded}\n\nOriginal: ${cryptogram.original}`
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  const difficultyOptions = [
    { value: 'easy' as const, label: 'Easy (Most letters revealed)', icon: <Lightbulb className="w-4 h-4" /> },
    { value: 'medium' as const, label: 'Medium (Some hints)', icon: <Zap className="w-4 h-4" /> },
    { value: 'hard' as const, label: 'Hard (No hints)', icon: <Flame className="w-4 h-4" /> },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Cryptogram Generator</h1>
        <p className="text-lg text-muted-foreground">
          Create custom cryptogram generator puzzles to challenge your friends. Enter any text and generate an encrypted puzzle with difficulty levels.
        </p>
      </div>

      {/* Quick Examples */}
      <div className="bg-primary/10 border-2 border-dashed border-primary/30 rounded-xl p-6 mb-8">
        <h2 className="text-primary font-semibold mb-4">Quick examples — click to auto-fill:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          <button
            onClick={() => handleQuickExample(FAMOUS_QUOTES[Math.floor(Math.random() * 5)])}
            className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold flex items-center gap-2 justify-center"
          >
            <Lightbulb className="w-5 h-5" />
            Random Quote (Easy)
          </button>
          <button
            onClick={() => handleQuickExample(FAMOUS_QUOTES[Math.floor(Math.random() * 10)])}
            className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold flex items-center gap-2 justify-center"
          >
            <Zap className="w-5 h-5" />
            Random Quote (Medium)
          </button>
          <button
            onClick={() => handleQuickExample(FAMOUS_QUOTES[Math.floor(Math.random() * 15)])}
            className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold flex items-center gap-2 justify-center"
          >
            <Flame className="w-5 h-5" />
            Random Quote (Hard)
          </button>
          <button
            onClick={handleCustomText}
            className="px-4 py-3 bg-white border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold flex items-center gap-2 justify-center"
          >
            <RotateCcw className="w-5 h-5" />
            Custom Text
          </button>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="mb-6">
          <label className="block text-sm font-semibold text-foreground mb-2">Enter or paste your text:</label>
          <textarea
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            placeholder="Enter any text or quote to turn into a cryptogram..."
            maxLength={500}
            className="w-full h-24 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none"
          />
          <div className="text-xs text-muted-foreground mt-1">{customText.length}/500 characters</div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-foreground mb-3">Difficulty Level:</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {difficultyOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setDifficulty(option.value)}
                className={`px-4 py-3 rounded-lg border-2 font-semibold flex items-center gap-2 transition-colors ${
                  difficulty === option.value
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'bg-background border-border text-foreground hover:border-primary/50'
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateNew}
          disabled={!customText.trim()}
          className="w-full px-6 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 justify-center text-lg"
        >
          <Lock className="w-5 h-5" />
          Generate Cryptogram
        </button>
      </div>

      {/* Results */}
      {cryptogram && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-foreground mb-2">Encrypted Cryptogram:</h2>
            <div className="bg-background border-2 border-primary/30 rounded-lg p-6">
              <p className="text-2xl font-mono text-foreground text-center leading-relaxed break-words">
                {cryptogram.encoded}
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground mb-2">Solution (Keep secret!):</h2>
            <div className="bg-background border-2 border-border rounded-lg p-6">
              <p className="text-lg font-mono text-foreground break-words">
                {cryptogram.original}
              </p>
            </div>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">
              <span className="font-semibold">Difficulty:</span> {cryptogram.difficulty.charAt(0).toUpperCase() + cryptogram.difficulty.slice(1)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopyShareLink}
              className="px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-semibold flex items-center gap-2 justify-center"
            >
              <Share2 className="w-4 h-4" />
              {copied ? 'Link Copied!' : 'Share Puzzle'}
            </button>
            <button
              onClick={handleCopyCryptogram}
              className="px-4 py-3 bg-background border border-border text-foreground rounded-lg hover:bg-card transition-colors font-semibold flex items-center gap-2 justify-center"
            >
              <Copy className="w-4 h-4" />
              Copy Cryptogram
            </button>
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-8 bg-secondary/10 border border-secondary/20 rounded-lg p-6">
        <h3 className="font-semibold text-foreground mb-3">How Cryptograms Work:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">1. Substitution:</span>
            <span>Each letter is replaced with another letter consistently throughout the message.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">2. Difficulty:</span>
            <span>Choose Easy for hints, Medium for some revealed letters, or Hard for no hints.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">3. Share:</span>
            <span>Share your cryptogram via link or copy the puzzle text to send to friends.</span>
          </li>
          <li className="flex gap-3">
            <span className="font-semibold text-foreground min-w-fit">4. Solve:</span>
            <span>Solvers can figure out the letter substitution to reveal the original message.</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
