import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Online Tools",
  description: "Free online encoding and decoding tools. Convert letters to numbers, translate to NATO phonetic alphabet, and more. No signup required.",
  keywords: ["online tools", "encoding tools", "decoding tools", "text converter", "cipher tools"],
}

const tools = [
  {
    title: "Letters to Numbers Converter",
    description: "Convert letters to their numeric positions (A=1, B=2...Z=26). Supports A1Z26, ASCII, hexadecimal, and binary encoding.",
    href: "/",
    category: "Encoding"
  },
  {
    title: "YAML to INI Converter",
    description: "YAML to INI Converter - Free online bidirectional configuration file converter. Transform YAML to INI format instantly or convert INI to YAML. Perfect for DevOps, developers, and system administrators.",
    href: "/tools/yaml-to-ini-converter",
    category: "Conversion"
  },
  {
    title: "JSON to Java Code Generator",
    description: "JSON to Java code generator - Free tool to convert JSON schema into Java Object with private variables, getter/setter methods, and inner classes for nested objects.",
    href: "/tools/json-to-java-code-generator",
    category: "Code Generation"
  },
  {
    title: "Mayan Numeral Converter",
    description: "Mayan Numeral Converter - Convert decimal numbers to ancient Mayan base-20 vigesimal numerals with visual dot, bar, and shell symbols. Learn about the sophisticated mathematics of the Maya civilization.",
    href: "/tools/mayan-numeral-converter",
    category: "Numeral Systems"
  },
  {
    title: "Babylonian Numeral Converter",
    description: "Babylonian Numeral Converter - Convert decimal to base-60 Babylonian numerals using ancient cuneiform symbols. Learn about the sexagesimal system inherited from Sumerians and Akkadians.",
    href: "/tools/babylonian-numeral-converter",
    category: "Numeral Systems"
  },
  {
    title: "PX To VW Converter",
    description: "PX To VW Converter - Free responsive design tool to convert between pixels (px) and viewport width (vw) CSS units. Perfect for creating responsive layouts with preset viewport sizes.",
    href: "/tools/px-vw-converter",
    category: "CSS Utilities"
  },
  {
    title: "Camel Case Converter",
    description: "Camel Case Converter - Convert any text to camelCase or PascalCase format instantly. Supports snake_case, kebab-case, space-separated text, and batch processing for multiple lines.",
    href: "/tools/camel-case-converter",
    category: "Text Formatting"
  },
  {
    title: "Line Ending Converter",
    description: "Line Ending Converter - Convert line endings between Windows (CRLF), Unix/Mac (LF), and old Mac (CR) formats for cross-platform compatibility.",
    href: "/tools/line-ending-converter",
    category: "Text Formatting"
  },
  {
    title: "Decimal to Hexadecimal Converter Online",
    description: "Decimal to Hexadecimal Converter Online - Convert decimal numbers to hexadecimal format instantly. Supports values up to 19 digits. Free online conversion tool.",
    href: "/tools/decimal-to-hexadecimal-converter-online",
    category: "Number Systems"
  },
  {
    title: "Cistercian Numerals Converter",
    description: "Cistercian Numerals Converter - Convert decimal numbers to medieval Cistercian numerals. Learn about the Cistercian monks' number system with complete symbol chart and historical context.",
    href: "/tools/cistercian-numerals-converter",
    category: "Numeral Systems"
  },
  {
    title: "Egyptian Numbers Converter",
    description: "Egyptian Numbers Converter - Convert decimal numbers to ancient Egyptian numerals and hieroglyphic symbols. Learn about the Egyptian numeral system used from 3000 BC.",
    href: "/tools/egyptian-numbers-converter",
    category: "Numeral Systems"
  },
  {
    title: "Fill In The Blanks Equation Solver",
    description: "Fill In The Blanks Equation Solver - Solve math puzzles with missing digits or operators. Enter equations with ? and find all possible solutions instantly. Free online tool.",
    href: "/tools/fill-in-the-blanks-equation-solver",
    category: "Math Solvers"
  },
  {
    title: "Skip Cipher",
    description: "Skip Cipher - Jump Cipher online encryption and decryption tool. Encrypt messages using transposition cipher, decrypt with brute force parameter finder. Learn about skip cipher cryptography.",
    href: "/tools/skip-cipher",
    category: "Encryption"
  },
  {
    title: "A0Z25 Cipher Translator",
    description: "A0Z25 Cipher Translator - Free zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Encode and decode messages instantly with support for multiple encoding formats.",
    href: "/tools/a0z25-cipher-translator",
    category: "Encoding"
  },
  {
    title: "Numbers to Letters Converter",
    description: "Convert numbers back into letters. Decode A1Z26, A0Z25, ASCII, hex, and binary encoded messages instantly.",
    href: "/tools/numbers-to-letters",
    category: "Decoding"
  },
  {
    title: "NATO Phonetic Alphabet Translator",
    description: "Convert text to NATO/ICAO phonetic alphabet and other spelling alphabets including Dutch, German, Swedish, and Russian.",
    href: "/tools/nato-phonetic-alphabet",
    category: "Encoding"
  },
  {
    title: "Phone Number Converter",
    description: "Convert vanity phone numbers like 1-800-FLOWERS to digits or see letter options for any phone number using the telephone keypad.",
    href: "/tools/letter-to-phone-number-converter",
    category: "Conversion"
  },
  {
    title: "Cipher Identifier",
    description: "Analyze encrypted text and identify the cipher or encoding type. Detects Base64, hex, binary, A1Z26, Morse code, Caesar cipher, and more.",
    href: "/tools/cipher-identifier",
    category: "Analysis"
  },
  {
    title: "Spectrogram Decoder",
    description: "Free spectrogram decoder tool to analyze audio frequencies and detect hidden messages. Upload WAV, FLAC, OGG, MP3, or M4A files to generate spectrograms for audio steganography analysis.",
    href: "/tools/audio-spectrogram-decoder",
    category: "Analysis"
  },
  {
    title: "Book Cipher Decoder",
    description: "Decode hidden messages using book references. Enter book text and numerical codes (page:line:word) to reveal secret messages encoded in literature.",
    href: "/tools/book-cipher-decoder",
    category: "Decoding"
  },
  {
    title: "Password Strength Tester",
    description: "Test your password security and see how long it would take to crack. Get real-time feedback on password strength with entropy analysis.",
    href: "/tools/password-strength-tester",
    category: "Security"
  },
  {
    title: "Escape Room Builder",
    description: "Create and share your own escape room puzzles! Build cipher challenges using A1Z26, Morse code, binary, and riddles. Share via URL - no account needed.",
    href: "/tools/escape-room-builder",
    category: "Games"
  },
  {
    title: "Enigma Machine Emulator",
    description: "Simulate the legendary World War II Enigma encryption device. Configure rotors, reflectors, ring settings, and plugboard to encrypt and decrypt authentic Enigma cipher messages.",
    href: "/tools/enigma-machine-emulator",
    category: "Cryptography"
  },
  {
    title: "Monoalphabetic Substitution Cipher",
    description: "Encrypt and decrypt messages using monoalphabetic substitution ciphers. Create custom substitution keys, analyze letter frequencies, and solve ciphers with interactive mapping.",
    href: "/tools/monoalphabetic-substitution-cipher",
    category: "Cryptography"
  },
  {
    title: "Anagram Solver with Wildcard",
    description: "Find all possible words from your letters with wildcard support. Filter by starting letter, ending letter, containing letters, or exact word length.",
    href: "/tools/anagram-solver",
    category: "Word Games"
  },
  {
    title: "Cryptogram Generator",
    description: "Create custom cryptogram generator puzzles to challenge your friends. Generate substitution cipher cryptograms with adjustable difficulty levels and share via link.",
    href: "/tools/cryptogram-generator",
    category: "Word Games"
  },
  {
    title: "Cryptogram Solver",
    description: "Free cryptogram solver tool to decode substitution cipher puzzles. Analyze letter frequencies, manipulate text, and solve cryptograms with interactive tools.",
    href: "/tools/cryptogram-solver-free",
    category: "Word Games"
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Free Online <span className="text-primary">Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of free encoding and decoding tools for puzzles, cryptography, and more. No signup required.
              </p>
            </div>

            <div className="grid gap-3">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-card/80 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="inline-flex items-center px-2 py-0.5 rounded text-primary text-xs font-medium mb-2">
                        {tool.category}
                      </div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {tool.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
