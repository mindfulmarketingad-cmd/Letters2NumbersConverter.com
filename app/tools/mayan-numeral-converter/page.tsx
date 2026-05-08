import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { MayanNumeralConverter } from "@/components/mayan-numeral-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Mayan Numeral Converter",
  description: "Convert numbers to and from ancient Mayan numerals",
  keywords: [],
  openGraph: {
    title: "Mayan Numeral Converter",
    description: "Convert numbers to and from ancient Mayan numerals",
    type: "website",
  },
}


const toolData: ToolData = getToolData("mayan-numeral-converter")

export default function MayanNumeralConverterPage() {
  return (
    <ToolPageWrapper toolSlug="mayan-numeral-converter">
    <ToolLayout
      toolId="mayan-numeral-converter"
      toolName="Mayan Numeral Converter"
      toolDescription="Convert numbers to and from ancient Mayan numerals"
      toolComponent={<MayanNumeralConverter />}
      toolData={toolData}
    />
  )
}
