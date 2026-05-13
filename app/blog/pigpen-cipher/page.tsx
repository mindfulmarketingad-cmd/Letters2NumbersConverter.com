import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/pigpen-cipher`
const PUBLISHED = '2026-05-13'

export const metadata: Metadata = {
  title: 'Pigpen Cipher — Complete Guide to the Masonic Cipher Alphabet',
  description: 'Learn what the Pigpen cipher is, how to encode and decode messages step by step, and see the full Pigpen alphabet. Includes the Masonic cipher, tic-tac-toe cipher variants, escape room tips, and FAQ.',
  keywords: [
    'pigpen cipher',
    'pigpen cipher decoder',
    'pigpen cipher alphabet',
    'how to decode pigpen cipher',
    'masonic cipher',
    'tic-tac-toe cipher',
    'pigpen cipher encoder',
    'pigpen cipher symbols',
    'rosicrucian cipher',
    'pigpen cipher escape room',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Pigpen Cipher — Complete Guide to the Masonic Cipher Alphabet',
    description: 'A full guide to the Pigpen cipher: the complete alphabet, step-by-step encoding and decoding, variants like the Rosicrucian cipher, and how it appears in escape rooms and puzzles.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Pigpen Cipher Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pigpen Cipher — Masonic Cipher Alphabet Explained',
    description: 'Full Pigpen cipher alphabet, step-by-step decoding guide, variants, and escape room tips.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Pigpen Cipher — Complete Guide to the Masonic Cipher Alphabet',
  description: 'A complete guide to the Pigpen cipher: how it works, the full letter-to-symbol alphabet, step-by-step encoding and decoding with worked examples, cipher variants, and use in escape rooms.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is the Pigpen cipher?',
    answer: 'The Pigpen cipher (also called the Masonic cipher or tic-tac-toe cipher) is a geometric substitution cipher that replaces each letter of the alphabet with a symbol based on its position in one of two grids — a tic-tac-toe grid and an X-shaped grid. Letters in the first set of 18 (A–R) use the plain grid shapes; letters in the last 8 (S–Z) use dotted versions of the same shapes.',
  },
  {
    question: 'How do I decode a Pigpen cipher?',
    answer: 'To decode a Pigpen cipher, match each symbol to its letter using the cipher key. Each symbol is the outline of the cell or segment that contains that letter in the grid. Symbols from the tic-tac-toe grid represent A–I (no dot) and J–R (with dot). Symbols from the X grid represent S–Z without and with dots. Look at the shape and whether it has a dot to identify the letter.',
  },
  {
    question: 'What is the Masonic cipher?',
    answer: 'The Masonic cipher is another name for the Pigpen cipher, so called because it was widely used by Freemasons in the 18th century to keep their records and correspondence private from non-members. Gravestones and lodge records in that era frequently used Pigpen cipher inscriptions.',
  },
  {
    question: 'What is the difference between the Pigpen cipher and the Rosicrucian cipher?',
    answer: 'The Rosicrucian cipher (also called the Rose Cross cipher) uses the same tic-tac-toe grid layout as the Pigpen cipher but organises the letters differently — it places two letters in each cell and uses a dot or no dot to distinguish them, covering all 26 letters across a smaller set of cells. The standard Pigpen cipher uses two grids (tic-tac-toe and X), while the Rosicrucian variant only uses the tic-tac-toe grid with pairs.',
  },
  {
    question: 'Is the Pigpen cipher secure?',
    answer: 'No — the Pigpen cipher provides no real security. It is a simple monoalphabetic substitution cipher (each letter always maps to the same symbol), so it is trivially broken with frequency analysis. However, it is visually distinctive and ideal for puzzles, games, and escape rooms where obscurity, not security, is the goal.',
  },
  {
    question: 'Where is the Pigpen cipher used today?',
    answer: 'The Pigpen cipher appears frequently in escape rooms, treasure hunts, geocaching puzzles, and ARGs (alternate reality games) because its symbols look mysterious and are easy to incorporate into visual designs. It also appears in popular culture — Dan Brown\'s "The Lost Symbol" features Masonic codes, and the cipher appears in video games and tabletop RPGs.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'Pigpen Cipher', url: PAGE_URL },
])

// ── Pigpen alphabet data ───────────────────────────────────────────────────────

const pigpenAlphabet: { letter: string; grid: string; dot: boolean; description: string }[] = [
  { letter: 'A', grid: 'Tic-tac-toe', dot: false, description: 'Bottom-right corner (└ shape)' },
  { letter: 'B', grid: 'Tic-tac-toe', dot: false, description: 'Bottom edge — open top (⌐ + └ = U shape)' },
  { letter: 'C', grid: 'Tic-tac-toe', dot: false, description: 'Bottom-left corner (┘ shape)' },
  { letter: 'D', grid: 'Tic-tac-toe', dot: false, description: 'Right edge — open left (⊏ shape)' },
  { letter: 'E', grid: 'Tic-tac-toe', dot: false, description: 'Centre — four sides (□ shape)' },
  { letter: 'F', grid: 'Tic-tac-toe', dot: false, description: 'Left edge — open right (⊐ shape)' },
  { letter: 'G', grid: 'Tic-tac-toe', dot: false, description: 'Top-right corner (┌ shape)' },
  { letter: 'H', grid: 'Tic-tac-toe', dot: false, description: 'Top edge — open bottom (⌐ shape, Γ-like)' },
  { letter: 'I', grid: 'Tic-tac-toe', dot: false, description: 'Top-left corner (┐ shape)' },
  { letter: 'J', grid: 'Tic-tac-toe', dot: true,  description: 'Bottom-right corner with dot' },
  { letter: 'K', grid: 'Tic-tac-toe', dot: true,  description: 'Bottom edge — U shape with dot' },
  { letter: 'L', grid: 'Tic-tac-toe', dot: true,  description: 'Bottom-left corner with dot' },
  { letter: 'M', grid: 'Tic-tac-toe', dot: true,  description: 'Right edge with dot' },
  { letter: 'N', grid: 'Tic-tac-toe', dot: true,  description: 'Centre square with dot' },
  { letter: 'O', grid: 'Tic-tac-toe', dot: true,  description: 'Left edge with dot' },
  { letter: 'P', grid: 'Tic-tac-toe', dot: true,  description: 'Top-right corner with dot' },
  { letter: 'Q', grid: 'Tic-tac-toe', dot: true,  description: 'Top edge with dot' },
  { letter: 'R', grid: 'Tic-tac-toe', dot: true,  description: 'Top-left corner with dot' },
  { letter: 'S', grid: 'X grid',      dot: false, description: 'Bottom-right V shape (∨)' },
  { letter: 'T', grid: 'X grid',      dot: false, description: 'Bottom-left V shape (mirrored ∨)' },
  { letter: 'U', grid: 'X grid',      dot: false, description: 'Right-pointing V shape (>)' },
  { letter: 'V', grid: 'X grid',      dot: false, description: 'Left-pointing V shape (<)' },
  { letter: 'W', grid: 'X grid',      dot: true,  description: 'Bottom-right V shape with dot' },
  { letter: 'X', grid: 'X grid',      dot: true,  description: 'Bottom-left V shape with dot' },
  { letter: 'Y', grid: 'X grid',      dot: true,  description: 'Right-pointing V shape with dot' },
  { letter: 'Z', grid: 'X grid',      dot: true,  description: 'Left-pointing V shape with dot' },
]

// ── Worked example helpers ────────────────────────────────────────────────────

const exampleWord = 'SECRET'
const exampleEncoding: { letter: string; grid: string; dot: boolean; symbolDesc: string }[] = [
  { letter: 'S', grid: 'X grid',      dot: false, symbolDesc: 'Bottom-right V (∨)' },
  { letter: 'E', grid: 'Tic-tac-toe', dot: false, symbolDesc: 'Centre square (□)' },
  { letter: 'C', grid: 'Tic-tac-toe', dot: false, symbolDesc: 'Bottom-left corner (┘)' },
  { letter: 'R', grid: 'Tic-tac-toe', dot: true,  symbolDesc: 'Top-left corner with dot' },
  { letter: 'E', grid: 'Tic-tac-toe', dot: false, symbolDesc: 'Centre square (□)' },
  { letter: 'T', grid: 'X grid',      dot: false, symbolDesc: 'Bottom-left V (mirrored ∨)' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              Pigpen Cipher — Complete Guide to the Masonic Cipher Alphabet
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp; {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The <strong className="text-foreground">Pigpen cipher</strong> — also called the <strong className="text-foreground">Masonic cipher</strong> or <strong className="text-foreground">tic-tac-toe cipher</strong> — is one of the most visually distinctive secret codes ever devised. Instead of replacing letters with other letters or numbers, it replaces each letter with a geometric symbol derived from two simple grids. The result looks like alien hieroglyphs, yet anyone with the key can decode a message in minutes. This guide covers the complete Pigpen cipher alphabet, step-by-step encoding and decoding with a worked example, cipher variants, and practical tips for escape room designers. To identify an unknown cipher automatically, try our free{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link>.
            </p>

            {/* ── What is the Pigpen cipher ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Is the Pigpen Cipher?</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Pigpen cipher is a <strong className="text-foreground">geometric monoalphabetic substitution cipher</strong>. Each of the 26 letters is assigned a symbol that is the outline of the cell or region in which that letter sits in one of two reference grids. There are no numbers or letters in the output — only angular shapes — making it superficially hard to recognise as a cipher at all.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The cipher has existed in various forms since at least the 1530s, but it became famous through its adoption by <strong className="text-foreground">Freemasons</strong> in the 18th century. Masonic lodges used it to encode lodge records, minutes, and personal correspondence. Gravestones bearing Pigpen inscriptions can still be found today in older cemeteries across the United States and Europe. The cipher also appears in literature, most notably in Sir Arthur Conan Doyle&apos;s &ldquo;The Adventure of the Dancing Men&rdquo; (which uses a different symbol set) and Dan Brown&apos;s &ldquo;The Lost Symbol.&rdquo;
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Despite its exotic appearance, the Pigpen cipher offers <strong className="text-foreground">no cryptographic security</strong> by modern standards. Because each letter always maps to the same symbol, frequency analysis breaks it as easily as any other monoalphabetic substitution cipher. Its value is purely in obscurity and visual appeal — ideal for puzzles and games.
            </p>

            {/* ── The two grids ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Two Reference Grids</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Pigpen cipher is built from two grids. The first is a standard <strong className="text-foreground">tic-tac-toe (noughts-and-crosses) grid</strong> containing 9 cells. The second is an <strong className="text-foreground">X-shaped (diagonal cross) grid</strong> containing 4 regions. Letters A–I fill the tic-tac-toe grid without dots; letters J–R fill it again with a dot added to each symbol. Letters S–V fill the X grid without dots; W–Z fill it again with dots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Tic-tac-toe grid */}
              <div className="rounded-lg border border-border bg-secondary/20 p-4">
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Grid 1 — Tic-Tac-Toe (A–R)</h3>
                <pre className="font-mono text-foreground text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`
  G  |  H  |  I
     |     |
 ----+-----+----
  D  |  E  |  F
     |     |
 ----+-----+----
  A  |  B  |  C
     |     |

 (J–R = same grid + dot ·)
`.trim()}</pre>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Each letter&apos;s symbol = the lines surrounding its cell
                </p>
              </div>

              {/* X grid */}
              <div className="rounded-lg border border-border bg-secondary/20 p-4">
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Grid 2 — X Shape (S–Z)</h3>
                <pre className="font-mono text-foreground text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`
   T  \\ /  S
      X
   V  / \\  U

  (W–Z = same grid + dot ·)

  S = bottom-right  ∨
  T = bottom-left   ∨ (mirror)
  U = right-facing  >
  V = left-facing   <
`.trim()}</pre>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Each letter&apos;s symbol = the two lines of the X bordering its region
                </p>
              </div>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              The key insight: the <strong className="text-foreground">symbol for each letter is the outline of the segment that contains it</strong>. For the tic-tac-toe grid, that means a corner cell produces an L-shaped symbol (two lines), an edge cell produces a U-shaped symbol (three lines), and the centre cell produces a full square (four lines). For the X grid, each region is bounded by exactly two diagonal lines forming a V or chevron shape.
            </p>

            {/* ── Full alphabet table ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Full Pigpen Cipher Alphabet</h2>
            <p className="text-base text-muted-foreground mb-4">
              The table below shows every letter, which grid it comes from, whether a dot is present, and a description of the symbol. Use this as your <strong className="text-foreground">Pigpen cipher decoder key</strong>.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[480px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Letter', 'Grid', 'Dot?', 'Symbol Description'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {pigpenAlphabet.map(({ letter, grid, dot, description }) => (
                    <tr key={letter} className="hover:bg-secondary/20">
                      <td className="py-2 px-3 font-mono font-bold text-foreground text-base">{letter}</td>
                      <td className="py-2 px-3 text-muted-foreground text-xs">{grid}</td>
                      <td className="py-2 px-3 text-center">
                        {dot
                          ? <span className="text-yellow-400 font-bold">·</span>
                          : <span className="text-muted-foreground">—</span>}
                      </td>
                      <td className="py-2 px-3 text-muted-foreground text-xs font-mono">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Symbol shapes visual ── */}
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tic-Tac-Toe Grid Symbol Shapes (A–I)</h3>
            <p className="text-base text-muted-foreground mb-3">
              The nine symbols for letters A–I correspond to the nine cells of the tic-tac-toe grid. The symbol is the boundary lines of that cell:
            </p>
            <pre className="font-mono text-foreground text-xs leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-6">{`
 Cell positions and their boundary-line symbols:

 G (top-left)    H (top-center)  I (top-right)
   ┌─            ─┬─              ─┐
   │              │                │

 D (mid-left)    E (center)      F (mid-right)
   ├─            ─┼─              ─┤
   │              │                │

 A (bot-left)    B (bot-center)  C (bot-right)
   └─            ─┴─              ─┘
   (nothing       (nothing         (nothing
    below)         below)           below)

 Reading the shapes:
  A = └  (corner: bottom + right walls)
  B = ⌐└ (U-shape: left + bottom + right walls)
  C = ┘  (corner: bottom + left walls)
  D = ⊏  (3 walls: top + bottom + right)
  E = □  (all 4 walls — the square)
  F = ⊐  (3 walls: top + bottom + left)
  G = ┌  (corner: top + right walls)
  H = Γ  (3 walls: left + top + right — like ∩)
  I = ┐  (corner: top + left walls)

 J–R = same shapes as A–I but with a dot (·) inside
`.trim()}</pre>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">X Grid Symbol Shapes (S–V, then W–Z with dot)</h3>
            <pre className="font-mono text-foreground text-xs leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-6">{`
 The X grid creates 4 regions — each bounded by 2 diagonal lines:

         top
          /\\
    left /  \\ right
        /    \\
       / cent \\
      X--------X
       \\ cent /
        \\    /
    left \\  / right
          \\/
         bot

 Regions and their V-shaped symbols:
  S (bottom-right)  →  ∨  (opening faces up-right)
  T (bottom-left)   →  ∨  (mirror: opening faces up-left)
  U (right)         →  >  (opening faces left)
  V (left)          →  <  (opening faces right)

 W–Z = same as S–V respectively but with a dot (·) inside
`.trim()}</pre>

            {/* ── How to encode ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Encode a Message with the Pigpen Cipher</h2>
            <p className="text-base text-muted-foreground mb-4">
              Encoding is straightforward once you have the alphabet table memorised or in front of you:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong className="text-foreground">Write out your plaintext message</strong> in capital letters (spaces and punctuation are usually dropped or kept as-is).</li>
              <li><strong className="text-foreground">Locate each letter</strong> in the Pigpen alphabet table above.</li>
              <li><strong className="text-foreground">Draw (or write the description of) the corresponding symbol</strong> — the outline shape from the grid, plus a dot if the letter is in the J–R or W–Z range.</li>
              <li><strong className="text-foreground">Combine the symbols</strong> left to right to form the encoded message.</li>
            </ol>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Worked Example — Encoding &ldquo;{exampleWord}&rdquo;
            </h3>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[540px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Step', 'Letter', 'Grid', 'Dot?', 'Symbol Shape'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {exampleEncoding.map(({ letter, grid, dot, symbolDesc }, i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="py-2 px-3 text-muted-foreground font-mono text-sm">{i + 1}</td>
                      <td className="py-2 px-3 font-mono font-bold text-foreground text-lg">{letter}</td>
                      <td className="py-2 px-3 text-muted-foreground text-xs">{grid}</td>
                      <td className="py-2 px-3 text-center">
                        {dot
                          ? <span className="text-yellow-400 font-bold text-base">·</span>
                          : <span className="text-muted-foreground text-xs">no</span>}
                      </td>
                      <td className="py-2 px-3 text-muted-foreground text-xs font-mono">{symbolDesc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-6">
              To send the word <span className="font-mono text-foreground font-bold">SECRET</span>, you would draw six symbols in sequence: a bottom-right V shape (S), a full square (E), a bottom-left corner angle (C), a top-left corner angle with a dot inside (R), another full square (E), and a bottom-left V shape (T). Anyone holding the Pigpen key can immediately reverse the process to recover the original word.
            </p>

            {/* ── How to decode ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Decode a Pigpen Cipher Message</h2>
            <p className="text-base text-muted-foreground mb-4">
              Decoding reverses the process:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground mb-6">
              <li><strong className="text-foreground">Identify the shape type</strong> — is it made of straight lines (tic-tac-toe grid) or diagonal lines (X grid)?</li>
              <li><strong className="text-foreground">Count the lines in the symbol</strong> — 2 lines means a corner cell; 3 lines means an edge cell; 4 lines means the centre cell of the tic-tac-toe grid; 2 diagonal lines means the X grid.</li>
              <li><strong className="text-foreground">Determine orientation</strong> — which direction do the lines open toward? This tells you which of the 9 tic-tac-toe cells (or 4 X regions) the letter occupies.</li>
              <li><strong className="text-foreground">Check for a dot</strong> — no dot means the first set (A–I or S–V); a dot means the second set (J–R or W–Z).</li>
              <li><strong className="text-foreground">Look up the letter</strong> in the alphabet table and write it down. Repeat for each symbol.</li>
            </ol>

            <div className="rounded-lg border border-border bg-secondary/20 p-4 my-6">
              <h4 className="text-base font-semibold text-foreground mb-2">Quick Decode Shortcut</h4>
              <p className="text-sm text-muted-foreground">
                When decoding quickly, focus on two features: <strong className="text-foreground">(1) how many sides</strong> the symbol has (2 = corner, 3 = edge, 4 = centre), and <strong className="text-foreground">(2) which direction it opens</strong> (bottom-right, bottom, bottom-left, right, centre, left, top-right, top, top-left for the tic-tac-toe grid). Then dot or no dot cuts the alphabet in half. With practice, a trained eye can decode Pigpen at nearly reading speed.
              </p>
            </div>

            {/* ── Variants ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pigpen Cipher Variants</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rosicrucian Cipher (Rose Cross Cipher)</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">Rosicrucian cipher</strong> uses only the tic-tac-toe grid but places <em>two</em> letters in each of the 9 cells (covering all 18 letters) plus another grid for the remaining 8. A dot distinguishes the two letters in each cell. Some versions use a different arrangement of the alphabet in the grid. The result looks like Pigpen but decodes differently — making it a common source of confusion in puzzles. The Rosicrucian secret society, which inspired the cipher&apos;s name, flourished in the early 17th century.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Napoleon&apos;s Cipher</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Napoleon&apos;s cipher</strong> (sometimes called the Emperor&apos;s cipher) is a variation attributed to use by Napoleon&apos;s army. It uses a similar tic-tac-toe grid but rearranges the letters so that common letters like E, T, and A occupy the most easily drawn symbols (corners and edges). This made field encoding faster. The exact layout varies by source — if you encounter a &ldquo;Napoleon variant&rdquo; in a puzzle, the puzzle creator should provide the specific key.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Custom Pigpen Variants</h3>
            <p className="text-base text-muted-foreground mb-4">
              Because the Pigpen system is based on a simple geometric principle, puzzle designers frequently create custom variants by:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li>Reordering the letters in the grid (using a keyword to scramble the alphabet first)</li>
              <li>Using different grid shapes (hexagonal, circular, or triangular)</li>
              <li>Adding extra symbols for numbers or punctuation</li>
              <li>Rotating the entire grid 90°, 180°, or 270° to change symbol orientations</li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              If you encounter an unfamiliar symbol-based cipher, our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> can help you determine whether it is Pigpen, Rosicrucian, or another geometric cipher.
            </p>

            {/* ── Escape rooms ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pigpen Cipher in Escape Rooms and Puzzles</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Pigpen cipher is a <strong className="text-foreground">staple of escape room design</strong> for good reason. Its symbols look like an alien script on first glance — creating a satisfying moment of confusion before the solve — but it is learnable in under five minutes once a player has the key. Here is how it typically appears:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Physical props:</strong> symbols carved into a wooden block, embossed on a locket, or printed on an &ldquo;ancient&rdquo; map. The tic-tac-toe shapes look particularly convincing as architectural or alchemical engravings.</li>
              <li><strong className="text-foreground">Multi-step puzzles:</strong> the decoded Pigpen message reveals a combination, a location, or the next cipher to solve. Pairing Pigpen with a Caesar cipher or Atbash cipher creates satisfying two-step puzzles. Try our <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> and <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link> for those steps.</li>
              <li><strong className="text-foreground">UV or hidden ink reveals:</strong> Pigpen symbols written in UV-reactive ink are invisible until a blacklight is shone on them — a memorable reveal moment.</li>
              <li><strong className="text-foreground">Geocaching:</strong> Pigpen is popular in geocache puzzle hides. Coordinates are encoded and the solver must find or already know the cipher key. See our guide on <Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline">other classical ciphers</Link> for more geocaching cipher types.</li>
              <li><strong className="text-foreground">Embedded in artwork:</strong> symbols can be disguised as decorative borders, stained glass patterns, or tile work, requiring players to recognise the cipher before they can even start decoding.</li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              For cryptogram-style puzzles where the cipher type is unknown, our <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">Cryptogram Solver</Link> can assist once you have converted the symbols to letters.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Tips for Puzzle Solvers</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Situation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">What to Do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground text-xs">
                  {[
                    ['Symbols are clearly Pigpen but message makes no sense', 'Try rotating the entire key grid 90° — the creator may have rotated the standard orientation'],
                    ['Some symbols look like Pigpen but others do not', 'Check for a Rosicrucian or custom variant; look for a key printed somewhere in the puzzle'],
                    ['Message is the right length for a word but letters seem off', 'Try applying a Caesar shift (try +3 or −3) or Atbash to the decoded letters'],
                    ['You cannot find a standard key grid nearby', 'The tic-tac-toe + X grid layout is standard; print or sketch the key from this article'],
                    ['Symbol has three or more dots', 'This is likely not standard Pigpen — it may be a Morse code hybrid or the puzzle creator\'s invention'],
                  ].map(([situation, action]) => (
                    <tr key={situation} className="hover:bg-secondary/20">
                      <td className="py-2 px-3 text-foreground font-semibold align-top">{situation}</td>
                      <td className="py-2 px-3 align-top">{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Comparison table ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Pigpen Cipher vs. Other Classical Ciphers</h2>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Pigpen</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Caesar</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Atbash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 text-muted-foreground text-xs">
                  {[
                    ['Output type', 'Geometric symbols', 'Letters', 'Letters'],
                    ['Key required?', 'Grid layout (fixed)', 'Shift number (1–25)', 'None (Z→A fixed)'],
                    ['Recognisable as cipher?', 'Not to untrained eye', 'Yes — it is still letters', 'Yes — still letters'],
                    ['Crack by frequency analysis?', 'Yes (once symbols→letters)', 'Yes — trivially', 'Yes — trivially'],
                    ['Escape room popularity', 'Very high', 'High', 'Medium'],
                    ['Historical origin', '16th century, Masonic use 18c', 'Roman military, Julius Caesar', 'Hebrew scribes, ~600 BCE'],
                  ].map(([feature, pigpen, caesar, atbash]) => (
                    <tr key={feature} className="hover:bg-secondary/20">
                      <td className="py-2 px-3 font-semibold text-foreground">{feature}</td>
                      <td className="py-2 px-3">{pigpen}</td>
                      <td className="py-2 px-3">{caesar}</td>
                      <td className="py-2 px-3">{atbash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── FAQ ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the Pigpen cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Pigpen cipher is a geometric monoalphabetic substitution cipher that encodes each letter as the outline of the grid section containing it. It uses a tic-tac-toe grid (letters A–R) and an X-shaped grid (letters S–Z), with dots distinguishing the second half of each set. It is also called the Masonic cipher or tic-tac-toe cipher.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a Pigpen cipher message?</h3>
            <p className="text-base text-muted-foreground mb-4">
              To decode Pigpen cipher text, match each symbol to its letter using the alphabet key. Straight-line symbols come from the tic-tac-toe grid (A–R); diagonal V-shapes come from the X grid (S–Z). Count the lines to identify the cell position, note the orientation to distinguish the specific cell, and check for a dot to determine whether you are in the first or second half of each grid&apos;s letter set.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the Masonic cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Masonic cipher is another name for the Pigpen cipher, used historically by Freemasons to encode lodge records and correspondence. It gained the &ldquo;Masonic&rdquo; name because of its widespread adoption by lodges across Europe and North America in the 18th and 19th centuries. The cipher predates the Freemasons — earlier versions appear in 16th-century manuscripts — but Masonic use made it famous.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between the Pigpen cipher and the Rosicrucian cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Both use tic-tac-toe grid outlines, but the Rosicrucian cipher places two letters per cell (using a dot to tell them apart), while the standard Pigpen cipher places one letter per cell across two different grids. The layouts differ, so a message encoded with one cannot be decoded using the other&apos;s key. When a puzzle gives no specific variant, assume standard Pigpen.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is the Pigpen cipher secure?</h3>
            <p className="text-base text-muted-foreground mb-4">
              No. Like all monoalphabetic substitution ciphers, Pigpen is vulnerable to frequency analysis — E, T, and A remain the most common symbols in English text regardless of whether they are letters or geometric shapes. A skilled cryptanalyst can break it in minutes given a message of even moderate length. Use it for puzzles and games, not for protecting sensitive information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Where can I find a Pigpen cipher decoder tool?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The best approach for decoding Pigpen cipher is to use the alphabet table in this article to manually convert each symbol to a letter, then if needed apply a secondary cipher layer using our online tools. If you are not sure which cipher you are looking at, our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> can help narrow it down. For other cipher types that may accompany a Pigpen layer, try our <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">Cryptogram Solver</Link>.
            </p>

            {/* ── CTA ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Explore More Cipher Tools and Guides</h2>
            <p className="text-base text-muted-foreground mb-4">
              The Pigpen cipher is one entry in a rich world of classical cryptography. Explore these related tools and articles:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li><Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> — automatically detect which cipher was used</li>
              <li><Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> — brute-force all 25 shifts instantly</li>
              <li><Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link> — mirror-alphabet substitution used in Hebrew scriptures</li>
              <li><Link href="/tools/cryptogram-solver" className="text-primary hover:underline">Cryptogram Solver</Link> — solve monoalphabetic substitution ciphers with frequency hints</li>
              <li><Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline">Vigenère Cipher Decoder Guide</Link> — the polyalphabetic cipher that stumped cryptanalysts for 300 years</li>
            </ul>

          </div>
        </article>
      </main>
    </>
  )
}
