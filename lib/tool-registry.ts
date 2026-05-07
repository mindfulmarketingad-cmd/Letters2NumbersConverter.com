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
  'a0z25-cipher': {
    name: 'A0Z25 Cipher Translator',
    description: 'Convert text using A0Z25 cipher encoding',
    category: 'Cipher',
    href: '/tools/a0z25-cipher-translator',
  },
  'blossom-solver': {
    name: 'Blossom Solver',
    description: 'Solve Merriam-Webster Blossom word game',
    category: 'Games',
    href: '/tools/blossom-solver',
  },
  'longest-word-solver': {
    name: 'Longest Word Using These Letters Solver',
    description: 'Find the longest words from available letters',
    category: 'Games',
    href: '/tools/longest-word-using-these-letters-solver',
  },
  'playfair-cipher': {
    name: 'Playfair Cipher Solver',
    description: 'Encrypt and decrypt using Playfair cipher',
    category: 'Encryption',
    href: '/tools/playfair-cipher-solver',
  },
  'hexahue-cipher': {
    name: 'Hexahue Cipher',
    description: 'Color-based encoding system for visual communication',
    category: 'Encoding',
    href: '/tools/hexahue-cipher',
  },
  'atbash-cipher': {
    name: 'Atbash Cipher Decoder',
    description: 'Mirror alphabet substitution cipher decoder',
    category: 'Decoding',
    href: '/tools/atbash-cipher-decoder',
  },
  'tapcode-translator': {
    name: 'Tapcode Translator',
    description: 'Convert messages to tap code cipher',
    category: 'Encoding',
    href: '/tools/tapcode-translator',
  },
  'skip-cipher': {
    name: 'Skip Cipher',
    description: 'Encode text using skip cipher technique',
    category: 'Cipher',
    href: '/tools/skip-cipher',
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
