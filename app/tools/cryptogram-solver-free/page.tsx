import { Metadata } from "next"
import { CryptogramSolver } from "@/components/cryptogram-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Cryptogram Solver Free",
  description: "Solve substitution cipher cryptograms",
  keywords: [],
  openGraph: {
    title: "Cryptogram Solver Free",
    description: "Solve substitution cipher cryptograms",
    type: "website",
  },
}

export default function PAGECryptogram Solver Free() {
  return (
    <ToolLayout
      toolId="cryptogram-solver-free"
      toolName="Cryptogram Solver Free"
      toolDescription="Solve substitution cipher cryptograms"
      toolComponent={<CryptogramSolver />}
    />
  )
}
