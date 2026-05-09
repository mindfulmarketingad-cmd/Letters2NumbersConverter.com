import { Metadata } from "next"
import { AlphanumericConversionTool } from "@/components/alphanumeric-conversion-tool"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Alphanumeric Conversion Tool",
  description: "Alphanumeric Conversion Tool - Free online converter to transform letters to numbers and numbers to letters instantly. Support for multiple encoding formats including A=1, ASCII, HEX, and Binary.",
  keywords: ["alphanumeric conversion", "letters to numbers converter", "alphanumeric converter", "text to numbers", "number to text converter"],
  openGraph: {
    title: "Alphanumeric Conversion Tool | Letters2NumbersConverter.com",
    description: "Convert between letters and numbers instantly with the Alphanumeric Conversion Tool. Multiple encoding formats supported.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/alphanumeric-conversion-tool",
    images: [
      {
        url: "/images/alphanumeric-conversion-tool-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Alphanumeric Conversion Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alphanumeric Conversion Tool",
    description: "Convert letters to numbers and numbers to letters online for free.",
    images: ["/images/alphanumeric-conversion-tool-preview.jpg"],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/alphanumeric-conversion-tool",
  },
}

const toolData: ToolData = getToolData("alphanumeric-conversion-tool")

export default function AlphanumericConversionToolPage() {
  return (
    <ToolPageWrapper toolSlug="alphanumeric-conversion-tool">
      <ToolLayout
        toolId="alphanumeric-conversion-tool"
        toolName="What Is An Alphanumeric Conversion Tool?"
        toolDescription="The Alphanumeric Conversion Tool is a powerful utility designed to convert letters to numbers and numbers back to letters instantly. Whether you need to encode text for cryptography, coding, puzzles, or data analysis, this tool supports multiple encoding formats including A=0, A=1, ASCII, hexadecimal, and binary representations. Perfect for programmers, cryptographers, students, and anyone working with alphanumeric data."
        toolComponent={<AlphanumericConversionTool />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
