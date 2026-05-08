import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Usage Limit Reached | Letters2NumbersConverter.com',
  description: 'Upgrade to Pro or sign in to unlock more daily tool access.',
}

export default function UpgradeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
