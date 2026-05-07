'use client'

import { Plus, RotateCcw, Share2, ArrowUp, Square } from 'lucide-react'
import { ToolSelector } from '@/components/tool-selector'

interface WorkAreaProps {
  toolComponent?: React.ReactNode
}

export function WorkArea({ toolComponent }: WorkAreaProps) {
  return (
    <div className="flex flex-col h-full bg-secondary/50">
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-4 border-b border-border bg-secondary">
        <ToolSelector />

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Undo"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Redo"
        >
          <Share2 className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Clear"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <button
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Save"
        >
          <Square className="w-5 h-5" />
        </button>
      </div>

      {/* Work Area */}
      <div className="flex-1 overflow-auto p-4">
        {toolComponent ? (
          toolComponent
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Press <span className="font-semibold">+</span> to select a tool
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
