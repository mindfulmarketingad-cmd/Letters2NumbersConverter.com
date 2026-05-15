'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Copy, RotateCcw } from 'lucide-react'

interface MedicarePrefix {
  letter: string
  meaning: string
  description: string
}

const medicarePrefixes: MedicarePrefix[] = [
  { letter: 'A', meaning: 'Retired Worker', description: 'Aged 65+ or disabled worker who is entitled to Social Security benefits' },
  { letter: 'B', meaning: 'Wife/Widow', description: 'Spouse or widow(er) of a retired or deceased worker aged 65 or older' },
  { letter: 'C', meaning: 'Child', description: 'Unmarried child of a retired, deceased, or disabled worker' },
  { letter: 'D', meaning: 'Widow(er)', description: 'Widow(er) of a retired or deceased worker aged 65 or older' },
  { letter: 'E', meaning: 'Widow(er) Parent', description: 'Widow(er) caring for beneficiary child of retired or deceased worker' },
  { letter: 'F', meaning: 'Parent', description: 'Parent of retired, deceased, or disabled worker aged 65 or older' },
  { letter: 'G', meaning: 'Uninsured', description: 'Uninsured individual or person with coverage under transitional provision' },
  { letter: 'H', meaning: 'Black Lung', description: 'Black Lung beneficiary under special federal provisions' },
  { letter: 'J', meaning: 'Railroad Retirement', description: 'Railroad Retirement Board annuitant or beneficiary' },
  { letter: 'K', meaning: 'Railroad Beneficiary', description: 'Dependent of Railroad Retirement Board annuitant' },
  { letter: 'M', meaning: 'ESRD Beneficiary', description: 'End Stage Renal Disease (ESRD) patient entitled to Medicare benefits' },
  { letter: 'T', meaning: 'ESRD + Transplant', description: 'ESRD patient who received a kidney transplant' },
]

export function MedicarePrefixConverter() {
  const [inputPrefix, setInputPrefix] = useState('')
  const [result, setResult] = useState<MedicarePrefix | null>(null)
  const [copied, setCopied] = useState(false)

  const handleConvert = (prefix: string) => {
    const upper = prefix.toUpperCase().trim()
    const found = medicarePrefixes.find(p => p.letter === upper)
    if (found) {
      setResult(found)
    } else {
      setResult(null)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputPrefix(value)
    if (value.length === 1) {
      handleConvert(value)
    } else if (value.length === 0) {
      setResult(null)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setInputPrefix('')
    setResult(null)
    setCopied(false)
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardTitle className="text-2xl">Medicare Prefix Lookup</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Enter Medicare Prefix Letter</label>
            <Input
              type="text"
              placeholder="Enter a single letter (A-T)"
              value={inputPrefix}
              onChange={handleSearch}
              maxLength={1}
              className="text-lg text-center uppercase"
            />
          </div>
          
          {inputPrefix && !result && (
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-700 rounded text-sm text-yellow-800 dark:text-yellow-200">
              No matching Medicare prefix found. Please enter a valid prefix letter (A-T).
            </div>
          )}

          {result && (
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-2 border-green-200 dark:border-green-700 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-5xl font-bold text-green-600 dark:text-green-400">{result.letter}</div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleCopy(result.meaning)}
                  className="gap-2"
                >
                  <Copy size={16} />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Beneficiary Type</p>
                <p className="text-2xl font-bold text-gray-900">{result.meaning}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-1">Description</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{result.description}</p>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={handleReset} variant="outline" className="w-full gap-2">
              <RotateCcw size={16} />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Reference Chart */}
      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardTitle className="text-2xl">Medicare Prefix Reference Chart</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {medicarePrefixes.map((prefix) => (
              <div
                key={prefix.letter}
                onClick={() => {
                  setInputPrefix(prefix.letter)
                  setResult(prefix)
                }}
                className="p-4 border rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 min-w-12">{prefix.letter}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{prefix.meaning}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{prefix.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Information */}
      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardTitle>About Medicare Prefixes</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-3 text-sm">
          <p>
            Medicare prefixes are single letters that appear on Medicare cards and identification documents. These letters identify the beneficiary&apos;s relationship to Social Security benefits and eligibility for Medicare coverage.
          </p>
          <p>
            The prefix letter is an important part of the Medicare identification number and helps determine the type of coverage and benefits a person is entitled to receive.
          </p>
          <p>
            Use this Medicare prefix converter tool to quickly identify what each letter means and understand the beneficiary status associated with Medicare identification numbers.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
