/**
 * Skip Cipher (Jump Cipher) utilities
 * A transposition cipher that extracts letters at regular intervals
 */

export interface SkipCipherResult {
  original: string
  result: string
  skipSize: number
  startPosition: number
  ignoreSpecialChars: boolean
  type: "encrypt" | "decrypt"
}

export interface BruteForceResult {
  skipSize: number
  startPosition: number
  result: string
  score: number
}

/**
 * Remove non-alphabetic characters while preserving positions
 */
function removeSpecialChars(text: string, keep: "all" | "letters" = "all"): string {
  if (keep === "letters") {
    return text.replace(/[^a-zA-Z]/g, "")
  }
  return text
}

/**
 * Encrypt text using Skip Cipher
 */
export function encryptSkipCipher(
  plaintext: string,
  skipSize: number,
  startPosition: number = 1,
  ignoreSpecialChars: boolean = true
): SkipCipherResult {
  if (skipSize < 1) throw new Error("Skip size must be at least 1")
  if (startPosition < 1) throw new Error("Start position must be at least 1")

  let text = ignoreSpecialChars ? removeSpecialChars(plaintext, "letters") : plaintext
  const originalLength = text.length
  const ciphertext: string[] = []

  let position = startPosition - 1 // Convert to 0-indexed
  while (position < originalLength) {
    ciphertext.push(text[position])
    position += skipSize
  }

  return {
    original: plaintext,
    result: ciphertext.join(""),
    skipSize,
    startPosition,
    ignoreSpecialChars,
    type: "encrypt",
  }
}

/**
 * Decrypt text using Skip Cipher
 */
export function decryptSkipCipher(
  ciphertext: string,
  skipSize: number,
  startPosition: number = 1,
  ignoreSpecialChars: boolean = true
): SkipCipherResult {
  if (skipSize < 1) throw new Error("Skip size must be at least 1")
  if (startPosition < 1) throw new Error("Start position must be at least 1")

  let cipher = ignoreSpecialChars ? removeSpecialChars(ciphertext, "letters") : ciphertext
  const cipherLength = cipher.length
  const plaintext: (string | null)[] = []

  // Calculate how many positions will be filled
  let position = startPosition - 1
  let charIndex = 0

  while (position < plaintext.length + cipherLength) {
    plaintext[position] = null
    position += skipSize
  }

  // Place characters at their positions
  position = startPosition - 1
  charIndex = 0
  while (position < plaintext.length + cipherLength && charIndex < cipherLength) {
    if (position >= plaintext.length) {
      plaintext.push(cipher[charIndex])
    } else {
      plaintext[position] = cipher[charIndex]
    }
    position += skipSize
    charIndex++
  }

  // Fill remaining positions (should be none if parameters are correct)
  const result = plaintext.filter((c) => c !== null).join("")

  return {
    original: ciphertext,
    result,
    skipSize,
    startPosition,
    ignoreSpecialChars,
    type: "decrypt",
  }
}

/**
 * Brute force attack - try all combinations
 */
export function bruteForceSkipCipher(
  ciphertext: string,
  ignoreSpecialChars: boolean = true,
  maxSkip: number = 100
): BruteForceResult[] {
  let cipher = ignoreSpecialChars ? removeSpecialChars(ciphertext, "letters") : ciphertext
  const results: BruteForceResult[] = []

  const cipherLength = cipher.length

  for (let skipSize = 1; skipSize <= Math.min(maxSkip, cipherLength); skipSize++) {
    for (let startPos = 1; startPos <= skipSize; startPos++) {
      try {
        const decrypted = decryptSkipCipher(ciphertext, skipSize, startPos, ignoreSpecialChars)
        results.push({
          skipSize,
          startPosition: startPos,
          result: decrypted.result,
          score: calculateTextScore(decrypted.result),
        })
      } catch (e) {
        // Skip invalid combinations
      }
    }
  }

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score)
}

/**
 * Calculate English likelihood score (simple version)
 */
function calculateTextScore(text: string): number {
  const words = text.toLowerCase().split(/\s+/)
  const commonWords = new Set([
    "the",
    "be",
    "to",
    "of",
    "and",
    "a",
    "in",
    "that",
    "have",
    "i",
    "it",
    "for",
    "not",
    "on",
    "with",
    "he",
    "as",
    "you",
    "do",
    "at",
    "this",
    "but",
    "his",
    "by",
    "from",
    "is",
    "was",
    "are",
    "an",
    "or",
    "will",
    "my",
    "one",
    "all",
    "would",
    "there",
    "their",
    "what",
  ])

  let score = 0
  for (const word of words) {
    if (word.length > 0 && commonWords.has(word)) {
      score += 10
    }
  }

  // Bonus for having vowels
  const vowels = (text.match(/[aeiou]/gi) || []).length
  score += vowels

  return score
}

/**
 * Validate parameters
 */
export function isValidSkipParameters(
  skipSize: number | string,
  startPosition: number | string,
  textLength: number
): { valid: boolean; error?: string } {
  const skip = typeof skipSize === "string" ? parseInt(skipSize) : skipSize
  const start = typeof startPosition === "string" ? parseInt(startPosition) : startPosition

  if (isNaN(skip)) return { valid: false, error: "Skip size must be a number" }
  if (isNaN(start)) return { valid: false, error: "Start position must be a number" }
  if (skip < 1) return { valid: false, error: "Skip size must be at least 1" }
  if (start < 1) return { valid: false, error: "Start position must be at least 1" }
  if (start > textLength) return { valid: false, error: "Start position exceeds text length" }

  return { valid: true }
}
