import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Letter to Numbers Code: The Complete Guide to Converting Alphabet to Numbers",
  description: "Learn how the letter to numbers code works. Convert A=1, B=2 through Z=26 with our complete guide to the A1Z26 cipher system used in puzzles, cryptography, and encoding.",
  keywords: ["letter to numbers code", "A1Z26 cipher", "alphabet number code", "letter number encoding", "alphabet cipher"],
  authors: [{ name: "John Reed" }],
  openGraph: {
    title: "Letter to Numbers Code: The Complete Guide to Converting Alphabet to Numbers",
    description: "Learn how the letter to numbers code works. Convert A=1, B=2 through Z=26 with our complete guide.",
    type: "article",
  },
}

export default function LetterToNumbersCodePage() {
  return (
    <main className="min-h-screen bg-background">
      
      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Converter Tool
            </Link>

            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                Letter to Numbers Code: The Complete Guide to Converting Alphabet to Numbers
              </h1>
              <ShareButton title="Letter to Numbers Code: The Complete Guide to Converting Alphabet to Numbers" />
            </header>

            <Image
              src="/images/blog/letter-to-numbers-code.jpg"
              alt="Letter tiles ABC alongside number tiles 123 demonstrating the letter to numbers code system"
              width={800}
              height={400}
              className="rounded-lg mb-8 w-full object-cover"
              priority
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The <strong>letter to numbers code</strong> is one of the most fundamental and widely used encoding systems. Whether you&apos;re solving puzzles, learning about cryptography, or working with data encoding, understanding how to convert letters to numbers is an essential skill. This comprehensive guide covers everything you need to know about the letter to numbers code system.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What is the Letter to Numbers Code?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The letter to numbers code, commonly known as the A1Z26 cipher, is a simple substitution system where each letter of the alphabet is replaced by its numerical position. In this system, A equals 1, B equals 2, and so on until Z equals 26. This straightforward encoding method has been used for centuries in various applications, from secret messages to modern computing.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Complete Letter to Numbers Code Chart</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here is the complete reference for the letter to numbers code:
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6 font-mono text-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter, i) => (
                    <div key={letter} className="flex justify-between px-2 py-1 bg-background rounded">
                      <span className="font-bold text-foreground">{letter}</span>
                      <span className="text-muted-foreground">= {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Use the Letter to Numbers Code</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Converting letters to numbers using this code is simple. To encode a message, replace each letter with its corresponding number. For example, the word &quot;HELLO&quot; becomes &quot;8-5-12-12-15&quot; because H is the 8th letter, E is the 5th, L is the 12th, and O is the 15th letter of the alphabet.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To decode, simply reverse the process by converting each number back to its corresponding letter. Use our free <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> for instant conversions.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Common Applications of Letter to Numbers Code</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Puzzle solving:</strong> Geocaching, escape rooms, and treasure hunts frequently use letter to numbers codes</li>
                <li><strong>Cryptography education:</strong> Learning the basics of cipher systems and encryption</li>
                <li><strong>Secret messages:</strong> Simple encoding for private communications</li>
                <li><strong>CTF competitions:</strong> Capture the flag cybersecurity challenges</li>
                <li><strong>Data encoding:</strong> Converting text to numerical format for processing</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tips for Working with Letter to Numbers Code</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When working with the letter to numbers code, remember that spaces and punctuation are typically ignored or represented separately. The code is case-insensitive, meaning both uppercase and lowercase letters convert to the same numbers. For quick mental conversions, remember that the letters in &quot;EJOTY&quot; fall on multiples of 5 (5, 10, 15, 20, 25).
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Try Our Free Letter to Numbers Converter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to start converting? Our free <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> makes it easy to encode and decode messages instantly. Simply type or paste your text, select your preferred encoding type, and get your results immediately. The tool supports multiple encoding formats including A1Z26, ASCII, hexadecimal, and binary.
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Convert?</h3>
              <p className="text-muted-foreground mb-4">
                Use our free letters to numbers converter tool to instantly encode or decode your text.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Try the Converter Tool
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </article>

    </main>
  )
}
