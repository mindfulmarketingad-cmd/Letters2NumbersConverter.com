import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "What is Letters to Numbers Converter | Letters2Numbers",
  description: "Learn about Letters to Numbers Converter - a free online tool for converting letters to numbers using A1Z26, ASCII, hexadecimal, and binary encoding.",
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Converter Tool
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            What is Letters to Numbers Converter
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-foreground leading-relaxed mb-6 text-lg">
            Letter2Num is a free online tool designed to instantly convert letters into their corresponding numerical values. Whether you need to decode a geocaching puzzle, solve an escape room cipher, work on a CTF challenge, or simply understand how computers represent text as numbers, our converter provides quick and accurate results across multiple encoding formats.
            </p>

            <p className="text-foreground leading-relaxed mb-6 text-lg">
              Our tool supports several popular encoding types including the standard A1Z26 cipher (where A=1 and Z=26), zero-based indexing (A=0 to Z=25), ASCII decimal codes, hexadecimal ASCII, and binary ASCII representation. Simply type or paste your text, select your preferred encoding type, and see the conversion instantly. The converter processes everything directly in your browser, ensuring your data remains private and secure. No registration required, no ads, just a simple and effective tool for all your letter-to-number conversion needs.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Converting</h3>
              <p className="text-muted-foreground mb-4">
                Ready to convert some text? Head to our free converter tool.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Open Converter Tool
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
            <p className="text-muted-foreground text-sm">
              &copy; 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
