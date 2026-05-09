import { Metadata } from 'next'
import { ScanWordsFromImage } from '@/components/scan-words-from-image'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'Scan Words From Image | Free OCR Text Extractor',
  description: 'Scan Words From Image - Extract text from images using advanced OCR technology. Instantly convert images to editable text. Free online tool with privacy protection.',
  keywords: ['scan words from image', 'OCR text extractor', 'image to text', 'extract text from image', 'optical character recognition', 'image text scanner', 'text recognition'],
  openGraph: {
    title: 'Scan Words From Image | Letters2NumbersConverter.com',
    description: 'Extract text from images instantly using advanced OCR technology. Free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/scan-words-from-image',
    images: [
      {
        url: '/images/scan-words-from-image-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Scan Words From Image OCR tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scan Words From Image',
    description: 'Extract text from images instantly with advanced OCR technology.',
    images: ['/images/scan-words-from-image-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/scan-words-from-image',
  },
}

const toolData: ToolData = getToolData('scan-words-from-image')

export default function ScanWordsFromImagePage() {
  return (
    <ToolPageWrapper toolSlug="scan-words-from-image">
      <ToolLayout
        toolId="scan-words-from-image"
        toolName="Scan Words From Image"
        toolDescription="Scan Words From Image is an advanced OCR (Optical Character Recognition) tool designed for students, professionals, office workers, and anyone who needs to extract text from images quickly and accurately. This free online tool uses cutting-edge OCR technology to convert images, screenshots, scanned documents, and photos into editable, searchable text. Whether you're digitizing paperwork, processing receipts, transcribing handwritten notes, or automating data entry, this tool provides fast, reliable text extraction with complete privacy—all processing happens locally in your browser with no data transmission or storage."
        toolComponent={<ScanWordsFromImage />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
