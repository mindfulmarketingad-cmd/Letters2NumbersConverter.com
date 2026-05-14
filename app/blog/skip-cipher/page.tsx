import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/skip-cipher`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'Skip Cipher — Complete Guide to the Skip Code Cipher & Decoder',
  description: 'Everything about the skip cipher (skip cypher): how it works, step-by-step encoding and decoding examples, how to crack it with a skip cipher decoder, variants, and escape room uses. Includes worked examples.',
  keywords: [
    'skip cipher',
    'skip cypher',
    'skip cipher decoder',
    'skip code cipher',
    'jump cipher',
    'transposition cipher',
    'how to decode skip cipher',
    'skip cipher examples',
    'skip cipher encryption',
    'skip cipher cryptography',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Skip Cipher — Complete Guide to the Skip Code Cipher & Decoder',
    description: 'A full guide to the skip cipher: how it works, step-by-step encoding and decoding, skip cipher decoder techniques, variants, and use in puzzles and escape rooms.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Skip Cipher Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skip Cipher — Complete Guide & Decoder',
    description: 'How the skip cipher (skip cypher) works, full encoding and decoding examples, and how to crack it.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Skip Cipher — Complete Guide to the Skip Code Cipher & Decoder',
  description: 'A complete guide to the skip cipher: how it works, step-by-step encoding and decoding, decoder techniques, variants, and use in puzzles and escape rooms.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is a skip cipher?',
    answer: 'A skip cipher (also called a jump cipher or skip code cipher) is a transposition cipher that encrypts a message by extracting every nth character from the plaintext. The skip size (n) and starting position act as the key. Because it only rearranges letters rather than replacing them, it is classified as a transposition cipher rather than a substitution cipher.',
  },
  {
    question: 'What is the difference between skip cipher and skip cypher?',
    answer: '"Skip cipher" and "skip cypher" refer to the same thing. "Cipher" is the standard spelling in American and international English; "cypher" is an older British variant that appears in some puzzle communities and escape room contexts. Both terms describe the same transposition technique.',
  },
  {
    question: 'How do you decode a skip cipher?',
    answer: 'To decode a skip cipher you need the skip size and starting position used during encryption. Place the ciphertext characters back into the positions defined by the skip pattern within a blank string of the original message length. If you don\'t know the key, use a skip cipher decoder tool to try all possible skip sizes by brute force — for short messages there are only a handful of possibilities.',
  },
  {
    question: 'What is a skip code cipher?',
    answer: 'Skip code cipher is another name for the skip cipher, often used in puzzle, geocaching, and escape room communities. The "code" in the name emphasises that the skip size functions as a numeric code or key — the sender and receiver both need to know the number to communicate.',
  },
  {
    question: 'Can a skip cipher be broken without the key?',
    answer: 'Yes. Because the key space is small (skip size must be between 2 and message_length−1, and the starting position is bounded by the skip size), a brute-force attack tries every combination in seconds. For longer messages, frequency analysis of the extracted characters can also guide the attack.',
  },
  {
    question: 'What is the difference between a skip cipher and a Caesar cipher?',
    answer: 'A Caesar cipher is a substitution cipher — it replaces each letter with a letter a fixed number of positions away in the alphabet. A skip cipher is a transposition cipher — it keeps all the original letters but rearranges their order by extracting every nth character. They are fundamentally different operations and can be combined for slightly stronger encryption.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'Skip Cipher', url: PAGE_URL },
])

export default function SkipCipherBlog() {
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
          Skip Cipher — Complete Guide to the Skip Code Cipher, Decoder, and Examples
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          The <strong className="text-foreground">skip cipher</strong> (also written <strong className="text-foreground">skip cypher</strong>, or called the <strong className="text-foreground">skip code cipher</strong> or jump cipher) is one of the simplest and most elegant transposition ciphers in classical cryptography. This guide covers everything: how it works, step-by-step encoding and decoding examples, how a <strong className="text-foreground">skip cipher decoder</strong> breaks the key, and where it appears in puzzles, escape rooms, and competitive coding challenges today.
        </p>
      </header>

      {/* TOC */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-10" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
          <li><a href="#what-is" className="hover:text-foreground hover:underline">What Is a Skip Cipher?</a></li>
          <li><a href="#skip-cypher" className="hover:text-foreground hover:underline">Skip Cipher vs Skip Cypher — Spelling Note</a></li>
          <li><a href="#how-it-works" className="hover:text-foreground hover:underline">How the Skip Cipher Works</a></li>
          <li><a href="#encoding-example" className="hover:text-foreground hover:underline">Step-by-Step Encoding Example</a></li>
          <li><a href="#reference-table" className="hover:text-foreground hover:underline">Skip Cipher Reference Table</a></li>
          <li><a href="#decoder" className="hover:text-foreground hover:underline">Skip Cipher Decoder — How to Decode & Crack It</a></li>
          <li><a href="#skip-code-cipher" className="hover:text-foreground hover:underline">Skip Code Cipher — What the Name Means</a></li>
          <li><a href="#variants" className="hover:text-foreground hover:underline">Skip Cipher Variants</a></li>
          <li><a href="#history" className="hover:text-foreground hover:underline">History and Origins</a></li>
          <li><a href="#escape-rooms" className="hover:text-foreground hover:underline">Skip Cipher in Escape Rooms and Puzzles</a></li>
          <li><a href="#vs-other-ciphers" className="hover:text-foreground hover:underline">Skip Cipher vs Other Classic Ciphers</a></li>
          <li><a href="#limitations" className="hover:text-foreground hover:underline">Security Limitations</a></li>
          <li><a href="#faq" className="hover:text-foreground hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

        {/* Section 1 */}
        <section id="what-is">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Is a Skip Cipher?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">skip cipher</strong> is a <em>transposition cipher</em> — a method of encryption that rearranges the letters of a message without changing them. Specifically, it works by extracting every nth character from the plaintext, where n is called the <strong className="text-foreground">skip size</strong> or step size. The extracted characters form the ciphertext; the remaining characters are discarded from that pass (or collected in subsequent passes).
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Because the skip cipher only <em>reorders</em> letters rather than substituting them for different symbols, the ciphertext always contains exactly the same characters as the plaintext — just in a different arrangement. This distinguishes it from substitution ciphers like the Caesar cipher or A1Z26, where the letters themselves are transformed.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The skip cipher is also commonly called the <strong className="text-foreground">jump cipher</strong> or the <strong className="text-foreground">skip code cipher</strong>. In British and puzzle communities the word is sometimes spelled <strong className="text-foreground">skip cypher</strong>, but the technique is identical.
          </p>
        </section>

        {/* Section 2 */}
        <section id="skip-cypher">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher vs Skip Cypher — Spelling Note</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            You will find this technique written both ways online:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Spelling</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Where common</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Skip cipher</td>
                  <td className="border border-border px-3 py-2 text-muted-foreground">Standard spelling in American English and most academic / technical writing</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="border border-border px-3 py-2 font-medium text-foreground">Skip cypher</td>
                  <td className="border border-border px-3 py-2 text-muted-foreground">Older British English spelling; still used by some puzzle communities, geocaching sites, and escape room creators</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Both spellings refer to exactly the same transposition technique. Throughout this guide we use <em>cipher</em>, but everything applies equally if you encountered the term written as <em>skip cypher</em>.
          </p>
        </section>

        {/* Section 3 */}
        <section id="how-it-works">
          <h2 className="text-2xl font-bold text-foreground mb-4">How the Skip Cipher Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The skip cipher has two parameters that together form the key:
          </p>
          <div className="space-y-3 mb-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Skip size (n)</h3>
              <p className="text-sm text-muted-foreground">The interval between extracted characters. A skip size of 3 means take character 1, then character 4, then character 7, and so on — every 3rd character.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-1">Starting position</h3>
              <p className="text-sm text-muted-foreground">The index of the first character to extract. Usually 1 (the very first character), but can be any position from 1 to n.</p>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Encryption algorithm:</strong>
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-1.5 mb-4">
            <li>Write out the plaintext message (spaces and punctuation may be removed or kept depending on the variant).</li>
            <li>Number each character starting from 1.</li>
            <li>Beginning at the starting position, extract every nth character.</li>
            <li>Concatenate the extracted characters — this is the ciphertext.</li>
          </ol>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Some variants perform multiple passes — after extracting every nth character in the first pass, they apply a second skip to the remaining characters, and so on. This produces a more thoroughly scrambled ciphertext at the cost of a more complex key.
          </p>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-foreground mb-1">Quick example</p>
            <p className="text-sm text-muted-foreground font-mono">Plaintext: HELLOWORLD</p>
            <p className="text-sm text-muted-foreground font-mono">Skip size: 3, Start: 1</p>
            <p className="text-sm text-muted-foreground font-mono">Positions: 1→H, 4→L, 7→O, 10→D</p>
            <p className="text-sm text-muted-foreground font-mono">Ciphertext: HLOD</p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="encoding-example">
          <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step Encoding Example</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Let&apos;s walk through a complete skip cipher encoding with the message <strong className="text-foreground">CRYPTOGRAPHY</strong> using skip size 4, starting at position 1.
          </p>

          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm font-semibold text-foreground mb-3">Step 1 — Number each character</p>
              <div className="overflow-x-auto">
                <table className="text-sm border-collapse w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      {['C','R','Y','P','T','O','G','R','A','P','H','Y'].map((c, i) => (
                        <th key={i} className="border border-border px-2 py-1 text-center text-foreground font-mono">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {[1,2,3,4,5,6,7,8,9,10,11,12].map((n, i) => (
                        <td key={i} className={`border border-border px-2 py-1 text-center text-sm ${[1,5,9].includes(n) ? 'bg-primary/20 font-bold text-foreground' : 'text-muted-foreground'}`}>{n}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Highlighted positions (1, 5, 9) are extracted at skip size 4.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Step 2 — Extract every 4th character starting at position 1</p>
              <p className="text-sm text-muted-foreground font-mono">Position 1 → C</p>
              <p className="text-sm text-muted-foreground font-mono">Position 5 → T</p>
              <p className="text-sm text-muted-foreground font-mono">Position 9 → A</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-sm font-semibold text-foreground mb-2">Step 3 — Concatenate to form ciphertext</p>
              <p className="text-sm text-muted-foreground font-mono">Ciphertext: <strong className="text-foreground">CTA</strong></p>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm font-semibold text-foreground mb-1">Decoding (reversing the process)</p>
              <p className="text-sm text-muted-foreground">To decode, create a blank string of length 12 and place C at position 1, T at position 5, and A at position 9. The remaining positions are filled in from the rest of the ciphertext using the same skip pattern applied to the leftover characters.</p>
            </div>
          </div>

          <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground font-medium mb-1">Try it yourself</p>
            <p className="text-sm text-muted-foreground">Use our free <Link href="/tools/skip-cipher" className="text-primary hover:underline font-medium">Skip Cipher Tool</Link> to encode and decode any message with any skip size — no manual counting required.</p>
          </div>
        </section>

        {/* Section 5 — Reference table */}
        <section id="reference-table">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher Reference Table</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The table below shows how the message <strong className="text-foreground">ABCDEFGHIJ</strong> (10 characters) is encoded at different skip sizes, starting at position 1. Use it to verify your manual calculations.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Skip size</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Positions extracted</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Ciphertext</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [2, '1, 3, 5, 7, 9', 'ACEGI'],
                  [3, '1, 4, 7, 10', 'ADGJ'],
                  [4, '1, 5, 9', 'AEI'],
                  [5, '1, 6', 'AF'],
                  [6, '1, 7', 'AG'],
                  [7, '1, 8', 'AH'],
                  [9, '1, 10', 'AJ'],
                ].map(([skip, pos, ct], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{skip}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground font-mono text-xs">{pos}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground font-mono font-bold text-foreground">{ct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Message: ABCDEFGHIJ (positions 1–10). Starting position: 1 throughout.</p>
        </section>

        {/* Section 6 — Decoder */}
        <section id="decoder">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher Decoder — How to Decode and Crack It</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong className="text-foreground">skip cipher decoder</strong> reverses the encryption process to recover the original plaintext. There are two scenarios:
          </p>

          <div className="space-y-5 mb-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Scenario 1 — You know the key (skip size and start position)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                This is the intended use case — the sender and receiver share the key privately. To decode:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5">
                <li>Determine the original message length from the ciphertext and the skip pattern.</li>
                <li>Create a blank array of that length.</li>
                <li>Place the first ciphertext character at position <code className="text-foreground bg-muted px-1 rounded">start</code>.</li>
                <li>Place each subsequent character at <code className="text-foreground bg-muted px-1 rounded">position + skip_size</code>.</li>
                <li>Read the array left to right to get the plaintext.</li>
              </ol>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Scenario 2 — You don&apos;t know the key (brute-force decoding)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Because the skip cipher&apos;s key space is small, a brute-force <strong className="text-foreground">skip cipher decoder</strong> can recover the plaintext without any key knowledge:
              </p>
              <ol className="list-decimal list-inside text-muted-foreground text-sm space-y-1.5 mb-3">
                <li>For each possible skip size from 2 up to <code className="text-foreground bg-muted px-1 rounded">message_length − 1</code>:</li>
                <li>For each possible starting position from 1 to that skip size:</li>
                <li>Attempt decryption and evaluate the result for English word frequency.</li>
                <li>Return the candidate with the highest linguistic plausibility score.</li>
              </ol>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For a 20-character message this means fewer than 200 trials — trivially fast for a computer, and even manageable by hand for short texts. This is why the skip cipher provides no real security for sensitive data.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-foreground font-medium mb-1">Online skip cipher decoder</p>
            <p className="text-sm text-muted-foreground">Our <Link href="/tools/skip-cipher-decoder" className="text-primary hover:underline font-medium">Skip Cipher Decoder</Link> tries all skip sizes automatically and ranks results by likelihood. Paste your ciphertext and get candidate plaintexts in seconds.</p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="skip-code-cipher">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Code Cipher — What the Name Means</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Skip code cipher</strong> is an informal name for the skip cipher, popular in puzzle, geocaching, and escape room communities. The &ldquo;code&rdquo; in the name highlights that the skip size functions as a <em>numeric code</em> or shared secret — the number itself is what the sender and receiver must agree on before communicating.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            In some puzzle contexts, &ldquo;skip code&rdquo; can also refer to a related technique where a specific word or phrase is used as the key (similar to a keyword cipher), and the skip size is derived from the letter positions of that keyword. This is a slightly more complex variant but still fundamentally relies on the same skip-extraction mechanism.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you encounter &ldquo;skip code cipher&rdquo; in a puzzle or escape room, it almost certainly means the standard skip cipher — try skip sizes 2 through 5 first, as these are by far the most common choices in designed puzzles.
          </p>
        </section>

        {/* Section 8 */}
        <section id="variants">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher Variants</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Single-pass skip cipher',
                desc: 'The basic version described above. Extract every nth character starting at a fixed position. Simple and fast, but produces a short ciphertext relative to the plaintext length unless combined with the leftover characters.',
              },
              {
                title: 'Multi-pass skip cipher',
                desc: 'After the first extraction pass, apply a second (and possibly third) skip pass to the remaining characters. The ciphertext is the concatenation of all pass results. This scrambles the message more thoroughly and makes brute-force decoding slightly harder.',
              },
              {
                title: 'Rail fence cipher (related)',
                desc: 'The rail fence cipher writes the plaintext in a zigzag pattern across n "rails" and reads off each rail in sequence. It is conceptually related to the skip cipher and can be seen as a multi-pass skip with a varying extraction pattern.',
              },
              {
                title: 'Columnar transposition (related)',
                desc: 'Columnar transposition writes the plaintext into a grid of n columns, then reads off each column in a key-defined order. The skip cipher is a special case where columns are read in a fixed stride rather than a permuted order.',
              },
              {
                title: 'Variable-stride skip cipher',
                desc: 'A more complex variant where the skip size changes at each step according to a sequence (e.g. skip 2, then 3, then 2 again). The sequence itself is the key. Much harder to brute-force but rarely seen outside academic contexts.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9 */}
        <section id="history">
          <h2 className="text-2xl font-bold text-foreground mb-4">History and Origins</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The skip cipher belongs to the broader family of transposition ciphers — one of the oldest categories of encryption, predating written records of formal cryptography. Transposition was used in ancient Sparta through the <em>scytale</em>: a staff around which a strip of leather was wound, so that the letters only formed a readable message when the strip was wrapped around a staff of the correct diameter. While the scytale is a columnar transposition device, it demonstrates the same fundamental idea as the skip cipher — rearranging characters according to a geometric key.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            During the American Civil War and both World Wars, variations of transposition ciphers including column transposition and route ciphers were used for military communications. Skip-style extraction was one of many techniques explored to add confusion to messages before more systematic machine-based encryption became available.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today the skip cipher is no longer used for real security — modern algorithms like AES are astronomically stronger — but it remains a staple of introductory cryptography courses, puzzle design, and escape rooms, where its simplicity and elegance make it ideal for teaching the core concepts of transposition-based encryption.
          </p>
        </section>

        {/* Section 10 */}
        <section id="escape-rooms">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher in Escape Rooms and Puzzles</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The skip cipher (and its variant name skip code cipher) is a popular choice for escape room designers, geocaching puzzle setters, and ARG (alternate reality game) creators for several reasons:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li>It requires only a number as the key — easy to hide in a room as a date, a combination, or a set of dots on a card</li>
            <li>Players can solve it with pencil and paper, no computer needed</li>
            <li>The process is intuitive once explained, making it satisfying to crack</li>
            <li>It looks like gibberish at first glance but decodes to meaningful text — ideal for the reveal moment in an escape room narrative</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Tips for solving skip ciphers in escape rooms:</strong>
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2">
            <li>Look for a number hidden elsewhere in the room — on a clock, a combination lock, a poster, or a code sheet. That number is almost always the skip size.</li>
            <li>Try skip sizes 2, 3, and 4 first — these are the most commonly used in designed puzzles.</li>
            <li>If the ciphertext length is a multiple of a number, that number is a strong candidate for the skip size.</li>
            <li>Use our <Link href="/tools/skip-cipher-decoder" className="text-primary hover:underline font-medium">Skip Cipher Decoder</Link> on your phone to try all values instantly if you&apos;re stuck.</li>
          </ol>
        </section>

        {/* Section 11 */}
        <section id="vs-other-ciphers">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skip Cipher vs Other Classic Ciphers</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Cipher</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Type</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Key</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letters changed?</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Brute-force difficulty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Skip cipher', 'Transposition', 'Skip size + start', 'No (rearranged only)', 'Very easy'],
                  ['Caesar cipher', 'Substitution', 'Shift number (1–25)', 'Yes', 'Very easy (26 options)'],
                  ['Atbash cipher', 'Substitution', 'None (fixed mirror)', 'Yes', 'Trivial (no key)'],
                  ['Rail fence', 'Transposition', 'Number of rails', 'No', 'Easy'],
                  ['Vigenère cipher', 'Polyalphabetic', 'Keyword', 'Yes', 'Moderate (depends on key length)'],
                  ['Pigpen cipher', 'Substitution (symbolic)', 'Fixed grid', 'Yes (to symbols)', 'Easy once grid known'],
                ].map(([cipher, type, key, changed, difficulty], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{cipher}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{type}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{key}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{changed}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{difficulty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 12 */}
        <section id="limitations">
          <h2 className="text-2xl font-bold text-foreground mb-4">Security Limitations</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The skip cipher should never be used to protect real sensitive data. Its weaknesses are fundamental:
          </p>
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-5 space-y-4">
            {[
              ['Tiny key space', 'The skip size can only range from 2 to message_length−1. For a 30-character message, that\'s at most 28 keys to try per starting position — a computer cracks this in microseconds.'],
              ['No substitution', 'All original letters are preserved. Frequency analysis of the ciphertext reveals letter distribution identical to the plaintext\'s language, providing strong statistical clues.'],
              ['Predictable structure', 'The regular stride pattern is mathematically deterministic. Given two messages encrypted with the same key, patterns emerge immediately.'],
              ['Known-plaintext vulnerability', 'If an attacker knows even a single word in the plaintext, they can derive the key almost instantly by testing which skip sizes produce that word at the correct position.'],
            ].map(([title, desc], i) => (
              <div key={i}>
                <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            For real encryption needs, use AES-256 (symmetric) or RSA/ECC (asymmetric). For educational purposes, escape rooms, and puzzles, the skip cipher remains an excellent choice precisely because it is tractable — solvers can crack it with logic and patience rather than needing a supercomputer.
          </p>
        </section>

        {/* Tools CTA */}
        <section className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-foreground mb-3">Skip Cipher Tools</h2>
          <p className="text-muted-foreground text-sm mb-4">
            Ready to encode or decode? Our free browser-based tools handle both directions instantly:
          </p>
          <ul className="space-y-3">
            {[
              ['/tools/skip-cipher', 'Skip Cipher Tool', 'Encode any message with a custom skip size and start position'],
              ['/tools/skip-cipher-decoder', 'Skip Cipher Decoder', 'Paste ciphertext and brute-force all possible skip sizes to find the plaintext'],
            ].map(([href, name, desc]) => (
              <li key={href as string}>
                <Link href={href as string} className="text-primary hover:underline font-semibold">→ {name as string}</Link>
                <p className="text-sm text-muted-foreground">{desc as string}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is a skip cipher?',
                a: 'A skip cipher (also called a jump cipher or skip code cipher) is a transposition cipher that encrypts a message by extracting every nth character from the plaintext. The skip size and starting position form the key. All original letters are preserved — only their order changes.',
              },
              {
                q: 'What is the difference between skip cipher and skip cypher?',
                a: '"Skip cipher" and "skip cypher" are the same thing. "Cipher" is the standard modern spelling; "cypher" is an older British variant still used in some puzzle and escape room communities.',
              },
              {
                q: 'How do you decode a skip cipher?',
                a: 'With the key: create a blank string of the original length, place ciphertext characters at the positions defined by the skip pattern, and read the result. Without the key: use a skip cipher decoder to try all possible skip sizes by brute force — typically just a handful of options.',
              },
              {
                q: 'What is a skip code cipher?',
                a: 'Skip code cipher is an informal name for the skip cipher, especially in puzzle and geocaching communities. It emphasises that the skip size functions as a numeric code shared between sender and receiver.',
              },
              {
                q: 'Can a skip cipher be broken without the key?',
                a: 'Yes, easily. The key space is tiny — skip size from 2 to message_length−1, with a small range of starting positions. A brute-force skip cipher decoder tries every combination in milliseconds.',
              },
              {
                q: 'What is the difference between a skip cipher and a Caesar cipher?',
                a: 'A Caesar cipher is a substitution cipher — each letter is replaced by another letter shifted a fixed number of positions in the alphabet. A skip cipher is a transposition cipher — the original letters are kept but rearranged by extracting every nth character. They are fundamentally different mechanisms.',
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
