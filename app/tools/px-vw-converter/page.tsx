import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PxVwConverter } from "@/components/px-vw-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "PX to VW Converter - Pixels to Viewport Width Calculator",
  description: "Free online PX to VW converter for converting pixels to viewport width units. Calculate responsive CSS units for fluid typography, responsive design, and mobile-first layouts. Support for multiple breakpoints and device sizes.",
  keywords: [
    "px to vw converter",
    "pixel to viewport width",
    "vw converter",
    "CSS units converter",
    "responsive design calculator",
    "fluid typography",
    "viewport width conversion",
    "CSS measurement converter",
    "pixel to vw",
    "vw units",
    "responsive css",
    "web design calculator",
    "mobile responsive units"
  ],
  openGraph: {
    title: "PX to VW Converter - Convert Pixels to Viewport Width",
    description: "Convert between pixels (px) and viewport width (vw) units instantly. Perfect for responsive web design, fluid typography, and CSS calculations.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/px-vw-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/px-vw-converter",
  },
}


const toolData: ToolData = getToolData("px-vw-converter")

export default function PxVwConverterPage() {
  return (
    <ToolPageWrapper toolSlug="px-vw-converter">
    <ToolLayout
      toolId="px-vw-converter"
      toolName="PX To VW Converter"
      toolDescription="Free PX to VW Converter tool for converting pixels to viewport width units and vice versa. Calculate responsive CSS measurements for fluid typography, mobile-first layouts, and scalable web design. Supports multiple breakpoints, device sizes, and viewport presets. Essential calculator for responsive design, CSS animations, and creating layouts that adapt seamlessly across all screen sizes."
      toolComponent={<PxVwConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
