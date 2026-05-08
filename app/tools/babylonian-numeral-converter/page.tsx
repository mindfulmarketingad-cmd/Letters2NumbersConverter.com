import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BabylonianNumeralConverter } from "@/components/babylonian-numeral-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Babylonian Numeral Converter",
  description: "Babylonian Numeral Converter - Convert decimal numbers to Babylonian base-60 numerals. Learn about the ancient sexagesimal system used by Babylonians.",
  keywords: ["Babylonian numerals", "base-60 converter", "sexagesimal system", "ancient numerals"],
  openGraph: {
    title: "Babylonian Numeral Converter",
    description: "Convert decimal to Babylonian base-60 system with cuneiform symbols.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("babylonian-numeral-converter")

export default function BabylonianNumeralConverterPage() {
  return (
    <ToolPageWrapper toolSlug="babylonian-numeral-converter">
    <ToolLayout
      toolId="babylonian-numeral-converter"
      toolName="Babylonian Numeral Converter"
      toolDescription="Convert between decimal numbers and ancient Babylonian sexagesimal (base-60) numerals. Explore the sophisticated mathematical system used by Babylonians, Sumerians, and Akkadians."
      toolComponent={<BabylonianNumeralConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
