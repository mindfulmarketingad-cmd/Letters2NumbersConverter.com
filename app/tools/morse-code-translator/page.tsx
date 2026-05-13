import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { MorseCodeTranslator } from '@/components/morse-code-translator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/morse-code-translator`

export const metadata: Metadata = {
  title: 'Morse Code Translator',
  description: 'Translate text to Morse code and Morse code to text instantly. Free Morse Code Translator with audio playback — no downloads, works in your browser.',
  keywords: [
    'Morse code translator',
    'Morse code',
    'text to Morse code',
    'Morse code to text',
    'Morse code converter',
    'Morse code decoder',
    'Morse code encoder',
    'translate Morse code',
    'Morse code audio',
    'free Morse code translator',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Morse Code Translator | Free Text ↔ Morse Converter',
    description: 'Instantly translate text to Morse code or decode Morse code back to text. Includes audio playback and full reference chart.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Morse Code Translator' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morse Code Translator | Free Text ↔ Morse Converter',
    description: 'Translate text to Morse code and back, with audio playback and a full reference chart. Free and instant.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Morse Code Translator',
  'Free online Morse code translator. Convert text to Morse code and decode Morse code to text instantly, with audio playback and a full character reference chart.',
  PAGE_URL,
  'Cipher & Encoding'
)

const howToSchema = generateHowToSchema(
  'How to Use the Morse Code Translator',
  'Follow these steps to translate text to Morse code or decode Morse code back to text.',
  [
    { name: 'Choose a direction', description: 'Select "Text → Morse" to encode your message, or "Morse → Text" to decode Morse code.' },
    { name: 'Enter your input', description: 'Type your text or Morse code into the input box. Morse input uses dots (.) and dashes (-), with spaces between letters and three spaces (or /) between words.' },
    { name: 'Read or play the result', description: 'Your translation appears instantly in the output box. Click "Play audio" to hear the Morse code as tones, or "Copy" to copy the output to your clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is Morse code?',
    answer: 'Morse code is a communication system that encodes letters and numbers as sequences of dots (short signals) and dashes (long signals). Developed in the 1830s by Samuel Morse, it was widely used in telegraphy and is still used in aviation, amateur radio, and emergency signalling.',
  },
  {
    question: 'How do I decode Morse code?',
    answer: 'Switch to "Morse → Text" mode, enter your Morse code using dots and dashes with spaces between each letter, and the translator will instantly convert it back to readable text.',
  },
  {
    question: 'What does the audio playback do?',
    answer: 'The "Play audio" button plays the Morse code as audible tones at 15 words per minute, allowing you to hear how the message sounds when transmitted.',
  },
  {
    question: 'What characters does the translator support?',
    answer: 'The translator supports all 26 letters (A–Z), digits 0–9, and common punctuation including periods, commas, question marks, and more.',
  },
  {
    question: 'How do I separate words in Morse code input?',
    answer: 'Use three spaces or a forward slash (/) between words when entering Morse code for decoding.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Morse Code Translator', url: PAGE_URL },
])

const toolData: ToolData = getToolData('morse-code-translator')

export default function MorseCodeTranslatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="morse-code-translator">
        <ToolLayout
          toolId="morse-code-translator"
          toolName="Morse Code Translator"
          toolDescription="Our free Morse Code Translator instantly converts text to Morse code and decodes Morse code back to text — with audio playback, a full reference chart, and bidirectional swap, all running in your browser."
          toolComponent={<MorseCodeTranslator />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
