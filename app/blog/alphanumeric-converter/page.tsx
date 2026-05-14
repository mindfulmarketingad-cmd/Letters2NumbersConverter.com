import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { ShareButton } from "@/components/share-button"

const BASE_URL = "https://www.letters2numbersconverter.com"
const PAGE_URL = `${BASE_URL}/blog/alphanumeric-converter`
const PUBLISHED = "2026-05-14T00:00:00.000Z"

export const metadata: Metadata = {
  title: "Alphanumeric Converter — Convert Text to Numbers, ASCII, Hex & Binary",
  description: "Complete guide to alphanumeric conversion: A1Z26, A0Z25, ASCII, hexadecimal, and binary explained with examples. Free online alphanumeric converter tool included.",
  keywords: [
    "alphanumeric converter",
    "text to numbers",
    "letter to number converter",
    "ASCII converter",
    "hex converter",
    "binary converter",
    "alphanumeric conversion",
    "A1Z26 converter",
  ],
  authors: [{ name: "John Reed" }],
  openGraph: {
    title: "Alphanumeric Converter — Convert Text to Numbers, ASCII, Hex & Binary",
    description: "Complete guide to alphanumeric conversion formats — A1Z26, ASCII, hex, and binary — with a free online converter tool.",
    type: "article",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    authors: ["John Reed"],
    images: [{ url: `${BASE_URL}/images/blog/alphanumeric-converter-hero.jpg`, width: 1200, height: 630 }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alphanumeric Converter — Convert Text to Numbers, ASCII, Hex & Binary",
  description: "A complete guide to alphanumeric conversion: A1Z26, A0Z25, ASCII, hexadecimal, and binary explained with examples, a comparison table, and links to free tools.",
  image: `${BASE_URL}/images/blog/alphanumeric-converter-hero.jpg`,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "John Reed", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Letters2NumbersConverter.com",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an alphanumeric converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An alphanumeric converter is a tool that transforms letters and characters into numeric representations such as A1Z26 alphabet positions, ASCII decimal codes, hexadecimal values, or binary strings. Different formats serve different purposes in programming, cryptography, and puzzle solving.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between A1Z26 and ASCII alphanumeric conversion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A1Z26 maps only letters A–Z to the numbers 1–26 based on their position in the alphabet. ASCII maps every typeable character — letters, digits, punctuation, and control characters — to a number from 0 to 127. A1Z26 is case-insensitive; ASCII distinguishes uppercase (A=65) from lowercase (a=97).",
      },
    },
    {
      "@type": "Question",
      name: "Which alphanumeric conversion format should I use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use A1Z26 for escape room puzzles, geocaching, and casual ciphers. Use ASCII for programming and data processing. Use hexadecimal for memory addresses, color codes, and developer tools. Use binary for computer science education and low-level system work.",
      },
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
    { "@type": "ListItem", position: 3, name: "Alphanumeric Converter", item: PAGE_URL },
  ],
}

export default function AlphanumericConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
              Alphanumeric Converter
            </h1>
            <p className="text-muted-foreground mb-3">
              The complete guide to converting between letters, numbers, and digital encoding formats
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              By <strong className="text-foreground">John Reed</strong> · May 14, 2026
            </p>
            <ShareButton title="Alphanumeric Converter" />
          </header>

          {/* Hero Image */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src="/images/blog/alphanumeric-converter-hero.jpg"
              alt="Alphanumeric converter showing text transforming into numbers and digital codes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              An <strong>alphanumeric converter</strong> is a tool that transforms text between letters, numbers, and digital encoding formats. Whether you need A1Z26 alphabet positions for a cipher puzzle, ASCII codes for a programming project, hexadecimal for a developer tool, or binary for a computer science course, understanding alphanumeric conversion is a foundational skill across cryptography, data processing, and puzzle solving.
            </p>

            {/* Quick Tool CTA */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8 not-prose">
              <h3 className="text-lg font-semibold text-foreground mb-2">Try the Alphanumeric Conversion Tool</h3>
              <p className="text-muted-foreground mb-4">
                Convert any text to A1Z26, ASCII, hex, or binary instantly — free, no sign-up.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/alphanumeric-conversion-tool"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Alphanumeric Conversion Tool
                </Link>
                <Link
                  href="/tools/ivr-alphanumeric-conversion-tool"
                  className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  IVR Alphanumeric Tool
                </Link>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="bg-muted/50 border border-border rounded-xl p-6 mb-10 not-prose" aria-label="Table of contents">
              <h2 className="text-base font-semibold text-foreground mb-4">Table of Contents</h2>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                {[
                  { href: "#what-is", label: "What is Alphanumeric Conversion?" },
                  { href: "#types", label: "Types of Alphanumeric Conversion" },
                  { href: "#comparison", label: "Encoding Format Comparison" },
                  { href: "#uses", label: "Practical Uses" },
                  { href: "#how-to", label: "How to Use the Alphanumeric Converter" },
                  { href: "#tips", label: "Pro Tips" },
                  { href: "#related", label: "Related Tools & Guides" },
                  { href: "#faq", label: "Frequently Asked Questions" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="text-primary hover:underline">{label}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <h2 id="what-is" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">What is Alphanumeric Conversion?</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Alphanumeric conversion is the process of translating characters — letters, digits, and symbols — into different numeric or coded representations. The term "alphanumeric" itself combines "alphabetic" and "numeric," describing any system that uses both letters and numbers together.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Every time a computer stores a letter, it is actually storing a number. The choice of which number represents which letter is the encoding. Different encoding systems were designed for different purposes: A1Z26 for simple human-readable ciphers, ASCII for computing, hex for compact binary display, and binary for the underlying machine level.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For a deeper dive into how computers use these systems internally, see the guide on <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">understanding ASCII character encoding</Link> and <Link href="/blog/how-to-decode-computer-language" className="text-primary hover:underline">how to decode computer language</Link>.
            </p>

            <h2 id="types" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Types of Alphanumeric Conversion</h2>
            <p className="text-foreground leading-relaxed mb-4">
              The four most common alphanumeric conversion formats each serve a different purpose:
            </p>

            <div className="space-y-6 mb-8 not-prose">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  A1Z26 — Standard Alphabet Position
                </h3>
                <p className="text-muted-foreground mb-3">
                  Each letter maps to its position in the alphabet: A=1, B=2 … Z=26. Case-insensitive. Used in escape room puzzles, geocaching, and simple substitution ciphers. For the zero-indexed variant where A=0, see the <Link href="/blog/a0z25-cipher" className="text-primary hover:underline">A0Z25 cipher guide</Link>.
                </p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">HELLO</span> → <span className="text-primary">8-5-12-12-15</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  ASCII — American Standard Code for Information Interchange
                </h3>
                <p className="text-muted-foreground mb-3">
                  Assigns a unique decimal number (0–127) to every typeable character. Uppercase A=65, lowercase a=97, space=32. The foundation of most text-based alphanumeric conversion in programming. Our <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII decoder tool</Link> handles both decimal and hex input.
                </p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">Hello</span> → <span className="text-primary">72 101 108 108 111</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Hexadecimal — Base-16
                </h3>
                <p className="text-muted-foreground mb-3">
                  Each byte represented as two hex digits using 0–9 and A–F. One hex character encodes 4 bits, so two hex characters encode one full byte. Used in memory addresses, color codes (#FF5733), and developer tools. See the <Link href="/tools/decimal-to-hexadecimal-converter-online" className="text-primary hover:underline">decimal to hexadecimal converter</Link> for conversions in either direction.
                </p>
                <div className="font-mono bg-muted/50 p-3 rounded">
                  <span className="text-foreground">Hello</span> → <span className="text-primary">48 65 6C 6C 6F</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Binary — Base-2
                </h3>
                <p className="text-muted-foreground mb-3">
                  ASCII values expressed as 8-bit binary strings. Each character becomes a sequence of 0s and 1s. Used in computer science education and anywhere you need to see the raw bit representation of text.
                </p>
                <div className="font-mono bg-muted/50 p-3 rounded text-sm">
                  <span className="text-foreground">Hi</span> → <span className="text-primary">01001000 01101001</span>
                </div>
              </div>
            </div>

            <h2 id="comparison" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Encoding Format Comparison</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Choosing the right format depends on what you're doing. This table maps each format to its typical context:
            </p>
            <div className="overflow-x-auto mb-8 not-prose">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left text-foreground font-semibold">Format</th>
                    <th className="border border-border p-3 text-left text-foreground font-semibold">A =</th>
                    <th className="border border-border p-3 text-left text-foreground font-semibold">Best For</th>
                    <th className="border border-border p-3 text-left text-foreground font-semibold">Case-sensitive?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A1Z26", "1", "Puzzles, escape rooms, geocaching", "No"],
                    ["A0Z25", "0", "Programming, cipher algorithms, CTF", "No"],
                    ["ASCII decimal", "65", "Programming, data processing", "Yes"],
                    ["Hexadecimal", "41", "Memory, color codes, dev tools", "Yes"],
                    ["Binary", "01000001", "Computer science, low-level systems", "Yes"],
                    ["Base64", "QQ==", "Encoding binary data as text", "Yes"],
                  ].map(([fmt, a, best, cs]) => (
                    <tr key={fmt} className="border-b border-border">
                      <td className="border border-border p-3 font-medium text-foreground">{fmt}</td>
                      <td className="border border-border p-3 font-mono text-primary">{a}</td>
                      <td className="border border-border p-3 text-muted-foreground">{best}</td>
                      <td className="border border-border p-3 text-muted-foreground">{cs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              Base64 is included here because it commonly appears alongside other alphanumeric conversion formats — our <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 encoder/decoder</Link> handles it directly.
            </p>

            <h2 id="uses" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Practical Uses of Alphanumeric Conversion</h2>
            <ul className="list-disc pl-6 space-y-3 text-foreground mb-6">
              <li>
                <strong>Programming & development</strong> — Character encoding is everywhere in code: parsing CSV files, handling form input, building APIs. Understanding that 'A' and 65 are the same thing in ASCII prevents a class of encoding bugs. The <Link href="/blog/letter-number-conversion-data-science" className="text-primary hover:underline">letter-number conversion in data science</Link> guide covers practical programming applications.
              </li>
              <li>
                <strong>Cryptography & ciphers</strong> — Every classical cipher — Caesar, Vigenère, Atbash, ROT13 — uses alphanumeric conversion internally. Converting letters to numbers first makes the math possible. See our <Link href="/blog/best-letter-number-ciphers" className="text-primary hover:underline">comparison of the best letter-number ciphers</Link> to understand which format each cipher uses.
              </li>
              <li>
                <strong>Escape rooms & puzzle games</strong> — A1Z26 is the single most common cipher in escape rooms. If you see numbers on a lock that go up to 26, it's almost certainly A1Z26. Our <Link href="/blog/escape-room-letter-codes" className="text-primary hover:underline">escape room letter codes guide</Link> lists every format you might encounter.
              </li>
              <li>
                <strong>CTF (Capture The Flag) competitions</strong> — CTF challenges layer multiple alphanumeric formats on top of each other. A message might be A0Z25-encoded, then Base64-wrapped, then hex-dumped. Recognizing each layer quickly is a core skill.
              </li>
              <li>
                <strong>Geocaching</strong> — Coordinate puzzles regularly encode digits as letters using A1Z26 or other alphanumeric formats. The <Link href="/blog/letter-number-codes-geocaching" className="text-primary hover:underline">letter-number codes for geocaching</Link> post covers the formats geocache setters use most.
              </li>
              <li>
                <strong>Education</strong> — Learning alphanumeric conversion builds intuition for how computers represent information. The <Link href="/blog/educational-uses-letter-number-conversion" className="text-primary hover:underline">educational uses of letter-number conversion</Link> guide covers classroom applications.
              </li>
            </ul>

            <h2 id="how-to" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">How to Use the Alphanumeric Converter</h2>
            <ol className="list-decimal pl-6 space-y-2 text-foreground mb-6">
              <li>Open the <Link href="/tools/alphanumeric-conversion-tool" className="text-primary hover:underline">alphanumeric conversion tool</Link></li>
              <li>Type or paste any text into the input field</li>
              <li>Select your target format — A1Z26, ASCII, hex, or binary</li>
              <li>The conversion updates instantly in the output panel</li>
              <li>Click Copy to copy the result to your clipboard</li>
            </ol>
            <p className="text-foreground leading-relaxed mb-4">
              If you're converting phone keypad letters to numbers (T9-style), use the <Link href="/tools/ivr-alphanumeric-conversion-tool" className="text-primary hover:underline">IVR alphanumeric conversion tool</Link> instead — it maps letters to the dial-pad digits 2–9.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For encoding and decoding URL percent-encoded strings, HTML entities, or JSON escape sequences, see the <Link href="/blog/alphanumeric-code-translator" className="text-primary hover:underline">alphanumeric code translator guide</Link>.
            </p>

            <h2 id="tips" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Pro Tips for Alphanumeric Conversion</h2>
            <div className="bg-muted/50 rounded-lg p-6 mb-8 not-prose">
              <ul className="space-y-3 text-foreground text-sm">
                <li><strong>Case matters in ASCII</strong> — Uppercase A is 65, lowercase a is 97. If your decoder returns wrong results, check whether the input should be uppercase or lowercase.</li>
                <li><strong>Hex often uses a 0x prefix</strong> — 0x41 and 41 both mean decimal 65 (letter A). Strip the prefix before converting.</li>
                <li><strong>Binary bytes are 8 bits</strong> — Standard ASCII uses 8 bits per character. If you see groups shorter than 8, the leading zeros may have been dropped.</li>
                <li><strong>A1Z26 ignores case</strong> — Both 'A' and 'a' produce 1. If case preservation matters, use ASCII instead.</li>
                <li><strong>Not sure which encoding you have?</strong> — Use the <Link href="/tools/cipher-identifier" className="text-primary hover:underline">cipher identifier</Link> to narrow it down, or check the <Link href="/blog/how-to-decode-computer-language" className="text-primary hover:underline">decoding guide</Link> for visual identification tips.</li>
              </ul>
            </div>

            {/* Related Tools & Guides */}
            <h2 id="related" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Related Alphanumeric Tools & Guides</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Depending on what you're trying to convert, one of these tools or posts may be a better fit:
            </p>

            <div className="not-prose grid gap-3 sm:grid-cols-2 mb-8">
              {[
                {
                  label: "Alphanumeric Conversion Tool",
                  href: "/tools/alphanumeric-conversion-tool",
                  desc: "Convert text to A1Z26, ASCII, hex, and binary",
                },
                {
                  label: "IVR Alphanumeric Conversion Tool",
                  href: "/tools/ivr-alphanumeric-conversion-tool",
                  desc: "Phone keypad letter-to-digit conversion (T9)",
                },
                {
                  label: "Letter to Number Converter",
                  href: "/tools/letter-number-converter",
                  desc: "Main A1Z26 encoder and decoder",
                },
                {
                  label: "A1Z26 Decoder & Encoder",
                  href: "/tools/a1z26-decoder-and-encoder",
                  desc: "Full A1Z26 tool with bidirectional conversion",
                },
                {
                  label: "ASCII Decoder",
                  href: "/tools/ascii-decoder",
                  desc: "Decode ASCII decimal, hex, binary, and octal",
                },
                {
                  label: "Decimal to Hex Converter",
                  href: "/tools/decimal-to-hexadecimal-converter-online",
                  desc: "Convert decimal numbers to hexadecimal and back",
                },
                {
                  label: "Base64 Encoder / Decoder",
                  href: "/tools/base64-encoder-decoder",
                  desc: "Encode and decode Base64 strings",
                },
                {
                  label: "Cipher Identifier",
                  href: "/tools/cipher-identifier",
                  desc: "Identify which encoding or cipher your text uses",
                },
              ].map(({ label, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </Link>
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-2 font-medium">Further reading:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground mb-8">
              <li><Link href="/blog/alphanumeric-code-translator" className="text-primary hover:underline">Alphanumeric Code Translator</Link> — URL, HTML entity, and escape sequence decoding</li>
              <li><Link href="/blog/a0z25-cipher" className="text-primary hover:underline">A0Z25 Cipher</Link> — the zero-indexed counterpart to A1Z26</li>
              <li><Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">Understanding ASCII Character Encoding</Link> — how ASCII became the standard</li>
              <li><Link href="/blog/best-letter-number-ciphers" className="text-primary hover:underline">Best Letter-Number Ciphers</Link> — A1Z26 vs A0Z25 vs ASCII vs Hex compared</li>
              <li><Link href="/blog/letter-number-conversion-data-science" className="text-primary hover:underline">Alphanumeric Conversion in Data Science</Link> — practical use in Python and pandas</li>
              <li><Link href="/blog/escape-room-letter-codes" className="text-primary hover:underline">Escape Room Letter Codes</Link> — which alphanumeric format is most common in puzzles</li>
            </ul>

            {/* FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-foreground mt-10 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
            <div className="not-prose space-y-5">
              {[
                {
                  q: "What is an alphanumeric converter?",
                  a: "An alphanumeric converter transforms letters and characters into numeric representations such as A1Z26 positions, ASCII decimal codes, hexadecimal values, or binary strings. Different formats suit different contexts — puzzles, programming, data transmission, or cryptography.",
                },
                {
                  q: "What is the difference between A1Z26 and ASCII alphanumeric conversion?",
                  a: "A1Z26 maps only the 26 letters A–Z to numbers 1–26 based on alphabet position. It is case-insensitive. ASCII maps every typeable character — letters, digits, punctuation — to a number from 0 to 127. Uppercase A=65 and lowercase a=97 in ASCII, so case matters.",
                },
                {
                  q: "Which alphanumeric conversion format should I use?",
                  a: "Use A1Z26 for escape room puzzles, geocaching, and casual ciphers. Use ASCII for programming and data processing. Use hexadecimal for memory addresses and color codes. Use binary for computer science education and low-level work.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg not-prose">
              <h3 className="text-lg font-semibold text-foreground mb-2">Convert Text Now</h3>
              <p className="text-muted-foreground mb-4">
                Free alphanumeric converter — no sign-up, no limits, works in your browser.
              </p>
              <Link
                href="/tools/alphanumeric-conversion-tool"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Alphanumeric Conversion Tool
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
