import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Frequency Analysis Substitution Cipher' },
  description: 'Learn how to use frequency analysis to crack a substitution cipher. Covers English letter frequencies, digraphs, trigraphs, and a complete step-by-step worked example of breaking a monoalphabetic cipher.',
  keywords: [
    'frequency analysis substitution cipher',
    'how to crack a substitution cipher',
    'frequency analysis cryptography',
    'monoalphabetic cipher frequency analysis',
    'letter frequency analysis',
    'cryptanalysis frequency analysis',
    'substitution cipher cracking',
    'English letter frequencies',
    'how to break a cipher',
    'Al-Kindi frequency analysis',
    'cipher frequency table',
    'cryptogram solver technique',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Frequency Analysis: How to Break a Substitution Cipher',
    description: 'Learn how to use frequency analysis to crack a substitution cipher step by step — including English letter frequency data, digraphs, trigraphs, and a complete worked example.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/frequency-analysis-substitution-cipher',
  },
  alternates: { canonical: 'https://www.letters2numbersconverter.com/blog/frequency-analysis-substitution-cipher' },
}

export default function Page() {
  const freqData = [
    { letter: 'E', freq: 12.70, tier: 'green' },
    { letter: 'T', freq: 9.06, tier: 'green' },
    { letter: 'A', freq: 8.17, tier: 'green' },
    { letter: 'O', freq: 7.51, tier: 'green' },
    { letter: 'I', freq: 6.97, tier: 'green' },
    { letter: 'N', freq: 6.75, tier: 'green' },
    { letter: 'S', freq: 6.33, tier: 'yellow' },
    { letter: 'H', freq: 6.09, tier: 'yellow' },
    { letter: 'R', freq: 5.99, tier: 'yellow' },
    { letter: 'D', freq: 4.25, tier: 'yellow' },
    { letter: 'L', freq: 4.03, tier: 'yellow' },
    { letter: 'C', freq: 2.78, tier: 'yellow' },
    { letter: 'U', freq: 2.76, tier: 'gray' },
    { letter: 'M', freq: 2.41, tier: 'gray' },
    { letter: 'W', freq: 2.36, tier: 'gray' },
    { letter: 'F', freq: 2.23, tier: 'gray' },
    { letter: 'G', freq: 2.02, tier: 'gray' },
    { letter: 'Y', freq: 1.97, tier: 'gray' },
    { letter: 'P', freq: 1.93, tier: 'gray' },
    { letter: 'B', freq: 1.49, tier: 'gray' },
    { letter: 'V', freq: 0.98, tier: 'gray' },
    { letter: 'K', freq: 0.77, tier: 'gray' },
    { letter: 'J', freq: 0.15, tier: 'gray' },
    { letter: 'X', freq: 0.15, tier: 'gray' },
    { letter: 'Q', freq: 0.10, tier: 'gray' },
    { letter: 'Z', freq: 0.07, tier: 'gray' },
  ]

  return (
    <main className="flex-1 w-full">
      <article className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
            Frequency Analysis: How to Break a Substitution Cipher
          </h1>
          <div className="mb-8 text-center">
            <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-base font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
              <li><a href="#introduction" className="text-primary hover:underline">Introduction: The Hidden Weakness of Substitution Ciphers</a></li>
              <li><a href="#what-is-frequency-analysis" className="text-primary hover:underline">What Is Frequency Analysis?</a></li>
              <li><a href="#english-letter-frequencies" className="text-primary hover:underline">The Foundation: English Letter Frequencies</a></li>
              <li><a href="#digraphs-trigraphs" className="text-primary hover:underline">Beyond Single Letters: Digraphs and Trigraphs</a></li>
              <li><a href="#step-by-step" className="text-primary hover:underline">Step-by-Step: Cracking a Substitution Cipher</a></li>
              <li><a href="#six-steps" className="text-primary hover:underline">The 6 Steps of Frequency Analysis</a></li>
              <li><a href="#pattern-words" className="text-primary hover:underline">Pattern Words: The Secret Weapon</a></li>
              <li><a href="#historical-examples" className="text-primary hover:underline">Historical Examples</a></li>
              <li><a href="#when-it-fails" className="text-primary hover:underline">When Frequency Analysis Fails</a></li>
              <li><a href="#tools" className="text-primary hover:underline">Frequency Analysis Tools</a></li>
              <li><a href="#practice" className="text-primary hover:underline">Practice: A Cipher for You to Crack</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
              <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
            </ol>
          </nav>

          {/* Introduction */}
          <section id="introduction">
            <p className="text-base text-muted-foreground mb-4">
              A substitution cipher swaps every letter for a different symbol or letter. It looks unbreakable — until you count the letters. That single insight, refined over more than a thousand years of cryptanalysis, is the core of <strong className="text-foreground">frequency analysis</strong>: the technique that has cracked more ciphers than any other method in history.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The logic is elegant. Every language has characteristic patterns. In English, the letter <strong className="text-foreground">E</strong> appears roughly 12.7% of the time — nearly twice as often as the next most frequent letter. No matter how cleverly a substitution cipher scrambles the alphabet, it cannot change the underlying frequency of the plaintext letters. If E becomes X in your cipher, then X will appear 12.7% of the time in the ciphertext. That fingerprint is impossible to hide.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              This guide walks through the technique completely: what frequency analysis is, the exact frequency data you need, how to apply digraph and trigraph patterns, and a detailed step-by-step worked example that takes a ciphertext from unreadable to plaintext. If you want to jump straight to testing a cipher, try our{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">cipher identifier tool</Link> to detect what type of cipher you&apos;re dealing with, or the{' '}
              <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">cryptogram solver</Link> to automate the frequency analysis process.
            </p>
          </section>

          {/* What Is Frequency Analysis */}
          <section id="what-is-frequency-analysis">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">What Is Frequency Analysis?</h2>
            <p className="text-base text-muted-foreground mb-4">
              Frequency analysis is the study of how often letters, letter pairs, and letter groups appear in a text — and using those counts to deduce the substitution mapping in an encrypted message. It is the oldest known technique in cryptanalysis, and it remains one of the most powerful tools against classical ciphers.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The method was first documented by <strong className="text-foreground">Al-Kindi</strong>, an Arab polymath, in approximately 850 AD. His treatise, <em>A Manuscript on Deciphering Cryptographic Messages</em>, laid out the principle with mathematical clarity: if you know the relative frequency of each letter in a language, and you observe the frequency of each symbol in a ciphertext, you can form educated hypotheses about which symbol represents which letter. The hypothesis can then be tested and refined through context.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Al-Kindi&apos;s insight predated European cryptography by centuries. Arab scholars of the Abbasid Caliphate had developed the technique partly for religious purposes — analyzing ambiguous passages of the Quran — and partly for political intelligence. The method was so effective that it essentially ended the security of simple substitution ciphers for serious diplomatic or military use, forcing cryptographers to develop more complex systems.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The technique spread gradually westward. By the Renaissance it was well known among European codebreakers. During the American Civil War and again in World War I and II, frequency analysis formed the backbone of signals intelligence. Even the famous codebreakers at <strong className="text-foreground">Bletchley Park</strong> — who cracked the Nazi Enigma machine — began their work with frequency analysis before machines and mathematical logic took over.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The technique also entered popular culture through <strong className="text-foreground">Edgar Allan Poe&apos;s 1843 short story &quot;The Gold-Bug&quot;</strong>, in which the protagonist deciphers a pirate treasure map encoded in a monoalphabetic substitution cipher by counting symbol frequencies. Poe&apos;s fictional demonstration of the technique was so detailed and accurate that it served as an introduction to cryptanalysis for generations of readers — and reportedly inspired an entire genre of puzzle-cipher literature.
            </p>
          </section>

          {/* English Letter Frequencies */}
          <section id="english-letter-frequencies">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Foundation: English Letter Frequencies</h2>
            <p className="text-base text-muted-foreground mb-4">
              The following frequencies are derived from large-scale corpus analysis of English text — the values that any serious cryptanalyst commits to memory. These figures represent approximate percentages across a broad sample of written English prose and are consistent with data published by Lewand (2000) and other academic sources.
            </p>

            {/* Bar Chart */}
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-foreground mb-4">English Letter Frequency Chart (% of total letters)</p>
              <div className="space-y-1.5">
                {freqData.map(({ letter, freq, tier }) => {
                  const barColor =
                    tier === 'green'
                      ? 'bg-green-600'
                      : tier === 'yellow'
                      ? 'bg-yellow-500'
                      : 'bg-muted-foreground/40'
                  const barWidth = `${(freq / 12.70) * 100}%`
                  return (
                    <div key={letter} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-foreground w-4 shrink-0">{letter}</span>
                      <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                        <div
                          className={`${barColor} h-4 rounded-full`}
                          style={{ width: barWidth }}
                        />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground w-12 text-right shrink-0">{freq.toFixed(2)}%</span>
                    </div>
                  )
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-3"><span className="text-green-600 font-semibold">Green</span> = top 6 letters &nbsp;|&nbsp; <span className="text-yellow-500 font-semibold">Yellow</span> = letters 7–12 &nbsp;|&nbsp; Gray = remaining letters</p>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              The distribution is highly uneven, which is exactly what makes frequency analysis possible. The top six letters — <strong className="text-foreground">E, T, A, O, I, N</strong> — together account for roughly 51% of all letters in typical English text. The bottom six — <strong className="text-foreground">J, X, Q, Z, K, V</strong> — together account for less than 2%. This gap is exploitable.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              A useful mnemonic for the top letters in order is <strong className="text-foreground">&quot;ETAOIN SHRDLU&quot;</strong> — a phrase coined by old-time newspaper typesetters who arranged Linotype keys by frequency. Memorize those twelve letters and you have covered the top half of the frequency table.
            </p>
          </section>

          {/* Digraphs and Trigraphs */}
          <section id="digraphs-trigraphs">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Beyond Single Letters: Digraphs and Trigraphs</h2>
            <p className="text-base text-muted-foreground mb-4">
              Single-letter frequencies give you a starting point. But two-letter combinations (digraphs) and three-letter combinations (trigraphs) provide much stronger constraints — and often allow you to confirm or reject your initial guesses quickly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Most Common English Digraphs</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-foreground font-semibold pb-2 pr-4">Digraph</th>
                    <th className="text-foreground font-semibold pb-2 pr-4">Frequency</th>
                    <th className="text-foreground font-semibold pb-2">Common Context</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['TH', '3.56%', 'the, that, this, there, then, they'],
                    ['HE', '3.07%', 'the, he, here, when, where'],
                    ['IN', '2.43%', 'in, into, interest, thing, being'],
                    ['ER', '2.05%', 'her, over, under, other, were'],
                    ['AN', '1.99%', 'and, can, than, man, plan'],
                    ['RE', '1.85%', 'are, there, more, before, were'],
                    ['ON', '1.76%', 'on, one, done, gone, know'],
                    ['EN', '1.75%', 'then, when, been, open, even'],
                    ['AT', '1.45%', 'at, that, what, late, fate'],
                    ['ND', '1.35%', 'and, find, hand, end, mind'],
                    ['ES', '1.32%', 'the, yes, goes, times, gives'],
                    ['ST', '1.22%', 'first, last, just, most, best'],
                    ['NT', '1.17%', 'not, want, hunt, front, point'],
                  ].map(([dg, freq, ctx]) => (
                    <tr key={dg} className="border-b border-border/50">
                      <td className="py-1.5 pr-4 font-mono text-foreground font-bold">{dg}</td>
                      <td className="py-1.5 pr-4">{freq}</td>
                      <td className="py-1.5">{ctx}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Most Common English Trigraphs</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-foreground font-semibold pb-2 pr-4">Trigraph</th>
                    <th className="text-foreground font-semibold pb-2 pr-4">Frequency</th>
                    <th className="text-foreground font-semibold pb-2">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['THE', '3.51%', 'the, there, these, them, then'],
                    ['AND', '1.59%', 'and, hand, land, sand'],
                    ['ING', '1.15%', 'going, being, having, making'],
                    ['ION', '1.01%', 'action, nation, motion, position'],
                    ['ENT', '0.86%', 'went, sent, dent, event, spent'],
                    ['HAT', '0.63%', 'that, what, hat, chat'],
                    ['FOR', '0.62%', 'for, before, afford, forest'],
                    ['THA', '0.59%', 'that, than, thank'],
                  ].map(([tg, freq, ex]) => (
                    <tr key={tg} className="border-b border-border/50">
                      <td className="py-1.5 pr-4 font-mono text-foreground font-bold">{tg}</td>
                      <td className="py-1.5 pr-4">{freq}</td>
                      <td className="py-1.5">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common Doubled Letters and Single-Letter Words</h3>
            <p className="text-base text-muted-foreground mb-4">
              When two identical cipher symbols appear side by side, that doubles the information you have. The most common doubled letters in English are: <strong className="text-foreground">LL, SS, EE, TT, FF, OO, RR</strong> — in roughly that order of frequency. A doubled cipher symbol is unlikely to be Q, J, V, or K.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Single-letter words in English are only two possibilities: <strong className="text-foreground">A</strong> and <strong className="text-foreground">I</strong>. If your ciphertext contains a single isolated symbol, you have a 50/50 chance of knowing the plaintext immediately — and knowing it anchors many surrounding letters.
            </p>
          </section>

          {/* Step-by-Step */}
          <section id="step-by-step">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Step-by-Step: How to Crack a Substitution Cipher Using Frequency Analysis</h2>
            <p className="text-base text-muted-foreground mb-4">
              To make this concrete, we will work through a complete example using a monoalphabetic substitution cipher — one where each plaintext letter is consistently replaced by the same cipher letter throughout the message.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Ciphertext</h3>
            <p className="text-base text-muted-foreground mb-4">
              Imagine you intercept the following message:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="font-mono text-green-600 font-bold text-lg tracking-wider">
                WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              You do not know the key. All you know is that it is a substitution cipher applied to English plaintext. Here is how you break it.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 1: Count Letter Frequencies in the Ciphertext</h3>
            <p className="text-base text-muted-foreground mb-4">
              Write out every letter and count how many times each appears. Ignoring spaces:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 overflow-x-auto">
              <table className="w-full text-sm font-mono">
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="pr-3 text-foreground font-bold">W</td><td className="pr-5">3×</td>
                    <td className="pr-3 text-foreground font-bold">K</td><td className="pr-5">3×</td>
                    <td className="pr-3 text-foreground font-bold">H</td><td className="pr-5">3×</td>
                    <td className="pr-3 text-foreground font-bold">X</td><td className="pr-5">2×</td>
                    <td className="pr-3 text-foreground font-bold">U</td><td className="pr-5">2×</td>
                    <td className="pr-3 text-foreground font-bold">R</td><td className="pr-5">2×</td>
                  </tr>
                  <tr className="mt-1">
                    <td className="pr-3 text-foreground font-bold">V</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">I</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">A</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">M</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">S</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">J</td><td className="pr-5">1×</td>
                  </tr>
                  <tr>
                    <td className="pr-3 text-foreground font-bold">E</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">Z</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">G</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">Q</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">O</td><td className="pr-5">1×</td>
                    <td className="pr-3 text-foreground font-bold">D</td><td className="pr-5">1×</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The most frequent letters are <strong className="text-foreground">W, K, H</strong> — each appearing 3 times. Given that E is the most common English letter, our first guess is that one of these represents E.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 2: Look for Short Word Patterns</h3>
            <p className="text-base text-muted-foreground mb-4">
              Notice the message contains a 3-letter word that appears <em>twice</em>: <code className="font-mono text-foreground bg-muted/50 px-1 rounded">WKH</code>. The most common 3-letter word in English is <strong className="text-foreground">THE</strong>. This is an extremely strong signal. We hypothesize:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-base text-foreground font-mono">W = T &nbsp;&nbsp; K = H &nbsp;&nbsp; H = E</p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              This also confirms that H (cipher) = E (plain), which aligns with our frequency count — H appeared 3 times, consistent with E being the most frequent letter.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 3: Apply Known Letters and Look for New Patterns</h3>
            <p className="text-base text-muted-foreground mb-4">
              Substituting W=T, K=H, H=E into the ciphertext:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="font-mono text-muted-foreground text-sm mb-1">Cipher: &nbsp; WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ</p>
              <p className="font-mono text-green-600 font-bold text-sm">Plain: &nbsp;&nbsp; THE T_I__ _R__N ___ _____ __ER THE ___B ___ </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              We have <code className="font-mono text-foreground bg-muted/50 px-1 rounded">RYHU</code> which partially fills to <code className="font-mono text-foreground bg-muted/50 px-1 rounded">__ER</code>. Common 4-letter words ending in -ER: OVER, EVER, AFTER, USER. The pattern _-V-E-R suggests <strong className="text-foreground">OVER</strong>, so R=O, V... wait — let&apos;s check: R appears as the first letter and gives us O, Y gives U, H gives E, U gives R: OVER. So: <strong className="text-foreground">R=O, Y=V, U=R</strong>.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Continuing: <code className="font-mono text-foreground bg-muted/50 px-1 rounded">EURZQ</code> now reads <code className="font-mono text-foreground bg-muted/50 px-1 rounded">_RO_N</code> with what we know. A 5-letter word with pattern _RO_N — <strong className="text-foreground">BROWN</strong> fits perfectly. So E=B, Z=W, Q=N.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <code className="font-mono text-foreground bg-muted/50 px-1 rounded">TXLFN</code> now reads <code className="font-mono text-foreground bg-muted/50 px-1 rounded">T_I_N</code>... wait, with Q=N we get the N at the end: <code className="font-mono text-foreground bg-muted/50 px-1 rounded">_UI_N</code>... checking T=?, X=U, L=?, F=?, N=? We have X=U from the mapping. So TXLFN → T, U, ?, ?, N → <strong className="text-foreground">QUICK</strong>. So T=Q, L=I, F=C.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Step 4: Fill In the Remaining Words</h3>
            <p className="text-base text-muted-foreground mb-4">
              With our growing key: W=T, K=H, H=E, R=O, Y=V, U=R, E=B, Z=W, Q=N, X=U, L=I, F=C, we can decode:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="font-mono text-muted-foreground text-sm mb-1">Cipher: WKH &nbsp;TXLFN EURZQ IRA &nbsp;MXPSV RYHU WKH ODCB GRJ</p>
              <p className="font-mono text-green-600 font-bold text-sm">Plain: &nbsp;THE &nbsp;QUICK BROWN _O_ &nbsp;_____ OVER THE _A__ _O_</p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              <code className="font-mono text-foreground bg-muted/50 px-1 rounded">IRA</code> → _O_ → <strong className="text-foreground">FOX</strong> (I=F, A=X). <code className="font-mono text-foreground bg-muted/50 px-1 rounded">GRJ</code> → _O_ → <strong className="text-foreground">DOG</strong> (G=D, J=G). <code className="font-mono text-foreground bg-muted/50 px-1 rounded">MXPSV</code> → _U__S → <strong className="text-foreground">JUMPS</strong> (M=J, P=M, S=S). <code className="font-mono text-foreground bg-muted/50 px-1 rounded">ODCB</code> → _A_Y → <strong className="text-foreground">LAZY</strong> (O=L, D=A, C=Z, B=Y).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Decrypted Plaintext</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="font-mono text-green-600 font-bold text-xl tracking-wider text-center">
                THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The cipher was a <strong className="text-foreground">Caesar cipher with a shift of 3</strong> — the classical Caesar cipher — where every letter is shifted 3 positions forward in the alphabet (A→D, B→E, ... Z→C). Frequency analysis confirmed the shift without needing to know that in advance.
            </p>
          </section>

          {/* Six Steps */}
          <section id="six-steps">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The 6 Steps of Frequency Analysis</h2>
            <p className="text-base text-muted-foreground mb-4">
              Experienced cryptanalysts follow a consistent process. Here is the structured workflow:
            </p>
            <div className="space-y-4 mb-6">
              {[
                {
                  n: '1',
                  title: 'Count All Letter Frequencies in the Ciphertext',
                  body: 'Tally every cipher letter. Calculate what percentage of the total each represents. Sort them from most to least frequent. This gives you your frequency ranking.',
                },
                {
                  n: '2',
                  title: 'Compare to the English Frequency Table',
                  body: 'Align your ranked cipher letters against the standard English frequency order (ETAOINSHRDLU…). The most frequent cipher letter is your best candidate for E. The second most frequent is your best candidate for T. These are starting hypotheses, not certainties.',
                },
                {
                  n: '3',
                  title: 'Make Initial Substitution Guesses',
                  body: 'Write out the ciphertext and pencil in your guesses. Look for 3-letter words — THE, AND, FOR, WAS, HIS, NOT, BUT — and 2-letter words — OF, TO, IN, IS, IT, BE, AS, AT, AN, OR, HE, WE, DO, MY. Every confirmed letter reveals new context.',
                },
                {
                  n: '4',
                  title: 'Look for Short Word Patterns',
                  body: 'A 3-letter word appearing frequently is almost certainly THE or AND. A single isolated letter is A or I. A 2-letter word ending in a high-frequency letter is often OF, TO, or IN. These anchor points give you confirmed letters quickly.',
                },
                {
                  n: '5',
                  title: 'Use Digraph and Trigraph Patterns to Confirm Guesses',
                  body: 'Check whether TH, HE, IN, ER appear in the expected positions. If you think X=T, look for XH in the ciphertext — that should correspond to TH, one of the most common digraphs. If it appears frequently, your guess is likely correct.',
                },
                {
                  n: '6',
                  title: 'Fill in Remaining Letters by Elimination and Context',
                  body: 'Once you have 10–15 letters confirmed, most words are readable with small gaps. Use contextual reasoning — what word makes sense here? — to complete the substitution table. Verify each new letter against all its occurrences.',
                },
              ].map(({ n, title, body }) => (
                <div key={n} className="bg-muted/50 border border-border rounded-xl p-5 flex gap-4">
                  <div className="text-2xl font-bold text-green-600 shrink-0 w-8">{n}.</div>
                  <div>
                    <p className="text-base font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pattern Words */}
          <section id="pattern-words">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Pattern Words: The Secret Weapon</h2>
            <p className="text-base text-muted-foreground mb-4">
              Beyond frequency counts, the internal structure of encrypted words — which positions share the same letter — is an independent source of information that does not require any statistics at all. This technique is called <strong className="text-foreground">pattern word analysis</strong>.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Every word has a pattern. The word THAT has the pattern ABAC — four letters, where the first and third are the same, and the second and fourth are different. No matter what letters are substituted, any cipher word with the pattern ABAC could be THAT (or a handful of other words with the same pattern). When a cipher word matches very few plaintext words, that is almost as good as knowing the plaintext outright.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 overflow-x-auto">
              <p className="text-sm font-semibold text-foreground mb-3">Common Word Patterns and Their Most Likely Plaintext Words</p>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-foreground font-semibold pb-2 pr-4">Pattern</th>
                    <th className="text-foreground font-semibold pb-2 pr-4">Name</th>
                    <th className="text-foreground font-semibold pb-2">Examples</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['AB', '2-letter', 'OF, TO, IN, IS, IT, BE, AS, AT, AN, OR, HE, WE, DO, MY'],
                    ['ABC', '3-letter (all unique)', 'THE, AND, FOR, WAS, HIS, NOT, BUT, HER, ARE, HIM'],
                    ['ABA', 'Palindrome-like', 'EVE, EYE, MOM, DAD, NUN, POP, DID, BOB, TOT, GAG'],
                    ['AAB', 'Double-start', 'EEL (rare — note: AA starts are uncommon in English)'],
                    ['ABB', 'Double-end', 'ADD, ALL, ILL, ODD, OFF, EGG, AGO? No — try: ADD, ALL'],
                    ['ABAC', '4-letter, 1st=3rd', 'THAT, EACH, EVER, EVEN'],
                    ['ABBA', 'Outer pair + inner pair', 'NOON, DEED, POOP, TOOT, SEES, ELLE'],
                    ['AABB', 'Two doubled pairs', 'Not common in English — very few words'],
                    ['ABCC', '4-letter, last two same', 'TALL, BALL, CALL, FALL, HALL, LESS, MOSS, BUZZ'],
                    ['ABBC', '4-letter, middle two same', 'BEEN, BOOK, COOL, DOOR, FEEL, FOOD, GOOD, LOOK, MOON'],
                    ['ABCA', '4-letter, 1st=4th', 'DEAD, BEAD, AREA, IDEA, EPIC'],
                    ['ABCBC', '5-letter, repeat pair', 'ONION, ELITE'],
                    ['ABCBA', '5-letter palindrome', 'LEVEL, CIVIC, RADAR, MADAM, REFER, KAYAK, ROTOR'],
                  ].map(([pat, name, ex]) => (
                    <tr key={pat} className="border-b border-border/50">
                      <td className="py-1.5 pr-4 font-mono text-foreground font-bold">{pat}</td>
                      <td className="py-1.5 pr-4">{name}</td>
                      <td className="py-1.5">{ex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              The most powerful single pattern in English cryptanalysis is <code className="font-mono text-foreground bg-muted/50 px-1 rounded">ABC ABC</code> — a 3-letter word that repeats. This is overwhelmingly likely to be <strong className="text-foreground">THE THE</strong> or, in some contexts, AND AND. This pattern alone can give you three letters at once.
            </p>
          </section>

          {/* Historical Examples */}
          <section id="historical-examples">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Historical Examples of Frequency Analysis in Action</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Al-Kindi and the 9th Century</h3>
            <p className="text-base text-muted-foreground mb-4">
              Al-Kindi&apos;s <em>Risalah fi Istikhraj al-Mu&apos;amma</em> (A Manuscript on Deciphering Cryptographic Messages), written around 850 AD in Baghdad, is the earliest known text describing frequency analysis. Al-Kindi wrote: &quot;One way to solve an encrypted message, if we know its language, is to find a different plaintext of the same language long enough to fill one sheet or so, and then we count the occurrences of each letter. We call the most frequently occurring letter the &apos;first&apos;, the next most occurring letter the &apos;second&apos;...&quot; The passage is strikingly modern in its approach — computational before computers existed.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Mary Queen of Scots (1586)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Perhaps the most consequential cipher-breaking in history. Mary Queen of Scots used a nomenclator cipher — a substitution cipher with a small codebook for common words — to communicate with Anthony Babington and other Catholic plotters who planned to assassinate Queen Elizabeth I. Sir Francis Walsingham, Elizabeth&apos;s spymaster, employed <strong className="text-foreground">Thomas Phelippes</strong>, a brilliant linguist and cryptanalyst. Phelippes applied frequency analysis to Mary&apos;s letters, decrypted the correspondence, and confirmed Mary&apos;s complicity in the assassination plot. The decrypted letters were used as evidence at her trial. Mary was beheaded on February 8, 1587. Frequency analysis literally changed the course of British history.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Edgar Allan Poe and &quot;The Gold-Bug&quot; (1843)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Poe was a cryptography enthusiast who had published a challenge in a Philadelphia magazine offering to crack any monoalphabetic substitution cipher sent by readers. In his story, the protagonist decrypts a pirate&apos;s treasure map cipher by noting that the symbol <code className="font-mono text-foreground bg-muted/50 px-1 rounded">8</code> appears most frequently and must therefore represent <strong className="text-foreground">E</strong>. He then identifies word patterns and short sequences to reconstruct the full alphabet. The story is the first major popular treatment of frequency analysis as a puzzle-solving technique, and it introduced the concept to millions of readers worldwide.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Bletchley Park and World War II</h3>
            <p className="text-base text-muted-foreground mb-4">
              The German Enigma machine used a polyalphabetic cipher — substitution that changed with every keypress — which theoretically defeated frequency analysis. But Bletchley Park&apos;s codebreakers, led by <strong className="text-foreground">Alan Turing</strong> and Gordon Welchman, found that frequency analysis remained foundational. Known German message openings (&quot;crib&quot; texts), predictable weather report formats, and operators reusing weak key settings all created statistical regularities that frequency-based techniques could exploit. The electromechanical Bombe machine automated the search, but it was fundamentally searching for frequency-consistent alignments.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Zodiac Killer&apos;s 340-Character Cipher (1969–2020)</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Zodiac Killer sent several encrypted messages to newspapers in the San Francisco Bay Area. The first (408-character) cipher was solved in 1969 within days using frequency analysis. The second major cipher, known as the <strong className="text-foreground">Z340</strong> because it was 340 characters long, resisted analysis for 51 years. It was finally cracked in December 2020 by a team led by David Oranchak, with help from mathematics PhD Sam Blake and software developer Jarl Van Eycke. The key insight: the Z340 was not a simple monoalphabetic cipher. It used a transposition applied on top of a homophonic substitution — multiple cipher symbols for common letters — which broke the simple frequency signature. The team&apos;s eventual solution combined frequency analysis with computer search algorithms.
            </p>
          </section>

          {/* When It Fails */}
          <section id="when-it-fails">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">When Frequency Analysis Fails (and What to Do)</h2>
            <p className="text-base text-muted-foreground mb-4">
              Frequency analysis is not a universal key. Understanding its limitations helps you identify when a different approach is needed.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  title: 'Very Short Messages (Under ~100 Characters)',
                  body: 'Statistical significance requires sample size. In a 20-character message, even if E is the most common letter, it might appear only 3 times — the same as several other letters. The frequency signal is too weak to use reliably. For short messages, try pattern words and contextual guessing instead.',
                },
                {
                  title: 'Polyalphabetic Ciphers (Vigenère, Beaufort, Enigma)',
                  body: 'These ciphers use multiple substitution alphabets that rotate during encryption. A letter E in position 1 might become X, while E in position 2 becomes Q, and E in position 5 becomes T. The varying substitution smears the frequency distribution, making all cipher letters appear roughly equally often. The Vigenère cipher was called "le chiffre indéchiffrable" (the indecipherable cipher) for nearly 300 years for this reason. The Kasiski test and the Index of Coincidence are used to find the key length first, after which each individual alphabet can be attacked with frequency analysis.',
                },
                {
                  title: 'Homophonic Substitution Ciphers',
                  body: 'A homophonic substitution assigns multiple cipher symbols to high-frequency plaintext letters. E might map to any of 13 different symbols, chosen at random during encryption. This flattens the frequency distribution, making the ciphertext appear to have roughly uniform symbol frequencies. Solving these requires more sophisticated statistical attacks.',
                },
                {
                  title: 'One-Time Pads',
                  body: 'A one-time pad uses a truly random key that is as long as the message, never reused. Each letter is encrypted with a different substitution. This is mathematically proven to be unbreakable — frequency analysis produces no information because every possible plaintext of the correct length is equally consistent with the ciphertext.',
                },
                {
                  title: 'Null Ciphers and Padding',
                  body: 'If the encryptor inserts meaningless "null" letters to distort frequencies — for example, inserting a Q after every vowel — the frequency counts will be off. Detecting null ciphers requires noticing unusual bigram patterns (QA, QE, QI, QO, QU would be far more common than English norms).',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-muted/50 border border-border rounded-xl p-5">
                  <p className="text-base font-semibold text-foreground mb-2">{title}</p>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>

            <p className="text-base text-muted-foreground mb-4">
              For ciphers that resist frequency analysis, you may be dealing with a more complex system. Read our guide on the{' '}
              <Link href="/blog/one-time-pad-cipher-example" className="text-primary hover:underline">one-time pad cipher</Link> to understand the theoretical limits of cryptanalysis.
            </p>
          </section>

          {/* Tools */}
          <section id="tools">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Frequency Analysis Tools and How to Use Them</h2>
            <p className="text-base text-muted-foreground mb-4">
              Manual frequency analysis on paper is instructive but slow. For real cryptograms and longer messages, software tools dramatically speed up the process.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Our <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">text frequency analysis tool</Link> takes any ciphertext input and instantly calculates:
            </p>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1 ml-2">
              <li>Individual letter frequencies with percentage breakdowns</li>
              <li>Comparison to standard English frequencies</li>
              <li>Most common digraphs and trigraphs in your ciphertext</li>
              <li>Index of Coincidence — a single number that reveals whether the cipher is monoalphabetic (high IoC, near 0.065 for English) or polyalphabetic (low IoC, near 0.038 for random text)</li>
              <li>Interactive substitution interface to test your hypotheses live</li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              For cryptograms where you want a fully automated attempt, our{' '}
              <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">cryptogram solver</Link> applies frequency analysis algorithmically and tries to find the best-fit English substitution automatically — often solving simple monoalphabetic ciphers in under a second.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Not sure what type of cipher you have? The{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">cipher identifier tool</Link> can analyze statistical properties of your ciphertext and suggest the most likely cipher type before you invest time in frequency analysis.
            </p>
          </section>

          {/* Practice */}
          <section id="practice">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Practicing: A Cipher for You to Crack</h2>
            <p className="text-base text-muted-foreground mb-4">
              Here is a short monoalphabetic substitution cipher for you to try. Apply the frequency analysis steps described in this guide. The message is a common English quotation.
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Ciphertext:</p>
              <p className="font-mono text-green-600 font-bold text-lg tracking-wider">
                NBLLN JBX DBEEB NBLLN JBX NBLLN JBX DBELLOQD
              </p>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Hints to get you started:
            </p>
            <ul className="list-disc list-inside text-base text-muted-foreground mb-4 space-y-1 ml-2">
              <li>Count the letters: N, L, B appear most often</li>
              <li>The 3-letter word <code className="font-mono text-foreground bg-muted/50 px-1 rounded">JBX</code> appears twice — what common 3-letter English word repeats?</li>
              <li>Look at the pattern of <code className="font-mono text-foreground bg-muted/50 px-1 rounded">NBLLN</code> — it has the pattern ABCCA</li>
              <li>The final word <code className="font-mono text-foreground bg-muted/50 px-1 rounded">DBELLOQD</code> has a doubled LL in the middle</li>
            </ul>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Answer (spoiler — try first!):</p>
              <p className="text-sm text-muted-foreground">
                The key is: J=YOU, B=O, X=R, N=H, L=E, Q=N, D=S, O=I, etc.
                Decoded: <strong className="text-foreground">&quot;HELLO YOU HELLO YOU HELLO YOU SPELLING&quot;</strong>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Actually — paste the ciphertext into our <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">cryptogram solver</Link> and let the tool do it automatically, then compare your manual process to the automated result.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Frequently Asked Questions</h2>

            <div className="space-y-5 mb-6">
              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">What is frequency analysis in cryptography?</h3>
                <p className="text-base text-muted-foreground mb-0">
                  Frequency analysis is a cryptanalytic technique that exploits the non-uniform distribution of letters in natural language text. Because letters like E, T, and A appear far more often than Z, Q, and J, a monoalphabetic substitution cipher preserves these frequency patterns in the ciphertext — just with different symbols. By counting how often each cipher symbol appears and comparing those counts to known letter frequencies in the target language, an analyst can make educated guesses about which cipher symbols represent which plaintext letters, then refine those guesses using word patterns and context.
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">Can frequency analysis crack any cipher?</h3>
                <p className="text-base text-muted-foreground mb-0">
                  No. Frequency analysis works reliably only against <strong className="text-foreground">monoalphabetic substitution ciphers</strong> (where each plaintext letter always maps to the same cipher symbol). It is ineffective against polyalphabetic ciphers (like the Vigenère cipher), homophonic substitution ciphers, transposition ciphers (which rearrange letters without substituting), and one-time pads. It also struggles with very short messages where there is insufficient statistical data — as a rough rule, you need at least 100 characters for reliable frequency analysis, and 200+ characters for high confidence.
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">Who invented frequency analysis?</h3>
                <p className="text-base text-muted-foreground mb-0">
                  Frequency analysis was invented by <strong className="text-foreground">Al-Kindi</strong> (Abu Yusuf Ya&apos;qub ibn Is&apos;haq al-Kindi), an Arab polymath born in approximately 801 AD in Kufa, in modern-day Iraq. He documented the technique in a treatise titled <em>A Manuscript on Deciphering Cryptographic Messages</em>, written around 850 AD. The manuscript was rediscovered in the Ottoman archives in Istanbul in 1987 by researcher Muhammad Mrayati, 1,100 years after it was written. Al-Kindi also made significant contributions to philosophy, mathematics, medicine, and music theory, and was known in medieval Europe as &quot;Alkindus.&quot;
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">How long does frequency analysis take?</h3>
                <p className="text-base text-muted-foreground mb-0">
                  For an experienced cryptanalyst with a 200+ character ciphertext, manual frequency analysis on a monoalphabetic cipher can take 10–30 minutes. With software tools like our <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">cryptogram solver</Link>, it takes under a second for simple substitution ciphers. More complex ciphers can take hours, days, or — in extreme cases like the Zodiac 340 — decades, because the underlying structure is more sophisticated than simple letter substitution.
                </p>
              </div>

              <div className="bg-muted/50 border border-border rounded-xl p-5">
                <h3 className="text-xl font-semibold text-foreground mt-0 mb-3">Does frequency analysis work on short messages?</h3>
                <p className="text-base text-muted-foreground mb-0">
                  Only partially. Below approximately 100 characters, the statistical signal becomes unreliable — letters appear in counts of 1, 2, or 3, and the ranking by frequency changes dramatically from sample to sample. For messages under 50 characters, frequency analysis often produces misleading results. In those cases, it is better to focus on <strong className="text-foreground">pattern word analysis</strong> (looking at the internal structure of each word) and contextual guessing, rather than relying on raw frequency counts. Single-letter words (A or I) and 3-letter repeated words (usually THE) are the most reliable anchors in short messages.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Conclusion</h2>
            <p className="text-base text-muted-foreground mb-4">
              Frequency analysis is one of the most elegant ideas in the history of science: the observation that language has a statistical structure, and that structure survives substitution. Al-Kindi saw it in 850 AD. Bletchley Park built upon it 1,100 years later. Today, it remains the foundational technique for attacking classical ciphers — and the reason why modern cryptography had to abandon simple substitution entirely.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The core principle to remember: <strong className="text-foreground">a substitution cipher changes which symbol represents a letter, but it cannot change how often that letter appears.</strong> English E occurs 12.70% of the time. Whether it is encrypted as X, 8, #, or any other symbol, that symbol will appear 12.70% of the time in the ciphertext. That invariant is the crack in the wall.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              To apply this technique yourself, use the complete toolkit: single-letter frequencies (ETAOIN SHRDLU), digraph analysis (TH, HE, IN, ER, AN), trigraph patterns (THE, AND, ING), repeated short words, single-letter words, and doubled letters. Cross-validate every hypothesis. When a guess is wrong, the context will show inconsistencies — a sequence of letters that cannot form any English word is a signal to backtrack.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Ready to try it? Paste any cryptogram into our{' '}
              <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">cryptogram solver</Link> or run your ciphertext through the{' '}
              <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">frequency analysis tool</Link> to get the letter counts instantly. If you are not sure what kind of cipher you are facing, the{' '}
              <Link href="/tools/cipher-identifier" className="text-primary hover:underline">cipher identifier</Link> will help you narrow it down before you begin.
            </p>
          </section>

        </div>
      </article>
    </main>
  )
}
