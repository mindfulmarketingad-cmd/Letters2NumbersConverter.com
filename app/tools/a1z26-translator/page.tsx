import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/a1z26-translator`

const toolSchema = generateToolPageSchema(
  "A1Z26 Translator",
  "Translate letters to numbers with the A1Z26 alphabet cipher. Convert any text to number sequences.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "A1Z26 Translator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "A1Z26 Translator",
  description: "Translate letters to numbers with the A1Z26 alphabet cipher. Convert any text to number sequences.",
  keywords: ["A1Z26", "translator", "letter to number", "cipher", "alphabet"],
  openGraph: {
    title: "A1Z26 Translator",
    description: "Translate letters to numbers with the A1Z26 alphabet.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "A1Z26 Translator" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "A1Z26 Translator", description: "Translate letters to numbers with the A1Z26 alphabet cipher. Convert any text to number sequences.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("a1z26-translator")

export default function A1Z26TranslatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="a1z26-translator">
      <ToolLayout
        toolId="a1z26-translator"
        toolName="A1Z26 Translator"
        toolDescription="Use this A1Z26 translator to convert letters to numbers — A=1, B=2, up to Z=26. Encode any text to a number sequence and decode numbers back to letters."
        toolComponent={<LetterNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
