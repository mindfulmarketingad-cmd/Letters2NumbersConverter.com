import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Build Your Own Escape Room | Free Online Guide & Tools",
  description: "Learn how to build your own escape room with our complete guide. Create cipher puzzles, design challenges, and share with friends using our free escape room builder tool.",
  keywords: ["build your own escape room", "escape room builder", "DIY escape room", "create escape room puzzles", "homemade escape room", "escape room ideas"],
}

export default function BuildYourOwnEscapeRoomPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Build Your Own Escape Room
                </h1>
                <p className="text-muted-foreground mb-4">
                  The complete guide to creating engaging puzzle experiences
                </p>
                <ShareButton title="Build Your Own Escape Room" />
              </header>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
                <Image
                  src="/images/blog/build-your-own-escape-room.jpg"
                  alt="People solving puzzles in an escape room with ciphers and clues"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Want to <strong>build your own escape room</strong> but don&apos;t know where to start? Whether you&apos;re planning a party activity, educational experience, or just want to challenge your friends, creating custom escape room puzzles has never been easier. In this guide, we&apos;ll walk you through everything you need to design, build, and share engaging escape room experiences.
                </p>

                <section className="mb-12">
                  <h2 id="why-build" className="text-2xl font-bold text-foreground mb-4">Why Build Your Own Escape Room?</h2>
                  <p className="text-muted-foreground mb-4">
                    Commercial escape rooms can cost $25-40 per person, making them expensive for groups. By building your own, you get:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Cost savings</strong> - Create unlimited puzzles for free</li>
                    <li><strong>Customization</strong> - Tailor themes and difficulty to your audience</li>
                    <li><strong>Replayability</strong> - Design new challenges anytime</li>
                    <li><strong>Educational value</strong> - Incorporate learning objectives for classrooms</li>
                    <li><strong>Remote play</strong> - Share online escape rooms with friends anywhere</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 id="planning" className="text-2xl font-bold text-foreground mb-4">Step 1: Plan Your Theme and Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Every great escape room starts with an immersive theme. Popular options include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Spy Mission</strong> - Decode secret messages to complete a mission</li>
                    <li><strong>Haunted House</strong> - Escape before the ghosts get you</li>
                    <li><strong>Treasure Hunt</strong> - Follow clues to find hidden treasure</li>
                    <li><strong>Space Station</strong> - Fix the ship before oxygen runs out</li>
                    <li><strong>Mystery Detective</strong> - Solve the crime with cryptic clues</li>
                  </ul>
                  <p className="text-muted-foreground mb-4">
                    Write a brief backstory that explains why players need to escape and what they&apos;re trying to accomplish. This narrative thread keeps players engaged throughout the experience.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 id="puzzle-types" className="text-2xl font-bold text-foreground mb-4">Step 2: Choose Your Puzzle Types</h2>
                  <p className="text-muted-foreground mb-4">
                    The best escape rooms mix different puzzle types to keep things interesting. Here are proven cipher and code puzzles that work great:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Letter-Number Ciphers</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>A1Z26</strong> - A=1, B=2, through Z=26 (perfect for beginners)</li>
                    <li><strong>ASCII codes</strong> - Each letter has a numeric value (A=65)</li>
                    <li><strong>Reverse alphabet</strong> - A=26, B=25, Z=1</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Classic Codes</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Morse code</strong> - Dots and dashes represent letters</li>
                    <li><strong>Binary</strong> - 01000001 = A (great for tech themes)</li>
                    <li><strong>Hexadecimal</strong> - 48 65 6C 6C 6F = Hello</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">Logic Puzzles</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Riddles</strong> - Wordplay clues that reveal answers</li>
                    <li><strong>Pattern recognition</strong> - What comes next in the sequence?</li>
                    <li><strong>Hidden objects</strong> - Find items concealed in images or scenes</li>
                  </ul>

                  <div className="bg-card border border-border rounded-lg p-6 my-8">
                    <p className="text-foreground font-medium mb-2">Pro Tip:</p>
                    <p className="text-muted-foreground">
                      Use our <Link href="/" className="text-primary hover:underline">Letters to Numbers Converter</Link> to quickly encode and decode messages for your puzzles. It supports A1Z26, ASCII, binary, and more!
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 id="difficulty" className="text-2xl font-bold text-foreground mb-4">Step 3: Balance the Difficulty</h2>
                  <p className="text-muted-foreground mb-4">
                    A well-designed escape room should challenge players without frustrating them. Follow these guidelines:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Start easy</strong> - First puzzle should build confidence</li>
                    <li><strong>Escalate gradually</strong> - Each puzzle slightly harder than the last</li>
                    <li><strong>Include hints</strong> - Have backup clues ready for stuck players</li>
                    <li><strong>Test thoroughly</strong> - Have others playtest before the main event</li>
                    <li><strong>Time it right</strong> - Aim for 30-60 minutes of gameplay</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 id="online-builder" className="text-2xl font-bold text-foreground mb-4">Step 4: Use Our Free Escape Room Builder</h2>
                  <p className="text-muted-foreground mb-4">
                    Skip the complicated setup and use our online tool to build your escape room in minutes. Our <Link href="/tools/escape-room-builder" className="text-primary hover:underline font-medium">Escape Room Builder</Link> lets you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>Create rooms with custom themes (spy, treasure, haunted, space, mystery)</li>
                    <li>Add multiple cipher-based puzzles with auto-encoding</li>
                    <li>Include hints for each puzzle</li>
                    <li>Preview and test before sharing</li>
                    <li>Generate a shareable URL - no account needed!</li>
                    <li>Track analytics to see where players get stuck</li>
                  </ul>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 my-8 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Ready to Create?</h3>
                    <p className="text-muted-foreground mb-4">
                      Start building your escape room now with our free online tool.
                    </p>
                    <Link 
                      href="/tools/escape-room-builder"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                      Open Escape Room Builder
                    </Link>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 id="quick-play" className="text-2xl font-bold text-foreground mb-4">Try Quick Play Mode</h2>
                  <p className="text-muted-foreground mb-4">
                    Want to experience escape rooms before building? Our <Link href="/play/escape-room?mode=quick" className="text-primary hover:underline">Quick Play mode</Link> offers visual point-and-click adventures across 5 themed environments:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li><strong>Dark Dungeon</strong> - Escape medieval captivity</li>
                    <li><strong>Lost in the Jungle</strong> - Navigate ancient ruins</li>
                    <li><strong>Midnight Park</strong> - Solve mysteries under moonlight</li>
                    <li><strong>Haunted Mansion</strong> - Flee the ghostly manor</li>
                    <li><strong>Stranded in Space</strong> - Repair your ship before it&apos;s too late</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 id="tips" className="text-2xl font-bold text-foreground mb-4">Expert Tips for Success</h2>
                  <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
                    <li>
                      <strong>Create a flow</strong> - Each solved puzzle should lead naturally to the next
                    </li>
                    <li>
                      <strong>Use red herrings sparingly</strong> - Too many false clues frustrate players
                    </li>
                    <li>
                      <strong>Build in checkpoints</strong> - Let players know they&apos;re making progress
                    </li>
                    <li>
                      <strong>Consider your audience</strong> - Adjust complexity for kids vs. adults
                    </li>
                    <li>
                      <strong>Add atmosphere</strong> - Music, lighting, and props enhance immersion
                    </li>
                    <li>
                      <strong>Have a backup plan</strong> - Be ready to provide hints if players get stuck
                    </li>
                  </ol>
                </section>

                <section className="mb-12">
                  <h2 id="conclusion" className="text-2xl font-bold text-foreground mb-4">Start Building Today</h2>
                  <p className="text-muted-foreground mb-4">
                    Building your own escape room is a rewarding creative project that brings people together. Whether you&apos;re designing a birthday party challenge, classroom activity, or remote team-building event, the tools and techniques in this guide will help you create memorable puzzle experiences.
                  </p>
                  <p className="text-muted-foreground">
                    Ready to get started? Head over to our <Link href="/tools/escape-room-builder" className="text-primary hover:underline font-medium">Escape Room Builder</Link> and create your first room in minutes. No coding required, no account needed - just pure puzzle-building fun!
                  </p>
                </section>

              </div>

              {/* Related Tools */}
              <div className="mt-16 pt-8 border-t border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    href="/tools/escape-room-builder"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Escape Room Builder</h3>
                    <p className="text-sm text-muted-foreground">Create and share custom escape room puzzles</p>
                  </Link>
                  <Link
                    href="/"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Letters to Numbers Converter</h3>
                    <p className="text-sm text-muted-foreground">Encode messages for your puzzles</p>
                  </Link>
                  <Link
                    href="/tools/cipher-identifier"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Cipher Identifier</h3>
                    <p className="text-sm text-muted-foreground">Identify unknown cipher types</p>
                  </Link>
                  <Link
                    href="/play/escape-room?mode=quick"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground mb-1">Quick Play Escape Rooms</h3>
                    <p className="text-sm text-muted-foreground">Try our visual point-and-click adventures</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        <AllToolsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
