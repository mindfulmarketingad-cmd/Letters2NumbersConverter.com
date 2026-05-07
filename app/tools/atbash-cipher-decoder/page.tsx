import { Metadata } from "next"
import { AtbashCipherSolver } from "@/components/atbash-cipher-solver"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Atbash Cipher Decoder",
  description: "Atbash Cipher Decoder - Encrypt and decrypt messages using the mirror alphabet substitution cipher. An involutory cipher where the same process works for both encryption and decryption.",
  keywords: ["Atbash cipher decoder", "Atbash cipher", "substitution cipher", "mirror cipher", "reverse alphabet"],
  openGraph: {
    title: "Atbash Cipher Decoder",
    description: "Decrypt and encrypt Atbash cipher messages with our free online tool",
    type: "website",
  },
}

export default function AtbashCipherPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Atbash Cipher Decoder",
    description: "Free online tool to encode and decode Atbash cipher messages",
    url: "https://letters2numbersconverter.com/tools/atbash-cipher-decoder",
    applicationCategory: "UtilityApplication",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <main className="flex-1">
          <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4">
              {/* Center Aligned Title */}
              <div className="mb-12 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4 text-balance">
                  Atbash Cipher Decoder
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Atbash Cipher Decoder - Encrypt and decrypt messages using the ancient mirror alphabet substitution cipher. An involutory system where the same process works for both encryption and decryption.
                </p>
              </div>

              {/* Main Tool */}
              <div className="w-full mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
                <AtbashCipherSolver />
              </div>

              {/* How It Works */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Cryptography Students</strong> - Learn about simple substitution ciphers</li>
                    <li><strong>Puzzle Enthusiasts</strong> - Solve Atbash cipher puzzles and challenges</li>
                    <li><strong>Historical Cipher Researchers</strong> - Study ancient Hebrew cipher systems</li>
                    <li><strong>Game Players</strong> - Decode hidden messages in games and riddles</li>
                    <li><strong>Security Researchers</strong> - Understand basic cipher mechanics</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Enter your message in the Input field</p>
                    <p><strong>Step 2:</strong> The Atbash cipher automatically converts each letter to its mirror position</p>
                    <p><strong>Step 3:</strong> View the output instantly in the Output field</p>
                    <p><strong>Step 4:</strong> Copy the result or modify the custom alphabet for variations</p>
                  </div>
                </div>
              </div>

              {/* Atbash Details */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Understanding Atbash Cipher</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Atbash cipher is one of the oldest known ciphers, originating in Hebrew and used in ancient times. It is a simple substitution cipher where each letter is replaced by its reverse in the alphabet: A↔Z, B↔Y, C↔X, and so on.
                </p>
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Key Characteristics:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li><strong>Involutory Cipher:</strong> Applying Atbash twice returns the original message</li>
                      <li><strong>Symmetric:</strong> The same operation encrypts and decrypts</li>
                      <li><strong>Simple Substitution:</strong> Each letter maps to exactly one other letter</li>
                      <li><strong>Preserves Non-Letters:</strong> Numbers and punctuation remain unchanged</li>
                      <li><strong>No Key Required:</strong> The cipher uses only the reversed alphabet</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Atbash Examples */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Atbash Cipher Examples</h2>
                <div className="space-y-3">
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Original:</strong> Hello World
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Encrypted:</strong> Svool Dliow
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Original:</strong> ABC XYZ
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Encrypted:</strong> ZYX CBA
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 mb-12 space-y-3">
                <h2 className="text-xl font-bold text-foreground">Security Note</h2>
                <p className="text-sm text-muted-foreground">
                  The Atbash cipher provides no real security and should never be used for protecting sensitive information. It is extremely easy to break with frequency analysis or brute force attacks. Use modern encryption algorithms for actual data protection.
                </p>
              </div>

              {/* FAQ */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Is Atbash secure for modern use?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      No, Atbash is not secure for modern use. It's a simple substitution cipher that can be broken easily through frequency analysis or brute force. It's only suitable for educational purposes, puzzles, and recreational use.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Can I decrypt Atbash without knowing the original alphabet?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Yes, because Atbash is involutory - applying it twice returns the original message. You can simply run the encrypted message through the decoder to get the original text, even without knowing it was encrypted with Atbash.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      What happens to numbers and special characters?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Numbers, punctuation, spaces, and other non-letter characters are preserved as-is. Only alphabetic characters are converted using the Atbash mapping.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Where does the Atbash cipher come from?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Atbash is one of the oldest known ciphers, originating in Hebrew. It appears in ancient Hebrew texts and was used as a simple form of obfuscation. The name comes from the first, second, and last letters in the Hebrew alphabet (Aleph, Bet, Tav, Shin).
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Cipher Tools</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other cipher and encryption tools:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher encryption</li>
                    <li><a href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</a> - Digraph substitution cipher</li>
                    <li><a href="/tools/hexahue-cipher" className="text-primary hover:underline">Hexahue Cipher</a> - Color-based encoding system</li>
                    <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number converter</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}
