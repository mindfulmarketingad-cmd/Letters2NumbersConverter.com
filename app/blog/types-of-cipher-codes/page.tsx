import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/types-of-cipher-codes`
const PUBLISHED = '2026-05-15'

export const metadata: Metadata = {
  title: { absolute: 'Types of Cipher Codes' },
  description: 'A comprehensive guide to every major type of cipher code — from ancient substitution ciphers like Caesar and Atbash to modern AES and RSA encryption. Learn how each works, its history, strengths, and weaknesses.',
  keywords: [
    'types of cipher codes',
    'types of ciphers',
    'substitution cipher',
    'transposition cipher',
    'caesar cipher',
    'vigenere cipher',
    'polyalphabetic cipher',
    'symmetric encryption',
    'asymmetric encryption',
    'classical ciphers',
    'modern encryption',
    'cipher types list',
    'cipher examples',
    'secret codes',
    'cryptography types',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Types of Cipher Codes — Complete Guide from Caesar to AES',
    description: 'Every major type of cipher explained: substitution, transposition, polyalphabetic, symmetric, asymmetric, and more. History, examples, and strengths for each.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Types of Cipher Codes Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Types of Cipher Codes — Complete Guide from Caesar to AES',
    description: 'Every major type of cipher explained: substitution, transposition, polyalphabetic, symmetric, asymmetric, and more.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Types of Cipher Codes — Complete Guide from Caesar to AES',
  description: 'A comprehensive guide to every major type of cipher code — from ancient substitution ciphers to modern AES and RSA encryption.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is the difference between a cipher and a code?',
    answer: 'A cipher operates on individual letters or bits — it transforms the plaintext character by character (or block by block) using a fixed algorithm and a key. A code, by contrast, replaces whole words, phrases, or concepts with substitute words, numbers, or symbols from a codebook. Morse code is technically a code (dots and dashes represent letters), while the Caesar cipher is a true cipher. In everyday speech the two terms are often used interchangeably.',
  },
  {
    question: 'What is the most secure cipher today?',
    answer: 'AES-256 (Advanced Encryption Standard with a 256-bit key) is the current gold standard for symmetric encryption, used by governments, militaries, and industry worldwide. For asymmetric (public-key) contexts, RSA-2048 or higher, or Elliptic Curve Cryptography (ECC) with 256-bit keys, provides equivalent security. No practical attack against AES-256 is known; a brute-force attempt would require more energy than exists in the observable universe.',
  },
  {
    question: 'What is the oldest cipher?',
    answer: 'The Scytale, used by ancient Sparta around the 7th century BC, is one of the oldest documented encryption devices. The Atbash cipher (a simple letter-reversal substitution) is also ancient, appearing in the Hebrew Bible as early as the Book of Jeremiah (composed around 600 BC). Simple substitution ciphers may predate both — some ancient Egyptian inscriptions from around 1900 BC used non-standard hieroglyphs that scholars believe may have been intentionally obfuscated.',
  },
  {
    question: 'Which cipher is used in everyday internet security?',
    answer: 'Modern TLS (Transport Layer Security) — the protocol that powers HTTPS — uses a combination of ciphers. RSA or ECC handles the initial key exchange, and then AES (usually AES-128 or AES-256 in GCM mode) encrypts the actual data stream. SHA-256 or SHA-384 hash functions verify data integrity. So when you see the padlock icon in your browser, several cipher types are working together.',
  },
  {
    question: 'What cipher did the Germans use in World War II?',
    answer: 'Germany\'s primary cipher system in WWII was the Enigma machine — an electromechanical rotor cipher device that produced a different polyalphabetic substitution for every single keypress. The Lorenz cipher ("Tunny") was used for even higher-level communications. Both were broken by Allied cryptanalysts at Bletchley Park: the Enigma by Alan Turing\'s Bombe machines (exploiting cribs and operator mistakes), and Lorenz by the Colossus computer, the world\'s first programmable electronic computer.',
  },
])

export default function Page() {
  return (
    <main className="flex-1 w-full">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
          { name: 'Home', url: BASE_URL },
          { name: 'Blog', url: `${BASE_URL}/blog` },
          { name: 'Types of Cipher Codes', url: PAGE_URL },
        ])) }}
      />

      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            Types of Cipher Codes: The Complete Encyclopedia
          </h1>

          <div className="mb-8 text-center">
            <p className="text-base text-muted-foreground">
              By <strong className="text-foreground">John Reed</strong> &middot; Updated {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <p className="text-base text-muted-foreground mb-4">
            From Julius Caesar scrawling messages in shifted Latin to mathematicians generating trillion-digit prime numbers for RSA keys, humanity has never stopped inventing new ways to hide information. This guide covers <strong className="text-foreground">every major type of cipher code</strong> — ancient and modern, simple and sophisticated — with accurate history, worked examples, and an honest assessment of how secure each one actually is.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Whether you are solving an escape room puzzle, studying cryptography, or trying to understand the lock that protects your online banking, you will find the answer here.
          </p>

          {/* TOC */}
          <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-base font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li><a href="#taxonomy" className="text-primary hover:underline">The Cipher Taxonomy: Four Key Divisions</a></li>
              <li><a href="#substitution" className="text-primary hover:underline">Substitution Ciphers</a>
                <ol className="list-[lower-alpha] list-inside ml-4 mt-1 space-y-1">
                  <li><a href="#caesar" className="text-primary hover:underline">Caesar Cipher</a></li>
                  <li><a href="#rot13" className="text-primary hover:underline">ROT13</a></li>
                  <li><a href="#atbash" className="text-primary hover:underline">Atbash Cipher</a></li>
                  <li><a href="#monoalphabetic" className="text-primary hover:underline">Simple Substitution / Monoalphabetic</a></li>
                  <li><a href="#vigenere" className="text-primary hover:underline">Vigenère Cipher</a></li>
                  <li><a href="#playfair" className="text-primary hover:underline">Playfair Cipher</a></li>
                  <li><a href="#beaufort" className="text-primary hover:underline">Beaufort Cipher</a></li>
                  <li><a href="#pigpen" className="text-primary hover:underline">Pigpen Cipher</a></li>
                  <li><a href="#polybius" className="text-primary hover:underline">Polybius Square</a></li>
                  <li><a href="#baconian" className="text-primary hover:underline">Baconian Cipher</a></li>
                  <li><a href="#a1z26" className="text-primary hover:underline">A1Z26 Cipher</a></li>
                </ol>
              </li>
              <li><a href="#transposition" className="text-primary hover:underline">Transposition Ciphers</a>
                <ol className="list-[lower-alpha] list-inside ml-4 mt-1 space-y-1">
                  <li><a href="#rail-fence" className="text-primary hover:underline">Rail Fence Cipher</a></li>
                  <li><a href="#columnar" className="text-primary hover:underline">Columnar Transposition</a></li>
                  <li><a href="#scytale" className="text-primary hover:underline">Scytale</a></li>
                </ol>
              </li>
              <li><a href="#polyalphabetic" className="text-primary hover:underline">Polyalphabetic & Rotor Ciphers</a>
                <ol className="list-[lower-alpha] list-inside ml-4 mt-1 space-y-1">
                  <li><a href="#enigma" className="text-primary hover:underline">Enigma Machine</a></li>
                  <li><a href="#otp" className="text-primary hover:underline">One-Time Pad</a></li>
                </ol>
              </li>
              <li><a href="#book-ciphers" className="text-primary hover:underline">Book & Key-Based Ciphers</a></li>
              <li><a href="#morse" className="text-primary hover:underline">Morse Code</a></li>
              <li><a href="#modern-symmetric" className="text-primary hover:underline">Modern Symmetric Encryption</a></li>
              <li><a href="#modern-asymmetric" className="text-primary hover:underline">Modern Asymmetric (Public-Key) Encryption</a></li>
              <li><a href="#hash-functions" className="text-primary hover:underline">Hash Functions</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Comparison Table</a></li>
              <li><a href="#choosing" className="text-primary hover:underline">Choosing the Right Cipher</a></li>
              <li><a href="#faq" className="text-primary hover:underline">FAQ</a></li>
            </ol>
          </nav>

          {/* ── TAXONOMY ── */}
          <h2 id="taxonomy" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            The Cipher Taxonomy: Four Key Divisions
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Before diving into individual ciphers, it helps to understand the four major axes along which all cipher types are classified. Every cipher in existence can be positioned on all four of these spectra.
          </p>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">1. Substitution vs. Transposition</h3>
            <p className="text-base text-muted-foreground mb-2">
              <strong className="text-foreground">Substitution ciphers</strong> replace each letter (or group of letters) with a different letter, symbol, or number. The positions of letters in the message stay the same, but the identities change. Example: Caesar shifts every letter forward by three positions.
            </p>
            <p className="text-base text-muted-foreground mb-0">
              <strong className="text-foreground">Transposition ciphers</strong> keep all the original letters but rearrange their order according to a fixed rule. The identity of each letter is preserved; only its position changes. Example: Rail Fence writes the message in a zigzag and reads it row by row.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">2. Symmetric vs. Asymmetric</h3>
            <p className="text-base text-muted-foreground mb-2">
              <strong className="text-foreground">Symmetric ciphers</strong> use the same key for both encryption and decryption. Both the sender and receiver must secretly share this key in advance. All classical ciphers are symmetric, as are modern ciphers like AES and DES.
            </p>
            <p className="text-base text-muted-foreground mb-0">
              <strong className="text-foreground">Asymmetric ciphers</strong> (public-key cryptography) use a mathematically linked pair of keys: a public key (shared openly) for encryption and a private key (kept secret) for decryption. RSA and ECC are the dominant examples. The concept was first published by Diffie and Hellman in 1976.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">3. Classical vs. Modern</h3>
            <p className="text-base text-muted-foreground mb-0">
              <strong className="text-foreground">Classical ciphers</strong> operate on the alphabet of natural language letters and were designed to be computed by hand or with simple mechanical devices. Nearly all classical ciphers are now considered cryptographically broken — they can be solved with frequency analysis, known-plaintext attacks, or brute force on modern computers. <strong className="text-foreground">Modern ciphers</strong> operate on binary data, are designed for electronic computation, and are evaluated using formal mathematical security proofs.
            </p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">4. Stream vs. Block (Modern Ciphers)</h3>
            <p className="text-base text-muted-foreground mb-2">
              <strong className="text-foreground">Stream ciphers</strong> encrypt one bit or byte at a time, generating a pseudorandom keystream that is XORed with the plaintext. They are fast and suitable for real-time data. Examples: RC4, ChaCha20.
            </p>
            <p className="text-base text-muted-foreground mb-0">
              <strong className="text-foreground">Block ciphers</strong> encrypt fixed-size chunks of data (e.g., 128 bits) at once using a series of mathematical rounds. AES is the premier example. Block ciphers can emulate stream ciphers through operating modes like CTR (Counter Mode).
            </p>
          </div>

          {/* ── SUBSTITUTION CIPHERS ── */}
          <h2 id="substitution" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Substitution Ciphers
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Substitution ciphers are the most numerous and historically rich category. They range from the trivially simple Caesar cipher to complex polyalphabetic systems that baffled cryptanalysts for centuries.
          </p>

          {/* Caesar */}
          <h3 id="caesar" className="text-xl font-semibold text-foreground mt-6 mb-3">
            1. Caesar Cipher (Shift Cipher)
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Caesar cipher</strong> is the oldest and simplest named cipher. The Roman historian Suetonius documented Julius Caesar's use of a shift-by-three cipher for military correspondence between roughly 58 and 50 BC, writing: "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out." Caesar always used a shift of three, but the general form — shift by any fixed amount from 1 to 25 — is called a shift cipher.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">How it works:</strong> Each letter is replaced by the letter that is <em>n</em> positions further along the alphabet, wrapping around from Z back to A (modular arithmetic, modulo 26). To decrypt, shift back by the same amount.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-2"><strong className="text-foreground">Example (shift 3):</strong></p>
            <p className="text-base text-muted-foreground mb-1">
              Plaintext: <span className="font-mono text-foreground font-bold">HELLO</span>
            </p>
            <p className="text-base text-muted-foreground mb-1">
              H+3=K &nbsp; E+3=H &nbsp; L+3=O &nbsp; L+3=O &nbsp; O+3=R
            </p>
            <p className="text-base text-muted-foreground mb-0">
              Ciphertext: <span className="font-mono text-green-600 font-bold">KHOOR</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Weakness:</strong> There are only 25 possible keys (shifts 1–25). A cryptanalyst can try all 25 in seconds by hand, or instantaneously by computer. This is called a brute-force or exhaustive-key-search attack. The Caesar cipher offers no real security — it is valuable only as a teaching tool and for puzzles.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Try our Caesar Cipher Decoder &rarr;</Link>
          </p>

          {/* ROT13 */}
          <h3 id="rot13" className="text-xl font-semibold text-foreground mt-6 mb-3">
            2. ROT13
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">ROT13</strong> ("rotate by 13") is a special case of the Caesar cipher with a shift of exactly 13. Because the English alphabet has 26 letters, shifting by 13 is its own inverse: applying ROT13 twice returns the original text. This self-inverse property means the same algorithm serves as both encoder and decoder — run it once to hide text, run it again to reveal it.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 was ubiquitous on Usenet in the 1980s and 1990s for hiding spoilers, punchlines, and offensive content, allowing readers to choose whether to decode. Reddit uses it today for the same reason via spoiler tags. ROT13 has no cryptographic value whatsoever — it is pure convenience obscurity, not security.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-1">
              Plaintext: <span className="font-mono text-foreground font-bold">HELLO</span> &rarr; <span className="font-mono text-green-600 font-bold">URYYB</span>
            </p>
            <p className="text-base text-muted-foreground mb-0">
              Apply ROT13 again: <span className="font-mono text-green-600 font-bold">URYYB</span> &rarr; <span className="font-mono text-foreground font-bold">HELLO</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">Try our ROT13 Decoder &rarr;</Link>
          </p>

          {/* Atbash */}
          <h3 id="atbash" className="text-xl font-semibold text-foreground mt-6 mb-3">
            3. Atbash Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Atbash cipher</strong> is one of the oldest known substitution ciphers, originating in ancient Hebrew cryptography. It works by reversing the alphabet: A maps to Z, B maps to Y, C maps to X, and so on. The name "Atbash" is itself a cipher — it is formed from the first, last, second, and second-to-last letters of the Hebrew alphabet: Aleph, Tav, Beth, Shin.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Atbash appears in the Hebrew Bible. The Book of Jeremiah (written around 600 BC) uses Atbash to encode <em>Babel</em> (Babylon) as <em>Sheshach</em> (Jeremiah 25:26 and 51:41), likely as a way to speak critically about Babylon while maintaining a degree of plausible deniability. Like ROT13, Atbash is self-inverse — applying it twice restores the original.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-1">
              Plaintext: <span className="font-mono text-foreground font-bold">HELLO</span>
            </p>
            <p className="text-base text-muted-foreground mb-1">
              H&rarr;S &nbsp; E&rarr;V &nbsp; L&rarr;O &nbsp; L&rarr;O &nbsp; O&rarr;L
            </p>
            <p className="text-base text-muted-foreground mb-0">
              Ciphertext: <span className="font-mono text-green-600 font-bold">SVOOL</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Try our Atbash Cipher Decoder &rarr;</Link>
          </p>

          {/* Monoalphabetic */}
          <h3 id="monoalphabetic" className="text-xl font-semibold text-foreground mt-6 mb-3">
            4. Simple Substitution / Monoalphabetic Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            A <strong className="text-foreground">simple substitution cipher</strong> (also called a monoalphabetic cipher) replaces each letter of the plaintext with a different, fixed letter from a scrambled alphabet. Unlike the Caesar cipher where the permutation is a simple shift, a general monoalphabetic cipher can use any permutation of the 26 letters.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The number of possible keys is 26! (26 factorial), which equals approximately 4 × 10<sup>26</sup> — far too many to brute-force. However, monoalphabetic ciphers are still easily broken because each letter is always encrypted the same way. In English text, the letter E appears about 12.7% of the time, T about 9.1%, A about 8.2%, and so on. By counting letter frequencies in the ciphertext and matching them to known English frequencies, a cryptanalyst can recover the key in minutes — a technique called <strong className="text-foreground">frequency analysis</strong>, developed by Arab scholar Al-Kindi around 850 AD.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            A popular variant is the <strong className="text-foreground">keyword cipher</strong>: write a keyword (removing repeated letters), then append the remaining unused letters of the alphabet in order. This becomes the cipher alphabet. For example, with keyword KEYWORD: the cipher alphabet starts K, E, Y, W, O, R, D, then A, B, C, F, G, H, I, J, L, M, N, P, Q, S, T, U, V, X, Z.
          </p>

          {/* Vigenere */}
          <h3 id="vigenere" className="text-xl font-semibold text-foreground mt-6 mb-3">
            5. Vigenère Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Vigenère cipher</strong> is a polyalphabetic substitution cipher — meaning it uses multiple substitution alphabets in turn, defeating simple frequency analysis. Despite being commonly attributed to French diplomat Blaise de Vigenère, it was actually invented by Italian cryptographer Giovan Battista Bellaso in 1553. Vigenère later described a stronger autokey variant, and the misattribution stuck.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The cipher was called <em>le chiffre indéchiffrable</em> (the unbreakable cipher) and resisted cryptanalysis for nearly 300 years. It was finally broken in the 1800s, independently by Charles Babbage (around 1854, unpublished) and by Prussian military officer Friedrich Kasiski (published 1863). The Kasiski examination looks for repeated sequences of letters in the ciphertext to determine the keyword length, then applies frequency analysis to each periodic monoalphabetic sub-cipher.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">How it works:</strong> A keyword is repeated to match the length of the message. Each letter of the keyword specifies a Caesar shift for the corresponding plaintext letter. A=0, B=1, ... Z=25.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-2"><strong className="text-foreground">Example — Plaintext:</strong> <span className="font-mono text-foreground font-bold">HELLO</span> &nbsp; <strong className="text-foreground">Key:</strong> <span className="font-mono text-foreground font-bold">LEMON</span></p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mb-2">
                <thead>
                  <tr>
                    <th className="text-left text-muted-foreground border-b border-border pb-1 pr-4">Position</th>
                    <th className="text-left text-muted-foreground border-b border-border pb-1 pr-4">Plain</th>
                    <th className="text-left text-muted-foreground border-b border-border pb-1 pr-4">Key</th>
                    <th className="text-left text-muted-foreground border-b border-border pb-1 pr-4">Shift</th>
                    <th className="text-left text-muted-foreground border-b border-border pb-1">Cipher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="pr-4 py-1 text-muted-foreground">1</td><td className="pr-4 font-mono text-foreground font-bold">H (7)</td><td className="pr-4 font-mono text-foreground font-bold">L (11)</td><td className="pr-4 text-muted-foreground">7+11=18</td><td className="font-mono text-green-600 font-bold">S</td></tr>
                  <tr><td className="pr-4 py-1 text-muted-foreground">2</td><td className="pr-4 font-mono text-foreground font-bold">E (4)</td><td className="pr-4 font-mono text-foreground font-bold">E (4)</td><td className="pr-4 text-muted-foreground">4+4=8</td><td className="font-mono text-green-600 font-bold">I</td></tr>
                  <tr><td className="pr-4 py-1 text-muted-foreground">3</td><td className="pr-4 font-mono text-foreground font-bold">L (11)</td><td className="pr-4 font-mono text-foreground font-bold">M (12)</td><td className="pr-4 text-muted-foreground">11+12=23</td><td className="font-mono text-green-600 font-bold">X</td></tr>
                  <tr><td className="pr-4 py-1 text-muted-foreground">4</td><td className="pr-4 font-mono text-foreground font-bold">L (11)</td><td className="pr-4 font-mono text-foreground font-bold">O (14)</td><td className="pr-4 text-muted-foreground">11+14=25</td><td className="font-mono text-green-600 font-bold">Z</td></tr>
                  <tr><td className="pr-4 py-1 text-muted-foreground">5</td><td className="pr-4 font-mono text-foreground font-bold">O (14)</td><td className="pr-4 font-mono text-foreground font-bold">N (13)</td><td className="pr-4 text-muted-foreground">14+13=27 mod 26=1</td><td className="font-mono text-green-600 font-bold">B</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-0">
              Result: <span className="font-mono text-foreground font-bold">HELLO</span> + key <span className="font-mono text-foreground font-bold">LEMON</span> = <span className="font-mono text-green-600 font-bold">SIXZB</span>
            </p>
          </div>

          {/* Playfair */}
          <h3 id="playfair" className="text-xl font-semibold text-foreground mt-6 mb-3">
            6. Playfair Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Playfair cipher</strong> was invented by Charles Wheatstone in 1854 but takes its name from Lord Playfair, who vigorously promoted its adoption by the British government. It was the first practical digraphic cipher — instead of encrypting one letter at a time, it encrypts pairs of letters (digraphs), which makes frequency analysis significantly harder, since there are 676 possible digraphs rather than 26 letters.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The cipher uses a 5×5 grid (combining I and J into one cell) filled by writing a keyword first (omitting repeated letters) and then the remaining unused letters. Pairs of plaintext letters are encrypted using three rules based on their positions in the grid: same row (shift right), same column (shift down), or forming a rectangle (swap corners). The British Army used Playfair in WWI, and it saw service in WWII as well.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Try our Playfair Cipher Solver &rarr;</Link>
          </p>

          {/* Beaufort */}
          <h3 id="beaufort" className="text-xl font-semibold text-foreground mt-6 mb-3">
            7. Beaufort Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Beaufort cipher</strong> was invented by Admiral Sir Francis Beaufort (of Beaufort wind scale fame) and is closely related to the Vigenère cipher. The key difference is in the encryption formula: where Vigenère computes <em>C = (P + K) mod 26</em>, Beaufort computes <em>C = (K − P) mod 26</em>. This makes the Beaufort cipher <strong className="text-foreground">reciprocal</strong> (or self-dual) — the same algorithm and key used for encryption also decrypts the ciphertext, without any modification. The cipher tables are also read differently, using a square tableau similar to but distinct from the Vigenère square.
          </p>

          {/* Pigpen */}
          <h3 id="pigpen" className="text-xl font-semibold text-foreground mt-6 mb-3">
            8. Pigpen Cipher (Freemason's Cipher)
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Pigpen cipher</strong> is a geometric substitution cipher that replaces each letter with a symbol representing the shape of the grid section in which that letter sits. The standard version uses two grids: a tic-tac-toe (noughts-and-crosses) grid and an X-shaped grid, each used twice — once without dots (letters A–R) and once with dots (letters S–Z). Each letter is represented by the outline of the cell that contains it.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            It was widely adopted by the <strong className="text-foreground">Freemasons in the 18th century</strong> to keep their lodge records and correspondence private, which is why it is also called the Masonic cipher. Gravestones from this era bearing Pigpen inscriptions can still be found in the United States and United Kingdom. Today, it is a staple of escape rooms and puzzle hunts because its symbols look cryptic and mysterious.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/blog/pigpen-cipher" className="text-primary hover:underline">Read our full Pigpen Cipher guide &rarr;</Link>
          </p>

          {/* Polybius */}
          <h3 id="polybius" className="text-xl font-semibold text-foreground mt-6 mb-3">
            9. Polybius Square
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Polybius square</strong> is one of the oldest cipher systems in Western history, described by Greek historian Polybius in the 2nd century BC. A 5×5 grid is filled with the 25 letters of the alphabet (I and J share a cell, as in the Greek tradition of treating certain letters as equivalent). Each letter is then represented by a pair of numbers: its row and column coordinate.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <div className="overflow-x-auto">
              <table className="text-sm border-collapse mb-2">
                <thead>
                  <tr>
                    <th className="border-b border-border pb-1 pr-3 text-muted-foreground"></th>
                    <th className="border-b border-border pb-1 pr-3 text-muted-foreground">1</th>
                    <th className="border-b border-border pb-1 pr-3 text-muted-foreground">2</th>
                    <th className="border-b border-border pb-1 pr-3 text-muted-foreground">3</th>
                    <th className="border-b border-border pb-1 pr-3 text-muted-foreground">4</th>
                    <th className="border-b border-border pb-1 text-muted-foreground">5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="pr-3 py-1 text-muted-foreground font-bold">1</td><td className="pr-3 font-mono text-foreground font-bold">A</td><td className="pr-3 font-mono text-foreground font-bold">B</td><td className="pr-3 font-mono text-foreground font-bold">C</td><td className="pr-3 font-mono text-foreground font-bold">D</td><td className="font-mono text-foreground font-bold">E</td></tr>
                  <tr><td className="pr-3 py-1 text-muted-foreground font-bold">2</td><td className="pr-3 font-mono text-foreground font-bold">F</td><td className="pr-3 font-mono text-foreground font-bold">G</td><td className="pr-3 font-mono text-foreground font-bold">H</td><td className="pr-3 font-mono text-foreground font-bold">I/J</td><td className="font-mono text-foreground font-bold">K</td></tr>
                  <tr><td className="pr-3 py-1 text-muted-foreground font-bold">3</td><td className="pr-3 font-mono text-foreground font-bold">L</td><td className="pr-3 font-mono text-foreground font-bold">M</td><td className="pr-3 font-mono text-foreground font-bold">N</td><td className="pr-3 font-mono text-foreground font-bold">O</td><td className="font-mono text-foreground font-bold">P</td></tr>
                  <tr><td className="pr-3 py-1 text-muted-foreground font-bold">4</td><td className="pr-3 font-mono text-foreground font-bold">Q</td><td className="pr-3 font-mono text-foreground font-bold">R</td><td className="pr-3 font-mono text-foreground font-bold">S</td><td className="pr-3 font-mono text-foreground font-bold">T</td><td className="font-mono text-foreground font-bold">U</td></tr>
                  <tr><td className="pr-3 py-1 text-muted-foreground font-bold">5</td><td className="pr-3 font-mono text-foreground font-bold">V</td><td className="pr-3 font-mono text-foreground font-bold">W</td><td className="pr-3 font-mono text-foreground font-bold">X</td><td className="pr-3 font-mono text-foreground font-bold">Y</td><td className="font-mono text-foreground font-bold">Z</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-0">
              <span className="font-mono text-foreground font-bold">HELLO</span> = <span className="font-mono text-green-600 font-bold">23 15 31 31 34</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            The Polybius square is foundational — it underpins the Tap Code (used by prisoners of war to communicate through walls), the ADFGVX cipher (a WWI German field cipher combining a Polybius square with columnar transposition), and several other classical systems.
          </p>

          {/* Baconian */}
          <h3 id="baconian" className="text-xl font-semibold text-foreground mt-6 mb-3">
            10. Baconian Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Baconian cipher</strong> was devised by Sir Francis Bacon in 1605 and published in his work <em>De Augmentis Scientiarum</em>. Each letter of the alphabet is encoded as a 5-character binary string using only the characters A and B: A=AAAAA, B=AAAAB, C=AAABA, D=AAABB, E=AABAA, and so on through Z=BABBA. (Some versions use 0/1 instead of A/B, or use the 24-letter alphabet of Bacon's time with I=J and U=V.)
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Bacon's original intent was <strong className="text-foreground">steganographic</strong>: the A and B characters were not meant to appear literally in the text. Instead, the cipher was hidden by using two slightly different typefaces (e.g., normal and italic) within an innocent-looking cover text. Five characters of the cover text encode one letter of the secret message — undetectable to a casual reader. It is one of the earliest documented uses of steganography in Western cryptography.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/baconian-cipher" className="text-primary hover:underline">Try our Baconian Cipher Tool &rarr;</Link>
          </p>

          {/* A1Z26 */}
          <h3 id="a1z26" className="text-xl font-semibold text-foreground mt-6 mb-3">
            11. A1Z26 Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">A1Z26 cipher</strong> is the simplest possible letter-to-number substitution: A=1, B=2, C=3, … Z=26. Despite (or because of) its simplicity, it appears constantly in puzzles, escape rooms, geocaching, children's games, and popular culture. It requires no key and no equipment — just knowledge of the alphabet.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The cipher has essentially zero cryptographic security, since the mapping is universally known and there is no key. Its value is purely as a puzzle convention and educational tool — it teaches the concept of substitution and the relationship between letters and their alphabetic positions.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-0">
              <span className="font-mono text-foreground font-bold">HELLO</span> = <span className="font-mono text-green-600 font-bold">8 5 12 12 15</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/a1z26-translator" className="text-primary hover:underline">Try our A1Z26 Translator &rarr;</Link>
          </p>

          {/* ── TRANSPOSITION CIPHERS ── */}
          <h2 id="transposition" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Transposition Ciphers
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Transposition ciphers do not change the identity of any letter — only the order in which the letters appear. The original letters are all present in the ciphertext, just scrambled. This makes them distinct from substitution ciphers and means they can be combined with substitution ciphers (a product cipher) for significantly greater security.
          </p>

          {/* Rail Fence */}
          <h3 id="rail-fence" className="text-xl font-semibold text-foreground mt-6 mb-3">
            12. Rail Fence Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Rail Fence cipher</strong> (also called the zigzag cipher) writes the plaintext in a diagonal zigzag pattern across a fixed number of "rails" (rows), then reads off the ciphertext one rail at a time from top to bottom.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-2"><strong className="text-foreground">Example — "HELLO WORLD" on 3 rails:</strong></p>
            <pre className="text-sm font-mono text-foreground mb-2 overflow-x-auto">{`Rail 1: H . . . O . . . L .
Rail 2: . E . L . W . R . D
Rail 3: . . L . . . O . . .`}</pre>
            <p className="text-base text-muted-foreground mb-0">
              Reading across each rail: <span className="font-mono text-green-600 font-bold">HOL ELWRD LO</span> → ciphertext: <span className="font-mono text-green-600 font-bold">HOLELWRDLO</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            The key is simply the number of rails. Rail Fence is easily broken once you know the number of rails (try each value from 2 to message-length/2), and even with an unknown number of rails it offers minimal security. It remains popular in puzzles and CTF (Capture The Flag) challenges.
          </p>

          {/* Columnar */}
          <h3 id="columnar" className="text-xl font-semibold text-foreground mt-6 mb-3">
            13. Columnar Transposition
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Columnar transposition</strong> writes the plaintext into a rectangular grid row by row, then reads off the columns in an order determined by a keyword. The keyword letters are alphabetically ranked to give the column order: the column under the alphabetically earliest letter is read first, then the next, and so on.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Columnar transposition was used by German forces in WWI (notably the ADFGVX cipher applied it on top of a Polybius substitution). The US Army employed <strong className="text-foreground">double columnar transposition</strong> — applying the process twice with two different keywords — as a field cipher in WWII. Double columnar transposition was considered highly secure at the time and was not broken by the Germans in operational use.
          </p>

          {/* Scytale */}
          <h3 id="scytale" className="text-xl font-semibold text-foreground mt-6 mb-3">
            14. Scytale
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Scytale</strong> (pronounced "SKIT-uh-lee") is one of humanity's oldest known encryption devices, used by ancient Sparta as early as the 7th century BC. It consists of a cylindrical rod of a specific diameter. A strip of parchment or leather is wound in a spiral around the rod, a message is written along the length of the rod, and the strip is then unwound. The unwound strip shows only a jumble of letters; only someone possessing an identical rod of the same diameter can rewrap the strip and read the message.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The Scytale is a transposition cipher: the diameter of the rod determines how many columns wide the "grid" is. In modern terms, the key is simply the circumference of the rod (the number of characters per row). Greek writer Plutarch documented the Spartans' use of the Scytale for military communications between Sparta and its generals abroad.
          </p>

          {/* ── POLYALPHABETIC ── */}
          <h2 id="polyalphabetic" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Polyalphabetic and Rotor Ciphers
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Polyalphabetic ciphers use multiple substitution alphabets, switching between them according to a key. This defeats simple frequency analysis because the same plaintext letter encrypts to different ciphertext letters depending on its position. Mechanical rotor machines automate this process with extraordinary complexity.
          </p>

          {/* Enigma */}
          <h3 id="enigma" className="text-xl font-semibold text-foreground mt-6 mb-3">
            15. Enigma Machine
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">Enigma machine</strong> was an electromechanical rotor cipher device invented by German engineer Arthur Scherbius after World War I, commercially available from 1923, and adopted by the German military from 1926 onward. It became the primary encryption system for German Army, Navy, and Air Force communications during World War II.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Enigma's core mechanism is a series of rotating discs (rotors), each wired to perform a substitution. After each keypress, one or more rotors advance, changing the substitution for the next letter. A reflector routes the electrical signal back through the rotors in reverse. A plugboard (Steckerbrett) at the front swaps additional letter pairs. The result is that every single keystroke uses a completely different substitution alphabet — the number of possible configurations of the naval Enigma (with four rotors and a plugboard) was approximately 10<sup>23</sup>.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Enigma was broken at Bletchley Park by a team including Alan Turing and Gordon Welchman. Turing designed an electromechanical machine called the <strong className="text-foreground">Bombe</strong> that exploited cribs (known or guessed plaintext fragments) and a critical design flaw: Enigma could never encrypt a letter as itself. The breaking of Enigma is widely credited with shortening WWII by two to four years.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">Try our Enigma Machine Emulator &rarr;</Link>
          </p>

          {/* One-Time Pad */}
          <h3 id="otp" className="text-xl font-semibold text-foreground mt-6 mb-3">
            16. One-Time Pad
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">one-time pad (OTP)</strong> is the only known cipher system that is <em>provably</em> unbreakable — given correct usage. Claude Shannon mathematically proved this in his landmark 1949 paper "Communication Theory of Secrecy Systems," establishing that the one-time pad achieves <strong className="text-foreground">perfect secrecy</strong>: the ciphertext reveals absolutely zero information about the plaintext to an attacker who does not have the key.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The system requires three conditions to hold simultaneously, and if any one of them is violated, security collapses:
          </p>
          <ol className="list-decimal list-inside text-base text-muted-foreground mb-4 space-y-1">
            <li>The key must be <strong className="text-foreground">truly random</strong> (not pseudorandom).</li>
            <li>The key must be <strong className="text-foreground">at least as long</strong> as the message.</li>
            <li>The key must <strong className="text-foreground">never be reused</strong> — not even partially.</li>
          </ol>
          <p className="text-base text-muted-foreground mb-4">
            One-time pads were used for the <strong className="text-foreground">Moscow–Washington hotline</strong> (established in 1963 after the Cuban Missile Crisis) and by many intelligence agencies throughout the Cold War. The Soviet VENONA messages, intercepted by US intelligence in WWII, were decrypted decades later only because Soviet operators had violated rule three — reusing key pages due to wartime production shortages.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The practical problem with one-time pads is key distribution: you must securely exchange a key that is as long as all the messages you ever wish to send. For most applications, this is logistically impossible, which is why computationally secure ciphers like AES are used instead.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/blog/one-time-pad-cipher-example" className="text-primary hover:underline">Read our One-Time Pad deep dive &rarr;</Link>
          </p>

          {/* ── BOOK CIPHERS ── */}
          <h2 id="book-ciphers" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Book and Key-Based Ciphers
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            17. Book Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            A <strong className="text-foreground">book cipher</strong> encodes a message as a series of references to words (or letters) in a shared text — typically a book that both the sender and receiver possess. Each reference specifies a page number, line number, and word number (or letter number). The recipient uses the same edition of the same book to decode the message by looking up each reference.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Book ciphers were used extensively in espionage and wartime communication. American traitor <strong className="text-foreground">Benedict Arnold</strong> used a book cipher based on Blackstone's <em>Commentaries on the Laws of England</em> when communicating with British Major John André during the American Revolutionary War (1780). The Beale Ciphers, a legendary set of three encrypted documents allegedly describing a buried treasure in Virginia, are claimed to use the United States Declaration of Independence as the key text for the second cipher — which was "decoded" in 1885.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The security of a book cipher depends entirely on keeping the choice of book secret and using an exact edition. If the reference book is identified, the cipher is completely broken.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/book-cipher-decoder" className="text-primary hover:underline">Try our Book Cipher Decoder &rarr;</Link>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            18. Running Key Cipher
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            The <strong className="text-foreground">running key cipher</strong> is similar to the Vigenère cipher but uses a long, meaningful text (such as a passage from a novel or a newspaper article) as the key instead of a short repeating keyword. Because the key is as long as the message and drawn from natural language, the Kasiski examination (which relies on key repetition) does not work.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            However, the running key cipher is not perfectly secure like the one-time pad, because the key is not random — it is natural language, which has predictable letter frequencies. A sophisticated cryptanalyst who knows that the key is English text can use a technique called "double frequency analysis" to solve both the plaintext and the key simultaneously, since both have the statistical properties of English.
          </p>

          {/* ── MORSE CODE ── */}
          <h2 id="morse" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Morse Code
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            19. Morse Code
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            Strictly speaking, <strong className="text-foreground">Morse code</strong> is a <em>code</em> rather than a <em>cipher</em> — it replaces each letter with a standardized symbol (a sequence of dots and dashes) rather than transforming it using a key. There is no encryption: Morse code is publicly standardized and provides no secrecy. Anyone who knows Morse can decode any Morse message. However, it appears on almost every "types of ciphers" list because it is the most famous example of letter-to-symbol conversion and it is frequently used as an outer layer in puzzle designs.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Morse code was developed by Samuel Morse and Alfred Vail around 1837 for use with the electric telegraph. The International Morse Code standard (ITU-R M.1677-1) remains in use today, most notably in aviation (for identifying navigational beacons) and as an accessibility input method for people with motor disabilities.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <p className="text-base text-muted-foreground mb-1">
              <span className="font-mono text-foreground font-bold">H</span> = <span className="font-mono text-green-600 font-bold">· · · ·</span> &nbsp;&nbsp;
              <span className="font-mono text-foreground font-bold">E</span> = <span className="font-mono text-green-600 font-bold">·</span> &nbsp;&nbsp;
              <span className="font-mono text-foreground font-bold">L</span> = <span className="font-mono text-green-600 font-bold">· − · ·</span> &nbsp;&nbsp;
              <span className="font-mono text-foreground font-bold">O</span> = <span className="font-mono text-green-600 font-bold">− − −</span>
            </p>
            <p className="text-base text-muted-foreground mb-0">
              <span className="font-mono text-foreground font-bold">HELLO</span> = <span className="font-mono text-green-600 font-bold">· · · ·  ·  · − · ·  · − · ·  − − −</span>
            </p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Try our Morse Code Translator &rarr;</Link>
          </p>

          {/* ── MODERN SYMMETRIC ── */}
          <h2 id="modern-symmetric" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Modern Symmetric Encryption
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Modern symmetric ciphers operate on binary data and are designed to be computationally secure — meaning that breaking them requires a number of operations so astronomically large that it is impractical even with all the computing power on Earth for millennia. Unlike classical ciphers, which were designed to be computed by hand, modern ciphers are designed for electronic hardware and are evaluated using formal cryptographic security proofs.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            20. DES — Data Encryption Standard
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">DES</strong> was adopted by NIST (then NBS) as the US federal encryption standard in 1977, based on IBM's Lucifer cipher. It is a 16-round Feistel block cipher operating on 64-bit blocks with a 56-bit key. The 56-bit key was controversial from the start — cryptographers suspected (and later documents confirmed) that the NSA had pressured IBM to reduce the original 64-bit key to make NSA-assisted brute-force feasible.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            DES was publicly broken by brute force in 1999 when the Electronic Frontier Foundation's <em>DES Cracker</em> machine (costing $250,000 to build) found a DES key in 22 hours and 15 minutes. DES is now completely obsolete and should not be used under any circumstances. Triple-DES (3DES), which applies DES three times with two or three different keys, extended its life until NIST deprecated it in 2023.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            21. AES — Advanced Encryption Standard
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">AES</strong> (Advanced Encryption Standard) is the current global standard for symmetric encryption, adopted by NIST in 2001 following a public competition. The winning algorithm, Rijndael, was designed by Belgian cryptographers Joan Daemen and Vincent Rijmen. AES supports three key lengths: <strong className="text-foreground">128, 192, and 256 bits</strong>, with 10, 12, and 14 rounds respectively.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            AES is approved by the NSA for TOP SECRET information when using 256-bit keys. It is ubiquitous in modern technology: TLS/HTTPS, WPA2 and WPA3 Wi-Fi security, disk encryption (BitLocker, FileVault), file archiving (7-Zip, WinZip), and virtually every secure communication protocol. To put the key space in perspective: AES-256 has 2<sup>256</sup> possible keys — a number larger than the estimated number of atoms in the observable universe (approximately 10<sup>80</sup>). No practical attack against AES itself (as opposed to its implementation) is known.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">Read our deep dive on 256-bit AES encryption &rarr;</Link>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            22. Blowfish and Twofish
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Blowfish</strong> was designed by security expert Bruce Schneier in 1993 as a free, fast, and unpatented alternative to DES. It is a 16-round Feistel cipher with a variable key length from 32 to 448 bits and a 64-bit block size. Blowfish remains unbroken but its 64-bit block size creates vulnerabilities when large amounts of data are encrypted with the same key (the SWEET32 attack), making it unsuitable for modern high-volume use.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Twofish</strong>, also by Schneier and colleagues, was one of the five AES finalists in NIST's competition (alongside Rijndael, Serpent, RC6, and MARS). It uses 128-bit blocks and key lengths up to 256 bits. Though it lost the AES competition (Rijndael was preferred for its speed and elegance), Twofish is still considered secure and is used in some open-source encryption software.
          </p>

          {/* ── MODERN ASYMMETRIC ── */}
          <h2 id="modern-asymmetric" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Modern Asymmetric (Public-Key) Encryption
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Asymmetric cryptography, invented publicly by Whitfield Diffie and Martin Hellman in 1976 (though later declassified documents show British intelligence at GCHQ discovered it first), solves the fundamental problem of symmetric cryptography: how do two people who have never met agree on a secret key? The answer is mathematical trapdoor functions — operations that are easy to perform in one direction but computationally infeasible to reverse.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            23. RSA
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">RSA</strong> (Rivest–Shamir–Adleman) was published in 1977 by MIT researchers Ron Rivest, Adi Shamir, and Leonard Adleman. It is based on the mathematical difficulty of factoring the product of two very large prime numbers. Given two primes <em>p</em> and <em>q</em>, computing <em>n = p × q</em> is trivial. But given only <em>n</em>, recovering <em>p</em> and <em>q</em> — the integer factorization problem — becomes computationally infeasible once <em>n</em> is large enough (2048 bits or more by current standards).
          </p>
          <p className="text-base text-muted-foreground mb-4">
            RSA is used for digital signatures, key exchange in TLS/HTTPS, SSH authentication, PGP email encryption, and code signing certificates. RSA-2048 is the current minimum recommended key size. RSA-1024 (once standard) is now considered broken — commercial hardware can factor 1024-bit keys. RSA is significantly slower than symmetric ciphers, so in practice it is used to securely exchange an AES key, and then AES encrypts the actual data.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            24. ECC — Elliptic Curve Cryptography
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Elliptic Curve Cryptography</strong> was proposed independently by Neal Koblitz and Victor Miller in 1985. It is based on the algebraic structure of elliptic curves over finite fields. The security rests on the elliptic curve discrete logarithm problem (ECDLP), which is believed to be much harder per bit than integer factorization.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The key advantage of ECC is <strong className="text-foreground">smaller key sizes for equivalent security</strong>: a 256-bit ECC key provides approximately the same security as a 3072-bit RSA key. This makes ECC dramatically faster and more energy-efficient, which is why it dominates in mobile devices, IoT hardware, Bitcoin (which uses the secp256k1 curve), modern TLS certificates, and Apple's device security architecture.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            25. Diffie-Hellman Key Exchange
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Diffie-Hellman</strong> (DH) is not a cipher in the traditional sense — it does not encrypt data directly. It is a key agreement protocol that allows two parties to establish a shared secret over an insecure public channel without having communicated privately beforehand. The protocol was published by Whitfield Diffie and Martin Hellman in 1976 and is one of the most significant contributions in the history of cryptography.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The security rests on the discrete logarithm problem: given <em>g<sup>a</sup> mod p</em>, it is computationally infeasible to find <em>a</em> for large values of <em>p</em>. Both parties exchange <em>g<sup>a</sup> mod p</em> and <em>g<sup>b</sup> mod p</em> publicly, and each can compute <em>g<sup>ab</sup> mod p</em> as their shared secret — but an eavesdropper cannot. The Elliptic Curve variant (ECDH) is now preferred in modern protocols. Diffie-Hellman underlies TLS, SSH, Signal Protocol, and virtually every modern secure communication system.
          </p>

          {/* ── HASH FUNCTIONS ── */}
          <h2 id="hash-functions" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Hash Functions (Honorable Mention)
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Hash functions</strong> are not ciphers — they are one-way functions that produce a fixed-size "fingerprint" (digest) of arbitrary-length input data. Unlike ciphers, hashes are not reversible (by design), and there is no key. They are included here because they are integral to modern cryptographic systems and frequently confused with encryption.
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <ul className="text-base text-muted-foreground space-y-2 mb-0">
              <li><strong className="text-foreground">MD5</strong> (1992, 128-bit output) — Broken. Collision attacks are trivially fast. Do not use for security.</li>
              <li><strong className="text-foreground">SHA-1</strong> (1995, 160-bit output) — Broken. Google demonstrated a practical collision in 2017 (SHAttered attack). Deprecated.</li>
              <li><strong className="text-foreground">SHA-256 / SHA-3</strong> — Current standards. SHA-256 (from the SHA-2 family) is used in Bitcoin mining, TLS certificates, and code signing. SHA-3 (Keccak) uses a different mathematical structure (sponge construction) and serves as a fallback if SHA-2 is ever broken.</li>
            </ul>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Hash functions are used for password storage (with salt + bcrypt/Argon2), data integrity verification, digital signatures (sign the hash, not the data), and blockchain proof-of-work.
          </p>

          {/* ── COMPARISON TABLE ── */}
          <h2 id="comparison" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Cipher Comparison Table
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            The table below summarizes all the major cipher types covered in this guide.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 pr-3 font-semibold">Cipher</th>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 pr-3 font-semibold">Category</th>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 pr-3 font-semibold">Year</th>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 pr-3 font-semibold">Key Space</th>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 pr-3 font-semibold">Broken?</th>
                  <th className="text-left text-muted-foreground border-b border-border pb-2 font-semibold">Use Today</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Caesar</td>
                  <td className="py-2 pr-3">Substitution</td>
                  <td className="py-2 pr-3">~50 BC</td>
                  <td className="py-2 pr-3">25 keys</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">ROT13</td>
                  <td className="py-2 pr-3">Substitution</td>
                  <td className="py-2 pr-3">1980s</td>
                  <td className="py-2 pr-3">1 key</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Spoiler hiding</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Atbash</td>
                  <td className="py-2 pr-3">Substitution</td>
                  <td className="py-2 pr-3">~600 BC</td>
                  <td className="py-2 pr-3">1 key</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Monoalphabetic</td>
                  <td className="py-2 pr-3">Substitution</td>
                  <td className="py-2 pr-3">Ancient</td>
                  <td className="py-2 pr-3">26! ≈ 4×10²⁶</td>
                  <td className="py-2 pr-3 text-red-500">Yes (freq. analysis)</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Vigenère</td>
                  <td className="py-2 pr-3">Polyalphabetic</td>
                  <td className="py-2 pr-3">1553</td>
                  <td className="py-2 pr-3">26ⁿ (n=key len)</td>
                  <td className="py-2 pr-3 text-red-500">Yes (Kasiski)</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Playfair</td>
                  <td className="py-2 pr-3">Digraphic sub.</td>
                  <td className="py-2 pr-3">1854</td>
                  <td className="py-2 pr-3">25! arrangements</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Pigpen</td>
                  <td className="py-2 pr-3">Geometric sub.</td>
                  <td className="py-2 pr-3">18th c.</td>
                  <td className="py-2 pr-3">Fixed</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Escape rooms</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Baconian</td>
                  <td className="py-2 pr-3">Steganographic</td>
                  <td className="py-2 pr-3">1605</td>
                  <td className="py-2 pr-3">Fixed</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles / steg</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">A1Z26</td>
                  <td className="py-2 pr-3">Substitution</td>
                  <td className="py-2 pr-3">Modern</td>
                  <td className="py-2 pr-3">Fixed</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles / education</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Rail Fence</td>
                  <td className="py-2 pr-3">Transposition</td>
                  <td className="py-2 pr-3">Civil War era</td>
                  <td className="py-2 pr-3">Small</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles / CTF</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Columnar Trans.</td>
                  <td className="py-2 pr-3">Transposition</td>
                  <td className="py-2 pr-3">19th c.</td>
                  <td className="py-2 pr-3">n! (n=cols)</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Puzzles only</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Scytale</td>
                  <td className="py-2 pr-3">Transposition</td>
                  <td className="py-2 pr-3">~700 BC</td>
                  <td className="py-2 pr-3">Rod diameter</td>
                  <td className="py-2 pr-3 text-red-500">Yes</td>
                  <td className="py-2">Historical</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">Enigma</td>
                  <td className="py-2 pr-3">Rotor / polyalpha.</td>
                  <td className="py-2 pr-3">1923</td>
                  <td className="py-2 pr-3">~10²³</td>
                  <td className="py-2 pr-3 text-red-500">Yes (Bletchley)</td>
                  <td className="py-2">Museums / emulators</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">One-Time Pad</td>
                  <td className="py-2 pr-3">Symmetric</td>
                  <td className="py-2 pr-3">1882</td>
                  <td className="py-2 pr-3">∞ (key = msg len)</td>
                  <td className="py-2 pr-3 text-green-600">No (if used correctly)</td>
                  <td className="py-2">Niche high-security</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">DES</td>
                  <td className="py-2 pr-3">Symmetric block</td>
                  <td className="py-2 pr-3">1977</td>
                  <td className="py-2 pr-3">56-bit</td>
                  <td className="py-2 pr-3 text-red-500">Yes (1999)</td>
                  <td className="py-2">Obsolete</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">AES-256</td>
                  <td className="py-2 pr-3">Symmetric block</td>
                  <td className="py-2 pr-3">2001</td>
                  <td className="py-2 pr-3">256-bit</td>
                  <td className="py-2 pr-3 text-green-600">No</td>
                  <td className="py-2">Universal standard</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 font-medium text-foreground">RSA</td>
                  <td className="py-2 pr-3">Asymmetric</td>
                  <td className="py-2 pr-3">1977</td>
                  <td className="py-2 pr-3">2048–4096-bit</td>
                  <td className="py-2 pr-3 text-green-600">No (≥2048-bit)</td>
                  <td className="py-2">TLS, SSH, PGP</td>
                </tr>
                <tr>
                  <td className="py-2 pr-3 font-medium text-foreground">ECC</td>
                  <td className="py-2 pr-3">Asymmetric</td>
                  <td className="py-2 pr-3">1985</td>
                  <td className="py-2 pr-3">256-bit</td>
                  <td className="py-2 pr-3 text-green-600">No</td>
                  <td className="py-2">TLS, Bitcoin, mobile</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── CHOOSING ── */}
          <h2 id="choosing" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Choosing the Right Cipher for Your Purpose
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            Not every cipher is appropriate for every use case. Here is a practical guide to selecting the right type:
          </p>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">For Puzzles, Escape Rooms, and Games</h3>
            <p className="text-base text-muted-foreground mb-2">Use classical ciphers: Caesar, Atbash, A1Z26, Pigpen, Polybius Square, Baconian, Vigenère, Rail Fence, or Columnar Transposition. These are recognizable, hand-solvable, and thematically satisfying. The level of difficulty should match your audience — A1Z26 for children, Vigenère or Playfair for more advanced solvers.</p>
            <p className="text-base text-muted-foreground mb-0">Recommended tools: <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Decoder</Link>, <Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 Translator</Link>, <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Decoder</Link></p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">For Encrypting Files and Data at Rest</h3>
            <p className="text-base text-muted-foreground mb-2">Use <strong className="text-foreground">AES-256</strong> in an authenticated mode such as GCM (Galois/Counter Mode). AES-GCM provides both confidentiality (encryption) and integrity (authentication), protecting against tampering as well as eavesdropping. Operating system tools like BitLocker (Windows) and FileVault (macOS) use AES-256.</p>
            <p className="text-base text-muted-foreground mb-0">For password-protected archives, use 7-Zip with AES-256 encryption and a strong, unique passphrase.</p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">For Secure Communication Over the Internet</h3>
            <p className="text-base text-muted-foreground mb-0">Use <strong className="text-foreground">TLS 1.3</strong>, which automatically combines ECDH (for key exchange), AES-256-GCM or ChaCha20-Poly1305 (for data encryption), and SHA-384 (for integrity). If you are building an application, use a well-audited TLS library — never implement these algorithms yourself. For end-to-end encrypted messaging, Signal Protocol (used in Signal and WhatsApp) combines Diffie-Hellman, AES, and HMAC-SHA256.</p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">For Digital Signatures and Certificates</h3>
            <p className="text-base text-muted-foreground mb-0">Use <strong className="text-foreground">ECDSA</strong> (Elliptic Curve Digital Signature Algorithm) with P-256 or P-384 curves, or <strong className="text-foreground">RSA-PSS</strong> with 2048-bit or larger keys. These are the standard algorithms used for HTTPS certificates, SSH host keys, and code signing. For new systems, ECDSA is preferred for its performance advantage.</p>
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">For Educational / Learning Cryptography</h3>
            <p className="text-base text-muted-foreground mb-0">Start with Caesar and work up through Vigenère to understand the evolution from monoalphabetic to polyalphabetic substitution. Then study Enigma to understand rotor machines. Finally, move to modern concepts: the one-time pad to understand perfect secrecy, and then AES and RSA to understand computational security. Understanding why each historical cipher was broken is more instructive than memorizing the algorithms themselves.</p>
          </div>

          {/* ── FAQ ── */}
          <h2 id="faq" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between a cipher and a code?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                A <strong className="text-foreground">cipher</strong> operates at the level of individual letters or bits, transforming them according to a fixed algorithm and a key. A <strong className="text-foreground">code</strong> replaces whole words, phrases, or meanings with substitute symbols from a codebook — the mapping is semantic, not structural. Morse code is technically a code (though everyone calls it a code, and it is), while the Caesar cipher is a genuine cipher. In everyday conversation the terms are used interchangeably, but in cryptography the distinction matters.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the most secure cipher available today?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                For symmetric encryption, <strong className="text-foreground">AES-256</strong> is the gold standard — it is approved by the NSA for classified information and has no known practical attack. For asymmetric (public-key) purposes, <strong className="text-foreground">ECC with 256-bit keys</strong> (e.g., X25519 for key exchange, Ed25519 for signatures) is the modern recommendation, offering the same security as 3072-bit RSA with much smaller keys and faster computations. Looking further ahead, post-quantum algorithms (CRYSTALS-Kyber for key exchange, CRYSTALS-Dilithium for signatures) standardized by NIST in 2024 are designed to resist attacks from future quantum computers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the oldest cipher in history?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                The oldest <em>documented</em> encryption devices are the <strong className="text-foreground">Scytale</strong> (Sparta, ~7th century BC) and the <strong className="text-foreground">Atbash cipher</strong> (Hebrew Bible, ~600 BC). Some scholars argue that non-standard hieroglyph substitutions found in ancient Egyptian inscriptions dating to around 1900 BC represent even earlier cryptographic intent, though debate continues about whether these were deliberate encryption or merely artistic variation. The first documented example of systematic cryptanalysis (frequency analysis) was written by Arab polymath Al-Kindi around 850 AD.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Which cipher is used in everyday internet security?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Every time you connect to an HTTPS website, <strong className="text-foreground">TLS 1.3</strong> is protecting you — and it uses multiple ciphers working in concert. The initial handshake uses <strong className="text-foreground">ECDH</strong> (Elliptic Curve Diffie-Hellman) to securely agree on a session key, then <strong className="text-foreground">AES-256-GCM</strong> or <strong className="text-foreground">ChaCha20-Poly1305</strong> encrypts all transmitted data, while <strong className="text-foreground">SHA-384</strong> verifies integrity. The server's identity is authenticated using an <strong className="text-foreground">ECDSA or RSA digital signature</strong> on its certificate. So a typical secure web connection uses four distinct cryptographic primitives simultaneously.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What cipher did the Germans use in World War II?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Germany's main cipher system was the <strong className="text-foreground">Enigma machine</strong> — an electromechanical rotor cipher used by the Army, Navy (Kriegsmarine), and Air Force (Luftwaffe). The Kriegsmarine variant (Naval Enigma) used four rotors and was the hardest to break. For highest-command strategic communications, Germany also used the <strong className="text-foreground">Lorenz SZ40/42</strong> (codenamed "Tunny" by the British), a teleprinter cipher machine with twelve rotors that was even more complex than Enigma. Lorenz was broken by the Colossus computer at Bletchley Park — the world's first programmable electronic digital computer, built by Tommy Flowers in 1943–1944.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
            Conclusion
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            The history of cipher codes is, in many ways, the history of the eternal arms race between those who wish to keep secrets and those who wish to uncover them. Every cipher that seemed unbreakable eventually fell — the Caesar cipher to brute force, the Vigenère to Kasiski examination, the Enigma to Turing's Bombe. The lesson is not that ciphers are futile, but that security requires continuous evolution and rigorous mathematical proof — not just creative design.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Today's AES-256 and ECC are the result of decades of public cryptographic research, peer review, and mathematical scrutiny. They are used because they have earned trust, not merely because they are complex. Meanwhile, classical ciphers — Caesar, Atbash, Pigpen, Vigenère — remain alive in puzzles, escape rooms, and education, serving a different but equally valuable purpose: teaching the fundamental ideas of substitution, transposition, and key-based secrecy.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Whether you are here to crack a puzzle or understand the technology protecting your data, the tools below will help you put this knowledge to work:
          </p>
          <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
            <ul className="text-base text-muted-foreground space-y-2 mb-0">
              <li><Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> — encode and decode shift ciphers</li>
              <li><Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder</Link> — the self-inverse spoiler cipher</li>
              <li><Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link> — the ancient Hebrew reversal cipher</li>
              <li><Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 Translator</Link> — convert letters to their alphabetic numbers</li>
              <li><Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</Link> — the digraphic WWI cipher</li>
              <li><Link href="/tools/baconian-cipher" className="text-primary hover:underline">Baconian Cipher Tool</Link> — Francis Bacon's 5-bit letter encoding</li>
              <li><Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">Enigma Machine Emulator</Link> — simulate the WWII rotor cipher</li>
              <li><Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link> — dots and dashes to text and back</li>
              <li><Link href="/tools/book-cipher-decoder" className="text-primary hover:underline">Book Cipher Decoder</Link> — decode reference-based ciphers</li>
              <li><Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> — not sure what type of cipher you have? Let the tool figure it out</li>
            </ul>
          </div>

        </div>
      </article>
    </main>
  )
}
