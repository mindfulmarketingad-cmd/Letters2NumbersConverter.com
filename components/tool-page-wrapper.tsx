'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { trackToolUsage, checkUsageLimit } from '@/lib/server-usage-tracker'
import { useAuth } from '@/lib/auth-context'

interface ToolPageProps {
  children: React.ReactNode
  toolSlug: string
}

export function ToolPageWrapper({ children, toolSlug }: ToolPageProps) {
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    const trackUsage = async () => {
      try {
        // Check usage limit first
        const limitCheck = await checkUsageLimit(user?.id)

        if (!limitCheck.allowed) {
          // Redirect to upgrade if limit reached
          router.push('/upgrade')
          return
        }

        // Track this tool usage
        await trackToolUsage(toolSlug, user?.id)
      } catch (error) {
        console.error('[v0] Failed to track usage:', error)
        // Continue loading the page even if tracking fails
      }
    }

    trackUsage()
  }, [toolSlug, user?.id, router])

  return <>{children}</>
}
