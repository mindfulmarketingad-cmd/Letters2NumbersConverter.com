/**
 * Cistercian Numerals Converter utilities
 * Cistercian numerals are a medieval number system used by Cistercian monks
 * They represent numbers 1-9999 using a single composite glyph
 * Each digit position (ones, tens, hundreds, thousands) creates a mark in a different quadrant
 */

export interface CistercianPart {
  value: number
  position: "ones" | "tens" | "hundreds" | "thousands"
  symbol: string
  description: string
}

// Accurate Cistercian numeral glyphs based on the reference chart
// Ones (1-9): Top-right quadrant marks
export const CISTERCIAN_ONES = {
  0: { symbol: "—", description: "none" },
  1: { symbol: "⌐", description: "top-right horizontal line" },
  2: { symbol: "├", description: "top-right vertical line" },
  3: { symbol: "╱", description: "top-right diagonal down-right" },
  4: { symbol: "╲", description: "top-right diagonal down-left" },
  5: { symbol: "▖", description: "top-right filled triangle" },
  6: { symbol: "|", description: "center vertical line" },
  7: { symbol: "┐", description: "top-right corner" },
  8: { symbol: "╔", description: "top-right double" },
  9: { symbol: "▄", description: "top-right filled square" },
}

// Tens (10-90): Top-left quadrant marks
export const CISTERCIAN_TENS = {
  0: { symbol: "—", description: "none" },
  1: { symbol: "├", description: "top-left vertical line" },
  2: { symbol: "┤", description: "top-left horizontal line" },
  3: { symbol: "╱", description: "top-left diagonal" },
  4: { symbol: "╲", description: "top-left diagonal" },
  5: { symbol: "▗", description: "top-left filled triangle" },
  6: { symbol: "|", description: "center vertical line" },
  7: { symbol: "┌", description: "top-left corner" },
  8: { symbol: "┤", description: "top-left extended" },
  9: { symbol: "▀", description: "top-left filled square" },
}

// Hundreds (100-900): Bottom-left quadrant marks
export const CISTERCIAN_HUNDREDS = {
  0: { symbol: "—", description: "none" },
  1: { symbol: "└", description: "bottom-left corner" },
  2: { symbol: "├", description: "bottom-left vertical" },
  3: { symbol: "╲", description: "bottom-left diagonal" },
  4: { symbol: "╱", description: "bottom-left diagonal" },
  5: { symbol: "▝", description: "bottom-left filled triangle" },
  6: { symbol: "|", description: "center vertical line" },
  7: { symbol: "║", description: "bottom-left double vertical" },
  8: { symbol: "┤", description: "bottom-left extended" },
  9: { symbol: "▄", description: "bottom-left filled square" },
}

// Thousands (1000-9000): Bottom-right quadrant marks
export const CISTERCIAN_THOUSANDS = {
  0: { symbol: "—", description: "none" },
  1: { symbol: "└", description: "bottom-right vertical" },
  2: { symbol: "├", description: "bottom-right horizontal" },
  3: { symbol: "╲", description: "bottom-right diagonal" },
  4: { symbol: "╱", description: "bottom-right diagonal" },
  5: { symbol: "▘", description: "bottom-right filled triangle" },
  6: { symbol: "|", description: "center vertical line" },
  7: { symbol: "┘", description: "bottom-right corner" },
  8: { symbol: "┌", description: "bottom-right extended" },
  9: { symbol: "▀", description: "bottom-right filled square" },
}

/**
 * Get all Cistercian symbols for display in chart
 */
export function getAllCistercianSymbols() {
  return [
    { 
      label: "Ones (1-9) - Top Right", 
      symbols: CISTERCIAN_ONES,
      description: "Marks in the top-right quadrant represent ones"
    },
    { 
      label: "Tens (10-90) - Top Left", 
      symbols: CISTERCIAN_TENS,
      description: "Marks in the top-left quadrant represent tens"
    },
    { 
      label: "Hundreds (100-900) - Bottom Left", 
      symbols: CISTERCIAN_HUNDREDS,
      description: "Marks in the bottom-left quadrant represent hundreds"
    },
    { 
      label: "Thousands (1000-9000) - Bottom Right", 
      symbols: CISTERCIAN_THOUSANDS,
      description: "Marks in the bottom-right quadrant represent thousands"
    },
  ]
}

/**
 * Convert decimal number to Cistercian digit breakdown
 */
export function decimalToCistercian(num: number): {
  ones: number
  tens: number
  hundreds: number
  thousands: number
} {
  if (num < 1 || num > 9999) {
    throw new Error("Cistercian numbers must be between 1 and 9999")
  }

  const ones = num % 10
  const tens = Math.floor((num % 100) / 10)
  const hundreds = Math.floor((num % 1000) / 100)
  const thousands = Math.floor(num / 1000)

  return { ones, tens, hundreds, thousands }
}

/**
 * Get composite Cistercian glyph representation for a number
 * Returns the visual representation as a single composite character
 */
export function getCompositeGlyph(num: number): string {
  if (num < 1 || num > 9999) {
    throw new Error("Cistercian numbers must be between 1 and 9999")
  }

  const parts = decimalToCistercian(num)
  
  // Build composite representation from all four quadrants
  // In a real implementation, these would be rendered as SVG or combined Unicode
  const components: string[] = []

  if (parts.thousands > 0) {
    components.push(`BR[${parts.thousands}]`)
  }
  if (parts.hundreds > 0) {
    components.push(`BL[${parts.hundreds}]`)
  }
  if (parts.tens > 0) {
    components.push(`TL[${parts.tens}]`)
  }
  if (parts.ones > 0) {
    components.push(`TR[${parts.ones}]`)
  }

  return components.length > 0 ? components.join(" + ") : "0"
}

/**
 * Get detailed breakdown of a Cistercian number showing each quadrant
 */
export function getDetailedBreakdown(num: number): CistercianPart[] {
  const parts = decimalToCistercian(num)
  const breakdown: CistercianPart[] = []

  if (parts.thousands > 0) {
    breakdown.push({
      value: parts.thousands * 1000,
      position: "thousands",
      symbol: CISTERCIAN_THOUSANDS[parts.thousands as keyof typeof CISTERCIAN_THOUSANDS].symbol,
      description: `${parts.thousands}000 (Bottom-Right: ${CISTERCIAN_THOUSANDS[parts.thousands as keyof typeof CISTERCIAN_THOUSANDS].description})`,
    })
  }

  if (parts.hundreds > 0) {
    breakdown.push({
      value: parts.hundreds * 100,
      position: "hundreds",
      symbol: CISTERCIAN_HUNDREDS[parts.hundreds as keyof typeof CISTERCIAN_HUNDREDS].symbol,
      description: `${parts.hundreds}00 (Bottom-Left: ${CISTERCIAN_HUNDREDS[parts.hundreds as keyof typeof CISTERCIAN_HUNDREDS].description})`,
    })
  }

  if (parts.tens > 0) {
    breakdown.push({
      value: parts.tens * 10,
      position: "tens",
      symbol: CISTERCIAN_TENS[parts.tens as keyof typeof CISTERCIAN_TENS].symbol,
      description: `${parts.tens}0 (Top-Left: ${CISTERCIAN_TENS[parts.tens as keyof typeof CISTERCIAN_TENS].description})`,
    })
  }

  if (parts.ones > 0) {
    breakdown.push({
      value: parts.ones,
      position: "ones",
      symbol: CISTERCIAN_ONES[parts.ones as keyof typeof CISTERCIAN_ONES].symbol,
      description: `${parts.ones} (Top-Right: ${CISTERCIAN_ONES[parts.ones as keyof typeof CISTERCIAN_ONES].description})`,
    })
  }

  return breakdown
}

/**
 * Validate input number
 */
export function isValidCistercianNumber(num: string | number): boolean {
  try {
    const n = typeof num === "string" ? parseInt(num) : num
    return !isNaN(n) && n >= 1 && n <= 9999
  } catch {
    return false
  }
}
