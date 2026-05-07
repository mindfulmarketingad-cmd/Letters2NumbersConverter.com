import { Metadata } from "next"
import { SkipCipherTool } from "@/components/skip-cipher"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Skip Cipher - Jump Cipher Online Encrypt Decrypt",
  description: "Skip Cipher Online Tool - Encrypt and decrypt messages using the skip cipher (jump cipher) transposition cipher. Includes brute force cracking and parameter finder. Free online cryptography tool.",
  keywords: ["skip cipher", "jump cipher", "transposition cipher", "encryption", "decryption", "cryptography"],
  openGraph: {
    title: "Skip Cipher",
    description: "Encrypt and decrypt using the skip cipher (jump cipher) - a classic transposition cipher",
    type: "website",
  },
}

export default function SkipCipherPage() {
  return (
    <ToolLayout
      toolId="skip-cipher"
      toolName="Skip Cipher"
      toolDescription="The Skip Cipher (Jump Cipher) is a transposition cipher that reorders letters by extracting every nth character. Use this online tool to encrypt, decrypt, and analyze skip cipher messages with advanced brute force capabilities."
      toolComponent={<SkipCipherTool />}
    />
  )
}
