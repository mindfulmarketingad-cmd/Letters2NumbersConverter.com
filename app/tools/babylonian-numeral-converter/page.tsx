import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BabylonianNumeralConverter } from "@/components/babylonian-numeral-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/babylonian-numeral-converter`

const toolSchema = generateToolPageSchema(
  "Babylonian Numeral Converter",
  "Babylonian Numeral Converter - Convert decimal numbers to Babylonian base-60 numerals. Learn about the ancient sexagesimal system used by Babylonians.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Babylonian Numeral Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Babylonian Numeral Converter" },
  description: "Babylonian Numeral Converter - Convert decimal numbers to Babylonian base-60 numerals. Learn about the ancient sexagesimal system used by Babylonians.",
  keywords: ["Babylonian numerals", "base-60 converter", "sexagesimal system", "ancient numerals"],
  openGraph: {
    title: "Babylonian Numeral Converter",
    description: "Convert decimal to Babylonian base-60 system with cuneiform symbols.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Babylonian Numeral Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Babylonian Numeral Converter", description: "Babylonian Numeral Converter - Convert decimal numbers to Babylonian base-60 numerals. Learn about the ancient sexagesimal system used by Babylonians.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("babylonian-numeral-converter")

export default function BabylonianNumeralConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="babylonian-numeral-converter">
    <ToolLayout
      toolId="babylonian-numeral-converter"
      toolName="Babylonian Numeral Converter"
      toolDescription="The Babylonian Numeral Converter translates any modern decimal number into the ancient cuneiform notation used by Babylonian, Sumerian, and Akkadian scholars more than four thousand years ago, revealing the elegance of history's first positional number system. Babylonian mathematics operated in base-60, or sexagesimal, a system so effective that it still governs our measurement of time and angles today. Each converted result is displayed using authentic wedge-shaped cuneiform symbols, making this an invaluable educational resource for history students, mathematics enthusiasts, and anyone studying the origins of Western numeracy. Instantly convert numbers from 1 into the millions and explore the two-symbol vocabulary that powered ancient Mesopotamian astronomy, commerce, and architecture."
      toolComponent={<BabylonianNumeralConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
