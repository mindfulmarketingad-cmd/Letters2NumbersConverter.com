import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { AtbashCipherSolver } from "@/components/atbash-cipher-solver"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/atbash-cipher-decoder`

const toolSchema = generateToolPageSchema(
  "Atbash Cipher Decoder",
  "Atbash Cipher Decoder - Encrypt and decrypt messages using the mirror alphabet substitution cipher. An involutory cipher where the same process works for both encryption and decryption.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Atbash Cipher Decoder", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Atbash Cipher Decoder" },
  description: "Atbash Cipher Decoder - Encrypt and decrypt messages using the mirror alphabet substitution cipher. An involutory cipher where the same process works for both encryption and decryption.",
  keywords: ["Atbash cipher decoder", "Atbash cipher", "substitution cipher", "mirror cipher", "reverse alphabet"],
  openGraph: {
    title: "Atbash Cipher Decoder",
    description: "Decrypt and encrypt Atbash cipher messages with our free online tool",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Atbash Cipher Decoder" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Atbash Cipher Decoder", description: "Atbash Cipher Decoder - Encrypt and decrypt messages using the mirror alphabet substitution cipher. An involutory cipher where the same process works for both encryption and decryption.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("atbash-cipher-decoder")

export default function AtbashCipherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="atbash-cipher-decoder">
    <ToolLayout
      toolId="atbash-cipher"
      toolName="Atbash Cipher Decoder"
      toolDescription="Encrypt and decrypt messages using the ancient mirror alphabet substitution cipher. An involutory system where the same process works for both encryption and decryption. Perfect for cryptography enthusiasts and puzzle solvers."
      toolComponent={<AtbashCipherSolver />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
