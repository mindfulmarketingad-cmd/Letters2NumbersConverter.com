'use client'

import Link from 'next/link'
import { Users, Briefcase, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HomepageSearch } from '@/components/homepage-search'
import { ToolsInUseViewer } from '@/components/tools-in-use-viewer'
import { HomepageMorseSection } from '@/components/homepage-morse-section'
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
        <section className="py-12 md:py-[60px] border-b border-border/50">
          <ToolsInUseViewer />
        </section>

        {/* Featured Tool: Morse Code Translator */}
        <HomepageMorseSection />

        {/* Hackathon Feature Section */}
        <section className="py-12 md:py-16 border-b border-border/50 bg-gradient-to-br from-primary/5 via-background to-secondary/20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">New</span>
              <p className="text-sm font-medium text-primary uppercase tracking-wide">Hackathon</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                  Find Your Hackathon Team
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Building for a hackathon? Use our Hackathon board to find teammates with the skills your project needs, or post your project and accept applications from developers, designers, and builders who want to join.
                </p>
                <Link
                  href="/hackathon"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  Open Hackathon Board
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Find Teammates</h3>
                    <p className="text-sm text-muted-foreground">Browse hacker profiles by role and skills. Connect with developers, designers, and domain experts looking for their next build.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Post Your Project</h3>
                    <p className="text-sm text-muted-foreground">List your hackathon project, describe the skills you need, and accept or reject applications — all in one place.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
