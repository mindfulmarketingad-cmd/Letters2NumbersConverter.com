import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-encoded-text`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Decode Encoded Text — Base64, Hex, URL, Morse & More',
  description:
    'Learn how to decode encoded text across every major encoding scheme: Base64, Hex, URL percent-encoding, Morse code, A1Z26, ROT13, Binary, and Caesar cipher. Includes a quick-identification cheat sheet and free online tools.',
  keywords: [
    'how to decode encoded text',
    'decode encoded text',
    'Base64 decoder',
    'hex decoder',
    'URL decoder',
    'Morse code decoder',
    'ROT13 decoder',
    'binary to text',
    'A1Z26 decoder',
    'Caesar cipher decoder',
    'encoding identification',
    'text decoding guide',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode Encoded Text — Base64, Hex, URL, Morse & More',
    description:
      'Step-by-step guide to decoding Base64, Hex, URL encoding, Morse code, A1Z26, ROT13, Binary, and Caesar cipher. Quick-identification cheat sheet included.',
    type: 'article',
    url: PAGE_URL,
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode Encoded Text — Base64, Hex, URL, Morse & More',
    description:
      'Identify and decode any encoded text: Base64, Hex, URL, Morse, ROT13, Binary, and more. Includes cheat sheet and free tools.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['BlogPosting', 'Article'],
  '@id': `${PAGE_URL}#article`,
  headline: 'How To Decode Encoded Text — Base64, Hex, URL, Morse & More',
  description:
    'Learn how to decode encoded text across every major encoding scheme: Base64, Hex, URL percent-encoding, Morse code, A1Z26, ROT13, Binary, and Caesar cipher.',
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

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know what encoding scheme was used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Look at the character set. Base64 uses A-Z, a-z, 0-9, +, and / with optional = padding. Hex uses only 0-9 and A-F in pairs. URL encoding contains %XX sequences. Morse code uses only dots, dashes, and spaces. A1Z26 uses numbers 1–26. Binary uses only 0s and 1s in groups of 8.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between encoding and encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Encoding transforms data into a different format for compatibility or transmission purposes — it does not require a secret key and can always be reversed. Encryption scrambles data using a key so that only authorised parties can read it. Base64, Hex, and URL encoding are not encryption; ROT13 and Caesar cipher are very weak ciphers sometimes used for light obfuscation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decode Base64 text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replace any URL-safe characters (- with +, _ with /), add = padding until the length is a multiple of 4, then pass the string to a Base64 decoder such as atob() in a browser console or an online tool like the one at letters2numbersconverter.com/tools/base64-encoder-decoder.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is ROT13 a form of encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROT13 is technically a Caesar cipher with a fixed shift of 13. It is not considered secure encryption — it provides only light obfuscation and is trivially reversible. Because the alphabet has 26 letters, applying ROT13 twice returns the original text.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does percent-encoding (%20) mean in a URL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '%20 is the URL percent-encoded representation of a space character. In URL encoding, any character that is not safe for a URL is replaced by a % sign followed by its two-digit hexadecimal ASCII value. For example, %41 decodes to the letter A (ASCII decimal 65, hex 41).',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: `${BASE_URL}/blog`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How To Decode Encoded Text',
      item: PAGE_URL,
    },
  ],
}

const cheatSheet = [
  {
    type: 'Base64',
    identifiers: 'A–Z, a–z, 0–9, +, /; ends with = or ==; length is a multiple of 4',
    example: 'SGVsbG8=',
    method: 'Pad to multiple of 4, then decode with atob() or Base64 tool',
  },
  {
    type: 'Hex',
    identifiers: 'Only 0–9 and A–F (or a–f); characters appear in pairs',
    example: '48 65 6C 6C 6F',
    method: 'Split into pairs, convert each pair from hex to decimal, map to ASCII',
  },
  {
    type: 'URL Encoding',
    identifiers: 'Contains %XX sequences; spaces shown as %20 or +',
    example: 'Hello%20World',
    method: 'Replace + with space, convert each %XX from hex to character',
  },
  {
    type: 'Morse Code',
    identifiers: 'Only dots (.), dashes (-), and spaces; words split by / or triple space',
    example: '.... . .-.. .-.. ---',
    method: 'Split on spaces for characters, / or triple space for words; look up each symbol',
  },
  {
    type: 'A1Z26',
    identifiers: 'Numbers between 1 and 26, separated by spaces or dashes',
    example: '8-5-12-12-15',
    method: 'Map 1→A, 2→B … 26→Z',
  },
  {
    type: 'ROT13',
    identifiers: 'Looks like English text but words are unrecognisable; only letters are shifted',
    example: 'Uryyb',
    method: 'Shift each letter 13 positions; applying ROT13 twice returns the original',
  },
  {
    type: 'Binary',
    identifiers: 'Only 0s and 1s, typically in groups of 8 bits',
    example: '01001000 01100101',
    method: 'Group into 8-bit bytes, convert each from binary to decimal, map to ASCII',
  },
  {
    type: 'Caesar Cipher',
    identifiers: 'Looks like almost-English text with consistently shifted letters',
    example: 'Khoor (shift 3)',
    method: 'Try shifts 1–25; the one that produces readable text is the key',
  },
]

const faqItems = [
  {
    question: 'How do I know what encoding scheme was used?',
    answer:
      'Look at the character set. Base64 uses A-Z, a-z, 0-9, +, and / with optional = padding. Hex uses only 0-9 and A-F in pairs. URL encoding contains %XX sequences. Morse code uses only dots, dashes, and spaces. A1Z26 uses numbers 1–26. Binary uses only 0s and 1s in groups of 8.',
  },
  {
    question: 'What is the difference between encoding and encryption?',
    answer:
      'Encoding transforms data into a different format for compatibility or transmission purposes — it does not require a secret key and can always be reversed. Encryption scrambles data using a key so that only authorised parties can read it. Base64, Hex, and URL encoding are not encryption; ROT13 and Caesar cipher are very weak ciphers sometimes used for light obfuscation.',
  },
  {
    question: 'How do I decode Base64 text?',
    answer:
      'Replace any URL-safe characters (- with +, _ with /), add = padding until the length is a multiple of 4, then pass the string to a Base64 decoder such as atob() in a browser console or an online tool like the one at letters2numbersconverter.com/tools/base64-encoder-decoder.',
  },
  {
    question: 'Is ROT13 a form of encryption?',
    answer:
      'ROT13 is technically a Caesar cipher with a fixed shift of 13. It is not considered secure encryption — it provides only light obfuscation and is trivially reversible. Because the alphabet has 26 letters, applying ROT13 twice returns the original text.',
  },
  {
    question: 'What does percent-encoding (%20) mean in a URL?',
    answer:
      '%20 is the URL percent-encoded representation of a space character. In URL encoding, any character that is not safe for a URL is replaced by a % sign followed by its two-digit hexadecimal ASCII value. For example, %41 decodes to the letter A (ASCII decimal 65, hex 41).',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li className="select-none">/</li>
              <li className="text-foreground font-medium">How To Decode Encoded Text</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              How To Decode Encoded Text
            </h1>
            <p className="text-sm text-muted-foreground">
              By Neo | <time dateTime="2026-05-14">May 14, 2026</time>
            </p>
          </header>

          <article>

            {/* Intro */}
            <p className="text-lg text-muted-foreground mb-6">
              How To Decode Encoded Text starts with identifying the encoding scheme — because the same string of characters can mean entirely different things depending on whether it was encoded as Base64, hexadecimal, URL percent-encoding, Morse code, or something else entirely. Once you know the scheme, decoding is mechanical. This guide walks through every common encoding type, shows you how to spot each one in the wild, and gives you the exact steps to reverse it — plus a quick-reference cheat sheet and links to free online tools.
            </p>

            {/* Section 1: Why Text Gets Encoded */}
                      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#why-text-gets-encoded-in-the-first-place" className="text-primary hover:underline">Why Text Gets Encoded in the First Place</a></li>
            <li><a href="#how-to-identify-the-encoding-type" className="text-primary hover:underline">How to Identify the Encoding Type</a></li>
            <li><a href="#step-by-step-decoding-guides" className="text-primary hover:underline">Step-by-Step Decoding Guides</a></li>
            <li><a href="#quick-identification-cheat-sheet" className="text-primary hover:underline">Quick Identification Cheat Sheet</a></li>
            <li><a href="#free-online-tools-to-decode-encoded-text" className="text-primary hover:underline">Free Online Tools to Decode Encoded Text</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

<h2 id="why-text-gets-encoded-in-the-first-place" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Why Text Gets Encoded in the First Place
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Encoding exists for several distinct reasons, and knowing the reason often points you to the scheme:
            </p>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>
                <strong>Data transmission safety.</strong> Protocols like email (SMTP) were designed for plain ASCII text, not binary data. Base64 converts arbitrary binary — images, files, cryptographic keys — into a safe ASCII alphabet so it survives transport without corruption.
              </li>
              <li>
                <strong>URL safety.</strong> URLs may only contain a restricted set of characters. Percent-encoding (also called URL encoding) replaces unsafe characters such as spaces, ampersands, and non-ASCII bytes with a <span className="font-mono text-foreground">%XX</span> sequence, where XX is the hexadecimal ASCII value of the character.
              </li>
              <li>
                <strong>Compact transmission.</strong> GSM 7-bit encoding packs text messages into fewer bits than standard 8-bit ASCII, squeezing more characters into a single SMS frame.
              </li>
              <li>
                <strong>Light obfuscation.</strong> ROT13 is used on forums and in puzzle communities to hide spoilers. It does not provide any real security — it just shifts letters far enough that the text is not accidentally readable at a glance.
              </li>
              <li>
                <strong>Cryptography and ciphers.</strong> Caesar ciphers, Atbash, and other classical substitution ciphers encode text to conceal meaning, requiring knowledge of the key or shift to reverse.
              </li>
            </ul>

            {/* Section 2: How to Identify the Encoding Type */}
            <h2 id="how-to-identify-the-encoding-type" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              How to Identify the Encoding Type
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Before you can decode anything, you need to identify what you are looking at. Each encoding has telltale signs in its character set, structure, and length.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Base64</h3>
            <p className="text-base text-muted-foreground mb-4">
              Base64 uses the characters <span className="font-mono text-foreground">A–Z</span>, <span className="font-mono text-foreground">a–z</span>, <span className="font-mono text-foreground">0–9</span>, <span className="font-mono text-foreground">+</span>, and <span className="font-mono text-foreground">/</span>. The encoded string often ends with one or two <span className="font-mono text-foreground">=</span> signs (padding), and its total length is always a multiple of 4. The URL-safe variant substitutes <span className="font-mono text-foreground">-</span> for <span className="font-mono text-foreground">+</span> and <span className="font-mono text-foreground">_</span> for <span className="font-mono text-foreground">/</span>. Example: <span className="font-mono text-foreground">SGVsbG8=</span> decodes to <span className="font-mono text-foreground">Hello</span>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Hexadecimal (Hex)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Hex-encoded text uses only the digits <span className="font-mono text-foreground">0–9</span> and letters <span className="font-mono text-foreground">A–F</span> (or <span className="font-mono text-foreground">a–f</span>). Characters are always encoded as pairs — a single byte is always two hex digits — so you will often see groupings like <span className="font-mono text-foreground">48 65 6C 6C 6F</span> (which is "Hello"). An odd total number of hex digits, or characters outside the 0–F range, means it is not standard hex.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">URL Encoding (Percent-Encoding)</h3>
            <p className="text-base text-muted-foreground mb-4">
              URL-encoded strings contain <span className="font-mono text-foreground">%XX</span> sequences where XX is always a two-digit hexadecimal value. Spaces appear as either <span className="font-mono text-foreground">%20</span> or <span className="font-mono text-foreground">+</span>. If you see a string with lots of percent signs followed by two hex digits, it is almost certainly URL-encoded.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Morse Code</h3>
            <p className="text-base text-muted-foreground mb-4">
              Morse code uses only three symbols: dots (<span className="font-mono text-foreground">.</span>), dashes (<span className="font-mono text-foreground">-</span>), and spaces. Individual characters are separated by single spaces; words are separated by a forward slash (<span className="font-mono text-foreground">/</span>) or a triple space. Example: <span className="font-mono text-foreground">.... . .-.. .-.. ---</span> decodes to HELLO.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A1Z26</h3>
            <p className="text-base text-muted-foreground mb-4">
              A1Z26 encodes each letter as its position in the alphabet: A=1, B=2 … Z=26. The numbers fall between 1 and 26, separated by spaces or dashes. If all values are in that range, A1Z26 is the first thing to try. Use our <Link href="/tools/letter-number-converter" className="text-primary hover:underline">Letter Number Converter</Link> to decode A1Z26 instantly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ROT13</h3>
            <p className="text-base text-muted-foreground mb-4">
              ROT13 shifts every letter 13 positions forward in the alphabet (<span className="font-mono text-foreground">A→N</span>, <span className="font-mono text-foreground">B→O</span>, and so on). The result looks like English-ish text — same word lengths, same proportion of vowels and consonants — but the words are not real English words. Numbers and punctuation are left unchanged.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Binary</h3>
            <p className="text-base text-muted-foreground mb-4">
              Binary-encoded text contains only <span className="font-mono text-foreground">0</span>s and <span className="font-mono text-foreground">1</span>s, typically grouped into 8-bit bytes separated by spaces: <span className="font-mono text-foreground">01001000 01100101</span>. If the total bit count is a multiple of 8 and only 0s and 1s are present, it is binary-encoded ASCII.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Caesar Cipher</h3>
            <p className="text-base text-muted-foreground mb-4">
              A Caesar cipher shifts the entire alphabet by a fixed number of positions. The result looks like readable text — word lengths are intact, common short words appear — but the actual words are gibberish. Because there are only 25 possible shifts, brute-forcing all of them is straightforward.
            </p>

            {/* Section 3: Step-by-step decoding guides */}
            <h2 id="step-by-step-decoding-guides" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Step-by-Step Decoding Guides
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding Base64</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>If the string uses URL-safe characters, replace <span className="font-mono text-foreground">-</span> with <span className="font-mono text-foreground">+</span> and <span className="font-mono text-foreground">_</span> with <span className="font-mono text-foreground">/</span>.</li>
              <li>Check the length. If it is not a multiple of 4, append <span className="font-mono text-foreground">=</span> signs until it is.</li>
              <li>Run the result through <span className="font-mono text-foreground">atob()</span> in a browser console, or paste it into our <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder / Decoder</Link>.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding Hex</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>Split the string into two-character pairs (e.g. <span className="font-mono text-foreground">48 65 6C</span>).</li>
              <li>Convert each pair from base-16 to a decimal number: <span className="font-mono text-foreground">48</span> (hex) = 72 (decimal).</li>
              <li>Map each decimal value to its ASCII character: 72 = H, 101 = e, and so on. Use our <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder</Link> to do this automatically.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding URL Encoding</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>Replace every <span className="font-mono text-foreground">+</span> with a space character.</li>
              <li>Find each <span className="font-mono text-foreground">%XX</span> sequence in the string.</li>
              <li>Convert the two hex digits XX to a decimal value and look up the corresponding ASCII character. <span className="font-mono text-foreground">%20</span> → 32 → space; <span className="font-mono text-foreground">%41</span> → 65 → A.</li>
              <li>In JavaScript, <span className="font-mono text-foreground">decodeURIComponent()</span> handles the entire process automatically.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding Morse Code</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>Split the string on single spaces to get individual character codes.</li>
              <li>Split on <span className="font-mono text-foreground">/</span> or triple spaces to find word boundaries.</li>
              <li>Look up each dot-dash sequence in a Morse code reference chart. Use our <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link> to decode entire messages at once.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding A1Z26</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>Split the encoded string on its delimiter (space, dash, or comma).</li>
              <li>Map each number to its letter: 1→A, 2→B, 3→C … 26→Z.</li>
              <li>Numbers outside the 1–26 range indicate a different encoding — check for ASCII or a shifted variant.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding ROT13</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>For each letter, shift it 13 positions forward in the alphabet, wrapping around after Z.</li>
              <li>A→N, B→O, C→P … M→Z, N→A, O→B … Z→M.</li>
              <li>Applying ROT13 twice returns the original text — the encode and decode operation are identical.</li>
              <li>Numbers, spaces, and punctuation are left unchanged.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding Binary</h3>
            <ol className="list-decimal list-inside text-base text-muted-foreground mb-6 space-y-2">
              <li>Split the bit string into 8-bit groups (bytes): <span className="font-mono text-foreground">01001000</span>, <span className="font-mono text-foreground">01100101</span>, etc.</li>
              <li>Convert each 8-bit byte from binary to decimal: <span className="font-mono text-foreground">01001000</span> = 72.</li>
              <li>Map each decimal value to its ASCII character: 72 = H. Our <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder</Link> accepts decimal values directly.</li>
            </ol>

            {/* Section 4: Cheat Sheet Table */}
            <h2 id="quick-identification-cheat-sheet" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Quick Identification Cheat Sheet
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              When you encounter an unknown encoded string, run through this table top to bottom until a row matches what you see.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Encoding Type</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Key Identifiers</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Example</th>
                    <th className="text-left py-3 px-4 text-foreground font-semibold">Decoding Method</th>
                  </tr>
                </thead>
                <tbody>
                  {cheatSheet.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-muted/20">
                      <td className="py-2 px-4 font-semibold text-foreground whitespace-nowrap">{row.type}</td>
                      <td className="py-2 px-4 text-muted-foreground">{row.identifiers}</td>
                      <td className="py-2 px-4 font-mono text-foreground">{row.example}</td>
                      <td className="py-2 px-4 text-muted-foreground">{row.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 5: Tools */}
            <h2 id="free-online-tools-to-decode-encoded-text" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Free Online Tools to Decode Encoded Text
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Manual decoding is a useful skill, but for anything longer than a few characters, an online tool is far faster and less error-prone. Here are the relevant tools on this site:
            </p>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-6 space-y-3">
              <li>
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline font-medium">Base64 Encoder / Decoder</Link>
                {' '}— paste any Base64 string to get the decoded output instantly. Also handles the URL-safe variant.
              </li>
              <li>
                <Link href="/tools/ascii-decoder" className="text-primary hover:underline font-medium">ASCII Decoder</Link>
                {' '}— converts ASCII decimal codes (and hex codes) back to readable text. Useful for both Hex and Binary decoding once you have the decimal values.
              </li>
              <li>
                <Link href="/tools/letter-number-converter" className="text-primary hover:underline font-medium">Letter Number Converter</Link>
                {' '}— the main A1Z26 tool on the site. Handles letters-to-numbers and numbers-to-letters in both directions.
              </li>
              <li>
                <Link href="/tools/morse-code-translator" className="text-primary hover:underline font-medium">Morse Code Translator</Link>
                {' '}— decodes dot-dash sequences to text and encodes text to Morse. Handles word separators automatically.
              </li>
              <li>
                <Link href="/" className="text-primary hover:underline font-medium">Letters to Numbers Converter (Home)</Link>
                {' '}— the full converter supporting multiple encoding modes, including A1Z26, ASCII, and more.
              </li>
            </ul>

            {/* FAQ Section */}
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

            {/* CTA / Related Links */}
            <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border text-center">
              <p className="text-base text-muted-foreground mb-4">
                Ready to decode? Pick the right tool for your encoding scheme:
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <Link
                  href="/tools/base64-encoder-decoder"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Base64 Decoder
                </Link>
                <Link
                  href="/tools/ascii-decoder"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  ASCII / Hex Decoder
                </Link>
                <Link
                  href="/tools/letter-number-converter"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  A1Z26 Converter
                </Link>
                <Link
                  href="/tools/morse-code-translator"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Morse Code Translator
                </Link>
              </div>
            </div>

          </article>
        </div>
      </main>
    </>
  )
}
