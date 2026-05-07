/**
 * Hexahue Cipher - Color-based encoding alphabet
 * Invented by Josh Cramer
 */

// Hexahue character definitions
// Each character is represented by a 2x4 grid of hex colors
export const HEXAHUE_ALPHABET: Record<string, string[][]> = {
  'A': [['#FF0000', '#FF0000', '#00FF00', '#00FF00'], ['#0000FF', '#0000FF', '#FFFF00', '#FFFF00']],
  'B': [['#FF0000', '#FF00FF', '#FFFF00', '#FFFF00'], ['#0000FF', '#00FFFF', '#00FF00', '#FFFF00']],
  'C': [['#00FF00', '#00FF00', '#FF00FF', '#FF00FF'], ['#FFFF00', '#FFFF00', '#0000FF', '#0000FF']],
  'D': [['#FF00FF', '#FF00FF', '#00FF00', '#00FFFF'], ['#FF0000', '#FF0000', '#0000FF', '#0000FF']],
  'E': [['#FFFF00', '#FFFF00', '#FF00FF', '#FF00FF'], ['#00FFFF', '#00FFFF', '#FF0000', '#FF0000']],
  'F': [['#FF0000', '#FF0000', '#FFFF00', '#00FF00'], ['#0000FF', '#00FFFF', '#FF00FF', '#FF00FF']],
  'G': [['#00FF00', '#00FF00', '#FFFF00', '#FFFF00'], ['#FF0000', '#FF00FF', '#0000FF', '#0000FF']],
  'H': [['#FF00FF', '#FF00FF', '#00FFFF', '#00FFFF'], ['#FF0000', '#FF0000', '#FFFF00', '#FFFF00']],
  'I': [['#00FFFF', '#00FFFF', '#FF0000', '#FF0000'], ['#FFFF00', '#00FF00', '#FF00FF', '#FF00FF']],
  'J': [['#FF0000', '#FFFF00', '#00FFFF', '#00FFFF'], ['#FF00FF', '#FF00FF', '#00FF00', '#00FF00']],
  'K': [['#FFFF00', '#FFFF00', '#FF00FF', '#FF00FF'], ['#FF0000', '#FF0000', '#00FF00', '#00FFFF']],
  'L': [['#00FF00', '#00FF00', '#00FFFF', '#FF00FF'], ['#FF00FF', '#FF00FF', '#FF0000', '#FF0000']],
  'M': [['#00FFFF', '#00FFFF', '#FF0000', '#FF00FF'], ['#FF00FF', '#FFFF00', '#00FF00', '#00FF00']],
  'N': [['#FF00FF', '#FF00FF', '#FF0000', '#FFFF00'], ['#FFFF00', '#00FFFF', '#0000FF', '#0000FF']],
  'O': [['#00FF00', '#FFFF00', '#FF0000', '#FF00FF'], ['#00FFFF', '#00FFFF', '#FF00FF', '#FFFF00']],
  'P': [['#FF0000', '#FF0000', '#00FF00', '#00FFFF'], ['#FFFF00', '#FFFF00', '#FF00FF', '#FF00FF']],
  'Q': [['#00FFFF', '#00FFFF', '#FF00FF', '#FF00FF'], ['#FF0000', '#FFFF00', '#00FF00', '#00FF00']],
  'R': [['#00FF00', '#FF00FF', '#FF0000', '#FFFF00'], ['#0000FF', '#0000FF', '#00FFFF', '#00FFFF']],
  'S': [['#FF00FF', '#0000FF', '#FFFF00', '#00FF00'], ['#FF0000', '#FF00FF', '#00FFFF', '#00FFFF']],
  'T': [['#00FFFF', '#FF0000', '#0000FF', '#FF00FF'], ['#FFFF00', '#FF0000', '#00FF00', '#FF00FF']],
  'U': [['#0000FF', '#00FFFF', '#FF0000', '#FF00FF'], ['#FFFF00', '#00FF00', '#FF00FF', '#0000FF']],
  'V': [['#FF00FF', '#FF0000', '#00FF00', '#FF00FF'], ['#00FFFF', '#FFFF00', '#0000FF', '#0000FF']],
  'W': [['#00FF00', '#00FFFF', '#FF00FF', '#FF0000'], ['#FFFF00', '#00FF00', '#FF00FF', '#00FFFF']],
  'X': [['#FF0000', '#FF00FF', '#00FFFF', '#00FFFF'], ['#FFFF00', '#FF0000', '#00FF00', '#FF00FF']],
  'Y': [['#00FFFF', '#FF00FF', '#FFFF00', '#FF0000'], ['#FF00FF', '#00FF00', '#0000FF', '#0000FF']],
  'Z': [['#FF0000', '#FF0000', '#FF0000', '#FF0000'], ['#FFFF00', '#FFFF00', '#00FF00', '#00FF00']],
  '.': [['#000000', '#000000', '#FFFFFF', '#FFFFFF'], ['#FFFFFF', '#FFFFFF', '#000000', '#000000']],
  ',': [['#000000', '#FFFFFF', '#000000', '#FFFFFF'], ['#FFFFFF', '#000000', '#FFFFFF', '#000000']],
  ' ': [['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'], ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '0': [['#000000', '#000000', '#000000', '#000000'], ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '1': [['#000000', '#FFFFFF', '#000000', '#000000'], ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '2': [['#000000', '#000000', '#FFFFFF', '#000000'], ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '3': [['#FFFFFF', '#000000', '#000000', '#FFFFFF'], ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '4': [['#000000', '#FFFFFF', '#FFFFFF', '#000000'], ['#FFFFFF', '#FFFFFF', '#000000', '#FFFFFF']],
  '5': [['#FFFFFF', '#000000', '#FFFFFF', '#000000'], ['#FFFFFF', '#FFFFFF', '#000000', '#FFFFFF']],
  '6': [['#000000', '#000000', '#000000', '#FFFFFF'], ['#FFFFFF', '#000000', '#FFFFFF', '#FFFFFF']],
  '7': [['#FFFFFF', '#FFFFFF', '#000000', '#000000'], ['#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF']],
  '8': [['#000000', '#FFFFFF', '#FFFFFF', '#FFFFFF'], ['#FFFFFF', '#000000', '#FFFFFF', '#000000']],
  '9': [['#FFFFFF', '#000000', '#000000', '#FFFFFF'], ['#FFFFFF', '#000000', '#FFFFFF', '#FFFFFF']],
}

export type HexahueCharacter = keyof typeof HEXAHUE_ALPHABET

/**
 * Get the color grid for a character
 */
export function getHexahueGrid(char: HexahueCharacter): string[][] {
  return HEXAHUE_ALPHABET[char] || HEXAHUE_ALPHABET['0']
}

/**
 * Get all available characters
 */
export function getAllHexahueCharacters(): HexahueCharacter[] {
  return Object.keys(HEXAHUE_ALPHABET) as HexahueCharacter[]
}

/**
 * Convert text to Hexahue representation
 */
export function textToHexahue(text: string): HexahueCharacter[] {
  return text.toUpperCase().split('').filter(char => char in HEXAHUE_ALPHABET) as HexahueCharacter[]
}

/**
 * Convert Hexahue sequence to text
 */
export function hexahueToText(sequence: HexahueCharacter[]): string {
  return sequence.join('')
}
