import { Metadata } from 'next'
import { IniToXmlConverter } from '@/components/ini-to-xml-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ini-to-xml-converter`

const toolSchema = generateToolPageSchema(
  'INI To XML Converter',
  'Convert INI configuration files to well-formed XML instantly. Paste any INI file and get properly structured XML — free and browser-based.',
  PAGE_URL,
  'Utility',
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'INI To XML Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: 'INI To XML Converter' },
  description:
    'Free INI to XML converter. Paste any INI configuration file and instantly get well-formed XML. Choose root element name, indentation, encoding, and XML declaration — download or copy in one click.',
  keywords: [
    'ini to xml converter',
    'convert ini to xml',
    'ini to xml online',
    'ini file to xml',
    'ini to xml format',
    'ini xml converter',
    'configuration file converter',
  ],
  openGraph: {
    title: 'INI To XML Converter',
    description: 'Convert INI configuration files to well-formed XML instantly. Free, browser-based, with root element and indentation options.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'INI To XML Converter' }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: 'INI To XML Converter',
    description: 'Free INI to XML converter — paste any INI config file and get clean XML instantly.',
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: 'Paste your INI file into the left panel. The converter parses each [section] header into an XML parent element and converts every key = value pair beneath it into a child element with the key as the tag name and the value as its text content. You can customise the root element name (default: config), indentation style (2 spaces, 4 spaces, or tabs), XML encoding declaration, and whether to render values as child elements or XML attributes. Download the output as a .xml file or copy it to your clipboard.',
  features: [
    'Real-time INI → XML conversion as you type or paste',
    'Customisable root element name (config, settings, root, or any valid XML tag)',
    'Indentation options: 2 spaces, 4 spaces, or tab',
    'XML declaration toggle with encoding choice (UTF-8, UTF-16, ISO-8859-1)',
    'Keys-as-attributes mode: render INI values as XML attributes instead of child elements',
    'Automatic XML character escaping (&amp; &lt; &gt; &quot; &apos;)',
    'Skips INI comments (; and #) and blank lines silently',
    'Download output as .xml file',
    'Copy INI input or XML output to clipboard',
    'Sample INI with database / server / cache sections',
    'Fully private — converted entirely in your browser, nothing uploaded',
  ],
  whoIsItFor: [
    { title: 'Developers', description: 'Converting INI-based application configs into XML for use with frameworks and parsers that require XML configuration (Spring, .NET, Maven).' },
    { title: 'System Administrators', description: 'Reformatting legacy INI settings files into XML for modern deployment pipelines and configuration management tools.' },
    { title: 'DevOps Engineers', description: 'Translating simple INI environment files into XML format during infrastructure migrations and cross-platform CI/CD setup.' },
    { title: 'Students & Learners', description: 'Seeing how the flat INI structure maps to hierarchical XML to better understand configuration file formats.' },
  ],
}

export default function IniToXmlConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="ini-to-xml-converter">
        <ToolLayout
          toolId="ini-to-xml-converter"
          toolName="INI To XML Converter"
          toolDescription="The INI To XML Converter transforms INI configuration files into well-formed XML in real time. Each INI section becomes an XML element nested inside a configurable root, and each key = value pair becomes a child element. Choose your root name, indentation, encoding, and whether values render as child elements or XML attributes — then download .xml or copy in one click. No sign-up, no upload, completely free."
          toolComponent={<IniToXmlConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
