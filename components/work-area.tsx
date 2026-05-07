'use client'

import { Plus, Share2, Save, Maximize2 } from 'lucide-react'
import { ToolSelector } from '@/components/tool-selector'

interface WorkAreaProps {
  toolComponent?: React.ReactNode
}

export function WorkArea({ toolComponent }: WorkAreaProps) {
  const handleSave = () => {
    // Save functionality
    console.log('[v0] Save button clicked')
  }

  const handleShare = () => {
    // Share functionality
    console.log('[v0] Share button clicked')
  }

  const handleFullscreen = () => {
    // Fullscreen functionality
    try {
      const element = document.querySelector('[data-workarea]')
      if (element?.requestFullscreen) {
        element.requestFullscreen()
      }
    } catch (error) {
      console.log('[v0] Fullscreen not available:', error)
    }
  }

  return (
    <div className="flex flex-col h-full bg-secondary/50" data-workarea>
      {/* Toolbar */}
      <div className="flex items-center gap-2 p-4 border-b border-border bg-secondary">
        <ToolSelector />

        <button
          onClick={handleShare}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Share"
        >
          <Share2 className="w-5 h-5" />
        </button>

        <button
          onClick={handleSave}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Save"
        >
          <Save className="w-5 h-5" />
        </button>

        <button
          onClick={handleFullscreen}
          className="p-2 hover:bg-background rounded-lg transition-colors"
          title="Full Screen"
        >
          <Maximize2 className="w-5 h-5" />
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
