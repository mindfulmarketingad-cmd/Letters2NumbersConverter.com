import { Metadata } from "next"
import { NatoAlphabetConverter } from "@/components/nato-alphabet-converter"
import { ToolLayout } from "@/components/tool-layout"

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

export default function NatoPhoneticAlphabetPage() {
  return (
    <ToolLayout
      toolId="nato-phonetic-alphabet"
      toolName="NATO Phonetic Alphabet Translator"
      toolDescription="Convert text to NATO phonetic alphabet spelling"
      toolComponent={<NatoAlphabetConverter />}
    />
  )
}
