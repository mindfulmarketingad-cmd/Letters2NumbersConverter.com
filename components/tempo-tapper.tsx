'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { Hand, RotateCcw, Activity, Info } from 'lucide-react'

const MIN_TAPS = 2
const MAX_HISTORY = 8  // use last N intervals for rolling average
const IDLE_RESET_MS = 3000 // reset if no tap for 3 seconds

function bpmFromIntervals(intervals: number[]): number {
  if (intervals.length === 0) return 0
  const recent = intervals.slice(-MAX_HISTORY)
  const mean = recent.reduce((a, b) => a + b, 0) / recent.length
  return Math.round(60000 / mean * 10) / 10
}

function tempoLabel(bpm: number): string {
  if (bpm < 60) return 'Larghetto'
  if (bpm < 66) return 'Largo'
  if (bpm < 76) return 'Adagio'
  if (bpm < 108) return 'Andante'
  if (bpm < 120) return 'Moderato'
  if (bpm < 156) return 'Allegro'
  if (bpm < 176) return 'Vivace'
  return 'Presto'
}

export function TempoTapper() {
  const [taps, setTaps] = useState<number[]>([])
  const [intervals, setIntervals] = useState<number[]>([])
  const [bpm, setBpm] = useState<number | null>(null)
  const [flash, setFlash] = useState(false)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const flashTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const reset = useCallback(() => {
    setTaps([])
    setIntervals([])
    setBpm(null)
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
  }, [])

  const handleTap = useCallback(() => {
    const now = Date.now()

    // Flash animation
    setFlash(true)
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    flashTimerRef.current = setTimeout(() => setFlash(false), 100)

    // Reset idle timer
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    idleTimerRef.current = setTimeout(() => {
      reset()
    }, IDLE_RESET_MS)

    setTaps(prev => {
      const next = [...prev, now]
      if (next.length >= MIN_TAPS + 1) {
        const newIntervals = next.slice(1).map((t, i) => t - next[i])
        setIntervals(newIntervals)
        setBpm(bpmFromIntervals(newIntervals))
      }
      return next
    })
  }, [reset])

  // Keyboard tap (spacebar)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault()
        handleTap()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleTap])

  useEffect(() => () => {
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
  }, [])

  const recentIntervals = intervals.slice(-MAX_HISTORY)
  const avgInterval = recentIntervals.length > 0
    ? recentIntervals.reduce((a, b) => a + b, 0) / recentIntervals.length
    : null

  // BPM range from last 8 intervals
  const minBpm = recentIntervals.length > 0
    ? Math.round(60000 / Math.max(...recentIntervals) * 10) / 10
    : null
  const maxBpm = recentIntervals.length > 0
    ? Math.round(60000 / Math.min(...recentIntervals) * 10) / 10
    : null

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">

        {/* ── Left: Tap zone ───────────────────────── */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
              <Info className="w-3 h-3" />
              Works offline — no audio needed.
            </span>
          </div>

          <div>
            <h2 className="text-sm font-bold text-foreground mb-1">Tap to the beat</h2>
            <p className="text-xs text-muted-foreground mb-4">Click the button or press <kbd className="px-1 py-0.5 rounded border border-border font-mono text-xs">Space</kbd> in time with the music. Auto-resets after 3 seconds of silence.</p>
          </div>

          {/* Big tap button */}
          <button
            onClick={handleTap}
            className={`relative flex-1 min-h-[200px] rounded-2xl border-4 font-black text-3xl transition-all select-none focus:outline-none ${
              flash
                ? 'border-green-500 bg-green-500/20 text-green-600 scale-[0.97]'
                : 'border-border bg-secondary/30 text-muted-foreground hover:border-green-500/50 hover:bg-green-500/5 hover:text-green-600 active:scale-[0.97]'
            }`}
            style={{ touchAction: 'manipulation' }}
          >
            <div className="flex flex-col items-center gap-3">
              <Hand className="w-12 h-12" />
              <span>TAP</span>
              <span className="text-sm font-normal text-muted-foreground">or press Space</span>
            </div>
          </button>

          <button
            onClick={reset}
            disabled={taps.length === 0}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-border text-muted-foreground hover:bg-secondary text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4" /> Reset
          </button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className={`w-2 h-2 rounded-full ${taps.length > 0 ? 'bg-green-500 animate-pulse' : 'bg-secondary border border-border'}`} />
            {taps.length === 0
              ? 'Waiting for first tap…'
              : taps.length === 1
              ? 'Keep tapping…'
              : `${taps.length} taps recorded`}
          </div>
        </div>

        {/* ── Right: BPM display ───────────────────── */}
        <div className="flex flex-col rounded-xl border border-border bg-card overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground" />
            <span className="font-semibold text-foreground">Tempo</span>
          </div>

          <div className="flex-1 p-6 flex flex-col gap-5">
            {/* Big BPM */}
            <div className="text-center py-6 rounded-xl bg-secondary/40 border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">BPM</p>
              <p className={`text-7xl font-black tracking-tight transition-all ${bpm ? 'text-foreground' : 'text-muted-foreground/30'}`}>
                {bpm ?? '---'}
              </p>
              {bpm && (
                <p className="text-sm font-medium text-muted-foreground mt-2">{tempoLabel(bpm)}</p>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-secondary/30 p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Avg interval</p>
                <p className="text-lg font-bold text-foreground">
                  {avgInterval ? `${Math.round(avgInterval)} ms` : '—'}
                </p>
              </div>
              <div className="rounded-lg border border-border bg-secondary/30 p-3 text-center">
                <p className="text-xs text-muted-foreground mb-1">Taps</p>
                <p className="text-lg font-bold text-foreground">{taps.length}</p>
              </div>
            </div>

            {/* Range */}
            {minBpm !== null && maxBpm !== null && minBpm !== maxBpm && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">BPM Range (last {recentIntervals.length} intervals)</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="px-2 py-0.5 rounded bg-secondary/60 border border-border font-mono text-foreground">{minBpm}</span>
                  <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full rounded-full bg-green-600" style={{ width: '100%' }} />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-secondary/60 border border-border font-mono text-foreground">{maxBpm}</span>
                </div>
              </div>
            )}

            {/* Interval history */}
            {recentIntervals.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Interval History (ms)</p>
                <div className="flex gap-1 flex-wrap">
                  {recentIntervals.map((iv, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded bg-secondary/60 border border-border font-mono text-muted-foreground">
                      {Math.round(iv)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Half / double */}
            {bpm && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Tempo Variations</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-secondary/20 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Half time</p>
                    <p className="text-base font-bold text-foreground">{Math.round(bpm / 2 * 10) / 10}</p>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/20 p-2 text-center">
                    <p className="text-xs text-muted-foreground">Double time</p>
                    <p className="text-base font-bold text-foreground">{bpm * 2}</p>
                  </div>
                </div>
              </div>
            )}

            {!bpm && (
              <p className="text-sm text-muted-foreground text-center">Tap at least twice to see your BPM.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
