import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "FAQ - Letters to Numbers Converter Questions Answered",
  description: "Find answers to frequently asked questions about letter to number conversion, A1Z26 cipher, ASCII encoding, and how to use our free converter tools.",
  keywords: ["letters to numbers FAQ", "A1Z26 questions", "letter number conversion help", "alphabet cipher FAQ", "how to convert letters to numbers"],
  openGraph: {
    title: "FAQ - Letters to Numbers Converter Questions Answered",
    description: "Find answers to frequently asked questions about letter to number conversion and our free converter tools.",
    type: "website",
  },
}

const faqs = [
  {
    category: "Basic Conversion",
    questions: [
      {
        q: "What is A1Z26 cipher?",
        a: "A1Z26 is a simple substitution cipher where each letter of the alphabet is replaced by its numerical position. A equals 1, B equals 2, C equals 3, and so on until Z equals 26. It's one of the most basic and widely-used letter-to-number encoding systems."
      },
      {
        q: "How do I convert letters to numbers?",
        a: "To convert letters to numbers using A1Z26, simply replace each letter with its position in the alphabet. For example, A=1, B=2, C=3... Z=26. You can use our free letters to numbers converter tool for instant conversions, or memorize the alphabet positions for manual conversion."
      },
      {
        q: "How do I convert numbers back to letters?",
        a: "To convert numbers back to letters, find the letter at that position in the alphabet. For example, 1=A, 2=B, 3=C... 26=Z. Our converter tool works both ways - just enter your numbers separated by spaces, commas, or dashes, and it will decode them to letters instantly."
      },
      {
        q: "What happens to spaces and punctuation when converting?",
        a: "In standard A1Z26 conversion, spaces and punctuation are typically ignored or kept as-is since they don't have numerical equivalents in the 1-26 system. Our converter preserves spaces and special characters in the output for readability."
      },
      {
        q: "Is the conversion case-sensitive?",
        a: "No, A1Z26 conversion is not case-sensitive. Both uppercase 'A' and lowercase 'a' convert to 1. The same applies to all letters. However, if you need case-sensitive conversion, you can use ASCII encoding which assigns different values to uppercase (65-90) and lowercase (97-122) letters."
      },
    ]
  },
  {
    category: "Encoding Types",
    questions: [
      {
        q: "What's the difference between A1Z26 and ASCII?",
        a: "A1Z26 uses alphabet positions (A=1 through Z=26), while ASCII is a computer standard with different values. In ASCII, uppercase letters are 65-90 (A=65, B=66... Z=90) and lowercase are 97-122 (a=97, b=98... z=122). ASCII also includes values for numbers, punctuation, and control characters."
      },
      {
        q: "What is hexadecimal encoding?",
        a: "Hexadecimal (hex) encoding converts text to base-16 numbers using digits 0-9 and letters A-F. When applied to letters, it represents the ASCII value in hex format. For example, 'A' (ASCII 65) becomes '41' in hex, and 'a' (ASCII 97) becomes '61'."
      },
      {
        q: "What is binary encoding for letters?",
        a: "Binary encoding converts each letter to its 8-bit binary representation based on ASCII values. For example, 'A' (ASCII 65) becomes '01000001' in binary. This encoding is fundamental to how computers store and process text."
      },
      {
        q: "What is zero-based encoding (A0Z25)?",
        a: "Zero-based encoding assigns A=0, B=1, C=2... Z=25 instead of the standard A=1 through Z=26. This is commonly used in programming where arrays and indexes start at 0. Our converter supports this format as well."
      },
      {
        q: "Which encoding should I use?",
        a: "Use A1Z26 for puzzles, geocaching, and general encoding. Use ASCII for programming and technical applications. Use hex or binary for computer science contexts. Our converter lets you switch between all formats instantly."
      },
    ]
  },
  {
    category: "Practical Uses",
    questions: [
      {
        q: "How is letter-to-number conversion used in geocaching?",
        a: "Geocaching puzzle caches often encode GPS coordinates using letter-to-number substitution. You might find a clue like 'N 45° AB.CDE' where you need to convert letters to numbers. For example, if the clue contains 'HELLO', you'd convert it to coordinates using H=8, E=5, L=12, L=12, O=15."
      },
      {
        q: "How do escape rooms use letter-number codes?",
        a: "Escape rooms frequently use letter-to-number codes for combination locks. A puzzle might give you letters that you need to convert to numbers to open a padlock. For example, 'CAT' would become 3-1-20, potentially opening a 3-digit or 4-digit combination lock."
      },
      {
        q: "Can I use this for cryptography?",
        a: "A1Z26 is a basic cipher and not secure for serious cryptography since it's easily broken. However, it's excellent for learning cipher concepts, creating fun puzzles, and combining with other encoding methods for more complex codes."
      },
      {
        q: "Is letter-to-number conversion used in programming?",
        a: "Yes! Programmers often work with character encoding like ASCII and Unicode. Understanding letter-to-number relationships is essential for string manipulation, data processing, sorting algorithms, and many other programming tasks."
      },
      {
        q: "How can teachers use letter-number conversion in education?",
        a: "Teachers use letter-number activities to reinforce alphabet order, teach basic coding concepts, create math-literacy connections, and develop critical thinking. Activities include decoding secret messages, creating number puzzles, and calculating word values."
      },
    ]
  },
  {
    category: "Using Our Converter Tool",
    questions: [
      {
        q: "Is the converter tool free to use?",
        a: "Yes, our letters to numbers converter tool is completely free with no registration required. You can use it unlimited times for any purpose - puzzles, education, programming, or just for fun."
      },
      {
        q: "Is my data private when using the converter?",
        a: "Absolutely. All conversions happen directly in your browser using JavaScript. Your text is never sent to our servers, stored, or logged. Your privacy is completely protected."
      },
      {
        q: "Can I convert large amounts of text?",
        a: "Yes, our converter can handle text of any length. Simply paste your text into the input field, and it will convert everything instantly. There's no character limit."
      },
      {
        q: "Does the converter work on mobile devices?",
        a: "Yes, our converter is fully responsive and works on all devices including smartphones, tablets, and desktop computers. The interface adapts to your screen size for the best experience."
      },
      {
        q: "Can I copy and download the results?",
        a: "Yes, our converter includes copy-to-clipboard and download buttons. You can copy your converted text with one click or download it as a text file for later use."
      },
      {
        q: "What other tools do you offer?",
        a: "Besides our main letters to numbers converter, we offer a NATO Phonetic Alphabet Translator, Phone Number Letter Converter, and Cipher Identifier Tool. Visit our tools page to explore all available utilities."
      },
    ]
  },
  {
    category: "Quick Tips & Tricks",
    questions: [
      {
        q: "What's the EJOTY trick for quick conversion?",
        a: "EJOTY is a mnemonic for remembering letters at positions that are multiples of 5: E=5, J=10, O=15, T=20, Y=25. Use these as anchor points to quickly calculate nearby letters. For example, K is one after J, so K=11."
      },
      {
        q: "How do I quickly find a letter's position?",
        a: "Use anchor points: A=1, E=5, J=10, M=13 (middle), O=15, T=20, Y=25, Z=26. Count from the nearest anchor. For example, H is 3 after E, so H = 5 + 3 = 8."
      },
      {
        q: "What separator should I use between numbers?",
        a: "Common separators include spaces (8 5 12 12 15), dashes (8-5-12-12-15), or commas (8,5,12,12,15). Use whatever is clearest for your purpose. Our converter accepts all these formats for decoding."
      },
      {
        q: "How do I handle ambiguous number sequences?",
        a: "Without separators, '112' could be 1-1-2 (AAB) or 11-2 (KB) or 1-12 (AL). Always use separators when encoding to avoid ambiguity. When decoding unclear sequences, try different interpretations."
      },
      {
        q: "Can I combine A1Z26 with other ciphers?",
        a: "Yes! Many puzzles combine A1Z26 with other techniques like reversing the result, using modular arithmetic, or layering multiple encoding methods. A1Z26 often serves as the first or last step in multi-layer puzzles."
      },
    ]
  },
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h1 id="faq" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about letter to number conversion, our free converter tools, and encoding methods.
              </p>
            </header>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-12 text-center">
              <h2 className="text-lg font-semibold text-foreground mb-2">Need to Convert Text?</h2>
              <p className="text-muted-foreground mb-4">
                Try our free letters to numbers converter tool for instant conversions.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Open Converter Tool
              </Link>
            </div>

            {/* FAQ Schema Markup for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": faqs.flatMap(category => 
                    category.questions.map(item => ({
                      "@type": "Question",
                      "name": item.q,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                      }
                    }))
                  )
                })
              }}
            />

            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <section key={categoryIndex}>
                  <h2 id={category.category.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    {category.category}
                  </h2>
                  <div className="space-y-6">
                    {category.questions.map((item, questionIndex) => (
                      <div key={questionIndex} className="bg-card border border-border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">
                          {item.q}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 p-8 bg-muted/30 rounded-xl text-center">
              <h2 id="still-have-questions" className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Check out our blog for in-depth guides or contact us directly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Read Our Blog
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  )
}
