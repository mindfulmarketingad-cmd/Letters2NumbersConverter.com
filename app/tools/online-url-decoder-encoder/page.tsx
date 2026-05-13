import { Metadata } from 'next'
import { OnlineUrlDecoderEncoder } from '@/components/online-url-decoder-encoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/online-url-decoder-encoder`

const toolSchema = generateToolPageSchema(
  "Online URL Decoder Encoder | Instant URL Encoding/Decoding",
  "Online URL Decoder Encoder - Instantly decode and encode URLs. Free tool for web developers, API testing, and security professionals. Supports recursive decoding and batch processing.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Online URL Decoder Encoder | Instant URL Encoding/Decoding", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Online URL Decoder Encoder | Instant URL Encoding/Decoding',
  description: 'Online URL Decoder Encoder - Instantly decode and encode URLs. Free tool for web developers, API testing, and security professionals. Supports recursive decoding and batch processing.',
  keywords: ['URL decoder', 'URL encoder', 'online URL decoder', 'URL decoding', 'URL encoding', 'encode URL', 'decode URL', 'percent encoding'],
  openGraph: {
    title: 'Online URL Decoder Encoder | Letters2NumbersConverter.com',
    description: 'Decode and encode URLs instantly with our free online tool. Perfect for web development and API testing.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/online-url-decoder-encoder',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Online URL Decoder Encoder | Instant URL Encoding/Decoding' }],
    images: [
      {
        url: '/images/online-url-decoder-encoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Online URL Decoder Encoder tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online URL Decoder Encoder',
    description: 'Instantly encode and decode URLs with this free online tool.',
    images: ['/images/online-url-decoder-encoder-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/online-url-decoder-encoder',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('online-url-decoder-encoder')

export default function OnlineUrlDecoderEncoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="online-url-decoder-encoder">
      <ToolLayout
        toolId="online-url-decoder-encoder"
        toolName="Online URL Decoder Encoder"
        toolDescription="The Online URL Decoder Encoder is an essential tool for web developers, API testers, security professionals, and anyone working with URLs and encoded data. This free online tool allows you to instantly encode plain text to URL-safe format and decode URL-encoded strings with support for recursive decoding (up to 16 levels), batch processing of multiple entries, and real-time conversion. Whether you're debugging API calls, analyzing encoded parameters, or preparing data for web transmission, this tool provides fast, accurate, and reliable URL encoding and decoding capabilities."
        toolComponent={<OnlineUrlDecoderEncoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
