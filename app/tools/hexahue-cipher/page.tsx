import { Metadata } from "next"
import { HexahueCipherSolver } from "@/components/hexahue-cipher-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Hexahue Cipher",
  description: "Hexahue Cipher - Translate text to colorful visual blocks. Invented by Josh Cramer, Hexahue uses combinations of common colors (red, green, blue) to create a unique encoding system. Try our free online Hexahue translator and reference chart.",
  keywords: ["hexahue cipher", "hexahue translator", "color cipher", "hexahue code", "visual encoding", "josh cramer"],
  openGraph: {
    title: "Hexahue Cipher",
    description: "Translate text to colorful Hexahue visual blocks using this free online cipher tool",
    type: "website",
  },
}

export default function HexahueCipherPage() {
  return (
    <ToolLayout
      toolId="hexahue-cipher"
      toolName="Hexahue Cipher"
      toolDescription="Hexahue Cipher is a unique color-based encoding system that translates text into visual blocks of easily distinguishable colors. Created by Josh Cramer, this innovative cipher uses common HTML color combinations for intuitive visual communication."
      toolComponent={<HexahueCipherSolver />}
    />
  )
}

              {/* How It Works */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Cryptography Enthusiasts</strong> - Learn about modern color-based encoding</li>
                    <li><strong>Visual Artists</strong> - Create unique colorful representations of messages</li>
                    <li><strong>Puzzle Creators</strong> - Design puzzles using Hexahue blocks</li>
                    <li><strong>Educators</strong> - Teach encoding concepts through visual means</li>
                    <li><strong>Programmers</strong> - Explore color-based cipher systems</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Choose your encoding method (click color blocks or type text)</p>
                    <p><strong>Step 2:</strong> Each character is represented as a 2×4 grid of colored squares</p>
                    <p><strong>Step 3:</strong> The tool generates the visual Hexahue representation</p>
                    <p><strong>Step 4:</strong> Copy the text or download the visual blocks as an image</p>
                  </div>
                </div>
              </div>

              {/* Hexahue Explained */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Understanding Hexahue</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Hexahue is a color-based cipher system invented by Josh Cramer with a specific goal: create a unique alphabet using combinations of colors that are easily distinguishable and simple to write in HTML notation. Rather than using complex color spaces, Hexahue relies on common, primary colors that anyone can easily recreate.
                </p>
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Key Features:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Uses only 6 common colors: Red, Green, Blue, Yellow, Cyan, Magenta</li>
                      <li>Each character represented as a 2×4 grid (8 color squares)</li>
                      <li>Includes 26 letters, 10 digits, and punctuation marks</li>
                      <li>Supports numbers and special characters (period, comma, space)</li>
                      <li>Gray and black blocks used for numeric encoding</li>
                      <li>Simple to write in HTML hex notation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Color Palette */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Hexahue Color Palette</h2>
                <p className="text-muted-foreground">Hexahue uses these six primary HTML colors for all character encodings:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
                  {[
                    { name: "Red", hex: "#FF0000" },
                    { name: "Green", hex: "#00FF00" },
                    { name: "Blue", hex: "#0000FF" },
                    { name: "Yellow", hex: "#FFFF00" },
                    { name: "Cyan", hex: "#00FFFF" },
                    { name: "Magenta", hex: "#FF00FF" },
                  ].map((color) => (
                    <div key={color.hex} className="text-center">
                      <div
                        className="w-full h-24 rounded-lg border-2 border-border mb-2"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="text-sm font-semibold text-foreground">{color.name}</p>
                      <p className="text-xs text-muted-foreground">{color.hex}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">Additionally, black (#000000) and white (#FFFFFF) are used for representing numbers.</p>
              </div>

              {/* FAQ */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Who invented Hexahue?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Hexahue was invented by Josh Cramer as a unique color-based encoding system that combines visual appeal with cryptographic principles.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Why only 6 colors?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Josh Cramer chose 6 primary colors because they are common, easily distinguishable, and simple to write in HTML notation. This makes Hexahue practical and accessible for both digital and manual creation.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Can I create Hexahue blocks without a tool?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Yes! Since Hexahue uses simple HTML hex colors, you can create the blocks manually using any drawing program or by writing HTML/CSS. The reference chart shows the exact color patterns for each character.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Is Hexahue secure for encryption?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Hexahue is more of a visual encoding system than a secure cipher. While it can obscure text visually, it should not be used for sensitive communications. Consider it an artistic encoding method rather than cryptographic security.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Ciphers</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other encryption and encoding tools:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</a> - Classic digraph substitution</li>
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher encryption</li>
                    <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number conversion</li>
                    <li><a href="/blog/a0z25-cipher" className="text-primary hover:underline">A0Z25 Cipher Blog</a> - Learn more about letter-number systems</li>
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
