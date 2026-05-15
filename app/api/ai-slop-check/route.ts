import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

function extractJson(text: string) {
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  if (start === -1 || end === -1) throw new Error('No JSON found')
  return JSON.parse(text.slice(start, end + 1))
}

export async function POST(req: NextRequest) {
  try {
    const { text, imageBase64, imageMediaType } = await req.json()

    if (!text && !imageBase64) {
      return NextResponse.json({ error: 'Provide text or an image to analyze.' }, { status: 400 })
    }

    if (text) {
      const response = await anthropic.messages.create({
        model: 'claude-haiku-4-5',
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: `Analyze whether this text was written by AI or a human. Be precise.

Return ONLY valid JSON (no markdown fences, no explanation outside the JSON):
{
  "score": <integer 0-100, 0=definitely human, 100=definitely AI>,
  "verdict": "<exactly one of: Human Written, Likely Human, Uncertain, Likely AI, AI Generated>",
  "indicators": [<3-5 short strings describing specific patterns you found>],
  "summary": "<1-2 sentence plain-English explanation>"
}

Text to analyze:
"""
${text.slice(0, 8000)}
"""`
        }]
      })

      const block = response.content[0]
      if (block.type !== 'text') return NextResponse.json({ error: 'Unexpected response type.' }, { status: 500 })

      try {
        return NextResponse.json(extractJson(block.text))
      } catch {
        return NextResponse.json({ error: 'Could not parse analysis result.' }, { status: 500 })
      }
    }

    // Image analysis
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: {
              type: 'base64',
              media_type: (imageMediaType || 'image/jpeg') as 'image/jpeg' | 'image/png' | 'image/gif' | 'image/webp',
              data: imageBase64,
            }
          },
          {
            type: 'text',
            text: `Analyze whether this image is AI-generated or a real photograph. Look for artifacts, unnatural patterns, face inconsistencies, or synthetic textures.

Return ONLY valid JSON (no markdown fences, no explanation outside the JSON):
{
  "score": <integer 0-100, 0=definitely real photo, 100=definitely AI-generated>,
  "verdict": "<exactly one of: Real Photo, Likely Real, Uncertain, Likely AI, AI Generated>",
  "indicators": [<3-5 short strings describing specific visual patterns you found>],
  "summary": "<1-2 sentence plain-English explanation>"
}`
          }
        ]
      }]
    })

    const block = response.content[0]
    if (block.type !== 'text') return NextResponse.json({ error: 'Unexpected response type.' }, { status: 500 })

    try {
      return NextResponse.json(extractJson(block.text))
    } catch {
      return NextResponse.json({ error: 'Could not parse analysis result.' }, { status: 500 })
    }
  } catch (error) {
    console.error('AI slop check error:', error)
    return NextResponse.json({ error: 'Analysis failed. Please try again.' }, { status: 500 })
  }
}
