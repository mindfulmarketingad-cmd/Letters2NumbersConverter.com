import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { MayanNumeralConverter } from "@/components/mayan-numeral-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/mayan-numeral-converter",
  },
}


const toolData: ToolData = getToolData("mayan-numeral-converter")

export default function MayanNumeralConverterPage() {
  return (
    <ToolPageWrapper toolSlug="mayan-numeral-converter">
    <ToolLayout
      toolId="mayan-numeral-converter"
      toolName="Mayan Numeral Converter"
      toolDescription="Free Mayan Numeral Converter tool for converting decimal numbers to ancient Mayan base-20 numerals using authentic dot-and-bar symbols. Explore the sophisticated Mayan number system and learn how Mesoamerican civilizations performed mathematics. Perfect for history students, archaeologists, educators, and anyone interested in ancient Mayan civilization, mathematics, and numerical systems."
      toolComponent={<MayanNumeralConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
