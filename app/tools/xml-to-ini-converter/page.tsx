import { Metadata } from 'next'
import { XmlToIniConverter } from '@/components/xml-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/xml-to-ini-converter`

const toolSchema = generateToolPageSchema(
  'XML To INI Converter',
  'Convert XML configuration files to INI format instantly. Paste any XML and get a properly sectioned INI file — free and browser-based.',
  PAGE_URL,
  'Utility',
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'XML To INI Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: 'XML To INI Converter' },
  description:
    'Free XML to INI converter. Paste any XML configuration file and instantly get a properly sectioned INI file. Choose delimiter, nesting style, and attribute handling — download or copy in one click.',
  keywords: [
    'xml to ini converter',
    'convert xml to ini',
    'xml to ini online',
    'xml to ini file converter',
    'xml configuration to ini',
    'xml to ini format',
    'xml ini converter',
  ],
  openGraph: {
    title: 'XML To INI Converter',
    description: 'Convert XML configuration files to INI format instantly. Free, browser-based, with nesting and attribute options.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'XML To INI Converter' }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: 'XML To INI Converter',
    description: 'Free XML to INI converter — paste any XML config file and get a clean INI file instantly.',
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: 'Paste your XML into the left panel. The converter uses the browser\'s built-in XML parser to read the document, then maps the structure to INI format: top-level child elements become INI sections, and their child elements become key = value pairs. Deeper nesting is either flattened with dotted key names (parent.child = value) or kept under the nearest section — your choice. XML attributes can be included with a configurable prefix. Copy the result or download it as a .ini file.',
  features: [
    'Real-time XML → INI conversion as you type or paste',
    'Two nesting modes: top-level elements as sections, or full dotted-key flattening',
    'Optional XML attribute inclusion with configurable prefix (e.g. @id, @type)',
    'Delimiter choice: = or :',
    'Comment character choice: ; or #',
    'Whitespace trimming for clean values',
    'Inline XML validation with clear error messages',
    'Download converted file as .ini',
    'Copy XML input or INI output to clipboard',
    'Sample XML with database / server / cache sections',
    'Fully private — parsed entirely in your browser, nothing uploaded',
  ],
  whoIsItFor: [
    { title: 'Developers', description: 'Converting XML-based application configs (Spring, .NET, Maven) to INI format for tools and frameworks that require it.' },
    { title: 'System Administrators', description: 'Reformatting XML configuration exports from servers and services into the simpler INI format for legacy application deployment.' },
    { title: 'DevOps Engineers', description: 'Translating XML pipeline and environment configurations into INI files during CI/CD setup or cross-platform migrations.' },
    { title: 'Students & Learners', description: 'Understanding the structural differences between XML and INI by seeing a live, side-by-side conversion.' },
  ],
}

export default function XmlToIniConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="xml-to-ini-converter">
        <ToolLayout
          toolId="xml-to-ini-converter"
          toolName="XML To INI Converter"
          toolDescription="The XML To INI Converter transforms XML configuration files into properly sectioned INI files in real time. Top-level XML elements become INI sections, child elements become key = value pairs, and deeper nesting is handled via dotted keys or section grouping. Paste any XML, adjust delimiter and attribute options, then download or copy the INI output — no sign-up, no upload, completely free."
          toolComponent={<XmlToIniConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
