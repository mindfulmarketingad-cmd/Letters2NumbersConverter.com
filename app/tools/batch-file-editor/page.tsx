import { Metadata } from "next"
import { BatchFileEditor } from "@/components/batch-file-editor"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: { absolute: "Batch File Editor" },
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
        toolDescription="The Batch File Editor lets you create and edit multiple Windows .bat scripts simultaneously in your browser, with syntax highlighting, live line numbering, and real-time file statistics that keep your code clean and error-free. Development teams and system administrators can perform find-and-replace operations across entire batches of files at once, dramatically cutting down the time needed for large-scale refactoring or configuration updates. Content teams managing templated scripts or deployment pipelines benefit from the instant preview and one-click download, which removes the need for local editors or version control checkouts just to make a quick change. Every edit happens locally in your browser so no files are uploaded to external servers, keeping proprietary automation scripts completely private."
        toolComponent={<BatchFileEditor />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
