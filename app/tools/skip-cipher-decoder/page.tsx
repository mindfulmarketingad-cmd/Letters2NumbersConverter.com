import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { SkipCipherDecoder } from '@/components/skip-cipher-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/skip-cipher-decoder`

const toolSchema = generateToolPageSchema(
  "Skip Cipher Decoder | Letters2NumbersConverter.com",
  "Decode skip cipher messages instantly with automatic brute force or manual parameters. Crack jump cipher codes online.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Skip Cipher Decoder | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Skip Cipher Decoder | Letters2NumbersConverter.com',
  description:
    'Decode skip cipher messages instantly with automatic brute force or manual parameters. Crack jump cipher codes online.',
  keywords: [
    'skip cipher decoder',
    'jump cipher decoder',
    'cipher decoder',
    'transposition cipher',
    'decode messages',
    'crack cipher',
  ],
  openGraph: {
    title: 'Skip Cipher Decoder',
    description: 'Instantly decode skip cipher messages with automatic detection or manual parameters',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Skip Cipher Decoder | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Skip Cipher Decoder | Letters2NumbersConverter.com", description: "Decode skip cipher messages instantly with automatic brute force or manual parameters. Crack jump cipher codes online.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('skip-cipher-decoder')

export default function SkipCipherDecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="skip-cipher-decoder">
      <ToolLayout
        toolId="skip-cipher-decoder"
        toolName="Skip Cipher Decoder"
        toolDescription="Decrypt skip cipher (jump cipher) messages with automatic brute force detection. Discover the correct skip size and starting position, or manually specify parameters for precise decryption of transposition cipher text."
        toolComponent={<SkipCipherDecoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
