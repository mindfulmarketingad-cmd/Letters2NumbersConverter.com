import { Metadata } from "next"
import { CistercianConverter } from "@/components/cistercian-converter"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGECistercian Numerals Converter() {
  return (
    <ToolLayout
      toolId="cistercian-numerals-converter"
      toolName="Cistercian Numerals Converter"
      toolDescription="Convert numbers to and from Cistercian numeral notation"
      toolComponent={<CistercianConverter />}
    />
  )
}
