import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/audio-spectrogram-decoder`

const toolSchema = generateToolPageSchema(
  "Audio Spectrogram Decoder",
  "Decode audio spectrograms and analyze frequencies with advanced visualization",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Audio Spectrogram Decoder", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Audio Spectrogram Decoder" },
  description: "Decode audio spectrograms and analyze frequencies with advanced visualization",
  keywords: [],
  openGraph: {
    title: "Spectrogram Decoder",
    description: "Decode audio spectrograms and analyze frequencies with advanced visualization",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Spectrogram Decoder" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Spectrogram Decoder", description: "Decode audio spectrograms and analyze frequencies with advanced visualization", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("audio-spectrogram-decoder")

export default function AudioSpectrogramDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="audio-spectrogram-decoder">
    <ToolLayout
      toolId="audio-spectrogram-decoder"
      toolName="Spectrogram Decoder"
      toolDescription="The Audio Spectrogram Decoder reveals hidden messages, images, and encoded data embedded within the frequency domain of audio files, a technique widely used in steganography and puzzle challenges. Creators sometimes hide text or artwork in the spectrogram of a song or sound clip, invisible to the human ear but plainly visible when the frequency content is rendered visually. Simply upload or record your audio and the decoder performs an instant, browser-based analysis without sending your file to any server, keeping your data completely private. Whether you are investigating a CTF challenge, exploring a music mystery, or studying audio steganography techniques, this tool gives you the visual clarity to uncover what is hidden."
      toolComponent={<AudioSpectrogram />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
