import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { planType, userId, email } = await request.json()

    if (!planType || !userId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate plan type
    if (!['pro_monthly', 'pro_yearly'].includes(planType)) {
      return NextResponse.json(
        { error: 'Invalid plan type' },
        { status: 400 }
      )
    }

    // Get or create Stripe customer
    let customer = await stripe.customers.search({
      query: `email:"${email}"`,
    })

    let customerId: string
    if (customer.data.length > 0) {
      customerId = customer.data[0].id
    } else {
      const newCustomer = await stripe.customers.create({
        email,
        metadata: { userId },
      })
      customerId = newCustomer.id
    }

    // Store customer ID in database
    await supabase
      .from('user_subscriptions')
      .upsert({
        user_id: userId,
        stripe_customer_id: customerId,
        plan_type: 'free',
      })

    // Create checkout session
    const priceId = planType === 'pro_monthly'
      ? process.env.NEXT_PUBLIC_STRIPE_PRICE_MONTHLY!
      : process.env.NEXT_PUBLIC_STRIPE_PRICE_YEARLY!

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: {
        userId,
        planType,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
