'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, X, Search } from 'lucide-react'

interface Tool {
  title: string
  description: string
  href: string
  category: string
}

interface ToolsSearchContainerProps {
  tools: Tool[]
}

export function ToolsSearchContainer({ tools }: ToolsSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return tools

    const query = searchQuery.toLowerCase()
    return tools.filter(tool =>
      tool.title.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    )
  }, [searchQuery, tools])

  const handleClear = () => {
    setSearchQuery('')
  }

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <Search className="w-5 h-5" />
        </div>
        <input
          type="text"
          placeholder="Search tools by name, feature, or category..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-card focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results Counter */}
      <div className="text-sm text-muted-foreground">
        {searchQuery && (
          <p>
            Found <span className="font-semibold text-foreground">{filteredTools.length}</span> of{' '}
            <span className="font-semibold text-foreground">{tools.length}</span> tools
          </p>
        )}
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <div className="grid gap-3">
          {filteredTools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-card/80 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center px-2 py-0.5 rounded text-primary text-xs font-medium mb-2">
                    {tool.category}
                  </div>
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-2">
            No tools found matching your search
          </p>
          <p className="text-sm text-muted-foreground">
            Try searching with different keywords or browse all tools
          </p>
        </div>
      )}
    </div>
  )
}
