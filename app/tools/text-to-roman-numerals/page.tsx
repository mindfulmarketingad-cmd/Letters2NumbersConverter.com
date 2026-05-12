import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { TextToRomanNumerals } from '@/components/text-to-roman-numerals'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/text-to-roman-numerals`

export const metadata: Metadata = {
  title: 'Text to Roman Numerals',
  description: 'Text to Roman Numerals converter — instantly translate any text or number into Roman numerals. Free, browser-based, with separator options and a reverse decoder.',
  keywords: [
    'text to roman numerals',
    'roman numeral converter',
    'convert text to roman numerals',
    'roman numerals translator',
    'number to roman numerals',
    'roman numeral decoder',
    'roman numerals online',
    'ASCII to roman numerals',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Text to Roman Numerals | Free Converter & Decoder',
    description: 'Convert any text or number to Roman numerals instantly. Choose your separator, decode Roman numerals back to text, and view the full reference chart.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Text to Roman Numerals Converter',
    description: 'Instantly convert text or numbers to Roman numerals — free, browser-based, with separator control and reverse decoding.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Text to Roman Numerals',
  'Free online Text to Roman Numerals converter. Translate any text (via ASCII values) or numbers into Roman numerals instantly, with custom separator options and a reverse Roman numeral decoder.',
  PAGE_URL,
  'Number Conversion'
)

const howToSchema = generateHowToSchema(
  'How to Convert Text to Roman Numerals',
  'Use our free Text to Roman Numerals tool to translate any text or number into Roman numerals in seconds.',
  [
    { name: 'Choose what to interpret', description: 'Select "Text (ASCII)" to convert each character by its ASCII value, or "Numbers" to convert space/comma-separated integers directly to Roman numerals.' },
    { name: 'Choose your output format', description: 'Select "Roman Numerals" to encode, or "Text / Numbers (decode)" to translate Roman numerals back to their original values.' },
    { name: 'Enter your input', description: 'Type or paste your text or numbers into the left panel. Output updates instantly.' },
    { name: 'Set your separator', description: 'Click the "Separator" dropdown on the right panel to choose how Roman numerals are separated — space, comma, hyphen, newline, or a custom character.' },
    { name: 'Copy your result', description: 'Click the copy icon in the bottom-right of the output panel to copy your Roman numerals to the clipboard.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'How does Text to Roman Numerals work?',
    answer: 'Each character in your text is converted to its ASCII code (e.g. H=72, i=105), and that number is then expressed as a Roman numeral (72=LXXII, 105=CV). You can also switch to Numbers mode and enter integers directly.',
  },
  {
    question: 'What is the largest number Roman numerals can represent?',
    answer: 'Standard Roman numerals represent numbers from 1 to 3,999 (MMMCMXCIX). This tool supports values up to 9,999 using extended notation. Values outside this range return "?".',
  },
  {
    question: 'Can I decode Roman numerals back to text or numbers?',
    answer: 'Yes. Switch "Convert to" to "Text / Numbers (decode)" and paste your Roman numerals separated by spaces or commas. The tool reverses the conversion back to the original numbers or characters.',
  },
  {
    question: 'What does "hi" convert to in Roman numerals?',
    answer: '"h" has ASCII code 104 (CIV) and "i" has ASCII code 105 (CV), so "hi" converts to "CIV CV" — exactly as shown in the example.',
  },
  {
    question: 'What separator should I use?',
    answer: 'For readability, the default space separator works well. Use comma or hyphen for a more compact or styled output. Use newline to put each Roman numeral on its own line, or choose "None" for a continuous string.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Text to Roman Numerals', url: PAGE_URL },
])

const toolData: ToolData = getToolData('text-to-roman-numerals')

export default function TextToRomanNumeralsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="text-to-roman-numerals">
        <ToolLayout
          toolId="text-to-roman-numerals"
          toolName="Text to Roman Numerals"
          toolDescription="Our free Text to Roman Numerals converter instantly translates any text or number into Roman numerals — choose your interpretation mode, pick a separator, and decode Roman numerals back to text, all in your browser."
          toolComponent={<TextToRomanNumerals />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
