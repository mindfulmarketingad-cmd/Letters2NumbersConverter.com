import { A0Z25Translator } from "@/components/a0z25-translator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import type { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/a0z25-cipher-translator`

const toolSchema = generateToolPageSchema(
  "A0Z25 Cipher Translator",
  "A0Z25 Cipher Translator - Free online zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Perfect for programming, cryptography, and cipher solving.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "A0Z25 Cipher Translator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "A0Z25 Cipher Translator",
  description: "A0Z25 Cipher Translator - Free online zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Perfect for programming, cryptography, and cipher solving.",
  keywords: ["A0Z25 cipher translator", "A0Z25 encoder", "zero-indexed cipher", "A=0 B=1 translator", "programming cipher", "letter to number converter"],
  openGraph: {
    title: "A0Z25 Cipher Translator | Letters2NumbersConverter.com",
    description: "Free A0Z25 Cipher Translator - Encode and decode messages using zero-indexed letter-to-number encoding where A=0 and Z=25.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "A0Z25 Cipher Translator" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "A0Z25 Cipher Translator", description: "A0Z25 Cipher Translator - Free online zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Perfect for programming, cryptography, and cipher solving.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("a0z25-cipher-translator")

export default function A0Z25CipherTranslatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="a0z25-cipher-translator">
      <ToolLayout
        toolId="a0z25-cipher"
        toolName="A0Z25 Cipher Translator"
        toolDescription="The A0Z25 Cipher Translator is a powerful zero-indexed letter-to-number encoding tool. Convert letters to numbers instantly using A0Z25 encoding where A=0, B=1, through Z=25. Perfect for programming, computer science, cryptography, and puzzle solving."
        toolComponent={<A0Z25Translator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
