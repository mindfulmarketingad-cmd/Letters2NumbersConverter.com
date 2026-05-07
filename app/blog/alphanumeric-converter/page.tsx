import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Alphanumeric Converter | Convert Text to Numbers & Codes",
  description: "Free alphanumeric converter tool to transform text into numbers, ASCII codes, hex, and binary. Convert between letters and numeric representations instantly.",
  keywords: ["alphanumeric converter", "text to numbers", "letter converter", "ASCII converter", "hex converter", "binary converter"],
  authors: [{ name: "Neo" }],
}

export default function AlphanumericConverterPage() {
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
                Alphanumeric Converter
              </h1>
              <p className="text-muted-foreground mb-4">
                The ultimate guide to converting between letters, numbers, and various encoding formats
              </p>
              <ShareButton title="Alphanumeric Converter" />
            </header>

            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
              <Image 
                src="/images/blog/alphanumeric-converter-hero.jpg"
                alt="Alphanumeric converter showing text transforming into numbers and digital codes"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              An <strong>alphanumeric converter</strong> is a powerful tool that transforms text between letters, numbers, and various digital encoding formats. Whether you need to convert text to A1Z26 numbers, ASCII codes, hexadecimal, or binary, understanding alphanumeric conversion opens up a world of possibilities in coding, cryptography, and data processing.
            </p>

            {/* Quick Tool CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Try Our Alphanumeric Converter</h3>
              <p className="text-muted-foreground mb-4">
                Convert any text to numbers, ASCII, hex, or binary instantly with our free online tool.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Alphanumeric Converter Tool
              </Link>
            </div>

            <h2 id="what-is" className="text-2xl font-bold text-foreground mt-10 mb-4">What is Alphanumeric Conversion?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Alphanumeric conversion is the process of transforming characters (letters, numbers, and symbols) into different numeric or coded representations. This fundamental concept is used throughout computing, cryptography, and data science.
            </p>

            <h2 id="types" className="text-2xl font-bold text-foreground mt-10 mb-4">Types of Alphanumeric Conversion</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Our <Link href="/" className="text-primary hover:underline">letters to numbers converter</Link> supports multiple alphanumeric conversion formats:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">A1Z26 (Standard Alphabet Position)</h3>
                <p className="text-muted-foreground mb-3">Each letter equals its position in the alphabet: A=1, B=2, ... Z=26</p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">HELLO</span> → <span className="text-primary">8-5-12-12-15</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">ASCII (American Standard Code)</h3>
                <p className="text-muted-foreground mb-3">Each character has a unique decimal code (A=65, a=97, etc.)</p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">Hello</span> → <span className="text-primary">72 101 108 108 111</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Hexadecimal (Base-16)</h3>
                <p className="text-muted-foreground mb-3">ASCII values converted to base-16 using digits 0-9 and A-F</p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">Hello</span> → <span className="text-primary">48 65 6C 6C 6F</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Binary (Base-2)</h3>
                <p className="text-muted-foreground mb-3">ASCII values as 8-bit binary numbers (0s and 1s)</p>
                <div className="font-mono bg-muted/50 p-3 rounded text-sm">
                  <span className="text-foreground">Hi</span> → <span className="text-primary">01001000 01101001</span>
                </div>
              </div>
            </div>

            <h2 id="uses" className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Uses of Alphanumeric Conversion</h2>
            <ul className="list-disc pl-6 space-y-3 text-foreground mb-6">
              <li>
                <strong>Programming &amp; Development</strong> - Understanding character encoding is essential for handling text in code, working with APIs, and processing data files.
              </li>
              <li>
                <strong>Cryptography &amp; Puzzles</strong> - Many ciphers and puzzle games use alphanumeric conversion as a foundation for encoding secret messages.
              </li>
              <li>
                <strong>Data Transmission</strong> - Binary and hexadecimal are fundamental to how computers store and transmit information.
              </li>
              <li>
                <strong>CTF Challenges</strong> - Capture The Flag competitions often include challenges requiring quick alphanumeric conversion skills.
              </li>
              <li>
                <strong>Education</strong> - Learning alphanumeric conversion builds understanding of how computers process text.
              </li>
            </ul>

            <h2 id="comparison" className="text-2xl font-bold text-foreground mt-10 mb-4">Encoding Format Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left text-foreground">Format</th>
                    <th className="border border-border p-3 text-left text-foreground">Best For</th>
                    <th className="border border-border p-3 text-left text-foreground">Example (A)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 text-foreground">A1Z26</td>
                    <td className="border border-border p-3 text-muted-foreground">Puzzles, simple codes</td>
                    <td className="border border-border p-3 font-mono text-primary">1</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">ASCII</td>
                    <td className="border border-border p-3 text-muted-foreground">Programming, data</td>
                    <td className="border border-border p-3 font-mono text-primary">65</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Hexadecimal</td>
                    <td className="border border-border p-3 text-muted-foreground">Memory, colors, encoding</td>
                    <td className="border border-border p-3 font-mono text-primary">41</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 text-foreground">Binary</td>
                    <td className="border border-border p-3 text-muted-foreground">Computer science, low-level</td>
                    <td className="border border-border p-3 font-mono text-primary">01000001</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="how-to" className="text-2xl font-bold text-foreground mt-10 mb-4">How to Use Our Alphanumeric Converter</h2>
            <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
              <li>Visit our <Link href="/" className="text-primary hover:underline">alphanumeric converter tool</Link></li>
              <li>Enter or paste any text in the input field</li>
              <li>Select your desired encoding format (A1Z26, ASCII, Hex, or Binary)</li>
              <li>View the instant conversion results</li>
              <li>Copy the output with one click</li>
            </ol>

            <h2 id="tips" className="text-2xl font-bold text-foreground mt-10 mb-4">Pro Tips for Alphanumeric Conversion</h2>
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <ul className="space-y-3 text-foreground">
                <li><strong>Case matters in ASCII</strong> - Uppercase A is 65, lowercase a is 97</li>
                <li><strong>Hex prefix</strong> - Hexadecimal often uses &quot;0x&quot; prefix (0x41 = A)</li>
                <li><strong>Binary bytes</strong> - Standard ASCII uses 7-8 bits per character</li>
                <li><strong>A1Z26 is case-insensitive</strong> - Both &apos;A&apos; and &apos;a&apos; convert to 1</li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Convert Text Now</h3>
              <p className="text-muted-foreground mb-4">
                Use our free alphanumeric converter to transform any text into numbers, ASCII, hex, or binary.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Try the Alphanumeric Converter
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
