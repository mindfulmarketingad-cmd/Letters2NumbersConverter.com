'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, Search, FlaskConical, Beaker, RotateCcw, Sun, Moon, Info } from 'lucide-react'

declare global {
  interface Window { SmilesDrawer: any }
}

// ─── Molecule database ───────────────────────────────────────────────────────

interface Molecule {
  name: string
  formula: string
  smiles: string
  weight: number
  category: string
  description: string
  bonds: { single: number; double: number; triple: number; aromatic: number }
  heavyAtoms: number
}

const MOLECULES: Molecule[] = [
  // Inorganic
  { name: 'Water', formula: 'H₂O', smiles: 'O', weight: 18.02, category: 'Inorganic', description: 'Universal solvent; bent molecular geometry', bonds: { single: 2, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 1 },
  { name: 'Ammonia', formula: 'NH₃', smiles: 'N', weight: 17.03, category: 'Inorganic', description: 'Pyramidal geometry; common base in chemistry', bonds: { single: 3, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 1 },
  { name: 'Carbon Dioxide', formula: 'CO₂', smiles: 'O=C=O', weight: 44.01, category: 'Inorganic', description: 'Linear molecule; key greenhouse gas', bonds: { single: 0, double: 2, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Hydrogen Peroxide', formula: 'H₂O₂', smiles: 'OO', weight: 34.01, category: 'Inorganic', description: 'Strong oxidizer; used as antiseptic and bleaching agent', bonds: { single: 3, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Sulfuric Acid', formula: 'H₂SO₄', smiles: 'OS(=O)(=O)O', weight: 98.08, category: 'Inorganic', description: 'Strong acid; tetrahedral sulfur center', bonds: { single: 4, double: 2, triple: 0, aromatic: 0 }, heavyAtoms: 6 },
  { name: 'Nitric Acid', formula: 'HNO₃', smiles: 'O[N+](=O)[O-]', weight: 63.01, category: 'Inorganic', description: 'Strong oxidizing acid; used in fertilizers and explosives manufacturing', bonds: { single: 2, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Phosphoric Acid', formula: 'H₃PO₄', smiles: 'OP(=O)(O)O', weight: 98.00, category: 'Inorganic', description: 'Triprotic acid; used in fertilizers, detergents, and food', bonds: { single: 6, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 5 },
  // Hydrocarbons
  { name: 'Methane', formula: 'CH₄', smiles: 'C', weight: 16.04, category: 'Hydrocarbon', description: 'Simplest alkane; tetrahedral geometry; main component of natural gas', bonds: { single: 4, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 1 },
  { name: 'Ethane', formula: 'C₂H₆', smiles: 'CC', weight: 30.07, category: 'Hydrocarbon', description: 'Two-carbon alkane; free rotation about C–C bond', bonds: { single: 7, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Propane', formula: 'C₃H₈', smiles: 'CCC', weight: 44.10, category: 'Hydrocarbon', description: 'Three-carbon alkane; common fuel gas', bonds: { single: 10, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Butane', formula: 'C₄H₁₀', smiles: 'CCCC', weight: 58.12, category: 'Hydrocarbon', description: 'Four-carbon alkane; used in lighters and camping stoves', bonds: { single: 13, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Isobutane', formula: 'C₄H₁₀', smiles: 'CC(C)C', weight: 58.12, category: 'Hydrocarbon', description: 'Branched butane isomer; used as refrigerant and aerosol propellant', bonds: { single: 13, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Ethylene', formula: 'C₂H₄', smiles: 'C=C', weight: 28.05, category: 'Hydrocarbon', description: 'Simplest alkene; planar; widely used in plastic manufacturing', bonds: { single: 4, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Propylene', formula: 'C₃H₆', smiles: 'CC=C', weight: 42.08, category: 'Hydrocarbon', description: 'Three-carbon alkene; used to produce polypropylene', bonds: { single: 6, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Acetylene', formula: 'C₂H₂', smiles: 'C#C', weight: 26.04, category: 'Hydrocarbon', description: 'Simplest alkyne; linear geometry; used in welding torches', bonds: { single: 2, double: 0, triple: 1, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Benzene', formula: 'C₆H₆', smiles: 'c1ccccc1', weight: 78.11, category: 'Aromatic', description: 'Archetypal aromatic compound; delocalized π electrons over 6-membered ring', bonds: { single: 0, double: 0, triple: 0, aromatic: 6 }, heavyAtoms: 6 },
  { name: 'Toluene', formula: 'C₇H₈', smiles: 'Cc1ccccc1', weight: 92.14, category: 'Aromatic', description: 'Methylbenzene; common solvent and precursor to explosives', bonds: { single: 4, double: 0, triple: 0, aromatic: 6 }, heavyAtoms: 7 },
  { name: 'Naphthalene', formula: 'C₁₀H₈', smiles: 'c1ccc2ccccc2c1', weight: 128.17, category: 'Aromatic', description: 'Two fused benzene rings; once used in mothballs', bonds: { single: 0, double: 0, triple: 0, aromatic: 10 }, heavyAtoms: 10 },
  // Alcohols
  { name: 'Methanol', formula: 'CH₃OH', smiles: 'CO', weight: 32.04, category: 'Alcohol', description: 'Simplest alcohol; toxic; used as fuel and solvent', bonds: { single: 5, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Ethanol', formula: 'C₂H₅OH', smiles: 'CCO', weight: 46.07, category: 'Alcohol', description: 'Drinking alcohol; common solvent; biofuel component', bonds: { single: 8, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Isopropanol', formula: 'C₃H₇OH', smiles: 'CC(O)C', weight: 60.10, category: 'Alcohol', description: 'Rubbing alcohol; antiseptic; common laboratory solvent', bonds: { single: 11, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Glycerol', formula: 'C₃H₈O₃', smiles: 'OCC(O)CO', weight: 92.09, category: 'Alcohol', description: 'Triol; used in soap, pharmaceuticals, and food as humectant', bonds: { single: 11, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 6 },
  { name: 'Phenol', formula: 'C₆H₅OH', smiles: 'Oc1ccccc1', weight: 94.11, category: 'Alcohol', description: 'Aromatic alcohol; weak acid; precursor to plastics and resins', bonds: { single: 2, double: 0, triple: 0, aromatic: 6 }, heavyAtoms: 7 },
  // Carboxylic Acids
  { name: 'Formic Acid', formula: 'HCOOH', smiles: 'C(=O)O', weight: 46.03, category: 'Carboxylic Acid', description: 'Simplest carboxylic acid; found in ant venom', bonds: { single: 2, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Acetic Acid', formula: 'CH₃COOH', smiles: 'CC(=O)O', weight: 60.05, category: 'Carboxylic Acid', description: 'Active component of vinegar; widely used industrial chemical', bonds: { single: 4, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Lactic Acid', formula: 'C₃H₆O₃', smiles: 'CC(O)C(=O)O', weight: 90.08, category: 'Carboxylic Acid', description: 'Produced in muscle cells during anaerobic respiration', bonds: { single: 7, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 6 },
  { name: 'Citric Acid', formula: 'C₆H₈O₇', smiles: 'OC(CC(O)(CC(=O)O)C(=O)O)C(=O)O', weight: 192.12, category: 'Carboxylic Acid', description: 'Found in citrus fruits; used as food preservative and flavoring', bonds: { single: 13, double: 3, triple: 0, aromatic: 0 }, heavyAtoms: 13 },
  { name: 'Benzoic Acid', formula: 'C₇H₆O₂', smiles: 'OC(=O)c1ccccc1', weight: 122.12, category: 'Carboxylic Acid', description: 'Aromatic acid; food preservative (E210); antiseptic', bonds: { single: 3, double: 1, triple: 0, aromatic: 6 }, heavyAtoms: 9 },
  // Ketones & Aldehydes
  { name: 'Formaldehyde', formula: 'CH₂O', smiles: 'C=O', weight: 30.03, category: 'Aldehyde', description: 'Simplest aldehyde; preservative; used in making resins', bonds: { single: 2, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 2 },
  { name: 'Acetaldehyde', formula: 'C₂H₄O', smiles: 'CC=O', weight: 44.05, category: 'Aldehyde', description: 'Two-carbon aldehyde; intermediate in ethanol metabolism', bonds: { single: 4, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Acetone', formula: 'C₃H₆O', smiles: 'CC(=O)C', weight: 58.08, category: 'Ketone', description: 'Simplest ketone; common solvent in nail polish remover', bonds: { single: 6, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Methyl Ethyl Ketone', formula: 'C₄H₈O', smiles: 'CCC(=O)C', weight: 72.11, category: 'Ketone', description: 'Industrial solvent; used in coatings and adhesives', bonds: { single: 9, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 5 },
  // Sugars
  { name: 'Glucose', formula: 'C₆H₁₂O₆', smiles: 'C([C@@H]1[C@H]([C@@H]([C@H](C(O1)O)O)O)O)O', weight: 180.16, category: 'Sugar', description: 'Primary cellular energy source; monosaccharide (hexose)', bonds: { single: 17, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 12 },
  { name: 'Fructose', formula: 'C₆H₁₂O₆', smiles: 'OC[C@H]1O[C@@](O)(CO)[C@@H](O)[C@@H]1O', weight: 180.16, category: 'Sugar', description: 'Fruit sugar; ketohexose; sweeter than glucose', bonds: { single: 17, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 12 },
  { name: 'Ribose', formula: 'C₅H₁₀O₅', smiles: 'OC[C@H]1O[C@@H](O)[C@H](O)[C@@H]1O', weight: 150.13, category: 'Sugar', description: 'Five-carbon sugar; structural component of RNA', bonds: { single: 14, double: 0, triple: 0, aromatic: 0 }, heavyAtoms: 10 },
  // Amino Acids
  { name: 'Glycine', formula: 'C₂H₅NO₂', smiles: 'NCC(=O)O', weight: 75.03, category: 'Amino Acid', description: 'Simplest amino acid; no chiral center; non-essential', bonds: { single: 5, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 5 },
  { name: 'Alanine', formula: 'C₃H₇NO₂', smiles: 'C[C@@H](N)C(=O)O', weight: 89.09, category: 'Amino Acid', description: 'Non-polar amino acid; second most widely found in proteins', bonds: { single: 8, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 6 },
  { name: 'Phenylalanine', formula: 'C₉H₁₁NO₂', smiles: 'N[C@@H](Cc1ccccc1)C(=O)O', weight: 165.19, category: 'Amino Acid', description: 'Aromatic amino acid; essential; precursor to dopamine', bonds: { single: 8, double: 1, triple: 0, aromatic: 6 }, heavyAtoms: 12 },
  // Drugs
  { name: 'Aspirin', formula: 'C₉H₈O₄', smiles: 'CC(=O)Oc1ccccc1C(=O)O', weight: 180.16, category: 'Drug', description: 'Acetylsalicylic acid; pain reliever, anti-inflammatory, blood thinner', bonds: { single: 4, double: 2, triple: 0, aromatic: 6 }, heavyAtoms: 13 },
  { name: 'Paracetamol', formula: 'C₈H₉NO₂', smiles: 'CC(=O)Nc1ccc(O)cc1', weight: 151.16, category: 'Drug', description: 'Acetaminophen; analgesic and antipyretic; para-substituted aniline derivative', bonds: { single: 6, double: 1, triple: 0, aromatic: 6 }, heavyAtoms: 11 },
  { name: 'Ibuprofen', formula: 'C₁₃H₁₈O₂', smiles: 'CC(C)Cc1ccc(cc1)[C@@H](C)C(=O)O', weight: 206.28, category: 'Drug', description: 'NSAID; propionic acid derivative; analgesic and anti-inflammatory', bonds: { single: 14, double: 1, triple: 0, aromatic: 6 }, heavyAtoms: 15 },
  { name: 'Caffeine', formula: 'C₈H₁₀N₄O₂', smiles: 'CN1C=NC2=C1C(=O)N(C(=O)N2C)C', weight: 194.19, category: 'Drug', description: 'Xanthine alkaloid; CNS stimulant; found in coffee, tea, and chocolate', bonds: { single: 9, double: 2, triple: 0, aromatic: 4 }, heavyAtoms: 14 },
  { name: 'Dopamine', formula: 'C₈H₁₁NO₂', smiles: 'NCCc1ccc(O)c(O)c1', weight: 153.18, category: 'Drug', description: 'Neurotransmitter; catecholamine; regulates reward and motor control', bonds: { single: 9, double: 0, triple: 0, aromatic: 6 }, heavyAtoms: 11 },
  // Other Organics
  { name: 'Urea', formula: 'CH₄N₂O', smiles: 'C(=O)(N)N', weight: 60.06, category: 'Organic', description: 'End product of protein metabolism; first organic compound synthesized from inorganic materials', bonds: { single: 4, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
  { name: 'Acetonitrile', formula: 'C₂H₃N', smiles: 'CC#N', weight: 41.05, category: 'Organic', description: 'Simplest nitrile; common polar aprotic solvent in HPLC', bonds: { single: 3, double: 0, triple: 1, aromatic: 0 }, heavyAtoms: 3 },
  { name: 'Dimethyl Sulfoxide', formula: 'C₂H₆OS', smiles: 'CS(=O)C', weight: 78.13, category: 'Organic', description: 'DMSO; polar aprotic solvent; used in cryopreservation and drug delivery', bonds: { single: 6, double: 1, triple: 0, aromatic: 0 }, heavyAtoms: 4 },
]

const CATEGORIES = ['All', ...Array.from(new Set(MOLECULES.map(m => m.category))).sort()]

const CATEGORY_COLORS: Record<string, string> = {
  Inorganic: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  Hydrocarbon: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  Aromatic: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Alcohol: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  'Carboxylic Acid': 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Aldehyde: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  Ketone: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  Sugar: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  'Amino Acid': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  Drug: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Organic: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
}

function loadSmilesDrawer(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.SmilesDrawer) { resolve(); return }
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/smiles-drawer@1.0.10/dist/smiles-drawer.min.js'
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Failed to load SmilesDrawer'))
    document.head.appendChild(s)
  })
}

function detectFunctionalGroups(smiles: string): string[] {
  const groups: string[] = []
  if (/C\(=O\)O|OC\(=O\)/.test(smiles)) groups.push('Carboxylic acid (–COOH)')
  else if (/C\(=O\)|C=O/.test(smiles) && /^[^N]/.test(smiles)) {
    if (/CC=O|=O$/.test(smiles)) groups.push('Aldehyde (–CHO)')
    else groups.push('Carbonyl (C=O)')
  }
  if (/C\(=O\)N|NC\(=O\)/.test(smiles)) groups.push('Amide (–CONH–)')
  if (/[^C]O[^O=]|^O[C]|[C]O$/.test(smiles) && !/=O/.test(smiles.replace(/C\(=O\)/g, ''))) groups.push('Hydroxyl (–OH)')
  if (/C=C/.test(smiles)) groups.push('Alkene (C=C)')
  if (/C#C/.test(smiles)) groups.push('Alkyne (C≡C)')
  if (/C#N/.test(smiles)) groups.push('Nitrile (–C≡N)')
  if (/[cn]1[cn]/.test(smiles) || /c1ccc/.test(smiles)) groups.push('Aromatic ring')
  if (/[NH2]|^N|[^C]N[^C]/.test(smiles) && !groups.includes('Amide (–CONH–)')) groups.push('Amine (–NH₂)')
  if (/S/.test(smiles) && !/S\(=O\)/.test(smiles)) groups.push('Thiol/Sulfide (–SH/–S–)')
  if (/S\(=O\)/.test(smiles)) groups.push('Sulfoxide/Sulfone (S=O)')
  if (/P/.test(smiles)) groups.push('Phosphate/Phosphonate')
  return groups
}

// Rough atom count from SMILES
function parseAtomCounts(smiles: string): Record<string, number> {
  const counts: Record<string, number> = {}
  // Extract bracketed atoms like [NH3+], [C@@H]
  const bracketed = smiles.match(/\[[^\]]+\]/g) || []
  let cleaned = smiles
  for (const b of bracketed) {
    const m = b.match(/[A-Z][a-z]?/)
    const elem = m ? m[0] : ''
    if (elem) counts[elem] = (counts[elem] || 0) + 1
    cleaned = cleaned.replace(b, '')
  }
  // Count remaining uppercase element symbols
  const elemRe = /([A-Z][a-z]?)/g
  let match
  const valid = new Set(['C', 'N', 'O', 'S', 'P', 'F', 'I', 'B', 'Br', 'Cl', 'Si', 'Se', 'As'])
  while ((match = elemRe.exec(cleaned)) !== null) {
    if (valid.has(match[1])) counts[match[1]] = (counts[match[1]] || 0) + 1
  }
  return counts
}

// ─── Component ───────────────────────────────────────────────────────────────

export function StructuralFormulaCalculator() {
  const [tab, setTab] = useState<'library' | 'custom'>('library')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState<Molecule>(MOLECULES[0])
  const [customSmiles, setCustomSmiles] = useState('')
  const [customName, setCustomName] = useState('')
  const [canvasTheme, setCanvasTheme] = useState<'light' | 'dark'>('light')
  const [error, setError] = useState('')
  const [libLoaded, setLibLoaded] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const activeSmiles = tab === 'library' ? selected.smiles : customSmiles

  // Load SmilesDrawer on mount
  useEffect(() => {
    loadSmilesDrawer()
      .then(() => setLibLoaded(true))
      .catch(() => setError('Could not load the structure renderer. Please check your connection.'))
  }, [])

  // Render structure whenever smiles or theme changes
  useEffect(() => {
    if (!libLoaded || !canvasRef.current || !activeSmiles.trim()) return
    setError('')

    const canvas = canvasRef.current
    const drawer = new window.SmilesDrawer.SmilesDrawer({
      width: canvas.width,
      height: canvas.height,
      bondThickness: 1.4,
      shortBondWidth: 0.85,
      bondSpacing: 5.5,
      atomVisualization: 'default',
      isomeric: true,
      debug: false,
      terminalCarbons: true,
      explicitHydrogens: false,
      overlapSensitivity: 0.42,
      overlapResolutionIterations: 5,
      compactDrawing: false,
      fontSizeLarge: 13,
      fontSizeSmall: 10,
      padding: 24,
      experimental: false,
      themes: {
        light: {
          C: '#222', O: '#d0021b', N: '#1a53ff', S: '#c88400', P: '#d45500',
          F: '#00a000', CL: '#00a000', BR: '#7a1400', I: '#54007a',
          BACKGROUND: '#ffffff',
        },
        dark: {
          C: '#eeeeee', O: '#ff6b6b', N: '#74b9ff', S: '#ffd93d', P: '#ff9f43',
          F: '#6bcb77', CL: '#6bcb77', BR: '#ffb347', I: '#c8a6ff',
          BACKGROUND: '#1e1e2e',
        },
      },
    })

    window.SmilesDrawer.parse(
      activeSmiles,
      (tree: any) => {
        drawer.draw(tree, canvasRef.current, canvasTheme, false)
      },
      (err: string) => {
        setError('Invalid SMILES notation. Please check your input.')
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.fillStyle = canvasTheme === 'light' ? '#ffffff' : '#1e1e2e'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }
    )
  }, [libLoaded, activeSmiles, canvasTheme])

  const filtered = MOLECULES.filter(m => {
    const q = search.toLowerCase()
    const matchesSearch = !q || m.name.toLowerCase().includes(q) || m.formula.toLowerCase().includes(q) || m.smiles.toLowerCase().includes(q)
    const matchesCat = category === 'All' || m.category === category
    return matchesSearch && matchesCat
  })

  function downloadPNG() {
    if (!canvasRef.current) return
    const a = document.createElement('a')
    a.href = canvasRef.current.toDataURL('image/png')
    const name = tab === 'library' ? selected.name : (customName || 'molecule')
    a.download = `${name.toLowerCase().replace(/\s+/g, '-')}-structure.png`
    a.click()
  }

  const displayMol = tab === 'library' ? selected : null
  const customAtoms = tab === 'custom' && customSmiles ? parseAtomCounts(customSmiles) : null
  const customGroups = tab === 'custom' && customSmiles ? detectFunctionalGroups(customSmiles) : null

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex rounded-lg border overflow-hidden">
        <button
          onClick={() => setTab('library')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${tab === 'library' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          <FlaskConical className="w-4 h-4" /> Molecule Library
        </button>
        <button
          onClick={() => setTab('custom')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${tab === 'custom' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          <Beaker className="w-4 h-4" /> Custom SMILES
        </button>
      </div>

      {/* Library: search + category filter */}
      {tab === 'library' && (
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name, formula, or SMILES…"
              className="w-full pl-9 pr-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium border transition-colors ${category === cat ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary/50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="max-h-44 overflow-y-auto rounded-lg border divide-y">
            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">No molecules found.</p>
            )}
            {filtered.map(mol => (
              <button
                key={mol.smiles + mol.name}
                onClick={() => setSelected(mol)}
                className={`w-full text-left px-4 py-2.5 flex items-center justify-between gap-3 hover:bg-muted/60 transition-colors ${selected.name === mol.name && tab === 'library' ? 'bg-primary/8' : ''}`}
              >
                <span className="font-medium text-sm">{mol.name}</span>
                <span className="text-xs text-muted-foreground font-mono shrink-0">{mol.formula}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Custom SMILES input */}
      {tab === 'custom' && (
        <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Molecule Name (optional)</label>
            <input
              value={customName}
              onChange={e => setCustomName(e.target.value)}
              placeholder="e.g. Dopamine"
              className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">SMILES Notation</label>
            <div className="flex gap-2">
              <input
                value={customSmiles}
                onChange={e => { setCustomSmiles(e.target.value); setError('') }}
                placeholder="e.g. CCO  or  c1ccccc1  or  CC(=O)O"
                className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button onClick={() => { setCustomSmiles(''); setError('') }} className="rounded-lg border px-3 py-2 hover:bg-muted transition-colors" title="Clear">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className="text-xs text-muted-foreground self-center">Try:</span>
            {[['Aspirin', 'CC(=O)Oc1ccccc1C(=O)O'], ['Caffeine', 'CN1C=NC2=C1C(=O)N(C(=O)N2C)C'], ['Penicillin G', 'CC1([C@@H](N2[C@H](S1)[C@@H](C2=O)NC(=O)Cc3ccccc3)C(=O)O)C']].map(([label, smi]) => (
              <button key={label} onClick={() => { setCustomSmiles(smi); setCustomName(label); setError('') }}
                className="rounded-full border px-2.5 py-0.5 text-xs hover:bg-muted transition-colors">{label}</button>
            ))}
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      )}

      {/* Canvas + controls */}
      <div className="rounded-xl border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b bg-muted/20">
          <span className="text-sm font-semibold">
            {tab === 'library' ? selected.name : (customName || 'Structural Formula')}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCanvasTheme(t => t === 'light' ? 'dark' : 'light')}
              title="Toggle canvas theme"
              className="rounded-md border p-1.5 hover:bg-muted transition-colors"
            >
              {canvasTheme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={downloadPNG}
              className="flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-muted transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> PNG
            </button>
          </div>
        </div>
        <div className={`flex items-center justify-center ${canvasTheme === 'dark' ? 'bg-[#1e1e2e]' : 'bg-white'}`}>
          <canvas
            ref={canvasRef}
            width={520}
            height={340}
            className="w-full max-w-[520px]"
            style={{ display: 'block' }}
          />
        </div>
      </div>

      {/* Properties panel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Molecular info */}
        <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Molecular Properties</p>
          <div className="space-y-2 text-sm">
            {displayMol && (
              <>
                <Row label="Formula" value={displayMol.formula} mono />
                <Row label="Mol. Weight" value={`${displayMol.weight} g/mol`} />
                <Row label="Category" value={
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${CATEGORY_COLORS[displayMol.category] || ''}`}>
                    {displayMol.category}
                  </span>
                } />
                <Row label="Heavy Atoms" value={String(displayMol.heavyAtoms)} />
                <Row label="SMILES" value={displayMol.smiles} mono />
              </>
            )}
            {tab === 'custom' && customAtoms && (
              <>
                <Row label="SMILES" value={customSmiles} mono />
                <div className="pt-1">
                  <p className="text-xs text-muted-foreground mb-1.5">Detected atoms (heavy):</p>
                  <div className="flex flex-wrap gap-1.5">
                    {Object.entries(customAtoms).map(([el, n]) => (
                      <span key={el} className="rounded bg-muted px-2 py-0.5 text-xs font-mono font-medium">{el}: {n}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
            {tab === 'custom' && !customSmiles && (
              <p className="text-xs text-muted-foreground">Enter a SMILES string above to see properties.</p>
            )}
          </div>
        </div>

        {/* Bond & group info */}
        <div className="rounded-xl border bg-muted/20 p-4 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Bonds & Functional Groups</p>
          <div className="space-y-2 text-sm">
            {displayMol && (
              <>
                {displayMol.bonds.single > 0 && <Row label="Single bonds" value={String(displayMol.bonds.single)} />}
                {displayMol.bonds.double > 0 && <Row label="Double bonds" value={String(displayMol.bonds.double)} />}
                {displayMol.bonds.triple > 0 && <Row label="Triple bonds" value={String(displayMol.bonds.triple)} />}
                {displayMol.bonds.aromatic > 0 && <Row label="Aromatic bonds" value={String(displayMol.bonds.aromatic)} />}
                <div className="pt-1 border-t">
                  <div className="flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 mt-0.5 text-muted-foreground shrink-0" />
                    <p className="text-xs text-muted-foreground">{displayMol.description}</p>
                  </div>
                </div>
              </>
            )}
            {tab === 'custom' && customGroups && customGroups.length > 0 && (
              <div className="space-y-1.5">
                {customGroups.map(g => (
                  <div key={g} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-xs">{g}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === 'custom' && customGroups && customGroups.length === 0 && customSmiles && (
              <p className="text-xs text-muted-foreground">No common functional groups detected.</p>
            )}
            {tab === 'custom' && !customSmiles && (
              <p className="text-xs text-muted-foreground">Functional groups will appear here after you enter a SMILES string.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="text-muted-foreground shrink-0">{label}</span>
      <span className={`text-right font-medium break-all ${mono ? 'font-mono text-xs' : ''}`}>{value}</span>
    </div>
  )
}
