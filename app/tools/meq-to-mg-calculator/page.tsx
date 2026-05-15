import { Metadata } from 'next'
import { MEqToMgCalculator } from '@/components/meq-to-mg-calculator'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/meq-to-mg-calculator`

const toolSchema = generateToolPageSchema(
  "mEq to mg Calculator",
  "Free mEq to mg calculator. Convert milliequivalents to milligrams (and mg to mEq) for potassium, sodium, calcium, magnesium, and more. Instant results with the formula shown.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "mEq to mg Calculator", url: PAGE_URL },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you convert mEq to mg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the formula: mg = mEq × (atomic weight ÷ valence). The result of (atomic weight ÷ valence) is called the equivalent weight. For potassium (K+, atomic weight 39.1, valence 1): 1 mEq = 39.1 mg. For calcium (Ca2+, atomic weight 40.08, valence 2): 1 mEq = 20.04 mg."
      }
    },
    {
      "@type": "Question",
      "name": "How many mg is 10 mEq of potassium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 mEq of potassium equals 391 mg. Potassium has an atomic weight of 39.1 and a valence of 1, so 1 mEq K = 39.1 mg. Therefore 10 mEq × 39.1 = 391 mg."
      }
    },
    {
      "@type": "Question",
      "name": "How many mg is 2 mEq of potassium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 mEq of potassium equals 78.2 mg. (2 × 39.1 mg/mEq = 78.2 mg)"
      }
    },
    {
      "@type": "Question",
      "name": "How many mg is 25 mEq of potassium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "25 mEq of potassium equals 977.5 mg (approximately 978 mg). (25 × 39.1 mg/mEq = 977.5 mg)"
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between mEq and mg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "mg (milligrams) measures mass. mEq (milliequivalents) measures the chemical combining capacity of an ion — it accounts for both the mass and the charge (valence) of the ion. For monovalent ions (valence 1) like sodium and potassium, 1 mEq equals the atomic weight in mg. For divalent ions (valence 2) like calcium and magnesium, 1 mEq equals half the atomic weight in mg."
      }
    },
    {
      "@type": "Question",
      "name": "How many mg is 1 mEq of potassium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1 mEq of potassium (K+) equals 39.1 mg. Potassium has an atomic weight of 39.1 g/mol and a valence of 1, so its equivalent weight is 39.1 mg/mEq."
      }
    },
    {
      "@type": "Question",
      "name": "How do you convert mg to mEq?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the formula: mEq = mg ÷ (atomic weight ÷ valence) = mg × (valence ÷ atomic weight). For potassium: mEq = mg ÷ 39.1. For calcium: mEq = mg ÷ 20.04. For sodium: mEq = mg ÷ 23."
      }
    },
  ]
}

export const metadata: Metadata = {
  title: { absolute: "mEq To mg Calculator" },
  description: 'Free mEq to mg calculator. Convert milliequivalents to milligrams for potassium, sodium, calcium, magnesium, and chloride. Includes the formula, reference tables, and bidirectional mg to mEq conversion.',
  keywords: [
    'meq to mg',
    'meq to mg calculator',
    'milliequivalents to mg',
    'mg to milliequivalents',
    'meq to mg converter',
    'meq to mg conversion',
    'convert mg to milliequivalents',
    'meq mg',
    'how many mg in a meq',
    'meq versus mg',
    '2 meq potassium to mg',
    '10 meq to mg',
    '25 meq potassium to mg',
    '2 meq to mg',
    'mg to meq potassium calculator',
    'convert meq to mg potassium',
    'milliequivalents to milligrams',
    'how many meq in mg',
  ],
  openGraph: {
    title: 'mEq to mg Calculator — Convert Milliequivalents to Milligrams',
    description: 'Convert mEq to mg (or mg to mEq) for potassium, sodium, calcium, magnesium, and more. Free, instant, with the formula shown.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'mEq to mg Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mEq to mg Calculator — Convert Milliequivalents to Milligrams',
    description: 'Free mEq to mg converter for potassium, sodium, calcium, magnesium. Includes formula and reference tables.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = getToolData('meq-to-mg-calculator')

// Electrolyte reference data
const electrolytes = [
  { name: 'Potassium (K⁺)', formula: 'K⁺', atomicWeight: 39.1, valence: 1, equivWeight: 39.1, common: true },
  { name: 'Sodium (Na⁺)', formula: 'Na⁺', atomicWeight: 22.99, valence: 1, equivWeight: 22.99, common: true },
  { name: 'Calcium (Ca²⁺)', formula: 'Ca²⁺', atomicWeight: 40.08, valence: 2, equivWeight: 20.04, common: true },
  { name: 'Magnesium (Mg²⁺)', formula: 'Mg²⁺', atomicWeight: 24.31, valence: 2, equivWeight: 12.16, common: true },
  { name: 'Chloride (Cl⁻)', formula: 'Cl⁻', atomicWeight: 35.45, valence: 1, equivWeight: 35.45, common: false },
  { name: 'Bicarbonate (HCO₃⁻)', formula: 'HCO₃⁻', atomicWeight: 61.02, valence: 1, equivWeight: 61.02, common: false },
  { name: 'Phosphate (HPO₄²⁻)', formula: 'HPO₄²⁻', atomicWeight: 96.0, valence: 2, equivWeight: 48.0, common: false },
]

// Potassium conversion table
const kTable = [1, 2, 5, 10, 20, 25, 40, 50, 100].map(meq => ({
  meq,
  mg: +(meq * 39.1).toFixed(1),
}))

export default function MEqToMgCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolPageWrapper toolSlug="meq-to-mg-calculator">
        <ToolLayout
          toolId="meq-to-mg-calculator"
          toolName="mEq to mg Calculator"
          toolDescription="Convert milliequivalents (mEq) to milligrams (mg) — and mg back to mEq — for potassium, sodium, calcium, magnesium, chloride, and more. Select the ion, enter the value, and get an instant result with the formula shown. Essential for medication dosing, electrolyte calculations, and pharmaceutical reference."
          toolComponent={<MEqToMgCalculator />}
          toolData={toolData}
        >

        {/* SEO content section */}
        <section className="bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

            {/* What is mEq */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">mEq vs mg — What&apos;s the Difference?</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">mg (milligrams)</strong> measures mass — how much of a substance there is by weight. <strong className="text-foreground">mEq (milliequivalents)</strong> measures chemical combining capacity — it accounts for both the mass and the ionic charge (valence) of the substance. This distinction matters enormously in medicine and pharmacy, where the physiological effect of an electrolyte depends on the number of charges it carries, not just its mass.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">mg (milligrams)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Measures mass</li>
                    <li>• Universal unit for any substance</li>
                    <li>• Does not reflect ionic charge</li>
                    <li>• Used in supplement labels, food nutrition</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">mEq (milliequivalents)</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Measures chemical equivalents (mass × charge)</li>
                    <li>• Ion-specific — different for each electrolyte</li>
                    <li>• Reflects physiological activity</li>
                    <li>• Used in IV solutions, electrolyte prescriptions</li>
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground">
                In clinical practice, electrolytes are often ordered in mEq (e.g., &quot;give 40 mEq potassium IV&quot;) because the unit reflects biological activity. Supplement labels often use mg. The <strong className="text-foreground">mEq to mg conversion</strong> bridges these two systems.
              </p>
            </div>

            {/* Formula */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">The mEq to mg Formula</h2>
              <p className="text-muted-foreground mb-4">
                The conversion between <strong className="text-foreground">milliequivalents and milligrams</strong> uses atomic weight and valence:
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-5 mb-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">mEq → mg</p>
                  <p className="font-mono text-foreground text-sm">mg = mEq × (atomic weight ÷ valence)</p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm font-semibold text-foreground mb-1">mg → mEq</p>
                  <p className="font-mono text-foreground text-sm">mEq = mg ÷ (atomic weight ÷ valence)</p>
                </div>
                <div className="border-t border-border pt-3">
                  <p className="text-sm font-semibold text-foreground mb-1">Equivalent weight (shorthand)</p>
                  <p className="font-mono text-foreground text-sm">Equivalent weight = atomic weight ÷ valence</p>
                  <p className="text-xs text-muted-foreground mt-1">1 mEq of any ion = its equivalent weight in mg</p>
                </div>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground mb-2">Example: 10 mEq potassium to mg</p>
                <p className="text-sm text-muted-foreground font-mono">Potassium: atomic weight = 39.1, valence = 1</p>
                <p className="text-sm text-muted-foreground font-mono">Equivalent weight = 39.1 ÷ 1 = 39.1 mg/mEq</p>
                <p className="text-sm text-muted-foreground font-mono">10 mEq × 39.1 = <strong className="text-foreground">391 mg</strong></p>
              </div>
            </div>

            {/* Reference table — electrolytes */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">mEq to mg Conversion — Electrolyte Reference Table</h2>
              <p className="text-muted-foreground mb-4">
                The table below shows the equivalent weight for each common electrolyte — that is, how many milligrams equal 1 mEq. Use it to convert any mEq value to mg by multiplying, or any mg value to mEq by dividing.
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Ion</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Atomic Weight</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Valence</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">1 mEq = X mg</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">1 mg = X mEq</th>
                    </tr>
                  </thead>
                  <tbody>
                    {electrolytes.map((e, i) => (
                      <tr key={e.formula} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                        <td className="border border-border px-3 py-2 font-medium text-foreground">{e.name}</td>
                        <td className="border border-border px-3 py-2 text-muted-foreground font-mono">{e.atomicWeight}</td>
                        <td className="border border-border px-3 py-2 text-muted-foreground font-mono">{e.valence}</td>
                        <td className="border border-border px-3 py-2 font-mono font-semibold text-foreground">{e.equivWeight} mg</td>
                        <td className="border border-border px-3 py-2 text-muted-foreground font-mono">{(1 / e.equivWeight).toFixed(4)} mEq</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground">Atomic weights sourced from IUPAC 2021 standard atomic weights. Values rounded to 2 decimal places.</p>
            </div>

            {/* Potassium table */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">mEq to mg Potassium — Quick Reference Table</h2>
              <p className="text-muted-foreground mb-4">
                Potassium is by far the most commonly looked-up electrolyte for <strong className="text-foreground">mEq to mg conversion</strong> — it&apos;s ordered in mEq in IV and oral supplementation but listed in mg on supplement labels. The table covers the most searched values: <strong className="text-foreground">2 mEq potassium to mg</strong>, <strong className="text-foreground">10 mEq to mg</strong>, and <strong className="text-foreground">25 mEq potassium to mg</strong>.
              </p>
              <div className="overflow-x-auto mb-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Potassium (mEq)</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Potassium (mg)</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Clinical context</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [1, 39.1, 'Single tablet reference'],
                      [2, 78.2, '2 mEq KCl tablet (common oral dose)'],
                      [5, 195.5, 'Small IV supplement'],
                      [10, 391, '10 mEq KCl — frequent oral supplement dose'],
                      [20, 782, 'Daily oral potassium supplement'],
                      [25, 977.5, '25 mEq — typical IV bag additive'],
                      [40, 1564, '40 mEq KCl — standard IV repletion bag'],
                      [50, 1955, 'High-dose IV potassium replacement'],
                      [100, 3910, 'Full daily dietary potassium reference'],
                    ].map(([meq, mg, note], i) => (
                      <tr key={meq as number} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                        <td className="border border-border px-3 py-2 font-mono font-semibold text-foreground">{meq} mEq</td>
                        <td className="border border-border px-3 py-2 font-mono font-semibold text-primary">{mg} mg</td>
                        <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground">Formula: mg = mEq × 39.1 (potassium equivalent weight). Values rounded to 1 decimal place.</p>
            </div>

            {/* Sodium and calcium quick refs */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">mEq to mg for Sodium, Calcium, and Magnesium</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    ion: 'Sodium (Na⁺)',
                    equivWeight: 22.99,
                    rows: [[1, 23.0], [10, 230], [20, 460], [40, 920], [154, 3540]],
                    note: '154 mEq/L is normal saline concentration',
                  },
                  {
                    ion: 'Calcium (Ca²⁺)',
                    equivWeight: 20.04,
                    rows: [[1, 20.0], [4.5, 90.2], [9, 180.4], [10, 200.4]],
                    note: 'Normal serum calcium ≈ 4.5–5.5 mEq/L',
                  },
                  {
                    ion: 'Magnesium (Mg²⁺)',
                    equivWeight: 12.16,
                    rows: [[1, 12.2], [2, 24.3], [4, 48.6], [8, 97.2]],
                    note: 'Normal serum magnesium ≈ 1.8–2.2 mEq/L',
                  },
                ].map(({ ion, equivWeight, rows, note }) => (
                  <div key={ion} className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-3 text-sm">{ion}</h3>
                    <p className="text-xs text-muted-foreground mb-2">1 mEq = {equivWeight} mg</p>
                    <table className="w-full text-xs border-collapse mb-2">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border px-2 py-1 text-left text-foreground">mEq</th>
                          <th className="border border-border px-2 py-1 text-left text-foreground">mg</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map(([meq, mg]) => (
                          <tr key={meq as number}>
                            <td className="border border-border px-2 py-1 font-mono text-muted-foreground">{meq}</td>
                            <td className="border border-border px-2 py-1 font-mono text-foreground font-semibold">{mg}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="text-xs text-muted-foreground italic">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* When to use mEq vs mg */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">When Is mEq Used vs mg?</h2>
              <div className="space-y-3">
                {[
                  ['IV solutions and electrolyte orders', 'Hospital pharmacies and physicians order electrolyte supplements in mEq because the unit reflects physiological equivalence. "40 mEq KCl in 1L NS" means 40 milliequivalents of potassium chloride — a clinically meaningful quantity.'],
                  ['Oral prescription medications', 'Prescription potassium tablets (e.g. KCl extended-release) are dosed in mEq. Over-the-counter potassium supplements are limited to 99 mg per tablet in the US, so the label typically shows mg.'],
                  ['Laboratory results and serum levels', 'Serum electrolyte panels report in mEq/L (or mmol/L for monovalent ions, which are numerically equal). Normal serum potassium is 3.5–5.0 mEq/L.'],
                  ['Food and supplement labels', 'Supplement labels and food nutrition panels use mg. A banana contains roughly 422 mg of potassium — about 10.8 mEq.'],
                  ['Pharmacy compounding and IV admixture', 'When compounding IV solutions, pharmacists work in mEq. Converting a physician\'s mEq order to mg (or vice versa) is one of the most common pharmaceutical calculations.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How do you convert mEq to mg?',
                    a: 'Multiply the mEq value by the ion\'s equivalent weight (atomic weight ÷ valence). For potassium: mg = mEq × 39.1. For sodium: mg = mEq × 23. For calcium: mg = mEq × 20.04. For magnesium: mg = mEq × 12.16.',
                  },
                  {
                    q: 'How many mg is 10 mEq of potassium?',
                    a: '10 mEq of potassium = 391 mg. (10 × 39.1 mg/mEq = 391 mg)',
                  },
                  {
                    q: 'How many mg is 2 mEq of potassium?',
                    a: '2 mEq of potassium = 78.2 mg. (2 × 39.1 = 78.2 mg)',
                  },
                  {
                    q: 'How many mg is 25 mEq of potassium?',
                    a: '25 mEq of potassium = 977.5 mg (approximately 978 mg). (25 × 39.1 = 977.5 mg)',
                  },
                  {
                    q: 'What is the difference between mEq and mg?',
                    a: 'mg measures mass. mEq (milliequivalents) measures chemical combining capacity — it accounts for both mass and ionic charge (valence). For monovalent ions (like Na⁺, K⁺), 1 mEq = atomic weight in mg. For divalent ions (Ca²⁺, Mg²⁺), 1 mEq = half the atomic weight in mg.',
                  },
                  {
                    q: 'How do you convert mg to mEq for potassium?',
                    a: 'Divide the mg value by 39.1 (potassium\'s equivalent weight). Example: 391 mg ÷ 39.1 = 10 mEq potassium.',
                  },
                ].map(({ q, a }, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground border-t border-border pt-4">
              <strong>Disclaimer:</strong> This calculator is provided for educational and reference purposes. Always verify medication calculations with a licensed pharmacist or healthcare provider before clinical use. Do not make medical decisions based solely on this tool.
            </p>

          </div>
        </section>
      </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
