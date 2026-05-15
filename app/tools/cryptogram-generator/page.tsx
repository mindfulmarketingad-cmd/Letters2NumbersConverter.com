import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import CryptogramGenerator from "@/components/cryptogram-generator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/cryptogram-generator`

const toolSchema = generateToolPageSchema(
  "Cryptogram Generator",
  "Create custom puzzle cryptograms using famous quotes or your own text. Share cryptograms with friends with adjustable difficulty levels.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Cryptogram Generator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Cryptogram Generator" },
  description: "Create custom puzzle cryptograms using famous quotes or your own text. Share cryptograms with friends with adjustable difficulty levels.",
  keywords: ["cryptogram generator", "cryptogram puzzle", "cryptogram maker", "cipher puzzle", "substitution cipher"],
  openGraph: {
    title: "Cryptogram Generator",
    description: "Create and share custom cryptogram puzzles instantly.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Cryptogram Generator | Create & Share Puzzle Cryptograms" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Cryptogram Generator | Create & Share Puzzle Cryptograms", description: "Create custom puzzle cryptograms using famous quotes or your own text. Share cryptograms with friends with adjustable difficulty levels.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("cryptogram-generator")

export default function CryptogramGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="cryptogram-generator">
    <ToolLayout
      toolId="cryptogram-generator"
      toolName="Cryptogram Generator"
      toolDescription="Create, customize, and share puzzle cryptograms with this interactive tool. Generate substitution cipher puzzles perfect for word games and entertainment."
      toolComponent={<CryptogramGenerator />}
      toolData={toolData}/>
    </ToolPageWrapper>
    </>
  )
}
