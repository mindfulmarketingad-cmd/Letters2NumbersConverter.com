import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { NatoAlphabetConverter } from "@/components/nato-alphabet-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/nato-phonetic-alphabet`

const toolSchema = generateToolPageSchema(
  "NATO Phonetic Alphabet Translator",
  "Convert text to NATO phonetic alphabet spelling",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "NATO Phonetic Alphabet Translator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "NATO Phonetic Alphabet Translator",
  description: "Convert text to NATO phonetic alphabet spelling",
  keywords: [],
  openGraph: {
    title: "NATO Phonetic Alphabet Translator",
    description: "Convert text to NATO phonetic alphabet spelling",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "NATO Phonetic Alphabet Translator" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "NATO Phonetic Alphabet Translator", description: "Convert text to NATO phonetic alphabet spelling", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("nato-phonetic-alphabet")

export default function NatoPhoneticAlphabetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="nato-phonetic-alphabet">
    <ToolLayout
      toolId="nato-phonetic-alphabet"
      toolName="NATO Phonetic Alphabet Translator"
      toolDescription="Convert text to NATO phonetic alphabet spelling"
      toolComponent={<NatoAlphabetConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
