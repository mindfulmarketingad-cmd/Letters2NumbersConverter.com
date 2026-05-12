import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { TempoTapper } from '@/components/tempo-tapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/tempo-tapper`

export const metadata: Metadata = {
  title: 'Tempo Tapper — Free Online BPM Tap Tempo Tool',
  description: 'Free online Tempo Tapper. Tap the button or press Space in time with any song to instantly calculate BPM. Shows rolling average, interval history, half-time, double-time, and tempo feel. No audio needed.',
  keywords: [
    'tempo tapper',
    'tap tempo BPM',
    'tap BPM online',
    'BPM tap tool',
    'tap tempo calculator',
    'online tap tempo',
    'beat counter online',
    'tempo calculator',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Tempo Tapper | Free Online BPM Tap Tempo Calculator',
    description: 'Tap or press Space in time with the music to calculate BPM instantly. No audio file needed. Works entirely in your browser.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempo Tapper | Free Online BPM Tap Tempo Calculator',
    description: 'Tap the beat to find BPM instantly. Press Space or click the tap button.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Tempo Tapper',
  'Free online Tempo Tapper. Click or press Space in time with any song to instantly calculate the BPM from your tap intervals. Shows rolling average BPM, interval history, BPM range, half-time and double-time values, and classical tempo feel — no audio file needed.',
  PAGE_URL,
  'Audio Tools'
)

const howToSchema = generateHowToSchema(
  'How to Find BPM by Tapping the Beat',
  'Use our free Tempo Tapper to calculate BPM from any song by tapping along.',
  [
    { name: 'Play your song', description: 'Start playing the song you want to find the BPM for in any music player.' },
    { name: 'Tap along to the beat', description: 'Click the large "TAP" button or press the Space bar in time with the beat of the music. Tap at least 4–8 times for an accurate reading.' },
    { name: 'Read the BPM', description: 'The right panel updates in real time showing the rolling average BPM, interval history, and tempo feel. The tool auto-resets if you stop tapping for 3 seconds.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'How does the Tempo Tapper calculate BPM?',
    answer: 'Each time you tap, the tool records a precise timestamp. It then calculates the time intervals between consecutive taps, takes a rolling average of the last 8 intervals, and converts that average interval (in milliseconds) to beats per minute: BPM = 60,000 ÷ average interval.',
  },
  {
    question: 'Can I use the keyboard instead of clicking?',
    answer: 'Yes. Pressing the Space bar triggers a tap, making it easy to keep time with the music. The Space bar shortcut works whenever the page is focused.',
  },
  {
    question: 'Why does the BPM keep changing slightly?',
    answer: 'Human tapping has natural timing variations. The tool uses a rolling average of the last 8 intervals to smooth these out. After 8+ taps the reading stabilises. Small fluctuations of ±1–2 BPM are normal.',
  },
  {
    question: 'What does "auto-reset after 3 seconds" mean?',
    answer: 'If you stop tapping for 3 seconds, all recorded taps are cleared so you can start a fresh measurement. This prevents old taps from skewing the average when you begin a new song.',
  },
  {
    question: 'What are half-time and double-time?',
    answer: 'Half-time is the detected BPM divided by two — useful if you were tapping every other beat. Double-time is the BPM multiplied by two — useful if you were tapping subdivision notes instead of the main beat.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Tempo Tapper', url: PAGE_URL },
])

const toolData: ToolData = getToolData('tempo-tapper')

export default function TempoTapperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="tempo-tapper">
        <ToolLayout
          toolId="tempo-tapper"
          toolName="Tempo Tapper"
          toolDescription="Our free Tempo Tapper calculates BPM instantly from your taps — just click the button or press Space in time with any song and the tool computes a rolling average BPM from your tap intervals, showing the tempo feel, interval history, BPM range, and half-time/double-time values in real time."
          toolComponent={<TempoTapper />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
