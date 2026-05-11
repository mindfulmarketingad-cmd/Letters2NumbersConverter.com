import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sitemap | Letter2Num",
  description: "Browse all pages on Letter2Num - your complete guide to letter-to-number conversion tools and resources.",
}

export default function Sitemap() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A1</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              Letter2Num
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Sitemap
          </h1>

          <div className="space-y-10">
            {/* Main Pages */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Main Pages</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Home - Letter to Number Converter Tool
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary hover:underline">
                    About - What is Letters to Numbers Converter
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </section>

            {/* Blog Posts */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Blog Posts</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/letter-number-conversion-data-science" className="text-primary hover:underline">
                    Applications of Letter-Number Conversion in Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">
                    Understanding ASCII and Character Encoding
                  </Link>
                </li>
                <li>
                  <Link href="/blog/puzzle-solving-letter-number-conversion" className="text-primary hover:underline">
                    Puzzle Solving with Letter-Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/educational-uses-letter-number-conversion" className="text-primary hover:underline">
                    Educational Uses of Letter-Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-number-converters-cryptography" className="text-primary hover:underline">
                    Uses of Letter to Number Converters in Cryptography
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-manually-check-letter-number-conversion" className="text-primary hover:underline">
                    How to Manually Check Letter to Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-to-numbers-code" className="text-primary hover:underline">
                    Letter to Numbers Code: Complete Guide to A1Z26 Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-solve-letter-number-puzzles" className="text-primary hover:underline">
                    How to Solve Letter Number Puzzles: Expert Tips
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-number-substitution-puzzles" className="text-primary hover:underline">
                    Letter Number Substitution Puzzles: Types & Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/blog/abc-to-number-code" className="text-primary hover:underline">
                    ABC to Number Code: Simple Guide for Everyone
                  </Link>
                </li>
              </ul>
            </section>

            {/* Tools */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Tools</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">
                    Text Frequency Analysis - Character & Word Counter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/letter-number-converter" className="text-primary hover:underline">
                    Letter to Number Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a1z26-translator" className="text-primary hover:underline">
                    A1Z26 Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/letter-number-converter" className="text-primary hover:underline">
                    Numbers to Letters Converter
                  </Link>
                </li>
              </ul>
            </section>

            {/* Legal Pages */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Legal</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>
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
