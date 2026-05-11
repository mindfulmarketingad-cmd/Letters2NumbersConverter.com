import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Word to Number Translator - Convert Words to Numbers Instantly",
  description: "Free online Word to Number Translator converts words to numbers using A1Z26, A0Z25, ASCII, HEX, and BINARY encoding methods. Supports bidirectional conversion between words and numbers for cryptography, puzzles, and text encoding.",
  keywords: [
    "word to number translator",
    "word to number converter",
    "words to numbers",
    "text to number converter",
    "word encoding converter",
    "A1Z26 word translator",
    "number to word translator",
    "cryptography word converter",
    "text encoding tool",
    "word cipher translator",
    "alphanumeric converter",
    "letter to number word",
    "numeric word code"
  ],
  openGraph: {
    title: "Word to Number Translator - Convert Words to Numbers",
    description: "Convert English words and phrases to numbers using multiple encoding methods. Supports A1Z26, A0Z25, ASCII, HEX, and BINARY formats instantly.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/word-to-number-translator",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/word-to-number-translator",
  },
}

const toolData: ToolData = getToolData('word-to-number-translator')

export default function WordToNumberTranslatorPage() {
  return (
    <ToolPageWrapper toolSlug="word-to-number-translator">
    <ToolLayout
      toolId="word-to-number-translator"
      toolName="Word To Number Translator"
      toolDescription="Free Word to Number Translator for converting words and phrases into numbers using multiple encoding methods. Supports A1Z26, A0Z25, ASCII, HEX, and BINARY formats with instant bidirectional conversion. Perfect for solving cryptograms, word puzzles, understanding character encoding, and data analysis. Instantly translate between words and numbers with real-time character breakdown and clipboard copy."
      toolComponent={<LetterNumberConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
