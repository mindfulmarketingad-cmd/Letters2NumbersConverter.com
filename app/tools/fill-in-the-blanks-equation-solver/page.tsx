import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EquationSolver } from "@/components/equation-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Fill In The Blanks Equation Solver",
  description: "Find missing digits and operators in equations",
  keywords: [],
  openGraph: {
    title: "Fill In The Blanks Equation Solver",
    description: "Find missing digits and operators in equations",
    type: "website",
  },
}


const toolData: ToolData = getToolData("fill-in-the-blanks-equation-solver")

export default function EquationSolverPage() {
  return (
    <ToolLayout
      toolId="fill-in-the-blanks-equation-solver"
      toolName="Fill In The Blanks Equation Solver"
      toolDescription="Find missing digits and operators in equations"
      toolComponent={<EquationSolver />}
      toolData={toolData}
    />
  )
}
