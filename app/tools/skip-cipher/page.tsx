import { Metadata } from "next"
import { SkipCipherTool } from "@/components/skip-cipher"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Skip Cipher - Jump Cipher Online Encrypt Decrypt",
  description: "Skip Cipher Online Tool - Encrypt and decrypt messages using the skip cipher (jump cipher) transposition cipher. Includes brute force cracking and parameter finder. Free online cryptography tool.",
  keywords: ["skip cipher", "jump cipher", "transposition cipher", "encryption", "decryption", "cryptography"],
  openGraph: {
    title: "Skip Cipher",
    description: "Encrypt and decrypt using the skip cipher (jump cipher) - a classic transposition cipher",
    type: "website",
  },
}

export default function SkipCipherPage() {
  return (
    <ToolLayout
      toolId="skip-cipher"
      toolName="Skip Cipher"
      toolDescription="The Skip Cipher (Jump Cipher) is a transposition cipher that reorders letters by extracting every nth character. Use this online tool to encrypt, decrypt, and analyze skip cipher messages with advanced brute force capabilities."
      toolComponent={<SkipCipherTool />}
    />
  )
}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                  <li><strong>Cryptography Students</strong> - Learn about transposition ciphers and encryption</li>
                  <li><strong>Security Professionals</strong> - Understand historical cipher mechanisms</li>
                  <li><strong>Puzzle Enthusiasts</strong> - Solve and create skip cipher challenges</li>
                  <li><strong>Educators</strong> - Teach cipher concepts and cryptanalysis</li>
                  <li><strong>Code Breakers</strong> - Practice frequency analysis and pattern recognition</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Encryption:</strong> Starting from an initial position, the cipher extracts every nth character from the plaintext, creating the ciphertext through this extraction pattern.</p>
                  <p><strong>Decryption:</strong> Knowing the skip size and initial position, you can reconstruct the original message by reversing the extraction process.</p>
                  <p><strong>Brute Force:</strong> If parameters are unknown, the tool tries all combinations and ranks results by likelihood based on English word frequency.</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Understanding Skip Cipher</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Skip Cipher (also called Jump Cipher) is a classic transposition cipher that scrambles message content by reading characters at regular intervals. Unlike substitution ciphers that replace letters, the skip cipher preserves all original letters but rearranges their order.
              </p>
              <div className="space-y-3 mt-4">
                <div className="bg-background border border-border rounded p-4">
                  <p className="font-semibold text-foreground mb-2">Example:</p>
                  <p className="text-sm text-muted-foreground mb-2">Original: "HELLOWORLD"</p>
                  <p className="text-sm text-muted-foreground mb-2">Skip Size: 3, Start Position: 1</p>
                  <p className="text-sm text-muted-foreground">Result: Extract positions 1→4→7→10 = "HLOOL"</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Parameters</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Skip Size</p>
                  <p>The interval at which to extract characters. Skip size of 2 means every 2nd character, skip size of 3 means every 3rd character, etc.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Initial Position (Start)</p>
                  <p>Where to begin extraction (1-indexed). Position 1 means start at the first character, position 2 means start at the second, etc.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Ignore Special Characters</p>
                  <p>When enabled, removes spaces and punctuation before encryption, focusing only on letters. This affects the extraction pattern.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground">Encryption vs Decryption</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-3">Encryption</p>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Start with plaintext message</li>
                    <li>Extract every nth character</li>
                    <li>Result is ciphertext</li>
                    <li>Scrambles message order</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-3">Decryption</p>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Start with ciphertext</li>
                    <li>Reverse extraction process</li>
                    <li>Result is plaintext</li>
                    <li>Restores original order</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground">FAQ</h2>
              <div className="space-y-3">
                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    Is Skip Cipher secure for modern communication?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    No, the skip cipher is vulnerable to brute force attacks and frequency analysis. It's primarily used for educational purposes to understand transposition ciphers and cryptographic principles.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    What's the difference between Skip Cipher and other transposition ciphers?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Skip Cipher uses a regular interval extraction pattern. Other transposition ciphers like Rail Fence use different rearrangement patterns. See our Affine Cipher tool for substitution cipher examples.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    What does the brute force feature do?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    The brute force feature tries all possible skip sizes and start positions, then ranks results by English word likelihood. This helps identify the correct parameters without knowing them in advance.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    Can I use this for educational purposes?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Absolutely! This tool is perfect for learning cryptography, understanding how transposition ciphers work, and practicing cryptanalysis techniques.
                  </p>
                </details>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Related Cipher Tools</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Explore other cryptographic tools and cipher systems:</p>
                <ul className="space-y-1 list-disc list-inside mt-3">
                  <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number conversion</li>
                  <li><a href="/tools/letters-to-numbers-translator" className="text-primary hover:underline">Letters to Numbers Translator</a> - Convert letters to numerical values</li>
                  <li><a href="/tools/fill-in-the-blanks-equation-solver" className="text-primary hover:underline">Fill In The Blanks Equation Solver</a> - Solve mathematical puzzles</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
