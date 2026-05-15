import { Metadata } from "next"
import { RGBToPantoneConverter } from "@/components/rgb-to-pantone-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: { absolute: "RGB to Pantone Color Converter" },
  description: "Free RGB to Pantone Color Converter for converting RGB colors to PMS (Pantone Matching System) codes. Find the closest Pantone color match for digital-to-print workflows. Includes multiple color variants, visual color picker, and hex conversion.",
  keywords: [
    "RGB to Pantone converter",
    "RGB to PMS converter",
    "Pantone color converter",
    "RGB to Pantone matching",
    "color converter",
    "digital to print color",
    "Pantone color matching",
    "RGB to hex converter",
    "print color conversion",
    "PMS color finder",
    "color matching tool",
    "Pantone color codes",
    "RGB color conversion",
    "color picker tool"
  ],
  openGraph: {
    title: "RGB To Pantone Color Converter - Convert RGB to PMS Instantly",
    description: "Convert RGB colors to Pantone (PMS) format instantly with visual color picker and multiple matching variants for accurate print color reproduction.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/rgb-to-pantone-color-converter",
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'RGB To Pantone Color Converter - Convert RGB to PMS Colors' }],
    },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/rgb-to-pantone-color-converter",
  },
}

export default function RGBToPantoneConverterPage() {
  const toolData = getToolData('rgb-to-pantone-converter')

  return (
    <ToolPageWrapper toolSlug="rgb-to-pantone-color-converter">
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
        toolDescription="Free RGB to Pantone Color Converter for converting RGB and hex colors to PMS (Pantone Matching System) codes. Find the closest Pantone color matches for accurate digital-to-print workflows, branding consistency, and professional print production. Supports multiple color variants, visual color picker, and instant PMS matching for designers, printers, and marketing professionals."
        toolComponent={<RGBToPantoneConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
