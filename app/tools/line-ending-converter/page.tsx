import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LineEndingConverter } from "@/components/line-ending-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Line Ending Converter",
  description: "Line Ending Converter - Convert between different line ending formats (LF, CRLF, CR). Handle line break compatibility across Windows, Mac, and Unix systems for cross-platform text compatibility.",
  keywords: ["line ending converter", "CRLF", "LF", "CR", "line break converter", "newline converter"],
  openGraph: {
    title: "Line Ending Converter",
    description: "Convert between LF, CRLF, and CR line endings instantly.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("line-ending-converter")

export default function LineEndingConverterPage() {
  return (
    <ToolLayout
      toolId="line-ending-converter"
      toolName="Line Ending Converter"
      toolDescription="Convert between different line ending formats (LF, CRLF, CR) for cross-platform compatibility. Handle line break differences across Windows, Mac, and Unix systems effortlessly."
      toolComponent={<LineEndingConverter />}
      toolData={toolData}
    />
  )
}
