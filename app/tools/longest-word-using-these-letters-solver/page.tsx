import { Metadata } from "next"
import { LongestWordSolver } from "@/components/longest-word-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Longest Word Using These Letters Solver",
  description: "Longest Word Using These Letters Solver - Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with filtering options. Free online word game helper.",
  keywords: ["longest word solver", "word maker", "anagram solver", "words from letters", "letter combination solver", "word finder", "anagram generator"],
  openGraph: {
    title: "Longest Word Using These Letters Solver",
    description: "Find the longest words you can make from any set of letters instantly",
    type: "website",
  },
}

export default function LongestWordPage() {
  return (
    <ToolLayout
      toolId="longest-word-solver"
      toolName="Longest Word Using These Letters Solver"
      toolDescription="Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with advanced filtering options for word games and puzzles."
      toolComponent={<LongestWordSolver />}
    />
  )
}
