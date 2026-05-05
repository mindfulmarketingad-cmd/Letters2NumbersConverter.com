"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Clock, Lightbulb, Check, X, Trophy, RotateCcw, Share2, Copy, ArrowRight } from "lucide-react"
import {
  EscapeRoom,
  Puzzle,
  PUZZLE_TYPE_LABELS,
  decodeRoomFromURL,
  EXAMPLE_ROOMS
} from "@/lib/escape-room-types"

interface EscapeRoomPlayerProps {
  encodedData?: string
  exampleIndex?: number
}

export function EscapeRoomPlayer({ encodedData, exampleIndex }: EscapeRoomPlayerProps) {
  const [room, setRoom] = useState<EscapeRoom | null>(null)
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState("")
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [hintsUsed, setHintsUsed] = useState<Set<string>>(new Set())
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  // Load room data
  useEffect(() => {
    if (exampleIndex !== undefined && exampleIndex >= 0 && exampleIndex < EXAMPLE_ROOMS.length) {
      setRoom(EXAMPLE_ROOMS[exampleIndex])
    } else if (encodedData) {
      const decoded = decodeRoomFromURL(encodedData)
      if (decoded) {
        setRoom(decoded)
      } else {
        setError("Invalid escape room data. The link may be corrupted.")
      }
    } else {
      setError("No escape room data provided.")
    }
  }, [encodedData, exampleIndex])

  // Timer
  useEffect(() => {
    if (!gameStarted || isComplete) return
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [gameStarted, isComplete])

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }, [])

  const currentPuzzle = room?.puzzles[currentPuzzleIndex]

  const checkAnswer = () => {
    if (!currentPuzzle) return
    const normalizedAnswer = userAnswer.trim().toUpperCase()
    const normalizedCorrect = currentPuzzle.answer.trim().toUpperCase()
    
    if (normalizedAnswer === normalizedCorrect) {
      setIsCorrect(true)
      setTimeout(() => {
        if (currentPuzzleIndex < (room?.puzzles.length || 0) - 1) {
          setCurrentPuzzleIndex(prev => prev + 1)
          setUserAnswer("")
          setIsCorrect(null)
          setShowHint(false)
        } else {
          setIsComplete(true)
        }
      }, 1500)
    } else {
      setIsCorrect(false)
      setTimeout(() => setIsCorrect(null), 1500)
    }
  }

  const useHint = () => {
    if (!currentPuzzle) return
    if (!hintsUsed.has(currentPuzzle.id)) {
      setHintsUsed(prev => new Set(prev).add(currentPuzzle.id))
      setTimeElapsed(prev => prev + 30) // 30 second penalty
    }
    setShowHint(true)
  }

  const restartGame = () => {
    setCurrentPuzzleIndex(0)
    setUserAnswer("")
    setTimeElapsed(0)
    setHintsUsed(new Set())
    setShowHint(false)
    setIsCorrect(null)
    setIsComplete(false)
    setGameStarted(false)
  }

  const shareResult = async () => {
    const text = `I escaped "${room?.name}" in ${formatTime(timeElapsed)}! Can you beat my time?`
    if (navigator.share) {
      try {
        await navigator.share({ text, url: window.location.href })
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${text} ${window.location.href}`)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <div className="text-destructive mb-4">
          <X className="w-16 h-16 mx-auto" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Error Loading Room</h2>
        <p className="text-muted-foreground mb-6">{error}</p>
        <Link
          href="/tools/escape-room-builder"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Create Your Own Escape Room
        </Link>
      </div>
    )
  }

  if (!room) {
    return (
      <div className="text-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-muted-foreground mt-4">Loading escape room...</p>
      </div>
    )
  }

  // Victory Screen
  if (isComplete) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6">
          <Trophy className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">You Escaped!</h2>
        <p className="text-xl text-muted-foreground mb-6">
          Congratulations on completing <span className="text-foreground font-medium">{room.name}</span>
        </p>
        
        <div className="bg-card border border-border rounded-xl p-6 max-w-md mx-auto mb-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{formatTime(timeElapsed)}</div>
              <div className="text-sm text-muted-foreground">Final Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">{room.puzzles.length}</div>
              <div className="text-sm text-muted-foreground">Puzzles Solved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">{hintsUsed.size}</div>
              <div className="text-sm text-muted-foreground">Hints Used</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={shareResult}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            {copied ? "Copied!" : "Share Result"}
          </button>
          <button
            onClick={restartGame}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again
          </button>
          <Link
            href="/tools/escape-room-builder"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Build Your Own
          </Link>
        </div>
      </div>
    )
  }

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="text-center py-12">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
          room.theme === "spy" ? "bg-blue-500/10 text-blue-500" :
          room.theme === "treasure" ? "bg-amber-500/10 text-amber-500" :
          room.theme === "haunted" ? "bg-purple-500/10 text-purple-500" :
          "bg-primary/10 text-primary"
        }`}>
          <span className="text-4xl">
            {room.theme === "spy" ? "🕵️" :
             room.theme === "treasure" ? "🏴‍☠️" :
             room.theme === "haunted" ? "👻" :
             room.theme === "mystery" ? "🔍" :
             room.theme === "space" ? "🚀" : "🔐"}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">{room.name}</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">{room.description}</p>
        
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="px-3 py-1 rounded-full bg-muted">{room.puzzles.length} Puzzles</span>
          <span className="px-3 py-1 rounded-full bg-muted capitalize">{room.theme} Theme</span>
        </div>

        <button
          onClick={() => setGameStarted(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium"
        >
          Start Escape
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Using a hint adds 30 seconds to your time.</p>
        </div>
      </div>
    )
  }

  // Game Screen
  return (
    <div className="space-y-6">
      {/* Header with timer and progress */}
      <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-lg font-mono font-bold text-foreground">
            <Clock className="w-5 h-5 text-primary" />
            {formatTime(timeElapsed)}
          </div>
          {hintsUsed.size > 0 && (
            <div className="text-sm text-muted-foreground">
              +{hintsUsed.size * 30}s penalties
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            Puzzle {currentPuzzleIndex + 1} of {room.puzzles.length}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-500"
          style={{ width: `${((currentPuzzleIndex) / room.puzzles.length) * 100}%` }}
        />
      </div>

      {/* Current Puzzle */}
      {currentPuzzle && (
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
              {PUZZLE_TYPE_LABELS[currentPuzzle.type]}
            </span>
            <span className="text-xs text-muted-foreground">Puzzle {currentPuzzleIndex + 1}</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-3">{currentPuzzle.title}</h3>
          <p className="text-muted-foreground mb-6">{currentPuzzle.description}</p>

          {/* Encoded Clue */}
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground mb-2">Decode this:</p>
            <p className="font-mono text-lg text-foreground break-all">{currentPuzzle.encodedClue}</p>
          </div>

          {/* Hint */}
          {showHint && currentPuzzle.hint && (
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-amber-500 text-sm font-medium mb-1">
                <Lightbulb className="w-4 h-4" />
                Hint
              </div>
              <p className="text-foreground">{currentPuzzle.hint}</p>
            </div>
          )}

          {/* Answer input */}
          <div className="flex gap-3">
            <input
              type="text"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              onKeyDown={e => e.key === "Enter" && checkAnswer()}
              placeholder="Enter your answer..."
              className={`flex-1 px-4 py-3 bg-background border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 font-mono text-lg ${
                isCorrect === true ? "border-green-500 focus:ring-green-500/50" :
                isCorrect === false ? "border-destructive focus:ring-destructive/50" :
                "border-border focus:ring-primary/50"
              }`}
            />
            <button
              onClick={checkAnswer}
              disabled={!userAnswer.trim()}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCorrect === true ? <Check className="w-5 h-5" /> : "Submit"}
            </button>
          </div>

          {/* Feedback */}
          {isCorrect === false && (
            <p className="text-destructive text-sm mt-2">Incorrect, try again!</p>
          )}
          {isCorrect === true && (
            <p className="text-green-500 text-sm mt-2">Correct! Moving to next puzzle...</p>
          )}

          {/* Hint button */}
          {!showHint && currentPuzzle.hint && (
            <button
              onClick={useHint}
              className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              <Lightbulb className="w-4 h-4" />
              Need a hint? (+30 seconds)
            </button>
          )}

          {/* Help link */}
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Stuck? Use our{" "}
              <Link href="/" target="_blank" className="text-primary hover:underline">
                Letters to Numbers Converter
              </Link>{" "}
              to help decode the clue.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
