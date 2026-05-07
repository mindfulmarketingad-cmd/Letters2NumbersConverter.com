import { Metadata } from "next"
import { PlayfairCipherSolver } from "@/components/playfair-cipher-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Playfair Cipher Solver",
  description: "Playfair Cipher Solver - Encrypt and decrypt text using the classic Playfair digraph substitution cipher. Learn about this historic cipher invented by Charles Wheatstone and explore its mechanics with our free online tool.",
  keywords: ["playfair cipher", "playfair cipher solver", "playfair encryption", "playfair decryption", "digraph cipher", "charles wheatstone"],
  openGraph: {
    title: "Playfair Cipher Solver",
    description: "Solve Playfair cipher puzzles with our free online encryption and decryption tool",
    type: "website",
  },
}

export default function PlayfairCipherSolverPage() {
  return (
    <ToolLayout
      toolId="playfair-cipher"
      toolName="Playfair Cipher Solver"
      toolDescription="Encrypt and decrypt text using the classic Playfair digraph substitution cipher invented by Charles Wheatstone. This historic cipher uses a 5×5 key square to encrypt letter pairs, making it significantly more secure than simple substitution ciphers."
      toolComponent={<PlayfairCipherSolver />}
    />
  )
}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Cryptography Enthusiasts</strong> - Learn classic cipher mechanics</li>
                    <li><strong>History Buffs</strong> - Explore 19th-century encryption methods</li>
                    <li><strong>Students</strong> - Understand digraph substitution ciphers</li>
                    <li><strong>Puzzle Solvers</strong> - Decrypt Playfair cipher challenges</li>
                    <li><strong>Security Researchers</strong> - Study cipher vulnerabilities</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Enter your plaintext (to encrypt) or ciphertext (to decrypt)</p>
                    <p><strong>Step 2:</strong> Enter a keyword that will generate your cipher key square</p>
                    <p><strong>Step 3:</strong> Select Encrypt or Decrypt mode and configure options</p>
                    <p><strong>Step 4:</strong> Click solve to process the text and view the key square matrix</p>
                  </div>
                </div>
              </div>

              {/* Playfair Details */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About the Playfair Cipher</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Playfair cipher is a classic digraph substitution cipher invented by (Sir) Charles Wheatstone in 1854 and named after Lord Lyon Playfair, who popularized its use in military and diplomatic communications. Unlike simple substitution ciphers that replace single letters, Playfair works with pairs of letters (digraphs), making it significantly more secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">How Playfair Works</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      <strong>Key Square:</strong> The cipher uses a 5×5 grid of letters (25 letters, with I/J combined) arranged based on a keyword. The keyword eliminates duplicate letters and fills the remaining alphabet positions.
                    </p>
                    <p>
                      <strong>Digraph Processing:</strong> Plaintext is split into pairs of letters. Each pair is encrypted using three rules based on their positions in the key square:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Same row:</strong> Replace each letter with the one to its right (wrapping around)</li>
                      <li><strong>Same column:</strong> Replace each letter with the one below it (wrapping around)</li>
                      <li><strong>Rectangle:</strong> Swap the columns of each letter pair</li>
                    </ul>
                    <p>
                      <strong>Decryption:</strong> Reverse the process by moving left (for rows) or up (for columns), or by swapping columns again (for rectangles).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-3">Historical Significance</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The Playfair cipher was used extensively during World War I and remained in use by some military forces into World War II. While it was considered secure at the time, it's now vulnerable to frequency analysis and modern cryptanalysis. Today, it's primarily of historical and educational interest.
                  </p>
                </div>
              </div>

              {/* Configuration Guide */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Configuration Options</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Merge Letters for 5x5 Square</p>
                    <p>Since the 5×5 grid has only 25 spaces and the English alphabet has 26 letters, one letter must be omitted. Traditionally, I and J are combined. You can choose which letter merges into the other.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Padding Letter</p>
                    <p>Used to separate duplicate letters and pad the message if it has odd length. Traditionally 'X' is used. This ensures the message can be split into pairs for processing.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Duplicate Handling</p>
                    <p>When two identical letters appear together in plaintext, the padding letter is inserted between them. This is essential for proper encryption since Playfair processes pairs of different letters.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      How secure is the Playfair cipher?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      The Playfair cipher is historically significant but not cryptographically secure by modern standards. It can be broken through frequency analysis of digraphs and other cryptanalytic methods. For secure communication, use modern encryption algorithms like AES.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Why are I and J combined in the key square?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      The Playfair cipher uses a 5×5 grid with 25 spaces, but the English alphabet has 26 letters. Historically, I and J were combined because they appear less frequently and were sometimes used interchangeably in older texts.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Can I decrypt without knowing the keyword?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Decrypting Playfair without the keyword is possible through frequency analysis and cryptanalysis, but it's computationally intensive. This tool requires the keyword for decryption. For breaking unknown Playfair ciphers, cryptanalysis software would be needed.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      What if my plaintext has duplicate consecutive letters?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      The padding letter (usually X) is automatically inserted between duplicate consecutive letters to split them into separate pairs. For example, "HELLO" becomes "HEXLLO" if the consecutive L's need padding.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Tools</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other cipher and encryption tools:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher encryption</li>
                    <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number conversion</li>
                    <li><a href="/blog/letter-number-converters-cryptography" className="text-primary hover:underline">Cryptography Guide</a> - Learn cipher fundamentals</li>
                    <li><a href="/tools/blossom-solver" className="text-primary hover:underline">Blossom Solver</a> - Word game helper</li>
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
