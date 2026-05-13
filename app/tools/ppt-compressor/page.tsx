import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolLayout } from '@/components/tool-layout'
import { PPTCompressor } from '@/components/ppt-compressor'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ppt-compressor`

const toolSchema = generateToolPageSchema(
  "PPT Compressor - Free Online PowerPoint File Compression",
  "PPT Compressor compresses PowerPoint presentations instantly. Reduce .ppt and .pptx file sizes without losing quality. No upload required - processes entirely in your browser.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "PPT Compressor - Free Online PowerPoint File Compression", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'PPT Compressor - Free Online PowerPoint File Compression',
  description: 'PPT Compressor compresses PowerPoint presentations instantly. Reduce .ppt and .pptx file sizes without losing quality. No upload required - processes entirely in your browser.',
  keywords: ['ppt compressor', 'compress pptx', 'powerpoint compressor', 'reduce ppt file size', 'compress presentation'],
  openGraph: {
    title: 'PPT Compressor | Compress PowerPoint Files Online',
    description: 'Compress your PowerPoint presentations instantly with our free online PPT compressor. Works with .ppt and .pptx files.',
    type: 'website',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "PPT Compressor - Free Online PowerPoint File Compression" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "PPT Compressor - Free Online PowerPoint File Compression", description: "PPT Compressor compresses PowerPoint presentations instantly. Reduce .ppt and .pptx file sizes without losing quality. No upload required - processes entirely in your browser.", images: [`${BASE_URL}/og-image.png`] },
}

export default function PPTCompressorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <ToolLayout
          toolId="ppt-compressor"
          toolName="PPT Compressor"
          toolDescription="Compress PowerPoint presentations instantly without losing quality"
          toolComponent={<PPTCompressor />}
          toolData={{
            howItWorks: 'Upload your .ppt or .pptx file, compress using advanced algorithms, download your optimized presentation—all safely in your browser.',
            features: [
              'Supports both .ppt and .pptx formats',
              'No file size limit',
              'Real-time compression with size statistics',
              '100% privacy - browser-based processing',
              'No registration or installation required',
            ],
            whoIsItFor: [
              {
                title: 'Students & Teachers',
                description: 'Compress presentation files for email submission and online learning platforms with file size limits.',
              },
              {
                title: 'Business Professionals',
                description: 'Reduce file sizes for faster sharing, storage, and better email compatibility.',
              },
              {
                title: 'Content Creators',
                description: 'Optimize presentation files for web hosting and distribution without compromising quality.',
              },
              {
                title: 'Remote Teams',
                description: 'Speed up file transfers and collaboration with smaller, compressed presentation files.',
              },
            ],
          }}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
