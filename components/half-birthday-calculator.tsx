'use client'

import { useState, useEffect } from 'react'
import { Gift } from 'lucide-react'

export function HalfBirthdayCalculator() {
  const [year, setYear] = useState<number | string>('')
  const [month, setMonth] = useState<number | string>('')
  const [day, setDay] = useState<number | string>('')
  const [result, setResult] = useState<{ halfBirthday: string; daysUntil: number; isPassed: boolean } | null>(null)
  const [error, setError] = useState('')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i)

  const getDaysInMonth = (m: number, y: number) => {
    return new Date(y, m, 0).getDate()
  }

  const days = month ? Array.from({ length: getDaysInMonth(Number(month), Number(year)) }, (_, i) => i + 1) : []

  const calculateHalfBirthday = () => {
    setError('')
    setResult(null)

    if (!year || !month || !day) {
      setError('Please select all date fields')
      return
    }

    const y = Number(year)
    const m = Number(month)
    const d = Number(day)

    try {
      const birthDate = new Date(y, m - 1, d)
      
      if (isNaN(birthDate.getTime())) {
        setError('Invalid date selected')
        return
      }

      const today = new Date()
      let halfBirthdayDate = new Date(today.getFullYear(), m - 1, d)
      
      // Add 6 months for half birthday
      halfBirthdayDate.setMonth(halfBirthdayDate.getMonth() + 6)

      // Handle day overflow (e.g., Feb 29 -> Aug 29)
      if (halfBirthdayDate.getDate() !== d) {
        halfBirthdayDate = new Date(today.getFullYear(), m - 1 + 6, 0)
      }

      // If half birthday has already passed this year, calculate for next year
      if (halfBirthdayDate < today) {
        halfBirthdayDate.setFullYear(today.getFullYear() + 1)
        halfBirthdayDate.setMonth(m - 1 + 6)
        if (halfBirthdayDate.getDate() !== d) {
          halfBirthdayDate = new Date(today.getFullYear() + 1, m - 1 + 6, 0)
        }
      }

      const daysUntil = Math.ceil((halfBirthdayDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      const isPassed = daysUntil <= 0

      const monthName = months[halfBirthdayDate.getMonth()]
      const dateStr = `${monthName} ${halfBirthdayDate.getDate()}, ${halfBirthdayDate.getFullYear()}`

      setResult({
        halfBirthday: dateStr,
        daysUntil: Math.abs(daysUntil),
        isPassed
      })
    } catch (err) {
      setError('Error calculating half birthday')
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-8 bg-background rounded-lg">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-8 h-8" style={{ color: '#11a099' }} />
          <h2 className="text-4xl font-bold text-foreground">Half Birthday Calculator</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Find out when your half birthday is and celebrate twice a year!
        </p>
      </div>

      <div className="bg-secondary/50 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Choose Your Birth Date</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">Year</option>
              {years.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Month</label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
            >
              <option value="">Month</option>
              {months.map((m, i) => (
                <option key={i} value={i + 1}>{m}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Day</label>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
              disabled={!month}
            >
              <option value="">Day</option>
              {days.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={calculateHalfBirthday}
          className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-opacity"
          style={{ backgroundColor: '#11a099' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Calculate Half Birthday
        </button>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 mb-6">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Half Birthday</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Half Birthday Date:</span>
              <span className="text-lg font-bold text-green-600">{result.halfBirthday}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-white dark:bg-gray-800 rounded">
              <span className="font-medium text-muted-foreground">Days Until:</span>
              <span className="text-lg font-bold text-green-600">{result.daysUntil} days</span>
            </div>

            <p className="text-sm text-muted-foreground mt-4 p-3 bg-white dark:bg-gray-800 rounded">
              {result.isPassed
                ? "Your half birthday has already passed! It will be celebrated again later this year."
                : `Get ready to celebrate your half birthday in ${result.daysUntil} days!`}
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-foreground mb-3">About Half Birthdays</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          A half birthday is celebrated exactly 6 months before or after your actual birthday. It's a fun way to:
        </p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
          <li>Celebrate milestones twice a year</li>
          <li>Have an extra reason to party and celebrate life</li>
          <li>Mark important dates for children or loved ones</li>
          <li>Keep celebrations going throughout the year</li>
        </ul>
      </div>
    </div>
  )
}
