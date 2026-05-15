import type { Metadata } from 'next'
import { ToolLayout } from '@/components/tool-layout'
import { WebMCompressor } from '@/components/webm-compressor'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/webm-compressor`

const toolSchema = generateToolPageSchema(
  "WEBM Compressor | Letters2NumbersConverter.com",
  "WEBM Compressor - Compress WebM video files online instantly. Reduce file size without losing quality. Browser-based, no upload, no signup required.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "WEBM Compressor | Letters2NumbersConverter.com", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "WEBM Compressor" },
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
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "WEBM Compressor | Letters2NumbersConverter.com" }],
  },
  alternates: {
    canonical: 'https://letters2numbersconverter.com/tools/webm-compressor',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "WEBM Compressor | Letters2NumbersConverter.com", description: "WEBM Compressor - Compress WebM video files online instantly. Reduce file size without losing quality. Browser-based, no upload, no signup required.", images: [`${BASE_URL}/og-image.png`] },
}

export default function WebMCompressorPage() {
  return (
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
  )
}
