import { MayanNumeralConverter } from "@/components/mayan-numeral-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Mayan Numeral Converter",
  description: "Mayan Numeral Converter - Convert decimal numbers to Mayan numerals (base-20 vigesimal system). See the visual representation of dots, bars, and shell symbols used in ancient Mayan mathematics.",
  keywords: ["Mayan numeral converter", "Mayan numerals", "base-20 converter", "vigesimal system", "Mayan numbers", "ancient numeral systems"],
  openGraph: {
    title: "Mayan Numeral Converter | Letters2NumbersConverter.com",
    description: "Free online Mayan Numeral Converter - Convert decimal to Mayan base-20 system with visual symbols.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
  },
}

export default function MayanNumeralConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mayan Numeral Converter",
    description: "Convert decimal numbers to Mayan numerals in base-20 vigesimal system with visual representation",
    url: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
    applicationCategory: "UtilityApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Letters2Numbers",
      url: "https://www.letters2numbersconverter.com",
    },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="mayan-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Ancient Mathematics
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Mayan Numeral Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The Mayan Numeral Converter transforms decimal numbers into the ancient Mayan base-20 vigesimal numeral system. The Mayan numeral system was the system to represent numbers and calendar dates in the Maya civilization. It was a vigesimal (base-20) positional numeral system. The numerals are made up of three symbols; zero (shell shape, with the plastron uppermost), one (a dot) and five (a bar). For example, thirteen is written as three dots in a horizontal row above two horizontal bars; sometimes it is also written as three vertical dots to the left of two vertical bars. With these three symbols, each of the twenty vigesimal digits could be written. Enter the number to translate to Mayan numeral.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Historians</p>
                  <p className="text-sm text-muted-foreground">Understanding ancient Mayan mathematics</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Students</p>
                  <p className="text-sm text-muted-foreground">Learning about numeral systems</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Enthusiasts</p>
                  <p className="text-sm text-muted-foreground">Exploring ancient civilizations</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-2xl mx-auto mb-12">
              <MayanNumeralConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Mayan Numerals</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Base-20 System:</strong> Unlike our modern base-10 system, the Mayans used a base-20 (vigesimal) positional numeral system. This means each position represents a power of 20 rather than a power of 10.
                  </p>
                  <p>
                    <strong className="text-foreground">Three Symbols:</strong> The entire system relies on just three symbols: a shell shape for zero, a dot for one, and a horizontal bar for five.
                  </p>
                  <p>
                    <strong className="text-foreground">Vertical Notation:</strong> Mayan numerals are written vertically, with the most significant digit at the top and the least significant at the bottom, allowing for precise calendar calculations.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Instant decimal to Mayan conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Visual representation of Mayan symbols</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Base-20 calculation breakdown</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Download results as image</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy and share conversions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no registration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Symbol Guide</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">Zero (⊘)</p>
                      <p>Shell shape with opening facing up</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">One to Four (•)</p>
                      <p>Dots arranged horizontally or vertically</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Five to Nineteen (━ + •)</p>
                      <p>Horizontal bars combined with dots</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Context */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Historical Significance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The Mayan numeral system is one of the most sophisticated numeral systems developed in the pre-Columbian Americas. Its base-20 structure likely arose from the combination of fingers and toes (ten plus ten), making it intuitive for human counting.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  The Mayans used this system not just for counting, but for precise astronomical and calendar calculations. Their mathematical innovations allowed them to create one of the most accurate calendar systems ever developed, with calculations so precise that modern astronomers have verified their accuracy.
                </p>
                <p className="text-sm text-muted-foreground">
                  The inclusion of zero as a distinct symbol was particularly revolutionary, appearing independently of Old World numeral systems and allowing for positional notation centuries before Europe adopted zero from Islamic mathematics.
                </p>
              </div>

              {/* Examples */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Examples</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground font-mono">
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">1</p>
                    <p>● (one dot)</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">5</p>
                    <p>━ (one bar)</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">13</p>
                    <p>●●● (3 dots)</p>
                    <p>━━ (2 bars)</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">20</p>
                    <p>● (one dot)</p>
                    <p>⊘ (zero)</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">100</p>
                    <p>● ● ●● ●●</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="font-semibold text-foreground">400</p>
                    <p>● ⊘ ⊘</p>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Letters to Numbers Converter</p>
                    <p className="text-sm text-muted-foreground">Convert letters to numbers with A1Z26, A0Z25, and more</p>
                  </Link>
                  <Link
                    href="/tools/a0z25-cipher-translator"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">A0Z25 Cipher Translator</p>
                    <p className="text-sm text-muted-foreground">Zero-indexed letter encoding and decoding</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
