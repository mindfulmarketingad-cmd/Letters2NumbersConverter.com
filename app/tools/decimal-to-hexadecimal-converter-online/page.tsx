import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { DecimalHexConverter } from "@/components/decimal-hex-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/decimal-to-hexadecimal-converter-online`

const toolSchema = generateToolPageSchema(
  "Decimal to Hexadecimal Converter Online",
  "Convert between decimal, hexadecimal, binary, and octal number systems instantly. Perfect for programmers and developers.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Decimal to Hexadecimal Converter Online", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Decimal to Hexadecimal Converter Online",
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
      toolDescription="Convert between decimal, hexadecimal, binary, and octal number systems. Perfect for programmers, developers, and anyone working with different numeral systems."
      toolComponent={<DecimalHexConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
