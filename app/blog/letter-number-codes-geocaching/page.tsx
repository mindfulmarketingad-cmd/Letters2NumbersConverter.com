import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Letter Number Codes in Geocaching: Solve Mystery Caches Like a Pro",
  description: "Master letter number codes for geocaching puzzle caches. Learn how to decode A1Z26 ciphers, convert coordinates, and solve mystery caches with our expert guide.",
  keywords: ["geocaching letter codes", "mystery cache puzzles", "geocaching ciphers", "puzzle cache solving", "A1Z26 geocaching"],
  authors: [{ name: "Neo" }],
}

export default function GeoachingCodesPage() {
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
                  Letter Number Codes in Geocaching: Solve Mystery Caches Like a Pro
                </h1>
                <ShareButton title="Letter Number Codes in Geocaching: Solve Mystery Caches Like a Pro" />
              </header>

              {/* Hero Image */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/blog/geocaching-codes-hero.jpg"
                  alt="Geocaching adventure scene with GPS device, treasure map, and compass in forest setting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  Geocaching puzzle caches (also known as mystery caches) are among the most rewarding finds in the geocaching community. Many of these puzzles use letter-to-number codes to hide coordinates or reveal clues. In this guide, you will learn how to identify, decode, and solve letter number puzzles in geocaching.
                </p>

                <h2 id="why-letter-codes" className="text-2xl font-bold text-foreground mt-12 mb-4">Why Letter Number Codes Are Popular in Geocaching</h2>
                <p className="text-muted-foreground mb-6">
                  Geocache owners love using letter number codes because they are accessible enough for beginners while still providing a satisfying challenge. The A1Z26 cipher is especially popular because it can be solved without special tools once you know the pattern. These codes often hide GPS coordinates, leading you to the actual cache location.
                </p>

                <h2 id="common-patterns" className="text-2xl font-bold text-foreground mt-12 mb-4">Common Letter Number Patterns in Puzzle Caches</h2>
                <p className="text-muted-foreground mb-4">
                  Here are the most common letter-to-number encoding patterns you will encounter in geocaching:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li><strong>A1Z26:</strong> A=1, B=2, ... Z=26 (the most common)</li>
                  <li><strong>Reverse A1Z26:</strong> A=26, B=25, ... Z=1</li>
                  <li><strong>Offset ciphers:</strong> Starting from a different number</li>
                  <li><strong>ASCII codes:</strong> Computer character values (65-90 for uppercase)</li>
                </ul>

                {/* Puzzle Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/geocaching-codes-puzzle.jpg"
                    alt="Close-up of geocaching puzzle cache with letter codes and number clues"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="decoding-coordinates" className="text-2xl font-bold text-foreground mt-12 mb-4">How to Decode Coordinates from Letter Codes</h2>
                <p className="text-muted-foreground mb-4">
                  Many puzzle caches encode GPS coordinates using letter values. Here is a typical example:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-foreground mb-2">Encoded: N AJ* BC.DEF W HII* JK.LMN</p>
                  <p className="text-muted-foreground">Decode each letter: A=1, J=10, B=2, C=3...</p>
                  <p className="text-foreground">Result: N 110* 23.456 W 899* 1011.121314</p>
                </div>
                <p className="text-muted-foreground mb-6">
                  Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to quickly decode these puzzles without making calculation errors.
                </p>

                {/* Coordinates Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/geocaching-codes-coordinates.jpg"
                    alt="GPS coordinates being decoded from letter codes with map background"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="tips-for-solving" className="text-2xl font-bold text-foreground mt-12 mb-4">Expert Tips for Solving Geocaching Puzzles</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Look for patterns that suggest coordinate format (degrees, minutes, decimal)</li>
                  <li>Check if the resulting coordinates are near the posted coordinates</li>
                  <li>The puzzle page often contains hints about the encoding method</li>
                  <li>Test your decoded coordinates on a map before heading out</li>
                  <li>Join geocaching forums for hints on particularly tricky puzzles</li>
                </ul>

                <h2 id="common-mistakes" className="text-2xl font-bold text-foreground mt-12 mb-4">Common Mistakes to Avoid</h2>
                <p className="text-muted-foreground mb-4">
                  Even experienced geocachers make these errors when decoding letter number puzzles:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Confusing letter I with number 1, or letter O with number 0</li>
                  <li>Using the wrong encoding direction (A=1 vs A=26)</li>
                  <li>Missing double-digit numbers that span multiple letters</li>
                  <li>Forgetting to check coordinate validity before driving to location</li>
                </ul>

                <h2 id="practice-solving" className="text-2xl font-bold text-foreground mt-12 mb-4">Practice Your Decoding Skills</h2>
                <p className="text-muted-foreground mb-6">
                  Before tackling difficult puzzle caches, practice with our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link>. You can encode and decode text instantly to build your recognition speed and accuracy.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">Decode Your Next Puzzle Cache</h3>
                <p className="text-muted-foreground mb-4">
                  Use our free converter to solve mystery cache puzzles quickly and accurately.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Try Letters to Numbers Converter
                </Link>
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
