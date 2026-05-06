import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { GamepadIcon, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Play Games | Letters to Numbers Converter",
  description: "Play our collection of free online word and puzzle games. Including cryptogram games, anagram challenges, and more brain-teasing games.",
  keywords: ["online games", "word games", "puzzle games", "free games", "brain games"],
  openGraph: {
    title: "Play Games | Letters to Numbers Converter",
    description: "Play free word and puzzle games online",
    type: "website",
  },
}

const games = [
  {
    title: "Cryptogram Game",
    description: "Decode substitution cipher puzzles by guessing letter substitutions. Compete for the highest score and challenge yourself with different difficulty levels.",
    href: "/play/cryptogram-game-online",
    badge: "Popular",
  },
]

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Play <span className="text-primary">Games</span></h1>
            <p className="text-lg text-muted-foreground">
              Challenge your mind with our collection of free online word and puzzle games. Solve cryptograms, play anagrams, and more!
            </p>
          </div>

          {/* Who It's For */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-12">
            <h2 className="font-semibold text-foreground mb-3">Who These Games Are For</h2>
            <p className="text-muted-foreground mb-3">
              Our games are designed for:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary">•</span> Puzzle enthusiasts who love brain teasers</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Players looking for engaging word games</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Students wanting to improve their problem-solving skills</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Anyone seeking fun, free entertainment</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Language learners and wordplay enthusiasts</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Teachers looking for classroom activities</li>
            </ul>
          </div>

          {/* Games Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => (
                <Link
                  key={game.href}
                  href={game.href}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <GamepadIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                          {game.title}
                        </h3>
                      </div>
                    </div>
                    {game.badge && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                        {game.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{game.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Play Now <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* How Games Work */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
            <h2 className="font-semibold text-foreground mb-4">How Our Games Work</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Score System:</span> Earn points based on how fast you solve the puzzle and how many mistakes you make. The faster and more accurate you are, the higher your score!
              </p>
              <p>
                <span className="font-semibold text-foreground">Difficulty Levels:</span> Each game scales in difficulty. Start with easier puzzles to learn the mechanics, then challenge yourself with harder ones.
              </p>
              <p>
                <span className="font-semibold text-foreground">Instant Feedback:</span> Get immediate feedback on your guesses so you can learn and improve your strategy.
              </p>
              <p>
                <span className="font-semibold text-foreground">No Registration Required:</span> All games are completely free to play with no sign-up needed. Just click and start playing!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
