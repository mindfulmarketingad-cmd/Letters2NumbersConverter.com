import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { MonoalphabeticSubstitutionCipher } from "@/components/monoalphabetic-substitution-cipher"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/monoalphabetic-substitution-cipher`

const toolSchema = generateToolPageSchema(
  "Monoalphabetic Substitution Cipher",
  "Encrypt and decrypt using monoalphabetic ciphers",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Monoalphabetic Substitution Cipher", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Monoalphabetic Substitution Cipher" },
  description: "Encrypt and decrypt using monoalphabetic ciphers",
  keywords: [],
  openGraph: {
    title: "Monoalphabetic Substitution Cipher",
    description: "Encrypt and decrypt using monoalphabetic ciphers",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Monoalphabetic Substitution Cipher" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Monoalphabetic Substitution Cipher", description: "Encrypt and decrypt using monoalphabetic ciphers", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("monoalphabetic-substitution-cipher")

export default function MonoalphabeticSubstitutionCipherPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="monoalphabetic-substitution-cipher">
    <ToolLayout
      toolId="monoalphabetic-substitution-cipher"
      toolName="Monoalphabetic Substitution Cipher"
      toolDescription="Encrypt and decrypt using monoalphabetic ciphers"
      toolComponent={<MonoalphabeticSubstitutionCipher />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
