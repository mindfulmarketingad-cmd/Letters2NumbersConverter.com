import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PxVwConverter } from "@/components/px-vw-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "PX To VW Converter",
  description: "Convert between pixels (px) and viewport width (vw) units instantly. Essential tool for responsive web design and CSS calculations.",
  keywords: ["px to vw converter", "pixel to viewport", "CSS units", "responsive design", "vw converter"],
  openGraph: {
    title: "PX To VW Converter",
    description: "Convert between pixels and viewport width units for responsive web design.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("px-vw-converter")

export default function PxVwConverterPage() {
  return (
    <ToolPageWrapper toolSlug="px-vw-converter">
    <ToolLayout
      toolId="px-vw-converter"
      toolName="PX To VW Converter"
      toolDescription="Convert between pixels (px) and viewport width (vw) units instantly. Essential tool for responsive web design, CSS calculations, and creating fluid layouts."
      toolComponent={<PxVwConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
