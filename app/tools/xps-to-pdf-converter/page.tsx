import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { XpsToPdfConverter } from '@/components/xps-to-pdf-converter'

export const metadata: Metadata = {
  title: { absolute: "XPS to PDF Converter" },
  description: 'Free online XPS File To PDF converter. Convert XPS documents to PDF format instantly with our easy-to-use web tool. No installation required.',
  keywords: [
    'XPS to PDF',
    'XPS File To PDF converter',
    'convert XPS to PDF',
    'XPS document converter',
    'online XPS converter',
    'free XPS to PDF',
    'XPS to PDF online',
    'document conversion',
    'file format converter'
  ],
  authors: [{ name: 'Neo' }],
  openGraph: {
    title: 'XPS File To PDF - Online Converter',
    description: 'Convert XPS files to PDF format instantly with our free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/xps-to-pdf-converter',
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'XPS File To PDF - Convert XPS To PDF Online' }],
    },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/xps-to-pdf-converter',
  },
}

export default function XpsToPdfPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 w-full">
        <div className="w-full max-w-full mx-auto py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-200px)]">
            {/* Left Column - Tool Interface */}
            <div className="border-r border-border overflow-y-auto">
              <div className="p-6 lg:p-8">
                <XpsToPdfConverter />
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="overflow-y-auto">
              <div className="p-6 lg:p-8 space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-bold">X</span>
                    </div>
                    <span className="text-sm text-muted-foreground">File Conversion Tools</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    XPS File To <span className="text-primary">PDF</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Convert XPS (XML Paper Specification) documents to PDF format instantly. Our free online converter preserves all formatting, fonts, and images while making your documents universally compatible across all devices and platforms. Perfect for sharing documents without compatibility concerns.
                  </p>
                </div>

                {/* Who Is It For Section */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Who Is It For?</h2>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">Business Professionals</h3>
                      <p className="text-sm text-muted-foreground">
                        Convert XPS documents to PDF for professional sharing, client distribution, and document management workflows.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">IT & Document Administrators</h3>
                      <p className="text-sm text-muted-foreground">
                        Batch convert XPS files for system migrations, format standardization, and document archival processes.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">Students & Educators</h3>
                      <p className="text-sm text-muted-foreground">
                        Convert school documents and assignments to PDF format for universal compatibility and easier sharing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works Section */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">How It Works</h2>
                  <ol className="space-y-3">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">1</span>
                      <div>
                        <p className="font-medium text-foreground">Upload XPS File</p>
                        <p className="text-sm text-muted-foreground">Click upload or drag your XPS document into the converter</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">2</span>
                      <div>
                        <p className="font-medium text-foreground">Instant Conversion</p>
                        <p className="text-sm text-muted-foreground">Our tool automatically converts your file with quality preservation</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">3</span>
                      <div>
                        <p className="font-medium text-foreground">Download PDF</p>
                        <p className="text-sm text-muted-foreground">Save your converted PDF file to your device</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Full Width */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is an XPS file?</h3>
                <p className="text-sm text-muted-foreground">XPS (XML Paper Specification) is a document format developed by Microsoft that preserves document formatting similar to PDF, but with less universal support.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is the conversion free?</h3>
                <p className="text-sm text-muted-foreground">Yes, completely free! Our XPS to PDF converter has no hidden fees, limits, or subscriptions required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Does conversion preserve formatting?</h3>
                <p className="text-sm text-muted-foreground">Yes, our converter preserves all formatting, fonts, images, and layout from the original XPS document in the PDF output.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What's the file size limit?</h3>
                <p className="text-sm text-muted-foreground">There's no file size limit! You can convert small or large XPS documents without any restrictions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I convert multiple files?</h3>
                <p className="text-sm text-muted-foreground">You can convert files one at a time using our tool. Simply upload another file after downloading your first conversion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is an account required?</h3>
                <p className="text-sm text-muted-foreground">No account needed! Our converter is completely anonymous and requires no registration or login.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "XPS File To PDF Converter",
          "description": "Free online XPS to PDF file converter. Convert XPS documents to PDF format instantly.",
          "url": "https://www.letters2numbersconverter.com/tools/xps-to-pdf-converter",
          "applicationCategory": "UtilityApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "2450"
          }
        })}
      </script>
    </div>
  )
}
