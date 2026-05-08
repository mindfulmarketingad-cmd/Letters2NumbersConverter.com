import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EgyptianConverter } from "@/components/egyptian-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Egyptian Numbers Converter",
  description: "Convert to and from ancient Egyptian hieroglyphic numerals",
  keywords: [],
  openGraph: {
    title: "Egyptian Numbers Converter",
    description: "Convert to and from ancient Egyptian hieroglyphic numerals",
    type: "website",
  },
}


const toolData: ToolData = getToolData("egyptian-numbers-converter")

export default function EgyptianNumbersConverterPage() {
  return (
    <ToolPageWrapper toolSlug="egyptian-numbers-converter">
    <ToolLayout
      toolId="egyptian-numbers-converter"
      toolName="Egyptian Numbers Converter"
      toolDescription="Convert to and from ancient Egyptian hieroglyphic numerals"
      toolComponent={<EgyptianConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
