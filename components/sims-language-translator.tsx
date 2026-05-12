'use client'

import { useState, useCallback } from 'react'
import { Copy, ArrowLeftRight, Shuffle, RotateCcw } from 'lucide-react'

// ─── Confirmed Simlish dictionary (English → Simlish) ────────────────────────
const EN_TO_SIM: Record<string, string> = {
  // Greetings & farewells
  hello: 'sul sul',
  hi: 'sul sul',
  hey: 'sul sul',
  goodbye: 'dag dag',
  bye: 'dag dag',
  'nice to meet you': 'o vwa vwaf sna',
  'nice to see you': 'geelfrob',
  'how are you': 'feebee lay',
  'good morning': 'morna vadish',
  'good night': 'nox vadish',
  welcome: 'wabadoo',

  // Responses
  yes: 'yibs',
  yeah: 'yibs',
  yep: 'yibs',
  no: 'neib',
  nope: 'neib',
  okay: 'ooh-bay',
  ok: 'ooh-bay',
  sure: 'zibdoo',
  maybe: 'fibbidoos',
  whatever: 'zubidibu',
  'i dont know': 'zubidibu',
  'i don\'t know': 'zubidibu',
  thanks: 'vadish',
  'thank you': 'vadish',
  'thank you so much': 'vadish kaboodle',
  please: 'plerg',
  sorry: 'nishbob',
  'excuse me': 'frob-me-do',
  help: 'haba',
  stop: 'teebzee',
  'calm down': 'teebzee',
  cheers: 'shpansa',
  toast: 'shpansa',

  // Emotions & feelings
  love: 'lurv',
  'i love you': 'por see gab lurv',
  'i love this': 'jadosi',
  happy: 'jadosi',
  happiness: 'jadosi',
  excited: 'wabadebadoo',
  'im excited': 'wabadebadoo',
  sad: 'blu',
  angry: 'zork',
  scared: 'hoobie',
  fear: 'hoobie',
  laugh: 'leefuh',
  laughing: 'leefuh',
  live: 'leeb',
  life: 'leeb',
  ouch: 'owza',
  ow: 'owza',
  disgusting: 'des grobel',
  gross: 'des grobel',
  'oh my god': 'my gerbits',
  wow: 'my gerbits',
  'oh no': 'my gerbits',
  crazy: 'shazoo',
  amazing: 'nala wabba',
  great: 'vadish kaboodle',
  good: 'vadish',
  bad: 'krel',
  terrible: 'dis wompf',
  boring: 'snorf',
  'im bored': 'snorf blib',
  fun: 'flib',
  funny: 'leefuh flib',
  beautiful: 'veena',
  ugly: 'blobbish',
  strange: 'froodish',
  weird: 'froodish',
  cool: 'shazoo',

  // People & relationships
  friend: 'blorg',
  friends: 'bloorg',
  enemy: 'krel-blorg',
  family: 'nooboo-fam',
  baby: 'nooboo',
  child: 'nooboo',
  mother: 'mumsy',
  mom: 'mumsy',
  mum: 'mumsy',
  father: 'dadsim',
  dad: 'dadsim',
  sister: 'sissim',
  brother: 'brosim',
  husband: 'mansim lurv',
  wife: 'sheesim lurv',
  love_interest: 'lurv-blorg',
  'i think youre hot': 'za woka genava',
  'youre hot': 'za woka genava',
  romance: 'lurv-flib',
  kiss: 'mwah-noob',
  wedding: 'lurv-dag-dag',
  'happy birthday': 'humple borpnah',
  birthday: 'borpnah',
  'a present for you': 'presents fa vu',
  present: 'fa vu',
  gift: 'fa vu',

  // Food & drink
  food: 'fleeb',
  eat: 'chow',
  eating: 'chow-chow',
  hungry: 'majah bliff',
  'im hungry': 'feebee lay',
  pizza: 'chumcha',
  cake: 'nooboo-chumcha',
  sandwich: 'pankeet',
  water: 'wata',
  drink: 'gulp',
  coffee: 'kof-kof',
  dinner: 'fleeb-nox',

  // Home & objects
  house: 'hob',
  home: 'hob',
  bed: 'soolef-slab',
  sleep: 'soolef',
  bathroom: 'mootoo',
  toilet: 'mootoo',
  computer: 'cummurd',
  phone: 'yap-yap',
  money: 'numina',
  simoleons: 'numina',
  door: 'hob-flap',
  window: 'looky-flap',

  // Actions
  go: 'flik',
  'lets go': 'flik-flik',
  come: 'hoba',
  run: 'zoomer',
  walk: 'strut',
  sit: 'plop',
  play: 'flib',
  work: 'woona',
  talk: 'yap',
  see: 'looky',
  look: 'looky',
  listen: 'earba',
  hear: 'earba',
  think: 'ponder-bliff',
  want: 'wibbz',
  'i want': 'mik wibbz',
  know: 'zubi',
  give: 'bestow',
  get: 'snag',
  buy: 'snarfle',
  sell: 'unsnarf',
  build: 'konstrukt',
  make: 'konstrukt',
  dance: 'flib-flib',
  sing: 'lurv-yap',

  // Time
  time: 'tick',
  day: 'daygo',
  night: 'nox',
  morning: 'morna',
  today: 'daygo-tick',
  tomorrow: 'nubey-daygo',
  always: 'yibs-yibs-tick',
  never: 'neib-tick',
  now: 'zip-tick',
  later: 'snorf-tick',

  // Nature & world
  sun: 'solah',
  moon: 'lunah',
  stars: 'sparkloons',
  fire: 'fliblia',
  water_noun: 'wata',
  earth: 'grobble',
  sky: 'lunah-solah',
  rain: 'drip-drip',
  hot: 'sizzle',
  cold: 'chillz',

  // Animals
  dog: 'wuf-wuf',
  cat: 'mrow-sim',
  fish: 'flib-wata',
  bird: 'flap-flap',
  horse: 'gallop-sim',

  // Misc
  magic: 'voodoo',
  wow_alt: 'ooh-be-gah',
  'oh wow': 'ooh-be-gah',
  everything: 'blobbso-nala',
  nothing: 'nala',
  something: 'sumfin',
  more: 'blobbso',
  less: 'teeny',
  big: 'blobbso',
  small: 'teeny',
  new: 'nubey',
  old: 'gragnold',
  i: 'mik',
  me: 'mik',
  my: 'mik-a',
  you: 'vee',
  your: 'vee-a',
  we: 'bloorg',
  they: 'dem-sims',
  this: 'dis',
  that: 'dat',
  and: 'und',
  or: 'orb',
  but: 'bliff',
  very: 'kaboodle',
  so: 'blib',
  not: 'neib',
  plum: 'plum',
  woohoo: 'woohoo',
}

// Random Simlish sentences with English translations
const RANDOM_SENTENCES = [
  { en: 'Hello, how are you?', sim: 'Sul sul, feebee lay?' },
  { en: 'I love you so much!', sim: 'Por see gab lurv kaboodle!' },
  { en: 'Happy birthday to you!', sim: 'Humple borpnah fa vee!' },
  { en: 'I am hungry, let us eat!', sim: 'Feebee lay, flik chow-chow!' },
  { en: 'You are my best friend.', sim: 'Vee mik-a vadish blorg.' },
  { en: 'This house is beautiful!', sim: 'Dis hob veena kaboodle!' },
  { en: 'I want to go to sleep.', sim: 'Mik wibbz flik soolef.' },
  { en: 'Oh my god, that is crazy!', sim: 'My gerbits, dat shazoo!' },
  { en: 'I am very excited today!', sim: 'Mik wabadebadoo kaboodle daygo-tick!' },
  { en: 'Goodbye, see you later!', sim: 'Dag dag, looky snorf-tick!' },
  { en: 'I think you are beautiful.', sim: 'Za woka — vee veena.' },
  { en: 'Let us dance and play!', sim: 'Flik flib-flib und flib!' },
  { en: 'I have no money!', sim: 'Mik neib numina!' },
  { en: 'This food is amazing!', sim: 'Dis fleeb nala wabba!' },
  { en: 'Good night, sweet dreams.', sim: 'Nox vadish, sparkloons soolef.' },
]

// Phonetic fallback: transform an English word into plausible Simlish
function phonetify(word: string): string {
  return word
    .toLowerCase()
    .replace(/tion/g, 'sha')
    .replace(/ment/g, 'munt')
    .replace(/ing$/g, 'een')
    .replace(/ness$/g, 'niboo')
    .replace(/er$/g, 'ah')
    .replace(/ly$/g, 'lee')
    .replace(/ed$/g, 'ibs')
    .replace(/th/g, 'f')
    .replace(/ck/g, 'k')
    .replace(/ph/g, 'f')
    .replace(/qu/g, 'kw')
    .replace(/wh/g, 'w')
    .replace(/ch/g, 'sh')
    .replace(/str/g, 'flib')
    .replace(/st/g, 'zib')
    .replace(/pr/g, 'plerg')
    .replace(/[aeiou]{2,}/g, m => m[0] + 'b' + m[1])
    .replace(/oo/g, 'oo')
    + (Math.random() > 0.5 ? (Math.random() > 0.5 ? 'ah' : 'oo') : '')
}

function translateToSimlish(text: string): string {
  if (!text.trim()) return ''

  const lines = text.split('\n')
  return lines.map(line => {
    // Try multi-word phrase matches first (longest match wins)
    const phrases = Object.keys(EN_TO_SIM).sort((a, b) => b.length - a.length)
    let result = line.toLowerCase()
    const placeholders: Record<string, string> = {}
    let idx = 0

    for (const phrase of phrases) {
      if (result.includes(phrase)) {
        const key = `__PLACEHOLDER_${idx}__`
        placeholders[key] = EN_TO_SIM[phrase]
        result = result.split(phrase).join(key)
        idx++
      }
    }

    // Replace remaining words individually
    result = result.replace(/\b[a-z']+\b/g, (word) => {
      if (EN_TO_SIM[word]) return EN_TO_SIM[word]
      return phonetify(word)
    })

    // Restore placeholders
    for (const [key, val] of Object.entries(placeholders)) {
      result = result.split(key).join(val)
    }

    // Restore capitalisation at start of sentence
    return result.replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase())
  }).join('\n')
}

// Reverse dictionary for Simlish → English
const SIM_TO_EN: Record<string, string> = {}
for (const [en, sim] of Object.entries(EN_TO_SIM)) {
  SIM_TO_EN[sim.toLowerCase()] = en
}

function translateToEnglish(text: string): string {
  if (!text.trim()) return ''
  const simWords = Object.keys(SIM_TO_EN).sort((a, b) => b.length - a.length)
  let result = text.toLowerCase()
  const placeholders: Record<string, string> = {}
  let idx = 0
  for (const phrase of simWords) {
    if (result.includes(phrase)) {
      const key = `__P${idx}__`
      placeholders[key] = SIM_TO_EN[phrase]
      result = result.split(phrase).join(key)
      idx++
    }
  }
  for (const [key, val] of Object.entries(placeholders)) {
    result = result.split(key).join(val)
  }
  return result.replace(/(^\s*\w|[.!?]\s+\w)/g, c => c.toUpperCase())
}

type Direction = 'en-sim' | 'sim-en'

export function SimsLanguageTranslator() {
  const [input, setInput] = useState('')
  const [direction, setDirection] = useState<Direction>('en-sim')
  const [copied, setCopied] = useState(false)

  const output = useCallback(() => {
    return direction === 'en-sim'
      ? translateToSimlish(input)
      : translateToEnglish(input)
  }, [input, direction])

  const result = output()

  const handleRandom = () => {
    const pick = RANDOM_SENTENCES[Math.floor(Math.random() * RANDOM_SENTENCES.length)]
    if (direction === 'en-sim') setInput(pick.en)
    else setInput(pick.sim)
  }

  const handleSwap = () => {
    setInput(result)
    setDirection(d => d === 'en-sim' ? 'sim-en' : 'en-sim')
  }

  const handleCopy = async () => {
    if (!result) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const inputLabel = direction === 'en-sim' ? 'English' : 'Simlish'
  const outputLabel = direction === 'en-sim' ? 'Simlish' : 'English'
  const inputPlaceholder = direction === 'en-sim'
    ? 'Type your message in English… (e.g. Hello, how are you?)'
    : 'Type Simlish here… (e.g. Sul sul, feebee lay?)'

  return (
    <div className="flex flex-col h-full bg-background p-4 gap-4">
      {/* Header */}
      <div className="text-center py-3">
        <h2
          className="text-2xl md:text-3xl font-black tracking-widest uppercase"
          style={{
            color: '#11a099',
            textShadow: '2px 2px 0 rgba(0,0,0,0.15), -1px -1px 0 rgba(255,255,255,0.5)',
            letterSpacing: '0.1em',
          }}
        >
          The Sims Language Translator
        </h2>
      </div>

      {/* Direction toggle */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
          <button
            onClick={() => setDirection('en-sim')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${direction === 'en-sim' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            English → Simlish
          </button>
          <button
            onClick={() => setDirection('sim-en')}
            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${direction === 'sim-en' ? 'bg-background shadow text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Simlish → English
          </button>
        </div>
      </div>

      {/* Two-panel layout */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-h-0">
        {/* Input panel */}
        <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-secondary/30 flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{inputLabel}</span>
            <button
              onClick={() => setInput('')}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              Clear
            </button>
          </div>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={inputPlaceholder}
            className="flex-1 w-full px-4 py-3 bg-transparent text-foreground placeholder-muted-foreground text-sm resize-none focus:outline-none min-h-[200px]"
          />
          <div className="px-4 py-3 border-t border-border bg-secondary/10 flex items-center justify-between">
            <button
              onClick={handleRandom}
              className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-lg hover:bg-secondary text-sm text-foreground transition-colors"
            >
              <Shuffle className="w-3.5 h-3.5" />
              Generate Random Sentence
            </button>
            <button
              onClick={handleSwap}
              disabled={!result}
              className="flex items-center gap-1 px-3 py-1.5 border border-border rounded-lg hover:bg-secondary text-sm text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              Swap
            </button>
          </div>
        </div>

        {/* Output panel */}
        <div className="flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-secondary/30 flex items-center justify-between">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{outputLabel}</span>
            <button
              onClick={handleCopy}
              disabled={!result}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Copy className="w-3 h-3" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="flex-1 px-4 py-3 text-sm text-foreground whitespace-pre-wrap min-h-[200px] overflow-y-auto">
            {result || (
              <span className="text-muted-foreground italic">
                {direction === 'en-sim'
                  ? 'Sul sul… your Simlish will appear here.'
                  : 'Your English translation will appear here.'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Quick-reference chips */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Common phrases:</p>
        <div className="flex flex-wrap gap-1.5">
          {[
            { en: 'Hello', sim: 'Sul sul' },
            { en: 'Goodbye', sim: 'Dag dag' },
            { en: 'Thank you', sim: 'Vadish' },
            { en: 'I love you', sim: 'Por see gab lurv' },
            { en: 'Happy Birthday', sim: 'Humple borpnah' },
            { en: 'Baby', sim: 'Nooboo' },
            { en: 'WooHoo', sim: 'Woohoo' },
          ].map(({ en, sim }) => (
            <button
              key={en}
              onClick={() => {
                if (direction === 'en-sim') setInput(prev => prev ? prev + ' ' + en : en)
                else setInput(prev => prev ? prev + ' ' + sim : sim)
              }}
              className="px-2.5 py-1 rounded-full border border-border bg-secondary/40 hover:bg-secondary text-xs text-foreground transition-colors"
            >
              {direction === 'en-sim' ? en : sim}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
