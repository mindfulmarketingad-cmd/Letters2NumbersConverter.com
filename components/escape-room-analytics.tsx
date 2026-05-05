"use client"

import { useState, useEffect } from "react"
import { BarChart3, Users, Clock, Trophy, AlertTriangle, TrendingUp, Eye } from "lucide-react"

interface RoomAnalytics {
  plays: number
  completions: number
  totalTime: number
  hintsUsed: number
  stuckOn: Record<number, number>
}

interface AnalyticsProps {
  roomId?: string
  roomName?: string
}

export function EscapeRoomAnalytics({ roomId, roomName }: AnalyticsProps) {
  const [analytics, setAnalytics] = useState<RoomAnalytics | null>(null)
  const [allRoomStats, setAllRoomStats] = useState<{id: string, name: string, stats: RoomAnalytics}[]>([])

  useEffect(() => {
    // Load analytics from localStorage
    if (roomId) {
      const key = `escape_analytics_${roomId}`
      const data = localStorage.getItem(key)
      if (data) {
        setAnalytics(JSON.parse(data))
      }
    }

    // Load all quick play stats
    const envIds = ['dungeon', 'jungle', 'park', 'mansion', 'spaceship']
    const envNames: Record<string, string> = {
      dungeon: 'The Dark Dungeon',
      jungle: 'Lost in the Jungle',
      park: 'Mystery at Midnight Park',
      mansion: 'The Haunted Mansion',
      spaceship: 'Stranded in Space'
    }
    
    const allStats = envIds.map(id => {
      const key = `escape_analytics_${id}`
      const data = localStorage.getItem(key)
      return {
        id,
        name: envNames[id],
        stats: data ? JSON.parse(data) : { plays: 0, completions: 0, totalTime: 0, hintsUsed: 0, stuckOn: {} }
      }
    }).filter(s => s.stats.plays > 0)
    
    setAllRoomStats(allStats)
  }, [roomId])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const calculateCompletionRate = (stats: RoomAnalytics) => {
    if (stats.plays === 0) return 0
    return Math.round((stats.completions / stats.plays) * 100)
  }

  const calculateAvgTime = (stats: RoomAnalytics) => {
    if (stats.completions === 0) return '—'
    return formatTime(Math.round(stats.totalTime / stats.completions))
  }

  const getMostDifficultPuzzle = (stats: RoomAnalytics) => {
    const stuckEntries = Object.entries(stats.stuckOn)
    if (stuckEntries.length === 0) return null
    const sorted = stuckEntries.sort((a, b) => b[1] - a[1])
    return { puzzle: parseInt(sorted[0][0]), hints: sorted[0][1] }
  }

  // If viewing specific room analytics
  if (roomId && analytics) {
    const completionRate = calculateCompletionRate(analytics)
    const avgTime = calculateAvgTime(analytics)
    const hardestPuzzle = getMostDifficultPuzzle(analytics)

    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-primary" />
          <div>
            <h2 className="text-xl font-bold text-foreground">Room Analytics</h2>
            {roomName && <p className="text-sm text-muted-foreground">{roomName}</p>}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Total Plays</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{analytics.plays}</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Trophy className="w-4 h-4" />
              <span className="text-sm">Completion Rate</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{completionRate}%</p>
            <p className="text-xs text-muted-foreground">{analytics.completions} completions</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Avg. Completion Time</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{avgTime}</p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm">Hints Used</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{analytics.hintsUsed}</p>
            {analytics.completions > 0 && (
              <p className="text-xs text-muted-foreground">
                ~{(analytics.hintsUsed / analytics.completions).toFixed(1)} per completion
              </p>
            )}
          </div>
        </div>

        {hardestPuzzle && (
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm">Most Difficult Puzzle</span>
            </div>
            <p className="text-foreground">
              Puzzle #{hardestPuzzle.puzzle} - Players used hints <span className="font-bold text-primary">{hardestPuzzle.hints} times</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Consider making this puzzle easier or adding a clearer hint
            </p>
          </div>
        )}

        {Object.keys(analytics.stuckOn).length > 0 && (
          <div className="bg-card border border-border rounded-xl p-4">
            <h3 className="font-semibold text-foreground mb-3">Puzzle Difficulty Breakdown</h3>
            <div className="space-y-2">
              {Object.entries(analytics.stuckOn)
                .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                .map(([puzzle, hints]) => (
                  <div key={puzzle} className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground w-20">Puzzle {puzzle}</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all"
                        style={{ width: `${Math.min((hints / Math.max(...Object.values(analytics.stuckOn))) * 100, 100)}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground w-16 text-right">{hints} hints</span>
                  </div>
                ))
              }
            </div>
          </div>
        )}
      </div>
    )
  }

  // Overview of all rooms
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <BarChart3 className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-xl font-bold text-foreground">Quick Play Analytics</h2>
          <p className="text-sm text-muted-foreground">Stats from all played environments</p>
        </div>
      </div>

      {allRoomStats.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-8 text-center">
          <Eye className="w-12 h-12 mx-auto text-muted-foreground mb-3" />
          <h3 className="font-semibold text-foreground mb-1">No Data Yet</h3>
          <p className="text-sm text-muted-foreground">
            Play some Quick Play environments to see analytics here
          </p>
        </div>
      ) : (
        <>
          {/* Summary stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">Total Plays</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {allRoomStats.reduce((sum, r) => sum + r.stats.plays, 0)}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Trophy className="w-4 h-4" />
                <span className="text-sm">Total Completions</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {allRoomStats.reduce((sum, r) => sum + r.stats.completions, 0)}
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Total Hints Used</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {allRoomStats.reduce((sum, r) => sum + r.stats.hintsUsed, 0)}
              </p>
            </div>
          </div>

          {/* Per-room breakdown */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">By Environment</h3>
            {allRoomStats.map(room => (
              <div key={room.id} className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-foreground">{room.name}</h4>
                  <span className="text-sm text-primary font-medium">
                    {calculateCompletionRate(room.stats)}% completion rate
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <p className="text-lg font-bold text-foreground">{room.stats.plays}</p>
                    <p className="text-xs text-muted-foreground">Plays</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{room.stats.completions}</p>
                    <p className="text-xs text-muted-foreground">Completions</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{calculateAvgTime(room.stats)}</p>
                    <p className="text-xs text-muted-foreground">Avg Time</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">{room.stats.hintsUsed}</p>
                    <p className="text-xs text-muted-foreground">Hints</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
