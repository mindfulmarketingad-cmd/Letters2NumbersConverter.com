'use client'

import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import { LogOut, Copy, RefreshCw } from 'lucide-react'
import { DashboardWorkspaces } from '@/components/dashboard-workspaces'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export function DashboardContent() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push('/sign-in')
    }
  }, [user, loading, router])

  // Fetch subscription data with auto-refresh every 10 seconds
  const { data: subscription, isLoading: subLoading, mutate: refreshSub } = useSWR(
    user ? `/api/subscription/status?userId=${user.id}` : null,
    fetcher,
    { revalidateOnFocus: true, revalidateOnReconnect: true, refreshInterval: 10000 }
  )

  // Fetch usage data with auto-refresh every 2 seconds for real-time session updates
  const { data: usage, isLoading: usageLoading, mutate: refreshUsage } = useSWR(
    user ? `/api/usage/track?userId=${user.id}` : null,
    fetcher,
    { revalidateOnFocus: true, revalidateOnReconnect: true, refreshInterval: 2000 }
  )

  const handleRefresh = async () => {
    await Promise.all([refreshSub(), refreshUsage()])
  }

  const loadingData = subLoading || usageLoading

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
          <div className="flex items-center gap-3">
            <button
              onClick={handleRefresh}
              disabled={loadingData}
              className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-secondary rounded-lg transition-colors disabled:opacity-50"
              title="Refresh data"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
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
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Uses Today</p>
                <p className="text-4xl font-bold text-primary">{usage.usage_count || 0}</p>
                {usageLoading && <p className="text-xs text-muted-foreground mt-2">updating...</p>}
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Daily Limit</p>
                <p className="text-4xl font-bold text-foreground">
                  {usage.dailyLimit === Infinity ? '∞' : usage.dailyLimit}
                </p>
              </div>
            </div>
            {usage.dailyLimit !== Infinity && (
              <div className="space-y-2">
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, ((usage.usage_count || 0) / usage.dailyLimit) * 100)}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {usage.remainingUses || 0} uses remaining
                </p>
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
                  {subscription.plan_type === 'pro_monthly' 
                    ? 'Pro Monthly - Unlimited' 
                    : subscription.plan_type === 'pro_yearly'
                    ? 'Pro Yearly - Unlimited'
                    : 'Free'}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className={`w-2 h-2 rounded-full ${subscription.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                  <p className="text-foreground font-medium capitalize">
                    {subscription.status || 'active'}
                  </p>
                  {subLoading && <span className="text-xs text-muted-foreground">(updating...)</span>}
                </div>
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

            {subscription.plan_type !== 'pro_monthly' && subscription.plan_type !== 'pro_yearly' && (
              <a
                href="/pricing"
                className="block w-full py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-center font-medium rounded-lg transition-colors mt-4"
              >
                Upgrade to Pro
              </a>
            )}
          </div>
        )}

        {/* Saved Workspaces */}
        <DashboardWorkspaces />
      </div>
    </div>
  )
}
