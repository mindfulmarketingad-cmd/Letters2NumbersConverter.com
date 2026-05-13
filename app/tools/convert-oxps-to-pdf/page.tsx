import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { OxpsToPdfConverter } from "@/components/oxps-to-pdf-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/convert-oxps-to-pdf`

const toolSchema = generateToolPageSchema(
  "Convert OXPS to PDF",
  "Convert OXPS to PDF files instantly online. Free OXPS to PDF converter preserves formatting and works directly in your browser with no software installation required.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Convert OXPS to PDF", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Convert OXPS to PDF",
  description: "Convert OXPS to PDF files instantly online. Free OXPS to PDF converter preserves formatting and works directly in your browser with no software installation required.",
  keywords: [
    "convert oxps to pdf",
    "oxps to pdf converter",
    "oxps to pdf online",
    "oxps file converter",
    "open xps to pdf",
    "oxps converter free",
    "microsoft oxps converter"
  ],
  authors: [{ name: "Neo" }],
  openGraph: {
    title: "Convert OXPS to PDF | Free Online Converter",
    description: "Convert OXPS to PDF files instantly. Preserves formatting, works in browser, completely free.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/convert-oxps-to-pdf",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Convert OXPS to PDF" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/convert-oxps-to-pdf",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Convert OXPS to PDF", description: "Convert OXPS to PDF files instantly online. Free OXPS to PDF converter preserves formatting and works directly in your browser with no software installation required.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData("convert-oxps-to-pdf")

export default function ConvertOxpsToPdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="convert-oxps-to-pdf">
      <ToolLayout
        toolId="convert-oxps-to-pdf"
        toolName="Convert OXPS to PDF"
        toolDescription="Convert OXPS to PDF files quickly and easily with our free online converter. OXPS (Open XML Paper Specification) files can be tricky to open on many devices, but our tool transforms them into universally compatible PDF format while preserving all formatting, fonts, images, and layout elements."
        toolComponent={<OxpsToPdfConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
