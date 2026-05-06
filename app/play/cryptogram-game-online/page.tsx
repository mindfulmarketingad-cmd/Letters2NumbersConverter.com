import { Metadata } from "next"
import CryptogramGame from "@/components/cryptogram-game"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Play Cryptogram Game Online | Free Interactive Puzzle Game",
  description: "Play our free online cryptogram game. Decode substitution cipher puzzles, compete for high scores, and challenge your puzzle-solving skills.",
  keywords: ["cryptogram game", "online cryptogram", "cipher game", "word puzzle game", "substitution cipher game"],
  openGraph: {
    title: "Play Cryptogram Game Online",
    description: "Decode cryptogram puzzles and compete for the highest score",
    type: "website",
  },
}

export default function CryptogramGamePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container mx-auto">
          <CryptogramGame />
        </div>
      </main>
    </div>
  )
}
