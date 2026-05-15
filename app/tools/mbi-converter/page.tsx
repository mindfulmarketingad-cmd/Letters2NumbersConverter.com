import { Metadata } from "next"
import MBIConverter from "@/components/mbi-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/mbi-converter`

const toolSchema = generateToolPageSchema(
  "MBI Converter - Medicare Beneficiary Identifier to Telephone Keypad",
  "Free MBI converter tool to convert Medicare Beneficiary Identifier numbers and names to telephone keypad sequences. Perfect for IVR systems, customer support lines, and automated phone systems. Convert MBI digits and letters to numeric keypad codes instantly.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "MBI Converter - Medicare Beneficiary Identifier to Telephone Keypad", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "MBI Converter" },
  description: "Free MBI converter tool to convert Medicare Beneficiary Identifier numbers and names to telephone keypad sequences. Perfect for IVR systems, customer support lines, and automated phone systems. Convert MBI digits and letters to numeric keypad codes instantly.",
  keywords: [
    "MBI converter",
    "Medicare Beneficiary Identifier converter",
    "telephone keypad converter",
    "IVR phone numbers",
    "keypad number converter",
    "Medicare number keypad",
    "phone system conversion",
    "automated phone menu",
    "MBI to number converter",
    "Medicare phone codes",
    "keypad sequence generator"
  ],
  openGraph: {
    title: "MBI Converter - Convert Medicare Numbers to Telephone Keypad",
    description: "Convert Medicare Beneficiary Identifier and names to telephone keypad numbers for IVR and automated phone systems.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/mbi-converter",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "MBI Converter - Medicare Beneficiary Identifier to Telephone Keypad" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/mbi-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "MBI Converter - Medicare Beneficiary Identifier to Telephone Keypad", description: "Free MBI converter tool to convert Medicare Beneficiary Identifier numbers and names to telephone keypad sequences. Perfect for IVR systems, customer support lines, and automated phone systems. Conver", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = {
  howItWorks: "The MBI converter helps you translate Medicare Beneficiary Identifier numbers and beneficiary names into telephone keypad sequences for use with IVR (Interactive Voice Response) systems and automated customer support phone lines. Enter your Medicare number or beneficiary name (first letter + first 6 letters of last name) and the MBI converter instantly converts all letters to their corresponding telephone keypad numbers. This tool follows standard phone keypad mapping (2=ABC, 3=DEF, 4=GHI, 5=JKL, 6=MNO, 7=PQRS, 8=TUV, 9=WXYZ) to generate the correct numeric sequence for phone entry.",
  features: [
    "Convert Medicare Beneficiary Identifier to telephone keypad numbers",
    "Convert beneficiary names to keypad numeric sequences",
    "Real-time conversion as you type",
    "MBI to number converter with instant results",
    "Standard telephone keypad mapping (2-9 with letters)",
    "Support for both uppercase and lowercase input",
    "Copy results to clipboard with one click",
    "Telephone keypad reference chart included",
    "Works with IVR and automated phone systems",
    "Perfect for Medicare customer support applications",
    "No special characters or formatting required",
    "Works completely offline - no data transmission"
  ],
  whoIsItFor: [
    {
      title: "Medicare Customer Service Representatives",
      description: "Use the MBI converter to quickly convert Medicare numbers to telephone keypad sequences when processing IVR system entries and phone-based customer support calls."
    },
    {
      title: "Healthcare Call Centers & Patient Scheduling",
      description: "Convert patient Medicare Beneficiary Identifiers to keypad numbers for automated phone systems and IVR menu navigation with the MBI converter."
    },
    {
      title: "Medicare Beneficiaries & Seniors",
      description: "Understand what numbers to enter when prompted by automated phone systems by converting your Medicare number using the MBI converter."
    },
    {
      title: "Insurance & Benefits Processing Teams",
      description: "Streamline IVR navigation and phone system access with the MBI converter for efficient claims processing and verification."
    },
    {
      title: "Automated Phone System Developers",
      description: "Reference tool for creating and testing IVR systems that require Medicare Beneficiary Identifier entry via telephone keypad."
    },
    {
      title: "Medical Office Administrative Staff",
      description: "Convert Medicare information to telephone sequences when navigating automated pharmacy, insurance verification, and customer support phone systems using the MBI converter."
    }
  ]
}

export default function MBIConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="mbi-converter">
      <ToolLayout
        toolId="mbi-converter"
        toolName="MBI Converter"
        toolDescription="Free MBI converter tool for converting Medicare Beneficiary Identifier numbers and beneficiary names to telephone keypad sequences. Perfect for IVR systems, automated phone menus, and customer support applications. Convert MBI digits, letters, and names to numeric keypad codes for telephone entry."
        toolComponent={<MBIConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
