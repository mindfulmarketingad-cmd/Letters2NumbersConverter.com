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
  title: { absolute: "Fill in the Blanks Equation Solver" },
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
      toolDescription="The Fill in the Blanks Equation Solver finds all values that correctly complete a mathematical equation when one or more numbers or operators are left unknown, making it an ideal study tool for students working through algebra, arithmetic puzzles, and number-sense exercises. Simply enter the equation with placeholders for the missing elements and the solver systematically tests every valid candidate, returning all solutions that make the equation true. Teachers can use it to verify puzzle answers or generate fill-in-the-blank math problems at adjustable difficulty levels for worksheets and classroom assessments. The browser-based tool handles a wide range of arithmetic operations and equation structures, delivering instant feedback that helps learners understand the relationship between the known and unknown quantities in any expression."
      toolComponent={<EquationSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
