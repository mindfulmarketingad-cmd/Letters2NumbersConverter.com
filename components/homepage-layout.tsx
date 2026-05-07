'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WorkArea } from '@/components/work-area'
import { SeoPanel } from '@/components/seo-panel'
import { ToolSelector } from '@/components/tool-selector'

export function HomepageLayout() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [selectorOpen, setSelectorOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      {/* Main Layout */}
      <main className="flex-1 flex flex-col md:flex-row gap-0">
        {/* Left Column - Work Area */}
        <div className="w-full md:w-[45%] flex flex-col bg-secondary/30 border-r border-border">
          <WorkArea toolId={selectedTool} onOpenSelector={() => setSelectorOpen(true)} />
        </div>

        {/* Right Column - SEO Content */}
        <div className="w-full md:w-[55%] overflow-y-auto p-6 md:p-8">
          <div className="max-w-3xl">
            <SeoPanel />
          </div>
        </div>
      </main>

      {/* Tool Selector Modal */}
      <ToolSelector
        isOpen={selectorOpen}
        onClose={() => setSelectorOpen(false)}
        onSelect={(toolId) => {
          setSelectedTool(toolId)
        }}
      />

      <SiteFooter />
    </div>
  )
}
