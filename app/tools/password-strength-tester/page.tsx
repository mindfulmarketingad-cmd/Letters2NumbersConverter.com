import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PasswordStrengthTester } from "@/components/password-strength-tester"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/password-strength-tester`

const toolSchema = generateToolPageSchema(
  "Password Strength Tester",
  "Test and analyze password security",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Password Strength Tester", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Password Strength Tester",
  description: "Test and analyze password security",
  keywords: [],
  openGraph: {
    title: "Password Strength Tester",
    description: "Test and analyze password security",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Password Strength Tester" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Password Strength Tester", description: "Test and analyze password security", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("password-strength-tester")

export default function PasswordStrengthTesterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="password-strength-tester">
    <ToolLayout
      toolId="password-strength-tester"
      toolName="Password Strength Tester"
      toolDescription="Test and analyze password security"
      toolComponent={<PasswordStrengthTester />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
