import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { userId, sessionId } = await request.json()

    if (!userId && !sessionId) {
      return NextResponse.json(
        { error: 'Missing userId or sessionId' },
        { status: 400 }
      )
    }

    // Get or create session
    const identifier = userId || sessionId
    const isAnonymous = !userId

    // Check current usage
    const { data: usage, error: usageError } = await supabase
      .from('usage_tracking')
      .select('*')
      .eq(isAnonymous ? 'session_id' : 'user_id', identifier)
      .single()

    if (usageError && usageError.code !== 'PGRST116') {
      console.error('Usage lookup error:', usageError)
      return NextResponse.json(
        { error: 'Failed to check usage' },
        { status: 500 }
      )
    }

    // Get user subscription if logged in
    let subscription = null
    if (userId) {
      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', userId)
        .single()
      subscription = sub
    }

    // Determine usage limits based on user status
    const isPaid = subscription?.plan_type === 'pro_monthly' || subscription?.plan_type === 'pro_yearly'
    let limit: number
    
    if (isPaid && subscription?.status === 'active') {
      limit = Infinity
    } else if (userId) {
      // Logged-in users get 25 uses
      limit = 25
    } else {
      // Anonymous users get 10 uses
      limit = 10
    }
    
    const currentUsage = usage?.usage_count || 0

    // Check if limit exceeded
    if (currentUsage >= limit) {
      return NextResponse.json({
        allowed: false,
        message: 'Usage limit exceeded',
        currentUsage,
        limit,
        canUpgrade: !isPaid,
      })
    }

    // Increment usage
    if (usage) {
      await supabase
        .from('usage_tracking')
        .update({ usage_count: currentUsage + 1, last_used: new Date().toISOString() })
        .eq(isAnonymous ? 'session_id' : 'user_id', identifier)
    } else {
      await supabase
        .from('usage_tracking')
        .insert({
          user_id: userId || null,
          session_id: sessionId || null,
          usage_count: 1,
          is_registered: !!userId,
        })
    }

    return NextResponse.json({
      allowed: true,
      currentUsage: currentUsage + 1,
      limit,
      remainingUsage: limit - (currentUsage + 1),
    })
  } catch (error) {
    console.error('Usage tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track usage' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId')
    const sessionId = searchParams.get('sessionId')

    if (!userId && !sessionId) {
      return NextResponse.json(
        { error: 'Missing userId or sessionId' },
        { status: 400 }
      )
    }

    const identifier = userId || sessionId
    const isAnonymous = !userId

    const { data: usage } = await supabase
      .from('usage_tracking')
      .select('*')
      .eq(isAnonymous ? 'session_id' : 'user_id', identifier)
      .single()

    let subscription = null
    if (userId) {
      const { data: sub } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', userId)
        .single()
      subscription = sub
    }

    // Determine usage limits based on user status
    const isPaid = subscription?.plan_type === 'pro_monthly' || subscription?.plan_type === 'pro_yearly'
    let limit: number
    
    if (isPaid && subscription?.status === 'active') {
      limit = Infinity
    } else if (userId) {
      // Logged-in users get 25 uses
      limit = 25
    } else {
      // Anonymous users get 10 uses
      limit = 10
    }
    
    const currentUsage = usage?.usage_count || 0

    return NextResponse.json({
      currentUsage,
      limit,
      remainingUsage: Math.max(0, limit - currentUsage),
      isPaid,
      isRegistered: usage?.is_registered || false,
    })
  } catch (error) {
    console.error('Usage check error:', error)
    return NextResponse.json(
      { error: 'Failed to check usage' },
      { status: 500 }
    )
  }
}
