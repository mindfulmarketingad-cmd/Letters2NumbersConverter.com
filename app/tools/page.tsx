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
    title: "Audio Spectrogram Analyzer",
    description: "Visualize audio frequencies and detect hidden messages. Upload WAV, FLAC, OGG, MP3, or M4A files to generate spectrograms for audio steganography analysis.",
    href: "/tools/audio-spectrogram",
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
                Free Online Tools
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of free encoding and decoding tools for puzzles, cryptography, and more. No signup required.
              </p>
            </div>

            <div className="grid gap-6">
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group block bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-3">
                        {tool.category}
                      </div>
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {tool.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
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
