import { Metadata } from "next"
import { BatchFileEditor } from "@/components/batch-file-editor"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Batch File Editor | Letters2NumbersConverter.com",
  description: "Instant Batch File Editor for creating and editing .bat files with real-time file statistics. Write batch scripts, download as .bat files, and analyze file metrics instantly.",
  keywords: [
    "batch file editor",
    "batch script editor",
    ".bat file editor",
    "Windows batch editor",
    "batch script creator",
    "batch file analyzer",
    "command line script editor",
    "batch programming tool"
  ],
  openGraph: {
    title: "Batch File Editor - Create & Edit Batch Scripts Instantly",
    description: "Edit batch files with real-time statistics, syntax highlighting, and instant download. Perfect for Windows administrators and developers.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/batch-file-editor",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/batch-file-editor",
  },
}

export default function BatchFileEditorPage() {
  const toolData = getToolData('batch-file-editor')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Batch File Editor",
            "description": "Instant Batch File Editor for creating and editing .bat files with real-time file statistics and analysis.",
            "url": "https://www.letters2numbersconverter.com/tools/batch-file-editor",
            "applicationCategory": "UtilityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Letters2Numbers Converter",
              "url": "https://www.letters2numbersconverter.com"
            }
          })
        }}
      />
    <ToolPageWrapper toolSlug="batch-file-editor">
      <ToolLayout
        toolId="batch-file-editor"
        toolName="Batch File Editor"
        toolDescription="Batch File Editor - Create, edit, and analyze batch files instantly. Write .bat scripts with real-time statistics showing character count, word count, lines, and file size. Download batch files directly or copy to clipboard for immediate use in Windows automation and system administration."
        toolComponent={<BatchFileEditor />}
        toolData={toolData}
      />
    </>
  )
}
