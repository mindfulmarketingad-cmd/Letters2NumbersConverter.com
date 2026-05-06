import { LetterNumberConverter } from "@/components/letter-number-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CodeChart } from "@/components/code-chart"
import { PageSchemaMarkup } from "@/components/schema-markup"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { generateWebPageSchema, generateHowToSchema, generateFAQSchema } from "@/lib/schema-markup"

export const metadata: Metadata = {
  title: "Letters to Numbers Converter Tool | Free Online A1Z26 Decoder",
  description: "Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding for puzzles, cryptography, geocaching, and data science.",
  keywords: ["letters to numbers converter tool", "letter to number converter", "A1Z26 cipher decoder", "alphabet to numbers", "text to numbers converter"],
  openGraph: {
    title: "Letters to Numbers Converter Tool | Free Online A1Z26 Decoder",
    description: "Free letters to numbers converter. Convert A=1, B=2 through Z=26 instantly with multiple encoding formats.",
    url: "https://www.letters2numbersconverter.com",
    type: "website",
    images: [
      {
        url: "https://www.letters2numbersconverter.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Letters to Numbers Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Letters to Numbers Converter | Free A1Z26 Decoder",
    description: "Convert letters to numbers instantly with our free online A1Z26 converter",
    images: ["https://www.letters2numbersconverter.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com",
  },
}

export default function Home() {
  const homePageSchema = generateWebPageSchema(
    "Letters to Numbers Converter Tool | Free Online A1Z26 Decoder",
    "Free letters to numbers converter tool. Convert A=1, B=2 through Z=26 instantly. Supports A1Z26, ASCII, hexadecimal, and binary encoding.",
    "https://www.letters2numbersconverter.com",
    undefined,
    undefined,
    ["https://www.letters2numbersconverter.com/og-image.png"]
  )

  const howToSchema = generateHowToSchema(
    "How to Convert Letters to Numbers",
    "Learn how to convert letters to numbers using various encoding methods",
    [
      {
        name: "Enter Your Text",
        description: "Type or paste the text you want to convert into the input field",
      },
      {
        name: "Choose Encoding Type",
        description: "Select your preferred encoding format: A1Z26, ASCII, Hexadecimal, or Binary",
      },
      {
        name: "View Results",
        description: "The converter instantly displays the converted numbers",
      },
      {
        name: "Copy or Download",
        description: "Copy the results to clipboard or download as needed",
      },
    ]
  )

  const faqSchema = generateFAQSchema([
    {
      question: "What is a letters to numbers converter?",
      answer: "A letters to numbers converter is a tool that transforms alphabetic characters into their numeric equivalents. The most common method is A1Z26 where A=1, B=2, up to Z=26.",
    },
    {
      question: "What encoding formats are supported?",
      answer: "Our converter supports A1Z26, A0Z25, ASCII codes, Hexadecimal, and Binary encoding methods.",
    },
    {
      question: "Is the converter free to use?",
      answer: "Yes, our letters to numbers converter is completely free. No registration or payment required.",
    },
    {
      question: "Are my texts stored or monitored?",
      answer: "No, all conversions happen in your browser. We do not store, monitor, or track any data you enter.",
    },
  ])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageSchemaMarkup schema={homePageSchema} />
      <PageSchemaMarkup schema={howToSchema} />
      <PageSchemaMarkup schema={faqSchema} />
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                #1 Free Online Decoder Tool
              </div>
              <h1 id="converter" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Letters to Numbers <span className="text-primary">Converter</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                The best site for decoding messages. Convert letters into numbers instantly with our free letters to numbers converter tool. Type or paste your text, choose your encoding type, and see the result. Punctuation and special characters are automatically ignored.
              </p>
            </div>

            <LetterNumberConverter />

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>No Data Stored</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant Results</span>
              </div>
            </div>

            {/* Big Trust Stat */}
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center gap-2 px-8 py-6 rounded-2xl bg-card border border-border">
                <span className="text-4xl sm:text-5xl font-bold text-primary">100M+</span>
                <span className="text-muted-foreground font-medium">Codes Deciphered and Counting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-16">
                <h2 id="how-it-works" className="text-xl font-bold text-foreground mb-4">How the Letters to Numbers Converter Tool Works</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Numbering the letters so A=1, B=2, etc is one of the simplest ways of converting them to numbers. This is called the A1Z26 cipher. Our letters to numbers converter tool supports multiple encoding types including standard A1Z26, zero-based indexing, ASCII codes, hexadecimal, and binary representations. Whether you&apos;re solving puzzles, working on cryptography projects, or learning about character encoding, this tool provides instant and accurate conversions.
                </p>
              </div>

              {/* Standard (A1Z26) */}
              <section className="mb-16">
                <h2 id="a1z26" className="text-2xl font-bold text-foreground mb-4">Standard Letter to Number (A1Z26)</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The A1Z26 cipher is the most commonly used letter-to-number encoding in our letters to numbers converter tool. Each letter is assigned a number based on its position in the alphabet, starting with A=1 and ending with Z=26. This simple substitution cipher is widely used in puzzles, escape rooms, geocaching, and educational settings. It&apos;s easy to memorize and decode without any special tools, making it perfect for beginners learning about cryptography.
                </p>
                <CodeChart type="standard" />
              </section>

              {/* Zero-based (A0Z25) */}
              <section className="mb-16">
                <h2 id="a0z25" className="text-2xl font-bold text-foreground mb-4">Zero-based Letter Numbering (A0Z25)</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The A0Z25 cipher is a zero-indexed variant available in our letters to numbers converter tool. In this encoding, A=0, B=1, and Z=25. This format is particularly useful in programming and computer science contexts where zero-based indexing is standard. It&apos;s also used in modular arithmetic and certain cryptographic algorithms where calculations are simplified by starting from zero.
                </p>
                <CodeChart type="zero-based" />
              </section>

              {/* ASCII */}
              <section className="mb-16">
                <h2 id="ascii" className="text-2xl font-bold text-foreground mb-4">ASCII Letter to Number Conversion</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  ASCII (American Standard Code for Information Interchange) is a character encoding standard used in computers and electronic devices. Our letters to numbers converter tool supports ASCII conversion where each character is represented by a unique decimal number between 0 and 127. Uppercase letters range from 65 (A) to 90 (Z), while lowercase letters range from 97 (a) to 122 (z). ASCII codes are fundamental to computing and are commonly used in CTF challenges, programming, and data transmission.
                </p>
                <CodeChart type="ascii" />
              </section>

              {/* Hex ASCII */}
              <section className="mb-16">
                <h2 id="hex" className="text-2xl font-bold text-foreground mb-4">Hexadecimal ASCII Encoding</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Hexadecimal ASCII represents characters using base-16 numbers in our letters to numbers converter tool. Each letter is converted to its hexadecimal equivalent, with uppercase A starting at 41 and Z at 5A. Hex encoding is widely used in web development, color codes, memory addresses, and network protocols. It provides a more compact representation than binary while remaining easily convertible to decimal ASCII values.
                </p>
                <CodeChart type="hex" />
              </section>

              {/* Binary ASCII */}
              <section className="mb-16">
                <h2 id="binary" className="text-2xl font-bold text-foreground mb-4">Binary ASCII Letter Conversion</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Binary ASCII encoding converts each character to its 8-bit binary representation using our letters to numbers converter tool. This is the most fundamental form of digital encoding, as computers process all data as sequences of 0s and 1s. Uppercase A is represented as 01000001 and Z as 01011010. Binary encoding is essential for understanding how computers store and transmit text data at the lowest level.
                </p>
                <CodeChart type="binary" />
              </section>

              {/* Use Cases */}
              <div className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-16">
                <h2 id="common-uses" className="text-xl font-bold text-foreground mb-4">Common Uses for Letter to Number Conversion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Letter numbers are used frequently in geocaching mystery caches (puzzle caches), CTF (Capture The Flag) competitions, escape rooms, and puzzle games. Our letters to numbers converter tool is trusted by educators, puzzle enthusiasts, cryptography students, and data scientists worldwide for accurate and instant conversions.
                </p>
              </div>

  {/* Other Tools Section */}
  <section className="mb-16">
  <div className="mb-8">
  <h2 id="other-tools" className="text-2xl font-bold text-foreground mb-2">All Tools</h2>
  <p className="text-muted-foreground">Complete list of all available encoding, decoding, and analysis tools</p>
  </div>
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
  <Link
  href="/"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Letters to Numbers Converter</h3>
  </Link>
  <Link
  href="/"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Letters to Numbers Converter</h3>
  </Link>
  <Link
  href="/tools/numbers-to-letters"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Numbers to Letters Converter</h3>
  </Link>
  <Link
  href="/tools/letter-to-phone-number-converter"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Phone Number Converter</h3>
  </Link>
  <Link
  href="/tools/cipher-identifier"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Cipher Identifier</h3>
  </Link>
  <Link
  href="/tools/audio-spectrogram"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Audio Spectrogram Analyzer</h3>
  </Link>
  <Link
  href="/tools/book-cipher-decoder"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Book Cipher Decoder</h3>
  </Link>
  <Link
  href="/tools/password-strength-tester"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Password Strength Tester</h3>
  </Link>
  <Link
  href="/tools/escape-room-builder"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Escape Room Builder</h3>
  </Link>
  <Link
  href="/tools/enigma-machine-emulator"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Enigma Machine Emulator</h3>
  </Link>
  <Link
  href="/tools/monoalphabetic-substitution-cipher"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Monoalphabetic Substitution Cipher</h3>
  </Link>
  <Link
  href="/tools/anagram-solver"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Anagram Solver with Wildcard</h3>
  </Link>
  <Link
  href="/tools/cryptogram-generator"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Cryptogram Generator</h3>
  </Link>
  <Link
  href="/tools/cryptogram-solver-free"
  className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all"
  >
  <h3 className="font-semibold text-foreground hover:text-primary transition-colors">Cryptogram Solver</h3>
  </Link>
  </div>
  <div className="mt-6 text-center">
  <Link href="/tools" className="text-primary hover:underline font-medium">
  View all tools with descriptions →
  </Link>
  </div>
  </section>

              {/* Tools In Action Section */}
              <section className="mb-16">
                <h2 id="tools-in-action" className="text-2xl font-bold text-foreground mb-4">See Our Tools in Action</h2>
                <p className="text-muted-foreground mb-8">
                  Trusted by millions of users worldwide. Our suite of decoding tools makes cipher solving fast and accurate.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
                    <div className="aspect-video relative">
                      <Image 
                        src="/images/screenshots/converter-tool.jpg" 
                        alt="Letters to Numbers Converter showing HELLO converted to 8-5-12-12-15"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">Letters to Numbers Converter</h3>
                      <p className="text-sm text-muted-foreground">Instantly convert text to A1Z26, ASCII, hex, or binary</p>
                    </div>
                  </div>
                  <div className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
                    <div className="aspect-video relative">
                      <Image 
                        src="/images/screenshots/cipher-identifier.jpg" 
                        alt="Cipher Identifier analyzing encrypted text and detecting cipher types"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">Cipher Identifier</h3>
                      <p className="text-sm text-muted-foreground">Auto-detect Base64, Caesar, Morse, and 15+ cipher types</p>
                    </div>
                  </div>
                  <div className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all">
                    <div className="aspect-video relative">
                      <Image 
                        src="/images/screenshots/nato-alphabet.jpg" 
                        alt="NATO Phonetic Alphabet Translator showing spelled out words"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1">NATO Phonetic Alphabet</h3>
                      <p className="text-sm text-muted-foreground">Translate text to Alpha, Bravo, Charlie and more</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-16">
                <h2 id="faq" className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">What is the A1Z26 cipher?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The A1Z26 cipher is a simple substitution cipher where each letter of the alphabet is replaced by its numerical position. A=1, B=2, C=3, and so on until Z=26. It&apos;s commonly used in puzzles, escape rooms, and geocaching challenges.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">How do I convert letters to numbers?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Simply type or paste your text into our converter above and select your encoding type. The tool instantly converts each letter to its corresponding number. You can choose from A1Z26 (standard), zero-based, ASCII, hexadecimal, or binary encoding.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">What&apos;s the difference between A1Z26 and ASCII?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A1Z26 uses simple alphabet positions (A=1 to Z=26), while ASCII is a computer standard where uppercase letters are 65-90 and lowercase are 97-122. ASCII also includes numbers, punctuation, and control characters.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Is my data stored when I use this converter?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      No, all conversions happen directly in your browser. Your text is never sent to our servers or stored anywhere. Your privacy is completely protected.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Can I convert numbers back to letters?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Yes! Our converter works both ways. Enter numbers separated by spaces, commas, or dashes, and the tool will decode them back to letters using your selected encoding type.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">What are common uses for letter to number conversion?</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Letter to number conversion is used in geocaching puzzle caches, escape rooms, CTF cybersecurity challenges, cryptography education, data encoding for programming, and creating secret messages or codes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Blog Section */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 id="blog" className="text-2xl font-bold text-foreground">Learn More About Letter-Number Conversion</h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Link 
                    href="/blog/letter-number-conversion-data-science" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/data-science.jpg" 
                        alt="Data science visualization showing letter to number conversion applications"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Applications in Data Science
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Discover how letter-to-number conversion is used in data science for feature engineering and machine learning.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="/blog/understanding-ascii-character-encoding" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/ascii-encoding.jpg" 
                        alt="ASCII character encoding table and computer binary representation"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Understanding ASCII Encoding
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Learn about ASCII character encoding and how computers convert letters to numbers internally.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="/blog/puzzle-solving-letter-number-conversion" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/puzzle-solving.jpg" 
                        alt="Puzzle solving with letter number codes for geocaching and escape rooms"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Puzzle Solving Techniques
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Master puzzle solving using letter-number conversion for geocaching, escape rooms, and CTFs.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="/blog/educational-uses-letter-number-conversion" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/education.jpg" 
                        alt="Educational classroom teaching letter to number conversion for math and coding"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Educational Uses
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Explore how letter-number conversion is used in education for teaching math and coding concepts.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="/blog/letter-number-converters-cryptography" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/cryptography.jpg" 
                        alt="Cryptography and cipher encryption using letter to number substitution"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Uses in Cryptography
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Learn how letter-to-number conversion forms the foundation of cryptography and encryption.
                      </p>
                    </div>
                  </Link>

                  <Link 
                    href="/blog/how-to-manually-check-letter-number-conversion" 
                    className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-video relative bg-muted">
                      <Image 
                        src="/images/blog/manual-conversion.jpg" 
                        alt="Manual letter to number conversion guide with alphabet reference chart"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        Manual Conversion Guide
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Step-by-step methods for manually converting letters to numbers without tools.
                      </p>
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
