import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const admin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const {
    city, state_region,
    event_date, event_type, guest_count,
    cuisine_types, service_style, dietary_requirements,
    budget_range,
    first_name, last_name, email, phone, notes,
  } = body as Record<string, unknown>

  // Required field validation
  const missing: string[] = []
  if (!city)                              missing.push('city')
  if (!event_date)                        missing.push('event_date')
  if (!event_type)                        missing.push('event_type')
  if (!guest_count || Number(guest_count) < 1) missing.push('guest_count')
  if (!Array.isArray(cuisine_types) || (cuisine_types as string[]).length === 0) missing.push('cuisine_types')
  if (!service_style)                     missing.push('service_style')
  if (!budget_range)                      missing.push('budget_range')
  if (!first_name)                        missing.push('first_name')
  if (!last_name)                         missing.push('last_name')
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) missing.push('email')

  if (missing.length > 0) {
    return NextResponse.json(
      { error: 'Missing or invalid fields', fields: missing },
      { status: 422 }
    )
  }

  const { data, error } = await admin
    .from('catering_leads')
    .insert([{
      city:                 String(city).trim(),
      state_region:         state_region ? String(state_region).trim() : null,
      event_date:           String(event_date),
      event_type:           String(event_type),
      guest_count:          Number(guest_count),
      cuisine_types:        cuisine_types as string[],
      service_style:        String(service_style),
      dietary_requirements: Array.isArray(dietary_requirements) ? dietary_requirements as string[] : [],
      budget_range:         String(budget_range),
      first_name:           String(first_name).trim(),
      last_name:            String(last_name).trim(),
      email:                String(email).trim().toLowerCase(),
      phone:                phone ? String(phone).trim() : null,
      notes:                notes ? String(notes).trim() : null,
      source:               'homepage',
    }])
    .select('id')
    .single()

  if (error) {
    console.error('catering_leads insert error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }

  return NextResponse.json({ success: true, id: data.id }, { status: 201 })
}
