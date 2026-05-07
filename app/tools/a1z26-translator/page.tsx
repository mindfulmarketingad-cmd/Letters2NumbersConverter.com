import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "A1Z26 Translator",
  description: "Translate letters to numbers with the A1Z26 alphabet cipher. Convert any text to number sequences.",
  keywords: ["A1Z26", "translator", "letter to number", "cipher", "alphabet"],
  openGraph: {
    title: "A1Z26 Translator",
    description: "Translate letters to numbers with the A1Z26 alphabet.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("a1z26-translator")

export default function A1Z26TranslatorPage() {
  return (
    <ToolLayout
      toolId="a1z26-translator"
      toolName="A1Z26 Translator"
      toolDescription="Translate letters to numbers with the A1Z26 alphabet cipher. Convert any text to number sequences and decode numbers back to letters."
      toolComponent={<LetterNumberConverter />}
      toolData={toolData}
    />
  )
}
