'use client'

import { useEffect, useRef, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AlertCircle, LogIn, Zap, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ToolPageProps {
  children: React.ReactNode
  toolSlug: string
}

type LimitState = 'idle' | 'anon_limit' | 'free_limit'

export function ToolPageWrapper({ children, toolSlug }: ToolPageProps) {
  const { user, loading } = useAuth()
  const tracked = useRef(false)
  const [limitState, setLimitState] = useState<LimitState>('idle')
  const [usageCount, setUsageCount] = useState(0)
  const [dailyLimit, setDailyLimit] = useState(0)

  useEffect(() => {
    if (loading) return
    if (tracked.current) return
    tracked.current = true

    const trackUsage = async () => {
      try {
        const res = await fetch('/api/usage/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            toolSlug,
            userId: user?.id ?? null,
          }),
        })

        const data = await res.json()

        if (!data.allowed) {
          setUsageCount(data.usage_count ?? 0)
          setDailyLimit(data.dailyLimit ?? 0)
          // Determine which modal to show based on auth state
          setLimitState(user ? 'free_limit' : 'anon_limit')
        }
      } catch {
        // Silently fail — never block the tool page from loading
      }
    }

    trackUsage()
  }, [loading, toolSlug, user, user?.id])

  return (
    <>
      {children}

      {/* Limit Modal Overlay */}
      {limitState !== 'idle' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-8 relative">

            {limitState === 'anon_limit' && (
              <AnonLimitModal
                usageCount={usageCount}
                dailyLimit={dailyLimit}
                onDismiss={() => setLimitState('idle')}
              />
            )}

            {limitState === 'free_limit' && (
              <FreeLimitModal
                usageCount={usageCount}
                dailyLimit={dailyLimit}
                onDismiss={() => setLimitState('idle')}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

// Modal shown to anonymous users who hit their limit
function AnonLimitModal({
  usageCount,
  dailyLimit,
  onDismiss,
}: {
  usageCount: number
  dailyLimit: number
  onDismiss: () => void
}) {
  return (
    <div className="space-y-6 text-center">
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex justify-center">
        <div className="bg-primary/10 border border-primary/20 rounded-full p-4">
          <LogIn className="w-8 h-8 text-primary" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Sign in to keep going</h2>
        <p className="text-muted-foreground">
          You&apos;ve used all {dailyLimit} free guest tool accesses for today.
          Create a free account to get {25} uses per day.
        </p>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 text-sm text-muted-foreground space-y-1">
        <div className="flex justify-between">
          <span>Guest limit</span>
          <span className="font-medium text-foreground">{dailyLimit} uses/day</span>
        </div>
        <div className="flex justify-between">
          <span>Free account</span>
          <span className="font-medium text-foreground">25 uses/day</span>
        </div>
        <div className="flex justify-between">
          <span>Pro subscription</span>
          <span className="font-medium text-primary">Unlimited</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/sign-in?mode=signup"
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
        >
          Create Free Account
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/sign-in"
          className="flex items-center justify-center gap-2 w-full py-3 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium"
        >
          <LogIn className="w-4 h-4" />
          Sign In
        </Link>
      </div>

      <p className="text-xs text-muted-foreground">
        Guest usage resets daily at midnight UTC.
      </p>
    </div>
  )
}

// Modal shown to logged-in free users who hit their limit
function FreeLimitModal({
  usageCount,
  dailyLimit,
  onDismiss,
}: {
  usageCount: number
  dailyLimit: number
  onDismiss: () => void
}) {
  return (
    <div className="space-y-6 text-center">
      <button
        onClick={onDismiss}
        className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex justify-center">
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-full p-4">
          <AlertCircle className="w-8 h-8 text-yellow-500" />
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Daily Limit Reached</h2>
        <p className="text-muted-foreground">
          You&apos;ve used all {dailyLimit} tool accesses for today. Upgrade to Pro for unlimited access.
        </p>
      </div>

      <div className="bg-secondary/50 rounded-lg p-4 text-sm space-y-2">
        <div className="flex justify-between text-muted-foreground">
          <span>Today&apos;s usage</span>
          <span className="font-semibold text-foreground">{usageCount} / {dailyLimit}</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm space-y-1 text-left">
        <p className="font-semibold text-foreground mb-2">Pro includes:</p>
        <div className="space-y-1 text-muted-foreground">
          <p>Unlimited tool uses every day</p>
          <p>Priority support</p>
          <p>Ad-free experience</p>
        </div>
      </div>

      <div className="space-y-3">
        <Link
          href="/pricing"
          className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
        >
          <Zap className="w-4 h-4" />
          Upgrade to Pro
        </Link>
        <button
          onClick={onDismiss}
          className="w-full py-3 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium text-sm"
        >
          Maybe later — resets at midnight UTC
        </button>
      </div>
    </div>
  )
}
