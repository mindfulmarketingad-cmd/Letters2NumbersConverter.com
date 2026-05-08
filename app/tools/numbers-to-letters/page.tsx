import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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


const toolData: ToolData = getToolData("numbers-to-letters")

export default function NumbersToLettersConverterPage() {
  return (
    <ToolPageWrapper toolSlug="numbers-to-letters">
      <ToolLayout
        toolId="numbers-to-letters"
        toolName="Numbers to Letters Converter"
        toolDescription="Convert numbers back to letters"
        toolComponent={<LetterNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
