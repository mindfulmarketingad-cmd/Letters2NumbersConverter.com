import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PlayfairCipherSolver } from "@/components/playfair-cipher-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/playfair-cipher-solver`

const toolSchema = generateToolPageSchema(
  "Playfair Cipher Solver",
  "Playfair Cipher Solver - Encrypt and decrypt text using the classic Playfair digraph substitution cipher. Learn about this historic cipher invented by Charles Wheatstone and explore its mechanics with our free online tool.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Playfair Cipher Solver", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Playfair Cipher Solver",
  description: "Playfair Cipher Solver - Encrypt and decrypt text using the classic Playfair digraph substitution cipher. Learn about this historic cipher invented by Charles Wheatstone and explore its mechanics with our free online tool.",
  keywords: ["playfair cipher", "playfair cipher solver", "playfair encryption", "playfair decryption", "digraph cipher", "charles wheatstone"],
  openGraph: {
    title: "Playfair Cipher Solver",
    description: "Solve Playfair cipher puzzles with our free online encryption and decryption tool",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Playfair Cipher Solver" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Playfair Cipher Solver", description: "Playfair Cipher Solver - Encrypt and decrypt text using the classic Playfair digraph substitution cipher. Learn about this historic cipher invented by Charles Wheatstone and explore its mechanics with", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("playfair-cipher-solver")

export default function PlayfairCipherSolverPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="playfair-cipher-solver">
    <ToolLayout
      toolId="playfair-cipher"
      toolName="Playfair Cipher Solver"
      toolDescription="Encrypt and decrypt text using the classic Playfair digraph substitution cipher invented by Charles Wheatstone. This historic cipher uses a 5×5 key square to encrypt letter pairs, making it significantly more secure than simple substitution ciphers."
      toolComponent={<PlayfairCipherSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
