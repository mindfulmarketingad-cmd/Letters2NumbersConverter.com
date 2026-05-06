import { Metadata } from "next"
import AnagramSolver from "@/components/anagram-solver"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "Anagram Solver with Wildcard | Find All Possible Words",
  description: "Use our free anagram solver with wildcard to find all possible words from your letters. Supports up to 3 wildcards (?). Filter by starts, ends, contains, or exact length.",
  keywords: ["anagram solver", "anagram solver with wildcard", "anagram finder", "word anagram", "wildcard anagram", "find words from letters"],
  openGraph: {
    title: "Anagram Solver with Wildcard",
    description: "Find all possible words from your letters with wildcard support.",
    type: "website",
  },
}

export default function AnagramSolverPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 py-12">
        <div className="container mx-auto">
          <AnagramSolver />
        </div>
      </main>
    </div>
  )
}
