import { Metadata } from "next"
import { LetterNumberConverter } from "@/components/letter-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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

const toolData: ToolData = {
  howItWorks: "Enter your text in the left panel and choose your encoding method (A1Z26, A0Z25, ASCII, HEX, or BINARY). The converter instantly processes each character and displays the numeric representation in real-time. Supports multiple languages and character sets for universal compatibility.",
  features: [
    "Multiple encoding methods: A1Z26, A0Z25, ASCII, HEX, BINARY, and more",
    "Bidirectional conversion - letters to numbers and numbers to letters",
    "Support for 25+ languages and character sets",
    "Real-time conversion as you type",
    "Copy results to clipboard with one click",
    "Works completely offline - no data sent to servers",
    "Batch processing for long texts",
    "Visual character mapping and encoding breakdown"
  ],
  whoIsItFor: [
    {
      title: "Cryptography Enthusiasts",
      description: "Learn and practice cipher encoding with this fundamental encryption method used in cybersecurity"
    },
    {
      title: "Students & Educators",
      description: "Perfect for learning about character encoding, ASCII values, and numerical representation in computer science"
    },
    {
      title: "Programmers & Developers",
      description: "Useful for debugging, testing encoding systems, and understanding character-to-number mappings in code"
    },
    {
      title: "Puzzle & Game Solvers",
      description: "Decode cryptograms, solve word puzzles, and tackle challenge codes quickly and efficiently"
    },
  ]
}

export default function LetterNumberConverterPage() {
  return (
    <ToolPageWrapper toolSlug="letter-number-converter">
    <ToolLayout
      toolId="letters-to-numbers"
      toolName="Letter to Number Converter"
      toolDescription="Convert letters to numbers and numbers to letters using the powerful A1Z26 cipher. Supports 25+ languages with multiple encoding types including A1, A0, ASCII, HEX, and BINARY. Perfect for cryptography, coding challenges, and linguistic exploration."
      toolComponent={<LetterNumberConverter />}
      toolData={toolData}
    />
  )
}
