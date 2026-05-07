import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"
import Script from "next/script"

export const metadata: Metadata = {
  title: "A0Z25 Cipher",
  description: "Learn about the A0Z25 cipher - a zero-indexed letter-to-number encoding system where A=0, B=1, through Z=25. Perfect for programming and computer science applications.",
  keywords: ["A0Z25 cipher", "A0Z25", "zero-indexed cipher", "A=0 B=1 cipher", "alphabet cipher", "letter to number", "programming cipher"],
  openGraph: {
    title: "A0Z25 Cipher | Letters2NumbersConverter.com",
    description: "Complete guide to the A0Z25 cipher - an alphanumeric encoding system used in cryptography, programming, and puzzle solving.",
    type: "article",
    url: "https://www.letters2numbersconverter.com/blog/a0z25-cipher",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/blog/a0z25-cipher",
  },
}

export default function A0Z25CipherPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A0Z25 Cipher",
    description: "Complete guide to the A0Z25 cipher encoding system - a zero-indexed letter-to-number encoding where A=0 and Z=25, used in programming, cryptography, and puzzle solving.",
    image: "https://www.letters2numbersconverter.com/images/blog/a0z25-cipher-hero.jpg",
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Neo",
    },
    publisher: {
      "@type": "Organization",
      name: "Letters2NumbersConverter",
      logo: {
        "@type": "ImageObject",
        url: "https://www.letters2numbersconverter.com/logo.png",
      },
    },
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Script
        id="a0z25-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main className="py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              A0Z25 Cipher
            </h1>
            <div className="mb-6">
              <ShareButton title="A0Z25 Cipher" />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A0Z25 is a zero-indexed letter-to-number encoding system where each letter of the alphabet is assigned a value from 0 to 25. Unlike the traditional A1Z26 cipher, the A0Z25 cipher starts counting from zero, making it essential for programmers, cryptographers, and puzzle enthusiasts worldwide.
            </p>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/blog/a0z25-cipher-hero.jpg"
              alt="A0Z25 cipher chart showing zero-indexed alphabet A=0 through Z=25"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>What is the A0Z25 Cipher?</h2>
            <p>
              The A0Z25 cipher is a simple substitution cipher that assigns each letter of the alphabet a number starting from zero. In this system, A equals 0, B equals 1, C equals 2, and so on until Z equals 25. This creates a direct and intuitive mapping between the 26 letters and the numbers 0-25.
            </p>
            <p>
              This zero-based indexing aligns perfectly with how most programming languages handle arrays and strings, making it the preferred encoding for developers working with text manipulation algorithms and cryptographic implementations.
            </p>
            <p>
              Ready to encode or decode messages? Use our free <Link href="/" className="text-primary hover:underline font-semibold">letters to numbers converter</Link> to instantly convert text using A0Z25 and many other encoding systems.
            </p>

            <h2>Complete A0Z25 Reference Chart</h2>
            <p>Here is the complete A0Z25 cipher mapping showing all 26 letters and their corresponding zero-indexed values:</p>
            
            <div className="not-prose my-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {Array.from({ length: 26 }, (_, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-3 text-center">
                    <span className="text-2xl font-bold text-primary">{String.fromCharCode(65 + i)}</span>
                    <span className="text-muted-foreground mx-2">=</span>
                    <span className="text-xl font-mono text-foreground">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2>A0Z25 vs A1Z26: Key Differences</h2>
            <p>
              While both ciphers serve the same basic purpose of converting letters to numbers, there are important differences:
            </p>
            <ul>
              <li><strong>Starting Index:</strong> A1Z26 starts at 1 (A=1), while A0Z25 starts at 0 (A=0)</li>
              <li><strong>Range:</strong> A1Z26 produces values 1-26, A0Z25 produces values 0-25</li>
              <li><strong>Programming:</strong> A0Z25 matches array indexing in most languages</li>
              <li><strong>Modular Arithmetic:</strong> A0Z25 works directly with mod 26 operations</li>
            </ul>

            <h2>Why Use Zero-Based Indexing?</h2>
            <p>
              Zero-based indexing is the standard in computer science for several important reasons:
            </p>
            <ul>
              <li><strong>Array Access:</strong> The first element of an array is always at index 0 in Python, JavaScript, C, and Java</li>
              <li><strong>Memory Offsets:</strong> Zero indexing directly represents memory offsets from the base address</li>
              <li><strong>Modular Arithmetic:</strong> Calculations work cleanly without additional adjustments</li>
              <li><strong>Consistency:</strong> Matches all major programming languages</li>
            </ul>

            <h2>Practical Examples</h2>
            <div className="not-prose my-8 space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: HELLO</p>
                <p className="font-mono text-lg text-foreground">H=7, E=4, L=11, L=11, O=14</p>
                <p className="text-primary font-semibold">Encoded: 7-4-11-11-14</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: CODE</p>
                <p className="font-mono text-lg text-foreground">C=2, O=14, D=3, E=4</p>
                <p className="text-primary font-semibold">Encoded: 2-14-3-4</p>
              </div>
            </div>

            <h2>Real-World Uses</h2>
            <p>
              The A0Z25 cipher appears across numerous practical contexts:
            </p>
            <ul>
              <li><strong>Computer Science Education:</strong> Teaching array indexing and character encoding</li>
              <li><strong>CTF Competitions:</strong> Capture The Flag cybersecurity challenges</li>
              <li><strong>Puzzle Games:</strong> Escape rooms and mystery puzzles</li>
              <li><strong>Geocaching:</strong> Coordinate puzzles requiring decoding</li>
              <li><strong>Cryptography:</strong> Implementing cipher algorithms</li>
            </ul>

            <h2>How to Decode A0Z25</h2>
            <p>
              Decoding A0Z25 is straightforward - reverse the encoding process. Simply add 65 to each number and convert the ASCII code to its corresponding letter. For example, to decode "7-4-11-11-14": 7+65=H, 4+65=E, 11+65=L, 11+65=L, 14+65=O = HELLO.
            </p>
            <p>
              Use our <Link href="/" className="text-primary hover:underline font-semibold">free letters to numbers converter</Link> for instant encoding and decoding of any A0Z25 message.
            </p>

            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Encode or Decode A0Z25?</h3>
              <p className="text-muted-foreground mb-4">
                Use our powerful free converter to encode or decode A0Z25 messages instantly. Select "Zero-based (A0Z25)" from the encoding options to get started.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Letters to Numbers Converter
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
