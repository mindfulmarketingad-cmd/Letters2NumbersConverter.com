import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { SentenceUnscrambler } from '@/components/sentence-unscrambler'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/sentence-unscrambler`

export const metadata: Metadata = {
  title: { absolute: "Sentence Unscrambler" },
  description: 'Sentence Unscrambler — instantly rearrange scrambled words into a correct, readable sentence. Free, browser-based, no sign-up required.',
  keywords: [
    'sentence unscrambler',
    'unscramble sentences',
    'unscramble words in a sentence',
    'word unscrambler',
    'sentence rearanger',
    'fix scrambled sentence',
    'unscramble sentence online',
    'free sentence unscrambler',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Sentence Unscrambler | Fix Scrambled Words Instantly',
    description: 'Paste any scrambled sentence and get a correctly ordered result in seconds. Free, private, and browser-based.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Sentence Unscrambler' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sentence Unscrambler | Fix Scrambled Words Instantly',
    description: 'Instantly unscramble sentences and rearrange words into the correct order. Free online tool.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Sentence Unscrambler',
  'Free online Sentence Unscrambler. Paste scrambled words and instantly get them rearranged into a correct, readable sentence — no sign-up, no uploads, 100% browser-based.',
  PAGE_URL,
  'Text & Language'
)

const howToSchema = generateHowToSchema(
  'How to Unscramble a Sentence',
  'Use our free Sentence Unscrambler to rearrange scrambled words into the correct order in seconds.',
  [
    { name: 'Paste your scrambled sentence', description: 'Type or paste the scrambled words into the input box. You can enter a single sentence or multiple paragraphs.' },
    { name: 'Choose your language and options', description: 'Select your language from the dropdown. Click "Advanced" to toggle case-sensitive ordering or punctuation preservation.' },
    { name: 'Click Generate Output', description: 'Press the "Generate Output" button. The tool analyses word patterns, capitalisation, and punctuation to reconstruct the most likely correct sentence order.' },
    { name: 'Copy your result', description: 'Read the unscrambled sentence in the output panel and click "Copy" to copy it to your clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is a Sentence Unscrambler?',
    answer: 'A Sentence Unscrambler is a tool that takes a set of scrambled or randomly ordered words and rearranges them into a grammatically correct, readable sentence. It is useful for students, puzzle solvers, language learners, and anyone who receives shuffled text.',
  },
  {
    question: 'How does the Sentence Unscrambler work?',
    answer: 'The tool evaluates all possible word orderings and scores each arrangement based on capitalisation, punctuation placement, and common grammatical patterns (such as placing content words before stop words). The highest-scoring arrangement is returned as the output.',
  },
  {
    question: 'Can it unscramble multiple sentences at once?',
    answer: 'Yes. You can paste entire paragraphs and the tool will process each sentence individually, using punctuation boundaries to separate them.',
  },
  {
    question: 'Does it work for languages other than English?',
    answer: 'The tool supports input in multiple languages. While the scoring heuristics are optimised for English, the basic word-ordering logic works for any space-separated language.',
  },
  {
    question: 'Is my text sent to a server?',
    answer: 'No. All processing happens entirely in your browser using JavaScript. Your text is never uploaded or stored anywhere.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Sentence Unscrambler', url: PAGE_URL },
])

const toolData: ToolData = getToolData('sentence-unscrambler')

export default function SentenceUnscramblerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="sentence-unscrambler">
        <ToolLayout
          toolId="sentence-unscrambler"
          toolName="Sentence Unscrambler"
          toolDescription="Our free Sentence Unscrambler instantly rearranges scrambled words into a correct, readable sentence — paste your text, hit Generate, and get a properly ordered result in seconds, entirely in your browser."
          toolComponent={<SentenceUnscrambler />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
