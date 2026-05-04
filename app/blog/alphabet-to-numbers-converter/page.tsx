import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Alphabet to Numbers Converter",
  description: "Free alphabet to numbers converter tool. Convert any letter A-Z to its numerical position 1-26 instantly. Perfect for puzzles, codes, education, and cryptography.",
  keywords: ["alphabet to numbers converter", "alphabet to number", "convert alphabet to numbers", "letter position converter", "a-z to 1-26"],
  openGraph: {
    title: "Alphabet to Numbers Converter",
    description: "Free alphabet to numbers converter tool. Convert any letter A-Z to its numerical position 1-26 instantly.",
    type: "article",
  },
}

export default function AlphabetToNumbersConverterPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Converter Tool
            </Link>

            <header className="mb-8">
              <h1 id="intro" className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Alphabet to Numbers Converter
              </h1>
              <p className="text-muted-foreground mb-4">
                The complete guide to converting alphabet letters to their numerical positions
              </p>
              <ShareButton title="Alphabet to Numbers Converter" />
            </header>

            <Image
              src="/images/blog/alphabet-to-numbers-converter.jpg"
              alt="Alphabet to numbers converter showing A-Z letters with corresponding numbers 1-26"
              width={800}
              height={400}
              className="rounded-lg mb-8 w-full object-cover"
              priority
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                An <strong>alphabet to numbers converter</strong> transforms each letter of the alphabet into its corresponding numerical position. This simple yet powerful conversion system forms the foundation of many encoding methods, puzzle systems, and educational tools. Our free <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> makes this conversion instant and effortless.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">Convert Now - Free Tool</h3>
                <p className="text-muted-foreground mb-4">
                  Instantly convert any alphabet letter to its number position.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Open Alphabet to Numbers Converter
                </Link>
              </div>

              <h2 id="conversion-chart" className="text-2xl font-bold text-foreground mt-10 mb-4">Complete Alphabet to Numbers Chart</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The alphabet to numbers conversion follows a straightforward pattern: each letter equals its position in the alphabet. Here is the complete reference chart:
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6 font-mono text-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter, i) => (
                    <div key={letter} className="flex justify-between px-2 py-1 bg-background rounded">
                      <span className="font-bold text-foreground">{letter}</span>
                      <span className="text-muted-foreground">= {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h2 id="how-to-convert" className="text-2xl font-bold text-foreground mt-10 mb-4">How to Convert Alphabet to Numbers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Converting the alphabet to numbers is simple: count the letter&apos;s position in the alphabet. A is the 1st letter, so A = 1. B is the 2nd letter, so B = 2. This pattern continues through the entire alphabet until Z = 26.
              </p>

              <h3 id="quick-reference" className="text-xl font-semibold text-foreground mt-8 mb-4">Quick Reference Points</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Memorize these key positions to quickly calculate any letter&apos;s number:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">E</p>
                  <p className="text-muted-foreground">= 5</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">J</p>
                  <p className="text-muted-foreground">= 10</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">O</p>
                  <p className="text-muted-foreground">= 15</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">T</p>
                  <p className="text-muted-foreground">= 20</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">Y</p>
                  <p className="text-muted-foreground">= 25</p>
                </div>
              </div>

              <h2 id="uses" className="text-2xl font-bold text-foreground mt-10 mb-4">Uses for Alphabet to Numbers Conversion</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Geocaching puzzles:</strong> Many puzzle caches require converting letters to numbers to find coordinates</li>
                <li><strong>Escape rooms:</strong> Lock combinations often use alphabet-to-number codes</li>
                <li><strong>Classroom activities:</strong> Teaching children letter positions and number associations</li>
                <li><strong>Cryptography basics:</strong> Foundation for understanding substitution ciphers</li>
                <li><strong>Word games:</strong> Calculating word scores based on letter values</li>
                <li><strong>Secret codes:</strong> Creating simple encoded messages</li>
                <li><strong>Programming:</strong> Character encoding and text processing</li>
              </ul>

              <h2 id="conversion-examples" className="text-2xl font-bold text-foreground mt-10 mb-4">Alphabet to Numbers Examples</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Here are some practical examples of converting words using the alphabet to numbers system:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">CAT</p>
                  <p className="text-muted-foreground">C(3) + A(1) + T(20) = <span className="font-mono">3-1-20</span></p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">DOG</p>
                  <p className="text-muted-foreground">D(4) + O(15) + G(7) = <span className="font-mono">4-15-7</span></p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">ZEBRA</p>
                  <p className="text-muted-foreground">Z(26) + E(5) + B(2) + R(18) + A(1) = <span className="font-mono">26-5-2-18-1</span></p>
                </div>
              </div>

              <h2 id="tips" className="text-2xl font-bold text-foreground mt-10 mb-4">Tips for Quick Conversion</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Use these mental math tricks to convert alphabet to numbers faster:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Memorize the &quot;EJOTY&quot; positions (5, 10, 15, 20, 25) as anchor points</li>
                <li>For letters near the end, subtract from 27 (Z=26, Y=25, etc.)</li>
                <li>Remember M is the middle letter at position 13</li>
                <li>Use our <Link href="/" className="text-primary hover:underline">alphabet to numbers converter</Link> for instant results</li>
              </ul>

              <h2 id="reverse-conversion" className="text-2xl font-bold text-foreground mt-10 mb-4">Reverse Conversion: Numbers to Alphabet</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our converter also works in reverse. Enter any number from 1-26 and instantly see the corresponding letter. This is useful for decoding messages or solving puzzles where you&apos;re given numbers and need to find the letters.
              </p>

              <h2 id="online-tool" className="text-2xl font-bold text-foreground mt-10 mb-4">Free Online Alphabet to Numbers Converter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our <Link href="/" className="text-primary hover:underline">alphabet to numbers converter tool</Link> is completely free and works instantly in your browser. Simply type or paste any text, and the tool will convert each letter to its corresponding number. The tool supports multiple formats including standard A1Z26, ASCII values, hexadecimal, and binary encoding.
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Converting Now</h3>
              <p className="text-muted-foreground mb-4">
                Use our free alphabet to numbers converter for instant conversions.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Alphabet to Numbers Converter
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
