import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, imageType, left, right, up, down, prompt, creativity } = await req.json()

    if (!imageBase64) {
      return NextResponse.json({ error: 'No image provided.' }, { status: 400 })
    }

    const expandTotal = (left || 0) + (right || 0) + (up || 0) + (down || 0)
    if (expandTotal === 0) {
      return NextResponse.json({ error: 'Select at least one direction to expand.' }, { status: 400 })
    }

    const apiKey = process.env.STABILITY_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'AI uncrop service is not configured.' }, { status: 503 })
    }

    const buffer = Buffer.from(imageBase64, 'base64')
    const blob = new Blob([buffer], { type: imageType || 'image/png' })

    const formData = new FormData()
    formData.append('image', blob, 'image.png')
    if (left > 0) formData.append('left', String(left))
    if (right > 0) formData.append('right', String(right))
    if (up > 0) formData.append('up', String(up))
    if (down > 0) formData.append('down', String(down))
    if (prompt?.trim()) formData.append('prompt', prompt.trim())
    formData.append('creativity', String(Math.max(0, Math.min(1, creativity ?? 0.5))))
    formData.append('output_format', 'webp')

    const response = await fetch('https://api.stability.ai/v2beta/stable-image/edit/outpaint', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
      body: formData,
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Stability AI error:', response.status, errText)
      if (response.status === 402) {
        return NextResponse.json({ error: 'Insufficient credits for AI uncrop.' }, { status: 402 })
      }
      if (response.status === 413 || errText.includes('too large')) {
        return NextResponse.json({ error: 'Image is too large. Please resize to under 10MP before uploading.' }, { status: 413 })
      }
      return NextResponse.json({ error: 'AI uncrop failed. Please try again.' }, { status: 500 })
    }

    const result = await response.json()
    return NextResponse.json({ image: result.image, format: 'webp' })
  } catch (error) {
    console.error('AI uncrop error:', error)
    return NextResponse.json({ error: 'AI uncrop failed. Please try again.' }, { status: 500 })
  }
}
