import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { PdfToWordConverter } from '@/components/pdf-to-word-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/pdf-to-word-converter`

export const metadata: Metadata = {
  title: 'PDF to Word Converter',
  description: 'Convert PDF to Word (.docx) instantly in your browser. Free PDF to Word Converter — no uploads, no software, 100% private. Preserves text and formatting.',
  keywords: [
    'PDF to Word converter',
    'PDF to Word',
    'convert PDF to Word',
    'PDF to docx',
    'PDF to Word online free',
    'PDF converter',
    'free PDF to Word',
    'convert PDF to docx online',
    'PDF to Word no upload',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'PDF to Word Converter | Free & Private',
    description: 'Convert any PDF to an editable Word document instantly — no uploads, no sign-up, works 100% in your browser.',
    type: 'website',
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to Word Converter | Free & Private',
    description: 'Convert PDF to Word (.docx) directly in your browser. No uploads, no software required.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const toolSchema = generateToolPageSchema(
  'PDF to Word Converter',
  'Free online PDF to Word converter. Convert PDF files to editable .docx Word documents instantly in your browser with no uploads required.',
  PAGE_URL,
  'Document Conversion'
)

const howToSchema = generateHowToSchema(
  'How to Convert PDF to Word',
  'Follow these simple steps to convert any PDF file to an editable Word document for free.',
  [
    { name: 'Upload your PDF', description: 'Click "Choose PDF file" or drag and drop your PDF onto the upload area.' },
    { name: 'Click Convert to Word', description: 'Press the green "Convert to Word" button. The tool extracts all text from your PDF pages using PDF.js running locally in your browser.' },
    { name: 'Download your .docx file', description: 'Once conversion is complete, click the Download button to save your Word document.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'Is this PDF to Word converter free?',
    answer: 'Yes, our PDF to Word Converter is completely free with no file size caps on the free tier and no sign-up required.',
  },
  {
    question: 'Does my PDF get uploaded to a server?',
    answer: 'No. All conversion happens directly in your browser using PDF.js. Your file never leaves your device, making it 100% private.',
  },
  {
    question: 'What Word format does the converter produce?',
    answer: 'The converter outputs a standard .docx file (Office Open XML), which is compatible with Microsoft Word, Google Docs, LibreOffice, and all modern word processors.',
  },
  {
    question: 'Will the converted Word document look exactly like the PDF?',
    answer: 'The converter extracts all text content and attempts to preserve basic formatting such as headings and paragraphs. Complex layouts, images, tables, and custom fonts may not be preserved since PDF is a fixed-layout format.',
  },
  {
    question: 'What is the maximum PDF file size?',
    answer: 'The tool supports PDF files up to 100 MB. Larger files may take longer to process depending on your device.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'PDF to Word Converter', url: PAGE_URL },
])

const toolData: ToolData = getToolData('pdf-to-word-converter')

export default function PdfToWordConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ToolPageWrapper toolSlug="pdf-to-word-converter">
        <ToolLayout
          toolId="pdf-to-word-converter"
          toolName="PDF to Word Converter"
          toolDescription="Our free PDF to Word Converter transforms any PDF file into a fully editable Word (.docx) document right in your browser — no uploads, no software, and no sign-up required."
          toolComponent={<PdfToWordConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
