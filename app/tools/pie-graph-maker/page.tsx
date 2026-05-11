import type { Metadata } from 'next'
import { ToolLayout } from '@/components/tool-layout'
import { PieGraphMaker } from '@/components/pie-graph-maker'

export const metadata: Metadata = {
  title: 'Pie Graph Maker | Free Online Pie Chart Creator',
  description:
    'Pie Graph Maker - Create beautiful, interactive pie charts online instantly. Customize colors, labels, and styles. No signup needed. Download as PNG or embed on your website.',
  keywords: [
    'pie graph maker',
    'pie chart creator',
    'online pie chart',
    'free pie graph',
    'chart maker',
    'data visualization',
    'pie diagram maker',
  ],
  openGraph: {
    title: 'Pie Graph Maker - Create Beautiful Pie Charts Online',
    description: 'Create, customize, and download professional pie charts instantly with our free online pie graph maker.',
    type: 'website',
    url: 'https://letters2numbersconverter.com/tools/pie-graph-maker',
  },
  alternates: {
    canonical: 'https://letters2numbersconverter.com/tools/pie-graph-maker',
  },
}

export default function PieGraphMakerPage() {
  return (
    <ToolLayout
      toolId="pie-graph-maker"
      toolName="Pie Graph Maker"
      toolDescription="Pie Graph Maker allows you to create beautiful, interactive pie charts online instantly. Customize colors, labels, background, and more."
      toolComponent={<PieGraphMaker />}
      toolData={{
        howItWorks:
          'Enter your data in the Data tab, customize colors and appearance in the Design tab, edit labels in the Labels tab, and preview/download your chart in the Display tab.',
        features: [
          'Create professional pie charts with intuitive 4-tab interface',
          'Customize chart type (2D Normal or 3D perspective)',
          'Adjust colors (plain or gradient) for each data segment',
          'Edit labels and values in real-time',
          'Choose background and border colors',
          'Preview charts instantly as you edit',
          'Download charts as high-quality PNG files',
          'No signup or login required',
          'Browser-based - all processing is done locally',
          'Perfect for presentations, reports, and websites',
        ],
        whoIsItFor: [
          {
            title: 'Business Professionals',
            description:
              'Create compelling pie charts for presentations, reports, and data analysis. Impress stakeholders with visually appealing data visualizations.',
          },
          {
            title: 'Students & Educators',
            description:
              'Generate pie charts for school projects, assignments, and educational materials. Make statistics and data analysis more engaging and understandable.',
          },
          {
            title: 'Data Analysts & Scientists',
            description:
              'Quickly visualize data distributions, market segments, and survey results. Perfect for exploratory data analysis and reporting.',
          },
          {
            title: 'Content Creators & Bloggers',
            description:
              'Embed custom pie charts in articles, blog posts, and infographics. Enhance content with professional data visualizations without coding.',
          },
          {
            title: 'Marketers & Sales Teams',
            description:
              'Visualize market share, customer segments, and sales breakdowns. Create compelling charts for presentations and marketing materials.',
          },
        ],
      }}
    />
  )
}
