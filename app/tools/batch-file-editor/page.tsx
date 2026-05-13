import { Metadata } from "next"
import { BatchFileEditor } from "@/components/batch-file-editor"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Batch File Editor - Create & Edit .BAT Files Online",
  description: "Free online batch file editor for creating and editing .bat files. Write batch scripts with syntax highlighting, real-time statistics, and instant download. Perfect for Windows automation, system administration, and batch scripting.",
  keywords: [
    "batch file editor",
    "batch script editor",
    ".bat file editor",
    "Windows batch editor",
    "batch script creator",
    "batch file analyzer",
    "batch file writer",
    "online batch editor",
    "batch command editor",
    "batch file generator",
    "batch script tool",
    "Windows .bat editor"
  ],
  openGraph: {
    title: "Batch File Editor - Create & Edit Batch Scripts Online",
    description: "Free batch file editor with syntax highlighting, real-time statistics, and .bat file download. Create Windows batch scripts instantly for automation and system administration.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/batch-file-editor",
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'Batch File Editor - Create & Edit .BAT Files Online' }],
    },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/batch-file-editor",
  },
}

export default function BatchFileEditorPage() {
  const toolData = getToolData('batch-file-editor')

  return (
    <ToolPageWrapper toolSlug="batch-file-editor">
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
      <ToolLayout
        toolId="batch-file-editor"
        toolName="Batch File Editor"
        toolDescription="Free Batch File Editor for creating and editing .bat files online. Write batch scripts with real-time syntax highlighting, line numbering, and instant statistics. Download batch files directly or copy to clipboard. Perfect for Windows automation, batch scripting, system administration, and creating batch commands for scheduled tasks and deployment automation."
        toolComponent={<BatchFileEditor />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
