import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ROT13 in Python — 3 Ways to Encode and Decode (with Examples)',
  description: 'Learn 3 ways to implement ROT13 in Python: codecs.encode(), str.maketrans(), and a manual loop. Includes working code examples for Python 3. Or decode instantly with our free online tool.',
  keywords: [
    'ROT13 Python',
    'Python ROT13',
    'ROT13 in Python',
    'Python ROT13 decode',
    'codecs ROT13 Python',
    'Python cipher',
    'ROT13 implementation Python',
    'Python string rotation',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'ROT13 in Python — 3 Ways to Encode and Decode (with Examples)',
    description: '3 complete Python approaches to ROT13: the built-in codecs method, str.maketrans, and a manual loop. All code examples work in Python 3.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/rot13-python',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/rot13-python' },
}

function CodeBlock({ code, lang = 'python' }: { code: string; lang?: string }) {
  return (
    <div className="my-4 rounded-lg border border-border overflow-hidden">
      <div className="flex items-center justify-between px-3 py-1.5 bg-secondary/60 border-b border-border">
        <span className="text-xs text-muted-foreground font-mono">{lang}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm font-mono text-foreground bg-secondary/20 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default function Page() {
  return (
    <main className="flex-1 w-full">
      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            ROT13 in Python — 3 Ways to Encode and Decode
          </h1>

          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            ROT13 in Python is one of the most common beginner cipher exercises — and Python makes it unusually easy, with a built-in method that does the job in a single line. This guide shows you three different ways to implement ROT13 in Python 3, from the simplest one-liner to a fully manual implementation that teaches you how the cipher works. If you just need to decode something now without writing any code, use our free{' '}
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 decoder</Link>.
          </p>

                    <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#quick-recap-what-is-rot13" className="text-primary hover:underline">Quick Recap: What Is ROT13?</a></li>
            <li><a href="#method-1-the-built-in-codecs-module-one-line" className="text-primary hover:underline">Method 1: The Built-in codecs Module (One Line)</a></li>
            <li><a href="#method-2-strmaketrans-fast-and-explicit" className="text-primary hover:underline">Method 2: str.maketrans() — Fast and Explicit</a></li>
            <li><a href="#method-3-manual-loop-best-for-learning" className="text-primary hover:underline">Method 3: Manual Loop — Best for Learning</a></li>
            <li><a href="#generalising-to-a-caesar-cipher" className="text-primary hover:underline">Generalising to a Caesar Cipher</a></li>
            <li><a href="#rot13-from-the-command-line" className="text-primary hover:underline">ROT13 From the Command Line</a></li>
            <li><a href="#performance-comparison" className="text-primary hover:underline">Performance Comparison</a></li>
            <li><a href="#no-code-use-our-free-online-rot13-tool" className="text-primary hover:underline">No Code? Use Our Free Online ROT13 Tool</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
            </ol>
          </nav>

<h2 id="quick-recap-what-is-rot13" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Quick Recap: What Is ROT13?</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 replaces each letter with the letter 13 positions later in the alphabet. Because the alphabet has 26 letters, shifting by 13 twice returns to the start — making the same function work for both encoding and decoding. Only letters are affected; digits, punctuation, and spaces pass through unchanged. Full explanation: <Link href="/blog/rot13-cipher-explained" className="text-primary hover:underline">ROT13 cipher explained</Link>.
          </p>

          <h2 id="method-1-the-built-in-codecs-module-one-line" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Method 1: The Built-in <code className="text-green-600 text-xl">codecs</code> Module (One Line)</h2>
          <p className="text-base text-muted-foreground mb-4">
            Python&apos;s standard library includes a <code className="text-foreground font-mono">codecs</code> module with a <code className="text-foreground font-mono">rot_13</code> codec. This is the fastest way to apply ROT13 in Python 3:
          </p>

          <CodeBlock code={`import codecs

text = "Hello, World!"
encoded = codecs.encode(text, 'rot_13')
print(encoded)  # Uryyb, Jbeyq!

# Decoding is identical — ROT13 is self-inverse
decoded = codecs.encode(encoded, 'rot_13')
print(decoded)  # Hello, World!`} />

          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">When to use this:</strong> Whenever you just need ROT13 and don&apos;t want to write any implementation code. It handles both uppercase and lowercase correctly and passes non-letter characters through unchanged.
          </p>

          <div className="p-3 rounded-lg bg-secondary/40 border border-border text-sm text-muted-foreground mb-4">
            <strong className="text-foreground">Python 2 note:</strong> In Python 2, you could also write <code className="font-mono">&quot;text&quot;.encode(&apos;rot13&apos;)</code> directly on a string. This was removed in Python 3 — use <code className="font-mono">codecs.encode()</code> instead.
          </div>

          <h2 id="method-2-strmaketrans-fast-and-explicit" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Method 2: <code className="text-green-600 text-xl">str.maketrans()</code> — Fast and Explicit</h2>
          <p className="text-base text-muted-foreground mb-4">
            The <code className="text-foreground font-mono">str.maketrans()</code> and <code className="text-foreground font-mono">str.translate()</code> combination builds a character-by-character lookup table. It is slightly more explicit than the codecs approach and runs very fast on long strings:
          </p>

          <CodeBlock code={`import string

def rot13(text: str) -> str:
    upper = string.ascii_uppercase          # 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    lower = string.ascii_lowercase          # 'abcdefghijklmnopqrstuvwxyz'
    rot_upper = upper[13:] + upper[:13]     # 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    rot_lower = lower[13:] + lower[:13]     # 'nopqrstuvwxyzabcdefghijklm'
    table = str.maketrans(upper + lower, rot_upper + rot_lower)
    return text.translate(table)

print(rot13("Hello, World!"))   # Uryyb, Jbeyq!
print(rot13("Uryyb, Jbeyq!"))   # Hello, World!`} />

          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">How it works:</strong> <code className="font-mono text-foreground">str.maketrans()</code> creates a mapping from each character in the first argument to the corresponding character in the second. Calling <code className="font-mono text-foreground">.translate(table)</code> applies that mapping to every character in the string in a single pass — no loops needed.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">When to use this:</strong> When you want an explicit, readable implementation without importing <code className="font-mono text-foreground">codecs</code>, or when you need to process very large strings quickly.
          </p>

          <h2 id="method-3-manual-loop-best-for-learning" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Method 3: Manual Loop — Best for Learning</h2>
          <p className="text-base text-muted-foreground mb-4">
            Writing ROT13 with an explicit loop is the best approach for understanding what the cipher actually does. This version shows the exact arithmetic behind each letter shift:
          </p>

          <CodeBlock code={`def rot13(text: str) -> str:
    result = []
    for ch in text:
        if 'A' <= ch <= 'Z':
            # Shift uppercase letter by 13, wrap at 26
            result.append(chr((ord(ch) - ord('A') + 13) % 26 + ord('A')))
        elif 'a' <= ch <= 'z':
            # Shift lowercase letter by 13, wrap at 26
            result.append(chr((ord(ch) - ord('a') + 13) % 26 + ord('a')))
        else:
            # Non-letter: pass through unchanged
            result.append(ch)
    return ''.join(result)

print(rot13("The Quick Brown Fox"))  # Gur Dhvpx Oebja Sbk
print(rot13("Gur Dhvpx Oebja Sbk"))  # The Quick Brown Fox`} />

          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">Breaking down the math:</strong>
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-2">
            <li><code className="font-mono text-foreground">ord(ch) - ord(&apos;A&apos;)</code> converts the letter to a 0-based index (A=0, B=1, … Z=25)</li>
            <li><code className="font-mono text-foreground">+ 13</code> applies the ROT13 shift</li>
            <li><code className="font-mono text-foreground">% 26</code> wraps around — position 26 becomes 0 (A), position 27 becomes 1 (B), etc.</li>
            <li><code className="font-mono text-foreground">+ ord(&apos;A&apos;)</code> converts back to an ASCII character code</li>
            <li><code className="font-mono text-foreground">chr()</code> converts the code to the actual character</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">When to use this:</strong> When learning Python string manipulation, teaching cipher fundamentals, or when you want to understand and customise the shift amount (changing <code className="font-mono text-foreground">13</code> to any other value gives you a full{' '}
            <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar cipher</Link>).
          </p>

          <h2 id="generalising-to-a-caesar-cipher" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Generalising to a Caesar Cipher</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 is simply a Caesar cipher with a fixed shift of 13. You can turn Method 3 into a general Caesar cipher by making the shift a parameter:
          </p>

          <CodeBlock code={`def caesar(text: str, shift: int) -> str:
    result = []
    for ch in text:
        if 'A' <= ch <= 'Z':
            result.append(chr((ord(ch) - ord('A') + shift) % 26 + ord('A')))
        elif 'a' <= ch <= 'z':
            result.append(chr((ord(ch) - ord('a') + shift) % 26 + ord('a')))
        else:
            result.append(ch)
    return ''.join(result)

# ROT13 is caesar(text, 13)
print(caesar("Hello", 13))   # Uryyb
print(caesar("Hello", 3))    # Khoor  (classic Caesar)
print(caesar("Khoor", -3))   # Hello  (decode Caesar 3)`} />

          <h2 id="rot13-from-the-command-line" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">ROT13 From the Command Line</h2>
          <p className="text-base text-muted-foreground mb-4">
            Python also lets you run ROT13 directly in your terminal without writing a script:
          </p>

          <CodeBlock code={`# Encode/decode a string from the command line
echo "Hello, World!" | python3 -c "import codecs,sys; print(codecs.encode(sys.stdin.read().strip(), 'rot_13'))"
# Output: Uryyb, Jbeyq!`} lang="bash" />

          <h2 id="performance-comparison" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Performance Comparison</h2>
          <p className="text-base text-muted-foreground mb-4">
            For most use cases all three methods are fast enough. If you are processing very large volumes of text:
          </p>
          <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1">
            <li><strong className="text-foreground">Fastest:</strong> <code className="font-mono text-foreground">str.maketrans()</code> — C-level string translation</li>
            <li><strong className="text-foreground">Middle:</strong> <code className="font-mono text-foreground">codecs.encode()</code> — slightly more overhead from codec lookup</li>
            <li><strong className="text-foreground">Slowest:</strong> Manual loop — Python-level character iteration</li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            In practice the difference only matters for strings longer than a few megabytes.
          </p>

          <h2 id="no-code-use-our-free-online-rot13-tool" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">No Code? Use Our Free Online ROT13 Tool</h2>
          <p className="text-base text-muted-foreground mb-4">
            If you just need to decode a ROT13 message without writing Python, our free{' '}
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder &amp; Encoder</Link> does the job instantly in your browser — paste text, get the result, copy it. No sign-up, no ads, no uploads.
          </p>

          <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Does <code className="text-green-600">codecs.encode(text, &apos;rot_13&apos;)</code> work in Python 3?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Yes — this is the recommended way in Python 3. The string-level <code className="font-mono text-foreground">.encode(&apos;rot13&apos;)</code> method was removed in Python 3; <code className="font-mono text-foreground">codecs.encode()</code> is the replacement.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I ROT13 a file in Python?</h3>
          <CodeBlock code={`import codecs

with open('input.txt', 'r') as f:
    content = f.read()

rotated = codecs.encode(content, 'rot_13')

with open('output.txt', 'w') as f:
    f.write(rotated)`} />

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can I use ROT13 with bytes instead of strings?</h3>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 in Python&apos;s <code className="font-mono text-foreground">codecs</code> module works on str objects (Unicode text). For bytes, you would need to decode to a string first, apply ROT13, and re-encode.
          </p>

          <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Conclusion</h2>
          <p className="text-base text-muted-foreground mb-4">
            Python gives you at least three clean ways to implement ROT13: the one-line <code className="font-mono text-foreground">codecs.encode()</code> approach, the fast <code className="font-mono text-foreground">str.maketrans()</code> lookup table, and a manual character loop that makes the cipher arithmetic explicit. For most real use, Method 1 or Method 2 is the right choice. Use Method 3 when you want to understand or extend the logic — it is only one parameter change away from a full Caesar cipher.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            For related cipher tools, explore our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link>, <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>, and the rest of our <Link href="/tools" className="text-primary hover:underline">free cipher tools</Link>.
          </p>
        </div>
      </article>
    </main>
  )
}
