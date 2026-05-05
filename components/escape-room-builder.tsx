"use client"

import { useState } from "react"
import { Plus, Trash2, Eye, Share2, Copy, Check, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import {
  EscapeRoom,
  Puzzle,
  PuzzleType,
  PUZZLE_TYPE_LABELS,
  PUZZLE_TYPE_DESCRIPTIONS,
  encodeText,
  encodeRoomToURL,
  generateId
} from "@/lib/escape-room-types"

const THEMES = [
  { id: "spy", name: "Spy Mission", color: "bg-blue-500" },
  { id: "treasure", name: "Treasure Hunt", color: "bg-amber-500" },
  { id: "haunted", name: "Haunted House", color: "bg-purple-500" },
  { id: "mystery", name: "Mystery", color: "bg-emerald-500" },
  { id: "space", name: "Space Station", color: "bg-indigo-500" },
  { id: "custom", name: "Custom", color: "bg-gray-500" }
]

export function EscapeRoomBuilder() {
  const [room, setRoom] = useState<EscapeRoom>({
    name: "",
    theme: "spy",
    description: "",
    puzzles: [],
    createdAt: Date.now()
  })
  const [expandedPuzzle, setExpandedPuzzle] = useState<string | null>(null)
  const [shareUrl, setShareUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  const addPuzzle = () => {
    const newPuzzle: Puzzle = {
      id: generateId(),
      type: "a1z26",
      title: `Puzzle ${room.puzzles.length + 1}`,
      description: "",
      encodedClue: "",
      answer: "",
      hint: ""
    }
    setRoom({ ...room, puzzles: [...room.puzzles, newPuzzle] })
    setExpandedPuzzle(newPuzzle.id)
  }

  const updatePuzzle = (id: string, updates: Partial<Puzzle>) => {
    setRoom({
      ...room,
      puzzles: room.puzzles.map(p => (p.id === id ? { ...p, ...updates } : p))
    })
  }

  const removePuzzle = (id: string) => {
    setRoom({
      ...room,
      puzzles: room.puzzles.filter(p => p.id !== id)
    })
    if (expandedPuzzle === id) setExpandedPuzzle(null)
  }

  const autoEncode = (puzzleId: string, answer: string, type: PuzzleType) => {
    if (type !== "riddle" && answer) {
      const encoded = encodeText(answer, type)
      updatePuzzle(puzzleId, { answer: answer.toUpperCase(), encodedClue: encoded })
    }
  }

  const generateShareLink = () => {
    if (!room.name || room.puzzles.length === 0) return
    const encoded = encodeRoomToURL(room)
    const url = `${window.location.origin}/play/escape-room?data=${encoded}`
    setShareUrl(url)
  }

  const copyToClipboard = async () => {
    if (shareUrl) {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const isValid = room.name && room.puzzles.length > 0 && room.puzzles.every(p => p.answer && p.encodedClue)

  if (previewMode) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-foreground">Preview: {room.name}</h2>
          <button
            onClick={() => setPreviewMode(false)}
            className="px-4 py-2 text-sm font-medium text-primary hover:underline"
          >
            Back to Editor
          </button>
        </div>
        <div className="bg-card border border-border rounded-xl p-6">
          <p className="text-muted-foreground mb-6">{room.description}</p>
          <div className="space-y-4">
            {room.puzzles.map((puzzle, index) => (
              <div key={puzzle.id} className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary">
                    {PUZZLE_TYPE_LABELS[puzzle.type]}
                  </span>
                  <span className="text-xs text-muted-foreground">Puzzle {index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{puzzle.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{puzzle.description}</p>
                <div className="font-mono text-sm bg-background rounded p-3 border border-border">
                  {puzzle.encodedClue}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Answer: <span className="font-mono">{puzzle.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Room Details */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Room Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Room Name</label>
            <input
              type="text"
              value={room.name}
              onChange={e => setRoom({ ...room, name: e.target.value })}
              placeholder="e.g., The Secret Laboratory"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Theme</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {THEMES.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => setRoom({ ...room, theme: theme.id })}
                  className={`px-3 py-2 text-sm rounded-lg border transition-all ${
                    room.theme === theme.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary/50 text-muted-foreground"
                  }`}
                >
                  {theme.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <textarea
              value={room.description}
              onChange={e => setRoom({ ...room, description: e.target.value })}
              placeholder="Set the scene for your escape room..."
              rows={3}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>
        </div>
      </div>

      {/* Puzzles */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">
            Puzzles ({room.puzzles.length})
          </h2>
          <button
            onClick={addPuzzle}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            <Plus className="w-4 h-4" />
            Add Puzzle
          </button>
        </div>

        {room.puzzles.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="mb-2">No puzzles yet</p>
            <p className="text-sm">Add puzzles to create your escape room experience</p>
          </div>
        ) : (
          <div className="space-y-3">
            {room.puzzles.map((puzzle, index) => (
              <div
                key={puzzle.id}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedPuzzle(expandedPuzzle === puzzle.id ? null : puzzle.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                      {PUZZLE_TYPE_LABELS[puzzle.type]}
                    </span>
                    <span className="font-medium text-foreground">{puzzle.title}</span>
                    {!puzzle.answer && (
                      <span className="text-xs text-destructive">Incomplete</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={e => {
                        e.stopPropagation()
                        removePuzzle(puzzle.id)
                      }}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    {expandedPuzzle === puzzle.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {expandedPuzzle === puzzle.id && (
                  <div className="p-4 border-t border-border bg-muted/30 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Puzzle Type
                        </label>
                        <select
                          value={puzzle.type}
                          onChange={e => {
                            const newType = e.target.value as PuzzleType
                            updatePuzzle(puzzle.id, { type: newType })
                            if (puzzle.answer) {
                              autoEncode(puzzle.id, puzzle.answer, newType)
                            }
                          }}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          {Object.entries(PUZZLE_TYPE_LABELS).map(([value, label]) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-muted-foreground mt-1">
                          {PUZZLE_TYPE_DESCRIPTIONS[puzzle.type]}
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Puzzle Title
                        </label>
                        <input
                          type="text"
                          value={puzzle.title}
                          onChange={e => updatePuzzle(puzzle.id, { title: e.target.value })}
                          placeholder="e.g., The Hidden Message"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Puzzle Description
                      </label>
                      <textarea
                        value={puzzle.description}
                        onChange={e => updatePuzzle(puzzle.id, { description: e.target.value })}
                        placeholder="Describe the context or story for this puzzle..."
                        rows={2}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Answer (will be auto-encoded)
                        </label>
                        <input
                          type="text"
                          value={puzzle.answer}
                          onChange={e => {
                            const answer = e.target.value
                            updatePuzzle(puzzle.id, { answer })
                            autoEncode(puzzle.id, answer, puzzle.type)
                          }}
                          placeholder={puzzle.type === "riddle" ? "The answer to your riddle" : "e.g., SECRET CODE"}
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Hint (shown with 30s penalty)
                        </label>
                        <input
                          type="text"
                          value={puzzle.hint}
                          onChange={e => updatePuzzle(puzzle.id, { hint: e.target.value })}
                          placeholder="A helpful hint for stuck players"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {puzzle.type === "riddle" ? "Riddle Text" : "Encoded Clue (auto-generated)"}
                      </label>
                      <textarea
                        value={puzzle.encodedClue}
                        onChange={e => updatePuzzle(puzzle.id, { encodedClue: e.target.value })}
                        placeholder={puzzle.type === "riddle" ? "Write your riddle here..." : "Enter the answer above to auto-generate"}
                        rows={2}
                        readOnly={puzzle.type !== "riddle"}
                        className={`w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none font-mono ${
                          puzzle.type !== "riddle" ? "bg-muted/50" : ""
                        }`}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setPreviewMode(true)}
          disabled={room.puzzles.length === 0}
          className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          onClick={generateShareLink}
          disabled={!isValid}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Share2 className="w-4 h-4" />
          Generate Share Link
        </button>
      </div>

      {/* Share URL */}
      {shareUrl && (
        <div className="bg-card border border-primary/50 rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-3">Your Escape Room is Ready!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Share this link with friends to let them play your escape room:
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground text-sm font-mono truncate"
            />
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <div className="mt-4">
            <Link
              href={shareUrl}
              target="_blank"
              className="text-sm text-primary hover:underline"
            >
              Test play your escape room →
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
