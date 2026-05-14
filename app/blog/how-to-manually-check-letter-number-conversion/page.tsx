import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "How to Manually Check Letter to Number Conversion",
  description: "Learn step-by-step methods for manually converting letters to numbers using A1Z26, ASCII, hexadecimal, and binary encoding without tools.",
  authors: [{ name: "John Reed" }],
}

export default function HowToManuallyCheckLetterNumberConversion() {
  return (
    <main className="min-h-screen bg-background">

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Converter Tool
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            How to Manually Check Letter to Number Conversion
          </h1>
          <div className="mb-8">
            <ShareButton title="How to Manually Check Letter to Number Conversion" />
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/blog/manual-letter-number-conversion.jpg"
              alt="Hand writing letter-to-number conversion calculations on paper"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-foreground leading-relaxed mb-6">
              While our <Link href="/" className="text-primary hover:underline">letter to number converter</Link> provides instant results, understanding how to manually perform these conversions is valuable for learning, verification, and situations where you do not have access to digital tools. This guide covers step-by-step methods for the most common encoding types.
            </p>

                      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#a1z26-standard-encoding-a1-to-z26" className="text-primary hover:underline">A1Z26 Standard Encoding (A=1 to Z=26)</a></li>
            <li><a href="#zero-based-encoding-a0-to-z25" className="text-primary hover:underline">Zero-Based Encoding (A=0 to Z=25)</a></li>
            <li><a href="#ascii-decimal-encoding" className="text-primary hover:underline">ASCII Decimal Encoding</a></li>
            <li><a href="#hexadecimal-ascii-encoding" className="text-primary hover:underline">Hexadecimal ASCII Encoding</a></li>
            <li><a href="#binary-ascii-encoding" className="text-primary hover:underline">Binary ASCII Encoding</a></li>
            <li><a href="#verification-tips" className="text-primary hover:underline">Verification Tips</a></li>
            <li><a href="#practice-exercise" className="text-primary hover:underline">Practice Exercise</a></li>
            <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
            </ol>
          </nav>

<h2 id="a1z26-standard-encoding-a1-to-z26" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">A1Z26 Standard Encoding (A=1 to Z=26)</h2>
            <p className="text-foreground leading-relaxed mb-6">
              The A1Z26 system is the simplest letter-number encoding. Each letter corresponds to its position in the alphabet: A=1, B=2, C=3, and so on until Z=26. Here is how to convert manually:
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 1:</strong> Write out the alphabet with corresponding numbers. You can memorize key anchor points: A=1, E=5, J=10, M=13 (middle), O=15, T=20, Z=26.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 2:</strong> For each letter in your text, count its position from A. Alternatively, use anchor points and count forward or backward. For example, R is 2 letters before T(20), so R=18.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 3:</strong> Write the number, separating multiple letters with spaces or dashes. &quot;HELLO&quot; becomes 8-5-12-12-15.
            </p>

            <h2 id="zero-based-encoding-a0-to-z25" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Zero-Based Encoding (A=0 to Z=25)</h2>
            <p className="text-foreground leading-relaxed mb-6">
              This variant starts counting from zero, common in programming contexts. The process is identical to A1Z26, but subtract 1 from each result. A=0, B=1, C=2, through Z=25.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              A quick trick: calculate the A1Z26 value first, then subtract 1. &quot;HELLO&quot; in zero-based becomes 7-4-11-11-14 (each value is one less than standard encoding).
            </p>

            <h2 id="ascii-decimal-encoding" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">ASCII Decimal Encoding</h2>
            <p className="text-foreground leading-relaxed mb-6">
              ASCII assigns specific decimal values to each character. Uppercase letters range from 65 (A) to 90 (Z), and lowercase from 97 (a) to 122 (z). Here is the manual method:
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 1:</strong> Determine the letter&apos;s position using A1Z26 (1-26).
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 2:</strong> For uppercase letters, add 64 to the position. A is position 1, so 1+64=65. For lowercase, add 96. The letter a is position 1, so 1+96=97.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 3:</strong> &quot;Hi&quot; becomes: H(8+64=72), i(9+96=105), giving &quot;72 105&quot;.
            </p>

            <h2 id="hexadecimal-ascii-encoding" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Hexadecimal ASCII Encoding</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Hexadecimal (base-16) uses digits 0-9 and letters A-F. Converting requires knowing decimal-to-hex conversion:
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 1:</strong> First, find the ASCII decimal value (as described above).
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 2:</strong> Divide the decimal by 16. The quotient is the first hex digit, the remainder is the second. Use A=10, B=11, C=12, D=13, E=14, F=15 for remainders above 9.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 3:</strong> Example: Letter H has ASCII 72. 72÷16=4 remainder 8. So H in hex is 48. Letter A has ASCII 65. 65÷16=4 remainder 1. A in hex is 41.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Quick reference:</strong> Uppercase letters in hex range from 41 (A) to 5A (Z). Lowercase from 61 (a) to 7A (z).
            </p>

            <h2 id="binary-ascii-encoding" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Binary ASCII Encoding</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Binary encoding represents each character as 8 bits (0s and 1s). The manual conversion process:
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 1:</strong> Find the ASCII decimal value.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 2:</strong> Convert to binary using repeated division by 2. Write the remainders in reverse order. Pad with leading zeros to make 8 digits.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Step 3:</strong> Example: Letter A has ASCII 65. Dividing repeatedly by 2: 65→32r1, 32→16r0, 16→8r0, 8→4r0, 4→2r0, 2→1r0, 1→0r1. Reading remainders backward: 1000001. Pad to 8 bits: 01000001.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Shortcut:</strong> Learn the binary for A (01000001) and add the letter&apos;s position-1 in binary to the last 5 bits. B is A+1=01000010, C is A+2=01000011, etc.
            </p>

            <h2 id="verification-tips" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Verification Tips</h2>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Sanity checks for A1Z26:</strong> Values should be 1-26. Any number outside this range indicates an error.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Sanity checks for ASCII:</strong> Uppercase letters should be 65-90, lowercase 97-122. Numbers in other ranges represent different characters.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Hex verification:</strong> Uppercase letters start with 4 or 5 (41-5A), lowercase with 6 or 7 (61-7A).
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              <strong>Binary verification:</strong> All letter values start with 01 in ASCII binary encoding.
            </p>

            <h2 id="practice-exercise" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Practice Exercise</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Try converting &quot;CODE&quot; manually in all formats, then check your work with our converter:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li>A1Z26: 3-15-4-5</li>
              <li>Zero-based: 2-14-3-4</li>
              <li>ASCII decimal: 67-79-68-69</li>
              <li>ASCII hex: 43-4F-44-45</li>
              <li>ASCII binary: 01000011-01001111-01000100-01000101</li>
            </ul>

            <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Conclusion</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Manual letter-to-number conversion is a valuable skill that deepens understanding of encoding systems. While digital tools are faster for lengthy conversions, knowing the underlying methods helps with verification, learning, and situations where tools are unavailable. Practice with simple words to build fluency in each encoding type.
            </p>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-2">Verify Your Manual Conversions</h3>
              <p className="text-muted-foreground mb-4">
                Check your manual work against our instant converter. Practice makes perfect!
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              >
                Open Converter Tool
              </Link>
            </div>

            <AllToolsSection />
          </div>
        </div>
      </article>

    </main>
  )
}
