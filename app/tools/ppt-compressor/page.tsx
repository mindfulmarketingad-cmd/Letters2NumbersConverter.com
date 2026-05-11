import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolLayout } from '@/components/tool-layout'
import { PPTCompressor } from '@/components/ppt-compressor'
import Link from 'next/link'

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
          title="PPT Compressor"
          description="Compress PowerPoint presentations instantly without losing quality"
          component={<PPTCompressor />}
          rightContent={
            <div className="space-y-8">
              {/* Who is it for */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Who Is It For?</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Students & Teachers:</strong> Compress presentation files for email submission and online learning platforms with file size limits.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Business Professionals:</strong> Reduce file sizes for faster sharing, storage, and better email compatibility.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Content Creators:</strong> Optimize presentation files for web hosting and distribution without compromising quality.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Remote Teams:</strong> Speed up file transfers and collaboration with smaller, compressed presentation files.</span>
                  </li>
                </ul>
              </section>

              {/* How it works */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <ol className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">1.</span>
                    <span><strong>Upload Your File:</strong> Drag and drop your .ppt or .pptx file into the uploader, or click to browse.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">2.</span>
                    <span><strong>Compress:</strong> Our tool uses advanced compression algorithms to reduce file size while maintaining presentation integrity.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">3.</span>
                    <span><strong>Download:</strong> Instantly download your compressed presentation file ready to use.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">4.</span>
                    <span><strong>100% Secure:</strong> Files are processed entirely in your browser—nothing is uploaded to our servers.</span>
                  </li>
                </ol>
              </section>

              {/* Features */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Supports both .ppt and .pptx formats
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> No file size limit
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> Real-time compression with size statistics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> 100% privacy - browser-based processing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span> No registration or installation required
                  </li>
                </ul>
              </section>

              {/* Related tools */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Related Tools</h2>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Check out our other free tools:</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">
                        Text Frequency Analysis - Analyze character and word frequency in text
                      </Link>
                    </li>
                    <li>
                      <Link href="/tools" className="text-primary hover:underline">
                        View all free tools →
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">FAQ</h2>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Is my data safe?</h3>
                    <p>Yes! All compression happens in your browser. Your files never leave your device.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Will compression reduce quality?</h3>
                    <p>Our compression preserves presentation quality while optimizing file size. Most users notice no quality difference.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">What file formats are supported?</h3>
                    <p>We support both .ppt (PowerPoint 97-2003) and .pptx (PowerPoint 2007 and later) formats.</p>
                  </div>
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
