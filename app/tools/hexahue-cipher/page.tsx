import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { HexahueCipherSolver } from "@/components/hexahue-cipher-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/hexahue-cipher`

const toolSchema = generateToolPageSchema(
  "Hexahue Cipher",
  "Hexahue Cipher - Translate text to colorful visual blocks. Invented by Josh Cramer, Hexahue uses combinations of common colors (red, green, blue) to create a unique encoding system. Try our free online Hexahue translator and reference chart.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Hexahue Cipher", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Hexahue Cipher",
  description: "Hexahue Cipher - Translate text to colorful visual blocks. Invented by Josh Cramer, Hexahue uses combinations of common colors (red, green, blue) to create a unique encoding system. Try our free online Hexahue translator and reference chart.",
  keywords: ["hexahue cipher", "hexahue translator", "color cipher", "hexahue code", "visual encoding", "josh cramer"],
  openGraph: {
    title: "Hexahue Cipher",
    description: "Translate text to colorful Hexahue visual blocks using this free online cipher tool",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Hexahue Cipher" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Hexahue Cipher", description: "Hexahue Cipher - Translate text to colorful visual blocks. Invented by Josh Cramer, Hexahue uses combinations of common colors (red, green, blue) to create a unique encoding system. Try our free onlin", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("hexahue-cipher")

export default function HexahueCipherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="hexahue-cipher">
    <ToolLayout
      toolId="hexahue-cipher"
      toolName="Hexahue Cipher"
      toolDescription="Hexahue Cipher is a unique color-based encoding system that translates text into visual blocks of easily distinguishable colors. Created by Josh Cramer, this innovative cipher uses common HTML color combinations for intuitive visual communication."
      toolComponent={<HexahueCipherSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
