import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { TapcodeTranslator } from "@/components/tapcode-translator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/tapcode-translator`

const toolSchema = generateToolPageSchema(
  "Instant Tapcode Translator | Letters2NumbersConverter.com",
  "Tapcode Translator - Convert messages to tap code patterns. Learn about this covert communication method used in POW camps. Encode/decode with dots, numbers, or knocks. Free online tool.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Instant Tapcode Translator | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Tap Code Translator" },
  description: "Tapcode Translator - Convert messages to tap code patterns. Learn about this covert communication method used in POW camps. Encode/decode with dots, numbers, or knocks. Free online tool.",
  keywords: ["tapcode translator", "tap code encoder", "knock code", "Smitty code", "POW communication", "covert code"],
  openGraph: {
    title: "Tapcode Translator",
    description: "Convert messages to tap code using the 5x5 grid cipher. Instant translation with multiple code formats.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Instant Tapcode Translator | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Instant Tapcode Translator | Letters2NumbersConverter.com", description: "Tapcode Translator - Convert messages to tap code patterns. Learn about this covert communication method used in POW camps. Encode/decode with dots, numbers, or knocks. Free online tool.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("tapcode-translator")

export default function TapcodePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="tapcode-translator">
    <ToolLayout
      toolId="tapcode-translator"
      toolName="Tapcode Translator"
      toolDescription="Convert your messages into rhythmic tap patterns also called knock codes using the tap code system. This simple yet effective communication method uses a 5×5 grid and was historically used by POW prisoners during the Vietnam War."
      toolComponent={<TapcodeTranslator />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
