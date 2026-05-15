import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-qr-code-algorithm`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: { absolute: 'How To Decode QR Code Algorithm' },
  description:
    'Learn how to decode QR code algorithm step by step: finder patterns, format info, mask XOR, Reed-Solomon error correction, and data extraction modes explained.',
  keywords: [
    'how to decode qr code algorithm',
    'qr code decoding steps',
    'qr code algorithm explained',
    'reed solomon qr code',
    'qr code finder patterns',
    'qr code error correction levels',
    'qr code data encoding modes',
    'qr code mask pattern',
    'qr code byte mode ascii',
    'qr code format information',
  ],
  authors: [{ name: 'John Reed' }],
  creator: 'Neo',
  openGraph: {
    title: 'How To Decode QR Code Algorithm — Step-by-Step Guide',
    description:
      'A complete walkthrough of the QR code decoding algorithm: finder patterns, Reed-Solomon error correction, mask XOR, and encoding modes.',
    type: 'article',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/how-to-decode-qr-code-algorithm.jpg`,
        width: 1200,
        height: 630,
        alt: 'Diagram showing QR code decoding algorithm steps including finder patterns and data regions',
      },
    ],
    authors: [{ name: 'John Reed' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode QR Code Algorithm — Step-by-Step Guide',
    description:
      'Step-by-step breakdown of how the QR code algorithm decodes data: finder patterns, format info, Reed-Solomon, and mode indicators.',
    images: [`${BASE_URL}/images/how-to-decode-qr-code-algorithm.jpg`],
    creator: '@neo',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode QR Code Algorithm',
  description:
    'A complete step-by-step guide to the QR code decoding algorithm, covering finder patterns, format information, mask XOR, Reed-Solomon error correction, and all data encoding modes.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: {
    '@type': 'Person',
    name: 'Neo',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is the QR code decoding algorithm?',
    answer:
      'The QR code decoding algorithm is a multi-step process: first locate the three finder patterns to orient the image, then read the format information strip to get the error correction level and mask pattern, XOR-unmask the data modules, read bits in a zigzag from bottom-right, apply Reed-Solomon error correction, and finally extract the mode indicator, character count, and encoded data.',
  },
  {
    question: 'What are the four QR code encoding modes?',
    answer:
      'QR codes support four data encoding modes identified by a 4-bit mode indicator: Numeric (0001) for digits 0–9 only, Alphanumeric (0010) for A–Z, 0–9, and a small set of symbols, Byte (0100) for full ASCII/UTF-8 data, and Kanji (1000) for Japanese double-byte characters.',
  },
  {
    question: 'What is Reed-Solomon error correction in QR codes?',
    answer:
      'Reed-Solomon is a forward error-correcting code used in QR codes to allow decoding even when part of the symbol is damaged or obscured. QR codes come in four error correction levels: L (recovers ~7%), M (~15%), Q (~25%), and H (~30%) of data.',
  },
  {
    question: 'How does the QR code mask pattern work?',
    answer:
      'After data bits are placed in the QR grid, a mask pattern is XOR-applied to the data modules to avoid large uniform areas that would confuse scanners. There are 8 possible mask patterns (numbered 0–7). The mask pattern number is stored in the format information strip so decoders can reverse it.',
  },
  {
    question: 'Can a damaged QR code still be decoded?',
    answer:
      'Yes. Thanks to Reed-Solomon error correction, a QR code with error level H can still be correctly decoded even if up to 30% of its modules are damaged, dirty, or obscured. This is why logos are often placed in the center of QR codes — the redundancy absorbs the loss.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'How To Decode QR Code Algorithm', url: PAGE_URL },
])

export default function HowToDecodeQRCodeAlgorithmPage() {
  return (
    <main>
      <article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <div className="prose prose-invert max-w-none max-w-4xl mx-auto px-4 py-12 md:py-16">

          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              How To Decode QR Code Algorithm
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              How To Decode QR Code Algorithm is a surprisingly structured process — once you
              understand the layers of finder patterns, format strips, mask XOR, and Reed-Solomon
              error correction, the black-and-white grid becomes completely readable by hand or code.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>By Neo</span>
              <span>•</span>
              <time dateTime={PUBLISHED}>May 14, 2026</time>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 bg-secondary/50 p-6 rounded-lg border border-border">
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-white not-prose">Table of Contents</h2>
            <ul className="space-y-2 text-sm not-prose list-none pl-0">
              <li><a href="#what-is-a-qr-code" className="text-primary hover:underline">1. What Is a QR Code?</a></li>
              <li><a href="#encoding-modes" className="text-primary hover:underline">2. QR Code Data Encoding Modes</a></li>
              <li><a href="#decoding-steps" className="text-primary hover:underline">3. How the QR Code Algorithm Decodes Step by Step</a></li>
              <li><a href="#reed-solomon" className="text-primary hover:underline">4. Reed-Solomon Error Correction</a></li>
              <li><a href="#practical-decoding" className="text-primary hover:underline">5. Practical Online QR Decoding</a></li>
              <li><a href="#what-qr-encodes" className="text-primary hover:underline">6. What QR Codes Actually Encode</a></li>
              <li><a href="#faq" className="text-primary hover:underline">7. FAQ</a></li>
            </ul>
          </nav>

          {/* Section 1 — What Is a QR Code */}
          <section id="what-is-a-qr-code" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What Is a QR Code?</h2>
            <p className="text-lg leading-relaxed text-foreground">
              A QR (Quick Response) code is a two-dimensional matrix barcode invented by Denso Wave
              in 1994. Unlike a traditional 1D barcode that encodes data in one axis of parallel
              lines, a QR code stores data in a grid of black and white square modules arranged
              in a square pattern. The physical size of that grid is called the <strong>version</strong>
              — Version 1 is 21×21 modules, and each additional version adds 4 modules per side, up
              to Version 40 at 177×177 modules.
            </p>

            <h3 className="text-2xl font-semibold mt-6 mb-3 text-black dark:text-white">Anatomy of a QR Code</h3>
            <p className="text-lg leading-relaxed text-foreground">
              Every QR code shares a fixed structure regardless of its version:
            </p>
            <ul className="mt-4 ml-6 space-y-3 list-disc text-lg text-foreground">
              <li>
                <strong>Finder Patterns:</strong> Three identical 7×7 squares located in the
                top-left, top-right, and bottom-left corners. Their distinctive pattern of
                concentric black/white/black rings allows scanners to detect the code from any
                angle and calculate its orientation.
              </li>
              <li>
                <strong>Separator:</strong> A one-module-wide white border around each finder
                pattern to visually isolate it from the data area.
              </li>
              <li>
                <strong>Timing Patterns:</strong> Alternating black/white modules running
                horizontally and vertically between the finder patterns, starting at row/column 6.
                They establish the module grid coordinate system.
              </li>
              <li>
                <strong>Alignment Patterns:</strong> Smaller 5×5 positioning squares placed
                throughout the grid in Version 2 and above to compensate for perspective distortion
                when reading from an angle.
              </li>
              <li>
                <strong>Format Information Strip:</strong> Two copies of a 15-bit sequence placed
                around the top-left finder pattern encoding the error correction level and mask
                pattern number. This is the first thing a decoder reads.
              </li>
              <li>
                <strong>Data and Error Correction Region:</strong> The remaining modules hold the
                actual encoded payload interleaved with Reed-Solomon error correction codewords.
              </li>
            </ul>
          </section>

          {/* Section 2 — Encoding Modes */}
          <section id="encoding-modes" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">QR Code Data Encoding Modes</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Before data bits are placed in the grid, the encoder chooses an encoding mode that
              determines how characters are packed into bits. Each mode begins with a 4-bit
              <strong> mode indicator</strong> so the decoder knows how to interpret what follows.
              Choosing the most compact mode for the payload produces a smaller, denser QR code.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary text-foreground">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Mode</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Mode Indicator (4 bits)</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Character Set</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Bits per Character</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">Numeric</td>
                    <td className="border border-border px-4 py-3 font-mono">0001</td>
                    <td className="border border-border px-4 py-3">Digits 0–9 only</td>
                    <td className="border border-border px-4 py-3">~3.33 (groups of 3 in 10 bits)</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">Alphanumeric</td>
                    <td className="border border-border px-4 py-3 font-mono">0010</td>
                    <td className="border border-border px-4 py-3">A–Z, 0–9, space, $%*+-./: </td>
                    <td className="border border-border px-4 py-3">~5.5 (pairs in 11 bits)</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">Byte</td>
                    <td className="border border-border px-4 py-3 font-mono">0100</td>
                    <td className="border border-border px-4 py-3">Full ASCII / UTF-8 (ISO 8859-1)</td>
                    <td className="border border-border px-4 py-3">8 bits per character</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">Kanji</td>
                    <td className="border border-border px-4 py-3 font-mono">1000</td>
                    <td className="border border-border px-4 py-3">Shift JIS double-byte Japanese characters</td>
                    <td className="border border-border px-4 py-3">13 bits per character</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground">
              The mode indicator is followed by a <strong>character count indicator</strong> whose
              bit-length depends on both the mode and the QR version, and then the actual encoded
              characters. Byte mode is the most versatile — it passes raw octets straight through,
              which is why{' '}
              <Link href="/tools/ascii-decoder" className="text-primary hover:underline">
                Byte mode uses ASCII/UTF-8 character codes
              </Link>{' '}
              that map directly to standard ASCII values.
            </p>
          </section>

          {/* Section 3 — Decoding Steps */}
          <section id="decoding-steps" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
              How the QR Code Algorithm Decodes Step by Step
            </h2>
            <p className="text-lg leading-relaxed text-foreground">
              A QR code decoder — whether running in a phone camera, a web app, or your own code —
              follows these six deterministic steps in sequence:
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 1: Locate Finder Patterns to Orient the Image
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              The decoder scans the image for the three distinctive finder patterns — concentric
              7×7, 5×5, and 3×3 squares — in three corners. The ratio of black to white modules
              crossing any finder pattern is always 1:1:3:1:1, making them detectable from any
              rotation or partial perspective. Once found, their relative positions define which
              corner is top-left, establish the module grid size, and correct for any rotation or
              tilt in the captured image.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 2: Read Format Information (Error Correction Level + Mask Pattern)
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              The format information strip sits immediately adjacent to the top-left finder pattern
              (with a duplicate copy near the other two finders as backup). It encodes 15 bits: 2
              bits for the error correction level and 3 bits for the mask pattern number, all
              protected by 10 BCH error-correcting bits. The decoder reads this strip first because
              every subsequent step depends on knowing the mask pattern.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 3: Unmask the Data Modules Using XOR
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              QR encoders apply one of eight mask patterns to the data region to prevent large
              uniform areas of black or white that would confuse scanners. The mask is a bitwise
              XOR: dark modules stay dark where the mask is 0, and flip where it is 1. Decoding
              simply re-applies the same XOR operation to reverse it — a given module&apos;s
              decoded bit equals its raw value XOR the mask bit at that position.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 4: Read Data Bits in a Zigzag Pattern from Bottom-Right
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              Data modules are read in 2-column-wide vertical strips starting at the bottom-right
              corner of the grid and snaking upward. Within each 2-module-wide strip the bits
              alternate right-column/left-column as they travel up or down. Functional modules
              (finder patterns, timing, alignment, format info) are skipped automatically — the
              zigzag path treats them as if they do not exist. This produces the complete ordered
              stream of data and error correction bits.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 5: Apply Reed-Solomon Error Correction
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              The raw bit stream is split into 8-bit codewords, which are further divided into
              data codewords and error correction codewords. Reed-Solomon decoding checks the
              error correction codewords against the data codewords and repairs any differences.
              Depending on the error correction level, up to 7–30% of codewords can be incorrect
              and the decoder will still recover the original data perfectly.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-3 text-black dark:text-white">
              Step 6: Extract Mode Indicator, Character Count, and Data
            </h3>
            <p className="text-lg leading-relaxed text-foreground">
              After error correction, the decoder reads the first 4 bits as the mode indicator,
              then the character count indicator, then the character data itself — all according
              to the rules of the detected mode (Numeric, Alphanumeric, Byte, or Kanji). A
              terminator sequence of four zero bits signals the end of data. The resulting bytes
              are then decoded into the final string.
            </p>
          </section>

          {/* Section 4 — Reed-Solomon */}
          <section id="reed-solomon" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Reed-Solomon Error Correction</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Reed-Solomon is a polynomial-based forward error correction scheme operating over
              Galois fields. For QR codes it works at the byte (codeword) level: the encoder
              computes a set of check codewords from the data codewords using polynomial division,
              and appends them. The decoder performs the reverse: it evaluates whether the received
              codewords satisfy the polynomial equations and, if not, locates and corrects the
              errors. No retransmission is needed — the correction is entirely local.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              QR codes define four error correction levels that trade payload capacity for
              resilience. A higher level means more of the symbol area is dedicated to check
              codewords, leaving less room for data:
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-secondary text-foreground">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Level</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Name</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Data Recovery Capacity</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">L</td>
                    <td className="border border-border px-4 py-3">Low</td>
                    <td className="border border-border px-4 py-3">~7%</td>
                    <td className="border border-border px-4 py-3">Clean, undamaged environments; maximum data density</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">M</td>
                    <td className="border border-border px-4 py-3">Medium</td>
                    <td className="border border-border px-4 py-3">~15%</td>
                    <td className="border border-border px-4 py-3">General purpose; common default</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">Q</td>
                    <td className="border border-border px-4 py-3">Quartile</td>
                    <td className="border border-border px-4 py-3">~25%</td>
                    <td className="border border-border px-4 py-3">Industrial printing where smudging is common</td>
                  </tr>
                  <tr className="hover:bg-secondary/30">
                    <td className="border border-border px-4 py-3 font-mono font-bold">H</td>
                    <td className="border border-border px-4 py-3">High</td>
                    <td className="border border-border px-4 py-3">~30%</td>
                    <td className="border border-border px-4 py-3">Logo overlays; harsh physical environments</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-foreground">
              This is why a QR code with a brand logo printed over its center still scans
              correctly — the logo destroys some modules, but Reed-Solomon at level H has enough
              redundancy to reconstruct the missing data without guessing.
            </p>
          </section>

          {/* Section 5 — Practical Decoding */}
          <section id="practical-decoding" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Practical Online QR Decoding</h2>
            <p className="text-lg leading-relaxed text-foreground">
              For everyday use, most modern smartphone cameras decode QR codes automatically and
              instantly — you simply point and tap the notification. The entire six-step algorithm
              runs in milliseconds inside the camera app&apos;s image processing pipeline.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              For developers or puzzle solvers who want to inspect the raw decoded output — the
              actual mode, character count, and byte values — dedicated QR reader tools are more
              useful than a phone camera. Look for readers that expose the raw data string, the
              encoding mode used, and optionally the error correction level. This lets you verify,
              for example, whether the QR code used Byte mode and whether the payload is plain
              text, a URL, or further encoded data.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              If the decoded payload still looks scrambled after reading, the content itself may
              be encoded in a secondary scheme. Use our{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">
                Cipher Identifier
              </Link>{' '}
              to figure out what encoding or cipher was applied to the QR content. For data hidden
              inside image files rather than QR codes,{' '}
              <Link href="/tools/steganography-image-decoder" className="text-primary hover:underline">
                our steganography image decoder
              </Link>{' '}
              can extract concealed payloads embedded in image pixel data.
            </p>
          </section>

          {/* Section 6 — What QR Codes Encode */}
          <section id="what-qr-encodes" className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What QR Codes Actually Encode</h2>
            <p className="text-lg leading-relaxed text-foreground">
              Despite their visual complexity, QR codes simply store a string of characters.
              The meaning of that string is determined entirely by convention and the application
              reading it. Common payloads include:
            </p>
            <ul className="mt-4 ml-6 space-y-3 list-disc text-lg text-foreground">
              <li>
                <strong>URLs:</strong> By far the most common use case.
                The string starts with <code>https://</code> and browsers open it automatically.
              </li>
              <li>
                <strong>Plain text:</strong> Any freeform text string, often used for short
                messages, coupon codes, or serial numbers.
              </li>
              <li>
                <strong>vCard contact data:</strong> Structured text beginning with{' '}
                <code>BEGIN:VCARD</code> encoding a contact&apos;s name, phone, email, and address.
              </li>
              <li>
                <strong>WiFi credentials:</strong> A standardized format beginning with{' '}
                <code>WIFI:</code> followed by SSID, security type, and password, allowing
                one-scan network joining.
              </li>
              <li>
                <strong>Base64-encoded data:</strong>{' '}
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">
                  QR codes in Byte mode often encode Base64 data
                </Link>{' '}
                — useful for embedding binary payloads like images or cryptographic keys in a
                text-safe format that fits within the QR symbol.
              </li>
            </ul>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              Understanding the payload format is separate from understanding the QR decoding
              algorithm. The algorithm only recovers the raw string — interpreting that string
              is the next layer of the puzzle.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">FAQ</h2>
            <div className="space-y-6">

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  What is the QR code decoding algorithm?
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  The QR code decoding algorithm is a six-step deterministic process: locate the
                  three finder patterns to orient the image, read the format information strip to
                  get the error correction level and mask pattern, XOR-unmask the data modules,
                  read bits in a zigzag from bottom-right, apply Reed-Solomon error correction,
                  then extract the mode indicator, character count, and encoded data string.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  What are the four QR code encoding modes?
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  QR codes support Numeric (mode indicator <code>0001</code>) for digits 0–9,
                  Alphanumeric (<code>0010</code>) for A–Z, digits, and a few symbols,
                  Byte (<code>0100</code>) for full ASCII/UTF-8 data, and
                  Kanji (<code>1000</code>) for Japanese double-byte characters. Each mode
                  optimizes bit usage for its character set.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  What is Reed-Solomon error correction in QR codes?
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Reed-Solomon is a forward error-correcting code that lets QR codes recover
                  from physical damage. QR codes have four error correction levels — L (~7%),
                  M (~15%), Q (~25%), and H (~30%) — indicating how much of the codeword data
                  can be reconstructed even if that portion of the symbol is destroyed.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  How does the QR code mask pattern work?
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  After data bits are placed in the QR grid, one of eight mask patterns is
                  XOR-applied to the data modules to prevent large uniform areas that confuse
                  scanners. The mask pattern number (0–7) is stored in the format information
                  strip so the decoder can re-apply the same XOR and reverse it during decoding.
                </p>
              </div>

              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  Can a damaged QR code still be decoded?
                </h3>
                <p className="text-lg text-foreground leading-relaxed">
                  Yes. At error correction level H, up to 30% of the QR code&apos;s modules can
                  be damaged or obscured and the symbol still decodes correctly. This is why brand
                  logos are commonly placed over the center of QR codes — the Reed-Solomon
                  redundancy absorbs the missing data without any loss of the final payload.
                </p>
              </div>

            </div>
          </section>

        </div>
      </article>
    </main>
  )
}
