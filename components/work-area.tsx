'use client'

import { Maximize2 } from 'lucide-react'
import { ToolSelector } from '@/components/tool-selector'
import { ShareMenu } from '@/components/share-menu'
import { SaveButton } from '@/components/save-button'
import { SaveProvider } from '@/lib/save-context'

interface WorkAreaProps {
  toolComponent?: React.ReactNode
  toolName?: string
}

function WorkAreaInner({ toolComponent, toolName }: WorkAreaProps) {
  const handleFullscreen = () => {
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
    <div className="flex flex-col h-full md:h-screen bg-secondary/50" data-workarea>
      {/* Toolbar */}
      <div className="flex items-center gap-4 p-4 border-b border-border bg-secondary">
        <ToolSelector />

        <ShareMenu />

        <SaveButton toolName={toolName ?? 'Tool'} />

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
      <div className="flex-1 overflow-auto">
        {toolComponent ? (
          <div className="p-4">{toolComponent}</div>
        ) : (
          <div className="flex items-center justify-center h-full bg-[#f0f2f5] dark:bg-secondary/30">
            <p className="text-center text-[#7a8fa6] dark:text-muted-foreground text-base leading-relaxed select-none">
              Press{' '}
              <span className="inline-flex items-center justify-center w-7 h-7 border border-[#7a8fa6] dark:border-muted-foreground rounded-md mx-1 align-middle">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              to add an online tool to the workspace.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function WorkArea(props: WorkAreaProps) {
  return (
    <SaveProvider>
      <WorkAreaInner {...props} />
    </SaveProvider>
  )
}
