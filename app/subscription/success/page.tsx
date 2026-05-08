import { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Subscription Successful | Letters2NumbersConverter.com',
  description: 'Your subscription has been successfully activated.',
}

export default function SubscriptionSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-lg shadow-lg p-8 space-y-6 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Thank You!
              </h1>
              <p className="text-muted-foreground">
                Your subscription has been successfully activated. You now have unlimited access to all tools.
              </p>
            </div>

            <Link
              href="/tools"
              className="block py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors"
            >
              Go to Tools
            </Link>

            <Link
              href="/dashboard"
              className="block py-2 border border-border hover:bg-secondary rounded-lg transition-colors text-foreground font-medium"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
