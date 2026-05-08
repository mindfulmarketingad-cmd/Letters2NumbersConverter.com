# Database Setup Instructions for Freemium System

## Required Tables

Run the following SQL in your Supabase SQL Editor to set up the required tables:

```sql
-- Usage Tracking Table
CREATE TABLE usage_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  session_id UUID,
  usage_count INT DEFAULT 0,
  is_registered BOOLEAN DEFAULT false,
  last_used TIMESTAMP DEFAULT now(),
  created_at TIMESTAMP DEFAULT now(),
  UNIQUE(user_id),
  UNIQUE(session_id)
);

-- User Subscriptions Table
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_type TEXT DEFAULT 'free' CHECK(plan_type IN ('free', 'pro')),
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'cancelled', 'past_due')),
  current_period_start TIMESTAMP,
  current_period_end TIMESTAMP,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE usage_tracking ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for usage_tracking
CREATE POLICY "Users can view their own usage" ON usage_tracking
  FOR SELECT USING (
    auth.uid() = user_id OR (user_id IS NULL AND session_id IS NOT NULL)
  );

-- RLS Policies for user_subscriptions
CREATE POLICY "Users can view their own subscription" ON user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Allow service role for API operations
CREATE POLICY "Service role can manage subscriptions" ON user_subscriptions
  FOR ALL USING (auth.role() = 'service_role');
```

## Environment Variables

Make sure you have added the following environment variables:
- `STRIPE_SECRET_KEY` - Your Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- `NEXT_PUBLIC_STRIPE_PRICE_MONTHLY` - Stripe price ID for monthly plan
- `NEXT_PUBLIC_STRIPE_PRICE_YEARLY` - Stripe price ID for yearly plan
- `STRIPE_WEBHOOK_SECRET` - Your Stripe webhook secret
- `NEXT_PUBLIC_APP_URL` - Your app URL (e.g., https://yourdomain.com)
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key

## Stripe Setup

1. Create two products in Stripe:
   - Monthly plan: $4.99/month
   - Yearly plan: $39/year

2. Copy the price IDs and add them to your environment variables

3. Set up a webhook endpoint in Stripe:
   - Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
   - Events to listen for:
     - `customer.subscription.created`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`

4. Copy the webhook signing secret to `STRIPE_WEBHOOK_SECRET`
