import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { CistercianConverter } from "@/components/cistercian-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/cistercian-numerals-converter`

const toolSchema = generateToolPageSchema(
  "Cistercian Numerals Converter",
  "Convert numbers to and from Cistercian numeral notation",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Cistercian Numerals Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Cistercian Numerals Converter",
  description: "Convert numbers to and from Cistercian numeral notation",
  keywords: [],
  openGraph: {
    title: "Cistercian Numerals Converter",
    description: "Convert numbers to and from Cistercian numeral notation",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cistercian Numerals Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Cistercian Numerals Converter", description: "Convert numbers to and from Cistercian numeral notation", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("cistercian-numerals-converter")

export default function CistercianNumeralsConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="cistercian-numerals-converter">
    <ToolLayout
      toolId="cistercian-numerals-converter"
      toolName="Cistercian Numerals Converter"
      toolDescription="Convert numbers to and from Cistercian numeral notation"
      toolComponent={<CistercianConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
