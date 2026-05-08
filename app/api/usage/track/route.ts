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

// POST — record a tool visit and check if the user is within their limit
export async function POST(request: NextRequest) {
  try {
    const { toolSlug, userId } = await request.json()

    if (!toolSlug) {
      return NextResponse.json({ error: 'Missing toolSlug' }, { status: 400 })
    }

    // Resolve session cookie for anonymous users
    const sessionId = request.cookies.get('sessionId')?.value ?? null

    if (!userId && !sessionId) {
      // No identity at all — allow but don't track
      return NextResponse.json({ allowed: true })
    }

    // Get subscription for logged-in users
    let isPro = false
    if (userId) {
      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('plan_type, status')
        .eq('user_id', userId)
        .single()
      isPro =
        (sub?.plan_type === 'pro_monthly' || sub?.plan_type === 'pro_yearly') &&
        sub?.status === 'active'
    }

    // Pro users — unlimited, just insert the row and return
    if (isPro) {
      await supabase.from('usage_tracking').insert({
        user_id: userId,
        session_id: sessionId,
        tool_id: toolSlug,
      })
      return NextResponse.json({ allowed: true })
    }

    // Count today's unique tool visits
    const todayStart = startOfToday()
    const column = userId ? 'user_id' : 'session_id'
    const identifier = userId ?? sessionId

    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact', head: true })
      .eq(column, identifier)
      .gte('created_at', todayStart)

    const todayCount = count ?? 0
    const limit = userId ? FREE_LIMIT : ANON_LIMIT

    if (todayCount >= limit) {
      return NextResponse.json({
        allowed: false,
        usage_count: todayCount,
        dailyLimit: limit,
        remainingUses: 0,
      })
    }

    // Insert the new visit row
    await supabase.from('usage_tracking').insert({
      user_id: userId ?? null,
      session_id: sessionId ?? null,
      tool_id: toolSlug,
    })

    return NextResponse.json({
      allowed: true,
      usage_count: todayCount + 1,
      dailyLimit: limit,
      remainingUses: limit - (todayCount + 1),
    })
  } catch (error) {
    console.error('Usage tracking error:', error)
    // Fail open — never block a user from using the tool
    return NextResponse.json({ allowed: true })
  }
}

// GET — return today's usage stats for the dashboard
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')
    const sessionId =
      searchParams.get('sessionId') ?? request.cookies.get('sessionId')?.value ?? null

    if (!userId && !sessionId) {
      return NextResponse.json({ usage_count: 0, dailyLimit: ANON_LIMIT, remainingUses: ANON_LIMIT })
    }

    // Get subscription
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

    const dailyLimit = isPro ? Infinity : userId ? FREE_LIMIT : ANON_LIMIT
    const todayStart = startOfToday()
    const column = userId ? 'user_id' : 'session_id'
    const identifier = userId ?? sessionId

    const { count } = await supabase
      .from('usage_tracking')
      .select('*', { count: 'exact', head: true })
      .eq(column, identifier)
      .gte('created_at', todayStart)

    const usage_count = count ?? 0

    return NextResponse.json({
      usage_count,
      dailyLimit,
      remainingUses: isPro ? Infinity : Math.max(0, dailyLimit - usage_count),
      isPro,
      planType,
    })
  } catch (error) {
    console.error('Usage GET error:', error)
    return NextResponse.json({ usage_count: 0, dailyLimit: FREE_LIMIT, remainingUses: FREE_LIMIT })
  }
}
