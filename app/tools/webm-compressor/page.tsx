import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolLayout } from '@/components/tool-layout'
import { WebMCompressor } from '@/components/webm-compressor'

export const metadata: Metadata = {
  title: 'WEBM Compressor | Letters2NumbersConverter.com',
  description:
    'WEBM Compressor - Compress WebM video files online instantly. Reduce file size without losing quality. Browser-based, no upload, no signup required.',
  keywords: [
    'webm compressor',
    'compress webm',
    'webm video compressor',
    'reduce webm file size',
    'webm optimization',
    'video compression',
  ],
  openGraph: {
    title: 'WEBM Compressor - Reduce Video File Sizes',
    description: 'Compress WebM videos instantly with advanced quality controls and no file size limits.',
    type: 'website',
    url: 'https://letters2numbersconverter.com/tools/webm-compressor',
  },
  alternates: {
    canonical: 'https://letters2numbersconverter.com/tools/webm-compressor',
  },
}

export default function WebMCompressorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <ToolLayout
          toolId="webm-compressor"
          toolName="WEBM Compressor"
          toolDescription="Compress WebM video files instantly with advanced quality controls. Reduce file size without quality loss - all processing happens in your browser."
          toolComponent={<WebMCompressor />}
          toolData={{
            howItWorks: 'Upload your WebM video, select compression settings, and download the compressed file - all processing happens safely in your browser.',
            features: [
              'Multiple compression modes (Quality, Bitrate, Target Size)',
              'Advanced quality controls with auto-scaling',
              'Real-time compression progress tracking',
              'No file size limits - compress any WebM video',
              '100% browser-based processing - your files stay private',
              'No account or registration required',
              'Instant download of compressed files',
            ],
            whoIsItFor: [
              {
                title: 'Content Creators',
                description:
                  'Reduce video file sizes for faster uploads to YouTube, Vimeo, or other platforms while maintaining quality.',
              },
              {
                title: 'Web Developers',
                description:
                  'Optimize WebM videos for web pages and applications to improve page load times and user experience.',
              },
              {
                title: 'Storage & Backup',
                description:
                  'Save storage space on your computer, cloud services, or external drives with efficient compression.',
              },
              {
                title: 'Students & Educators',
                description:
                  'Easily compress educational videos and presentations for sharing via email or learning platforms.',
              },
            ],
          }}
        />
      </main>

      <SiteFooter />
    </div>
  )
}
