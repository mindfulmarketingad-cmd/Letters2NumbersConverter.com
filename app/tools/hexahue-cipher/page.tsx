import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { HexahueCipherSolver } from "@/components/hexahue-cipher-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Hexahue Cipher",
  description: "Hexahue Cipher - Translate text to colorful visual blocks. Invented by Josh Cramer, Hexahue uses combinations of common colors (red, green, blue) to create a unique encoding system. Try our free online Hexahue translator and reference chart.",
  keywords: ["hexahue cipher", "hexahue translator", "color cipher", "hexahue code", "visual encoding", "josh cramer"],
  openGraph: {
    title: "Hexahue Cipher",
    description: "Translate text to colorful Hexahue visual blocks using this free online cipher tool",
    type: "website",
  },
}


const toolData: ToolData = getToolData("hexahue-cipher")

export default function HexahueCipherPage() {
  return (
    <ToolPageWrapper toolSlug="hexahue-cipher">
    <ToolLayout
      toolId="hexahue-cipher"
      toolName="Hexahue Cipher"
      toolDescription="Hexahue Cipher is a unique color-based encoding system that translates text into visual blocks of easily distinguishable colors. Created by Josh Cramer, this innovative cipher uses common HTML color combinations for intuitive visual communication."
      toolComponent={<HexahueCipherSolver />}
      toolData={toolData}
    />
  )
}
