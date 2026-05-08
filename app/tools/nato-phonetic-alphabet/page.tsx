import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { NatoAlphabetConverter } from "@/components/nato-alphabet-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "NATO Phonetic Alphabet Translator",
  description: "Convert text to NATO phonetic alphabet spelling",
  keywords: [],
  openGraph: {
    title: "NATO Phonetic Alphabet Translator",
    description: "Convert text to NATO phonetic alphabet spelling",
    type: "website",
  },
}


const toolData: ToolData = getToolData("nato-phonetic-alphabet")

export default function NatoPhoneticAlphabetPage() {
  return (
    <ToolPageWrapper toolSlug="nato-phonetic-alphabet">
    <ToolLayout
      toolId="nato-phonetic-alphabet"
      toolName="NATO Phonetic Alphabet Translator"
      toolDescription="Convert text to NATO phonetic alphabet spelling"
      toolComponent={<NatoAlphabetConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
