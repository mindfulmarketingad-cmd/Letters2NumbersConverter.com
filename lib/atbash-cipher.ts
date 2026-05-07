/**
 * Atbash Cipher Decoder
 * Simple substitution cipher where the alphabet is mirrored (A↔Z, B↔Y, etc.)
 * Involutory cipher - same operation for encryption and decryption
 */

const DEFAULT_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export interface AtbashResult {
  original: string
  result: string
  mappings: Map<string, string>
}

/**
 * Generate Atbash alphabet from input alphabet
 */
export function generateAtbashAlphabet(alphabet: string): string {
  return alphabet.split("").reverse().join("")
}

/**
 * Get the conversion mappings
 */
export function getAtbashMappings(
  original: string = DEFAULT_ALPHABET,
  atbash: string = generateAtbashAlphabet(DEFAULT_ALPHABET)
): Map<string, string> {
  const mappings = new Map<string, string>()

  const origUpper = original.toUpperCase()
  const atbashUpper = atbash.toUpperCase()

  for (let i = 0; i < origUpper.length; i++) {
    if (i < atbashUpper.length) {
      mappings.set(origUpper[i], atbashUpper[i])
      mappings.set(origUpper[i].toLowerCase(), atbashUpper[i].toLowerCase())
    }
  }

  return mappings
}

/**
 * Encode/Decode Atbash cipher
 */
export function processAtbash(text: string, mappings: Map<string, string>, preserveCase: boolean = true): string {
  let result = ""

  for (const char of text) {
    const upperChar = char.toUpperCase()
    if (mappings.has(upperChar)) {
      const mapped = mappings.get(upperChar)!
      result += preserveCase && char === char.toLowerCase() ? mapped.toLowerCase() : mapped
    } else {
      // Keep unmapped characters as-is
      result += char
    }
  }

  return result
}

/**
 * Validate alphabet
 */
export function validateAlphabet(alphabet: string): { valid: boolean; error?: string } {
  if (!alphabet || alphabet.length === 0) {
    return { valid: false, error: "Alphabet cannot be empty" }
  }

  // Check for duplicates
  const chars = new Set(alphabet.toUpperCase())
  if (chars.size !== alphabet.length) {
    return { valid: false, error: "Alphabet contains duplicate characters" }
  }

  return { valid: true }
}

/**
 * Get conversion chart for display
 */
export function getConversionChart(original: string = DEFAULT_ALPHABET): Array<{ from: string; to: string }> {
  const atbash = generateAtbashAlphabet(original)
  const chart: Array<{ from: string; to: string }> = []

  for (let i = 0; i < original.length; i++) {
    chart.push({
      from: original[i].toUpperCase(),
      to: atbash[i].toUpperCase(),
    })
  }

  return chart
}
