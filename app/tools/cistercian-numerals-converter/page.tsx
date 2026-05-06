import { Metadata } from "next"
import { CistercianConverter } from "@/components/cistercian-converter"

export const metadata: Metadata = {
  title: "Cistercian Numerals Converter Online",
  description: "Cistercian Numerals Converter Online - Convert decimal numbers to medieval Cistercian numerals. Learn about the Cistercian monks' number system with complete symbol chart and historical context.",
  keywords: [
    "cistercian numerals converter",
    "cistercian numbers",
    "medieval numerals",
    "cistercian monks",
    "number converter",
    "online converter",
  ],
  openGraph: {
    title: "Cistercian Numerals Converter Online",
    description: "Convert decimal numbers to medieval Cistercian numerals with this free online converter tool.",
    type: "website",
  },
}

export default function CistercianPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex-1">
        <section className="py-12 sm:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Cistercian Numerals Converter Online
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Cistercian Numerals Converter Online transforms decimal numbers (1-9999) into elegant medieval Cistercian numerals. This unique number system, developed by Cistercian monks in the Middle Ages, represents all numbers using a single glyph with up to four distinct symbols positioned around a central vertical line.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <CistercianConverter />
          </div>
        </section>

        {/* What are Cistercian Numerals */}
        <section className="py-12 sm:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">What are Cistercian Numerals?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cistercian numerals are a medieval number system developed by Cistercian monks to create a compact, space-efficient notation for numbers 1-9999. Unlike Roman numerals that require multiple characters, Cistercian numerals use a single glyph where different digit values are represented by specific symbols placed in precise positions relative to a central vertical stem. Each position (ones, tens, hundreds, thousands) has its own set of nine symbols (1-9).
              </p>
            </div>
          </div>
        </section>

        {/* Origin and History */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">History and Origin</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cistercian numerals originated in medieval Europe, specifically within Cistercian monasteries during the 12th to 14th centuries. The Cistercian Order, known for their emphasis on simplicity and efficiency, developed this notation system to streamline record-keeping and manuscript annotation. The system was particularly useful for marking page numbers, dates, and calculations in monastic documents. Though largely abandoned after the development of printed books and the wider adoption of Hindu-Arabic numerals, Cistercian numerals represent a fascinating example of medieval mathematical innovation and remain studied by historians and mathematicians today.
              </p>
            </div>
          </div>
        </section>

        {/* Who Uses It */}
        <section className="py-12 sm:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Who Uses Cistercian Numerals Today?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  While Cistercian numerals are no longer used in practical mathematics, they remain relevant to several groups:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Historians and Medieval Scholars:</strong> Study Cistercian numerals to understand medieval documentation and monastic practices.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Mathematicians:</strong> Use them as historical examples of alternative number systems and positional notation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Enthusiasts and Hobbyists:</strong> Interested in medieval history, ancient writing systems, and mathematical curiosities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Educational Institutions:</strong> Teach Cistercian numerals as examples of creative problem-solving in mathematics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">How to Use the Converter</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Using our Cistercian Numerals Converter is simple and straightforward:
                </p>
                <ol className="space-y-3 text-muted-foreground ml-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span>Enter a decimal number between 1 and 9999 in the input field.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span>Click the "Convert" button to transform the number into Cistercian notation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span>View the breakdown by position showing how each digit contributes to the final glyph.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span>Copy the result to your clipboard for use in documents or further analysis.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Symbol Guide */}
        <section className="py-12 sm:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Understanding Cistercian Symbols</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cistercian numerals use a modular system where each digit (1-9) in each position (ones, tens, hundreds, thousands) has a unique symbol. The symbols are combined in a single glyph to represent the complete number. For example, the number 1234 would combine the symbols for 4 ones, 3 tens, 2 hundreds, and 1 thousand into a single elegant character. The symmetry and consistency of the symbol system makes it both aesthetically pleasing and mathematically efficient.
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-4">Position Guide</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Ones (1-9):</strong> Base symbols for single digits</li>
                  <li><strong>Tens (10-90):</strong> Symbols with one modifier mark</li>
                  <li><strong>Hundreds (100-900):</strong> Symbols with two modifier marks</li>
                  <li><strong>Thousands (1000-9000):</strong> Symbols with three modifier marks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Common Examples</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">7 (Simple)</p>
                  <p className="text-muted-foreground text-sm">A single symbol representing seven</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">42 (Tens + Ones)</p>
                  <p className="text-muted-foreground text-sm">Combination of tens and ones symbols</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">356 (Complex)</p>
                  <p className="text-muted-foreground text-sm">Three symbols combined: 3 hundreds, 5 tens, 6 ones</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">1234 (Maximum Complexity)</p>
                  <p className="text-muted-foreground text-sm">All four positions represented in one glyph</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Converters */}
        <section className="py-12 sm:py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Related Number Systems</h2>
              <p className="text-muted-foreground leading-relaxed">
                Interested in other historical and modern number systems? Explore our other conversion tools:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/tools/decimal-to-hexadecimal-converter-online"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">Decimal to Hexadecimal Converter</p>
                  <p className="text-sm text-muted-foreground mt-1">Convert between decimal and hexadecimal number systems</p>
                </a>
                <a
                  href="/tools/babylonian-numeral-converter"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">Babylonian Numeral Converter</p>
                  <p className="text-sm text-muted-foreground mt-1">Explore the ancient base-60 Babylonian numeral system</p>
                </a>
                <a
                  href="/tools/mayan-numeral-converter"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">Mayan Numeral Converter</p>
                  <p className="text-sm text-muted-foreground mt-1">Convert to Mayan base-20 vigesimal numerals</p>
                </a>
                <a
                  href="/tools/roman-numeral-converter"
                  className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground">Roman Numeral Converter</p>
                  <p className="text-sm text-muted-foreground mt-1">Convert decimal numbers to Roman numerals</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">What is the maximum number I can convert?</p>
                  <p className="text-muted-foreground text-sm">The maximum number is 9999, as Cistercian numerals were designed to represent numbers in this range.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Can I convert numbers outside the 1-9999 range?</p>
                  <p className="text-muted-foreground text-sm">No, Cistercian numerals are specifically designed for numbers between 1 and 9999. Larger numbers were not part of the original system.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Why don&apos;t Cistercian numerals include zero?</p>
                  <p className="text-muted-foreground text-sm">The original Cistercian system didn&apos;t include zero because it was primarily used for practical monastic record-keeping where zero was not commonly needed.</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">How historically accurate are these conversions?</p>
                  <p className="text-muted-foreground text-sm">Our converter uses the historical Cistercian numeral system as documented in medieval manuscripts and modern scholarly research.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
