import { getSupabaseAdmin } from '@/lib/supabase/admin'
import { NextResponse } from 'next/server'

const admin = getSupabaseAdmin()

// GET /api/hackathon/profiles — public list of all hacker profiles
export async function GET() {
  const { data, error } = await admin
    .from('hackmate_profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
