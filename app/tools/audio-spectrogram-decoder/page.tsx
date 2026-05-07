import { Metadata } from "next"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout } from "@/components/tool-layout"

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

export default function AudioSpectrogramDecoderPage() {
  return (
    <ToolLayout
      toolId="audio-spectrogram-decoder"
      toolName="Spectrogram Decoder"
      toolDescription="Decode audio spectrograms and analyze frequencies with advanced visualization"
      toolComponent={<AudioSpectrogram />}
    />
  )
}
