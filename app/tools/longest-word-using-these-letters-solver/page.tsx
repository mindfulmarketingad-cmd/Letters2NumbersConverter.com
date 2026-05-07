import { Metadata } from "next"
import { LongestWordSolver } from "@/components/longest-word-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Longest Word Using These Letters Solver",
  description: "Longest Word Using These Letters Solver - Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with filtering options. Free online word game helper.",
  keywords: ["longest word solver", "word maker", "anagram solver", "words from letters", "letter combination solver", "word finder", "anagram generator"],
  openGraph: {
    title: "Longest Word Using These Letters Solver",
    description: "Find the longest words you can make from any set of letters instantly",
    type: "website",
  },
}

export default function LongestWordPage() {
  return (
    <ToolLayout
      toolId="longest-word-solver"
      toolName="Longest Word Using These Letters Solver"
      toolDescription="Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with advanced filtering options for word games and puzzles."
      toolComponent={<LongestWordSolver />}
    />
  )
}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Word Game Players</strong> - Excel at Scrabble, Words with Friends, and similar games</li>
                    <li><strong>Puzzle Enthusiasts</strong> - Solve word puzzles and anagrams quickly</li>
                    <li><strong>Students</strong> - Improve vocabulary and word recognition skills</li>
                    <li><strong>Word Builders</strong> - Find all possible words from available letters</li>
                    <li><strong>Casual Gamers</strong> - Discover new words and boost your game scores</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Enter the letters you have available (in any order)</p>
                    <p><strong>Step 2:</strong> Choose options like letter reuse or maintaining order</p>
                    <p><strong>Step 3:</strong> Click "Find The Biggest Words" to generate all valid words</p>
                    <p><strong>Step 4:</strong> Optionally filter by word length, starting letters, or containing letters</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Smart Sorting</p>
                    <p>Words are automatically sorted by length (longest first), making it easy to find the highest-scoring words for word games.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Flexible Filtering</p>
                    <p>Filter results by specific letter counts, starting sequences, or letters that must be included in the word.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Multiple Modes</p>
                    <p>Choose between letter reuse, maintaining order, and viewing remaining unused letters for advanced solving.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Instant Results</p>
                    <p>Get comprehensive results instantly showing all valid words you can make from your available letters.</p>
                  </div>
                </div>
              </div>

              {/* Understanding Word Solving */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Understanding Word Solving</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This tool uses a comprehensive English dictionary to find all possible valid words from your available letters. Whether you&apos;re playing Scrabble, Words with Friends, or just exploring word combinations, the solver presents results ranked by word length so you can quickly identify the longest (and often highest-scoring) words.
                </p>
                <div className="space-y-3 mt-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Solving Modes:</p>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li><strong>Standard Mode:</strong> Each letter can only be used once (perfect for Scrabble)</li>
                      <li><strong>Letter Reuse:</strong> Letters can be used multiple times</li>
                      <li><strong>Ordered Mode:</strong> Words must use letters in the sequence you provided</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tips and Strategies */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Tips for Finding the Best Words</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>1. Look for Common Patterns:</strong> Letter combinations like -ING, -ED, -ER, -LY often form valid words</p>
                  <p><strong>2. Consider Vowel Distribution:</strong> Words with balanced vowels and consonants are often valid</p>
                  <p><strong>3. Use the Filter:</strong> If overwhelmed by results, filter by minimum word length or starting letters</p>
                  <p><strong>4. Check Letter Frequency:</strong> Common letters like E, A, R, O often appear in the longest words</p>
                  <p><strong>5. Think of Variations:</strong> Plurals, past tense (-ed), and present tense (-ing) extend word options</p>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      What dictionary does this tool use?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      This tool uses a comprehensive English dictionary containing hundreds of thousands of common words. It includes standard dictionary words suitable for Scrabble and word games.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Can I use letters more than once?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Yes! There&apos;s a checkbox for "Letter can be used multiple times" mode. In standard mode, each letter can only be used once, matching standard word game rules.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      What does "Keep letter order" mean?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      When enabled, this option finds words that use your letters in the exact sequence you provided, without rearranging them. This is useful for finding subsequence words.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      Why is a specific word not appearing?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      The dictionary is comprehensive but focuses on standard English words. Proper nouns, abbreviations, and some obscure words may not be included. Try the filters to narrow down results.
                    </p>
                  </details>

                  <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                    <summary className="font-semibold text-foreground group-open:text-primary">
                      How do I maximize my Scrabble or word game score?
                    </summary>
                    <p className="text-muted-foreground mt-3 text-sm">
                      Look for longer words first (they appear at the top of results). Use high-value letters like Q, X, Z strategically. The filter feature helps you find words with specific letter combinations.
                    </p>
                  </details>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Word Tools</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other word game solvers and utilities:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/blossom-solver" className="text-primary hover:underline">Blossom Solver</a> - Merriam-Webster daily word game helper</li>
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Encryption and transposition cipher tool</li>
                    <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher</a> - Letter to number converter</li>
                    <li><a href="/tools/fill-in-the-blanks-equation-solver" className="text-primary hover:underline">Fill In The Blanks Equation Solver</a> - Math puzzle solver</li>
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
