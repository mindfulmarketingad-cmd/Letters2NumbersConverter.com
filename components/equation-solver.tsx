"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Zap } from "lucide-react"
import { solveEquation, generateExercise, isValidEquationFormat } from "@/lib/equation-solver"

type SolveMode = "digits" | "operators"
type Difficulty = "easy" | "medium" | "hard"

export function EquationSolver() {
  const [input, setInput] = useState("127 + 756 = 77?")
  const [error, setError] = useState("")
  const [solutions, setSolutions] = useState<any[]>([])
  const [mode, setMode] = useState<SolveMode>("digits")
  const [generatedExercise, setGeneratedExercise] = useState<any>(null)
  const [difficulty, setDifficulty] = useState<Difficulty>("easy")

  const handleSolve = () => {
    if (!input.trim()) {
      setError("Please enter an equation")
      setSolutions([])
      return
    }

    try {
      if (!isValidEquationFormat(input)) {
        setError('Equation must contain "=" and at least one "?"')
        setSolutions([])
        return
      }

      const results = solveEquation(input)
      setSolutions(results)
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid equation")
      setSolutions([])
    }
  }

  const handleGenerateExercise = () => {
    try {
      const exerciseType = mode === "digits" ? "digit" : "operator"
      const exercise = generateExercise(difficulty, exerciseType)
      setGeneratedExercise(exercise)
      setInput(exercise.equation)
      setSolutions([])
      setError("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate exercise")
    }
  }

  const handleClear = () => {
    setInput("")
    setSolutions([])
    setError("")
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSolve()
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="w-full space-y-8">
      {/* Description */}
      <div className="bg-amber-100/50 border border-amber-500/30 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-foreground mb-2">About Fill In The Blanks Equation Solver</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          The Fill In The Blanks Equation Solver Online helps you find missing digits or operators in mathematical equations. Simply enter an equation with "?" representing the unknown value, and the tool will find all possible solutions.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong>Examples:</strong> "127 + 756 = 77?" (missing digit) or "127 ? 756 = 883" (missing operator)
        </p>
      </div>

      {/* Mode Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Search For:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={mode === "digits"}
              onChange={() => setMode("digits")}
              className="w-4 h-4"
            />
            <span className="text-sm text-muted-foreground">Missing Digits (0,1,2,3,...,9)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              checked={mode === "operators"}
              onChange={() => setMode("operators")}
              className="w-4 h-4"
            />
            <span className="text-sm text-muted-foreground">Missing Operators (+,-,*,/)</span>
          </label>
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Fill in the missing item puzzle (each missing item = ?)
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Example: 127 + 756 = 77?"
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500 min-h-24 resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleSolve}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Calculate
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Error Message */}
      {error && <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">{error}</div>}

      {/* Solutions */}
      {solutions.length > 0 && (
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Solutions Found: {solutions.length}</h3>
          {solutions.map((solution, idx) => (
            <div key={idx} className="bg-card border border-border rounded p-4 space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground">SOLUTION {idx + 1}</p>
                  <p className="font-mono text-foreground break-all">{solution.solution}</p>
                  <p className="text-sm text-muted-foreground">
                    Missing {solution.type === "digit" ? "digit" : "operator"}: <strong>{solution.missing}</strong>
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(solution.solution)}
                  className="px-3 py-2 rounded bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Generator Section */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 space-y-4">
        <h3 className="text-sm font-semibold text-foreground">Fill In The Blanks Generator</h3>
        
        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Difficulty Level:</label>
          <div className="flex gap-4">
            {(["easy", "medium", "hard"] as const).map((level) => (
              <label key={level} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={difficulty === level}
                  onChange={() => setDifficulty(level)}
                  className="w-4 h-4"
                />
                <span className="text-sm text-muted-foreground capitalize">{level}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={handleGenerateExercise}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Generate Exercise
        </button>

        {generatedExercise && (
          <div className="bg-background border border-border rounded p-4 mt-4">
            <p className="text-xs font-semibold text-muted-foreground mb-2">GENERATED EXERCISE</p>
            <p className="font-mono text-lg text-foreground mb-3">{generatedExercise.equation}</p>
            <button
              onClick={() => {
                setSolutions([{ missing: generatedExercise.answer, solution: `Answer: ${generatedExercise.answer}` }])
              }}
              className="text-sm text-primary hover:underline"
            >
              Show Answer
            </button>
          </div>
        )}
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
