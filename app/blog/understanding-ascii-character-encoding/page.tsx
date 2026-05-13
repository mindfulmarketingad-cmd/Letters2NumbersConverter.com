import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASCII Encoding",
  description: "Learn about ASCII character encoding, how letters are converted to numbers in computers, and the history of character encoding systems. Use our letters to numbers converter tool for instant conversions.",
  keywords: ["ASCII encoding", "character encoding", "ASCII table", "text to ASCII converter", "letters to numbers converter tool", "binary encoding"],
  authors: [{ name: "Neo" }],
}

export default function UnderstandingAsciiCharacterEncoding() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Letters to Numbers Converter Tool
            </Link>

            {/* Featured Image */}
            <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
              <Image 
                src="/images/blog/ascii-encoding.jpg"
                alt="ASCII character encoding table showing letters converted to binary and decimal numbers on computer terminal"
                fill
                className="object-cover"
                priority
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              ASCII Encoding
            </h1>
            <div className="mb-8">
              <ShareButton title="Understanding ASCII and Character Encoding" />
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-foreground leading-relaxed mb-6">
                Every time you type a letter on your keyboard, your computer converts it into a number. This process, known as character encoding, is fundamental to how digital devices store and process text. ASCII (American Standard Code for Information Interchange) is the most influential character encoding system ever created, and understanding it provides insight into how computers handle text at the most basic level. Our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> supports ASCII encoding for instant conversions.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What is ASCII?</h2>
              <p className="text-foreground leading-relaxed mb-6">
                ASCII is a character encoding standard developed in the 1960s that assigns numerical values to 128 characters, including uppercase and lowercase letters, digits, punctuation marks, and control characters. Each character is represented by a 7-bit binary number, allowing values from 0 to 127.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                The standard ASCII table divides characters into several groups: control characters (0-31), printable characters including space (32), digits 0-9 (48-57), uppercase letters A-Z (65-90), and lowercase letters a-z (97-122). This logical organization makes it easy to perform operations like case conversion through simple arithmetic.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How ASCII Encodes Letters</h2>
              <p className="text-foreground leading-relaxed mb-6">
                In ASCII, uppercase letters start at code 65 (A) and continue sequentially to 90 (Z). Lowercase letters begin at 97 (a) and end at 122 (z). The 32-point difference between uppercase and lowercase letters is intentional, allowing programmers to convert case by simply adding or subtracting 32 from the ASCII value.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                For example, the letter &quot;H&quot; has an ASCII value of 72. In binary, this is 01001000, and in hexadecimal, it is 48. Our letters to numbers converter tool can instantly show you these values for any text you enter.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The History of ASCII</h2>
              <p className="text-foreground leading-relaxed mb-6">
                ASCII was developed by a committee of the American Standards Association (now ANSI) and first published in 1963. It was designed to provide a common standard for data communication between different computer systems and devices. Before ASCII, different manufacturers used incompatible encoding systems, making data exchange difficult.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                The standard underwent revisions in 1967 and 1986, with the final version becoming an international standard (ISO/IEC 646). Despite being over 60 years old, ASCII remains the foundation of modern character encoding and is fully compatible with UTF-8, the dominant encoding on the internet.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Beyond ASCII: Extended Encodings</h2>
              <p className="text-foreground leading-relaxed mb-6">
                While ASCII covers 128 characters, extended ASCII uses 8 bits to represent 256 characters, adding support for accented letters and additional symbols. However, different extended ASCII standards (like ISO-8859-1 and Windows-1252) encoded these additional characters differently, leading to compatibility issues.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Unicode was developed to solve these problems by providing a universal character set that can represent virtually every character from every writing system. UTF-8, the most common Unicode encoding, maintains backward compatibility with ASCII while supporting over 1 million characters.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Applications of ASCII</h2>
              <p className="text-foreground leading-relaxed mb-6">
                Understanding ASCII is valuable in many contexts. Programmers use ASCII values for string manipulation, sorting algorithms, and input validation. Security professionals analyze ASCII in network protocols and file formats. Puzzle enthusiasts and CTF competitors frequently encounter ASCII-encoded messages that need decoding.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Conclusion</h2>
              <p className="text-foreground leading-relaxed mb-6">
                ASCII character encoding is a cornerstone of modern computing that continues to influence how we process and transmit text data. From simple letter-to-number conversions to complex encoding systems, understanding ASCII provides a foundation for working with text in any digital context.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mt-10">
                <h3 className="text-lg font-semibold text-foreground mb-2">Convert Text to ASCII</h3>
                <p className="text-muted-foreground mb-4">
                  Try our free letters to numbers converter tool to see ASCII decimal, hexadecimal, and binary values for any text.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Open Letters to Numbers Converter Tool
                </Link>
              </div>

              <AllToolsSection />
            </div>
          </div>
        </article>
      </main>

    </div>
  )
}
