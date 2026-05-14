import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/vigenere-cipher-decoder`
const PUBLISHED = '2026-05-13'

export const metadata: Metadata = {
  title: 'Vigenère Cipher Decoder — How to Encode and Decode Step by Step',
  description: 'Learn how the Vigenère cipher works and how to decode it step by step. Includes worked examples, the Vigenère square, how to crack it with Kasiski analysis, and a free online cipher tool.',
  keywords: [
    'vigenere cipher decoder',
    'vigenere cipher',
    'vigenere cipher decode',
    'how to decode vigenere cipher',
    'vigenere cipher online',
    'vigenere cipher example',
    'vigenere cipher encoder',
    'vigenere cipher key',
    'vigenere cipher explained',
    'polyalphabetic cipher',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Vigenère Cipher Decoder — How to Encode and Decode Step by Step',
    description: 'Step-by-step guide to encoding and decoding the Vigenère cipher. Worked examples, the Vigenère square, and how to crack it without the key using Kasiski examination.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Vigenère Cipher Decoder Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vigenère Cipher Decoder — Step-by-Step Guide',
    description: 'Learn to encode and decode the Vigenère cipher with worked examples and the Vigenère square.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Vigenère Cipher Decoder — How to Encode and Decode Step by Step',
  description: 'A complete guide to the Vigenère cipher: how it works, step-by-step encoding and decoding, the Vigenère square, and how to crack it without the key.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is the Vigenère cipher?',
    answer: 'The Vigenère cipher is a polyalphabetic substitution cipher that uses a repeating keyword to shift each letter of the plaintext by a different amount. Each letter of the key determines the shift for the corresponding letter of the message, making it significantly harder to crack than the Caesar cipher.',
  },
  {
    question: 'How do I decode a Vigenère cipher?',
    answer: 'To decode a Vigenère cipher you need the keyword. For each ciphertext letter, find its position in the alphabet (0–25), subtract the position of the corresponding key letter, and take the result modulo 26. That gives you the plaintext letter\'s position. Repeat through the message, cycling the key. Without the key, you can use Kasiski examination or the Index of Coincidence to estimate the key length, then apply frequency analysis to each Caesar sub-cipher.',
  },
  {
    question: 'What is the Vigenère square?',
    answer: 'The Vigenère square (also called the tabula recta) is a 26×26 grid of letters where each row is the alphabet shifted by one position. To encode, find the row for the key letter and the column for the plaintext letter — the cell at their intersection is the ciphertext letter. To decode, find the row for the key letter, then scan along that row to find the ciphertext letter, and the column header is the plaintext letter.',
  },
  {
    question: 'How do I crack a Vigenère cipher without the key?',
    answer: 'The two main techniques are Kasiski examination (find repeated sequences of 3+ characters in the ciphertext — the spacing between repeats is likely a multiple of the key length) and the Index of Coincidence (calculate the IC of sub-strings at every n-th character; the correct key length gives an IC close to English\'s ~0.067). Once you know the key length, each position becomes a Caesar cipher solvable with frequency analysis.',
  },
  {
    question: 'How is the Vigenère cipher different from the Caesar cipher?',
    answer: 'The Caesar cipher uses a single fixed shift for every letter in the message — making it easy to crack with frequency analysis. The Vigenère cipher uses a keyword, so each letter is shifted by a different amount depending on its position. This means the same plaintext letter can produce different ciphertext letters, defeating simple frequency analysis.',
  },
  {
    question: 'Is the Vigenère cipher secure?',
    answer: 'No — it was broken in the 19th century. While it resists simple frequency analysis, longer ciphertexts can be cracked using Kasiski examination (1863) or Friedman\'s Index of Coincidence (1920). Modern encryption uses algorithms like AES that are computationally infeasible to break.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'Vigenère Cipher Decoder', url: PAGE_URL },
])

// ── Helpers ───────────────────────────────────────────────────────────────────

function vigenereEncode(text: string, key: string): string {
  const k = key.toUpperCase().replace(/[^A-Z]/g, '')
  if (!k.length) return text
  let ki = 0
  return text.replace(/[a-zA-Z]/g, ch => {
    const base = ch <= 'Z' ? 65 : 97
    const shift = k.charCodeAt(ki % k.length) - 65
    ki++
    return String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26) + base)
  })
}

function vigenereDecode(text: string, key: string): string {
  const k = key.toUpperCase().replace(/[^A-Z]/g, '')
  if (!k.length) return text
  let ki = 0
  return text.replace(/[a-zA-Z]/g, ch => {
    const base = ch <= 'Z' ? 65 : 97
    const shift = k.charCodeAt(ki % k.length) - 65
    ki++
    return String.fromCharCode(((ch.charCodeAt(0) - base - shift + 26) % 26) + base)
  })
}

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// ── Component ─────────────────────────────────────────────────────────────────

export default function Page() {
  const exPlain = 'CRYPTOGRAPHY'
  const exKey   = 'KEY'
  const exCipher = vigenereEncode(exPlain, exKey)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              Vigenère Cipher Decoder — How to Encode and Decode Step by Step
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp; {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The Vigenère cipher is the most famous polyalphabetic substitution cipher and one of the most searched classical ciphers after the Caesar cipher. Once called &ldquo;le chiffre indéchiffrable&rdquo; (the indecipherable cipher), it was the gold standard of secret communication for three centuries — until Charles Babbage cracked it in the 1850s. This guide explains exactly how encoding and decoding works, with a full worked example, the Vigenère square, and a method for breaking it without the key. To decode or encode text right now, try our free{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> or{' '}
              <Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</Link> for related classical ciphers.
            </p>

            {/* ── What is it ── */}
                      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#what-is-the-vigenre-cipher" className="text-primary hover:underline">What Is the Vigenère Cipher?</a></li>
            <li><a href="#how-to-encode-with-the-vigenre-cipher" className="text-primary hover:underline">How to Encode with the Vigenère Cipher</a></li>
            <li><a href="#how-to-decode-the-vigenre-cipher" className="text-primary hover:underline">How to Decode the Vigenère Cipher</a></li>
            <li><a href="#the-vigenre-square-tabula-recta" className="text-primary hover:underline">The Vigenère Square (Tabula Recta)</a></li>
            <li><a href="#how-to-crack-the-vigenre-cipher-without-the-key" className="text-primary hover:underline">How to Crack the Vigenère Cipher Without the Key</a></li>
            <li><a href="#more-vigenre-cipher-examples" className="text-primary hover:underline">More Vigenère Cipher Examples</a></li>
            <li><a href="#vigenre-vs-caesar-key-differences" className="text-primary hover:underline">Vigenère vs. Caesar — Key Differences</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#explore-more-cipher-tools" className="text-primary hover:underline">Explore More Cipher Tools</a></li>
            </ol>
          </nav>

<h2 id="what-is-the-vigenre-cipher" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">What Is the Vigenère Cipher?</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Vigenère cipher is a <strong className="text-foreground">polyalphabetic substitution cipher</strong> — it uses multiple Caesar shifts instead of just one. The key is a word or phrase; each letter of the key determines the shift applied to the corresponding letter of the plaintext. When the key is shorter than the message, it simply repeats.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              For example, with key <code className="font-mono text-foreground">KEY</code>:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong className="text-foreground">K</strong> = shift 10 (K is the 11th letter, 0-indexed = 10)</li>
              <li><strong className="text-foreground">E</strong> = shift 4</li>
              <li><strong className="text-foreground">Y</strong> = shift 24</li>
              <li>Then the key cycles: K, E, Y, K, E, Y, …</li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              Because the same plaintext letter (say, <strong className="text-foreground">E</strong>) can map to three different ciphertext letters depending on which key letter aligns with it, simple letter-frequency analysis fails — the reason the cipher stumped cryptanalysts for so long.
            </p>

            {/* ── How to encode ── */}
            <h2 id="how-to-encode-with-the-vigenre-cipher" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How to Encode with the Vigenère Cipher</h2>
            <p className="text-base text-muted-foreground mb-2">
              <strong className="text-foreground">Formula:</strong>{' '}
              <code className="font-mono text-foreground">C = (P + K) mod 26</code>, where P is the plaintext letter&apos;s position (A=0 … Z=25) and K is the key letter&apos;s position.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Worked Example — Encoding &ldquo;{exPlain}&rdquo; with key &ldquo;{exKey}&rdquo;
            </h3>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Plaintext', 'Key letter', 'Plain pos (P)', 'Key pos (K)', '(P+K) mod 26', 'Ciphertext'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {exPlain.split('').map((ch, i) => {
                    const keyChar = exKey[i % exKey.length]
                    const p = ch.charCodeAt(0) - 65
                    const k = keyChar.charCodeAt(0) - 65
                    const c = (p + k) % 26
                    const cipher = String.fromCharCode(c + 65)
                    return (
                      <tr key={i}>
                        <td className="py-2 px-3 font-mono font-bold text-foreground">{ch}</td>
                        <td className="py-2 px-3 font-mono text-blue-400 font-bold">{keyChar}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">{p}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">{k}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">({p}+{k}) mod 26 = {c}</td>
                        <td className="py-2 px-3 font-mono font-bold text-green-500">{cipher}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Result: <span className="font-mono text-foreground font-bold">{exPlain}</span> → <span className="font-mono text-green-500 font-bold">{exCipher}</span>
            </p>

            {/* ── How to decode ── */}
            <h2 id="how-to-decode-the-vigenre-cipher" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How to Decode the Vigenère Cipher</h2>
            <p className="text-base text-muted-foreground mb-2">
              <strong className="text-foreground">Formula:</strong>{' '}
              <code className="font-mono text-foreground">P = (C − K + 26) mod 26</code>. Subtract the key letter&apos;s position from the ciphertext letter&apos;s position (adding 26 to avoid negative numbers), then take mod 26.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Worked Example — Decoding &ldquo;{exCipher}&rdquo; with key &ldquo;{exKey}&rdquo;
            </h3>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Ciphertext', 'Key letter', 'Cipher pos (C)', 'Key pos (K)', '(C−K+26) mod 26', 'Plaintext'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {exCipher.split('').map((ch, i) => {
                    const keyChar = exKey[i % exKey.length]
                    const c = ch.charCodeAt(0) - 65
                    const k = keyChar.charCodeAt(0) - 65
                    const p = (c - k + 26) % 26
                    const plain = String.fromCharCode(p + 65)
                    return (
                      <tr key={i}>
                        <td className="py-2 px-3 font-mono font-bold text-green-500">{ch}</td>
                        <td className="py-2 px-3 font-mono text-blue-400 font-bold">{keyChar}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">{c}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">{k}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground">({c}−{k}+26) mod 26 = {p}</td>
                        <td className="py-2 px-3 font-mono font-bold text-foreground">{plain}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Decoded result: <span className="font-mono text-green-500 font-bold">{exCipher}</span> → <span className="font-mono text-foreground font-bold">{exPlain}</span> ✓
            </p>

            {/* ── Vigenère square ── */}
            <h2 id="the-vigenre-square-tabula-recta" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Vigenère Square (Tabula Recta)</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Vigenère square is a 26×26 grid that makes manual encoding and decoding easier — no arithmetic needed. The rows are labelled by key letter (A–Z) and the columns by plaintext letter (A–Z).
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><strong className="text-foreground">To encode:</strong> find the row for the key letter, find the column for the plaintext letter — the cell is the ciphertext letter.</li>
              <li><strong className="text-foreground">To decode:</strong> find the row for the key letter, scan along that row to find the ciphertext letter — the column header is the plaintext letter.</li>
            </ul>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="text-[10px] border-collapse font-mono">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="py-1 px-1.5 text-muted-foreground font-bold w-6">↓key/plain→</th>
                    {ALPHA.map(c => <th key={c} className="py-1 px-1 text-muted-foreground font-bold">{c}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {ALPHA.map((keyLetter, row) => (
                    <tr key={keyLetter} className="border-b border-border/20 hover:bg-secondary/20">
                      <td className="py-0.5 px-1.5 text-blue-400 font-bold bg-secondary/30">{keyLetter}</td>
                      {ALPHA.map((_, col) => {
                        const cell = ALPHA[(col + row) % 26]
                        return (
                          <td key={col} className={`py-0.5 px-1 text-center ${row === 9 && col === 2 ? 'text-green-500 font-bold bg-green-500/10' : 'text-muted-foreground'}`}>
                            {cell}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Highlighted cell (row K, col C): <span className="text-green-500 font-mono font-bold">M</span> — encoding C with key letter K gives M. ✓ (matches our worked example above)
            </p>

            {/* ── Cracking it ── */}
            <h2 id="how-to-crack-the-vigenre-cipher-without-the-key" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How to Crack the Vigenère Cipher Without the Key</h2>
            <p className="text-base text-muted-foreground mb-4">
              Breaking the Vigenère cipher is a two-step process: first find the key length, then crack each sub-cipher independently.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 1 — Find the Key Length (Kasiski Examination)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Scan the ciphertext for repeated sequences of 3 or more characters. When the same sequence appears multiple times, the distance between occurrences is often a multiple of the key length. Find the GCD of all these distances — that&apos;s your likely key length.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Example:</strong> if &ldquo;XKM&rdquo; appears at positions 14 and 44, the gap is 30. If it also appears at position 74 (gap 30 again), the key length is likely a factor of 30 — so 2, 3, 5, 6, 10, 15, or 30. English words tend to be 3–8 letters, so 5 or 6 are the best guesses.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 2 — Crack Each Sub-Cipher with Frequency Analysis</h3>
            <p className="text-base text-muted-foreground mb-4">
              Once you know the key length (say, 5), split the ciphertext into 5 sub-streams: characters at positions 0, 5, 10, … then 1, 6, 11, … and so on. Each sub-stream is a simple Caesar cipher. Apply frequency analysis to each — the most common letter in English text is E (12.7%), so the most frequent ciphertext letter in each stream likely corresponds to E. The difference gives you each key letter.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Our <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">Text Frequency Analysis</Link> tool can help you analyse letter distributions quickly.
            </p>

            {/* ── More examples ── */}
            <h2 id="more-vigenre-cipher-examples" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">More Vigenère Cipher Examples</h2>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Plaintext</th>
                    <th className="text-center py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Key</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Ciphertext</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {([
                    ['HELLO WORLD', 'SECRET'],
                    ['ATTACK AT DAWN', 'LEMON'],
                    ['THE QUICK BROWN FOX', 'CIPHER'],
                    ['ESCAPE ROOM PUZZLE', 'MAZE'],
                    ['VIGENERE IS STRONG', 'BABBAGE'],
                  ] as [string, string][]).map(([plain, key]) => (
                    <tr key={plain}>
                      <td className="py-2 px-3 font-mono text-foreground text-xs">{plain}</td>
                      <td className="py-2 px-3 font-mono text-blue-400 text-xs text-center font-bold">{key}</td>
                      <td className="py-2 px-3 font-mono text-green-500 text-xs">{vigenereEncode(plain, key)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Vs Caesar ── */}
            <h2 id="vigenre-vs-caesar-key-differences" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Vigenère vs. Caesar — Key Differences</h2>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Caesar Cipher</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Vigenère Cipher</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground">
                  {[
                    ['Type', 'Monoalphabetic', 'Polyalphabetic'],
                    ['Key', 'Single number (1–25)', 'Word or phrase'],
                    ['Same letter maps to', 'Same ciphertext always', 'Different ciphertext each position'],
                    ['Crack with frequency analysis?', 'Yes — trivially', 'Not directly'],
                    ['Key space', '25 possibilities', 'Millions (depends on key length)'],
                    ['Practical security', 'None', 'None (broken 1863)'],
                  ].map(([feature, caesar, vig]) => (
                    <tr key={feature}>
                      <td className="py-2 px-3 font-semibold text-foreground text-xs">{feature}</td>
                      <td className="py-2 px-3 text-xs">{caesar}</td>
                      <td className="py-2 px-3 text-xs">{vig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── FAQ ── */}
            <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the Vigenère cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Vigenère cipher is a polyalphabetic substitution cipher that uses a repeating keyword to shift each letter of the plaintext by a different amount. Each letter of the key determines the shift for the corresponding letter of the message, making it significantly harder to crack than the Caesar cipher.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a Vigenère cipher without the key?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Use Kasiski examination to estimate the key length (look for repeated 3-letter sequences and take the GCD of their spacings), then apply frequency analysis to each Caesar sub-cipher. The most common ciphertext letter in each position likely encodes E — the difference gives you each key letter.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the Vigenère square?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Vigenère square (tabula recta) is a 26×26 grid where each row is the alphabet shifted by one position. To encode, find the row for the key letter and the column for the plaintext letter — their intersection is the ciphertext letter. To decode, find the ciphertext letter in the key letter&apos;s row; the column header is the plaintext letter.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How is the Vigenère cipher different from the Caesar cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Caesar cipher uses a single fixed shift for every letter — the same letter always produces the same ciphertext, making frequency analysis trivial. The Vigenère cipher uses a keyword so each letter is shifted differently, meaning the same plaintext letter produces different ciphertext letters at different positions. This defeats simple frequency analysis.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is the Vigenère cipher secure?</h3>
            <p className="text-base text-muted-foreground mb-4">
              No — it was broken in the 19th century using Kasiski examination and Friedman&apos;s Index of Coincidence. Modern encryption (AES, RSA, ChaCha20) is computationally infeasible to crack and should be used for any real security requirement.
            </p>

            {/* ── CTA ── */}
            <h2 id="explore-more-cipher-tools" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Explore More Cipher Tools</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Vigenère cipher is one of many classical ciphers worth learning. Try these free tools on our site:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> — brute-force all 25 shifts instantly</li>
              <li><Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</Link> — digraph substitution cipher</li>
              <li><Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link> — mirror alphabet substitution</li>
              <li><Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder</Link> — Caesar shift 13</li>
              <li><Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> — detect which cipher was used</li>
              <li><Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">Text Frequency Analysis</Link> — analyse letter distributions</li>
              <li><Link href="/tools/monoalphabetic-substitution-cipher" className="text-primary hover:underline">Monoalphabetic Substitution Cipher</Link> — custom alphabet mappings</li>
            </ul>
          </div>
        </article>
      </main>
    </>
  )
}
