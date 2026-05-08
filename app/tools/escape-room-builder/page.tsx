import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EscapeRoomBuilder } from "@/components/escape-room-builder"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Escape Room Builder",
  description: "Create and design interactive escape room puzzles",
  keywords: [],
  openGraph: {
    title: "Escape Room Builder",
    description: "Create and design interactive escape room puzzles",
    type: "website",
  },
}


const toolData: ToolData = getToolData("escape-room-builder")

export default function EscapeRoomBuilderPage() {
  return (
    <ToolPageWrapper toolSlug="escape-room-builder">
    <ToolLayout
      toolId="escape-room-builder"
      toolName="Escape Room Builder"
      toolDescription="Create and design interactive escape room puzzles"
      toolComponent={<EscapeRoomBuilder />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
