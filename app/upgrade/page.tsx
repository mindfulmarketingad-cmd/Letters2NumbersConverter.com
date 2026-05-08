import { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Usage Limit Reached | Letters2NumbersConverter.com',
  description: 'Upgrade to Pro to unlock unlimited tool access.',
}

export default function UpgradePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-md text-center space-y-6">
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

          <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm text-muted-foreground">
            <p>
              <strong>Free Account:</strong> 25 tool uses per day
            </p>
            <p>
              <strong>Pro Subscription:</strong> Unlimited daily access
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
            >
              Upgrade to Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center w-full py-3 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium"
            >
              Return Home
            </Link>
          </div>

          <p className="text-xs text-muted-foreground pt-4">
            Your usage resets daily at midnight UTC.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
