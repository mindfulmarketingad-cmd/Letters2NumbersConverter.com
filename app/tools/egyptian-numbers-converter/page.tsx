import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EgyptianConverter } from "@/components/egyptian-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/egyptian-numbers-converter`

const toolSchema = generateToolPageSchema(
  "Egyptian Numbers Converter",
  "Free online Egyptian Numbers Converter to convert decimal numbers to ancient Egyptian hieroglyphic numerals. Learn how ancient Egyptians represented numbers using symbols and hieroglyphics. Educational tool for history, Egyptology, and ancient mathematics.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Egyptian Numbers Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Egyptian Numbers Converter" },
  description: "Free online Egyptian Numbers Converter to convert decimal numbers to ancient Egyptian hieroglyphic numerals. Learn how ancient Egyptians represented numbers using symbols and hieroglyphics. Educational tool for history, Egyptology, and ancient mathematics.",
  keywords: [
    "Egyptian numbers converter",
    "Egyptian numerals",
    "Egyptian hieroglyphic numbers",
    "ancient Egyptian numbers",
    "hieroglyphic numeral system",
    "Egyptian hieroglyphics",
    "ancient Egypt mathematics",
    "Egyptian number system",
    "hieroglyphic converter",
    "Egyptology tool",
    "ancient number systems",
    "decimal to Egyptian conversion"
  ],
  openGraph: {
    title: "Egyptian Numbers Converter - Convert to Ancient Egyptian Hieroglyphics",
    description: "Convert decimal numbers to authentic ancient Egyptian hieroglyphic numerals. Explore the Egyptian number system used by pharaohs and scribes.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/egyptian-numbers-converter",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Egyptian Numbers Converter - Ancient Egyptian Hieroglyphic Numerals" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/egyptian-numbers-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Egyptian Numbers Converter - Ancient Egyptian Hieroglyphic Numerals", description: "Free online Egyptian Numbers Converter to convert decimal numbers to ancient Egyptian hieroglyphic numerals. Learn how ancient Egyptians represented numbers using symbols and hieroglyphics. Educationa", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("egyptian-numbers-converter")

export default function EgyptianNumbersConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="egyptian-numbers-converter">
    <ToolLayout
      toolId="egyptian-numbers-converter"
      toolName="Egyptian Numbers Converter"
      toolDescription="Free Egyptian Numbers Converter tool for converting decimal numbers to ancient Egyptian hieroglyphic numerals. Learn how ancient Egyptians represented numbers using authentic hieroglyphic symbols. Perfect for history students, Egyptology enthusiasts, educators, and anyone interested in ancient Egyptian mathematics and numeral systems."
      toolComponent={<EgyptianConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
