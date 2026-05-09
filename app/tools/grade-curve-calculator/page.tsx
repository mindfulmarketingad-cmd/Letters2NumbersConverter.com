import { Metadata } from 'next'
import { GradeCurveCalculator } from '@/components/grade-curve-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'Grade Curve Calculator | Free Online Tool',
  description: 'Grade Curve Calculator - Adjust student grades using normal, linear, or percentile distribution methods. Perfect for teachers and educators to fairly curve grades.',
  keywords: ['grade curve calculator', 'grade curving tool', 'normal distribution grades', 'grade adjustment', 'curve grades online'],
  openGraph: {
    title: 'Grade Curve Calculator​ Online Free',
    description: 'Curve grades fairly using statistical distribution methods. Supports normal, linear, and percentile curving.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/grade-curve-calculator',
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
}

const toolData: ToolData = getToolData('grade-curve-calculator')

export default function GradeCurveCalculatorPage() {
  return (
    <ToolPageWrapper toolSlug="grade-curve-calculator">
      <ToolLayout
        toolId="grade-curve-calculator"
        toolName="Grade Curve Calculator"
        toolDescription="The Grade Curve Calculator is designed for educators and teachers to fairly adjust student grades using statistical distribution methods. Whether you need to apply a normal distribution (bell curve), linear adjustment, or percentile-based curving, this tool helps ensure fair and consistent grading practices while maintaining academic standards."
        toolComponent={<GradeCurveCalculator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
