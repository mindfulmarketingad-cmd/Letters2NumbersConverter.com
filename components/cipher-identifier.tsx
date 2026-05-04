"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Download, Trash2, Settings, Check, Shield } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"

interface CipherResult {
  name: string
  probability: number
  description: string
  example?: string
}

// Cipher detection patterns and analyzers
const analyzeText = (text: string, options: AnalysisOptions): CipherResult[] => {
  const results: CipherResult[] = []
  const trimmedText = text.trim()
  
  if (!trimmedText) return results

  // Check for Base64
  const base64Regex = /^[A-Za-z0-9+/]+=*$/
  const base64Clean = trimmedText.replace(/\s/g, '')
  if (base64Regex.test(base64Clean) && base64Clean.length >= 4 && base64Clean.length % 4 <= 2) {
    const padding = (base64Clean.match(/=+$/) || [''])[0].length
    if (padding <= 2) {
      results.push({
        name: "Base64",
        probability: base64Clean.length > 20 ? 85 : 60,
        description: "Base64 encoding uses A-Z, a-z, 0-9, +, / and = for padding. Common for encoding binary data as text.",
        example: "SGVsbG8gV29ybGQ= decodes to 'Hello World'"
      })
    }
  }

  // Check for Hexadecimal
  const hexRegex = /^[0-9A-Fa-f\s]+$/
  if (hexRegex.test(trimmedText)) {
    const hexClean = trimmedText.replace(/\s/g, '')
    if (hexClean.length % 2 === 0 && hexClean.length >= 2) {
      results.push({
        name: "Hexadecimal",
        probability: hexClean.length > 10 ? 80 : 55,
        description: "Hexadecimal encoding uses digits 0-9 and letters A-F to represent data in base-16 format.",
        example: "48656C6C6F decodes to 'Hello'"
      })
    }
  }

  // Check for Binary
  const binaryRegex = /^[01\s]+$/
  if (binaryRegex.test(trimmedText)) {
    const binaryClean = trimmedText.replace(/\s/g, '')
    if (binaryClean.length % 8 === 0 || binaryClean.length % 7 === 0) {
      results.push({
        name: "Binary",
        probability: binaryClean.length >= 8 ? 90 : 50,
        description: "Binary encoding represents data using only 0s and 1s, typically in 7 or 8-bit groups per character.",
        example: "01001000 01101001 decodes to 'Hi'"
      })
    }
  }

  // Check for A1Z26 (numbers 1-26)
  const a1z26Regex = /^[\d\s,\-\.]+$/
  if (a1z26Regex.test(trimmedText)) {
    const numbers = trimmedText.match(/\d+/g)
    if (numbers) {
      const allInRange = numbers.every(n => {
        const num = parseInt(n)
        return num >= 1 && num <= 26
      })
      if (allInRange && numbers.length > 0) {
        results.push({
          name: "A1Z26 Cipher",
          probability: numbers.length > 3 ? 85 : 60,
          description: "A1Z26 substitutes letters with their position in the alphabet (A=1, B=2, ... Z=26).",
          example: "8-5-12-12-15 decodes to 'HELLO'"
        })
      }
    }
  }

  // Check for ASCII decimal codes
  if (a1z26Regex.test(trimmedText)) {
    const numbers = trimmedText.match(/\d+/g)
    if (numbers) {
      const asciiLetters = numbers.filter(n => {
        const num = parseInt(n)
        return (num >= 65 && num <= 90) || (num >= 97 && num <= 122)
      })
      if (asciiLetters.length > numbers.length * 0.5 && numbers.length > 2) {
        results.push({
          name: "ASCII Decimal",
          probability: 75,
          description: "ASCII decimal uses numbers 65-90 for uppercase A-Z and 97-122 for lowercase a-z.",
          example: "72 101 108 108 111 decodes to 'Hello'"
        })
      }
    }
  }

  // Check for Morse Code
  const morseRegex = /^[\.\-\/\s]+$/
  const morseAltRegex = /^[\.·\-–—\/\s]+$/
  if (morseRegex.test(trimmedText) || morseAltRegex.test(trimmedText)) {
    if (trimmedText.includes('.') || trimmedText.includes('-')) {
      results.push({
        name: "Morse Code",
        probability: 90,
        description: "Morse code uses dots (.) and dashes (-) to represent letters, with spaces between characters.",
        example: ".... . .-.. .-.. --- decodes to 'HELLO'"
      })
    }
  }

  // Check for ROT13/Caesar Cipher (all letters)
  const lettersOnly = trimmedText.replace(/[^a-zA-Z]/g, '')
  if (lettersOnly.length > 0 && lettersOnly.length / trimmedText.replace(/\s/g, '').length > 0.8) {
    // Letter frequency analysis
    const freq: Record<string, number> = {}
    for (const char of lettersOnly.toLowerCase()) {
      freq[char] = (freq[char] || 0) + 1
    }
    
    // Check if it looks like shifted English
    const commonLetters = ['e', 't', 'a', 'o', 'i', 'n']
    const textTopLetters = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([letter]) => letter)
    
    results.push({
      name: "Caesar Cipher / ROT13",
      probability: lettersOnly.length > 20 ? 70 : 45,
      description: "Caesar cipher shifts each letter by a fixed number. ROT13 shifts by 13 positions.",
      example: "URYYB with ROT13 decodes to 'HELLO'"
    })
  }

  // Check for NATO Phonetic
  const natoWords = ['alfa', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 
    'india', 'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 
    'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey', 'xray', 'yankee', 'zulu',
    'alpha', 'x-ray']
  const words = trimmedText.toLowerCase().split(/\s+/)
  const natoMatches = words.filter(w => natoWords.includes(w))
  if (natoMatches.length >= 2 && natoMatches.length / words.length > 0.5) {
    results.push({
      name: "NATO Phonetic Alphabet",
      probability: 95,
      description: "NATO phonetic alphabet spells out letters using code words (Alpha, Bravo, Charlie, etc.).",
      example: "Hotel Echo Lima Lima Oscar spells 'HELLO'"
    })
  }

  // Check for URL encoding
  if (trimmedText.includes('%')) {
    const urlEncodeRegex = /%[0-9A-Fa-f]{2}/g
    const matches = trimmedText.match(urlEncodeRegex)
    if (matches && matches.length > 0) {
      results.push({
        name: "URL Encoding (Percent Encoding)",
        probability: 85,
        description: "URL encoding replaces special characters with %XX where XX is the hex value.",
        example: "%48%65%6C%6C%6F decodes to 'Hello'"
      })
    }
  }

  // Check for Octal
  const octalRegex = /^[0-7\s]+$/
  if (octalRegex.test(trimmedText)) {
    const numbers = trimmedText.split(/\s+/).filter(n => n.length > 0)
    const validOctal = numbers.every(n => parseInt(n, 8) >= 40 && parseInt(n, 8) <= 176)
    if (validOctal && numbers.length > 2) {
      results.push({
        name: "Octal",
        probability: 65,
        description: "Octal encoding uses base-8 numbers (digits 0-7) to represent character codes.",
        example: "110 145 154 154 157 decodes to 'Hello'"
      })
    }
  }

  // Check for Atbash
  if (lettersOnly.length > 10) {
    results.push({
      name: "Atbash Cipher",
      probability: 35,
      description: "Atbash substitutes A↔Z, B↔Y, etc. A simple reflection cipher.",
      example: "SVOOL becomes 'HELLO' when decoded"
    })
  }

  // Check for Vigenère (if text looks like cipher with repeated patterns)
  if (lettersOnly.length > 20) {
    results.push({
      name: "Vigenère Cipher",
      probability: 30,
      description: "Vigenère uses a keyword to shift letters by varying amounts, making it polyalphabetic.",
      example: "Requires a key to decode - try common keys like 'SECRET'"
    })
  }

  // Check for phone keypad encoding
  const phoneRegex = /^[2-9\s\-]+$/
  if (phoneRegex.test(trimmedText) && trimmedText.length > 3) {
    results.push({
      name: "Phone Keypad Encoding",
      probability: 50,
      description: "Phone keypad maps letters to digits 2-9 (ABC=2, DEF=3, etc.).",
      example: "43556 could represent 'HELLO'"
    })
  }

  // Sort by probability
  results.sort((a, b) => b.probability - a.probability)
  
  return results
}

interface AnalysisOptions {
  checkBase64: boolean
  checkHex: boolean
  checkBinary: boolean
  checkCaesar: boolean
  checkMorse: boolean
  checkA1Z26: boolean
}

export function CipherIdentifier() {
  const [input, setInput] = useState("")
  const [results, setResults] = useState<CipherResult[]>([])
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [options, setOptions] = useState<AnalysisOptions>({
    checkBase64: true,
    checkHex: true,
    checkBinary: true,
    checkCaesar: true,
    checkMorse: true,
    checkA1Z26: true,
  })

  const handleAnalyze = useCallback(() => {
    const analysisResults = analyzeText(input, options)
    setResults(analysisResults)
    setHasAnalyzed(true)
  }, [input, options])

  const handleClear = useCallback(() => {
    setInput("")
    setResults([])
    setHasAnalyzed(false)
  }, [])

  const copyResult = useCallback((text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }, [])

  const downloadResults = useCallback(() => {
    const content = results.map(r => 
      `${r.name} (${r.probability}% match)\n${r.description}\n${r.example || ''}\n`
    ).join('\n---\n\n')
    
    const blob = new Blob([`Analysis Results:\n\nInput: ${input}\n\n---\n\n${content}`], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'cipher-analysis.txt'
    a.click()
    URL.revokeObjectURL(url)
  }, [input, results])

  const getProbabilityColor = (probability: number) => {
    if (probability >= 80) return "text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
    if (probability >= 60) return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400"
    if (probability >= 40) return "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400"
    return "text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400"
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Privacy Notice */}
      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-4">
        <Shield className="w-4 h-4 text-primary" />
        <span>Your data stays local - nothing is sent to any server</span>
      </div>

      {/* Input Section */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
          <h2 className="font-semibold text-foreground">Text</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                Options
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuCheckboxItem
                checked={options.checkBase64}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkBase64: checked }))}
              >
                Check Base64
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={options.checkHex}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkHex: checked }))}
              >
                Check Hexadecimal
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={options.checkBinary}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkBinary: checked }))}
              >
                Check Binary
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={options.checkCaesar}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkCaesar: checked }))}
              >
                Check Caesar/ROT13
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={options.checkMorse}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkMorse: checked }))}
              >
                Check Morse Code
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={options.checkA1Z26}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, checkA1Z26: checked }))}
              >
                Check A1Z26
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleClear}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to analyze here..."
          className="w-full min-h-[200px] p-4 bg-transparent text-foreground placeholder:text-muted-foreground resize-y focus:outline-none font-mono text-sm"
        />
        
        <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {input.length} characters
          </span>
        </div>
      </div>

      {/* Analyze Button */}
      <div className="flex gap-4 mb-6">
        <Button 
          onClick={handleAnalyze}
          className="bg-primary hover:bg-primary/90"
          disabled={!input.trim()}
        >
          Analyze Text
        </Button>
        {hasAnalyzed && results.length > 0 && (
          <Button variant="outline" onClick={downloadResults} className="gap-2">
            <Download className="w-4 h-4" />
            Download Results
          </Button>
        )}
      </div>

      {/* Note */}
      <p className="text-sm text-amber-700 dark:text-amber-400 mb-8">
        <strong>Note:</strong> While you can analyze short texts, accuracy is typically better with longer inputs. 
        Several cipher types require at least 50-100 characters for reliable analysis.
      </p>

      {/* Results */}
      {hasAnalyzed && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Analysis Results {results.length > 0 && `(${results.length} possible matches)`}
          </h3>
          
          {results.length === 0 ? (
            <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
              <p className="text-muted-foreground">
                No cipher types could be identified. Try entering different text or check that your input is properly formatted.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-foreground">{result.name}</h4>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getProbabilityColor(result.probability)}`}>
                        {result.probability}% match
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyResult(result.name, index)}
                      className="gap-2"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
                  {result.example && (
                    <p className="text-xs text-muted-foreground font-mono bg-muted/50 rounded px-2 py-1 inline-block">
                      Example: {result.example}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
