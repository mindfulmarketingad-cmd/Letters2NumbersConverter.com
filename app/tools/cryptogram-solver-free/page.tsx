import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import CryptogramSolver from "@/components/cryptogram-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/cryptogram-solver-free`

const toolSchema = generateToolPageSchema(
  "Cryptogram Solver Free",
  "Solve substitution cipher cryptograms",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Cryptogram Solver Free", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Cryptogram Solver Free" },
  description: "Solve substitution cipher cryptograms",
  keywords: [],
  openGraph: {
    title: "Cryptogram Solver Free",
    description: "Solve substitution cipher cryptograms",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cryptogram Solver Free" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Cryptogram Solver Free", description: "Solve substitution cipher cryptograms", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("cryptogram-solver-free")

export default function CryptogramSolverFreePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="cryptogram-solver-free">
    <ToolLayout
      toolId="cryptogram-solver-free"
      toolName="Cryptogram Solver Free"
      toolDescription="Solve substitution cipher cryptograms"
      toolComponent={<CryptogramSolver />}
      toolData={toolData}/>
    </ToolPageWrapper>
    </>
  )
}
