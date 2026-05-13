import { Metadata } from 'next'
import { MEqToMgCalculator } from '@/components/meq-to-mg-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/meq-to-mg-calculator`

const toolSchema = generateToolPageSchema(
  "mEq to mg Calculator | Convert Milliequivalents to Milligrams",
  "mEq to mg Calculator - Instantly convert milliequivalents (mEq) to milligrams (mg) for ions. Perfect for medical professionals, pharmacists, and healthcare providers. Free online tool with accurate calculations.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "mEq to mg Calculator | Convert Milliequivalents to Milligrams", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'mEq to mg Calculator | Convert Milliequivalents to Milligrams',
  description: 'mEq to mg Calculator - Instantly convert milliequivalents (mEq) to milligrams (mg) for ions. Perfect for medical professionals, pharmacists, and healthcare providers. Free online tool with accurate calculations.',
  keywords: ['mEq to mg', 'milliequivalents to milligrams', 'mEq calculator', 'mg calculator', 'ion conversion', 'electrolyte calculator', 'pharmaceutical calculator'],
  openGraph: {
    title: 'mEq to mg Calculator | Letters2NumbersConverter.com',
    description: 'Convert milliequivalents to milligrams for pharmaceutical and medical calculations instantly.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/meq-to-mg-calculator',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'mEq to mg Calculator | Convert Milliequivalents to Milligrams' }],
    images: [
      {
        url: '/images/meq-to-mg-calculator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'mEq to mg Calculator tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mEq to mg Calculator',
    description: 'Convert mEq to mg for medical and pharmaceutical calculations.',
    images: ['/images/meq-to-mg-calculator-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/meq-to-mg-calculator',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('meq-to-mg-calculator')

export default function MEqToMgCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="meq-to-mg-calculator">
      <ToolLayout
        toolId="meq-to-mg-calculator"
        toolName="mEq to mg Calculator"
        toolDescription="The mEq to mg Calculator is an essential tool for healthcare professionals, pharmacists, chemists, and medical students. This calculator converts between milliequivalents (mEq) and milligrams (mg) for various ions, making it perfect for electrolyte calculations, pharmaceutical dosing, and medical research. With support for common ions like sodium, potassium, calcium, and magnesium, this tool ensures accurate conversions based on atomic weights and valence numbers from authoritative scientific sources."
        toolComponent={<MEqToMgCalculator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
