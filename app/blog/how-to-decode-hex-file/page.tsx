import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-hex-file`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How To Decode Hex File — Read Binary Data as Text Step by Step',
  description:
    'Learn how to decode a hex file step by step: split hex pairs, convert each pair from base-16 to ASCII, use JavaScript parseInt and Python bytes.fromhex, and understand Intel HEX record structure.',
  keywords: [
    'how to decode hex file',
    'decode hex file',
    'hex file decoder',
    'hex to ascii',
    'hex to text',
    'hexadecimal to text',
    'intel hex format',
    'hex dump decoder',
    'xxd hex decode',
    'hex editor',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode Hex File — Read Binary Data as Text Step by Step',
    description:
      'Step-by-step guide to decoding a hex file: split hex pairs, convert base-16 to ASCII characters, decode with JavaScript or Python, and understand the Intel HEX record format.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Decode Hex File' }],
    publishedTime: '2026-05-14T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode Hex File — Read Binary Data as Text Step by Step',
    description:
      'Split hex pairs, convert each from base-16 to decimal, look up ASCII characters, and concatenate — plus JavaScript and Python code examples.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode Hex File — Read Binary Data as Text Step by Step',
  description:
    'A complete step-by-step guide to decoding a hex file: how hexadecimal byte values map to ASCII characters, how to decode manually and with code, how the Intel HEX record format works, and common pitfalls.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
  image: { '@type': 'ImageObject', url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a hex file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A hex file (also called a hex dump) is a representation of binary data where each byte is shown as two hexadecimal digits (0–9, A–F). Common formats include Intel HEX (.hex), Motorola S-record (.srec), and plain hex dumps produced by tools like xxd or hexdump on Linux.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decode a hex string to text manually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Split the hex string into two-character pairs. Convert each pair from base-16 to a decimal number. Look up that decimal number in the ASCII table to find the corresponding character. Concatenate all characters to get the decoded text. For example, 48 65 6C 6C 6F decodes to "Hello".',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decode a hex file in Python?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use bytes.fromhex() followed by .decode(). For example: bytes.fromhex("48656C6C6F").decode("utf-8") returns "Hello". This is the simplest one-liner for converting a plain hex string to readable text in Python.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I decode hex in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use parseInt(pair, 16) to convert a two-character hex pair to a decimal number, then String.fromCharCode() to get the ASCII character. For example: parseInt("48", 16) returns 72, and String.fromCharCode(72) returns "H".',
      },
    },
    {
      '@type': 'Question',
      name: 'Can every hex file be decoded to readable text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Images, executables, and firmware are binary data stored in hex files. Decoding their bytes as ASCII will produce garbled or unprintable characters. Only hex files that originated from plain text — such as those created with xxd from a text file — will produce readable output when decoded as ASCII or UTF-8.',
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
    { '@type': 'ListItem', position: 3, name: 'How To Decode Hex File', item: PAGE_URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-1 list-none p-0 m-0">
                <li><Link href="/" className="text-primary hover:underline">Home</Link></li>
                <li><span className="mx-1">/</span></li>
                <li><Link href="/blog" className="text-primary hover:underline">Blog</Link></li>
                <li><span className="mx-1">/</span></li>
                <li className="text-foreground">How To Decode Hex File</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              How To Decode Hex File
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
                {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">How To Decode Hex File</strong> means converting hexadecimal byte values back into the text or binary data they represent — taking something like <code className="font-mono text-sm bg-secondary/60 px-1 rounded">48 65 6C 6C 6F</code> and producing the readable string <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Hello</code>. Whether you are inspecting a firmware image, examining network traffic, or just curious about what a hex dump says, this guide walks through every step: how the hexadecimal number system works, how hex values map to ASCII characters, how to decode by hand, and how to automate the process in JavaScript and Python.
            </p>

            {/* ── What Is a Hex File ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Is a Hex File?</h2>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">hex file</strong> (short for hexadecimal file, sometimes called a <em>hex dump</em>) is a way of representing raw binary data in a human-readable format. Because every possible byte value (0–255) can be written as exactly two hexadecimal digits, a hex dump makes it possible to inspect binary content without a specialist binary viewer.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Several common formats exist:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>
                <strong className="text-foreground">Intel HEX (.hex)</strong> — a structured text format used for microcontroller firmware, EEPROM content, and programmable logic. Each line is a record with a defined structure (covered later in this guide).
              </li>
              <li>
                <strong className="text-foreground">Motorola S-record (.srec, .mot)</strong> — similar to Intel HEX but uses a different record prefix and checksum scheme; common in embedded development for Freescale/NXP processors.
              </li>
              <li>
                <strong className="text-foreground">Plain hex dumps</strong> — the output of tools such as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">xxd</code> or <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hexdump</code> on Linux/macOS. These are unstructured: each row shows an address offset followed by byte values in hex, often with a printable-ASCII preview column on the right.
              </li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              When most people say "decode a hex file" they mean one of two things: converting a raw hex string (like the output of <code className="font-mono text-sm bg-secondary/60 px-1 rounded">xxd</code>) back into text, or parsing a structured Intel HEX or S-record file to extract the binary payload. This guide covers both.
            </p>

            {/* ── Hexadecimal Number System ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Hexadecimal Number System</h2>
            <p className="text-base text-muted-foreground mb-4">
              Hexadecimal is a <strong className="text-foreground">base-16</strong> number system. Decimal uses digits 0–9 (ten symbols); hexadecimal extends this with six letters: A represents 10, B represents 11, C represents 12, D represents 13, E represents 14, and F represents 15.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              A single hexadecimal digit can represent values from 0 to 15 — exactly four binary bits (a <em>nibble</em>). Two hex digits together represent eight bits — one byte — with values from <code className="font-mono text-sm bg-secondary/60 px-1 rounded">00</code> (decimal 0) to <code className="font-mono text-sm bg-secondary/60 px-1 rounded">FF</code> (decimal 255). This is why hex is so convenient for binary data: every byte maps to exactly one two-character hex pair, no more, no less.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              To convert a two-digit hex value to decimal, multiply the first digit by 16 and add the second. For example:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">48</code> hex → 4 × 16 + 8 = 64 + 8 = <strong className="text-foreground">72</strong> decimal</li>
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">41</code> hex → 4 × 16 + 1 = 64 + 1 = <strong className="text-foreground">65</strong> decimal</li>
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">FF</code> hex → 15 × 16 + 15 = 240 + 15 = <strong className="text-foreground">255</strong> decimal</li>
            </ul>

            {/* ── Hex to ASCII ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How Hex Maps to ASCII Text</h2>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">ASCII standard</strong> assigns a numeric value (0–127) to each printable character and control code. Because these values fit inside one byte, every ASCII character can be written as a two-digit hex pair. Our{' '}
              <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">
                guide to ASCII character encoding
              </Link>{' '}
              goes deeper into the history and structure of the standard; here we focus on the practical mapping.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              Two quick examples to make this concrete:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">48 65 6C 6C 6F</code> → <strong className="text-foreground">Hello</strong></li>
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">57 6F 72 6C 64</code> → <strong className="text-foreground">World</strong></li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ASCII Hex Reference Table</h3>
            <p className="text-base text-muted-foreground mb-4">
              The table below covers the printable ASCII ranges you will encounter most often. Use our{' '}
              <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII decoder tool</Link>{' '}
              to look up any value interactively.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[420px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Character</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Hex</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Decimal</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Character</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Hex</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Decimal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['Space', '20', '32', 'a', '61', '97'],
                    ['0', '30', '48', 'b', '62', '98'],
                    ['1', '31', '49', 'c', '63', '99'],
                    ['2', '32', '50', 'd', '64', '100'],
                    ['3', '33', '51', 'e', '65', '101'],
                    ['4', '34', '52', 'f', '66', '102'],
                    ['5', '35', '53', 'g', '67', '103'],
                    ['6', '36', '54', 'h', '68', '104'],
                    ['7', '37', '55', 'i', '69', '105'],
                    ['8', '38', '56', 'j', '6A', '106'],
                    ['9', '39', '57', 'k', '6B', '107'],
                    ['A', '41', '65', 'l', '6C', '108'],
                    ['B', '42', '66', 'm', '6D', '109'],
                    ['C', '43', '67', 'n', '6E', '110'],
                    ['D', '44', '68', 'o', '6F', '111'],
                    ['E', '45', '69', 'p', '70', '112'],
                    ['F', '46', '70', 'q', '71', '113'],
                    ['G', '47', '71', 'r', '72', '114'],
                    ['H', '48', '72', 's', '73', '115'],
                    ['I', '49', '73', 't', '74', '116'],
                    ['J', '4A', '74', 'u', '75', '117'],
                    ['K', '4B', '75', 'v', '76', '118'],
                    ['L', '4C', '76', 'w', '77', '119'],
                    ['M', '4D', '77', 'x', '78', '120'],
                    ['N', '4E', '78', 'y', '79', '121'],
                    ['O', '4F', '79', 'z', '7A', '122'],
                    ['P', '50', '80', '', '', ''],
                    ['Q', '51', '81', '', '', ''],
                    ['R', '52', '82', '', '', ''],
                    ['S', '53', '83', '', '', ''],
                    ['T', '54', '84', '', '', ''],
                    ['U', '55', '85', '', '', ''],
                    ['V', '56', '86', '', '', ''],
                    ['W', '57', '87', '', '', ''],
                    ['X', '58', '88', '', '', ''],
                    ['Y', '59', '89', '', '', ''],
                    ['Z', '5A', '90', '', '', ''],
                  ].map(([c1, h1, d1, c2, h2, d2], i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="py-1.5 px-3 font-mono font-bold text-foreground text-sm">{c1}</td>
                      <td className="py-1.5 px-3 font-mono text-primary text-sm">{h1}</td>
                      <td className="py-1.5 px-3 text-muted-foreground text-sm">{d1}</td>
                      <td className="py-1.5 px-3 font-mono font-bold text-foreground text-sm">{c2}</td>
                      <td className="py-1.5 px-3 font-mono text-primary text-sm">{h2}</td>
                      <td className="py-1.5 px-3 text-muted-foreground text-sm">{d2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Step by Step: Manual ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Step-by-Step: Decode a Hex String to Text Manually</h2>
            <p className="text-base text-muted-foreground mb-4">
              Let&apos;s decode the hex string <code className="font-mono text-sm bg-secondary/60 px-1 rounded">48 65 6C 6C 6F</code> by hand. The same process applies whether the bytes are space-separated or written as a continuous string like <code className="font-mono text-sm bg-secondary/60 px-1 rounded">48656C6C6F</code>.
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Step 1 — Split the hex string into two-character pairs.</strong><br />
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded block mt-1 p-2">48656C6C6F  →  48  65  6C  6C  6F</code>
                If bytes are already space-separated, you can skip this step.
              </li>
              <li>
                <strong className="text-foreground">Step 2 — Convert each pair from base-16 to base-10.</strong><br />
                <ul className="list-none mt-2 space-y-1">
                  <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">48</code> → 4 × 16 + 8 = <strong className="text-foreground">72</strong></li>
                  <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">65</code> → 6 × 16 + 5 = <strong className="text-foreground">101</strong></li>
                  <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">6C</code> → 6 × 16 + 12 = <strong className="text-foreground">108</strong></li>
                  <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">6C</code> → <strong className="text-foreground">108</strong></li>
                  <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">6F</code> → 6 × 16 + 15 = <strong className="text-foreground">111</strong></li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">Step 3 — Look up the ASCII character for each decimal value.</strong><br />
                <ul className="list-none mt-2 space-y-1">
                  <li>72 → <strong className="text-foreground">H</strong></li>
                  <li>101 → <strong className="text-foreground">e</strong></li>
                  <li>108 → <strong className="text-foreground">l</strong></li>
                  <li>108 → <strong className="text-foreground">l</strong></li>
                  <li>111 → <strong className="text-foreground">o</strong></li>
                </ul>
              </li>
              <li>
                <strong className="text-foreground">Step 4 — Concatenate all characters.</strong><br />
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded block mt-1 p-2">H + e + l + l + o  =  <strong>Hello</strong></code>
              </li>
            </ol>

            {/* ── JavaScript ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Decoding Hex in JavaScript</h2>
            <p className="text-base text-muted-foreground mb-4">
              JavaScript provides two built-in functions that make hex decoding straightforward:{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">parseInt(string, radix)</code> to convert a hex pair to a decimal integer, and{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">String.fromCharCode(n)</code> to turn that integer into an ASCII character.
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`// Convert a single hex pair to a character
parseInt('48', 16)        // → 72  (decimal)
String.fromCharCode(72)   // → 'H'

// Decode a full hex string (space-separated or continuous)
function hexToText(hex) {
  // Remove spaces and split into pairs
  const pairs = hex.replace(/\\s+/g, '').match(/.{1,2}/g) || []
  return pairs
    .map(pair => String.fromCharCode(parseInt(pair, 16)))
    .join('')
}

hexToText('48 65 6C 6C 6F')  // → 'Hello'
hexToText('57 6F 72 6C 64')  // → 'World'
hexToText('48656C6C6F')      // → 'Hello'`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              The key call is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">parseInt(pair, 16)</code> — the second argument <code className="font-mono text-sm bg-secondary/60 px-1 rounded">16</code> tells JavaScript to treat the string as a base-16 number. Without it, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">parseInt</code> would default to base-10 and return incorrect results for values containing A–F.
            </p>

            {/* ── Python ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Decoding Hex in Python</h2>
            <p className="text-base text-muted-foreground mb-4">
              Python&apos;s standard library has first-class support for hex decoding. The cleanest approach uses{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes.fromhex()</code>, which accepts a hex string (with or without spaces, as of Python 3.7) and returns a <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code> object. Calling <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.decode()</code> on that object gives you a Python string.
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`# Decode a continuous hex string
bytes.fromhex('48656C6C6F').decode('utf-8')
# → 'Hello'

# Spaces are also accepted in Python 3.7+
bytes.fromhex('48 65 6C 6C 6F').decode('utf-8')
# → 'Hello'

bytes.fromhex('57 6F 72 6C 64').decode('utf-8')
# → 'World'

# For a hex string from a variable:
hex_str = '48656C6C6F20576F726C64'
result = bytes.fromhex(hex_str).decode('utf-8')
print(result)  # → 'Hello World'`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              If the hex data does not represent valid UTF-8 (for example, it is a binary file or firmware image), <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.decode('utf-8')</code> will raise a <code className="font-mono text-sm bg-secondary/60 px-1 rounded">UnicodeDecodeError</code>. In that case, use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.decode('latin-1')</code> to get a character for every byte value, or omit <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.decode()</code> entirely and work with the raw <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code> object.
            </p>

            {/* ── Intel HEX ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Intel HEX File Format</h2>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">Intel HEX format</strong> is a structured text representation widely used for distributing microcontroller firmware, EEPROM images, and programmable logic device configurations. Unlike a plain hex dump, each line in an Intel HEX file is a self-contained <em>record</em> with a defined structure:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`:LLAAAATT[DD...]CC

:       — Start code (colon marks the beginning of every record)
LL      — Byte count: number of data bytes in this record (hex)
AAAA    — Address: 16-bit start address for the data (hex)
TT      — Record type (hex):
            00 = Data
            01 = End Of File
            02 = Extended Segment Address
            03 = Start Segment Address
            04 = Extended Linear Address
            05 = Start Linear Address
DD...   — Data bytes (LL pairs of hex digits)
CC      — Checksum: two's complement of the sum of all bytes
          in LL, AAAA, TT, and DD, truncated to one byte`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              A typical data record looks like this:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`:10 0100 00 214601360121470136007EFE09D2190140 45`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              Here <code className="font-mono text-sm bg-secondary/60 px-1 rounded">10</code> (hex) = 16 bytes of data, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0100</code> is the target memory address, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">00</code> is the data record type, the next 32 hex characters are the 16 data bytes, and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">45</code> is the checksum. Intel HEX files are not intended to be decoded as ASCII text — they contain binary machine code or raw memory images destined for a hardware programmer.
            </p>

            {/* ── Tools ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Tools for Hex Decoding</h2>
            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Hex editors</strong> — <em>HxD</em> (Windows, free) and <em>Hex Fiend</em> (macOS, free) let you open any file, view its raw bytes in hex, and edit them. They also show the ASCII preview column so you can see readable text alongside the hex values.
              </li>
              <li>
                <strong className="text-foreground">xxd (Linux/macOS)</strong> — a command-line tool that creates hex dumps and can reverse them. Run <code className="font-mono text-sm bg-secondary/60 px-1 rounded">xxd file.bin</code> to dump, and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">xxd -r hexdump.txt output.bin</code> to reverse a dump back to binary.
              </li>
              <li>
                <strong className="text-foreground">hexdump (Linux)</strong> — similar to xxd; <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hexdump -C file.bin</code> prints both the hex values and a printable-ASCII representation on each line.
              </li>
              <li>
                <strong className="text-foreground">Online hex decoders</strong> — browser-based tools let you paste a hex string and see the decoded text instantly. Our{' '}
                <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII decoder tool</Link>{' '}
                handles hex-to-text conversion without any software installation.
              </li>
            </ul>

            {/* ── Pitfalls ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Pitfalls When Decoding Hex Files</h2>

            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 my-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Not every hex file contains readable text</h3>
              <p className="text-sm text-muted-foreground">
                This is the most common misunderstanding. Images (JPEG, PNG), executables (ELF, PE), audio files (MP3, WAV), and firmware binaries all contain non-text byte sequences. Decoding their hex as ASCII produces garbled characters or raises errors — not because something is wrong with your decoder, but because the data was never text in the first place. Always know the original data type before expecting readable output.
              </p>
            </div>

            <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Odd-length hex strings</strong> — a valid hex string always has an even number of characters (every byte is two digits). An odd-length string suggests truncation or a formatting error.
              </li>
              <li>
                <strong className="text-foreground">Encoding assumptions</strong> — ASCII only covers code points 0–127. If the data uses extended characters (accents, emoji, non-Latin scripts), it is likely UTF-8, UTF-16, or another encoding. Decoding it as ASCII will misinterpret multi-byte sequences.
              </li>
              <li>
                <strong className="text-foreground">Confusing Intel HEX data with raw binary</strong> — Intel HEX records contain a header, address, and checksum around the actual payload. You cannot simply decode the entire file as ASCII; you need to parse the record structure and extract only the data bytes.
              </li>
              <li>
                <strong className="text-foreground">Byte order (endianness)</strong> — multi-byte values (16-bit integers, 32-bit floats) are stored in either little-endian or big-endian order. If you are decoding numeric data rather than text, byte order matters.
              </li>
            </ul>

            {/* ── FAQ ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is a hex file?</h3>
            <p className="text-base text-muted-foreground mb-4">
              A hex file (also called a hex dump) is a representation of binary data where each byte is shown as two hexadecimal digits (0–9, A–F). Common formats include Intel HEX (.hex), Motorola S-record (.srec), and plain hex dumps from tools like <code className="font-mono text-sm bg-secondary/60 px-1 rounded">xxd</code> or <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hexdump</code>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a hex string to text manually?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Split the string into two-character pairs. Convert each pair from base-16 to decimal. Look up that decimal value in the ASCII table to find the character. Concatenate all characters. For example, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">48 65 6C 6C 6F</code> → 72, 101, 108, 108, 111 → <strong className="text-foreground">Hello</strong>. Use our{' '}
              <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII decoder tool</Link>{' '}
              to do this instantly in the browser.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a hex file in Python?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes.fromhex(hex_string).decode(&apos;utf-8&apos;)</code>. For example, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes.fromhex(&apos;48656C6C6F&apos;).decode(&apos;utf-8&apos;)</code> returns <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Hello</code>. Python 3.7 and later also accept space-separated hex strings directly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode hex in JavaScript?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">parseInt(pair, 16)</code> to convert each two-character hex pair to a decimal integer, then <code className="font-mono text-sm bg-secondary/60 px-1 rounded">String.fromCharCode(n)</code> to get the ASCII character. For example, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">String.fromCharCode(parseInt(&apos;48&apos;, 16))</code> returns <code className="font-mono text-sm bg-secondary/60 px-1 rounded">H</code>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can every hex file be decoded to readable text?</h3>
            <p className="text-base text-muted-foreground mb-4">
              No. Images, executables, audio files, and firmware binaries are all stored as hex in a hex dump, but their bytes do not correspond to printable ASCII characters. Attempting to decode them as text will produce garbled output or encoding errors. Only hex data that originally came from a text source will produce readable results.
            </p>

            {/* ── Related Links ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Tools and Guides</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                <Link href="/tools/ascii-decoder" className="text-primary hover:underline">ASCII Decoder Tool</Link>{' '}
                — paste a hex string and decode it to ASCII text instantly in the browser
              </li>
              <li>
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder and Decoder</Link>{' '}
                — convert between Base64 and binary data; often used alongside hex encoding
              </li>
              <li>
                <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">Understanding ASCII Character Encoding</Link>{' '}
                — a deeper look at the ASCII standard, control characters, and extended code pages
              </li>
            </ul>

          </div>
        </article>
      </main>
    </>
  )
}
