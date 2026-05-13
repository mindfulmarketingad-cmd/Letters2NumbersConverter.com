import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EscapeRoomBuilder } from "@/components/escape-room-builder"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/escape-room-builder`

const toolSchema = generateToolPageSchema(
  "Escape Room Builder",
  "Create and design interactive escape room puzzles",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Escape Room Builder", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Escape Room Builder",
  description: "Create and design interactive escape room puzzles",
  keywords: [],
  openGraph: {
    title: "Escape Room Builder",
    description: "Create and design interactive escape room puzzles",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Escape Room Builder" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Escape Room Builder", description: "Create and design interactive escape room puzzles", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("escape-room-builder")

export default function EscapeRoomBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="escape-room-builder">
    <ToolLayout
      toolId="escape-room-builder"
      toolName="Escape Room Builder"
      toolDescription="Create and design interactive escape room puzzles"
      toolComponent={<EscapeRoomBuilder />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
