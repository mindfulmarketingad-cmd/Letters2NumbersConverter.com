import { LineEndingConverter } from "@/components/line-ending-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Line Ending Converter",
  description: "Line Ending Converter - Convert line endings between Windows (CRLF), Unix/Mac (LF), and old Mac (CR) formats for cross-platform compatibility. Upload files or paste text for instant conversion.",
  keywords: ["line ending converter", "CRLF to LF", "line ending format", "Windows LF converter", "cross-platform line endings", "CR LF conversion"],
  openGraph: {
    title: "Line Ending Converter | Letters2NumbersConverter.com",
    description: "Free online line ending converter - Convert between CRLF, LF, and CR formats for cross-platform text compatibility.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/line-ending-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/line-ending-converter",
  },
}

export default function LineEndingConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Line Ending Converter",
    description: "Convert line endings between Windows (CRLF), Unix/Mac (LF), and old Mac (CR) formats for cross-platform compatibility",
    url: "https://www.letters2numbersconverter.com/tools/line-ending-converter",
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
        id="line-ending-schema"
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
                Cross-Platform Text Utility
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Line Ending Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The Line Ending Converter transforms text between Windows (CRLF), Unix/Mac (LF), and old Mac (CR) formats for seamless cross-platform compatibility. Convert any text or upload files to handle line ending differences that can cause issues when sharing code, documents, or configuration files across different operating systems.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Developers</p>
                  <p className="text-sm text-muted-foreground">Handling cross-platform source code</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">DevOps Engineers</p>
                  <p className="text-sm text-muted-foreground">Managing configuration files</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Content Creators</p>
                  <p className="text-sm text-muted-foreground">Ensuring text compatibility</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-3xl mx-auto mb-12">
              <LineEndingConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Line Endings</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Line Endings Problem:</strong> Different operating systems use different characters to represent line breaks, causing compatibility issues when files are transferred between systems.
                  </p>
                  <p>
                    <strong className="text-foreground">Why It Matters:</strong> Git repositories, text editors, and build tools may show warnings or errors when line endings are inconsistent. This tool normalizes your text for seamless cross-platform compatibility.
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
                      <span>Automatic line ending detection</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Support for LF, CRLF, and CR formats</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Real-time conversion preview</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>File upload and download support</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Batch processing for large files</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free and instant conversion</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Line Ending Formats</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">LF (Line Feed)</p>
                      <p>Unix, Linux, macOS - represented as \n</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">CRLF (Carriage Return + Line Feed)</p>
                      <p>Windows - represented as \r\n</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">CR (Carriage Return)</p>
                      <p>Old Mac OS 9 and earlier - represented as \r</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Issues */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Line Ending Issues & Solutions</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-1">Git Shows "LF will be replaced by CRLF" Warning</p>
                    <p>Your file uses LF but your system is configured for CRLF. Use this converter to match your system settings or configure Git to handle line endings automatically.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">^M Characters Appear in Text Editors</p>
                    <p>This indicates CR or CRLF line endings being displayed on a Unix system. Convert to LF format for compatibility.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Shell Scripts Won't Execute on Windows</p>
                    <p>Unix scripts use LF line endings. Convert Windows files to LF before running them in Unix-like environments.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Mixed Line Endings Across Files</p>
                    <p>Use batch upload to standardize line endings across your entire project for consistency.</p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting source code when switching between Windows and Unix systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Standardizing line endings in version control repositories</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Preparing configuration files for cross-platform deployment</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Fixing shell scripts that fail on certain platforms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Resolving text editor display issues with ^M characters</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Normalizing data files from mixed-platform sources</span>
                  </li>
                </ul>
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
                    <p className="text-sm text-muted-foreground">Convert letters to numbers with multiple encoding formats</p>
                  </Link>
                  <Link
                    href="/tools/camel-case-converter"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Camel Case Converter</p>
                    <p className="text-sm text-muted-foreground">Convert text to camelCase or PascalCase format</p>
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
