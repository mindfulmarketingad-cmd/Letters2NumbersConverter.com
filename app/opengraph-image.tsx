import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Letters2NumbersConverter.com — Free Online Cipher & Converter Tools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#22c55e20',
            border: '1px solid #22c55e40',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#22c55e', fontSize: '18px', fontWeight: 600, letterSpacing: '0.05em' }}>
            FREE · NO SIGN-UP · BROWSER-BASED
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-0.02em',
          }}
        >
          Letters2Numbers
          <span style={{ color: '#22c55e' }}>Converter</span>.com
        </div>

        {/* Sub-heading */}
        <div
          style={{
            fontSize: '28px',
            color: '#a3a3a3',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
            marginBottom: '48px',
          }}
        >
          100+ free tools for ciphers, encoders, decoders, and converters
        </div>

        {/* Tool pills */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '1000px',
          }}
        >
          {['A1Z26 Cipher', 'Caesar Cipher', 'ROT13', 'Morse Code', 'Base64', 'Atbash', 'Playfair'].map(
            (tool) => (
              <div
                key={tool}
                style={{
                  background: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  color: '#d4d4d4',
                  fontSize: '20px',
                  fontWeight: 500,
                }}
              >
                {tool}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
