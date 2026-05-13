import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { GetSongBPM } from '@/components/get-song-bpm'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/get-song-bpm`

export const metadata: Metadata = {
  title: 'Get Song BPM — Free Online Audio BPM Detector',
  description: 'Find the BPM of any song instantly. Upload MP3, WAV, FLAC, or M4A files and our free online BPM detector analyses the tempo using autocorrelation. No uploads to a server — your audio stays local.',
  keywords: [
    'get song BPM',
    'BPM detector online',
    'audio BPM finder',
    'song tempo finder',
    'BPM analyser',
    'detect BPM from audio',
    'find BPM of song',
    'online BPM calculator',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Get Song BPM | Free Online Audio Tempo Detector',
    description: 'Upload any audio file and instantly detect its BPM. Supports MP3, WAV, FLAC, M4A, OGG, and more. All processing happens in your browser.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Get Song BPM — Free Online Audio BPM Detector' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Song BPM | Free Online Audio Tempo Detector',
    description: 'Find the BPM of any audio file in seconds. No uploads. Your audio stays local.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Get Song BPM',
  'Free online audio BPM detector. Upload MP3, WAV, FLAC, M4A, OGG, AIFF, or WebM files and instantly detect the song tempo using autocorrelation analysis. Shows detected BPM, confidence level, half-time, double-time, and tempo feel — all in your browser with no uploads.',
  PAGE_URL,
  'Audio Tools'
)

const howToSchema = generateHowToSchema(
  'How to Find the BPM of a Song Online',
  'Use our free Get Song BPM tool to detect the tempo of any audio file instantly.',
  [
    { name: 'Upload your audio file', description: 'Click "Select file" or drag and drop your MP3, WAV, FLAC, M4A, OGG, or AIFF file onto the drop zone.' },
    { name: 'Click Detect BPM', description: 'Press the green "Detect BPM" button. The tool analyses the audio\'s onset strength pattern using autocorrelation to find the beat period.' },
    { name: 'Read your results', description: 'The right panel shows the detected BPM, confidence level, half-time and double-time variations, and the classical tempo feel (e.g. Allegro, Andante).' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'How does the BPM detector work?',
    answer: 'The tool decodes the audio in your browser, mixes it down to mono, computes an energy envelope by windowing the signal, calculates onset strength (the rate of energy change), and then applies autocorrelation to find the dominant beat period. That period is converted to BPM.',
  },
  {
    question: 'What audio formats are supported?',
    answer: 'The BPM detector supports any format your browser can decode: MP3, WAV, FLAC, M4A/AAC, OGG, AIFF, and WebM. This covers virtually all common audio formats.',
  },
  {
    question: 'Is my audio file uploaded to a server?',
    answer: 'No. All analysis is done entirely in your browser using the Web Audio API. Your audio file never leaves your device.',
  },
  {
    question: 'How accurate is the BPM detection?',
    answer: 'The tool is most accurate for music with a clear kick drum or strong rhythmic pattern (electronic music, pop, rock). It may be less precise for complex jazz, classical, or music with heavy rubato. The confidence indicator shows how strong the detected beat period is.',
  },
  {
    question: 'What does the confidence level mean?',
    answer: 'Confidence measures how clearly the detected beat period stands out in the autocorrelation signal relative to other periodicities. High confidence (green) means a very clear, steady beat. Low confidence (red) may indicate unusual time signatures, variable tempo, or mostly ambient/non-rhythmic audio.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Get Song BPM', url: PAGE_URL },
])

const toolData: ToolData = getToolData('get-song-bpm')

export default function GetSongBPMPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="get-song-bpm">
        <ToolLayout
          toolId="get-song-bpm"
          toolName="Get Song BPM"
          toolDescription="Our free Get Song BPM tool detects the exact tempo of any audio file in seconds — upload your MP3, WAV, FLAC, or M4A and get an instant BPM reading complete with confidence score, half-time and double-time values, and classical tempo feel, all processed locally in your browser."
          toolComponent={<GetSongBPM />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
