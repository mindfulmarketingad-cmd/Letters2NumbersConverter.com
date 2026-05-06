// Famous quotes for cryptogram puzzles
export const FAMOUS_QUOTES = [
  "The only way to do great work is to love what you do. Steve Jobs",
  "Innovation distinguishes between a leader and a follower. Steve Jobs",
  "Life is what happens when you're busy making other plans. John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. Aristotle",
  "The only impossible journey is the one you never begin. Tony Robbins",
  "In the middle of difficulty lies opportunity. Albert Einstein",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. Winston Churchill",
  "Believe you can and you're halfway there. Theodore Roosevelt",
  "The best time to plant a tree was 20 years ago. The second best time is now. Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. Steve Jobs",
  "The way to get started is to quit talking and begin doing. Walt Disney",
  "Don't let yesterday take up too much of today. Will Rogers",
  "You learn more from failure than from success. Unknown",
  "It's not whether you get knocked down, it's whether you get up. Vince Lombardi",
];

export interface CryptogramData {
  original: string;
  encoded: string;
  key: Record<string, string>;
  revealedLetters: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: string;
  id: string;
}

function generateRandomKey(): Record<string, string> {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const shuffled = [...alphabet].sort(() => Math.random() - 0.5);
  const key: Record<string, string> = {};
  
  alphabet.forEach((letter, index) => {
    key[letter] = shuffled[index];
  });
  
  return key;
}

function getRevealedLetters(difficulty: 'easy' | 'medium' | 'hard'): string[] {
  if (difficulty === 'easy') return 'ETAOIN'.split('');
  if (difficulty === 'medium') return 'ETA'.split('');
  return [];
}

export function generateCryptogram(
  text: string,
  difficulty: 'easy' | 'medium' | 'hard' = 'medium'
): CryptogramData {
  const originalText = text.toUpperCase();
  const key = generateRandomKey();
  const revealed = getRevealedLetters(difficulty);

  // Create a modified key where revealed letters map to themselves
  const modifiedKey = { ...key };
  revealed.forEach(letter => {
    modifiedKey[letter] = letter;
  });

  // Encode the text
  let encoded = '';
  for (const char of originalText) {
    if (/[A-Z]/.test(char)) {
      encoded += modifiedKey[char];
    } else {
      encoded += char;
    }
  }

  return {
    original: originalText,
    encoded,
    key: modifiedKey,
    revealedLetters: revealed,
    difficulty,
    createdAt: new Date().toISOString(),
    id: Math.random().toString(36).substring(7),
  };
}

export function encodeCryptogram(text: string, key: Record<string, string>): string {
  let result = '';
  for (const char of text.toUpperCase()) {
    if (/[A-Z]/.test(char)) {
      result += key[char];
    } else {
      result += char;
    }
  }
  return result;
}

export function decodeCryptogram(encoded: string, reverseKey: Record<string, string>): string {
  let result = '';
  for (const char of encoded.toUpperCase()) {
    if (/[A-Z]/.test(char)) {
      result += reverseKey[char] || '?';
    } else {
      result += char;
    }
  }
  return result;
}

export function createSolveKey(cryptogramKey: Record<string, string>): Record<string, string> {
  const reverseKey: Record<string, string> = {};
  for (const [original, encoded] of Object.entries(cryptogramKey)) {
    reverseKey[encoded] = original;
  }
  return reverseKey;
}

export function shareCryptogram(cryptogram: CryptogramData): string {
  const data = btoa(JSON.stringify({
    encoded: cryptogram.encoded,
    key: cryptogram.key,
    difficulty: cryptogram.difficulty,
  }));
  return `${window.location.origin}/tools/cryptogram-solver?puzzle=${data}`;
}

export function decodePuzzleFromUrl(puzzleData: string): CryptogramData | null {
  try {
    const decoded = JSON.parse(atob(puzzleData));
    return {
      original: '',
      encoded: decoded.encoded,
      key: decoded.key,
      revealedLetters: getRevealedLetters(decoded.difficulty),
      difficulty: decoded.difficulty,
      createdAt: new Date().toISOString(),
      id: Math.random().toString(36).substring(7),
    };
  } catch {
    return null;
  }
}
