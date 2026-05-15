import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { YamlToJpgConverter } from '@/components/yaml-to-jpg-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/yaml-to-jpg-converter`

const toolSchema = generateToolPageSchema(
  "YAML to JPG Converter | Letters2NumbersConverter.com",
  "Convert YAML configuration files to beautifully formatted JPG images instantly. Visualize and share your YAML data as images.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "YAML to JPG Converter | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "YAML To JPG Converter" },
  description:
    'Convert YAML configuration files to beautifully formatted JPG images instantly. Visualize and share your YAML data as images.',
  keywords: [
    'yaml to jpg converter',
    'yaml to image',
    'yaml visualizer',
    'configuration converter',
    'data visualization',
  ],
  openGraph: {
    title: 'YAML to JPG Converter',
    description: 'Convert YAML configuration to JPG images for easy sharing and visualization',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "YAML to JPG Converter | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "YAML to JPG Converter | Letters2NumbersConverter.com", description: "Convert YAML configuration files to beautifully formatted JPG images instantly. Visualize and share your YAML data as images.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('yaml-to-jpg-converter')

export default function YamlToJpgConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="yaml-to-jpg-converter">
      <ToolLayout
        toolId="yaml-to-jpg-converter"
        toolName="YAML to JPG Converter"
        toolDescription="YAML to JPG Converter instantly transforms YAML configuration files into beautifully formatted JPG images. Perfect for sharing configurations, creating documentation, or converting data structures into visual format for presentations and reports."
        toolComponent={<YamlToJpgConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
