import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { OxpsToPdfConverter } from "@/components/oxps-to-pdf-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/convert-oxps-to-pdf",
  },
}

const toolData: ToolData = getToolData("convert-oxps-to-pdf")

export default function ConvertOxpsToPdfPage() {
  return (
    <ToolPageWrapper toolSlug="convert-oxps-to-pdf">
      <ToolLayout
        toolId="convert-oxps-to-pdf"
        toolName="Convert OXPS to PDF"
        toolDescription="Convert OXPS to PDF files quickly and easily with our free online converter. OXPS (Open XML Paper Specification) files can be tricky to open on many devices, but our tool transforms them into universally compatible PDF format while preserving all formatting, fonts, images, and layout elements."
        toolComponent={<OxpsToPdfConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
