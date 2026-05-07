'use client'

import { useState, useRef, useEffect } from 'react'
import { Plus, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getToolsByCategory, getToolRegistry } from '@/lib/tool-registry'
import { Input } from '@/components/ui/input'

interface ToolSelectorProps {
  onSelect?: (toolId: string) => void
}

export function ToolSelector({ onSelect }: ToolSelectorProps) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const categorizedTools = getToolsByCategory()
  const allTools = getToolRegistry()

  const filteredTools = searchQuery
    ? allTools.filter(
        (tool) =>
          tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allTools

  const handleSelect = (toolId: string) => {
    const tool = allTools.find((t) => t.id === toolId)
    if (tool) {
      router.push(tool.href)
      setIsOpen(false)
      setSearchQuery('')
      onSelect?.(toolId)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-background rounded-lg transition-colors flex items-center gap-1"
        title="Select tool"
      >
        <Plus className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-background rounded-lg shadow-lg border border-border w-80 max-h-96 flex flex-col z-40">
          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-secondary/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="border-0 bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Tools List */}
          <div className="flex-1 overflow-y-auto">
            {searchQuery ? (
              <div className="p-3 space-y-2">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleSelect(tool.id)}
                      className="w-full text-left p-2 rounded-md hover:bg-secondary transition-colors text-sm"
                    >
                      <div className="font-semibold">{tool.name}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{tool.description}</div>
                    </button>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4 text-sm">No tools found</p>
                )}
              </div>
            ) : (
              <div className="p-3 space-y-4">
                {categorizedTools.map(({ category, tools }) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-2">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {tools.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => handleSelect(tool.id)}
                          className="w-full text-left p-2 rounded-md hover:bg-secondary transition-colors text-sm"
                        >
                          <div className="font-semibold">{tool.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{tool.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-background rounded-lg transition-colors flex items-center gap-1"
        title="Select tool"
      >
        <Plus className="w-5 h-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-background rounded-lg shadow-lg border border-border w-80 max-h-96 flex flex-col z-40">
          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-secondary/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="border-0 bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* Tools List */}
          <div className="flex-1 overflow-y-auto">
            {searchQuery ? (
              <div className="p-3 space-y-2">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleSelect(tool.id)}
                      className="w-full text-left p-2 rounded-md hover:bg-secondary transition-colors text-sm"
                    >
                      <div className="font-semibold">{tool.name}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1">{tool.description}</div>
                    </button>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4 text-sm">No tools found</p>
                )}
              </div>
            ) : (
              <div className="p-3 space-y-4">
                {categorizedTools.map(({ category, tools }) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-2">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {tools.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => handleSelect(tool.id)}
                          className="w-full text-left p-2 rounded-md hover:bg-secondary transition-colors text-sm"
                        >
                          <div className="font-semibold">{tool.name}</div>
                          <div className="text-xs text-muted-foreground line-clamp-1">{tool.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
