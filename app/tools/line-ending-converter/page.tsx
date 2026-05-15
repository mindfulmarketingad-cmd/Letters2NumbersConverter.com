import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { LineEndingConverter } from "@/components/line-ending-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/line-ending-converter`

const toolSchema = generateToolPageSchema(
  "Line Ending Converter",
  "Line Ending Converter - Convert between different line ending formats (LF, CRLF, CR). Handle line break compatibility across Windows, Mac, and Unix systems for cross-platform text compatibility.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Line Ending Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Line Ending Converter" },
  description: "Line Ending Converter - Convert between different line ending formats (LF, CRLF, CR). Handle line break compatibility across Windows, Mac, and Unix systems for cross-platform text compatibility.",
  keywords: ["line ending converter", "CRLF", "LF", "CR", "line break converter", "newline converter"],
  openGraph: {
    title: "Line Ending Converter",
    description: "Convert between LF, CRLF, and CR line endings instantly.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Line Ending Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Line Ending Converter", description: "Line Ending Converter - Convert between different line ending formats (LF, CRLF, CR). Handle line break compatibility across Windows, Mac, and Unix systems for cross-platform text compatibility.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("line-ending-converter")

export default function LineEndingConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="line-ending-converter">
      <ToolLayout
        toolId="line-ending-converter"
        toolName="Line Ending Converter"
        toolDescription="The Line Ending Converter solves one of the most common cross-platform text compatibility headaches by letting you convert freely between Windows CRLF (carriage return + line feed), Unix and Linux LF (line feed only), and classic Mac CR (carriage return) line endings. Mismatched line endings are a frequent cause of broken scripts, garbled config files, and noisy diffs in version control, and this tool resolves those issues instantly by normalizing any text to the format you need. Paste your content, choose the target line ending style, and get clean output ready for any operating system or text editor. Batch processing of large text blocks is fully supported, making it practical for developers, sysadmins, and anyone managing cross-platform documents."
        toolComponent={<LineEndingConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
