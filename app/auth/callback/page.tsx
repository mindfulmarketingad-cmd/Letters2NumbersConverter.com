'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function AuthCallbackPage() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Supabase JS v2 automatically exchanges the OAuth code or reads the hash
    // fragment when getSession() is called in the browser.
    supabase.auth.getSession().then(({ data: { session }, error: sessionError }) => {
      if (sessionError) {
        setError(sessionError.message)
        return
      }
      if (session) {
        router.replace('/dashboard')
      } else {
        // Code may still be processing — wait for onAuthStateChange
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, s) => {
          if (s) {
            subscription.unsubscribe()
            router.replace('/dashboard')
          }
        })
        // Fallback: redirect to sign-in after 5 seconds if nothing happens
        const timeout = setTimeout(() => {
          subscription.unsubscribe()
          setError('Authentication timed out. Please try again.')
        }, 5000)
        return () => { clearTimeout(timeout); subscription.unsubscribe() }
      }
    })
  }, [router])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          {error ? (
            <>
              <p className="text-destructive font-medium">{error}</p>
              <a href="/sign-in" className="text-primary hover:underline text-sm">
                Back to sign in
              </a>
            </>
          ) : (
            <>
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-muted-foreground">Finishing sign-in...</p>
            </>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
