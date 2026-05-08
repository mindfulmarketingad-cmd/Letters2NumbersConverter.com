# Usage Tracking Implementation Guide

## Overview

Each tool should track usage when the user performs the **primary conversion/action** of that tool. This is done by calling the `useTrackUsage` hook.

## Usage Definition by Tool Type

| Tool Type | When to Track | Action |
|-----------|---------------|--------|
| **Converter** | User clicks "Convert" button | Track on button click |
| **Generator** | User generates output | Track when output is created |
| **Real-time Tool** | User completes input | Track on final input change |

### Examples:
- **CM To Pixels Converter** → Track when user clicks "Convert to Pixels"
- **Placeholder Image Creator** → Track when user first generates an image (on mount or after first input)
- **Letters to Numbers Converter** → Track when user submits/converts

## Implementation Steps

### Step 1: Import the Hook

```tsx
'use client'

import { useTrackUsage } from '@/lib/use-track-usage'

export function MyTool() {
  const { trackUsage, remainingUses, isLimitExceeded } = useTrackUsage('My Tool Name')
```

### Step 2: Call trackUsage on Primary Action

```tsx
const handleConvert = async () => {
  // Check if user has uses remaining
  const { allowed, message } = await trackUsage()
  
  if (!allowed) {
    // Show upgrade modal or error message
    alert(message)
    return
  }

  // Perform the conversion/tool action
  doConversion()
}
```

### Step 3: Show Remaining Uses (Optional)

```tsx
return (
  <div>
    {remainingUses !== null && (
      <p className="text-sm text-muted-foreground">
        Uses remaining today: {remainingUses}
      </p>
    )}
    {/* Rest of tool UI */}
  </div>
)
```

## Full Example: CM To Pixels Converter

```tsx
'use client'

import { useState } from 'react'
import { useTrackUsage } from '@/lib/use-track-usage'

export function CMToPixelsConverter() {
  const [cm, setCm] = useState('')
  const [result, setResult] = useState<number | null>(null)
  
  const { trackUsage, remainingUses, isLimitExceeded } = useTrackUsage('CM To Pixels Converter')

  const handleConvert = async () => {
    if (!cm || isNaN(Number(cm))) return

    // Track the usage
    const { allowed, message } = await trackUsage()
    
    if (!allowed) {
      alert(message)
      return
    }

    // Do the conversion
    const pixels = (parseFloat(cm) * 96) / 2.54
    setResult(Math.round(pixels * 100) / 100)
  }

  return (
    <div className="space-y-4">
      {remainingUses !== null && (
        <p className="text-sm text-muted-foreground">
          Remaining uses: {remainingUses}
        </p>
      )}
      
      <input
        type="number"
        value={cm}
        onChange={e => setCm(e.target.value)}
        placeholder="Enter cm..."
      />
      
      <button
        onClick={handleConvert}
        disabled={isLimitExceeded}
        className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
      >
        {isLimitExceeded ? 'Limit Exceeded' : 'Convert to Pixels'}
      </button>

      {result && <p>Result: {result}px</p>}
    </div>
  )
}
```

## Limits

- **Anonymous Users**: 10 uses per day
- **Logged-in Users**: 25 uses per day
- **Paid Subscribers**: Unlimited uses

## Notes

- The `trackUsage()` function is debounced and cached internally
- If tracking fails, the tool still works (fail-open policy)
- Usage resets daily at midnight UTC
- Each tool needs to implement tracking independently
