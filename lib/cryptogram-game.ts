export interface CryptogramGameState {
  original: string
  encrypted: string
  key: Record<string, string>
  solverKey: Record<string, string>
  mistakes: number
  maxMistakes: number
  revealed: Set<string>
  userGuesses: Record<string, string>
  startTime: number
  completed: boolean
  won: boolean
}

const FAMOUS_QUOTES = [
  "The only way to do great work is to love what you do. Steve Jobs",
  "Innovation distinguishes between a leader and a follower.",
  "Life is what happens when you're busy making other plans.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is during our darkest moments that we must focus to see the light.",
  "The only impossible journey is the one you never begin.",
  "In the middle of difficulty lies opportunity.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Believe you can and you're halfway there.",
  "Your time is limited, don't waste it living someone else's life.",
]

function generateRandomKey(): Record<string, string> {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const shuffled = [...alphabet].sort(() => Math.random() - 0.5)
  const key: Record<string, string> = {}

  alphabet.forEach((letter, index) => {
    key[letter] = shuffled[index]
  })

  return key
}

function createSolverKey(encryptionKey: Record<string, string>): Record<string, string> {
  const reverseKey: Record<string, string> = {}
  for (const [original, encrypted] of Object.entries(encryptionKey)) {
    reverseKey[encrypted] = original
  }
  return reverseKey
}

function encodeText(text: string, key: Record<string, string>): string {
  let result = ""
  for (const char of text.toUpperCase()) {
    result += /[A-Z]/.test(char) ? key[char] : char
  }
  return result
}

function decodePosition(
  encrypted: string,
  userGuesses: Record<string, string>,
  solverKey: Record<string, string>
): string {
  if (/[A-Z]/.test(encrypted)) {
    return userGuesses[encrypted] || ""
  }
  return encrypted
}

export function initializeCryptogramGame(quote?: string): CryptogramGameState {
  const original = (quote || FAMOUS_QUOTES[Math.floor(Math.random() * FAMOUS_QUOTES.length)]).toUpperCase()
  const key = generateRandomKey()
  const encrypted = encodeText(original, key)
  const solverKey = createSolverKey(key)

  // Reveal 2 random letters
  const uniqueLetters = [...new Set(original.match(/[A-Z]/g) || [])]
  const revealCount = Math.min(2, uniqueLetters.length)
  const revealed = new Set<string>()

  for (let i = 0; i < revealCount; i++) {
    const randomLetter = uniqueLetters[Math.floor(Math.random() * uniqueLetters.length)]
    revealed.add(randomLetter)
  }

  const userGuesses: Record<string, string> = {}
  for (const letter of revealed) {
    const encrypted = key[letter]
    userGuesses[encrypted] = letter
  }

  return {
    original,
    encrypted,
    key,
    solverKey,
    mistakes: 0,
    maxMistakes: 6,
    revealed,
    userGuesses,
    startTime: Date.now(),
    completed: false,
    won: false,
  }
}

export function makeGuess(state: CryptogramGameState, encryptedLetter: string, guessedLetter: string): CryptogramGameState {
  const correctLetter = state.solverKey[encryptedLetter]

  if (state.userGuesses[encryptedLetter]) {
    return state // Already guessed
  }

  const newState = { ...state, userGuesses: { ...state.userGuesses } }

  if (guessedLetter.toUpperCase() === correctLetter) {
    newState.userGuesses[encryptedLetter] = guessedLetter.toUpperCase()
    newState.revealed.add(guessedLetter.toUpperCase())
  } else {
    newState.mistakes = state.mistakes + 1
  }

  // Check if won
  let solved = true
  for (const char of state.encrypted) {
    if (/[A-Z]/.test(char) && !newState.userGuesses[char]) {
      solved = false
      break
    }
  }

  newState.completed = solved || newState.mistakes >= newState.maxMistakes
  newState.won = solved

  return newState
}

export function getDisplayText(state: CryptogramGameState): string {
  let result = ""
  const words = state.encrypted.split(" ")

  for (const word of words) {
    for (const char of word) {
      if (/[A-Z]/.test(char)) {
        result += state.userGuesses[char] || "_"
      } else {
        result += char
      }
    }
    result += " "
  }

  return result.trim()
}

export function getAvailableLetters(): string[] {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
}

export function getEncryptedLetters(encrypted: string): string[] {
  const letters = new Set<string>()
  for (const char of encrypted) {
    if (/[A-Z]/.test(char)) {
      letters.add(char)
    }
  }
  return Array.from(letters).sort()
}

export function calculateScore(state: CryptogramGameState): number {
  if (!state.won) return 0
  const timeTaken = Math.floor((Date.now() - state.startTime) / 1000)
  const baseScore = 1000
  const mistakePenalty = state.mistakes * 100
  const timePenalty = Math.floor(timeTaken / 10)
  return Math.max(0, baseScore - mistakePenalty - timePenalty)
}
