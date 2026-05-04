import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CipherIdentifier } from "@/components/cipher-identifier"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cipher Identifier Tool",
  description: "Free cipher identifier tool to analyze encrypted text and identify the cipher or encoding type. Detects Base64, hexadecimal, binary, A1Z26, Morse code, Caesar cipher, and more.",
  keywords: ["cipher identifier", "cipher detector", "encoding analyzer", "ciphertext analyzer", "decode cipher", "identify encryption"],
}

export default function CipherIdentifierPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Analysis Tool
              </div>
              <h1 id="cipher-identifier" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Cipher Identifier Tool
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Analyze encrypted text and identify the cipher or encoding type used. Simply paste your ciphertext and let our tool detect possible encoding methods including Base64, hexadecimal, A1Z26, Morse code, and more.
              </p>
            </div>

            <CipherIdentifier />

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
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
                <span>Privacy First</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Who Is This For */}
              <div id="who-is-this-for" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">Who Is This Tool For?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Cipher Identifier Tool is designed for anyone who encounters encrypted or encoded text and needs to identify the method used. Whether you&apos;re a puzzle enthusiast, cybersecurity student, or CTF competitor, this tool helps you quickly narrow down possible encoding types.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>CTF (Capture The Flag) competitors analyzing challenges</li>
                  <li>Puzzle solvers working on escape rooms or geocaching</li>
                  <li>Cybersecurity students learning about encryption</li>
                  <li>Developers debugging encoded data</li>
                  <li>Anyone curious about mysterious encoded text</li>
                </ul>
              </div>

              {/* How It Works */}
              <div id="how-it-works" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">How Does It Work?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our cipher identifier analyzes the characteristics of your input text to determine possible encoding methods. It examines patterns like character sets, length ratios, padding, and statistical properties to match against known cipher and encoding signatures.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The tool checks for Base64, hexadecimal, binary, A1Z26 (letter-number code), ASCII, Morse code, Caesar/ROT13 ciphers, NATO phonetic alphabet, URL encoding, and more. Results are ranked by probability to help you identify the most likely encoding first.
                </p>
              </div>

              {/* Supported Ciphers */}
              <div id="supported-ciphers" className="mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Supported Ciphers and Encodings</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Base64</h3>
                    <p className="text-sm text-muted-foreground">Common encoding for binary data, uses A-Z, a-z, 0-9, +, /</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Hexadecimal</h3>
                    <p className="text-sm text-muted-foreground">Base-16 encoding using digits 0-9 and letters A-F</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Binary</h3>
                    <p className="text-sm text-muted-foreground">Base-2 encoding using only 0s and 1s</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">A1Z26 Cipher</h3>
                    <p className="text-sm text-muted-foreground">Letter position encoding (A=1, B=2...Z=26)</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Morse Code</h3>
                    <p className="text-sm text-muted-foreground">Dots and dashes representing letters</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Caesar / ROT13</h3>
                    <p className="text-sm text-muted-foreground">Letter shift ciphers with fixed rotation</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">NATO Phonetic</h3>
                    <p className="text-sm text-muted-foreground">Spelling alphabet (Alpha, Bravo, Charlie...)</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">URL Encoding</h3>
                    <p className="text-sm text-muted-foreground">Percent-encoding for special characters</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 text-center">
                <h2 className="text-xl font-bold text-foreground mb-3">Need to Convert Letters to Numbers?</h2>
                <p className="text-muted-foreground mb-6">
                  Once you&apos;ve identified your cipher, use our converter tool to decode it.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Go to Letters to Numbers Converter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
