# Server-Side Usage Tracking Implementation Guide

## Overview

Usage is now tracked **on tool page load** using server-side middleware and actions, not on button clicks or form submissions. Each tool page load counts as 1 usage.

**Limits:**
- Anonymous users: 10 tool page loads per 24 hours
- Registered free users: 25 tool page loads per 24 hours  
- Pro subscribers: Unlimited (no tracking)

## How It Works

1. **Middleware** (`middleware.ts`) intercepts all `/tools/*` requests
2. Creates/retrieves session ID for anonymous users (stored in httpOnly cookie)
3. Page component wraps content with `ToolPageWrapper`
4. On load, wrapper calls server actions to:
   - Check if user is within daily limit
   - If over limit: redirect to `/upgrade`
   - If under limit: record usage and load page normally

## Implementation: Add to Tool Pages

### Step 1: Import Wrapper Component

In your tool page (`app/tools/[tool-name]/page.tsx`):

```tsx
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
```

### Step 2: Wrap Page Content

```tsx
export default function ToolPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <ToolPageWrapper toolSlug="your-tool-name">
          {/* Your tool content here */}
          <YourToolComponent />
        </ToolPageWrapper>
      </main>
      <SiteFooter />
    </div>
  )
}
```

### Step 3: That's It!

The wrapper automatically:
- Checks usage limits on page load
- Redirects to `/upgrade` if limit exceeded
- Tracks the tool usage if allowed
- Shows the tool if usage is OK

## Complete Example

```tsx
// app/tools/a0z25-translator/page.tsx

import { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { A0Z25Translator } from '@/components/a0z25-translator'

export const metadata: Metadata = {
  title: 'A0Z25 Translator | Tool',
  description: 'Convert letters to numbers using A0Z25 cipher',
}

export default function A0Z25Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <ToolPageWrapper toolSlug="a0z25-translator">
          <A0Z25Translator />
        </ToolPageWrapper>
      </main>
      <SiteFooter />
    </div>
  )
}
```

## Usage Query Examples

Check remaining uses for a user:

```tsx
import { checkUsageLimit } from '@/lib/server-usage-tracker'

const limit = await checkUsageLimit(userId)
console.log(`${limit.remainingUses} uses remaining out of ${limit.limit}`)
```

## Session ID Behavior

- **Anonymous users**: Session ID created on first tool page load, stored in httpOnly cookie
- **Cookie persists**: 30 days (resets on new browser/device)
- **No manual clearing needed**: Automatic with browser cookie management
- **Per-session tracking**: Only 1 usage per tool per session (refresh doesn't increment)

## Database Schema

Uses existing `usage_tracking` table:
- `id`: UUID primary key
- `user_id`: For logged-in users (nullable)
- `session_id`: For anonymous users (nullable)
- `tool_id`: Tool slug/identifier
- `created_at`: Timestamp of usage
- `updated_at`: Auto-updated timestamp

## Redirect Flow

When user hits limit:
1. Page load triggers `checkUsageLimit()`
2. Returns `allowed: false`
3. Router redirects to `/upgrade`
4. User sees upgrade page with pricing link

## Files Modified/Created

- ✅ `/middleware.ts` - Intercepts tool requests, manages sessions
- ✅ `/lib/server-usage-tracker.ts` - Server actions for tracking
- ✅ `/components/tool-page-wrapper.tsx` - Client wrapper component
- ✅ `/app/upgrade/page.tsx` - Redirect page when limit hit

## Testing

### Test Anonymous User (10 limit)
1. Open incognito/private browser
2. Visit `/tools/a0z25-translator`
3. Visit `/tools/anagram-solver`
4. Continue visiting different tools
5. On 11th tool page, should redirect to `/upgrade`

### Test Registered User (25 limit)
1. Sign in with free account
2. Visit different tool pages
3. On 26th tool page, should redirect to `/upgrade`

### Test Pro User (Unlimited)
1. Create pro subscription in database
2. Visit unlimited tool pages
3. Should never hit limit

## Notes

- Old client-side tracking hooks (`useTrackUsage`, `useInstantTrackUsage`) still work but are superseded by this system
- Can remove old tracking code from tool components gradually
- Session IDs are per-browser; different browsers = different quotas
- Usage resets daily based on 24-hour rolling window (last 24 hours)
