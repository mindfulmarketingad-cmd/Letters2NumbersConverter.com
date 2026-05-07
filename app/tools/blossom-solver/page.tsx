import { Metadata } from "next"
import { BlossomSolver } from "@/components/blossom-solver"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Blossom Solver - Jump Cipher Online Encrypt Decrypt",
  description: "Blossom Solver - Help solve Merriam-Webster Blossom daily word game. Find all valid words from 7 letters (1 center + 6 petal letters). Get high scores and pangrams. Free online game helper.",
  keywords: ["blossom solver", "blossom game helper", "word game solver", "blossom puzzle", "merriam webster blossom"],
  openGraph: {
    title: "Blossom Solver",
    description: "Solve the Merriam-Webster Blossom daily word game with our free online solver",
    type: "website",
  },
}

export default function BlossomSolverPage() {
  return (
    <ToolLayout
      toolId="blossom-solver"
      toolName="Blossom Solver"
      toolDescription="Help solve Merriam-Webster Blossom daily word game puzzles. Enter your seven letters (one center letter and six petal letters) and discover all possible words to maximize your score and find high-scoring pangrams."
      toolComponent={<BlossomSolver />}
    />
  )
}
