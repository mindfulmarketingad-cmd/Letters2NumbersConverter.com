import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { YamlToXmlConverter } from '@/components/yaml-to-xml-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'

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
  },
}

const toolData: ToolData = getToolData('yaml-to-xml-converter')

export default function YamlToXmlConverterPage() {
  return (
    <ToolPageWrapper toolSlug="yaml-to-xml-converter">
      <ToolLayout
        toolId="yaml-to-xml-converter"
        toolName="YAML to XML Converter"
        toolDescription="The YAML to XML Converter transforms YAML configuration files into standardized XML format instantly. Perfect for system administrators, developers, and data engineers who need to work with multiple configuration formats."
        toolComponent={<YamlToXmlConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
