/**
 * Cistercian Numerals Converter utilities
 * Cistercian numerals are a medieval number system used by Cistercian monks
 * They represent numbers 1-9999 using a single glyph with up to 4 parts
 */

export interface CistercianPart {
  value: number
  position: "ones" | "tens" | "hundreds" | "thousands"
  symbol: string
  unicodeChar: string
}

// Cistercian numeral mapping for each digit in each position
export const CISTERCIAN_ONES = {
  0: { symbol: "none", unicode: "" },
  1: { symbol: "I", unicode: "𐌡" },
  2: { symbol: "II", unicode: "𐌢" },
  3: { symbol: "III", unicode: "𐌣" },
  4: { symbol: "IV", unicode: "𐌤" },
  5: { symbol: "V", unicode: "𐌥" },
  6: { symbol: "VI", unicode: "𐌦" },
  7: { symbol: "VII", unicode: "𐌧" },
  8: { symbol: "VIII", unicode: "𐌨" },
  9: { symbol: "IX", unicode: "𐌩" },
}

export const CISTERCIAN_TENS = {
  0: { symbol: "none", unicode: "" },
  1: { symbol: "I°", unicode: "𐌪" },
  2: { symbol: "II°", unicode: "𐌫" },
  3: { symbol: "III°", unicode: "𐌬" },
  4: { symbol: "IV°", unicode: "𐌭" },
  5: { symbol: "V°", unicode: "𐌮" },
  6: { symbol: "VI°", unicode: "𐌯" },
  7: { symbol: "VII°", unicode: "𐌰" },
  8: { symbol: "VIII°", unicode: "𐌱" },
  9: { symbol: "IX°", unicode: "𐌲" },
}

export const CISTERCIAN_HUNDREDS = {
  0: { symbol: "none", unicode: "" },
  1: { symbol: "I°°", unicode: "𐌳" },
  2: { symbol: "II°°", unicode: "𐌴" },
  3: { symbol: "III°°", unicode: "𐌵" },
  4: { symbol: "IV°°", unicode: "𐌶" },
  5: { symbol: "V°°", unicode: "𐌷" },
  6: { symbol: "VI°°", unicode: "𐌸" },
  7: { symbol: "VII°°", unicode: "𐌹" },
  8: { symbol: "VIII°°", unicode: "𐌺" },
  9: { symbol: "IX°°", unicode: "𐌻" },
}

export const CISTERCIAN_THOUSANDS = {
  0: { symbol: "none", unicode: "" },
  1: { symbol: "I°°°", unicode: "𐌼" },
  2: { symbol: "II°°°", unicode: "𐌽" },
  3: { symbol: "III°°°", unicode: "𐌾" },
  4: { symbol: "IV°°°", unicode: "𐌿" },
  5: { symbol: "V°°°", unicode: "𐍀" },
  6: { symbol: "VI°°°", unicode: "𐍁" },
  7: { symbol: "VII°°°", unicode: "𐍂" },
  8: { symbol: "VIII°°°", unicode: "𐍃" },
  9: { symbol: "IX°°°", unicode: "𐍄" },
}

/**
 * Get all Cistercian symbols for display
 */
export function getAllCistercianSymbols() {
  return [
    { label: "Ones (1-9)", symbols: CISTERCIAN_ONES },
    { label: "Tens (10-90)", symbols: CISTERCIAN_TENS },
    { label: "Hundreds (100-900)", symbols: CISTERCIAN_HUNDREDS },
    { label: "Thousands (1000-9000)", symbols: CISTERCIAN_THOUSANDS },
  ]
}

/**
 * Convert decimal number to Cistercian representation
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
 * Get symbol representation for a number
 */
export function getSymbolRepresentation(num: number): string {
  if (num < 1 || num > 9999) {
    throw new Error("Cistercian numbers must be between 1 and 9999")
  }

  const parts = decimalToCistercian(num)
  const symbols: string[] = []

  if (parts.thousands > 0) {
    symbols.push(CISTERCIAN_THOUSANDS[parts.thousands as keyof typeof CISTERCIAN_THOUSANDS].symbol)
  }
  if (parts.hundreds > 0) {
    symbols.push(CISTERCIAN_HUNDREDS[parts.hundreds as keyof typeof CISTERCIAN_HUNDREDS].symbol)
  }
  if (parts.tens > 0) {
    symbols.push(CISTERCIAN_TENS[parts.tens as keyof typeof CISTERCIAN_TENS].symbol)
  }
  if (parts.ones > 0) {
    symbols.push(CISTERCIAN_ONES[parts.ones as keyof typeof CISTERCIAN_ONES].symbol)
  }

  return symbols.join(" + ") || "0"
}

/**
 * Get detailed breakdown of a Cistercian number
 */
export function getDetailedBreakdown(num: number): CistercianPart[] {
  const parts = decimalToCistercian(num)
  const breakdown: CistercianPart[] = []

  if (parts.thousands > 0) {
    breakdown.push({
      value: parts.thousands * 1000,
      position: "thousands",
      symbol: CISTERCIAN_THOUSANDS[parts.thousands as keyof typeof CISTERCIAN_THOUSANDS].symbol,
      unicodeChar: CISTERCIAN_THOUSANDS[parts.thousands as keyof typeof CISTERCIAN_THOUSANDS].unicode,
    })
  }

  if (parts.hundreds > 0) {
    breakdown.push({
      value: parts.hundreds * 100,
      position: "hundreds",
      symbol: CISTERCIAN_HUNDREDS[parts.hundreds as keyof typeof CISTERCIAN_HUNDREDS].symbol,
      unicodeChar: CISTERCIAN_HUNDREDS[parts.hundreds as keyof typeof CISTERCIAN_HUNDREDS].unicode,
    })
  }

  if (parts.tens > 0) {
    breakdown.push({
      value: parts.tens * 10,
      position: "tens",
      symbol: CISTERCIAN_TENS[parts.tens as keyof typeof CISTERCIAN_TENS].symbol,
      unicodeChar: CISTERCIAN_TENS[parts.tens as keyof typeof CISTERCIAN_TENS].unicode,
    })
  }

  if (parts.ones > 0) {
    breakdown.push({
      value: parts.ones,
      position: "ones",
      symbol: CISTERCIAN_ONES[parts.ones as keyof typeof CISTERCIAN_ONES].symbol,
      unicodeChar: CISTERCIAN_ONES[parts.ones as keyof typeof CISTERCIAN_ONES].unicode,
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
