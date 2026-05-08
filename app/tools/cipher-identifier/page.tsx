import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { CipherIdentifier } from "@/components/cipher-identifier"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Cipher Identifier Tool",
  description: "Identify and analyze cipher types from encrypted text",
  keywords: [],
  openGraph: {
    title: "Cipher Identifier Tool",
    description: "Identify and analyze cipher types from encrypted text",
    type: "website",
  },
}


const toolData: ToolData = getToolData("cipher-identifier")

export default function CipherIdentifierPage() {
  return (
    <ToolPageWrapper toolSlug="cipher-identifier">
    <ToolLayout
      toolId="cipher-identifier"
      toolName="Cipher Identifier Tool"
      toolDescription="Identify and analyze cipher types from encrypted text"
      toolComponent={<CipherIdentifier />}
      toolData={toolData}
    />
  )
}
