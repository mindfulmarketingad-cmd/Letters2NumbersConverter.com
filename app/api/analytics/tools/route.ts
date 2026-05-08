import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get('x-user-id')

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID required' },
        { status: 400 }
      )
    }

    // Fetch usage analytics - tools used and count
    const { data, error } = await supabase
      .from('usage_tracking')
      .select('tool_id, created_at')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    // Group by tool_id and count
    const toolUsage = data.reduce((acc: Record<string, number>, item) => {
      acc[item.tool_id] = (acc[item.tool_id] || 0) + 1
      return acc
    }, {})

    // Get tool registry to map IDs to names
    const toolRegistry: Record<string, string> = {
      'ivr-alphanumeric-conversion-tool': 'IVR Alphanumeric Conversion Tool',
      'cm-to-pixels-converter': 'CM To Pixels Converter',
      'placeholder-image-creator': 'Placeholder Image Creator',
      'a1z26-translator': 'A1Z26 Translator',
      'a0z25-cipher-translator': 'A0Z25 Cipher Translator',
      // Add more as needed
    }

    const analytics = Object.entries(toolUsage).map(([toolId, count]) => ({
      toolId,
      toolName: toolRegistry[toolId] || toolId,
      usageCount: count,
    })).sort((a, b) => b.usageCount - a.usageCount)

    return NextResponse.json({
      totalUsage: data.length,
      tools: analytics,
    })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    )
  }
}
