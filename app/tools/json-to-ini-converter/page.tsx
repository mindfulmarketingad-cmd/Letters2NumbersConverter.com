import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { JsonToIniConverter } from '@/components/json-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'

export const metadata: Metadata = {
  title: 'JSON to INI Converter | Letters2NumbersConverter.com',
  description:
    'Convert JSON to INI configuration format instantly. Perfect for developers converting JSON configs to INI format for applications.',
  keywords: [
    'json to ini converter',
    'json to ini',
    'configuration converter',
    'json converter',
    'ini format',
    'config conversion',
  ],
  openGraph: {
    title: 'JSON to INI Converter',
    description: 'Convert JSON configuration files to INI format instantly',
    type: 'website',
  },
}

const toolData: ToolData = getToolData('json-to-ini-converter')

export default function JsonToIniConverterPage() {
  return (
    <ToolPageWrapper toolSlug="json-to-ini-converter">
      <ToolLayout
        toolId="json-to-ini-converter"
        toolName="JSON to INI Converter"
        toolDescription="The JSON to INI Converter transforms JSON configuration files into INI format instantly. Perfect for developers and system administrators who need to convert between these popular configuration formats while maintaining proper structure and hierarchy."
        toolComponent={<JsonToIniConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
