'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomepageLetterNumberSection } from '@/components/homepage-letter-number-section'
import { SeoPanel } from '@/components/seo-panel'

export function HomepageLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 flex flex-col">
        {/* Hero: Letters To Numbers Converter Tool */}
        <HomepageLetterNumberSection />

        {/* SEO Content Section */}
        <section className="flex-1 py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <SeoPanel />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
