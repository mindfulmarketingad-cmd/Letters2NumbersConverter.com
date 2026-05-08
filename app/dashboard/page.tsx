import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DashboardContent } from '@/components/dashboard-content'

export const metadata: Metadata = {
  title: 'Dashboard | Letters2NumbersConverter.com',
  description: 'Manage your account, usage, and subscription.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <DashboardContent />
      </main>
      <SiteFooter />
    </div>
  )
}
