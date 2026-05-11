import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { BlossomSolver } from "@/components/blossom-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Blossom Solver - Merriam-Webster Blossom Answers & Helper",
  description: "Free online Blossom solver helps you find all valid words and blossom answers for Merriam-Webster Blossom daily puzzle. Enter 7 letters to get blossom answers, find pangrams, and maximize your score with our blossom puzzle solver.",
  keywords: ["blossom solver", "blossom answers", "blossom game solver", "blossom puzzle", "merriam webster blossom", "blossom helper", "blossom word finder", "blossom puzzle solver"],
  openGraph: {
    title: "Blossom Solver - Find All Blossom Answers",
    description: "Use our free blossom solver to find all valid words and complete answers for Merriam-Webster Blossom daily challenges",
    type: "website",
  },
}


const toolData: ToolData = getToolData("blossom-solver")

export default function BlossomSolverPage() {
  return (
    <ToolPageWrapper toolSlug="blossom-solver">
    <ToolLayout
      toolId="blossom-solver"
      toolName="Blossom Solver"
      toolDescription="Help solve Merriam-Webster Blossom daily word game puzzles. Enter your seven letters (one center letter and six petal letters) and discover all possible words to maximize your score and find high-scoring pangrams."
      toolComponent={<BlossomSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
