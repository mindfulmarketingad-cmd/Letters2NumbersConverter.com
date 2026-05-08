import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import CryptogramSolver from "@/components/cryptogram-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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


const toolData: ToolData = getToolData("cryptogram-solver-free")

export default function CryptogramSolverFreePage() {
  return (
    <ToolPageWrapper toolSlug="cryptogram-solver-free">
    <ToolLayout
      toolId="cryptogram-solver-free"
      toolName="Cryptogram Solver Free"
      toolDescription="Solve substitution cipher cryptograms"
      toolComponent={<CryptogramSolver />}
      toolData={toolData}/>
    </ToolPageWrapper>
  )
}
