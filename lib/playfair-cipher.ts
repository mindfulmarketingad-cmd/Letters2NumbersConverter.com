/**
 * Playfair Cipher utilities
 * Encrypts/decrypts text using the Playfair digraph substitution cipher
 * Invented by Charles Wheatstone in 1854
 */

export interface PlayfairConfig {
  mergeLetterWith: string // Usually 'J' or 'I'
  paddingLetter: string // Usually 'X'
  mode: 'encrypt' | 'decrypt'
}

export interface PlayfairResult {
  output: string
  keySquare: string[][]
  keyedAlphabet: string
}

/**
 * Generate key square from keyword
 */
function generateKeySquare(keyword: string, mergeLetterWith: string): string[][] {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  
  // Remove the merge letter (usually J)
  const filteredAlphabet = alphabet.filter(letter => letter !== mergeLetterWith)

  // Process keyword: remove duplicates and non-letters
  const processed = keyword
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .filter((char, index, arr) => arr.indexOf(char) === index && char !== mergeLetterWith)

  // Combine processed keyword with remaining alphabet
  const keyAlphabet = [...processed, ...filteredAlphabet.filter(letter => !processed.includes(letter))].slice(0, 25)

  // Create 5x5 grid
  const grid: string[][] = []
  for (let i = 0; i < 5; i++) {
    grid.push(keyAlphabet.slice(i * 5, (i + 1) * 5))
  }

  return grid
}

/**
 * Find position of letter in key square
 */
function findPosition(grid: string[][], letter: string): [number, number] {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (grid[row][col] === letter.toUpperCase()) {
        return [row, col]
      }
    }
  }
  return [0, 0]
}

/**
 * Encrypt or decrypt a pair of letters
 */
function processPair(
  letter1: string,
  letter2: string,
  grid: string[][],
  isEncrypt: boolean
): string {
  const [row1, col1] = findPosition(grid, letter1)
  const [row2, col2] = findPosition(grid, letter2)

  let newRow1 = row1
  let newCol1 = col1
  let newRow2 = row2
  let newCol2 = col2

  if (row1 === row2) {
    // Same row: shift right for encrypt, left for decrypt
    newCol1 = isEncrypt ? (col1 + 1) % 5 : (col1 + 4) % 5
    newCol2 = isEncrypt ? (col2 + 1) % 5 : (col2 + 4) % 5
  } else if (col1 === col2) {
    // Same column: shift down for encrypt, up for decrypt
    newRow1 = isEncrypt ? (row1 + 1) % 5 : (row1 + 4) % 5
    newRow2 = isEncrypt ? (row2 + 1) % 5 : (row2 + 4) % 5
  } else {
    // Rectangle: swap columns
    const tempCol = newCol1
    newCol1 = newCol2
    newCol2 = tempCol
  }

  return grid[newRow1][newCol1] + grid[newRow2][newCol2]
}

/**
 * Prepare text for encryption (remove non-letters, handle duplicates)
 */
function prepareText(text: string, config: PlayfairConfig, isEncryption: boolean): string {
  let processed = text.toUpperCase().replace(/[^A-Z]/g, '')

  // Replace merge letter
  processed = processed.replace(new RegExp(config.mergeLetterWith, 'g'), 
    config.mergeLetterWith === 'J' ? 'I' : 'J')

  if (isEncryption) {
    // Handle duplicate letters by inserting padding
    let result = ''
    for (let i = 0; i < processed.length; i++) {
      result += processed[i]
      if (i < processed.length - 1 && processed[i] === processed[i + 1]) {
        result += config.paddingLetter
      }
    }
    processed = result

    // Pad with padding letter if odd length
    if (processed.length % 2 !== 0) {
      processed += config.paddingLetter
    }
  }

  return processed
}

/**
 * Encrypt or decrypt text using Playfair cipher
 */
export function playfairCipher(text: string, keyword: string, config: PlayfairConfig): PlayfairResult {
  if (!text || !keyword) {
    throw new Error('Text and keyword are required')
  }

  const keySquare = generateKeySquare(keyword, config.mergeLetterWith)
  const isEncrypt = config.mode === 'encrypt'

  // Prepare text
  let processedText = prepareText(text, config, isEncrypt)

  // Process pairs
  let output = ''
  for (let i = 0; i < processedText.length; i += 2) {
    const pair = processPair(
      processedText[i],
      processedText[i + 1],
      keySquare,
      isEncrypt
    )
    output += pair
  }

  // Build keyed alphabet string
  const keyedAlphabet = keySquare.flat().join('')

  return {
    output,
    keySquare,
    keyedAlphabet,
  }
}

/**
 * Validate inputs
 */
export function validatePlayfairInput(text: string, keyword: string): { valid: boolean; error?: string } {
  if (!text || text.trim().length === 0) {
    return { valid: false, error: 'Please enter text to encrypt or decrypt' }
  }

  if (!keyword || keyword.trim().length === 0) {
    return { valid: false, error: 'Please enter a keyword' }
  }

  return { valid: true }
}
