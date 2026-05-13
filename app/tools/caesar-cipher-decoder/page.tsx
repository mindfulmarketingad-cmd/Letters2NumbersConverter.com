import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { CaesarCipherDecoder } from '@/components/caesar-cipher-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/caesar-cipher-decoder`

export const metadata: Metadata = {
  title: 'Caesar Cipher Decoder & Encoder — Decode Any Shift Online Free',
  description: 'Free Caesar cipher decoder and encoder. Choose any shift (1–25), decode or encode instantly, or use brute-force mode to show all 25 shifts ranked by English likelihood. No sign-up. Works in your browser.',
  keywords: [
    'Caesar cipher decoder',
    'Caesar cipher encoder',
    'Caesar cipher solver',
    'decode Caesar cipher online',
    'Caesar cipher brute force',
    'Caesar cipher all shifts',
    'ROT13 decoder',
    'Caesar cipher tool',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Caesar Cipher Decoder & Encoder | Free Online Tool',
    description: 'Decode or encode any Caesar cipher with a shift slider (1–25) and instant brute-force mode that shows all 25 shifts ranked by English likelihood.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caesar Cipher Decoder & Encoder | Free Online Tool',
    description: 'Decode any Caesar cipher instantly. Shift slider, brute-force all 25 shifts, English-likelihood ranking. No uploads.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Caesar Cipher Decoder & Encoder',
  'Free online Caesar cipher decoder and encoder. Use the shift slider (1–25) to encode or decode any text, or enable brute-force mode to see all 25 possible shifts simultaneously, ranked by English-language likelihood score so you can identify the correct shift without knowing the key.',
  PAGE_URL,
  'Cipher'
)

const howToSchema = generateHowToSchema(
  'How to Decode a Caesar Cipher Online',
  'Use our free Caesar Cipher Decoder to decode or encode any Caesar-shifted text.',
  [
    { name: 'Paste your ciphertext', description: 'Type or paste the encoded text into the input box on the left. The tool transforms it in real time as you type.' },
    { name: 'Set the shift and mode', description: 'Use the slider or +/− buttons to set the shift value (1–25). Select "Decode" to reverse the shift, or "Encode" to apply it.' },
    { name: 'Or brute-force all shifts', description: 'Don\'t know the shift? Click "Show all 25 shifts" — the tool displays every possible decoded version ranked by English-language likelihood. The top result is highlighted with a ★ and an "Apply" shortcut.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is a Caesar cipher?',
    answer: 'A Caesar cipher is a substitution cipher that shifts every letter in a message by a fixed number of positions along the alphabet. For example, with a shift of 3, A becomes D, B becomes E, and Z wraps around to C. It is named after Julius Caesar, who used a shift of 3 for military communications around 58 BC.',
  },
  {
    question: 'How do I decode a Caesar cipher if I don\'t know the shift?',
    answer: 'Click "Show all 25 shifts" to reveal every possible decoded version of your text simultaneously, ranked by English-language likelihood. The shift that produces the most plausible English text is highlighted with a star and ranked first. Click the row to apply that shift.',
  },
  {
    question: 'Is ROT13 a Caesar cipher?',
    answer: 'Yes — ROT13 is a Caesar cipher with a fixed shift of 13. Because the English alphabet has 26 letters, shift 13 is self-inverse: applying it twice returns the original text. Setting the shift slider to 13 on this tool produces the same result as a ROT13 encoder.',
  },
  {
    question: 'Does the Caesar cipher work on numbers and punctuation?',
    answer: 'No — the Caesar cipher only shifts letters (A–Z and a–z). Numbers, spaces, punctuation, and other characters pass through unchanged. Case is always preserved.',
  },
  {
    question: 'How secure is the Caesar cipher?',
    answer: 'The Caesar cipher is not secure for protecting sensitive information. There are only 25 possible shifts, so an attacker can try all of them in seconds — or use letter frequency analysis to identify the shift from the most common letters in the ciphertext.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Caesar Cipher Decoder', url: PAGE_URL },
])

const toolData: ToolData = getToolData('caesar-cipher-decoder')

export default function CaesarCipherDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="caesar-cipher-decoder">
        <ToolLayout
          toolId="caesar-cipher-decoder"
          toolName="Caesar Cipher Decoder & Encoder"
          toolDescription="Our free Caesar Cipher Decoder lets you encode or decode any Caesar-shifted text with a shift slider from 1 to 25 — and includes a brute-force mode that shows all 25 possible decoded outputs simultaneously, ranked by English-language likelihood so you can crack any Caesar cipher even without knowing the shift."
          toolComponent={<CaesarCipherDecoder />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
