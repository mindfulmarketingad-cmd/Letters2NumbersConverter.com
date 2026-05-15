import { Metadata } from 'next'
import { A1Z26DecoderAndEncoder } from '@/components/a1z26-decoder-and-encoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/a1z26-decoder-and-encoder`

const toolSchema = generateToolPageSchema(
  "A1Z26 Decoder and Encoder | Convert Letters to Numbers Online",
  "A1Z26 Decoder and Encoder - Free online tool to convert letters to numbers (A=1, Z=26) and decode numbers back to letters instantly. Perfect for cryptography, puzzles, and data conversion.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "A1Z26 Decoder and Encoder | Convert Letters to Numbers Online", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "A1Z26 Decoder and Encoder" },
  description: 'A1Z26 Decoder and Encoder - Free online tool to convert letters to numbers (A=1, Z=26) and decode numbers back to letters instantly. Perfect for cryptography, puzzles, and data conversion.',
  keywords: ['A1Z26 decoder', 'A1Z26 encoder', 'A1Z26 converter', 'letter to number converter', 'cipher decoder'],
  openGraph: {
    title: 'A1Z26 Decoder and Encoder | Letters2NumbersConverter.com',
    description: 'Encode letters to A1Z26 numbers or decode A1Z26 numbers back to letters with our free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/a1z26-decoder-and-encoder',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'A1Z26 Decoder and Encoder | Convert Letters to Numbers Online' }],
    images: [
      {
        url: '/images/a1z26-decoder-and-encoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'A1Z26 Decoder and Encoder tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1Z26 Decoder and Encoder | Convert Letters to Numbers',
    description: 'Free A1Z26 Decoder and Encoder tool with bidirectional conversion.',
    images: ['/images/a1z26-decoder-and-encoder-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/a1z26-decoder-and-encoder',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('a1z26-decoder-and-encoder')

export default function A1Z26DecoderAndEncoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="a1z26-decoder-and-encoder">
      <ToolLayout
        toolId="a1z26-decoder-and-encoder"
        toolName="A1Z26 Decoder and Encoder"
        toolDescription="The A1Z26 Decoder and Encoder is a powerful tool that converts letters to numbers and numbers back to letters using the A1Z26 cipher format (where A=1 and Z=26). This tool is ideal for cryptography enthusiasts, students learning about ciphers, puzzle solvers, and anyone working with alphanumeric encoding. Simply enter your text or numbers and instantly see the conversion with copy and download capabilities."
        toolComponent={<A1Z26DecoderAndEncoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
