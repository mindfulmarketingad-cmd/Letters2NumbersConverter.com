import { Metadata } from "next"
import { EgyptianConverter } from "@/components/egyptian-converter"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGEEgyptian Numbers Converter() {
  return (
    <ToolLayout
      toolId="egyptian-numbers-converter"
      toolName="Egyptian Numbers Converter"
      toolDescription="Convert to and from ancient Egyptian hieroglyphic numerals"
      toolComponent={<EgyptianConverter />}
    />
  )
}
