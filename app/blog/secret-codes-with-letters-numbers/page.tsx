import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "How to Create Secret Codes with Letters and Numbers",
  description: "Learn how to create your own secret codes using letters and numbers. Perfect for kids, friends, and anyone who wants to send encrypted messages. Step-by-step guide included.",
  keywords: ["secret codes", "letter number codes", "create secret messages", "cipher for kids", "encrypted messages"],
  authors: [{ name: "Neo" }],
}

export default function SecretCodesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Back Link */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <header className="mb-8">
                <h1 id="title" className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                  How to Create Secret Codes with Letters and Numbers
                </h1>
                <ShareButton title="How to Create Secret Codes with Letters and Numbers" />
              </header>

              {/* Hero Image */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/blog/secret-codes-hero.jpg"
                  alt="Secret spy theme with coded messages, decoder ring, and mysterious gadgets on desk"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  Everyone loves a good secret code. Whether you want to pass notes to friends, keep a private journal, or just have fun with cryptography, learning to create secret codes with letters and numbers is a timeless skill. In this guide, we will walk through several methods from simple to sophisticated.
                </p>

                <h2 id="basic-a1z26" className="text-2xl font-bold text-foreground mt-12 mb-4">Method 1: The Basic A1Z26 Code</h2>
                <p className="text-muted-foreground mb-4">
                  The simplest secret code assigns each letter its position in the alphabet:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-foreground mb-2">A=1, B=2, C=3 ... Z=26</p>
                  <p className="text-muted-foreground mb-1">Message: HELLO</p>
                  <p className="text-foreground">Encoded: 8-5-12-12-15</p>
                </div>
                <p className="text-muted-foreground mb-6">
                  This is easy to learn but also easy to crack. Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to practice this code quickly.
                </p>

                {/* Friends Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/secret-codes-friends.jpg"
                    alt="Two friends passing secret notes with encoded messages"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="reverse-code" className="text-2xl font-bold text-foreground mt-12 mb-4">Method 2: The Reverse Code</h2>
                <p className="text-muted-foreground mb-4">
                  Flip the alphabet so Z=1 and A=26:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-foreground mb-2">A=26, B=25, C=24 ... Z=1</p>
                  <p className="text-muted-foreground mb-1">Message: HELLO</p>
                  <p className="text-foreground">Encoded: 19-22-15-15-12</p>
                </div>

                <h2 id="offset-code" className="text-2xl font-bold text-foreground mt-12 mb-4">Method 3: The Offset Code</h2>
                <p className="text-muted-foreground mb-4">
                  Add a secret number to every letter value. For example, with offset +5:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-foreground mb-2">A=6, B=7, C=8 ... Z=31</p>
                  <p className="text-muted-foreground mb-1">Message: CAT</p>
                  <p className="text-foreground">Encoded: 8-6-25</p>
                </div>
                <p className="text-muted-foreground mb-6">
                  Share the offset number secretly with your friend so they can decode the message by subtracting 5 from each number.
                </p>

                <h2 id="keyword-cipher" className="text-2xl font-bold text-foreground mt-12 mb-4">Method 4: The Keyword Cipher</h2>
                <p className="text-muted-foreground mb-4">
                  Create a custom alphabet using a keyword. Remove duplicate letters from your keyword, then add remaining letters:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-muted-foreground mb-1">Keyword: SECRET</p>
                  <p className="text-foreground mb-1">New alphabet: S-E-C-R-T-A-B-D-F-G-H-I-J-K-L-M-N-O-P-Q-U-V-W-X-Y-Z</p>
                  <p className="text-foreground">S=1, E=2, C=3, R=4, T=5, A=6...</p>
                </div>

                {/* Journal Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/secret-codes-journal.jpg"
                    alt="Personal journal with secret coded entries and pen"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="double-encoding" className="text-2xl font-bold text-foreground mt-12 mb-4">Method 5: Double Encoding</h2>
                <p className="text-muted-foreground mb-6">
                  For extra security, encode your message twice using different methods. First use A1Z26, then apply an offset, or convert the result to binary. This makes your code much harder to crack without knowing both steps.
                </p>

                <h2 id="tips-for-unbreakable" className="text-2xl font-bold text-foreground mt-12 mb-4">Tips for Creating Harder-to-Break Codes</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Remove spaces or replace them with random numbers</li>
                  <li>Add fake numbers (nulls) between real values</li>
                  <li>Use different separators: hyphens, spaces, or no separator</li>
                  <li>Combine methods in unexpected ways</li>
                  <li>Change your code system regularly</li>
                </ul>

                <h2 id="share-code-safely" className="text-2xl font-bold text-foreground mt-12 mb-4">How to Share Your Code System Safely</h2>
                <p className="text-muted-foreground mb-4">
                  Your secret code is only as secure as how you share the decoding method:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Share the decoding key in person, never in writing</li>
                  <li>Create a code word that hints at the method</li>
                  <li>Use a pre-agreed system that changes based on the day</li>
                  <li>Include a verification word in each message</li>
                </ul>

                <h2 id="practice-encoding" className="text-2xl font-bold text-foreground mt-12 mb-4">Practice Your Encoding Skills</h2>
                <p className="text-muted-foreground mb-6">
                  The best way to master secret codes is practice. Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to quickly check your manual encoding and build speed. You can also explore different encoding types like ASCII and hexadecimal for more advanced codes.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">Start Creating Secret Messages</h3>
                <p className="text-muted-foreground mb-4">
                  Practice encoding and decoding with our free converter tools.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/" 
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Letters to Numbers Converter
                  </Link>
                  <Link 
                    href="/tools/nato-phonetic-alphabet" 
                    className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    NATO Phonetic Alphabet
                  </Link>
                </div>
              </div>

              <AllToolsSection />
            </div>
          </div>
        </article>
      </main>

    </div>
  )
}
