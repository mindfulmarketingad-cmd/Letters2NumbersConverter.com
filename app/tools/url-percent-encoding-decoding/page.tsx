import { Metadata } from 'next'
import { UrlPercentEncodingDecoding } from '@/components/url-percent-encoding-decoding'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/url-percent-encoding-decoding`

const toolSchema = generateToolPageSchema(
  "URL Percent Encoding and Decoding | Instant URL Encoding Tool",
  "URL Percent Encoding and Decoding - Instantly encode and decode URLs. Free online tool for developers, API testing, and web professionals. Convert special characters to percent-encoded format.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "URL Percent Encoding and Decoding | Instant URL Encoding Tool", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'URL Percent Encoding and Decoding | Instant URL Encoding Tool',
  description: 'URL Percent Encoding and Decoding - Instantly encode and decode URLs. Free online tool for developers, API testing, and web professionals. Convert special characters to percent-encoded format.',
  keywords: ['URL percent encoding', 'URL decoding', 'percent encoding', 'URL encoding', 'online URL encoder', 'online URL decoder', '%20 encoding', 'special characters'],
  openGraph: {
    title: 'URL Percent Encoding and Decoding | Letters2NumbersConverter.com',
    description: 'Instantly encode and decode URLs with our free online tool. Perfect for developers and API testing.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/url-percent-encoding-decoding',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'URL Percent Encoding and Decoding | Instant URL Encoding Tool' }],
    images: [
      {
        url: '/images/url-percent-encoding-decoding-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'URL Percent Encoding and Decoding tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Percent Encoding and Decoding',
    description: 'Instantly encode and decode URLs with this free online tool.',
    images: ['/images/url-percent-encoding-decoding-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/url-percent-encoding-decoding',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('url-percent-encoding-decoding')

export default function UrlPercentEncodingDecodingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="url-percent-encoding-decoding">
      <ToolLayout
        toolId="url-percent-encoding-decoding"
        toolName="URL Percent Encoding and Decoding"
        toolDescription="URL Percent Encoding and Decoding is an essential tool for web developers, API testers, network administrators, and security professionals. This free online tool instantly converts text to URL-safe percent-encoded format and decodes percent-encoded URLs back to plain text. Handle special characters, spaces, and problematic symbols safely with our bidirectional encoder/decoder. Perfect for debugging API calls, testing query parameters, preparing data for web transmission, and understanding how URLs work. Supports all standard special characters and provides clear results for both encoding and decoding operations."
        toolComponent={<UrlPercentEncodingDecoding />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
