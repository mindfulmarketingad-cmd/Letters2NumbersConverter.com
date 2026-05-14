import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function verifyToken(req: NextRequest) {
  const token = req.headers.get('Authorization')?.replace('Bearer ', '')
  if (!token) return null
  const { data: { user } } = await admin.auth.getUser(token)
  return user ?? null
}

// GET /api/hackathon/projects — public list
export async function GET() {
  const { data, error } = await admin
    .from('hackmate_projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST /api/hackathon/projects — create project (auth required)
export async function POST(req: NextRequest) {
  const user = await verifyToken(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json()
  const { name, description, skills_needed, team_size_needed, hackathon } = body

  if (!name || !description || !Array.isArray(skills_needed) || skills_needed.length === 0) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await admin
    .from('hackmate_projects')
    .insert([{
      creator_id: user.id,
      name: name.trim(),
      description: description.trim(),
      skills_needed,
      team_size_needed: Number(team_size_needed) || 3,
      hackathon: hackathon || null,
    }])
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
