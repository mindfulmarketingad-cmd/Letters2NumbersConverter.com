import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/one-time-pad-cipher-example`
const PUBLISHED = '2026-05-15'

export const metadata: Metadata = {
  title: { absolute: 'One Time Pad Cipher Example — Step-by-Step Encryption & Decryption' },
  description: 'A complete one time pad cipher example with step-by-step worked encryption and decryption. Learn the modular arithmetic, why it is mathematically unbreakable, and what happens when the key is reused.',
  keywords: [
    'one time pad cipher example',
    'one time pad cipher',
    'one time pad encryption example',
    'one time pad decryption',
    'one time pad cipher how it works',
    'vernam cipher example',
    'otp cipher example',
    'one time pad modular arithmetic',
    'one time pad key reuse',
    'venona project one time pad',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'One Time Pad Cipher Example — Step-by-Step Encryption & Decryption',
    description: 'Worked one time pad cipher examples showing exactly how to encrypt and decrypt with modular arithmetic. Includes the HELLO/XMCKL example, ATTACK AT DAWN, binary XOR, and the VENONA key-reuse disaster.',
    type: 'article',
    url: PAGE_URL,
  },
  alternates: { canonical: PAGE_URL },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'One Time Pad Cipher Example — Step-by-Step Encryption & Decryption',
  description: 'A complete one time pad cipher example with step-by-step worked encryption and decryption using modular arithmetic.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a one-time pad cipher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A one-time pad (OTP) is a symmetric encryption technique where each letter of the plaintext is combined with a corresponding letter from a random key of equal length. The result is mathematically proven to be unbreakable when the key is truly random, used only once, and kept secret. Claude Shannon proved this in 1949.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you encrypt with a one-time pad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Convert each plaintext letter to a number (A=0, B=1, … Z=25). Add the corresponding key letter\'s number. Take the result modulo 26. Convert back to a letter. For example, H (7) + X (23) = 30, 30 mod 26 = 4 = E.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you decrypt a one-time pad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subtract the key letter\'s number from the ciphertext letter\'s number. If the result is negative, add 26. Take mod 26. Convert back to a letter. For example, E (4) − X (23) = −19, −19 + 26 = 7 = H.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is the one-time pad unbreakable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because a truly random key of the same length as the message produces ciphertext that is statistically independent of the plaintext. Every possible plaintext is equally likely to have produced the ciphertext — there is no information for an attacker to exploit. Claude Shannon proved this with information theory in 1949.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if you reuse a one-time pad key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reusing a key is catastrophic. If an attacker has two ciphertexts encrypted with the same key, XOR-ing them eliminates the key and leaves a combination of two plaintexts. Frequency analysis and cribs can then recover both messages. This is exactly how the NSA\'s VENONA project broke Soviet OTP-encrypted messages in the 1940s–1950s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the one-time pad used today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rarely. The key distribution problem — securely sharing a key as long as every message — makes it impractical for most purposes. Historically it was used on the Moscow-Washington hotline and by KGB spy networks. Quantum key distribution (QKD) is the modern approach to achieving OTP-level security at scale.',
      },
    },
  ],
}

// Alphabet lookup
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function letterToNum(ch: string): number {
  return ALPHA.indexOf(ch.toUpperCase())
}

function numToLetter(n: number): string {
  return ALPHA[((n % 26) + 26) % 26]
}

// HELLO + XMCKL encryption rows
const helloRows = [
  { plain: 'H', key: 'X' },
  { plain: 'E', key: 'M' },
  { plain: 'L', key: 'C' },
  { plain: 'L', key: 'K' },
  { plain: 'O', key: 'L' },
].map(({ plain, key }) => {
  const p = letterToNum(plain)
  const k = letterToNum(key)
  const sum = p + k
  const mod = sum % 26
  return { plain, key, p, k, sum, mod, cipher: numToLetter(mod) }
})

// EQNVZ decryption rows
const decryptRows = helloRows.map(({ cipher, key, p, k, mod }) => {
  const c = mod
  const diff = c - k
  const result = ((c - k) % 26 + 26) % 26
  return { cipher, key, c, k, diff, result, plain: numToLetter(result) }
})

// ATTACK AT DAWN rows (key: LEMON PAP AYA PO — letters only: LEMONPAPAYAPO, 13 letters)
const attackPlain = 'ATTACKATDAWN'
const attackKey   = 'LEMONPAPAYAP' // 12 letters, one per plaintext letter
const attackRows = attackPlain.split('').map((ch, i) => {
  const keyChar = attackKey[i % attackKey.length]
  const p = letterToNum(ch)
  const k = letterToNum(keyChar)
  const sum = p + k
  const mod = sum % 26
  return { plain: ch, key: keyChar, p, k, sum, mod, cipher: numToLetter(mod) }
})

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              One Time Pad Cipher Example — Step-by-Step Encryption &amp; Decryption
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp; {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The one-time pad is the only cipher in history that has been{' '}
              <strong className="text-foreground">mathematically proven to be unbreakable</strong> — not just
              computationally hard, but provably impossible to crack given a correctly generated key. This guide
              walks through every step of how it works: the modular arithmetic behind encryption and decryption,
              fully worked examples with tables, the binary XOR version used in digital systems, and the real-world
              consequences of getting it wrong. If you want to explore simpler letter-number substitutions first,
              try our{' '}
              <Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 translator</Link>{' '}
              or the{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar cipher decoder</Link>.
            </p>

            {/* Table of Contents */}
            <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
              <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
              <ol className="space-y-1.5 text-sm list-decimal list-inside">
                <li><a href="#what-is-a-one-time-pad" className="text-primary hover:underline">What Is a One-Time Pad?</a></li>
                <li><a href="#three-rules" className="text-primary hover:underline">The Three Rules That Make It Unbreakable</a></li>
                <li><a href="#mechanics" className="text-primary hover:underline">How the One-Time Pad Works — The Mechanics</a></li>
                <li><a href="#encrypt-hello" className="text-primary hover:underline">Worked Example: Encrypting &ldquo;HELLO&rdquo; Step by Step</a></li>
                <li><a href="#decrypt-eqnvz" className="text-primary hover:underline">Worked Example: Decrypting &ldquo;EQNVZ&rdquo; Back to &ldquo;HELLO&rdquo;</a></li>
                <li><a href="#longer-example" className="text-primary hover:underline">A Longer Example: Encrypting &ldquo;ATTACK AT DAWN&rdquo;</a></li>
                <li><a href="#binary-xor" className="text-primary hover:underline">The Binary/XOR Version Used in Modern Systems</a></li>
                <li><a href="#real-world-use" className="text-primary hover:underline">Real-World Use of One-Time Pads</a></li>
                <li><a href="#why-rarely-used" className="text-primary hover:underline">Why One-Time Pads Are Rarely Used Today</a></li>
                <li><a href="#venona" className="text-primary hover:underline">The VENONA Project: What Happens When You Reuse a Key</a></li>
                <li><a href="#comparison" className="text-primary hover:underline">One-Time Pad vs Other Ciphers</a></li>
                <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <h2 id="what-is-a-one-time-pad" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              What Is a One-Time Pad?
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">one-time pad (OTP)</strong> is a symmetric encryption scheme in which
              every letter (or bit) of the plaintext is combined with a corresponding letter (or bit) from a secret key
              that is the same length as the message. The key must be generated from a truly random source and must
              never be reused. Done correctly, the resulting ciphertext reveals absolutely nothing about the plaintext —
              not even to an attacker with unlimited computing power.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The concept was first patented by{' '}
              <strong className="text-foreground">Gilbert Vernam</strong> in 1917 while working at AT&amp;T Bell Labs.
              Vernam's original system used a teleprinter tape with a repeating key — which is not a true OTP because
              of the repetition. The critical improvement — using a truly random, non-repeating key — was contributed
              by <strong className="text-foreground">Joseph Mauborgne</strong>, a US Army officer, who recognised that
              a random key of equal length to the message was the key to perfect secrecy. Mauborgne and Vernam
              published the combined scheme in 1919.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Decades later, in 1949,{' '}
              <strong className="text-foreground">Claude Shannon</strong> — the father of information theory — provided
              the mathematical proof of its security in his landmark paper "Communication Theory of Secrecy Systems."
              Shannon proved that a one-time pad achieves{' '}
              <strong className="text-foreground">perfect secrecy</strong>: an attacker who intercepts the ciphertext
              gains zero additional information about the plaintext, regardless of how much computing power they use.
              This is the only cipher ever to achieve this status.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              In practice, the OTP was used heavily throughout the 20th century.{' '}
              <strong className="text-foreground">KGB spy rings</strong> carried physical pads — small books or sheets
              of paper with random numbers printed on them, to be torn off and burned after each use. The{' '}
              <strong className="text-foreground">NSA</strong> and its predecessors used OTP-based teleprinters for
              the highest-classification communications. Even the famous{' '}
              <strong className="text-foreground">Moscow–Washington hotline</strong> (the "red phone," established
              1963) originally relied on OTP-encrypted teleprinter links.
            </p>

            {/* Section 2 */}
            <h2 id="three-rules" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The Three Rules That Make It Unbreakable
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Shannon's proof of perfect secrecy depends on three strict conditions. Break any one of them and the
              cipher collapses — sometimes catastrophically. Here is what each rule means and what goes wrong when it
              is violated.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rule 1 — The Key Must Be Truly Random</h3>
            <p className="text-base text-muted-foreground mb-4">
              Not pseudo-random. Not generated by a deterministic algorithm. True randomness requires a physical
              entropy source: radioactive decay, thermal noise, quantum events. If the key is produced by a
              computer's random-number generator (which is typically a mathematical algorithm), it is predictable
              in principle. An attacker who discovers or guesses the algorithm and its seed can regenerate the
              entire key stream.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              This is not merely theoretical. In the 1990s, Netscape's SSL implementation used a pseudo-random
              generator seeded from predictable values (time of day, process ID), making it trivially breakable.
              Any cipher built on a weak random source fails regardless of how strong the underlying algorithm is.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rule 2 — The Key Must Be At Least as Long as the Message</h3>
            <p className="text-base text-muted-foreground mb-4">
              If the key is shorter than the message, it must be repeated — and any repetition immediately creates
              statistical patterns in the ciphertext. A repeated key turns the OTP into a Vigenère cipher with a
              short key, which can be broken using Kasiski examination and frequency analysis. The Vigenère cipher
              was broken in the 19th century; a repeated OTP key offers no additional protection.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              This rule is the primary practical obstacle to using OTPs at scale. To send a 1 GB encrypted file,
              you need a 1 GB pre-shared key. For a secure phone call that lasts an hour, you need the equivalent
              of an hour of random key material pre-distributed before the call begins.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rule 3 — The Key Must Never Be Reused</h3>
            <p className="text-base text-muted-foreground mb-4">
              This is the rule whose violation has the most dramatic real-world consequences. If an attacker obtains
              two ciphertexts encrypted with the same key, they can XOR (or add) them together. The key cancels out:
            </p>
            <div className="pl-4 border-l-2 border-border mb-4 space-y-2">
              <p className="text-base text-muted-foreground">
                C1 = P1 ⊕ K &nbsp; and &nbsp; C2 = P2 ⊕ K
              </p>
              <p className="text-base text-muted-foreground">
                C1 ⊕ C2 = (P1 ⊕ K) ⊕ (P2 ⊕ K) = P1 ⊕ P2
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The attacker is left with the XOR of two plaintexts — which contains enough redundancy in natural
              language to allow cryptanalysts to recover both messages using techniques called{' '}
              <strong className="text-foreground">cribbing</strong> (guessing likely words and sliding them through
              the combined stream). This is precisely how the NSA's VENONA project broke Soviet OTP-encrypted
              messages in the 1940s — the Soviets reused key pages under the pressure of wartime key production.
              More on that in the VENONA section below.
            </p>

            {/* Section 3 */}
            <h2 id="mechanics" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              How the One-Time Pad Works — The Mechanics
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              For text-based OTPs, the standard approach maps the 26 letters of the English alphabet to integers
              0–25. Every letter in the plaintext is added to the corresponding key letter using{' '}
              <strong className="text-foreground">modular arithmetic</strong>: if the sum exceeds 25, it wraps back
              around to 0 (just as a clock wraps from 12 back to 1).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Alphabet Number Table (A=0 through Z=25)</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Letter</th>
                    {ALPHA.split('').map(c => (
                      <th key={c} className="text-center px-2 py-2 font-mono text-foreground text-xs">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Number</td>
                    {ALPHA.split('').map((c, i) => (
                      <td key={c} className="text-center px-2 py-2 font-mono text-muted-foreground text-xs">{i}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Encryption formula:</strong>{' '}
              <code className="font-mono text-foreground">C = (P + K) mod 26</code>
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Decryption formula:</strong>{' '}
              <code className="font-mono text-foreground">P = (C − K + 26) mod 26</code>
              &nbsp;(adding 26 prevents negative results)
            </p>
            <p className="text-base text-muted-foreground mb-4">
              In the binary version used by computers, the operation is XOR (exclusive OR) instead of modular
              addition, but the principle is identical. XOR is its own inverse: applying the key twice returns
              the original value.
            </p>

            {/* Section 4 */}
            <h2 id="encrypt-hello" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Worked Example: Encrypting &ldquo;HELLO&rdquo; Step by Step
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Let's encrypt the plaintext <strong className="text-foreground">HELLO</strong> using the key{' '}
              <strong className="text-foreground">XMCKL</strong>. Both are five letters, matching the requirement
              that the key be at least as long as the message.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              For each position we: (1) convert the plaintext letter to a number, (2) convert the key letter to
              a number, (3) add them, (4) take the result mod 26, (5) convert back to a letter.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Plaintext', 'Plain (P)', 'Key', 'Key (K)', 'P + K', 'mod 26', 'Ciphertext'].map(h => (
                      <th key={h} className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {helloRows.map((row, i) => (
                    <tr key={i}>
                      <td className="text-center px-2 py-2 font-mono text-foreground font-bold">{row.plain}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.p}</td>
                      <td className="text-center px-2 py-2 font-mono text-blue-400 font-bold">{row.key}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.k}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.p} + {row.k} = {row.sum}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.sum} mod 26 = {row.mod}</td>
                      <td className="text-center px-2 py-2 font-mono font-bold text-green-600">{row.cipher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Result: <code className="font-mono text-foreground">HELLO</code> encrypted with key{' '}
              <code className="font-mono text-foreground">XMCKL</code> produces{' '}
              <span className="font-mono text-green-600 font-bold">EQNVZ</span>.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm text-foreground font-semibold mb-2">Step-by-step breakdown</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><strong className="text-foreground">H (7) + X (23) = 30 → 30 mod 26 = 4 → E</strong></li>
                <li>E (4) + M (12) = 16 → 16 mod 26 = 16 → Q</li>
                <li>L (11) + C (2) = 13 → 13 mod 26 = 13 → N</li>
                <li>L (11) + K (10) = 21 → 21 mod 26 = 21 → V</li>
                <li>O (14) + L (11) = 25 → 25 mod 26 = 25 → Z</li>
              </ul>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Notice that the letter H maps to E. In any monoalphabetic cipher (like Caesar), H would{' '}
              <em>always</em> map to the same output letter, making frequency analysis possible. In a one-time pad,
              the second H in a message would map to an entirely different ciphertext letter because a different key
              letter aligns with it. This is what destroys the statistical structure that frequency analysis
              exploits.
            </p>

            {/* Section 5 */}
            <h2 id="decrypt-eqnvz" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Worked Example: Decrypting &ldquo;EQNVZ&rdquo; Back to &ldquo;HELLO&rdquo;
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Decryption is the mirror image of encryption. The recipient, who holds the same key{' '}
              <strong className="text-foreground">XMCKL</strong>, subtracts each key letter's value from the
              ciphertext letter's value. If the result goes negative, adding 26 brings it back into the 0–25
              range before taking mod 26.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Formula:</strong>{' '}
              <code className="font-mono text-foreground">P = (C − K + 26) mod 26</code>
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Ciphertext', 'Cipher (C)', 'Key', 'Key (K)', 'C − K', '+ 26 if neg', 'mod 26', 'Plaintext'].map(h => (
                      <th key={h} className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {decryptRows.map((row, i) => {
                    const needsAdd = row.diff < 0
                    const adjusted = needsAdd ? row.diff + 26 : row.diff
                    return (
                      <tr key={i}>
                        <td className="text-center px-2 py-2 font-mono text-green-600 font-bold">{row.cipher}</td>
                        <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.c}</td>
                        <td className="text-center px-2 py-2 font-mono text-blue-400 font-bold">{row.key}</td>
                        <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.k}</td>
                        <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.c} − {row.k} = {row.diff}</td>
                        <td className="text-center px-2 py-2 font-mono text-muted-foreground">{needsAdd ? `${row.diff} + 26 = ${adjusted}` : '—'}</td>
                        <td className="text-center px-2 py-2 font-mono text-muted-foreground">{adjusted} mod 26 = {row.result}</td>
                        <td className="text-center px-2 py-2 font-mono text-foreground font-bold">{row.plain}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Decrypted result: <span className="font-mono text-green-600 font-bold">EQNVZ</span> →{' '}
              <code className="font-mono text-foreground">HELLO</code> ✓
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The first letter is the most instructive: E (4) minus X (23) = −19. Since −19 is negative, we add
              26 to get 7. 7 mod 26 = 7 = H. The "+26" step is simply how modular arithmetic handles negative
              numbers — it keeps the result inside the 0–25 alphabet range.
            </p>

            {/* Section 6 */}
            <h2 id="longer-example" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              A Longer Example: Encrypting &ldquo;ATTACK AT DAWN&rdquo;
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Standard OTP practice ignores spaces (they are not letters and would require special handling).
              So "ATTACK AT DAWN" becomes <strong className="text-foreground">ATTACKATDAWN</strong> (12 letters).
              We encrypt it with key <strong className="text-foreground">LEMONPAPAYAP</strong> — 12 random letters,
              one per plaintext character.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['#', 'Plain', 'P', 'Key', 'K', 'P + K', 'mod 26', 'Cipher'].map(h => (
                      <th key={h} className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {attackRows.map((row, i) => (
                    <tr key={i}>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground text-xs">{i + 1}</td>
                      <td className="text-center px-2 py-2 font-mono text-foreground font-bold">{row.plain}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.p}</td>
                      <td className="text-center px-2 py-2 font-mono text-blue-400 font-bold">{row.key}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.k}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.p} + {row.k} = {row.sum}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{row.sum} mod 26 = {row.mod}</td>
                      <td className="text-center px-2 py-2 font-mono font-bold text-green-600">{row.cipher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              Plaintext: <code className="font-mono text-foreground">ATTACKATDAWN</code>
              &nbsp;&rarr;&nbsp;
              Ciphertext: <span className="font-mono text-green-600 font-bold">
                {attackRows.map(r => r.cipher).join('')}
              </span>
            </p>
            <p className="text-base text-muted-foreground mb-4">
              To decrypt, the recipient performs the same process in reverse: subtract each key letter's value from
              the ciphertext letter's value, add 26 if negative, take mod 26. There is nothing else to know —
              no key schedule, no complex algorithm, no S-boxes. The simplicity of the OTP is both its beauty and
              its practical challenge.
            </p>

            {/* Section 7 */}
            <h2 id="binary-xor" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The Binary/XOR Version Used in Modern Systems
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              In digital systems, data is stored as bits (0s and 1s), and the natural operation for OTP encryption
              is <strong className="text-foreground">XOR</strong> (exclusive OR). XOR has the perfect property for
              encryption: applying it with the same key twice returns the original value.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">XOR Truth Table</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse max-w-xs">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase">A</th>
                    <th className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase">B</th>
                    <th className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase">A XOR B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[[0,0,0],[0,1,1],[1,0,1],[1,1,0]].map(([a,b,r]) => (
                    <tr key={`${a}${b}`}>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{a}</td>
                      <td className="text-center px-2 py-2 font-mono text-muted-foreground">{b}</td>
                      <td className="text-center px-2 py-2 font-mono text-green-600 font-bold">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Short Binary Example</h3>
            <p className="text-base text-muted-foreground mb-4">
              Suppose the plaintext byte is the letter <strong className="text-foreground">H</strong> (ASCII 72,
              binary <code className="font-mono text-foreground">01001000</code>), and the key byte is{' '}
              <code className="font-mono text-foreground">10110101</code> (a random 8-bit value).
            </p>
            <div className="pl-4 border-l-2 border-border mb-4 space-y-2">
              <p className="text-base text-muted-foreground font-mono">
                Plaintext:  <span className="text-foreground">0 1 0 0 1 0 0 0</span>  (H = 72)
              </p>
              <p className="text-base text-muted-foreground font-mono">
                Key:        <span className="text-blue-400">1 0 1 1 0 1 0 1</span>  (random)
              </p>
              <p className="text-base text-muted-foreground font-mono">
                XOR =       <span className="text-green-600 font-bold">1 1 1 1 1 1 0 1</span>  (ciphertext = 253)
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Decryption: XOR the ciphertext with the same key byte:
            </p>
            <div className="pl-4 border-l-2 border-border mb-4 space-y-2">
              <p className="text-base text-muted-foreground font-mono">
                Ciphertext: <span className="text-green-600">1 1 1 1 1 1 0 1</span>  (253)
              </p>
              <p className="text-base text-muted-foreground font-mono">
                Key:        <span className="text-blue-400">1 0 1 1 0 1 0 1</span>  (same key)
              </p>
              <p className="text-base text-muted-foreground font-mono">
                XOR =       <span className="text-foreground font-bold">0 1 0 0 1 0 0 0</span>  (H = 72) ✓
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              This XOR approach is exactly how <strong className="text-foreground">stream ciphers</strong> work.
              Modern stream ciphers like ChaCha20 use a cryptographically secure pseudo-random generator (CSPRNG)
              to produce a keystream and XOR it with the plaintext. They are computationally indistinguishable from
              a true OTP if the CSPRNG is sound — but they are not information-theoretically secure because the
              keystream is generated deterministically. A true OTP requires physical randomness at every bit.
            </p>

            {/* Section 8 */}
            <h2 id="real-world-use" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Real-World Use of One-Time Pads
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Despite its practical drawbacks, the one-time pad has been deployed in some of the most sensitive
              communication channels in history.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Moscow–Washington Hotline</h3>
            <p className="text-base text-muted-foreground mb-4">
              Established in 1963 following the Cuban Missile Crisis, the hotline (popularly but incorrectly called
              the "red phone" — it was a teleprinter, not a telephone) used OTP-encrypted teletype circuits.
              The US and Soviet Union physically exchanged key material via diplomatic courier. Each side
              maintained a stockpile of random key tapes sufficient to cover all anticipated message traffic.
              The hotline was upgraded to satellite links in 1971, with OTP encryption continuing until modern
              cryptographic systems replaced it in later decades.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">KGB Spy Networks</h3>
            <p className="text-base text-muted-foreground mb-4">
              Soviet intelligence operatives (and their American counterparts) routinely used printed OTP pads —
              small booklets or single sheets of paper with columns of random numbers. A field agent would use
              one page to encrypt a message, then physically destroy the page (burn it, eat it, dissolve it in
              water). The matching page held by Moscow's cipher clerk was used to decrypt. When done correctly,
              the system was unassailable. The problem was always human: agents who failed to destroy used pages,
              reused key material under operational pressure, or allowed pads to fall into enemy hands.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Numbers Stations</h3>
            <p className="text-base text-muted-foreground mb-4">
              Shortwave "numbers stations" — radio broadcasts of spoken or Morse-coded sequences of digits — are
              widely believed to be OTP-based communication with field agents. An agent with a pre-distributed
              pad can tune in, write down the numbers, apply the pad, and read the plaintext message. The
              broadcast is one-way and anonymous: anyone can hear the numbers, but without the pad they are
              meaningless. Numbers stations have been detected from the Cold War era through to the present day.
            </p>

            {/* Section 9 */}
            <h2 id="why-rarely-used" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Why One-Time Pads Are Rarely Used Today
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Given that the OTP is provably unbreakable, why does almost no one use it? Several fundamental
              problems make it impractical for modern communication:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Key Distribution Problem</h3>
            <p className="text-base text-muted-foreground mb-4">
              To securely transmit a message using an OTP, you must first securely transmit a key of the same
              length. If you have a secure channel to distribute the key, why not use that same channel to send
              the message itself? The OTP solves the wrong half of the problem. Public-key cryptography (RSA,
              elliptic curves) solves this elegantly by allowing two parties to establish a shared secret over
              an insecure channel — something an OTP cannot do.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Key Volume</h3>
            <p className="text-base text-muted-foreground mb-4">
              Modern communication is staggering in volume. A single 4K video stream generates roughly 25 Mbps
              of data. An hour-long call at that quality requires 11 GB of random key material — generated from
              a true physical entropy source, transmitted securely, stored securely on both ends, and destroyed
              after use. Modern symmetric ciphers like AES-256 achieve computationally infeasible security with
              a 256-bit (32-byte) key that can be used to encrypt terabytes of data. The ratio is simply
              untenable for OTPs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Catastrophic Reuse</h3>
            <p className="text-base text-muted-foreground mb-4">
              With AES or RSA, reusing a key is a bad practice but not necessarily an immediate disaster.
              With an OTP, a single reuse exposes both messages. The security is binary: perfect when used
              correctly, completely broken when not. This unforgiving nature makes large-scale deployment
              extremely hazardous.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Quantum Key Distribution (QKD)</h3>
            <p className="text-base text-muted-foreground mb-4">
              The modern solution to the key distribution problem is quantum key distribution, which uses
              quantum mechanical properties to allow two parties to generate a shared random key over an
              optical channel. Any eavesdropping disturbs the quantum states and is detectable. The generated
              key can then be used as a true OTP. QKD systems are commercially available and deployed in
              certain high-security networks (banking, government), but they require dedicated optical
              infrastructure and remain expensive. They represent the closest thing to practical OTP
              deployment in the modern world.
            </p>

            {/* Section 10 */}
            <h2 id="venona" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The VENONA Project: What Happens When You Reuse a Key
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              VENONA is the most important case study in OTP history — and a dramatic illustration of what happens
              when the key-reuse rule is broken.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              During World War II, the Soviet KGB and GRU (military intelligence) transmitted thousands of
              encrypted messages between Moscow and their agents in the United States. The messages were encrypted
              with one-time pads — a system that should have been impenetrable. But wartime pressure on Soviet
              cipher clerks led to a catastrophic shortcut: key pages were duplicated and reused. US signals
              intelligence (eventually consolidated into the NSA) began collecting these messages starting in 1943.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              In 1945, a cryptanalyst named{' '}
              <strong className="text-foreground">Gene Grabeel</strong> began the project that would become VENONA.
              By analysing pairs of ciphertexts encrypted with the same key (identified by matching numerical
              indicators), analysts could XOR messages together, eliminating the key and exposing a combination
              of two plaintexts. Using knowledge of Russian diplomatic and intelligence vocabulary as cribs —
              guessing likely words and sliding them through the combined stream — analysts slowly recovered
              fragments of both messages. Over years and decades of painstaking work, the VENONA project
              eventually decrypted or partially decrypted over 2,900 messages.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The results were historically explosive. VENONA identified numerous Soviet agents operating inside
              the United States government and military. Among those identified were:{' '}
              <strong className="text-foreground">Julius and Ethel Rosenberg</strong> (who passed atomic bomb
              secrets to the Soviets and were executed in 1953),{' '}
              <strong className="text-foreground">Alger Hiss</strong> (senior State Department official),
              and <strong className="text-foreground">Harry Dexter White</strong> (Assistant Secretary of the
              Treasury). The VENONA intercepts also contributed to identifying British spy Donald Maclean, part
              of the Cambridge Five spy ring.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              VENONA was classified until 1995. For 50 years, the evidence existed but could not be publicly
              cited because revealing it would expose US signals intelligence capabilities. The story of VENONA
              remains the definitive real-world demonstration of why the no-reuse rule is absolute.
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Key takeaway</p>
              <p className="text-sm text-muted-foreground">
                The Soviets used the provably unbreakable OTP and it was still broken — not because the
                mathematics failed, but because operational pressure led to human error. Perfect security
                theory is only as good as the humans implementing it.
              </p>
            </div>

            {/* Section 11 */}
            <h2 id="comparison" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              One-Time Pad vs Other Ciphers
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              How does the OTP compare to the other encryption schemes you are likely to encounter?
            </p>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Feature', 'One-Time Pad', 'Caesar Cipher', 'AES-256', 'RSA-2048'].map(h => (
                      <th key={h} className="text-center px-2 py-2 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground">
                  {[
                    ['Key length', 'Same as message', '1 number (1–25)', '256 bits (32 bytes)', '2048 bits (256 bytes)'],
                    ['Key type', 'Truly random', 'Fixed shift', 'Shared secret', 'Public/private pair'],
                    ['Security proof', 'Information-theoretic (perfect)', 'None — trivial to break', 'Computational (very strong)', 'Computational (strong)'],
                    ['Brute-force resistant?', 'Yes — mathematically', 'No — 25 keys to try', 'Yes — 2²⁵⁶ keys', 'Yes — factoring hard'],
                    ['Key distribution', 'Requires pre-shared key (hard)', 'Trivial but insecure', 'Requires pre-shared key', 'Public key solves this'],
                    ['Practical for internet?', 'No', 'No', 'Yes', 'Yes'],
                    ['First broken', 'Only via rule violation', '~50 BC era trivial', 'Not broken', 'Not broken (yet)'],
                    ['Invented', '1917 (Vernam/Mauborgne)', 'Used by Julius Caesar ~50 BC', '1998 (Rijndael)', '1977 (Rivest/Shamir/Adleman)'],
                  ].map(([feature, ...values]) => (
                    <tr key={feature}>
                      <td className="px-2 py-2 text-xs font-semibold text-foreground">{feature}</td>
                      {values.map((v, i) => (
                        <td key={i} className="text-center px-2 py-2 text-xs">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The takeaway from this comparison is clear. The OTP is the only cipher with a mathematical
              proof of perfect secrecy, but that proof comes with an operationally crippling requirement:
              pre-sharing a truly random key as long as every message you will ever send. AES-256 provides
              computationally infeasible security (breaking it would require more energy than the Sun will
              produce in its lifetime) with a 32-byte key that is easy to distribute. For virtually all
              practical applications, AES is the correct choice.
            </p>

            {/* Section 12 — FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is a one-time pad cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              A one-time pad is a symmetric encryption scheme where each character of the plaintext is combined
              with a character from a random key of the same length, using modular addition (for text) or XOR
              (for binary data). Claude Shannon proved in 1949 that a correctly used OTP achieves perfect secrecy
              — an eavesdropper gains zero information about the plaintext by observing the ciphertext, no matter
              how much computing power they have.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I encrypt with a one-time pad by hand?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Convert each plaintext letter to its position in the alphabet (A=0, B=1, … Z=25). Add the
              corresponding key letter's position. Take the result modulo 26. Convert the result back to a letter.
              For example: P (15) + K key letter L (11) = 26, 26 mod 26 = 0 = A. Repeat for every letter.
              Decryption reverses this: subtract the key letter's number, add 26 if negative, take mod 26.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why is the one-time pad the only unbreakable cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Because every possible plaintext is equally likely to have produced the observed ciphertext.
              Suppose the ciphertext is "EQNVZ". Without the key, this is equally consistent with the plaintext
              being "HELLO", "WORLD", "NIGHT", "FUNDS", or any other five-letter sequence. There is no
              statistical structure to exploit. Other ciphers (including AES) are computationally secure —
              breaking them requires impractical amounts of computation — but they are not information-theoretically
              secure in Shannon's sense.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between a one-time pad and a stream cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              A stream cipher (like ChaCha20 or RC4) generates a pseudo-random keystream from a short key using
              a deterministic algorithm, then XORs it with the plaintext — structurally identical to a binary OTP.
              The critical difference: the keystream is <em>deterministic</em>, not truly random. If the algorithm
              or the seed is compromised, the entire keystream can be reconstructed. A true OTP uses physically
              random key material with no algorithm to reverse-engineer. Stream ciphers offer computational
              security; OTPs offer information-theoretic security.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can a one-time pad be broken?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Not mathematically — but it can be broken practically if any of the three rules are violated.
              The VENONA project broke Soviet OTP-encrypted messages because the Soviets reused key pages.
              OTPs can also be compromised by theft of the physical pad, side-channel attacks during
              encryption/decryption, or weak random number generation. The mathematics is perfect; the
              implementation almost never is.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Who invented the one-time pad?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Gilbert Vernam of AT&amp;T Bell Labs patented the basic XOR-based encryption concept in 1917.
              US Army Major Joseph Mauborgne recognised that a truly random key (rather than a repeating tape)
              was necessary for perfect security, producing what we now call the one-time pad. Claude Shannon
              provided the mathematical proof of perfect secrecy in his 1949 paper "Communication Theory of
              Secrecy Systems."
            </p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Conclusion
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The one-time pad stands alone in cryptography: it is the only cipher with a mathematical proof of
              perfect secrecy, established by Claude Shannon in 1949 and never challenged. Its three rules —
              truly random key, key as long as the message, key never reused — are simple to state and
              devastating to violate, as the VENONA project demonstrated when Soviet cipher clerks reused key
              pages under wartime pressure and exposed a generation of spies.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              For practical use today, the OTP's key distribution problem makes it unsuitable for general
              communication. AES-256 provides security that is computationally indistinguishable from perfect
              for all real-world threat models, with a 32-byte key instead of one that matches the message length.
              Quantum key distribution is the only current technology that approaches true OTP security at scale,
              and it remains expensive and infrastructure-intensive.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              If you want to explore classical ciphers and letter-number encoding hands-on, try our free tools:
              the{' '}
              <Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 translator</Link>{' '}
              converts letters to their alphabet positions (A=1, B=2, … Z=26) — the building block of
              manual OTP arithmetic — and the{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar cipher decoder</Link>{' '}
              lets you explore the simpler cousin of the Vigenère family. Understanding these fundamentals
              gives you a genuine intuition for why the OTP's modular arithmetic works and why key randomness
              and non-reuse are so critical.
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
