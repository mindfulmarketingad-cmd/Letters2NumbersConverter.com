import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { MayanNumeralConverter } from "@/components/mayan-numeral-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/mayan-numeral-converter`

const toolSchema = generateToolPageSchema(
  "Mayan Numeral Converter - Ancient Mayan Base-20 Number System",
  "Free online Mayan Numeral Converter to convert decimal numbers to ancient Mayan base-20 numerals with dot-and-bar symbols. Learn Mesoamerican mathematics and Mayan number systems. Educational tool for archaeology, history, and ancient civilizations.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Mayan Numeral Converter - Ancient Mayan Base-20 Number System", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Mayan Numeral Converter - Ancient Mayan Base-20 Number System",
  description: "Free online Mayan Numeral Converter to convert decimal numbers to ancient Mayan base-20 numerals with dot-and-bar symbols. Learn Mesoamerican mathematics and Mayan number systems. Educational tool for archaeology, history, and ancient civilizations.",
  keywords: [
    "Mayan numeral converter",
    "Mayan numerals",
    "Mayan number system",
    "ancient Mayan numbers",
    "base-20 numeral system",
    "Mayan base 20",
    "dot and bar notation",
    "Mesoamerican number system",
    "Mayan mathematics",
    "ancient Mayan converter",
    "vigesimal numeral system",
    "Mayan civilization numerals",
    "decimal to Mayan conversion"
  ],
  openGraph: {
    title: "Mayan Numeral Converter - Convert to Ancient Mayan Base-20 Numbers",
    description: "Convert decimal numbers to authentic ancient Mayan numerals with dot-and-bar symbols. Explore the fascinating Mayan base-20 number system used by Mesoamerican civilizations.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Mayan Numeral Converter - Ancient Mayan Base-20 Number System" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Mayan Numeral Converter - Ancient Mayan Base-20 Number System", description: "Free online Mayan Numeral Converter to convert decimal numbers to ancient Mayan base-20 numerals with dot-and-bar symbols. Learn Mesoamerican mathematics and Mayan number systems. Educational tool for", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("mayan-numeral-converter")

export default function MayanNumeralConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="mayan-numeral-converter">
    <ToolLayout
      toolId="mayan-numeral-converter"
      toolName="Mayan Numeral Converter"
      toolDescription="Free Mayan Numeral Converter tool for converting decimal numbers to ancient Mayan base-20 numerals using authentic dot-and-bar symbols. Explore the sophisticated Mayan number system and learn how Mesoamerican civilizations performed mathematics. Perfect for history students, archaeologists, educators, and anyone interested in ancient Mayan civilization, mathematics, and numerical systems."
      toolComponent={<MayanNumeralConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
