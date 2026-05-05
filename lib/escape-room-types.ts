// Escape Room Types and Utilities

export type PuzzleType = 'a1z26' | 'ascii' | 'morse' | 'binary' | 'hex' | 'riddle'

export interface Puzzle {
  id: string
  type: PuzzleType
  title: string
  description: string
  encodedClue: string
  answer: string
  hint: string
}

export interface EscapeRoom {
  name: string
  theme: string
  description: string
  puzzles: Puzzle[]
  createdAt: number
}

export const PUZZLE_TYPE_LABELS: Record<PuzzleType, string> = {
  a1z26: 'A1Z26 Cipher',
  ascii: 'ASCII Code',
  morse: 'Morse Code',
  binary: 'Binary',
  hex: 'Hexadecimal',
  riddle: 'Riddle'
}

export const PUZZLE_TYPE_DESCRIPTIONS: Record<PuzzleType, string> = {
  a1z26: 'Convert numbers to letters (1=A, 2=B, etc.)',
  ascii: 'Decode ASCII character codes',
  morse: 'Translate Morse code dots and dashes',
  binary: 'Convert binary to text',
  hex: 'Decode hexadecimal values',
  riddle: 'Solve a word puzzle or riddle'
}

// Encoding functions
export function encodeA1Z26(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => {
      if (char >= 'A' && char <= 'Z') {
        return (char.charCodeAt(0) - 64).toString()
      }
      return char === ' ' ? '-' : ''
    })
    .filter(Boolean)
    .join(' ')
}

export function encodeASCII(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0))
    .join(' ')
}

export function encodeMorse(text: string): string {
  const morseCode: Record<string, string> = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
  }
  return text
    .toUpperCase()
    .split('')
    .map(char => morseCode[char] || '')
    .filter(Boolean)
    .join(' ')
}

export function encodeBinary(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ')
}

export function encodeHex(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(16).toUpperCase())
    .join(' ')
}

export function encodeText(text: string, type: PuzzleType): string {
  switch (type) {
    case 'a1z26':
      return encodeA1Z26(text)
    case 'ascii':
      return encodeASCII(text)
    case 'morse':
      return encodeMorse(text)
    case 'binary':
      return encodeBinary(text)
    case 'hex':
      return encodeHex(text)
    case 'riddle':
      return text // Riddles are not encoded
    default:
      return text
  }
}

// Room serialization for URL sharing
export function encodeRoomToURL(room: EscapeRoom): string {
  const json = JSON.stringify(room)
  // Use base64 encoding for URL safety
  if (typeof window !== 'undefined') {
    return btoa(encodeURIComponent(json))
  }
  return Buffer.from(json).toString('base64')
}

export function decodeRoomFromURL(encoded: string): EscapeRoom | null {
  try {
    let json: string
    if (typeof window !== 'undefined') {
      json = decodeURIComponent(atob(encoded))
    } else {
      json = Buffer.from(encoded, 'base64').toString()
    }
    return JSON.parse(json) as EscapeRoom
  } catch {
    return null
  }
}

// Generate unique IDs
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}

// Pre-built example rooms
export const EXAMPLE_ROOMS: EscapeRoom[] = [
  {
    name: "The Spy's Secret",
    theme: "spy",
    description: "You've intercepted a series of coded messages from a double agent. Decode them all to reveal the location of the secret meeting.",
    puzzles: [
      {
        id: "spy1",
        type: "a1z26",
        title: "Intercepted Transmission",
        description: "This message was intercepted from enemy communications. The numbers represent letters.",
        encodedClue: "13 5 5 20 - 1 20 - 4 1 23 14",
        answer: "MEET AT DAWN",
        hint: "A=1, B=2, C=3... Use our Letters to Numbers converter!"
      },
      {
        id: "spy2",
        type: "morse",
        title: "Radio Signal",
        description: "A burst transmission was captured on frequency 7.3 MHz. Decode the Morse code.",
        encodedClue: ".... --- - . .-.. / .-.. --- -... -... -.--",
        answer: "HOTEL LOBBY",
        hint: "Dots are short beeps, dashes are long beeps. Space separates letters, / separates words."
      },
      {
        id: "spy3",
        type: "riddle",
        title: "The Agent's Riddle",
        description: "The final clue was left in a dead drop. Solve this riddle to complete your mission.",
        encodedClue: "I have hands but cannot clap. I have a face but cannot smile. I tell you something all day long. What am I?",
        answer: "CLOCK",
        hint: "Think about what has hands and a face but isn't alive..."
      }
    ],
    createdAt: Date.now()
  },
  {
    name: "Pirate's Treasure",
    theme: "treasure",
    description: "Captain Blackbeard left behind a series of coded clues leading to his buried treasure. Can you find it?",
    puzzles: [
      {
        id: "pirate1",
        type: "hex",
        title: "The Map Fragment",
        description: "Numbers carved into an old piece of driftwood. They appear to be hexadecimal codes.",
        encodedClue: "53 4B 55 4C 4C - 49 53 4C 45",
        answer: "SKULL ISLE",
        hint: "Hexadecimal uses 0-9 and A-F. Each pair of characters is one letter's ASCII code."
      },
      {
        id: "pirate2",
        type: "ascii",
        title: "Bottle Message",
        description: "A message in a bottle washed ashore. The numbers are ASCII character codes.",
        encodedClue: "80 65 97 114 108 32 67 111 118 101",
        answer: "Pearl Cove",
        hint: "ASCII codes: 65=A, 97=a. Our converter tool can help!"
      },
      {
        id: "pirate3",
        type: "a1z26",
        title: "X Marks the Spot",
        description: "The final coordinates are encoded. Where is the treasure buried?",
        encodedClue: "21 14 4 5 18 - 20 8 5 - 15 1 11",
        answer: "UNDER THE OAK",
        hint: "Simple letter-to-number cipher. Count through the alphabet!"
      }
    ],
    createdAt: Date.now()
  },
  {
    name: "Haunted Library",
    theme: "haunted",
    description: "You're trapped in a haunted library at midnight. Solve the ghostly puzzles to escape before dawn!",
    puzzles: [
      {
        id: "haunt1",
        type: "binary",
        title: "Ghostly Whispers",
        description: "The spirits communicate in an ancient digital tongue. Each group of 8 digits is a letter.",
        encodedClue: "01000101 01011000 01001001 01010100",
        answer: "EXIT",
        hint: "Binary uses only 0s and 1s. Convert each 8-bit group to a letter."
      },
      {
        id: "haunt2",
        type: "morse",
        title: "Flickering Lights",
        description: "The chandelier flickers in a strange pattern. Short flickers are dots, long ones are dashes.",
        encodedClue: "-... .- ... . -- . -. -",
        answer: "BASEMENT",
        hint: "This is Morse code. Use our converter or decode manually!"
      },
      {
        id: "haunt3",
        type: "riddle",
        title: "The Librarian's Final Question",
        description: "A spectral librarian blocks the exit. Answer her riddle to pass.",
        encodedClue: "I can fly without wings. I can cry without eyes. Wherever I go, darkness flies. What am I?",
        answer: "LIGHT",
        hint: "Think about what banishes darkness..."
      }
    ],
    createdAt: Date.now()
  }
]
