import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MonoalphabeticSubstitutionCipher } from "@/components/monoalphabetic-substitution-cipher"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Monoalphabetic Substitution Cipher | Encrypt & Decrypt",
  description: "Use our free monoalphabetic substitution cipher tool to encrypt and decrypt messages. Create custom substitution keys, analyze letter frequencies, and solve ciphers with interactive mapping.",
  keywords: ["monoalphabetic substitution cipher", "substitution cipher", "cipher decoder", "encryption tool", "decrypt message", "cipher solver"],
  openGraph: {
    title: "Monoalphabetic Substitution Cipher Tool",
    description: "Encrypt and decrypt messages using monoalphabetic substitution ciphers with advanced frequency analysis.",
  },
}

export default function MonoalphabeticSubstitutionCipherPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <header className="mb-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                  Monoalphabetic Substitution Cipher
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  The monoalphabetic substitution cipher is one of the most basic encryption methods. Each letter of the alphabet is mapped to another letter, creating a simple but historically significant encryption technique. Use this free tool to encrypt, decrypt, and analyze monoalphabetic substitution cipher messages with interactive letter mapping, frequency analysis, and solving capabilities.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link
                    href="/tools/letters-to-numbers-converter"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Try Letters to Numbers Tool
                  </Link>
                  <Link
                    href="/tools/cipher-identifier"
                    className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium"
                  >
                    Cipher Identifier
                  </Link>
                </div>
              </header>

              {/* Tool */}
              <div className="bg-card border border-border rounded-xl p-6 mb-12">
                <MonoalphabeticSubstitutionCipher />
              </div>

              {/* Information Section */}
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">How Does the Monoalphabetic Substitution Cipher Work?</h2>
                  <p className="text-muted-foreground mb-4">
                    A monoalphabetic substitution cipher works by replacing each letter of the alphabet with another letter. The replacement remains constant throughout the message—if A becomes B, then every A in the plaintext becomes B in the ciphertext.
                  </p>
                  <p className="text-muted-foreground">
                    For example, with the key "QWERTYUIOPASDFGHJKLZXCVBNM", the letter A would always be replaced with Q, B with W, and so on. This simplicity makes it vulnerable to frequency analysis attacks, which is why modern cryptography uses more complex methods.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Using This Tool</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary min-w-6">1.</span>
                      <span><strong>Enter Your Text:</strong> Paste the message you want to encrypt or decrypt into the input field.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary min-w-6">2.</span>
                      <span><strong>Set Your Key:</strong> Manually enter the substitution alphabet, randomize it, or load a custom key.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary min-w-6">3.</span>
                      <span><strong>Check Output:</strong> The encrypted or decrypted message appears in real-time.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary min-w-6">4.</span>
                      <span><strong>Analyze Frequencies:</strong> View letter frequency analysis to help identify common patterns and solve unknown ciphers.</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Security Note</h2>
                  <p className="text-muted-foreground">
                    While the monoalphabetic substitution cipher is historically important and educational, it is not secure for real-world use. Ciphers can be broken through frequency analysis by comparing letter frequencies in the ciphertext with known language patterns. For actual encryption needs, use modern cryptographic algorithms like AES or RSA.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Related Tools</h2>
                  <p className="text-muted-foreground mb-4">
                    Explore other cipher and encoding tools on our site:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> - Analyze encrypted text and identify the cipher type</li>
                    <li>• <Link href="/" className="text-primary hover:underline">Letters to Numbers Converter</Link> - Convert between letters and numeric codes</li>
                    <li>• <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">Enigma Machine Emulator</Link> - Simulate the famous WWII encryption device</li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
