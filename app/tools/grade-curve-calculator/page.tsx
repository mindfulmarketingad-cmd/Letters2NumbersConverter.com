import { Metadata } from 'next'
import { GradeCurveCalculator } from '@/components/grade-curve-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/grade-curve-calculator`

const toolSchema = generateToolPageSchema(
  "Grade Curve Calculator | Free Online Tool",
  "Grade Curve Calculator - Adjust student grades using normal, linear, or percentile distribution methods. Perfect for teachers and educators to fairly curve grades.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Grade Curve Calculator | Free Online Tool", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Grade Curve Calculator" },
  description: 'Grade Curve Calculator - Adjust student grades using normal, linear, or percentile distribution methods. Perfect for teachers and educators to fairly curve grades.',
  keywords: ['grade curve calculator', 'grade curving tool', 'normal distribution grades', 'grade adjustment', 'curve grades online'],
  openGraph: {
    title: 'Grade Curve Calculator​ Online Free',
    description: 'Curve grades fairly using statistical distribution methods. Supports normal, linear, and percentile curving.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/grade-curve-calculator',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Grade Curve Calculator | Free Online Tool' }],
    images: [
      {
        url: '/images/grade-curve-calculator-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Grade Curve Calculator tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grade Curve Calculator​ Online Free',
    description: 'Adjust and curve student grades fairly with multiple distribution methods.',
    images: ['/images/grade-curve-calculator-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/grade-curve-calculator',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('grade-curve-calculator')

export default function GradeCurveCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="grade-curve-calculator">
      <ToolLayout
        toolId="grade-curve-calculator"
        toolName="Grade Curve Calculator"
        toolDescription="The Grade Curve Calculator is designed for educators and teachers to fairly adjust student grades using statistical distribution methods. Whether you need to apply a normal distribution (bell curve), linear adjustment, or percentile-based curving, this tool helps ensure fair and consistent grading practices while maintaining academic standards."
        toolComponent={<GradeCurveCalculator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
