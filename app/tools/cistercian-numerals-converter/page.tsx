import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { CistercianConverter } from "@/components/cistercian-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Cistercian Numerals Converter",
  description: "Convert numbers to and from Cistercian numeral notation",
  keywords: [],
  openGraph: {
    title: "Cistercian Numerals Converter",
    description: "Convert numbers to and from Cistercian numeral notation",
    type: "website",
  },
}


const toolData: ToolData = getToolData("cistercian-numerals-converter")

export default function CistercianNumeralsConverterPage() {
  return (
    <ToolLayout
      toolId="cistercian-numerals-converter"
      toolName="Cistercian Numerals Converter"
      toolDescription="Convert numbers to and from Cistercian numeral notation"
      toolComponent={<CistercianConverter />}
      toolData={toolData}
    />
  )
}
