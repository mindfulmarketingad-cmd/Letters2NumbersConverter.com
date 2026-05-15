import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { OxpsToPdfConverter } from "@/components/oxps-to-pdf-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/convert-oxps-to-pdf`

export const metadata: Metadata = {
  title: { absolute: "Convert OXPS To PDF" },
  description: "Convert OXPS to PDF instantly online. Upload any Open XML Paper Specification (.oxps) file and download a compatible PDF in seconds. Free, no install, no sign-up. Works in your browser.",
  keywords: [
    "convert oxps to pdf",
    "oxps to pdf converter",
    "oxps to pdf online",
    "oxps file converter",
    "open xps to pdf",
    "oxps converter free",
    "microsoft oxps converter",
    "oxps to pdf free",
    "convert open xps online",
  ],
  authors: [{ name: "John Reed" }],
  openGraph: {
    title: "Convert OXPS to PDF — Free Online OXPS to PDF Converter",
    description: "Upload an OXPS file and download a PDF in seconds. Preserves formatting, fonts, and images. Free, no sign-up, runs in your browser.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Convert OXPS to PDF — Free Online Tool" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: "Convert OXPS to PDF — Free Online Converter",
    description: "Upload an OXPS file and download a PDF instantly. No software needed.",
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolSchema = generateToolPageSchema(
  "Convert OXPS to PDF",
  "Free online OXPS to PDF converter. Upload any Open XML Paper Specification file and download a universally compatible PDF in seconds. Preserves formatting, fonts, and images. No installation, no sign-up — runs entirely in your browser.",
  PAGE_URL,
  'Utility'
)

const howToSchema = generateHowToSchema(
  "How to Convert OXPS to PDF Online",
  "Convert any OXPS file to PDF in three steps using our free online converter.",
  [
    { name: "Upload your OXPS file", description: "Click the upload area or drag and drop your .oxps file directly onto it. The tool accepts OXPS files up to 100 MB." },
    { name: "Click Convert to PDF", description: "Press the green 'Convert to PDF' button. The converter processes your file and preserves all text, images, fonts, and page layout from the original document." },
    { name: "Download your PDF", description: "When conversion is complete, a download button appears. Click 'Download PDF' to save the converted file to your device. Your file is never stored on a server." },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: "What is an OXPS file?",
    answer: "OXPS (Open XML Paper Specification) is a fixed-layout document format developed by Microsoft as an open-standards successor to XPS. It was introduced with Windows 8 and is essentially Microsoft's alternative to PDF. OXPS files preserve exact page layout and can be created by printing from any Windows application using the Microsoft XPS Document Writer printer.",
  },
  {
    question: "Why convert OXPS to PDF?",
    answer: "PDF is supported on virtually every device and operating system, while OXPS can only be natively opened in Windows 8 or later. Converting OXPS to PDF lets you share documents with Mac, Linux, iOS, and Android users, and ensures compatibility with email clients, web browsers, and cloud storage services like Google Drive and Dropbox.",
  },
  {
    question: "Is the OXPS to PDF conversion accurate?",
    answer: "The converter preserves the text, images, fonts, and page layout from the original OXPS document. OXPS is itself a fixed-layout format (like PDF), so the page geometry carries over without reformatting.",
  },
  {
    question: "Is my OXPS file uploaded to a server?",
    answer: "No. The conversion runs entirely in your browser using JavaScript. Your OXPS file is never sent to or stored on any external server. Once you close or refresh the page, no trace of the file remains.",
  },
  {
    question: "What is the difference between OXPS and XPS?",
    answer: "XPS (XML Paper Specification) is the original Microsoft fixed-layout format introduced with Windows Vista. OXPS is the updated Open XML Paper Specification version introduced with Windows 8, based on the ECMA-388 open standard. OXPS files use the .oxps extension; XPS files use .xps. Most converters that handle one will also handle the other.",
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Convert OXPS to PDF", url: PAGE_URL },
])

const toolData: ToolData = getToolData("convert-oxps-to-pdf")

export default function ConvertOxpsToPdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="convert-oxps-to-pdf">
        <ToolLayout
          toolId="convert-oxps-to-pdf"
          toolName="Convert OXPS to PDF"
          toolDescription="Our free OXPS to PDF converter transforms any Open XML Paper Specification file into a universally compatible PDF in seconds. OXPS is a fixed-layout document format introduced with Windows 8 — it looks identical to PDF but can only be natively opened on Windows, which makes sharing difficult. Converting to PDF solves that instantly. Upload your .oxps file, click Convert, and download the PDF. All text, images, embedded fonts, and page geometry from the original document are preserved in the output. The conversion runs entirely inside your browser — your file is never uploaded to a server, stored anywhere, or accessible to anyone else. No software installation is needed, and there is no file size limit beyond what your browser can handle. The tool also works on Mac, Linux, and mobile — anywhere with a modern browser."
          toolComponent={<OxpsToPdfConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
