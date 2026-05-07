import { Metadata } from "next"
import { EscapeRoomBuilder } from "@/components/site-header"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGEEscape Room Builder() {
  return (
    <ToolLayout
      toolId="escape-room-builder"
      toolName="Escape Room Builder"
      toolDescription="Create and design interactive escape room puzzles"
      toolComponent={<EscapeRoomBuilder />}
    />
  )
}
