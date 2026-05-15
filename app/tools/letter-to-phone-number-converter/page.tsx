import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PhoneNumberConverter } from "@/components/phone-number-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/letter-to-phone-number-converter`

const toolSchema = generateToolPageSchema(
  "Letter to Phone Number Converter",
  "Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Decode phone-based text messages instantly.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Letter to Phone Number Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Letter to Phone Number Converter" },
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
        toolDescription="The Letter to Phone Number Converter maps letters to the corresponding digits on a standard telephone keypad using the classic T9 and alphanumeric encoding system — the same method used to create vanity phone numbers like 1-800-FLOWERS or 1-888-CALL-NOW. Simply type any word or phrase and instantly see which phone keypad numbers each letter corresponds to, making it effortless to decode or create memorable alphanumeric phone numbers. This tool is equally useful for reversing the process, helping you figure out what word a given number spells out on a keypad. Whether you are designing a marketing campaign or just satisfying curiosity about legacy phone systems, results appear instantly with no configuration needed."
        toolComponent={<PhoneNumberConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
