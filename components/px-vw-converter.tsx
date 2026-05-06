"use client"

import { useState, useMemo } from "react"
import { Copy, RotateCcw, Lightbulb } from "lucide-react"
import { pxToVw, vwToPx, VIEWPORT_PRESETS, getConversionRatio, formatNumber, formatWithCommas } from "@/lib/px-vw-converter"

export function PxVwConverter() {
  const [pxValue, setPxValue] = useState(100)
  const [viewportWidth, setViewportWidth] = useState(1920)
  const [presetIndex, setPresetIndex] = useState(4) // Default to Desktop (1920px)
  const [isCustom, setIsCustom] = useState(false)

  const vwValue = useMemo(() => {
    return formatNumber(pxToVw(pxValue, viewportWidth), 3)
  }, [pxValue, viewportWidth])

  const ratio = useMemo(() => {
    return getConversionRatio(viewportWidth)
  }, [viewportWidth])

  const handlePxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(e.target.value) || 0)
    setPxValue(value)
  }

  const handlePxSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPxValue(parseInt(e.target.value))
  }

  const handleVwSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vw = parseFloat(e.target.value)
    setPxValue(Math.round(vwToPx(vw, viewportWidth)))
  }

  const handlePresetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value)
    setPresetIndex(index)
    setViewportWidth(VIEWPORT_PRESETS[index].width)
    setIsCustom(false)
  }

  const handleCustomViewport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value) || 1)
    setViewportWidth(value)
    setIsCustom(true)
  }

  const handleCustomCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(e.target.checked)
    if (!e.target.checked) {
      setViewportWidth(VIEWPORT_PRESETS[presetIndex].width)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const clearAll = () => {
    setPxValue(100)
    setViewportWidth(1920)
    setPresetIndex(4)
    setIsCustom(false)
  }

  return (
    <div className="w-full space-y-8">
      {/* Large Result Display */}
      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8">
        <div className="flex items-baseline justify-center gap-6 flex-wrap">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-foreground">
              {pxValue}<span className="text-2xl sm:text-3xl ml-1">px</span>
            </div>
          </div>
          <div className="text-3xl font-light text-muted-foreground">=</div>
          <div className="text-center">
            <div className="text-5xl sm:text-6xl font-bold text-primary">
              {vwValue}<span className="text-2xl sm:text-3xl ml-1">vw</span>
            </div>
          </div>
        </div>
      </div>

      {/* PX Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">Pixels (px)</label>
          <span className="text-lg font-mono font-bold text-foreground">{pxValue}px</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={pxValue}
          onChange={handlePxSlider}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <input
          type="number"
          value={pxValue}
          onChange={handlePxChange}
          placeholder="Enter pixels value"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
        />
      </div>

      {/* VW Slider */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-foreground">Viewport Width (vw)</label>
          <span className="text-lg font-mono font-bold text-foreground">{vwValue}vw</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={vwValue}
          onChange={handleVwSlider}
          className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
        />
      </div>

      {/* Viewport Width Settings */}
      <div className="space-y-4 bg-card border border-border rounded-lg p-6">
        <h3 className="text-sm font-semibold text-foreground">Viewport Width Settings</h3>
        <p className="text-xs text-muted-foreground">(Choose preset or custom)</p>

        <select
          value={isCustom ? -1 : presetIndex}
          onChange={handlePresetChange}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {VIEWPORT_PRESETS.map((preset, index) => (
            <option key={index} value={index}>
              {preset.name}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="custom-checkbox"
            checked={isCustom}
            onChange={handleCustomCheckbox}
            className="w-4 h-4 cursor-pointer"
          />
          <label htmlFor="custom-checkbox" className="text-sm text-foreground cursor-pointer">
            Custom
          </label>
        </div>

        {isCustom && (
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground block">Custom Viewport Width (px)</label>
            <input
              type="number"
              value={viewportWidth}
              onChange={handleCustomViewport}
              min="1"
              placeholder="Enter custom viewport width"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-mono"
            />
          </div>
        )}
      </div>

      {/* Conversion Info */}
      <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 space-y-3">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Current viewport width:</strong> {formatWithCommas(viewportWidth)}px
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">1vw =</strong> {formatNumber(ratio.pxPerVw, 2)}px
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">1px =</strong> {formatNumber(ratio.vwPerPx, 3)}vw
        </p>
      </div>

      {/* Tip */}
      <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 flex gap-3">
        <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900 dark:text-amber-200">
          Adjust either px or vw values to see real-time conversions based on the viewport width.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => copyToClipboard(`${pxValue}px`)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy PX
        </button>
        <button
          onClick={() => copyToClipboard(`${vwValue}vw`)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <Copy className="w-4 h-4" />
          Copy VW
        </button>
        <button
          onClick={clearAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Clear
        </button>
      </div>

      {/* Privacy Notice */}
      <div className="text-center text-sm text-muted-foreground">
        <p>Your data won&apos;t be stored by us</p>
      </div>
    </div>
  )
}
