'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'

interface Tool {
  title: string
  description: string
  category: string
  href: string
}

interface ToolsSearchProps {
  tools: Tool[]
  onFilterChange: (filtered: Tool[]) => void
}

export function ToolsSearch({ tools, onFilterChange }: ToolsSearchProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) {
      return tools
    }

    const query = searchQuery.toLowerCase()
    return tools.filter((tool) => {
      const titleMatch = tool.title.toLowerCase().includes(query)
      const descriptionMatch = tool.description.toLowerCase().includes(query)
      const categoryMatch = tool.category.toLowerCase().includes(query)
      
      return titleMatch || descriptionMatch || categoryMatch
    })
  }, [searchQuery, tools])

  const handleClear = () => {
    setSearchQuery('')
  }

  // Notify parent component of filtered tools
  useMemo(() => {
    onFilterChange(filteredTools)
  }, [filteredTools, onFilterChange])

  return (
    <div className="w-full mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          placeholder="Search tools by name, category, or feature..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
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
      
      {searchQuery && (
        <p className="text-sm text-muted-foreground mt-2">
          Found <span className="font-semibold text-foreground">{filteredTools.length}</span> {filteredTools.length === 1 ? 'tool' : 'tools'} matching "{searchQuery}"
        </p>
      )}
    </div>
  )
}
