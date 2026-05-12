'use client'

export interface Tool {
  id: string
  name: string
  description: string
  category: string
  href: string
  component: React.ComponentType<any>
}

// Lazy load tool components
const toolRegistry: Record<string, { name: string; description: string; category: string; href: string }> = {
  'letters-to-numbers': {
    name: 'Letters to Numbers Converter',
    description: 'Convert letters to numbers using A1Z26 cipher',
    category: 'Conversion',
    href: '/tools/letter-number-converter',
  },
  'a1z26-translator': {
    name: 'A1Z26 Translator',
    description: 'Translate letters to numbers with the A1Z26 alphabet',
    category: 'Conversion',
    href: '/tools/a1z26-translator',
  },
  'a1z26-decoder-and-encoder': {
    name: 'A1Z26 Decoder and Encoder',
    description: 'Encode letters to A1Z26 numbers and decode numbers back to letters instantly',
    category: 'Conversion',
    href: '/tools/a1z26-decoder-and-encoder',
  },
  'a0z25-cipher': {
    name: 'A0Z25 Cipher Translator',
    description: 'Convert text using A0Z25 cipher encoding',
    category: 'Cipher',
    href: '/tools/a0z25-cipher-translator',
  },
  'a0z25-decoder': {
    name: 'A0Z25 Decoder',
    description: 'Decode A0Z25 encoded numbers back to letters instantly',
    category: 'Decoder',
    href: '/tools/a0z25-decoder',
  },
  'a0z25-converter': {
    name: 'A0Z25 Converter',
    description: 'Convert letters to numbers and numbers to letters with A0Z25 formatting',
    category: 'Converter',
    href: '/tools/a0z25-converter',
  },
  'anagram-solver': {
    name: 'Anagram Solver',
    description: 'Solve anagrams and find word combinations',
    category: 'Word Games',
    href: '/tools/anagram-solver',
  },
  'atbash-cipher': {
    name: 'Atbash Cipher Decoder',
    description: 'Mirror alphabet substitution cipher decoder',
    category: 'Cipher',
    href: '/tools/atbash-cipher-decoder',
  },
  'alphanumeric-conversion-tool': {
    name: 'Alphanumeric Conversion Tool',
    description: 'Convert letters to numbers and numbers to letters with multiple encoding formats',
    category: 'Conversion',
    href: '/tools/alphanumeric-conversion-tool',
  },
  'audio-spectrogram': {
    name: 'Audio Spectrogram Analyzer',
    description: 'Visualize audio frequencies and analyze sound waves',
    category: 'Audio Tools',
    href: '/tools/audio-spectrogram',
  },
  'audio-spectrogram-decoder': {
    name: 'Spectrogram Decoder',
    description: 'Decode audio spectrograms and analyze frequencies',
    category: 'Audio Tools',
    href: '/tools/audio-spectrogram-decoder',
  },
  'babylonian-numeral-converter': {
    name: 'Babylonian Numeral Converter',
    description: 'Convert to ancient Babylonian base-60 numerals',
    category: 'Number Systems',
    href: '/tools/babylonian-numeral-converter',
  },
  'blossom-solver': {
    name: 'Blossom Solver',
    description: 'Solve Merriam-Webster Blossom word game',
    category: 'Word Games',
    href: '/tools/blossom-solver',
  },
  'book-cipher-decoder': {
    name: 'Book Cipher Decoder',
    description: 'Decode hidden messages from books',
    category: 'Cipher',
    href: '/tools/book-cipher-decoder',
  },
  'camel-case-converter': {
    name: 'Camel Case Converter',
    description: 'Convert text to camelCase, PascalCase, and other formats',
    category: 'Text Tools',
    href: '/tools/camel-case-converter',
  },
  'cipher-identifier': {
    name: 'Cipher Identifier',
    description: 'Identify and analyze cipher types from encrypted text',
    category: 'Cipher',
    href: '/tools/cipher-identifier',
  },
  'cistercian-numerals-converter': {
    name: 'Cistercian Numerals Converter',
    description: 'Convert to Cistercian numeral notation',
    category: 'Number Systems',
    href: '/tools/cistercian-numerals-converter',
  },
  'cryptogram-generator': {
    name: 'Cryptogram Generator',
    description: 'Create and share puzzle cryptograms',
    category: 'Puzzle Games',
    href: '/tools/cryptogram-generator',
  },
  'cryptogram-solver': {
    name: 'Cryptogram Solver',
    description: 'Solve complex cryptogram puzzles',
    category: 'Puzzle Games',
    href: '/tools/cryptogram-solver',
  },
  'cryptogram-solver-free': {
    name: 'Cryptogram Solver Free',
    description: 'Solve substitution cipher cryptograms',
    category: 'Puzzle Games',
    href: '/tools/cryptogram-solver-free',
  },
  'convert-ogg-to-wav': {
    name: 'Convert OGG to WAV',
    description: 'Convert OGG audio files to WAV format instantly with quality preservation - free and secure.',
    category: 'Audio Tools',
    href: '/tools/convert-ogg-to-wav',
  },
  'convert-oxps-to-pdf': {
    name: 'Convert OXPS to PDF',
    description: 'Convert OXPS files to PDF format instantly. Preserves formatting, free and works in browser.',
    category: 'File Tools',
    href: '/tools/convert-oxps-to-pdf',
  },
  'decimal-to-hexadecimal-converter': {
    name: 'Decimal to Hexadecimal Converter',
    description: 'Convert between decimal, hex, binary, and octal',
    category: 'Number Conversion',
    href: '/tools/decimal-to-hexadecimal-converter-online',
  },
  'egyptian-numbers-converter': {
    name: 'Egyptian Numbers Converter',
    description: 'Convert to ancient Egyptian hieroglyphic numerals',
    category: 'Number Systems',
    href: '/tools/egyptian-numbers-converter',
  },
  'enigma-machine-emulator': {
    name: 'Enigma Machine Emulator',
    description: 'Simulate the historical Enigma cipher device',
    category: 'Cipher',
    href: '/tools/enigma-machine-emulator',
  },
  'escape-room-builder': {
    name: 'Escape Room Builder',
    description: 'Create and design interactive escape room puzzles',
    category: 'Puzzle Games',
    href: '/tools/escape-room-builder',
  },
  'equation-solver': {
    name: 'Fill In The Blanks Equation Solver',
    description: 'Find missing digits and operators in equations',
    category: 'Math Tools',
    href: '/tools/fill-in-the-blanks-equation-solver',
  },
  'grade-curve-calculator': {
    name: 'Grade Curve Calculator',
    description: 'Adjust student grades using normal, linear, or percentile distribution methods',
    category: 'Education',
    href: '/tools/grade-curve-calculator',
  },
  'half-birthday-calculator': {
    name: 'Half Birthday Calculator',
    description: 'Calculate when your half birthday is and celebrate twice a year',
    category: 'Utility',
    href: '/tools/half-birthday-calculator',
  },
  'html-encoder-decoder': {
    name: 'HTML Encoder and Decoder',
    description: 'Instantly encode and decode HTML entities for safe web content',
    category: 'Encoding Tools',
    href: '/tools/html-encoder-decoder',
  },
  'hexahue-cipher': {
    name: 'Hexahue Cipher',
    description: 'Color-based encoding system for visual communication',
    category: 'Cipher',
    href: '/tools/hexahue-cipher',
  },
  'json-to-java-generator': {
    name: 'JSON to Java Code Generator',
    description: 'Generate Java code from JSON structure',
    category: 'Code Generators',
    href: '/tools/json-to-java-code-generator',
  },
  'json-to-ini-converter': {
    name: 'JSON to INI Converter',
    description: 'Convert JSON configuration files to INI format instantly',
    category: 'Data Conversion',
    href: '/tools/json-to-ini-converter',
  },
  'letter-to-phone-converter': {
    name: 'Phone Number Converter',
    description: 'Convert letters to phone number digits using T9',
    category: 'Conversion',
    href: '/tools/letter-to-phone-number-converter',
  },
  'line-ending-converter': {
    name: 'Line Ending Converter',
    description: 'Convert between LF, CRLF, and CR line endings',
    category: 'Text Tools',
    href: '/tools/line-ending-converter',
  },
  'longest-word-solver': {
    name: 'Longest Word Using These Letters Solver',
    description: 'Find the longest words from available letters',
    category: 'Word Games',
    href: '/tools/longest-word-using-these-letters-solver',
  },
  'mayan-numeral-converter': {
    name: 'Mayan Numeral Converter',
    description: 'Convert to ancient Mayan numerals',
    category: 'Number Systems',
    href: '/tools/mayan-numeral-converter',
  },
  'make-grayscale-image-online': {
    name: 'Grayscale Image Online',
    description: 'Convert colored images to black and white grayscale instantly',
    category: 'Image Tools',
    href: '/tools/make-grayscale-image-online',
  },
  'meq-to-mg-calculator': {
    name: 'mEq to mg Calculator',
    description: 'Convert milliequivalents (mEq) to milligrams (mg) for pharmaceutical and medical calculations',
    category: 'Medical',
    href: '/tools/meq-to-mg-calculator',
  },
  'medicare-prefix-converter': {
    name: 'Medicare Prefix Converter',
    description: 'Decode Medicare ID prefix letters and identify beneficiary types and coverage eligibility',
    category: 'Medical',
    href: '/tools/medicare-prefix-converter',
  },
  'mbi-converter': {
    name: 'MBI Converter',
    description: 'Convert Medicare Beneficiary Identifier numbers and names to telephone keypad sequences',
    category: 'Medical',
    href: '/tools/mbi-converter',
  },
  'medicare-id-converter': {
    name: 'Medicare ID Converter',
    description: 'Identify and validate Medicare ID numbers - distinguish between HIC and MBI formats',
    category: 'Medical',
    href: '/tools/medicare-id-converter',
  },
  'monoalphabetic-substitution-cipher': {
    name: 'Monoalphabetic Substitution Cipher',
    description: 'Encrypt and decrypt using monoalphabetic ciphers',
    category: 'Cipher',
    href: '/tools/monoalphabetic-substitution-cipher',
  },
  'nato-phonetic-alphabet': {
    name: 'NATO Phonetic Alphabet Translator',
    description: 'Convert text to NATO phonetic alphabet spelling',
    category: 'Text Tools',
    href: '/tools/nato-phonetic-alphabet',
  },
  'online-url-decoder-encoder': {
    name: 'Online URL Decoder Encoder',
    description: 'Instantly encode and decode URLs with support for recursive decoding and batch processing',
    category: 'Encoding Tools',
    href: '/tools/online-url-decoder-encoder',
  },
  'numbers-to-letters': {
    name: 'Numbers to Letters Converter',
    description: 'Convert numbers back to letters',
    category: 'Conversion',
    href: '/tools/numbers-to-letters',
  },
  'password-strength-tester': {
    name: 'Password Strength Tester',
    description: 'Test and analyze password security strength',
    category: 'Security Tools',
    href: '/tools/password-strength-tester',
  },
  'playback-speed-calculator': {
    name: 'Playback Speed Calculator',
    description: 'Calculate adjusted duration and time saved when playing media at different speeds',
    category: 'Utility',
    href: '/tools/playback-speed-calculator',
  },
  'playfair-cipher': {
    name: 'Playfair Cipher Solver',
    description: 'Encrypt and decrypt using Playfair cipher',
    category: 'Cipher',
    href: '/tools/playfair-cipher-solver',
  },
  'px-vw-converter': {
    name: 'PX To VW Converter',
    description: 'Convert between pixels and viewport width units',
    category: 'Unit Conversion',
    href: '/tools/px-vw-converter',
  },
  'skip-cipher': {
    name: 'Skip Cipher',
    description: 'Encode text using skip cipher technique',
    category: 'Cipher',
    href: '/tools/skip-cipher',
  },
  'skip-cipher-decoder': {
    name: 'Skip Cipher Decoder',
    description: 'Decode skip cipher messages with automatic brute force detection',
    category: 'Cipher',
    href: '/tools/skip-cipher-decoder',
  },
  'scan-words-from-image': {
    name: 'Scan Words From Image',
    description: 'Extract text from images using advanced OCR technology',
    category: 'Text Tools',
    href: '/tools/scan-words-from-image',
  },
  'steganography-image-decoder': {
    name: 'Steganography Image Decoder',
    description: 'Extract hidden information and messages from steganographic images using LSB extraction',
    category: 'Decoder',
    href: '/tools/steganography-image-decoder',
  },
  'tapcode-translator': {
    name: 'Tapcode Translator',
    description: 'Convert messages to tap code cipher',
    category: 'Cipher',
    href: '/tools/tapcode-translator',
  },
  'txt-to-ini-converter': {
    name: 'TXT to INI Converter',
    description: 'Convert plain text files to INI configuration format instantly',
    category: 'Conversion',
    href: '/tools/txt-to-ini-converter',
  },
  'url-percent-encoding-decoding': {
    name: 'URL Percent Encoding and Decoding',
    description: 'Instantly encode and decode URLs with percent encoding support',
    category: 'Encoding Tools',
    href: '/tools/url-percent-encoding-decoding',
  },
  'yaml-to-ini-converter': {
    name: 'YAML to INI Converter',
    description: 'Convert between YAML and INI configuration formats',
    category: 'Data Conversion',
    href: '/tools/yaml-to-ini-converter',
  },
  'yaml-to-jpg-converter': {
    name: 'YAML to JPG Converter',
    description: 'Convert YAML configuration files to JPG images for easy sharing',
    category: 'Data Conversion',
    href: '/tools/yaml-to-jpg-converter',
  },
  'yaml-to-xml-converter': {
    name: 'YAML to XML Converter',
    description: 'Convert YAML configuration files to XML format instantly',
    category: 'Data Conversion',
    href: '/tools/yaml-to-xml-converter',
  },
  'word-to-number-translator': {
    name: 'Word To Number Translator',
    description: 'Convert words to numbers and numbers to words with multiple encoding methods',
    category: 'Conversion',
    href: '/tools/word-to-number-translator',
  },
  'cmyk-to-pantone-converter': {
    name: 'CMYK to Pantone Color Converter',
    description: 'Convert CMYK colors to Pantone (PMS) format instantly',
    category: 'Color Tools',
    href: '/tools/cmyk-to-pantone-color-converter',
  },
  'batch-file-editor': {
    name: 'Batch File Editor',
    description: 'Edit, create, and analyze batch files with real-time statistics',
    category: 'Code Tools',
    href: '/tools/batch-file-editor',
  },
  'rgb-to-pantone-converter': {
    name: 'RGB To Pantone Color Converter',
    description: 'Convert RGB colors to Pantone (PMS) format instantly',
    category: 'Color Tools',
    href: '/tools/rgb-to-pantone-color-converter',
  },
  'reverse-text-converter': {
    name: 'Reverse Text Converter',
    description: 'Reverse any text, string, or message instantly',
    category: 'Converter',
    href: '/tools/reverse-text-converter',
  },
  'pantone-to-hex-converter': {
    name: 'Pantone to Hex Converter',
    description: 'Search Pantone colors and convert to hex format',
    category: 'Color Tools',
    href: '/tools/pantone-to-hex-converter',
  },
  'base64-image-viewer': {
    name: 'Base64 Image Viewer',
    description: 'Decode and view base64-encoded images instantly',
    category: 'Image Tools',
    href: '/tools/base64-image-viewer',
  },
  'baconian-cipher': {
    name: 'Baconian Cipher',
    description: 'Encode and decode text using the Baconian Cipher with A/B patterns',
    category: 'Cipher',
    href: '/tools/baconian-cipher',
  },
  'black-and-white-photo-to-color-converter': {
    name: 'Black and White Photo to Color Converter',
    description: 'Transform grayscale photos into vibrant color images instantly',
    category: 'Image Tools',
    href: '/tools/black-and-white-photo-to-color-converter',
  },
  'morse-to-base64-converter': {
    name: 'Morse Code to Base64 Converter',
    description: 'Decode Morse code and convert to Base64 format',
    category: 'Conversion',
    href: '/tools/morse-code-to-base64',
  },
  'vernam-cipher-decoder': {
    name: 'Vernam Cipher Decoder',
    description: 'Decrypt Vernam cipher (one-time pad) ciphertext using the original key',
    category: 'Cipher',
    href: '/tools/vernam-cipher-decoder',
  },
  'ivr-alphanumeric-converter': {
    name: 'IVR Alphanumeric Conversion Tool',
    description: 'Convert Medicare IDs, PTAN, and DCN to IVR telephone keypad sequences',
    category: 'Healthcare Tools',
    href: '/tools/ivr-alphanumeric-conversion-tool',
  },
  'cm-to-pixels-converter': {
    name: 'CM To Pixels Converter',
    description: 'Convert centimeters to pixels for web design, print media, and screen calculations',
    category: 'Unit Conversion',
    href: '/tools/cm-to-pixels-converter',
  },
  'placeholder-image-creator': {
    name: 'Placeholder Image Creator',
    description: 'Generate custom placeholder images with text, colors, and download options',
    category: 'Image Tools',
    href: '/tools/placeholder-image-creator',
  },
  'text-frequency-analysis': {
    name: 'Text Frequency Analysis',
    description: 'Analyze character and word frequency in text with detailed statistics',
    category: 'Text Tools',
    href: '/tools/text-frequency-analysis',
  },
  'ppt-compressor': {
    name: 'PPT Compressor',
    description: 'Compress PowerPoint presentations instantly. Reduce .ppt and .pptx file sizes without losing quality.',
    category: 'File Tools',
    href: '/tools/ppt-compressor',
  },
  'webm-compressor': {
    name: 'WEBM Compressor',
    description: 'Compress WebM video files with advanced quality controls. Reduce file size without quality loss - all processing in your browser.',
    category: 'Video Tools',
    href: '/tools/webm-compressor',
  },
  'webp-to-gif': {
    name: 'WebP to GIF',
    description: 'Convert WebP images to GIF format instantly with quality preservation - free and works in browser.',
    category: 'Image Tools',
    href: '/tools/webp-to-gif',
  },
  'xps-to-pdf-converter': {
    name: 'XPS File To PDF',
    description: 'Convert XPS documents to PDF format instantly. Preserves formatting and supports all file sizes - completely free.',
    category: 'File Tools',
    href: '/tools/xps-to-pdf-converter',
  },
  'online-random-string-generator': {
    name: 'Online Random String Generator',
    description: 'Generate unlimited random strings with customizable characters, length, and formatting. Perfect for passwords, API keys, and testing.',
    category: 'Generators',
    href: '/tools/online-random-string-generator',
  },
  'base32-converter': {
    name: 'Base32 Converter',
    description: 'Encode or decode Base32 instantly. Supports RFC 4648, Base32 Hex, z-base-32, and Crockford\'s Base32.',
    category: 'Encoding & Decoding',
    href: '/tools/base32-converter',
  },
  'text-to-roman-numerals': {
    name: 'Text to Roman Numerals',
    description: 'Convert text or numbers to Roman numerals instantly. Supports ASCII-to-Roman, number-to-Roman, reverse decoding, and custom separators.',
    category: 'Number Conversion',
    href: '/tools/text-to-roman-numerals',
  },
  'sims-language-translator': {
    name: 'Sims Language Translator',
    description: 'Translate English to Simlish or decode Simlish to English. 200+ confirmed Simlish words, random sentence generator, and phrase chips.',
    category: 'Language & Fun',
    href: '/tools/sims-language-translator',
  },
  'sentence-unscrambler': {
    name: 'Sentence Unscrambler',
    description: 'Instantly rearrange scrambled words into a correct, readable sentence. Free, browser-based, with character and word stats.',
    category: 'Text & Language',
    href: '/tools/sentence-unscrambler',
  },
  'pdf-to-word-converter': {
    name: 'PDF to Word Converter',
    description: 'Convert PDF files to editable Word (.docx) documents instantly in your browser. No uploads, no software required.',
    category: 'Document Conversion',
    href: '/tools/pdf-to-word-converter',
  },
  'word-to-pdf-converter': {
    name: 'Word to PDF Converter',
    description: 'Convert Word documents (.docx, .doc) to PDF instantly in your browser. No uploads, no software required.',
    category: 'Document Conversion',
    href: '/tools/word-to-pdf-converter',
  },
  'morse-code-translator': {
    name: 'Morse Code Translator',
    description: 'Translate text to Morse code and decode Morse code to text instantly, with audio playback and a full reference chart.',
    category: 'Cipher',
    href: '/tools/morse-code-translator',
  },
  'pie-graph-maker': {
    name: 'Pie Graph Maker',
    description: 'Create beautiful interactive pie charts online with customizable colors, labels, and styles. Download as PNG instantly.',
    category: 'Data Visualization',
    href: '/tools/pie-graph-maker',
  },
  'tcg-proxy-creator': {
    name: 'TCG Proxy Creator',
    description: 'Create professional trading card game proxy sheets online. Support for Yu-Gi-Oh!, Pokémon, MTG with custom spacing and print quality.',
    category: 'Card Games',
    href: '/tools/tcg-proxy-creator',
  },
  'id3-metadata-viewer': {
    name: 'ID3 Metadata Viewer',
    description: 'Inspect ID3 tags in MP3, MP4/M4A, AIFF, WAV, OGG, and FLAC files. View title, artist, album, cover art, BPM, and more — all in your browser.',
    category: 'Audio Tools',
    href: '/tools/id3-metadata-viewer',
  },
  'exif-metadata-viewer': {
    name: 'Exif Metadata Viewer',
    description: 'View all EXIF metadata in JPEG, TIFF, and WebP images — camera, GPS, date, focal length, ISO, and more. No uploads. Your data stays local.',
    category: 'Image Tools',
    href: '/tools/exif-metadata-viewer',
  },
  'certificate-decoder': {
    name: 'Certificate Decoder',
    description: 'Decode SSL/TLS certificates, CSRs, and private keys instantly in your browser. Supports PEM, DER, Base64, and hex formats. Your data stays local.',
    category: 'Security Tools',
    href: '/tools/certificate-decoder',
  },
  'get-song-bpm': {
    name: 'Get Song BPM',
    description: 'Detect the BPM of any audio file instantly in your browser. Upload MP3, WAV, FLAC, or M4A and get an accurate tempo reading with confidence score. No uploads.',
    category: 'Audio Tools',
    href: '/tools/get-song-bpm',
  },
  'tempo-tapper': {
    name: 'Tempo Tapper',
    description: 'Tap the button or press Space in time with any song to instantly calculate BPM. Shows rolling average, interval history, half-time, double-time, and tempo feel.',
    category: 'Audio Tools',
    href: '/tools/tempo-tapper',
  },
  'lufs-meter': {
    name: 'LUFS Meter',
    description: 'Measure integrated loudness, momentary peak, short-term peak, true peak (dBTP), and loudness range (LRA) of any audio file using ITU-R BS.1770-4. Compare against streaming platform targets.',
    category: 'Audio Tools',
    href: '/tools/lufs-meter',
  },
}

export function getToolRegistry() {
  return Object.entries(toolRegistry).map(([id, tool]) => ({
    id,
    ...tool,
  }))
}

export function getToolsByCategory() {
  const registry = getToolRegistry()
  const categories = new Map<string, typeof registry>()

  registry.forEach((tool) => {
    if (!categories.has(tool.category)) {
      categories.set(tool.category, [])
    }
    categories.get(tool.category)!.push(tool)
  })

  return Array.from(categories.entries()).map(([category, tools]) => ({
    category,
    tools,
  }))
}

export function getTool(id: string) {
  const registry = getToolRegistry()
  return registry.find((tool) => tool.id === id)
}
