import { Metadata } from 'next'
import { A0Z25Converter } from '@/components/a0z25-converter'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'A0Z25 Converter | Convert Letters to Numbers Online',
  description: 'A0Z25 Converter - Free online tool to convert letters to numbers (A=0, Z=25) and decode numbers back to letters. Perfect for cryptography, coding, and text encoding.',
  keywords: ['A0Z25 converter', 'letters to numbers', 'A0Z25 encoder', 'A0Z25 decoder', 'text converter'],
  openGraph: {
    title: 'A0Z25 Converter',
    description: 'Convert between letters and A0Z25 numbers instantly with this free online converter.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/a0z25-converter',
    images: [
      {
        url: '/images/a0z25-converter-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'A0Z25 Converter tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A0Z25 Converter',
    description: 'Convert letters to numbers and numbers to letters with A0Z25 formatting.',
    images: ['/images/a0z25-converter-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/a0z25-converter',
  },
}

const toolData: ToolData = getToolData('a0z25-converter')

export default function A0Z25ConverterPage() {
  return (
    <ToolPageWrapper toolSlug="a0z25-converter">
      <ToolLayout
        toolId="a0z25-converter"
        toolName="A0Z25 Converter"
        toolDescription="The A0Z25 Converter is a powerful bidirectional tool designed to convert letters to numbers using the A0Z25 cipher format (where A=0 and Z=25) and convert A0Z25 numbers back to readable text. Perfect for cryptography enthusiasts, programmers, students, and security professionals who need to work with zero-indexed alphabetic encoding for puzzles, coding challenges, and data transformation."
        toolComponent={<A0Z25Converter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
