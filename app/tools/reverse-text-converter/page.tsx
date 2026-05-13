import { Metadata } from 'next'
import { ReverseTextConverter } from '@/components/reverse-text-converter'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/reverse-text-converter`

const toolSchema = generateToolPageSchema(
  "Reverse Text Converter | Free Online Tool",
  "Reverse Text Converter - Free online tool to reverse any text, string, or message instantly. Perfect for palindromes, string manipulation, and text analysis.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Reverse Text Converter | Free Online Tool", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Reverse Text Converter | Free Online Tool',
  description: 'Reverse Text Converter - Free online tool to reverse any text, string, or message instantly. Perfect for palindromes, string manipulation, and text analysis.',
  keywords: ['reverse text', 'text reverser', 'reverse string', 'palindrome checker', 'string reversal'],
  openGraph: {
    title: 'Reverse Text Converter​ Online Free',
    description: 'Reverse any text or string instantly with this free online Reverse Text Converter.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/reverse-text-converter',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Reverse Text Converter | Free Online Tool' }],
    images: [
      {
        url: '/images/reverse-text-converter-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Reverse Text Converter tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reverse Text Converter​ Online Free',
    description: 'Reverse any text instantly with our free online tool.',
    images: ['/images/reverse-text-converter-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/reverse-text-converter',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('reverse-text-converter')

export default function ReverseTextConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="reverse-text-converter">
      <ToolLayout
        toolId="reverse-text-converter"
        toolName="Reverse Text Converter"
        toolDescription="The Reverse Text Converter is designed to instantly reverse any text, string, or message character by character. Whether you need to create palindromes, work with backward text, or prepare content for special formatting, this tool provides real-time reversal with copy and sharing capabilities."
        toolComponent={<ReverseTextConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
