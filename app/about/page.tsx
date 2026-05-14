import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"

const BASE_URL = 'https://www.letters2numbersconverter.com'

export const metadata: Metadata = {
  title: "About John Reed — Letters to Numbers Converter",
  description: "Letters2NumbersConverter.com was built by John Reed to make cipher decoding, letter-number conversion, and text encoding tools free and accessible to everyone.",
  alternates: { canonical: `${BASE_URL}/about` },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Reed',
  url: BASE_URL,
  sameAs: [BASE_URL],
  worksFor: {
    '@type': 'Organization',
    name: 'Letters2NumbersConverter.com',
    url: BASE_URL,
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Letters2NumbersConverter.com',
  url: BASE_URL,
  founder: { '@type': 'Person', name: 'John Reed' },
  description: 'Free online tools for letter-number conversion, cipher decoding, text encoding, and cryptography puzzles.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
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

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Letters2NumbersConverter.com
          </h1>

          <p className="text-muted-foreground text-lg mb-10">
            Built by <strong className="text-foreground">John Reed</strong> — free tools for anyone who works with ciphers, puzzles, and text encoding.
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Who I am</h2>
              <p className="text-foreground leading-relaxed">
                I'm John Reed, the creator and editor of Letters2NumbersConverter.com. I've spent years working with text encoding systems — first as a hobby solving escape room puzzles and geocaching ciphers, and later building tools to help other people do the same thing faster. I write every article on this site myself, testing each method and tool against real puzzles before publishing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Why I built this</h2>
              <p className="text-foreground leading-relaxed">
                When I started solving letter-number ciphers, I kept hitting the same problem: most tools online were either too narrow (only A1Z26), cluttered with ads, or required an account. I wanted a single place that handled A1Z26, A0Z25, ASCII, hex, binary, Morse code, Atbash, Caesar shifts, and every other encoding I ran into — all free, all in the browser, no sign-up.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                I built the first version of the converter in an afternoon and shared it with my geocaching group. The feedback was immediate. People wanted more encoding types, more cipher tools, more explanations. That feedback turned a single-page tool into the site you're using now — over 100 tools covering everything from gradient palette generators to certificate decoders.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How the site works</h2>
              <p className="text-foreground leading-relaxed">
                Every tool on this site runs entirely in your browser. No files are uploaded to a server, no data is stored, and nothing requires an account. The code uses the Web Crypto API, Canvas API, and standard JavaScript — the same APIs your browser already ships with. I prioritize privacy by design: if a tool can run offline, it does.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The blog covers the techniques behind each tool — how A1Z26 maps letters to numbers, how Caesar shifts work, how k-means clustering pulls colors from an image. My goal with each post is to explain the actual mechanism, not just tell you to click a button.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Get in touch</h2>
              <p className="text-foreground leading-relaxed">
                If you find a bug, want a new tool added, or have a question about a specific cipher or encoding method, I read every message personally. The best way to reach me is through the{' '}
                <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
              </p>
            </section>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">Try the tools</h3>
              <p className="text-muted-foreground mb-4">
                Browse all 100+ free tools — no account needed.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Browse All Tools
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  Letter-Number Converter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
            </nav>
            <p className="text-muted-foreground text-sm">&copy; 2026 John Reed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
