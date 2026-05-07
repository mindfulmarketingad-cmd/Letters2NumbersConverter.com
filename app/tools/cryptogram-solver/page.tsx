import { Metadata } from "next"
import { CryptogramGenerator } from "@/components/cryptogram-generator"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Cryptogram Solver",
  description: "Solve complex cryptogram puzzles",
  keywords: [],
  openGraph: {
    title: "Cryptogram Solver",
    description: "Solve complex cryptogram puzzles",
    type: "website",
  },
}

export default function PAGECryptogram Solver() {
  return (
    <ToolLayout
      toolId="cryptogram-solver"
      toolName="Cryptogram Solver"
      toolDescription="Solve complex cryptogram puzzles"
      toolComponent={<CryptogramGenerator />}
    />
  )
}
