import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { Base64EncoderDecoder } from '@/components/base64-encoder-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/base64-encoder-decoder`

export const metadata: Metadata = {
  title: { absolute: "Base64 Encoder Decoder" },
  description: 'Free Base64 encoder and decoder. Convert text to Base64 or decode Base64 back to text instantly. Supports standard and URL-safe Base64, full UTF-8 including emoji. No sign-up. Works in your browser.',
  keywords: [
    'base64 decoder',
    'base64 encoder',
    'base64 encode decode',
    'base64 decoder online',
    'base64 encoder online',
    'decode base64',
    'encode base64',
    'base64 converter',
    'base64 to text',
    'text to base64',
    'url safe base64',
    'base64 online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Base64 Encoder and Decoder — Free Online Tool',
    description: 'Encode text to Base64 or decode Base64 back to readable text. Supports standard (+/=) and URL-safe (-_) variants. Handles full UTF-8 including emoji.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Base64 Encoder and Decoder' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Encoder and Decoder — Free Online Tool',
    description: 'Convert text to Base64 or decode Base64 back to text. Standard and URL-safe modes. No sign-up.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Base64 Encoder and Decoder',
  'Free online Base64 encoder and decoder. Convert any text — including Unicode and emoji — to Base64, or decode Base64 strings back to readable text. Supports both standard RFC 4648 §4 (+/=) and URL-safe RFC 4648 §5 (-_) variants. Everything runs in your browser with no uploads.',
  PAGE_URL,
  'Utility'
)

const howToSchema = generateHowToSchema(
  'How to Encode Text to Base64',
  'Use our free Base64 Encoder to convert any text string to Base64 format in seconds.',
  [
    { name: 'Select Encode mode', description: 'Click the "Text → Base64" toggle at the top of the tool.' },
    { name: 'Choose a charset', description: 'Select Standard Base64 (+/= characters, RFC 4648 §4) or URL-safe Base64 (-_ characters, no padding, RFC 4648 §5). Use URL-safe when the output will appear in a URL or filename.' },
    { name: 'Paste or type your text', description: 'Enter any text in the input box — plain ASCII, Unicode, or emoji are all supported.' },
    { name: 'Copy the Base64 output', description: 'The Base64 output appears instantly. Click Copy to copy it to your clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is Base64 encoding?',
    answer: 'Base64 is a binary-to-text encoding scheme that represents binary data using only 64 printable ASCII characters: A–Z, a–z, 0–9, and two symbols (+ and / in standard mode). It is used to transmit binary data — like images, files, or keys — through systems that only handle text, such as email (MIME), JSON, XML, and HTML.',
  },
  {
    question: 'What is the difference between standard and URL-safe Base64?',
    answer: 'Standard Base64 (RFC 4648 §4) uses + and / as the 62nd and 63rd characters, and = for padding. URL-safe Base64 (RFC 4648 §5) replaces + with - and / with _ so the output is safe in URLs and filenames without percent-encoding. URL-safe Base64 also omits the = padding. Use URL-safe when the Base64 string will appear in a URL query parameter, path segment, or filename.',
  },
  {
    question: 'How do I decode a Base64 string?',
    answer: 'Switch to "Base64 → Text" mode, paste your Base64 string, and select the correct charset (Standard or URL-safe). The tool decodes it instantly and displays the original text. If the string uses - and _ instead of + and /, select URL-safe mode.',
  },
  {
    question: 'Does Base64 encoding work on Unicode and emoji?',
    answer: 'Yes. This tool uses the TextEncoder API to first convert your text to UTF-8 bytes, then encodes those bytes as Base64. This correctly handles any Unicode character — accented letters, CJK characters, Arabic script, emoji, and symbols. The decoder reverses this process using TextDecoder with UTF-8.',
  },
  {
    question: 'Why is the Base64 output longer than the input?',
    answer: 'Base64 encodes every 3 bytes of input as 4 characters of output, which means the output is approximately 33% larger than the input. For example, 3 bytes → 4 characters, 6 bytes → 8 characters. This size overhead is the trade-off for making binary data representable as plain text.',
  },
  {
    question: 'Is this tool safe? Is my data sent anywhere?',
    answer: 'Yes, completely safe. All encoding and decoding happens entirely in your browser using the built-in btoa() and atob() JavaScript functions and the TextEncoder/TextDecoder APIs. No data is uploaded, stored, or transmitted to any server.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Base64 Encoder Decoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('base64-encoder-decoder')

export default function Base64EncoderDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="base64-encoder-decoder">
        <ToolLayout
          toolId="base64-encoder-decoder"
          toolName="Base64 Encoder and Decoder"
          toolDescription="Our free Base64 Encoder and Decoder converts any text to Base64 format or decodes Base64 strings back to readable text — instantly, in your browser, with no uploads. It supports both standard Base64 (RFC 4648 §4, using +/= characters) and URL-safe Base64 (RFC 4648 §5, using -_ with no padding), handles full UTF-8 including emoji and Unicode, and shows input/output character counts with the encoding ratio. A built-in reference explains the difference between the two variants and when to use each."
          toolComponent={<Base64EncoderDecoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
