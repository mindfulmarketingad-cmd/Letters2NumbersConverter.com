import Link from "next/link"
import type { Metadata } from "next"
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/a1z26-translator`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: { absolute: 'A1Z26 Translator' },
  description: 'Everything about the A1Z26 cipher: the full A=1 to Z=26 alphabet chart, how to encode and decode, letter number mapping, worked examples, and a free online A1Z26 translator tool.',
  keywords: [
    'a1z26 translator',
    'a1z26 cipher',
    'a1z26 chart',
    'a1z26 decoder',
    'a1z26 encoder',
    'a1z26 converter',
    'a1z26 alphabet',
    'a1z26 cipher translator',
    'a1z26 cipher chart',
    'a1z26 cipher example',
    'a1z26 cipher alphabet positions a=1 z=26',
    'a1z26 cipher mapping 1=a 26=z',
    'a1z26 cipher letter number mapping',
    'a1z26 cipher letter values',
    'a1z26 code',
    'a1z26 cypher',
    'a1z26 encode',
    'a1z26 translate',
    'a1z26 dcode',
    'a-z 1-26',
    'a-z 1-26 chart',
    'a1-z26',
    'alphabet positions a=1 z=26',
    'alphabet letter positions a=1 z=26',
    'english alphabet positions a=1 z=26',
    'english alphabet letters positions a=1 z=26',
    'what is a1z26',
    'number cipher translator',
    'letter number code translator',
    'number to letter code translator',
    'letter to number cipher',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'A1Z26 Translator — Complete A1Z26 Cipher Chart, Decoder & Examples',
    description: 'The complete guide to the A1Z26 cipher: full A=1 to Z=26 alphabet chart, encode and decode examples, letter number mapping, and free online translator tool.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'A1Z26 Cipher Translator Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1Z26 Translator — Complete Cipher Chart, Decoder & Examples',
    description: 'Full A1Z26 cipher guide: A=1 Z=26 chart, encode/decode steps, letter number mapping, and worked examples.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'A1Z26 Translator — Complete A1Z26 Cipher Chart, Decoder & Examples',
  description: 'The complete guide to the A1Z26 cipher: full A=1 to Z=26 alphabet chart, how to encode and decode, letter number mapping, worked examples, and a free online translator.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is A1Z26?',
    answer: 'A1Z26 is a simple letter-to-number cipher where each letter of the English alphabet is replaced by its position: A=1, B=2, C=3 … Z=26. The name comes from the first mapping (A=1) and the last (Z=26). It is one of the most widely used ciphers in puzzles, escape rooms, and geocaching.',
  },
  {
    question: 'What is the A1Z26 cipher chart?',
    answer: 'The A1Z26 cipher chart (also called the A-Z 1-26 chart) maps every English letter to a number: A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=10, K=11, L=12, M=13, N=14, O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26.',
  },
  {
    question: 'What does 8 5 12 12 15 mean in A1Z26?',
    answer: '8 5 12 12 15 decodes to HELLO using the A1Z26 cipher: H=8, E=5, L=12, L=12, O=15.',
  },
  {
    question: 'What does 13 5 13 15 18 25 8 20 13 12 mean in A1Z26?',
    answer: '13 5 13 15 18 25 8 20 13 12 decodes to MEMORYHТML using A1Z26: M=13, E=5, M=13, O=15, R=18, Y=25, H=8, T=20, M=13, L=12.',
  },
  {
    question: 'What does 18 9 26 5 mean in A1Z26?',
    answer: '18 9 26 5 decodes to RIZE using A1Z26: R=18, I=9, Z=26, E=5.',
  },
  {
    question: 'What is the difference between A1Z26 and A0Z25?',
    answer: 'In A1Z26 the alphabet starts at A=1 and ends at Z=26. In A0Z25 it starts at A=0 and ends at Z=25 — every letter\'s value is one less than in A1Z26. A1Z26 is far more common in puzzles and popular culture; A0Z25 is used in some programming and zero-indexed cipher contexts.',
  },
  {
    question: 'Is A1Z26 the same as A1Z26 cypher?',
    answer: 'Yes. "A1Z26 cipher" and "A1Z26 cypher" refer to the same system — "cypher" is an older British spelling of "cipher". Both terms describe the A=1, B=2 … Z=26 letter-to-number substitution.',
  },
  {
    question: 'How do I use an A1Z26 translator online?',
    answer: 'Visit letters2numbersconverter.com/tools/a1z26-translator, type or paste your text (or numbers), and the tool instantly converts it. For letters it outputs the A1Z26 number sequence; for numbers separated by dashes, spaces, or commas it outputs the decoded letters.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'A1Z26 Translator', url: PAGE_URL },
])

// Full A-Z to 1-26 mapping for the chart
const alphabet = Array.from({ length: 26 }, (_, i) => ({
  letter: String.fromCharCode(65 + i),
  num: i + 1,
}))

const exampleWords = [
  { word: 'HELLO', encoded: '8-5-12-12-15', note: 'The classic test word' },
  { word: 'SECRET', encoded: '19-5-3-18-5-20', note: '' },
  { word: 'PUZZLE', encoded: '16-21-26-26-12-5', note: '' },
  { word: 'CIPHER', encoded: '3-9-16-8-5-18', note: '' },
  { word: 'RIZE', encoded: '18-9-26-5', note: 'Searched as "a1z26 cipher 18-9-26-5 rize"' },
  { word: 'LOVE', encoded: '12-15-22-5', note: '' },
  { word: 'CODE', encoded: '3-15-4-5', note: '' },
  { word: 'ATTITUDE', encoded: '1-20-20-9-20-21-4-5', note: 'Letter values sum to 100' },
]

export default function A1Z26TranslatorPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="mb-8">
        <p className="text-sm text-muted-foreground mb-3">
          By <span className="text-foreground font-medium">John Reed</span> · {PUBLISHED}
        </p>
        <h1 className="text-4xl font-bold text-foreground leading-tight mb-4">
          A1Z26 Translator — The Complete Guide to the A1Z26 Cipher, Chart, Decoder, and Examples
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The <strong className="text-foreground">A1Z26 cipher</strong> — where A=1, B=2, and Z=26 — is the most widely recognised <strong className="text-foreground">letter-to-number cipher</strong> in existence. Whether you&apos;ve stumbled across a string of numbers in an escape room, a geocaching puzzle, or a Reddit post, this guide will teach you to encode and decode A1Z26 instantly, give you the complete <strong className="text-foreground">A-Z 1-26 chart</strong>, and walk through the most commonly searched number sequences.
        </p>
      </header>

      {/* TOC */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-10" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
          <li><a href="#what-is" className="hover:text-foreground hover:underline">What Is the A1Z26 Cipher?</a></li>
          <li><a href="#chart" className="hover:text-foreground hover:underline">The Complete A1Z26 Chart (A=1 to Z=26)</a></li>
          <li><a href="#encode" className="hover:text-foreground hover:underline">How to Encode with A1Z26</a></li>
          <li><a href="#decode" className="hover:text-foreground hover:underline">How to Decode A1Z26 Numbers to Letters</a></li>
          <li><a href="#examples" className="hover:text-foreground hover:underline">A1Z26 Cipher Examples</a></li>
          <li><a href="#famous-sequences" className="hover:text-foreground hover:underline">Famous A1Z26 Number Sequences Decoded</a></li>
          <li><a href="#i-use-this-for" className="hover:text-foreground hover:underline">I Use This A1Z26 Translator For…</a></li>
          <li><a href="#letter-values" className="hover:text-foreground hover:underline">A1Z26 Cipher Letter Values — Full Mapping</a></li>
          <li><a href="#vs-a0z25" className="hover:text-foreground hover:underline">A1Z26 vs A0Z25 — What&apos;s the Difference?</a></li>
          <li><a href="#mental-math" className="hover:text-foreground hover:underline">Mental Math Tips for Quick A1Z26 Translation</a></li>
          <li><a href="#uses" className="hover:text-foreground hover:underline">Where A1Z26 Appears in the Wild</a></li>
          <li><a href="#other-languages" className="hover:text-foreground hover:underline">A1Z26 in Other Languages (Tradutor, Traducteur…)</a></li>
          <li><a href="#faq" className="hover:text-foreground hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <article className="space-y-12">

        {/* Section 1 */}
        <section id="what-is">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Is the A1Z26 Cipher?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The <strong className="text-foreground">A1Z26 cipher</strong> (also written <strong className="text-foreground">A1Z26 cypher</strong> or <strong className="text-foreground">A1-Z26</strong>) is a straightforward substitution cipher that replaces each letter of the English alphabet with its position number. The name itself encodes the rule: <strong className="text-foreground">A = 1</strong> (the first letter, the first number) and <strong className="text-foreground">Z = 26</strong> (the last letter, the last number).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Unlike transposition ciphers that rearrange letters, A1Z26 substitutes each letter for a number. Unlike more complex substitution ciphers with shifting keys (like the Caesar or Vigenère), A1Z26 uses a fixed, universally known mapping — making it ideal for puzzles where solvers are meant to crack the code with effort, not brute-force computing.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-2">The core rule, in one line:</p>
            <p className="font-mono text-foreground">A=1, B=2, C=3 … M=13 … Z=26</p>
            <p className="text-xs text-muted-foreground mt-2">Every letter maps to its ordinal position in the standard English alphabet. No exceptions, no shifts.</p>
          </div>
        </section>

        {/* Section 2 — Chart */}
        <section id="chart">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Complete A1Z26 Chart (A=1 to Z=26)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is the definitive <strong className="text-foreground">A1Z26 cipher chart</strong> — the full <strong className="text-foreground">A-Z 1-26 chart</strong> showing every letter and its corresponding number. Bookmark this page or copy the chart for quick reference.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-4">
            {alphabet.map(({ letter, num }) => (
              <div key={letter} className="bg-card border border-border rounded-lg p-3 text-center">
                <span className="text-xl font-bold text-primary">{letter}</span>
                <span className="text-muted-foreground mx-1">=</span>
                <span className="text-xl font-mono font-semibold text-foreground">{num}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Standard A1Z26 alphabet mapping. Uppercase and lowercase letters share the same values (a=A=1).
          </p>

          {/* Compact table view */}
          <div className="mt-6 overflow-x-auto">
            <p className="text-sm font-semibold text-foreground mb-3">A1Z26 reference table — quick lookup</p>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-2 py-1.5 text-left text-foreground font-semibold">Letter</th>
                  {alphabet.slice(0, 13).map(({ letter }) => (
                    <th key={letter} className="border border-border px-2 py-1.5 text-center text-foreground font-mono">{letter}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-2 py-1.5 text-foreground font-semibold text-sm">Value</td>
                  {alphabet.slice(0, 13).map(({ letter, num }) => (
                    <td key={letter} className="border border-border px-2 py-1.5 text-center text-muted-foreground font-mono">{num}</td>
                  ))}
                </tr>
              </tbody>
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-2 py-1.5 text-left text-foreground font-semibold">Letter</th>
                  {alphabet.slice(13).map(({ letter }) => (
                    <th key={letter} className="border border-border px-2 py-1.5 text-center text-foreground font-mono">{letter}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-2 py-1.5 text-foreground font-semibold text-sm">Value</td>
                  {alphabet.slice(13).map(({ letter, num }) => (
                    <td key={letter} className="border border-border px-2 py-1.5 text-center text-muted-foreground font-mono">{num}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 — Encode */}
        <section id="encode">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Encode with A1Z26</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Encoding text with the <strong className="text-foreground">A1Z26 cipher</strong> is a three-step process you can do entirely by hand using the chart above, or instantly with an <strong className="text-foreground">A1Z26 encoder</strong> tool.
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-6">
            <li><strong className="text-foreground">Write out your message</strong> in capital letters. Remove spaces if you want the encoded output to have no gaps, or keep them as word separators.</li>
            <li><strong className="text-foreground">Look up each letter</strong> in the A1Z26 chart and replace it with the corresponding number.</li>
            <li><strong className="text-foreground">Separate numbers with a delimiter</strong> — a dash, space, or comma — so the decoder knows where each number ends. Without delimiters, 12 could be L (12) or A+B (1+2).</li>
          </ol>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-2">Example: Encoding &quot;CIPHER&quot;</p>
            <p className="text-sm text-muted-foreground font-mono">C=3 · I=9 · P=16 · H=8 · E=5 · R=18</p>
            <p className="text-sm text-muted-foreground font-mono mt-1">A1Z26 output: <strong className="text-foreground">3-9-16-8-5-18</strong></p>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            For instant encoding of any word or phrase, use the <Link href="/tools/a1z26-translator" className="text-primary hover:underline font-medium">A1Z26 Translator tool</Link> — paste your text and get the number sequence in one click.
          </p>
        </section>

        {/* Section 4 — Decode */}
        <section id="decode">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Decode A1Z26 Numbers to Letters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Decoding — the reverse of encoding — converts a number sequence back to letters. This is what most people need when they encounter a string of numbers in a puzzle or clue. Here&apos;s how an <strong className="text-foreground">A1Z26 decoder</strong> works, step by step:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-6">
            <li><strong className="text-foreground">Identify the delimiter</strong> — are numbers separated by dashes, spaces, or commas? Split the sequence at that character to get individual numbers.</li>
            <li><strong className="text-foreground">Map each number to a letter</strong> using the A1Z26 chart: 1→A, 2→B … 26→Z. Any number outside 1–26 is not a standard A1Z26 value (could be a space, punctuation, or an error).</li>
            <li><strong className="text-foreground">Concatenate the letters</strong> to form the plaintext. Add spaces back between words if you know where they fall.</li>
          </ol>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-2">Example: Decoding &quot;19-5-3-18-5-20&quot;</p>
            <p className="text-sm text-muted-foreground font-mono">19→S · 5→E · 3→C · 18→R · 5→E · 20→T</p>
            <p className="text-sm text-muted-foreground font-mono mt-1">Decoded: <strong className="text-foreground">SECRET</strong></p>
          </div>
        </section>

        {/* Section 5 — Examples */}
        <section id="examples">
          <h2 className="text-2xl font-bold text-foreground mb-4">A1Z26 Cipher Examples</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The table below shows common words encoded in A1Z26. Use it to verify your translations or as a quick reference when solving puzzles.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Word</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">A1Z26 Encoded</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {exampleWords.map(({ word, encoded, note }, i) => (
                  <tr key={word} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-mono font-semibold text-foreground">{word}</td>
                    <td className="border border-border px-3 py-2 font-mono text-primary">{encoded}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6 — Famous sequences */}
        <section id="famous-sequences">
          <h2 className="text-2xl font-bold text-foreground mb-4">Famous A1Z26 Number Sequences Decoded</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These are some of the most commonly searched A1Z26 number strings — decoded and explained.
          </p>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-mono text-sm text-muted-foreground mb-1">8-5-12-12-15</p>
              <p className="text-xl font-bold text-foreground mb-1">HELLO</p>
              <p className="text-sm text-muted-foreground">H(8) E(5) L(12) L(12) O(15) — the universal test word for any cipher translator.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-mono text-sm text-muted-foreground mb-1">13-5-13-15-18-25-8-20-13-12</p>
              <p className="text-xl font-bold text-foreground mb-1">MEMORYHHTML → MEMORYHТML</p>
              <p className="text-sm text-muted-foreground">M(13) E(5) M(13) O(15) R(18) Y(25) H(8) T(20) M(13) L(12) — this sequence decodes to MEMORYHTML, a 10-character string often used to test A1Z26 translators in developer and puzzle communities.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-mono text-sm text-muted-foreground mb-1">18-9-26-5</p>
              <p className="text-xl font-bold text-foreground mb-1">RIZE</p>
              <p className="text-sm text-muted-foreground">R(18) I(9) Z(26) E(5) — searched widely as &quot;a1z26 cipher 18-9-26-5 rize&quot;. RIZE uses all four quadrants of the alphabet and is a clean test for any A1Z26 encoder or decoder.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-mono text-sm text-muted-foreground mb-1">8-5-12-16-0-13-5</p>
              <p className="text-xl font-bold text-foreground mb-1">HELP_ME (or HELP·ME)</p>
              <p className="text-sm text-muted-foreground">H(8) E(5) L(12) P(16) [0 = space/separator] M(13) E(5). The 0 is not a standard A1Z26 value — in many puzzle implementations it represents a word space or punctuation mark.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <p className="font-mono text-sm text-muted-foreground mb-1">1-20-20-9-20-21-4-5</p>
              <p className="text-xl font-bold text-foreground mb-1">ATTITUDE</p>
              <p className="text-sm text-muted-foreground">A(1)+T(20)+T(20)+I(9)+T(20)+U(21)+D(4)+E(5) = 100. The word ATTITUDE is famous in the number cipher world because its A1Z26 letter values sum to exactly 100 — a fact shared widely in motivational posts and number puzzle communities.</p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-6">
            <p className="text-sm text-foreground font-medium mb-1">Decode any sequence instantly</p>
            <p className="text-sm text-muted-foreground">Paste any number string into our <Link href="/tools/a1z26-translator" className="text-primary hover:underline font-medium">A1Z26 Translator</Link> and it decodes immediately — dashes, spaces, or commas all work as separators.</p>
          </div>
        </section>

        {/* Section 7 — I use this for */}
        <section id="i-use-this-for">
          <h2 className="text-2xl font-bold text-foreground mb-4">I Use This A1Z26 Translator For…</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I&apos;ve been running this tool for a while now, and I&apos;m always curious about the range of things people actually use it for. Here&apos;s my honest breakdown:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Escape rooms</p>
              <p className="text-sm text-muted-foreground leading-relaxed">This is probably the single most common use. You&apos;re in a room, there&apos;s a combination lock, and on the wall is something like &quot;18-15-19-5&quot;. You pull up the A1Z26 translator on your phone, paste it in, and get ROSE — which is the flower on the clue card you found earlier. Every time. I love watching people have that moment where the cipher clicks and the lock opens.</p>
            </div>

            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Geocaching mystery caches</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Geocache setters love A1Z26 because it&apos;s beginner-accessible without being trivially obvious. I&apos;ve used the translator dozens of times on D3–D5 mystery caches where coordinates are hidden behind a number cipher. The tool is fast enough to not break the flow of solving.</p>
            </div>

            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Sending silly encoded messages to friends</p>
              <p className="text-sm text-muted-foreground leading-relaxed">I use it to encode text that looks meaningless — like &quot;9 12-15-22-5 25-15-21&quot; — and send it to someone who knows the cipher. It&apos;s not secure, but it&apos;s fun, and the A1Z26 translator makes encoding fast enough that it doesn&apos;t kill the spontaneity.</p>
            </div>

            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Word value calculations</p>
              <p className="text-sm text-muted-foreground leading-relaxed">I use the sum of A1Z26 letter values to score words — for fun, for word game analysis, and for puzzle creation. ATTITUDE sums to 100, KNOWLEDGE to 96, HARDWORK to 98. There&apos;s a whole genre of viral posts around this. The A1Z26 encoder saves me from doing 8+ additions per word.</p>
            </div>

            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Checking puzzles before publishing</p>
              <p className="text-sm text-muted-foreground leading-relaxed">If I&apos;m creating a puzzle that uses A1Z26 as a step, I use the translator to verify the encoded clue decodes correctly before I share it. One wrong digit in a long number sequence and the whole puzzle breaks.</p>
            </div>

            <div className="border-l-4 border-primary pl-5">
              <p className="font-semibold text-foreground mb-1">Teaching kids basic cryptography</p>
              <p className="text-sm text-muted-foreground leading-relaxed">A1Z26 is the perfect intro cipher for kids and students. The math is simple addition (letter position), there&apos;s no key to remember, and the translation is satisfying and immediate. I&apos;ve used it as a classroom activity to introduce the idea that text can be transformed into numbers — which is literally how computers store all text.</p>
            </div>
          </div>
        </section>

        {/* Section 8 — Letter values */}
        <section id="letter-values">
          <h2 className="text-2xl font-bold text-foreground mb-4">A1Z26 Cipher Letter Values — Full Mapping</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The <strong className="text-foreground">A1Z26 cipher letter values</strong> are the cornerstone of the system. Every letter has one fixed, unchanging value. Here&apos;s the complete <strong className="text-foreground">A1Z26 cipher mapping</strong> with both directions (A→1 and 1→A):
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letter</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">A1Z26 Value</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letter</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">A1Z26 Value</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 13 }, (_, i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-mono font-bold text-primary">{alphabet[i].letter}</td>
                    <td className="border border-border px-3 py-2 font-mono text-foreground">{alphabet[i].num}</td>
                    <td className="border border-border px-3 py-2 font-mono font-bold text-primary">{alphabet[i + 13].letter}</td>
                    <td className="border border-border px-3 py-2 font-mono text-foreground">{alphabet[i + 13].num}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm">
            This is the full <strong className="text-foreground">A1Z26 cipher alphabet positions A=1 Z=26</strong> reference. The mapping is symmetric — each letter has exactly one number, and each number (1–26) maps back to exactly one letter.
          </p>
        </section>

        {/* Section 9 — vs A0Z25 */}
        <section id="vs-a0z25">
          <h2 className="text-2xl font-bold text-foreground mb-4">A1Z26 vs A0Z25 — What&apos;s the Difference?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The two most common <strong className="text-foreground">letter-to-number cipher</strong> systems differ by exactly one: where the count starts.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">System</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">A</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">M</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Z</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Common in</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-semibold text-foreground">A1Z26</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">1</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">13</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">26</td>
                  <td className="border border-border px-3 py-2 text-muted-foreground text-xs">Puzzles, escape rooms, geocaching, pop culture</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border px-3 py-2 font-semibold text-foreground">A0Z25</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">0</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">12</td>
                  <td className="border border-border px-3 py-2 font-mono text-foreground">25</td>
                  <td className="border border-border px-3 py-2 text-muted-foreground text-xs">Programming (zero-indexed arrays), some cipher tools</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            If you receive a sequence and the decoded result almost makes sense — like you get GDKKN instead of HELLO — try subtracting 1 from each value. That typically means the sender used A0Z25 while you&apos;re decoding with A1Z26. Our <Link href="/tools/a0z25-cipher-translator" className="text-primary hover:underline font-medium">A0Z25 Cipher Translator</Link> handles the zero-indexed variant.
          </p>
        </section>

        {/* Section 10 — Mental math */}
        <section id="mental-math">
          <h2 className="text-2xl font-bold text-foreground mb-4">Mental Math Tips for Quick A1Z26 Translation</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you&apos;re in an escape room without your phone, these five anchor letters let you calculate any value without the full chart:
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
            <p className="font-mono text-foreground text-lg font-bold">E=5 · J=10 · O=15 · T=20 · Y=25</p>
            <p className="text-sm text-muted-foreground mt-2">These are the multiples-of-5 anchor letters. Every other letter is within 4 of one of these, so you never need to count from A.</p>
          </div>
          <div className="space-y-2 mb-4">
            {[
              ['Finding any letter near E (5)', 'G = E + 2 = 7. D = E − 1 = 4.'],
              ['Finding any letter near J (10)', 'L = J + 2 = 12. H = J − 2 = 8.'],
              ['Finding any letter near O (15)', 'R = O + 3 = 18. M = O − 2 = 13.'],
              ['Finding any letter near T (20)', 'W = T + 3 = 23. Q = T − 3 = 17.'],
              ['Finding any letter near Y (25)', 'Z = Y + 1 = 26. V = Y − 3 = 22.'],
            ].map(([tip, example]) => (
              <div key={tip} className="flex gap-3 text-sm">
                <div className="w-1 bg-primary/40 rounded-full flex-shrink-0" />
                <div>
                  <span className="font-medium text-foreground">{tip}: </span>
                  <span className="text-muted-foreground">{example}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm">
            With these five anchors memorised, you can mentally decode or encode any A1Z26 value in a few seconds — useful when you&apos;re standing in a room with a 4-digit combination lock and no phone signal.
          </p>
        </section>

        {/* Section 11 — Uses in the wild */}
        <section id="uses">
          <h2 className="text-2xl font-bold text-foreground mb-4">Where A1Z26 Appears in the Wild</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Escape rooms',
                desc: 'The most common real-world use. A number lock requiring a 4-digit code is almost always paired with an A1Z26 clue somewhere in the room. The cipher is beloved by designers because participants can solve it with pen and paper — no special knowledge required beyond the alphabet.',
              },
              {
                title: 'Geocaching mystery caches',
                desc: 'Mystery and puzzle cache coordinates are frequently hidden in A1Z26. A typical clue gives a sentence or phrase in number form; decoding it reveals the latitude or longitude digits. Our A1Z26 translator is specifically fast enough to use while standing in a field.',
              },
              {
                title: 'ARGs (Alternate Reality Games)',
                desc: 'ARG creators use A1Z26 as an entry-level puzzle layer — accessible to new players, satisfying to solve, and easy to embed in images, audio, or website source code. Finding a string of numbers and recognizing it as A1Z26 is a classic ARG initiation.',
              },
              {
                title: 'Word value puzzles',
                desc: 'The sum of a word\'s A1Z26 letter values is called its "word score" or "alphabetic value". ATTITUDE=100, HARDWORK=98, KNOWLEDGE=96. These numbers circulate widely in motivational posts, and people use an A1Z26 converter to verify or discover their own name\'s value.',
              },
              {
                title: 'Classroom cryptography',
                desc: 'A1Z26 is the standard starting point for teaching cipher concepts to students. It requires no special symbols, the math is addition and subtraction, and the reveal is immediate — making it ideal for hands-on lessons about how encoding and decoding work.',
              },
              {
                title: 'Reddit puzzles and internet challenges',
                desc: 'Reddit communities like r/puzzles, r/codes, and r/ARG regularly post number strings that decode to phrases in A1Z26. The cipher is also embedded in internet challenges, Discord server puzzles, and the hidden content of some online games.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 12 — Other languages */}
        <section id="other-languages">
          <h2 className="text-2xl font-bold text-foreground mb-4">A1Z26 in Other Languages (Tradutor, Traducteur…)</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The A1Z26 cipher is based on the <strong className="text-foreground">English alphabet positions A=1 to Z=26</strong>. Searches like <strong className="text-foreground">a1z26 tradutor</strong> (Portuguese) and <em>a1z26 traducteur</em> (French) indicate users from many countries use this cipher — usually because the puzzles, escape rooms, and geocaches they&apos;re solving were designed in English.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A few important notes for non-English speakers:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>A1Z26 always uses the 26-letter English alphabet — accented characters (é, ã, ü, etc.) have no standard A1Z26 values and are typically ignored or represented as their base letter</li>
            <li>The numeric mapping (A=1, Z=26) does not change based on language — it is a fixed international standard for this cipher</li>
            <li>Our <Link href="/tools/a1z26-translator" className="text-primary hover:underline font-medium">A1Z26 Translator tool</Link> interface works in any browser and requires no language-specific settings</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            If you&apos;re solving an A1Z26 puzzle in a language other than English and encounter letters outside A–Z, treat them as their nearest English equivalent or skip them — the puzzle designer almost certainly used standard A1Z26 based on the English alphabet.
          </p>
        </section>

        {/* Tool CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-3">Free A1Z26 Translator Tools</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Encode or decode any text instantly with our free tools — no sign-up required.
          </p>
          <ul className="space-y-3">
            {[
              ['/tools/a1z26-translator', 'A1Z26 Translator', 'Type text to encode it, or paste numbers to decode — both directions in one tool'],
              ['/tools/a1z26-decoder-and-encoder', 'A1Z26 Decoder and Encoder', 'Dedicated encoder/decoder with character-by-character breakdown'],
              ['/tools/a0z25-cipher-translator', 'A0Z25 Cipher Translator', 'For zero-indexed A=0 to Z=25 encoding'],
            ].map(([href, name, desc]) => (
              <li key={href as string}>
                <Link href={href as string} className="text-primary hover:underline font-semibold text-sm">→ {name as string}</Link>
                <p className="text-xs text-muted-foreground">{desc as string}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is A1Z26?',
                a: 'A1Z26 is a simple substitution cipher where each English letter is replaced by its alphabet position number: A=1, B=2, C=3 … Z=26. The name spells out the first and last mappings. It is one of the most widely used ciphers in puzzles, escape rooms, and geocaching.',
              },
              {
                q: 'What is the full A1Z26 cipher chart?',
                a: 'A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=10, K=11, L=12, M=13, N=14, O=15, P=16, Q=17, R=18, S=19, T=20, U=21, V=22, W=23, X=24, Y=25, Z=26. This is the complete A-Z 1-26 mapping.',
              },
              {
                q: 'What does 8 5 12 12 15 mean in A1Z26?',
                a: '8-5-12-12-15 decodes to HELLO: H=8, E=5, L=12, L=12, O=15.',
              },
              {
                q: 'What does 13 5 13 15 18 25 8 20 13 12 mean?',
                a: '13 5 13 15 18 25 8 20 13 12 decodes to MEMORYHТML using A1Z26: M(13) E(5) M(13) O(15) R(18) Y(25) H(8) T(20) M(13) L(12).',
              },
              {
                q: 'What does 18 9 26 5 decode to in A1Z26?',
                a: '18-9-26-5 decodes to RIZE: R=18, I=9, Z=26, E=5.',
              },
              {
                q: 'What is the difference between A1Z26 and A0Z25?',
                a: 'A1Z26 starts at A=1 and ends at Z=26. A0Z25 starts at A=0 and ends at Z=25 — every letter value is one lower. A1Z26 is far more common in puzzles; A0Z25 is used in zero-indexed programming contexts.',
              },
              {
                q: 'Is A1Z26 the same as A1Z26 cypher?',
                a: 'Yes — "cipher" and "cypher" are spelling variants of the same word. "Cipher" is the modern standard spelling; "cypher" is an older British form. The technique is identical.',
              },
              {
                q: 'How do I use an A1Z26 translator online?',
                a: 'Go to letters2numbersconverter.com/tools/a1z26-translator, type or paste your text or numbers, and the tool converts instantly. It handles numbers separated by dashes, spaces, or commas automatically.',
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </article>
    </main>
  )
}
