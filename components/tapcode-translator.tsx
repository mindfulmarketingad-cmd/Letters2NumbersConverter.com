"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw } from "lucide-react"
import { messageToTapcode, tapcodeToMessage, getTapcodeGrid, getLetterCode, type CodeType } from "@/lib/tapcode-translator"

export function TapcodeTranslator() {
  const [message, setMessage] = useState("hi")
  const [codeType, setCodeType] = useState<CodeType>("dots")
  const [expandGrid, setExpandGrid] = useState(true)

  const tapcode = useMemo(() => messageToTapcode(message, codeType), [message, codeType])
  const grid = getTapcodeGrid()

  const handleClear = () => {
    setMessage("")
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-100/50 border border-amber-500/30 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">About Tapcode</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Tapcode Translator converts messages into tap code, a simple communication method using rhythmic tapping patterns. Each letter is encoded as two numbers (row and column) on a 5×5 grid, then transmitted as taps separated by pauses.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong>Historic Use:</strong> Widely used by prisoners in Vietnam War POW camps as a covert communication method, also known as knock code or Smitty code.
        </p>
      </div>

      {/* Main Tool */}
      <div className="space-y-6 bg-card border border-border rounded-lg p-6">
        {/* Message Input */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message..."
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-24 resize-none"
          />
        </div>

        {/* Code Type Selector */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Code Type</label>
          <select
            value={codeType}
            onChange={(e) => setCodeType(e.target.value as CodeType)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="dots">Dots (•)</option>
            <option value="numbers">Numbers (1-5)</option>
            <option value="knocks">Knocks (*)</option>
          </select>
          <p className="text-xs text-muted-foreground">Choose how to represent the tap patterns</p>
        </div>

        {/* Tap Code Output */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-foreground">Tap Code</label>
          <div className="relative">
            <textarea
              value={tapcode}
              readOnly
              className="w-full px-4 py-3 border border-border rounded-lg bg-muted text-foreground focus:outline-none min-h-24 resize-none"
            />
            <button
              onClick={() => copyToClipboard(tapcode)}
              className="absolute top-2 right-2 p-2 rounded bg-background hover:bg-muted transition-colors"
              title="Copy to clipboard"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Clear
        </button>
      </div>

      {/* Tapcode Grid */}
      <div className="space-y-4">
        <button
          onClick={() => setExpandGrid(!expandGrid)}
          className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors"
        >
          <span>{expandGrid ? "▼" : "▶"}</span>
          Tapcode Grid (5×5)
        </button>

        {expandGrid && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Each letter is represented by its row and column position</p>

            {/* Grid Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-3 py-2 text-sm font-semibold">Row/Col</th>
                    {[1, 2, 3, 4, 5].map((col) => (
                      <th key={col} className="border border-border px-3 py-2 text-sm font-semibold">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grid.map((row, rowIdx) => (
                    <tr key={rowIdx}>
                      <td className="border border-border px-3 py-2 text-sm font-semibold bg-muted">{rowIdx + 1}</td>
                      {row.map((letter, colIdx) => (
                        <td
                          key={`${rowIdx}-${colIdx}`}
                          className="border border-border px-3 py-2 text-center font-medium hover:bg-primary/10 cursor-pointer transition-colors"
                          title={`${letter}: ${rowIdx + 1}-${colIdx + 1}`}
                        >
                          {letter}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Code Examples */}
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 space-y-3">
              <p className="text-sm font-semibold text-foreground">Example Encodings:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                {["A", "B", "H", "L", "T", "Z"].map((letter) => {
                  const code = getLetterCode(letter)
                  return (
                    <div key={letter} className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">{letter}:</span>
                      <span className="text-muted-foreground">{code ? `${code[0]}-${code[1]}` : "—"}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* How It Works */}
      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-bold text-foreground">How Tapcode Works</h3>
        <ol className="space-y-3 text-sm text-muted-foreground list-decimal list-inside">
          <li>
            <strong>Find Position:</strong> Locate the letter in the 5×5 grid to determine its row and column numbers
          </li>
          <li>
            <strong>Send Row:</strong> Tap or knock the row number (1-5 times), then pause
          </li>
          <li>
            <strong>Send Column:</strong> Tap or knock the column number (1-5 times), then pause
          </li>
          <li>
            <strong>Space Between Letters:</strong> Make a longer pause between each letter's code
          </li>
          <li>
            <strong>Receive:</strong> The recipient counts the taps, identifies the letter, and builds the message
          </li>
        </ol>
      </div>

      {/* FAQ */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-foreground">Frequently Asked Questions</h3>
        <div className="space-y-3">
          <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
            <summary className="font-semibold text-foreground group-open:text-primary">
              Why is the grid 5×5 instead of 6×6?
            </summary>
            <p className="text-muted-foreground mt-3 text-sm">
              The 5×5 grid represents the 26 letters of the English alphabet by combining the letters I and J into one cell. This allows all letters to fit within a square grid for easier memorization and pattern recognition.
            </p>
          </details>

          <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
            <summary className="font-semibold text-foreground group-open:text-primary">
              Can tapcode transmit numbers or punctuation?
            </summary>
            <p className="text-muted-foreground mt-3 text-sm">
              Standard tapcode primarily encodes letters and spaces. Numbers and punctuation would need to be spelled out or use agreed-upon code words within the communication system.
            </p>
          </details>

          <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
            <summary className="font-semibold text-foreground group-open:text-primary">
              What's the difference between I and J in tapcode?
            </summary>
            <p className="text-muted-foreground mt-3 text-sm">
              Tapcode combines I and J into one cell (position 2-4). Typically, when decoding, the letter I is assumed unless context indicates J. Users must rely on word context for disambiguation.
            </p>
          </details>

          <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
            <summary className="font-semibold text-foreground group-open:text-primary">
              Where is tapcode used today?
            </summary>
            <p className="text-muted-foreground mt-3 text-sm">
              While historically used by POWs in Vietnam, tapcode remains relevant for educational purposes, survival scenarios, and demonstrates communication principles. Some security professionals and enthusiasts still learn it as part of covert communication knowledge.
            </p>
          </details>
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Explore More Tools</h3>
        <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
          <li>
            <a href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">
              Atbash Cipher Decoder
            </a>{" "}
            - Simple mirror alphabet cipher
          </li>
          <li>
            <a href="/tools/playfair-cipher-solver" className="text-primary hover:underline">
              Playfair Cipher Solver
            </a>{" "}
            - Classic digraph substitution cipher
          </li>
          <li>
            <a href="/tools/hexahue-cipher" className="text-primary hover:underline">
              Hexahue Cipher
            </a>{" "}
            - Color-based visual encoding
          </li>
        </ul>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
