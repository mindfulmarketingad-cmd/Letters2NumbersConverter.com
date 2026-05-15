import { Metadata } from 'next'
import { BaconianCipher } from '@/components/baconian-cipher'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/baconian-cipher`

const toolSchema = generateToolPageSchema(
  "Baconian Cipher | Encode & Decode Text",
  "Use the Baconian Cipher tool to encode messages using A/B patterns or decode A/B sequences back to plaintext. Support for original 24-letter alphabet and modern variants.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Baconian Cipher | Encode & Decode Text", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Baconian Cipher" },
  description: 'Use the Baconian Cipher tool to encode messages using A/B patterns or decode A/B sequences back to plaintext. Support for original 24-letter alphabet and modern variants.',
  keywords: ['Baconian cipher', 'Baconian cipher encoder', 'Baconian cipher decoder', 'A/B cipher', 'classical cipher'],
  openGraph: {
    title: 'Baconian Cipher | Letters2NumbersConverter.com',
    description: 'Encode and decode text using the Baconian Cipher with A/B pattern support.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/baconian-cipher',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Baconian Cipher | Encode & Decode Text" }],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/baconian-cipher',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Baconian Cipher | Encode & Decode Text", description: "Use the Baconian Cipher tool to encode messages using A/B patterns or decode A/B sequences back to plaintext. Support for original 24-letter alphabet and modern variants.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('baconian-cipher')

export default function BaconianCipherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="baconian-cipher">
      <ToolLayout
        toolId="baconian-cipher"
        toolName="Baconian Cipher"
        toolDescription="The Baconian Cipher is a classic encoding method that represents each letter as a sequence of A and B characters. This tool allows you to encode plaintext messages into A/B patterns or decode A/B sequences back to readable text. Perfect for cryptography enthusiasts, puzzle solvers, and security professionals."
        toolComponent={<BaconianCipher />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
