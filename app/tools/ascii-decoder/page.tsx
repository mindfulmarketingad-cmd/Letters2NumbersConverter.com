import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { ASCIIDecoder } from '@/components/ascii-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ascii-decoder`

export const metadata: Metadata = {
  title: 'ASCII Decoder and Encoder — Convert ASCII Codes to Text Online',
  description: 'Free ASCII decoder and encoder. Convert decimal, hex, binary, or octal ASCII codes to readable text, or encode any text back to ASCII codes. Works instantly in your browser. No sign-up required.',
  keywords: [
    'ascii decoder',
    'ascii encoder',
    'ascii decoder online',
    'ascii code to text',
    'text to ascii',
    'decimal to ascii',
    'hex to ascii',
    'binary to ascii',
    'ascii converter',
    'ascii code converter online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'ASCII Decoder and Encoder — Free Online Tool',
    description: 'Decode ASCII codes (decimal, hex, binary, octal) to text or encode text to ASCII codes. Includes format selector, separator options, and a full ASCII reference table.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'ASCII Decoder and Encoder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASCII Decoder and Encoder — Free Online Tool',
    description: 'Convert ASCII codes to readable text or encode text to decimal, hex, binary, or octal ASCII. No sign-up needed.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'ASCII Decoder and Encoder',
  'Free online ASCII decoder and encoder. Convert decimal, hex, binary, or octal ASCII codes to readable text, or encode any ASCII text back to numeric codes. Includes a clickable ASCII reference table (32–126) and works entirely in your browser.',
  PAGE_URL,
  'Utility'
)

const howToSchema = generateHowToSchema(
  'How to Decode ASCII Codes to Text',
  'Use our free ASCII Decoder to convert numeric ASCII codes back to readable text in seconds.',
  [
    { name: 'Select Decode mode', description: 'Click the "Codes → Text" toggle at the top of the tool to switch to decode mode.' },
    { name: 'Choose your number format', description: 'Select the format your codes are in: Decimal (e.g. 72), Hex (e.g. 48), Binary (e.g. 1001000), or Octal (e.g. 110).' },
    { name: 'Paste your ASCII codes', description: 'Paste the ASCII codes into the input box. They can be separated by spaces, commas, or newlines — the tool handles all three.' },
    { name: 'Read the decoded text', description: 'The decoded text appears instantly in the output panel below. Invalid codes are flagged with a descriptive error message.' },
    { name: 'Copy the result', description: 'Click the Copy button to copy the decoded text to your clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is an ASCII decoder?',
    answer: 'An ASCII decoder converts numeric ASCII codes back into human-readable characters. Each ASCII code is a number (0–127) that maps to a specific character — for example, 72 = H, 101 = e, 108 = l, 108 = l, 111 = o. An ASCII decoder takes those numbers and outputs the corresponding text.',
  },
  {
    question: 'What number formats does this ASCII decoder support?',
    answer: 'This tool supports four formats: Decimal (base-10, e.g. 65 = A), Hexadecimal (base-16, e.g. 41 = A), Binary (base-2, e.g. 1000001 = A), and Octal (base-8, e.g. 101 = A). You can switch between formats using the Format selector.',
  },
  {
    question: 'How do I separate multiple ASCII codes?',
    answer: 'You can separate ASCII codes with spaces, commas, or newlines — the tool auto-detects and handles all three. For example, "72 101 108" and "72,101,108" both decode to "Hel".',
  },
  {
    question: 'Can I encode text to ASCII codes with this tool?',
    answer: 'Yes. Switch to "Text → Codes" mode using the Mode toggle. Type or paste any ASCII text and the tool outputs the numeric codes in your chosen format. You can also select a separator (Space, Comma, Newline, or None) for the output.',
  },
  {
    question: 'What happens if I enter an invalid or out-of-range code?',
    answer: 'If a code cannot be parsed in the selected format, or if it falls outside the ASCII range (0–127), the tool skips that token and shows a descriptive error message explaining which token failed and why. Valid tokens still decode normally.',
  },
  {
    question: 'Is my data sent to any server?',
    answer: 'No. All encoding and decoding happens entirely in your browser using JavaScript. No data is uploaded, stored, or sent anywhere.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'ASCII Decoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('ascii-decoder')

export default function ASCIIDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="ascii-decoder">
        <ToolLayout
          toolId="ascii-decoder"
          toolName="ASCII Decoder and Encoder"
          toolDescription="Our free ASCII Decoder and Encoder converts numeric ASCII codes to readable text — or encodes any ASCII text back to numbers. Supports decimal, hexadecimal, binary, and octal formats with flexible separator options for the output. Invalid or out-of-range codes are flagged with descriptive error messages. An interactive ASCII reference table (characters 32–126) lets you click any row to instantly populate the input. Everything runs in your browser — no sign-up, no server uploads."
          toolComponent={<ASCIIDecoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
