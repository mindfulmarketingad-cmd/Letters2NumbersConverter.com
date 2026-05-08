'use client'

import { useState, useEffect } from 'react'
import { User, LogOut, BarChart3 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

interface ToolAnalytics {
  toolId: string
  toolName: string
  usageCount: number
}

interface Analytics {
  totalUsage: number
  tools: ToolAnalytics[]
}

export function ProfileDropdown() {
  const { user, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (isOpen && user) {
      fetchAnalytics()
    }
  }, [isOpen, user])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/analytics/tools', {
        headers: {
          'x-user-id': user?.id || '',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setAnalytics(data)
      }
    } catch (error) {
      console.error('Failed to fetch analytics:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      setIsOpen(false)
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  if (!user) return null

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
          <User className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium hidden sm:inline">Profile</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">{user.email}</p>
                <p className="text-xs opacity-90">Account</p>
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold">Your Tool Usage</h3>
            </div>

            {loading ? (
              <div className="text-center py-4 text-muted-foreground">
                <p className="text-sm">Loading analytics...</p>
              </div>
            ) : analytics ? (
              <>
                <div className="mb-3 p-2 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">Total Uses</p>
                  <p className="text-2xl font-bold text-foreground">{analytics.totalUsage}</p>
                </div>

                {analytics.tools.length > 0 ? (
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {analytics.tools.map((tool) => (
                      <div key={tool.toolId} className="flex items-center justify-between p-2 hover:bg-muted rounded transition-colors">
                        <p className="text-xs font-medium text-foreground truncate flex-1">{tool.toolName}</p>
                        <span className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                          {tool.usageCount}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">No tools used yet</p>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground text-center py-4">Unable to load analytics</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-3 space-y-2">
            <Link
              href="/dashboard"
              className="w-full px-3 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Full Dashboard
            </Link>
            <button
              onClick={handleSignOut}
              className="w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
