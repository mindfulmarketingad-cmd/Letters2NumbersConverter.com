# Usage Tracking Implementation Guide

## Overview

All tools on your site need to track user tool usage to enforce the daily limits:
- **Anonymous users**: 10 uses/day
- **Logged-in users**: 25 uses/day
- **Paid subscribers**: Unlimited uses

## What Counts as a "Use"?

A **"use"** is counted when the user **performs the primary action that generates output**:

## What Counts as a "Use"?

A **"use"** is counted when the user **performs the primary action that generates output**:

- **Converters with Button** (CM to Pixels) → Count when user clicks "Convert" button
- **Instant Output Tools** (A0Z25 Translator, Anagram Solver) → Count after user stops typing for 2 seconds (debounced)
- **Generators** (Placeholder Image Creator) → Count when output is generated
- **Real-time tools** → Count on the final action/submission

## Implementation Steps: Button-Based Tools

For tools with a "Convert" or "Calculate" button:

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

### 3. Call trackUsage() on Button Click

```tsx
const handleConvert = async () => {
  // Call trackUsage() when user clicks the button
  const result = await trackUsage()
  
  if (!result.allowed) {
    // Modal shows automatically when limit exceeded
    return
  }
  
  // Perform the conversion
  doConversion()
}
```

## Implementation Steps: Instant Output Tools

For tools that produce output automatically (on every keystroke/input change):

### 1. Import the Instant Hook

```tsx
import { useInstantTrackUsage } from '@/lib/use-instant-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'
```

### 2. Initialize Usage Tracking

```tsx
export function YourInstantTool() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  
  // Debounced tracking: tracks usage 2 seconds after user stops typing
  const { scheduleTracking, resetTracking, showUpgradeModal, setShowUpgradeModal, remainingUses } = useInstantTrackUsage('Tool Name', 2000)
```

### 3. Schedule Tracking on Input Change

```tsx
useEffect(() => {
  if (input.trim()) {
    scheduleTracking() // Schedules tracking after 2-second delay
  } else {
    resetTracking() // Reset if input is cleared
  }
}, [input, scheduleTracking, resetTracking])
```

## Complete Examples

### Example 1: Button-Based Tool (CM to Pixels Converter)

```tsx
'use client'

import { useState } from 'react'
import { useTrackUsage } from '@/lib/use-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'

export function CMToPixelsConverter() {
  const [cm, setCm] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const { trackUsage, showUpgradeModal, setShowUpgradeModal, remainingUses } = useTrackUsage('CM To Pixels Converter')

  const handleConvert = async () => {
    if (!cm || isNaN(Number(cm))) return

    // Track the usage
    const { allowed } = await trackUsage()
    
    if (!allowed) return // Modal shows automatically

    // Perform conversion
    const pixels = (parseFloat(cm) * 96) / 2.54
    setResult(Math.round(pixels * 100) / 100)
  }

  return (
    <div className="space-y-4">
      <input type="number" value={cm} onChange={e => setCm(e.target.value)} />
      <button onClick={handleConvert}>Convert to Pixels</button>
      {result && <p>Result: {result}px</p>}
      
      {remainingUses !== null && remainingUses > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Remaining uses today: <span className="font-bold">{remainingUses}</span>
          </p>
        </div>
      )}
      
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  )
}
```

### Example 2: Instant Output Tool (A0Z25 Translator)

```tsx
'use client'

import { useState, useEffect, useMemo } from 'react'
import { useInstantTrackUsage } from '@/lib/use-instant-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'

export function A0Z25Translator() {
  const [input, setInput] = useState('')
  const { scheduleTracking, resetTracking, showUpgradeModal, setShowUpgradeModal, remainingUses } = useInstantTrackUsage('A0Z25 Translator')

  // Track usage after 2 seconds of inactivity
  useEffect(() => {
    if (input.trim()) {
      scheduleTracking() // Called on every input change, but only tracks after 2-second delay
    } else {
      resetTracking()
    }
  }, [input, scheduleTracking, resetTracking])

  const output = useMemo(() => {
    // Instant conversion logic here
    return performConversion(input)
  }, [input])

  return (
    <div className="space-y-4">
      <textarea value={input} onChange={e => setInput(e.target.value)} />
      <textarea readOnly value={output} />
      
      {remainingUses !== null && remainingUses > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Remaining uses today: <span className="font-bold">{remainingUses}</span>
          </p>
        </div>
      )}
      
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  )
}
```
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

