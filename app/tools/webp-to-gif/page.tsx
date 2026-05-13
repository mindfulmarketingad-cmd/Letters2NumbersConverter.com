import { Metadata } from 'next'
import { WebpToGifConverter } from '@/components/webp-to-gif-converter'
import { ToolLayout } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/webp-to-gif`

const toolSchema = generateToolPageSchema(
  "WebP to GIF | Letters2NumbersConverter.com",
  "Convert WebP images to GIF format instantly. Free online converter with quality preservation - no registration needed.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "WebP to GIF | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'WebP to GIF | Letters2NumbersConverter.com',
  description: 'Convert WebP images to GIF format instantly. Free online converter with quality preservation - no registration needed.',
  keywords: [
    'webp to gif',
    'convert webp to gif',
    'webp converter',
    'gif converter',
    'image converter',
    'webp to gif online',
    'free image conversion',
    'image format converter'
  ],
  authors: [{ name: 'Neo' }],
  openGraph: {
    title: 'WebP to GIF - Free Online Image Converter',
    description: 'Convert WebP images to GIF format instantly with quality preservation.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/webp-to-gif',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "WebP to GIF | Letters2NumbersConverter.com" }],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/webp-to-gif',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "WebP to GIF | Letters2NumbersConverter.com", description: "Convert WebP images to GIF format instantly. Free online converter with quality preservation - no registration needed.", images: [`${BASE_URL}/og-image.png`] },
}

export default function WebpToGifPage() {
  const toolData = getToolData('webp-to-gif')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper>
      <ToolLayout
        toolId="webp-to-gif"
        toolName="WebP to GIF"
        toolDescription="WebP to GIF conversion tool that transforms WebP images to GIF format instantly. Free online converter with quality preservation - no registration needed. Perfect for converting modern WebP images to widely compatible GIF format."
        toolComponent={<WebpToGifConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
