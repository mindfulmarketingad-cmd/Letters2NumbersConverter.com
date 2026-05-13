'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  Bookmark, Trash2, ExternalLink, RotateCcw,
  Clock, ChevronDown, ChevronRight, FolderOpen,
} from 'lucide-react'
import type { SavedSession } from '@/lib/save-context'

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

interface ToolGroup {
  toolSlug: string
  toolName: string
  sessions: SavedSession[]
  lastSaved: number
}

function readAllGroups(): ToolGroup[] {
  const result: ToolGroup[] = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key?.startsWith('l2n:saves:')) continue
    const slug = key.slice('l2n:saves:'.length)
    try {
      const sessions: SavedSession[] = JSON.parse(localStorage.getItem(key) ?? '[]')
      if (sessions.length === 0) continue
      result.push({
        toolSlug: slug,
        toolName: sessions[0]?.toolName ?? slug,
        sessions,
        lastSaved: Math.max(...sessions.map(s => s.savedAt)),
      })
    } catch {}
  }
  return result.sort((a, b) => b.lastSaved - a.lastSaved)
}

export function DashboardWorkspaces() {
  const router = useRouter()
  const [groups, setGroups] = useState<ToolGroup[]>([])
  const [expanded, setExpanded] = useState<Set<string>>(new Set())
  // Tick forces time-ago strings to refresh every minute
  const [, setTick] = useState(0)

  const reload = useCallback(() => setGroups(readAllGroups()), [])

  useEffect(() => {
    reload()
    const interval = setInterval(() => setTick(t => t + 1), 60_000)
    return () => clearInterval(interval)
  }, [reload])

  const handleRestore = useCallback((session: SavedSession) => {
    // Write a pending-restore marker so WorkArea auto-restores this session on load
    localStorage.setItem(`l2n:pending-restore:${session.toolSlug}`, JSON.stringify(session))
    router.push(`/tools/${session.toolSlug}`)
  }, [router])

  const handleDeleteSession = useCallback((session: SavedSession) => {
    const key = `l2n:saves:${session.toolSlug}`
    try {
      const current: SavedSession[] = JSON.parse(localStorage.getItem(key) ?? '[]')
      const updated = current.filter(s => s.id !== session.id)
      if (updated.length === 0) localStorage.removeItem(key)
      else localStorage.setItem(key, JSON.stringify(updated))
    } catch {}
    reload()
  }, [reload])

  const handleClearTool = useCallback((toolSlug: string) => {
    localStorage.removeItem(`l2n:saves:${toolSlug}`)
    reload()
  }, [reload])

  const toggleExpand = useCallback((slug: string) => {
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(slug) ? next.delete(slug) : next.add(slug)
      return next
    })
  }, [])

  const totalSaves = groups.reduce((n, g) => n + g.sessions.length, 0)

  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-primary" />
          Saved Workspaces
        </h2>
        {totalSaves > 0 && (
          <span className="text-sm text-muted-foreground">
            {totalSaves} save{totalSaves !== 1 ? 's' : ''} across {groups.length} tool{groups.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {groups.length === 0 ? (
        <div className="py-10 text-center space-y-3">
          <FolderOpen className="w-10 h-10 text-muted-foreground/30 mx-auto" />
          <p className="text-muted-foreground text-sm">No saved workspaces yet.</p>
          <p className="text-xs text-muted-foreground/60 max-w-xs mx-auto">
            Open any tool, enter your work, and click the{' '}
            <strong className="text-muted-foreground">Save</strong> button in the toolbar to store your session here.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {groups.map(group => (
            <li key={group.toolSlug} className="rounded-lg border border-border overflow-hidden">

              {/* ── Tool header row ── */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleExpand(group.toolSlug)}
                onKeyDown={e => e.key === 'Enter' && toggleExpand(group.toolSlug)}
                className="flex items-center gap-3 px-4 py-3 bg-secondary/30 cursor-pointer hover:bg-secondary/50 transition-colors select-none"
              >
                <span className="text-muted-foreground flex-shrink-0">
                  {expanded.has(group.toolSlug)
                    ? <ChevronDown className="w-4 h-4" />
                    : <ChevronRight className="w-4 h-4" />}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground truncate">{group.toolName}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    Last saved {timeAgo(group.lastSaved)}
                  </p>
                </div>
                <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full flex-shrink-0">
                  {group.sessions.length} save{group.sessions.length !== 1 ? 's' : ''}
                </span>
                <a
                  href={`/tools/${group.toolSlug}`}
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded hover:bg-secondary transition-colors flex-shrink-0 text-muted-foreground hover:text-foreground"
                  title={`Open ${group.toolName}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* ── Expanded save list ── */}
              {expanded.has(group.toolSlug) && (
                <div>
                  <ul className="divide-y divide-border/40">
                    {group.sessions.map(session => (
                      <li
                        key={session.id}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary/20 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-foreground truncate">{session.label}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" />
                            {timeAgo(session.savedAt)}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRestore(session)}
                          className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex-shrink-0"
                          title="Navigate to the tool and restore this save automatically"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Restore
                        </button>
                        <button
                          onClick={() => handleDeleteSession(session)}
                          className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-destructive/10 hover:text-destructive transition-all flex-shrink-0"
                          title="Delete this save"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="px-4 py-2 border-t border-border/40 flex justify-end">
                    <button
                      onClick={() => handleClearTool(group.toolSlug)}
                      className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                    >
                      Clear all saves for this tool
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
