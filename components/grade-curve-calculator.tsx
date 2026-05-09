'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X, Plus } from 'lucide-react'

interface Grade {
  letter: string
  percentage: number
}

export function GradeCurveCalculator() {
  const [method, setMethod] = useState<'normal' | 'linear' | 'percentile'>('normal')
  const [population, setPopulation] = useState('100')
  const [meanShift, setMeanShift] = useState('0')
  const [highestScore, setHighestScore] = useState('100')
  const [lowestScore, setLowestScore] = useState('0')
  const [grades, setGrades] = useState<Grade[]>([
    { letter: 'A', percentage: 6.68 },
    { letter: 'B', percentage: 43.32 },
    { letter: 'C', percentage: 43.32 },
    { letter: 'D', percentage: 6.68 },
  ])
  const [results, setResults] = useState<{ [key: string]: number } | null>(null)

  const totalPercentage = grades.reduce((sum, grade) => sum + grade.percentage, 0)

  const addGrade = () => {
    const nextLetter = String.fromCharCode(65 + grades.length)
    setGrades([...grades, { letter: nextLetter, percentage: 0 }])
  }

  const removeGrade = (index: number) => {
    setGrades(grades.filter((_, i) => i !== index))
  }

  const updateGrade = (index: number, field: keyof Grade, value: string | number) => {
    const newGrades = [...grades]
    if (field === 'percentage') {
      newGrades[index].percentage = parseFloat(value as string) || 0
    } else {
      newGrades[index].letter = value as string
    }
    setGrades(newGrades)
  }

  const applyNormalDistribution = () => {
    const proportions = [0.0668, 0.4332, 0.4332, 0.0668]
    const newGrades = [
      { letter: 'A', percentage: 6.68 },
      { letter: 'B', percentage: 43.32 },
      { letter: 'C', percentage: 43.32 },
      { letter: 'D', percentage: 6.68 },
    ]
    setGrades(newGrades)
  }

  const applyLinearDistribution = () => {
    const evenPercentage = 100 / grades.length
    const newGrades = grades.map(g => ({ ...g, percentage: evenPercentage }))
    setGrades(newGrades)
  }

  const applyPercentileDistribution = () => {
    const percentiles = [90, 80, 70, 60]
    const newGrades = grades.map((g, i) => ({
      ...g,
      percentage: percentiles[i] ? (100 - percentiles[i]) : 0,
    }))
    setGrades(newGrades)
  }

  const calculateCurve = () => {
    const pop = parseInt(population) || 100
    const highest = parseInt(highestScore) || 100
    const lowest = parseInt(lowestScore) || 0
    const shift = parseInt(meanShift) || 0

    const curvedResults: { [key: string]: number } = {}
    let currentThreshold = highest + shift

    grades.forEach(grade => {
      const studentsInGrade = Math.round((grade.percentage / 100) * pop)
      curvedResults[grade.letter] = currentThreshold
      currentThreshold = Math.max(lowest, currentThreshold - Math.ceil((highest - lowest) / grades.length))
    })

    setResults(curvedResults)
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-background rounded-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">Grade Curve Calculator</h2>
        <p className="text-muted-foreground">
          Adjust grades using normal, linear, or percentile distribution methods.
        </p>
      </div>

      <Tabs value={method} onValueChange={(v) => setMethod(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="normal">Normal</TabsTrigger>
          <TabsTrigger value="linear">Linear</TabsTrigger>
          <TabsTrigger value="percentile">Percentile</TabsTrigger>
        </TabsList>

        <TabsContent value="normal" className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-black dark:text-white mb-2">Normal Distribution Calculator</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Transform your raw grades using the normal distribution (bell curve) method. This statistical approach
              normalizes grade distribution, ensuring fair assessment while maintaining academic standards.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="linear" className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-black dark:text-white mb-2">Linear Distribution Calculator</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Apply a linear grade curve where all grades are adjusted proportionally by a fixed amount, creating an
              even distribution across all grade levels.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="percentile" className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-bold text-black dark:text-white mb-2">Percentile Distribution Calculator</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Curve grades based on percentile rankings, where each grade represents a specific percentile of student
              performance, ensuring consistent standards across assessments.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-6 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-black dark:text-white mb-2">Total Test Population</label>
            <Input
              type="number"
              value={population}
              onChange={(e) => setPopulation(e.target.value)}
              placeholder="100"
              className="w-full"
            />
          </div>
          <div>
            <label className="block font-semibold text-black dark:text-white mb-2">Mean Shift (Optional)</label>
            <Input
              type="number"
              value={meanShift}
              onChange={(e) => setMeanShift(e.target.value)}
              placeholder="0"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-black dark:text-white mb-2">Highest Score</label>
            <Input
              type="number"
              value={highestScore}
              onChange={(e) => setHighestScore(e.target.value)}
              placeholder="100"
              className="w-full"
            />
          </div>
          <div>
            <label className="block font-semibold text-black dark:text-white mb-2">Lowest Score</label>
            <Input
              type="number"
              value={lowestScore}
              onChange={(e) => setLowestScore(e.target.value)}
              placeholder="0"
              className="w-full"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="font-semibold text-black dark:text-white">Grade Proportions (%)</label>
            <span className="text-green-600 font-semibold">Total: {totalPercentage.toFixed(2)}%</span>
          </div>

          <div className="space-y-3">
            {grades.map((grade, index) => (
              <div key={index} className="flex items-center gap-3">
                <Input
                  value={grade.letter}
                  onChange={(e) => updateGrade(index, 'letter', e.target.value)}
                  className="w-16"
                  maxLength={1}
                />
                <Input
                  type="number"
                  value={grade.percentage}
                  onChange={(e) => updateGrade(index, 'percentage', e.target.value)}
                  placeholder="0"
                  className="flex-1"
                />
                <span className="text-sm text-muted-foreground">%</span>
                <button
                  onClick={() => removeGrade(index)}
                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition"
                >
                  <X className="w-4 h-4 text-red-500" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-4">
            <Button onClick={addGrade} variant="outline" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Grade
            </Button>
            <Button onClick={applyNormalDistribution} variant="ghost" size="sm">
              Apply a Distribution
            </Button>
            <Button onClick={() => setGrades([])} variant="ghost" size="sm">
              Reset Names
            </Button>
          </div>
        </div>

        <Button onClick={calculateCurve} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 font-semibold">
          Calculate
        </Button>

        {results && (
          <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-bold text-black dark:text-white mb-4">Curved Grade Thresholds</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(results).map(([grade, threshold]) => (
                <div key={grade} className="flex justify-between bg-white dark:bg-gray-800 p-3 rounded">
                  <span className="font-semibold text-black dark:text-white">Grade {grade}:</span>
                  <span className="text-green-600 font-bold">{Math.round(threshold)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
