import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { AllToolsSection } from "@/components/all-tools-section"
import { ShareButton } from "@/components/share-button"

export const metadata: Metadata = {
  title: "Fun Number Word Games and Activities for All Ages",
  description: "Discover engaging number word games and activities using letter-to-number codes. Perfect for families, classrooms, and parties. From simple A1Z26 games to creative word puzzles.",
  keywords: ["number word games", "letter number activities", "alphabet games", "educational word games", "family puzzle games"],
  authors: [{ name: "Neo" }],
}

export default function NumberWordGamesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">

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
                  Fun Number Word Games and Activities for All Ages
                </h1>
                <ShareButton title="Fun Number Word Games and Activities for All Ages" />
              </header>

              {/* Hero Image */}
              <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
                <Image
                  src="/images/blog/number-word-games-hero.jpg"
                  alt="Family playing word games at table with colorful letter and number tiles"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  Letter-to-number games combine literacy and numeracy skills in fun and engaging ways. Whether you are looking for classroom activities, family game night ideas, or party entertainment, these number word games offer something for everyone. The simple concept of A=1, B=2, Z=26 opens up a world of creative possibilities.
                </p>

                <h2 id="word-value-challenge" className="text-2xl font-bold text-foreground mt-12 mb-4">1. Word Value Challenge</h2>
                <p className="text-muted-foreground mb-4">
                  In this game, each letter has its numerical value (A=1, B=2, etc.), and players compete to find words with the highest total value.
                </p>
                <p className="text-muted-foreground mb-4"><strong>How to play:</strong></p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Set a category (animals, foods, names, etc.)</li>
                  <li>Players have 60 seconds to write down words</li>
                  <li>Calculate each word value by summing letter values</li>
                  <li>Highest total wins that round</li>
                </ol>
                <p className="text-muted-foreground mb-6">
                  <strong>Example:</strong> CAT = 3+1+20 = 24, DOG = 4+15+7 = 26. Dog wins!
                </p>

                {/* Tiles Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/number-word-games-tiles.jpg"
                    alt="Close-up of Scrabble-style letter tiles and number tiles on game board"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="secret-message-relay" className="text-2xl font-bold text-foreground mt-12 mb-4">2. Secret Message Relay</h2>
                <p className="text-muted-foreground mb-4">
                  A team game perfect for parties or classroom activities where players encode and decode messages in relay format.
                </p>
                <p className="text-muted-foreground mb-4"><strong>How to play:</strong></p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Divide into teams of 3-5 players</li>
                  <li>First player encodes a short word into numbers</li>
                  <li>Pass the numbers to the next player who decodes it</li>
                  <li>Continue until the message reaches the last player</li>
                  <li>First team with the correct decoded word wins</li>
                </ol>

                <h2 id="target-number" className="text-2xl font-bold text-foreground mt-12 mb-4">3. Target Number Game</h2>
                <p className="text-muted-foreground mb-6">
                  Players try to find words that add up to a specific target number. Great for developing mental math skills alongside vocabulary. Example: Find words that equal exactly 50. MOUSE = 13+15+21+19+5 = 73 (too high), GAME = 7+1+13+5 = 26 (too low), WATER = 23+1+20+5+18 = 67 (still searching!).
                </p>

                {/* Kids Image */}
                <div className="aspect-video relative rounded-xl overflow-hidden my-8">
                  <Image
                    src="/images/blog/number-word-games-kids.jpg"
                    alt="Children learning alphabet with number associations in a bright educational setting"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 id="alphabet-math" className="text-2xl font-bold text-foreground mt-12 mb-4">4. Alphabet Math Puzzles</h2>
                <p className="text-muted-foreground mb-4">
                  Create math equations using letter values:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6 font-mono text-sm">
                  <p className="text-foreground mb-1">A + B + C = ?  (1+2+3 = 6)</p>
                  <p className="text-foreground mb-1">Z - M = ?  (26-13 = 13 = M)</p>
                  <p className="text-foreground">CAT x 2 = ?  (24 x 2 = 48)</p>
                </div>

                <h2 id="name-value-game" className="text-2xl font-bold text-foreground mt-12 mb-4">5. Name Value Game</h2>
                <p className="text-muted-foreground mb-6">
                  A great icebreaker where everyone calculates their name value. Whose first name has the highest value? What about first and last name combined? People with the same name value form teams!
                </p>

                <h2 id="hidden-word-puzzles" className="text-2xl font-bold text-foreground mt-12 mb-4">6. Hidden Word Puzzles</h2>
                <p className="text-muted-foreground mb-4">
                  Create puzzles where the answer is encoded in numbers:
                </p>
                <div className="bg-muted p-4 rounded-lg mb-6">
                  <p className="text-muted-foreground mb-2">What animal is: 3-1-20?</p>
                  <p className="text-foreground font-semibold">Answer: CAT (C=3, A=1, T=20)</p>
                </div>
                <p className="text-muted-foreground mb-6">
                  Use our <Link href="/" className="text-primary hover:underline">letters to numbers converter tool</Link> to create and verify your puzzles quickly.
                </p>

                <h2 id="classroom-activities" className="text-2xl font-bold text-foreground mt-12 mb-4">Classroom Activity Ideas</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li><strong>Spelling practice:</strong> Encode spelling words for students to decode</li>
                  <li><strong>Vocabulary building:</strong> Find words that match specific number patterns</li>
                  <li><strong>Math integration:</strong> Calculate word values to practice addition</li>
                  <li><strong>Creative writing:</strong> Write coded messages to classmates</li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="mt-12 p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">Create Your Own Number Word Puzzles</h3>
                <p className="text-muted-foreground mb-4">
                  Use our free converter to design custom games and verify answers instantly.
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

    </div>
  )
}
