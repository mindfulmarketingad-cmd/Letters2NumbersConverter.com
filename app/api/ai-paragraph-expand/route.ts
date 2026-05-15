import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic()

export async function POST(req: NextRequest) {
  try {
    const { text, tone, style, targetLength } = await req.json()

    if (!text || typeof text !== 'string' || text.trim().length < 10) {
      return NextResponse.json({ error: 'Please provide at least 10 characters to expand.' }, { status: 400 })
    }

    const wordCount = text.trim().split(/\s+/).length
    const targetWords = targetLength === 'custom'
      ? null
      : targetLength === '2x' ? wordCount * 2
      : targetLength === '3x' ? wordCount * 3
      : targetLength === '4x' ? wordCount * 4
      : wordCount * 2

    const toneInstructions: Record<string, string> = {
      professional: 'Use formal, professional language suitable for business communication.',
      casual: 'Use friendly, conversational language as if writing to a friend.',
      academic: 'Use scholarly language with precise vocabulary and structured argumentation.',
      creative: 'Use vivid, expressive language with figurative elements and engaging prose.',
      persuasive: 'Use compelling, persuasive language that builds a strong argument or call to action.',
    }

    const styleInstructions: Record<string, string> = {
      descriptive: 'Add rich sensory details and vivid descriptions.',
      examples: 'Add concrete examples, analogies, and real-world illustrations.',
      context: 'Add background context, history, and supporting information.',
      formal: 'Make the writing more formal and structured with clear logical flow.',
      simplified: 'Expand while simplifying complex ideas into easily digestible language.',
      natural: 'Expand naturally while preserving the original writing style.',
    }

    const toneText = toneInstructions[tone] || toneInstructions.professional
    const styleText = styleInstructions[style] || styleInstructions.natural
    const lengthText = targetWords
      ? `Aim for approximately ${targetWords} words (currently ${wordCount} words).`
      : `Expand the text meaningfully — aim for 2-3x the current length.`

    const prompt = `You are an expert writing assistant. Expand the following paragraph or text while maintaining its core meaning and intent.

Instructions:
- Tone: ${toneText}
- Style: ${styleText}
- Length: ${lengthText}
- Preserve the key ideas, facts, and message of the original text.
- Do NOT add unverified claims or invented statistics.
- Return ONLY the expanded text — no preamble, no explanation, no quotes around the output.

Original text:
${text.trim()}`

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 4096,
      messages: [{ role: 'user', content: prompt }],
    })

    const block = response.content[0]
    if (block.type !== 'text') {
      return NextResponse.json({ error: 'Unexpected response from AI.' }, { status: 500 })
    }

    return NextResponse.json({ expanded: block.text.trim() })
  } catch (error) {
    console.error('Paragraph expand error:', error)
    return NextResponse.json({ error: 'Expansion failed. Please try again.' }, { status: 500 })
  }
}
