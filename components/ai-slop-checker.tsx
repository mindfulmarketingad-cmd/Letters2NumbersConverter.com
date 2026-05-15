'use client'

import { useState, useRef, useCallback } from 'react'
import { Upload, Copy, Check, RefreshCw, Trash2, AlertTriangle, ShieldCheck, HelpCircle, Zap, BookOpen, ImageIcon, Type, X, Sparkles } from 'lucide-react'

// ── Readability ────────────────────────────────────────────────────────────────

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (w.length <= 3) return 1
  const stripped = w.replace(/e$/, '')
  const vowelGroups = stripped.match(/[aeiouy]+/g)
  return Math.max(1, vowelGroups ? vowelGroups.length : 1)
}

function calcReadability(text: string) {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3)
  const words = text.split(/\s+/).filter(w => w.replace(/[^a-z]/gi, '').length > 0)
  if (sentences.length === 0 || words.length < 5) return null
  const syllables = words.reduce((n, w) => n + countSyllables(w), 0)
  const asl = words.length / sentences.length
  const asw = syllables / words.length
  const ease = Math.min(100, Math.max(0, Math.round((206.835 - 1.015 * asl - 84.6 * asw) * 10) / 10))
  const grade = Math.max(0, Math.round((0.39 * asl + 11.8 * asw - 15.59) * 10) / 10)
  return { ease, grade, words: words.length, sentences: sentences.length, asl: Math.round(asl * 10) / 10 }
}

// ── Text cleanup ───────────────────────────────────────────────────────────────

function cleanText(text: string): { cleaned: string; removed: number } {
  let cleaned = text
    .replace(/[​‌‍‎‏﻿­⁠-⁤]/g, '')
  // Homoglyph normalization (common Cyrillic look-alikes)
  const map: Record<string, string> = {
    'а': 'a', 'е': 'e', 'о': 'o', 'р': 'r',
    'с': 'c', 'у': 'y', 'х': 'x', 'і': 'i',
    'һ': 'h', 'ѕ': 's',
  }
  for (const [k, v] of Object.entries(map)) cleaned = cleaned.split(k).join(v)
  cleaned = cleaned.replace(/[ \t]+/g, ' ')
  return { cleaned, removed: text.length - cleaned.length }
}

// ── Verdict styling ────────────────────────────────────────────────────────────

type Verdict = 'Human Written' | 'Likely Human' | 'Uncertain' | 'Likely AI' | 'AI Generated' | 'Real Photo' | 'Likely Real'

function verdictStyle(verdict: string): { bg: string; text: string; border: string; icon: React.ReactNode } {
  if (verdict === 'Human Written' || verdict === 'Real Photo') return {
    bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-300',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
  }
  if (verdict === 'Likely Human' || verdict === 'Likely Real') return {
    bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-300',
    icon: <ShieldCheck className="w-5 h-5 text-green-500" />
  }
  if (verdict === 'Uncertain') return {
    bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-300',
    icon: <HelpCircle className="w-5 h-5 text-yellow-500" />
  }
  if (verdict === 'Likely AI') return {
    bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-300',
    icon: <AlertTriangle className="w-5 h-5 text-orange-500" />
  }
  // AI Generated
  return {
    bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-300',
    icon: <Zap className="w-5 h-5 text-red-600" />
  }
}

function meterColor(score: number) {
  if (score <= 20) return 'bg-emerald-500'
  if (score <= 40) return 'bg-green-500'
  if (score <= 60) return 'bg-yellow-400'
  if (score <= 80) return 'bg-orange-500'
  return 'bg-red-500'
}

function readingEaseLabel(score: number) {
  if (score >= 90) return 'Very Easy (5th grade)'
  if (score >= 80) return 'Easy (6th grade)'
  if (score >= 70) return 'Fairly Easy (7th grade)'
  if (score >= 60) return 'Standard (8–9th grade)'
  if (score >= 50) return 'Fairly Difficult (10–12th grade)'
  if (score >= 30) return 'Difficult (College level)'
  return 'Very Confusing (Professional)'
}

// ── Types ──────────────────────────────────────────────────────────────────────

type AnalysisResult = {
  score: number
  verdict: string
  indicators: string[]
  summary: string
}

type ReadabilityResult = {
  ease: number
  grade: number
  words: number
  sentences: number
  asl: number
}

// ── Main component ─────────────────────────────────────────────────────────────

export function AISlopChecker() {
  const [tab, setTab] = useState<'text' | 'image'>('text')

  // Text tab state
  const [textInput, setTextInput] = useState('')
  const [textResult, setTextResult] = useState<AnalysisResult | null>(null)
  const [readability, setReadability] = useState<ReadabilityResult | null>(null)
  const [cleanedText, setCleanedText] = useState<{ cleaned: string; removed: number } | null>(null)
  const [showCleaned, setShowCleaned] = useState(false)
  const [textLoading, setTextLoading] = useState(false)
  const [textError, setTextError] = useState('')
  const [textCopied, setTextCopied] = useState(false)

  // Image tab state
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageResult, setImageResult] = useState<AnalysisResult | null>(null)
  const [imageLoading, setImageLoading] = useState(false)
  const [imageError, setImageError] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // ── Text analysis ────────────────────────────────────────────────────────────

  async function analyzeText() {
    if (!textInput.trim() || textInput.trim().length < 20) {
      setTextError('Please enter at least 20 characters to analyze.')
      return
    }
    setTextLoading(true)
    setTextError('')
    setTextResult(null)
    setCleanedText(null)
    setShowCleaned(false)

    try {
      const res = await fetch('/api/ai-slop-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textInput }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Analysis failed.')
      setTextResult(data)
      setReadability(calcReadability(textInput))
    } catch (e) {
      setTextError(e instanceof Error ? e.message : 'Analysis failed.')
    } finally {
      setTextLoading(false)
    }
  }

  function handleCleanup() {
    const result = cleanText(textInput)
    setCleanedText(result)
    setShowCleaned(true)
  }

  function applyCleanedText() {
    if (cleanedText) {
      setTextInput(cleanedText.cleaned)
      setCleanedText(null)
      setShowCleaned(false)
      setTextResult(null)
      setReadability(null)
    }
  }

  async function copyCleanedText() {
    if (!cleanedText) return
    await navigator.clipboard.writeText(cleanedText.cleaned)
    setTextCopied(true)
    setTimeout(() => setTextCopied(false), 1500)
  }

  // ── Image handling ────────────────────────────────────────────────────────────

  const handleImageFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setImageError('Please upload an image file (JPEG, PNG, WebP, GIF).')
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setImageError('Image must be under 5 MB.')
      return
    }
    setImageFile(file)
    setImageResult(null)
    setImageError('')
    const reader = new FileReader()
    reader.onload = e => setImagePreview(e.target?.result as string)
    reader.readAsDataURL(file)
  }, [])

  function onDrop(e: React.DragEvent) {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) handleImageFile(file)
  }

  async function analyzeImage() {
    if (!imageFile || !imagePreview) return
    setImageLoading(true)
    setImageError('')
    setImageResult(null)

    try {
      // Strip data URL prefix
      const base64 = imagePreview.split(',')[1]
      const mediaType = imageFile.type

      const res = await fetch('/api/ai-slop-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, imageMediaType: mediaType }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Analysis failed.')
      setImageResult(data)
    } catch (e) {
      setImageError(e instanceof Error ? e.message : 'Analysis failed.')
    } finally {
      setImageLoading(false)
    }
  }

  function clearImage() {
    setImageFile(null)
    setImagePreview(null)
    setImageResult(null)
    setImageError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  // ── Render helpers ────────────────────────────────────────────────────────────

  function ResultCard({ result }: { result: AnalysisResult }) {
    const style = verdictStyle(result.verdict)
    return (
      <div className={`rounded-xl border-2 p-5 space-y-4 ${style.bg} ${style.border}`}>
        {/* Verdict row */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            {style.icon}
            <span className={`font-bold text-lg ${style.text}`}>{result.verdict}</span>
          </div>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${style.bg} ${style.border} ${style.text}`}>
            {result.score}% AI Score
          </span>
        </div>

        {/* Confidence meter */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Human</span>
            <span>AI</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${meterColor(result.score)}`}
              style={{ width: `${result.score}%` }}
            />
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-foreground/80">{result.summary}</p>

        {/* Indicators */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/60">Detected Patterns</p>
          <ul className="space-y-1.5">
            {result.indicators.map((ind, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className={`mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${meterColor(result.score)}`} />
                <span>{ind}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Tab switcher */}
      <div className="flex rounded-lg border bg-muted p-1 gap-1">
        <button
          onClick={() => setTab('text')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 px-3 text-sm font-medium transition-all ${
            tab === 'text' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Type className="w-4 h-4" /> Text
        </button>
        <button
          onClick={() => setTab('image')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-md py-2 px-3 text-sm font-medium transition-all ${
            tab === 'image' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <ImageIcon className="w-4 h-4" /> Image
        </button>
      </div>

      {/* ── TEXT TAB ── */}
      {tab === 'text' && (
        <div className="space-y-4">
          <div className="relative">
            <textarea
              value={textInput}
              onChange={e => { setTextInput(e.target.value); setTextError('') }}
              placeholder="Paste any text here — article, essay, email, social post — and find out if AI wrote it…"
              className="w-full min-h-[200px] resize-y rounded-lg border bg-background p-3 text-sm font-mono leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary/30"
              maxLength={20000}
            />
            <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
              {textInput.length.toLocaleString()} chars
            </span>
          </div>

          {textError && <p className="text-sm text-destructive">{textError}</p>}

          <div className="flex flex-wrap gap-2">
            <button
              onClick={analyzeText}
              disabled={textLoading || !textInput.trim()}
              className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              {textLoading
                ? <><RefreshCw className="w-4 h-4 animate-spin" /> Analyzing…</>
                : <><Sparkles className="w-4 h-4" /> Check Text</>}
            </button>
            <button
              onClick={handleCleanup}
              disabled={!textInput.trim()}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors disabled:opacity-50"
              title="Remove hidden characters and normalize homoglyphs"
            >
              <Zap className="w-4 h-4" /> Clean AI Fingerprints
            </button>
            {textInput && (
              <button
                onClick={() => { setTextInput(''); setTextResult(null); setTextError(''); setCleanedText(null); setReadability(null); setShowCleaned(false) }}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Clear
              </button>
            )}
          </div>

          {/* Cleanup result */}
          {showCleaned && cleanedText && (
            <div className="rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                  <Zap className="inline w-4 h-4 mr-1" />
                  {cleanedText.removed > 0
                    ? `Removed ${cleanedText.removed} hidden character${cleanedText.removed !== 1 ? 's' : ''}`
                    : 'No hidden characters found — text is clean!'}
                </p>
                <button onClick={() => setShowCleaned(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              </div>
              {cleanedText.removed > 0 && (
                <div className="flex gap-2">
                  <button onClick={applyCleanedText} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                    Apply cleaned text
                  </button>
                  <button onClick={copyCleanedText} className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border text-foreground hover:bg-muted transition-colors">
                    {textCopied ? <><Check className="w-3 h-3" /> Copied!</> : <><Copy className="w-3 h-3" /> Copy cleaned</>}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Analysis result */}
          {textResult && <ResultCard result={textResult} />}

          {/* Readability scores */}
          {readability && textResult && (
            <div className="rounded-xl border p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <BookOpen className="w-4 h-4 text-primary" /> Readability Scores
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-muted/50 p-3 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Flesch Reading Ease</p>
                  <p className="text-2xl font-bold">{readability.ease}</p>
                  <p className="text-xs text-muted-foreground">{readingEaseLabel(readability.ease)}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Flesch-Kincaid Grade</p>
                  <p className="text-2xl font-bold">{readability.grade}</p>
                  <p className="text-xs text-muted-foreground">Grade {readability.grade} level</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Word Count</p>
                  <p className="text-2xl font-bold">{readability.words.toLocaleString()}</p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Avg Words/Sentence</p>
                  <p className="text-2xl font-bold">{readability.asl}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Readability scores estimate how difficult text is to read — they are not AI detection signals.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ── IMAGE TAB ── */}
      {tab === 'image' && (
        <div className="space-y-4">
          {/* Drop zone */}
          {!imagePreview && (
            <div
              onDragOver={e => { e.preventDefault(); setIsDragging(true) }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={onDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer py-14 transition-all ${
                isDragging ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'
              }`}
            >
              <Upload className="w-8 h-8 text-muted-foreground" />
              <div className="text-center">
                <p className="text-sm font-medium">Drop an image here or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">JPEG, PNG, WebP, GIF · Max 5 MB</p>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleImageFile(f) }}
          />

          {/* Preview */}
          {imagePreview && (
            <div className="space-y-3">
              <div className="relative rounded-xl overflow-hidden border bg-muted/30 max-h-72 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imagePreview} alt="Upload preview" className="max-h-72 object-contain" />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 rounded-full bg-background/90 border p-1.5 hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground">{imageFile?.name} · {((imageFile?.size ?? 0) / 1024).toFixed(1)} KB</p>
            </div>
          )}

          {imageError && <p className="text-sm text-destructive">{imageError}</p>}

          {imagePreview && (
            <button
              onClick={analyzeImage}
              disabled={imageLoading}
              className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              {imageLoading
                ? <><RefreshCw className="w-4 h-4 animate-spin" /> Analyzing…</>
                : <><Sparkles className="w-4 h-4" /> Check Image</>}
            </button>
          )}

          {imageResult && <ResultCard result={imageResult} />}

          {!imagePreview && (
            <p className="text-xs text-muted-foreground text-center">
              Upload any photo, profile picture, or image to detect AI generation artifacts.
            </p>
          )}
        </div>
      )}
    </div>
  )
}
