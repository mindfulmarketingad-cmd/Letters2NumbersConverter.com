'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WorkArea } from '@/components/work-area'
import { SeoPanel } from '@/components/seo-panel'
import { ToolSelector } from '@/components/tool-selector'
import { getToolRegistry } from '@/lib/tool-registry'

export function HomepageLayout() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const toolParam = searchParams.get('tool')
  const [selectedTool, setSelectedTool] = useState<string | null>(toolParam)

  // Validate selected tool exists in registry
  const toolRegistry = getToolRegistry()
  const validTool = toolRegistry.some((t) => t.id === selectedTool) ? selectedTool : null

  const handleSelectTool = (toolId: string) => {
    setSelectedTool(toolId)
    // Update URL with tool parameter
    router.push(`?tool=${toolId}`, { scroll: false })
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      {/* Main Layout - Two Column */}
      <main className="flex-1 flex flex-col md:flex-row gap-0 overflow-hidden">
        {/* Left Column - Work Area (Static/Fixed) */}
        <div className="w-full md:w-[45%] flex flex-col bg-secondary/30 border-r border-border min-h-[50vh] md:min-h-auto overflow-hidden">
          <WorkArea toolId={validTool} onSelectTool={handleSelectTool} />
        </div>

        {/* Right Column - SEO Content (Scrollable) */}
        <div className="w-full md:w-[55%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 md:p-8 max-w-3xl">
              <SeoPanel toolId={validTool} />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
