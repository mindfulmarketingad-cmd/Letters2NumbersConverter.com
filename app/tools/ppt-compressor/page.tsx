import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolLayout } from '@/components/tool-layout'
import { PPTCompressor } from '@/components/ppt-compressor'

export const metadata: Metadata = {
  title: 'PPT Compressor - Free Online PowerPoint File Compression',
  description: 'PPT Compressor compresses PowerPoint presentations instantly. Reduce .ppt and .pptx file sizes without losing quality. No upload required - processes entirely in your browser.',
  keywords: ['ppt compressor', 'compress pptx', 'powerpoint compressor', 'reduce ppt file size', 'compress presentation'],
  openGraph: {
    title: 'PPT Compressor | Compress PowerPoint Files Online',
    description: 'Compress your PowerPoint presentations instantly with our free online PPT compressor. Works with .ppt and .pptx files.',
    type: 'website',
  },
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
