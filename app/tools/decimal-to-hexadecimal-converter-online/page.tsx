import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { DecimalHexConverter } from "@/components/decimal-hex-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Decimal to Hexadecimal Converter Online",
  description: "Convert between decimal, hexadecimal, binary, and octal number systems instantly. Perfect for programmers and developers.",
  keywords: ["decimal to hex", "hexadecimal converter", "number converter", "binary converter", "octal converter"],
  openGraph: {
    title: "Decimal to Hexadecimal Converter",
    description: "Convert between decimal, hex, binary, and octal number systems.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("decimal-to-hexadecimal-converter-online")

export default function DecimalHexConverterPage() {
  return (
    <ToolLayout
      toolId="decimal-hex-converter"
      toolName="Decimal to Hexadecimal Converter"
      toolDescription="Convert between decimal, hexadecimal, binary, and octal number systems. Perfect for programmers, developers, and anyone working with different numeral systems."
      toolComponent={<DecimalHexConverter />}
      toolData={toolData}
    />
  )
}
