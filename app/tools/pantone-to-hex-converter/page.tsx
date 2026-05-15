import { Metadata } from "next"
import { PantoneToHexConverter } from "@/components/pantone-to-hex-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: { absolute: "Pantone to Hex Converter" },
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
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'Pantone to Hex Converter | Letters2NumbersConverter.com' }],
    },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/pantone-to-hex-converter",
  },
}

export default function PantoneToHexConverterPage() {
  const toolData = getToolData('pantone-to-hex-converter')

  return (
    <ToolPageWrapper toolSlug="pantone-to-hex-converter">
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
      <ToolLayout
        toolId="pantone-to-hex-converter"
        toolName="Pantone to Hex Converter"
        toolDescription="The Pantone to Hex Converter bridges the gap between print design and digital color by translating Pantone Matching System (PMS) spot colors into their closest hex code equivalents for use in websites, apps, and digital media. Pantone colors are the gold standard for brand consistency in physical printing, but web designers need hex values to reproduce those brand colors accurately on screen, and this tool makes that translation instant and precise. The converter draws on a comprehensive Pantone library covering thousands of PMS codes, including Pantone C (coated), U (uncoated), and TCX (textile) variants, so you can confidently match nearly any Pantone color used in a brand style guide. Results also include RGB and CMYK breakdowns, giving you everything you need to maintain color accuracy across both digital and print workflows."
        toolComponent={<PantoneToHexConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
