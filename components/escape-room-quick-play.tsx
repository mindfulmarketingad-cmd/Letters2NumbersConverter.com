"use client"

import { useState, useEffect, useCallback } from "react"
import { Clock, Eye, MousePointer2, RotateCcw, Trophy, Share2, ChevronRight, Sparkles, Lock, Check, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type Environment = "dungeon" | "jungle" | "park" | "mansion" | "spaceship"

interface HiddenItem {
  id: string
  name: string
  x: number // percentage
  y: number // percentage
  width: number // percentage
  height: number // percentage
  hint: string
  found: boolean
  order: number // sequence order to find items
}

interface EnvironmentData {
  id: Environment
  name: string
  description: string
  background: string
  backgroundImage: string
  ambiance: string
  items: Omit<HiddenItem, "found">[]
  story: string
  victoryMessage: string
}

const environments: EnvironmentData[] = [
  {
    id: "dungeon",
    name: "The Dark Dungeon",
    description: "Escape the ancient dungeon before the torch burns out",
    background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
    backgroundImage: "/images/environments/dungeon.jpg",
    ambiance: "Stone walls drip with moisture. Chains rattle in the darkness...",
    story: "You wake up in a cold, dark dungeon. The only light comes from a flickering torch on the wall. Find the hidden objects to unlock your escape!",
    victoryMessage: "The heavy iron door creaks open. Freedom awaits!",
    items: [
      { id: "key", name: "Rusty Key", x: 15, y: 65, width: 8, height: 10, hint: "Check near the stone floor", order: 1 },
      { id: "torch", name: "Hidden Torch", x: 78, y: 25, width: 6, height: 15, hint: "Look high on the wall", order: 2 },
      { id: "map", name: "Escape Map", x: 45, y: 80, width: 12, height: 8, hint: "Something's under the loose stone", order: 3 },
      { id: "lever", name: "Secret Lever", x: 88, y: 55, width: 5, height: 12, hint: "The wall isn't as solid as it looks", order: 4 },
      { id: "door", name: "Hidden Door", x: 50, y: 40, width: 15, height: 35, hint: "The center of the room hides something", order: 5 },
    ]
  },
  {
    id: "jungle",
    name: "Lost in the Jungle",
    description: "Navigate through the dense rainforest to find your way home",
    background: "linear-gradient(180deg, #134e5e 0%, #1a5f3c 50%, #0d3320 100%)",
    backgroundImage: "/images/environments/jungle.jpg",
    ambiance: "Birds call overhead. Leaves rustle with hidden creatures...",
    story: "Your expedition went wrong and you're stranded deep in the jungle. Find the survival items hidden among the foliage to make your way back to civilization!",
    victoryMessage: "You hear the sound of a helicopter! Rescue is here!",
    items: [
      { id: "compass", name: "Golden Compass", x: 20, y: 45, width: 8, height: 10, hint: "Shiny things catch the light", order: 1 },
      { id: "machete", name: "Rusty Machete", x: 70, y: 70, width: 10, height: 8, hint: "Someone left this behind long ago", order: 2 },
      { id: "water", name: "Water Bottle", x: 35, y: 30, width: 6, height: 12, hint: "Check near the vines", order: 3 },
      { id: "flare", name: "Signal Flare", x: 85, y: 35, width: 7, height: 10, hint: "Red stands out in green", order: 4 },
      { id: "radio", name: "Emergency Radio", x: 55, y: 85, width: 10, height: 8, hint: "Partially buried in leaves", order: 5 },
    ]
  },
  {
    id: "park",
    name: "Mystery at Midnight Park",
    description: "Solve the mystery before dawn breaks",
    background: "linear-gradient(180deg, #2c3e50 0%, #1a252f 50%, #0d1318 100%)",
    backgroundImage: "/images/environments/park.jpg",
    ambiance: "Street lamps flicker. Footsteps echo in the distance...",
    story: "A mysterious letter led you to this empty park at midnight. Someone has hidden clues for you to find. Can you uncover the secret before sunrise?",
    victoryMessage: "The final clue reveals the truth! Mystery solved!",
    items: [
      { id: "letter", name: "Torn Letter", x: 25, y: 60, width: 8, height: 10, hint: "Blowing near the bench", order: 1 },
      { id: "locket", name: "Silver Locket", x: 60, y: 45, width: 6, height: 8, hint: "Something glints by the fountain", order: 2 },
      { id: "photo", name: "Old Photograph", x: 80, y: 75, width: 9, height: 7, hint: "Under the park bench", order: 3 },
      { id: "newspaper", name: "Dated Newspaper", x: 15, y: 35, width: 10, height: 8, hint: "Caught in the wind", order: 4 },
      { id: "diary", name: "Hidden Diary", x: 45, y: 20, width: 8, height: 10, hint: "In the hollow of the old tree", order: 5 },
    ]
  },
  {
    id: "mansion",
    name: "The Haunted Mansion",
    description: "Escape the ghostly manor before you become its next resident",
    background: "linear-gradient(180deg, #2d132c 0%, #1a0a1a 50%, #0d0510 100%)",
    backgroundImage: "/images/environments/mansion.jpg",
    ambiance: "Floorboards creak. A cold wind whispers your name...",
    story: "The door slammed shut behind you and won't open. This old mansion is filled with secrets. Find the cursed objects to break the spell and escape!",
    victoryMessage: "The curse is broken! The mansion releases you!",
    items: [
      { id: "candle", name: "Cursed Candle", x: 30, y: 25, width: 5, height: 12, hint: "Flickering in the darkness", order: 1 },
      { id: "mirror", name: "Haunted Mirror", x: 70, y: 40, width: 10, height: 15, hint: "Your reflection seems... wrong", order: 2 },
      { id: "book", name: "Spell Book", x: 20, y: 70, width: 9, height: 8, hint: "Ancient knowledge on the shelf", order: 3 },
      { id: "ring", name: "Ghostly Ring", x: 55, y: 80, width: 6, height: 6, hint: "Left behind by someone... or something", order: 4 },
      { id: "portrait", name: "Moving Portrait", x: 85, y: 30, width: 8, height: 12, hint: "The eyes seem to follow you", order: 5 },
    ]
  },
  {
    id: "spaceship",
    name: "Stranded in Space",
    description: "Repair the ship before life support fails",
    background: "linear-gradient(180deg, #0c0c1e 0%, #1a1a3e 50%, #0a0a20 100%)",
    backgroundImage: "/images/environments/spaceship.jpg",
    ambiance: "Warning lights flash. The hull groans under pressure...",
    story: "An asteroid strike has damaged your spacecraft. Life support is failing! Find the repair components scattered around the ship to survive!",
    victoryMessage: "Systems restored! Setting course for home!",
    items: [
      { id: "wrench", name: "Quantum Wrench", x: 15, y: 55, width: 8, height: 10, hint: "Floating near the control panel", order: 1 },
      { id: "chip", name: "Power Chip", x: 75, y: 30, width: 7, height: 7, hint: "Glowing faintly in the dark", order: 2 },
      { id: "cable", name: "Repair Cable", x: 40, y: 75, width: 12, height: 6, hint: "Tangled under the console", order: 3 },
      { id: "crystal", name: "Energy Crystal", x: 60, y: 50, width: 8, height: 10, hint: "Pulsing with blue light", order: 4 },
      { id: "button", name: "Override Button", x: 90, y: 65, width: 6, height: 8, hint: "Hidden emergency control", order: 5 },
    ]
  }
]

// Decorative elements for each environment
const getEnvironmentDecorations = (env: Environment): React.ReactNode => {
  switch (env) {
    case "dungeon":
      return (
        <>
          <div className="absolute top-10 left-10 w-16 h-24 bg-gradient-to-b from-orange-500/30 to-transparent rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-gray-600/50 rounded-sm" />
          <div className="absolute top-1/3 left-1/4 w-1 h-20 bg-gray-500/30" />
          <div className="absolute bottom-10 left-1/3 w-32 h-2 bg-gray-700/40 rounded" />
          <div className="absolute top-20 right-1/4 w-20 h-1 bg-gray-600/30" />
        </>
      )
    case "jungle":
      return (
        <>
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-950/60 to-transparent" />
          <div className="absolute top-10 right-10 w-4 h-40 bg-green-700/30 rounded-full transform rotate-12" />
          <div className="absolute top-20 left-20 w-3 h-32 bg-green-600/25 rounded-full transform -rotate-6" />
        </>
      )
    case "park":
      return (
        <>
          <div className="absolute top-20 left-1/4 w-3 h-3 bg-yellow-400/60 rounded-full animate-pulse" />
          <div className="absolute top-24 right-1/3 w-2 h-2 bg-yellow-300/40 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-20 left-1/2 w-40 h-12 bg-gray-700/30 rounded-lg" />
          <div className="absolute top-1/3 right-20 w-24 h-32 bg-gray-800/20 rounded-t-full" />
        </>
      )
    case "mansion":
      return (
        <>
          <div className="absolute top-10 left-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-ping" />
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/30 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 left-10 w-20 h-32 bg-purple-950/30 rounded-lg" />
          <div className="absolute top-20 right-1/4 w-16 h-20 bg-purple-900/20 rounded" />
        </>
      )
    case "spaceship":
      return (
        <>
          <div className="absolute top-10 left-10 w-3 h-3 bg-red-500/70 rounded-full animate-pulse" />
          <div className="absolute top-10 left-20 w-3 h-3 bg-blue-500/70 rounded-full animate-pulse delay-150" />
          <div className="absolute bottom-20 right-20 w-40 h-20 bg-blue-900/20 rounded-lg border border-blue-500/20" />
          <div className="absolute top-1/3 left-1/4 w-32 h-8 bg-gray-800/40 rounded" />
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-white/60 rounded-full"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }} 
            />
          ))}
        </>
      )
    default:
      return null
  }
}

interface QuickPlayProps {
  initialEnvironment?: Environment
  onBack?: () => void
}

export function EscapeRoomQuickPlay({ initialEnvironment, onBack }: QuickPlayProps) {
  const [selectedEnv, setSelectedEnv] = useState<Environment | null>(initialEnvironment || null)
  const [gameState, setGameState] = useState<"select" | "playing" | "victory">("select")
  const [items, setItems] = useState<HiddenItem[]>([])
  const [currentTarget, setCurrentTarget] = useState(1)
  const [timer, setTimer] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [wrongClick, setWrongClick] = useState<{x: number, y: number} | null>(null)
  const [foundAnimation, setFoundAnimation] = useState<string | null>(null)

  const currentEnvData = environments.find(e => e.id === selectedEnv)

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return
    const interval = setInterval(() => setTimer(t => t + 1), 1000)
    return () => clearInterval(interval)
  }, [gameState])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const startGame = (env: Environment) => {
    const envData = environments.find(e => e.id === env)!
    setSelectedEnv(env)
    setItems(envData.items.map(item => ({ ...item, found: false })))
    setCurrentTarget(1)
    setTimer(0)
    setHintsUsed(0)
    setShowHint(false)
    setShowLocation(false)
    setGameState("playing")
    
    // Track game start
    trackAnalytics(env, 'start')
  }

  const handleItemClick = (item: HiddenItem) => {
    if (item.found) return
    
    if (item.order === currentTarget) {
      // Correct item found!
      setFoundAnimation(item.id)
      setTimeout(() => setFoundAnimation(null), 1000)
      
      setItems(prev => prev.map(i => 
        i.id === item.id ? { ...i, found: true } : i
      ))
      
      if (currentTarget === items.length) {
        // Victory!
        setGameState("victory")
        trackAnalytics(selectedEnv!, 'complete', timer, hintsUsed)
      } else {
        setCurrentTarget(prev => prev + 1)
      }
      setShowHint(false)
      setShowLocation(false)
    }
  }

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gameState !== "playing") return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    // Check if clicked on any item hitbox
    const clickedItem = items.find(item => 
      !item.found &&
      x >= item.x && x <= item.x + item.width &&
      y >= item.y && y <= item.y + item.height
    )
    
    if (clickedItem) {
      handleItemClick(clickedItem)
    } else {
      // Wrong click feedback
      setWrongClick({ x, y })
      setTimeout(() => setWrongClick(null), 500)
    }
  }

  const useHint = () => {
    setHintsUsed(prev => prev + 1)
    setShowHint(true)
    setTimer(prev => prev + 30) // 30 second penalty
    trackAnalytics(selectedEnv!, 'hint', currentTarget)
  }

  const revealLocation = () => {
    setShowLocation(true)
    setTimer(prev => prev + 60) // 60 second penalty for revealing
    trackAnalytics(selectedEnv!, 'reveal', currentTarget)
  }

  const resetGame = () => {
    setGameState("select")
    setSelectedEnv(null)
    setItems([])
    setCurrentTarget(1)
    setTimer(0)
    setHintsUsed(0)
    setShowHint(false)
    setShowLocation(false)
  }

  const trackAnalytics = (env: Environment, action: string, value?: number, hints?: number) => {
    try {
      const key = `escape_analytics_${env}`
      const existing = JSON.parse(localStorage.getItem(key) || '{"plays":0,"completions":0,"totalTime":0,"hintsUsed":0,"stuckOn":{}}')
      
      if (action === 'start') {
        existing.plays++
      } else if (action === 'complete') {
        existing.completions++
        existing.totalTime += value || 0
        existing.hintsUsed += hints || 0
      } else if (action === 'hint') {
        existing.stuckOn[value || 1] = (existing.stuckOn[value || 1] || 0) + 1
      }
      
      localStorage.setItem(key, JSON.stringify(existing))
    } catch (e) {
      // localStorage not available
    }
  }

  const currentItem = items.find(i => i.order === currentTarget)

  // Environment selection screen
  if (gameState === "select") {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Environment</h2>
          <p className="text-muted-foreground">Explore the scene and find hidden objects in the correct order to escape!</p>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {environments.map(env => (
            <button
              key={env.id}
              onClick={() => startGame(env.id)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card text-left transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={env.backgroundImage}
                  alt={env.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="relative p-4">
                <h3 className="text-lg font-semibold text-foreground mb-1">{env.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{env.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Eye className="w-3 h-3" />
                  <span>{env.items.length} hidden objects</span>
                </div>
              </div>
              <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
            </button>
          ))}
        </div>
        
        {onBack && (
          <div className="text-center">
            <button onClick={onBack} className="text-sm text-muted-foreground hover:text-foreground">
              Back to escape room menu
            </button>
          </div>
        )}
      </div>
    )
  }

  // Victory screen
  if (gameState === "victory" && currentEnvData) {
    const shareText = `I escaped "${currentEnvData.name}" in ${formatTime(timer)}! Can you beat my time?`
    
    return (
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <Trophy className="relative w-20 h-20 mx-auto text-primary" />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">You Escaped!</h2>
          <p className="text-muted-foreground">{currentEnvData.victoryMessage}</p>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">{formatTime(timer)}</div>
              <div className="text-xs text-muted-foreground">Final Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{items.length}</div>
              <div className="text-xs text-muted-foreground">Objects Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">{hintsUsed}</div>
              <div className="text-xs text-muted-foreground">Hints Used</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={resetGame}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Play Again
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ text: shareText, url: window.location.href })
              } else {
                navigator.clipboard.writeText(shareText + ' ' + window.location.href)
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share Result
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Try another environment or <Link href="/tools/escape-room-builder" className="text-primary hover:underline">build your own escape room</Link>!
        </p>
      </div>
    )
  }

  // Playing screen
  if (gameState === "playing" && currentEnvData) {
    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">{currentEnvData.name}</h2>
            <p className="text-sm text-muted-foreground italic">{currentEnvData.ambiance}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-foreground font-mono">
              <Clock className="w-4 h-4" />
              {formatTime(timer)}
            </div>
            <button
              onClick={resetGame}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              title="Quit"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{items.filter(i => i.found).length} / {items.length}</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(items.filter(i => i.found).length / items.length) * 100}%` }}
            />
          </div>
          <div className="flex gap-1">
            {items.map((item) => (
              <div 
                key={item.id}
                className={`flex-1 h-1 rounded-full transition-colors ${
                  item.found ? 'bg-primary' : item.order === currentTarget ? 'bg-primary/50 animate-pulse' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Current target */}
        <div className="bg-card border border-border rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <MousePointer2 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Find the</p>
              <p className="font-semibold text-foreground">{currentItem?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={useHint}
              disabled={showHint}
              className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-3 h-3" />
              Hint (+30s)
            </button>
            <button
              onClick={revealLocation}
              disabled={showLocation}
              className="px-3 py-1.5 text-sm bg-primary/10 text-primary border border-primary/30 rounded-md hover:bg-primary/20 transition-colors flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MapPin className="w-3 h-3" />
              Show Me (+60s)
            </button>
          </div>
        </div>
        
        {/* Hint display */}
        {showHint && currentItem && (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-center">
            <p className="text-sm text-primary">{currentItem.hint}</p>
          </div>
        )}
        
        {/* Game area */}
        <div 
          className="relative aspect-video rounded-xl overflow-hidden cursor-crosshair select-none"
          onClick={handleBackgroundClick}
        >
          {/* Background Image */}
          <Image
            src={currentEnvData.backgroundImage}
            alt={currentEnvData.name}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better visibility */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Found items indicator */}
          {items.filter(i => i.found).map(item => (
            <div
              key={item.id}
              className="absolute pointer-events-none"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                width: `${item.width}%`,
                height: `${item.height}%`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-primary/80 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
          
          {/* Show Me - Location Reveal */}
          {showLocation && currentItem && !currentItem.found && (
            <div
              className="absolute pointer-events-none z-10"
              style={{
                left: `${currentItem.x + currentItem.width / 2}%`,
                top: `${currentItem.y + currentItem.height / 2}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-primary/30 rounded-full animate-ping" />
                <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 bg-primary/50 rounded-full animate-pulse" />
                <MapPin className="w-8 h-8 text-primary drop-shadow-lg animate-bounce" style={{ transform: 'translate(-50%, -50%)' }} />
              </div>
            </div>
          )}
          
          {/* Wrong click feedback */}
          {wrongClick && (
            <div
              className="absolute pointer-events-none animate-ping"
              style={{
                left: `${wrongClick.x}%`,
                top: `${wrongClick.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-4 h-4 rounded-full bg-red-500/50" />
            </div>
          )}
          
          {/* Found animation */}
          {foundAnimation && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="animate-bounce">
                <Sparkles className="w-12 h-12 text-primary" />
              </div>
            </div>
          )}
          
          {/* Instruction overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-xs text-white/60 bg-black/30 rounded-full px-3 py-1 inline-block">
              Click to find hidden objects
            </p>
          </div>
        </div>
        
        {/* Items found list */}
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <div 
              key={item.id}
              className={`px-3 py-1.5 rounded-full text-sm flex items-center gap-1.5 transition-colors ${
                item.found 
                  ? 'bg-primary/10 text-primary' 
                  : item.order === currentTarget 
                    ? 'bg-secondary text-secondary-foreground border border-primary/30' 
                    : 'bg-muted text-muted-foreground'
              }`}
            >
              {item.found ? (
                <Check className="w-3 h-3" />
              ) : (
                <Lock className="w-3 h-3" />
              )}
              {item.found ? item.name : `Object ${item.order}`}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

// CSS for star twinkle animation
const styles = `
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}
