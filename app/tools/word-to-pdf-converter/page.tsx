import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { WordToPdfConverter } from '@/components/word-to-pdf-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/word-to-pdf-converter`

export const metadata: Metadata = {
  title: { absolute: "Word To PDF Converter" },
  description: 'Convert Word documents (.docx, .doc) to PDF instantly in your browser. Free Word to PDF Converter — no uploads, no software, 100% private.',
  keywords: [
    'Word to PDF converter',
    'Word to PDF',
    'convert Word to PDF',
    'docx to PDF',
    'Word to PDF online free',
    'Word to PDF no upload',
    'convert docx to PDF online',
    'free Word to PDF',
    'doc to PDF converter',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Word to PDF Converter | Free & Private',
    description: 'Convert any Word document to PDF instantly — no uploads, no sign-up, works 100% in your browser.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Word to PDF Converter' }],
    url: PAGE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word to PDF Converter | Free & Private',
    description: 'Convert Word (.docx/.doc) to PDF directly in your browser. No uploads, no software required.',
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Word to PDF Converter',
  'Free online Word to PDF converter. Convert .docx and .doc files to PDF instantly in your browser with no uploads required.',
  PAGE_URL,
  'Document Conversion'
)

const howToSchema = generateHowToSchema(
  'How to Convert Word to PDF',
  'Follow these simple steps to convert any Word document to a PDF file for free.',
  [
    { name: 'Upload your Word document', description: 'Click "Choose Word file" or drag and drop your .docx or .doc file onto the upload area.' },
    { name: 'Click Convert to PDF', description: 'Press the green "Convert to PDF" button. Mammoth.js converts your Word document to HTML in your browser, then html2pdf renders it as a PDF.' },
    { name: 'Download your PDF', description: 'Once conversion is complete, click the Download button to save your PDF file.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'Is this Word to PDF converter free?',
    answer: 'Yes, our Word to PDF Converter is completely free with no sign-up required.',
  },
  {
    question: 'Does my Word document get uploaded to a server?',
    answer: 'No. All conversion happens entirely in your browser. Your file never leaves your device, making it 100% private.',
  },
  {
    question: 'What Word formats are supported?',
    answer: 'The converter supports both .docx (Office Open XML) and .doc (older Word format) files.',
  },
  {
    question: 'Will the PDF look exactly like my Word document?',
    answer: 'The converter preserves text content, headings, paragraphs, and basic formatting. Complex elements like custom fonts, macros, or advanced table styles may render slightly differently.',
  },
  {
    question: 'What is the maximum file size?',
    answer: 'The tool supports Word files up to 100 MB. Larger files may take longer depending on your device.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Word to PDF Converter', url: PAGE_URL },
])

const toolData: ToolData = getToolData('word-to-pdf-converter')

export default function WordToPdfConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="word-to-pdf-converter">
        <ToolLayout
          toolId="word-to-pdf-converter"
          toolName="Word to PDF Converter"
          toolDescription="Our free Word to PDF Converter transforms any .docx or .doc Word document into a professional PDF right in your browser — no uploads, no software, and no sign-up required."
          toolComponent={<WordToPdfConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
