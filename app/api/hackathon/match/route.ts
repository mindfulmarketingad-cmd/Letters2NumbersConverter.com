import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const anthropic = new Anthropic()

export async function POST(req: NextRequest) {
  const { mySkills, lookingFor, matchType } = await req.json()

  if (!mySkills || !Array.isArray(mySkills) || mySkills.length === 0) {
    return NextResponse.json({ error: 'Please enter at least one skill.' }, { status: 400 })
  }

  let candidates: Record<string, unknown>[] = []

  if (matchType === 'teams') {
    const { data, error } = await admin
      .from('hackmate_projects')
      .select('id, name, description, skills_needed, team_size_needed, current_team_size, hackathon')
      .eq('status', 'open')
      .order('created_at', { ascending: false })
      .limit(60)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    candidates = data ?? []
  } else {
    const { data, error } = await admin
      .from('hackmate_profiles')
      .select('id, name, role, skills, looking_for, hackathon')
      .order('created_at', { ascending: false })
      .limit(60)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    candidates = data ?? []
  }

  if (candidates.length === 0) {
    return NextResponse.json({ matches: [] })
  }

  const isTeams = matchType === 'teams'

  const prompt = `You are a hackathon team-matching assistant. Find the top 5 most compatible ${isTeams ? 'projects' : 'hackers'} for this person.

Person's profile:
- Skills: ${mySkills.join(', ')}
- Looking for: ${lookingFor || 'open to anything'}

${isTeams ? 'Open projects' : 'Available hackers'} (JSON):
${JSON.stringify(candidates, null, 2)}

Return ONLY a valid JSON array of up to 5 objects sorted by compatibility (best first). Each object must have exactly these keys:
{
  "id": "<the id field value>",
  "score": <integer 0-100>,
  "reason": "<1-2 sentences explaining why this is a great match>"
}

Consider: skill complementarity (different but compatible skills > identical skills), role fit, stated preferences, and hackathon alignment if present. Return only the JSON array.`

  try {
    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    })

    const content = message.content[0]
    if (content.type !== 'text') throw new Error('Unexpected response type from AI')

    const text = content.text.trim()
    const jsonStart = text.indexOf('[')
    const jsonEnd = text.lastIndexOf(']') + 1
    if (jsonStart === -1 || jsonEnd === 0) throw new Error('No JSON array found in AI response')

    const ranked: { id: string; score: number; reason: string }[] = JSON.parse(text.slice(jsonStart, jsonEnd))

    const candidateMap = new Map(candidates.map((c) => [c.id as string, c]))
    const matches = ranked
      .filter((r) => candidateMap.has(r.id))
      .slice(0, 5)
      .map((r) => ({
        ...candidateMap.get(r.id),
        score: r.score,
        reason: r.reason,
      }))

    return NextResponse.json({ matches })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : 'Unknown error'
    return NextResponse.json({ error: 'AI matching failed: ' + msg }, { status: 500 })
  }
}
