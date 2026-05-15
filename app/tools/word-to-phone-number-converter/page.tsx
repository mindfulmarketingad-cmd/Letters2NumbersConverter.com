import { Metadata } from 'next'
import { WordToPhoneNumberConverter } from '@/components/word-to-phone-number-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/word-to-phone-number-converter`

const toolSchema = generateToolPageSchema(
  'Word To Phone Number Converter',
  'Convert any word or phrase to its phone keypad number equivalent. Perfect for creating vanity phone numbers — free and instant.',
  PAGE_URL,
  'Utility',
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Word To Phone Number Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: 'Word To Phone Number Converter' },
  description:
    'Free word to phone number converter. Type any word or phrase and instantly get the phone keypad digit sequence — perfect for vanity numbers like 1-800-FLOWERS. Choose raw, dashes, dots, or US formatting.',
  keywords: [
    'word to phone number converter',
    'word to phone number',
    'vanity phone number converter',
    'letters to phone number',
    'phone keypad converter',
    'word to dialpad number',
    'vanity number generator',
    '1800 word converter',
  ],
  openGraph: {
    title: 'Word To Phone Number Converter',
    description: 'Convert any word or phrase to phone keypad digits. Create vanity phone numbers instantly.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Word To Phone Number Converter' }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: 'Word To Phone Number Converter',
    description: 'Free word to phone number converter — type a word and get its phone keypad digits instantly.',
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: 'Type or paste a word, phrase, or vanity number (like 1-800-FLOWERS or PIZZA) into the input field. Every letter is immediately mapped to its corresponding phone keypad digit using the standard T9 layout (A/B/C = 2, D/E/F = 3, and so on). The character mapping strip below the input shows each letter next to its digit so you can see exactly how the conversion works. Use the format buttons to display the result as raw digits, dashes (XXX-XXXX), dots, spaces, or full US phone format (+1 XXX-XXX-XXXX). Copy the result with one click.',
  features: [
    'Instant word-to-dialpad conversion using the standard T9 phone keypad',
    'Character-by-character mapping strip — see every letter next to its digit',
    'Five output formats: raw, dashes (XXX-XXXX), dots, spaces, and US (+1 format)',
    'Preserves existing digits in mixed inputs (e.g. 1-800-FLOWERS)',
    'Interactive visual keypad — highlights keys used by your input',
    'Sample words: FLOWERS, PIZZA, HELP ME, 1-800-TAXI CAB',
    'One-click copy to clipboard',
    'Fully private — runs entirely in your browser',
  ],
  whoIsItFor: [
    { title: 'Business Owners', description: 'Creating memorable vanity phone numbers like 1-800-PLUMBER or 1-888-PIZZA for marketing campaigns and business cards.' },
    { title: 'Marketers & Advertisers', description: 'Translating brand words into dialpad digits for TV/radio spots, billboards, and print ads where memorable numbers drive call volume.' },
    { title: 'Puzzle & Trivia Fans', description: 'Decoding what word a phone number spells out, or finding the number behind a well-known vanity number.' },
    { title: 'Developers', description: 'Quickly verifying phone keypad mappings when building apps that support T9, vanity number lookup, or dialpad input.' },
  ],
}

export default function WordToPhoneNumberConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="word-to-phone-number-converter">
        <ToolLayout
          toolId="word-to-phone-number-converter"
          toolName="Word To Phone Number Converter"
          toolDescription="The Word To Phone Number Converter translates any word or phrase into its phone keypad digit sequence using the standard T9 layout. Type a vanity number like 1-800-FLOWERS, see every letter mapped to its digit in real time, then choose from five output formats — raw, dashes, dots, spaces, or full US notation. Perfect for creating or decoding memorable phone numbers."
          toolComponent={<WordToPhoneNumberConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
