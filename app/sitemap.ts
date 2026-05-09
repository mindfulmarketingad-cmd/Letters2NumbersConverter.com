import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.letters2numbersconverter.com'
  
  const toolRoutes = [
    'a0z25-cipher-translator',
    'a0z25-decoder',
    'a0z25-converter',
    'a1z26-translator',
    'a1z26-decoder-and-encoder',
    'alphanumeric-conversion-tool',
    'anagram-solver',
    'atbash-cipher-decoder',
    'audio-spectrogram',
    'audio-spectrogram-decoder',
    'baconian-cipher',
    'babylonian-numeral-converter',
    'base64-image-viewer',
    'batch-file-editor',
    'blossom-solver',
    'book-cipher-decoder',
    'camel-case-converter',
    'cipher-identifier',
    'cistercian-numerals-converter',
    'cm-to-pixels-converter',
    'cmyk-to-pantone-color-converter',
    'cryptogram-generator',
    'cryptogram-solver',
    'cryptogram-solver-free',
    'decimal-to-hexadecimal-converter-online',
    'egyptian-numbers-converter',
    'enigma-machine-emulator',
    'escape-room-builder',
    'fill-in-the-blanks-equation-solver',
    'grade-curve-calculator',
    'half-birthday-calculator',
    'html-encoder-decoder',
    'hexahue-cipher',
    'ivr-alphanumeric-conversion-tool',
    'json-to-java-code-generator',
    'letter-number-converter',
    'letter-to-phone-number-converter',
    'line-ending-converter',
    'longest-word-using-these-letters-solver',
    'mayan-numeral-converter',
    'meq-to-mg-calculator',
    'monoalphabetic-substitution-cipher',
    'morse-code-to-base64',
    'nato-phonetic-alphabet',
    'online-url-decoder-encoder',
    'numbers-to-letters',
    'pantone-to-hex-converter',
    'password-strength-tester',
    'playback-speed-calculator',
    'placeholder-image-creator',
    'playfair-cipher-solver',
    'px-vw-converter',
    'rgb-to-pantone-color-converter',
    'reverse-text-converter',
    'skip-cipher',
    'scan-words-from-image',
    'steganography-image-decoder',
    'tapcode-translator',
    'url-percent-encoding-decoding',
    'vernam-cipher-decoder',
    'word-to-number-translator',
    'yaml-to-ini-converter',
  ]

  const blogRoutes = [
    'a0z25-cipher',
    'a1z26-translator',
    'abc-to-number-code',
    'alphabet-to-numbers-converter',
    'alphanumeric-converter',
    'best-cipher-locks',
    'best-decoder',
    'best-decoder-online',
    'best-decoder-web-app',
    'best-letter-number-ciphers',
    'build-your-own-escape-room',
    'educational-uses-letter-number-conversion',
    'escape-room-letter-codes',
    'history-letter-number-systems',
    'how-to-change-photo-to-high-resolution',
    'how-to-convert-image-to-text-in-excel',
    'how-to-convert-image-to-word-text',
    'how-to-manually-check-letter-number-conversion',
    'how-to-solve-letter-number-puzzles',
    'letter-number-codes-geocaching',
    'letter-number-conversion-data-science',
    'letter-number-converters-cryptography',
    'letter-number-substitution-puzzles',
    'letter-to-numbers-code',
    'letters-to-numbers-translator',
    'number-word-games-activities',
    'puzzle-solving-letter-number-conversion',
    'secret-codes-with-letters-numbers',
    'skip-cipher',
    'understanding-ascii-character-encoding',
    'what-is-url-encoding',
  ]

  const playRoutes = [
    'cryptogram-game-online',
    'escape-room',
  ]

  const toolSitemapEntries = toolRoutes.map(route => ({
    url: `${baseUrl}/tools/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const blogSitemapEntries = blogRoutes.map(route => ({
    url: `${baseUrl}/blog/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const playSitemapEntries = playRoutes.map(route => ({
    url: `${baseUrl}/play/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/play`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Footer pages
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // All tools
    ...toolSitemapEntries,
    // All blog posts
    ...blogSitemapEntries,
    // All play pages
    ...playSitemapEntries,
  ]
}
