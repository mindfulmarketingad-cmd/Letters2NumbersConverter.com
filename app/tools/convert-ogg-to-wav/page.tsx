import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OggToWavConverter } from '@/components/ogg-to-wav-converter'

export const metadata: Metadata = {
  title: 'Convert OGG to WAV',
  description: 'Convert OGG audio files to WAV format instantly. Preserve original quality and convert files up to 100 MB for free with our browser-based tool.',
  keywords: [
    'convert OGG to WAV',
    'OGG to WAV converter',
    'audio converter',
    'OGG converter',
    'WAV converter',
    'free audio conversion',
    'online OGG converter',
    'audio file converter',
    'instant conversion',
    'preserve audio quality'
  ],
  authors: [{ name: 'Letters2NumbersConverter' }],
  openGraph: {
    title: 'Convert OGG to WAV - Free Online Audio Converter',
    description: 'Instantly convert OGG audio files to WAV format with superior quality preservation. Free, fast, and secure conversion up to 100 MB.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/convert-ogg-to-wav',
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/convert-ogg-to-wav',
  },
}

export default function ConvertOggToWav() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground transition-colors">Home</a>
            <span>/</span>
            <span className="text-foreground font-medium">Convert OGG to WAV</span>
          </div>

          <OggToWavConverter />
        </div>
      </main>

      <SiteFooter />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'Convert OGG to WAV',
          description: 'Free online OGG to WAV audio converter. Convert audio files instantly with quality preservation.',
          url: 'https://www.letters2numbersconverter.com/tools/convert-ogg-to-wav',
          applicationCategory: 'Multimedia',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          }
        })}
      </script>
    </div>
  )
}
