import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/numbers-to-letters`

const toolSchema = generateToolPageSchema(
  "Numbers to Letters Converter",
  "Convert numbers back to letters",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Numbers to Letters Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Numbers to Letters Converter",
  description: "Convert numbers back to letters",
  keywords: [],
  openGraph: {
    title: "Numbers to Letters Converter",
    description: "Convert numbers back to letters",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Numbers to Letters Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Numbers to Letters Converter", description: "Convert numbers back to letters", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("numbers-to-letters")

export default function NumbersToLettersConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="numbers-to-letters">
      <ToolLayout
        toolId="numbers-to-letters"
        toolName="Numbers to Letters Converter"
        toolDescription="Convert numbers back to letters"
        toolComponent={<LetterNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
