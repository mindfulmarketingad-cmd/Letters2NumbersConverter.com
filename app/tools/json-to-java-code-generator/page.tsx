import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { JsonToJavaGenerator } from "@/components/json-to-java-generator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/json-to-java-code-generator`

const toolSchema = generateToolPageSchema(
  "JSON to Java Code Generator",
  "Generate Java code from JSON structure",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "JSON to Java Code Generator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "JSON to Java Code Generator",
  description: "Generate Java code from JSON structure",
  keywords: [],
  openGraph: {
    title: "JSON to Java Code Generator",
    description: "Generate Java code from JSON structure",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "JSON to Java Code Generator" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "JSON to Java Code Generator", description: "Generate Java code from JSON structure", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("json-to-java-code-generator")

export default function JsonToJavaGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="json-to-java-code-generator">
    <ToolLayout
      toolId="json-to-java-code-generator"
      toolName="JSON to Java Code Generator"
      toolDescription="Generate Java code from JSON structure"
      toolComponent={<JsonToJavaGenerator />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
