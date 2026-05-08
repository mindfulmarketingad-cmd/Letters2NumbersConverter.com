'use client'

import { useEffect, useState } from 'react'

const SESSION_ID_KEY = 'tool_session_id'

export function useSessionId(): string {
  const [sessionId, setSessionId] = useState<string>('')

  useEffect(() => {
    // Get or create session ID for anonymous users
    let id = localStorage.getItem(SESSION_ID_KEY)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(SESSION_ID_KEY, id)
    }
    setSessionId(id)
  }, [])

  return sessionId
}
