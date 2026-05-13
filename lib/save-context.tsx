'use client'

import {
  createContext,
  useContext,
  useRef,
  useCallback,
  useEffect,
  useState,
  ReactNode,
} from 'react'

export interface SavedSession {
  id: string
  toolSlug: string
  toolName: string
  savedAt: number
  label: string
  state: Record<string, unknown>
}

type StateGetter = () => Record<string, unknown>
type StateRestorer = (state: Record<string, unknown>) => void

interface SaveContextValue {
  canSave: boolean
  getSessions: (toolSlug: string) => SavedSession[]
  save: (toolSlug: string, toolName: string) => { success: boolean; label: string }
  restore: (session: SavedSession) => void
  deleteSession: (session: SavedSession) => void
  register: (getter: StateGetter, restorer: StateRestorer) => void
  unregister: () => void
}

const SaveContext = createContext<SaveContextValue | null>(null)

const MAX_SAVES_PER_TOOL = 10
const KEY = (slug: string) => `l2n:saves:${slug}`

function loadSessions(slug: string): SavedSession[] {
  try {
    const raw = localStorage.getItem(KEY(slug))
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function storeSessions(slug: string, sessions: SavedSession[]) {
  try {
    localStorage.setItem(KEY(slug), JSON.stringify(sessions))
  } catch {
    // Storage full — drop oldest entry and retry once
    const trimmed = sessions.slice(0, sessions.length - 1)
    try { localStorage.setItem(KEY(slug), JSON.stringify(trimmed)) } catch {}
  }
}

export function SaveProvider({ children }: { children: ReactNode }) {
  const getterRef = useRef<StateGetter | null>(null)
  const restorerRef = useRef<StateRestorer | null>(null)
  const [canSave, setCanSave] = useState(false)

  const register = useCallback((getter: StateGetter, restorer: StateRestorer) => {
    // Wrap in stable functions that always delegate to the latest closures
    getterRef.current = getter
    restorerRef.current = restorer
    setCanSave(true)
  }, [])

  const unregister = useCallback(() => {
    getterRef.current = null
    restorerRef.current = null
    setCanSave(false)
  }, [])

  const getSessions = useCallback((slug: string) => loadSessions(slug), [])

  const save = useCallback(
    (toolSlug: string, toolName: string): { success: boolean; label: string } => {
      if (!getterRef.current) return { success: false, label: '' }

      let state: Record<string, unknown>
      try {
        state = getterRef.current()
      } catch {
        return { success: false, label: '' }
      }

      // Auto-label: first non-empty string value, truncated
      const textValues = Object.values(state).filter(
        (v) => typeof v === 'string' && (v as string).trim().length > 0
      ) as string[]
      const raw = textValues[0]?.trim() ?? ''
      const label = raw.length > 0
        ? raw.slice(0, 40) + (raw.length > 40 ? '…' : '')
        : new Date().toLocaleString('en-US', {
            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
          })

      const session: SavedSession = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        toolSlug,
        toolName,
        savedAt: Date.now(),
        label,
        state,
      }

      const updated = [session, ...loadSessions(toolSlug)].slice(0, MAX_SAVES_PER_TOOL)
      storeSessions(toolSlug, updated)
      return { success: true, label }
    },
    []
  )

  const restore = useCallback((session: SavedSession) => {
    restorerRef.current?.(session.state)
  }, [])

  const deleteSession = useCallback((session: SavedSession) => {
    const updated = loadSessions(session.toolSlug).filter((s) => s.id !== session.id)
    storeSessions(session.toolSlug, updated)
  }, [])

  return (
    <SaveContext.Provider
      value={{ canSave, getSessions, save, restore, deleteSession, register, unregister }}
    >
      {children}
    </SaveContext.Provider>
  )
}

export function useSaveContext() {
  const ctx = useContext(SaveContext)
  if (!ctx) throw new Error('useSaveContext must be used within SaveProvider')
  return ctx
}

/**
 * Call this inside any tool component to enable the Save button.
 * getState should return a plain object with the tool's current inputs.
 * onRestore will be called with that object when the user restores a session.
 */
export function useSaveState(
  getState: () => Record<string, unknown>,
  onRestore: (state: Record<string, unknown>) => void
) {
  const { register, unregister } = useSaveContext()

  // Keep always-current refs so the registered getter never goes stale
  const getStateRef = useRef(getState)
  const onRestoreRef = useRef(onRestore)
  useEffect(() => { getStateRef.current = getState })
  useEffect(() => { onRestoreRef.current = onRestore })

  useEffect(() => {
    register(
      () => getStateRef.current(),
      (s) => onRestoreRef.current(s)
    )
    return () => unregister()
  }, [register, unregister])
}
