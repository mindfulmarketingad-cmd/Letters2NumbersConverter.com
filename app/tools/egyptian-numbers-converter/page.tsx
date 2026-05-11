import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EgyptianConverter } from "@/components/egyptian-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Egyptian Numbers Converter - Ancient Egyptian Hieroglyphic Numerals",
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
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/egyptian-numbers-converter",
  },
}


const toolData: ToolData = getToolData("egyptian-numbers-converter")

export default function EgyptianNumbersConverterPage() {
  return (
    <ToolPageWrapper toolSlug="egyptian-numbers-converter">
    <ToolLayout
      toolId="egyptian-numbers-converter"
      toolName="Egyptian Numbers Converter"
      toolDescription="Free Egyptian Numbers Converter tool for converting decimal numbers to ancient Egyptian hieroglyphic numerals. Learn how ancient Egyptians represented numbers using authentic hieroglyphic symbols. Perfect for history students, Egyptology enthusiasts, educators, and anyone interested in ancient Egyptian mathematics and numeral systems."
      toolComponent={<EgyptianConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
