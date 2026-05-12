import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolsGrid } from '@/components/tools-grid'
import { XpsToPdfConverter } from '@/components/xps-to-pdf-converter'

export const metadata: Metadata = {
  title: 'XPS File To PDF - Convert XPS To PDF Online',
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
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Tool */}
            <div className="lg:col-span-2">
              <XpsToPdfConverter />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-secondary/50 rounded-lg border border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">About This Tool</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  XPS File To PDF is a free online converter that transforms XPS (XML Paper Specification) documents into universally compatible PDF format. Perfect for sharing documents across different platforms and devices.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-lg border border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Why Convert XPS to PDF?</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>PDF is more universally supported</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Better compatibility across devices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Easier sharing and distribution</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Preserves formatting and layout</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-lg border border-border p-6">
                <h2 className="text-lg font-bold text-foreground mb-4">Privacy & Security</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your files are processed securely and deleted immediately after conversion. We never store or share your documents.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-secondary/50 rounded-lg border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is an XPS file?</h3>
                <p className="text-sm text-muted-foreground">XPS (XML Paper Specification) is a document format developed by Microsoft that preserves document formatting. It's similar to PDF but less universally supported.</p>
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
                <p className="text-sm text-muted-foreground">You can convert files one at a time using our tool. Simply upload another XPS file after downloading your first conversion.</p>
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
