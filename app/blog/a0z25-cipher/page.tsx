import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { ShareButton } from "@/components/share-button"

const BASE_URL = "https://www.letters2numbersconverter.com"
const PAGE_URL = `${BASE_URL}/blog/a0z25-cipher`
const PUBLISHED = "2026-05-14T00:00:00.000Z"

export const metadata: Metadata = {
  title: "What is the A0Z25 Cipher? A0Z25 vs A1Z26, Real-World Uses & Examples",
  description: "What is the A0Z25 Cipher? A complete guide covering zero-indexed letter-to-number encoding (A=0 through Z=25), how it compares to A1Z26, and its real-world uses in programming, CTF challenges, and escape room puzzles.",
  keywords: [
    "A0Z25 cipher",
    "what is A0Z25 cipher",
    "A0Z25 vs A1Z26",
    "zero-indexed cipher",
    "A=0 B=1 cipher",
    "alphabet cipher",
    "letter to number",
    "programming cipher",
    "A0Z25 real world uses",
  ],
  authors: [{ name: "John Reed" }],
  openGraph: {
    title: "What is the A0Z25 Cipher? A0Z25 vs A1Z26, Real-World Uses & Examples",
    description: "Complete guide to the A0Z25 cipher — what it is, how it differs from A1Z26, and where it's used in programming, cryptography, and puzzles.",
    type: "article",
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    authors: ["John Reed"],
    images: [{ url: `${BASE_URL}/images/blog/a0z25-cipher-hero.jpg`, width: 1200, height: 630, alt: "A0Z25 cipher chart" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What is the A0Z25 Cipher? A0Z25 vs A1Z26, Real-World Uses & Examples",
  description: "A complete guide to the A0Z25 cipher: zero-indexed letter-to-number encoding, comparison with A1Z26, and real-world applications in programming, CTF, and puzzle solving.",
  image: `${BASE_URL}/images/blog/a0z25-cipher-hero.jpg`,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { "@type": "Person", name: "John Reed", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "Letters2NumbersConverter.com",
    logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  about: [
    { "@type": "Thing", name: "A0Z25 Cipher" },
    { "@type": "Thing", name: "A0Z25 vs A1Z26" },
    { "@type": "Thing", name: "Zero-indexed encoding" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the A0Z25 cipher?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The A0Z25 cipher is a letter-to-number substitution system where A=0, B=1, C=2 … Z=25. It uses zero-based indexing, aligning with how programming languages number array positions and string characters.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between A0Z25 and A1Z26?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A1Z26 maps A=1 through Z=26. A0Z25 maps A=0 through Z=25. The key practical difference is that A0Z25 aligns with zero-based array indexing used in Python, JavaScript, C, and Java, making modular arithmetic (mod 26) work without adjustment.",
      },
    },
    {
      "@type": "Question",
      name: "Where is A0Z25 used in the real world?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A0Z25 is used in computer science education, CTF (Capture The Flag) security competitions, escape room puzzles, geocaching coordinate puzzles, and as the internal index for cipher algorithms like the Caesar cipher and Vigenère cipher.",
      },
    },
    {
      "@type": "Question",
      name: "How do you decode an A0Z25 message?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add 65 to each number and convert the result to its ASCII character. Example: 7→72→H, 4→69→E, 11→76→L, 11→76→L, 14→79→O → HELLO. You can also use a free A0Z25 decoder tool to convert instantly.",
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
    { "@type": "ListItem", position: 3, name: "A0Z25 Cipher", item: PAGE_URL },
  ],
}

export default function A0Z25CipherPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="py-12">
        <article className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <p className="text-sm text-muted-foreground mb-3">By <strong className="text-foreground">John Reed</strong> · May 14, 2026</p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              What is the A0Z25 Cipher?
            </h1>
            <div className="mb-6">
              <ShareButton title="What is the A0Z25 Cipher?" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The A0Z25 Cipher is a zero-indexed letter-to-number encoding system where each letter of the alphabet maps to a value from 0 to 25 — A=0, B=1, all the way to Z=25. Unlike the traditional <Link href="/blog/a1z26-cipher-decoder-guide" className="text-primary hover:underline">A1Z26 cipher</Link>, the A0Z25 cipher starts counting from zero, making it the preferred choice for programmers, cryptographers, and anyone working with cipher algorithms that rely on modular arithmetic.
            </p>
          </div>

          <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
            <Image
              src="/images/blog/a0z25-cipher-hero.jpg"
              alt="A0Z25 cipher chart showing zero-indexed alphabet A=0 through Z=25"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/50 border border-border rounded-xl p-6 mb-10" aria-label="Table of contents">
            <h2 className="text-base font-semibold text-foreground mb-4">Table of Contents</h2>
            <ol className="space-y-2 text-sm">
              {[
                { href: "#what-is-a0z25", label: "What is the A0Z25 Cipher?" },
                { href: "#reference-chart", label: "Complete A0Z25 Reference Chart" },
                { href: "#a0z25-vs-a1z26", label: "A0Z25 vs A1Z26: Key Differences" },
                { href: "#zero-based-indexing", label: "Why Zero-Based Indexing?" },
                { href: "#practical-examples", label: "Practical Examples" },
                { href: "#real-world-uses", label: "Real-World Uses" },
                { href: "#how-to-decode", label: "How to Decode A0Z25" },
                { href: "#related-ciphers", label: "Related Ciphers & Tools" },
                { href: "#faq", label: "Frequently Asked Questions" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-primary hover:underline">{label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="prose prose-lg max-w-none">

            {/* Section 1 */}
            <h2 id="what-is-a0z25" className="text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              What is the A0Z25 Cipher?
            </h2>
            <p>
              The A0Z25 cipher is a simple substitution cipher that assigns each letter of the alphabet a number starting from zero. A equals 0, B equals 1, C equals 2, and so on until Z equals 25. This creates a direct mapping between the 26 letters and the numbers 0–25.
            </p>
            <p>
              Zero-based indexing aligns perfectly with how most programming languages handle arrays and strings. In Python, JavaScript, C, and Java, the first element of an array is always at index 0 — so A=0 feels natural in code. When you implement a Caesar cipher or Vigenère cipher in any of those languages, you are almost certainly working with A0Z25 arithmetic internally, even if you call it something else.
            </p>
            <p>
              The name "A0Z25" directly describes the mapping: A maps to 0, and Z maps to 25. You may also see this written as "zero-indexed alphabet encoding" or "0-indexed letter substitution." All refer to the same system.
            </p>
            <p>
              To encode or decode messages right now, use our free <Link href="/tools/a0z25-cipher-translator" className="text-primary hover:underline font-semibold">A0Z25 Cipher Translator</Link> or the <Link href="/tools/a0z25-decoder" className="text-primary hover:underline font-semibold">A0Z25 Decoder</Link>.
            </p>

            {/* Reference Chart */}
            <h2 id="reference-chart" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Complete A0Z25 Reference Chart
            </h2>
            <p>The complete A0Z25 mapping for all 26 letters:</p>

            <div className="not-prose my-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {Array.from({ length: 26 }, (_, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-3 text-center">
                    <span className="text-2xl font-bold text-primary">{String.fromCharCode(65 + i)}</span>
                    <span className="text-muted-foreground mx-2">=</span>
                    <span className="text-xl font-mono text-foreground">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              For a printable version, see our <Link href="/tools/a0z25-converter" className="text-primary hover:underline">A0Z25 Converter</Link>, which lets you download the full chart alongside your encoded output.
            </p>

            {/* A0Z25 vs A1Z26 */}
            <h2 id="a0z25-vs-a1z26" className="text-3xl font-bold text-foreground mt-12 mb-4 scroll-mt-20">
              A0Z25 vs A1Z26: Key Differences
            </h2>
            <p>
              Both ciphers convert letters to numbers, but the starting index changes everything for practical use:
            </p>

            <div className="not-prose my-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left font-semibold">Property</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">A0Z25</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">A1Z26</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["A equals", "0", "1"],
                    ["Z equals", "25", "26"],
                    ["Value range", "0–25", "1–26"],
                    ["Mod 26 arithmetic", "Works directly", "Requires –1 adjustment"],
                    ["Array index match", "Yes (all major languages)", "No"],
                    ["Common in puzzles", "CTF, cryptography tasks", "Escape rooms, casual ciphers"],
                    ["Caesar cipher formula", "shift = (A0Z25_value + n) mod 26", "Requires (A1Z26_value – 1 + n) mod 26"],
                  ].map(([prop, a0, a1]) => (
                    <tr key={prop} className="border-b border-border">
                      <td className="border border-border px-4 py-2 font-medium">{prop}</td>
                      <td className="border border-border px-4 py-2 font-mono">{a0}</td>
                      <td className="border border-border px-4 py-2 font-mono">{a1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>
              For general-purpose puzzle solving where people are just counting letters (A is the 1st letter, so A=1), <Link href="/blog/a1z26-cipher-decoder-guide" className="text-primary hover:underline">A1Z26</Link> is more intuitive. For anything involving code, algorithms, or cipher math, A0Z25 is the cleaner choice. Our <Link href="/tools/a1z26-decoder-and-encoder" className="text-primary hover:underline">A1Z26 Decoder and Encoder</Link> handles the one-based variant if you need to switch between them.
            </p>

            {/* Zero-based indexing */}
            <h2 id="zero-based-indexing" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Why Zero-Based Indexing?
            </h2>
            <p>
              Zero-based indexing is the standard in computer science for three concrete reasons:
            </p>
            <ul>
              <li><strong>Array access:</strong> The first element of an array is at index 0 in Python, JavaScript, C, and Java. <code className="bg-muted px-1 rounded text-sm">alphabet[0]</code> gives you A, not <code className="bg-muted px-1 rounded text-sm">alphabet[1]</code>.</li>
              <li><strong>Modular arithmetic:</strong> The Caesar cipher shift formula is <code className="bg-muted px-1 rounded text-sm">(value + shift) % 26</code>. With A0Z25 this works directly. With A1Z26 you need to subtract 1, apply the shift, take mod 26, then add 1 back — three extra steps every time.</li>
              <li><strong>Memory offsets:</strong> Contiguous memory blocks start at offset 0 from the base address. Zero-indexed encoding reflects how CPUs actually address data, which is why C strings are zero-indexed.</li>
            </ul>
            <p>
              The trade-off is that zero-based indexing is less intuitive to humans who count from 1. "A is the first letter, so A should be 1" is a natural assumption. This is exactly why <Link href="/blog/a1z26-cipher-decoder-guide" className="text-primary hover:underline">A1Z26</Link> remains more common in escape rooms and casual puzzles aimed at non-programmers.
            </p>

            {/* Practical Examples */}
            <h2 id="practical-examples" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Practical Examples
            </h2>
            <div className="not-prose my-8 space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: HELLO</p>
                <p className="font-mono text-lg text-foreground">H=7, E=4, L=11, L=11, O=14</p>
                <p className="text-primary font-semibold">Encoded: 7-4-11-11-14</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Word: CODE</p>
                <p className="font-mono text-lg text-foreground">C=2, O=14, D=3, E=4</p>
                <p className="text-primary font-semibold">Encoded: 2-14-3-4</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Caesar cipher: HELLO shifted by 3 (A0Z25)</p>
                <p className="font-mono text-sm text-foreground">(7+3)%26=10→K, (4+3)%26=7→H, (11+3)%26=14→O, (11+3)%26=14→O, (14+3)%26=17→R</p>
                <p className="text-primary font-semibold">Encrypted: KHOOR</p>
              </div>
            </div>
            <p>
              That third example is exactly how the <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar cipher decoder</Link> works internally — A0Z25 arithmetic with a mod 26 shift.
            </p>

            {/* Real-World Uses */}
            <h2 id="real-world-uses" className="text-3xl font-bold text-foreground mt-12 mb-4 scroll-mt-20">
              Real-World Uses
            </h2>
            <p>
              The A0Z25 cipher appears across several practical contexts, most of them technical:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">CTF (Capture The Flag) Competitions</h3>
            <p>
              CTF challenges frequently encode flags using A0Z25, sometimes layered with XOR or Caesar shifts. Because the encoding aligns with Python string indexing, participants can decode it in one line: <code className="bg-muted px-1 rounded text-sm">chr(n + 65)</code>. Recognizing A0Z25 quickly is a core skill for CTF players — if you see numbers 0–25 in a challenge, A0Z25 is the first thing to try. Our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">cipher identifier</Link> can help narrow down what encoding you're looking at.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Cryptography and Cipher Algorithms</h3>
            <p>
              The Caesar cipher, Vigenère cipher, Atbash cipher, and ROT13 all operate on A0Z25 arithmetic internally. When you apply a Caesar shift, you are computing <code className="bg-muted px-1 rounded text-sm">(letter_index + shift) mod 26</code> — that's A0Z25. Our <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash cipher decoder</Link> and <Link href="/blog/caesar-cipher-history" className="text-primary hover:underline">Caesar cipher</Link> tools both use this system under the hood.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Computer Science Education</h3>
            <p>
              University courses on algorithms and data structures use A0Z25 when teaching string manipulation. Converting a character to its zero-indexed position (<code className="bg-muted px-1 rounded text-sm">ord(c) - ord('A')</code> in Python) is a standard exercise that appears in virtually every intro CS curriculum.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Escape Rooms and Puzzle Games</h3>
            <p>
              Puzzle designers targeting technical audiences use A0Z25 to add difficulty — casual solvers expect A=1, so seeing A=0 adds a layer of misdirection. Geocaching puzzles with coordinate ciphers also use A0Z25, especially when coordinates must fit within a specific numerical range that the 1–26 mapping would violate. See our <Link href="/blog/escape-room-letter-codes" className="text-primary hover:underline">escape room letter codes guide</Link> for a full breakdown of which cipher a puzzle is likely using.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Skip Cipher Variants</h3>
            <p>
              The <Link href="/blog/skip-cipher" className="text-primary hover:underline">skip cipher</Link> and other transposition-based systems sometimes use A0Z25 as their base encoding before applying the skip pattern. If you're decoding a skip cipher and the numbers don't map cleanly to A1Z26, switching to A0Z25 is the next thing to try.
            </p>

            {/* How to Decode */}
            <h2 id="how-to-decode" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              How to Decode A0Z25
            </h2>
            <p>
              Decoding reverses the encoding. Add 65 to each number and convert the result from its ASCII decimal value to a letter. ASCII decimal 65 = A, 66 = B, and so on.
            </p>
            <p>
              Example: decode <strong>7-4-11-11-14</strong>
            </p>
            <ul>
              <li>7 + 65 = 72 → H</li>
              <li>4 + 65 = 69 → E</li>
              <li>11 + 65 = 76 → L</li>
              <li>11 + 65 = 76 → L</li>
              <li>14 + 65 = 79 → O</li>
            </ul>
            <p>Result: <strong>HELLO</strong></p>
            <p>
              In Python: <code className="bg-muted px-1 rounded text-sm">''.join(chr(n + 65) for n in [7, 4, 11, 11, 14])</code> returns <code className="bg-muted px-1 rounded text-sm">'HELLO'</code>.
            </p>
            <p>
              Use our <Link href="/tools/a0z25-decoder" className="text-primary hover:underline font-semibold">free A0Z25 decoder</Link> to paste any sequence of numbers and get the decoded text instantly — no code required.
            </p>

            {/* Related Ciphers & Tools */}
            <h2 id="related-ciphers" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Related Ciphers &amp; Tools
            </h2>
            <p>If you work with A0Z25, these related systems and tools are worth knowing:</p>

            <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  label: "A1Z26 Decoder & Encoder",
                  href: "/tools/a1z26-decoder-and-encoder",
                  desc: "One-based alphabet encoding (A=1 through Z=26)",
                },
                {
                  label: "Caesar Cipher Decoder",
                  href: "/tools/caesar-cipher-decoder",
                  desc: "Apply any shift value using A0Z25 arithmetic",
                },
                {
                  label: "Atbash Cipher Decoder",
                  href: "/tools/atbash-cipher-decoder",
                  desc: "Mirror encoding (A↔Z) — uses A0Z25 internally",
                },
                {
                  label: "ROT13 Decoder",
                  href: "/tools/rot13-decoder",
                  desc: "Caesar shift of 13 — works identically in A0Z25",
                },
                {
                  label: "Cipher Identifier",
                  href: "/tools/cipher-identifier",
                  desc: "Not sure which cipher you have? This narrows it down",
                },
                {
                  label: "Skip Cipher Decoder",
                  href: "/tools/skip-cipher-decoder",
                  desc: "Transposition cipher that often pairs with A0Z25",
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

            <p>Further reading on related ciphers:</p>
            <ul>
              <li><Link href="/blog/a1z26-cipher-decoder-guide" className="text-primary hover:underline">A1Z26 Cipher Decoder Guide</Link> — the one-based counterpart explained in full</li>
              <li><Link href="/blog/a1z26-cipher-examples" className="text-primary hover:underline">A1Z26 Cipher Examples</Link> — worked examples for escape rooms and puzzles</li>
              <li><Link href="/blog/caesar-cipher-history" className="text-primary hover:underline">Caesar Cipher History</Link> — origin and mechanics of the shift cipher built on A0Z25</li>
              <li><Link href="/blog/skip-cipher" className="text-primary hover:underline">Skip Cipher</Link> — transposition cipher often used alongside A0Z25</li>
              <li><Link href="/blog/best-letter-number-ciphers" className="text-primary hover:underline">Best Letter Number Ciphers</Link> — comparison of A0Z25, A1Z26, ASCII, and Hex</li>
              <li><Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline">Vigenère Cipher Decoder</Link> — polyalphabetic cipher that extends A0Z25 with a keyword</li>
            </ul>

            {/* CTA */}
            <div className="mt-12 p-6 bg-card border border-border rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-2">Encode or Decode A0Z25 Now</h3>
              <p className="text-muted-foreground mb-4">
                Paste any text or number sequence into our free converter. Select "Zero-based (A0Z25)" and get instant results.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/tools/a0z25-cipher-translator"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  A0Z25 Cipher Translator
                </Link>
                <Link
                  href="/tools/a0z25-decoder"
                  className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  A0Z25 Decoder
                </Link>
              </div>
            </div>

            {/* FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-foreground mt-12 mb-6 scroll-mt-20">
              Frequently Asked Questions
            </h2>
            <div className="not-prose space-y-5">
              {[
                {
                  q: "What is the A0Z25 cipher?",
                  a: "The A0Z25 cipher maps A=0, B=1, C=2 … Z=25. It uses zero-based indexing, matching how programming languages number array positions and string characters.",
                },
                {
                  q: "What is the difference between A0Z25 and A1Z26?",
                  a: "A1Z26 maps A=1 through Z=26. A0Z25 maps A=0 through Z=25. A0Z25 aligns with zero-based array indexing in Python, JavaScript, C, and Java, making cipher math (mod 26) work without extra steps.",
                },
                {
                  q: "Where is A0Z25 used in the real world?",
                  a: "A0Z25 is used in computer science education, CTF competitions, escape room puzzles, geocaching, and as the internal arithmetic basis for cipher algorithms like Caesar and Vigenère.",
                },
                {
                  q: "How do you decode an A0Z25 message?",
                  a: "Add 65 to each number and convert to an ASCII character. Example: 7→72→H, 4→69→E, 11→76→L, 11→76→L, 14→79→O → HELLO. In Python: chr(n + 65) for each number n.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

          </div>
        </article>
      </main>
    </div>
  )
}
