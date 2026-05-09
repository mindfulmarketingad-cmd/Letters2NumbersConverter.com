import { Metadata } from 'next'
import { SteganographyImageDecoder } from '@/components/steganography-image-decoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-registry'

export const metadata: Metadata = {
  title: 'Steganography Image Decoder',
  description:
    'Free online Steganography Image Decoder tool. Extract hidden information, text, messages, and images embedded in carrier images using LSB (Least Significant Bit) extraction. Decode steganographic images instantly.',
  keywords: [
    'steganography decoder',
    'image steganography',
    'decode hidden messages',
    'LSB extraction',
    'image decoder',
    'hidden text extractor',
  ],
  openGraph: {
    title: 'Steganography Image Decoder',
    description:
      'Extract hidden information from steganographic images. Decode text, messages, and embedded images with our free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/steganography-image-decoder',
    images: [
      {
        url: 'https://www.letters2numbersconverter.com/images/steganography-decoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Steganography Image Decoder Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steganography Image Decoder',
    description:
      'Extract hidden information from steganographic images. Decode text, messages, and embedded images with our free online tool.',
    images: ['https://www.letters2numbersconverter.com/images/steganography-decoder-preview.jpg'],
  },
}

export default function SteganographyDecoderPage() {
  const toolData = getToolData('steganography-image-decoder')

  return (
    <ToolPageWrapper toolSlug="steganography-image-decoder">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Steganography Image Decoder',
            description:
              'A free online tool designed to extract hidden information such as text, messages, or other images embedded within a carrier image using LSB (Least Significant Bit) manipulation.',
            url: 'https://www.letters2numbersconverter.com/tools/steganography-image-decoder',
            applicationCategory: 'UtilityApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            author: {
              '@type': 'Organization',
              name: 'Letters2Numbers Converter',
              url: 'https://www.letters2numbersconverter.com',
            },
            datePublished: new Date().toISOString(),
            version: '1.0',
            featureList: [
              'Extract hidden text from images',
              'LSB (Least Significant Bit) extraction',
              'Password-protected steganography support',
              'Multiple image format support',
              'Instant decoding',
              'Download decoded data',
              'No data storage or logging',
            ],
          }),
        }}
      />
      <ToolLayout
        toolId="steganography-image-decoder"
        toolName="Steganography Image Decoder"
        toolDescription="Steganography Image Decoder - A free online tool designed to extract hidden information such as text, messages, or other images embedded within a carrier image. This tool reverses the encoding process by analyzing pixel data, often using methods like Least Significant Bit (LSB) manipulation, to extract data from the image's color values."
        toolComponent={<SteganographyImageDecoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
