'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WorkArea } from '@/components/work-area'
import { SeoPanel } from '@/components/seo-panel'

export function HomepageLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      {/* Main Layout - Two Column */}
      <main className="flex-1 flex flex-col md:flex-row gap-0">
        {/* Left Column - Work Area (Sticky) */}
        <div className="w-full md:w-[45%] md:sticky md:top-0 md:h-screen flex flex-col bg-secondary/30 border-r border-border min-h-[50vh] shrink-0">
          <WorkArea />
        </div>

        {/* Right Column - SEO Content (Scrollable) */}
        <div className="w-full md:w-[55%] flex flex-col">
          <div className="flex-1">
            <div className="p-6 md:p-8 max-w-3xl">
              <SeoPanel />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
