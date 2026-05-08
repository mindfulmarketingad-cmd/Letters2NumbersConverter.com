import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import AnagramSolver from "@/components/anagram-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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


const toolData: ToolData = getToolData("anagram-solver")

export default function AnagramSolverPage() {
  return (
    <ToolPageWrapper toolSlug="anagram-solver">
      <ToolLayout
        toolId="anagram-solver"
        toolName="Anagram Solver"
        toolDescription="Find all possible words from your letters with wildcard support. This powerful anagram solver helps you discover words for word games, crosswords, and language puzzles. Supports up to 3 wildcards (?) for advanced searching."
        toolComponent={<AnagramSolver />}
        toolData={toolData}/>
    </ToolPageWrapper>
  )
}
