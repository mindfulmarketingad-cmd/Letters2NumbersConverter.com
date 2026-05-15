import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { SkipCipherTool } from "@/components/skip-cipher"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/skip-cipher`

const toolSchema = generateToolPageSchema(
  "Skip Cipher",
  "Skip Cipher Online Tool - Encrypt and decrypt messages using the skip cipher (jump cipher) transposition cipher. Includes brute force cracking and parameter finder. Free online cryptography tool.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Skip Cipher", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Skip Cipher" },
  description: "Skip Cipher Online Tool - Encrypt and decrypt messages using the skip cipher (jump cipher) transposition cipher. Includes brute force cracking and parameter finder. Free online cryptography tool.",
  keywords: ["skip cipher", "jump cipher", "transposition cipher", "encryption", "decryption", "cryptography"],
  openGraph: {
    title: "Skip Cipher",
    description: "Encrypt and decrypt using the skip cipher (jump cipher) - a classic transposition cipher",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Skip Cipher - Jump Cipher Online Encrypt Decrypt" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Skip Cipher - Jump Cipher Online Encrypt Decrypt", description: "Skip Cipher Online Tool - Encrypt and decrypt messages using the skip cipher (jump cipher) transposition cipher. Includes brute force cracking and parameter finder. Free online cryptography tool.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("skip-cipher")

export default function SkipCipherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="skip-cipher">
    <ToolLayout
      toolId="skip-cipher"
      toolName="Skip Cipher"
      toolDescription="The Skip Cipher (Jump Cipher) is a transposition cipher that reorders letters by extracting every nth character. Use this online tool to encrypt, decrypt, and analyze skip cipher messages with advanced brute force capabilities."
      toolComponent={<SkipCipherTool />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
