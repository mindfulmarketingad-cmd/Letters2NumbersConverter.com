import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EscapeRoomBuilder } from "@/components/escape-room-builder"
import { EXAMPLE_ROOMS } from "@/lib/escape-room-types"

export const metadata: Metadata = {
  title: "Escape Room Builder | Create Free Online Cipher Puzzles",
  description: "Build your own escape room puzzles using ciphers and codes. Create A1Z26, Morse code, binary, and riddle puzzles. Share with friends via URL - no account needed!",
  keywords: ["escape room builder", "puzzle creator", "cipher puzzles", "escape room maker", "code puzzles", "free escape room"],
}

export default function EscapeRoomBuilderPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Free Tool
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Escape Room Builder
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Create your own escape room puzzles using ciphers and codes. Build challenges with A1Z26, Morse code, binary, and more. Share instantly via URL - no account needed!
                </p>
              </div>

              {/* Builder Component */}
              <EscapeRoomBuilder />

              {/* Pre-built Rooms */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Try Example Escape Rooms</h2>
                <p className="text-muted-foreground mb-6">
                  Not ready to build? Play one of our pre-made escape rooms to see how it works:
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  {EXAMPLE_ROOMS.map((room, index) => (
                    <Link
                      key={index}
                      href={`/play/escape-room?example=${index}`}
                      className="block bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all group"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {room.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {room.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="px-2 py-1 rounded bg-muted">{room.puzzles.length} puzzles</span>
                        <span className="px-2 py-1 rounded bg-muted capitalize">{room.theme}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* How It Works */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                      1
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Create Your Room</h3>
                    <p className="text-sm text-muted-foreground">
                      Name your escape room, choose a theme, and write a description to set the scene.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                      2
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Add Puzzles</h3>
                    <p className="text-sm text-muted-foreground">
                      Create cipher puzzles. Just type the answer and we auto-encode it! Add hints for stuck players.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                      3
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Share & Play</h3>
                    <p className="text-sm text-muted-foreground">
                      Generate a share link and send it to friends. They play with a timer and compete for best time!
                    </p>
                  </div>
                </div>
              </div>

              {/* Puzzle Types */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Available Puzzle Types</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">A1Z26 Cipher</h3>
                    <p className="text-sm text-muted-foreground">Convert letters to numbers (A=1, B=2, Z=26)</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">ASCII Code</h3>
                    <p className="text-sm text-muted-foreground">Encode text as ASCII character codes</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Morse Code</h3>
                    <p className="text-sm text-muted-foreground">Classic dots and dashes encoding</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Binary</h3>
                    <p className="text-sm text-muted-foreground">Convert text to binary 0s and 1s</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Hexadecimal</h3>
                    <p className="text-sm text-muted-foreground">Encode using base-16 hex values</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">Riddles</h3>
                    <p className="text-sm text-muted-foreground">Create custom word puzzles and riddles</p>
                  </div>
                </div>
              </div>

              {/* Link to converter */}
              <div className="mt-16 bg-card border border-border rounded-xl p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Need help solving ciphers?</h3>
                <p className="text-muted-foreground mb-4">
                  Use our free converter tools to decode any cipher type used in escape rooms.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Open Letters to Numbers Converter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
