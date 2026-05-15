'use client'

import { useState, useCallback } from 'react'
import { Zap, Copy, Trash2, FileText, Check, TrendingUp, Heart, Share2, Flame, MessageCircle, Lightbulb } from 'lucide-react'

/* ─── Types ──────────────────────────────────────────────────────────────── */

type Platform = 'tiktok' | 'instagram' | 'linkedin' | 'twitter' | 'youtube' | 'blog'
type Label = 'Low' | 'Fair' | 'Good' | 'Strong' | 'Viral'

interface ScoreResult {
  overall: number
  hook: number
  emotional: number
  shareability: number
  trending: number
  engagement: number
  tips: string[]
  label: Label
}

/* ─── Platform config ────────────────────────────────────────────────────── */

const PLATFORMS: { id: Platform; label: string; emoji: string }[] = [
  { id: 'tiktok', label: 'TikTok / Reels', emoji: '🎵' },
  { id: 'instagram', label: 'Instagram', emoji: '📸' },
  { id: 'linkedin', label: 'LinkedIn', emoji: '💼' },
  { id: 'twitter', label: 'X / Twitter', emoji: '✕' },
  { id: 'youtube', label: 'YouTube', emoji: '▶' },
  { id: 'blog', label: 'Blog / Article', emoji: '✍' },
]

/* ─── Sample texts ───────────────────────────────────────────────────────── */

const SAMPLE: Record<Platform, string> = {
  tiktok: `POV: You've been doing this wrong your whole life 😱\n\nMost people spend 2 hours trying to fix this. I solved it in 3 minutes.\n\nSave this — you'll want to come back to it.\n\nHave you tried this before? Drop a comment below! 👇\n\n#lifehack #tip #fyp #trending`,
  instagram: `Here's the thing nobody tells you about success... 🤫\n\nAfter 3 years building this, I can finally share what actually works.\n\nMost people give up right before the breakthrough. Don't be most people.\n\nTag a friend who needs this. Save it for when you're ready to start. 🙌\n\n#motivation #entrepreneur #success #mindset`,
  linkedin: `Unpopular opinion: Working harder is not the answer.\n\nAfter 10 years in this industry, I've watched brilliant people burn out doing exactly that.\n\nThe real answer? Ruthless prioritization.\n\nHere are 3 things I stopped doing that doubled my output:\n1. Checking email first thing in the morning\n2. Attending meetings without agendas\n3. Saying yes to everything\n\nWhat would you add to this list?`,
  twitter: `Hot take: Most productivity advice is designed for extroverts.\n\nIf you need deep focus time, ignore 90% of what you read.\n\nChange my mind.`,
  youtube: `What if everything you knew about learning was wrong?\n\nIn the next 10 minutes I'll show you the exact method that helped me learn faster in 30 days than I did in 3 years of school.\n\nThis isn't theory — I tested it myself and the results shocked me.\n\nStay until the end. The last tip is the one most people miss entirely.`,
  blog: `The productivity hack nobody talks about (and why it actually works)\n\nEveryone tells you to wake up at 5am. Nobody tells you what to do with that time.\n\nAfter testing 47 different morning routines over two years, I found the surprising truth: the habit that matters isn't when you wake up — it's the first decision you make.\n\nHere's what the research says and how I used it to triple my output.`,
}

/* ─── Scoring engine ─────────────────────────────────────────────────────── */

const POWER_WORDS = [
  'secret','shocking','incredible','amazing','proven','warning','stop','never','always',
  'instantly','guaranteed','limited','exclusive','urgent','breaking','revealed','hidden',
  'truth','mistake','hack','strategy','trick','ultimate','easy','simple','fast','quick',
  'surprising','unbelievable','free','new','you','important','critical','essential',
]

const EMOTION_WORDS = [
  'love','hate','fear','amazing','terrible','awful','beautiful','brilliant','funny','sad',
  'happy','angry','excited','shocked','inspired','motivated','frustrated','overwhelmed',
  'grateful','passionate','obsessed','heartbreaking','breathtaking','ridiculous','hilarious',
  'depressing','uplifting','devastating','powerful','emotional','touching','incredible',
  'scary','insane','wild','unreal','mind-blowing','jaw-dropping','heartwarming',
]

function clamp(n: number) { return Math.min(100, Math.max(0, Math.round(n))) }

function scoreText(text: string, platform: Platform): ScoreResult {
  const lower = text.toLowerCase()
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 3)
  const words = text.trim().split(/\s+/).filter(Boolean)
  const wordCount = words.length
  const firstSentence = sentences[0]?.trim() || ''
  const firstLower = firstSentence.toLowerCase()
  const tips: string[] = []

  // ── Hook Strength ─────────────────────────────────────────────────────────
  let hook = 30

  const powerHits = POWER_WORDS.filter(w => firstLower.includes(w)).length
  hook += Math.min(powerHits * 9, 27)

  if (/^\d+/.test(firstSentence)) hook += 14               // starts with number
  if (firstSentence.trim().endsWith('?')) hook += 12        // opens with question
  if (/^(how to|why|what if|here'?s|this is|pov:|stop )/i.test(firstSentence)) hook += 10
  if (/nobody tells you|didn't know|should know|most people|they don'?t want/i.test(text)) hook += 10

  const firstWordCount = firstSentence.split(/\s+/).filter(Boolean).length
  if (firstWordCount >= 3 && firstWordCount <= 9) hook += 9  // punchy opener
  else if (firstWordCount > 22) hook -= 8

  hook = clamp(hook)

  if (hook < 65) {
    if (powerHits === 0) tips.push('Add a power word to your opening line — "shocking", "secret", "proven", or "you" all boost hook strength.')
    if (firstWordCount > 15) tips.push('Shorten your first sentence to under 10 words for a punchier hook.')
    if (!/^\d+/.test(firstSentence)) tips.push('Try opening with a number: "3 reasons why…" or "After 5 years…"')
  }

  // ── Emotional Resonance ───────────────────────────────────────────────────
  let emotional = 25

  const emotionHits = EMOTION_WORDS.filter(w => lower.includes(w)).length
  emotional += Math.min(emotionHits * 8, 32)

  const youCount = (lower.match(/\byou\b|\byour\b/g) || []).length
  emotional += Math.min(youCount * 5, 20)

  const exclamCount = (text.match(/!/g) || []).length
  if (exclamCount >= 1 && exclamCount <= 3) emotional += 8
  else if (exclamCount > 4) emotional -= 5

  if (/\b(story|told me|happened|realized|discovered|years ago|changed my|turned my|imagine|remember when)\b/i.test(text)) emotional += 10

  emotional = clamp(emotional)

  if (emotional < 60) {
    if (youCount < 2) tips.push('Use "you" and "your" more often — direct address creates an emotional connection.')
    if (emotionHits === 0) tips.push('Add emotional language (love, fear, shocking, inspiring) to increase resonance.')
    if (!/story|happened|realized|discovered|imagine/i.test(text)) tips.push('Open with a brief personal story or relatable scenario to pull readers in.')
  }

  // ── Shareability ──────────────────────────────────────────────────────────
  let share = 35

  const idealRanges: Record<Platform, [number, number]> = {
    twitter: [8, 40], tiktok: [15, 100], instagram: [20, 120],
    linkedin: [50, 250], youtube: [40, 200], blog: [60, 400],
  }
  const [min, max] = idealRanges[platform]
  if (wordCount >= min && wordCount <= max) share += 20
  else if (wordCount > max * 1.5) share -= 12
  else if (wordCount < min / 2) share -= 8

  if (/share|tag a friend|save this|bookmark|repost|retweet|follow|subscribe|click the link|link in bio/i.test(text)) share += 15
  if (/\d+\.\s|^[-•]\s/m.test(text) || /\b(first|second|third|1\.|2\.|3\.)\b/i.test(text)) share += 10

  const avgLen = wordCount / Math.max(sentences.length, 1)
  if (avgLen <= 14) share += 8
  else if (avgLen > 26) share -= 8

  share = clamp(share)

  if (share < 60) {
    if (!/share|tag|save|bookmark|follow|subscribe/i.test(text)) tips.push('Add a CTA: "Save this for later" or "Tag someone who needs to see this."')
    if (avgLen > 20) tips.push('Break long sentences into shorter ones — easier to read, easier to share.')
    if (wordCount > max * 1.5) tips.push(`${PLATFORMS.find(p => p.id === platform)?.label} posts perform best under ${max} words. Consider trimming.`)
  }

  // ── Trending Potential ────────────────────────────────────────────────────
  let trending = 30

  if (/\b(2025|2026|now|today|this week|this year|breaking|new|just|update|trending|viral|hot|latest|right now)\b/i.test(text)) trending += 18
  if (/\b(AI|ChatGPT|GPT|hack|life hack|cheat code|game changer|era|vibe|slay|no cap|based|understood the assignment)\b/i.test(text)) trending += 15
  if (/\b(unpopular opinion|hot take|controversial|debate|agree or disagree|fight me|change my mind|nobody talks about)\b/i.test(text)) trending += 14

  const hashCount = (text.match(/#\w+/g) || []).length
  if (platform !== 'linkedin' && platform !== 'blog' && platform !== 'twitter') {
    if (hashCount >= 1 && hashCount <= 7) trending += 15
    else if (hashCount > 12) trending -= 8
  }

  trending = clamp(trending)

  if (trending < 55) {
    if (hashCount === 0 && (platform === 'instagram' || platform === 'tiktok')) tips.push('Add 3–7 relevant hashtags to boost discoverability and trending reach.')
    if (!/2025|2026|today|now|new|latest|right now/i.test(text)) tips.push('Add a recency signal — "In 2025…", "Right now…", or "This week…" — to feel timely.')
    if (!/unpopular opinion|hot take|nobody talks about|debate/i.test(text)) tips.push('Try an "Unpopular opinion:" or "Hot take:" opener — controversy drives shares.')
  }

  // ── Engagement Potential ──────────────────────────────────────────────────
  let engagement = 28

  const questionCount = (text.match(/\?/g) || []).length
  engagement += Math.min(questionCount * 14, 28)

  if (/comment below|let me know|what do you think|tell me|which do you|would you|have you ever|drop a|share your|thoughts\?/i.test(text)) engagement += 15
  if (/agree or disagree|fight me|change my mind|controversial|unpopular opinion|hot take/i.test(text)) engagement += 12
  if (/\b(everyone|nobody|we all|most people|raise your hand|who else|if you'?re like me|pov:)\b/i.test(text)) engagement += 10
  if (/\b(vs\.|versus|a\) |b\) |option [12]|team [a-z])\b/i.test(text)) engagement += 8

  engagement = clamp(engagement)

  if (engagement < 55) {
    if (questionCount === 0) tips.push('End with a question to invite comments — "What do you think?" or "Have you experienced this?"')
    if (!/comment|let me know|what do you think|tell me|drop/i.test(text)) tips.push('Add a direct ask: "Comment below" or "Let me know your take."')
  }

  // ── Overall ───────────────────────────────────────────────────────────────
  const overall = clamp(hook * 0.25 + emotional * 0.25 + share * 0.20 + trending * 0.15 + engagement * 0.15)

  if (tips.length === 0) {
    tips.push('Excellent signals across the board! Try A/B testing two versions to find the top performer.')
  }

  const label: Label = overall >= 80 ? 'Viral' : overall >= 65 ? 'Strong' : overall >= 50 ? 'Good' : overall >= 35 ? 'Fair' : 'Low'

  return {
    overall, hook, emotional, shareability: share, trending, engagement,
    tips: [...new Set(tips)].slice(0, 4),
    label,
  }
}

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function CircularScore({ score, label }: { score: number; label: Label }) {
  const r = 52
  const circ = 2 * Math.PI * r
  const filled = (score / 100) * circ
  const color =
    score >= 80 ? '#00BD9D' :
    score >= 65 ? '#49C6E5' :
    score >= 50 ? '#f59e0b' :
    score >= 35 ? '#f97316' : '#ef4444'

  const labelColor =
    score >= 80 ? 'text-primary' :
    score >= 65 ? 'text-accent' :
    score >= 50 ? 'text-amber-500' :
    score >= 35 ? 'text-orange-500' : 'text-red-500'

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" strokeWidth="10" className="text-border" />
          <circle
            cx="60" cy="60" r={r}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeDasharray={`${filled} ${circ - filled}`}
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.8s ease-out' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-foreground tabular-nums">{score}</span>
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">/ 100</span>
        </div>
      </div>
      <span className={`text-lg font-bold ${labelColor}`}>{label} Potential</span>
    </div>
  )
}

function DimensionBar({
  icon: Icon, label, score,
}: { icon: React.ElementType; label: string; score: number }) {
  const barColor =
    score >= 80 ? 'bg-primary' :
    score >= 65 ? 'bg-accent' :
    score >= 50 ? 'bg-amber-400' :
    score >= 35 ? 'bg-orange-400' : 'bg-red-400'

  const textColor =
    score >= 80 ? 'text-primary' :
    score >= 65 ? 'text-accent' :
    score >= 50 ? 'text-amber-500' :
    score >= 35 ? 'text-orange-500' : 'text-red-500'

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="flex items-center gap-1.5 font-medium text-foreground">
          <Icon className="w-3.5 h-3.5 text-muted-foreground" />
          {label}
        </span>
        <span className={`font-bold tabular-nums text-sm ${textColor}`}>{score}</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${barColor} transition-all duration-700 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

/* ─── Main component ─────────────────────────────────────────────────────── */

export function ViralityChecker() {
  const [text, setText] = useState('')
  const [platform, setPlatform] = useState<Platform>('tiktok')
  const [result, setResult] = useState<ScoreResult | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [copied, setCopied] = useState(false)

  const wordCount = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0

  const handleAnalyze = useCallback(() => {
    if (!text.trim()) return
    setAnalyzing(true)
    setTimeout(() => {
      setResult(scoreText(text, platform))
      setAnalyzing(false)
    }, 500)
  }, [text, platform])

  const handleSample = () => {
    setText(SAMPLE[platform])
    setResult(null)
  }

  const handleCopy = async () => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleClear = () => {
    setText('')
    setResult(null)
  }

  const handlePlatformChange = (p: Platform) => {
    setPlatform(p)
    setResult(null)
  }

  return (
    <div className="flex flex-col lg:flex-row rounded-xl border border-border bg-card overflow-hidden shadow-sm">

      {/* ── Left: Input ──────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col border-b lg:border-b-0 lg:border-r border-border">

        {/* Platform selector */}
        <div className="px-4 pt-4 pb-3 border-b border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">Platform</p>
          <div className="flex flex-wrap gap-1.5">
            {PLATFORMS.map(p => (
              <button
                key={p.id}
                onClick={() => handlePlatformChange(p.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  platform === p.id
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground bg-background'
                }`}
              >
                <span>{p.emoji}</span>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Textarea toolbar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/20">
          <span className="text-xs text-muted-foreground">
            {wordCount > 0 ? `${wordCount} words` : 'Paste your caption, headline, or script'}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              disabled={!text}
              className="flex items-center gap-1 px-2.5 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-secondary transition-colors disabled:opacity-40 text-foreground"
            >
              {copied ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleClear}
              disabled={!text}
              className="flex items-center gap-1 px-2.5 py-1.5 border border-border rounded-lg text-xs font-medium hover:bg-secondary transition-colors disabled:opacity-40 text-foreground"
            >
              <Trash2 className="w-3 h-3" />
              Clear
            </button>
          </div>
        </div>

        {/* Text area */}
        <div className="relative flex-1">
          <textarea
            value={text}
            onChange={e => { setText(e.target.value); setResult(null) }}
            placeholder="Paste your caption, headline, script, or social media post here…"
            className="w-full h-full min-h-[280px] resize-none text-sm leading-relaxed p-4 bg-transparent focus:outline-none text-foreground placeholder:text-muted-foreground"
            data-save-key="virality-text"
          />
          {!text && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button
                onClick={handleSample}
                className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors bg-background shadow-sm text-foreground"
              >
                <FileText className="w-4 h-4" />
                Use sample text
              </button>
            </div>
          )}
        </div>

        {/* Analyze button */}
        <div className="p-4 border-t border-border">
          <button
            onClick={handleAnalyze}
            disabled={!text.trim() || analyzing}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold rounded-lg transition-colors text-sm shadow-sm"
          >
            {analyzing ? (
              <>
                <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                Analyzing…
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                Check Virality Score
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Right: Results ───────────────────────────────────────────────── */}
      <div className="w-full lg:w-80 xl:w-96 flex flex-col">

        {!result ? (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Ready to analyse</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Paste your content on the left, select your platform, and click <strong>Check Virality Score</strong> to get your results.
              </p>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="flex-1 overflow-y-auto p-5 space-y-6">

            {/* Overall score */}
            <div className="flex flex-col items-center">
              <CircularScore score={result.overall} label={result.label} />
              <p className="text-xs text-muted-foreground mt-2">
                {PLATFORMS.find(p => p.id === platform)?.emoji}{' '}
                {PLATFORMS.find(p => p.id === platform)?.label} · Virality Score
              </p>
            </div>

            {/* Dimension bars */}
            <div className="space-y-3.5">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Score Breakdown</p>
              <DimensionBar icon={Flame}         label="Hook Strength"      score={result.hook} />
              <DimensionBar icon={Heart}         label="Emotional Power"    score={result.emotional} />
              <DimensionBar icon={Share2}        label="Shareability"       score={result.shareability} />
              <DimensionBar icon={TrendingUp}    label="Trending Potential" score={result.trending} />
              <DimensionBar icon={MessageCircle} label="Engagement"         score={result.engagement} />
            </div>

            {/* Tips */}
            {result.tips.length > 0 && (
              <div className="space-y-2.5">
                <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                  <Lightbulb className="w-3 h-3" /> Improvement Tips
                </p>
                <ul className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center flex-shrink-0 font-bold">
                        {i + 1}
                      </span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Re-analyse nudge */}
            <button
              onClick={() => setResult(null)}
              className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-2 border border-border rounded-lg hover:bg-secondary"
            >
              Edit text and re-analyse
            </button>

          </div>
        )}
      </div>
    </div>
  )
}
