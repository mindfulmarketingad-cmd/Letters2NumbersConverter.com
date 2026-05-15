import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LongestWordSolver } from "@/components/longest-word-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/longest-word-using-these-letters-solver`

const toolSchema = generateToolPageSchema(
  "Longest Word Using These Letters",
  "Longest Word Using These Letters Solver - Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with filtering options. Free online word game helper.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Longest Word Using These Letters", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Longest Word Using These Letters Solver" },
  description: "Longest Word Using These Letters Solver - Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with filtering options. Free online word game helper.",
  keywords: ["longest word solver", "word maker", "anagram solver", "words from letters", "letter combination solver", "word finder", "anagram generator"],
  openGraph: {
    title: "Longest Word Using These Letters Solver",
    description: "Find the longest words you can make from any set of letters instantly",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Longest Word Using These Letters Solver" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Longest Word Using These Letters Solver", description: "Longest Word Using These Letters Solver - Find the longest words you can make from any set of letters. Instantly discover all possible words ranked by length with filtering options. Free online word g", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("longest-word-using-these-letters-solver")

export default function LongestWordPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="longest-word-using-these-letters-solver">
    <ToolLayout
      toolId="longest-word-solver"
      toolName="Longest Word Using These Letters Solver"
      toolDescription="The Longest Word Using These Letters solver scans a comprehensive word dictionary to find every valid word you can build from a given set of letters, ranking results from longest to shortest so you can immediately spot your highest-scoring play. Word game players who want to dominate Scrabble, Words with Friends, or Wordle-style challenges will find this tool invaluable for strategically using difficult letter combinations and rare tiles. Unlike simple anagram finders, this solver is specifically optimized to surface the longest possible words first, maximizing your point potential in length-based scoring games. Enter your available letters, hit solve, and get an instant ranked list of all playable words with advanced filtering by minimum length."
      toolComponent={<LongestWordSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
