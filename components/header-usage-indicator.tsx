'use client'

import useSWR from 'swr'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'
import { LogIn, Zap } from 'lucide-react'

const fetcher = (url: string, userId?: string) =>
  fetch(url, {
    headers: userId ? { 'x-user-id': userId } : {},
  }).then(r => r.json())

export function HeaderUsageIndicator() {
  const { user } = useAuth()

  // Always call /api/usage/me — it reads the httpOnly session cookie server-side
  // so anonymous users are fully supported without touching document.cookie
  const { data: usage } = useSWR(
    ['/api/usage/me', user?.id],
    ([url, userId]) => fetcher(url, userId ?? undefined),
    { refreshInterval: 2000, revalidateOnFocus: true }
  )

  if (!usage) return null

  // Pro users — show unlimited badge, no bar needed
  if (usage.isPro) {
    return (
      <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
        <Zap className="w-3.5 h-3.5" />
        <span>Pro</span>
      </div>
    )
  }

  const { usage_count = 0, dailyLimit = 10, isAnon } = usage
  const percentage = Math.min((usage_count / dailyLimit) * 100, 100)
  const isAtLimit = usage_count >= dailyLimit
  const isNearLimit = percentage >= 80

  const barColor = isAtLimit
    ? 'bg-red-500'
    : isNearLimit
    ? 'bg-yellow-500'
    : 'bg-primary'

  const countColor = isAtLimit
    ? 'text-red-500'
    : isNearLimit
    ? 'text-yellow-500'
    : 'text-foreground'

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col gap-1 min-w-[90px]">
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Daily uses</span>
          <span className={`text-xs font-semibold tabular-nums ${countColor}`}>
            {usage_count}/{dailyLimit}
          </span>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${barColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Prompt when at limit */}
      {isAtLimit && (
        isAnon ? (
          <Link
            href="/sign-in"
            className="flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <LogIn className="w-3 h-3" />
            Sign in
          </Link>
        ) : (
          <Link
            href="/pricing"
            className="flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            <Zap className="w-3 h-3" />
            Upgrade
          </Link>
        )
      )}
    </div>
  )
}
