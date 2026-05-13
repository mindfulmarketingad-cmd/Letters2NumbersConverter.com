import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { TxtToIniConverter } from '@/components/txt-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/txt-to-ini-converter`

const toolSchema = generateToolPageSchema(
  "TXT to INI Converter | Letters2NumbersConverter.com",
  "Convert plain text files to INI format instantly. Transform TXT content into properly formatted configuration files with sections and key-value pairs.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "TXT to INI Converter | Letters2NumbersConverter.com", url: PAGE_URL },
])

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
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "TXT to INI Converter | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "TXT to INI Converter | Letters2NumbersConverter.com", description: "Convert plain text files to INI format instantly. Transform TXT content into properly formatted configuration files with sections and key-value pairs.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('txt-to-ini-converter')

export default function TxtToIniConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="txt-to-ini-converter">
      <ToolLayout
        toolId="txt-to-ini-converter"
        toolName="TXT to INI Converter"
        toolDescription="The TXT to INI Converter transforms plain text files into properly formatted INI configuration files. Automatically parse text content into sections, keys, and values with full INI format compliance. Perfect for creating configuration files from plain text documentation or data."
        toolComponent={<TxtToIniConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
