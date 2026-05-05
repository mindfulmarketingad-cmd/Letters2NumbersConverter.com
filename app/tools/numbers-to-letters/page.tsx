import { LetterNumberConverter } from "@/components/letter-number-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Numbers to Letters Converter | Free Decoder Tool",
  description: "Free numbers to letters converter tool. Convert numbers instantly back to letters using A1Z26, A0Z25, ASCII, and other encoding methods. Perfect for decoding messages, puzzles, and cryptography.",
  keywords: ["numbers to letters converter", "decode numbers to letters", "A1Z26 decoder", "numbers to alphabet", "text decoder", "cipher decoder"],
}

export default function NumbersToLettersPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                #1 Free Online Converter
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Numbers to Letters Converter
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                The numbers to letters converter tool makes it easy to decode numeric messages. Convert numbers into letters instantly using A1Z26, ASCII, binary, hex, and other encoding formats. Perfect for solving puzzles, ciphers, and educational exercises.
              </p>
            </div>

            <LetterNumberConverter />

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>No Data Stored</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">How to Use the Numbers to Letters Converter</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Enter Your Numbers</h3>
                  <p className="text-muted-foreground">Input the numbers you want to convert. You can paste numbers in spaces, commas, or no delimiter. The tool supports multiple encoding formats.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Select Encoding Type</h3>
                  <p className="text-muted-foreground">Choose the encoding method used for your numbers: A1Z26 (A=1, B=2), A0Z25 (A=0, B=1), ASCII values, hexadecimal, or binary.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">3. Choose Language/Alphabet</h3>
                  <p className="text-muted-foreground">Select from 25+ languages and alphabets including English, Russian, Greek, Hebrew, and more for accurate character conversion.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">4. Get Instant Results</h3>
                  <p className="text-muted-foreground">The converted text appears instantly. Copy to clipboard, save to workspace, download as a file, or use the large editor for extended work.</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Supported Encoding Formats</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>A1Z26:</strong> A=1, B=2, C=3 through Z=26</li>
                  <li><strong>A0Z25:</strong> A=0, B=1, C=2 through Z=25</li>
                  <li><strong>ASCII:</strong> Full ASCII character codes (0-255)</li>
                  <li><strong>Hexadecimal:</strong> Base-16 encoding of ASCII characters</li>
                  <li><strong>Binary:</strong> 8-bit binary representation of ASCII</li>
                </ul>
              </div>

              <div className="mt-8">
                <p className="text-muted-foreground mb-4">Need the reverse? Check out our <Link href="/" className="text-primary hover:underline">Letters to Numbers Converter</Link> for encoding text into numbers.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
