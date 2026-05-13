import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { MorseCodeTranslator } from '@/components/morse-code-translator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/morse-code-decoder-and-encoder`

export const metadata: Metadata = {
  title: 'Morse Code Decoder and Encoder — Translate Text & Morse Instantly',
  description: 'Free Morse code decoder and encoder. Translate any text to Morse code or decode Morse back to text instantly. Includes audio playback, full A–Z and 0–9 chart, no sign-up required.',
  keywords: [
    'morse code decoder and encoder',
    'morse code decoder',
    'morse code encoder',
    'decode morse code online',
    'text to morse code',
    'morse code to text',
    'morse code translator',
    'morse code converter',
    'morse code alphabet',
    'SOS morse code',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Morse Code Decoder and Encoder — Free Online Tool',
    description: 'Decode Morse code to text or encode text to Morse code instantly. Audio playback built in. No sign-up.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Morse Code Decoder and Encoder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morse Code Decoder and Encoder — Free Online Tool',
    description: 'Decode Morse to text or encode text to Morse. Audio playback, full chart. Free, no sign-up.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Morse Code Decoder and Encoder',
  'Free online Morse code decoder and encoder. Translate text to Morse code or Morse code back to text instantly with audio playback and a full Morse alphabet chart.',
  PAGE_URL,
  'Utility'
)

const howToSchema = generateHowToSchema(
  'How to Decode Morse Code Online',
  'Use our free Morse Code Decoder and Encoder to translate Morse code to text in seconds.',
  [
    { name: 'Select Decode mode', description: 'Click the "Morse → Text" toggle at the top of the tool to switch to decode mode.' },
    { name: 'Enter your Morse code', description: 'Type or paste your Morse code into the input box. Use a single space between letters and three spaces (or /) between words.' },
    { name: 'Read the decoded text', description: 'The decoded plain text appears instantly in the output panel. Copy it with the Copy button.' },
    { name: 'Play audio (optional)', description: 'Click "Play audio" to hear the Morse code beeps. Useful for verifying your decoded message.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is Morse code?',
    answer: 'Morse code is a communication system that encodes letters, digits, and punctuation as sequences of short signals (dots, .) and long signals (dashes, -). Developed in the 1830s by Samuel Morse and Alfred Vail, it was the standard for telegraph communication for over a century and is still used in aviation, amateur radio, and emergency signalling.',
  },
  {
    question: 'How do I decode Morse code?',
    answer: 'Switch the tool to "Morse → Text" mode, paste your Morse code into the input field (use one space between letters and three spaces or a / between words), and the decoded text appears instantly in the output panel.',
  },
  {
    question: 'How do I encode text to Morse code?',
    answer: 'Switch to "Text → Morse" mode, type your message, and the Morse code output appears live. Each letter is separated by a single space and each word by a slash (/).',
  },
  {
    question: 'What does SOS look like in Morse code?',
    answer: 'SOS in Morse code is: · · · — — — · · · (three dots, three dashes, three dots). It was chosen because it is easily recognisable and simple to transmit, not because it stands for any particular phrase.',
  },
  {
    question: 'Is Morse code still used today?',
    answer: 'Yes. Morse code is used by amateur (ham) radio operators worldwide, in aviation as a backup identifier for navigational beacons, and in accessibility contexts — for example, iOS and Android both support Morse code as an alternative input method for people with motor disabilities.',
  },
  {
    question: 'What is the format for Morse code input?',
    answer: 'Use a single space between letters (e.g., ".- -..." for "AB") and three spaces or a forward slash (/) between words. Dots are represented by "." and dashes by "-".',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Morse Code Decoder and Encoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('morse-code-decoder-and-encoder')

export default function MorseCodeDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="morse-code-decoder-and-encoder">
        <ToolLayout
          toolId="morse-code-decoder-and-encoder"
          toolName="Morse Code Decoder and Encoder"
          toolDescription="Our free Morse Code Decoder and Encoder translates text to Morse code or Morse code back to plain text instantly — with audio playback so you can hear the dots and dashes. Supports the full A–Z alphabet, digits 0–9, and common punctuation. No sign-up, no file upload, works entirely in your browser."
          toolComponent={<MorseCodeTranslator />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
