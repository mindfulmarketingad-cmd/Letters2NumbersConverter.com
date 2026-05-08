'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { getRemainingUses, getOrCreateSessionId } from '@/lib/subscription-utils'
import Link from 'next/link'
import { Zap } from 'lucide-react'

export function UsageTracker() {
  const { user } = useAuth()
  const [remaining, setRemaining] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUsage = async () => {
      try {
        const sessionId = !user ? getOrCreateSessionId() : undefined
        const uses = await getRemainingUses(user?.id, sessionId)
        setRemaining(uses)
      } catch (error) {
        console.error('Failed to get remaining uses:', error)
      } finally {
        setLoading(false)
      }
    }

    checkUsage()
  }, [user])

  if (loading || remaining === null) {
    return null
  }

  // Don't show for paid users
  if (remaining === Infinity) {
    return null
  }

  const isLow = remaining <= 3
  const isExhausted = remaining === 0

  return (
    <Link href="/pricing">
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
        isExhausted
          ? 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-950/50'
          : isLow
          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-950/50'
          : 'bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-950/50'
      }`}>
        <Zap className="w-4 h-4" />
        {remaining} uses left
      </div>
    </Link>
  )
}
