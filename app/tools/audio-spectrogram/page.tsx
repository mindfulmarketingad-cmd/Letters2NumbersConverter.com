import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AudioSpectrogram } from "@/components/audio-spectrogram"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/audio-spectrogram`

const toolSchema = generateToolPageSchema(
  "Audio Spectrogram Analyzer",
  "Visualize audio frequencies and analyze sound waves",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Audio Spectrogram Analyzer", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Audio Spectrogram Analyzer",
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
      toolDescription="Visualize audio frequencies and analyze sound waves"
      toolComponent={<AudioSpectrogram />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
