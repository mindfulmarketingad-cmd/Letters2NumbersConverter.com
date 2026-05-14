'use client'

import { useState } from 'react'
import { Copy, RefreshCw } from 'lucide-react'

type Theme = 'tech' | 'space' | 'nature' | 'mythic' | 'animals' | 'punny'
type Style = 'any' | 'serious' | 'fun'

const themes: Record<Theme, string> = {
  tech: 'Tech & Code',
  space: 'Space & Sci-Fi',
  nature: 'Nature & Elements',
  mythic: 'Mythology & Legends',
  animals: 'Animals',
  punny: 'Puns & Wordplay',
}

const adjectives: Record<Theme, string[]> = {
  tech: ['Binary', 'Recursive', 'Async', 'Compiled', 'Neural', 'Quantum', 'Modular', 'Encrypted', 'Runtime', 'Parallel', 'Fuzzy', 'Distributed', 'Latent', 'Volatile', 'Cached'],
  space: ['Stellar', 'Orbital', 'Cosmic', 'Nebular', 'Lunar', 'Galactic', 'Solar', 'Interstellar', 'Hypersonic', 'Supernova', 'Dark Matter', 'Event Horizon', 'Pulsar', 'Quasar', 'Zenith'],
  nature: ['Crimson', 'Frosted', 'Volcanic', 'Verdant', 'Iron', 'Obsidian', 'Tidal', 'Aurora', 'Glacial', 'Ember', 'Typhoon', 'Granite', 'Solar Flare', 'Abyssal', 'Petrified'],
  mythic: ['Titan', 'Olympian', 'Valkyrie', 'Arcane', 'Phantom', 'Legendary', 'Ancient', 'Immortal', 'Rune', 'Alchemy', 'Eldritch', 'Gilded', 'Primal', 'Mythic', 'Eternal'],
  animals: ['Neon', 'Stealth', 'Hyper', 'Silent', 'Rogue', 'Blazing', 'Iron', 'Shadow', 'Turbo', 'Phantom', 'Atomic', 'Crystal', 'Electric', 'Feral', 'Apex'],
  punny: ['404', 'Debug', 'Null Pointer', 'Stack Overflow', 'Git Push', 'Merge Conflict', 'Sudo', 'Hello World', 'Off by One', 'Ctrl+Z', 'Tab vs Space', 'Dark Mode', 'Legacy', 'No Sleep', 'Ship It'],
}

const nouns: Record<Theme, string[]> = {
  tech: ['Architects', 'Compilers', 'Hackers', 'Nodes', 'Pipelines', 'Algorithms', 'Stacks', 'Kernels', 'Packets', 'Daemons', 'Bots', 'Clusters', 'Tokens', 'Webhooks', 'Deploys'],
  space: ['Astronauts', 'Cosmonauts', 'Voyagers', 'Pioneers', 'Navigators', 'Explorers', 'Launchers', 'Drifters', 'Colonists', 'Sentinels', 'Odyssey', 'Constellation', 'Satellites', 'Nebulae', 'Meteors'],
  nature: ['Wolves', 'Eagles', 'Falcons', 'Sharks', 'Pythons', 'Cobras', 'Panthers', 'Raptors', 'Jaguars', 'Hornets', 'Thunderbirds', 'Vipers', 'Condors', 'Stallions', 'Titans'],
  mythic: ['Dragons', 'Phoenixes', 'Gryphons', 'Hydra', 'Chimeras', 'Giants', 'Oracles', 'Wizards', 'Paladins', 'Templars', 'Warlocks', 'Sorcerers', 'Spartans', 'Centurions', 'Crusaders'],
  animals: ['Pandas', 'Otters', 'Foxes', 'Ravens', 'Wolves', 'Owls', 'Crows', 'Mantis', 'Narwhals', 'Platypus', 'Axolotls', 'Capybaras', 'Raccoons', 'Meerkats', 'Quokkas'],
  punny: ['Exception', 'Overflow', 'Hangover', 'Debuggers', 'Sleepers', 'Brewers', 'Shippers', 'Pivotters', 'Hackers', 'Ninjas', 'Rockstars', 'Wizards', 'Champions', 'Legends', 'Heroes'],
}

const connectors = ['', ' ', ' of the ', ' &amp; the ', ': ', ' — ', "'s "]

function generateName(theme: Theme): string {
  const adjs = adjectives[theme]
  const ns = nouns[theme]

  if (theme === 'punny') {
    const pun = adjs[Math.floor(Math.random() * adjs.length)]
    const noun = ns[Math.floor(Math.random() * ns.length)]
    return `${pun} ${noun}`
  }

  const adj = adjs[Math.floor(Math.random() * adjs.length)]
  const noun = ns[Math.floor(Math.random() * ns.length)]
  const conn = connectors[Math.floor(Math.random() * connectors.length)]

  if (conn === '') return `${adj}${noun}`
  if (conn === ' ') return `${adj} ${noun}`
  return `${adj}${conn}${noun}`
}

export function HackathonTeamNameGenerator() {
  const [theme, setTheme] = useState<Theme>('tech')
  const [count, setCount] = useState(10)
  const [names, setNames] = useState<string[]>([])
  const [copied, setCopied] = useState<string | null>(null)

  const generate = () => {
    const generated = Array.from({ length: count }, () => generateName(theme))
    setNames(generated)
  }

  const copyName = async (name: string) => {
    await navigator.clipboard.writeText(name)
    setCopied(name)
    setTimeout(() => setCopied(null), 2000)
  }

  const copyAll = async () => {
    await navigator.clipboard.writeText(names.join('\n'))
    setCopied('__all__')
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="w-full space-y-6">
      {/* Controls */}
      <div className="bg-card border border-border rounded-lg p-5 space-y-5">
        {/* Theme */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-3">Theme</label>
          <div className="flex flex-wrap gap-2">
            {(Object.entries(themes) as [Theme, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  theme === key
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:border-primary hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div>
          <label className="text-sm font-semibold text-foreground block mb-2">
            Number of names to generate
          </label>
          <input
            type="number"
            value={count}
            min={1}
            max={50}
            onChange={(e) => setCount(Math.min(50, Math.max(1, parseInt(e.target.value) || 1)))}
            className="w-28 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* Generate button */}
        <button
          onClick={generate}
          className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          <RefreshCw size={16} />
          Generate Names
        </button>
      </div>

      {/* Results */}
      {names.length > 0 && (
        <div className="bg-card border border-border rounded-lg p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Generated Names
            </h3>
            <button
              onClick={copyAll}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg border border-border hover:border-primary transition-colors"
            >
              <Copy size={14} />
              {copied === '__all__' ? 'Copied!' : 'Copy all'}
            </button>
          </div>
          <ul className="space-y-2">
            {names.map((name, i) => (
              <li
                key={i}
                className="flex items-center justify-between group px-3 py-2 rounded-md hover:bg-muted/50 transition-colors"
              >
                <span className="text-foreground font-medium">{name}</span>
                <button
                  onClick={() => copyName(name)}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground rounded border border-transparent group-hover:border-border transition-all opacity-0 group-hover:opacity-100"
                >
                  <Copy size={12} />
                  {copied === name ? 'Copied!' : 'Copy'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {names.length === 0 && (
        <div className="border border-dashed border-border rounded-lg p-10 text-center text-muted-foreground text-sm">
          Choose a theme and click <strong className="text-foreground">Generate Names</strong> to get started.
        </div>
      )}
    </div>
  )
}
