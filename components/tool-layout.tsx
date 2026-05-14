'use client'

import { ReactNode } from 'react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WorkArea } from '@/components/work-area'
import { ToolDescription } from '@/components/tool-description'

export interface ToolData {
  howItWorks: string
  features: string[]
  whoIsItFor: { title: string; description: string }[]
}

interface ToolLayoutProps {
  toolId: string
  toolName: string
  toolDescription: string
  toolComponent: ReactNode
  toolData?: ToolData
  children?: ReactNode
}

export function ToolLayout({
  toolId,
  toolName,
  toolDescription,
  toolComponent,
  toolData,
  children,
}: ToolLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      {/* Main Layout - Two Column */}
      <main className="flex-1 flex flex-col md:flex-row gap-0 overflow-hidden">
        {/* Left Column - Work Area (Static/Fixed) */}
        <div className="w-full md:w-[45%] flex flex-col bg-secondary/30 border-r border-border min-h-[50vh] md:min-h-auto overflow-hidden">
          <WorkArea toolComponent={toolComponent} toolName={toolName} />
        </div>

        {/* Right Column - Content (Scrollable) */}
        <div className="w-full md:w-[55%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 md:p-8 max-w-3xl">
              <ToolDescription toolName={toolName} toolDescription={toolDescription} toolData={toolData} />
            </div>
            {children}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
