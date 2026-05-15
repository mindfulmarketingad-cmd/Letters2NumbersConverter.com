import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { DecimalHexConverter } from "@/components/decimal-hex-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/decimal-to-hexadecimal-converter-online`

const toolSchema = generateToolPageSchema(
  "Decimal to Hexadecimal Converter",
  "Convert between decimal, hexadecimal, binary, and octal number systems instantly. Perfect for programmers and developers.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Decimal to Hexadecimal Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Decimal to Hexadecimal Converter" },
  description: "Convert between decimal, hexadecimal, binary, and octal number systems instantly. Perfect for programmers and developers.",
  keywords: ["decimal to hex", "hexadecimal converter", "number converter", "binary converter", "octal converter"],
  openGraph: {
    title: "Decimal to Hexadecimal Converter",
    description: "Convert between decimal, hex, binary, and octal number systems.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Decimal to Hexadecimal Converter Online" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Decimal to Hexadecimal Converter Online", description: "Convert between decimal, hexadecimal, binary, and octal number systems instantly. Perfect for programmers and developers.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("decimal-to-hexadecimal-converter-online")

export default function DecimalHexConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="decimal-to-hexadecimal-converter-online">
    <ToolLayout
      toolId="decimal-hex-converter"
      toolName="Decimal to Hexadecimal Converter"
      toolDescription="The Decimal to Hexadecimal Converter instantly translates any decimal (base-10) number into its hexadecimal (base-16) equivalent, which is the notation used throughout programming, web color codes, memory addresses, and low-level hardware specifications. Hexadecimal's compact representation of binary data makes it the language of choice in HTML/CSS color values like #FF5733, in assembly language programming, and in network packet analysis, so fluent conversion between bases is a foundational skill for every developer. The tool also converts to binary and octal in the same operation, letting you see all common number-system representations side by side without running multiple calculations. Batch input support lets you paste a list of decimal values and receive all their hexadecimal equivalents at once, saving significant time during debugging sessions or data migration work."
      toolComponent={<DecimalHexConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
