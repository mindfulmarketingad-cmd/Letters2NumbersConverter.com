'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Maximize2 } from 'lucide-react'
import { ToolSelector } from '@/components/tool-selector'
import { ShareMenu } from '@/components/share-menu'
import { SaveButton } from '@/components/save-button'
import { SaveProvider, useSaveContext, type SavedSession } from '@/lib/save-context'

interface WorkAreaProps {
  toolComponent?: React.ReactNode
  toolName?: string
}

// Triggers React's synthetic event system on a programmatically-set value
function setReactValue(el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, value: string) {
  const proto =
    el instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : el instanceof HTMLSelectElement
      ? HTMLSelectElement.prototype
      : HTMLInputElement.prototype
  const nativeSetter = Object.getOwnPropertyDescriptor(proto, 'value')?.set
  nativeSetter?.call(el, value)
  el.dispatchEvent(new Event('input', { bubbles: true }))
  el.dispatchEvent(new Event('change', { bubbles: true }))
}

function WorkAreaInner({ toolComponent, toolName }: WorkAreaProps) {
  const { register, restore } = useSaveContext()
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const toolSlug = pathname?.split('/').filter(Boolean).pop() ?? ''

  // Universal DOM-based fallback — runs once on mount so the save button is
  // always active. Tool components that call useSaveState() will override this
  // with a richer, state-aware handler automatically.
  useEffect(() => {
    const SAVEABLE = 'textarea, input[type="text"], input[type="number"], input[type="email"], select'

    const get = (): Record<string, unknown> => {
      const el = contentRef.current
      if (!el) return {}
      const state: Record<string, unknown> = {}
      el.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(SAVEABLE)
        .forEach((input, i) => {
          const key =
            input.getAttribute('data-save-key') ||
            input.getAttribute('name') ||
            input.getAttribute('aria-label') ||
            (input.getAttribute('placeholder') ?? '').slice(0, 24).trim() ||
            `__field_${i}`
          state[key] = input.value
        })
      return state
    }

    const restore = (state: Record<string, unknown>) => {
      const el = contentRef.current
      if (!el) return
      el.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(SAVEABLE)
        .forEach((input, i) => {
          const key =
            input.getAttribute('data-save-key') ||
            input.getAttribute('name') ||
            input.getAttribute('aria-label') ||
            (input.getAttribute('placeholder') ?? '').slice(0, 24).trim() ||
            `__field_${i}`
          if (key in state) {
            setReactValue(input, String(state[key] ?? ''))
          }
        })
    }

    register(get, restore)
  }, [register])

  // Auto-restore a session queued by the dashboard's "Restore" button.
  // Delay 50ms so child useSaveState() effects run first and override the DOM
  // fallback with the tool's own richer restorer before we call restore().
  useEffect(() => {
    if (!toolSlug) return
    const pendingKey = `l2n:pending-restore:${toolSlug}`
    const raw = localStorage.getItem(pendingKey)
    if (!raw) return
    const timer = setTimeout(() => {
      try {
        const session = JSON.parse(raw) as SavedSession
        localStorage.removeItem(pendingKey)
        restore(session)
      } catch {}
    }, 50)
    return () => clearTimeout(timer)
  }, [toolSlug, restore])

  const handleFullscreen = () => {
    try {
      const element = document.querySelector('[data-workarea]')
      if (element?.requestFullscreen) element.requestFullscreen()
    } catch {}
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

      {/* Work Area content */}
      <div className="flex-1 overflow-auto" ref={contentRef}>
        {toolComponent ? (
          <div className="p-4">{toolComponent}</div>
        ) : (
          <div className="flex items-center justify-center h-full bg-[#f0f2f5] dark:bg-secondary/30">
            <p className="text-center text-[#7a8fa6] dark:text-muted-foreground text-base leading-relaxed select-none">
              Press{' '}
              <span className="inline-flex items-center justify-center w-7 h-7 border border-[#7a8fa6] dark:border-muted-foreground rounded-md mx-1 align-middle">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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
