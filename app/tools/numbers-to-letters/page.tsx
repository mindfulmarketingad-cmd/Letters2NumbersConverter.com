import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/numbers-to-letters`

const toolSchema = generateToolPageSchema(
  "Numbers to Letters",
  "Convert numbers back to letters",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Numbers to Letters", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Numbers to Letters" },
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
        toolDescription="Numbers to Letters is a straightforward yet powerful decoding tool that translates numeric sequences back into their alphabetic equivalents using the most widely recognized systems, including A1Z26 (where 1=A, 2=B, and 26=Z), ASCII character codes, hexadecimal values, and binary encoding. This bidirectional converter is essential for solving cipher puzzles, decoding alphanumeric messages, and understanding how different encoding schemes represent text as numbers. It handles everything from simple A1Z26 substitutions used in treasure hunts and escape rooms to the precise ASCII and binary values that define how computers store and transmit text. Real-time conversion ensures results appear instantly as you type, making iterative decoding of number sequences fast and effortless."
        toolComponent={<LetterNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
