'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X } from 'lucide-react'

const PRESET_SPEEDS = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0]

export function PlaybackSpeedCalculator() {
  const [tabMode, setTabMode] = useState<'time' | 'seconds'>('time')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [totalSeconds, setTotalSeconds] = useState('')
  const [speed, setSpeed] = useState('1.5')
  const [result, setResult] = useState<{
    originalDuration: string
    adjustedDuration: string
    timeSaved: string
    originalSeconds: number
    adjustedSeconds: number
  } | null>(null)
  const [error, setError] = useState('')

  const getOriginalSeconds = () => {
    if (tabMode === 'time') {
      const h = parseInt(hours) || 0
      const m = parseInt(minutes) || 0
      const s = parseInt(seconds) || 0
      return h * 3600 + m * 60 + s
    } else {
      return parseInt(totalSeconds) || 0
    }
  }

  const secondsToTimeString = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600)
    const mins = Math.floor((totalSecs % 3600) / 60)
    const secs = Math.floor(totalSecs % 60)
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const calculate = () => {
    setError('')
    setResult(null)

    const originalSecs = getOriginalSeconds()
    const speedValue = parseFloat(speed)

    if (originalSecs === 0) {
      setError('Please enter a valid duration')
      return
    }

    if (isNaN(speedValue) || speedValue < 0.25 || speedValue > 16) {
      setError('Playback speed must be between 0.25x and 16x')
      return
    }

    const adjustedSecs = originalSecs / speedValue
    const timeSavedSecs = originalSecs - adjustedSecs

    setResult({
      originalDuration: secondsToTimeString(originalSecs),
      adjustedDuration: secondsToTimeString(adjustedSecs),
      timeSaved: secondsToTimeString(timeSavedSecs),
      originalSeconds: originalSecs,
      adjustedSeconds: adjustedSecs,
    })
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculate()
    }
  }

  const selectPreset = (presetSpeed: number) => {
    setSpeed(presetSpeed.toString())
  }

  const clearSpeed = () => {
    setSpeed('')
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">Playback Speed Calculator</h2>
        <p className="text-lg text-muted-foreground">
          Calculate adjusted duration and time saved when playing media at different speeds.
        </p>
      </div>

      <Tabs value={tabMode} onValueChange={(v) => setTabMode(v as 'time' | 'seconds')} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="time">HH:MM:SS</TabsTrigger>
          <TabsTrigger value="seconds">Total Seconds</TabsTrigger>
        </TabsList>

        <TabsContent value="time" className="space-y-6 mt-6">
          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-4">Original Duration</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Hours</label>
                <input
                  type="number"
                  min="0"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Minutes</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Seconds</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="0"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="seconds" className="space-y-6 mt-6">
          <div className="bg-secondary/50 p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-4">Original Duration</h3>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Total Seconds</label>
              <input
                type="number"
                min="0"
                value={totalSeconds}
                onChange={(e) => setTotalSeconds(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0"
                className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-secondary/50 p-6 rounded-lg border border-border mb-6">
        <h3 className="font-semibold text-foreground mb-4">Playback Speed</h3>
        
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="1.5"
            step="0.05"
            min="0.25"
            max="16"
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
          />
          <button
            onClick={clearSpeed}
            className="px-4 py-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition"
          >
            <X className="w-4 h-4 text-red-500" />
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">Range: 0.25x - 16x</p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-6">
          {PRESET_SPEEDS.map(presetSpeed => (
            <button
              key={presetSpeed}
              onClick={() => selectPreset(presetSpeed)}
              className={`px-3 py-2 rounded-lg font-medium transition ${
                parseFloat(speed) === presetSpeed
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-foreground hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {presetSpeed}x
            </button>
          ))}
        </div>

        <button
          onClick={calculate}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-opacity"
          style={{ backgroundColor: '#11a099' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Calculate
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Results</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Original Duration:</span>
              <span className="text-lg font-bold text-green-600">{result.originalDuration}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Duration at {speed}x Speed:</span>
              <span className="text-lg font-bold text-green-600">{result.adjustedDuration}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Time Saved:</span>
              <span className="text-lg font-bold text-green-600">{result.timeSaved}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded text-sm">
              <span className="font-medium text-muted-foreground">Total Seconds Saved:</span>
              <span className="text-green-600">{(result.originalSeconds - result.adjustedSeconds).toFixed(2)}s</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-foreground mb-3">About This Calculator</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          The Playback Speed Calculator helps you understand how adjusting playback speed affects the duration of your media consumption. Whether you're watching educational videos, podcasts, or lectures, this tool shows:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>Adjusted duration at your chosen playback speed</li>
          <li>Total time saved by watching at faster speeds</li>
          <li>Quick presets for common playback speeds (1.25x, 1.5x, 2x, etc.)</li>
          <li>Support for both time format (HH:MM:SS) and total seconds</li>
        </ul>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
          Perfect for students, lifelong learners, podcast enthusiasts, and anyone looking to optimize their media consumption time.
        </p>
      </div>
    </div>
  )
}
