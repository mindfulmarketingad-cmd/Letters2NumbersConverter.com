import { Metadata } from "next"
import { TapcodeTranslator } from "@/components/tapcode-translator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Instant Tapcode Translator | Letters2NumbersConverter.com",
  description: "Tapcode Translator - Convert messages to tap code patterns. Learn about this covert communication method used in POW camps. Encode/decode with dots, numbers, or knocks. Free online tool.",
  keywords: ["tapcode translator", "tap code encoder", "knock code", "Smitty code", "POW communication", "covert code"],
  openGraph: {
    title: "Tapcode Translator",
    description: "Convert messages to tap code using the 5x5 grid cipher. Instant translation with multiple code formats.",
    type: "website",
  },
}

export default function TapcodePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Tapcode Translator",
    description: "Translate messages to tap code patterns using the 5x5 grid cipher system",
    url: "https://letters2numbersconverter.com/tools/tapcode-translator",
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
                  Tapcode Translator
                </h1>
                <p className="text-lg text-muted-foreground text-pretty">
                  Tapcode Translator converts your messages into rhythmic tap patterns. The tap code is a simple way to encode messages using knock sounds, historically used by prisoners in Vietnam War POW camps.
                </p>
              </div>

              {/* Main Tool */}
              <div className="w-full mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
                <TapcodeTranslator />
              </div>

              {/* Who Is This For */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                    <li><strong>Survival Enthusiasts</strong> - Learn covert communication methods</li>
                    <li><strong>History Buffs</strong> - Understand POW camp communication tactics</li>
                    <li><strong>Code Enthusiasts</strong> - Explore simple cipher mechanics</li>
                    <li><strong>Educators</strong> - Teach communication and encoding concepts</li>
                    <li><strong>Puzzle Solvers</strong> - Decode historical messages</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong>Step 1:</strong> Enter your message in the input field</p>
                    <p><strong>Step 2:</strong> Select your preferred code format (dots, numbers, or knocks)</p>
                    <p><strong>Step 3:</strong> The tap code is instantly generated</p>
                    <p><strong>Step 4:</strong> Copy the result or learn from the 5×5 grid reference</p>
                  </div>
                </div>
              </div>

              {/* The Tap Code Grid */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Understanding the 5×5 Grid</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tap code uses a 5×5 grid containing the 26 letters of the English alphabet (I and J share one cell). Each letter is identified by two coordinates: its row (1-5) and column (1-5).
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-center">
                    <thead className="bg-amber-500/20 border-b border-amber-500/30">
                      <tr>
                        <th className="px-3 py-2 font-semibold">Row \ Col</th>
                        {[1, 2, 3, 4, 5].map(i => <th key={i} className="px-3 py-2 font-semibold">{i}</th>)}
                      </tr>
                    </thead>
                    <tbody className="text-foreground">
                      {[
                        ['A', 'B', 'C', 'D', 'E'],
                        ['F', 'G', 'H', 'I/J', 'K'],
                        ['L', 'M', 'N', 'O', 'P'],
                        ['Q', 'R', 'S', 'T', 'U'],
                        ['V', 'W', 'X', 'Y', 'Z']
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-amber-500/10">
                          <td className="px-3 py-2 font-semibold bg-amber-500/5">{idx + 1}</td>
                          {row.map((letter, colIdx) => (
                            <td key={colIdx} className="px-3 py-2 border-r border-amber-500/10 last:border-r-0">
                              {letter}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Code Formats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-3">
                  <h3 className="font-bold text-foreground">Dots Format</h3>
                  <p className="text-sm text-muted-foreground">Uses dots (•) to represent taps. Example: H = •• •••</p>
                  <p className="text-xs text-muted-foreground">Visual and easy to count</p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-3">
                  <h3 className="font-bold text-foreground">Numbers Format</h3>
                  <p className="text-sm text-muted-foreground">Uses numbers separated by hyphens. Example: H = 2-3</p>
                  <p className="text-xs text-muted-foreground">Compact and precise</p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6 space-y-3">
                  <h3 className="font-bold text-foreground">Knocks Format</h3>
                  <p className="text-sm text-muted-foreground">Uses asterisks (*) to show knock patterns. Example: H = ** ***</p>
                  <p className="text-xs text-muted-foreground">Simulates actual tap sounds</p>
                </div>
              </div>

              {/* History */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8 mb-12 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Historical Background</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Tap code became widely known during the Vietnam War when American prisoners of war (POWs) used it as a covert communication method in their cells. The most famous use was by Commander James Stockdale and other prisoners who tapped messages through cell walls, creating an underground communication network that helped maintain morale and coordinate resistance efforts.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Also known as "knock code" or "Smitty code" (named after a legendary communicator), tap code represents one of the simplest yet effective methods of secret communication that requires no tools or materials—only the ability to tap and listen.
                </p>
              </div>

              {/* Use Cases */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Practical Applications</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Survival communication in restricted environments</li>
                    <li>Learning basic cryptography and encoding</li>
                    <li>Understanding historical communication methods</li>
                    <li>Educational demonstrations of cipher systems</li>
                    <li>Recreation and puzzle games</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">Advantages of Tap Code</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                    <li>Requires no special equipment</li>
                    <li>Works through barriers (walls, doors)</li>
                    <li>Simple to learn and memorize</li>
                    <li>Audible-only communication</li>
                    <li>Highly reliable in constrained conditions</li>
                  </ul>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore More Cipher Tools</h2>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Discover other encoding and cipher tools:</p>
                  <ul className="space-y-1 list-disc list-inside mt-3">
                    <li><a href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</a> - Mirror alphabet cipher</li>
                    <li><a href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</a> - Classic digraph substitution</li>
                    <li><a href="/tools/hexahue-cipher" className="text-primary hover:underline">Hexahue Cipher</a> - Color-based visual encoding</li>
                    <li><a href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">A0Z25 Cipher Translator</a> - Letter-to-number conversion</li>
                    <li><a href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher</a> - Transposition cipher tool</li>
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
