import Link from "next/link"
import {
  ArrowLeftRight, Info, Mail, Map, HelpCircle,
  BookOpen, Code2, Brain, Lock, ClipboardList,
  Shield, Cookie, ScrollText, AlertCircle,
} from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm tracking-tight">L2N</span>
              </div>
              <span className="font-semibold text-foreground text-lg">
                Letters to Numbers
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The trusted letters to numbers converter tool for puzzles, cryptography, education, and data science applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ArrowLeftRight className="w-3.5 h-3.5 flex-shrink-0" />
                  Converter Tool
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Info className="w-3.5 h-3.5 flex-shrink-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Map className="w-3.5 h-3.5 flex-shrink-0" />
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <HelpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/understanding-ascii-character-encoding" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Code2 className="w-3.5 h-3.5 flex-shrink-0" />
                  ASCII Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/puzzle-solving-letter-number-conversion" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Brain className="w-3.5 h-3.5 flex-shrink-0" />
                  Puzzle Solving
                </Link>
              </li>
              <li>
                <Link href="/blog/letter-number-converters-cryptography" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Lock className="w-3.5 h-3.5 flex-shrink-0" />
                  Cryptography
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-manually-check-letter-number-conversion" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ClipboardList className="w-3.5 h-3.5 flex-shrink-0" />
                  Manual Conversion
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Shield className="w-3.5 h-3.5 flex-shrink-0" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Cookie className="w-3.5 h-3.5 flex-shrink-0" />
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <ScrollText className="w-3.5 h-3.5 flex-shrink-0" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Letters to Numbers Converter Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
