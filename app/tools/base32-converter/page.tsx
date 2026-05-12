import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { Base32Converter } from '@/components/base32-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/base32-converter`

export const metadata: Metadata = {
  title: 'Base32 Converter - Decode Encode Instantly',
  description: 'Base32 Converter — encode or decode Base32 instantly in your browser. Supports RFC 4648, Base32 Hex, z-base-32, and Crockford\'s Base32. Free, private, no uploads.',
  keywords: [
    'Base32 converter',
    'Base32 encoder',
    'Base32 decoder',
    'Base32 encode decode',
    'RFC 4648 Base32',
    'Base32 online',
    'Base32 to text',
    'text to Base32',
    'Base32 hex converter',
    "Crockford's Base32",
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Base32 Converter - Decode Encode Instantly',
    description: 'Encode or decode Base32 instantly. Supports all major variants — RFC 4648, Base32 Hex, z-base-32, and Crockford\'s Base32.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base32 Converter - Decode Encode Instantly',
    description: 'Free online Base32 encoder and decoder. Supports RFC 4648, Base32 Hex, z-base-32, and Crockford\'s Base32.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Base32 Converter - Decode Encode Instantly',
  'Free online Base32 Converter. Encode text to Base32 or decode Base32 back to text instantly. Supports RFC 3548/4648, Base32 Hex, z-base-32, and Crockford\'s Base32 — all in your browser.',
  PAGE_URL,
  'Encoding & Decoding'
)

const howToSchema = generateHowToSchema(
  'How to Encode or Decode Base32',
  'Use our free Base32 Converter to encode text or decode Base32 strings in seconds.',
  [
    { name: 'Choose Encode or Decode', description: 'Click "Encode" in the middle panel to convert text to Base32, or "Decode" to convert a Base32 string back to plain text.' },
    { name: 'Select a Base32 variant', description: 'Use the Variant dropdown to choose from RFC 4648 (standard), Base32 Hex, z-base-32, or Crockford\'s Base32.' },
    { name: 'Enter your input', description: 'Type or paste your text (or Base32 string) into the left panel. The output updates instantly in the right panel.' },
    { name: 'Copy the result', description: 'Click the copy icon in the top-right of the output panel to copy the encoded or decoded value to your clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is Base32?',
    answer: 'Base32 is a binary-to-text encoding scheme that represents binary data using 32 printable ASCII characters (A–Z and 2–7 in the standard RFC 4648 variant). It is more human-readable than Base64 and case-insensitive, making it popular for encoding tokens, keys, and identifiers.',
  },
  {
    question: 'What is the difference between Base32 and Base64?',
    answer: 'Base32 uses a 32-character alphabet (letters and digits only, no symbols), making it safe for use in URLs, file names, and case-insensitive contexts. Base64 uses 64 characters including + and / which can cause issues in URLs. Base32 output is about 60% larger than Base64 for the same input.',
  },
  {
    question: 'What Base32 variants does this tool support?',
    answer: 'The tool supports four variants: Base32 (RFC 3548/4648) — the standard with A–Z and 2–7; Base32 Hex (RFC 4648) — uses 0–9 and A–V for sorting-compatible output; z-base-32 — a human-oriented alphabet designed to be easier to transcribe; and Crockford\'s Base32 — designed for human readability, excluding visually similar characters like I, L, and O.',
  },
  {
    question: 'Does this tool send my data to a server?',
    answer: 'No. All encoding and decoding is performed entirely in your browser using JavaScript. Your data never leaves your device.',
  },
  {
    question: 'Why does Base32 output end with = signs?',
    answer: 'The = characters are padding. Base32 encodes data in 5-bit groups, and if the input is not a multiple of 5 bytes, padding characters are added to make the output length a multiple of 8. Padding can be disabled in some variants like z-base-32.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Base32 Converter', url: PAGE_URL },
])

const toolData: ToolData = getToolData('base32-converter')

export default function Base32ConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="base32-converter">
        <ToolLayout
          toolId="base32-converter"
          toolName="Base32 Converter"
          toolDescription="Our free Base32 Converter lets you encode and decode Base32 instantly — supporting all major variants including RFC 4648, Base32 Hex, z-base-32, and Crockford's Base32, entirely in your browser with no uploads required."
          toolComponent={<Base32Converter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
