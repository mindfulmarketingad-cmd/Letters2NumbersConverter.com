import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PxVwConverter } from "@/components/px-vw-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/px-vw-converter`

const toolSchema = generateToolPageSchema(
  "PX to VW Converter",
  "Free online PX to VW converter for converting pixels to viewport width units. Calculate responsive CSS units for fluid typography, responsive design, and mobile-first layouts. Support for multiple breakpoints and device sizes.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "PX to VW Converter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "PX to VW Converter" },
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
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "PX to VW Converter - Pixels to Viewport Width Calculator" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/px-vw-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "PX to VW Converter - Pixels to Viewport Width Calculator", description: "Free online PX to VW converter for converting pixels to viewport width units. Calculate responsive CSS units for fluid typography, responsive design, and mobile-first layouts. Support for multiple bre", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("px-vw-converter")

export default function PxVwConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="px-vw-converter">
    <ToolLayout
      toolId="px-vw-converter"
      toolName="PX To VW Converter"
      toolDescription="The PX to VW Converter helps web developers and designers translate fixed pixel values into responsive viewport width (vw) units, the CSS measurement that scales proportionally to the width of the browser window on any device. Converting px to vw is essential for building fluid layouts and responsive typography that automatically adapts from mobile phones to wide desktop monitors without requiring multiple breakpoints or media query overrides. The tool lets you set a custom viewport width base — defaulting to 1440px for desktop or 375px for mobile — so the conversion accurately reflects your design system's reference frame. Results update in real time as you type, making it fast to iterate through spacing, font sizes, and layout dimensions during responsive CSS development."
      toolComponent={<PxVwConverter />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
