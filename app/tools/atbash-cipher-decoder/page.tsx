import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AtbashCipherSolver } from "@/components/atbash-cipher-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Atbash Cipher Decoder",
  description: "Atbash Cipher Decoder - Encrypt and decrypt messages using the mirror alphabet substitution cipher. An involutory cipher where the same process works for both encryption and decryption.",
  keywords: ["Atbash cipher decoder", "Atbash cipher", "substitution cipher", "mirror cipher", "reverse alphabet"],
  openGraph: {
    title: "Atbash Cipher Decoder",
    description: "Decrypt and encrypt Atbash cipher messages with our free online tool",
    type: "website",
  },
}


const toolData: ToolData = getToolData("atbash-cipher-decoder")

export default function AtbashCipherPage() {
  return (
    <ToolLayout
      toolId="atbash-cipher"
      toolName="Atbash Cipher Decoder"
      toolDescription="Encrypt and decrypt messages using the ancient mirror alphabet substitution cipher. An involutory system where the same process works for both encryption and decryption. Perfect for cryptography enthusiasts and puzzle solvers."
      toolComponent={<AtbashCipherSolver />}
      toolData={toolData}
    />
  )
}
