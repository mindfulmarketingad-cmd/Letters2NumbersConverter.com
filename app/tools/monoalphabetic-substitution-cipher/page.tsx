import { Metadata } from "next"
import { MonoalphabeticSubstitutionCipher } from "@/components/monoalphabetic-substitution-cipher"
import { ToolLayout } from "@/components/tool-layout"

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

export default function MonoalphabeticSubstitutionCipherPage() {
  return (
    <ToolLayout
      toolId="monoalphabetic-substitution-cipher"
      toolName="Monoalphabetic Substitution Cipher"
      toolDescription="Encrypt and decrypt using monoalphabetic ciphers"
      toolComponent={<MonoalphabeticSubstitutionCipher />}
    />
  )
}
