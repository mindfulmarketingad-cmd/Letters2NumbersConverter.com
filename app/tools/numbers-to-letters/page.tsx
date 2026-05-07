import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Numbers to Letters Converter",
  description: "Convert numbers back to letters",
  keywords: [],
  openGraph: {
    title: "Numbers to Letters Converter",
    description: "Convert numbers back to letters",
    type: "website",
  },
}

export default function PAGENumbers to Letters Converter() {
  return (
    <ToolLayout
      toolId="numbers-to-letters"
      toolName="Numbers to Letters Converter"
      toolDescription="Convert numbers back to letters"
      toolComponent={<LetterNumberConverter />}
    />
  )
}
