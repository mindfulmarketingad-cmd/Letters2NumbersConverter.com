import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/feistel-cipher-example`
const PUBLISHED = '2026-05-16'

export const metadata: Metadata = {
  title: { absolute: 'Feistel Cipher Example' },
  description: 'A complete Feistel cipher example with step-by-step working. Understand the round function, block splitting, XOR operations, and how DES and other block ciphers use the Feistel structure.',
  keywords: [
    'feistel cipher example',
    'feistel cipher',
    'feistel network',
    'feistel structure',
    'feistel cipher explained',
    'how feistel cipher works',
    'DES feistel',
    'feistel round function',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Feistel Cipher Example — Step-by-Step Working',
    description: 'See exactly how a Feistel cipher works with a complete worked example: block splitting, round function, XOR, key mixing, and decryption.',
    type: 'article',
    url: PAGE_URL,
  },
  alternates: { canonical: PAGE_URL },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Feistel Cipher Example — Step-by-Step Working',
  description: 'A complete Feistel cipher example with step-by-step working showing block splitting, round function, XOR operations, and decryption.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a Feistel cipher different from other block ciphers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Feistel cipher splits the plaintext block into two equal halves and only modifies one half per round using the other half and a round key. The key insight is that the round function F does not need to be invertible — any function works, because decryption recovers the inputs algebraically without needing to reverse F. AES, by contrast, uses a Substitution-Permutation Network that processes the entire block each round.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds does a Feistel cipher need to be secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Luby-Rackoff theorem proves that 3 rounds with a random round function produces a pseudorandom permutation (PRP), and 4 rounds a strong PRP. In practice, real ciphers use far more: DES uses 16 rounds, Blowfish uses 16, Twofish uses 16, and Camellia uses 18 or 24. More rounds increase the diffusion and confusion that defeat statistical attacks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is AES a Feistel cipher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. AES (Advanced Encryption Standard) uses a Substitution-Permutation Network (SPN), not a Feistel structure. In AES, every round processes the entire 128-bit block — there is no half-block split. AES was designed partly to improve on DES\'s performance characteristics while maintaining high security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does decryption work with reversed keys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the Feistel round is algebraically invertible. Given the output of round i (L_{i+1} = R_i, R_{i+1} = L_i XOR F(R_i, K_i)), you can recover the inputs: R_i = L_{i+1}, and L_i = R_{i+1} XOR F(L_{i+1}, K_i). XOR is self-inverse — XORing twice with the same value cancels out — so you only need to know F and the round key, never F-inverse.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Feistel cipher still used today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While DES is retired (broken in 1999), many active systems use Feistel-based ciphers. Blowfish is the basis of bcrypt, the dominant password hashing algorithm. Twofish is used in some file encryption tools. Camellia is approved for TLS and used in Japan. 3DES, though deprecated, still appears in legacy systems. The Feistel structure remains foundational to symmetric cryptography.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who invented the Feistel cipher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Feistel structure was invented by Horst Feistel, a German-American cryptographer working at IBM Research in Yorktown Heights, New York. He developed it in the early 1970s as part of the Lucifer cipher project. The design was published in 1973 in Scientific American under the title "Cryptography and Computer Privacy." IBM\'s Lucifer cipher evolved into DES, standardized by NIST in 1977.',
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              Feistel Cipher Example — How It Works, Step by Step
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp; {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              The Feistel cipher is one of the most elegant ideas in all of cryptography. Invented by Horst
              Feistel at IBM in the early 1970s, it solved a problem that had vexed cipher designers for
              decades: how do you build a{' '}
              <strong className="text-foreground">secure, invertible block cipher</strong> from a round
              function that doesn&apos;t need to be invertible at all? The answer changed modern cryptography.
              DES, 3DES, Blowfish, Twofish, Camellia — all are built on the Feistel structure. This guide
              walks through every layer: the theory, the mechanics, a complete 2-round worked example with
              exact binary arithmetic, decryption, how DES extends the idea across 16 rounds, and why the
              structure remains relevant today. If you want to explore classical ciphers first, try our{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar cipher decoder</Link>{' '}
              or read about{' '}
              <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">how AES-256 encryption works</Link>.
            </p>

            {/* Table of Contents */}
            <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
              <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
              <ol className="space-y-1.5 text-sm list-decimal list-inside">
                <li><a href="#what-is-feistel" className="text-primary hover:underline">What Is a Feistel Cipher?</a></li>
                <li><a href="#core-structure" className="text-primary hover:underline">The Core Feistel Structure — Anatomy of a Round</a></li>
                <li><a href="#xor-engine" className="text-primary hover:underline">XOR: The Engine of the Feistel Cipher</a></li>
                <li><a href="#worked-example" className="text-primary hover:underline">A Complete Worked Example: 2-Round Feistel Cipher</a></li>
                <li><a href="#decryption" className="text-primary hover:underline">Decryption: Reversing the Process with Reversed Keys</a></li>
                <li><a href="#des" className="text-primary hover:underline">How DES Uses the Feistel Structure</a></li>
                <li><a href="#other-ciphers" className="text-primary hover:underline">Other Famous Feistel Ciphers</a></li>
                <li><a href="#feistel-vs-spn" className="text-primary hover:underline">Feistel vs Substitution-Permutation Network (SPN)</a></li>
                <li><a href="#why-brilliant" className="text-primary hover:underline">Why the Feistel Structure Is Brilliant</a></li>
                <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                <li><a href="#conclusion" className="text-primary hover:underline">Conclusion</a></li>
              </ol>
            </nav>

            {/* Section 1 */}
            <h2 id="what-is-feistel" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              What Is a Feistel Cipher?
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">Feistel cipher</strong> (also called a Feistel network or
              Feistel scheme) is not a cipher itself — it is a <strong className="text-foreground">structural
              framework</strong> for building block ciphers. The framework was invented by{' '}
              <strong className="text-foreground">Horst Feistel</strong>, a German-American cryptographer working
              at IBM Research in Yorktown Heights, New York, in the early 1970s. Feistel published the design
              in 1973 in <em>Scientific American</em> under the title &ldquo;Cryptography and Computer Privacy.&rdquo;
              His work at IBM on the Lucifer cipher directly led to the{' '}
              <strong className="text-foreground">Data Encryption Standard (DES)</strong>, standardised by NIST
              in 1977 and used for two decades as the global standard for symmetric encryption.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The key insight Feistel contributed is this: you can convert{' '}
              <strong className="text-foreground">any function F</strong> — even a non-invertible one, even a
              one-way function — into an invertible permutation. This is genuinely profound. Before the Feistel
              structure, cipher designers had to carefully construct round functions that were both cryptographically
              strong <em>and</em> reversible. Feistel freed them from the reversibility constraint entirely.
              You can choose F to be as complex, non-linear, and impenetrable as you like, and decryption will
              still work — without ever needing to invert F.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The practical result is that encryption and decryption use the{' '}
              <strong className="text-foreground">exact same hardware circuit or software algorithm</strong>,
              with only the order of round keys reversed. This makes Feistel-based ciphers extraordinarily
              efficient to implement — a single chip can both encrypt and decrypt with minimal additional logic.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Which Ciphers Use the Feistel Structure?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The Feistel structure has been used in an enormous number of well-known ciphers:
            </p>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Cipher</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Year</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Block Size</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Rounds</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['DES', '1977', '64 bits', '16', 'Retired (broken 1999)'],
                    ['3DES', '1998', '64 bits', '48 (3×16)', 'Deprecated'],
                    ['Blowfish', '1993', '64 bits', '16', 'Active (bcrypt)'],
                    ['Twofish', '1998', '128 bits', '16', 'Active'],
                    ['CAST-128', '1996', '64 bits', '12 or 16', 'Active (PGP)'],
                    ['Camellia', '2000', '128 bits', '18 or 24', 'Active (TLS)'],
                    ['Skipjack', '1998', '64 bits', '32', 'Retired'],
                    ['RC5', '1994', 'Variable', 'Variable', 'Active'],
                  ].map(([cipher, year, block, rounds, status]) => (
                    <tr key={cipher}>
                      <td className="py-2 px-3 text-muted-foreground font-mono font-semibold text-foreground">{cipher}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono">{year}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono">{block}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono">{rounds}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono">{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              One important non-example: <strong className="text-foreground">AES does not use a Feistel
              structure</strong>. AES uses a Substitution-Permutation Network (SPN) that processes the entire
              128-bit block each round rather than splitting it in half. We compare the two approaches in
              Section 8.
            </p>

            {/* Section 2 */}
            <h2 id="core-structure" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The Core Feistel Structure — Anatomy of a Round
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Here is how a single Feistel round works. Every round follows the same pattern, with a different
              round key each time.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Setup</h3>
            <p className="text-base text-muted-foreground mb-4">
              Take a plaintext block of <em>n</em> bits. Split it into two equal halves:{' '}
              <strong className="text-foreground">L</strong> (left) and{' '}
              <strong className="text-foreground">R</strong> (right), each of <em>n</em>/2 bits. A master key
              is expanded by a <strong className="text-foreground">key schedule</strong> into N round keys
              K₁, K₂, …, K_N, one per round.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Round i: The Two Formulas</h3>
            <p className="text-base text-muted-foreground mb-4">
              At the start of round <em>i</em>, we have left half L_i and right half R_i. The round produces:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`L_{i+1} = R_i
R_{i+1} = L_i XOR F(R_i, K_i)`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              That&apos;s it. The new left half is simply the old right half. The new right half is the old
              left half XOR&apos;d with the output of the round function F applied to the old right half and
              the round key. After all N rounds, the two halves are concatenated — many implementations
              (including DES) output{' '}
              <strong className="text-foreground">R_N &#8741; L_N</strong> (right then left) rather than
              L_N &#8741; R_N, which is equivalent to one final swap.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Visual Diagram of One Round</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 font-mono text-sm text-foreground overflow-x-auto">
              <pre>{`Round i:
┌─────────────────────────────────────────┐
│   L_i                    R_i            │
│    │                      │             │
│    │              ┌───────┴────────┐    │
│    │              │   Round Fn F   │◄── K_i
│    │              └───────┬────────┘    │
│    │                      │             │
│  (XOR)◄───────────────────┘             │
│    │                      │             │
│    ▼                      ▼             │
│  R_{i+1}              L_{i+1}           │
│  = L_i XOR            = R_i            │
│    F(R_i, K_i)                          │
└─────────────────────────────────────────┘`}</pre>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Notice what F receives: only <strong className="text-foreground">R_i</strong> and{' '}
              <strong className="text-foreground">K_i</strong>. It never sees L_i directly. L_i is only
              combined with F&apos;s output via XOR. This means F can be{' '}
              <em>any function at all</em> — it doesn&apos;t need to be invertible — because we never need
              to run it backwards. The algebraic structure of the Feistel network provides invertibility
              &ldquo;for free.&rdquo;
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Decryption: The Beautiful Mirror</h3>
            <p className="text-base text-muted-foreground mb-4">
              To decrypt, you run the <strong className="text-foreground">identical algorithm</strong> with
              round keys applied in <strong className="text-foreground">reverse order</strong>: K_N first,
              then K_{'{'}N-1{'}'}, …, then K₁. Here&apos;s why this works mathematically:
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Given the output of round <em>i</em> — that is, L_{'{i+1}'} and R_{'{i+1}'} — we need to
              recover L_i and R_i. From the encryption formulas:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`L_{i+1} = R_i           →   R_i = L_{i+1}
R_{i+1} = L_i XOR F(R_i, K_i)
        = L_i XOR F(L_{i+1}, K_i)   [substituting R_i = L_{i+1}]

Therefore:
L_i = R_{i+1} XOR F(L_{i+1}, K_i)`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              The XOR self-cancellation property ({`A XOR B XOR B = A`}) means that XOR&apos;ing
              F(L_{'{i+1}'}, K_i) on both sides eliminates it from R_{'{i+1}'} and gives us L_i directly.
              F is never inverted. We only <em>evaluate</em> F in the same forward direction, with the same
              inputs, to cancel its effect. This is the Feistel genius.
            </p>

            {/* Section 3 */}
            <h2 id="xor-engine" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              XOR: The Engine of the Feistel Cipher
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Before the worked example, make sure XOR is completely clear — it is the operation that makes
              the entire Feistel structure tick.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">XOR (exclusive OR)</strong> is a bitwise operation on two
              bits. It outputs 1 if the bits differ, and 0 if they are the same:
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border max-w-xs">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-center py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">A</th>
                    <th className="text-center py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">B</th>
                    <th className="text-center py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">A ⊕ B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[['0','0','0'],['0','1','1'],['1','0','1'],['1','1','0']].map(([a,b,r]) => (
                    <tr key={`${a}${b}`}>
                      <td className="text-center py-2 px-4 font-mono text-muted-foreground">{a}</td>
                      <td className="text-center py-2 px-4 font-mono text-muted-foreground">{b}</td>
                      <td className="text-center py-2 px-4 font-mono font-bold text-blue-500">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              XOR extends bit by bit across binary strings. For example:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`  1010
⊕ 0110
──────
  1100`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              The critical property that drives all Feistel decryption is:{' '}
              <strong className="text-foreground">A ⊕ B ⊕ B = A</strong>. XOR-ing any value with the same
              thing twice returns the original. To see it concretely:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`A = 1010
B = 0110

A ⊕ B = 1100
(A ⊕ B) ⊕ B = 1100 ⊕ 0110 = 1010 = A  ✓`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              This is why decryption works: when we compute R_{'{i+1}'} XOR F(L_{'{i+1}'}, K_i), the
              F(R_i, K_i) term from encryption and the re-evaluated F(L_{'{i+1}'}, K_i) term are identical
              (since L_{'{i+1}'} = R_i), and they cancel. L_i emerges from the XOR.
            </p>

            {/* Section 4 */}
            <h2 id="worked-example" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              A Complete Worked Example: 2-Round Feistel Cipher
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Real ciphers like DES use 64-bit blocks and 16 rounds with a complex round function. For
              a first worked example, small numbers are far more instructive. We will use an 8-bit block
              (4-bit halves) and 2 rounds, with the simplest possible round function: F(R, K) = R ⊕ K.
              This round function is far too simple for real security — in practice, F involves S-boxes,
              permutations, and mixing operations. But it makes the arithmetic completely transparent.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">Setup</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Block size:</strong> 8 bits (split into two 4-bit halves)</li>
                <li><strong className="text-foreground">Plaintext:</strong> <span className="font-mono text-foreground font-bold">10110100</span> (0xB4)</li>
                <li><strong className="text-foreground">Master key:</strong> <span className="font-mono text-foreground font-bold">11001010</span> (split into round keys)</li>
                <li><strong className="text-foreground">Round key K1:</strong> <span className="font-mono text-foreground font-bold">1100</span> (left 4 bits of master key)</li>
                <li><strong className="text-foreground">Round key K2:</strong> <span className="font-mono text-foreground font-bold">1010</span> (right 4 bits of master key)</li>
                <li><strong className="text-foreground">Round function F(R, K):</strong> R ⊕ K</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Initial Block Split</h3>
            <p className="text-base text-muted-foreground mb-4">
              Split the 8-bit plaintext <span className="font-mono text-foreground font-bold">10110100</span> into
              two 4-bit halves:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`Plaintext:  1011 0100
            └──┘ └──┘
            L0   R0

L0 = 1011   (left 4 bits)
R0 = 0100   (right 4 bits)`}</code></pre>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Round 1 (using K1 = 1100)</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Step</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Calculation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Input</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L0 = 1011, R0 = 0100, K1 = 1100</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">—</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">F(R0, K1)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-green-600 font-bold">0100</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-foreground font-bold">1100</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1000</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L1 = R0</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L1 is simply R0 (pass-through)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-green-600 font-bold">0100</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R1 = L0 ⊕ F</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-foreground font-bold">1011</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-blue-500 font-bold">1000</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">0011</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              After Round 1: <strong className="text-foreground">L1 = </strong>
              <span className="font-mono text-green-600 font-bold">0100</span>,{' '}
              <strong className="text-foreground">R1 = </strong>
              <span className="font-mono text-blue-500 font-bold">0011</span>
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Round 2 (using K2 = 1010)</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Step</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Calculation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Input</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L1 = 0100, R1 = 0011, K2 = 1010</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">—</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">F(R1, K2)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-blue-500 font-bold">0011</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-foreground font-bold">1010</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1001</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L2 = R1</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L2 is simply R1 (pass-through)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">0011</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R2 = L1 ⊕ F</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-green-600 font-bold">0100</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-blue-500 font-bold">1001</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1101</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              After Round 2: <strong className="text-foreground">L2 = </strong>
              <span className="font-mono text-blue-500 font-bold">0011</span>,{' '}
              <strong className="text-foreground">R2 = </strong>
              <span className="font-mono text-blue-500 font-bold">1101</span>
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Final Output (with Swap)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Following the DES convention, the final output swaps the two halves: we concatenate
              R2 first, then L2:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`Ciphertext = R2 || L2
           = 1101 || 0011
           = 11010011  (0xD3)`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              Plaintext <span className="font-mono text-foreground font-bold">10110100</span> (0xB4) encrypted to
              ciphertext <span className="font-mono text-green-600 font-bold">11010011</span> (0xD3).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Complete Encryption Summary</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">State</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Left Half</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Right Half</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Initial</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-foreground font-bold">1011</span> (L0)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-green-600 font-bold">0100</span> (R0)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Plaintext split</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">After Round 1</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-green-600 font-bold">0100</span> (L1)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">0011</span> (R1)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">K1 = 1100 applied</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">After Round 2</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">0011</span> (L2)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1101</span> (R2)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">K2 = 1010 applied</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Ciphertext</td>
                    <td className="py-2 px-3 font-mono" colSpan={2}><span className="font-mono text-green-600 font-bold">11010011</span> (R2 &#8741; L2)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Final swap applied</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 id="decryption" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Decryption: Reversing the Process with Reversed Keys
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Now watch the Feistel magic at work. We take the ciphertext{' '}
              <span className="font-mono text-green-600 font-bold">11010011</span> and run the same
              algorithm — same structure, same F function — but apply the round keys in reverse order:
              K2 first, then K1.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Undo the Final Swap</h3>
            <p className="text-base text-muted-foreground mb-4">
              Since encryption ended with a swap (outputting R2 &#8741; L2), decryption begins by undoing
              that swap. Split the ciphertext <span className="font-mono text-green-600 font-bold">11010011</span>{' '}
              and label the halves as L2 and R2 from the encryption:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`Ciphertext:  1101 0011
             └──┘ └──┘
             R2   L2      (the swap is undone)

L2 = 0011   (right 4 bits of ciphertext)
R2 = 1101   (left 4 bits of ciphertext)`}</code></pre>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Reverse Round 2 (using K2 = 1010)</h3>
            <p className="text-base text-muted-foreground mb-4">
              We know L2 = <span className="font-mono text-blue-500 font-bold">0011</span> and
              R2 = <span className="font-mono text-blue-500 font-bold">1101</span>. Recover L1 and R1:
            </p>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Step</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Calculation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R1 = L2</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R1 is simply L2 (from L_{'{i+1}'} = R_i rule)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">0011</span> ✓</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">F(L2, K2)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-blue-500 font-bold">0011</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-foreground font-bold">1010</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1001</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L1 = R2 ⊕ F(L2, K2)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-blue-500 font-bold">1101</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-blue-500 font-bold">1001</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-green-600 font-bold">0100</span> ✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Recovered: L1 = <span className="font-mono text-green-600 font-bold">0100</span>,
              R1 = <span className="font-mono text-blue-500 font-bold">0011</span> — matching what we computed
              during encryption exactly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Reverse Round 1 (using K1 = 1100)</h3>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Step</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Calculation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R0 = L1</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">R0 is simply L1 (from L_{'{i+1}'} = R_i rule)</td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-green-600 font-bold">0100</span> ✓</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">F(L1, K1)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-green-600 font-bold">0100</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-foreground font-bold">1100</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-blue-500 font-bold">1000</span></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">L0 = R1 ⊕ F(L1, K1)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">
                      <span className="font-mono text-blue-500 font-bold">0011</span>
                      {' '}⊕{' '}
                      <span className="font-mono text-blue-500 font-bold">1000</span>
                    </td>
                    <td className="py-2 px-3 font-mono"><span className="font-mono text-foreground font-bold">1011</span> ✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Recovered: L0 = <span className="font-mono text-foreground font-bold">1011</span>,
              R0 = <span className="font-mono text-green-600 font-bold">0100</span>
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Recovered Plaintext</h3>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`Recovered plaintext = L0 || R0
                    = 1011 || 0100
                    = 10110100  (0xB4) ✓`}</code></pre>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <p className="text-sm font-semibold text-foreground mb-2">Key observation</p>
              <p className="text-sm text-muted-foreground">
                At no point during decryption did we ever compute the inverse of F. We evaluated F in the
                same forward direction each time — F(L2, K2) = L2 ⊕ K2 and F(L1, K1) = L1 ⊕ K1. The
                XOR self-cancellation property handled the inversion automatically. This is the core
                property that makes Feistel networks so powerful: F can be any function, however
                non-invertible, and decryption still works.
              </p>
            </div>

            {/* Section 6 */}
            <h2 id="des" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              How DES Uses the Feistel Structure
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              DES (Data Encryption Standard), standardised in 1977, is the most famous Feistel cipher and
              the template against which all successors are measured. Its structure scales our simple 2-round
              example to industrial strength.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">DES Parameters</h3>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Block size:</strong> 64 bits (two 32-bit halves)</li>
                <li><strong className="text-foreground">Key length:</strong> 64 bits (56 bits effective — 8 parity bits are discarded)</li>
                <li><strong className="text-foreground">Rounds:</strong> 16</li>
                <li><strong className="text-foreground">Round key size:</strong> 48 bits per round (16 × 48 = 768 bits total generated by key schedule)</li>
                <li><strong className="text-foreground">Output:</strong> 64 bits of ciphertext (final swap: R16 &#8741; L16)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The DES Round Function F</h3>
            <p className="text-base text-muted-foreground mb-4">
              Unlike our toy F(R, K) = R ⊕ K, the DES round function is an elaborate pipeline designed
              to maximise diffusion (spreading each input bit&apos;s influence) and confusion (obscuring the
              relationship between key and ciphertext). It takes a 32-bit R_i and a 48-bit round key K_i,
              and produces a 32-bit output:
            </p>
            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Step</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Operation</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Input → Output</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">1</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Expansion (E)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">32 bits → 48 bits</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Some bits repeated to match key size; increases diffusion</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">2</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Key XOR</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">48 ⊕ 48 → 48 bits</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Mix round key into expanded block</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">3</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">S-box substitution (8 S-boxes)</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">48 bits → 32 bits</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Non-linear lookup tables; source of DES security</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-muted-foreground font-mono">4</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">P-permutation</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">32 bits → 32 bits</td>
                    <td className="py-2 px-3 text-muted-foreground font-mono">Bit permutation spreads S-box outputs across next round&apos;s inputs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">S-boxes</strong> (Substitution boxes) are the heart of
              DES. Each S-box maps a 6-bit input to a 4-bit output via a fixed lookup table. The tables were
              chosen by the NSA to resist differential cryptanalysis — a technique not publicly known until
              1990. Eight S-boxes operating in parallel take the 48-bit XOR output and compress it to 32 bits.
              The non-linearity they introduce is the only reason a linear attack cannot reconstruct the key
              directly.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The DES Key Schedule</h3>
            <p className="text-base text-muted-foreground mb-4">
              The 64-bit master key is processed into 16 round keys of 48 bits each:
            </p>
            <pre className="bg-muted/50 border border-border rounded-xl p-5 overflow-x-auto mb-6"><code className="text-sm font-mono text-foreground">{`1. PC-1 permutation: 64-bit key → 56 bits (8 parity bits removed)
2. Split into C (28 bits) and D (28 bits)
3. For each round i = 1..16:
   a. Rotate C and D left by 1 or 2 positions (schedule defines how many)
   b. Concatenate C || D → 56 bits
   c. PC-2 permutation: 56 bits → 48-bit round key K_i`}</code></pre>
            <p className="text-base text-muted-foreground mb-4">
              For decryption, the key schedule runs in reverse: the PC-2 and rotation steps are undone to
              produce the round keys in reverse order (K16, K15, …, K1). The decryption circuit is otherwise
              byte-for-byte identical to the encryption circuit — a major hardware efficiency win.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why DES Is No Longer Used</h3>
            <p className="text-base text-muted-foreground mb-4">
              DES was broken in 1999 when the EFF&apos;s &ldquo;Deep Crack&rdquo; machine, combined with
              distributed.net computing, exhausted the entire 56-bit key space in{' '}
              <strong className="text-foreground">22 hours and 15 minutes</strong>. The 56-bit key — only
              2⁵⁶ ≈ 72 quadrillion possible values — was simply too small for modern hardware to resist
              brute-force search. The Feistel structure itself was never broken; only the key size was
              insufficient. 3DES extended DES&apos;s life by applying it three times in an
              Encrypt-Decrypt-Encrypt sequence with different keys, achieving roughly 112-bit effective
              security — but it is now deprecated and replaced by AES.
            </p>

            {/* Section 7 */}
            <h2 id="other-ciphers" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Other Famous Feistel Ciphers
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The Feistel structure spread far beyond DES. Here are the most historically and practically
              significant examples:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Blowfish (1993)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Designed by <strong className="text-foreground">Bruce Schneier</strong> in 1993 as a fast,
              free alternative to DES. Blowfish uses a 64-bit block size, a variable key length from 32 to
              448 bits, and 16 Feistel rounds. Its most distinctive feature is a complex key schedule
              that takes a significant amount of computation to initialise — the subkeys and S-boxes are
              derived from the digits of π (pi), requiring thousands of DES-equivalent operations.
              Blowfish itself has not been broken, but its 64-bit block size makes it vulnerable to
              birthday attacks on large datasets. Its lasting legacy is{' '}
              <strong className="text-foreground">bcrypt</strong>, the password hashing function based on
              Blowfish that remains the standard for hashing passwords in most web applications today.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Twofish (1998)</h3>
            <p className="text-base text-muted-foreground mb-4">
              A Feistel cipher with a 128-bit block size, supporting 128, 192, and 256-bit keys, using
              16 rounds. Twofish was one of five AES finalists — it was not selected, but not broken either.
              Its design innovations include <strong className="text-foreground">dependent S-boxes</strong>
              (S-boxes whose contents are derived from the key), a Maximum Distance Separable (MDS) matrix
              for diffusion, and a PHT (Pseudo-Hadamard Transform). Twofish remains unbroken and is used
              in some file encryption tools.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">CAST-128 (1996)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Designed by <strong className="text-foreground">Carlisle Adams and Stafford Tavares</strong>
              and adopted in PGP (Pretty Good Privacy) and OpenPGP. Uses a 64-bit block, keys from 40 to
              128 bits, and 12 or 16 rounds. CAST-128 uses three different types of round functions
              alternated across rounds, each type using different combinations of addition, subtraction,
              XOR, and rotation operations. Still in active use in legacy PGP implementations.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Camellia (2000)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Developed jointly by <strong className="text-foreground">Mitsubishi Electric and NTT</strong>
              in 2000. Camellia supports 128-bit blocks with 128, 192, or 256-bit keys, using 18 or 24
              Feistel rounds. It has been approved for use in TLS 1.2, approved by the NSA for classified
              information, and is mandated in several Japanese government standards. Camellia is widely used
              in Japan and Europe and remains unbroken.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Skipjack (1998)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Designed by the <strong className="text-foreground">NSA</strong> and used in the Clipper chip
              — the US government&apos;s controversial 1993 initiative to build a back-doored encryption
              chip for telephones. Skipjack uses a 64-bit block, an 80-bit key, and 32 rounds. The algorithm
              was classified until 1998. The Clipper chip initiative failed due to public opposition to
              the built-in key escrow (law enforcement back door).
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">RC5 (1994)</h3>
            <p className="text-base text-muted-foreground mb-4">
              Designed by <strong className="text-foreground">Ron Rivest</strong>. RC5 is notable for its
              elegance and parameterisability: the block size, key size, and number of rounds are all
              variable. It introduced data-dependent rotations — bit rotations where the amount of rotation
              depends on the data being processed — making it highly resistant to differential and linear
              cryptanalysis. RC5-32/12/16 (32-bit words, 12 rounds, 16-byte key) is the most common
              variant and has not been broken.
            </p>

            {/* Section 8 */}
            <h2 id="feistel-vs-spn" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Feistel vs Substitution-Permutation Network (SPN)
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              AES, the current global standard for symmetric encryption, does not use the Feistel structure.
              It uses a <strong className="text-foreground">Substitution-Permutation Network (SPN)</strong>.
              Understanding the difference reveals the trade-offs in modern cipher design.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              In an SPN, <strong className="text-foreground">the entire block is transformed each round</strong> —
              there is no left/right split. Every round applies substitution (S-boxes) and permutation to all
              128 bits simultaneously. AES uses a 4×4 matrix of bytes (the &ldquo;state&rdquo;) and applies
              four operations per round: SubBytes (16 parallel S-box lookups), ShiftRows (row rotation),
              MixColumns (MDS matrix multiplication), and AddRoundKey (XOR with round key).
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border bg-secondary/50">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Feature</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Feistel Network</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">SPN (AES)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['Block processing', 'Half block per round', 'Full block per round'],
                    ['Diffusion speed', 'Slower (half untouched per round)', 'Faster (entire block each round)'],
                    ['Rounds needed', 'More (16+ for DES)', 'Fewer (10–14 for AES)'],
                    ['Decryption', 'Same circuit, reversed key schedule', 'Different circuit OR self-inverse components'],
                    ['F function invertibility', 'Not required', 'Components must be invertible'],
                    ['Hardware efficiency', 'Excellent (shared enc/dec)', 'Good (separate enc/dec logic)'],
                    ['Examples', 'DES, Blowfish, Twofish, Camellia', 'AES, PRESENT, SERPENT'],
                    ['Theoretical foundation', 'Luby-Rackoff theorem (1988)', 'Shannon\'s confusion/diffusion'],
                  ].map(([feature, feistel, spn]) => (
                    <tr key={feature}>
                      <td className="py-2 px-3 text-foreground font-semibold text-xs">{feature}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono text-xs">{feistel}</td>
                      <td className="py-2 px-3 text-muted-foreground font-mono text-xs">{spn}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The Feistel structure&apos;s biggest advantage — using the same circuit for encryption and
              decryption — was enormously valuable when hardware was expensive and chip area was at a premium.
              Today, when AES hardware accelerators are built into every modern CPU (Intel AES-NI instructions,
              ARM Cryptography Extensions), this advantage is less decisive. But for constrained environments
              (smart cards, IoT devices, embedded systems), the Feistel shared-circuit property still matters.
            </p>

            {/* Section 9 */}
            <h2 id="why-brilliant" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Why the Feistel Structure Is Brilliant
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Step back from the mechanics for a moment and appreciate what Feistel actually accomplished.
              The fundamental problem in symmetric cipher design is this: you want to build a{' '}
              <strong className="text-foreground">pseudorandom permutation</strong> — a function that looks
              random to any attacker who doesn&apos;t know the key, but that is perfectly reversible to
              someone who does. Building functions that are hard to invert is easy (hash functions do this).
              Building functions that are <em>easy</em> to invert if you know the key, but hard to invert
              otherwise, is far more delicate.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Feistel&apos;s insight was that you can{' '}
              <strong className="text-foreground">separate these two problems entirely</strong>. Let F be
              whatever cryptographically strong one-way function you like — perhaps a hash function, perhaps
              an S-box network, perhaps something provably hard to invert. Then wrap it in the Feistel
              structure. The structure provides invertibility automatically, via XOR self-cancellation.
              You never need to worry about whether F is invertible. You just need F to be secure.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              This insight has a rigorous theoretical foundation. The{' '}
              <strong className="text-foreground">Luby-Rackoff theorem</strong> (1988, Michael Luby and
              Charles Rackoff) proves that:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">3 rounds</strong> with independent pseudorandom
                  round functions produce a <em>pseudorandom permutation (PRP)</em>: an adversary making
                  polynomial numbers of queries cannot distinguish the Feistel cipher from a truly random
                  permutation.
                </li>
                <li>
                  <strong className="text-foreground">4 rounds</strong> produce a{' '}
                  <em>strong pseudorandom permutation (SPRP)</em>: the same holds even if the adversary
                  can query both the cipher and its inverse.
                </li>
              </ul>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              Real ciphers use far more than 4 rounds because the round functions aren&apos;t truly random —
              they&apos;re keyed pseudorandom functions. But the Luby-Rackoff theorem gives designers a
              theoretical target: once you can show your round function is a secure PRF (pseudorandom
              function), you know how many Feistel rounds you need to build a secure block cipher on top
              of it. This mathematical rigour is rare in the history of cipher design, and it is part of
              why the Feistel structure dominated cryptography for three decades.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              There is also something deeply satisfying about the hardware implications. In the 1970s and
              1980s, implementing a block cipher in silicon was expensive. A chip that could only encrypt
              was half as useful as a chip that could also decrypt. The Feistel structure meant you could
              build one chip that does both, with only a trivial amount of control logic to reverse the
              key schedule. DES chips could encrypt at 50 Mbit/s in 1977 with modest silicon area. The
              same architecture that Feistel designed for efficiency is still showing up in the design
              of embedded cryptographic cores today.
            </p>

            {/* Section 10 — FAQ */}
            <h2 id="faq" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Frequently Asked Questions
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              What makes a Feistel cipher different from other block ciphers?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              A Feistel cipher splits each plaintext block into two equal halves and modifies only one half
              per round, using the other half and a round key as inputs to the round function F. The defining
              property is that F does not need to be invertible — decryption recovers the inputs by
              re-evaluating F in the forward direction and using XOR to cancel its effect. This is in contrast
              to Substitution-Permutation Networks like AES, which transform the entire block each round but
              require all component operations to be individually invertible.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              How many rounds does a Feistel cipher need to be secure?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              The theoretical minimum is 3 rounds for a pseudorandom permutation and 4 rounds for a strong
              pseudorandom permutation (Luby-Rackoff theorem, 1988). In practice, real ciphers use far more:
              DES uses 16, Blowfish 16, Twofish 16, Camellia 18 or 24, and Skipjack 32. The additional
              rounds provide a security margin against attacks on the specific round function being used,
              since real round functions are not perfectly random.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Is AES a Feistel cipher?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              No. AES (the Rijndael cipher, standardised in 2001) uses a Substitution-Permutation Network.
              Each AES round processes the entire 128-bit block — all 16 bytes simultaneously — through
              SubBytes, ShiftRows, MixColumns, and AddRoundKey. There is no left/right half split.
              Decryption requires inverse versions of SubBytes and MixColumns, unlike a Feistel cipher
              where the same F is used in both directions. Read more in our guide to{' '}
              <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">how AES-256 encryption works</Link>.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Why does decryption work with reversed keys?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Because the Feistel round is algebraically self-inverting. Given the output pair
              (L_{'{i+1}'}, R_{'{i+1}'}), you can always recover the input pair (L_i, R_i) as:
              R_i = L_{'{i+1}'} and L_i = R_{'{i+1}'} ⊕ F(L_{'{i+1}'}, K_i). XOR is its own inverse —
              A ⊕ B ⊕ B = A — so XOR-ing with F(L_{'{i+1}'}, K_i) precisely cancels the F(R_i, K_i) term
              that was introduced during encryption. Applying this reversal from round N down to round 1
              undoes all the encryption rounds in sequence, recovering the original plaintext.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Is the Feistel cipher still used today?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              Yes. While DES is retired and 3DES deprecated, several active Feistel ciphers remain in
              widespread use. Blowfish underlies bcrypt, the dominant algorithm for hashing passwords in
              web applications. Camellia is used in TLS 1.2 and TLS 1.3, approved by the NSA, and mandated
              in Japanese government cryptography standards. RC5 and Twofish appear in various niche
              applications. The Feistel structure itself continues to influence new cipher designs.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Who invented the Feistel cipher?
            </h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Horst Feistel</strong> (1915–1990), a German-American
              cryptographer, invented the structure while working at IBM Research in Yorktown Heights, New
              York, in the early 1970s. He was part of the IBM team working on a cipher called Lucifer.
              Feistel published the design publicly in a 1973 article in{' '}
              <em>Scientific American</em> titled &ldquo;Cryptography and Computer Privacy.&rdquo; The
              IBM team then worked with the US National Bureau of Standards (now NIST) to develop DES,
              standardised in 1977, which brought the Feistel structure to global prominence.
            </p>

            {/* Conclusion */}
            <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">
              Conclusion
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The Feistel cipher is one of those rare ideas in engineering where the elegance and the
              practicality reinforce each other perfectly. Horst Feistel&apos;s contribution — converting
              any function, invertible or not, into an invertible permutation by alternating XOR and
              half-block swaps — gave cipher designers freedom they had never had before. The round
              function F can be as complex, non-linear, and impenetrable as needed. The structure handles
              reversibility automatically.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              In the worked example above, you saw every bit of this in action on an 8-bit block with a
              trivial F = XOR round function: plaintext{' '}
              <span className="font-mono text-foreground font-bold">10110100</span> encrypted through two
              rounds to ciphertext{' '}
              <span className="font-mono text-green-600 font-bold">11010011</span>, and then completely
              recovered through decryption using the same algorithm with reversed keys, without ever
              computing F⁻¹. Scaled up to 64 bits and 16 rounds with S-boxes, permutations, and a
              48-bit key schedule, the same idea becomes DES. Scaled to 128 bits with dependent S-boxes
              and an MDS matrix, it becomes Twofish. The core concept is identical throughout.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The Luby-Rackoff theorem gives this intuition mathematical teeth: three rounds of Feistel
              with a random round function provably produces a pseudorandom permutation; four rounds
              produces a strong PRP. This is the theoretical backbone that makes Feistel-based ciphers
              not just pragmatically useful but rigorously defensible.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              AES has replaced DES as the global standard — not because the Feistel structure is weak,
              but because 56-bit keys are trivially brute-forced with modern hardware, and AES&apos;s
              SPN approach offers faster diffusion per round. But the Feistel structure lives on in
              bcrypt, Camellia, and dozens of other active ciphers. Understanding it is foundational to
              understanding modern symmetric cryptography.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              To deepen your cryptography knowledge, explore our guide to{' '}
              <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">
                what is 256-bit AES encryption
              </Link>
              {' '}(which compares the SPN approach to what you&apos;ve learned here), try our interactive{' '}
              <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">
                Caesar cipher decoder
              </Link>
              {' '}to see the simplest substitution cipher in action, or read our{' '}
              <Link href="/blog/one-time-pad-cipher-example" className="text-primary hover:underline">
                one-time pad cipher example
              </Link>
              {' '}to understand the only cipher with mathematically proven perfect secrecy. Each of these
              builds on different foundational ideas — together they give you a complete map of how
              symmetric cryptography actually works.
            </p>
          </div>
        </article>
      </main>
    </>
  )
}
