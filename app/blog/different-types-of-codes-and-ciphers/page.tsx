import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Different Types of Codes and Ciphers' },
  description: 'Explore every major type of code and cipher with real working examples for each one — from Caesar and Atbash to AES and the One-Time Pad. Your guided tour starts here.',
  keywords: [
    'different types of codes and ciphers',
    'types of ciphers',
    'types of codes',
    'cipher examples',
    'code examples',
    'substitution cipher',
    'transposition cipher',
    'historical ciphers',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Different Types of Codes and Ciphers — With Examples',
    description: 'A guided tour through every major type of code and cipher, with a real working example for each one — from ancient Greek scytales to the algorithms protecting your bank account.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/different-types-of-codes-and-ciphers',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/different-types-of-codes-and-ciphers' },
}

// ── Helper functions ─────────────────────────────────────────────────────────

function caesarEncode(text: string, shift: number): string {
  return text.replace(/[A-Z]/g, ch => String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65))
}

function atbashEncode(text: string): string {
  return text.replace(/[A-Z]/g, ch => String.fromCharCode(90 - (ch.charCodeAt(0) - 65)))
}

function a1z26Encode(text: string): string {
  return text
    .split('')
    .filter(c => c !== ' ')
    .map(ch => String(ch.charCodeAt(0) - 64))
    .join('-')
}

// Vigenère encode helper
function vigenereEncode(text: string, key: string): string {
  let keyIndex = 0
  return text.replace(/[A-Z]/g, ch => {
    const shift = key.charCodeAt(keyIndex % key.length) - 65
    keyIndex++
    return String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65)
  })
}

// Precompute all demo values at module level so they render correctly at build time
const HELLO_WORLD = 'HELLO WORLD'
const HELLO = 'HELLO'

const caesarResult    = caesarEncode(HELLO_WORLD, 3)        // KHOOR ZRUOG
const rot13Result     = caesarEncode(HELLO_WORLD, 13)       // URYYB JBEYQ
const atbashResult    = atbashEncode(HELLO_WORLD)           // SVOOL DLIOW
const a1z26Hello      = a1z26Encode(HELLO)                  // 8-5-12-12-15
const a1z26World      = a1z26Encode('WORLD')                // 23-15-18-12-4
const vigenereResult  = vigenereEncode(HELLO_WORLD, 'LEMON') // SIXZB EYVLH — shown step-by-step below

// Baconian lookup
const baconianMap: Record<string, string> = {
  A:'AAAAA', B:'AAAAB', C:'AAABA', D:'AAABB', E:'AABAA',
  F:'AABAB', G:'AABBA', H:'AABBB', I:'ABAAA', J:'ABAAB',
  K:'ABABA', L:'ABABB', M:'ABAAB', N:'AABBA'/* N=01100 */,
  O:'ABBAA', P:'ABBAB', Q:'ABBBA', R:'BAAAA', S:'BAAAB',
  T:'BAABA', U:'BAABB', V:'BABAA', W:'BABAB', X:'BABBA',
  Y:'BABBB', Z:'BAAAA',
}
// Corrected full Baconian (26-letter, 5-bit where A=00000)
const BACONIAN: Record<string, string> = {
  A:'AAAAA', B:'AAAAB', C:'AAABA', D:'AAABB', E:'AABAA',
  F:'AABAB', G:'AABBA', H:'AABBB', I:'ABAAA', J:'ABAAB',
  K:'ABABA', L:'ABABB', M:'ABBAA', N:'ABBAB', O:'ABBBA',
  P:'ABBBB', Q:'BAAAA', R:'BAAAB', S:'BAABA', T:'BAABB',
  U:'BABAA', V:'BABAB', W:'BABBA', X:'BABBB', Y:'BAAAA', Z:'BAAAB',
}
// Use the corrected map
const baconHello = ['H','E','L','L','O'].map(c => BACONIAN[c]).join(' ')
// AABBB AABAA ABABB ABABB ABBBA

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">

      {/* ── Title ── */}
      <h1 className="text-3xl font-extrabold text-foreground mb-4 leading-tight">
        Different Types of Codes and Ciphers — A Complete Tour With Examples
      </h1>
      <p className="text-base text-muted-foreground mb-6">
        By <strong className="text-foreground">John Reed</strong> · Updated May 2026
      </p>

      {/* ── Table of Contents ── */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">In This Guide</p>
        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
          <li><a href="#substitution-ciphers" className="text-primary hover:underline">Substitution Ciphers: Letters Become Other Letters</a></li>
          <li><a href="#transposition-ciphers" className="text-primary hover:underline">Transposition Ciphers: Letters Get Rearranged</a></li>
          <li><a href="#number-codes" className="text-primary hover:underline">Number-Based Codes</a></li>
          <li><a href="#book-key-codes" className="text-primary hover:underline">Book and Key-Based Codes</a></li>
          <li><a href="#visual-symbol-codes" className="text-primary hover:underline">Visual and Symbol Codes</a></li>
          <li><a href="#modern-encryption" className="text-primary hover:underline">Modern Encryption (Brief Overview)</a></li>
          <li><a href="#choosing-the-right-cipher" className="text-primary hover:underline">Choosing the Right Cipher for Your Purpose</a></li>
          <li><a href="#identify-unknown-cipher" className="text-primary hover:underline">How to Identify an Unknown Cipher</a></li>
          <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
        </ol>
      </nav>

      {/* ── Intro ── */}
      <p className="text-base text-muted-foreground mb-4">
        There are dozens of different types of codes and ciphers — from the ancient Spartan scytale to the
        algorithms protecting your bank account right now. This guide is a tour through all of them, with a
        real working example for each one so you can see <em>exactly</em> how they transform information.
        Whether you&apos;re solving a puzzle, writing a story, or just deeply curious about how secrets work —
        you&apos;re in the right place.
      </p>
      <p className="text-base text-muted-foreground mb-4">
        Before we dive in, one quick distinction worth keeping in mind: a <strong className="text-foreground">code</strong> operates
        at the word or phrase level (replacing whole words with other words or symbols), while
        a <strong className="text-foreground">cipher</strong> operates at the letter level (scrambling or substituting individual letters).
        In everyday conversation people use the words interchangeably, and that&apos;s fine — what really matters
        is understanding how each system works. Let&apos;s go.
      </p>

      {/* ══════════════════════════════════════════════════
          SECTION 1 — SUBSTITUTION CIPHERS
      ══════════════════════════════════════════════════ */}
      <h2
        id="substitution-ciphers"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 1 — Substitution Ciphers: Letters Become Other Letters
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Substitution ciphers are the most intuitive family of ciphers. Every letter in your message is
        swapped for a different letter (or symbol) according to a fixed rule or key. The message length
        stays the same; only the identity of each character changes. There are many fascinating variants,
        each with its own quirks, history, and level of security.
      </p>

      {/* 1. Caesar */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Caesar Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Julius Caesar used this cipher around 58 BC to
          protect military communications. Every letter shifts the same fixed number of positions through
          the alphabet — Caesar himself favoured a shift of 3.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> A becomes D, B becomes E, Z wraps around
          to C, and so on. To decode you just shift back by the same amount.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">Try it — HELLO WORLD with shift 3:</p>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO WORLD</span>
        </p>
        <p className="text-base text-muted-foreground mb-3">
          Encoded: <span className="font-mono text-green-600 font-bold">{caesarResult}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Security note:</strong> Only 25 possible keys exist. A determined
          child can break it in minutes. Don&apos;t use it for anything important — but it&apos;s perfect for
          beginner puzzles and treasure hunts.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">
            Try the Caesar Cipher Decoder →
          </Link>
        </p>
      </div>

      {/* 2. ROT13 */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. ROT13</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> ROT13 is a Caesar cipher with a shift of exactly
          13 — chosen because 13 is exactly half of 26, which gives it a magical property. It became famous
          on Usenet in the 1980s for hiding spoilers, and Reddit still uses it today.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO WORLD with ROT13:</p>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO WORLD</span>
        </p>
        <p className="text-base text-muted-foreground mb-3">
          Encoded: <span className="font-mono text-green-600 font-bold">{rot13Result}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          The magic trick: apply ROT13 <em>twice</em> and you get the original message back. Encoding and
          decoding are the exact same operation. There&apos;s no separate &ldquo;decode&rdquo; function.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/rot13-decoder" className="text-primary hover:underline">
            Try the ROT13 Decoder →
          </Link>
        </p>
      </div>

      {/* 3. Atbash */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Atbash Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Atbash is one of the oldest ciphers in existence —
          it appears in the Hebrew Bible. The name comes from the first, last, second, and second-to-last letters
          of the Hebrew alphabet (Aleph-Tav-Beth-Shin). The rule is simple: the alphabet is reversed. A↔Z, B↔Y,
          C↔X, and so on.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO WORLD encoded with Atbash:</p>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO WORLD</span>
        </p>
        <p className="text-base text-muted-foreground mb-3">
          Encoded: <span className="font-mono text-green-600 font-bold">{atbashResult}</span>
        </p>
        <p className="text-sm text-muted-foreground mb-2">
          In the Book of Jeremiah, the city of <strong className="text-foreground">BABYLON</strong> is encoded
          as <span className="font-mono text-green-600 font-bold">SHESHACH</span> using Atbash — one of the
          earliest documented uses of cryptography in literature.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">
            Try the Atbash Cipher Decoder →
          </Link>
        </p>
      </div>

      {/* 4. Vigenère */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Vigenère Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> First described by Giovan Battista Bellaso in
          1553, later misattributed to Blaise de Vigenère (who invented a related but different system). The
          French called it <em>le chiffre indéchiffrable</em> — the undecipherable cipher — for nearly 300
          years, until Charles Babbage and Friedrich Kasiski cracked it in the 19th century.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Instead of one fixed shift, you use a
          repeating keyword. Each letter of the keyword gives a different Caesar shift for the corresponding
          letter of your message.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">
          HELLO WORLD with keyword LEMON (step by step):
        </p>
        <div className="overflow-x-auto mb-3">
          <table className="text-sm font-mono w-full text-muted-foreground border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-2 py-1 text-foreground">Plaintext</th>
                <th className="px-2 py-1 text-foreground">H</th>
                <th className="px-2 py-1 text-foreground">E</th>
                <th className="px-2 py-1 text-foreground">L</th>
                <th className="px-2 py-1 text-foreground">L</th>
                <th className="px-2 py-1 text-foreground">O</th>
                <th className="px-2 py-1 text-foreground">W</th>
                <th className="px-2 py-1 text-foreground">O</th>
                <th className="px-2 py-1 text-foreground">R</th>
                <th className="px-2 py-1 text-foreground">L</th>
                <th className="px-2 py-1 text-foreground">D</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-2 py-1 text-foreground">Key letter</td>
                <td className="px-2 py-1">L</td>
                <td className="px-2 py-1">E</td>
                <td className="px-2 py-1">M</td>
                <td className="px-2 py-1">O</td>
                <td className="px-2 py-1">N</td>
                <td className="px-2 py-1">L</td>
                <td className="px-2 py-1">E</td>
                <td className="px-2 py-1">M</td>
                <td className="px-2 py-1">O</td>
                <td className="px-2 py-1">N</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-2 py-1 text-foreground">Shift</td>
                <td className="px-2 py-1">+11</td>
                <td className="px-2 py-1">+4</td>
                <td className="px-2 py-1">+12</td>
                <td className="px-2 py-1">+14</td>
                <td className="px-2 py-1">+13</td>
                <td className="px-2 py-1">+11</td>
                <td className="px-2 py-1">+4</td>
                <td className="px-2 py-1">+12</td>
                <td className="px-2 py-1">+14</td>
                <td className="px-2 py-1">+13</td>
              </tr>
              <tr>
                <td className="px-2 py-1 text-foreground">Ciphertext</td>
                <td className="px-2 py-1 text-green-600 font-bold">S</td>
                <td className="px-2 py-1 text-green-600 font-bold">I</td>
                <td className="px-2 py-1 text-green-600 font-bold">X</td>
                <td className="px-2 py-1 text-green-600 font-bold">Z</td>
                <td className="px-2 py-1 text-green-600 font-bold">B</td>
                <td className="px-2 py-1 text-green-600 font-bold">H</td>
                <td className="px-2 py-1 text-green-600 font-bold">S</td>
                <td className="px-2 py-1 text-green-600 font-bold">D</td>
                <td className="px-2 py-1 text-green-600 font-bold">Z</td>
                <td className="px-2 py-1 text-green-600 font-bold">Q</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO WORLD</span>
        </p>
        <p className="text-base text-muted-foreground">
          Encoded: <span className="font-mono text-green-600 font-bold">SIXZB HSDZQ</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          The repeating keyword means frequency analysis (the main tool for breaking Caesar ciphers) is
          foiled — the same letter encodes differently depending on where it falls in the keyword cycle.
          This is what made it so formidable for centuries.
        </p>
      </div>

      {/* 5. Playfair */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">5. Playfair Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Invented by Charles Wheatstone in 1854 but
          promoted by Lord Playfair (hence the name). It was used by the British in World War I and
          World War II and was the first practical digraph cipher — meaning it encodes <em>pairs</em> of
          letters, not individual letters.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">The grid:</strong> Write the keyword (removing duplicate letters)
          into a 5×5 grid, then fill in the remaining alphabet letters in order (I and J share one cell).
          Using the keyword <strong className="text-foreground">MONARCHY</strong>:
        </p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div>M  O  N  A  R</div>
          <div>C  H  Y  B  D</div>
          <div>E  F  G  I  K</div>
          <div>L  P  Q  S  T</div>
          <div>U  V  W  X  Z</div>
        </div>
        <p className="text-base text-muted-foreground mb-2">
          <strong className="text-foreground">The three rules:</strong>
        </p>
        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 mb-3 ml-2">
          <li><strong className="text-foreground">Same row:</strong> each letter shifts one step right (wraps around).</li>
          <li><strong className="text-foreground">Same column:</strong> each letter shifts one step down (wraps around).</li>
          <li><strong className="text-foreground">Rectangle:</strong> each letter swaps to the corner on the same row as itself but the same column as its partner.</li>
        </ol>
        <p className="text-sm text-muted-foreground">
          Example: the pair <strong className="text-foreground">HE</strong> — H is at row 2 col 2, E is at row 3
          col 1. They form a rectangle: H swaps to F (row 2 col 1), E swaps to G (row 3 col 2).
          So HE → <span className="font-mono text-green-600 font-bold">FG</span>.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">
            Try the Playfair Cipher Solver →
          </Link>
        </p>
      </div>

      {/* 6. A1Z26 */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">6. A1Z26 Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Modern and popular in puzzles, escape rooms,
          and children&apos;s codebreaking activities. Every letter is simply replaced by its position in the
          alphabet: A=1, B=2, C=3 … Z=26.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO WORLD encoded:</p>
        <p className="text-base text-muted-foreground mb-1">
          HELLO = <span className="font-mono text-green-600 font-bold">{a1z26Hello}</span>
        </p>
        <p className="text-base text-muted-foreground mb-3">
          WORLD = <span className="font-mono text-green-600 font-bold">{a1z26World}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          No key required, no lookup table needed — just count through the alphabet. That also means it&apos;s
          trivially easy to break, but it&apos;s enormously satisfying to solve by hand. Great for beginner
          puzzle designers.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/a1z26-translator" className="text-primary hover:underline">
            Try the A1Z26 Translator →
          </Link>
        </p>
      </div>

      {/* 7. Pigpen */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">7. Pigpen Cipher (Freemasons&apos; Cipher)</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Used by Freemasons since at least the 18th
          century to keep records private from non-members. Also called the Masonic cipher, the Tic-Tac-Toe
          cipher, and the Rosicrucian cipher depending on the variant. It&apos;s a geometric substitution cipher —
          each letter is replaced by the shape of the cell it sits in within a pair of grids.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Draw two 3×3 grids (like tic-tac-toe boards)
          and two X shapes. The first grid contains letters A–I, the second contains J–R, the first X contains
          S–V, and the second X contains W–Z. Each letter is represented by the shape of the segment of the
          grid or X that surrounds it — and whether the second set of grids gets a dot to distinguish it from
          the first.
        </p>
        <div className="font-mono text-xs bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div className="mb-1">Grid 1 (A–I):    Grid 2 (J–R, with dot):</div>
          <div>A│B│C          J·│K·│L·</div>
          <div>─┼─┼─          ──┼──┼──</div>
          <div>D│E│F          M·│N·│O·</div>
          <div>─┼─┼─          ──┼──┼──</div>
          <div>G│H│I          P·│Q·│R·</div>
        </div>
        <p className="text-sm text-muted-foreground">
          For example, the letter A is represented by an open corner shape (just the right angle of two lines
          enclosing the top-left of the first grid). The letter E is a complete box (four lines enclosing the
          centre cell). You literally draw the outline of the cell.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          This cipher shows up constantly in escape rooms, treasure hunts, and adventure stories — because it
          <em> looks</em> mysterious even before you crack it. The symbols feel like ancient runes.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/blog/pigpen-cipher" className="text-primary hover:underline">
            Full Pigpen Cipher Guide with Complete Alphabet →
          </Link>
        </p>
      </div>

      {/* 8. Baconian */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">8. Baconian Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Devised by Sir Francis Bacon in 1605. Each
          letter is replaced by a 5-character sequence of As and Bs — essentially a binary encoding using
          two symbols instead of 0s and 1s. This made it a powerful tool for <em>steganography</em>: you
          could hide a secret message inside an innocent piece of text by using two slightly different fonts,
          one representing A and one representing B.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">
          The Baconian alphabet (first 9 letters):
        </p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-foreground grid grid-cols-2 gap-x-6 gap-y-1">
          <span>A = AAAAA</span><span>B = AAAAB</span>
          <span>C = AAABA</span><span>D = AAABB</span>
          <span>E = AABAA</span><span>F = AABAB</span>
          <span>G = AABBA</span><span>H = AABBB</span>
          <span>I = ABAAA</span>
        </div>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO encoded:</p>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO</span>
        </p>
        <p className="text-base text-muted-foreground mb-3 break-all">
          Encoded: <span className="font-mono text-green-600 font-bold">{baconHello}</span>
        </p>
        <p className="text-sm text-muted-foreground">
          In steganographic use, you might write a completely normal-looking sentence but secretly encode a
          message by using <em>italic</em> for A and <em>normal weight</em> for B. The reader sees ordinary
          text; the intended recipient reads the hidden binary message underneath.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/baconian-cipher" className="text-primary hover:underline">
            Try the Baconian Cipher Tool →
          </Link>
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — TRANSPOSITION CIPHERS
      ══════════════════════════════════════════════════ */}
      <h2
        id="transposition-ciphers"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 2 — Transposition Ciphers: Letters Get Rearranged
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Transposition ciphers take a completely different approach. The letters in your message don&apos;t
        change — they&apos;re all still there, every single one of them. What changes is their <em>order</em>.
        The letters are rearranged according to a geometric pattern or a keyword-defined permutation. If
        you look at frequency analysis of a transposition cipher, it still shows the same letter distribution
        as English — because it&apos;s the same letters. What&apos;s missing is their sequence.
      </p>

      {/* 9. Rail Fence */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">9. Rail Fence Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Named for its resemblance to a zigzag rail
          fence. It was reportedly used during the American Civil War. You write the message in a zigzag
          pattern across a number of &ldquo;rails&rdquo; (rows), then read off each rail in order to produce
          the ciphertext.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">
          HELLOWORLD on 2 rails:
        </p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div>Rail 1: H . L . O . O . L .</div>
          <div>Rail 2: . E . L . W . R . D</div>
          <div className="mt-2 text-muted-foreground">Read rail 1: HLOOL</div>
          <div className="text-muted-foreground">Read rail 2: ELWRD</div>
          <div className="mt-1">Ciphertext: <span className="text-green-600 font-bold">HLOOLELWRD</span></div>
        </div>
        <p className="text-sm text-muted-foreground">
          To decode, figure out how many characters land on each rail, then lay them back into the zigzag
          pattern. The more rails you use, the more scrambled (and harder to recognise) the ciphertext becomes.
        </p>
      </div>

      {/* 10. Columnar Transposition */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">10. Columnar Transposition</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Used extensively in both World Wars — Germany
          employed it in WWI for field communications. The message is written in rows under a keyword, and
          columns are read out in the alphabetical order of the keyword letters.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">
          HELLO WORLD with keyword CARGO (column order: A=2, C=1, G=3, O=4, R=5):
        </p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div>Key:  C  A  R  G  O</div>
          <div>Ord:  2  1  5  3  4</div>
          <div>      ─  ─  ─  ─  ─</div>
          <div>      H  E  L  L  O</div>
          <div>      W  O  R  L  D</div>
          <div className="mt-2 text-muted-foreground">Read columns in key order (A=col2, C=col1, G=col4, O=col5, R=col3):</div>
          <div className="text-muted-foreground">A→col2: EO  |  C→col1: HW  |  G→col4: LL  |  O→col5: OD  |  R→col3: LR</div>
          <div className="mt-1">Ciphertext: <span className="text-green-600 font-bold">EOHWLLODLR</span></div>
        </div>
        <p className="text-sm text-muted-foreground">
          Columnar transposition can be layered — running the output through a second columnar transposition
          with a different key produces a &ldquo;double transposition&rdquo; that was extremely difficult to
          break in the pre-computer era.
        </p>
      </div>

      {/* 11. Scytale */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">11. Scytale (Ancient Sparta)</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> The scytale (pronounced <em>SKIT-uh-lee</em>)
          is possibly the world&apos;s oldest documented military cipher device, used by the ancient Spartans
          around the 7th century BC. It is essentially a transposition cipher implemented in hardware.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> A strip of leather or parchment is wound
          helically around a cylindrical staff (the scytale). The message is written lengthwise along the
          staff, one letter per turn of the strip. When the strip is unwound, the letters appear in scrambled
          order. The recipient winds the strip around a staff of the same diameter — and the message reappears.
        </p>
        <div className="font-mono text-xs bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div>Staff diameter = 4 columns:</div>
          <div className="mt-1">H E L L   ← row 1 written across staff</div>
          <div>O W O R   ← row 2</div>
          <div>L D _ _   ← row 3 (padded)</div>
          <div className="mt-2 text-muted-foreground">Strip reads: HELLOWORLDD__</div>
          <div className="text-muted-foreground">Unwound strip: H O L E W O L D L _ R _</div>
          <div className="mt-1">→ The key is literally the diameter of the stick.</div>
        </div>
        <p className="text-sm text-muted-foreground">
          It&apos;s a columnar transposition where the key is the diameter of the cylinder. What makes it
          remarkable historically is that it tied the cipher to a physical object — the first example of
          cryptographic hardware.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — NUMBER-BASED CODES
      ══════════════════════════════════════════════════ */}
      <h2
        id="number-codes"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 3 — Number-Based Codes
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Numbers make surprisingly flexible code elements. Some of the most iconic and widely-used communication
        systems in history are built on numeric substitution — from the dots and dashes of Morse code to the
        grid coordinates of the Polybius square.
      </p>

      {/* 12. Morse Code */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">12. Morse Code</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Developed by Samuel Morse and Alfred Vail in
          1837 for the electric telegraph. Strictly speaking, Morse code is a <em>code</em> rather than a
          cipher — it doesn&apos;t hide the message, it just converts it to a transmittable format. But it
          belongs on any tour of codes and ciphers because of its iconic status and elegant design.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          The letter assignments are based on frequency: the most common English letter E gets the shortest
          code (<code className="font-mono text-foreground bg-muted/50 px-1 rounded text-sm">·</code>), and
          T gets the second shortest (<code className="font-mono text-foreground bg-muted/50 px-1 rounded text-sm">—</code>).
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO in Morse:</p>
        <p className="text-base text-muted-foreground mb-1">
          Plain: <span className="font-mono text-foreground font-bold">HELLO</span>
        </p>
        <p className="text-base text-muted-foreground mb-3 break-all">
          Encoded: <span className="font-mono text-green-600 font-bold">.... . .-.. .-.. ---</span>
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          And the most famous code in existence — the distress signal:
        </p>
        <p className="text-sm text-muted-foreground">
          SOS: <span className="font-mono text-green-600 font-bold">... --- ...</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/morse-code-translator" className="text-primary hover:underline">
            Try the Morse Code Translator →
          </Link>
        </p>
      </div>

      {/* 13. NATO */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">13. NATO Phonetic Alphabet</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Standardised by ICAO (the International Civil
          Aviation Organization) in 1956 after testing many variants. Designed to ensure each letter&apos;s
          codeword would be understood clearly even through heavy radio static, foreign accents, and
          low-fidelity communication lines.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO spelled out:</p>
        <p className="text-base text-muted-foreground mb-3">
          <span className="font-mono text-green-600 font-bold">Hotel · Echo · Lima · Lima · Oscar</span>
        </p>
        <p className="text-sm text-muted-foreground">
          Used every day by pilots, air traffic controllers, military personnel, emergency dispatchers, and
          customer service agents reading out confirmation codes. Not a cipher — no one is trying to hide
          the message — but a beautifully engineered communication code.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/nato-phonetic-alphabet" className="text-primary hover:underline">
            Try the NATO Phonetic Alphabet Tool →
          </Link>
        </p>
      </div>

      {/* 14. Polybius Square */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">14. Polybius Square</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Created by the Greek historian Polybius in the
          2nd century BC. He proposed it as a way to transmit messages using fire signals — two groups of
          torches, one representing the row and one the column. Remarkably, this 2,200-year-old idea is a
          direct ancestor of modern coordinate systems.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Place the alphabet into a 5×5 grid
          (I and J share a cell). Each letter is encoded as its row number followed by its column number.
        </p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-foreground leading-relaxed">
          <div className="mb-1">    1  2  3  4  5</div>
          <div>1:  A  B  C  D  E</div>
          <div>2:  F  G  H  I  J</div>
          <div>3:  K  L  M  N  O</div>
          <div>4:  P  Q  R  S  T</div>
          <div>5:  U  V  W  X  Y  (Z omitted or shares)</div>
        </div>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO encoded:</p>
        <p className="text-base text-muted-foreground mb-3">
          H=<span className="font-mono text-green-600 font-bold">23</span> · E=<span className="font-mono text-green-600 font-bold">15</span> · L=<span className="font-mono text-green-600 font-bold">32</span> · L=<span className="font-mono text-green-600 font-bold">32</span> · O=<span className="font-mono text-green-600 font-bold">35</span>
        </p>
        <p className="text-sm text-muted-foreground">
          The Polybius square is the foundation for more complex systems: the Nihilist cipher, the ADFGVX
          cipher (used by Germany in WWI), and the tap code used by American POWs in Vietnam to communicate
          through prison walls — two sets of taps for row and column.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — BOOK AND KEY CODES
      ══════════════════════════════════════════════════ */}
      <h2
        id="book-key-codes"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 4 — Book and Key-Based Codes
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        What if the key to your cipher isn&apos;t a short word but an entire book? Key-based codes shift the
        concept of &ldquo;the key&rdquo; into something that&apos;s both clever and surprisingly hard to break
        — provided the key book remains secret.
      </p>

      {/* 15. Book Cipher */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">15. Book Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> One of the most famous historical examples is
          Benedict Arnold&apos;s use of a book cipher during the American Revolution — he and his British
          handler used Blackstone&apos;s <em>Commentaries on the Laws of England</em> as their shared key.
          Spies have used book ciphers throughout history precisely because owning the key book looks
          completely innocent.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Both sender and receiver own the same
          edition of the same book. Each word in the message is replaced by a three-number reference:
          <code className="font-mono text-foreground bg-muted/50 px-1 rounded text-sm">(page : line : word)</code>.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          For example, if your shared book is a dictionary, the code{' '}
          <span className="font-mono text-green-600 font-bold">42:7:3</span> means &ldquo;the third word on
          the seventh line of page 42.&rdquo; An intercepted message looks like a list of numbers with no
          obvious meaning.
        </p>
        <p className="text-sm text-muted-foreground">
          The weakness: if the enemy identifies the book, every past and future message is compromised. And
          both parties must have identical editions (a slightly different printing might have different
          pagination). Still, it was remarkably effective for centuries before computers.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/book-cipher-decoder" className="text-primary hover:underline">
            Try the Book Cipher Decoder →
          </Link>
        </p>
      </div>

      {/* 16. Running Key */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">16. Running Key Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> A running key cipher operates exactly
          like the Vigenère cipher, but instead of a short repeating keyword, the key is a long passage
          of genuine text — typically a passage from a book, as long as the message itself. Because the
          key never repeats, the Kasiski examination (the standard technique for breaking Vigenère) is
          completely defeated.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          Example: to encode the message{' '}
          <span className="font-mono text-foreground font-bold">MEETATDAWN</span> you might use the first
          ten letters of the opening of a novel as your key:{' '}
          <span className="font-mono text-foreground font-bold">ITWASTHEBE</span> (from &ldquo;It was the best
          of times&rdquo;). Each message letter is shifted by the corresponding key letter, producing a
          unique ciphertext.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Weakness:</strong> Because the key is real English text, it has
          predictable statistical properties. An expert cryptanalyst can attack it probabilistically — trying
          all possible key passages from the candidate books. Claude Shannon showed that a running key cipher
          is not perfectly secure. Compare this to the One-Time Pad (see Section 6) where the key is truly
          random.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — VISUAL AND SYMBOL CODES
      ══════════════════════════════════════════════════ */}
      <h2
        id="visual-symbol-codes"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 5 — Visual and Symbol Codes
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Not all codes use letters or numbers. Some use flags, touch, or the binary language of machines.
        These systems are less about secrecy and more about solving the fundamental challenge of transmitting
        information reliably across different media or to different senses.
      </p>

      {/* 17. Semaphore */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">17. Semaphore</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Flag semaphore was developed in the early
          19th century and became the primary means of ship-to-ship and ship-to-shore communication in
          navies worldwide before radio. A person holds a flag in each hand and positions their arms at
          one of eight possible angles (45° apart) — the combination of both arms encodes a letter.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          Twenty-six letters, ten digits, and several control signals can be transmitted purely through
          body position. On a clear day a trained signaller can be read from miles away with a telescope.
        </p>
        <p className="text-sm text-muted-foreground">
          Semaphore is still taught to Boy Scouts and Naval Cadets worldwide — partly for practical
          emergencies when electronic communication fails, and partly because it&apos;s genuinely fascinating
          to watch a message travel at the speed of gesture.
        </p>
      </div>

      {/* 18. Braille */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">18. Braille</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Invented by Louis Braille in 1824, when he
          was just 15 years old. He adapted a French military system called &ldquo;night writing&rdquo; (designed
          so soldiers could read orders in the dark) into a practical tactile reading system for blind people.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Each character is encoded as a pattern
          of up to six raised dots arranged in a 2×3 grid (two columns, three rows). With 6 binary positions,
          there are 2⁶ = 64 possible combinations — more than enough for the alphabet, punctuation, and
          common shorthand contractions.
        </p>
        <p className="text-sm text-muted-foreground">
          Braille is technically a code (letter-for-symbol substitution) rather than a cipher — there&apos;s
          no intent to hide the message. But it&apos;s one of the most elegant encoding systems ever designed,
          and it transformed literacy access for hundreds of millions of people.
        </p>
      </div>

      {/* 19. Binary */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">19. Binary Code (ASCII)</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> Every piece of text you&apos;ve ever
          read on a screen — including this sentence — is stored and transmitted as binary numbers. The ASCII
          standard assigns each character a number from 0–127, which is then stored as a 7-bit binary value.
          Extended ASCII and Unicode handle international characters.
        </p>
        <p className="text-base text-muted-foreground mb-2 font-semibold">HELLO in binary (ASCII):</p>
        <div className="font-mono text-sm bg-background border border-border rounded-lg p-4 mb-3 text-green-600 font-bold break-all leading-relaxed">
          <div>H = 01001000</div>
          <div>E = 01000101</div>
          <div>L = 01001100</div>
          <div>L = 01001100</div>
          <div>O = 01001111</div>
        </div>
        <p className="text-sm text-muted-foreground">
          Binary appears frequently in puzzles and escape rooms — sometimes as a straightforward message,
          sometimes mixed with hexadecimal or other bases to add an extra decoding step.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/tools/ascii-decoder" className="text-primary hover:underline">
            Try the ASCII / Binary Decoder →
          </Link>
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — MODERN ENCRYPTION
      ══════════════════════════════════════════════════ */}
      <h2
        id="modern-encryption"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 6 — Modern Encryption (Brief Overview)
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Everything covered so far can be broken with patience, pencil, and paper. Modern encryption is a
        different world entirely — it&apos;s rooted in mathematics so deep that the world&apos;s fastest
        computers would take longer than the age of the universe to crack it by brute force. A brief tour:
      </p>

      {/* 20. AES */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">20. AES — Advanced Encryption Standard</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Adopted by NIST (the US National Institute of
          Standards and Technology) in 2001 after a five-year public competition. AES replaced the aging
          DES standard and became the global standard for symmetric encryption — used in HTTPS, file
          encryption, VPNs, Wi-Fi security, and banking systems.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> AES is a block cipher — it processes
          data in fixed 128-bit chunks, running each block through 10, 12, or 14 rounds of mathematical
          operations (substitution, permutation, mixing) depending on whether you&apos;re using a 128, 192,
          or 256-bit key. The same key is used for both encryption and decryption (symmetric).
        </p>
        <p className="text-sm text-muted-foreground">
          AES-256 is considered quantum-resistant at its key size — meaning even a future quantum computer
          would require 2¹²⁸ operations to break it, which remains computationally infeasible.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">
            Deep Dive: What Is 256-Bit AES Encryption? →
          </Link>
        </p>
      </div>

      {/* 21. RSA */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">21. RSA — Public Key Cryptography</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Invented in 1977 by Rivest, Shamir, and
          Adleman at MIT. RSA was the first practical implementation of public-key cryptography — a concept
          that seemed almost magical: two people who have never met, communicating over a public channel,
          can establish a private secret that an eavesdropper cannot determine.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> You generate two mathematically related
          keys — a public key (shared with everyone) and a private key (kept secret). Anyone can encrypt a
          message using your public key, but only you can decrypt it using your private key. The security
          rests on the mathematical difficulty of factoring the product of two very large prime numbers.
        </p>
        <p className="text-sm text-muted-foreground">
          RSA underpins TLS certificates (the padlock in your browser), SSH connections, PGP encrypted email,
          and digital signatures. It&apos;s the cipher that makes safe internet commerce possible.
        </p>
      </div>

      {/* 22. One-Time Pad */}
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">22. One-Time Pad — The Only Unbreakable Cipher</h3>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-4">
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">History:</strong> Patented by Gilbert Vernam in 1919 and later
          proven to be information-theoretically secure by Claude Shannon in 1949. The famous Moscow–Washington
          hotline used one-time pad encryption during the Cold War.
        </p>
        <p className="text-base text-muted-foreground mb-3">
          <strong className="text-foreground">How it works:</strong> The key is a string of truly random
          characters, exactly as long as the message, used only once. Each message character is XOR-ed with
          the corresponding key character. Because the key is completely random and never reused, there is
          zero statistical information for a cryptanalyst to exploit. Given any ciphertext, every possible
          plaintext is equally likely.
        </p>
        <p className="text-sm text-muted-foreground">
          The catch: securely distributing a key as long as your message, and ensuring it is truly random
          and never reused, is extremely difficult in practice. The cipher is perfect in theory but
          logistically challenging — which is why practical systems use AES and RSA instead.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <Link href="/blog/one-time-pad-cipher-example" className="text-primary hover:underline">
            One-Time Pad: A Worked Example →
          </Link>
        </p>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — CHOOSING THE RIGHT CIPHER
      ══════════════════════════════════════════════════ */}
      <h2
        id="choosing-the-right-cipher"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 7 — Choosing the Right Cipher for Your Purpose
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Different ciphers serve very different purposes. Here&apos;s a quick reference for matching your
        goal to the right type of code or cipher:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-muted/70 text-foreground">
              <th className="text-left px-3 py-2 border border-border">Purpose</th>
              <th className="text-left px-3 py-2 border border-border">Best Choice</th>
              <th className="text-left px-3 py-2 border border-border">Why</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="px-3 py-2 border border-border">Escape room puzzle</td>
              <td className="px-3 py-2 border border-border">Caesar or A1Z26</td>
              <td className="px-3 py-2 border border-border">Recognisable, solvable by hand, satisfying to crack</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="px-3 py-2 border border-border">Writing a story</td>
              <td className="px-3 py-2 border border-border">Pigpen or Vigenère</td>
              <td className="px-3 py-2 border border-border">Visually interesting; Vigenère feels historically authentic</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-border">Securing files</td>
              <td className="px-3 py-2 border border-border">AES-256</td>
              <td className="px-3 py-2 border border-border">Modern standard, unbreakable in practice</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="px-3 py-2 border border-border">Hiding a message in text</td>
              <td className="px-3 py-2 border border-border">Baconian cipher</td>
              <td className="px-3 py-2 border border-border">Steganographic — the message is invisible to casual readers</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-border">Fun with friends</td>
              <td className="px-3 py-2 border border-border">Morse code</td>
              <td className="px-3 py-2 border border-border">Iconic, learnable in an afternoon, great party trick</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="px-3 py-2 border border-border">Children&apos;s activity</td>
              <td className="px-3 py-2 border border-border">A1Z26</td>
              <td className="px-3 py-2 border border-border">No tools needed, teaches alphabet positions</td>
            </tr>
            <tr>
              <td className="px-3 py-2 border border-border">Theoretical security</td>
              <td className="px-3 py-2 border border-border">One-Time Pad</td>
              <td className="px-3 py-2 border border-border">Mathematically unbreakable — if the key is truly random and used only once</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ══════════════════════════════════════════════════
          SECTION 8 — IDENTIFYING UNKNOWN CIPHERS
      ══════════════════════════════════════════════════ */}
      <h2
        id="identify-unknown-cipher"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Section 8 — How to Identify an Unknown Cipher
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        Found a mystery message and not sure what kind of cipher it is? Use these clues to narrow it down
        quickly:
      </p>
      <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">All letters, message length unchanged:</strong> Almost
            certainly a substitution cipher (Caesar, Atbash, Vigenère, Playfair). Check letter frequency —
            if one letter appears far more often than others (especially around 13%), it&apos;s probably E
            or T, pointing to a Caesar-family cipher.
          </li>
          <li>
            <strong className="text-foreground">All letters, but frequency looks normal:</strong> Probably a
            transposition cipher — the letters are all still there in their original proportions, just
            rearranged. Look for anagram-like patterns.
          </li>
          <li>
            <strong className="text-foreground">Numbers separated by dashes or spaces:</strong> Try A1Z26
            first (1–26 range), then Polybius (two-digit numbers 11–55), then check if it could be ASCII
            decimal values (65–122).
          </li>
          <li>
            <strong className="text-foreground">Dots and dashes:</strong> Almost certainly Morse code.
            Decode it letter by letter using a Morse table.
          </li>
          <li>
            <strong className="text-foreground">Groups of A and B (or 0 and 1):</strong> Likely Baconian cipher
            or binary. Count the group size — 5 characters per group suggests Baconian (A=00000), 7 or 8
            bits per group suggests ASCII binary.
          </li>
          <li>
            <strong className="text-foreground">Strange geometric symbols:</strong> Probably Pigpen cipher.
            Look for shapes that resemble tic-tac-toe grid segments or X-shapes with or without dots.
          </li>
          <li>
            <strong className="text-foreground">Pairs of letters (digraphs), always even length:</strong> Could
            be Playfair — it always produces an even-length ciphertext and never contains a double-letter pair.
          </li>
          <li>
            <strong className="text-foreground">Words replaced by three-number groups:</strong> Book cipher.
            You&apos;ll need the source book to proceed.
          </li>
        </ul>
      </div>
      <p className="text-base text-muted-foreground mb-4">
        When in doubt, run the mystery text through our cipher identification tool:
      </p>
      <p className="text-base text-muted-foreground mb-4">
        <Link href="/tools/cipher-identifier" className="text-primary hover:underline">
          Try the Cipher Identifier Tool →
        </Link>
      </p>

      {/* ══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════ */}
      <h2
        id="faq"
        className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20"
      >
        Frequently Asked Questions
      </h2>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
        What is the difference between a code and a cipher?
      </h3>
      <p className="text-base text-muted-foreground mb-4">
        A <strong className="text-foreground">code</strong> replaces whole words or phrases with other words,
        symbols, or numbers (like &ldquo;Eagle has landed&rdquo; meaning a mission is complete). A{' '}
        <strong className="text-foreground">cipher</strong> works at the individual letter level, transforming
        the characters of a message according to an algorithm and key. In everyday usage people use the terms
        interchangeably, and that&apos;s fine — but in cryptography they refer to distinct concepts.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
        Which type of cipher is hardest to break?
      </h3>
      <p className="text-base text-muted-foreground mb-4">
        Among classical ciphers, the Vigenère cipher with a long random key is hardest (approaching the
        one-time pad). Among all ciphers ever devised, the{' '}
        <strong className="text-foreground">One-Time Pad</strong> is provably unbreakable — Claude Shannon
        demonstrated this mathematically in 1949. Among modern practical systems, AES-256 is considered
        computationally infeasible to break by any currently known method, including projected quantum
        computers.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
        What is the easiest cipher for beginners?
      </h3>
      <p className="text-base text-muted-foreground mb-4">
        The <strong className="text-foreground">Caesar cipher</strong> and the{' '}
        <strong className="text-foreground">A1Z26 cipher</strong> are the most beginner-friendly. Both can
        be encoded and decoded by hand in minutes with no tools. The Caesar cipher needs only counting, and
        A1Z26 needs only the knowledge that A=1 and Z=26. Both are excellent choices for puzzles aimed at
        children or newcomers to cryptography.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
        Are there ciphers that are also used for error correction or data transmission?
      </h3>
      <p className="text-base text-muted-foreground mb-4">
        Yes — Morse code and the NATO phonetic alphabet are examples of communication codes (not ciphers)
        designed specifically for reliable transmission over noisy channels. Modern digital communications
        use error-correcting codes (like Reed-Solomon, used on CDs and QR codes) that are mathematically
        related to cipher concepts but serve the opposite goal: making messages <em>more</em> readable even
        when partially corrupted.
      </p>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
        What is steganography and how does it differ from cryptography?
      </h3>
      <p className="text-base text-muted-foreground mb-4">
        <strong className="text-foreground">Cryptography</strong> hides the <em>meaning</em> of a message —
        the existence of the message is obvious but its content is protected. <strong className="text-foreground">Steganography</strong>{' '}
        hides the <em>existence</em> of the message entirely — the message is concealed inside something
        innocuous (an image, a piece of text, an audio file) so that a casual observer doesn&apos;t even
        know a secret message is there. The Baconian cipher is an early steganographic system: a secret message
        is hidden inside normal-looking text by using two different typefaces.
      </p>

      {/* ── Conclusion ── */}
      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
        Conclusion
      </h2>
      <p className="text-base text-muted-foreground mb-4">
        From a strip of leather wound around a Spartan staff to the elliptic-curve mathematics protecting
        your credit card number — the history of codes and ciphers is the history of human ingenuity under
        pressure. Every cipher on this list was, at the time of its invention, someone&apos;s best idea for
        keeping a secret. Some held for centuries; some were cracked in days.
      </p>
      <p className="text-base text-muted-foreground mb-4">
        What makes cryptography endlessly fascinating is that it sits at the intersection of mathematics,
        history, psychology, and language. It&apos;s not just about shuffling letters — it&apos;s about
        understanding what makes information hard to guess, and what makes human minds predictable enough
        to be exploited.
      </p>
      <p className="text-base text-muted-foreground mb-4">
        Whether you&apos;re here because you found a mystery cipher in an escape room, you&apos;re writing a
        thriller novel, or you just stumbled across the word &ldquo;Vigenère&rdquo; and fell down a rabbit hole
        — welcome. The world of codes and ciphers has more in it than most people ever suspect, and you&apos;ve
        now seen a good portion of the map.
      </p>
      <p className="text-base text-muted-foreground mb-6">
        Ready to start encoding? Visit our{' '}
        <Link href="/tools" className="text-primary hover:underline">tools page</Link> to find decoders and
        encoders for every cipher covered in this guide. Or jump straight to the most popular ones:
      </p>
      <ul className="list-disc list-inside space-y-2 text-base text-muted-foreground mb-8 ml-2">
        <li>
          <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>
        </li>
        <li>
          <Link href="/tools/a1z26-translator" className="text-primary hover:underline">A1Z26 Translator</Link>
        </li>
        <li>
          <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link>
        </li>
        <li>
          <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link>
        </li>
        <li>
          <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link>
        </li>
      </ul>
    </main>
  )
}
