/**
 * Camel Case Converter utilities
 * Converts various text formats to camelCase or PascalCase
 */

type CaseFormat = "camelCase" | "PascalCase"

/**
 * Split text into words from various formats
 */
function splitIntoWords(text: string): string[] {
  // Handle snake_case, kebab-case, and mixed separators
  const withSpaces = text
    .replace(/([a-z])([A-Z])/g, "$1 $2") // camelCase to spaces
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // ABCdef to spaces
    .replace(/_/g, " ") // snake_case to spaces
    .replace(/-/g, " ") // kebab-case to spaces
    .replace(/\s+/g, " ") // multiple spaces to single

  return withSpaces
    .split(" ")
    .filter((word) => word.length > 0)
    .map((word) => word.toLowerCase())
}

/**
 * Convert a single line to camelCase or PascalCase
 */
export function convertLine(text: string, format: CaseFormat): string {
  if (!text.trim()) {
    return ""
  }

  const words = splitIntoWords(text)

  if (words.length === 0) {
    return ""
  }

  if (format === "PascalCase") {
    return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("")
  }

  // camelCase
  const firstWord = words[0]
  const restWords = words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1))

  return firstWord + restWords.join("")
}

/**
 * Convert multiple lines (batch processing)
 */
export function convertText(text: string, format: CaseFormat): string {
  if (!text.trim()) {
    return ""
  }

  return text
    .split("\n")
    .map((line) => convertLine(line, format))
    .join("\n")
}

/**
 * Get example conversions
 */
export function getExamples(format: CaseFormat): string {
  const examples = [
    "hello world",
    "user_profile_data",
    "my-page-component",
    "some random text",
  ]

  return examples.map((example) => convertLine(example, format)).join("\n")
}

/**
 * Count characters (excluding whitespace)
 */
export function countCharacters(text: string): number {
  return text.replace(/\s/g, "").length
}

/**
 * Count lines
 */
export function countLines(text: string): number {
  if (!text.trim()) return 0
  return text.split("\n").length
}
