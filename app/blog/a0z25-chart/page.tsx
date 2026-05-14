import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/cta-button'

export const metadata: Metadata = {
  title: 'A0Z25 Chart',
  description: 'A0Z25 Chart - The complete guide to A0Z25 encoding. Learn how A0Z25 differs from A1Z26, who uses it, and how to use our free online conversion tools.',
  keywords: ['A0Z25 chart', 'A0Z25 encoding', 'A0Z25 conversion', 'alphabet to numbers'],
  openGraph: {
    title: 'A0Z25 Chart | Letters2NumbersConverter.com',
    description: 'Complete guide to A0Z25 encoding with interactive conversion tools and charts.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/a0z25-chart',
    images: [
      {
        url: '/images/a0z25-chart-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'A0Z25 Chart - Alphabet to Numbers Encoding',
      },
    ],
    authors: [{ name: 'John Reed' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A0Z25 Chart',
    description: 'Learn about A0Z25 encoding and use our free conversion tools.',
    images: ['/images/a0z25-chart-blog.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/blog/a0z25-chart',
  },
}

export default function A0Z25ChartPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A0Z25 Chart',
    description: 'Complete guide to A0Z25 encoding, its differences from A1Z26, and who uses it.',
    image: '/images/a0z25-chart-blog.jpg',
    author: {
      '@type': 'Person',
      name: 'Neo',
    },
    datePublished: new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: 'Letters2NumbersConverter.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.letters2numbersconverter.com/logo.png',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is A0Z25 encoding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A0Z25 is a simple alphabetic encoding system where A=0, B=1, C=2, and so on, up to Z=25. It is commonly used in programming, cryptography, and data encoding.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between A0Z25 and A1Z26?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The main difference is the starting point: A0Z25 starts counting from 0 (A=0), while A1Z26 starts from 1 (A=1). This makes A0Z25 ideal for zero-indexed systems like programming arrays.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who uses A0Z25 charts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Programmers, cryptographers, data scientists, security professionals, students, and puzzle enthusiasts all use A0Z25 charts for encoding, decoding, and educational purposes.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I convert text to A0Z25?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use the A0Z25 Cipher Translator tool on Letters2NumbersConverter.com to instantly convert text to A0Z25 format. Simply enter your text and the tool handles the conversion automatically.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-center text-black dark:text-white mb-6">
              A0Z25 Chart
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              A0Z25 Chart is a fundamental encoding system where letters are converted to numbers starting from 0. This guide explains what A0Z25 is, how it differs from A1Z26, and why developers and cryptographers rely on it.
            </p>
            <div className="relative w-full h-64 md:h-96 mb-8">
              <Image
                src="/images/a0z25-chart-blog.jpg"
                alt="A0Z25 Chart - Complete alphabet to numbers encoding guide"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="prose dark:prose-invert max-w-none space-y-8">
            {/* What is A0Z25 */}
            <section>
              <h2 className="text-6xl font-bold text-black dark:text-white mb-4">
                What is the A0Z25 Cipher?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A0Z25 Chart is a simple yet powerful encoding system used throughout computing, cryptography, and data science. In this system, each letter of the alphabet is assigned a numerical value starting from 0: A=0, B=1, C=2, D=3, and continuing through Z=25. This zero-indexed approach makes A0Z25 particularly useful in programming environments where arrays and indexing typically start at 0.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you&apos;re working with encryption algorithms, string manipulation, or puzzle solving, A0Z25 provides a standardized method to convert alphabetic characters into their numeric equivalents. Our <Link href="/tools/a0z25-cipher-translator" className="text-teal-500 hover:text-teal-600 underline">A0Z25 Cipher Translator</Link> tool makes this conversion instant and effortless.
              </p>
            </section>

            {/* A1Z26 VS A0Z25 */}
            <section>
              <h2 className="text-6xl font-bold text-black dark:text-white mb-4">
                A0Z25 vs A1Z26: Key Differences
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                One of the most common questions we receive is about the difference between A1Z26 and A0Z25. While they seem similar at first glance, the distinction is crucial depending on your use case:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-black dark:text-white mb-3">A0Z25</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>A = 0 (zero-indexed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Z = 25</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Used in programming & arrays</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Computer-friendly format</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/50 p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-black dark:text-white mb-3">A1Z26</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>A = 1 (one-indexed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Z = 26</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Used in cryptography & puzzles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-500 font-bold">•</span>
                      <span>Human-friendly format</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                If you&apos;re building software or working with programming logic, A0Z25 is your go-to choice. If you&apos;re solving puzzles or doing traditional cryptography, A1Z26 is more common. Our <Link href="/tools/a1z26-translator" className="text-teal-500 hover:text-teal-600 underline">A1Z26 Translator</Link> tool is available for one-indexed conversions.
              </p>
            </section>

            {/* Who uses A0Z25 */}
            <section>
              <h2 className="text-6xl font-bold text-black dark:text-white mb-4">
                Real-World Uses of A0Z25
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                A0Z25 encoding is used by a diverse range of professionals and enthusiasts:
              </p>
              
              <ul className="space-y-3 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Software Developers</strong> use A0Z25 for string manipulation, array indexing, and algorithm implementation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Cryptographers</strong> employ it as a foundational encoding technique in cipher algorithms
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Data Scientists</strong> use it for text preprocessing and feature engineering
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Cybersecurity Professionals</strong> use it for penetration testing and security analysis
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Educators & Students</strong> teach and learn fundamental encoding principles
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-500 font-bold text-xl">→</span>
                  <div>
                    <strong className="text-black dark:text-white">Puzzle Enthusiasts</strong> solve encoding-based riddles and challenges
                  </div>
                </li>
              </ul>
            </section>

            {/* Best Tools Section */}
            <section>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Why Choose Letters2NumbersConverter.com
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We offer the best deciphering and encoding tools online to help you work with A0Z25 and related conversion formats:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Link href="/tools/a0z25-cipher-translator" className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-teal-500/50 transition-colors">
                  <h4 className="font-bold text-black dark:text-white mb-2">A0Z25 Cipher Translator</h4>
                  <p className="text-sm text-muted-foreground">Instantly convert text to A0Z25 format with our powerful translator</p>
                </Link>
                <Link href="/tools/base64-decoder" className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-teal-500/50 transition-colors">
                  <h4 className="font-bold text-black dark:text-white mb-2">Base64 Decoder</h4>
                  <p className="text-sm text-muted-foreground">Decode base64-encoded text and data instantly</p>
                </Link>
                <Link href="/tools/letters-to-numbers-converter" className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-teal-500/50 transition-colors">
                  <h4 className="font-bold text-black dark:text-white mb-2">Letters to Numbers Converter</h4>
                  <p className="text-sm text-muted-foreground">Convert alphabetic characters to numeric values</p>
                </Link>
                <Link href="/tools/morse-code-translator" className="p-4 rounded-lg bg-secondary/50 border border-border hover:border-teal-500/50 transition-colors">
                  <h4 className="font-bold text-black dark:text-white mb-2">Morse Code Translator</h4>
                  <p className="text-sm text-muted-foreground">Translate text to Morse code and vice versa</p>
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-3">
                <details className="p-4 rounded-lg bg-secondary/50 border border-border group cursor-pointer">
                  <summary className="font-bold text-black dark:text-white flex justify-between items-center">
                    What exactly is A0Z25 encoding?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">
                    A0Z25 is a zero-indexed encoding system where A corresponds to 0, B to 1, continuing through Z to 25. It&apos;s widely used in programming, particularly in languages that use zero-based indexing.
                  </p>
                </details>

                <details className="p-4 rounded-lg bg-secondary/50 border border-border group cursor-pointer">
                  <summary className="font-bold text-black dark:text-white flex justify-between items-center">
                    When should I use A0Z25 instead of A1Z26?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">
                    Use A0Z25 when working with programming arrays, computer systems, or zero-indexed contexts. Use A1Z26 for traditional cryptography, puzzles, or human-friendly scenarios where counting starts from 1.
                  </p>
                </details>

                <details className="p-4 rounded-lg bg-secondary/50 border border-border group cursor-pointer">
                  <summary className="font-bold text-black dark:text-white flex justify-between items-center">
                    Can I use A0Z25 for encryption?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">
                    Yes, A0Z25 can be used as a component in encryption algorithms. However, standalone A0Z25 is a simple substitution cipher and should be combined with other techniques for strong security.
                  </p>
                </details>

                <details className="p-4 rounded-lg bg-secondary/50 border border-border group cursor-pointer">
                  <summary className="font-bold text-black dark:text-white flex justify-between items-center">
                    Does Letters2NumbersConverter support A0Z25?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-muted-foreground mt-3">
                    Absolutely! Our <Link href="/tools/a0z25-cipher-translator" className="text-teal-500 hover:text-teal-600 underline">A0Z25 Cipher Translator</Link> provides instant conversion with support for encoding, decoding, and multiple output formats.
                  </p>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary/50 border border-border rounded-lg p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-3">Ready to Convert with A0Z25?</h3>
              <p className="text-muted-foreground mb-6">
                Start using our free A0Z25 Cipher Translator right now. No registration required, no data stored.
              </p>
              <CTAButton href="/tools/a0z25-cipher-translator">
                Open A0Z25 Translator
              </CTAButton>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
