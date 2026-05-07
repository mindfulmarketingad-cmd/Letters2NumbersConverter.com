import { A0Z25Translator } from "@/components/a0z25-translator"
import { ToolLayout } from "@/components/tool-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "A0Z25 Cipher Translator",
  description: "A0Z25 Cipher Translator - Free online zero-indexed letter-to-number encoding tool where A=0, B=1, through Z=25. Perfect for programming, cryptography, and cipher solving.",
  keywords: ["A0Z25 cipher translator", "A0Z25 encoder", "zero-indexed cipher", "A=0 B=1 translator", "programming cipher", "letter to number converter"],
  openGraph: {
    title: "A0Z25 Cipher Translator | Letters2NumbersConverter.com",
    description: "Free A0Z25 Cipher Translator - Encode and decode messages using zero-indexed letter-to-number encoding where A=0 and Z=25.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/a0z25-cipher-translator",
  },
}

export default function A0Z25CipherTranslatorPage() {
  return (
    <ToolLayout
      toolId="a0z25-cipher"
      toolName="A0Z25 Cipher Translator"
      toolDescription="The A0Z25 Cipher Translator is a powerful zero-indexed letter-to-number encoding tool. Convert letters to numbers instantly using A0Z25 encoding where A=0, B=1, through Z=25. Perfect for programming, computer science, cryptography, and puzzle solving."
      toolComponent={<A0Z25Translator />}
    />
  )
}
