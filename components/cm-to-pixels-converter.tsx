'use client'

import { useState } from 'react'
import { Copy } from 'lucide-react'
import { useTrackUsage } from '@/lib/use-track-usage'
import { UpgradeModal } from '@/components/upgrade-modal'

export function CMToPixelsConverter() {
  const [cm, setCm] = useState('')
  const [ppi, setPpi] = useState(96)
  const [result, setResult] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)
  const { trackUsage, showUpgradeModal, setShowUpgradeModal, remainingUses } = useTrackUsage('CM To Pixels Converter')

  const ppiOptions = [
    { value: 72, label: '72 PPI (Print)' },
    { value: 96, label: '96 PPI (Standard Web/Screen)' },
    { value: 150, label: '150 PPI (Screen)' },
    { value: 300, label: '300 PPI (High Resolution Print)' },
  ]

  const quickConversions = [1, 2, 5, 10, 15, 20, 30, 50]

  const convert = (value: string, selectedPpi: number) => {
    if (!value || isNaN(Number(value))) {
      setResult(null)
      return
    }
    const cmValue = parseFloat(value)
    const pixels = (cmValue * selectedPpi) / 2.54
    setResult(Math.round(pixels * 100) / 100)
    trackUsage() // Track usage on conversion
  }

  const handleCmChange = (value: string) => {
    setCm(value)
    convert(value, ppi)
  }

  const handlePpiChange = (value: string) => {
    const newPpi = parseInt(value)
    setPpi(newPpi)
    convert(cm, newPpi)
  }

  const handleQuickConversion = (value: number) => {
    setCm(value.toString())
    convert(value.toString(), ppi)
  }

  const handleCopy = () => {
    if (result !== null) {
      navigator.clipboard.writeText(result.toString())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Popular conversions table data
  const popularConversions = [
    { cm: 0.5, px96: 18.9, px300: 59.06 },
    { cm: 1, px96: 37.8, px300: 118.11 },
    { cm: 2, px96: 75.59, px300: 236.22 },
    { cm: 3, px96: 113.39, px300: 354.33 },
    { cm: 4, px96: 151.18, px300: 472.44 },
    { cm: 5, px96: 188.98, px300: 590.55 },
    { cm: 7.5, px96: 283.46, px300: 885.83 },
    { cm: 10, px96: 377.95, px300: 1181.1 },
    { cm: 15, px96: 566.93, px300: 1771.65 },
    { cm: 20, px96: 755.91, px300: 2362.2 },
    { cm: 25, px96: 944.88, px300: 2952.76 },
    { cm: 30, px96: 1133.86, px300: 3543.31 },
  ]

  return (
    <div className="w-full space-y-8">
      {/* Main Converter */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Enter Centimeters (cm)</label>
            <input
              type="number"
              value={cm}
              onChange={e => handleCmChange(e.target.value)}
              placeholder="Enter value..."
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          {/* Resolution Select */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">Resolution (PPI/DPI)</label>
            <select
              value={ppi}
              onChange={e => handlePpiChange(e.target.value)}
              className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              {ppiOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result Display */}
        {result !== null && (
          <div className="bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900 rounded-lg p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Result</p>
                <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                  {result}
                  <span className="text-lg ml-2">px</span>
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="p-2 hover:bg-teal-100 dark:hover:bg-teal-900/50 rounded transition-colors"
                title="Copy result"
              >
                <Copy className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              </button>
            </div>
            {copied && <p className="text-sm text-teal-600 dark:text-teal-400 mt-2">Copied!</p>}
          </div>
        )}

        {/* Convert Button */}
        <button
          onClick={() => convert(cm, ppi)}
          disabled={!cm || isNaN(Number(cm))}
          className="w-full py-3 bg-teal-500 hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
        >
          Convert to Pixels
        </button>
      </div>

      {/* Quick Conversions */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Quick Conversions</h3>
        <div className="flex flex-wrap gap-2">
          {quickConversions.map(value => (
            <button
              key={value}
              onClick={() => handleQuickConversion(value)}
              className="px-4 py-2 border border-teal-500 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-950/20 transition-colors font-medium text-sm"
            >
              {value} cm
            </button>
          ))}
        </div>
      </div>

      {/* Popular Conversions Table */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Popular Centimeters to Pixels Conversions</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-teal-500 text-white">
                <th className="px-4 py-3 text-left font-semibold">Centimeters (cm)</th>
                <th className="px-4 py-3 text-left font-semibold">Pixels (96 PPI)</th>
                <th className="px-4 py-3 text-left font-semibold">Pixels (300 PPI)</th>
              </tr>
            </thead>
            <tbody>
              {popularConversions.map((conv, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-card' : 'bg-background'}>
                  <td className="px-4 py-3 border-b border-border">{conv.cm} cm</td>
                  <td className="px-4 py-3 border-b border-border">{conv.px96.toFixed(2)} px</td>
                  <td className="px-4 py-3 border-b border-border">{conv.px300.toFixed(2)} px</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-semibold">How It Works:</h4>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• <strong>PPI/DPI:</strong> Pixels Per Inch determines the resolution for conversion</li>
          <li>• <strong>96 PPI:</strong> Standard resolution for web and screen displays</li>
          <li>• <strong>300 PPI:</strong> High-resolution standard for print media</li>
          <li>• <strong>Formula:</strong> Pixels = (Centimeters × PPI) / 2.54</li>
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
