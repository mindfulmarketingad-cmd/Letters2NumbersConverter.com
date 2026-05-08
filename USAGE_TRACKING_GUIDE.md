# Usage Tracking Implementation Guide

## Overview

All tools on your site need to track user tool usage to enforce the daily limits:
- **Anonymous users**: 10 uses/day
- **Logged-in users**: 25 uses/day
- **Paid subscribers**: Unlimited uses

## What Counts as a "Use"?

A **"use"** is counted when the user **performs the primary action that generates output**:

- **Converters** (CM to Pixels, Letters to Numbers, etc.) → Count when user triggers the conversion
- **Generators** (Placeholder Image Creator) → Count when the output is generated
- **Solvers** (Anagram, Equation, etc.) → Count when user solves/calculates
- **Real-time tools** → Count on the final action/submission

## Implementation Steps

### 1. Import the Hook

```tsx
import { useTrackUsage } from '@/lib/use-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'
```

### 2. Initialize Usage Tracking in Component

```tsx
export function YourToolComponent() {
  // ... other state declarations
  const { trackUsage, showUpgradeModal, setShowUpgradeModal, remainingUses } = useTrackUsage('Tool Display Name')
  
  // Rest of component
}
```

### 3. Call trackUsage() on Primary Action

```tsx
const handleConvert = async () => {
  // Call trackUsage() when user performs the main action
  const result = await trackUsage()
  
  if (!result.allowed) {
    // Don't perform the action if limit exceeded
    return
  }
  
  // Perform your conversion/generation logic
  const output = performConversion(input)
  setResult(output)
}
```

### 4. Display Remaining Uses (Optional)

```tsx
{remainingUses !== null && remainingUses > 0 && (
  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
    <p className="text-sm text-blue-800 dark:text-blue-200">
      Remaining uses today: <span className="font-bold">{remainingUses}</span>
    </p>
  </div>
)}
```

### 5. Add Upgrade Modal

```tsx
{/* At the end of your component's return statement */}
<UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
```

## Complete Example

Here's the pattern used in CM To Pixels Converter and Placeholder Image Creator:

```tsx
'use client'

import { useState } from 'react'
import { useTrackUsage } from '@/lib/use-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'

export function YourToolComponent() {
  const [result, setResult] = useState(null)
  const { trackUsage, showUpgradeModal, setShowUpgradeModal, remainingUses } = useTrackUsage('Your Tool Name')

  const handleAction = async () => {
    // Track the usage
    const { allowed } = await trackUsage()
    
    // If limit exceeded, modal will show automatically
    if (!allowed) return

    // Perform your tool's primary action
    const output = doSomething()
    setResult(output)
  }

  return (
    <div className="space-y-8">
      {/* Your tool UI */}
      <button onClick={handleAction}>Perform Action</button>

      {/* Show remaining uses */}
      {remainingUses !== null && remainingUses > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Remaining uses today: <span className="font-bold">{remainingUses}</span>
          </p>
        </div>
      )}

      {/* Upgrade modal appears when limit exceeded */}
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  )
}
```

## How It Works

1. **useTrackUsage()** hook handles all tracking logic
2. Calls `/api/usage/track` POST endpoint to track usage
3. Returns:
   - `allowed`: Whether user can perform the action
   - `remainingUses`: How many uses left today
   - `showUpgradeModal`: Whether to show upgrade prompt
4. **UpgradeModal** automatically displays when limit exceeded
5. Uses either user ID (if logged in) or session ID (if anonymous)

## Key Files

- `/lib/use-track-usage.ts` - Main hook for tracking
- `/lib/use-session-id.ts` - Session ID management for anonymous users
- `/api/usage/track/route.ts` - Backend endpoint
- `/components/upgrade-modal.tsx` - Modal shown when limit reached

## Database

Uses two Supabase tables:
- `usage_tracking` - Records each tool use
- `user_subscriptions` - Tracks subscription status for paid limits

Run `lib/setup-database.sql` in Supabase SQL editor if tables don't exist.

## Testing

### Test Anonymous User (10 uses)
1. Clear localStorage or use incognito browser
2. Use any tool 10 times
3. Should see upgrade modal on 11th use

### Test Logged-in User (25 uses)
1. Sign up / sign in
2. Use any tool 25 times
3. Should see upgrade modal on 26th use

### Test Paid User (Unlimited)
1. Create a paid subscription in Supabase
2. Use any tool unlimited times
3. No limit reached message

## Tools Already Updated with Tracking

- ✅ CM To Pixels Converter
- ✅ Placeholder Image Creator

## Future Tools

**All new tools created after this should automatically include:**
1. Import `useTrackUsage` hook
2. Call `trackUsage()` on primary action
3. Display remaining uses
4. Include `UpgradeModal` component

