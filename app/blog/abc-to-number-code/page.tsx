import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "ABC to Number Code: The Easy Guide to Converting Letters to Numbers",
  description: "Learn the ABC to number code system for converting alphabet letters to numbers. Perfect for kids, educators, and puzzle enthusiasts. A=1, B=2, C=3 and beyond.",
  keywords: ["abc to number code", "alphabet to number", "abc number conversion", "letter number code for kids", "alphabet code"],
  authors: [{ name: "Neo" }],
  openGraph: {
    title: "ABC to Number Code: The Easy Guide to Converting Letters to Numbers",
    description: "Learn the ABC to number code system for converting alphabet letters to numbers easily.",
    type: "article",
  },
}

export default function AbcToNumberCodePage() {
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
                ABC to Number Code: The Easy Guide to Converting Letters to Numbers
              </h1>
              <ShareButton title="ABC to Number Code: The Easy Guide to Converting Letters to Numbers" />
            </header>

            <Image
              src="/images/blog/abc-to-number-code.jpg"
              alt="Colorful ABC alphabet blocks next to 123 number blocks showing the abc to number code concept"
              width={800}
              height={400}
              className="rounded-lg mb-8 w-full object-cover"
              priority
            />

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The <strong>ABC to number code</strong> is the simplest way to convert letters into numbers. It&apos;s perfect for kids learning the alphabet, teachers creating fun activities, and anyone who enjoys puzzles and codes. In this guide, you&apos;ll learn everything about the ABC to number code system and how to use it.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What is ABC to Number Code?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The ABC to number code assigns a number to each letter of the alphabet based on its position. A is 1, B is 2, C is 3, and so on until Z is 26. This simple system is also called A1Z26 or alphabetical position encoding. It&apos;s been used for centuries to create secret messages and fun coding activities.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Complete ABC to Number Code Chart</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Here&apos;s the complete ABC to number code reference:
              </p>
              
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 font-mono text-sm">
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">A</span><span className="text-muted-foreground">= 1</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">B</span><span className="text-muted-foreground">= 2</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">C</span><span className="text-muted-foreground">= 3</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">D</span><span className="text-muted-foreground">= 4</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">E</span><span className="text-muted-foreground">= 5</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">F</span><span className="text-muted-foreground">= 6</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">G</span><span className="text-muted-foreground">= 7</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">H</span><span className="text-muted-foreground">= 8</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">I</span><span className="text-muted-foreground">= 9</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">J</span><span className="text-muted-foreground">= 10</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">K</span><span className="text-muted-foreground">= 11</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">L</span><span className="text-muted-foreground">= 12</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">M</span><span className="text-muted-foreground">= 13</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">N</span><span className="text-muted-foreground">= 14</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">O</span><span className="text-muted-foreground">= 15</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">P</span><span className="text-muted-foreground">= 16</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">Q</span><span className="text-muted-foreground">= 17</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">R</span><span className="text-muted-foreground">= 18</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">S</span><span className="text-muted-foreground">= 19</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">T</span><span className="text-muted-foreground">= 20</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">U</span><span className="text-muted-foreground">= 21</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">V</span><span className="text-muted-foreground">= 22</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">W</span><span className="text-muted-foreground">= 23</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">X</span><span className="text-muted-foreground">= 24</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">Y</span><span className="text-muted-foreground">= 25</span></div>
                  <div className="flex items-center gap-2 p-2 bg-background rounded"><span className="font-bold text-primary">Z</span><span className="text-muted-foreground">= 26</span></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Use ABC to Number Code</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Using the ABC to number code is easy! To encode a word, simply replace each letter with its number. For example:
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-6 font-mono">
                <p className="text-muted-foreground mb-2">CAT = 3-1-20</p>
                <p className="text-muted-foreground mb-2">DOG = 4-15-7</p>
                <p className="text-muted-foreground">HELLO = 8-5-12-12-15</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To decode, convert each number back to its letter. Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to instantly encode or decode any message using the ABC to number code.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Fun Activities with ABC to Number Code</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Secret messages:</strong> Write notes to friends using the ABC to number code</li>
                <li><strong>Treasure hunts:</strong> Create clues that need to be decoded</li>
                <li><strong>Learning games:</strong> Practice alphabet order and counting together</li>
                <li><strong>Spy games:</strong> Pretend to be secret agents sending coded messages</li>
                <li><strong>Math practice:</strong> Add up the numbers in words to find totals</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tips for Memorizing ABC to Number Code</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Here are some tricks to remember the ABC to number code quickly:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Remember &quot;EJOTY&quot; - these letters fall on 5, 10, 15, 20, 25</li>
                <li>The middle letter M is number 13 (halfway through 26)</li>
                <li>Practice with your name first</li>
                <li>Use songs or rhymes to remember positions</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">ABC to Number Code for Education</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Teachers and parents love using the ABC to number code for learning activities. It helps children practice alphabetical order, introduces basic coding concepts, and makes learning fun. Many educational worksheets and games incorporate this simple encoding system to engage young learners.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Try Our Free ABC to Number Converter</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ready to start encoding and decoding? Our free <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> makes using the ABC to number code quick and easy. Simply type your text and see the conversion instantly!
              </p>
            </div>

            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Start Coding Now!</h3>
              <p className="text-muted-foreground mb-4">
                Try our free ABC to number code converter and create your own secret messages.
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
