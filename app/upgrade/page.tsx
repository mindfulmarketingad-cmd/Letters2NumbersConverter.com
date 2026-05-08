'use client'

import Link from 'next/link'
import { AlertCircle, ArrowRight, LogIn, Zap } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useAuth } from '@/lib/auth-context'

export default function UpgradePage() {
  const { user, loading } = useAuth()

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full text-center space-y-6">

          {!loading && !user ? (
            // Anonymous user
            <>
              <div className="flex justify-center">
                <div className="bg-primary/10 border border-primary/20 rounded-full p-4">
                  <LogIn className="w-8 h-8 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Sign in to keep going</h1>
                <p className="text-lg text-muted-foreground">
                  You&apos;ve reached your daily guest limit. Create a free account for more daily uses.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm text-muted-foreground text-left">
                <div className="flex justify-between">
                  <span>Guest</span>
                  <span className="font-medium text-foreground">10 uses/day</span>
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

              <div className="space-y-3 pt-2">
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
            </>
          ) : (
            // Logged-in free user
            <>
              <div className="flex justify-center">
                <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-full p-4">
                  <AlertCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-500" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Daily Limit Reached</h1>
                <p className="text-lg text-muted-foreground">
                  You&apos;ve used all your available tool accesses for today.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm text-muted-foreground text-left">
                <div className="flex justify-between">
                  <span>Free account</span>
                  <span className="font-medium text-foreground">25 uses/day</span>
                </div>
                <div className="flex justify-between">
                  <span>Pro subscription</span>
                  <span className="font-medium text-primary">Unlimited</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <Link
                  href="/pricing"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
                >
                  <Zap className="w-4 h-4" />
                  Upgrade to Pro
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center w-full py-3 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium"
                >
                  Return Home
                </Link>
              </div>
            </>
          )}

          <p className="text-xs text-muted-foreground pt-2">
            Usage resets daily at midnight UTC.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
