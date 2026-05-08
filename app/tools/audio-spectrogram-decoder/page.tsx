import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Spectrogram Decoder",
  description: "Decode audio spectrograms and analyze frequencies with advanced visualization",
  keywords: [],
  openGraph: {
    title: "Spectrogram Decoder",
    description: "Decode audio spectrograms and analyze frequencies with advanced visualization",
    type: "website",
  },
}


const toolData: ToolData = getToolData("audio-spectrogram-decoder")

export default function AudioSpectrogramDecoderPage() {
  return (
    <ToolPageWrapper toolSlug="audio-spectrogram-decoder">
    <ToolLayout
      toolId="audio-spectrogram-decoder"
      toolName="Spectrogram Decoder"
      toolDescription="Decode audio spectrograms and analyze frequencies with advanced visualization"
      toolComponent={<AudioSpectrogram />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
