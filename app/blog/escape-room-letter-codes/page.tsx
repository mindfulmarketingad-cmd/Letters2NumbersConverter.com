import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Escape Room Letter Codes: Master Every Number Lock Puzzle",
  description: "Learn how to solve escape room letter codes and number lock puzzles. Expert strategies for decoding A1Z26 ciphers, combination locks, and cryptic clues under pressure.",
  keywords: ["escape room codes", "letter to number puzzle", "combination lock solving", "escape room tips", "cipher puzzles"],
}

export default function EscapeRoomCodesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

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
                  Escape Room Letter Codes: Master Every Number Lock Puzzle
                </h1>
                <ShareButton title="Escape Room Letter Codes: Master Every Number Lock Puzzle" />
              </header>

              {/* Hero Image */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/blog/escape-room-codes-hero.jpg"
                  alt="Dramatic escape room scene with combination lock and mysterious coded clues on the wall"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  The clock is ticking. You have found a clue with letters, but the lock needs numbers. Letter-to-number codes are one of the most common puzzle types in escape rooms, and mastering them can be the difference between escaping in time or watching those final seconds slip away. Here is everything you need to know about solving letter code puzzles under pressure.
                </p>

                <h2 id="common-letter-codes" className="text-2xl font-bold text-foreground mt-12 mb-4">Common Letter Code Types in Escape Rooms</h2>
                <p className="text-muted-foreground mb-4">
                  Escape room designers use several letter-to-number encoding methods. Recognizing the type quickly is half the battle:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li><strong>A1Z26 (Standard):</strong> A=1, B=2, ... Z=26 - the most common</li>
                  <li><strong>Phone keypad:</strong> Letters mapped to phone buttons (ABC=2, DEF=3)</li>
                  <li><strong>Position counting:</strong> Counting specific letters in a phrase</li>
                  <li><strong>Word length:</strong> Number of letters in each word</li>
                </ul>

                {/* Lock Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/escape-room-codes-lock.jpg"
                    alt="Close-up of combination padlock being solved in an escape room setting"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="solving-under-pressure" className="text-2xl font-bold text-foreground mt-12 mb-4">Strategies for Solving Under Pressure</h2>
                <p className="text-muted-foreground mb-4">
                  When the timer is counting down, use these techniques to decode faster:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-3 mb-6">
                  <li><strong>Memorize key letters:</strong> Know that A=1, M=13 (middle), Z=26 instantly</li>
                  <li><strong>Use the alphabet on the wall:</strong> Most escape rooms have alphabets posted - count from there</li>
                  <li><strong>Work in pairs:</strong> One person calls letters, another finds numbers</li>
                  <li><strong>Write it down:</strong> Do not try to hold everything in your head</li>
                  <li><strong>Check lock length first:</strong> Know how many digits you need before decoding</li>
                </ol>

                <h2 id="quick-reference" className="text-2xl font-bold text-foreground mt-12 mb-4">Quick Reference: Letter Number Values</h2>
                <p className="text-muted-foreground mb-4">
                  Memorize these anchor points to speed up your decoding:
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-foreground">A = 1</p>
                    <p className="font-mono text-foreground">E = 5</p>
                    <p className="font-mono text-foreground">J = 10</p>
                    <p className="font-mono text-foreground">M = 13</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="font-mono text-foreground">N = 14</p>
                    <p className="font-mono text-foreground">T = 20</p>
                    <p className="font-mono text-foreground">Y = 25</p>
                    <p className="font-mono text-foreground">Z = 26</p>
                  </div>
                </div>

                {/* Clue Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/escape-room-codes-clue.jpg"
                    alt="Written clue card with letter substitution puzzle and escape room props"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="practice-before-escape" className="text-2xl font-bold text-foreground mt-12 mb-4">Practice Before Your Next Escape</h2>
                <p className="text-muted-foreground mb-6">
                  The best way to get faster at letter-to-number conversion is practice. Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to train your brain before your next escape room adventure. Try encoding and decoding common words until you can recognize patterns instantly.
                </p>

                <h2 id="phone-keypad-codes" className="text-2xl font-bold text-foreground mt-12 mb-4">Phone Keypad Codes in Escape Rooms</h2>
                <p className="text-muted-foreground mb-6">
                  Phone keypad codes are another popular puzzle type. Letters map to numbers 2-9 just like on a telephone: ABC=2, DEF=3, GHI=4, JKL=5, MNO=6, PQRS=7, TUV=8, WXYZ=9. Our <Link href="/tools/letter-to-phone-number-converter" className="text-primary hover:underline">phone number converter tool</Link> can help you practice these conversions.
                </p>

                <h2 id="team-strategies" className="text-2xl font-bold text-foreground mt-12 mb-4">Team Strategies for Code-Heavy Rooms</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Designate one person as the code specialist before entering</li>
                  <li>Keep pen and paper ready at all times</li>
                  <li>Photograph clues so multiple people can work on them</li>
                  <li>Call out discoveries immediately - someone else might have the matching piece</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">Practice Before Your Next Escape</h3>
                <p className="text-muted-foreground mb-4">
                  Build your speed with our free converter tools before your next escape room adventure.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/" 
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Letters to Numbers Converter
                  </Link>
                  <Link 
                    href="/tools/letter-to-phone-number-converter" 
                    className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    Phone Number Converter
                  </Link>
                </div>
              </div>

              <AllToolsSection />
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
