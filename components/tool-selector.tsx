'use client'

import { useState } from 'react'
import { Plus, Search, X } from 'lucide-react'
import { getToolsByCategory, getToolRegistry } from '@/lib/tool-registry'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ToolSelectorProps {
  onSelect: (toolId: string) => void
  isOpen: boolean
  onClose: () => void
}

export function ToolSelector({ onSelect, isOpen, onClose }: ToolSelectorProps) {
  const [searchQuery, setSearchQuery] = useState('')
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
    onSelect(toolId)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 p-4">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="text-xl font-bold">Select a Tool</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-secondary/50">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Tools List */}
        <div className="flex-1 overflow-y-auto">
          {searchQuery ? (
            <div className="p-4 space-y-2">
              {filteredTools.length > 0 ? (
                filteredTools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => handleSelect(tool.id)}
                    className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="font-semibold text-sm">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.description}</div>
                  </button>
                ))
              ) : (
                <p className="text-center text-muted-foreground py-8">No tools found</p>
              )}
            </div>
          ) : (
            <div className="p-4 space-y-6">
              {categorizedTools.map(({ category, tools }) => (
                <div key={category}>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {tools.map((tool) => (
                      <button
                        key={tool.id}
                        onClick={() => handleSelect(tool.id)}
                        className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="font-semibold text-sm">{tool.name}</div>
                        <div className="text-xs text-muted-foreground">{tool.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
