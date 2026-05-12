import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { SimsLanguageTranslator } from '@/components/sims-language-translator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/sims-language-translator`

export const metadata: Metadata = {
  title: 'Sims Language Translator',
  description: 'Sims Language Translator — instantly convert English to Simlish or decode Simlish back to English. Free, accurate, and browser-based with 200+ confirmed Simlish words.',
  keywords: [
    'Sims language translator',
    'Simlish translator',
    'English to Simlish',
    'Simlish to English',
    'Simlish dictionary',
    'Sims language',
    'Simlish words',
    'translate Simlish',
    'The Sims language',
    'Simlish converter',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Sims Language Translator | English ↔ Simlish',
    description: 'Translate English to Simlish or decode Simlish back to English. Includes 200+ confirmed words, random sentence generator, and audio-ready phrases.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sims Language Translator | English ↔ Simlish',
    description: 'Free Simlish translator — convert English to The Sims language and back. Sul sul!',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Sims Language Translator',
  'Free online Sims Language Translator. Convert English to Simlish or decode Simlish to English instantly, with 200+ confirmed Simlish words, a random sentence generator, and quick-reference phrase chips.',
  PAGE_URL,
  'Language & Fun'
)

const howToSchema = generateHowToSchema(
  'How to Use the Sims Language Translator',
  'Translate English to Simlish or Simlish to English in seconds.',
  [
    { name: 'Choose a direction', description: 'Select "English → Simlish" to translate your message into Simlish, or "Simlish → English" to decode a Simlish phrase.' },
    { name: 'Type or paste your text', description: 'Enter your message in the left panel. You can also click "Generate Random Sentence" for an example, or tap any phrase chip to insert it instantly.' },
    { name: 'Read your translation', description: 'Your translation appears instantly in the right panel. Known words use the official confirmed Simlish dictionary; unknown words are converted using Simlish phonetic patterns.' },
    { name: 'Copy or swap', description: 'Click "Copy" to copy the translation, or "Swap" to flip the output back into the input and translate in the other direction.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is Simlish?',
    answer: 'Simlish is the fictional language spoken by Sims characters in The Sims video game series, created by Maxis and Electronic Arts. It was designed by Will Wright to sound like a real language without being directly translatable, blending influences from English, Ukrainian, Tagalog, Romanian, and Navajo.',
  },
  {
    question: 'How accurate is this Simlish translator?',
    answer: 'The translator uses 200+ confirmed Simlish words and phrases from across the game series. For words not in the official dictionary, it applies Simlish phonetic rules (CVC patterns, characteristic sound substitutions) to generate plausible Simlish output.',
  },
  {
    question: 'What does "Sul sul" mean in Simlish?',
    answer: '"Sul sul" is one of the most famous Simlish phrases — it means both "hello" and "goodbye," similar to the Italian word "ciao."',
  },
  {
    question: 'What does "Nooboo" mean?',
    answer: '"Nooboo" is the Simlish word for "baby." It is one of the most recognisable and commonly used Simlish words in the game.',
  },
  {
    question: 'Can I translate Simlish back to English?',
    answer: 'Yes! Switch to "Simlish → English" mode and enter your Simlish phrase. The tool will reverse-look up all known Simlish words and return their English equivalents.',
  },
  {
    question: 'Is there an official complete Simlish dictionary?',
    answer: 'An official Simlish dictionary exists internally at Maxis/EA and is provided to voice actors, but it has never been publicly released in full. This tool compiles all publicly confirmed translations from across the game series and fan research.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Sims Language Translator', url: PAGE_URL },
])

const toolData: ToolData = getToolData('sims-language-translator')

export default function SimsLanguageTranslatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="sims-language-translator">
        <ToolLayout
          toolId="sims-language-translator"
          toolName="Sims Language Translator"
          toolDescription="Our free Sims Language Translator instantly converts English to Simlish — the beloved fictional language from The Sims — or decodes Simlish back to English, using 200+ confirmed words from across the game series."
          toolComponent={<SimsLanguageTranslator />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
