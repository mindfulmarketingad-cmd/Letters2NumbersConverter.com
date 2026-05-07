import { Metadata } from "next"
import { CipherIdentifier } from "@/components/cipher-identifier"
import { ToolLayout } from "@/components/tool-layout"

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

export default function CipherIdentifierPage() {
  return (
    <ToolLayout
      toolId="cipher-identifier"
      toolName="Cipher Identifier Tool"
      toolDescription="Identify and analyze cipher types from encrypted text"
      toolComponent={<CipherIdentifier />}
    />
  )
}
