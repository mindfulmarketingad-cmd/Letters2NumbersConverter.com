import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OggToWavConverter } from '@/components/ogg-to-wav-converter'

export const metadata: Metadata = {
  title: { absolute: 'Convert OGG to WAV' },
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
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'Convert OGG to WAV' }],
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
        <div className="w-full max-w-full mx-auto py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[calc(100vh-200px)]">
            {/* Left Column - Tool Interface */}
            <div className="border-r border-border overflow-y-auto">
              <div className="p-6 lg:p-8">
                <OggToWavConverter />
              </div>
            </div>

            {/* Right Column - Information */}
            <div className="overflow-y-auto">
              <div className="p-6 lg:p-8 space-y-8">
                {/* Header Section */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-primary text-sm font-bold">♫</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Audio Conversion Tools</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
                    Convert OGG to <span className="text-primary">WAV</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Instantly convert OGG audio files to WAV format with superior quality preservation. Our free online audio converter supports files up to 100 MB and works directly in your browser. Perfect for converting compressed audio to uncompressed WAV format without any quality loss, ideal for professional audio work, archiving, and compatibility with various audio applications.
                  </p>
                </div>

                {/* Who Is It For Section */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Who Is It For?</h2>
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">Audio Engineers & Producers</h3>
                      <p className="text-sm text-muted-foreground">
                        Convert OGG files to WAV for professional audio editing, mixing, and mastering workflows that require lossless audio formats.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">Music Creators & Artists</h3>
                      <p className="text-sm text-muted-foreground">
                        Convert compressed audio to WAV format for archiving original recordings and ensuring compatibility with DAWs and audio software.
                      </p>
                    </div>
                    <div className="border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                      <h3 className="font-semibold text-foreground mb-2">Podcast & Media Producers</h3>
                      <p className="text-sm text-muted-foreground">
                        Convert OGG podcasts and recordings to WAV for better compatibility with editing software and distribution platforms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* How It Works Section */}
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">How It Works</h2>
                  <ol className="space-y-3">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">1</span>
                      <div>
                        <p className="font-medium text-foreground">Upload OGG File</p>
                        <p className="text-sm text-muted-foreground">Click upload or drag your OGG audio file into the converter</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">2</span>
                      <div>
                        <p className="font-medium text-foreground">Instant Conversion</p>
                        <p className="text-sm text-muted-foreground">Our tool automatically converts your audio with quality preservation</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">3</span>
                      <div>
                        <p className="font-medium text-foreground">Download WAV</p>
                        <p className="text-sm text-muted-foreground">Save your converted WAV file to your device</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Full Width */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is OGG format?</h3>
                <p className="text-sm text-muted-foreground">OGG is a free, open-source audio codec and container format that provides good compression while maintaining reasonable audio quality.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is WAV format?</h3>
                <p className="text-sm text-muted-foreground">WAV is an uncompressed audio format that preserves original sound quality. It's widely supported and commonly used in professional audio production.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is the conversion free?</h3>
                <p className="text-sm text-muted-foreground">Yes, completely free! Our OGG to WAV converter has no hidden fees, limits, or subscriptions required.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Will I lose audio quality?</h3>
                <p className="text-sm text-muted-foreground">No quality loss occurs during conversion. WAV format preserves all audio data from your original OGG file.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What's the file size limit?</h3>
                <p className="text-sm text-muted-foreground">You can convert audio files up to 100 MB without any restrictions. Larger files may take slightly longer to process.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is an account required?</h3>
                <p className="text-sm text-muted-foreground">No account needed! Our converter is completely anonymous and requires no registration or login.</p>
              </div>
            </div>
          </div>
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
