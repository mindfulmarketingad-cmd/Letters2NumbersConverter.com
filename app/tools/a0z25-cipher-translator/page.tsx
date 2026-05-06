import { A0Z25Translator } from "@/components/a0z25-translator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A0Z25 Cipher Translator",
  description: "A0Z25 Cipher Translator - Free online zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Perfect for programming, cryptography, and cipher solving.",
  keywords: ["A0Z25 cipher translator", "A0Z25 encoder", "zero-indexed cipher", "A=0 B=1 translator", "programming cipher", "letter to number converter"],
  openGraph: {
    title: "A0Z25 Cipher Translator | Letters2NumbersConverter.com",
    description: "Free A0Z25 Cipher Translator - Encode and decode messages using zero-indexed letter-to-number encoding where A=0 and Z=25.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
  },
}

export default function A0Z25CipherTranslatorPage() {
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
                A0Z25 Cipher Translator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                The A0Z25 Cipher Translator is a powerful zero-indexed letter-to-number encoding tool. Convert letters to numbers instantly using A0Z25 encoding where A=0, B=1, through Z=25. Perfect for programming, computer science, cryptography, and puzzle solving.
              </p>
            </div>

            <A0Z25Translator />

            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>No Sign-up Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Supports Multiple Encodings</span>
              </div>
            </div>

            {/* Info Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What is A0Z25?</h2>
                <p className="text-muted-foreground mb-4">
                  A0Z25 is a zero-indexed cipher system where each letter of the alphabet is assigned a numerical value starting from zero: A=0, B=1, C=2, and so on through Z=25. This encoding scheme is widely used in computer science, programming, and cryptography because it aligns with how arrays and strings are indexed in modern programming languages.
                </p>
                <p className="text-muted-foreground">
                  Learn more about A0Z25 and its applications in our <Link href="/blog/a0z25-cipher" className="text-primary hover:underline font-semibold">comprehensive A0Z25 cipher guide</Link>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>A0Z25 encoding with zero-based indexing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Instant conversion results</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Copy, paste, and download functions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Workspace for saving translations</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Common Uses</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Programming and algorithm implementation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Cryptography and cipher development</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>CTF challenges and hacking contests</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Puzzle solving and escape rooms</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Related Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/blog/a0z25-cipher"
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">A0Z25 Cipher Guide</p>
                    <p className="text-sm text-muted-foreground">Learn about zero-indexed encoding</p>
                  </Link>
                  <Link
                    href="/"
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Letters to Numbers Converter</p>
                    <p className="text-sm text-muted-foreground">Main converter with all encoding types</p>
                  </Link>
                  <Link
                    href="/play/cryptogram-game-online"
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Cryptogram Game</p>
                    <p className="text-sm text-muted-foreground">Play cipher puzzles online</p>
                  </Link>
                  <Link
                    href="/tools/cryptogram-solver-free"
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Cryptogram Solver</p>
                    <p className="text-sm text-muted-foreground">Decode substitution ciphers</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
