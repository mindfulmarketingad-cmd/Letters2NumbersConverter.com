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
        toolDescription="The RGB to Pantone Color Converter finds the closest Pantone Matching System (PMS) color to any RGB value you provide, making it indispensable for designers who need to bridge the gap between screen colors and physical print production. Digital designs are defined in RGB or hex, but printers use Pantone spot colors to guarantee consistency across print runs, packaging, and branded materials — and this tool performs that critical translation automatically using a delta-E color matching algorithm to ensure perceptually accurate results. The converter searches across the full Pantone library, returning the nearest PMS match along with its hex, RGB, and CMYK equivalents so you have everything you need to hand off accurate color specs to print vendors. Whether you are matching a brand color, adapting a digital identity for print, or verifying Pantone equivalents during a rebrand, results appear instantly with multiple nearby Pantone alternatives displayed for comparison."
        toolComponent={<RGBToPantoneConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
