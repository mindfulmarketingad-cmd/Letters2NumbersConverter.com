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
  title: { absolute: "Playfair Cipher Solver" },
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
      toolDescription="The Playfair Cipher Solver lets you encode and decode messages using the Playfair digraph substitution cipher, one of the most historically significant manual encryption systems, widely used during World War I and World War II for field communications. Unlike simple letter-for-letter substitution ciphers, Playfair encrypts letters in pairs using a 5x5 key square constructed from a custom keyword, which dramatically increases resistance to basic frequency analysis attacks. You can supply any keyword to generate a unique cipher grid and then encrypt or decrypt arbitrary plaintext, with the tool automatically handling the standard Playfair rules for duplicate letters and end-of-message padding. This makes the Playfair Cipher Solver an ideal learning tool for students of cryptography history as well as a practical instrument for anyone solving cipher challenges or recreating historical encryption techniques."
      toolComponent={<PlayfairCipherSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
