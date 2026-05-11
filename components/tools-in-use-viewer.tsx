'use client'

import { useEffect, useState } from 'react'
import { Activity } from 'lucide-react'

export function ToolsInUseViewer() {
  const [count, setCount] = useState(42)

  useEffect(() => {
    // Generate random count between 10 and 75
    const generateRandomCount = () => {
      return Math.floor(Math.random() * (75 - 10 + 1)) + 10
    }

    // Set initial count
    setCount(generateRandomCount())

    // Update count every 2-4 seconds with slight variation
    const interval = setInterval(() => {
      setCount(generateRandomCount())
    }, 2000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700/50">
        <div className="text-center space-y-4">
          {/* Title */}
          <div className="text-slate-400 text-sm font-semibold tracking-widest uppercase">
            Tools In Use
          </div>

          {/* Large Counter */}
          <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {count}
          </div>

          {/* Subtitle */}
          <div className="text-slate-300 text-lg font-medium">
            Active users converting & analyzing
          </div>

          {/* Live Activity Indicator */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Live activity</span>
          </div>
        </div>
      </div>
    </div>
  )
}
