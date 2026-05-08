import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { SignInForm } from '@/components/sign-in-form'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Sign In | Letters2NumbersConverter.com',
  description: 'Sign in to your account to get 25 free tool uses and access premium features.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <SignInForm />
      </main>
      <SiteFooter />
    </div>
  )
}
