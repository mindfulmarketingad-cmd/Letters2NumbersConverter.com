import { Metadata } from "next"
import CryptogramSolver from "@/components/cryptogram-solver"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Cryptogram Solver | Free Online Cipher Puzzle Solver",
  description: "Free cryptogram solver tool to decode substitution cipher puzzles. Analyze letter frequencies, manipulate text, and solve cryptograms easily with our interactive solver.",
  keywords: ["cryptogram solver", "cryptogram solver free", "cipher solver", "substitution cipher solver", "decode cryptogram", "cipher text decoder"],
  openGraph: {
    title: "Cryptogram Solver | Free Online Cipher Puzzle Solver",
    description: "Solve cryptogram puzzles easily with our free interactive cryptogram solver. Features text manipulation, frequency analysis, and solving tips.",
    url: "https://www.letters2numbersconverter.com/tools/cryptogram-solver-free",
    type: "website",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/cryptogram-solver-free",
  },
}

export default function CryptogramSolverPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <CryptogramSolver />
      </main>
    </div>
  )
}
