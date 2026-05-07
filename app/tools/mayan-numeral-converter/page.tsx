import { Metadata } from "next"
import { MayanNumeralConverter } from "@/components/mayan-numeral-converter"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGEMayan Numeral Converter() {
  return (
    <ToolLayout
      toolId="mayan-numeral-converter"
      toolName="Mayan Numeral Converter"
      toolDescription="Convert numbers to and from ancient Mayan numerals"
      toolComponent={<MayanNumeralConverter />}
    />
  )
}
