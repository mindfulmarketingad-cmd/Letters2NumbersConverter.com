import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { TxtToIniConverter } from '@/components/txt-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'

export const metadata: Metadata = {
  title: 'TXT to INI Converter | Letters2NumbersConverter.com',
  description:
    'Convert plain text files to INI format instantly. Transform TXT content into properly formatted configuration files with sections and key-value pairs.',
  keywords: [
    'txt to ini converter',
    'text to ini',
    'ini file converter',
    'configuration file converter',
    'txt converter',
    'ini format',
  ],
  openGraph: {
    title: 'TXT to INI Converter',
    description: 'Convert plain text to INI configuration file format online',
    type: 'website',
  },
}

const toolData: ToolData = getToolData('txt-to-ini-converter')

export default function TxtToIniConverterPage() {
  return (
    <ToolPageWrapper toolSlug="txt-to-ini-converter">
      <ToolLayout
        toolId="txt-to-ini-converter"
        toolName="TXT to INI Converter"
        toolDescription="The TXT to INI Converter transforms plain text files into properly formatted INI configuration files. Automatically parse text content into sections, keys, and values with full INI format compliance. Perfect for creating configuration files from plain text documentation or data."
        toolComponent={<TxtToIniConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
