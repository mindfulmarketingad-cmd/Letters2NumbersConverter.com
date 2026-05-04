"use client"

import { useState, useCallback } from "react"
import { Copy, Download, ArrowRightLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Spelling alphabet definitions
const alphabets = {
  nato: {
    name: "NATO/ICAO phonetic alphabet",
    letters: {
      A: "Alfa", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
      F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliett",
      K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
      P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
      U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee",
      Z: "Zulu"
    },
    numbers: {
      "0": "Zero", "1": "One", "2": "Two", "3": "Three", "4": "Four",
      "5": "Five", "6": "Six", "7": "Seven", "8": "Eight", "9": "Nine"
    }
  },
  dutch: {
    name: "Dutch spelling alphabet",
    letters: {
      A: "Anton", B: "Bernard", C: "Cornelis", D: "Dirk", E: "Eduard",
      F: "Ferdinand", G: "Gerard", H: "Hendrik", I: "Izaak", J: "Johan",
      K: "Karel", L: "Lodewijk", M: "Maria", N: "Nico", O: "Otto",
      P: "Pieter", Q: "Quinten", R: "Richard", S: "Simon", T: "Theodor",
      U: "Utrecht", V: "Victor", W: "Willem", X: "Xantippe", Y: "Ypsilon",
      Z: "Zacharias"
    },
    numbers: {
      "0": "Nul", "1": "Een", "2": "Twee", "3": "Drie", "4": "Vier",
      "5": "Vijf", "6": "Zes", "7": "Zeven", "8": "Acht", "9": "Negen"
    }
  },
  german: {
    name: "German spelling alphabet",
    letters: {
      A: "Anton", B: "Berta", C: "Cäsar", D: "Dora", E: "Emil",
      F: "Friedrich", G: "Gustav", H: "Heinrich", I: "Ida", J: "Julius",
      K: "Kaufmann", L: "Ludwig", M: "Martha", N: "Nordpol", O: "Otto",
      P: "Paula", Q: "Quelle", R: "Richard", S: "Samuel", T: "Theodor",
      U: "Ulrich", V: "Viktor", W: "Wilhelm", X: "Xanthippe", Y: "Ypsilon",
      Z: "Zacharias"
    },
    numbers: {
      "0": "Null", "1": "Eins", "2": "Zwei", "3": "Drei", "4": "Vier",
      "5": "Fünf", "6": "Sechs", "7": "Sieben", "8": "Acht", "9": "Neun"
    }
  },
  swedish: {
    name: "Swedish Armed Forces' radio alphabet",
    letters: {
      A: "Adam", B: "Bertil", C: "Caesar", D: "David", E: "Erik",
      F: "Filip", G: "Gustav", H: "Helge", I: "Ivar", J: "Johan",
      K: "Kalle", L: "Ludvig", M: "Martin", N: "Niklas", O: "Olof",
      P: "Petter", Q: "Qvintus", R: "Rudolf", S: "Sigurd", T: "Tore",
      U: "Urban", V: "Viktor", W: "Wilhelm", X: "Xerxes", Y: "Yngve",
      Z: "Zäta"
    },
    numbers: {
      "0": "Nolla", "1": "Ett", "2": "Två", "3": "Tre", "4": "Fyra",
      "5": "Fem", "6": "Sex", "7": "Sju", "8": "Åtta", "9": "Nio"
    }
  },
  russianOfficial: {
    name: "Russian spelling alphabet (official)",
    letters: {
      A: "Анна", B: "Борис", C: "Центр", D: "Дмитрий", E: "Елена",
      F: "Фёдор", G: "Григорий", H: "Харитон", I: "Иван", J: "Й краткое",
      K: "Константин", L: "Леонид", M: "Михаил", N: "Николай", O: "Ольга",
      P: "Павел", Q: "Щука", R: "Роман", S: "Семён", T: "Татьяна",
      U: "Ульяна", V: "Василий", W: "Знак", X: "Ха", Y: "Игрек",
      Z: "Зинаида"
    },
    numbers: {
      "0": "Ноль", "1": "Один", "2": "Два", "3": "Три", "4": "Четыре",
      "5": "Пять", "6": "Шесть", "7": "Семь", "8": "Восемь", "9": "Девять"
    }
  },
  russianUnofficial: {
    name: "Russian spelling alphabet (unofficial)",
    letters: {
      A: "Антон", B: "Борис", C: "Цапля", D: "Дмитрий", E: "Евгений",
      F: "Фёдор", G: "Галина", H: "Хороший", I: "Иван", J: "Йод",
      K: "Кирилл", L: "Леонид", M: "Мария", N: "Наталья", O: "Ольга",
      P: "Павел", Q: "Шура", R: "Роман", S: "Сергей", T: "Тамара",
      U: "Ульяна", V: "Виктор", W: "Вэ двойное", X: "Икс", Y: "Игрек",
      Z: "Зоя"
    },
    numbers: {
      "0": "Ноль", "1": "Один", "2": "Два", "3": "Три", "4": "Четыре",
      "5": "Пять", "6": "Шесть", "7": "Семь", "8": "Восемь", "9": "Девять"
    }
  }
}

type AlphabetKey = keyof typeof alphabets

export function NatoAlphabetConverter() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<"encode" | "decode">("encode")
  const [selectedAlphabet, setSelectedAlphabet] = useState<AlphabetKey>("nato")
  const [copied, setCopied] = useState(false)

  const encode = useCallback((text: string, alphabetKey: AlphabetKey): string => {
    const alphabet = alphabets[alphabetKey]
    const result: string[] = []
    
    for (const char of text.toUpperCase()) {
      if (char === " ") {
        result.push("(space)")
      } else if (char === "\n") {
        result.push("(newline)")
      } else if (alphabet.letters[char as keyof typeof alphabet.letters]) {
        result.push(alphabet.letters[char as keyof typeof alphabet.letters])
      } else if (alphabet.numbers[char as keyof typeof alphabet.numbers]) {
        result.push(alphabet.numbers[char as keyof typeof alphabet.numbers])
      } else {
        result.push(char)
      }
    }
    
    return result.join(" ")
  }, [])

  const decode = useCallback((text: string, alphabetKey: AlphabetKey): string => {
    const alphabet = alphabets[alphabetKey]
    const reverseLetters: Record<string, string> = {}
    const reverseNumbers: Record<string, string> = {}
    
    // Build reverse lookup
    for (const [letter, word] of Object.entries(alphabet.letters)) {
      reverseLetters[word.toLowerCase()] = letter.toLowerCase()
    }
    for (const [num, word] of Object.entries(alphabet.numbers)) {
      reverseNumbers[word.toLowerCase()] = num
    }
    
    const words = text.split(/\s+/)
    const result: string[] = []
    
    for (const word of words) {
      const lowerWord = word.toLowerCase().replace(/[.,!?;:]/g, "")
      
      if (lowerWord === "(space)") {
        result.push(" ")
      } else if (lowerWord === "(newline)") {
        result.push("\n")
      } else if (reverseLetters[lowerWord]) {
        result.push(reverseLetters[lowerWord])
      } else if (reverseNumbers[lowerWord]) {
        result.push(reverseNumbers[lowerWord])
      } else {
        result.push(word)
      }
    }
    
    return result.join("")
  }, [])

  const output = mode === "encode" 
    ? encode(input, selectedAlphabet)
    : decode(input, selectedAlphabet)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `nato-phonetic-${mode === "encode" ? "encoded" : "decoded"}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleSwap = () => {
    setMode(mode === "encode" ? "decode" : "encode")
    setInput(output)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Input Panel */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 border-b border-border">
            <span className="text-sm font-medium text-primary">INPUT</span>
          </div>
          <div className="p-4">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={mode === "encode" 
                ? "Type text to encode..." 
                : "Enter phonetic words to decode..."
              }
              className="min-h-[200px] resize-none border-0 bg-transparent focus-visible:ring-0 p-0 text-base"
            />
          </div>
          <div className="px-4 py-3 border-t border-border bg-muted/30">
            <span className="text-sm text-muted-foreground">
              {input.length} characters
            </span>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center gap-4">
            <button
              onClick={() => setMode("encode")}
              className={`text-sm font-medium transition-colors ${
                mode === "encode" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ENCODE
            </button>
            <button
              onClick={() => setMode("decode")}
              className={`text-sm font-medium transition-colors ${
                mode === "decode" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              DECODE
            </button>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 block">
                Alphabet
              </Label>
              <RadioGroup
                value={selectedAlphabet}
                onValueChange={(value) => setSelectedAlphabet(value as AlphabetKey)}
                className="space-y-3"
              >
                {Object.entries(alphabets).map(([key, alphabet]) => (
                  <div key={key} className="flex items-center space-x-3">
                    <RadioGroupItem value={key} id={key} />
                    <Label htmlFor={key} className="text-sm text-foreground cursor-pointer">
                      {alphabet.name}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-border bg-muted/30 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {mode === "encode" ? "Encoded" : "Decoded"} {output.length} chars
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwap}
              className="h-8 px-2"
            >
              <ArrowRightLeft className="w-4 h-4 mr-1" />
              Swap
            </Button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="bg-muted/50 px-4 py-3 border-b border-border flex items-center justify-between">
            <span className="text-sm font-medium text-primary">OUTPUT</span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-8 px-2"
              >
                <Copy className="w-4 h-4 mr-1" />
                {copied ? "Copied!" : "Copy"}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                className="h-8 px-2"
              >
                <Download className="w-4 h-4 mr-1" />
                Download
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="min-h-[200px] text-base font-mono whitespace-pre-wrap break-words text-foreground">
              {output || (
                <span className="text-muted-foreground">
                  {mode === "encode" ? "Phonetic output will appear here..." : "Decoded text will appear here..."}
                </span>
              )}
            </div>
          </div>
          <div className="px-4 py-3 border-t border-border bg-muted/30">
            <span className="text-sm text-muted-foreground">
              {output.split(" ").filter(w => w).length} words
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
