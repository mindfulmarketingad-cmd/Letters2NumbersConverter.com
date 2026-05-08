'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { LogOut, Copy } from 'lucide-react'

export function DashboardContent() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const [subscription, setSubscription] = useState<any>(null)
  const [usage, setUsage] = useState<any>(null)
  const [loadingData, setLoadingData] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in')
    }
  }, [user, loading, router])

  useEffect(() => {
    if (user) {
      fetchData()
    }
  }, [user])

  const fetchData = async () => {
    try {
      const [subRes, usageRes] = await Promise.all([
        fetch(`/api/subscription/status?userId=${user?.id}`),
        fetch(`/api/usage/track?userId=${user?.id}`),
      ])

      if (subRes.ok) {
        const subData = await subRes.json()
        setSubscription(subData)
      }

      if (usageRes.ok) {
        const usageData = await usageRes.json()
        setUsage(usageData)
      }
    } finally {
      setLoadingData(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  if (loading || loadingData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>

        {/* Account Info */}
        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Account Information</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-foreground font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User ID</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-foreground font-mono text-sm">{user.id}</p>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(user.id)
                    setCopied(true)
                    setTimeout(() => setCopied(false), 2000)
                  }}
                  className="p-1 hover:bg-secondary rounded"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
              {copied && <p className="text-xs text-primary mt-1">Copied!</p>}
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        {usage && (
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Usage Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Uses Today</p>
                <p className="text-3xl font-bold text-primary">{usage.currentUsage}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Daily Limit</p>
                <p className="text-3xl font-bold text-foreground">
                  {usage.limit === Infinity ? '∞' : usage.limit}
                </p>
              </div>
            </div>
            {usage.limit !== Infinity && (
              <div className="w-full bg-secondary rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.min(100, (usage.currentUsage / usage.limit) * 100)}%`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Subscription Status */}
        {subscription && (
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Subscription</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Plan</p>
                <p className="text-foreground font-medium capitalize">
                  {subscription.plan_type === 'pro' ? 'Pro - Unlimited' : 'Free'}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-foreground font-medium capitalize">
                  {subscription.status || 'active'}
                </p>
              </div>
              {subscription.current_period_end && (
                <div>
                  <p className="text-sm text-muted-foreground">Renewal Date</p>
                  <p className="text-foreground font-medium">
                    {new Date(subscription.current_period_end).toLocaleDateString()}
                  </p>
                </div>
              )}
            </div>

            {subscription.plan_type !== 'pro' && (
              <a
                href="/pricing"
                className="block w-full py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-center font-medium rounded-lg transition-colors mt-4"
              >
                Upgrade to Pro
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
