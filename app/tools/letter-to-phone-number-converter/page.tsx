import { Metadata } from "next"
import { PhoneNumberConverter } from "@/components/phone-number-converter"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Phone Number Converter - Letters to Numbers Converter",
  description: "Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Decode phone-based text messages instantly.",
  keywords: ["phone number converter", "letters to numbers", "T9 converter", "phone keypad", "text message decoder"],
  openGraph: {
    title: "Phone Number Converter",
    description: "Convert letters to phone number digits using T9 phone keypad mapping.",
    type: "website",
  },
}

export default function PhoneNumberConverterPage() {
  return (
    <ToolLayout
      toolId="phone-number-converter"
      toolName="Phone Number Converter"
      toolDescription="Convert letters to phone number digits using T9/multi-tap phone keypad mapping. Perfect for decoding phone-based text messages and understanding legacy phone systems."
      toolComponent={<PhoneNumberConverter />}
    />
  )
}
