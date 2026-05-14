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

// GET /api/hackathon/projects/[id]/applications — list applications (creator only)
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyToken(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params

  const { data: project } = await admin
    .from('hackmate_projects')
    .select('creator_id')
    .eq('id', id)
    .single()

  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (project.creator_id !== user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const { data, error } = await admin
    .from('hackmate_project_applications')
    .select('*')
    .eq('project_id', id)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// POST /api/hackathon/projects/[id]/applications — apply to project (auth required)
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const user = await verifyToken(req)
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params

  // Can't apply to own project
  const { data: project } = await admin
    .from('hackmate_projects')
    .select('creator_id, status')
    .eq('id', id)
    .single()

  if (!project) return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  if (project.creator_id === user.id) return NextResponse.json({ error: 'Cannot apply to your own project' }, { status: 400 })
  if (project.status !== 'open') return NextResponse.json({ error: 'Project is not accepting applications' }, { status: 400 })

  const body = await req.json()
  const { applicant_name, applicant_skills, applicant_message } = body

  const { data, error } = await admin
    .from('hackmate_project_applications')
    .insert([{
      project_id: id,
      user_id: user.id,
      applicant_name: applicant_name || null,
      applicant_skills: Array.isArray(applicant_skills) ? applicant_skills : [],
      applicant_message: applicant_message || null,
    }])
    .select()
    .single()

  if (error) {
    if (error.code === '23505') return NextResponse.json({ error: 'You have already applied to this project' }, { status: 409 })
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data, { status: 201 })
}
