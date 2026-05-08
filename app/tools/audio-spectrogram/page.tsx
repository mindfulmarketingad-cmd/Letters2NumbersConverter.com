import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Audio Spectrogram Analyzer",
  description: "Visualize audio frequencies and analyze sound waves",
  keywords: [],
  openGraph: {
    title: "Audio Spectrogram Analyzer",
    description: "Visualize audio frequencies and analyze sound waves",
    type: "website",
  },
}


const toolData: ToolData = getToolData("audio-spectrogram")

export default function AudioSpectrogramPage() {
  return (
    <ToolPageWrapper toolSlug="audio-spectrogram">
    <ToolLayout
      toolId="audio-spectrogram"
      toolName="Audio Spectrogram Analyzer"
      toolDescription="Visualize audio frequencies and analyze sound waves"
      toolComponent={<AudioSpectrogram />}
      toolData={toolData}
    />
  )
}
