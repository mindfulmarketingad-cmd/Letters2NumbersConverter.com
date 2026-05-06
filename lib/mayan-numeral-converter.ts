/**
 * Mayan Numeral Converter utilities
 * Mayan numerals use base-20 (vigesimal) system
 * Symbols: shell (0), dot (1), bar (5)
 */

interface MayanDigit {
  value: number
  dots: number
  bars: number
}

/**
 * Convert a single digit (0-19) to Mayan representation
 */
export function decimalToMayanDigit(num: number): MayanDigit {
  if (num < 0 || num > 19) {
    throw new Error("Mayan digit must be between 0 and 19")
  }

  let dots = 0
  let bars = 0

  if (num === 0) {
    return { value: 0, dots: 0, bars: 0 }
  }

  // Calculate bars (each bar = 5)
  bars = Math.floor(num / 5)
  // Calculate dots (remainder after bars)
  dots = num % 5

  return { value: num, dots, bars }
}

/**
 * Convert decimal number to Mayan numeral system (base-20)
 */
export function decimalToMayan(num: number): MayanDigit[] {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Must be a non-negative integer")
  }

  if (num === 0) {
    return [{ value: 0, dots: 0, bars: 0 }]
  }

  const digits: MayanDigit[] = []
  let remaining = num

  // Convert to base-20 digits (most significant first for display)
  while (remaining > 0) {
    const digit = remaining % 20
    digits.unshift(decimalToMayanDigit(digit))
    remaining = Math.floor(remaining / 20)
  }

  return digits
}

/**
 * Convert Mayan numeral back to decimal
 */
export function mayanToDecimal(digits: MayanDigit[]): number {
  let result = 0
  const multiplier = Math.pow(20, digits.length - 1)

  for (let i = 0; i < digits.length; i++) {
    const positionValue = digits[i].value * Math.pow(20, digits.length - 1 - i)
    result += positionValue
  }

  return result
}

/**
 * Get visual representation of a Mayan digit
 */
export function getMayanVisualRepresentation(digit: MayanDigit): string {
  if (digit.value === 0) {
    return "⊘" // Shell shape representation
  }

  const barSymbol = "━" // Bar symbol
  const dotSymbol = "•" // Dot symbol

  let representation = ""

  // Add bars first (on top)
  for (let i = 0; i < digit.bars; i++) {
    representation += barSymbol + "\n"
  }

  // Add dots below bars
  if (digit.dots > 0) {
    representation += dotSymbol.repeat(digit.dots)
  }

  return representation
}
