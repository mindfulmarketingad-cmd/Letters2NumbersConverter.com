import { Metadata } from 'next'
import { HalfBirthdayCalculator } from '@/components/half-birthday-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/half-birthday-calculator`

const toolSchema = generateToolPageSchema(
  "Half Birthday Calculator | Find Your Half Birthday Date",
  "Half Birthday Calculator - Instantly find out when your half birthday is. Celebrate twice a year with this free online calculator that determines your half birthday date.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Half Birthday Calculator | Find Your Half Birthday Date", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Half Birthday Calculator" },
  description: 'Half Birthday Calculator - Instantly find out when your half birthday is. Celebrate twice a year with this free online calculator that determines your half birthday date.',
  keywords: ['half birthday', 'half birthday calculator', 'half birthday date', 'when is my half birthday', 'celebrate half birthday'],
  openGraph: {
    title: 'Half Birthday Calculator | Letters2NumbersConverter.com',
    description: 'Find out when your half birthday is and celebrate twice a year with our free Half Birthday Calculator.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/half-birthday-calculator',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Half Birthday Calculator | Find Your Half Birthday Date' }],
    images: [
      {
        url: '/images/half-birthday-calculator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Half Birthday Calculator tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Half Birthday Calculator',
    description: 'Find out when your half birthday is instantly.',
    images: ['/images/half-birthday-calculator-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/half-birthday-calculator',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('half-birthday-calculator')

export default function HalfBirthdayCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="half-birthday-calculator">
      <ToolLayout
        toolId="half-birthday-calculator"
        toolName="Half Birthday Calculator"
        toolDescription="The Half Birthday Calculator is designed to instantly calculate when your half birthday falls – exactly 6 months from your birth date. Whether you want to celebrate twice a year, plan special occasions, or just have fun with milestone dates, this calculator provides the exact date of your half birthday and counts down the days until the celebration."
        toolComponent={<HalfBirthdayCalculator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
