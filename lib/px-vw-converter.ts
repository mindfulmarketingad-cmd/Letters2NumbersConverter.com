/**
 * PX to VW Converter utilities
 * VW (viewport width) is a responsive CSS unit
 * Formula: vw = (px / viewport_width) * 100
 * Formula: px = (vw * viewport_width) / 100
 */

export interface ViewportPreset {
  name: string
  width: number
}

export const VIEWPORT_PRESETS: ViewportPreset[] = [
  { name: "Mobile (320px)", width: 320 },
  { name: "Tablet (768px)", width: 768 },
  { name: "Laptop (1024px)", width: 1024 },
  { name: "Desktop (1280px)", width: 1280 },
  { name: "Desktop (1920px)", width: 1920 },
  { name: "4K (2560px)", width: 2560 },
]

/**
 * Convert pixels to viewport width units
 */
export function pxToVw(px: number, viewportWidth: number): number {
  if (viewportWidth <= 0) {
    throw new Error("Viewport width must be greater than 0")
  }
  return (px / viewportWidth) * 100
}

/**
 * Convert viewport width units to pixels
 */
export function vwToPx(vw: number, viewportWidth: number): number {
  if (viewportWidth <= 0) {
    throw new Error("Viewport width must be greater than 0")
  }
  return (vw * viewportWidth) / 100
}

/**
 * Get conversion ratio info
 */
export function getConversionRatio(viewportWidth: number): {
  pxPerVw: number
  vwPerPx: number
} {
  if (viewportWidth <= 0) {
    throw new Error("Viewport width must be greater than 0")
  }

  return {
    pxPerVw: viewportWidth / 100,
    vwPerPx: 100 / viewportWidth,
  }
}

/**
 * Format number to specified decimal places
 */
export function formatNumber(num: number, decimals: number = 3): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

/**
 * Format number with proper thousands separator
 */
export function formatWithCommas(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
