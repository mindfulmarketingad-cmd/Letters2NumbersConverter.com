/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/og-image.png',
        destination: '/opengraph-image',
        permanent: false,
      },
      // Consolidated duplicate tool pages — 301 to the canonical tool
      { source: '/tools/a1z26-translator', destination: '/tools/letter-number-converter', permanent: true },
      { source: '/tools/a1z26-decoder-and-encoder', destination: '/tools/letter-number-converter', permanent: true },
      { source: '/tools/numbers-to-letters', destination: '/tools/letter-number-converter', permanent: true },
      { source: '/tools/word-to-number-translator', destination: '/tools/letter-number-converter', permanent: true },
      { source: '/tools/a0z25-converter', destination: '/tools/a0z25-cipher-translator', permanent: true },
      { source: '/tools/a0z25-decoder', destination: '/tools/a0z25-cipher-translator', permanent: true },
      { source: '/tools/cryptogram-solver-free', destination: '/tools/cryptogram-solver', permanent: true },
      { source: '/tools/morse-code-decoder-and-encoder', destination: '/tools/morse-code-translator', permanent: true },
      { source: '/tools/skip-cipher-decoder', destination: '/tools/skip-cipher', permanent: true },
      { source: '/tools/medicare-id-converter', destination: '/tools/mbi-converter', permanent: true },
      { source: '/tools/word-to-phone-number-converter', destination: '/tools/letter-to-phone-number-converter', permanent: true },
      { source: '/tools/jpg-to-grayscale-converter', destination: '/tools/make-grayscale-image-online', permanent: true },
      { source: '/tools/audio-spectrogram-decoder', destination: '/tools/audio-spectrogram', permanent: true },
      // Consolidated duplicate blog posts — 301 to the canonical post
      { source: '/blog/best-decoder-online', destination: '/blog/best-decoder', permanent: true },
      { source: '/blog/best-decoder-web-app', destination: '/blog/best-decoder', permanent: true },
      { source: '/blog/best-decipherer-tool', destination: '/blog/best-decoder', permanent: true },
      { source: '/blog/types-of-cipher-codes', destination: '/blog/types-of-ciphers-and-codes', permanent: true },
      { source: '/blog/different-types-of-codes-and-ciphers', destination: '/blog/types-of-ciphers-and-codes', permanent: true },
      { source: '/blog/a1z26-chart', destination: '/blog/a1z26-conversion-chart', permanent: true },
      { source: '/blog/alphabet-to-numbers-converter', destination: '/blog/letter-to-numbers-code', permanent: true },
      { source: '/blog/abc-to-number-code', destination: '/blog/letter-to-numbers-code', permanent: true },
      { source: '/blog/letters-to-numbers-translator', destination: '/blog/letter-to-numbers-code', permanent: true },
      { source: '/blog/hackathon-team-finder', destination: '/blog/find-hackathon-team-members', permanent: true },
      { source: '/blog/hackathon-team-formation', destination: '/blog/find-hackathon-team-members', permanent: true },
      { source: '/blog/how-to-url-encode', destination: '/blog/how-to-encode-a-url', permanent: true },
      { source: '/blog/caesar-cipher-shift-13', destination: '/blog/rot13-cipher-explained', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        // Static assets — long cache
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Fonts cached aggressively
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
