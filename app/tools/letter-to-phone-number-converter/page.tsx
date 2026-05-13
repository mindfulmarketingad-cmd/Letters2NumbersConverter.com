import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PhoneNumberConverter } from "@/components/phone-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/letter-to-phone-number-converter`

const toolSchema = generateToolPageSchema(
  "Phone Number Converter - Letters to Numbers Converter",
  "Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Decode phone-based text messages instantly.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Phone Number Converter - Letters to Numbers Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Phone Number Converter - Letters to Numbers Converter",
  description: "Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Decode phone-based text messages instantly.",
  keywords: ["phone number converter", "letters to numbers", "T9 converter", "phone keypad", "text message decoder"],
  openGraph: {
    title: "Phone Number Converter",
    description: "Convert letters to phone number digits using T9 phone keypad mapping.",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Phone Number Converter - Letters to Numbers Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Phone Number Converter - Letters to Numbers Converter", description: "Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Decode phone-based text messages instantly.", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("letter-to-phone-number-converter")

export default function PhoneNumberConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="letter-to-phone-number-converter">
      <ToolLayout
        toolId="phone-number-converter"
        toolName="Phone Number Converter"
        toolDescription="Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Perfect for decoding phone-based text messages and understanding legacy phone systems."
        toolComponent={<PhoneNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
