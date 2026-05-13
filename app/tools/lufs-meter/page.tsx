import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { LUFSMeter } from '@/components/lufs-meter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/lufs-meter`

export const metadata: Metadata = {
  title: 'LUFS Meter — Free Online Loudness Analyser (BS.1770-4)',
  description: 'Free online LUFS Meter. Measure integrated loudness, momentary peak, short-term peak, true peak (dBTP), and loudness range (LRA) of any audio file using ITU-R BS.1770-4. Compare against Spotify, YouTube, Apple Music targets. Your audio stays local.',
  keywords: [
    'LUFS meter online',
    'loudness meter online',
    'audio loudness analyser',
    'integrated LUFS calculator',
    'BS.1770 LUFS meter',
    'streaming loudness checker',
    'LUFS to dBFS converter',
    'music loudness measurement',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'LUFS Meter | Free Online BS.1770-4 Loudness Analyser',
    description: 'Measure integrated LUFS, momentary/short-term peaks, true peak, and LRA for any audio file. Compare against Spotify, YouTube, Apple Music targets. All in your browser.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'LUFS Meter — Free Online Loudness Analyser (BS.1770-4)' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUFS Meter | Free Online Loudness Analyser',
    description: 'Measure the loudness of any audio file in LUFS. BS.1770-4 compliant. No uploads.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'LUFS Meter',
  'Free online LUFS Meter implementing ITU-R BS.1770-4. Upload MP3, WAV, FLAC, M4A, OGG, or AIFF audio files and instantly measure integrated loudness (LUFS), momentary peak LUFS, short-term peak LUFS, true peak (dBTP), and loudness range (LRA). Includes platform comparison against Spotify, Apple Music, YouTube, Netflix, and EBU R128 targets — all in your browser with no uploads.',
  PAGE_URL,
  'Audio Tools'
)

const howToSchema = generateHowToSchema(
  'How to Measure Audio Loudness in LUFS Online',
  'Use our free LUFS Meter to analyse the integrated loudness of any audio file.',
  [
    { name: 'Upload your audio file', description: 'Click "Select file" or drag and drop your MP3, WAV, FLAC, M4A, OGG, or AIFF audio file onto the drop zone.' },
    { name: 'Click Measure loudness', description: 'Press the green "Measure loudness" button. The tool applies K-weighting filters (ITU-R BS.1770-4) and computes gated loudness blocks in your browser.' },
    { name: 'Inspect the results', description: 'The right panel shows integrated LUFS, momentary peak, short-term peak, true peak (dBTP), and loudness range (LRA), plus a platform comparison table showing how your mix compares to Spotify, Apple Music, YouTube, Netflix, and EBU R128 targets.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is LUFS?',
    answer: 'LUFS stands for Loudness Units relative to Full Scale. It is the standard unit for measuring perceived audio loudness, defined by the ITU-R BS.1770 standard. Streaming platforms like Spotify (-14 LUFS), Apple Music (-16 LUFS), and YouTube (-14 LUFS) normalise all audio to a target LUFS level — if your track is louder it will be turned down; if quieter it may be turned up.',
  },
  {
    question: 'What is the difference between integrated, momentary, and short-term LUFS?',
    answer: 'Integrated LUFS is the overall loudness of the entire file, measured with absolute (-70 LKFS) and relative (-10 LU) gating to exclude silence. Momentary LUFS is the loudness of any 400 ms window — shows peaks in your mix. Short-term LUFS is the loudness of any 3-second window — useful for identifying loud sections.',
  },
  {
    question: 'What is true peak (dBTP)?',
    answer: 'True peak (dBTP) measures the actual maximum sample value in the audio. Most platforms require true peak to stay below -1 dBTP to prevent inter-sample clipping during lossy encoding. Our meter shows the peak sample level as an approximation of true peak.',
  },
  {
    question: 'What is Loudness Range (LRA)?',
    answer: 'Loudness Range (LRA) measures the dynamic variation in a piece of audio, expressed in Loudness Units (LU). It is the spread between the 10th and 95th percentiles of gated short-term loudness blocks. A low LRA (0–5 LU) indicates heavily compressed audio; a high LRA (10+ LU) indicates wide dynamics.',
  },
  {
    question: 'Is my audio file uploaded to a server?',
    answer: 'No. All analysis is performed entirely in your browser using the Web Audio API and JavaScript. Your audio file never leaves your device.',
  },
  {
    question: 'Which platforms use LUFS normalisation?',
    answer: 'Spotify targets -14 LUFS, Apple Music -16 LUFS, YouTube -14 LUFS, Tidal -14 LUFS, Amazon Music -14 LUFS, Netflix -27 LUFS (dialogue), and broadcast uses EBU R128 at -23 LUFS. Our platform comparison table shows the exact difference between your mix and each target.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'LUFS Meter', url: PAGE_URL },
])

const toolData: ToolData = getToolData('lufs-meter')

export default function LUFSMeterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="lufs-meter">
        <ToolLayout
          toolId="lufs-meter"
          toolName="LUFS Meter"
          toolDescription="Our free LUFS Meter implements the ITU-R BS.1770-4 standard to measure integrated loudness, momentary and short-term peaks, true peak (dBTP), and loudness range (LRA) for any audio file — and compares your mix against Spotify, Apple Music, YouTube, Netflix, and EBU R128 targets, all processed locally in your browser."
          toolComponent={<LUFSMeter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
