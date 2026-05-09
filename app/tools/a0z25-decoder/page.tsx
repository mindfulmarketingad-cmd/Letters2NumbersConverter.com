import { Metadata } from 'next'
import { A0Z25Decoder } from '@/components/a0z25-decoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'A0Z25 Decoder | Decode Numbers to Letters',
  description: 'A0Z25 Decoder - Free online tool to decode A0Z25 encoded text instantly. Convert numbers 0-25 back to letters. Perfect for cryptography and text analysis.',
  keywords: ['A0Z25 decoder', 'decode A0Z25', 'number to letter converter', 'cipher decoder', 'cryptography'],
  openGraph: {
    title: 'A0Z25 Decoder | Letters2NumbersConverter.com',
    description: 'Decode A0Z25 encoded text instantly. Convert numbers to letters online for free.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/a0z25-decoder',
    images: [
      {
        url: '/images/a0z25-decoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'A0Z25 Decoder tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A0Z25 Decoder',
    description: 'Decode A0Z25 encoded numbers to letters instantly',
    images: ['/images/a0z25-decoder-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/a0z25-decoder',
  },
}

const toolData: ToolData = getToolData('a0z25-decoder')

export default function A0Z25DecoderPage() {
  return (
    <ToolPageWrapper toolSlug="a0z25-decoder">
      <ToolLayout
        toolId="a0z25-decoder"
        toolName="A0Z25 Decoder"
        toolDescription="The A0Z25 Decoder is a specialized online tool designed to decode A0Z25 encoded text instantly. The A0Z25 Decoder converts number sequences (0-25) back into their corresponding alphabetic characters. Perfect for cryptography enthusiasts, students, programmers, and anyone working with encoded messages using the zero-indexed A0Z25 cipher system."
        toolComponent={<A0Z25Decoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
