import { Metadata } from "next"
import { PantoneToHexConverter } from "@/components/pantone-to-hex-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Pantone to Hex Converter | Letters2NumbersConverter.com",
  description: "Pantone to Hex Converter - Search and convert Pantone (PMS) colors to hex format instantly. Use our visual color picker to find the closest Pantone match for any color.",
  keywords: [
    "Pantone to hex converter",
    "PMS to hex",
    "Pantone color converter",
    "color converter tool",
    "hex color code",
    "Pantone search",
    "color format converter",
    "design color tool"
  ],
  openGraph: {
    title: "Pantone to Hex Converter",
    description: "Search Pantone colors and convert to hex format instantly with our free online tool.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/pantone-to-hex-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/pantone-to-hex-converter",
  },
}

export default function PantoneToHexConverterPage() {
  const toolData = getToolData('pantone-to-hex-converter')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Pantone to Hex Converter",
            "description": "Search and convert Pantone (PMS) colors to hex format instantly.",
            "url": "https://www.letters2numbersconverter.com/tools/pantone-to-hex-converter",
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
    <ToolPageWrapper toolSlug="pantone-to-hex-converter">
      <ToolLayout
        toolId="pantone-to-hex-converter"
        toolName="Pantone to Hex Converter"
        toolDescription="Pantone to Hex Converter - Search Pantone (PMS) colors and convert to hex format instantly. Use our visual color picker to find the closest Pantone match for any color, and display comprehensive color information in hex, RGB, and CMYK formats."
        toolComponent={<PantoneToHexConverter />}
        toolData={toolData}
      />
    </>
  </ToolPageWrapper>
  )
}
