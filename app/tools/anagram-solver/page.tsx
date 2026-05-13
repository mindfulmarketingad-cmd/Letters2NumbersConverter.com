import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import AnagramSolver from "@/components/anagram-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/anagram-solver`

const toolSchema = generateToolPageSchema(
  "Anagram Solver with Wildcard | Find All Possible Words",
  "Use our free anagram solver with wildcard to find all possible words from your letters. Supports up to 3 wildcards (?). Filter by starts, ends, contains, or exact length.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Anagram Solver with Wildcard | Find All Possible Words", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Anagram Solver with Wildcard | Find All Possible Words",
  description: "Use our free anagram solver with wildcard to find all possible words from your letters. Supports up to 3 wildcards (?). Filter by starts, ends, contains, or exact length.",
  keywords: ["anagram solver", "anagram solver with wildcard", "anagram finder", "word anagram", "wildcard anagram", "find words from letters"],
  openGraph: {
    title: "Anagram Solver with Wildcard",
    description: "Find all possible words from your letters with wildcard support.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Anagram Solver with Wildcard | Find All Possible Words" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Anagram Solver with Wildcard | Find All Possible Words", description: "Use our free anagram solver with wildcard to find all possible words from your letters. Supports up to 3 wildcards (?). Filter by starts, ends, contains, or exact length.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("anagram-solver")

export default function AnagramSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="anagram-solver">
      <ToolLayout
        toolId="anagram-solver"
        toolName="Anagram Solver"
        toolDescription="Find all possible words from your letters with wildcard support. This powerful anagram solver helps you discover words for word games, crosswords, and language puzzles. Supports up to 3 wildcards (?) for advanced searching."
        toolComponent={<AnagramSolver />}
        toolData={toolData}/>
    </ToolPageWrapper>
    </>
  )
}
