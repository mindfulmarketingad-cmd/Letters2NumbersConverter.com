'use client'

import { useState } from 'react'

interface Ion {
  name: string
  symbol: string
  atomicWeight: number
  valence: number
  formula: string
}

const IONS: Ion[] = [
  { name: 'Sodium (Na+)', symbol: 'Na', atomicWeight: 22.99, valence: 1, formula: 'Na+' },
  { name: 'Potassium (K+)', symbol: 'K', atomicWeight: 39.10, valence: 1, formula: 'K+' },
  { name: 'Calcium (Ca2+)', symbol: 'Ca', atomicWeight: 40.08, valence: 2, formula: 'Ca2+' },
  { name: 'Magnesium (Mg2+)', symbol: 'Mg', atomicWeight: 24.31, valence: 2, formula: 'Mg2+' },
  { name: 'Chloride (Cl-)', symbol: 'Cl', atomicWeight: 35.45, valence: 1, formula: 'Cl-' },
  { name: 'Bicarbonate (HCO3-)', symbol: 'HCO3', atomicWeight: 61.02, valence: 1, formula: 'HCO3-' },
  { name: 'Phosphate (HPO4 2-)', symbol: 'HPO4', atomicWeight: 96.00, valence: 2, formula: 'HPO42-' },
  { name: 'Sulfate (SO4 2-)', symbol: 'SO4', atomicWeight: 96.06, valence: 2, formula: 'SO42-' },
  { name: 'Lithium (Li+)', symbol: 'Li', atomicWeight: 6.94, valence: 1, formula: 'Li+' },
  { name: 'Ammonium (NH4+)', symbol: 'NH4', atomicWeight: 18.04, valence: 1, formula: 'NH4+' },
]

export function MEqToMgCalculator() {
  const [selectedIon, setSelectedIon] = useState<Ion | null>(null)
  const [value, setValue] = useState('')
  const [unit, setUnit] = useState<'mEq' | 'mg'>('mEq')
  const [result, setResult] = useState<{ value: number; unit: string } | null>(null)
  const [error, setError] = useState('')

  const calculate = () => {
    setError('')
    setResult(null)

    if (!selectedIon) {
      setError('Please select an ion')
      return
    }

    if (!value || isNaN(parseFloat(value))) {
      setError('Please enter a valid number')
      return
    }

    const numValue = parseFloat(value)

    try {
      if (unit === 'mEq') {
        // Convert mEq to mg: mg = (mEq × atomic_weight) / valence
        const mg = (numValue * selectedIon.atomicWeight) / selectedIon.valence
        setResult({ value: mg, unit: 'mg' })
      } else {
        // Convert mg to mEq: mEq = (mg × valence) / atomic_weight
        const mEq = (numValue * selectedIon.valence) / selectedIon.atomicWeight
        setResult({ value: mEq, unit: 'mEq' })
      }
    } catch (err) {
      setError('Error calculating conversion')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculate()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">mEq to mg Calculator</h2>
        <p className="text-lg text-muted-foreground">
          Convert between milliequivalents (mEq) and milligrams (mg) for ions
        </p>
      </div>

      <div className="bg-secondary/50 p-6 rounded-lg border border-border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Ion Selection */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Select Ion</label>
            <select
              value={selectedIon?.symbol || ''}
              onChange={(e) => {
                const ion = IONS.find(i => i.symbol === e.target.value)
                setSelectedIon(ion || null)
              }}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">Select an ion</option>
              {IONS.map(ion => (
                <option key={ion.symbol} value={ion.symbol}>
                  {ion.name}
                </option>
              ))}
            </select>
          </div>

          {/* Value Input */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Value</label>
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter value"
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              step="0.01"
            />
          </div>

          {/* Unit Selection */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as 'mEq' | 'mg')}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="mEq">mEq</option>
              <option value="mg">mg</option>
            </select>
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-opacity"
          style={{ backgroundColor: '#11a099' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Convert
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {result && selectedIon && (
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Result</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Ion:</span>
              <span className="text-lg font-bold text-green-600">{selectedIon.name} ({selectedIon.formula})</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Input Value:</span>
              <span className="text-lg font-bold text-green-600">{value} {unit}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Converted Value:</span>
              <span className="text-lg font-bold text-green-600">{result.value.toFixed(4)} {result.unit}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded text-sm">
              <span className="font-medium text-muted-foreground">Atomic Weight:</span>
              <span className="text-green-600">{selectedIon.atomicWeight} g/mol</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded text-sm">
              <span className="font-medium text-muted-foreground">Valence:</span>
              <span className="text-green-600">{selectedIon.valence}</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-3">How It Works</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          This calculator converts between milliequivalents (mEq) and milligrams (mg) using the following formulas:
        </p>
        <div className="bg-white dark:bg-gray-800 p-4 rounded font-mono text-sm mb-3">
          <p className="mb-2">To convert mEq to mg:</p>
          <p className="text-green-600 font-bold">mg = (mEq × Atomic Weight) / Valence</p>
          <p className="mt-3 mb-2">To convert mg to mEq:</p>
          <p className="text-green-600 font-bold">mEq = (mg × Valence) / Atomic Weight</p>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Perfect for healthcare professionals, pharmacists, chemists, and students working with electrolyte calculations and pharmaceutical dosing.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-foreground mb-3">Data Sources</h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <li>• IUPAC Technical Report 2021 (DOI: 10.1515/pac-2019-0603)</li>
          <li>• NIST Chemistry WebBook (SRD 69)</li>
          <li>• Standard atomic weights from the International Union of Pure and Applied Chemistry</li>
        </ul>
      </div>
    </div>
  )
}
