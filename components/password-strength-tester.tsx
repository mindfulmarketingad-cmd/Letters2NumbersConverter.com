"use client"

import { useState, useEffect, useCallback } from "react"
import { Eye, EyeOff, Shield, ShieldAlert, ShieldCheck, ShieldX, Zap } from "lucide-react"

interface PasswordAnalysis {
  length: number
  lowercase: number
  uppercase: number
  numbers: number
  symbols: number
  strength: "none" | "very-weak" | "weak" | "fair" | "strong" | "very-strong"
  strengthLabel: string
  crackTime: string
  entropy: number
}

function analyzePassword(password: string): PasswordAnalysis {
  const length = password.length
  const lowercase = (password.match(/[a-z]/g) || []).length
  const uppercase = (password.match(/[A-Z]/g) || []).length
  const numbers = (password.match(/[0-9]/g) || []).length
  const symbols = (password.match(/[^a-zA-Z0-9]/g) || []).length

  // Calculate character set size
  let charSetSize = 0
  if (lowercase > 0) charSetSize += 26
  if (uppercase > 0) charSetSize += 26
  if (numbers > 0) charSetSize += 10
  if (symbols > 0) charSetSize += 32

  // Calculate entropy
  const entropy = charSetSize > 0 ? length * Math.log2(charSetSize) : 0

  // Determine strength based on entropy
  let strength: PasswordAnalysis["strength"] = "none"
  let strengthLabel = "No Password"

  if (length === 0) {
    strength = "none"
    strengthLabel = "No Password"
  } else if (entropy < 28) {
    strength = "very-weak"
    strengthLabel = "Very Weak"
  } else if (entropy < 36) {
    strength = "weak"
    strengthLabel = "Weak"
  } else if (entropy < 60) {
    strength = "fair"
    strengthLabel = "Fair"
  } else if (entropy < 80) {
    strength = "strong"
    strengthLabel = "Strong"
  } else {
    strength = "very-strong"
    strengthLabel = "Very Strong"
  }

  // Calculate crack time (assuming 10 billion guesses per second for modern hardware)
  const guessesPerSecond = 10_000_000_000
  const combinations = Math.pow(charSetSize || 1, length)
  const secondsToCrack = combinations / guessesPerSecond / 2 // Average case is half

  const crackTime = formatCrackTime(secondsToCrack, length)

  return {
    length,
    lowercase,
    uppercase,
    numbers,
    symbols,
    strength,
    strengthLabel,
    crackTime,
    entropy,
  }
}

function formatCrackTime(seconds: number, length: number): string {
  if (length === 0) return "0 seconds"
  if (seconds < 0.001) return "Instantly"
  if (seconds < 1) return "Less than a second"
  if (seconds < 60) return `${Math.round(seconds)} second${Math.round(seconds) !== 1 ? "s" : ""}`
  
  const minutes = seconds / 60
  if (minutes < 60) return `${Math.round(minutes)} minute${Math.round(minutes) !== 1 ? "s" : ""}`
  
  const hours = minutes / 60
  if (hours < 24) return `${Math.round(hours)} hour${Math.round(hours) !== 1 ? "s" : ""}`
  
  const days = hours / 24
  if (days < 30) return `${Math.round(days)} day${Math.round(days) !== 1 ? "s" : ""}`
  
  const months = days / 30
  if (months < 12) return `${Math.round(months)} month${Math.round(months) !== 1 ? "s" : ""}`
  
  const years = days / 365
  if (years < 1000) return `${Math.round(years)} year${Math.round(years) !== 1 ? "s" : ""}`
  if (years < 1_000_000) return `${Math.round(years / 1000)}k years`
  if (years < 1_000_000_000) return `${Math.round(years / 1_000_000)} million years`
  if (years < 1_000_000_000_000) return `${Math.round(years / 1_000_000_000)} billion years`
  if (years < 1_000_000_000_000_000) return `${Math.round(years / 1_000_000_000_000)} trillion years`
  
  return "Virtually forever"
}

export function PasswordStrengthTester() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [analysis, setAnalysis] = useState<PasswordAnalysis>(analyzePassword(""))
  const [displayedTime, setDisplayedTime] = useState("0 seconds")
  const [isAnimating, setIsAnimating] = useState(false)

  const animateCrackTime = useCallback((targetTime: string) => {
    if (password.length === 0) {
      setDisplayedTime("0 seconds")
      return
    }

    setIsAnimating(true)
    
    // Fun animation: cycle through different time units before settling
    const timeUnits = [
      "calculating...",
      "analyzing entropy...",
      "simulating attacks...",
      targetTime
    ]
    
    let index = 0
    const interval = setInterval(() => {
      if (index < timeUnits.length - 1) {
        setDisplayedTime(timeUnits[index])
        index++
      } else {
        setDisplayedTime(targetTime)
        setIsAnimating(false)
        clearInterval(interval)
      }
    }, 200)

    return () => clearInterval(interval)
  }, [password.length])

  useEffect(() => {
    const newAnalysis = analyzePassword(password)
    setAnalysis(newAnalysis)
    animateCrackTime(newAnalysis.crackTime)
  }, [password, animateCrackTime])

  const getStrengthColor = () => {
    switch (analysis.strength) {
      case "none": return "bg-muted"
      case "very-weak": return "bg-red-500"
      case "weak": return "bg-orange-500"
      case "fair": return "bg-yellow-500"
      case "strong": return "bg-green-500"
      case "very-strong": return "bg-emerald-400"
      default: return "bg-muted"
    }
  }

  const getStrengthWidth = () => {
    switch (analysis.strength) {
      case "none": return "w-full"
      case "very-weak": return "w-[20%]"
      case "weak": return "w-[40%]"
      case "fair": return "w-[60%]"
      case "strong": return "w-[80%]"
      case "very-strong": return "w-full"
      default: return "w-0"
    }
  }

  const getStrengthTextColor = () => {
    switch (analysis.strength) {
      case "none": return "text-muted-foreground"
      case "very-weak": return "text-red-500"
      case "weak": return "text-orange-500"
      case "fair": return "text-yellow-500"
      case "strong": return "text-green-500"
      case "very-strong": return "text-emerald-400"
      default: return "text-muted-foreground"
    }
  }

  const getShieldIcon = () => {
    switch (analysis.strength) {
      case "none": return <Shield className="w-8 h-8 text-muted-foreground" />
      case "very-weak": return <ShieldX className="w-8 h-8 text-red-500" />
      case "weak": return <ShieldAlert className="w-8 h-8 text-orange-500" />
      case "fair": return <Shield className="w-8 h-8 text-yellow-500" />
      case "strong": return <ShieldCheck className="w-8 h-8 text-green-500" />
      case "very-strong": return <ShieldCheck className="w-8 h-8 text-emerald-400" />
      default: return <Shield className="w-8 h-8 text-muted-foreground" />
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Privacy Notice */}
      <div className="flex items-center justify-end gap-2 mb-4 text-sm text-muted-foreground">
        <Shield className="w-4 h-4 text-primary" />
        <span>Your password stays local - never sent to any server</span>
      </div>

      {/* Tip */}
      <div className="mb-6 p-4 bg-card border border-border rounded-lg">
        <p className="text-sm">
          <span className="font-semibold text-primary">Tip:</span>{" "}
          <span className="text-muted-foreground">
            Avoid using dictionary words, common names, or personal information. Mix uppercase, lowercase, numbers, and symbols for maximum security.
          </span>
        </p>
      </div>

      {/* Password Input */}
      <div className="mb-4">
        <div className="flex items-center justify-end mb-2">
          <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
            <span>Show password</span>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="relative w-10 h-5 rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
              style={{ backgroundColor: showPassword ? "var(--primary)" : undefined }}
            >
              <span
                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform"
                style={{ transform: showPassword ? "translateX(20px)" : "translateX(0)" }}
              />
            </button>
          </label>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type a password to test..."
            className="w-full px-6 py-5 text-xl sm:text-2xl text-center bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground/50"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Strength Meter */}
      <div className="mb-6">
        <div className="h-10 bg-muted rounded-lg overflow-hidden relative">
          <div
            className={`h-full ${getStrengthColor()} ${getStrengthWidth()} transition-all duration-500 ease-out`}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-semibold ${analysis.strength === "none" ? "text-muted-foreground" : "text-white"}`}>
              {analysis.strengthLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Character Analysis */}
      <div className="mb-8 flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
        <div className="font-semibold text-foreground">
          {analysis.length} character{analysis.length !== 1 ? "s" : ""} containing:
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <span className={analysis.lowercase > 0 ? "text-primary font-medium" : "text-muted-foreground"}>
            Lower case {analysis.lowercase > 0 && `(${analysis.lowercase})`}
          </span>
          <span className={analysis.uppercase > 0 ? "text-primary font-medium" : "text-muted-foreground"}>
            Upper case {analysis.uppercase > 0 && `(${analysis.uppercase})`}
          </span>
          <span className={analysis.numbers > 0 ? "text-primary font-medium" : "text-muted-foreground"}>
            Numbers {analysis.numbers > 0 && `(${analysis.numbers})`}
          </span>
          <span className={analysis.symbols > 0 ? "text-primary font-medium" : "text-muted-foreground"}>
            Symbols {analysis.symbols > 0 && `(${analysis.symbols})`}
          </span>
        </div>
      </div>

      {/* Time to Crack Display */}
      <div className="text-center p-8 bg-card border border-border rounded-xl">
        <div className="flex items-center justify-center gap-3 mb-4">
          {getShieldIcon()}
          <Zap className={`w-6 h-6 ${isAnimating ? "text-yellow-500 animate-pulse" : "text-muted-foreground"}`} />
        </div>
        <p className="text-muted-foreground mb-2">Time to crack your password:</p>
        <p className={`text-4xl sm:text-5xl font-bold ${getStrengthTextColor()} transition-colors`}>
          {displayedTime}
        </p>
        {analysis.strength !== "none" && (
          <p className="mt-4 text-xs text-muted-foreground">
            Based on 10 billion guesses per second (modern GPU cluster)
          </p>
        )}
      </div>

      {/* Password Tips */}
      <div className="mt-8 p-6 bg-card border border-border rounded-xl">
        <h3 className="font-semibold text-foreground mb-4">Tips for a Strong Password:</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Use at least 12-16 characters for better security
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Mix uppercase letters, lowercase letters, numbers, and symbols
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Avoid common words, phrases, or personal information
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Consider using a passphrase (e.g., &quot;Coffee$Monkey&Flying!42&quot;)
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Use a unique password for each account
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            Consider using a password manager
          </li>
        </ul>
      </div>

      {/* Entropy Score */}
      {analysis.length > 0 && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Password Entropy:</span>
            <span className="font-mono font-semibold text-foreground">{analysis.entropy.toFixed(1)} bits</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Entropy measures password randomness. Higher is better. 60+ bits is considered strong.
          </p>
        </div>
      )}
    </div>
  )
}
