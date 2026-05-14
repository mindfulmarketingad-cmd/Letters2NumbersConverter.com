import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Caesar Cipher Shift 13 — Why ROT13 Is Special',
  description: 'Caesar cipher shift 13 explained: why shift 13 is unique among all Caesar shifts, how it equals ROT13, the self-inverse property, and where you\'ll find it in everyday internet use.',
  keywords: [
    'Caesar cipher shift 13',
    'Caesar cipher 13',
    'shift 13 Caesar cipher',
    'ROT13 Caesar cipher',
    'Caesar cipher ROT13 same',
    'why is ROT13 shift 13',
    'self-inverse cipher',
    'Caesar cipher 13 positions',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Caesar Cipher Shift 13 — Why ROT13 Is Special',
    description: 'Why shift 13 is the only self-inverse Caesar cipher, how it became ROT13, and where you encounter it every day on the internet.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/caesar-cipher-shift-13',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/caesar-cipher-shift-13' },
}

function encode(text: string, shift: number): string {
  return text.replace(/[a-zA-Z]/g, ch => {
    const base = ch <= 'Z' ? 65 : 97
    return String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26) + base)
  })
}

export default function Page() {
  return (
    <main className="flex-1 w-full">
      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            Caesar Cipher Shift 13 — Why ROT13 Is Special
          </h1>
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            Among the 25 possible Caesar cipher shifts, one stands out as genuinely unique: <strong className="text-foreground">shift 13</strong>. It is the only shift value that makes encoding and decoding identical operations — the same action, applied twice, returns the original text. This is why shift 13 has its own name (ROT13) and its own place in internet culture. This guide explains why shift 13 is special, how the math works, and where you encounter it every day. To use it now: <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder (set shift to 13)</Link> or our dedicated <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Caesar Cipher: A Quick Recap</h2>
          <p className="text-base text-muted-foreground mb-4">
            A Caesar cipher replaces each letter with the letter N positions later in the alphabet. With shift 3 (the original Caesar), A→D, B→E, … Z→C. To decode, you reverse the shift — subtract N from each letter&apos;s position.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            For any shift other than 13, encoding and decoding are genuinely different operations. You need to know whether to add or subtract. Shift 13 breaks this rule — and the reason is pure arithmetic.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Shift 13 Is Self-Inverse: The Math</h2>
          <p className="text-base text-muted-foreground mb-4">
            The English alphabet has exactly 26 letters. When you shift by 13 twice, you shift by 26 in total. Shifting by 26 in a 26-letter alphabet is the same as shifting by 0 — you return exactly to the starting position.
          </p>
          <div className="p-4 rounded-lg bg-secondary/40 border border-border mb-4 font-mono text-sm">
            <p className="text-muted-foreground">shift(shift(position, 13), 13)</p>
            <p className="text-muted-foreground">= (position + 13 + 13) mod 26</p>
            <p className="text-muted-foreground">= (position + 26) mod 26</p>
            <p className="text-green-600 font-bold">= position mod 26 = position ✓</p>
          </div>
          <p className="text-base text-muted-foreground mb-4">
            This only works because 26 ÷ 2 = 13 exactly. If the alphabet had 25 letters, there would be no self-inverse shift (since 25 is odd). If it had 28 letters, shift 14 would be self-inverse. The 26-letter English alphabet makes shift 13 the unique halfway point.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Shift 13 in Action: The Alphabet Split</h2>
          <p className="text-base text-muted-foreground mb-4">
            With shift 13, the 26 letters split into 13 pairs. Every letter maps to its exact mirror on the other side of the alphabet:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
            {[['A','N'],['B','O'],['C','P'],['D','Q'],['E','R'],['F','S'],['G','T'],['H','U'],['I','V'],['J','W'],['K','X'],['L','Y'],['M','Z']].map(([a, b]) => (
              <div key={a} className="flex items-center justify-center gap-2 p-2 rounded-lg bg-secondary/30 border border-border text-sm font-mono">
                <span className="text-foreground font-bold">{a}</span>
                <span className="text-muted-foreground">↔</span>
                <span className="text-green-600 font-bold">{b}</span>
              </div>
            ))}
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Notice: each pair uses the same arrow (↔) rather than a one-way arrow. There is no &quot;source&quot; or &quot;destination&quot; — each letter is simultaneously both. This symmetry is what makes the operation self-inverse.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Comparing Shift 13 to Other Shifts</h2>
          <p className="text-base text-muted-foreground mb-4">
            To appreciate why shift 13 is special, compare it to a few others:
          </p>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Shift</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Encode A</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Decode step</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Self-inverse?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  [3, 'D', 'Shift back 3 (or forward 23)', '✗'],
                  [7, 'H', 'Shift back 7 (or forward 19)', '✗'],
                  [13, 'N', 'Apply shift 13 again', '✓ Only shift 13'],
                  [17, 'R', 'Shift back 17 (or forward 9)', '✗'],
                  [25, 'Z', 'Shift back 25 (or forward 1)', '✗'],
                ].map(([s, enc, dec, inv]) => (
                  <tr key={s} className={inv === '✓ Only shift 13' ? 'bg-green-600/8' : ''}>
                    <td className="py-2 px-3 font-bold text-foreground">{s}</td>
                    <td className="py-2 px-3 font-mono text-green-600">{enc as string}</td>
                    <td className="py-2 px-3 text-muted-foreground text-xs">{dec as string}</td>
                    <td className={`py-2 px-3 font-bold ${inv === '✓ Only shift 13' ? 'text-green-600' : 'text-muted-foreground'}`}>{inv as string}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">ROT13: The Name Shift 13 Earned</h2>
          <p className="text-base text-muted-foreground mb-4">
            Because shift 13 is uniquely self-inverse, it earned its own name in computing culture: <strong className="text-foreground">ROT13</strong> (Rotate by 13). When internet communities needed a way to hide spoilers and punchlines on Usenet in the 1980s, ROT13 was the obvious choice:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li>No shared key needed — everyone knows the shift is 13</li>
            <li>No separate decode function — apply ROT13 once to hide, once to reveal</li>
            <li>Trivially implementable in any programming language</li>
            <li>Produces clearly scrambled (but not random-looking) text that signals &quot;this is encoded&quot;</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            For the full story of ROT13&apos;s cultural history, read: <Link href="/blog/rot13-cipher-explained" className="text-primary hover:underline">ROT13 Cipher Explained</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Worked Examples: Shift 13 Encoding and Decoding</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Encoding</h3>
          <div className="space-y-2 mb-4">
            {[
              'Hello World',
              'The butler did it',
              'Spoiler: the hero dies',
            ].map(plain => (
              <div key={plain} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg bg-secondary/30 border border-border text-sm font-mono">
                <span className="text-foreground">{plain}</span>
                <span className="text-muted-foreground hidden sm:inline">→</span>
                <span className="text-green-600">{encode(plain, 13)}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding (same operation)</h3>
          <div className="space-y-2 mb-4">
            {[
              encode('Hello World', 13),
              encode('The butler did it', 13),
              encode('Spoiler: the hero dies', 13),
            ].map(cipher => (
              <div key={cipher} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-3 rounded-lg bg-secondary/30 border border-border text-sm font-mono">
                <span className="text-green-600">{cipher}</span>
                <span className="text-muted-foreground hidden sm:inline">→ (ROT13) →</span>
                <span className="text-foreground">{encode(cipher, 13)}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Where You Encounter Caesar Shift 13 Today</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Reddit and Forum Spoilers</h3>
          <p className="text-base text-muted-foreground mb-4">
            Older Reddit threads and communities that pre-date native spoiler tags used ROT13 (Caesar shift 13) to hide film, book, and game spoilers. The convention still appears in archived threads and some communities. Full guide: <Link href="/blog/rot13-reddit-decoder" className="text-primary hover:underline">How to Decode ROT13 on Reddit</Link>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Programming and Code</h3>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 is a classic programming exercise. Python includes it in the standard library (<code className="font-mono text-foreground">codecs.encode(text, &apos;rot_13&apos;)</code>), and it appears in introductory coding courses as a string manipulation task. See: <Link href="/blog/rot13-python" className="text-primary hover:underline">ROT13 in Python — 3 Implementation Methods</Link>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Puzzle Design</h3>
          <p className="text-base text-muted-foreground mb-4">
            Puzzle designers use Caesar shift 13 when they want a cipher that players can encode and decode with the same tool — removing one cognitive step for players who are already under time pressure. It is a popular choice in beginner-level escape room puzzles and cipher hunt challenges.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Obfuscation in Software</h3>
          <p className="text-base text-muted-foreground mb-4">
            Some developers use ROT13 to obfuscate strings in source code — for example, hardcoded configuration values or easter egg messages. It prevents immediate readability without adding real security, and can be quickly decoded by anyone who recognises it.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Does Shift 13 Exist in Other Alphabets?</h2>
          <p className="text-base text-muted-foreground mb-4">
            The self-inverse property of shift 13 depends on having exactly 26 characters. Other writing systems have different alphabet lengths:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><strong className="text-foreground">German (30 characters including ä, ö, ü, ß):</strong> Shift 15 would be self-inverse</li>
            <li><strong className="text-foreground">Russian Cyrillic (33 characters):</strong> No exact self-inverse shift (33 is odd)</li>
            <li><strong className="text-foreground">Greek (24 characters):</strong> Shift 12 would be self-inverse</li>
            <li><strong className="text-foreground">ASCII printable (95 characters):</strong> No exact halfway point (95 is odd)</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            ROT13&apos;s elegance is partly an accident of English having exactly 26 letters — a coincidence that made the world&apos;s most widely-used alphabet uniquely suited to this cipher.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Try Caesar Shift 13 Now</h2>
          <p className="text-base text-muted-foreground mb-4">
            You can use either of our tools to apply Caesar shift 13:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder &amp; Encoder</Link> — purpose-built for shift 13, with alphabet table</li>
            <li><Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> — set the slider to 13, or brute-force all shifts including 13</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            For examples with other shifts, see our <Link href="/blog/caesar-cipher-examples" className="text-primary hover:underline">Caesar cipher examples guide</Link>. For the full history of where the Caesar cipher came from, read <Link href="/blog/caesar-cipher-history" className="text-primary hover:underline">Caesar Cipher History</Link>.
          </p>
        </div>
      </article>
    </main>
  )
}
