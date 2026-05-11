import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { YamlToJpgConverter } from '@/components/yaml-to-jpg-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'

export const metadata: Metadata = {
  title: 'YAML to JPG Converter | Letters2NumbersConverter.com',
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
  },
}

const toolData: ToolData = getToolData('yaml-to-jpg-converter')

export default function YamlToJpgConverterPage() {
  return (
    <ToolPageWrapper toolSlug="yaml-to-jpg-converter">
      <ToolLayout
        toolId="yaml-to-jpg-converter"
        toolName="YAML to JPG Converter"
        toolDescription="YAML to JPG Converter instantly transforms YAML configuration files into beautifully formatted JPG images. Perfect for sharing configurations, creating documentation, or converting data structures into visual format for presentations and reports."
        toolComponent={<YamlToJpgConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
