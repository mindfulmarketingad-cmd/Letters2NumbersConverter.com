/**
 * Line Ending Converter utilities
 * Converts between different line ending formats
 */

export type LineEndingFormat = "LF" | "CRLF" | "CR"

export interface LineEndingInfo {
  name: string
  format: LineEndingFormat
  description: string
  example: string
}

export const LINE_ENDING_FORMATS: LineEndingInfo[] = [
  {
    name: "LF (Unix/Mac)",
    format: "LF",
    description: "Line Feed (\\n) - Unix, Linux, macOS",
    example: "line1\\nline2",
  },
  {
    name: "CRLF (Windows)",
    format: "CRLF",
    description: "Carriage Return + Line Feed (\\r\\n) - Windows",
    example: "line1\\r\\nline2",
  },
  {
    name: "CR (Old Mac)",
    format: "CR",
    description: "Carriage Return (\\r) - Old Mac OS 9 and earlier",
    example: "line1\\rline2",
  },
]

/**
 * Normalize line endings - convert all line endings to LF first
 */
function normalize(text: string): string {
  return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n")
}

/**
 * Convert text to target line ending format
 */
export function convertLineEndings(text: string, targetFormat: LineEndingFormat): string {
  if (!text) {
    return ""
  }

  // First normalize to LF
  const normalized = normalize(text)

  // Then convert to target format
  switch (targetFormat) {
    case "LF":
      return normalized
    case "CRLF":
      return normalized.replace(/\n/g, "\r\n")
    case "CR":
      return normalized.replace(/\n/g, "\r")
    default:
      return normalized
  }
}

/**
 * Detect the line ending format in text
 */
export function detectLineEnding(text: string): LineEndingFormat | null {
  if (text.includes("\r\n")) {
    return "CRLF"
  }
  if (text.includes("\r")) {
    return "CR"
  }
  if (text.includes("\n")) {
    return "LF"
  }
  return null
}

/**
 * Get line count
 */
export function getLineCount(text: string): number {
  if (!text) return 0
  return text.split(/\r\n|\r|\n/).length
}

/**
 * Get character count (including line endings)
 */
export function getCharacterCount(text: string): number {
  return text.length
}

/**
 * Get byte size of text
 */
export function getByteSize(text: string): number {
  return new Blob([text]).size
}
