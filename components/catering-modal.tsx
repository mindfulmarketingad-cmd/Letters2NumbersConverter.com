'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronRight, ChevronLeft, MapPin, Calendar, Users, UtensilsCrossed, Wallet, User, CheckCircle, Loader2 } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 – Location
  city: string
  state_region: string
  // Step 2 – Event
  event_date: string
  event_type: string
  guest_count: string
  // Step 3 – Food
  cuisine_types: string[]
  service_style: string
  // Step 4 – Budget & Dietary
  dietary_requirements: string[]
  budget_range: string
  // Step 5 – Contact
  first_name: string
  last_name: string
  email: string
  phone: string
  notes: string
}

const INITIAL: FormData = {
  city: '', state_region: '',
  event_date: '', event_type: '', guest_count: '',
  cuisine_types: [], service_style: '',
  dietary_requirements: [], budget_range: '',
  first_name: '', last_name: '', email: '', phone: '', notes: '',
}

// ─── Options ──────────────────────────────────────────────────────────────────

const EVENT_TYPES = [
  'Wedding', 'Corporate Event', 'Birthday Party', 'Graduation Party',
  'Holiday Party', 'Baby / Bridal Shower', 'Networking Event', 'Fundraiser',
  'Anniversary Dinner', 'Other',
]

const CUISINE_TYPES = [
  'Italian', 'Mexican', 'BBQ & Grills', 'Mediterranean', 'American',
  'Asian Fusion', 'Indian', 'Middle Eastern', 'Greek', 'Vegan / Plant-based',
  'Seafood', 'Other',
]

const SERVICE_STYLES = [
  { value: 'buffet', label: 'Buffet', desc: 'Self-serve stations' },
  { value: 'plated', label: 'Plated Dinner', desc: 'Sit-down, served courses' },
  { value: 'stations', label: 'Food Stations', desc: 'Multiple themed stations' },
  { value: 'cocktail', label: 'Cocktail & Appetizers', desc: 'Passed hors d\'oeuvres' },
  { value: 'family', label: 'Family Style', desc: 'Shared platters at each table' },
  { value: 'boxed', label: 'Box Lunches', desc: 'Individual packaged meals' },
]

const DIETARY = [
  'Vegetarian options', 'Vegan options', 'Gluten-free', 'Halal',
  'Kosher', 'Nut-free', 'Dairy-free', 'None / No restrictions',
]

const BUDGETS = [
  { value: 'under_500', label: 'Under $500' },
  { value: '500_1000', label: '$500 – $1,000' },
  { value: '1000_2500', label: '$1,000 – $2,500' },
  { value: '2500_5000', label: '$2,500 – $5,000' },
  { value: '5000_10000', label: '$5,000 – $10,000' },
  { value: 'over_10000', label: '$10,000+' },
]

const STEPS = [
  { label: 'Location', icon: MapPin },
  { label: 'Event', icon: Calendar },
  { label: 'Food', icon: UtensilsCrossed },
  { label: 'Budget', icon: Wallet },
  { label: 'Contact', icon: User },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function toggle(arr: string[], val: string) {
  return arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
}

function todayISO() {
  return new Date().toISOString().split('T')[0]
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-foreground mb-1.5">{children}</label>
}

function Input({
  value, onChange, placeholder, type = 'text', required, min,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; required?: boolean; min?: string
}) {
  return (
    <input
      type={type} value={value} min={min} required={required}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
    />
  )
}

function ChipToggle({ selected, options, onToggle }: {
  selected: string[]; options: string[]; onToggle: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button
          key={opt} type="button" onClick={() => onToggle(opt)}
          className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-colors ${
            selected.includes(opt)
              ? 'bg-primary text-primary-foreground border-primary'
              : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

// ─── Step content ─────────────────────────────────────────────────────────────

function Step1({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Where do you need catering?</h2>
        <p className="text-sm text-muted-foreground">We'll match you with caterers who serve your area.</p>
      </div>
      <div>
        <FieldLabel>City *</FieldLabel>
        <Input value={data.city} onChange={v => set('city', v)} placeholder="e.g. Los Angeles" required />
      </div>
      <div>
        <FieldLabel>State / Region</FieldLabel>
        <Input value={data.state_region} onChange={v => set('state_region', v)} placeholder="e.g. California" />
      </div>
    </div>
  )
}

function Step2({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Tell us about your event</h2>
        <p className="text-sm text-muted-foreground">This helps us understand what kind of catering you need.</p>
      </div>
      <div>
        <FieldLabel>Event date *</FieldLabel>
        <Input type="date" value={data.event_date} onChange={v => set('event_date', v)} min={todayISO()} required />
      </div>
      <div>
        <FieldLabel>Type of event *</FieldLabel>
        <select
          value={data.event_type}
          onChange={e => set('event_type', e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        >
          <option value="" disabled>Select event type…</option>
          {EVENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <FieldLabel>Number of guests *</FieldLabel>
        <Input
          type="number" value={data.guest_count} onChange={v => set('guest_count', v)}
          placeholder="e.g. 80" min="1" required
        />
      </div>
    </div>
  )
}

function Step3({ data, set, toggle: toggleFn }: {
  data: FormData
  set: (k: keyof FormData, v: string) => void
  toggle: (k: 'cuisine_types', v: string) => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">What kind of food?</h2>
        <p className="text-sm text-muted-foreground">Select all cuisine styles that interest you.</p>
      </div>
      <div>
        <FieldLabel>Cuisine preferences *</FieldLabel>
        <ChipToggle
          selected={data.cuisine_types}
          options={CUISINE_TYPES}
          onToggle={v => toggleFn('cuisine_types', v)}
        />
      </div>
      <div>
        <FieldLabel>Service style *</FieldLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SERVICE_STYLES.map(s => (
            <button
              key={s.value} type="button" onClick={() => set('service_style', s.value)}
              className={`flex flex-col items-start px-4 py-3 rounded-lg border text-left transition-colors ${
                data.service_style === s.value
                  ? 'bg-primary/10 border-primary text-foreground'
                  : 'border-border text-muted-foreground hover:border-primary/40'
              }`}
            >
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
              <span className="text-xs mt-0.5">{s.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Step4({ data, set, toggle: toggleFn }: {
  data: FormData
  set: (k: keyof FormData, v: string) => void
  toggle: (k: 'dietary_requirements', v: string) => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Budget & dietary needs</h2>
        <p className="text-sm text-muted-foreground">Helps us find the right caterer for your budget.</p>
      </div>
      <div>
        <FieldLabel>Approximate budget *</FieldLabel>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {BUDGETS.map(b => (
            <button
              key={b.value} type="button" onClick={() => set('budget_range', b.value)}
              className={`px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors text-center ${
                data.budget_range === b.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <FieldLabel>Dietary requirements</FieldLabel>
        <ChipToggle
          selected={data.dietary_requirements}
          options={DIETARY}
          onToggle={v => toggleFn('dietary_requirements', v)}
        />
      </div>
    </div>
  )
}

function Step5({ data, set }: { data: FormData; set: (k: keyof FormData, v: string) => void }) {
  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-xl font-bold text-foreground mb-1">Your contact details</h2>
        <p className="text-sm text-muted-foreground">We'll reach out within 24 hours with options and a quote.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <FieldLabel>First name *</FieldLabel>
          <Input value={data.first_name} onChange={v => set('first_name', v)} placeholder="Jane" required />
        </div>
        <div>
          <FieldLabel>Last name *</FieldLabel>
          <Input value={data.last_name} onChange={v => set('last_name', v)} placeholder="Smith" required />
        </div>
      </div>
      <div>
        <FieldLabel>Email address *</FieldLabel>
        <Input type="email" value={data.email} onChange={v => set('email', v)} placeholder="jane@example.com" required />
      </div>
      <div>
        <FieldLabel>Phone number</FieldLabel>
        <Input type="tel" value={data.phone} onChange={v => set('phone', v)} placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <FieldLabel>Anything else we should know?</FieldLabel>
        <textarea
          value={data.notes}
          onChange={e => set('notes', e.target.value)}
          placeholder="Special requests, venue details, preferred cuisine combinations…"
          rows={3}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      </div>
    </div>
  )
}

function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-8 px-4 space-y-5">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle className="w-9 h-9 text-green-600" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-foreground">Request received!</h2>
        <p className="text-sm text-muted-foreground max-w-xs">
          Thank you — we've got your catering request and will reach out within <strong>24 hours</strong> with caterer options and a quote tailored to your event.
        </p>
      </div>
      <div className="bg-secondary/50 rounded-lg p-4 text-left w-full max-w-xs space-y-1">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">What happens next</p>
        <ul className="text-xs text-muted-foreground space-y-1 mt-2">
          <li>✓ We review your requirements</li>
          <li>✓ We source a vetted local caterer</li>
          <li>✓ You receive a quote to approve</li>
          <li>✓ Booking confirmed — you're done</li>
        </ul>
      </div>
      <button
        onClick={onClose}
        className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
      >
        Done
      </button>
    </div>
  )
}

// ─── Validation per step ──────────────────────────────────────────────────────

function validateStep(step: number, data: FormData): string | null {
  if (step === 0) {
    if (!data.city.trim()) return 'Please enter your city.'
  }
  if (step === 1) {
    if (!data.event_date) return 'Please choose an event date.'
    if (!data.event_type) return 'Please select an event type.'
    if (!data.guest_count || Number(data.guest_count) < 1) return 'Please enter the number of guests.'
  }
  if (step === 2) {
    if (data.cuisine_types.length === 0) return 'Please select at least one cuisine.'
    if (!data.service_style) return 'Please choose a service style.'
  }
  if (step === 3) {
    if (!data.budget_range) return 'Please select a budget range.'
  }
  if (step === 4) {
    if (!data.first_name.trim()) return 'Please enter your first name.'
    if (!data.last_name.trim()) return 'Please enter your last name.'
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Please enter a valid email address.'
  }
  return null
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export function CateringModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FormData>(INITIAL)
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const set = useCallback((k: keyof FormData, v: string) => {
    setData(prev => ({ ...prev, [k]: v }))
    setError(null)
  }, [])

  const toggleArr = useCallback((k: 'cuisine_types' | 'dietary_requirements', v: string) => {
    setData(prev => ({ ...prev, [k]: toggle(prev[k] as string[], v) }))
    setError(null)
  }, [])

  const next = () => {
    const err = validateStep(step, data)
    if (err) { setError(err); return }
    setError(null)
    if (step < STEPS.length - 1) {
      setStep(s => s + 1)
    } else {
      handleSubmit()
    }
  }

  const back = () => { setError(null); setStep(s => s - 1) }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/catering/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          guest_count: Number(data.guest_count),
        }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error((json as { error?: string }).error || 'Something went wrong')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const isLastStep = step === STEPS.length - 1

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Panel */}
      <div className="relative w-full sm:max-w-lg bg-background rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col max-h-[92dvh]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border flex-shrink-0">
          <div>
            <p className="text-xs font-semibold text-primary uppercase tracking-widest">Order Catering</p>
            {!submitted && (
              <p className="text-xs text-muted-foreground mt-0.5">Step {step + 1} of {STEPS.length}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="flex gap-1.5 px-6 py-3 flex-shrink-0">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full h-1.5 rounded-full transition-colors duration-300 ${
                    i <= step ? 'bg-primary' : 'bg-secondary'
                  }`} />
                  <span className={`hidden sm:flex items-center gap-1 text-[10px] font-medium transition-colors ${
                    i === step ? 'text-primary' : i < step ? 'text-primary/60' : 'text-muted-foreground/50'
                  }`}>
                    <Icon className="w-3 h-3" />{s.label}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {submitted ? (
            <SuccessScreen onClose={onClose} />
          ) : (
            <>
              {step === 0 && <Step1 data={data} set={set} />}
              {step === 1 && <Step2 data={data} set={set} />}
              {step === 2 && <Step3 data={data} set={set} toggle={toggleArr} />}
              {step === 3 && <Step4 data={data} set={set} toggle={toggleArr} />}
              {step === 4 && <Step5 data={data} set={set} />}
            </>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="px-6 pb-6 pt-3 border-t border-border flex-shrink-0 space-y-3">
            {error && (
              <p className="text-sm text-red-500 font-medium">{error}</p>
            )}
            <div className="flex items-center gap-3">
              {step > 0 && (
                <button
                  type="button" onClick={back} disabled={submitting}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <button
                type="button" onClick={next} disabled={submitting}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
              >
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                ) : isLastStep ? (
                  'Submit my request'
                ) : (
                  <><span>Continue</span><ChevronRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground text-center">
              No payment required now — we'll contact you with a free quote.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
