'use client'

import { useState, useRef } from 'react'
import { Download, RotateCcw } from 'lucide-react'

interface CardSettings {
  cardType: 'yugioh' | 'pokemon' | 'mtg'
  quality: 'standard' | 'high' | 'ultra'
  cardSpacing: number
  cmykConversion: boolean
}

export function TCGProxyCreator() {
  const [settings, setSettings] = useState<CardSettings>({
    cardType: 'yugioh',
    quality: 'high',
    cardSpacing: 5,
    cmykConversion: false,
  })

  const [cardImages, setCardImages] = useState<string[]>(['', '', '', '', '', ''])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const cardDimensions: Record<string, { width: number; height: number; label: string }> = {
    yugioh: { width: 59, height: 86, label: 'Yu-Gi-Oh! (59x86mm)' },
    pokemon: { width: 62, height: 89, label: 'Pokémon (62x89mm)' },
    mtg: { width: 63, height: 88, label: 'MTG (63x88mm)' },
  }

  const qualitySettings: Record<string, { dpi: number; label: string }> = {
    standard: { dpi: 300, label: 'Standard (300 DPI)' },
    high: { dpi: 450, label: 'High (450 DPI)' },
    ultra: { dpi: 600, label: 'Ultra (600 DPI)' },
  }

  const dimension = cardDimensions[settings.cardType]
  const quality = qualitySettings[settings.quality]

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const newImages = [...cardImages]
        newImages[index] = event.target?.result as string
        setCardImages(newImages)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleReset = () => {
    setCardImages(['', '', '', '', '', ''])
    setSettings({
      cardType: 'yugioh',
      quality: 'high',
      cardSpacing: 5,
      cmykConversion: false,
    })
  }

  const handleDownload = () => {
    // Create a canvas for the proxy sheet
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const mmToPixels = (mm: number) => (mm * quality.dpi) / 25.4
    const cardWidth = mmToPixels(dimension.width)
    const cardHeight = mmToPixels(dimension.height)
    const spacing = mmToPixels(settings.cardSpacing)

    // Set canvas size (3 columns x 2 rows)
    canvas.width = cardWidth * 3 + spacing * 4
    canvas.height = cardHeight * 2 + spacing * 3

    // White background
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw each card
    cardImages.forEach((img, index) => {
      const row = Math.floor(index / 3)
      const col = index % 3
      const x = spacing + col * (cardWidth + spacing)
      const y = spacing + row * (cardHeight + spacing)

      // Draw dashed border
      ctx.strokeStyle = '#999999'
      ctx.setLineDash([5, 5])
      ctx.strokeRect(x, y, cardWidth, cardHeight)
      ctx.setLineDash([])

      // Draw image if exists
      if (img) {
        const image = new Image()
        image.crossOrigin = 'anonymous'
        image.onload = () => {
          ctx.drawImage(image, x, y, cardWidth, cardHeight)
        }
        image.src = img
      }
    })

    // Download
    const link = document.createElement('a')
    link.href = canvas.toDataURL('image/png')
    link.download = `tcg-proxy-sheet-${Date.now()}.png`
    link.click()
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-foreground mb-8">Create Proxy Cards</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Settings Panel */}
          <div className="lg:col-span-1 border border-border rounded-lg p-6 bg-secondary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Settings</h2>

            <div className="space-y-6">
              {/* Card Type */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Card Type
                </label>
                <select
                  value={settings.cardType}
                  onChange={(e) =>
                    setSettings({ ...settings, cardType: e.target.value as any })
                  }
                  className="w-full px-3 py-2 bg-background border border-border rounded text-foreground"
                >
                  {Object.entries(cardDimensions).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quality */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Quality
                </label>
                <select
                  value={settings.quality}
                  onChange={(e) =>
                    setSettings({ ...settings, quality: e.target.value as any })
                  }
                  className="w-full px-3 py-2 bg-background border border-border rounded text-foreground"
                >
                  {Object.entries(qualitySettings).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Card Spacing */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Card Spacing (mm)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={settings.cardSpacing}
                    onChange={(e) =>
                      setSettings({ ...settings, cardSpacing: parseInt(e.target.value) })
                    }
                    className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="text-sm text-muted-foreground w-12 text-right">
                    {settings.cardSpacing}mm
                  </span>
                </div>
              </div>

              {/* CMYK Conversion */}
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-foreground">
                  CMYK Color Conversion
                </label>
                <button
                  onClick={() =>
                    setSettings({ ...settings, cmykConversion: !settings.cmykConversion })
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.cmykConversion ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${
                      settings.cmykConversion ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-sm font-semibold text-foreground mb-3">Current Settings</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Card Type: {cardDimensions[settings.cardType].label}</li>
                  <li>• Card Spacing: {settings.cardSpacing}mm</li>
                  <li>
                    • CMYK Conversion:{' '}
                    {settings.cmykConversion ? 'Enabled' : 'Disabled'}
                  </li>
                  <li>• Quality: {qualitySettings[settings.quality].label}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2 border border-border rounded-lg p-6 bg-secondary/20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Preview</h2>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-secondary transition-colors text-foreground"
              >
                <RotateCcw size={18} />
                Reset Page
              </button>
            </div>

            {/* Card Grid */}
            <div className="bg-white rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4">
                {cardImages.map((img, index) => (
                  <div key={index} className="aspect-[59/86] flex items-center justify-center">
                    <label
                      className="w-full h-full border-2 border-dashed border-muted-foreground rounded cursor-pointer hover:border-primary transition-colors flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                      onClick={() => {
                        fileInputRef.current?.click()
                      }}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={`Card ${index + 1}`}
                          className="w-full h-full object-cover rounded"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-2xl text-muted-foreground">+</div>
                          <p className="text-xs text-muted-foreground mt-1">Upload</p>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(index, e)}
                        className="hidden"
                        ref={index === 0 ? fileInputRef : undefined}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              <Download size={20} />
              Download Proxy Sheet (PNG)
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
