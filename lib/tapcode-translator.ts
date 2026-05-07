/**
 * Tapcode Translator utility
 * Encodes/decodes messages using the 5x5 tapcode grid
 */

// Tapcode grid (5x5)
const TAPCODE_GRID = [
  ['A', 'B', 'C', 'D', 'E'],
  ['F', 'G', 'H', 'I', 'K'], // I/J merged
  ['L', 'M', 'N', 'O', 'P'],
  ['Q', 'R', 'S', 'T', 'U'],
  ['V', 'W', 'X', 'Y', 'Z']
]

// Create reverse mapping for decoding
const LETTER_TO_CODE = new Map<string, [number, number]>()
for (let row = 0; row < 5; row++) {
  for (let col = 0; col < 5; col++) {
    LETTER_TO_CODE.set(TAPCODE_GRID[row][col], [row + 1, col + 1])
  }
}
// J maps to I position
LETTER_TO_CODE.set('J', [2, 4])

export type CodeType = 'dots' | 'numbers' | 'knocks'

export interface TapcodeResult {
  encoded: string
  decoded: string
  codeType: CodeType
}

/**
 * Convert message to tapcode
 */
export function messageToTapcode(message: string, codeType: CodeType = 'dots'): string {
  const codes: string[] = []

  for (const char of message.toUpperCase()) {
    if (char === ' ') {
      codes.push(formatCode(0, 0, codeType)) // Space separator
      continue
    }

    if (!/[A-Z]/.test(char)) {
      continue // Skip non-letters
    }

    const code = LETTER_TO_CODE.get(char)
    if (code) {
      codes.push(formatCode(code[0], code[1], codeType))
    }
  }

  return codes.join(' ')
}

/**
 * Format code based on type
 */
function formatCode(row: number, col: number, codeType: CodeType): string {
  if (row === 0 && col === 0) {
    // Space indicator
    return codeType === 'numbers' ? '0-0' : codeType === 'knocks' ? '(pause)' : '•••'
  }

  const rowStr = codeType === 'numbers' ? String(row) : codeType === 'knocks' ? '*'.repeat(row) : '•'.repeat(row)
  const colStr = codeType === 'numbers' ? String(col) : codeType === 'knocks' ? '*'.repeat(col) : '•'.repeat(col)
  const separator = codeType === 'numbers' ? '-' : codeType === 'knocks' ? ' ' : ' '

  return `${rowStr}${separator}${colStr}`
}

/**
 * Convert tapcode back to message
 */
export function tapcodeToMessage(tapcode: string): string {
  const codes = tapcode.split(' ').filter(c => c.length > 0)
  const letters: string[] = []

  for (const code of codes) {
    // Parse different formats
    let row = 0
    let col = 0

    if (code.includes('-')) {
      // Number format: "1-2" or dot/knock format with dash
      const parts = code.split('-')
      row = parts[0].length > 0 ? (code[0] === '•' || code[0] === '*' ? parts[0].length : parseInt(parts[0]) || 0) : 0
      col = parts[1].length > 0 ? (code.includes('•') || code.includes('*') ? parts[1].length : parseInt(parts[1]) || 0) : 0
    } else if (code === '•••' || code === '(pause)') {
      // Space
      letters.push(' ')
      continue
    } else {
      // Dot format without separator
      const dotCount = code.match(/•/g)?.length || code.match(/\*/g)?.length || 0
      if (dotCount > 0) {
        row = dotCount
        continue
      }
    }

    if (row > 0 && row <= 5 && col > 0 && col <= 5) {
      letters.push(TAPCODE_GRID[row - 1][col - 1])
    } else if (row === 0 && col === 0) {
      letters.push(' ')
    }
  }

  return letters.join('')
}

/**
 * Get the tapcode grid visualization
 */
export function getTapcodeGrid(): string[][] {
  return TAPCODE_GRID
}

/**
 * Get code for a specific letter
 */
export function getLetterCode(letter: string): [number, number] | null {
  return LETTER_TO_CODE.get(letter.toUpperCase()) || null
}
