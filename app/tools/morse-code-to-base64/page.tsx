import { Metadata } from "next"
import { MorseToBase64Converter } from "@/components/morse-to-base64-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Morse Code to Base64 Converter | Letters2NumbersConverter.com",
  description: "Morse Code to Base64 Converter - Decode Morse code and instantly convert to Base64 format. Perfect for amateur radio operators, historians, and cryptography enthusiasts. Support for customizable separators.",
  keywords: [
    "morse code to base64",
    "morse code converter",
    "morse code decoder",
    "base64 encoder",
    "morse code base64",
    "amateur radio",
    "morse code translation",
    "morse decoder"
  ],
  openGraph: {
    title: "Morse Code to Base64 Converter",
    description: "Decode Morse code and convert to Base64 format instantly.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/morse-code-to-base64",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/morse-code-to-base64",
  },
}

export default function MorseToBase64ConverterPage() {
  const toolData = getToolData('morse-to-base64-converter')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Morse Code to Base64 Converter",
            "description": "Decode Morse code and convert to Base64 format instantly.",
            "url": "https://www.letters2numbersconverter.com/tools/morse-code-to-base64",
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
    <ToolPageWrapper toolSlug="morse-code-to-base64">
      <ToolLayout
        toolId="morse-to-base64-converter"
        toolName="Morse Code to Base64 Converter"
        toolDescription="Morse Code to Base64 Converter - Translate Morse code signals to Base64 encoded text. Enter Morse code using customizable separators and the tool instantly decodes it and converts to Base64 format. Ideal for amateur radio operators, historians, data analysts, and cryptography learners."
        toolComponent={<MorseToBase64Converter />}
        toolData={toolData}
      />
    </>
  </ToolPageWrapper>
  )
}
