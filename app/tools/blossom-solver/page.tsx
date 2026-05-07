import { Metadata } from "next"
import { BlossomSolver } from "@/components/blossom-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Blossom Solver - Jump Cipher Online Encrypt Decrypt",
  description: "Blossom Solver - Help solve Merriam-Webster Blossom daily word game. Find all valid words from 7 letters (1 center + 6 petal letters). Get high scores and pangrams. Free online game helper.",
  keywords: ["blossom solver", "blossom game helper", "word game solver", "blossom puzzle", "merriam webster blossom"],
  openGraph: {
    title: "Blossom Solver",
    description: "Solve the Merriam-Webster Blossom daily word game with our free online solver",
    type: "website",
  },
}

export default function BlossomSolverPage() {
  return (
    <ToolLayout
      toolId="blossom-solver"
      toolName="Blossom Solver"
      toolDescription="Help solve Merriam-Webster Blossom daily word game puzzles. Enter your seven letters (one center letter and six petal letters) and discover all possible words to maximize your score and find high-scoring pangrams."
      toolComponent={<BlossomSolver />}
    />
  )
}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Blossom Game Players</strong> - Want to maximize your daily score</li>
                    <li><strong>Word Game Enthusiasts</strong> - Love word puzzles and challenges</li>
                    <li><strong>Merriam-Webster Fans</strong> - Master the daily Blossom puzzle</li>
                    <li><strong>Competitive Players</strong> - Find high-scoring words including pangrams</li>
                    <li><strong>Casual Gamers</strong> - Enjoy learning new words</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Enter the center letter from your Blossom puzzle</p>
                    <p><strong>Step 2:</strong> Enter the 6 petal letters surrounding the center</p>
                    <p><strong>Step 3:</strong> Click "Show Answers" to generate all valid words</p>
                    <p><strong>Step 4:</strong> Look for pangrams (7-letter words using all letters) for maximum points</p>
                  </div>
                </div>
              </div>

              {/* Game Rules */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Understanding Blossom</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Blossom is a daily word puzzle game by Merriam-Webster where you try to create words from seven available letters. The letters are arranged in a flower pattern: one center letter surrounded by six "petal" letters. The goal is to find as many valid words as possible, with special bonus points for pangrams.
                </p>
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Game Rules:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Every word must contain the center letter</li>
                      <li>Words must be at least 4 letters long</li>
                      <li>Each letter can only be used once per word</li>
                      <li>Valid words must be in the Merriam-Webster dictionary</li>
                      <li>Pangrams (7-letter words using all letters) earn maximum points</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scoring */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Scoring System</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Point Values</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>4-letter word = 1 point</li>
                      <li>5-letter word = 5 points</li>
                      <li>6-letter word = 6 points</li>
                      <li>7-letter word (Pangram) = 7 points × multiplier</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Strategy Tips</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Always look for pangrams first</li>
                      <li>Try common letter combinations</li>
                      <li>Think of words with double letters</li>
                      <li>Consider prefixes and suffixes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      What is a pangram in Blossom?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      A pangram is a word that uses all 7 letters in the puzzle (the center letter plus all 6 petal letters). Pangrams are worth the maximum points and are often the hardest to find.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Can I use letters more than once?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      No, each letter in the available set can only be used once per word. However, if a letter appears twice in your available letters, you can use it twice in a single word.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Do I always have to use the center letter?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Yes, every valid word must contain the center letter. This is one of the core rules of the Blossom puzzle.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      How often does Blossom update?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Merriam-Webster updates the Blossom puzzle daily at midnight ET. You get a fresh set of letters and a chance to try for a perfect score every day.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Tools</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other word game solvers and converters:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher encryption</li>
                    <li><a href="/tools/fill-in-the-blanks-equation-solver" className="text-primary hover:underline">Fill In The Blanks Equation Solver</a> - Math puzzle solver</li>
                    <li><a href="/tools/egyptian-numbers-converter" className="text-primary hover:underline">Egyptian Numbers Converter</a> - Ancient numeral system</li>
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
