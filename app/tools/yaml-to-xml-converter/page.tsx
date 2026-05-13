import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { YamlToXmlConverter } from '@/components/yaml-to-xml-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/yaml-to-xml-converter`

const toolSchema = generateToolPageSchema(
  "YAML to XML Converter | Letters2NumbersConverter.com",
  "Convert YAML files to XML format instantly with our free online YAML to XML Converter. Supports nested structures, arrays, and special characters. No installation required.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "YAML to XML Converter | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'YAML to XML Converter | Letters2NumbersConverter.com',
  description:
    'Convert YAML files to XML format instantly with our free online YAML to XML Converter. Supports nested structures, arrays, and special characters. No installation required.',
  keywords: [
    'YAML to XML converter',
    'YAML converter',
    'XML converter',
    'file conversion',
    'configuration converter',
  ],
  openGraph: {
    title: 'YAML to XML Converter',
    description: 'Convert YAML to XML format online for free',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "YAML to XML Converter | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "YAML to XML Converter | Letters2NumbersConverter.com", description: "Convert YAML files to XML format instantly with our free online YAML to XML Converter. Supports nested structures, arrays, and special characters. No installation required.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('yaml-to-xml-converter')

export default function YamlToXmlConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="yaml-to-xml-converter">
      <ToolLayout
        toolId="yaml-to-xml-converter"
        toolName="YAML to XML Converter"
        toolDescription="The YAML to XML Converter transforms YAML configuration files into standardized XML format instantly. Perfect for system administrators, developers, and data engineers who need to work with multiple configuration formats."
        toolComponent={<YamlToXmlConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
