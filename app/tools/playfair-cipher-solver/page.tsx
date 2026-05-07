import { Metadata } from "next"
import { PlayfairCipherSolver } from "@/components/playfair-cipher-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Playfair Cipher Solver",
  description: "Playfair Cipher Solver - Encrypt and decrypt text using the classic Playfair digraph substitution cipher. Learn about this historic cipher invented by Charles Wheatstone and explore its mechanics with our free online tool.",
  keywords: ["playfair cipher", "playfair cipher solver", "playfair encryption", "playfair decryption", "digraph cipher", "charles wheatstone"],
  openGraph: {
    title: "Playfair Cipher Solver",
    description: "Solve Playfair cipher puzzles with our free online encryption and decryption tool",
    type: "website",
  },
}

export default function PlayfairCipherSolverPage() {
  return (
    <ToolLayout
      toolId="playfair-cipher"
      toolName="Playfair Cipher Solver"
      toolDescription="Encrypt and decrypt text using the classic Playfair digraph substitution cipher invented by Charles Wheatstone. This historic cipher uses a 5×5 key square to encrypt letter pairs, making it significantly more secure than simple substitution ciphers."
      toolComponent={<PlayfairCipherSolver />}
    />
  )
}
