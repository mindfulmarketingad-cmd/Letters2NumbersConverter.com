import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { ROT13Decoder } from '@/components/rot13-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/rot13-decoder`

export const metadata: Metadata = {
  title: { absolute: "ROT13 Decoder" },
  description: 'Free ROT13 decoder and encoder. Instantly decode or encode any text with ROT13 — the cipher used for Reddit spoilers, Usenet posts, and puzzle hints. No sign-up. Works in your browser.',
  keywords: [
    'ROT13 decoder',
    'ROT13 encoder',
    'ROT13 online',
    'decode ROT13',
    'ROT13 converter',
    'ROT13 cipher',
    'Reddit spoiler decoder',
    'ROT13 text',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'ROT13 Decoder & Encoder | Free Online ROT13 Tool',
    description: 'Decode or encode any text with ROT13 instantly. Perfect for Reddit spoilers, Usenet posts, and cipher puzzles. All processing happens in your browser.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'ROT13 Decoder & Encoder — Decode ROT13 Online Free' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROT13 Decoder & Encoder | Free Online ROT13 Tool',
    description: 'Instantly decode or encode ROT13 text. No uploads. Works in your browser.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'ROT13 Decoder & Encoder',
  'Free online ROT13 decoder and encoder. Paste any plain text or ROT13-encoded text and it transforms instantly — both operations use the same function since ROT13 is self-inverse. Includes a full ROT13 alphabet table. Supports letters only; numbers, punctuation, and spaces pass through unchanged.',
  PAGE_URL,
  'Cipher'
)

const howToSchema = generateHowToSchema(
  'How to Decode ROT13 Online',
  'Use our free ROT13 Decoder to instantly decode or encode any ROT13 text.',
  [
    { name: 'Paste your text', description: 'Paste your ROT13-encoded text (or plain text to encode) into the left input box. The tool transforms it instantly as you type.' },
    { name: 'Read the output', description: 'The decoded (or encoded) text appears immediately in the right output panel. ROT13 is self-inverse — the same operation both encodes and decodes.' },
    { name: 'Copy the result', description: 'Click the "Copy" button to copy the output to your clipboard. Use "Swap" to move the output back to the input for chaining operations.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is ROT13?',
    answer: 'ROT13 (Rotate by 13) is a simple letter substitution cipher that replaces each letter with the letter 13 positions after it in the alphabet. A becomes N, B becomes O, and so on. Because the English alphabet has 26 letters, applying ROT13 twice returns the original text — making it self-inverse.',
  },
  {
    question: 'Why is ROT13 used on Reddit?',
    answer: 'Reddit has historically used ROT13 to hide spoilers in comment sections, particularly in communities discussing books, films, and games. Users encode spoiler text with ROT13 so readers must actively choose to decode it. Old Reddit even had a built-in ROT13 button for this purpose.',
  },
  {
    question: 'Is ROT13 the same as the Caesar cipher?',
    answer: 'ROT13 is a special case of the Caesar cipher with a fixed shift of 13. A Caesar cipher can use any shift from 1 to 25, while ROT13 always uses shift 13. The unique property of shift 13 is that it is self-inverse — encoding and decoding use the same operation.',
  },
  {
    question: 'Does ROT13 encrypt numbers and punctuation?',
    answer: 'No. ROT13 only rotates letters (A–Z and a–z). Numbers, punctuation, spaces, and other characters pass through unchanged.',
  },
  {
    question: 'Is ROT13 secure for hiding information?',
    answer: 'No. ROT13 provides zero cryptographic security — it is trivially reversible by anyone who recognises it. It is intended only for casual obfuscation (like spoiler tags) rather than secure encryption.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'ROT13 Decoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('rot13-decoder')

export default function ROT13DecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="rot13-decoder">
        <ToolLayout
          toolId="rot13-decoder"
          toolName="ROT13 Decoder & Encoder"
          toolDescription="Our free ROT13 Decoder instantly encodes or decodes any text using the ROT13 cipher — the letter-substitution system used for Reddit spoilers, Usenet posts, and puzzle hints. Since ROT13 is self-inverse, the same operation works for both encoding and decoding. Paste your text and get the result immediately, with a full ROT13 alphabet table for reference."
          toolComponent={<ROT13Decoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
