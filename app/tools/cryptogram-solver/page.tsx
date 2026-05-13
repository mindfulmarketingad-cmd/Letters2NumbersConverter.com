import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import CryptogramSolver from "@/components/cryptogram-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/cryptogram-solver`

const toolSchema = generateToolPageSchema(
  "Cryptogram Solver",
  "Solve complex cryptogram puzzles",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Cryptogram Solver", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Cryptogram Solver",
  description: "Solve complex cryptogram puzzles",
  keywords: [],
  openGraph: {
    title: "Cryptogram Solver",
    description: "Solve complex cryptogram puzzles",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cryptogram Solver" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Cryptogram Solver", description: "Solve complex cryptogram puzzles", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("cryptogram-solver")

export default function CryptogramSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="cryptogram-solver">
    <ToolLayout
      toolId="cryptogram-solver"
      toolName="Cryptogram Solver"
      toolDescription="Solve complex cryptogram puzzles"
      toolComponent={<CryptogramSolver />}
      toolData={toolData}/>
    </ToolPageWrapper>
    </>
  )
}
