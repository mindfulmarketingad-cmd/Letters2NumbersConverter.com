import { Metadata } from 'next'
import { A1Z26DecoderAndEncoder } from '@/components/a1z26-decoder-and-encoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'A1Z26 Decoder and Encoder | Convert Letters to Numbers Online',
  description: 'A1Z26 Decoder and Encoder - Free online tool to convert letters to numbers (A=1, Z=26) and decode numbers back to letters instantly. Perfect for cryptography, puzzles, and data conversion.',
  keywords: ['A1Z26 decoder', 'A1Z26 encoder', 'A1Z26 converter', 'letter to number converter', 'cipher decoder'],
  openGraph: {
    title: 'A1Z26 Decoder and Encoder | Letters2NumbersConverter.com',
    description: 'Encode letters to A1Z26 numbers or decode A1Z26 numbers back to letters with our free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/a1z26-decoder-and-encoder',
    images: [
      {
        url: '/images/a1z26-decoder-and-encoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'A1Z26 Decoder and Encoder tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A1Z26 Decoder and Encoder | Convert Letters to Numbers',
    description: 'Free A1Z26 Decoder and Encoder tool with bidirectional conversion.',
    images: ['/images/a1z26-decoder-and-encoder-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/a1z26-decoder-and-encoder',
  },
}

const toolData: ToolData = getToolData('a1z26-decoder-and-encoder')

export default function A1Z26DecoderAndEncoderPage() {
  return (
    <ToolPageWrapper toolSlug="a1z26-decoder-and-encoder">
      <ToolLayout
        toolId="a1z26-decoder-and-encoder"
        toolName="A1Z26 Decoder and Encoder"
        toolDescription="The A1Z26 Decoder and Encoder is a powerful tool that converts letters to numbers and numbers back to letters using the A1Z26 cipher format (where A=1 and Z=26). This tool is ideal for cryptography enthusiasts, students learning about ciphers, puzzle solvers, and anyone working with alphanumeric encoding. Simply enter your text or numbers and instantly see the conversion with copy and download capabilities."
        toolComponent={<A1Z26DecoderAndEncoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
