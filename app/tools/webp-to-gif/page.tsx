import { Metadata } from 'next'
import { WebpToGifConverter } from '@/components/webp-to-gif-converter'
import { ToolLayout } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/webp-to-gif`

const toolSchema = generateToolPageSchema(
  "WebP to GIF",
  "Convert WebP images to GIF format instantly. Free online converter with quality preservation - no registration needed.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "WebP to GIF", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "WebP to GIF" },
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
        toolDescription="WebP to GIF is a browser-based image converter that transforms static and animated WebP files into widely compatible GIF format entirely on your device, with no file uploads to any server and no account or registration required. WebP is a modern, efficient image format favored by web platforms, but GIF remains the standard for animated images on social media, messaging apps, email clients, and older platforms that do not yet support WebP playback. This tool handles both static WebP images and animated WebP sequences, faithfully converting frame timing and transparency for animated files so the resulting GIF plays correctly wherever GIFs are supported. The conversion runs locally in your browser for instant results, keeping your images private and eliminating any wait times associated with server-side processing."
        toolComponent={<WebpToGifConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
