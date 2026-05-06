import { DecimalHexConverter } from "@/components/decimal-hex-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Decimal to Hexadecimal Converter Online",
  description: "Decimal to Hexadecimal Converter Online - Convert decimal numbers to hexadecimal format instantly. Supports values up to 19 digits. Free online conversion tool.",
  keywords: ["decimal to hex converter", "decimal to hexadecimal", "hex converter", "decimal converter", "number base conversion"],
  openGraph: {
    title: "Decimal to Hexadecimal Converter Online | Letters2NumbersConverter.com",
    description: "Free online Decimal to Hexadecimal Converter - Convert decimal numbers to hex format instantly with detailed conversion details.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/decimal-to-hexadecimal-converter-online",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/decimal-to-hexadecimal-converter-online",
  },
}

export default function DecimalHexConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Decimal to Hexadecimal Converter Online",
    description: "Convert decimal numbers to hexadecimal format online instantly",
    url: "https://www.letters2numbersconverter.com/tools/decimal-to-hexadecimal-converter-online",
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
        id="decimal-hex-schema"
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
                Number Base Conversion
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Decimal to Hexadecimal Converter Online
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Decimal to Hexadecimal Converter Online is a free tool that converts decimal numbers to hexadecimal format instantly. To use this decimal to hex converter tool, you have to type a decimal value like 79 into the left field below, and then hit the Convert button. Therefore, you can convert up to 19 decimal characters (max. value of 9223372036854775807) to hex.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Developers</p>
                  <p className="text-sm text-muted-foreground">Programming and number system conversions</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Students</p>
                  <p className="text-sm text-muted-foreground">Learning computer science and mathematics</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Professionals</p>
                  <p className="text-sm text-muted-foreground">Quick number system conversions</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-3xl mx-auto mb-12">
              <DecimalHexConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Decimal to Hexadecimal Conversion</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Decimal System:</strong> The decimal system uses base-10, employing digits 0-9. This is the numbering system we use in everyday life.
                  </p>
                  <p>
                    <strong className="text-foreground">Hexadecimal System:</strong> The hexadecimal system uses base-16, employing digits 0-9 and letters A-F (where A=10, B=11, C=12, D=13, E=14, F=15). Hexadecimal is widely used in computing and programming.
                  </p>
                  <p>
                    <strong className="text-foreground">Conversion Process:</strong> To convert decimal to hexadecimal, repeatedly divide the decimal number by 16 and record the remainders. Read the remainders from bottom to top to get the hexadecimal equivalent.
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
                      <span>Instant decimal to hex conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Supports values up to 19 digits</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Bidirectional conversion (hex to decimal)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Displays conversion details and bit length</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy and paste functionality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no registration required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Common Conversions</h3>
                  <div className="text-sm text-muted-foreground space-y-2 font-mono">
                    <div className="flex justify-between"><span>10</span><span className="text-primary">=</span><span>A</span></div>
                    <div className="flex justify-between"><span>15</span><span className="text-primary">=</span><span>F</span></div>
                    <div className="flex justify-between"><span>16</span><span className="text-primary">=</span><span>10</span></div>
                    <div className="flex justify-between"><span>255</span><span className="text-primary">=</span><span>FF</span></div>
                    <div className="flex justify-between"><span>256</span><span className="text-primary">=</span><span>100</span></div>
                    <div className="flex justify-between"><span>4096</span><span className="text-primary">=</span><span>1000</span></div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Use Cases</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Color Codes:</strong> Web colors are represented in hexadecimal (e.g., #FF5733)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Memory Addresses:</strong> Computer memory locations are typically displayed in hexadecimal</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Machine Code:</strong> Microprocessor instructions are represented in hexadecimal</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Checksums:</strong> Hash values and checksums often use hexadecimal notation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong className="text-foreground">Debugging:</strong> Developers use hex values when debugging code</span>
                  </li>
                </ul>
              </div>

              {/* Examples */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Conversion Examples</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm font-mono">
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">79</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">4F</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">255</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">FF</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">1024</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">400</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">65535</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">FFFF</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">16777215</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">FFFFFF</p>
                  </div>
                  <div className="bg-background p-3 rounded">
                    <p className="text-muted-foreground text-xs mb-1">Decimal</p>
                    <p className="font-semibold text-foreground">4294967295</p>
                    <p className="text-muted-foreground text-xs mt-2">Hex</p>
                    <p className="font-semibold text-primary">FFFFFFFF</p>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore Related Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/tools/a0z25-cipher-translator"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">A0Z25 Cipher Translator</p>
                    <p className="text-sm text-muted-foreground">Zero-indexed letter to number encoding</p>
                  </Link>
                  <Link
                    href="/tools/camel-case-converter"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Camel Case Converter</p>
                    <p className="text-sm text-muted-foreground">Convert text to camelCase or PascalCase</p>
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
