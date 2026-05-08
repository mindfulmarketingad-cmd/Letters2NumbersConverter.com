'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Download, Shuffle } from 'lucide-react'
import { useTrackUsage } from '@/lib/use-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'

export function PlaceholderImageCreator() {
  const [width, setWidth] = useState(600)
  const [height, setHeight] = useState(400)
  const [textColor, setTextColor] = useState('#ffffff')
  const [bgColor, setBgColor] = useState('#cccccc')
  const [caption, setCaption] = useState('')
  const [fontFamily, setFontFamily] = useState('sans-serif')
  const [fontSize, setFontSize] = useState(40)
  const [fontWeight, setFontWeight] = useState(400)
  const [fileType, setFileType] = useState('png')
  const [dataUri, setDataUri] = useState('')
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { trackUsage, showUpgradeModal, setShowUpgradeModal, remainingUses } = useTrackUsage('Placeholder Image Creator')

  const fontFamilies = ['sans-serif', 'serif', 'monospace', 'Arial', 'Georgia', 'Times New Roman', 'Courier New']
  const fontWeights = [100, 300, 400, 500, 600, 700, 800, 900]
  const fileTypes = ['png', 'jpg', 'webp']

  const generateImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Draw background
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, width, height)

    // Draw text
    ctx.fillStyle = textColor
    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    const textToDraw = caption || `${width} x ${height}`
    ctx.fillText(textToDraw, width / 2, height / 2)

    // Convert to data URI
    const type = fileType === 'jpg' ? 'image/jpeg' : `image/${fileType}`
    const uri = canvas.toDataURL(type)
    setDataUri(uri)
    trackUsage() // Track usage on image generation
  }

  useEffect(() => {
    generateImage()
  }, [width, height, textColor, bgColor, caption, fontFamily, fontSize, fontWeight, fileType])

  const handleRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    setBgColor(randomColor)
  }

  const handleCopyUri = () => {
    if (dataUri) {
      navigator.clipboard.writeText(dataUri)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = dataUri
    link.download = `placeholder-${width}x${height}.${fileType}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full space-y-8">
      {/* Main Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Width (px)
            </label>
            <input
              type="number"
              value={width}
              onChange={e => setWidth(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Height (px)
            </label>
            <input
              type="number"
              value={height}
              onChange={e => setHeight(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Text color
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={textColor}
                onChange={e => setTextColor(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono"
              />
              <input
                type="color"
                value={textColor}
                onChange={e => setTextColor(e.target.value)}
                className="w-12 h-10 border border-border rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Background color
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={bgColor}
                onChange={e => setBgColor(e.target.value)}
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono"
              />
              <input
                type="color"
                value={bgColor}
                onChange={e => setBgColor(e.target.value)}
                className="w-12 h-10 border border-border rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={handleRandomColor}
            className="w-full py-2 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            RANDOM COLOR
          </button>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Caption
            </label>
            <input
              type="text"
              value={caption}
              onChange={e => setCaption(e.target.value)}
              placeholder="Leave blank for dimensions..."
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Font family
            </label>
            <select
              value={fontFamily}
              onChange={e => setFontFamily(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              {fontFamilies.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Font size
            </label>
            <input
              type="number"
              value={fontSize}
              onChange={e => setFontSize(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Font weight
            </label>
            <select
              value={fontWeight}
              onChange={e => setFontWeight(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              {fontWeights.map(weight => (
                <option key={weight} value={weight}>{weight}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              File type
            </label>
            <select
              value={fileType}
              onChange={e => setFileType(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              {fileTypes.map(type => (
                <option key={type} value={type}>{type.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Preview */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Preview
            </label>
            <div className="border-2 border-border rounded-lg overflow-hidden flex items-center justify-center bg-card" style={{ aspectRatio: `${width}/${height}`, maxHeight: '400px' }}>
              <canvas
                ref={canvasRef}
                style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Data URI
            </label>
            <div className="relative">
              <textarea
                value={dataUri}
                readOnly
                className="w-full px-4 py-2 border border-border rounded-lg bg-background font-mono text-xs h-24 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleCopyUri}
                className="absolute top-2 right-2 p-2 hover:bg-secondary rounded transition-colors"
                title="Copy URI"
              >
                <Copy className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
              {copied && <p className="text-xs text-primary mt-1">Copied!</p>}
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            DOWNLOAD IMAGE
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-semibold">How It Works:</h4>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• Set the width and height in pixels for your placeholder</li>
          <li>• Choose text and background colors with the color pickers or random generator</li>
          <li>• Customize font family, size, and weight for your text</li>
          <li>• Add optional caption text or use default dimensions</li>
          <li>• Download as PNG, JPG, or WebP format</li>
          <li>• Copy the Data URI for embedding directly in HTML/CSS</li>
        </ul>
      </div>

      {/* Remaining Uses Display */}
      {remainingUses !== null && remainingUses > 0 && (
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-3">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            Remaining uses today: <span className="font-bold">{remainingUses}</span>
          </p>
        </div>
      )}

      {/* Upgrade Modal */}
      <UpgradeModal isOpen={showUpgradeModal} onClose={() => setShowUpgradeModal(false)} />
    </div>
  )
}
