import { Metadata } from "next"
import { EgyptianConverter } from "@/components/egyptian-converter"

export const metadata: Metadata = {
  title: "Egyptian Numbers Converter - Convert to Egyptian Hieroglyphs & Numerals",
  description: "Convert decimal numbers to ancient Egyptian numerals and hieroglyphic symbols. Learn about the Egyptian numeral system used from 3000 BC. Free online converter tool.",
  keywords: ["Egyptian numbers converter", "Egyptian numerals", "Egyptian hieroglyphs", "ancient Egypt numbers"],
  openGraph: {
    title: "Egyptian Numbers Converter",
    description: "Convert numbers to ancient Egyptian numerals with hieroglyphic symbols",
    type: "website",
  },
}

export default function EgyptianNumbersConverterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Egyptian Numbers Converter",
    description: "Convert decimal numbers to ancient Egyptian numerals and hieroglyphic symbols",
    url: "https://letters2numbersconverter.com/tools/egyptian-numbers-converter",
    applicationCategory: "UtilityApplication",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Egyptian Numbers Converter</h1>
              <p className="text-lg text-muted-foreground text-pretty">Convert decimal numbers to ancient Egyptian numerals and hieroglyphic symbols. The Egyptian Numbers Converter Online helps you learn about one of humanity's oldest numbering systems used from around 3000 BC.</p>
            </div>

            <div className="w-full mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
              <EgyptianConverter />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>History Students</strong> - Learning about ancient Egypt and mathematics</li>
                  <li><strong>Egyptologists</strong> - Researchers studying ancient texts</li>
                  <li><strong>Educators</strong> - Teaching historical number systems</li>
                  <li><strong>Enthusiasts</strong> - Curious about ancient numeral systems</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                <p className="text-muted-foreground text-sm">The Egyptian system uses symbols for powers of 10. Each hieroglyph represents: 1 (stroke), 10 (heel bone), 100 (rope), 1,000 (lotus), 10,000 (finger), 100,000 (tadpole), 1,000,000 (figure). Numbers combine these symbols additively.</p>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Historical Context</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">The Egyptian numeral system was used for approximately 3,000 years, from around 3000 BC until the early first millennium AD. It was an additive base-10 system with no zero symbol or place-value notation. Maximum representable number: 9,999,999.</p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Base-10 system using powers of ten</li>
                <li>Additive notation - values combine</li>
                <li>No zero symbol or placeholder</li>
                <li>Written in hieroglyphic symbols</li>
                <li>Used for record-keeping and administration</li>
              </ul>
            </div>

            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground">Symbol Reference</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏤</p>
                  <p className="text-xs font-semibold">1 - Stroke</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏦</p>
                  <p className="text-xs font-semibold">10 - Heel Bone</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏪</p>
                  <p className="text-xs font-semibold">100 - Rope</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏬</p>
                  <p className="text-xs font-semibold">1K - Lotus</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏭</p>
                  <p className="text-xs font-semibold">10K - Finger</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏮</p>
                  <p className="text-xs font-semibold">100K - Tadpole</p>
                </div>
                <div className="bg-card border border-border rounded p-4 text-center">
                  <p className="text-3xl mb-2">𓏯</p>
                  <p className="text-xs font-semibold">1M - Figure</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Related Numeral Systems</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Explore other ancient numbering systems: <a href="/tools/roman-numerals-converter" className="text-primary hover:underline">Roman Numerals</a>, <a href="/tools/cistercian-numerals-converter" className="text-primary hover:underline">Cistercian Numerals</a>, and <a href="/tools/decimal-to-hexadecimal-converter-online" className="text-primary hover:underline">Hexadecimal Numbers</a>.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
