import type { Metadata } from 'next';
import { ToolLayout } from '@/components/tool-layout';
import MedicareIdConverter from '@/components/medicare-id-converter';
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/medicare-id-converter`

const toolSchema = generateToolPageSchema(
  "Medicare ID Converter - HIC vs MBI Identifier Tool",
  "Free online Medicare ID Converter to identify and validate Medicare numbers. Distinguish between HIC (old format) and MBI (new format) identifiers with detailed information.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Medicare ID Converter - HIC vs MBI Identifier Tool", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Medicare ID Converter" },
  description: 'Free online Medicare ID Converter to identify and validate Medicare numbers. Distinguish between HIC (old format) and MBI (new format) identifiers with detailed information.',
  keywords: [
    'Medicare ID converter',
    'HIC converter',
    'MBI converter',
    'Medicare number validator',
    'HIC to MBI',
    'Medicare identifier',
    'health insurance claim number',
    'Medicare beneficiary identifier'
  ],
  openGraph: {
    title: 'Medicare ID Converter',
    description: 'Convert and validate Medicare ID numbers - identify HIC vs MBI formats instantly',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/medicare-id-converter',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Medicare ID Converter - HIC vs MBI Identifier Tool" }],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/medicare-id-converter',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Medicare ID Converter - HIC vs MBI Identifier Tool", description: "Free online Medicare ID Converter to identify and validate Medicare numbers. Distinguish between HIC (old format) and MBI (new format) identifiers with detailed information.", images: [`${BASE_URL}/og-image.png`] },
};

const toolData = {
  howItWorks: 'Enter any Medicare ID number in the converter and it instantly identifies whether you have a HIC (old format - 12 digits) or MBI (new format - 11 characters). The Medicare ID converter validates the format, parses the components, and provides detailed information about your Medicare number type.',
  features: [
    'Validate Medicare HIC numbers (12-digit format)',
    'Validate Medicare MBI numbers (11-character format)',
    'Automatically identify ID format',
    'Parse and display ID components',
    'Copy ID to clipboard instantly',
    'Support for formatted and unformatted input',
    'Detailed format information',
    'Privacy and security information',
    'Real-time validation feedback'
  ],
  whoIsItFor: [
    {
      title: 'Medicare Beneficiaries',
      description: 'Quickly identify your Medicare number type and understand whether you have a legacy HIC or newer MBI number'
    },
    {
      title: 'Healthcare Providers',
      description: 'Verify patient Medicare ID formats to ensure proper billing and claims processing'
    },
    {
      title: 'Insurance Specialists',
      description: 'Convert and validate Medicare IDs to distinguish between HIC and MBI formats in patient records'
    },
    {
      title: 'Customer Service Representatives',
      description: 'Identify Medicare number types when processing patient calls and administrative requests'
    }
  ]
};

export default function MedicareIdConverterPage() {
  return (
    <ToolLayout
      toolName="Medicare ID Converter"
      toolDescription="Medicare ID converter tool to identify and validate Medicare numbers. Distinguish between HIC (Health Insurance Claim) and MBI (Medicare Beneficiary Identifier) formats instantly. Validate, parse, and understand your Medicare ID format with detailed information."
      toolData={toolData}
    >
      <MedicareIdConverter />
    </ToolLayout>
  );
}
