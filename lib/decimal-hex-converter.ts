/**
 * Decimal to Hexadecimal Converter utilities
 */

export const MAX_DECIMAL = 9223372036854775807 // 2^63 - 1
export const MIN_DECIMAL = -9223372036854775808 // -(2^63)

/**
 * Convert decimal number to hexadecimal
 */
export function decimalToHex(decimal: string | number): string {
  try {
    const num = typeof decimal === "string" ? BigInt(decimal) : BigInt(decimal)

    // Check range
    if (num > BigInt(MAX_DECIMAL) || num < BigInt(MIN_DECIMAL)) {
      throw new Error(`Value must be between ${MIN_DECIMAL} and ${MAX_DECIMAL}`)
    }

    // Convert to hex
    let hex = num.toString(16)

    // For negative numbers, convert to two's complement representation
    if (num < 0n) {
      const bits = 64
      const max = BigInt(1) << BigInt(bits)
      hex = (num + max).toString(16)
    }

    return hex
  } catch (err) {
    throw new Error("Invalid decimal number")
  }
}

/**
 * Convert hexadecimal to decimal
 */
export function hexToDecimal(hex: string): string {
  try {
    const cleaned = hex.replace(/^0x/i, "").trim()

    if (!cleaned) {
      throw new Error("Invalid hexadecimal value")
    }

    const num = BigInt(`0x${cleaned}`)
    return num.toString()
  } catch (err) {
    throw new Error("Invalid hexadecimal value")
  }
}

/**
 * Validate decimal input
 */
export function isValidDecimal(value: string): boolean {
  if (!value.trim()) return false
  try {
    const num = BigInt(value)
    return num >= BigInt(MIN_DECIMAL) && num <= BigInt(MAX_DECIMAL)
  } catch {
    return false
  }
}

/**
 * Validate hexadecimal input
 */
export function isValidHex(value: string): boolean {
  if (!value.trim()) return false
  const hexRegex = /^0x?[0-9a-fA-F]+$/
  return hexRegex.test(value)
}

/**
 * Format hex with 0x prefix
 */
export function formatHex(hex: string, includePrefix: boolean = false): string {
  const cleaned = hex.replace(/^0x/i, "")
  return includePrefix ? `0x${cleaned}` : cleaned
}

/**
 * Get conversion details
 */
export function getConversionDetails(decimal: string, hex: string) {
  return {
    decimal: decimal,
    hex: hex,
    hexWithPrefix: `0x${hex}`,
    binaryLength: hex.length * 4,
    hexLength: hex.length,
  }
}
