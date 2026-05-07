import { Metadata } from "next"
import { PxVwConverter } from "@/components/px-vw-converter"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "PX To VW Converter",
  description: "Convert between pixels (px) and viewport width (vw) units instantly. Essential tool for responsive web design and CSS calculations.",
  keywords: ["px to vw converter", "pixel to viewport", "CSS units", "responsive design", "vw converter"],
  openGraph: {
    title: "PX To VW Converter",
    description: "Convert between pixels and viewport width units for responsive web design.",
    type: "website",
  },
}

export default function PxVwConverterPage() {
  return (
    <ToolLayout
      toolId="px-vw-converter"
      toolName="PX To VW Converter"
      toolDescription="Convert between pixels (px) and viewport width (vw) units instantly. Essential tool for responsive web design, CSS calculations, and creating fluid layouts."
      toolComponent={<PxVwConverter />}
    />
  )
}
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
        id="px-vw-schema"
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
                Responsive Design Tool
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                PX To VW Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The PX To VW Converter is a simple online tool to convert between pixel (px) and viewport width (vw) CSS units for responsive web design. Use our simple PX to VW and VW to PX converter to make your web design fully responsive. Enter your values below to get instant results.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Web Developers</p>
                  <p className="text-sm text-muted-foreground">Building responsive CSS layouts</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">UI/UX Designers</p>
                  <p className="text-sm text-muted-foreground">Converting design specs to responsive units</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Front-end Engineers</p>
                  <p className="text-sm text-muted-foreground">Implementing flexible component sizing</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-2xl mx-auto mb-12">
              <PxVwConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How PX to VW Conversion Works</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Understanding VW Units:</strong> VW (viewport width) is a responsive CSS unit that equals 1% of the viewport width. For example, on a 1920px desktop, 1vw equals 19.2px.
                  </p>
                  <p>
                    <strong className="text-foreground">The Formula:</strong> To convert PX to VW: (pixels ÷ viewport width) × 100. To convert VW to PX: (vw × viewport width) ÷ 100.
                  </p>
                  <p>
                    <strong className="text-foreground">Why It Matters:</strong> VW units create truly responsive designs that scale with the browser window, making your layouts adapt smoothly to any screen size.
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
                      <span>Instant bidirectional conversion (PX ↔ VW)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Multiple viewport presets (mobile to 4K)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Custom viewport width support</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Real-time interactive sliders</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy conversion results easily</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no registration needed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Viewport Presets Included</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <div className="flex justify-between">
                      <span>Mobile</span>
                      <span className="font-mono">320px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tablet</span>
                      <span className="font-mono">768px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Laptop</span>
                      <span className="font-mono">1024px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Desktop</span>
                      <span className="font-mono">1920px</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4K Display</span>
                      <span className="font-mono">2560px</span>
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
                    <span>Converting font sizes to responsive VW units for better readability</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Designing fluid layouts that scale across device sizes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Creating responsive padding and margin values</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting design specifications from fixed to responsive units</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Building container and component dimensions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Testing responsive behavior across different viewports</span>
                  </li>
                </ul>
              </div>

              {/* Example Section */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Conversion Examples</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-3">Desktop (1920px)</p>
                    <div className="space-y-2 font-mono text-muted-foreground">
                      <p>16px = 0.833vw</p>
                      <p>24px = 1.25vw</p>
                      <p>100px = 5.208vw</p>
                      <p>200px = 10.417vw</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">Mobile (320px)</p>
                    <div className="space-y-2 font-mono text-muted-foreground">
                      <p>16px = 5vw</p>
                      <p>24px = 7.5vw</p>
                      <p>100px = 31.25vw</p>
                      <p>160px = 50vw</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-4">Tips for Using VW Units</h3>
                <ul className="text-sm text-amber-900 dark:text-amber-200 space-y-3">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Use VW for responsive typography and spacing that scales with viewport</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Combine VW with min/max constraints to prevent extreme scaling on very small or large screens</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Test on actual devices to ensure readability and usability at all screen sizes</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>VH (viewport height) works the same way as VW but for vertical dimensions</span>
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
                    <p className="text-sm text-muted-foreground">Convert letters to numbers with A1Z26, A0Z25, and more</p>
                  </Link>
                  <Link
                    href="/tools/json-to-java-code-generator"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">JSON to Java Code Generator</p>
                    <p className="text-sm text-muted-foreground">Convert JSON schema to Java classes with getters and setters</p>
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
