import { Metadata } from "next"
import { EquationSolver } from "@/components/equation-solver"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGEFill In The Blanks Equation Solver() {
  return (
    <ToolLayout
      toolId="fill-in-the-blanks-equation-solver"
      toolName="Fill In The Blanks Equation Solver"
      toolDescription="Find missing digits and operators in equations"
      toolComponent={<EquationSolver />}
    />
  )
}
