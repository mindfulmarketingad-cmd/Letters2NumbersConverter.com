import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/audio-spectrogram`

const toolSchema = generateToolPageSchema(
  "Audio Spectrogram",
  "Visualize audio frequencies and analyze sound waves",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Audio Spectrogram", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Audio Spectrogram" },
  description: "Visualize audio frequencies and analyze sound waves",
  keywords: [],
  openGraph: {
    title: "Audio Spectrogram Analyzer",
    description: "Visualize audio frequencies and analyze sound waves",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Audio Spectrogram Analyzer" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Audio Spectrogram Analyzer", description: "Visualize audio frequencies and analyze sound waves", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("audio-spectrogram")

export default function AudioSpectrogramPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="audio-spectrogram">
    <ToolLayout
      toolId="audio-spectrogram"
      toolName="Audio Spectrogram Analyzer"
      toolDescription="The Audio Spectrogram tool transforms any audio file or live microphone input into a vivid frequency-vs-time visualization, letting you see every harmonic and transient that your ears might miss. Music producers, sound engineers, and acoustic researchers rely on spectrogram analysis to identify pitch, detect noise, and compare tonal qualities across recordings. Upload an audio file or record directly in the browser for a real-time display that updates as sound comes in, with no software installation required. Color-coded intensity mapping makes it easy to distinguish between quiet background hiss and dominant frequency bands across the full audible spectrum."
      toolComponent={<AudioSpectrogram />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
