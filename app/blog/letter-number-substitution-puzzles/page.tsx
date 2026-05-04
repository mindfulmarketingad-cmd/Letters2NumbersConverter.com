import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "Letter Number Substitution Puzzles: Your Complete Guide to Cipher Solving",
  description: "Master letter number substitution puzzles with our complete guide. Learn different cipher types, see worked examples, and discover solving techniques for cryptograms and codes.",
  keywords: ["letter number substitution puzzles", "substitution cipher", "cryptogram puzzles", "letter substitution", "number cipher puzzles"],
  openGraph: {
    title: "Letter Number Substitution Puzzles: Your Complete Guide to Cipher Solving",
    description: "Master letter number substitution puzzles with our complete guide covering types, examples, and solutions.",
    type: "article",
  },
}

export default function LetterNumberSubstitutionPuzzlesPage() {
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
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Letter Number Substitution Puzzles: Your Complete Guide to Cipher Solving
              </h1>
            </header>

            <Image
              src="/images/blog/letter-number-substitution-puzzles.jpg"
              alt="Cryptogram puzzle sheet showing letter number substitution cipher with pencil marks"
              width={800}
              height={400}
              className="rounded-lg mb-8 w-full object-cover"
              priority
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <strong>Letter number substitution puzzles</strong> have fascinated puzzle enthusiasts for centuries. These clever codes replace letters with numbers following specific rules, creating encrypted messages that challenge and delight solvers. Whether you&apos;re a beginner or experienced puzzler, this guide will help you master letter number substitution puzzles of all types.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Are Letter Number Substitution Puzzles?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Letter number substitution puzzles are encoding systems where each letter in a message is replaced with a corresponding number. The most straightforward form uses alphabetical position (A=1, B=2, etc.), but many variations exist. These puzzles test logical thinking, pattern recognition, and persistence.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Types of Letter Number Substitution Puzzles</h2>
              
              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. A1Z26 Cipher</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The classic letter number substitution puzzle uses alphabetical position: A=1 through Z=26. This is the most common type found in geocaching, escape rooms, and children&apos;s puzzles.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono text-sm">
                <p className="text-muted-foreground">Example: PUZZLE = 16-21-26-26-12-5</p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Reverse A1Z26</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In this variation of letter number substitution puzzles, the numbering is reversed: A=26, B=25, down to Z=1. This adds an extra layer of complexity.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono text-sm">
                <p className="text-muted-foreground">Example: PUZZLE = 11-6-1-1-15-22</p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. ASCII-Based Substitution</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                More advanced letter number substitution puzzles use ASCII codes. Uppercase letters range from 65 (A) to 90 (Z), while lowercase uses 97 (a) to 122 (z).
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono text-sm">
                <p className="text-muted-foreground">Example: PUZZLE = 80-85-90-90-76-69</p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Shifted Substitution</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Some letter number substitution puzzles add a constant to each letter&apos;s position (similar to a Caesar cipher with numbers). You might see A=4, B=5, C=6, etc.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Solve Letter Number Substitution Puzzles</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Identify the range:</strong> Look at the highest and lowest numbers to determine the encoding type</li>
                <li><strong>Check for patterns:</strong> Repeated numbers likely represent common letters (E, T, A)</li>
                <li><strong>Test your hypothesis:</strong> Try converting a few numbers and see if words form</li>
                <li><strong>Use tools:</strong> Our <Link href="/" className="text-primary hover:underline">letters to numbers converter</Link> can quickly test different encoding types</li>
                <li><strong>Verify the message:</strong> Does your decoded text make grammatical sense?</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practice Letter Number Substitution Puzzles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Try decoding these letter number substitution puzzles using our converter:
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono text-sm space-y-2">
                <p className="text-muted-foreground">Easy: 8-5-12-12-15</p>
                <p className="text-muted-foreground">Medium: 3-15-14-7-18-1-20-21-12-1-20-9-15-14-19</p>
                <p className="text-muted-foreground">Hard: 25-15-21 19-15-12-22-5-4 9-20</p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where to Find Letter Number Substitution Puzzles</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Geocaching mystery caches and puzzle caches</li>
                <li>Escape room experiences</li>
                <li>Puzzle books and magazines</li>
                <li>Online CTF (Capture the Flag) competitions</li>
                <li>Educational cryptography courses</li>
                <li>Treasure hunt games and events</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tools for Solving Substitution Puzzles</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While solving letter number substitution puzzles by hand is rewarding, having the right tools speeds up the process. Our free <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> supports multiple encoding types and provides instant conversions, making it perfect for both beginners and experts.
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Decode Your Puzzles Instantly</h3>
              <p className="text-muted-foreground mb-4">
                Use our free converter to solve letter number substitution puzzles in seconds.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Try the Converter Tool
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
