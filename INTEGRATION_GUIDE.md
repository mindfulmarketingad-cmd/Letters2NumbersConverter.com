# Integration Guide: Adding Usage Tracking to Tools

## Quick Start

To add usage tracking to any tool component, follow these steps:

### 1. Wrap Your Tool with Usage Tracking Hook

In your tool component, use the `useUsageTracking` hook from `@/lib/subscription-utils`:

```typescript
import { useUsageTracking } from '@/lib/subscription-utils'

export function MyTool() {
  const { checkUsage, trackUsage } = useUsageTracking()
  
  const handleConvert = async () => {
    // Check if user can use the tool
    const canUse = await checkUsage()
    if (!canUse) {
      // Show upgrade modal or redirect to pricing
      return
    }
    
    // Do conversion...
    
    // Track the usage after successful operation
    await trackUsage()
  }
  
  return (
    // Your tool UI
  )
}
```

### 2. Import useUsageTracking

The hook is available in `lib/subscription-utils.ts` and handles:
- Getting current usage from API
- Checking if user can use tool
- Tracking usage after operation
- Triggering upgrade modal when limit reached

### 3. Show Usage Tracker

Add the UsageTracker component to your tool page or layout:

```typescript
import { UsageTracker } from '@/components/usage-tracker'

export default function ToolPage() {
  return (
    <>
      <UsageTracker />
      {/* Your tool component */}
    </>
  )
}
```

## Usage Limits

- **Anonymous Users**: 10 free uses total
- **Registered Users (Free Account)**: 25 free uses total
- **Paid Subscribers**: Unlimited uses

## How It Works

1. **First Visit**: User gets anonymous session, 10 free uses
2. **Sign Up**: User creates account, gets 25 free uses
3. **Subscribe**: User subscribes, gets unlimited uses
4. **Tracking**: Each tool use increments the counter

## Files to Modify

### For Each Tool Component:

```typescript
'use client'

import { useUsageTracking } from '@/lib/subscription-utils'
import { UpgradeModal } from '@/components/upgrade-modal'
import { useState } from 'react'

export function MyTool() {
  const { checkUsage, trackUsage } = useUsageTracking()
  const [showUpgrade, setShowUpgrade] = useState(false)
  
  const handleAction = async () => {
    const canUse = await checkUsage()
    if (!canUse) {
      setShowUpgrade(true)
      return
    }
    
    // Do work...
    
    await trackUsage()
  }
  
  return (
    <>
      {/* Your UI */}
      <UpgradeModal isOpen={showUpgrade} onClose={() => setShowUpgrade(false)} />
    </>
  )
}
```

## Database Schema

The system uses two tables:

- `usage_tracking`: Tracks tool usage per user/session
- `user_subscriptions`: Stores subscription and plan information

See `FREEMIUM_SETUP.md` for SQL schema details.

## API Endpoints

- `POST /api/usage/track` - Increment and check usage
- `GET /api/usage/track` - Get current usage stats
- `GET /api/subscription/status` - Get user subscription status
- `POST /api/stripe/checkout` - Create checkout session
- `POST /api/stripe/webhook` - Handle Stripe events
