import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Letters to Numbers Translator",
  description: "Use our free letters to numbers translator to instantly convert any text to numerical values. Learn how letter-to-number translation works with A=1, B=2 through Z=26.",
  keywords: ["letters to numbers translator", "letter number translator", "translate letters to numbers", "text to number translator", "alphabet translator"],
  authors: [{ name: "John Reed" }],
  openGraph: {
    title: "Letters to Numbers Translator",
    description: "Use our free letters to numbers translator to instantly convert any text to numerical values.",
    type: "article",
  },
}

export default function LettersToNumbersTranslatorPage() {
  return (
    <main className="min-h-screen bg-background">
      
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
                Letters to Numbers Translator
              </h1>
              <p className="text-muted-foreground mb-4">
                Your complete guide to translating letters into numbers
              </p>
              <ShareButton title="Letters to Numbers Translator" />
            </header>

            <Image
              src="/images/blog/letters-to-numbers-translator.jpg"
              alt="Letters to numbers translator interface showing text being converted to numerical values"
              width={800}
              height={400}
              className="rounded-lg mb-8 w-full object-cover"
              priority
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A <strong>letters to numbers translator</strong> is an essential tool for anyone working with coded messages, puzzles, or data encoding. Whether you need to translate text for a geocaching puzzle, decode a secret message, or convert text for programming purposes, understanding how to translate letters to numbers is a valuable skill.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-2">Try Our Free Translator</h3>
                <p className="text-muted-foreground mb-4">
                  Instantly translate any text to numbers with our free online tool.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Open Letters to Numbers Translator
                </Link>
              </div>

                        <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#how-the-letters-to-numbers-translator-works" className="text-primary hover:underline">How the Letters to Numbers Translator Works</a></li>
            <li><a href="#translation-examples" className="text-primary hover:underline">Translation Examples</a></li>
            <li><a href="#why-translate-letters-to-numbers" className="text-primary hover:underline">Why Translate Letters to Numbers?</a></li>
            <li><a href="#types-of-letter-number-translation" className="text-primary hover:underline">Types of Letter-Number Translation</a></li>
            <li><a href="#tips-for-translating-letters-to-numbers" className="text-primary hover:underline">Tips for Translating Letters to Numbers</a></li>
            <li><a href="#use-our-online-letters-to-numbers-translator" className="text-primary hover:underline">Use Our Online Letters to Numbers Translator</a></li>
            </ol>
          </nav>

<h2 id="how-it-works" className="text-2xl font-bold text-foreground mt-10 mb-4">How the Letters to Numbers Translator Works</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The letters to numbers translator uses a simple substitution method where each letter of the alphabet corresponds to a specific number. In the standard A1Z26 system, the translation follows the letter&apos;s position in the alphabet: A translates to 1, B translates to 2, C translates to 3, and so on until Z translates to 26.
              </p>

              <h3 id="translation-table" className="text-xl font-semibold text-foreground mt-8 mb-4">Complete Translation Reference</h3>
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

              <h2 id="translation-examples" className="text-2xl font-bold text-foreground mt-10 mb-4">Translation Examples</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Here are some examples of how the letters to numbers translator works:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">HELLO</p>
                  <p className="text-muted-foreground font-mono">8 - 5 - 12 - 12 - 15</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">WORLD</p>
                  <p className="text-muted-foreground font-mono">23 - 15 - 18 - 12 - 4</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">SECRET</p>
                  <p className="text-muted-foreground font-mono">19 - 5 - 3 - 18 - 5 - 20</p>
                </div>
              </div>

              <h2 id="why-translate" className="text-2xl font-bold text-foreground mt-10 mb-4">Why Translate Letters to Numbers?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                There are many practical reasons to use a letters to numbers translator:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Puzzle solving:</strong> Geocaching coordinates, escape room clues, and treasure hunts often use letter-to-number codes</li>
                <li><strong>Cryptography:</strong> Understanding basic cipher systems and creating encoded messages</li>
                <li><strong>Education:</strong> Teaching children about the alphabet and number relationships</li>
                <li><strong>Programming:</strong> Converting text to numerical values for data processing</li>
                <li><strong>Secret communication:</strong> Creating simple coded messages between friends</li>
                <li><strong>Brain training:</strong> Mental exercises for memory and pattern recognition</li>
              </ul>

              <h2 id="translation-types" className="text-2xl font-bold text-foreground mt-10 mb-4">Types of Letter-Number Translation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> supports multiple translation formats:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">A1Z26 (Standard)</h4>
                  <p className="text-muted-foreground text-sm">The most common translation where A=1 through Z=26. Perfect for puzzles and basic encoding.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">ASCII Translation</h4>
                  <p className="text-muted-foreground text-sm">Uses the ASCII standard where uppercase A=65 through Z=90 and lowercase a=97 through z=122.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Hexadecimal</h4>
                  <p className="text-muted-foreground text-sm">Translates letters to their hexadecimal ASCII values (A=41, B=42, etc.).</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Binary</h4>
                  <p className="text-muted-foreground text-sm">Converts letters to 8-bit binary representation for computer science applications.</p>
                </div>
              </div>

              <h2 id="tips" className="text-2xl font-bold text-foreground mt-10 mb-4">Tips for Translating Letters to Numbers</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here are some helpful tips for working with letter-to-number translation:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Remember the &quot;EJOTY&quot; trick: E=5, J=10, O=15, T=20, Y=25 (multiples of 5)</li>
                <li>Translation is case-insensitive - uppercase and lowercase letters produce the same numbers</li>
                <li>Use separators (spaces, dashes, or commas) between numbers to avoid ambiguity</li>
                <li>For reverse translation (numbers to letters), ensure numbers are between 1-26</li>
              </ul>

              <h2 id="online-translator" className="text-2xl font-bold text-foreground mt-10 mb-4">Use Our Online Letters to Numbers Translator</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our free <Link href="/" className="text-primary hover:underline">letters to numbers translator</Link> makes translation instant and effortless. Simply type or paste your text, select your preferred translation format, and get your results immediately. The tool works both ways - translate letters to numbers or numbers back to letters with a single click.
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Translate?</h3>
              <p className="text-muted-foreground mb-4">
                Use our free letters to numbers translator tool to instantly convert your text.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Letters to Numbers Translator
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </article>

    </main>
  )
}
