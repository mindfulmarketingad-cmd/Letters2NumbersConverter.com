import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-do-you-decode-numbers-to-letters`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How Do You Decode Numbers To Letters — Complete Guide',
  description:
    'Learn how to decode numbers to letters using A1Z26, A0Z25, ASCII, and phone keypad systems. Step-by-step examples, reference tables, and free online decoder tools.',
  keywords: [
    'how do you decode numbers to letters',
    'decode numbers to letters',
    'numbers to letters decoder',
    'A1Z26 decoder',
    'number letter cipher',
    'decode number code',
    'number substitution cipher',
    'ASCII decoder',
    'phone keypad cipher',
    'number to letter converter',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How Do You Decode Numbers To Letters — Complete Guide',
    description:
      'Learn how to decode numbers to letters using A1Z26, A0Z25, ASCII, and phone keypad systems. Step-by-step examples and free tools included.',
    type: 'article',
    url: PAGE_URL,
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Do You Decode Numbers To Letters — Complete Guide',
    description:
      'Step-by-step guide to decoding numbers to letters: A1Z26, A0Z25, ASCII, phone keypad, and more. Includes reference tables and free tools.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const faqItems = [
  {
    question: 'What is the most common way to decode numbers to letters?',
    answer:
      'The most common system is A1Z26, where A=1, B=2, C=3 … Z=26. When a puzzle or cipher simply says "numbers to letters" without specifying a system, A1Z26 is almost always the intended method. You can use our A1Z26 Decoder and Encoder at letters2numbersconverter.com to decode messages instantly.',
  },
  {
    question: 'What does "8 5 12 12 15" decode to?',
    answer:
      'Using the A1Z26 system, "8 5 12 12 15" decodes to HELLO. Each number maps to its position in the alphabet: 8=H, 5=E, 12=L, 12=L, 15=O.',
  },
  {
    question: 'How do I know which decoding system was used?',
    answer:
      'Check the range of numbers in the message. If all numbers are between 1 and 26, it is likely A1Z26. If numbers fall between 65 and 122, it is almost certainly ASCII. If numbers exceed 26 with no clear pattern, it may be a custom cipher or ASCII. Phone keypad ciphers use numbers 2–9 with position indicators.',
  },
  {
    question: 'What is the difference between A1Z26 and A0Z25?',
    answer:
      'In A1Z26 (the standard system), A=1 and Z=26. In A0Z25 (used in programming and computer science), A=0 and Z=25. To convert between them, subtract 1 from each A1Z26 value to get the A0Z25 equivalent. For example, the letter H is 8 in A1Z26 and 7 in A0Z25.',
  },
  {
    question: 'Can I decode numbers to letters automatically?',
    answer:
      'Yes. Our free Numbers to Letters converter at letters2numbersconverter.com handles A1Z26, A0Z25, and other common systems automatically. For ASCII specifically, use our ASCII Decoder tool. Simply paste your numbers and the tool outputs the decoded text instantly.',
  },
]

const breadcrumbItems = [
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'How Do You Decode Numbers To Letters', url: PAGE_URL },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'Article'],
  '@id': `${PAGE_URL}#article`,
  headline: 'How Do You Decode Numbers To Letters — Complete Guide',
  description:
    'Learn how to decode numbers to letters using A1Z26, A0Z25, ASCII, and phone keypad systems. Step-by-step examples, reference tables, and free online decoder tools.',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    '@type': 'Person',
    name: 'Neo',
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${BASE_URL}#organization`,
    name: 'Letters to Numbers Converter',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': PAGE_URL,
  },
  url: PAGE_URL,
  inLanguage: 'en-US',
  isPartOf: {
    '@id': `${BASE_URL}#website`,
  },
}

const a1z26 = [
  { n: 1, l: 'A' }, { n: 2, l: 'B' }, { n: 3, l: 'C' }, { n: 4, l: 'D' },
  { n: 5, l: 'E' }, { n: 6, l: 'F' }, { n: 7, l: 'G' }, { n: 8, l: 'H' },
  { n: 9, l: 'I' }, { n: 10, l: 'J' }, { n: 11, l: 'K' }, { n: 12, l: 'L' },
  { n: 13, l: 'M' }, { n: 14, l: 'N' }, { n: 15, l: 'O' }, { n: 16, l: 'P' },
  { n: 17, l: 'Q' }, { n: 18, l: 'R' }, { n: 19, l: 'S' }, { n: 20, l: 'T' },
  { n: 21, l: 'U' }, { n: 22, l: 'V' }, { n: 23, l: 'W' }, { n: 24, l: 'X' },
  { n: 25, l: 'Y' }, { n: 26, l: 'Z' },
]

export default function Page() {
  return (
    <main className="flex-1 w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)) }}
      />

      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li className="select-none">/</li>
              <li className="text-foreground font-medium">How Do You Decode Numbers To Letters</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            How Do You Decode Numbers To Letters
          </h1>

          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">
              By Neo | <time dateTime={PUBLISHED}>May 14, 2026</time>
            </p>
          </div>

          {/* Intro */}
          <p className="text-lg text-muted-foreground mb-6">
            How Do You Decode Numbers To Letters depends on which encoding system was used to create the message in the first place. The same sequence of numbers can produce completely different letters depending on whether the encoder used A1Z26, A0Z25, ASCII, or a phone keypad cipher. This guide walks through each system with clear examples, a full reference table, and tips for identifying which system was used — so you can decode any number-to-letter message quickly and accurately.
          </p>

          <p className="text-base text-muted-foreground mb-6">
            For most everyday puzzles, you can skip straight to <Link href="/tools/letter-number-converter" className="text-primary hover:underline">use our free Letters to Numbers Converter</Link> and decode in seconds. But if you want to understand the mechanics behind each system, read on.
          </p>

          {/* Section 1 */}
                    <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#the-most-common-system-a1z26-a1-b2-z26" className="text-primary hover:underline">The Most Common System: A1Z26 (A=1, B=2 … Z=26)</a></li>
            <li><a href="#step-by-step-decoding-example" className="text-primary hover:underline">Step-by-Step Decoding Example</a></li>
            <li><a href="#decode-a-more-complex-message" className="text-primary hover:underline">Decode a More Complex Message</a></li>
            <li><a href="#the-a0z25-system-a0-b1-z25" className="text-primary hover:underline">The A0Z25 System (A=0, B=1 … Z=25)</a></li>
            <li><a href="#ascii-number-codes" className="text-primary hover:underline">ASCII Number Codes</a></li>
            <li><a href="#phone-keypad-encoding" className="text-primary hover:underline">Phone Keypad Encoding</a></li>
            <li><a href="#how-to-tell-which-system-was-used" className="text-primary hover:underline">How to Tell Which System Was Used</a></li>
            <li><a href="#comparison-of-the-four-main-systems" className="text-primary hover:underline">Comparison of the Four Main Systems</a></li>
            <li><a href="#full-a1z26-reference-table-126" className="text-primary hover:underline">Full A1Z26 Reference Table (1–26)</a></li>
            <li><a href="#common-uses-for-number-to-letter-decoding" className="text-primary hover:underline">Common Uses for Number-to-Letter Decoding</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

<h2 id="the-most-common-system-a1z26-a1-b2-z26" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            The Most Common System: A1Z26 (A=1, B=2 … Z=26)
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            The A1Z26 cipher is the default number-to-letter system. When a puzzle, escape room, or geocaching cache says "decode the numbers" without any further instructions, A1Z26 is almost certainly what they mean. The rule is simple: each letter of the alphabet corresponds to its position number.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The full mapping is:
          </p>
          <p className="text-base text-muted-foreground mb-4 font-mono">
            1=A, 2=B, 3=C, 4=D, 5=E, 6=F, 7=G, 8=H, 9=I, 10=J, 11=K, 12=L, 13=M,
            14=N, 15=O, 16=P, 17=Q, 18=R, 19=S, 20=T, 21=U, 22=V, 23=W, 24=X, 25=Y, 26=Z
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Numbers are typically separated by spaces, hyphens, or commas. A forward slash or double-space usually marks a word boundary. Our{' '}
            <Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 Translator</Link>{' '}
            handles this automatically — just paste in your numbers and get the decoded text instantly.
          </p>

          {/* Section 2 */}
          <h2 id="step-by-step-decoding-example" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Step-by-Step Decoding Example
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Let's decode the message <span className="font-mono text-foreground font-bold">8 5 12 12 15</span> using A1Z26, one number at a time:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Number</th>
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Position in Alphabet</th>
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Letter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: '8', pos: '8th letter', letter: 'H' },
                  { num: '5', pos: '5th letter', letter: 'E' },
                  { num: '12', pos: '12th letter', letter: 'L' },
                  { num: '12', pos: '12th letter', letter: 'L' },
                  { num: '15', pos: '15th letter', letter: 'O' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-2 px-4 font-mono text-foreground font-bold">{row.num}</td>
                    <td className="py-2 px-4 text-muted-foreground">{row.pos}</td>
                    <td className="py-2 px-4 font-mono text-green-500 font-bold">{row.letter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-base text-muted-foreground mb-4">
            Result:{' '}
            <span className="font-mono text-foreground font-bold">8</span>→<span className="font-mono text-green-500">H</span>{' '}
            <span className="font-mono text-foreground font-bold">5</span>→<span className="font-mono text-green-500">E</span>{' '}
            <span className="font-mono text-foreground font-bold">12</span>→<span className="font-mono text-green-500">L</span>{' '}
            <span className="font-mono text-foreground font-bold">12</span>→<span className="font-mono text-green-500">L</span>{' '}
            <span className="font-mono text-foreground font-bold">15</span>→<span className="font-mono text-green-500">O</span>{' '}
            = <span className="font-mono text-green-500 font-bold">HELLO</span>
          </p>

          {/* Section 3 */}
          <h2 id="decode-a-more-complex-message" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Decode a More Complex Message
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Multi-word messages use a separator — often a forward slash or double space — to mark word boundaries. Let's decode:
          </p>
          <p className="text-base text-muted-foreground mb-4 font-mono text-foreground">
            20 8 5 / 1 14 19 23 5 18 / 9 19 / 6 15 18 20 25 20 23 15
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Breaking it into words at the <span className="font-mono text-foreground font-bold">/</span> separators:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li>
              <span className="font-mono text-foreground font-bold">20 8 5</span> →{' '}
              <span className="font-mono text-green-500">T H E</span> = <span className="font-mono text-green-500 font-bold">THE</span>
            </li>
            <li>
              <span className="font-mono text-foreground font-bold">1 14 19 23 5 18</span> →{' '}
              <span className="font-mono text-green-500">A N S W E R</span> = <span className="font-mono text-green-500 font-bold">ANSWER</span>
            </li>
            <li>
              <span className="font-mono text-foreground font-bold">9 19</span> →{' '}
              <span className="font-mono text-green-500">I S</span> = <span className="font-mono text-green-500 font-bold">IS</span>
            </li>
            <li>
              <span className="font-mono text-foreground font-bold">6 15 18 20 25 20 23 15</span> →{' '}
              <span className="font-mono text-green-500">F O R T Y T W O</span> = <span className="font-mono text-green-500 font-bold">FORTYTWO</span>
            </li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            Full decoded message: <span className="font-mono text-green-500 font-bold">THE ANSWER IS FORTYTWO</span>
          </p>
          <p className="text-base text-muted-foreground mb-4">
            For longer messages like this, our{' '}
            <Link href="/tools/a1z26-decoder-and-encoder" className="text-primary hover:underline">A1Z26 Decoder and Encoder</Link>{' '}
            handles multi-word messages with automatic word-boundary detection.
          </p>

          {/* Section 4 */}
          <h2 id="the-a0z25-system-a0-b1-z25" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            The A0Z25 System (A=0, B=1 … Z=25)
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            The A0Z25 system is the zero-indexed version of A1Z26, commonly encountered in programming, computer science coursework, and technical CTF challenges. In this system, A=0, B=1, C=2 … Z=25.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The decoding process is identical to A1Z26, except you add 1 to each number before looking up the letter in the standard A1Z26 table. So the number <span className="font-mono text-foreground font-bold">7</span> in A0Z25 corresponds to the 8th letter of the alphabet, which is <span className="font-mono text-green-500">H</span>.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Example — decode <span className="font-mono text-foreground font-bold">7 4 11 11 14</span> in A0Z25:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1">
            <li><span className="font-mono text-foreground font-bold">7</span> + 1 = 8 → <span className="font-mono text-green-500">H</span></li>
            <li><span className="font-mono text-foreground font-bold">4</span> + 1 = 5 → <span className="font-mono text-green-500">E</span></li>
            <li><span className="font-mono text-foreground font-bold">11</span> + 1 = 12 → <span className="font-mono text-green-500">L</span></li>
            <li><span className="font-mono text-foreground font-bold">11</span> + 1 = 12 → <span className="font-mono text-green-500">L</span></li>
            <li><span className="font-mono text-foreground font-bold">14</span> + 1 = 15 → <span className="font-mono text-green-500">O</span></li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            Result: <span className="font-mono text-green-500 font-bold">HELLO</span> — same word, but the input numbers are each one lower than in A1Z26. If the numbers in a message seem to be one off from what you expect, switching between A1Z26 and A0Z25 is the first thing to try.
          </p>

          {/* Section 5 */}
          <h2 id="ascii-number-codes" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            ASCII Number Codes
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            ASCII (American Standard Code for Information Interchange) is a completely different number-to-letter system used widely in technology and programming contexts. Instead of mapping A=1, ASCII assigns each character a unique 3-digit decimal code based on its position in the ASCII table:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1">
            <li>Uppercase letters: A=65, B=66, C=67 … Z=90</li>
            <li>Lowercase letters: a=97, b=98, c=99 … z=122</li>
            <li>Space character: 32</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            If you see numbers in the range 65–90 or 97–122 in a coded message, ASCII is almost certainly the system in use. For example, <span className="font-mono text-foreground font-bold">72 69 76 76 79</span> decodes to <span className="font-mono text-green-500 font-bold">HELLO</span> in ASCII.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            ASCII is commonly used in CTF (Capture the Flag) competitions, programming exercises, and technical puzzles. For ASCII codes,{' '}
            <Link href="/tools/ascii-decoder" className="text-primary hover:underline">use our ASCII Decoder</Link>{' '}
            to convert any ASCII number sequence to readable text instantly.
          </p>

          {/* Section 6 */}
          <h2 id="phone-keypad-encoding" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Phone Keypad Encoding
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Phone keypad encoding maps numbers to the letters printed on each key of a standard telephone keypad. It is common in phone-based puzzles, old-school text messaging ciphers, and certain escape room designs:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1">
            <li><span className="font-mono text-foreground font-bold">2</span> = A, B, C</li>
            <li><span className="font-mono text-foreground font-bold">3</span> = D, E, F</li>
            <li><span className="font-mono text-foreground font-bold">4</span> = G, H, I</li>
            <li><span className="font-mono text-foreground font-bold">5</span> = J, K, L</li>
            <li><span className="font-mono text-foreground font-bold">6</span> = M, N, O</li>
            <li><span className="font-mono text-foreground font-bold">7</span> = P, Q, R, S</li>
            <li><span className="font-mono text-foreground font-bold">8</span> = T, U, V</li>
            <li><span className="font-mono text-foreground font-bold">9</span> = W, X, Y, Z</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            Because each key maps to multiple letters, phone keypad ciphers typically include a secondary indicator (such as a position number or repeated digit) to specify which letter on that key is intended. For example, <span className="font-mono text-foreground font-bold">4-2</span> might mean the 2nd letter on the 4 key, which is H.
          </p>

          {/* Section 7 */}
          <h2 id="how-to-tell-which-system-was-used" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            How to Tell Which System Was Used
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            When you encounter an unknown number-to-letter cipher, these clues help you identify the system:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><strong>All numbers are between 1 and 26</strong> — almost certainly A1Z26. Try it first.</li>
            <li><strong>All numbers are between 0 and 25</strong> — likely A0Z25, common in programming contexts.</li>
            <li><strong>Numbers fall in the range 65–90 or 97–122</strong> — almost certainly ASCII decimal codes.</li>
            <li><strong>Numbers are only 2–9 with a secondary position indicator</strong> — phone keypad encoding.</li>
            <li><strong>Numbers exceed 26 with no clear ASCII pattern</strong> — could be a custom cipher, a shifted alphabet, or a combined encoding. If the numbers seem shifted, try the{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>{' '}
              to test various shift values.</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            When in doubt, start with A1Z26 — it is by far the most common system in casual puzzles, games, and educational contexts.
          </p>

          {/* Section 8: Comparison Table */}
          <h2 id="comparison-of-the-four-main-systems" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Comparison of the Four Main Systems
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-3 px-4 text-foreground font-semibold">System</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Number Range</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Example (HELLO)</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Used For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    sys: 'A1Z26',
                    range: '1–26',
                    example: '8 5 12 12 15',
                    use: 'Puzzles, escape rooms, geocaching, kids\' ciphers',
                  },
                  {
                    sys: 'A0Z25',
                    range: '0–25',
                    example: '7 4 11 11 14',
                    use: 'Programming, computer science, technical CTFs',
                  },
                  {
                    sys: 'ASCII',
                    range: '65–90 (upper), 97–122 (lower)',
                    example: '72 69 76 76 79',
                    use: 'Tech puzzles, programming, CTF competitions',
                  },
                  {
                    sys: 'Phone Keypad',
                    range: '2–9 (with position)',
                    example: '4-2 3-2 5-3 5-3 6-3',
                    use: 'Phone-based puzzles, old-school SMS ciphers',
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-2 px-4 font-mono text-foreground font-bold">{row.sys}</td>
                    <td className="py-2 px-4 text-muted-foreground">{row.range}</td>
                    <td className="py-2 px-4 font-mono text-green-500">{row.example}</td>
                    <td className="py-2 px-4 text-muted-foreground">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 8b: Full A1Z26 Reference Table */}
          <h2 id="full-a1z26-reference-table-126" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Full A1Z26 Reference Table (1–26)
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Bookmark this table for quick lookups when decoding by hand. See our{' '}
            <Link href="/blog/a1z26-cipher-decoder-guide" className="text-primary hover:underline">full A1Z26 cipher guide</Link>{' '}
            for additional techniques and worked examples.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Number</th>
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Letter</th>
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Number</th>
                  <th className="text-left py-2 px-4 text-foreground font-semibold">Letter</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 13 }, (_, i) => ({
                  n1: a1z26[i].n,
                  l1: a1z26[i].l,
                  n2: a1z26[i + 13].n,
                  l2: a1z26[i + 13].l,
                })).map((row, i) => (
                  <tr key={i} className="border-b border-border/50 hover:bg-muted/20">
                    <td className="py-2 px-4 font-mono text-foreground font-bold">{row.n1}</td>
                    <td className="py-2 px-4 font-mono text-green-500 font-bold">{row.l1}</td>
                    <td className="py-2 px-4 font-mono text-foreground font-bold">{row.n2}</td>
                    <td className="py-2 px-4 font-mono text-green-500 font-bold">{row.l2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 9 */}
          <h2 id="common-uses-for-number-to-letter-decoding" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Common Uses for Number-to-Letter Decoding
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Knowing how to decode numbers to letters is a practical skill across many contexts:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><strong>Escape rooms</strong> — number-to-letter puzzles are among the most common cipher types used to reveal combination codes and clues.</li>
            <li><strong>Geocaching puzzle caches</strong> — cache coordinates are often hidden inside A1Z26-encoded messages that solvers must decode before they can find the cache.</li>
            <li><strong>CTF competitions</strong> — Capture the Flag events use ASCII and custom number-to-letter encodings as entry-level challenges to test basic cryptography skills.</li>
            <li><strong>Pen-and-paper ciphers</strong> — number substitution ciphers are a classic spy-game and classroom activity, easy to create and solve by hand.</li>
            <li><strong>Kids' educational activities</strong> — A1Z26 is widely used in schools to introduce cryptography concepts and improve alphabet familiarity.</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            Whatever the context, our{' '}
            <Link href="/tools/numbers-to-letters" className="text-primary hover:underline">Numbers to Letters converter</Link>{' '}
            gives you instant results without needing to decode manually.
          </p>

          {/* FAQ */}
          <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="border border-border rounded-lg p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-base text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border text-center">
            <p className="text-base text-muted-foreground mb-4">
              Ready to decode? Skip the manual lookup and{' '}
              <Link href="/tools/letter-number-converter" className="text-primary hover:underline font-semibold">
                use our free Letters to Numbers Converter
              </Link>{' '}
              — it handles A1Z26, A0Z25, ASCII, and more automatically.
            </p>
            <p className="text-sm text-muted-foreground">
              Need ASCII specifically?{' '}
              <Link href="/tools/ascii-decoder" className="text-primary hover:underline">Use our ASCII Decoder</Link>.
              {' '}Numbers seem shifted?{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Try the Caesar Cipher Decoder</Link>.
            </p>
          </div>

        </div>
      </article>
    </main>
  )
}
