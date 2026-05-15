'use client'

import { useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a))
  b = Math.abs(Math.round(b))
  while (b) { [a, b] = [b, a % b] }
  return a || 1
}

// Simplify a fraction p/q, returns { num, den } in lowest terms
function simplifyFrac(num: number, den: number) {
  if (den === 0) return null
  const sign = (num < 0) !== (den < 0) ? -1 : 1
  num = Math.abs(num)
  den = Math.abs(den)
  const g = gcd(num, den)
  return { num: sign * (num / g), den: den / g }
}

// Check if n is a perfect square; return its root if so
function perfectSqrt(n: number): number | null {
  if (n < 0) return null
  const r = Math.round(Math.sqrt(n))
  return r * r === n ? r : null
}

type RootResult =
  | { kind: 'two-real-rational'; x1: { num: number; den: number }; x2: { num: number; den: number } }
  | { kind: 'two-real-irrational'; x1: number; x2: number }
  | { kind: 'one-real'; x: { num: number; den: number } }
  | { kind: 'complex'; realNum: number; realDen: number; imagNum: number; imagDen: number }
  | { kind: 'error' }

function computeRoots(a: number, b: number, c: number, D: number): RootResult {
  if (a === 0) return { kind: 'error' }

  if (D === 0) {
    const f = simplifyFrac(-b, 2 * a)
    if (!f) return { kind: 'error' }
    return { kind: 'one-real', x: f }
  }

  if (D > 0) {
    const sqrtD = perfectSqrt(D)
    if (sqrtD !== null) {
      const f1 = simplifyFrac(-b + sqrtD, 2 * a)
      const f2 = simplifyFrac(-b - sqrtD, 2 * a)
      if (!f1 || !f2) return { kind: 'error' }
      return { kind: 'two-real-rational', x1: f1, x2: f2 }
    }
    return {
      kind: 'two-real-irrational',
      x1: (-b + Math.sqrt(D)) / (2 * a),
      x2: (-b - Math.sqrt(D)) / (2 * a),
    }
  }

  // D < 0 — complex roots
  const absD = Math.abs(D)
  const sqrtAbsD = perfectSqrt(absD)
  const twoA = 2 * a
  // real part: -b / (2a)
  // imag part: ±sqrt(|D|) / (2a)
  if (sqrtAbsD !== null) {
    const rf = simplifyFrac(-b, twoA)
    const imf = simplifyFrac(sqrtAbsD, twoA)
    if (!rf || !imf) return { kind: 'error' }
    return { kind: 'complex', realNum: rf.num, realDen: rf.den, imagNum: imf.num, imagDen: imf.den }
  }
  // irrational imaginary — just show decimals via the 'complex' path with approximation flag
  const rf = simplifyFrac(-b, twoA)
  if (!rf) return { kind: 'error' }
  return { kind: 'complex', realNum: rf.num, realDen: rf.den, imagNum: -1, imagDen: -1 } // sentinel for irrational imag
}

function frac(num: number, den: number): string {
  if (den === 1) return String(num)
  return `${num}/${den}`
}

function formatRoots(roots: RootResult, D: number, a: number, b: number): string {
  if (roots.kind === 'error') return ''
  if (roots.kind === 'one-real') return `x = ${frac(roots.x.num, roots.x.den)}`
  if (roots.kind === 'two-real-rational')
    return `x₁ = ${frac(roots.x1.num, roots.x1.den)},  x₂ = ${frac(roots.x2.num, roots.x2.den)}`
  if (roots.kind === 'two-real-irrational')
    return `x₁ ≈ ${roots.x1.toFixed(6)},  x₂ ≈ ${roots.x2.toFixed(6)}`
  if (roots.kind === 'complex') {
    const real = roots.realDen === 1 ? String(roots.realNum) : `${roots.realNum}/${roots.realDen}`
    if (roots.imagNum === -1 && roots.imagDen === -1) {
      const imag = (Math.sqrt(Math.abs(D)) / (2 * Math.abs(a))).toFixed(6)
      return `x₁ = ${real} + ${imag}i,  x₂ = ${real} − ${imag}i`
    }
    const imag = roots.imagDen === 1 ? String(roots.imagNum) : `${roots.imagNum}/${roots.imagDen}`
    return `x₁ = ${real} + ${imag}i,  x₂ = ${real} − ${imag}i`
  }
  return ''
}

function CoeffInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</label>
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        step="any"
        className="w-24 rounded-lg border bg-background px-3 py-2.5 text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary/30 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder="0"
      />
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button onClick={copy} className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
      {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function formatEq(a: number, b: number, c: number): string {
  const parts: string[] = []
  if (a !== 0) parts.push(a === 1 ? 'x²' : a === -1 ? '−x²' : `${a}x²`)
  if (b !== 0) {
    if (b === 1) parts.push(parts.length ? '+ x' : 'x')
    else if (b === -1) parts.push(parts.length ? '− x' : '−x')
    else if (b > 0) parts.push(parts.length ? `+ ${b}x` : `${b}x`)
    else parts.push(parts.length ? `− ${Math.abs(b)}x` : `${b}x`)
  }
  if (c !== 0) {
    if (c > 0) parts.push(parts.length ? `+ ${c}` : `${c}`)
    else parts.push(parts.length ? `− ${Math.abs(c)}` : `${c}`)
  }
  return (parts.length ? parts.join(' ') : '0') + ' = 0'
}

export function DiscriminantCalculator() {
  const [aStr, setAStr] = useState('1')
  const [bStr, setBStr] = useState('5')
  const [cStr, setCStr] = useState('6')
  const [copied, setCopied] = useState(false)

  const a = parseFloat(aStr) || 0
  const b = parseFloat(bStr) || 0
  const c = parseFloat(cStr) || 0

  const isValidQuadratic = a !== 0

  const D = useMemo(() => b * b - 4 * a * c, [a, b, c])

  const roots = useMemo(() => {
    if (!isValidQuadratic) return null
    return computeRoots(a, b, c, D)
  }, [a, b, c, D, isValidQuadratic])

  const rootStr = roots ? formatRoots(roots, D, a, b) : ''

  const nature = !isValidQuadratic
    ? null
    : D > 0
    ? { label: 'Two distinct real roots', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' }
    : D === 0
    ? { label: 'One repeated real root (double root)', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' }
    : { label: 'Two complex (non-real) roots', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' }

  async function copyAll() {
    const lines = [
      `Equation: ${formatEq(a, b, c)}`,
      `a = ${a}, b = ${b}, c = ${c}`,
      `Discriminant: D = b² − 4ac = (${b})² − 4(${a})(${c}) = ${b * b} − ${4 * a * c} = ${D}`,
      nature ? `Nature: ${nature.label}` : '',
      rootStr ? `Roots: ${rootStr}` : '',
    ].filter(Boolean).join('\n')
    await navigator.clipboard.writeText(lines)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const bSq = b * b
  const fourAC = 4 * a * c

  return (
    <div className="space-y-5">
      {/* Coefficient inputs */}
      <div className="rounded-xl border bg-muted/30 p-5 space-y-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Enter coefficients for ax² + bx + c = 0</p>
        <div className="flex items-end justify-center gap-4 flex-wrap">
          <CoeffInput label="a" value={aStr} onChange={setAStr} />
          <span className="mb-3 text-muted-foreground font-medium">x² +</span>
          <CoeffInput label="b" value={bStr} onChange={setBStr} />
          <span className="mb-3 text-muted-foreground font-medium">x +</span>
          <CoeffInput label="c" value={cStr} onChange={setCStr} />
          <span className="mb-3 text-muted-foreground font-medium">= 0</span>
        </div>

        {isValidQuadratic && (
          <div className="text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {formatEq(a, b, c)}
            </span>
          </div>
        )}

        {!isValidQuadratic && (
          <p className="text-center text-sm text-amber-600 dark:text-amber-400">
            ⚠ a cannot be 0 — that is not a quadratic equation.
          </p>
        )}
      </div>

      {isValidQuadratic && (
        <>
          {/* Discriminant result */}
          <div className="rounded-xl border bg-muted/20 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Discriminant</p>
              <CopyButton text={`D = ${D}`} />
            </div>
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-4xl font-bold tabular-nums">{D < 0 ? '−' : ''}{Math.abs(D)}</span>
              <span className="text-sm text-muted-foreground">D = b² − 4ac</span>
            </div>

            {/* Nature badge */}
            {nature && (
              <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium ${nature.bg} ${nature.color}`}>
                <span className="text-base">{D > 0 ? '✓' : D === 0 ? '〒' : '∅'}</span>
                {nature.label}
              </div>
            )}
          </div>

          {/* Step-by-step */}
          <div className="rounded-xl border bg-muted/20 p-5 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Step-by-Step Calculation</p>
            <ol className="space-y-2 text-sm">
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">1</span>
                <span>Identify coefficients: <span className="font-mono font-medium">a = {a}, b = {b}, c = {c}</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">2</span>
                <span>Write the formula: <span className="font-mono font-medium">D = b² − 4ac</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">3</span>
                <span>Substitute: <span className="font-mono font-medium">D = ({b})² − 4({a})({c})</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">4</span>
                <span>Calculate b²: <span className="font-mono font-medium">({b})² = {bSq}</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">5</span>
                <span>Calculate 4ac: <span className="font-mono font-medium">4 × {a} × {c} = {fourAC}</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">6</span>
                <span>Subtract: <span className="font-mono font-medium">D = {bSq} − ({fourAC}) = <strong>{D}</strong></span></span>
              </li>
            </ol>
          </div>

          {/* Roots */}
          <div className="rounded-xl border bg-muted/20 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {D >= 0 ? 'Roots (Quadratic Formula)' : 'Complex Roots'}
              </p>
              {rootStr && <CopyButton text={rootStr} />}
            </div>

            <p className="text-xs text-muted-foreground font-mono">x = (−b ± √D) / (2a)</p>
            <p className="text-xs text-muted-foreground font-mono">
              x = (−({b}) ± √{D < 0 ? `(${D})` : D}) / (2 × {a})
            </p>

            {rootStr && (
              <div className="rounded-lg bg-muted/30 px-4 py-3 font-mono text-sm font-medium tracking-wide">
                {rootStr}
              </div>
            )}

            {roots?.kind === 'two-real-irrational' && (
              <p className="text-xs text-muted-foreground">
                √{D} is irrational — roots shown as decimal approximations (6 d.p.)
              </p>
            )}

            {roots?.kind === 'complex' && roots.imagNum === -1 && (
              <p className="text-xs text-muted-foreground">
                √{Math.abs(D)} is irrational — imaginary part shown as decimal approximation
              </p>
            )}
          </div>

          {/* Interpretation */}
          <div className="rounded-xl border bg-muted/20 p-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Interpretation</p>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              <li className="flex gap-2">
                <span className={`font-medium ${D > 0 ? 'text-foreground' : ''}`}>D &gt; 0</span>
                <span>— two distinct real roots{D > 0 && ` ✓ (your result: ${D})`}</span>
              </li>
              <li className="flex gap-2">
                <span className={`font-medium ${D === 0 ? 'text-foreground' : ''}`}>D = 0</span>
                <span>— one repeated real root (the parabola just touches the x-axis){D === 0 && ' ✓ (your result)'}</span>
              </li>
              <li className="flex gap-2">
                <span className={`font-medium ${D < 0 ? 'text-foreground' : ''}`}>D &lt; 0</span>
                <span>— no real roots (two complex conjugate roots){D < 0 && ` ✓ (your result: ${D})`}</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground pt-1">
              The parabola {a > 0 ? 'opens upward' : 'opens downward'} (a {a > 0 ? '> 0' : '< 0'})
              {D > 0
                ? ` and crosses the x-axis at two points.`
                : D === 0
                ? ` and is tangent to the x-axis at one point.`
                : ` and does not cross the x-axis.`}
            </p>
          </div>

          {/* Copy all */}
          <div className="flex justify-end">
            <button
              onClick={copyAll}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
            >
              {copied ? <><Check className="w-4 h-4 text-emerald-500" /> Copied!</> : <><Copy className="w-4 h-4" /> Copy All Results</>}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
