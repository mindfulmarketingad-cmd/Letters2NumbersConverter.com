interface CodeChartProps {
  type: "standard" | "zero-based" | "ascii" | "hex" | "binary"
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

function getValue(letter: string, type: CodeChartProps["type"]): string {
  const index = letter.charCodeAt(0) - 65
  switch (type) {
    case "standard":
      return String(index + 1)
    case "zero-based":
      return String(index)
    case "ascii":
      return String(letter.charCodeAt(0))
    case "hex":
      return letter.charCodeAt(0).toString(16).toUpperCase()
    case "binary":
      return letter.charCodeAt(0).toString(2).padStart(8, "0")
    default:
      return String(index + 1)
  }
}

export function CodeChart({ type }: CodeChartProps) {
  return (
    <div className="grid grid-cols-13 sm:grid-cols-13 gap-1 sm:gap-1.5">
      {/* First row: A-M */}
      {alphabet.slice(0, 13).map((letter) => (
        <div
          key={letter}
          className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-card border border-border rounded-md"
        >
          <span className="text-sm sm:text-base font-semibold text-foreground">{letter}</span>
          <span className={`text-xs sm:text-sm text-muted-foreground ${type === "binary" ? "font-mono text-[8px] sm:text-[10px]" : ""}`}>
            {getValue(letter, type)}
          </span>
        </div>
      ))}
      {/* Second row: N-Z */}
      {alphabet.slice(13).map((letter) => (
        <div
          key={letter}
          className="flex flex-col items-center justify-center p-1.5 sm:p-2 bg-card border border-border rounded-md"
        >
          <span className="text-sm sm:text-base font-semibold text-foreground">{letter}</span>
          <span className={`text-xs sm:text-sm text-muted-foreground ${type === "binary" ? "font-mono text-[8px] sm:text-[10px]" : ""}`}>
            {getValue(letter, type)}
          </span>
        </div>
      ))}
    </div>
  )
}
