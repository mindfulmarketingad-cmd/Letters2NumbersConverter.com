import { Metadata } from "next"
import { IVRAlphanumericConverter } from "@/components/ivr-alphanumeric-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "IVR Alphanumeric Conversion Tool | Letters2NumbersConverter.com",
  description: "IVR Alphanumeric Conversion Tool - Convert Medicare Beneficiary IDs (MBI), PTAN, and DCN to telephone keypad sequences for IVR systems. Essential for healthcare administrators and patient care coordinators.",
  keywords: [
    "IVR alphanumeric conversion",
    "Medicare Beneficiary ID converter",
    "PTAN converter",
    "DCN converter",
    "IVR keypad sequence",
    "healthcare IVR tool",
    "telephone keypad converter",
    "MBI conversion"
  ],
  openGraph: {
    title: "IVR Alphanumeric Conversion Tool",
    description: "Convert Medicare IDs, PTAN, and DCN to IVR telephone keypad sequences quickly and accurately.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/ivr-alphanumeric-conversion-tool",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/ivr-alphanumeric-conversion-tool",
  },
}

export default function IVRAlphanumericPage() {
  const toolData = getToolData('ivr-alphanumeric-converter')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "IVR Alphanumeric Conversion Tool",
            "description": "Convert Medicare Beneficiary ID numbers (MBI), Provider Transaction Access Numbers (PTAN), and Document Control Numbers (DCN) into the telephone keypad button sequences required by IVR systems.",
            "url": "https://www.letters2numbersconverter.com/tools/ivr-alphanumeric-conversion-tool",
            "applicationCategory": "UtilityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Letters2Numbers Converter",
              "url": "https://www.letters2numbersconverter.com"
            }
          })
        }}
      />
    <ToolPageWrapper toolSlug="ivr-alphanumeric-conversion-tool">
      <ToolLayout
        toolId="ivr-alphanumeric-converter"
        toolName="IVR Alphanumeric Conversion Tool"
        toolDescription="IVR Alphanumeric Conversion Tool - Convert your patient's Medicare Beneficiary ID number (MBI), Provider Transaction Access Number (PTAN), or Document Control Number (DCN) into the telephone keypad button sequence required by IVR systems. This tool makes it easy to navigate healthcare automated systems without speaking to representatives."
        toolComponent={<IVRAlphanumericConverter />}
        toolData={toolData}
      />
    </>
  )
}
