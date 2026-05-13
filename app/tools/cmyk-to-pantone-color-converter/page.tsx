import { Metadata } from "next"
import { CMYKToPantoneConverter } from "@/components/cmyk-to-pantone-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "CMYK to Pantone Color Converter | Letters2NumbersConverter.com",
  description: "Easily convert your CMYK to Pantone (PMS) color format with our CMYK to Pantone Converter. Enter the CMYK color values below and instantly find the closest Pantone color match for accurate print production.",
  keywords: [
    "CMYK to Pantone converter",
    "CMYK to PMS",
    "color converter",
    "Pantone color matching",
    "print color converter",
    "CMYK to hex",
    "color conversion tool",
    "print design tool"
  ],
  openGraph: {
    title: "CMYK to Pantone Color Converter",
    description: "Convert CMYK colors to Pantone (PMS) format instantly for accurate print production and color matching.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/cmyk-to-pantone-color-converter",
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'CMYK to Pantone Color Converter | Letters2NumbersConverter.com' }],
    },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/cmyk-to-pantone-color-converter",
  },
}

export default function CMYKToPantoneConverterPage() {
  const toolData = getToolData('cmyk-to-pantone-color-converter')

  return (
    <ToolPageWrapper toolSlug="cmyk-to-pantone-color-converter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CMYK to Pantone Color Converter",
            "description": "Convert CMYK colors to Pantone (PMS) format instantly for accurate print production and color matching.",
            "url": "https://www.letters2numbersconverter.com/tools/cmyk-to-pantone-color-converter",
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
      <ToolLayout
        toolId="cmyk-to-pantone-converter"
        toolName="CMYK to Pantone Color Converter"
        toolDescription="CMYK to Pantone Color Converter - Easily convert your CMYK to Pantone (PMS) color format with our free online converter. Enter the CMYK color values below and instantly find the closest Pantone color match for accurate print production, branding, and color standardization."
        toolComponent={<CMYKToPantoneConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
