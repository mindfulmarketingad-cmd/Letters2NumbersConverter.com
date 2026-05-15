import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-a-text-message`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: { absolute: 'How To Decode A Text Message' },
  description:
    'Learn how to decode a text message — from SMS abbreviations and GSM 7-bit PDU encoding to Base64, hex, URL encoding, and A1Z26 ciphers. Step-by-step guides with examples.',
  keywords: [
    'how to decode a text message',
    'decode text message',
    'SMS abbreviations decoder',
    'Base64 decode text',
    'hex decode text',
    'URL decode text',
    'A1Z26 cipher decoder',
    'SMS PDU encoding',
    'GSM 7-bit encoding',
    'text message encoding types',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode A Text Message — SMS Codes, Abbreviations & Ciphers',
    description:
      'A complete guide to decoding text messages: SMS slang, GSM 7-bit PDU, Base64, hex, URL encoding, and A1Z26 ciphers — with step-by-step instructions and worked examples.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Decode A Text Message' }],
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode A Text Message — SMS Codes, Abbreviations & Ciphers',
    description:
      'Step-by-step guide: identify and decode Base64, hex, URL-encoded, A1Z26, and SMS abbreviation text messages.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode A Text Message — SMS Codes, Abbreviations & Ciphers',
  description:
    'A complete guide to decoding text messages: SMS slang, GSM 7-bit PDU, Base64, hex, URL encoding, and A1Z26 ciphers — with step-by-step instructions and worked examples.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I decode a text message with random letters and numbers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First identify the encoding type. If the text contains pairs of characters from 0–9 and A–F (like "48 65 6C 6C 6F"), it is hex-encoded. If it ends in = or == and uses only A–Z, a–z, 0–9, +, and /, it is Base64. If it contains %XX patterns (like %20 for a space), it is URL-encoded. Once you know the type, use the appropriate decoding tool or method to recover the original text.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean when a text message is encoded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An "encoded" text message can mean several different things: (1) informal SMS abbreviations like LOL or BRB — these are shorthand, not technical encoding; (2) GSM 7-bit or UCS-2 encoding used internally by SMS networks to transmit data; (3) cryptographic or data encodings such as Base64, hex, or URL percent-encoding used in apps, APIs, and email systems; or (4) cipher-based encoding like A1Z26, Caesar shift, or Morse code used in puzzles and games.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Base64 and hex encoding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both Base64 and hex are ways to represent binary data as printable text. Hex uses 2 characters per byte (digits 0–9 and letters A–F), making the output twice as long as the original. Base64 uses 4 characters to represent every 3 bytes, so it adds about 33% overhead. Base64 output uses A–Z, a–z, 0–9, +, and /, often ending in = padding characters. Hex output looks like "48 65 6C 6C 6F"; Base64 looks like "SGVsbG8=".',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decode an A1Z26 text message?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In A1Z26, each letter is replaced by its position in the alphabet: A=1, B=2, C=3, …, Z=26. To decode, split the message by spaces or separators, then convert each number back to its letter. For example, "8 5 12 12 15" decodes to H-E-L-L-O. Use our free Letter-Number Converter tool at letters2numbersconverter.com for instant decoding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common SMS text abbreviations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common SMS abbreviations include: LOL (laughing out loud), BRB (be right back), TTYL (talk to you later), IMO (in my opinion), OMG (oh my god), IDK (I don\'t know), TBH (to be honest), NGL (not gonna lie), and IRL (in real life). These are informal shorthand conventions, not cryptographic encodings — no decoder is needed, just familiarity with the convention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GSM 7-bit encoding in SMS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GSM 7-bit encoding is the default character set used by SMS networks for Latin-alphabet messages. It encodes each character in 7 bits rather than 8, allowing 160 characters per SMS segment. If your message contains characters outside the GSM 7-bit alphabet (such as emoji or accented letters beyond the basic set), the network switches to UCS-2 encoding, which uses 16 bits per character and reduces the per-segment limit to 70 characters.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'How To Decode A Text Message', item: PAGE_URL },
  ],
}

const smsAbbreviations = [
  { abbr: 'LOL', meaning: 'Laughing out loud' },
  { abbr: 'BRB', meaning: 'Be right back' },
  { abbr: 'TTYL', meaning: 'Talk to you later' },
  { abbr: 'IMO', meaning: 'In my opinion' },
  { abbr: 'OMG', meaning: 'Oh my god' },
  { abbr: 'IDK', meaning: "I don't know" },
  { abbr: 'TBH', meaning: 'To be honest' },
  { abbr: 'NGL', meaning: "Not gonna lie" },
  { abbr: 'IRL', meaning: 'In real life' },
  { abbr: 'SMH', meaning: 'Shaking my head' },
  { abbr: 'FWIW', meaning: 'For what it is worth' },
  { abbr: 'AFAIK', meaning: 'As far as I know' },
]

const hexExample = [
  { hex: '48', decimal: 72, char: 'H' },
  { hex: '65', decimal: 101, char: 'e' },
  { hex: '6C', decimal: 108, char: 'l' },
  { hex: '6C', decimal: 108, char: 'l' },
  { hex: '6F', decimal: 111, char: 'o' },
]

const a1z26Example = [
  { num: 8, letter: 'H' },
  { num: 5, letter: 'E' },
  { num: 12, letter: 'L' },
  { num: 12, letter: 'L' },
  { num: 15, letter: 'O' },
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium">How To Decode A Text Message</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              How To Decode A Text Message
            </h1>
            <p className="text-sm text-muted-foreground">
              By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
              {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <article>

            {/* Intro */}
            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">How To Decode A Text Message</strong> depends entirely on what kind of encoding is used — and "encoded" is a word that covers a surprisingly wide range of things, from casual SMS shorthand to binary-safe data formats used in software APIs. Before you can decode anything, you need to identify which type of encoding you are actually looking at. This guide walks through every major category, shows you how to recognise each one at a glance, and then gives step-by-step decoding instructions with worked examples.
            </p>

            {/* Section 1 — Types of encoded text */}
                      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#types-of-encoded-text-messages" className="text-primary hover:underline">Types of Encoded Text Messages</a></li>
            <li><a href="#how-to-identify-which-encoding-you-have" className="text-primary hover:underline">How to Identify Which Encoding You Have</a></li>
            <li><a href="#step-by-step-decoding-a-base64-text-message" className="text-primary hover:underline">Step-by-Step: Decoding a Base64 Text Message</a></li>
            <li><a href="#step-by-step-decoding-a-hex-text-message" className="text-primary hover:underline">Step-by-Step: Decoding a Hex Text Message</a></li>
            <li><a href="#step-by-step-decoding-an-a1z26-text-message" className="text-primary hover:underline">Step-by-Step: Decoding an A1Z26 Text Message</a></li>
            <li><a href="#step-by-step-decoding-url-encoded-text" className="text-primary hover:underline">Step-by-Step: Decoding URL-Encoded Text</a></li>
            <li><a href="#tools-to-decode-your-text-message" className="text-primary hover:underline">Tools to Decode Your Text Message</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related-tools-and-guides" className="text-primary hover:underline">Related Tools and Guides</a></li>
            </ol>
          </nav>

<h2 id="types-of-encoded-text-messages" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Types of Encoded Text Messages</h2>
            <p className="text-base text-muted-foreground mb-4">
              Not all "encoded" messages are the same. The word gets used for everything from teenage SMS shorthand to cryptographic transforms. Here are the main categories you are likely to encounter:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. SMS Abbreviations and Text Slang</h3>
            <p className="text-base text-muted-foreground mb-4">
              The most common type of "encoded" text message is simply <strong className="text-foreground">informal shorthand</strong>. LOL, BRB, TTYL, and IMO are not cryptographic encodings — they are abbreviations that evolved to save keystrokes on numeric keypads before smartphone keyboards became standard. No algorithm is involved; you just need to know what the letters stand for.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Abbreviation', 'Meaning'].map(h => (
                      <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {smsAbbreviations.map(({ abbr, meaning }) => (
                    <tr key={abbr} className="hover:bg-secondary/20">
                      <td className="py-2 px-4 font-mono font-bold text-foreground">{abbr}</td>
                      <td className="py-2 px-4 text-muted-foreground">{meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. SMS PDU Encoding — GSM 7-bit and UCS-2</h3>
            <p className="text-base text-muted-foreground mb-4">
              When your phone sends an SMS, the network encodes the text before transmission. The default is <strong className="text-foreground">GSM 7-bit encoding</strong>, which packs each character into 7 bits instead of a full byte. This allows up to <strong className="text-foreground">160 characters per SMS segment</strong>. If your message contains characters outside the basic GSM 7-bit alphabet — such as emoji, Arabic, Chinese, or certain accented letters — the network switches to <strong className="text-foreground">UCS-2 encoding</strong> (16 bits per character), which reduces the per-segment limit to <strong className="text-foreground">70 characters</strong>.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              You do not normally see this encoding as a user — your messaging app handles it transparently. Developers working with SMS APIs or PDU-format raw data may need to decode it, but for everyday purposes it is invisible.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Base64-Encoded Text</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Base64</strong> is a binary-to-text encoding scheme used when binary data needs to travel through systems that only handle printable ASCII — such as email MIME attachments or JSON API payloads. It converts every 3 bytes of data into 4 printable characters chosen from the set A–Z, a–z, 0–9, <code className="text-foreground">+</code>, and <code className="text-foreground">/</code>. The output is padded with <code className="text-foreground">=</code> or <code className="text-foreground">==</code> if the input length is not a multiple of 3.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Example: the word <span className="font-mono text-foreground">Hello</span> Base64-encodes to <span className="font-mono text-foreground">SGVsbG8=</span>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Hex-Encoded Text</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Hex encoding</strong> (hexadecimal) represents each byte of data as exactly two hexadecimal digits (0–9 and A–F). It is commonly used in debugging, networking, and low-level programming output. A hex-encoded message looks like a string of two-character pairs: <span className="font-mono text-foreground">48 65 6C 6C 6F</span> decodes to <span className="font-mono text-foreground">Hello</span>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. URL-Encoded Text (Percent-Encoding)</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">URL encoding</strong> (formally called percent-encoding) replaces characters that are not safe in a URL with a <code className="text-foreground">%</code> sign followed by two hex digits. A space becomes <code className="text-foreground">%20</code>, an exclamation mark becomes <code className="text-foreground">%21</code>, and so on. You see this in browser address bars and in query strings passed between web services.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Example: <span className="font-mono text-foreground">%48%65%6C%6C%6F</span> decodes to <span className="font-mono text-foreground">Hello</span>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. Cipher-Encoded Messages</h3>
            <p className="text-base text-muted-foreground mb-4">
              Classic <strong className="text-foreground">cipher encodings</strong> replace letters with other letters, numbers, or symbols according to a rule:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Caesar shift</strong> — each letter is shifted a fixed number of positions in the alphabet (e.g. A→D, B→E with a shift of 3)</li>
              <li><strong className="text-foreground">A1Z26</strong> — each letter is replaced by its position number: A=1, B=2, … Z=26</li>
              <li><strong className="text-foreground">Morse code</strong> — letters are represented as sequences of dots (·) and dashes (−) separated by spaces</li>
              <li><strong className="text-foreground">Atbash</strong> — the alphabet is reversed so A=Z, B=Y, and so on</li>
            </ul>

            {/* Section 2 — How to identify */}
            <h2 id="how-to-identify-which-encoding-you-have" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">How to Identify Which Encoding You Have</h2>
            <p className="text-base text-muted-foreground mb-4">
              The fastest way to decode a message is to identify its type first. Here are the visual clues:
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['What it looks like', 'Likely encoding'].map(h => (
                      <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground text-sm">
                  {[
                    ['Readable words with missing vowels or compressed syllables (e.g. "ttyl", "omg")', 'SMS abbreviation / slang'],
                    ['Pairs of characters from 0–9 and A–F (e.g. "48 65 6C 6C 6F")', 'Hex encoding'],
                    ['Ends in = or == and only uses A–Z, a–z, 0–9, +, /', 'Base64'],
                    ['Contains %XX patterns (e.g. "%20", "%48%65")', 'URL percent-encoding'],
                    ['Sequences of dots (·) and dashes (−)', 'Morse code'],
                    ['All numbers separated by spaces or dashes (e.g. "8 5 12 12 15")', 'A1Z26 cipher (1=A, 2=B…)'],
                    ['Letters shifted uniformly — recognisable words but wrong letters', 'Caesar cipher shift'],
                  ].map(([look, encoding]) => (
                    <tr key={look} className="hover:bg-secondary/20">
                      <td className="py-2 px-4 align-top font-mono text-xs text-foreground">{look}</td>
                      <td className="py-2 px-4 align-top font-semibold text-foreground">{encoding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Section 3 — Decoding Base64 */}
            <h2 id="step-by-step-decoding-a-base64-text-message" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Step-by-Step: Decoding a Base64 Text Message</h2>
            <p className="text-base text-muted-foreground mb-4">
              Suppose you receive a message body that reads: <span className="font-mono text-foreground">SGVsbG8sIHdvcmxkIQ==</span>
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Confirm it is Base64.</strong> It uses only A–Z, a–z, 0–9, and ends in <code className="text-foreground">==</code>. That is a strong indicator.
              </li>
              <li>
                <strong className="text-foreground">Group the characters into blocks of 4.</strong> Each group of 4 Base64 characters encodes exactly 3 bytes of original data: <span className="font-mono text-foreground">SGVs | bG8s | IHdv | cmxk | IQ==</span>
              </li>
              <li>
                <strong className="text-foreground">Convert each Base64 character to its 6-bit index</strong> (A=0, B=1, … Z=25, a=26, … z=51, 0=52, … 9=61, +=62, /=63).
              </li>
              <li>
                <strong className="text-foreground">Concatenate the bits and split into 8-bit bytes,</strong> then convert each byte to its ASCII character.
              </li>
              <li>
                <strong className="text-foreground">Result:</strong> <span className="font-mono text-foreground">Hello, world!</span>
              </li>
            </ol>
            <p className="text-base text-muted-foreground mb-4">
              In practice, you would never do this by hand for a long message. Use our{' '}
              <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder/Decoder tool</Link>{' '}
              — paste the encoded string and the decoded text appears instantly.
            </p>

            {/* Section 4 — Decoding hex */}
            <h2 id="step-by-step-decoding-a-hex-text-message" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Step-by-Step: Decoding a Hex Text Message</h2>
            <p className="text-base text-muted-foreground mb-4">
              Take the hex string: <span className="font-mono text-foreground">48 65 6C 6C 6F</span>
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Split the string into two-character pairs:</strong> <span className="font-mono text-foreground">48</span>, <span className="font-mono text-foreground">65</span>, <span className="font-mono text-foreground">6C</span>, <span className="font-mono text-foreground">6C</span>, <span className="font-mono text-foreground">6F</span></li>
              <li><strong className="text-foreground">Convert each hex pair to a decimal number.</strong> Hex uses base-16: the left digit represents 16s, the right digit represents 1s.</li>
              <li><strong className="text-foreground">Look up each decimal value in the ASCII table</strong> to find the corresponding character.</li>
              <li><strong className="text-foreground">Concatenate the characters</strong> to form the decoded text.</li>
            </ol>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Hex', 'Decimal', 'ASCII Character'].map(h => (
                      <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {hexExample.map(({ hex, decimal, char }, i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="py-2 px-4 font-mono font-bold text-foreground">{hex}</td>
                      <td className="py-2 px-4 font-mono text-muted-foreground">{decimal}</td>
                      <td className="py-2 px-4 font-mono font-bold text-foreground text-lg">{char}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Result: <span className="font-mono text-foreground font-bold">Hello</span>. For longer hex strings, use our{' '}
              <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder tool</Link>, which handles hex-to-text conversion directly.
            </p>

            {/* Section 5 — Decoding A1Z26 */}
            <h2 id="step-by-step-decoding-an-a1z26-text-message" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Step-by-Step: Decoding an A1Z26 Text Message</h2>
            <p className="text-base text-muted-foreground mb-4">
              A1Z26 is the simplest number cipher: A=1, B=2, C=3, all the way to Z=26. Take the message: <span className="font-mono text-foreground">8 5 12 12 15</span>
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Split on spaces (or the separator used in the message).</strong> You get: 8, 5, 12, 12, 15.</li>
              <li><strong className="text-foreground">Map each number to its alphabet position.</strong> Count from A=1.</li>
              <li><strong className="text-foreground">Write out the letters</strong> in sequence.</li>
            </ol>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Number', 'Letter (A=1)'].map(h => (
                      <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {a1z26Example.map(({ num, letter }) => (
                    <tr key={num + letter} className="hover:bg-secondary/20">
                      <td className="py-2 px-4 font-mono font-bold text-foreground">{num}</td>
                      <td className="py-2 px-4 font-mono font-bold text-foreground text-lg">{letter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Result: <span className="font-mono text-foreground font-bold">HELLO</span>. Use our{' '}
              <Link href="/tools/letter-number-converter" className="text-primary hover:underline">Letter-Number Converter</Link>{' '}
              to decode A1Z26 messages of any length instantly — it also handles numbers-to-letters in reverse.
            </p>

            {/* Section 6 — Decoding URL encoding */}
            <h2 id="step-by-step-decoding-url-encoded-text" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Step-by-Step: Decoding URL-Encoded Text</h2>
            <p className="text-base text-muted-foreground mb-4">
              URL encoding (percent-encoding) replaces unsafe characters with a <code className="text-foreground font-bold">%</code> followed by two hex digits representing the character's ASCII code. Take: <span className="font-mono text-foreground">%48%65%6C%6C%6F</span>
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Split on the % signs.</strong> You get the sequences: 48, 65, 6C, 6C, 6F.</li>
              <li><strong className="text-foreground">Convert each two-character hex value to decimal,</strong> then look up the ASCII character — exactly as in the hex decoding example above.</li>
              <li><strong className="text-foreground">Concatenate the results.</strong></li>
            </ol>
            <p className="text-base text-muted-foreground mb-4">
              Result: <span className="font-mono text-foreground font-bold">Hello</span>. A common real-world example: a URL containing <span className="font-mono text-foreground">Hello%20World</span> decodes to <span className="font-mono text-foreground">Hello World</span>, because <code className="text-foreground">%20</code> is the percent-encoded form of a space character (decimal 32, hex 20).
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Most browsers decode percent-encoding automatically in their address bars. If you are working with raw API data or query strings, your programming language's standard library almost certainly has a URL-decode function built in.
            </p>

            {/* Section 7 — Tools */}
            <h2 id="tools-to-decode-your-text-message" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Tools to Decode Your Text Message</h2>
            <p className="text-base text-muted-foreground mb-4">
              Once you have identified the encoding type, the right tool makes decoding effortless:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline font-semibold">Base64 Encoder/Decoder</Link>
                {' '}— paste any Base64 string and decode it instantly; also encodes plain text to Base64.
              </li>
              <li>
                <Link href="/tools/letter-number-converter" className="text-primary hover:underline font-semibold">Letter-Number Converter</Link>
                {' '}— converts between letters and A1Z26 numbers in both directions; supports custom separators.
              </li>
              <li>
                <Link href="/tools/ascii-decoder" className="text-primary hover:underline font-semibold">ASCII Decoder</Link>
                {' '}— decode hex values to their ASCII characters, or look up any ASCII code.
              </li>
              <li>
                <Link href="/" className="text-primary hover:underline font-semibold">Letters2NumbersConverter.com Home</Link>
                {' '}— the full suite of conversion and cipher tools, including Morse code, Caesar cipher, and more.
              </li>
            </ul>

            <div className="rounded-lg border border-border bg-secondary/20 p-5 my-6">
              <h3 className="text-base font-semibold text-foreground mb-2">Quick Reference: Which Tool to Use</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="font-mono text-foreground">SGVsbG8=</span> → ends in = and uses only A–Z/a–z/0–9 → <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Decoder</Link></li>
                <li><span className="font-mono text-foreground">48 65 6C 6C 6F</span> → pairs of hex digits → <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder</Link></li>
                <li><span className="font-mono text-foreground">8 5 12 12 15</span> → numbers 1–26 → <Link href="/tools/letter-number-converter" className="text-primary hover:underline">Letter-Number Converter</Link></li>
                <li><span className="font-mono text-foreground">%48%65%6C%6C%6F</span> → %XX patterns → browser URL bar or <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder</Link></li>
                <li><span className="font-mono text-foreground">LOL / BRB / TTYL</span> → SMS slang → no tool needed, see table above</li>
              </ul>
            </div>

            {/* FAQ section */}
            <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-6 scroll-mt-20">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a text message with random letters and numbers?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Start by identifying the encoding type using the visual clues above. If the text contains pairs of characters from 0–9 and A–F, it is likely hex. If it ends in <code className="text-foreground">=</code> or <code className="text-foreground">==</code> and uses only the Base64 character set, decode it as Base64. If it contains <code className="text-foreground">%XX</code> patterns, it is URL-encoded. Once you know the type, use the matching tool linked in the section above.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What does it mean when a text message is encoded?</h3>
            <p className="text-base text-muted-foreground mb-4">
              "Encoded" can mean several things: informal shorthand (SMS slang), network-level encoding the phone handles automatically (GSM 7-bit or UCS-2), data encoding used by apps and APIs (Base64, hex, URL encoding), or cipher encoding used in puzzles and games (A1Z26, Caesar shift, Morse code). Each category has a distinct appearance and a different decoding approach.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between Base64 and hex encoding?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Both are ways to represent binary data as printable text. Hex uses exactly 2 characters per byte (digits 0–9 and A–F), making output exactly twice as long as the input. Base64 encodes 3 bytes as 4 characters, adding roughly 33% overhead. Hex output looks like <span className="font-mono text-foreground">48 65 6C 6C 6F</span>; Base64 output looks like <span className="font-mono text-foreground">SGVsbG8=</span>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode an A1Z26 text message?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Split the message on its separator (usually a space or dash), then map each number to its alphabet position: 1=A, 2=B, 3=C, through to 26=Z. For example, <span className="font-mono text-foreground">8 5 12 12 15</span> → <span className="font-mono text-foreground">HELLO</span>. Our{' '}
              <Link href="/tools/letter-number-converter" className="text-primary hover:underline">Letter-Number Converter</Link> handles this automatically.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What are common SMS text abbreviations?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The most common ones are LOL (laughing out loud), BRB (be right back), TTYL (talk to you later), IMO (in my opinion), OMG (oh my god), IDK (I don't know), TBH (to be honest), NGL (not gonna lie), and IRL (in real life). See the full table earlier in this article for more.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is GSM 7-bit encoding in SMS?</h3>
            <p className="text-base text-muted-foreground mb-4">
              GSM 7-bit encoding is the default character encoding used by SMS networks for Latin-script messages. It packs each character into 7 bits rather than a full byte, allowing 160 characters per SMS segment. Messages using characters outside this set (such as emoji or non-Latin scripts) switch to UCS-2 encoding, which uses 16 bits per character and limits each segment to 70 characters.
            </p>

            {/* Related links */}
            <h2 id="related-tools-and-guides" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Related Tools and Guides</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-8">
              <li><Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder/Decoder</Link> — encode or decode Base64 text instantly</li>
              <li><Link href="/tools/letter-number-converter" className="text-primary hover:underline">Letter-Number Converter</Link> — A1Z26 numbers to letters and letters to numbers</li>
              <li><Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder</Link> — hex values to ASCII characters</li>
              <li><Link href="/" className="text-primary hover:underline">Full Tool Suite</Link> — Morse code, Caesar cipher, Atbash, and more at Letters2NumbersConverter.com</li>
            </ul>

          </article>
        </div>
      </main>
    </>
  )
}
