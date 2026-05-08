import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const USAGE_LIMITS = {
  ANONYMOUS: 10,
  FREE_ACCOUNT: 25,
  PAID: Infinity,
}

// Get remaining uses for a user or session
export async function getRemainingUses(
  userId?: string,
  sessionId?: string
): Promise<number> {
  if (!userId && !sessionId) {
    return USAGE_LIMITS.ANONYMOUS
  }

  let usageCount = 0
  let limit = USAGE_LIMITS.ANONYMOUS

  // If user exists, check their subscription and usage
  if (userId) {
    // Get user subscription
    const { data: subscription } = await supabase
      .from('user_subscriptions')
      .select('plan_type, status')
      .eq('user_id', userId)
      .single()

    // Paid users have unlimited uses
    if (subscription?.plan_type === 'pro_monthly' || subscription?.plan_type === 'pro_yearly') {
      if (subscription.status === 'active') {
        return USAGE_LIMITS.PAID
      }
    }

    limit = USAGE_LIMITS.FREE_ACCOUNT

    // Get usage count for this user
    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact' })
      .eq('user_id', userId)

    usageCount = count || 0
  } else if (sessionId) {
    // Get usage count for anonymous session
    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact' })
      .eq('session_id', sessionId)

    usageCount = count || 0
  }

  return Math.max(0, limit - usageCount)
}

// Record a tool usage
export async function recordToolUsage(
  toolId: string,
  userId?: string,
  sessionId?: string
): Promise<boolean> {
  if (!userId && !sessionId) return false

  const { error } = await supabase
    .from('usage_tracking')
    .insert({
      tool_id: toolId,
      user_id: userId || null,
      session_id: sessionId || null,
    })

  return !error
}

// Check if user can use a tool
export async function canUseTool(
  toolId: string,
  userId?: string,
  sessionId?: string
): Promise<boolean> {
  const remaining = await getRemainingUses(userId, sessionId)
  return remaining > 0
}

// Get user subscription status
export async function getUserSubscription(userId: string) {
  const { data, error } = await supabase
    .from('user_subscriptions')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error) return null
  return data
}

// Create or update subscription
export async function createSubscription(
  userId: string,
  stripeCustomerId: string,
  stripeSubscriptionId: string,
  planType: 'pro_monthly' | 'pro_yearly'
) {
  const { data, error } = await supabase
    .from('user_subscriptions')
    .upsert({
      user_id: userId,
      stripe_customer_id: stripeCustomerId,
      stripe_subscription_id: stripeSubscriptionId,
      plan_type: planType,
      status: 'active',
    })
    .select()

  if (error) throw error
  return data
}

// Update subscription status
export async function updateSubscriptionStatus(
  stripeCustomerId: string,
  status: string,
  planType?: string
) {
  const updateData: any = { status, updated_at: new Date().toISOString() }
  if (planType) updateData.plan_type = planType

  const { data, error } = await supabase
    .from('user_subscriptions')
    .update(updateData)
    .eq('stripe_customer_id', stripeCustomerId)
    .select()

  if (error) throw error
  return data
}

// Get usage stats for a user
export async function getUserUsageStats(userId: string) {
  const { data, error, count } = await supabase
    .from('usage_tracking')
    .select('tool_id, created_at', { count: 'exact' })
    .eq('user_id', userId)

  if (error) return null

  return {
    totalUses: count || 0,
    tools: data?.reduce((acc: any, item: any) => {
      acc[item.tool_id] = (acc[item.tool_id] || 0) + 1
      return acc
    }, {}),
  }
}

// Get or create session ID
export function getOrCreateSessionId(): string {
  if (typeof window === 'undefined') return ''

  const key = 'l2n_session_id'
  let sessionId = localStorage.getItem(key)

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem(key, sessionId)
  }

  return sessionId
}
