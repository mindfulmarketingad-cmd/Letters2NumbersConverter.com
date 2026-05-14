import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Caesar Cipher Examples — Encode & Decode with Any Shift',
  description: 'Caesar cipher examples with step-by-step working for shifts 3, 7, 13, and more. Includes full alphabet tables, encode and decode walkthroughs, and a free online Caesar cipher tool.',
  keywords: [
    'Caesar cipher examples',
    'Caesar cipher example',
    'Caesar cipher shift 3 example',
    'Caesar cipher encode example',
    'Caesar cipher decode example',
    'Caesar cipher solved',
    'Caesar cipher with key',
    'Caesar cipher step by step',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Caesar Cipher Examples — Encode & Decode with Any Shift',
    description: 'Step-by-step Caesar cipher examples for shifts 3, 7, 13, and 21. See exactly how encoding and decoding works, with full alphabet tables for each shift.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/caesar-cipher-examples',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/caesar-cipher-examples' },
}

function ShiftTable({ shift }: { shift: number }) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const shifted = upper.map((_, i) => upper[(i + shift) % 26])
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-xs border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border">
            <td className="py-1.5 pr-2 text-muted-foreground font-semibold w-20">Plain</td>
            {upper.map(c => <td key={c} className="text-center px-1 py-1.5 font-mono text-foreground font-bold">{c}</td>)}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1.5 pr-2 text-muted-foreground font-semibold">Cipher</td>
            {shifted.map((c, i) => <td key={i} className="text-center px-1 py-1.5 font-mono text-green-600 font-bold">{c}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
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
            Caesar Cipher Examples — Encode &amp; Decode with Any Shift
          </h1>
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            The best way to understand the Caesar cipher is to work through real examples. This guide covers step-by-step encoding and decoding for the most commonly used shifts — 3 (the classical Caesar), 7, 13 (ROT13), and 21 — complete with full alphabet tables and worked letter-by-letter breakdowns. If you want to encode or decode text right now, use our free{' '}
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How the Caesar Cipher Works</h2>
          <p className="text-base text-muted-foreground mb-4">
            To encode a message, replace each letter with the letter a fixed number of positions later in the alphabet. When you reach Z, wrap back around to A. To decode, shift in the opposite direction by the same amount. The shift value is the cipher&apos;s key — both sender and recipient must know it.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The formula: <code className="font-mono text-foreground">encoded_position = (plain_position + shift) mod 26</code>, where positions run from 0 (A) to 25 (Z).
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Example 1: Caesar Cipher Shift 3 (The Classical Caesar)</h2>
          <p className="text-base text-muted-foreground mb-2">Shift 3 is the original cipher used by Julius Caesar for his military dispatches.</p>
          <ShiftTable shift={3} />

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Encoding &quot;HELLO WORLD&quot; with Shift 3</h3>
          <div className="space-y-1 pl-4 border-l-2 border-border mb-4">
            {['H','E','L','L','O','W','O','R','L','D'].map((ch, i) => {
              const pos = ch.charCodeAt(0) - 65
              const enc = String.fromCharCode(((pos + 3) % 26) + 65)
              return <p key={i} className="text-sm text-muted-foreground font-mono"><span className="text-foreground font-bold">{ch}</span> (pos {pos}) + 3 → pos {(pos+3)%26} → <span className="text-green-600 font-bold">{enc}</span></p>
            })}
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Result: <span className="font-mono text-foreground font-bold">HELLO WORLD</span> → <span className="font-mono text-green-600 font-bold">{encode('HELLO WORLD', 3)}</span>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding &quot;{encode('THE EAGLE HAS LANDED', 3)}&quot; with Shift 3</h3>
          <p className="text-base text-muted-foreground mb-2">To decode, shift back by 3 (or equivalently, shift forward by 23):</p>
          <p className="text-base text-muted-foreground mb-4">
            <span className="font-mono text-green-600 font-bold">{encode('THE EAGLE HAS LANDED', 3)}</span> → <span className="font-mono text-foreground font-bold">THE EAGLE HAS LANDED</span>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Example 2: Caesar Cipher Shift 7</h2>
          <p className="text-base text-muted-foreground mb-2">Shift 7 was historically used in puzzle design and is a common choice for escape room clues because it produces less recognisable patterns than shift 3.</p>
          <ShiftTable shift={7} />

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Encoding &quot;SECRET MESSAGE&quot; with Shift 7</h3>
          <p className="text-base text-muted-foreground mb-2">Letter-by-letter:</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 pl-4 border-l-2 border-border mb-4">
            {['S','E','C','R','E','T','M','E','S','S','A','G','E'].map((ch, i) => {
              const pos = ch.charCodeAt(0) - 65
              const enc = String.fromCharCode(((pos + 7) % 26) + 65)
              return <p key={i} className="text-sm text-muted-foreground font-mono"><span className="text-foreground font-bold">{ch}</span> → <span className="text-green-600 font-bold">{enc}</span></p>
            })}
          </div>
          <p className="text-base text-muted-foreground mb-4">
            Result: <span className="font-mono text-foreground font-bold">SECRET MESSAGE</span> → <span className="font-mono text-green-600 font-bold">{encode('SECRET MESSAGE', 7)}</span>
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decoding a Shift-7 Ciphertext</h3>
          <p className="text-base text-muted-foreground mb-4">
            <span className="font-mono text-green-600 font-bold">{encode('MEET AT DAWN', 7)}</span> decoded with shift 7 → <span className="font-mono text-foreground font-bold">MEET AT DAWN</span>
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Example 3: Caesar Cipher Shift 13 (ROT13)</h2>
          <p className="text-base text-muted-foreground mb-2">
            Shift 13 is special: because 13 × 2 = 26, encoding and decoding are identical operations. This is ROT13 — used for Reddit spoilers and Usenet posts. See our full guide: <Link href="/blog/caesar-cipher-shift-13" className="text-primary hover:underline">Caesar Cipher Shift 13 explained</Link>.
          </p>
          <ShiftTable shift={13} />

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Encoding &quot;SPOILER ALERT&quot; with Shift 13</h3>
          <p className="text-base text-muted-foreground mb-4">
            <span className="font-mono text-foreground font-bold">SPOILER ALERT</span> → <span className="font-mono text-green-600 font-bold">{encode('SPOILER ALERT', 13)}</span>
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Apply shift 13 again to decode: <span className="font-mono text-green-600 font-bold">{encode('SPOILER ALERT', 13)}</span> → <span className="font-mono text-foreground font-bold">SPOILER ALERT</span>. Same operation, same result.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Example 4: Caesar Cipher Shift 21 (Reverse Caesar)</h2>
          <p className="text-base text-muted-foreground mb-2">
            Shift 21 is equivalent to shifting backwards by 5 (since 26 − 21 = 5). It is sometimes called a &quot;reverse&quot; or &quot;negative 5&quot; Caesar, and appears in some puzzle books.
          </p>
          <ShiftTable shift={21} />

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Encoding &quot;FIND THE KEY&quot; with Shift 21</h3>
          <p className="text-base text-muted-foreground mb-4">
            <span className="font-mono text-foreground font-bold">FIND THE KEY</span> → <span className="font-mono text-green-600 font-bold">{encode('FIND THE KEY', 21)}</span>
          </p>
          <p className="text-base text-muted-foreground mb-4">
            To decode, shift forward by 5: <span className="font-mono text-green-600 font-bold">{encode('FIND THE KEY', 21)}</span> → <span className="font-mono text-foreground font-bold">FIND THE KEY</span>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Multi-Word Encoding Examples</h2>
          <p className="text-base text-muted-foreground mb-4">Spaces and punctuation pass through unchanged in all Caesar cipher variants.</p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Plain text</th>
                  <th className="text-center py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Shift</th>
                  <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Ciphertext</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  ['The quick brown fox', 3],
                  ['Attack at midnight', 13],
                  ['I love cryptography', 7],
                  ['Caesar was here', 21],
                  ['Escape room puzzle', 5],
                  ['Hidden message here', 17],
                ].map(([plain, s]) => (
                  <tr key={String(plain)}>
                    <td className="py-2 px-3 font-mono text-foreground text-xs">{String(plain)}</td>
                    <td className="py-2 px-3 text-center text-foreground font-bold">{s}</td>
                    <td className="py-2 px-3 font-mono text-green-600 text-xs">{encode(String(plain), Number(s))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Decode Without Knowing the Shift</h2>
          <p className="text-base text-muted-foreground mb-4">
            If you receive a Caesar-encoded message and don&apos;t know the shift, you have two options:
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Option 1: Brute Force (Try All 25 Shifts)</h3>
          <p className="text-base text-muted-foreground mb-4">
            There are only 25 possible Caesar shifts. Our{' '}
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> has a &quot;Show all 25 shifts&quot; mode that displays every possible decoded version simultaneously, ranked by English-language likelihood — the correct shift is almost always at the top.
          </p>
          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Option 2: Frequency Analysis</h3>
          <p className="text-base text-muted-foreground mb-4">
            In English text, E is the most common letter (~12.7% frequency), followed by T, A, O, I, N. Find the most frequent letter in the ciphertext — it is most likely E. The difference between its position and E&apos;s position (5) gives you the shift. For a full walkthrough, read our guide to <Link href="/blog/how-to-crack-caesar-cipher" className="text-primary hover:underline">cracking the Caesar cipher</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Practise With These Puzzles</h2>
          <p className="text-base text-muted-foreground mb-2">Can you decode these? Paste them into our <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link> and use brute-force mode to find the answers.</p>
          <div className="space-y-3 my-4">
            {[
              { cipher: encode('THE TREASURE IS BURIED UNDER THE OAK TREE', 11), hint: 'Shift 11' },
              { cipher: encode('KNOWLEDGE IS POWER', 19), hint: 'Shift 19' },
              { cipher: encode('TO BE OR NOT TO BE THAT IS THE QUESTION', 4), hint: 'Shift 4' },
            ].map(({ cipher, hint }, i) => (
              <div key={i} className="p-3 rounded-lg bg-secondary/40 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Puzzle {i + 1} <span className="ml-2 opacity-0 hover:opacity-100 transition-opacity text-xs">({hint})</span></p>
                <p className="font-mono text-sm text-green-600 break-all">{cipher}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the most common Caesar cipher shift?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Shift 3 is the most historically famous — it is what Julius Caesar himself used. In modern puzzle design, shifts of 13 (ROT13), 7, and 17 are also common choices.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can the Caesar cipher use letters as the key?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Sometimes the key is expressed as a letter rather than a number — the letter indicates how many positions to shift. For example, key &quot;D&quot; means shift 3 (D is the 4th letter, counting from A=0 or A=1 depending on convention). Always check which convention a puzzle uses.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Does the Caesar cipher work on lowercase letters?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Yes — our tool preserves case. Uppercase letters encode to uppercase; lowercase to lowercase. The shift arithmetic is the same in both cases.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Encode or Decode Any Caesar Cipher Now</h2>
          <p className="text-base text-muted-foreground mb-4">
            Our free <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder &amp; Encoder</Link> handles any shift from 1 to 25 — paste your text, drag the slider, and get the result instantly. The brute-force panel shows all 25 shifts at once, ranked by English likelihood, so you can crack any Caesar cipher even without knowing the key.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Related tools: <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder</Link> (Caesar shift 13) · <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> · <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">Cryptogram Solver</Link>
          </p>
        </div>
      </article>
    </main>
  )
}
