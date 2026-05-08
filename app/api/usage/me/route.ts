import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const ANON_LIMIT = 10
const FREE_LIMIT = 25

function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d.toISOString()
}

export async function GET(request: NextRequest) {
  try {
    // Read the httpOnly sessionId cookie server-side
    const sessionId = request.cookies.get('sessionId')?.value ?? null

    // Try to get userId from Authorization header (passed by client)
    const authHeader = request.headers.get('x-user-id')
    const userId = authHeader ?? null

    if (!userId && !sessionId) {
      return NextResponse.json({
        usage_count: 0,
        dailyLimit: ANON_LIMIT,
        remainingUses: ANON_LIMIT,
        isAnon: true,
        isPro: false,
      })
    }

    // Check subscription for logged-in users
    let isPro = false
    let planType = 'free'
    if (userId) {
      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('plan_type, status')
        .eq('user_id', userId)
        .single()
      planType = sub?.plan_type ?? 'free'
      isPro =
        (planType === 'pro_monthly' || planType === 'pro_yearly') &&
        sub?.status === 'active'
    }

    if (isPro) {
      return NextResponse.json({
        usage_count: 0,
        dailyLimit: null,
        remainingUses: null,
        isAnon: false,
        isPro: true,
        planType,
      })
    }

    const dailyLimit = userId ? FREE_LIMIT : ANON_LIMIT
    const todayStart = startOfToday()
    const column = userId ? 'user_id' : 'session_id'
    const identifier = userId ?? sessionId

    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact', head: true })
      .eq(column, identifier!)
      .gte('created_at', todayStart)

    const usage_count = count ?? 0

    return NextResponse.json({
      usage_count,
      dailyLimit,
      remainingUses: Math.max(0, dailyLimit - usage_count),
      isAnon: !userId,
      isPro: false,
      planType,
    })
  } catch (error) {
    console.error('[v0] /api/usage/me error:', error)
    return NextResponse.json({
      usage_count: 0,
      dailyLimit: ANON_LIMIT,
      remainingUses: ANON_LIMIT,
      isAnon: true,
      isPro: false,
    })
  }
}
