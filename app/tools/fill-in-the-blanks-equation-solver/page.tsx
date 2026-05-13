import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EquationSolver } from "@/components/equation-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/fill-in-the-blanks-equation-solver`

const toolSchema = generateToolPageSchema(
  "Fill In The Blanks Equation Solver",
  "Find missing digits and operators in equations",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Fill In The Blanks Equation Solver", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Fill In The Blanks Equation Solver",
  description: "Find missing digits and operators in equations",
  keywords: [],
  openGraph: {
    title: "Fill In The Blanks Equation Solver",
    description: "Find missing digits and operators in equations",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Fill In The Blanks Equation Solver" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Fill In The Blanks Equation Solver", description: "Find missing digits and operators in equations", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("fill-in-the-blanks-equation-solver")

export default function EquationSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="fill-in-the-blanks-equation-solver">
    <ToolLayout
      toolId="fill-in-the-blanks-equation-solver"
      toolName="Fill In The Blanks Equation Solver"
      toolDescription="Find missing digits and operators in equations"
      toolComponent={<EquationSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
