import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ROT13 Cipher Explained — What It Is, How It Works & Why It\'s Used',
  description: 'ROT13 cipher explained simply: what it is, how the shift-13 substitution works, why Reddit uses it for spoilers, and how to decode any ROT13 text instantly online.',
  keywords: [
    'ROT13 cipher explained',
    'what is ROT13',
    'ROT13 how it works',
    'ROT13 cipher',
    'ROT13 alphabet',
    'ROT13 example',
    'ROT13 history',
    'ROT13 uses',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'ROT13 Cipher Explained — What It Is, How It Works & Why It\'s Used',
    description: 'A complete plain-English explanation of the ROT13 cipher — the shift-13 substitution used for Reddit spoilers, Usenet, and puzzle hints.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/rot13-cipher-explained',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/rot13-cipher-explained' },
}

export default function Page() {
  return (
    <main className="flex-1 w-full">
      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            ROT13 Cipher Explained — What It Is, How It Works &amp; Why It&apos;s Used
          </h1>

          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            ROT13 is one of the most recognisable ciphers on the internet — if you&apos;ve ever seen scrambled text on Reddit under a spoiler warning, you&apos;ve already encountered it. This guide explains exactly what ROT13 is, how the substitution works, where it came from, and why it&apos;s still in use today. If you just need to decode something right now, jump straight to our free{' '}
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 decoder</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Is ROT13?</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 stands for <strong className="text-foreground">Rotate by 13</strong>. It is a simple letter substitution cipher that replaces each letter in a message with the letter that sits 13 positions later in the alphabet. When you reach the end of the alphabet, it wraps around — so the letter N (position 14) maps to A (position 1), and Z maps to M.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            In plain terms: every letter is swapped with its &quot;mirror&quot; letter on the other side of the alphabet. A↔N, B↔O, C↔P, and so on through Z↔M.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Only letters are transformed. Numbers, punctuation, spaces, and special characters pass through completely unchanged.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The ROT13 Alphabet Table</h2>
          <p className="text-base text-muted-foreground mb-4">
            Here is the complete mapping. Each letter in the top row becomes the letter directly below it:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <td className="py-2 pr-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-20">Plain</td>
                  {'ABCDEFGHIJKLM'.split('').map(c => (
                    <td key={c} className="text-center px-1.5 py-2 font-mono text-foreground font-bold">{c}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/40">
                  <td className="py-2 pr-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">ROT13</td>
                  {'NOPQRSTUVWXYZ'.split('').map(c => (
                    <td key={c} className="text-center px-1.5 py-2 font-mono text-green-600 font-bold">{c}</td>
                  ))}
                </tr>
              </tbody>
              <thead>
                <tr className="border-b border-border mt-2">
                  <td className="py-2 pr-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Plain</td>
                  {'NOPQRSTUVWXYZ'.split('').map(c => (
                    <td key={c} className="text-center px-1.5 py-2 font-mono text-foreground font-bold">{c}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">ROT13</td>
                  {'ABCDEFGHIJKLM'.split('').map(c => (
                    <td key={c} className="text-center px-1.5 py-2 font-mono text-green-600 font-bold">{c}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How ROT13 Works: A Step-by-Step Example</h2>
          <p className="text-base text-muted-foreground mb-4">
            Let&apos;s encode the word <strong className="text-foreground">HELLO</strong>:
          </p>
          <ul className="list-none space-y-2 mb-4 pl-4 border-l-2 border-border">
            <li className="text-base text-muted-foreground"><span className="font-mono text-foreground font-bold">H</span> → position 8, shift by 13 → position 21 → <span className="font-mono text-green-600 font-bold">U</span></li>
            <li className="text-base text-muted-foreground"><span className="font-mono text-foreground font-bold">E</span> → position 5, shift by 13 → position 18 → <span className="font-mono text-green-600 font-bold">R</span></li>
            <li className="text-base text-muted-foreground"><span className="font-mono text-foreground font-bold">L</span> → position 12, shift by 13 → position 25 → <span className="font-mono text-green-600 font-bold">Y</span></li>
            <li className="text-base text-muted-foreground"><span className="font-mono text-foreground font-bold">L</span> → position 12, shift by 13 → position 25 → <span className="font-mono text-green-600 font-bold">Y</span></li>
            <li className="text-base text-muted-foreground"><span className="font-mono text-foreground font-bold">O</span> → position 15, shift by 13 → position 28, wraps to 2 → <span className="font-mono text-green-600 font-bold">B</span></li>
          </ul>
          <p className="text-base text-muted-foreground mb-4">
            <strong className="text-foreground">HELLO</strong> → <strong className="text-green-600">URYYB</strong>
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Now apply ROT13 to <strong className="text-foreground">URYYB</strong> and you get <strong className="text-green-600">HELLO</strong> back. That is the key property that makes ROT13 unique.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Why ROT13 Is Self-Inverse (And Why That Matters)</h2>
          <p className="text-base text-muted-foreground mb-4">
            The English alphabet has exactly 26 letters, and 26 divided by 2 is 13. That means shifting by 13 twice lands you exactly back at the start. No other single shift value has this property.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Practically, this means there is no separate &quot;decode&quot; function — you apply ROT13 once to encode, and apply ROT13 again to decode. This simplicity made it popular in early internet communities where encoding and decoding had to be fast and require no shared key.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Where Did ROT13 Come From?</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 originated in the early 1980s on <strong className="text-foreground">Usenet</strong> — the precursor to modern internet forums. Users adopted it to hide punchlines in jokes, answers to riddles, and discussion of sensitive topics. Rather than inventing a new cipher, the community settled on ROT13 because it was trivially simple to implement in any programming language and required no key exchange.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            The practice migrated to Reddit, where entire communities (particularly book clubs, film discussion groups, and gaming subreddits) used ROT13 for spoiler protection before native spoiler tags were introduced. Old Reddit even had a built-in ROT13 button in the comment composer.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 is also a special case of the <strong className="text-foreground">Caesar cipher</strong> — one of the oldest known ciphers, used by Julius Caesar in the first century BC to encode military communications. Caesar typically used a shift of 3; ROT13 simply uses shift 13 for the self-inverse property. Learn more about the differences in our{' '}
            <Link href="/blog/rot13-vs-caesar-cipher" className="text-primary hover:underline">ROT13 vs Caesar cipher comparison</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common Uses of ROT13 Today</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Reddit Spoiler Tags</h3>
          <p className="text-base text-muted-foreground mb-4">
            Older Reddit communities still use ROT13 manually. A user writes a spoiler, encodes it with ROT13, and posts the scrambled text. Readers who want to see the spoiler copy it into a decoder. Native spoiler tags (&gt;!text!&lt;) have replaced this in most modern subreddits, but ROT13 remains common in older threads and certain communities.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Puzzle Hints and Escape Rooms</h3>
          <p className="text-base text-muted-foreground mb-4">
            Puzzle designers use ROT13 to hide hints or answers that players can optionally reveal. It is secure enough that a casual glance won&apos;t spoil the answer, but anyone who recognises it can decode it immediately.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Software and Programming</h3>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 appears in programming exercises, coding challenges, and test suites as a beginner-friendly string manipulation task. It is also used to obfuscate strings in source code — not for security, but to prevent casual readers from immediately reading hardcoded text. See our guide to{' '}
            <Link href="/blog/rot13-python" className="text-primary hover:underline">implementing ROT13 in Python</Link> for code examples.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Forum and Chat Culture</h3>
          <p className="text-base text-muted-foreground mb-4">
            Tech communities on Hacker News, Stack Overflow, and various IRC channels have historically used ROT13 as a low-stakes way to obfuscate content that might be off-topic, offensive, or simply a punchline that works better as a surprise.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Is ROT13 Secure?</h2>
          <p className="text-base text-muted-foreground mb-4">
            No — ROT13 provides <strong className="text-foreground">zero cryptographic security</strong>. Anyone who recognises the pattern of scrambled text can decode it in seconds, either mentally (with a little practice) or with any online tool. It is not suitable for hiding sensitive information, protecting passwords, or any real security use case.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Think of ROT13 as a &quot;polite cover&quot; rather than a lock. It is the digital equivalent of turning a piece of paper face-down — it stops casual readers, but anyone motivated can easily flip it over.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">ROT13 vs. Other Ciphers</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 belongs to a family of simple substitution ciphers that includes the Caesar cipher, Atbash cipher, and the broader monoalphabetic substitution class. What distinguishes ROT13 from most is the self-inverse property — with Caesar shift 3, for example, you need a separate &quot;decode by shifting back 3&quot; operation.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Explore our full collection of cipher tools: <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>, <Link href="/tools/atbash-cipher" className="text-primary hover:underline">Atbash Cipher</Link>, <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link>, and more in our <Link href="/tools" className="text-primary hover:underline">cipher tools library</Link>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Decode ROT13 Instantly</h2>
          <p className="text-base text-muted-foreground mb-4">
            The quickest way to decode ROT13 is to use our free{' '}
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder &amp; Encoder</Link>. Paste any encoded text and the decoded version appears immediately — no button to press, no sign-up, no ads. The tool also shows the complete alphabet table and character/word statistics.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            If you prefer to decode manually: find each letter in the table above and swap it with its pair. With practice, common short words become recognisable at a glance — <span className="font-mono text-green-600">gur</span> is <span className="font-mono text-foreground">the</span>, <span className="font-mono text-green-600">naq</span> is <span className="font-mono text-foreground">and</span>, <span className="font-mono text-green-600">vf</span> is <span className="font-mono text-foreground">is</span>.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Does ROT13 work on lowercase letters?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Yes. ROT13 applies to both uppercase and lowercase letters independently. An uppercase A becomes N; a lowercase a becomes n. Case is always preserved.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is ROT26?</h3>
          <p className="text-base text-muted-foreground mb-4">
            ROT26 shifts each letter by 26 positions, which brings it back to the original letter. ROT26 is therefore a no-op — it encodes a message as itself. This is occasionally used as a joke in programming communities.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can ROT13 be applied to numbers?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Standard ROT13 does not affect digits. However, a variant called ROT5 applies the same rotation logic to digits (0–9), shifting each digit by 5. Combining ROT13 for letters and ROT5 for digits gives ROT18, sometimes also called ROT13+5.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is ROT13 the same as Caesar 13?</h3>
          <p className="text-base text-muted-foreground mb-4">
            Yes — ROT13 is exactly a Caesar cipher with a shift of 13. The name ROT13 became standard in internet culture while &quot;Caesar cipher&quot; remains the term used in academic cryptography. See our full{' '}
            <Link href="/blog/rot13-vs-caesar-cipher" className="text-primary hover:underline">ROT13 vs Caesar cipher guide</Link> for a detailed comparison.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conclusion</h2>
          <p className="text-base text-muted-foreground mb-4">
            ROT13 is one of the simplest and most culturally embedded ciphers in internet history. Its self-inverse nature, trivial implementation, and zero key-management requirement made it the go-to obfuscation method for Usenet and early Reddit. While it offers no real security, it remains a useful tool for politely hiding spoilers, puzzle answers, and punchlines.
          </p>
          <p className="text-base text-muted-foreground mb-4">
            Ready to try it? Use our free{' '}
            <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder &amp; Encoder</Link> to encode or decode any text instantly.
          </p>
        </div>
      </article>
    </main>
  )
}
