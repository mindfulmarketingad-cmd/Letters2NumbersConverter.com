import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookCipherDecoder } from "@/components/book-cipher-decoder"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "Book Cipher Decoder | Decode Hidden Messages from Books",
  description: "Free book cipher decoder tool to decode hidden messages using book references. Enter book text and numerical codes to reveal secret messages encoded in literature.",
  keywords: ["book cipher decoder", "book cipher", "beale cipher", "ottendorf cipher", "book code decoder", "literary cipher"],
}

export default function BookCipherDecoderPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 id="book-cipher-decoder" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Book Cipher Decoder
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The <strong>book cipher decoder</strong> is a powerful tool for decoding hidden messages that reference specific positions in a book or text. Used historically for secure communication, book ciphers encode messages by pointing to words or letters within a shared text source.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden">
            <Image 
              src="/images/tools/book-cipher-decoder-hero.jpg"
              alt="Book cipher decoder showing an open book with highlighted words and numerical codes pointing to hidden message locations"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main Tool */}
          <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <BookCipherDecoder />
          </div>

          {/* Educational Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 id="what-is" className="text-2xl font-bold text-foreground mb-4">What is a Book Cipher?</h2>
              <p className="text-foreground leading-relaxed">
                A book cipher (also known as an Ottendorf cipher or Beale cipher) is an encryption method where each word or letter of the secret message is replaced by a reference to the position of that word or letter in a &quot;key&quot; book. The beauty of this cipher is that without knowing which book is being used, the code is virtually impossible to break.
              </p>
            </section>

            <section>
              <h2 id="how-it-works" className="text-2xl font-bold text-foreground mb-4">How Book Ciphers Work</h2>
              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <p className="text-foreground">
                  Book ciphers use numerical references to point to specific locations in a text:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground">
                  <li><strong>Page:Line:Word</strong> - Reference a word by its page, line, and word position</li>
                  <li><strong>Line:Word</strong> - Reference a word by line and word position within that line</li>
                  <li><strong>Line:Word:Character</strong> - Reference a specific character within a word</li>
                  <li><strong>Word only</strong> - Reference words by their sequential position in the entire text</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 id="example" className="text-2xl font-bold text-foreground mb-4">Book Cipher Example</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-3">Given this book text:</p>
                <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto mb-4">
{`The quick brown fox jumps over the lazy dog.
She sells seashells by the seashore.
Pack my box with five dozen liquor jugs.`}
                </pre>
                <p className="text-muted-foreground mb-2">With codes (Line:Word format): <code className="bg-muted px-1.5 rounded">1:2 2:3 3:4</code></p>
                <p className="text-foreground">Result: <span className="text-primary font-mono">quick seashells with</span></p>
                <p className="text-sm text-muted-foreground mt-3">
                  (Line 1, Word 2 = &quot;quick&quot;; Line 2, Word 3 = &quot;seashells&quot;; Line 3, Word 4 = &quot;with&quot;)
                </p>
              </div>
            </section>

            <section>
              <h2 id="famous" className="text-2xl font-bold text-foreground mb-4">Famous Book Ciphers in History</h2>
              <ul className="list-disc pl-6 space-y-3 text-foreground">
                <li>
                  <strong>Beale Ciphers (1885)</strong> - Three encrypted messages allegedly revealing the location of buried treasure in Virginia. Uses the Declaration of Independence as the key text.
                </li>
                <li>
                  <strong>Arnold Cipher (Revolutionary War)</strong> - Benedict Arnold used a book cipher based on Blackstone&apos;s Commentaries to communicate with the British.
                </li>
                <li>
                  <strong>Zodiac Killer Ciphers</strong> - Some theories suggest portions use book cipher techniques.
                </li>
              </ul>
            </section>

            <section>
              <h2 id="uses" className="text-2xl font-bold text-foreground mb-4">Modern Uses of Book Ciphers</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li><strong>Escape rooms</strong> - Book cipher puzzles are popular in escape room challenges</li>
                <li><strong>ARGs &amp; treasure hunts</strong> - Alternate reality games often include book cipher clues</li>
                <li><strong>Geocaching</strong> - Mystery cache coordinates may be encoded using book ciphers</li>
                <li><strong>Education</strong> - Teaching cryptography and historical encryption methods</li>
                <li><strong>CTF competitions</strong> - Capture The Flag challenges may include book cipher puzzles</li>
              </ul>
            </section>

            <section>
              <h2 id="tips" className="text-2xl font-bold text-foreground mb-4">Tips for Decoding Book Ciphers</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Identify the Format</h3>
                  <p className="text-sm text-muted-foreground">Determine if codes reference page:line:word, line:word, or other combinations based on the number of parts in each code.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Check Numbering Start</h3>
                  <p className="text-sm text-muted-foreground">Some ciphers start counting at 0, others at 1. Try both if results seem off.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">First Letter Method</h3>
                  <p className="text-sm text-muted-foreground">Many book ciphers only use the first letter of each referenced word to spell out the message.</p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Find the Key Text</h3>
                  <p className="text-sm text-muted-foreground">The hardest part is often identifying which book or document was used as the key.</p>
                </div>
              </div>
            </section>

            {/* Related Tool CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Need More Decoding Tools?</h3>
              <p className="text-muted-foreground mb-4">
                Check out our <Link href="/" className="text-primary hover:underline">letters to numbers converter</Link> for A1Z26, ASCII, and other encoding formats.
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Try Letters to Numbers Converter
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
