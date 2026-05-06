/**
 * Babylonian Numeral Converter utilities
 * Babylonian numerals use base-60 (sexagesimal) system
 * Symbols: wedge (1, for units) and chevron (10, for tens)
 */

interface BabylonianDigit {
  value: number
  tens: number
  ones: number
}

/**
 * Convert a single digit (0-59) to Babylonian representation
 */
export function decimalToBabylonianDigit(num: number): BabylonianDigit {
  if (num < 0 || num > 59) {
    throw new Error("Babylonian digit must be between 0 and 59")
  }

  let tens = 0
  let ones = 0

  if (num === 0) {
    return { value: 0, tens: 0, ones: 0 }
  }

  // Calculate tens (each chevron = 10)
  tens = Math.floor(num / 10)
  // Calculate ones (remainder after tens)
  ones = num % 10

  return { value: num, tens, ones }
}

/**
 * Convert decimal number to Babylonian numeral system (base-60)
 */
export function decimalToBabylonian(num: number): BabylonianDigit[] {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Must be a non-negative integer")
  }

  if (num === 0) {
    return [{ value: 0, tens: 0, ones: 0 }]
  }

  const digits: BabylonianDigit[] = []
  let remaining = num

  // Convert to base-60 digits (most significant first for display)
  while (remaining > 0) {
    const digit = remaining % 60
    digits.unshift(decimalToBabylonianDigit(digit))
    remaining = Math.floor(remaining / 60)
  }

  return digits
}

/**
 * Convert Babylonian numeral back to decimal
 */
export function babylonianToDecimal(digits: BabylonianDigit[]): number {
  let result = 0

  for (let i = 0; i < digits.length; i++) {
    const positionValue = digits[i].value * Math.pow(60, digits.length - 1 - i)
    result += positionValue
  }

  return result
}

/**
 * Get Unicode cuneiform representation of a Babylonian digit
 * Using Unicode cuneiform characters
 */
export function getCuneiformSymbol(digit: BabylonianDigit): string {
  // Unicode cuneiform characters
  const WEDGE = "𒐏" // Wedge for 1
  const CHEVRON = "𒐛" // Chevron for 10
  const SPACE = "𒐘" // Space/placeholder

  if (digit.value === 0) {
    return SPACE
  }

  let symbol = ""

  // Add chevrons (tens)
  for (let i = 0; i < digit.tens; i++) {
    symbol += CHEVRON
  }

  // Add wedges (ones)
  for (let i = 0; i < digit.ones; i++) {
    symbol += WEDGE
  }

  return symbol || SPACE
}

/**
 * Get visual representation text of a Babylonian digit
 */
export function getBabylonianVisualRepresentation(digit: BabylonianDigit): string {
  const chevronSymbol = "𒐛" // Chevron symbol
  const wedgeSymbol = "𒐏" // Wedge symbol

  if (digit.value === 0) {
    return "𒐘" // Space symbol for zero
  }

  let representation = ""

  // Add chevrons (tens)
  for (let i = 0; i < digit.tens; i++) {
    representation += chevronSymbol
  }

  // Add wedges (ones)
  for (let i = 0; i < digit.ones; i++) {
    representation += wedgeSymbol
  }

  return representation
}

/**
 * Get simple text representation for display
 */
export function getBabylonianSimpleRepresentation(digit: BabylonianDigit): string {
  if (digit.value === 0) {
    return "(empty)"
  }

  const parts: string[] = []
  if (digit.tens > 0) {
    parts.push(`${digit.tens} × 10`)
  }
  if (digit.ones > 0) {
    parts.push(`${digit.ones} × 1`)
  }

  return parts.join(" + ")
}
