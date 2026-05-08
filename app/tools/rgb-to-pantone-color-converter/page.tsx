import { Metadata } from "next"
import { RGBToPantoneConverter } from "@/components/rgb-to-pantone-converter"
import { ToolLayout } from "@/components/tool-layout"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "RGB To Pantone Color Converter | Letters2NumbersConverter.com",
  description: "Instant RGB To Pantone Color Converter - Easily convert your RGB color codes to Pantone (PMS) format with multiple matching variants. Enter RGB values and instantly find the closest Pantone color match for accurate print production.",
  keywords: [
    "RGB to Pantone converter",
    "RGB to PMS",
    "color converter",
    "Pantone color matching",
    "print color converter",
    "RGB to hex",
    "color conversion tool",
    "digital to print color"
  ],
  openGraph: {
    title: "RGB To Pantone Color Converter",
    description: "Convert RGB colors to Pantone (PMS) format instantly with visual color picker and multiple matching options.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/rgb-to-pantone-color-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/rgb-to-pantone-color-converter",
  },
}

export default function RGBToPantoneConverterPage() {
  const toolData = getToolData('rgb-to-pantone-converter')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "RGB To Pantone Color Converter",
            "description": "Convert RGB colors to Pantone (PMS) format instantly with visual color picker and alternative color suggestions.",
            "url": "https://www.letters2numbersconverter.com/tools/rgb-to-pantone-color-converter",
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
        toolId="rgb-to-pantone-converter"
        toolName="RGB To Pantone Color Converter"
        toolDescription="RGB To Pantone Color Converter - Our versatile RGB to Pantone converter seamlessly converts your RGB color codes to Pantone (PMS) color codes while providing multiple matching variants, including visual representations for every variant."
        toolComponent={<RGBToPantoneConverter />}
        toolData={toolData}
      />
    </>
  )
}
