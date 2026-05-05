import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "A1Z26 Translator | Convert Letters to Numbers Instantly",
  description: "Use our free A1Z26 translator to convert letters to numbers and numbers to letters. The A1Z26 cipher assigns A=1, B=2 through Z=26 for easy encoding and decoding.",
  keywords: ["A1Z26 translator", "A1Z26 cipher", "letter to number", "alphabet cipher", "A1Z26 decoder", "A1Z26 encoder"],
}

export default function A1Z26TranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="prose prose-lg max-w-none">
            <header className="mb-8">
              <h1 id="intro" className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                A1Z26 Translator
              </h1>
              <p className="text-muted-foreground mb-4">
                Your complete guide to translating text using the A1Z26 cipher system
              </p>
              <ShareButton title="A1Z26 Translator" />
            </header>

            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
              <Image 
                src="/images/blog/a1z26-translator-hero.jpg"
                alt="A1Z26 translator showing alphabet letters A-Z converting to numbers 1-26"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              The <strong>A1Z26 translator</strong> is an essential tool for anyone working with letter-to-number ciphers, puzzles, or cryptographic challenges. Whether you&apos;re solving escape room puzzles, decoding geocaching mysteries, or learning about basic cryptography, understanding how to translate between letters and numbers using the A1Z26 system is a fundamental skill.
            </p>

            {/* Quick Tool CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Try Our A1Z26 Translator Now</h3>
              <p className="text-muted-foreground mb-4">
                Instantly convert any text to A1Z26 numbers or decode numbers back to letters with our free online tool.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open A1Z26 Translator Tool
              </Link>
            </div>

            <h2 id="what-is" className="text-2xl font-bold text-foreground mt-10 mb-4">What is the A1Z26 Cipher?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The A1Z26 cipher is a simple substitution cipher where each letter of the English alphabet is replaced by its corresponding position number. The name &quot;A1Z26&quot; comes from the first and last mappings: A equals 1, and Z equals 26.
            </p>

            <h2 id="chart" className="text-2xl font-bold text-foreground mt-10 mb-4">Complete A1Z26 Translation Chart</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-8">
              {Array.from({ length: 26 }, (_, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3 text-center">
                  <span className="text-xl font-bold text-primary">{String.fromCharCode(65 + i)}</span>
                  <span className="text-muted-foreground mx-2">=</span>
                  <span className="text-xl font-mono text-foreground">{i + 1}</span>
                </div>
              ))}
            </div>

            <h2 id="how-to-use" className="text-2xl font-bold text-foreground mt-10 mb-4">How to Use an A1Z26 Translator</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Using an A1Z26 translator is straightforward. Our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> makes the process instant:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
              <li><strong>Enter your text</strong> - Type or paste any text you want to translate</li>
              <li><strong>Select A1Z26 encoding</strong> - Choose the standard A1Z26 format from the dropdown</li>
              <li><strong>View the translation</strong> - See your text instantly converted to numbers</li>
              <li><strong>Copy the result</strong> - Use the copy button to grab your translated text</li>
            </ol>

            <h2 id="examples" className="text-2xl font-bold text-foreground mt-10 mb-4">A1Z26 Translation Examples</h2>
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Text:</p>
                  <p className="font-mono text-foreground">HELLO</p>
                  <p className="text-sm text-muted-foreground mt-2 mb-1">A1Z26 Translation:</p>
                  <p className="font-mono text-primary">8-5-12-12-15</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-1">Text:</p>
                  <p className="font-mono text-foreground">SECRET</p>
                  <p className="text-sm text-muted-foreground mt-2 mb-1">A1Z26 Translation:</p>
                  <p className="font-mono text-primary">19-5-3-18-5-20</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-muted-foreground mb-1">Text:</p>
                  <p className="font-mono text-foreground">PUZZLE</p>
                  <p className="text-sm text-muted-foreground mt-2 mb-1">A1Z26 Translation:</p>
                  <p className="font-mono text-primary">16-21-26-26-12-5</p>
                </div>
              </div>
            </div>

            <h2 id="uses" className="text-2xl font-bold text-foreground mt-10 mb-4">Common Uses for A1Z26 Translation</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-6">
              <li><strong>Escape rooms</strong> - Number locks often use A1Z26 encoded clues</li>
              <li><strong>Geocaching</strong> - Mystery caches frequently hide coordinates in A1Z26</li>
              <li><strong>Puzzles &amp; games</strong> - Crosswords, treasure hunts, and ARGs use this cipher</li>
              <li><strong>Education</strong> - Teaching basic cryptography concepts to students</li>
              <li><strong>Secret messages</strong> - Simple encoding for fun communications</li>
            </ul>

            <h2 id="tips" className="text-2xl font-bold text-foreground mt-10 mb-4">Quick Mental Translation Tips</h2>
            <p className="text-foreground leading-relaxed mb-4">
              For quick A1Z26 translations without a tool, memorize these anchor points:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <p className="font-mono text-foreground">
                E=5, J=10, O=15, T=20, Y=25
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                These &quot;milestone letters&quot; help you quickly calculate nearby letters.
              </p>
            </div>

            <h2 id="reverse" className="text-2xl font-bold text-foreground mt-10 mb-4">Reverse Translation: Numbers to Letters</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Our <Link href="/" className="text-primary hover:underline">A1Z26 translator</Link> also works in reverse. Simply enter numbers separated by spaces, commas, or dashes, and the tool will decode them back to letters instantly.
            </p>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Translating Now</h3>
              <p className="text-muted-foreground mb-4">
                Use our free A1Z26 translator to encode or decode any text instantly. No signup required.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Try the A1Z26 Translator Tool
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
