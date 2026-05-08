'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

interface ToolPageProps {
  children: React.ReactNode
  toolSlug: string
}

export function ToolPageWrapper({ children, toolSlug }: ToolPageProps) {
  const router = useRouter()
  const { user, loading } = useAuth()
  const tracked = useRef(false)

  useEffect(() => {
    // Wait until auth is resolved and only track once per mount
    if (loading) return
    if (tracked.current) return
    tracked.current = true

    const trackUsage = async () => {
      try {
        const res = await fetch('/api/usage/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            toolSlug,
            userId: user?.id ?? null,
          }),
        })

        const data = await res.json()

        if (!data.allowed) {
          router.push('/upgrade')
        }
      } catch (error) {
        // Silently fail — never block the tool page from loading
      }
    }

    trackUsage()
  }, [loading, toolSlug, user?.id, router])

  return <>{children}</>
}
