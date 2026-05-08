'use client'

import { useAuth } from '@/lib/auth-context'
import { useEffect, useState } from 'react'

/**
 * Hook to track tool usage and enforce daily limits
 * @param toolName - Name of the tool being used (for analytics)
 * @returns Object with trackUsage function and current limits
 */
export function useTrackUsage(toolName: string) {
  const { user, sessionId } = useAuth()
  const [remainingUses, setRemainingUses] = useState<number | null>(null)
  const [isLimitExceeded, setIsLimitExceeded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Check current usage on mount
  useEffect(() => {
    checkUsage()
  }, [user, sessionId])

  const checkUsage = async () => {
    try {
      const identifier = user?.id || sessionId
      if (!identifier) return

      const response = await fetch(
        `/api/usage/track?${user?.id ? `userId=${user.id}` : `sessionId=${sessionId}`}`
      )
      const data = await response.json()
      
      setRemainingUses(data.remainingUsage)
      setIsLimitExceeded(data.remainingUsage <= 0)
    } catch (error) {
      console.error('[v0] Failed to check usage:', error)
    }
  }

  const trackUsage = async (): Promise<{ allowed: boolean; message?: string }> => {
    if (isLimitExceeded) {
      return { allowed: false, message: 'Daily usage limit exceeded' }
    }

    setIsLoading(true)
    try {
      const identifier = user?.id || sessionId
      if (!identifier) {
        return { allowed: false, message: 'Could not identify user' }
      }

      const response = await fetch('/api/usage/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id || null,
          sessionId: !user?.id ? sessionId : null,
        }),
      })

      const data = await response.json()

      if (!data.allowed) {
        setIsLimitExceeded(true)
        return { allowed: false, message: data.message }
      }

      // Update remaining uses
      setRemainingUses(data.remainingUsage)

      // Track in analytics (optional - implement later)
      console.log(`[v0] Tool used: ${toolName}, Remaining: ${data.remainingUsage}/${data.limit}`)

      return { allowed: true }
    } catch (error) {
      console.error('[v0] Usage tracking error:', error)
      return { allowed: true } // Allow use if tracking fails (fail open)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    trackUsage,
    remainingUses,
    isLimitExceeded,
    isLoading,
  }
}
