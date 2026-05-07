import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Letter to Number Converter | A1Z26 Cipher Encoder",
  description: "Convert letters to numbers and numbers to letters using the A1Z26 cipher. Free online letter-to-number converter supporting multiple languages and encoding types.",
  keywords: ["letter to number converter", "A1Z26 cipher", "letters to numbers", "number to letter converter", "alphabet cipher"],
  openGraph: {
    title: "Letter to Number Converter",
    description: "Convert letters to numbers using A1Z26 cipher encoding",
    type: "website",
  },
}

export default function LetterNumberConverterPage() {
  return (
    <ToolLayout
      toolId="letters-to-numbers"
      toolName="Letter to Number Converter"
      toolDescription="Convert letters to numbers and numbers to letters using the powerful A1Z26 cipher. Supports 25+ languages with multiple encoding types including A1, A0, ASCII, HEX, and BINARY. Perfect for cryptography, coding challenges, and linguistic exploration."
      toolComponent={<LetterNumberConverter />}
    />
  )
}
