import { Metadata } from "next"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout } from "@/components/tool-layout"

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

export default function AudioSpectrogramPage() {
  return (
    <ToolLayout
      toolId="audio-spectrogram"
      toolName="Audio Spectrogram Analyzer"
      toolDescription="Visualize audio frequencies and analyze sound waves"
      toolComponent={<AudioSpectrogram />}
    />
  )
}
