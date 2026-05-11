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
          title="WEBM Compressor"
          description="Compress WebM video files instantly with advanced quality controls. Reduce file size without quality loss - all processing happens in your browser."
          tool={<WebMCompressor />}
          content={
            <div className="space-y-8">
              {/* Who Is It For */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Who Is It For?</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Content Creators</h3>
                    <p className="text-muted-foreground">
                      Reduce video file sizes for faster uploads to YouTube, Vimeo, or other platforms while maintaining quality.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Web Developers</h3>
                    <p className="text-muted-foreground">
                      Optimize WebM videos for web pages and applications to improve page load times and user experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Storage & Backup</h3>
                    <p className="text-muted-foreground">
                      Save storage space on your computer, cloud services, or external drives with efficient compression.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Students & Educators</h3>
                    <p className="text-muted-foreground">
                      Easily compress educational videos and presentations for sharing via email or learning platforms.
                    </p>
                  </div>
                </div>
              </section>

              {/* How It Works */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Upload Your WebM File</h3>
                      <p className="text-muted-foreground">
                        Drag and drop your WebM video file or click to browse. There's no file size limit.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Choose Compression Settings</h3>
                      <p className="text-muted-foreground">
                        Select from quality-based, bitrate-based, or target size compression modes with auto-scaling options.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Start Compression</h3>
                      <p className="text-muted-foreground">
                        Click the compress button and watch real-time progress. The entire process happens in your browser.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Download Compressed Video</h3>
                      <p className="text-muted-foreground">
                        Your compressed WebM file is ready to download. No account or registration needed.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Multiple compression modes (Quality, Bitrate, Target Size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Advanced quality controls with auto-scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Real-time compression progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>No file size limits - compress any WebM video</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>100% browser-based processing - your files stay private</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>No account or registration required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Instant download of compressed files</span>
                  </li>
                </ul>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">How much will my file be compressed?</h3>
                    <p className="text-muted-foreground">
                      Compression depends on your settings. Quality-based compression typically reduces file size by 30-60% while maintaining visual quality. You can adjust settings to achieve your target size.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Will compression affect video quality?</h3>
                    <p className="text-muted-foreground">
                      Our compressor is optimized to maintain visual quality while reducing file size. Using higher quality settings (85-100%) provides minimal quality loss while still achieving good compression.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is there a file size limit?</h3>
                    <p className="text-muted-foreground">
                      No! There's no file size limit. You can compress WebM videos of any size entirely in your browser.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Is my video uploaded to a server?</h3>
                    <p className="text-muted-foreground">
                      No. All compression happens directly in your browser. Your video file is never sent to any server, ensuring complete privacy.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">What's the best compression mode?</h3>
                    <p className="text-muted-foreground">
                      It depends on your needs: Use Quality mode for maintaining video fidelity, Bitrate mode for consistent output quality, or Target Size mode to hit a specific file size.
                    </p>
                  </div>
                </div>
              </section>

              {/* Related Tools */}
              <section className="pt-8 border-t border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Related Tools</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="/tools/text-frequency-analysis"
                    className="p-4 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-foreground">Text Frequency Analysis</h3>
                    <p className="text-sm text-muted-foreground mt-1">Analyze character and word frequency in text</p>
                  </a>
                  <a
                    href="/tools/ppt-compressor"
                    className="p-4 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
                  >
                    <h3 className="font-semibold text-foreground">PPT Compressor</h3>
                    <p className="text-sm text-muted-foreground mt-1">Compress PowerPoint presentations</p>
                  </a>
                </div>
              </section>
            </div>
          }
        />
      </main>

      <SiteFooter />
    </div>
  )
}
