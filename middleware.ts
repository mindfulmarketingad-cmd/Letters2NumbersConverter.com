import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Only track tool page loads
  if (!pathname.startsWith('/tools/')) {
    return NextResponse.next()
  }

  // Skip if it's an API route
  if (pathname.includes('/api/')) {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  // Get or create session ID for anonymous users
  let sessionId = request.cookies.get('sessionId')?.value

  if (!sessionId) {
    sessionId = uuidv4()
    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
  }

  // Pass sessionId to the request headers for the page component
  response.headers.set('x-session-id', sessionId)

  return response
}

export const config = {
  matcher: ['/tools/:path*'],
}
