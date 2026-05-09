'use client'

import { Plus, Save, Maximize2 } from 'lucide-react'
import { ToolSelector } from '@/components/tool-selector'
import { ShareMenu } from '@/components/share-menu'
import { LetterNumberConverter } from '@/components/letter-number-converter'

interface WorkAreaProps {
  toolComponent?: React.ReactNode
}

export function WorkArea({ toolComponent }: WorkAreaProps) {
  const handleSave = () => {
    // Save functionality
    console.log('[v0] Save button clicked')
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
      <div className="flex items-center gap-4 p-4 border-b border-border bg-secondary">
        <ToolSelector />

        <ShareMenu />

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

        <div className="w-px h-6 bg-border ml-2" />

        <span className="text-sm font-semibold text-muted-foreground ml-2">Workspace</span>
      </div>

      {/* Work Area */}
      <div className="flex-1 overflow-auto p-4">
        {toolComponent ? (
          toolComponent
        ) : (
          <LetterNumberConverter />
        )}
      </div>
    </div>
  )
}
