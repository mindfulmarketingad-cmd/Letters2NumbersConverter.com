import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { CipherIdentifier } from "@/components/cipher-identifier"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/cipher-identifier`

const toolSchema = generateToolPageSchema(
  "Cipher Identifier Tool",
  "Identify and analyze cipher types from encrypted text",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Cipher Identifier Tool", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Cipher Identifier Tool",
  description: "Identify and analyze cipher types from encrypted text",
  keywords: [],
  openGraph: {
    title: "Cipher Identifier Tool",
    description: "Identify and analyze cipher types from encrypted text",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cipher Identifier Tool" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Cipher Identifier Tool", description: "Identify and analyze cipher types from encrypted text", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("cipher-identifier")

export default function CipherIdentifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="cipher-identifier">
    <ToolLayout
      toolId="cipher-identifier"
      toolName="Cipher Identifier Tool"
      toolDescription="Identify and analyze cipher types from encrypted text"
      toolComponent={<CipherIdentifier />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
