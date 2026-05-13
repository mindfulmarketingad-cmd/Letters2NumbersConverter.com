import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Crack a Caesar Cipher — Brute Force & Frequency Analysis',
  description: 'Two ways to crack any Caesar cipher: brute-force all 25 shifts and frequency analysis. Step-by-step guide with worked examples, English letter frequency chart, and a free online cracker tool.',
  keywords: [
    'how to crack Caesar cipher',
    'Caesar cipher brute force',
    'Caesar cipher frequency analysis',
    'break Caesar cipher',
    'crack Caesar cipher online',
    'Caesar cipher cryptanalysis',
    'decode unknown Caesar cipher',
    'Caesar cipher solver',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'How to Crack a Caesar Cipher — Brute Force & Frequency Analysis',
    description: 'Step-by-step guide to cracking any Caesar cipher using brute force (25 shifts) or frequency analysis. Includes worked examples and a free online solver.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/how-to-crack-caesar-cipher',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/how-to-crack-caesar-cipher' },
}

const EN_FREQ: [string, number][] = [
  ['E',12.7],['T',9.1],['A',8.2],['O',7.5],['I',7.0],['N',6.7],
  ['S',6.3],['H',6.1],['R',6.0],['D',4.3],['L',4.0],['C',2.8],
  ['U',2.8],['M',2.4],['W',2.4],['F',2.2],['G',2.0],['Y',2.0],
  ['P',1.9],['B',1.5],['V',1.0],['K',0.8],['J',0.2],['X',0.2],
  ['Q',0.1],['Z',0.1],
]

function encode(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, ch => {
    const base = ch <= 'Z' ? 65 : 97
    return String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26) + base)
  })
}

export default function Page() {
  const examplePlain = 'WHEN IN THE COURSE OF HUMAN EVENTS IT BECOMES NECESSARY'
  const exampleShift = 11
  const exampleCipher = encode(examplePlain, exampleShift)

  // Count letter frequencies in the ciphertext
  const cipherFreq: Record<string, number> = {}
  for (const ch of exampleCipher.replace(/[^A-Z]/g, '')) {
    cipherFreq[ch] = (cipherFreq[ch] || 0) + 1
  }
  const totalLetters = exampleCipher.replace(/[^A-Z]/g, '').length
  const sortedCipherFreq = Object.entries(cipherFreq)
    .map(([ch, n]) => [ch, Math.round(n / totalLetters * 100 * 10) / 10] as [string, number])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  return (
    <main className="flex-1 w-full">
      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            How to Crack a Caesar Cipher — Brute Force &amp; Frequency Analysis
          </h1>
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            The Caesar cipher has only 25 possible keys — making it one of the easiest classical ciphers to crack. This guide walks through both methods: <strong className="text-foreground">brute force</strong> (try all 25 shifts until one produces readable text) and <strong className="text-foreground">frequency analysis</strong> (use the statistical distribution of letters to identify the shift mathematically). Both methods work without any specialist tools, though our free{' '}
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> automates the entire process with a single click.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why the Caesar Cipher Is Easy to Crack</h2>
          <p className="text-base text-muted-foreground mb-4">
            Every Caesar cipher has a key space of exactly 25 (shifts 1 through 25 — shift 0 and shift 26 are the same as no shift). A human can read through 25 candidate decryptions in about two minutes. A computer can check all 25 in microseconds.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The 9th-century Arab mathematician Al-Kindi identified this weakness in his treatise on cryptanalysis, and the Caesar cipher has been considered broken — in the cryptographic sense — for over 1,000 years. It is taught today as an educational tool, not a security system.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Method 1: Brute Force — Try All 25 Shifts</h2>
          <p className="text-base text-muted-foreground mb-4">
            The simplest approach is to decode the ciphertext with every possible shift from 1 to 25 and look for the one that produces readable English.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step-by-Step: Brute Force</h3>
          <ol className="list-decimal list-inside text-base text-muted-foreground mb-4 space-y-3 pl-2">
            <li><strong className="text-foreground">Write down the ciphertext.</strong> You need the full encoded message.</li>
            <li><strong className="text-foreground">Attempt shift 1.</strong> Replace each letter with the letter 1 position earlier in the alphabet (A→Z, B→A, C→B, etc.). Does the result look like readable text?</li>
            <li><strong className="text-foreground">If not, try shift 2, shift 3, and so on.</strong> For most English text, the correct shift stands out immediately — the decrypted words will be recognisable.</li>
            <li><strong className="text-foreground">Stop when you find readable text.</strong> That shift is the key.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Worked Example: Brute Force</h3>
          <p className="text-base text-muted-foreground mb-2">Ciphertext (shift {exampleShift} applied):</p>
          <div className="p-3 rounded-lg bg-secondary/30 border border-border font-mono text-sm text-green-600 mb-4 break-all">
            {exampleCipher}
          </div>
          <p className="text-base text-muted-foreground mb-2">Trying a few shifts manually:</p>
          <div className="space-y-1.5 mb-4">
            {[1, 3, 7, 11, 13].map(s => (
              <div key={s} className={`flex gap-3 items-start p-2 rounded text-xs font-mono ${s === exampleShift ? 'bg-green-600/15 border border-green-600/30' : 'bg-secondary/20 border border-border'}`}>
                <span className={`font-bold w-16 flex-shrink-0 ${s === exampleShift ? 'text-green-600' : 'text-muted-foreground'}`}>
                  {s === exampleShift ? `★ Shift ${s}` : `Shift ${s}`}
                </span>
                <span className={s === exampleShift ? 'text-foreground' : 'text-muted-foreground'}>
                  {encode(exampleCipher, 26 - s).slice(0, 50)}…
                </span>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Shift {exampleShift} immediately produces recognisable English — the correct key is found. Our{' '}
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> does this automatically: click &quot;Show all 25 shifts&quot; and the correct decryption is ranked first.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Method 2: Frequency Analysis — The Mathematical Approach</h2>
          <p className="text-base text-muted-foreground mb-4">
            Frequency analysis works because letters in natural language do not appear with equal probability. In English, E appears in roughly 12.7% of all letters. T, A, O, I, and N are the next most frequent. Z, Q, X, and J appear rarely.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            When you apply a Caesar cipher, the relative frequencies shift along with the letters. The most common letter in the ciphertext is almost certainly the encoded version of E. Finding it tells you the shift directly.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">English Letter Frequency Chart</h3>
          <div className="my-4 space-y-1">
            {EN_FREQ.slice(0, 10).map(([letter, pct]) => (
              <div key={letter} className="flex items-center gap-2">
                <span className="font-mono text-foreground font-bold w-4">{letter}</span>
                <div className="flex-1 h-4 bg-secondary/40 rounded overflow-hidden">
                  <div
                    className="h-full bg-green-600/70 rounded"
                    style={{ width: `${(pct / 12.7) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground w-10 text-right">{pct}%</span>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-1">Top 10 letters shown. Full alphabet: E T A O I N S H R D L C U M W F G Y P B V K J X Q Z</p>
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step-by-Step: Frequency Analysis</h3>
          <ol className="list-decimal list-inside text-base text-muted-foreground mb-4 space-y-3 pl-2">
            <li><strong className="text-foreground">Count how often each letter appears in the ciphertext.</strong> Tally every A through Z.</li>
            <li><strong className="text-foreground">Find the most frequent letter.</strong> In a sufficiently long ciphertext (50+ letters), this is very likely the encoded E.</li>
            <li><strong className="text-foreground">Calculate the shift.</strong> If the most common ciphertext letter is P (position 15), and E is position 4, the shift is 15 − 4 = 11.</li>
            <li><strong className="text-foreground">Verify by decoding.</strong> Apply the reverse shift to the ciphertext and check whether it produces readable English.</li>
            <li><strong className="text-foreground">If it doesn&apos;t work, try the second-most-frequent letter.</strong> In short texts, the frequency distribution may not match the expected English pattern perfectly. Try assuming the top letter is T, A, O, or I instead.</li>
          </ol>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Worked Example: Frequency Analysis</h3>
          <p className="text-base text-muted-foreground mb-2">Using the same ciphertext (shift {exampleShift}):</p>
          <div className="p-3 rounded-lg bg-secondary/30 border border-border font-mono text-sm text-green-600 mb-4 break-all">
            {exampleCipher}
          </div>
          <p className="text-base text-muted-foreground mb-2">Top 6 most frequent letters in the ciphertext:</p>
          <div className="flex gap-2 flex-wrap mb-4">
            {sortedCipherFreq.map(([ch, pct], i) => (
              <div key={ch} className={`px-3 py-1.5 rounded-lg border text-sm font-mono font-bold ${i === 0 ? 'bg-green-600/15 border-green-600/30 text-green-600' : 'bg-secondary/40 border-border text-foreground'}`}>
                {ch} <span className="font-normal text-muted-foreground text-xs">{pct}%</span>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground mb-4">
            The most frequent letter is <strong className="text-foreground">{sortedCipherFreq[0][0]}</strong>. Assuming this encodes E (position 4):
          </p>
          <div className="p-3 rounded-lg bg-secondary/30 border border-border font-mono text-sm mb-4">
            <p className="text-muted-foreground">
              Shift = position({sortedCipherFreq[0][0]}) − position(E) = {sortedCipherFreq[0][0].charCodeAt(0) - 65} − 4 = {sortedCipherFreq[0][0].charCodeAt(0) - 65 - 4}
            </p>
            <p className="text-green-600 font-bold">→ Shift {exampleShift} confirmed ✓</p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Decoding with shift {exampleShift}: <span className="font-mono text-foreground font-bold">{examplePlain}</span>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Which Method Should You Use?</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-32">Situation</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Best method</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Why</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  ['Short text (< 30 letters)', 'Brute force', 'Frequency analysis is unreliable on small samples; brute force is fast to scan by eye'],
                  ['Long text (50+ letters)', 'Frequency analysis', 'Frequencies stabilise, giving a reliable shortcut to the correct shift'],
                  ['You have a computer', 'Brute force with scoring', 'A computer checks all 25 shifts instantly and ranks by English score — our tool does this'],
                  ['Puzzle with given hint', 'Brute force', 'Quicker to try likely shifts first (3, 13, 7, 17) than to count frequencies'],
                  ['Unknown language', 'Brute force', 'Frequency analysis depends on knowing the source language\'s letter distribution'],
                ].map(([sit, method, why]) => (
                  <tr key={sit as string}>
                    <td className="py-2 px-3 text-xs font-semibold text-foreground">{sit as string}</td>
                    <td className="py-2 px-3 text-xs text-green-600 font-medium">{method as string}</td>
                    <td className="py-2 px-3 text-xs text-muted-foreground">{why as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Crack Any Caesar Cipher Instantly — Free Online Tool</h2>
          <p className="text-base text-muted-foreground mb-4">
            Our <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> automates both methods:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li>Paste your ciphertext into the input box</li>
            <li>Click <strong className="text-foreground">&quot;Show all 25 shifts&quot;</strong> — every possible decryption appears simultaneously, ranked by English-language likelihood score</li>
            <li>The top result (marked with ★) is almost always the correct one</li>
            <li>Click the row to apply that shift, or copy the decoded text directly</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitations of Frequency Analysis on Caesar Ciphers</h2>
          <p className="text-base text-muted-foreground mb-4">
            Frequency analysis becomes unreliable when:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><strong className="text-foreground">The text is very short.</strong> A 10-letter ciphertext may not have a clear dominant letter, or the most frequent ciphertext letter may not encode E.</li>
            <li><strong className="text-foreground">The text is a proper noun, list, or unusual vocabulary.</strong> A message consisting of place names has a very different frequency distribution from normal prose.</li>
            <li><strong className="text-foreground">The text is a pangram or constrained writing.</strong> Some puzzle messages are deliberately constructed to have unusual letter distributions.</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            In all these cases, fall back to brute force — 25 shifts is a small enough space to check manually or with our tool.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Practice: Crack These Ciphertexts</h2>
          <p className="text-base text-muted-foreground mb-2">
            Try decoding these using our <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>. Use brute-force mode to find each shift.
          </p>
          <div className="space-y-3 my-4">
            {[
              { cipher: encode('THE ONLY WAY OUT IS THROUGH', 6), label: 'Puzzle 1' },
              { cipher: encode('FOLLOW THE WHITE RABBIT', 15), label: 'Puzzle 2' },
              { cipher: encode('KNOWLEDGE IS THE GREATEST WEAPON', 22), label: 'Puzzle 3' },
            ].map(({ cipher, label }) => (
              <div key={label} className="p-3 rounded-lg bg-secondary/40 border border-border">
                <p className="text-xs text-muted-foreground mb-1">{label}</p>
                <p className="font-mono text-sm text-green-600 break-all">{cipher}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Further Reading</h2>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><Link href="/blog/caesar-cipher-history" className="text-primary hover:underline">Caesar Cipher History</Link> — where the cipher came from and how it has been used</li>
            <li><Link href="/blog/caesar-cipher-examples" className="text-primary hover:underline">Caesar Cipher Examples</Link> — worked encoding and decoding for shifts 3, 7, 13, and 21</li>
            <li><Link href="/blog/caesar-cipher-shift-13" className="text-primary hover:underline">Caesar Cipher Shift 13</Link> — why shift 13 (ROT13) is the only self-inverse Caesar shift</li>
            <li><Link href="/blog/rot13-vs-caesar-cipher" className="text-primary hover:underline">ROT13 vs Caesar Cipher</Link> — detailed comparison of the two ciphers</li>
            <li><Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier Tool</Link> — not sure which cipher was used? This tool analyses the text automatically</li>
          </ul>
        </div>
      </article>
    </main>
  )
}
