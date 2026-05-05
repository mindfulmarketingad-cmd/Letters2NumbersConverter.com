import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EscapeRoomPlayer } from "@/components/escape-room-player"
import { EscapeRoomQuickPlay } from "@/components/escape-room-quick-play"
import { EscapeRoomAnalytics } from "@/components/escape-room-analytics"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Play Escape Room | Cipher Puzzle Challenge",
  description: "Solve cipher puzzles and escape the room! Test your decoding skills with A1Z26, Morse code, binary, and riddle challenges. Quick play visual environments or custom rooms.",
}

type Environment = "dungeon" | "jungle" | "park" | "mansion" | "spaceship"

interface SearchParams {
  data?: string
  example?: string
  mode?: string
  env?: Environment
  stats?: string
}

function EscapeRoomContent({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return (
    <Suspense fallback={
      <div className="text-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-muted-foreground mt-4">Loading escape room...</p>
      </div>
    }>
      <EscapeRoomContentInner searchParams={searchParams} />
    </Suspense>
  )
}

async function EscapeRoomContentInner({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams
  
  // Stats mode - show analytics
  if (params.stats === 'true') {
    return <EscapeRoomAnalytics />
  }
  
  // Quick play mode
  if (params.mode === 'quick') {
    const validEnvs: Environment[] = ['dungeon', 'jungle', 'park', 'mansion', 'spaceship']
    const env = validEnvs.includes(params.env as Environment) ? params.env as Environment : undefined
    return <EscapeRoomQuickPlay initialEnvironment={env} />
  }
  
  // Custom room with data
  if (params.data) {
    return <EscapeRoomPlayer encodedData={params.data} />
  }
  
  // Example room
  if (params.example !== undefined) {
    const exampleIndex = parseInt(params.example, 10)
    if (!isNaN(exampleIndex)) {
      return <EscapeRoomPlayer exampleIndex={exampleIndex} />
    }
  }
  
  // Default: show mode selection
  return <EscapeRoomModeSelector />
}

function EscapeRoomModeSelector() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Play Escape Room</h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Choose your adventure - explore visual environments or solve cipher puzzles!
        </p>
      </div>
      
      {/* Mode Selection */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Quick Play */}
        <Link
          href="/play/escape-room?mode=quick"
          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Quick Play</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Explore visual environments like dungeons, jungles, and haunted mansions. Find hidden objects to escape!
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded-full bg-muted">5 environments</span>
              <span className="px-2 py-1 rounded-full bg-muted">Point & click</span>
            </div>
          </div>
        </Link>
        
        {/* Cipher Puzzles */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">Cipher Puzzles</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Solve encoded puzzles using A1Z26, Morse code, binary, and riddles. Play examples or custom rooms!
          </p>
          <div className="space-y-2">
            <Link 
              href="/play/escape-room?example=0"
              className="block w-full text-left px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm"
            >
              <span className="font-medium text-foreground">The Spy&apos;s Secret</span>
              <span className="text-muted-foreground ml-2">- 3 puzzles</span>
            </Link>
            <Link 
              href="/play/escape-room?example=1"
              className="block w-full text-left px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm"
            >
              <span className="font-medium text-foreground">Pirate&apos;s Treasure</span>
              <span className="text-muted-foreground ml-2">- 3 puzzles</span>
            </Link>
            <Link 
              href="/play/escape-room?example=2"
              className="block w-full text-left px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors text-sm"
            >
              <span className="font-medium text-foreground">Haunted Library</span>
              <span className="text-muted-foreground ml-2">- 3 puzzles</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Build Your Own */}
      <div className="text-center space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground">or</span>
          </div>
        </div>
        
        <Link
          href="/tools/escape-room-builder"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Build Your Own Escape Room
        </Link>
      </div>
      
      {/* Analytics Link */}
      <div className="text-center">
        <Link
          href="/play/escape-room?stats=true"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View your play statistics →
        </Link>
      </div>
    </div>
  )
}

export default function PlayEscapeRoomPage({ searchParams }: { searchParams: Promise<SearchParams> }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <EscapeRoomContent searchParams={searchParams} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
