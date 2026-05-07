import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Skip Cipher - Jump Cipher Encryption",
  description: "Skip Cipher (Jump Cipher) is a transposition cipher that reorders message letters by extracting every nth character. Learn about its origin, how it works, how to create one, and its importance in cryptography.",
  keywords: [
    "skip cipher",
    "jump cipher",
    "transposition cipher",
    "encryption",
    "cryptography",
    "cipher",
    "message encryption",
  ],
  openGraph: {
    title: "Skip Cipher - Jump Cipher Encryption",
    description: "Complete guide to Skip Cipher: origin, mechanics, creation, and cryptographic importance",
    type: "article",
  },
}

export default function SkipCipherBlog() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Skip Cipher",
    description:
      "Skip Cipher (Jump Cipher) is a transposition cipher that reorders message letters by extracting every nth character. Learn about its origin, mechanics, creation, and importance.",
    url: "https://letters2numbersconverter.com/blog/skip-cipher",
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Neo",
    },
    image: "https://letters2numbersconverter.com/og-image.jpg",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <article className="py-12 sm:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">Skip Cipher</h1>
              <p className="text-lg text-muted-foreground">
                Understanding the Jump Cipher: A Classic Transposition Cipher Used in Cryptography
              </p>
              <div className="flex justify-center gap-4 text-sm text-muted-foreground mt-4">
                <span>Published: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card border border-border rounded-lg p-6 mb-12 space-y-3">
              <h2 className="text-sm font-semibold text-foreground">Table of Contents</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#what-is" className="hover:text-primary transition-colors">
                    What is Skip Cipher?
                  </a>
                </li>
                <li>
                  <a href="#origin" className="hover:text-primary transition-colors">
                    Origin and History
                  </a>
                </li>
                <li>
                  <a href="#how-works" className="hover:text-primary transition-colors">
                    How Skip Cipher Works
                  </a>
                </li>
                <li>
                  <a href="#creating" className="hover:text-primary transition-colors">
                    How to Create a Skip Cipher
                  </a>
                </li>
                <li>
                  <a href="#importance" className="hover:text-primary transition-colors">
                    Importance in Cryptography
                  </a>
                </li>
                <li>
                  <a href="#limitations" className="hover:text-primary transition-colors">
                    Limitations and Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Section 1 */}
              <section id="what-is" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">What is Skip Cipher?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Skip Cipher (also known as Jump Cipher) is a transposition cipher that reorders the letters of a message by extracting a letter every n characters. In other words, the cipher works by skipping n−1 characters and taking every nth character to create the encrypted message. Unlike substitution ciphers that replace letters with different characters, the skip cipher preserves all original letters but scrambles their arrangement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For example, if you have the message "HELLOWORLD" and use a skip size of 2 starting from position 1, you would extract every 2nd character: H, L, O, O, L = "HLOOL". The resulting ciphertext contains all original letters but in a new order determined by the extraction pattern.
                </p>
              </section>

              {/* Section 2 */}
              <section id="origin" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Origin and History</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Skip Cipher belongs to the family of transposition ciphers, which have been used throughout history to secure communications. Transposition ciphers were popular during the Middle Ages and Renaissance periods before the development of modern cryptography. The skip cipher, in particular, represents one of the simpler forms of transposition-based encryption.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  While the exact origin of the skip cipher is difficult to pinpoint, it emerged as cryptographers experimented with various methods to disguise messages by rearranging letters rather than substituting them. Military applications during various wars employed transposition ciphers as a means of secure communication, though they were eventually superseded by more complex encryption methods. The skip cipher remains relevant today primarily as an educational tool for teaching fundamental cryptographic principles.
                </p>
              </section>

              {/* Section 3 */}
              <section id="how-works" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How Skip Cipher Works</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The skip cipher operates through a straightforward mathematical principle. To encrypt a message, you define two key parameters:
                </p>

                <div className="bg-card border border-border rounded-lg p-6 space-y-3">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Skip Size (n)</p>
                    <p className="text-sm text-muted-foreground">
                      The interval at which you extract characters. A skip size of 2 means extract every 2nd character, size 3 means every 3rd character, and so forth.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Initial Position</p>
                    <p className="text-sm text-muted-foreground">
                      Where to start the extraction process (typically position 1 for the first character, position 2 for the second, etc.).
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Encryption Process:</strong>
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>Start at the initial position in the plaintext</li>
                  <li>Extract the character at that position</li>
                  <li>Move forward by the skip size</li>
                  <li>Repeat until you reach the end of the message</li>
                  <li>The extracted characters form the ciphertext</li>
                </ol>

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-foreground mb-2">Example:</p>
                  <p className="text-sm text-muted-foreground font-mono">Plaintext: "CRYPTOGRAPHY"</p>
                  <p className="text-sm text-muted-foreground font-mono">Skip Size: 3, Start: 1</p>
                  <p className="text-sm text-muted-foreground font-mono">Extract positions: 1→4→7→10→13</p>
                  <p className="text-sm text-muted-foreground font-mono">Result: "CYOAH"</p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="creating" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">How to Create a Skip Cipher</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Creating your own skip cipher is straightforward and requires only basic mathematics. Here's a step-by-step guide:
                </p>

                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2">Step 1: Choose Your Message</p>
                    <p className="text-sm text-muted-foreground">
                      Start with the plaintext message you want to encrypt. Example: "SECRET MESSAGE"
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2">Step 2: Select Parameters</p>
                    <p className="text-sm text-muted-foreground">
                      Decide on your skip size (n) and initial position. For example, skip size of 4 and start at position 1.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2">Step 3: Number the Positions</p>
                    <p className="text-sm text-muted-foreground font-mono text-xs">
                      S(1) E(2) C(3) R(4) E(5) T(6) M(7) E(8) S(9) S(10) A(11) G(12) E(13)
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2">Step 4: Extract Characters</p>
                    <p className="text-sm text-muted-foreground">
                      Starting at position 1, extract every 4th character: 1, 5, 9, 13 = E, E, S, E
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="font-semibold text-foreground mb-2">Step 5: Form the Ciphertext</p>
                    <p className="text-sm text-muted-foreground font-mono">
                      Ciphertext: "EESE"
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  To decrypt a message, you reverse the process. With knowledge of the skip size and initial position, you can reconstruct the original message by placing each ciphertext character back into its original position in a string of the same length.
                </p>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tip:</strong> Try using our <Link href="/tools/skip-cipher" className="text-primary hover:underline">Skip Cipher Tool</Link> to practice encryption and decryption without manual calculation.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="importance" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Importance in Cryptography</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Although modern cryptography has moved far beyond simple transposition ciphers, skip ciphers remain important for several reasons:
                </p>

                <div className="space-y-3">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">Educational Value</p>
                    <p className="text-sm text-muted-foreground">
                      Skip ciphers teach fundamental cryptographic concepts such as key-based encryption, transposition principles, and the relationship between plaintext and ciphertext.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">Historical Understanding</p>
                    <p className="text-sm text-muted-foreground">
                      Understanding historical ciphers helps appreciate how modern encryption evolved and why certain vulnerabilities matter in cryptographic design.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">Cryptanalysis Practice</p>
                    <p className="text-sm text-muted-foreground">
                      Skip ciphers are excellent for learning cryptanalysis techniques such as brute force attacks, frequency analysis, and pattern recognition.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-foreground">Simple Programming Exercises</p>
                    <p className="text-sm text-muted-foreground">
                      Implementing skip ciphers is a straightforward programming exercise that helps developers understand algorithm design and string manipulation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section id="limitations" className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Limitations and Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While skip ciphers are interesting from a cryptographic history perspective, they have significant limitations for real-world security applications:
                </p>

                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Vulnerability to Brute Force</p>
                    <p className="text-sm text-muted-foreground">
                      With a limited message length, there are only a finite number of possible skip sizes and initial positions. An attacker can quickly try all combinations to break the cipher.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">No Substitution</p>
                    <p className="text-sm text-muted-foreground">
                      Since the cipher only rearranges letters without substituting them, frequency analysis patterns can provide clues about the original message.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">Predictable Structure</p>
                    <p className="text-sm text-muted-foreground">
                      The regular interval pattern (every nth character) is mathematically predictable, making it vulnerable to pattern-based attacks.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">No Key Length Security</p>
                    <p className="text-sm text-muted-foreground">
                      The key (skip size and position) is very small, providing insufficient cryptographic strength for protecting sensitive information.
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Conclusion:</strong> Skip ciphers should never be used for securing sensitive data. Modern encryption standards like AES (Advanced Encryption Standard) and RSA provide exponentially stronger security. However, studying skip ciphers remains valuable for understanding cryptographic principles and the evolution of encryption technology.
                </p>
              </section>

              {/* Related Tools Section */}
              <section className="bg-secondary/5 border border-secondary/20 rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Explore Related Tools</h2>
                <p className="text-muted-foreground mb-4">
                  Interested in cryptography and encryption? Check out these related tools on Letters2NumbersConverter:
                </p>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/tools/skip-cipher"
                      className="text-primary hover:underline font-semibold flex items-start gap-2"
                    >
                      <span className="text-lg">→</span> Skip Cipher Tool
                    </Link>
                    <p className="text-sm text-muted-foreground">Encrypt and decrypt messages using skip cipher with brute force analysis</p>
                  </li>
                  <li>
                    <Link
                      href="/tools/a0z25-cipher-translator"
                      className="text-primary hover:underline font-semibold flex items-start gap-2"
                    >
                      <span className="text-lg">→</span> A0Z25 Cipher Translator
                    </Link>
                    <p className="text-sm text-muted-foreground">Convert letters to numbers and back using the A0Z25 cipher system</p>
                  </li>
                  <li>
                    <Link
                      href="/tools/letters-to-numbers-translator"
                      className="text-primary hover:underline font-semibold flex items-start gap-2"
                    >
                      <span className="text-lg">→</span> Letters to Numbers Translator
                    </Link>
                    <p className="text-sm text-muted-foreground">Convert text to numerical values using various encoding systems</p>
                  </li>
                  <li>
                    <Link
                      href="/tools/fill-in-the-blanks-equation-solver"
                      className="text-primary hover:underline font-semibold flex items-start gap-2"
                    >
                      <span className="text-lg">→</span> Fill In The Blanks Equation Solver
                    </Link>
                    <p className="text-sm text-muted-foreground">Solve math puzzles by finding missing digits and operators</p>
                  </li>
                </ul>
              </section>
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>
                Have questions about skip cipher or other encryption methods? Explore our full collection of <Link href="/tools" className="text-primary hover:underline">cryptography tools</Link> and{" "}
                <Link href="/blog" className="text-primary hover:underline">educational resources</Link>.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
