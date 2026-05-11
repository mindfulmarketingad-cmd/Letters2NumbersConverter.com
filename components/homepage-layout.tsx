'use client'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomepageSearch } from '@/components/homepage-search'
import { ToolsInUseViewer } from '@/components/tools-in-use-viewer'
import { SeoPanel } from '@/components/seo-panel'

export function HomepageLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      {/* Main Layout - Single Column */}
      <main className="flex-1 flex flex-col">
        {/* Search Bar Section */}
        <section className="py-12 md:py-20 border-b border-border/50 bg-gradient-to-b from-background to-secondary/10">
          <HomepageSearch />
        </section>

        {/* Tools In Use Viewer Section */}
        <section className="py-12 md:py-16 border-b border-border/50">
          <ToolsInUseViewer />
        </section>

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

