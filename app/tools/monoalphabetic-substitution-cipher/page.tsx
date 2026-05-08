import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { MonoalphabeticSubstitutionCipher } from "@/components/monoalphabetic-substitution-cipher"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Monoalphabetic Substitution Cipher",
  description: "Encrypt and decrypt using monoalphabetic ciphers",
  keywords: [],
  openGraph: {
    title: "Monoalphabetic Substitution Cipher",
    description: "Encrypt and decrypt using monoalphabetic ciphers",
    type: "website",
  },
}


const toolData: ToolData = getToolData("monoalphabetic-substitution-cipher")

export default function MonoalphabeticSubstitutionCipherPage() {
  return (
    <ToolPageWrapper toolSlug="monoalphabetic-substitution-cipher">
    <ToolLayout
      toolId="monoalphabetic-substitution-cipher"
      toolName="Monoalphabetic Substitution Cipher"
      toolDescription="Encrypt and decrypt using monoalphabetic ciphers"
      toolComponent={<MonoalphabeticSubstitutionCipher />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
