import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BlossomSolver } from "@/components/blossom-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/blossom-solver`

const toolSchema = generateToolPageSchema(
  "Blossom Solver",
  "Free online Blossom solver helps you find all valid words and blossom answers for Merriam-Webster Blossom daily puzzle. Enter 7 letters to get blossom answers, find pangrams, and maximize your score with our blossom puzzle solver.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Blossom Solver", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Blossom Solver" },
  description: "Free online Blossom solver helps you find all valid words and blossom answers for Merriam-Webster Blossom daily puzzle. Enter 7 letters to get blossom answers, find pangrams, and maximize your score with our blossom puzzle solver.",
  keywords: ["blossom solver", "blossom answers", "blossom game solver", "blossom puzzle", "merriam webster blossom", "blossom helper", "blossom word finder", "blossom puzzle solver"],
  openGraph: {
    title: "Blossom Solver - Find All Blossom Answers",
    description: "Use our free blossom solver to find all valid words and complete answers for Merriam-Webster Blossom daily challenges",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Blossom Solver - Merriam-Webster Blossom Answers & Helper" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Blossom Solver - Merriam-Webster Blossom Answers & Helper", description: "Free online Blossom solver helps you find all valid words and blossom answers for Merriam-Webster Blossom daily puzzle. Enter 7 letters to get blossom answers, find pangrams, and maximize your score w", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("blossom-solver")

export default function BlossomSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="blossom-solver">
    <ToolLayout
      toolId="blossom-solver"
      toolName="Blossom Solver"
      toolDescription="The Blossom Solver is purpose-built for Merriam-Webster's daily Blossom puzzle, finding every valid word that can be formed from the seven available letters while always including the mandatory center letter. Enter the center letter and the six petal letters and the solver instantly surfaces the full word list, sorted by length and score, so you can strategically work toward the highest possible point total. A dedicated pangram detector highlights any word that uses all seven letters, since pangrams earn bonus points and are often the key to completing the daily challenge. Whether you are stuck on today's puzzle or want to verify you have found every possible word, the Blossom Solver delivers comprehensive results in seconds."
      toolComponent={<BlossomSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
