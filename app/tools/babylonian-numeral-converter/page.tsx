import { BabylonianNumeralConverter } from "@/components/babylonian-numeral-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Babylonian Numeral Converter",
  description: "Babylonian Numeral Converter - Convert decimal numbers to Babylonian base-60 numerals. Learn about the ancient sexagesimal system used by Babylonians, Sumerians, and Akkadians with visual cuneiform symbols.",
  keywords: ["Babylonian numeral converter", "Babylonian numerals", "base-60 converter", "sexagesimal system", "Babylonian numbers", "ancient numeral systems", "cuneiform"],
  openGraph: {
    title: "Babylonian Numeral Converter | Letters2NumbersConverter.com",
    description: "Free online Babylonian Numeral Converter - Convert decimal to Babylonian base-60 system with cuneiform symbols.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/babylonian-numeral-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/babylonian-numeral-converter",
  },
}

export default function BabylonianNumeralConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Babylonian Numeral Converter",
    description: "Convert decimal numbers to Babylonian numerals in base-60 sexagesimal system with visual cuneiform representation",
    url: "https://www.letters2numbersconverter.com/tools/babylonian-numeral-converter",
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
        id="babylonian-schema"
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
                Babylonian Numeral Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The Babylonian Numeral Converter transforms decimal numbers into the ancient Babylonian base-60 sexagesimal numeral system. Babylonians inherited their number system from the Sumerians and from the Akkadians. Babylonians used base 60 number system. Unlike the decimal system where you need to learn 10 symbols, Babylonians only had to learn two symbols to produce their base 60 positional system. This converter converts from decimal to babylonian numerals. Enter the number to translate to Babylonian numeral.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Historians</p>
                  <p className="text-sm text-muted-foreground">Understanding ancient Mesopotamian mathematics</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Students</p>
                  <p className="text-sm text-muted-foreground">Learning about numeral systems and bases</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Enthusiasts</p>
                  <p className="text-sm text-muted-foreground">Exploring ancient civilizations and mathematics</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-2xl mx-auto mb-12">
              <BabylonianNumeralConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Babylonian Numerals</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Base-60 System:</strong> The Babylonian numeral system uses base-60 (sexagesimal), where each position represents a power of 60. This contrasts with our modern base-10 system and was revolutionary in its sophistication.
                  </p>
                  <p>
                    <strong className="text-foreground">Two Symbols Only:</strong> Unlike the decimal system requiring 10 different symbols, Babylonians elegantly used only two symbols: a chevron (𒐛) for tens and a wedge (𒐏) for ones. This simplicity made calculation and record-keeping efficient.
                  </p>
                  <p>
                    <strong className="text-foreground">Ancient Inheritance:</strong> Babylonians inherited this system from the Sumerians and Akkadians, continuing a mathematical tradition that became fundamental to astronomy, timekeeping, and commerce in the ancient world.
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
                      <span>Instant decimal to Babylonian conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Visual cuneiform symbol representation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Base-60 calculation breakdown</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Position-by-position analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy and download functionality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no registration required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Symbol Guide</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">Chevron (𒐛)</p>
                      <p>Represents 10 in each position</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Wedge (𒐏)</p>
                      <p>Represents 1 in each position</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Space (𒐘)</p>
                      <p>Represents 0 or empty position</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Context */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Historical Significance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The Babylonian base-60 system represents one of humanity&apos;s greatest mathematical achievements. Developed in ancient Mesopotamia around 2000 BCE, it was used by the Sumerians, Akkadians, and Babylonians for commerce, astronomy, and administration.
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  This system&apos;s influence persists in modern times—we still divide hours into 60 minutes and minutes into 60 seconds, a direct legacy of Babylonian mathematics. The zodiac and celestial observations documented by Babylonian astronomers also relied heavily on base-60 calculations.
                </p>
                <p className="text-sm text-muted-foreground">
                  The efficiency of requiring only two symbols to represent any number from 0 to 59 made this system superior for record-keeping on clay tablets and ideal for mathematical computation. It demonstrates the Babylonians&apos; sophisticated understanding of positional numeral systems.
                </p>
              </div>

              {/* Examples */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Examples</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">1</p>
                    <p className="text-lg">𒐏</p>
                    <p className="text-xs">(one wedge)</p>
                  </div>
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">10</p>
                    <p className="text-lg">𒐛</p>
                    <p className="text-xs">(one chevron)</p>
                  </div>
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">15</p>
                    <p className="text-lg">𒐛𒐏𒐏𒐏𒐏𒐏</p>
                    <p className="text-xs">(1 chevron + 5 wedges)</p>
                  </div>
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">60</p>
                    <p className="text-lg">𒐏 𒐘</p>
                    <p className="text-xs">(one-sixty)</p>
                  </div>
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">3600</p>
                    <p className="text-lg">𒐏 𒐘 𒐘</p>
                    <p className="text-xs">(one 60²)</p>
                  </div>
                  <div className="bg-background p-3 rounded font-mono">
                    <p className="font-semibold text-foreground">125</p>
                    <p className="text-lg">𒐏 𒐛𒐏𒐏𒐏𒐏𒐏</p>
                    <p className="text-xs">(2×60 + 5)</p>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/tools/mayan-numeral-converter"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Mayan Numeral Converter</p>
                    <p className="text-sm text-muted-foreground">Convert to base-20 Mayan numerals with dots and bars</p>
                  </Link>
                  <Link
                    href="/"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Letters to Numbers Converter</p>
                    <p className="text-sm text-muted-foreground">Transform letters to numbers with A1Z26 and more</p>
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
