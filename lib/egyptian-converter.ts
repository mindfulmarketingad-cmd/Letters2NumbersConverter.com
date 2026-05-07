/**
 * Egyptian Numerals Converter utilities
 * Ancient Egyptian numerals were used from ~3000 BC to early first millennium AD
 * Based on multiples of 10, using hieroglyphic symbols
 */

export interface EgyptianSymbol {
  value: number
  name: string
  hieroglyph: string
  description: string
}

// Egyptian numeral symbols - powers of 10
export const EGYPTIAN_SYMBOLS: EgyptianSymbol[] = [
  {
    value: 1,
    name: "One",
    hieroglyph: "𓏤", // Single stroke
    description: "Single vertical stroke",
  },
  {
    value: 10,
    name: "Ten",
    hieroglyph: "𓏦", // Heel bone
    description: "Heel bone or hobble",
  },
  {
    value: 100,
    name: "Hundred",
    hieroglyph: "𓏪", // Coil of rope
    description: "Coil of rope",
  },
  {
    value: 1000,
    name: "Thousand",
    hieroglyph: "𓏬", // Lotus flower
    description: "Lotus flower",
  },
  {
    value: 10000,
    name: "Ten Thousand",
    hieroglyph: "𓏭", // Pointing finger
    description: "Pointing finger",
  },
  {
    value: 100000,
    name: "Hundred Thousand",
    hieroglyph: "𓏮", // Tadpole
    description: "Tadpole",
  },
  {
    value: 1000000,
    name: "Million",
    hieroglyph: "𓏯", // Astonished figure
    description: "Astonished figure or god with raised arms",
  },
]

/**
 * Convert decimal number to Egyptian numeral representation
 */
export function decimalToEgyptian(num: number): {
  components: Array<{ symbol: EgyptianSymbol; count: number }>
  total: number
} {
  if (num < 1 || num > 9999999) {
    throw new Error("Egyptian numbers must be between 1 and 9,999,999")
  }

  const components: Array<{ symbol: EgyptianSymbol; count: number }> = []
  let remaining = num

  // Work through symbols from largest to smallest
  for (let i = EGYPTIAN_SYMBOLS.length - 1; i >= 0; i--) {
    const symbol = EGYPTIAN_SYMBOLS[i]
    const count = Math.floor(remaining / symbol.value)

    if (count > 0) {
      components.push({ symbol, count })
      remaining -= count * symbol.value
    }
  }

  return { components, total: num }
}

/**
 * Get visual representation of Egyptian numeral
 */
export function getEgyptianVisual(num: number): string {
  const { components } = decimalToEgyptian(num)
  return components.map((c) => c.symbol.hieroglyph.repeat(c.count)).join(" ")
}

/**
 * Get detailed breakdown
 */
export function getDetailedBreakdown(num: number): Array<{
  value: number
  count: number
  symbol: EgyptianSymbol
  subtotal: number
}> {
  const { components } = decimalToEgyptian(num)
  return components.map((c) => ({
    value: c.symbol.value,
    count: c.count,
    symbol: c.symbol,
    subtotal: c.symbol.value * c.count,
  }))
}

/**
 * Validate input number
 */
export function isValidEgyptianNumber(num: string | number): boolean {
  try {
    const n = typeof num === "string" ? parseInt(num) : num
    return !isNaN(n) && n >= 1 && n <= 9999999
  } catch {
    return false
  }
}

/**
 * Get numeral system info
 */
export function getSystemInfo() {
  return {
    name: "Egyptian Numerals",
    period: "~3000 BC to early first millennium AD",
    base: "Base-10 (multiples of ten)",
    range: "1 to 9,999,999",
    description: "Ancient Egyptian numerals used a system based on multiples of ten, written in hieroglyphs with no place-value system like the decimal system.",
    characteristics: [
      "Additive system - values are added together",
      "No zero symbol",
      "No place-value notation",
      "Symbols repeated for multiples",
      "Could be written horizontally or vertically",
    ],
  }
}
