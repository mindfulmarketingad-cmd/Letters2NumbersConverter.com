import { Metadata } from 'next'
import { PlaybackSpeedCalculator } from '@/components/playback-speed-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/playback-speed-calculator`

const toolSchema = generateToolPageSchema(
  "Playback Speed Calculator | Calculate Duration & Time Saved",
  "Playback Speed Calculator - Calculate adjusted duration and time saved when playing media at different speeds. Free online tool for students, podcast listeners, and video watchers.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Playback Speed Calculator | Calculate Duration & Time Saved", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Playback Speed Calculator | Calculate Duration & Time Saved',
  description: 'Playback Speed Calculator - Calculate adjusted duration and time saved when playing media at different speeds. Free online tool for students, podcast listeners, and video watchers.',
  keywords: ['playback speed calculator', 'video speed calculator', 'podcast speed calculator', 'media duration calculator', 'time saved calculator', 'watch time calculator'],
  openGraph: {
    title: 'Playback Speed Calculator | Letters2NumbersConverter.com',
    description: 'Calculate adjusted duration and time saved when playing media at different speeds instantly.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/playback-speed-calculator',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Playback Speed Calculator | Calculate Duration & Time Saved' }],
    images: [
      {
        url: '/images/playback-speed-calculator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Playback Speed Calculator tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playback Speed Calculator',
    description: 'Calculate duration and time saved at different playback speeds.',
    images: ['/images/playback-speed-calculator-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/playback-speed-calculator',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('playback-speed-calculator')

export default function PlaybackSpeedCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="playback-speed-calculator">
      <ToolLayout
        toolId="playback-speed-calculator"
        toolName="Playback Speed Calculator"
        toolDescription="The Playback Speed Calculator is designed for students, podcast enthusiasts, video learners, and anyone who wants to optimize their media consumption time. This tool calculates the adjusted duration of videos, lectures, podcasts, or any media content when played at different speeds, and shows exactly how much time you save. With preset buttons for common speeds (0.25x to 3.0x), flexible input formats (HH:MM:SS or total seconds), and instant calculations, you can plan your viewing schedule more efficiently and understand the impact of playback speed on your content consumption."
        toolComponent={<PlaybackSpeedCalculator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
