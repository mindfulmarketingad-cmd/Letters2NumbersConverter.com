'use client'

import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useAuth } from '@/lib/auth-context'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function HeaderUsageIndicator() {
  const { user } = useAuth()
  const [sessionId, setSessionId] = useState<string | null>(null)

  // Get session ID from cookie for anonymous users
  useEffect(() => {
    const sessionId = document.cookie
      .split('; ')
      .find(row => row.startsWith('sessionId='))
      ?.split('=')[1]
    setSessionId(sessionId || null)
  }, [])

  // Fetch usage data
  const queryParam = user ? `userId=${user.id}` : sessionId ? `sessionId=${sessionId}` : null
  const { data: usage } = useSWR(
    queryParam ? `/api/usage/track?${queryParam}` : null,
    fetcher,
    { refreshInterval: 3000 }
  )

  if (!usage) return null

  const { usage_count = 0, dailyLimit = 10 } = usage
  const percentage = Math.min((usage_count / dailyLimit) * 100, 100)
  const isNearLimit = usage_count >= dailyLimit * 0.8

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-muted-foreground">Daily uses</span>
        <div className="flex items-center gap-2">
          <span className={`font-semibold ${isNearLimit && usage_count >= dailyLimit ? 'text-red-500' : 'text-foreground'}`}>
            {usage_count}/{dailyLimit}
          </span>
          <div className="w-20 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${
                usage_count >= dailyLimit
                  ? 'bg-red-500'
                  : isNearLimit
                  ? 'bg-yellow-500'
                  : 'bg-primary'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
