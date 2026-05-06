import { YamlIniConverter } from "@/components/yaml-ini-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "YAML to INI Converter",
  description: "YAML to INI Converter - Free online tool to transform YAML configuration files into INI format instantly. Supports bidirectional conversion for developers and system administrators.",
  keywords: ["YAML to INI converter", "INI converter", "YAML converter", "file format converter", "configuration converter", "online converter"],
  openGraph: {
    title: "YAML to INI Converter | Letters2NumbersConverter.com",
    description: "Convert YAML to INI format instantly with our free online converter. Perfect for developers managing configuration files.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/yaml-to-ini-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/yaml-to-ini-converter",
  },
}

export default function YamlToIniConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YAML to INI Converter",
    description: "Free online tool to convert between YAML and INI configuration file formats",
    url: "https://www.letters2numbersconverter.com/tools/yaml-to-ini-converter",
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
        id="yaml-ini-schema"
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
                Free Configuration Converter
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                YAML to INI Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The YAML to INI Converter is a free online tool that instantly transforms configuration files between YAML and INI formats. Perfect for developers, system administrators, and DevOps engineers who need to convert configuration files quickly without installing additional software.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Developers</p>
                  <p className="text-sm text-muted-foreground">Working with configuration management</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">DevOps Engineers</p>
                  <p className="text-sm text-muted-foreground">Managing infrastructure configs</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">System Admins</p>
                  <p className="text-sm text-muted-foreground">Converting between file formats</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-6xl mx-auto mb-12">
              <YamlIniConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Step 1:</strong> Paste your YAML or INI content into the input box
                  </p>
                  <p>
                    <strong className="text-foreground">Step 2:</strong> Toggle between YAML to INI or INI to YAML conversion mode
                  </p>
                  <p>
                    <strong className="text-foreground">Step 3:</strong> The converter instantly transforms your configuration file
                  </p>
                  <p>
                    <strong className="text-foreground">Step 4:</strong> Copy the result, download as a file, or clear and start over
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
                      <span>Bidirectional conversion (YAML ↔ INI)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Instant real-time conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>No sign-up required</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy, paste, and download functions</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free to use</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Your data isn&apos;t stored</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">About File Formats</h3>
                  <div className="text-sm text-muted-foreground space-y-3">
                    <div>
                      <p className="font-medium text-foreground mb-1">YAML</p>
                      <p>Human-readable data format commonly used in configuration files and container orchestration</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">INI</p>
                      <p>Traditional configuration format with sections and key-value pairs, used in Windows and legacy systems</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting Docker Compose configs from YAML to INI format</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Migrating legacy INI configuration files to modern YAML</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Preparing configuration for different application requirements</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Batch converting configuration files in DevOps pipelines</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Managing multi-format configuration systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Learning configuration file syntax and structure</span>
                  </li>
                </ul>
              </div>

              {/* Related Tools */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore More Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Letters to Numbers Converter</p>
                    <p className="text-sm text-muted-foreground">Transform letters to numbers with A1Z26, A0Z25, and more</p>
                  </Link>
                  <Link
                    href="/tools/a0z25-cipher-translator"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">A0Z25 Cipher Translator</p>
                    <p className="text-sm text-muted-foreground">Zero-indexed letter encoding and decoding tool</p>
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
