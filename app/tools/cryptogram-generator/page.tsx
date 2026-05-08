import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import CryptogramGenerator from "@/components/cryptogram-generator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Cryptogram Generator | Create & Share Puzzle Cryptograms",
  description: "Create custom puzzle cryptograms using famous quotes or your own text. Share cryptograms with friends with adjustable difficulty levels.",
  keywords: ["cryptogram generator", "cryptogram puzzle", "cryptogram maker", "cipher puzzle", "substitution cipher"],
  openGraph: {
    title: "Cryptogram Generator",
    description: "Create and share custom cryptogram puzzles instantly.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("cryptogram-generator")

export default function CryptogramGeneratorPage() {
  return (
    <ToolPageWrapper toolSlug="cryptogram-generator">
    <ToolLayout
      toolId="cryptogram-generator"
      toolName="Cryptogram Generator"
      toolDescription="Create, customize, and share puzzle cryptograms with this interactive tool. Generate substitution cipher puzzles perfect for word games and entertainment."
      toolComponent={<CryptogramGenerator />}
      toolData={toolData}/>
    </ToolPageWrapper>
  )
}
