import { Metadata } from 'next'
import { GrayscaleImageConverter } from '@/components/grayscale-image-converter'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/make-grayscale-image-online`

const toolSchema = generateToolPageSchema(
  "Grayscale Image Online | Free Image to Black & White Converter",
  "Convert any image to grayscale online instantly. Free tool to transform colored photos to black and white. No installation needed, works in your browser.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Grayscale Image Online | Free Image to Black & White Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Make Grayscale Image Online" },
  description: 'Convert any image to grayscale online instantly. Free tool to transform colored photos to black and white. No installation needed, works in your browser.',
  keywords: ['grayscale image converter', 'image to grayscale', 'make image black and white', 'convert to grayscale', 'grayscale photo converter', 'online image converter'],
  openGraph: {
    title: 'Grayscale Image Online | Make Grayscale Image Online',
    description: 'Convert your images to grayscale instantly with our free online tool. Perfect for photographers, designers, and anyone needing professional grayscale conversion.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/make-grayscale-image-online',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Grayscale Image Online | Free Image to Black & White Converter' }],
    images: [
      {
        url: '/images/make-grayscale-image-online-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Grayscale Image Converter tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grayscale Image Online - Free Image Converter',
    description: 'Convert images to grayscale instantly. No signup required, completely free.',
    images: ['/images/make-grayscale-image-online-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/make-grayscale-image-online',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('make-grayscale-image-online')

export default function GrayscaleImageOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="make-grayscale-image-online">
      <ToolLayout
        toolId="make-grayscale-image-online"
        toolName="Grayscale Image Online"
        toolDescription="The Grayscale Image Online converter is an essential tool for web designers, photographers, graphic designers, and creative professionals who need to instantly convert colored images to black and white. This free online tool provides professional-quality grayscale conversion using advanced image processing algorithms that preserve the relative brightness of colors for optimal visual quality. Whether you're working on creative projects, archiving photos, preparing images for print, or designing websites, our tool delivers fast, reliable conversion with complete privacy—all processing happens locally in your browser with no data transmission or storage."
        toolComponent={<GrayscaleImageConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
