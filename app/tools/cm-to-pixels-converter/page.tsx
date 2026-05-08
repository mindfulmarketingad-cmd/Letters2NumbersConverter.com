import { Metadata } from "next"
import { CMToPixelsConverter } from "@/components/cm-to-pixels-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "CM To Pixels Converter | Letters2NumbersConverter.com",
  description: "CM To Pixels Converter - Accurate centimeter to pixel conversion for web design, print media, and screen resolution calculations. Convert cm to px at any DPI/PPI.",
  keywords: [
    "cm to pixels converter",
    "centimeters to pixels",
    "cm to px",
    "pixel converter",
    "DPI converter",
    "print resolution calculator",
    "web design converter",
    "screen resolution converter"
  ],
  openGraph: {
    title: "CM To Pixels Converter",
    description: "Accurate cm to px conversion for web design, print media, and screen resolution calculations",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
  },
}

export default function CMToPixelsPage() {
  const toolData = getToolData('cm-to-pixels-converter')

  return (
    <ToolPageWrapper toolSlug="cm-to-pixels-converter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "CM To Pixels Converter",
            "description": "Accurate cm to px conversion for web design, print media, and screen resolution calculations. Supports multiple DPI/PPI standards.",
            "url": "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
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
        toolId="cm-to-pixels-converter"
        toolName="CM To Pixels Converter"
        toolDescription="CM To Pixels Converter - Accurate cm to px conversion for web design, print media, and screen resolution calculations. This tool provides instant conversions at multiple DPI/PPI standards (72 PPI for print, 96 PPI for standard web, 150 PPI for screens, and 300 PPI for high-resolution print)."
        toolComponent={<CMToPixelsConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
