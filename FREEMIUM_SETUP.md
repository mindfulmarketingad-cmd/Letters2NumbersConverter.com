# Freemium Subscription System Setup

## CRITICAL: Database Setup (MUST DO FIRST)

Your deployment is failing because the database tables don't exist. Follow these steps:

### Step 1: Create Tables in Supabase

1. Go to your Supabase project at https://supabase.com/dashboard
2. Click "SQL Editor" in the left sidebar
3. Click "New Query"
4. Copy and paste ALL the SQL from `lib/setup-database.sql`
5. Click the play button to execute

This creates the `usage_tracking` and `user_subscriptions` tables with proper indexes and security policies.

## Stripe Setup (CRITICAL - Check Your Config!)

Your Stripe environment variables are INCORRECT. They contain product IDs instead of price IDs.

### Current Problem:
- `NEXT_PUBLIC_STRIPE_PRICE_YEARLY` = `prod_UTriZWQWugZnKA` ❌ (This is a PRODUCT ID)
- Should be a price ID like `price_1ABC123XYZ`

### Step 1: Get Correct Price IDs from Stripe

1. Log in to [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Products** in the left sidebar
3. Find or create your two products:
   - **Pro Monthly** - $4.99/month
   - **Pro Annual** - $39/year

4. For each product, click it and scroll to **Pricing**
5. Copy the **Price ID** (starts with `price_` not `prod_`)

Example:
- Monthly Price ID: `price_1ABC123def456`
- Yearly Price ID: `price_1XYZ789ghi012`

### Step 2: Update Environment Variables

Update your environment variables with the CORRECT price IDs:
- `NEXT_PUBLIC_STRIPE_PRICE_MONTHLY` = `price_...` (monthly)
- `NEXT_PUBLIC_STRIPE_PRICE_YEARLY` = `price_...` (yearly)

## Environment Variables (All Required)

These must be set in your project:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PRICE_MONTHLY=price_1ABC123...
NEXT_PUBLIC_STRIPE_PRICE_YEARLY=price_1XYZ789...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=https://yourdomain.com
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

## Step 3: Set Up Stripe Webhook

1. Go to Stripe Dashboard > **Developers** > **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://yourdomain.com/api/stripe/webhook`
4. Select events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add events** and **Create endpoint**
6. Copy the signing secret and add it to `STRIPE_WEBHOOK_SECRET`

## Troubleshooting

### Database Tables 404 Errors
- ❌ You haven't run the SQL setup script
- ✅ Go to Supabase > SQL Editor and run `lib/setup-database.sql`

### "No such price" Error
- ❌ Your environment variables have product IDs (prod_*) not price IDs (price_*)
- ✅ Get the correct price IDs from Stripe and update your env vars

### "window.Stripe is not a function"
- ✅ This is now fixed - Stripe.js loads in the layout

## Verification Checklist

After setup, verify everything works:

- [ ] Database tables created (check Supabase Table Editor)
- [ ] Correct Stripe price IDs in environment variables
- [ ] Stripe webhook configured and secret saved
- [ ] Can access `/pricing` page without errors
- [ ] Can create account and see "25 uses" limit
- [ ] Can subscribe to Pro plan and redirect to Stripe checkout
