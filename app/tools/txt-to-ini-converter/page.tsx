import { Metadata } from 'next'
import { TxtToIniConverter } from '@/components/txt-to-ini-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/txt-to-ini-converter`

const toolSchema = generateToolPageSchema(
  "TXT To INI Converter",
  "Convert plain text files to INI configuration format instantly. Paste TXT content with key-value pairs and get a properly sectioned INI file — free and browser-based.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'TXT To INI Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: 'TXT To INI Converter' },
  description: 'Free TXT to INI converter that transforms plain text key-value files into properly sectioned INI configuration files. Choose delimiter, section names, and comment style — download or copy instantly.',
  keywords: [
    'txt to ini converter',
    'text to ini',
    'ini file converter',
    'convert txt to ini',
    'configuration file converter',
    'ini format converter',
    'key value to ini',
  ],
  openGraph: {
    title: 'TXT To INI Converter',
    description: 'Convert plain text key-value files to INI configuration format. Free, browser-based, and instant.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TXT To INI Converter' }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: 'TXT To INI Converter',
    description: 'Free TXT to INI converter — paste key-value text and get a properly formatted INI file instantly.',
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: 'Paste your plain text into the left panel and the converter instantly produces a valid INI file in the right panel. Use the options bar to choose your delimiter character (=, :, tab, or space), set the default section name, pick a comment character (; or #), and toggle extras like blank-line section splitting, whitespace trimming, and value quoting. Click Download .ini to save the result, or Copy to grab it for your clipboard.',
  features: [
    'Real-time TXT → INI conversion as you type',
    'Configurable delimiter: =, :, tab, or space',
    'Blank line = new section toggle for automatic grouping',
    'Custom default section name (e.g. General, Config, App)',
    'Comment character choice: ; or #',
    'Optional value quoting for strings with spaces',
    'Whitespace trimming for clean key-value pairs',
    'Download converted file as .ini',
    'Copy input or output to clipboard',
    'Sample TXT with realistic database / server / cache sections',
    'Fully private — no file is uploaded to any server',
  ],
  whoIsItFor: [
    { title: 'Developers', description: 'Converting plain key-value config files or environment dumps into structured INI files for use with parsers and frameworks.' },
    { title: 'System Administrators', description: 'Reformatting flat configuration exports into sectioned INI files for application deployment and server configuration.' },
    { title: 'DevOps Engineers', description: 'Transforming TXT-based config templates into INI format during CI/CD pipeline setup and environment provisioning.' },
    { title: 'Students & Learners', description: 'Understanding the INI file format by seeing a live conversion of familiar key-value text into proper sections and entries.' },
  ],
}

export default function TxtToIniConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="txt-to-ini-converter">
        <ToolLayout
          toolId="txt-to-ini-converter"
          toolName="TXT To INI Converter"
          toolDescription="The TXT To INI Converter transforms plain text key-value files into properly sectioned INI configuration files in real time. Paste any text with key=value pairs, choose your delimiter and section style, and get a clean INI file ready to download or copy — no software, no upload, completely free."
          toolComponent={<TxtToIniConverter />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
