'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { Save, Check, Clock, Trash2, RotateCcw, ChevronDown } from 'lucide-react'
import { useSaveContext, type SavedSession } from '@/lib/save-context'

interface SaveButtonProps {
  toolName: string
}

function timeAgo(ts: number): string {
  const s = Math.floor((Date.now() - ts) / 1000)
  if (s < 60) return 'just now'
  const m = Math.floor(s / 60)
  if (m < 60) return `${m}m ago`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h}h ago`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d}d ago`
  return new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function SaveButton({ toolName }: SaveButtonProps) {
  const pathname = usePathname()
  const toolSlug = pathname.split('/').filter(Boolean).pop() ?? 'unknown'

  const { canSave, getSessions, save, restore, deleteSession } = useSaveContext()

  const [saved, setSaved] = useState(false)
  const [open, setOpen] = useState(false)
  const [sessions, setSessions] = useState<SavedSession[]>([])
  const [saveLabel, setSaveLabel] = useState('')
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  // Refresh sessions whenever panel opens
  const refreshSessions = useCallback(() => {
    setSessions(getSessions(toolSlug))
  }, [getSessions, toolSlug])

  useEffect(() => {
    if (open) refreshSessions()
  }, [open, refreshSessions])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target as Node) &&
        btnRef.current && !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const handleSave = useCallback(() => {
    const result = save(toolSlug, toolName)
    if (result.success) {
      setSaveLabel(result.label)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
      refreshSessions()
    }
  }, [save, toolSlug, toolName, refreshSessions])

  const handleRestore = useCallback(
    (session: SavedSession) => {
      restore(session)
      setOpen(false)
    },
    [restore]
  )

  const handleDelete = useCallback(
    (e: React.MouseEvent, session: SavedSession) => {
      e.stopPropagation()
      deleteSession(session)
      setSessions((prev) => prev.filter((s) => s.id !== session.id))
    },
    [deleteSession]
  )

  const hasSessions = sessions.length > 0

  return (
    <div className="relative">
      {/* Main Save button */}
      <button
        ref={btnRef}
        onClick={() => {
          if (open) { setOpen(false); return }
          // If can save, save immediately; always show panel for sessions
          if (canSave) handleSave()
          setOpen((o) => !o)
        }}
        disabled={!canSave && sessions.length === 0}
        className={`flex items-center gap-1 p-2 rounded-lg transition-all ${
          saved
            ? 'bg-green-500/15 text-green-500'
            : canSave
            ? 'hover:bg-background text-foreground'
            : 'text-muted-foreground/40 cursor-not-allowed'
        }`}
        title={
          !canSave && sessions.length === 0
            ? 'Saving not available for this tool'
            : saved
            ? `Saved: ${saveLabel}`
            : 'Save current state'
        }
      >
        {saved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
        {/* Badge: number of existing saves */}
        {!saved && hasSessions && (
          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold leading-none -mt-0.5 -mr-0.5">
            {sessions.length}
          </span>
        )}
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute left-0 top-full mt-1 w-72 rounded-xl border border-border bg-card shadow-xl z-50 overflow-hidden"
        >
          {/* Save now action */}
          <button
            onClick={handleSave}
            disabled={!canSave}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed border-b border-border"
          >
            <Save className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-foreground">Save current state</span>
            {!canSave && (
              <span className="ml-auto text-xs text-muted-foreground">Not available</span>
            )}
          </button>

          {/* Sessions list */}
          {sessions.length > 0 ? (
            <div className="py-1">
              <p className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Saved sessions
              </p>
              <ul className="max-h-52 overflow-y-auto">
                {sessions.map((session) => (
                  <li key={session.id}>
                    <button
                      onClick={() => handleRestore(session)}
                      className="flex items-start gap-3 w-full px-4 py-2.5 text-left hover:bg-secondary transition-colors group"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground truncate leading-tight">
                          {session.label}
                        </p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {timeAgo(session.savedAt)}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleDelete(e, session)}
                        className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all flex-shrink-0"
                        title="Delete save"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="px-4 py-5 text-center">
              <p className="text-sm text-muted-foreground">No saved sessions yet.</p>
              <p className="text-xs text-muted-foreground mt-1">
                {canSave
                  ? 'Click "Save current state" to save your work.'
                  : 'This tool does not support saving yet.'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
