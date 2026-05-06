"use client"

import { useState, useEffect } from "react"
import { initializeCryptogramGame, makeGuess, getDisplayText, getEncryptedLetters, calculateScore, CryptogramGameState } from "@/lib/cryptogram-game"
import { RotateCcw, Volume2, CheckCircle, XCircle } from "lucide-react"

export default function CryptogramGame() {
  const [game, setGame] = useState<CryptogramGameState | null>(null)
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)

  useEffect(() => {
    setGame(initializeCryptogramGame())
  }, [])

  if (!game) return <div className="text-center py-12">Loading...</div>

  const handleGuess = (encryptedLetter: string, guessedLetter: string) => {
    const newGame = makeGuess(game, encryptedLetter, guessedLetter)
    setGame(newGame)
    setSelectedLetter(null)
  }

  const handleReset = () => {
    setGame(initializeCryptogramGame())
    setSelectedLetter(null)
  }

  const displayText = getDisplayText(game)
  const encryptedLetters = getEncryptedLetters(game.encrypted)
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const score = calculateScore(game)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Game Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Cryptogram Game</h2>
          <p className="text-sm text-muted-foreground">Decode the message by guessing the letter substitutions</p>
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          New Game
        </button>
      </div>

      {/* Game Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Mistakes</p>
          <div className="flex gap-2">
            {Array.from({ length: game.maxMistakes }).map((_, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full border-2 ${
                  i < game.mistakes ? "bg-red-500 border-red-500" : "border-border"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Progress</p>
          <p className="text-2xl font-bold text-foreground">
            {game.revealed.size}/{new Set(game.original.match(/[A-Z]/g) || []).size}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-1">Status</p>
          {game.completed && (
            <p className={`font-bold ${game.won ? "text-green-600" : "text-red-600"}`}>
              {game.won ? "Won!" : "Game Over"}
            </p>
          )}
          {!game.completed && <p className="text-sm text-foreground">Playing...</p>}
        </div>
      </div>

      {/* Cryptogram Display */}
      <div className="bg-card border-2 border-primary/30 rounded-xl p-8 mb-8">
        <div className="space-y-6">
          {game.encrypted.split("\n").map((line, lineIdx) => (
            <div key={lineIdx} className="flex flex-wrap gap-3 justify-center">
              {line.split(" ").map((word, wordIdx) => (
                <div key={wordIdx} className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    {word.split("").map((char, charIdx) => {
                      if (/[A-Z]/.test(char)) {
                        const guess = game.userGuesses[char]
                        return (
                          <button
                            key={charIdx}
                            onClick={() => setSelectedLetter(selectedLetter === char ? null : char)}
                            className={`w-10 h-10 border-2 rounded font-bold text-center flex items-center justify-center cursor-pointer transition-all ${
                              selectedLetter === char
                                ? "bg-primary border-primary text-primary-foreground"
                                : guess
                                  ? "bg-green-100 border-green-500 text-foreground"
                                  : "bg-background border-primary/30 text-primary"
                            }`}
                          >
                            {guess || ""}
                          </button>
                        )
                      }
                      return (
                        <div key={charIdx} className="w-8 text-center">
                          {char}
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex gap-1 text-xs text-muted-foreground">
                    {word.split("").map((char, charIdx) => (
                      <span key={charIdx} className="w-10 text-center">
                        {/[A-Z]/.test(char) ? game.key[char] : ""}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Game Over Message */}
      {game.completed && (
        <div
          className={`rounded-lg p-6 mb-8 text-center ${
            game.won
              ? "bg-green-100 border border-green-300"
              : "bg-red-100 border border-red-300"
          }`}
        >
          {game.won ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Congratulations!</h3>
              </div>
              <p className="text-green-800 mb-2">You solved the cryptogram!</p>
              <p className="font-bold text-green-900">Score: {score}</p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mb-2">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Game Over</h3>
              </div>
              <p className="text-red-800">The message was: "{game.original}"</p>
            </>
          )}
        </div>
      )}

      {/* Letter Grid */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-foreground mb-4">Available Letters</h3>
        <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
          {alphabet.map((letter) => {
            const isGuessed = Object.values(game.userGuesses).includes(letter)
            return (
              <button
                key={letter}
                onClick={() => selectedLetter && handleGuess(selectedLetter, letter)}
                disabled={isGuessed || !selectedLetter || game.completed}
                className={`px-3 py-2 rounded font-bold transition-all ${
                  isGuessed
                    ? "bg-muted text-muted-foreground opacity-50 cursor-not-allowed"
                    : selectedLetter
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
                      : "bg-background border border-border text-foreground hover:border-primary"
                }`}
              >
                {letter}
              </button>
            )
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          {selectedLetter ? `Click a letter to guess what "${selectedLetter}" is` : "Click a position above to select a letter to guess"}
        </p>
      </div>

      {/* Key Display */}
      <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Encrypted Letters (Cipher Key)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {encryptedLetters.map((encrypted) => {
            const guess = game.userGuesses[encrypted]
            return (
              <div
                key={encrypted}
                className={`p-3 rounded-lg border-2 text-center ${
                  guess
                    ? "bg-green-100 border-green-500"
                    : "bg-background border-border"
                }`}
              >
                <div className="text-lg font-bold text-primary">{encrypted}</div>
                <div className="text-xs text-muted-foreground">={guess || "?"}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
