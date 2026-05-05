import type { Metadata } from "next"
import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EscapeRoomPlayer } from "@/components/escape-room-player"

export const metadata: Metadata = {
  title: "Play Escape Room | Cipher Puzzle Challenge",
  description: "Solve cipher puzzles and escape the room! Test your decoding skills with A1Z26, Morse code, binary, and riddle challenges.",
}

function EscapeRoomContent({ searchParams }: { searchParams: Promise<{ data?: string; example?: string }> }) {
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

async function EscapeRoomContentInner({ searchParams }: { searchParams: Promise<{ data?: string; example?: string }> }) {
  const params = await searchParams
  const exampleIndex = params.example !== undefined ? parseInt(params.example, 10) : undefined
  
  return (
    <EscapeRoomPlayer 
      encodedData={params.data} 
      exampleIndex={!isNaN(exampleIndex as number) ? exampleIndex : undefined}
    />
  )
}

export default function PlayEscapeRoomPage({ searchParams }: { searchParams: Promise<{ data?: string; example?: string }> }) {
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
