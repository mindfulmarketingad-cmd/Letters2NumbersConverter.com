import { Metadata } from 'next'
import { BlackAndWhitePhotoToColorConverter } from '@/components/black-and-white-photo-to-color-converter'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'black and white photo to color converter | Letters2NumbersConverter.com',
  description: 'Black and white photo to color converter - Transform your grayscale photos into vibrant color images instantly. Free online tool for restoring vintage photographs.',
  keywords: ['black and white to color', 'photo colorization', 'colorize photos', 'black and white converter', 'restore photos', 'vintage photo restoration', 'colorize black and white'],
  openGraph: {
    title: 'black and white photo to color converter',
    description: 'Transform black and white photos into vibrant color images using advanced colorization technology.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/black-and-white-photo-to-color-converter',
    images: [
      {
        url: '/images/black-and-white-photo-to-color-converter-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Black and white photo to color converter preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'black and white photo to color converter',
    description: 'Transform your grayscale photos into vibrant color images instantly.',
    images: ['/images/black-and-white-photo-to-color-converter-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/black-and-white-photo-to-color-converter',
  },
}

const toolData: ToolData = getToolData('black-and-white-photo-to-color-converter')

export default function BlackAndWhitePhotoToColorConverterPage() {
  return (
    <ToolPageWrapper toolSlug="black-and-white-photo-to-color-converter">
      <ToolLayout
        toolId="black-and-white-photo-to-color-converter"
        toolName="Black and White Photo to Color Converter"
        toolDescription="The black and white photo to color converter is a powerful online tool designed to transform your grayscale photographs into vibrant, colorized images. Perfect for photographers, historians, archivists, and anyone looking to restore or enhance old black and white photos. This free tool uses advanced colorization algorithms to intelligently add realistic color to your images while preserving all original details and textures. Whether you're restoring family heirlooms, bringing historical photos to life, or creating artistic interpretations of classic images, our converter delivers professional-quality results instantly. All processing happens securely in your browser with complete privacy—your images are never stored or transmitted to external servers."
        toolComponent={<BlackAndWhitePhotoToColorConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
