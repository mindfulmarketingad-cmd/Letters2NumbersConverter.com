'use server'

import { createClient } from '@supabase/supabase-js'
import { headers, cookies } from 'next/headers'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function trackToolUsage(toolSlug: string, userId?: string) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('sessionId')?.value

    // Determine identifier (user_id if logged in, session_id if anonymous)
    const identifier = userId ? { user_id: userId } : { session_id: sessionId }

    // Check if already used this tool in this session
    const { data: existingUsage } = await supabase
      .from('usage_tracking')
      .select('id')
      .eq('tool_id', toolSlug)
      .match(identifier)
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()) // Last 24 hours
      .single()

    if (existingUsage) {
      console.log('[v0] Tool already tracked today:', toolSlug)
      return { success: true, alreadyTracked: true }
    }

    // Insert new usage record
    const { error } = await supabase
      .from('usage_tracking')
      .insert([
        {
          user_id: userId || null,
          session_id: !userId ? sessionId : null,
          tool_id: toolSlug,
          created_at: new Date().toISOString(),
        },
      ])

    if (error) {
      console.error('[v0] Error tracking usage:', error)
      return { success: false, error: error.message }
    }

    return { success: true, alreadyTracked: false }
  } catch (error) {
    console.error('[v0] Track usage error:', error)
    return { success: false, error: String(error) }
  }
}

export async function checkUsageLimit(userId?: string) {
  try {
    const cookieStore = await cookies()
    const sessionId = cookieStore.get('sessionId')?.value

    // Determine limits and identifier
    let limit = 10 // Anonymous limit
    const identifier: Record<string, any> = {}

    if (userId) {
      // Check if user has pro subscription
      const { data: subscription } = await supabase
        .from('user_subscriptions')
        .select('plan_type')
        .eq('user_id', userId)
        .single()

      if (subscription?.plan_type === 'pro_monthly' || subscription?.plan_type === 'pro_yearly') {
        // Pro user: unlimited
        return { allowed: true, remainingUses: Infinity, limit: Infinity }
      }

      // Free registered user: 25 uses
      limit = 25
      identifier.user_id = userId
    } else {
      // Anonymous user: 10 uses
      identifier.session_id = sessionId
    }

    // Count usages in the last 24 hours
    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact', head: true })
      .match(identifier)
      .gte('created_at', new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())

    const usageCount = count || 0
    const remainingUses = Math.max(0, limit - usageCount)

    return {
      allowed: usageCount < limit,
      usageCount,
      remainingUses,
      limit,
    }
  } catch (error) {
    console.error('[v0] Check usage limit error:', error)
    // Fail open: allow if there's an error
    return { allowed: true, remainingUses: -1, limit: -1, error: String(error) }
  }
}
