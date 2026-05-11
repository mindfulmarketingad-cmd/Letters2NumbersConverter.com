'use client'

import Link from "next/link"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ToolsSearchContainer } from "@/components/tools-search-container"
import { getToolRegistry } from "@/lib/tool-registry"

export default function ToolsPage() {
  const toolRegistry = getToolRegistry()
  
  // Convert registry format to tools format expected by ToolsSearchContainer
  const tools = toolRegistry.map(tool => ({
    title: tool.name,
    description: tool.description,
    href: tool.href,
    category: tool.category
  }))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Free Online <span className="text-primary">Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of {tools.length}+ free encoding and decoding tools for puzzles, cryptography, and more. No signup required.
              </p>
            </div>

            {/* Search Component with Tools Grid */}
            <ToolsSearchContainer tools={tools} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
