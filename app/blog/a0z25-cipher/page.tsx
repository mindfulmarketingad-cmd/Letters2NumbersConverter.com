import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "A0Z25 Cipher",
  description: "Learn about the A0Z25 cipher, a zero-indexed letter-to-number encoding system where A=0, B=1, through Z=25. Perfect for programming and computer science applications.",
  keywords: ["A0Z25 cipher", "zero-indexed cipher", "A=0 B=1 cipher", "alphabet cipher", "letter to number", "programming cipher"],
  openGraph: {
    title: "A0Z25 Cipher",
    description: "Learn about the A0Z25 cipher, a zero-indexed letter-to-number encoding system used in programming and computer science.",
    type: "article",
  },
}

export default function A0Z25CipherPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
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
            
            <h1 id="a0z25-cipher" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              A0Z25 Cipher
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The A0Z25 cipher is a zero-indexed variation of the classic letter-to-number encoding system. Unlike the traditional A1Z26 cipher where A=1, the A0Z25 system starts at zero, making it essential for programmers and computer scientists.
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
            <h2 id="what-is-a0z25">What is the A0Z25 Cipher?</h2>
            <p>
              The A0Z25 cipher is a simple substitution cipher that assigns each letter of the alphabet a number starting from zero. In this system, A equals 0, B equals 1, C equals 2, and so on until Z equals 25. This creates a direct mapping between the 26 letters and the numbers 0-25.
            </p>
            <p>
              This zero-based indexing aligns perfectly with how most programming languages handle arrays and strings, making it the preferred encoding for developers working with text manipulation algorithms.
            </p>
            <p>
              Ready to try it yourself? Use our free <Link href="/" className="text-primary hover:underline font-semibold">letters to numbers converter</Link> to instantly encode or decode A0Z25 messages.
            </p>

            <h2 id="complete-chart">Complete A0Z25 Reference Chart</h2>
            <p>Here is the complete A0Z25 cipher mapping:</p>
            
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

            <h2 id="a0z25-vs-a1z26">A0Z25 vs A1Z26: Key Differences</h2>
            <p>
              While both ciphers serve the same basic purpose of converting letters to numbers, there are important differences:
            </p>
            <ul>
              <li><strong>Starting Index:</strong> A1Z26 starts at 1 (A=1), while A0Z25 starts at 0 (A=0)</li>
              <li><strong>Range:</strong> A1Z26 produces values 1-26, A0Z25 produces values 0-25</li>
              <li><strong>Programming:</strong> A0Z25 matches array indexing in most languages</li>
              <li><strong>Modular Arithmetic:</strong> A0Z25 works directly with mod 26 operations</li>
            </ul>
            <p>
              Both encoding types are available in our <Link href="/" className="text-primary hover:underline font-semibold">letters to numbers converter tool</Link>, so you can easily switch between them.
            </p>

            <h2 id="why-zero-indexing">Why Use Zero-Based Indexing?</h2>
            <p>
              Zero-based indexing is the standard in computer science for several important reasons:
            </p>
            <ul>
              <li><strong>Array Access:</strong> In languages like Python, JavaScript, C, and Java, the first element of an array is at index 0</li>
              <li><strong>Memory Offsets:</strong> Zero indexing directly represents memory offsets from the base address</li>
              <li><strong>Modular Arithmetic:</strong> Calculations with mod 26 work cleanly without adjustments</li>
              <li><strong>Caesar Cipher:</strong> Implementing shifts becomes simpler: (letter + shift) mod 26</li>
            </ul>

            <h2 id="encoding-examples">A0Z25 Encoding Examples</h2>
            <p>
              Let&apos;s look at some practical encoding examples:
            </p>
            
            <div className="not-prose my-8 space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: HELLO</p>
                <p className="font-mono text-lg text-foreground">H=7, E=4, L=11, L=11, O=14</p>
                <p className="text-primary font-semibold">Encoded: 7-4-11-11-14</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: ZERO</p>
                <p className="font-mono text-lg text-foreground">Z=25, E=4, R=17, O=14</p>
                <p className="text-primary font-semibold">Encoded: 25-4-17-14</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: CODE</p>
                <p className="font-mono text-lg text-foreground">C=2, O=14, D=3, E=4</p>
                <p className="text-primary font-semibold">Encoded: 2-14-3-4</p>
              </div>
            </div>
            
            <p>
              Try encoding your own messages with our <Link href="/" className="text-primary hover:underline font-semibold">free A0Z25 converter</Link>.
            </p>

            <h2 id="programming-applications">Programming Applications</h2>
            <p>
              The A0Z25 cipher is particularly useful in programming contexts:
            </p>
            <ul>
              <li><strong>String Manipulation:</strong> Convert characters to indices for array lookups</li>
              <li><strong>Cryptography Algorithms:</strong> Implement Caesar, Vigenere, and other ciphers</li>
              <li><strong>Data Encoding:</strong> Transform text for specialized processing</li>
              <li><strong>Hashing Functions:</strong> Use letter values in hash calculations</li>
              <li><strong>Puzzle Solving:</strong> Decode CTF challenges and puzzle games</li>
            </ul>

            <h3 id="code-example">Quick Code Example</h3>
            <p>Here&apos;s how you can implement A0Z25 encoding in JavaScript:</p>
            
            <div className="not-prose my-6">
              <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <code className="text-sm font-mono text-foreground">{`// A0Z25 Encoding in JavaScript
function encodeA0Z25(text) {
  return text.toUpperCase()
    .split('')
    .filter(char => /[A-Z]/.test(char))
    .map(char => char.charCodeAt(0) - 65)
    .join('-');
}

// Example usage
console.log(encodeA0Z25("HELLO")); // Output: 7-4-11-11-14`}</code>
              </pre>
            </div>

            <h2 id="common-uses">Common Uses for A0Z25</h2>
            <p>
              The A0Z25 cipher appears in many contexts:
            </p>
            <ul>
              <li><strong>Computer Science Education:</strong> Teaching array indexing and character encoding</li>
              <li><strong>CTF Competitions:</strong> Capture The Flag cybersecurity challenges</li>
              <li><strong>Puzzle Games:</strong> Escape rooms and mystery puzzles</li>
              <li><strong>Geocaching:</strong> Coordinate puzzles requiring decoding</li>
              <li><strong>Secret Messages:</strong> Simple encoding for fun communications</li>
            </ul>

            <h2 id="how-to-decode">How to Decode A0Z25 Messages</h2>
            <p>
              Decoding A0Z25 is straightforward - simply reverse the process:
            </p>
            <ol>
              <li>Take each number in the encoded message</li>
              <li>Add 65 to get the ASCII code (for uppercase letters)</li>
              <li>Convert the ASCII code to the corresponding letter</li>
            </ol>
            <p>
              For example, to decode &quot;7-4-11-11-14&quot;:
            </p>
            <ul>
              <li>7 + 65 = 72 = H</li>
              <li>4 + 65 = 69 = E</li>
              <li>11 + 65 = 76 = L</li>
              <li>11 + 65 = 76 = L</li>
              <li>14 + 65 = 79 = O</li>
            </ul>
            <p>Result: HELLO</p>
            <p>
              Skip the math and use our <Link href="/" className="text-primary hover:underline font-semibold">letters to numbers converter</Link> for instant encoding and decoding.
            </p>

            <h2 id="tips-for-quick-conversion">Tips for Quick Mental Conversion</h2>
            <p>
              Memorize these key reference points for faster A0Z25 conversion:
            </p>
            <ul>
              <li><strong>A = 0</strong> (start of alphabet)</li>
              <li><strong>E = 4</strong> (most common letter)</li>
              <li><strong>J = 9</strong> (end of first third)</li>
              <li><strong>M = 12</strong> (middle letter, halfway point)</li>
              <li><strong>N = 13</strong> (just past middle)</li>
              <li><strong>T = 19</strong> (second most common letter)</li>
              <li><strong>Z = 25</strong> (end of alphabet)</li>
            </ul>

            <h2 id="conclusion">Conclusion</h2>
            <p>
              The A0Z25 cipher is an essential tool for anyone working with text encoding in programming or cryptography. Its zero-based indexing aligns perfectly with modern programming conventions, making it the preferred choice for developers implementing cipher algorithms.
            </p>
            <p>
              Whether you&apos;re solving puzzles, learning cryptography, or building encoding applications, understanding A0Z25 gives you a solid foundation. Use our <Link href="/" className="text-primary hover:underline font-semibold">free letters to numbers converter tool</Link> to practice encoding and decoding messages instantly.
            </p>

            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">Try A0Z25 Encoding Now</h3>
              <p className="text-muted-foreground mb-4">
                Use our free converter to encode or decode A0Z25 messages instantly. Just select &quot;Zero-based (A0Z25)&quot; from the encoding options.
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
