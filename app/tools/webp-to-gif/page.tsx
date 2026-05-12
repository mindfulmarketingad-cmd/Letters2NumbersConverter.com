import { Metadata } from 'next'
import { WebpToGifConverter } from '@/components/webp-to-gif-converter'
import { ToolLayout, ToolPageWrapper } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

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
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/webp-to-gif',
  },
}

export default function WebpToGifPage() {
  const toolData = getToolData('webp-to-gif')

  return (
    <ToolPageWrapper>
      <ToolLayout
        toolId="webp-to-gif"
        toolComponent={<WebpToGifConverter />}
        title="WebP to GIF"
        highlightWord="GIF"
        toolData={toolData}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'WebP to GIF Converter',
          description: 'Free online WebP to GIF image converter with quality preservation',
          url: 'https://www.letters2numbersconverter.com/tools/webp-to-gif',
          applicationCategory: 'UtilityApplication',
        }}
      />
    </ToolPageWrapper>
  )
}
