import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Word To Number Translator | Letters2NumbersConverter.com",
  description: "Word To Number Translator - Convert words to numbers and numbers to words instantly. Supports A1Z26, A0Z25, ASCII, HEX, and BINARY encoding methods. Perfect for cryptography, puzzles, and data encoding.",
  keywords: ["word to number translator", "word to number converter", "text to number", "word encoding", "number encoding", "cipher translator"],
  openGraph: {
    title: "Word To Number Translator",
    description: "Convert words to numbers using multiple encoding methods. Free online tool for cryptography and text encoding.",
    type: "website",
  },
}

const toolData: ToolData = getToolData('word-to-number-translator')

export default function WordToNumberTranslatorPage() {
  return (
    <ToolPageWrapper toolSlug="word-to-number-translator">
    <ToolLayout
      toolId="word-to-number-translator"
      toolName="Word To Number Translator"
      toolDescription="Word To Number Translator converts English words and phrases into their numerical equivalents using various encoding methods. Supports A1Z26 (A=1...Z=26), A0Z25 (A=0...Z=25), ASCII, HEX, and BINARY formats. Perfect for solving word puzzles, cryptograms, and understanding character encoding. Instantly translate between words and numbers with our free online converter."
      toolComponent={<LetterNumberConverter />}
      toolData={toolData}
    />
  )
}
