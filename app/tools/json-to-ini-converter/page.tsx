import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { JsonToIniConverter } from '@/components/json-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/json-to-ini-converter`

const toolSchema = generateToolPageSchema(
  "JSON to INI Converter | Letters2NumbersConverter.com",
  "Convert JSON to INI configuration format instantly. Perfect for developers converting JSON configs to INI format for applications.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "JSON to INI Converter | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "JSON To INI Converter" },
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
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "JSON to INI Converter | Letters2NumbersConverter.com" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "JSON to INI Converter | Letters2NumbersConverter.com", description: "Convert JSON to INI configuration format instantly. Perfect for developers converting JSON configs to INI format for applications.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = getToolData('json-to-ini-converter')

export default function JsonToIniConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="json-to-ini-converter">
      <ToolLayout
        toolId="json-to-ini-converter"
        toolName="JSON to INI Converter"
        toolDescription="The JSON to INI Converter transforms JSON configuration files into INI format instantly. Perfect for developers and system administrators who need to convert between these popular configuration formats while maintaining proper structure and hierarchy."
        toolComponent={<JsonToIniConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
