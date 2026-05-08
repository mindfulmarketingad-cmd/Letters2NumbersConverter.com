import { useEffect, useRef, useCallback, useState } from 'react'
import { useTrackUsage as useBaseTrackUsage } from '@/lib/use-track-usage'

/**
 * Hook for tracking usage on instant output tools (where output updates automatically)
 * Uses debouncing to track usage after user stops interacting for a specified delay
 * 
 * @param toolName - Name of the tool for tracking
 * @param debounceMs - Delay in milliseconds before tracking (default: 2000ms)
 * @returns { showUpgradeModal, setShowUpgradeModal, remainingUses, hasTrackedThisSession }
 */
export function useInstantTrackUsage(toolName: string, debounceMs: number = 2000) {
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const hasTracked = useRef(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [remainingUses, setRemainingUses] = useState<number | null>(null)
  const { trackUsage } = useBaseTrackUsage(toolName)

  /**
   * Track usage with debouncing
   * Call this function whenever the tool's output updates (in useEffect)
   */
  const scheduleTracking = useCallback(async () => {
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    // Only track once per session
    if (hasTracked.current) {
      return
    }

    // Set new timer
    debounceTimer.current = setTimeout(async () => {
      const result = await trackUsage()
      
      if (result.allowed) {
        hasTracked.current = true
        setRemainingUses(result.remainingUses)
      } else {
        // Show upgrade modal if limit exceeded
        setShowUpgradeModal(true)
      }
    }, debounceMs)
  }, [trackUsage, debounceMs])

  /**
   * Reset the tracking state (call when user clears input or starts fresh)
   */
  const resetTracking = useCallback(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }
    hasTracked.current = false
  }, [])

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [])

  return {
    scheduleTracking,
    resetTracking,
    showUpgradeModal,
    setShowUpgradeModal,
    remainingUses,
    hasTrackedThisSession: hasTracked.current,
  }
}
