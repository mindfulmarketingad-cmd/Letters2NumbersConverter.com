import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/types-of-ciphers-and-codes`
const PUBLISHED = '2026-05-15T00:00:00.000Z'

export const metadata: Metadata = {
  title: { absolute: 'Types of Ciphers and Codes' },
  description:
    'Discover the full spectrum of types of ciphers and codes — from Caesar and Vigenère to AES and RSA — plus the crucial code vs cipher distinction most people get wrong.',
  keywords: [
    'types of ciphers and codes',
    'types of ciphers',
    'types of codes',
    'cipher vs code',
    'substitution cipher',
    'transposition cipher',
    'symmetric encryption',
    'classical ciphers',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Types of Ciphers and Codes — The Complete Guide',
    description:
      'The definitive guide to every major type of cipher and code — explaining the code vs cipher distinction, substitution, transposition, historical codes, and modern encryption.',
    type: 'article',
    url: PAGE_URL,
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Types of Ciphers and Codes — The Complete Guide',
  description:
    'The definitive guide to every major type of cipher and code, covering the code vs cipher distinction, substitution ciphers, transposition ciphers, famous historical codes, and modern encryption.',
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
      name: 'What is the difference between a cipher and a code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cipher operates at the character or bit level — it transforms individual letters or bytes using a mathematical rule and a key. A code replaces whole words, phrases, or concepts with substitute symbols from a shared codebook. Using a Caesar cipher, HELLO becomes KHOOR by shifting each letter. Using a military code, the word HELLO might be replaced with a number like 5791 from a lookup table. The algorithms are public in ciphers; codes derive security from keeping the codebook secret.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the two main families of classical ciphers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All classical ciphers fall into one of two families: substitution ciphers (which replace letters with different letters or symbols while keeping them in the same positions) and transposition ciphers (which rearrange the positions of letters without changing them). Many real-world ciphers combine both techniques — these are called product ciphers. Modern block ciphers like AES apply multiple rounds of substitution and transposition at the bit level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was the Zimmermann Telegram a code or a cipher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Zimmermann Telegram of 1917 used a diplomatic code — specifically German codebook 13040 — in which numbers substituted for entire words and phrases. For example, the number 13850 represented "Mexico." This is a classic code, not a cipher: it replaced whole concepts rather than transforming individual letters. British intelligence in Room 40 broke it by obtaining and partially reconstructing the German codebook.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morse code a cipher?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Morse code is a code, not a cipher. It encodes letters and numbers as sequences of dots and dashes, but it does not hide the meaning of the message — anyone who knows Morse can read it. A cipher, by contrast, is specifically designed to conceal the message from unauthorised readers. Morse code transmissions were entirely readable by anyone with a receiver and the publicly known Morse table.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I identify which type of cipher I am looking at?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the length: if the ciphertext and plaintext are the same length and use the same character set, it is likely a substitution or transposition cipher. If the characters differ from the expected alphabet (e.g. numbers, symbols, or grids), look for substitution systems like Polybius, A1Z26, or Pigpen. If the message looks like rearranged letters with nothing changed, suspect transposition. Dots and dashes are almost certainly Morse. Numbers substituting for letters often indicate A1Z26 or a code.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cipher is used to protect internet traffic today?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Modern HTTPS connections use TLS 1.3, which combines asymmetric cryptography (ECDHE for key exchange) with symmetric encryption (typically AES-256-GCM for bulk data) and hash-based message authentication (HMAC-SHA256 or SHA384). So when you see the padlock icon in your browser, at least two cipher types are working in concert: a public-key cipher to establish the session, and a symmetric block cipher to protect the actual data.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Types of Ciphers and Codes', item: PAGE_URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground not-prose">
              <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li aria-hidden="true" className="select-none">/</li>
                <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                <li aria-hidden="true" className="select-none">/</li>
                <li className="text-foreground font-medium">Types of Ciphers and Codes</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              Types of Ciphers and Codes — The Complete Guide
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">By Letters2NumbersConverter.com | {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Lead paragraph */}
            <p className="text-base text-muted-foreground mb-4">
              Ask most people what the difference between a code and a cipher is, and they will shrug. The two words are used interchangeably in everyday speech, in headlines, in spy novels — even in many cryptography textbooks. But the distinction is not pedantic. It is <strong className="text-foreground">fundamental</strong>. Understanding it unlocks the entire logic of cryptographic history, from ancient Sparta to modern TLS. This guide covers both families in full — their history, their mechanics, their strengths, their weaknesses, and exactly where they sit in the taxonomy of secret communication.
            </p>

            {/* Table of Contents */}
            <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8 not-prose" aria-label="Table of contents">
              <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
              <ol className="space-y-1.5 text-sm list-decimal list-inside">
                <li><a href="#codes-vs-ciphers" className="text-primary hover:underline">The Distinction Most People Get Wrong: Codes vs Ciphers</a></li>
                <li><a href="#two-fundamental-families" className="text-primary hover:underline">The Two Fundamental Cipher Families</a></li>
                <li><a href="#substitution-ciphers" className="text-primary hover:underline">Substitution Ciphers — A Deep Dive</a></li>
                <li><a href="#transposition-ciphers" className="text-primary hover:underline">Transposition Ciphers — A Deep Dive</a></li>
                <li><a href="#famous-historical-codes" className="text-primary hover:underline">Famous Historical Codes (Not Ciphers)</a></li>
                <li><a href="#modern-symmetric-encryption" className="text-primary hover:underline">Modern Symmetric Encryption</a></li>
                <li><a href="#modern-asymmetric-encryption" className="text-primary hover:underline">Modern Asymmetric (Public-Key) Encryption</a></li>
                <li><a href="#taxonomy-table" className="text-primary hover:underline">Complete Taxonomy Table</a></li>
                <li><a href="#how-to-identify-cipher-type" className="text-primary hover:underline">How to Identify Which Type of Cipher You Are Looking At</a></li>
                <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
                <li><a href="#conclusion" className="text-primary hover:underline">Conclusion and Related Tools</a></li>
              </ol>
            </nav>

            {/* ── SECTION 1: Codes vs Ciphers ────────────────────────────────────── */}
            <h2 id="codes-vs-ciphers" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The Distinction Most People Get Wrong: Codes vs Ciphers
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Here is the single most important sentence in this entire guide: <strong className="text-foreground">a code replaces whole words or concepts; a cipher transforms individual letters or bits</strong>. Everything else flows from that.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Is a Code?</h3>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">code</strong> is a system that substitutes entire words, phrases, or ideas with other symbols — typically drawn from a pre-agreed <em>codebook</em>. The substitution happens at the semantic level, not the letter level. Classic military phrase codes are the clearest example: &ldquo;Eagle has landed&rdquo; means the mission succeeded. &ldquo;Flowers are blooming in the valley&rdquo; might mean the invasion begins at dawn. Neither phrase has any linguistic relationship to what it represents; the meaning lives only in the shared codebook.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The most celebrated code in military history is the <strong className="text-foreground">Navajo Code Talkers</strong> system used by the United States Marine Corps in the Pacific Theatre of World War II. The Navajo language — with its extraordinarily complex tonal structure and the fact that it had never been written down — was used to represent entire military concepts. A tank was <strong className="text-foreground">&ldquo;chay-da-gahi&rdquo;</strong> (tortoise). A submarine was <strong className="text-foreground">&ldquo;besh-lo&rdquo;</strong> (iron fish). A general was <strong className="text-foreground">&ldquo;bi-khe-he&rdquo;</strong> (war chief). These were not encrypted Navajo words — they were new code terms invented specifically for military communication, intelligible only to the code talkers who shared the codebook. The Japanese never broke it.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Security in a code comes entirely from <strong className="text-foreground">secrecy of the codebook</strong>. If the enemy obtains the codebook, the code is immediately and completely broken. There is no mathematical complexity to fall back on. This brittleness is one reason codes have largely been replaced by ciphers in modern cryptography — you cannot rotate a codebook as quickly as you can rotate a key.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What Is a Cipher?</h3>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">cipher</strong> operates at the character or bit level. It takes individual letters (in classical cryptography) or individual bytes and bits (in modern cryptography) and transforms them according to a <strong className="text-foreground">fixed algorithm</strong> combined with a <strong className="text-foreground">secret key</strong>. The algorithm itself can be entirely public — and in modern cryptography, it <em>is</em> entirely public. Kerckhoffs&apos;s Principle (1883) states that a cryptosystem should be secure even if everything about the system except the key is public knowledge.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Take the Caesar cipher. The algorithm is: shift each letter forward in the alphabet by some number of positions. With a shift of 3, the word <span className="font-mono text-foreground font-bold">HELLO</span> becomes <span className="font-mono text-green-600 font-bold">KHOOR</span>. The algorithm is public knowledge — Julius Caesar described it himself, and every cryptography student learns it in week one. The key (the shift amount, in this case 3) is what must remain secret. Knowing the algorithm but not the key does not immediately reveal the message.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              This architecture — public algorithm, secret key — is the foundation of all modern cryptography, from AES to RSA to the TLS encryption protecting this very web page.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 not-prose">
              <p className="text-sm font-semibold text-foreground mb-3">The Core Distinction at a Glance</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Property</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Code</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Cipher</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="py-2 px-3 text-muted-foreground font-semibold">Unit of operation</td>
                      <td className="py-2 px-3 text-muted-foreground">Words / phrases / concepts</td>
                      <td className="py-2 px-3 text-muted-foreground">Individual letters or bits</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-2 px-3 text-muted-foreground font-semibold">Security source</td>
                      <td className="py-2 px-3 text-muted-foreground">Secrecy of codebook</td>
                      <td className="py-2 px-3 text-muted-foreground">Secrecy of key (algorithm is public)</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-2 px-3 text-muted-foreground font-semibold">Required to break</td>
                      <td className="py-2 px-3 text-muted-foreground">Obtain or reconstruct the codebook</td>
                      <td className="py-2 px-3 text-muted-foreground">Discover the key</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="py-2 px-3 text-muted-foreground font-semibold">Brittleness</td>
                      <td className="py-2 px-3 text-muted-foreground">Total — one codebook capture = complete break</td>
                      <td className="py-2 px-3 text-muted-foreground">Partial — capturing key material can be mitigated</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 text-muted-foreground font-semibold">Modern use</td>
                      <td className="py-2 px-3 text-muted-foreground">Rare (jargon, slang, signal flags)</td>
                      <td className="py-2 px-3 text-muted-foreground">Universal — all modern encryption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">A Historical Case Study: The Zimmermann Telegram (1917)</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">Zimmermann Telegram</strong> is one of the most consequential intelligence coups in history — and it is a perfect example of a code, not a cipher. In January 1917, German Foreign Secretary Arthur Zimmermann sent a telegram to the German Ambassador in Mexico, proposing a military alliance against the United States and promising to help Mexico recover Texas, New Mexico, and Arizona. The message was encrypted using German diplomatic codebook 13040, in which five-digit numbers substituted for entire words and phrases. The number <strong className="text-foreground">13850</strong> represented &ldquo;Mexico.&rdquo; The number <strong className="text-foreground">67893</strong> represented &ldquo;alliance.&rdquo;
            </p>
            <p className="text-base text-muted-foreground mb-4">
              British signals intelligence in <strong className="text-foreground">Room 40</strong> had obtained a partial copy of the codebook and was able to reconstruct enough of it to decode the telegram. The revelation of its contents outraged the American public and was a significant factor in America&apos;s entry into World War I in April 1917. The security failure was a codebook failure — once the codebook was partially compromised, the entire system collapsed. A well-implemented cipher with a securely managed key would not have suffered the same fate from a single intelligence acquisition.
            </p>

            {/* ── SECTION 2: Two Fundamental Families ───────────────────────────── */}
            <h2 id="two-fundamental-families" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              The Two Fundamental Cipher Families
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Every classical cipher — and, at a deeper level, every modern one — belongs to one of two fundamental families: <strong className="text-foreground">substitution</strong> or <strong className="text-foreground">transposition</strong>. Understanding this division makes the entire history of cryptography coherent rather than a confusing parade of unrelated systems.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Substitution Ciphers</h3>
            <p className="text-base text-muted-foreground mb-4">
              In a <strong className="text-foreground">substitution cipher</strong>, each letter (or group of letters) is replaced by a different letter, number, or symbol. The <em>positions</em> of the letters are preserved — the first letter of the plaintext maps to the first letter of the ciphertext, the second to the second, and so on — but the identity of each letter is changed. Caesar, Vigenère, ROT13, and Enigma are all substitution ciphers.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The natural weakness of substitution ciphers is that they preserve the frequency distribution of letters. In English, the letter E appears roughly 12.7% of the time. If you apply a simple Caesar cipher and count the most frequent character in the ciphertext, you will almost certainly find that it occurs about 12.7% of the time too — it is just been shifted to a different letter. <strong className="text-foreground">Frequency analysis</strong>, developed by the Arab polymath Al-Kindi in the 9th century, exploits exactly this property.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Transposition Ciphers</h3>
            <p className="text-base text-muted-foreground mb-4">
              In a <strong className="text-foreground">transposition cipher</strong>, the letters themselves are unchanged, but their <em>positions</em> are rearranged according to some rule. If you take the message HELLO and write it in reverse, you get OLLEH — a trivial transposition. More sophisticated systems use grids, spirals, or key-controlled column orderings. Transposition ciphers preserve letter frequency exactly (the ciphertext contains the same letters as the plaintext, just reordered), which means they have a complementary vulnerability: an anagram attack can sometimes recover the plaintext without knowing the key.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Product Ciphers and Modern Descendants</h3>
            <p className="text-base text-muted-foreground mb-4">
              The real insight of 20th-century cryptography is that <strong className="text-foreground">combining substitution and transposition dramatically improves security</strong>. Claude Shannon formalised this in his 1949 paper &ldquo;Communication Theory of Secrecy Systems,&rdquo; introducing the concepts of <em>confusion</em> (obscuring the relationship between plaintext and ciphertext — what substitution provides) and <em>diffusion</em> (spreading the influence of one plaintext bit across many ciphertext bits — what transposition provides). A cipher that provides both confusion and diffusion is far harder to cryptanalyse than one that provides only one.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Modern block ciphers like <strong className="text-foreground">AES</strong> implement this vision at the bit level. Each of AES&apos;s rounds applies SubBytes (substitution via S-box lookups) and then ShiftRows + MixColumns (transposition and diffusion operations). After 14 rounds, every output bit depends on every input bit in a complex, unpredictable way. The structure is a product cipher carried to its mathematical extreme.
            </p>

            {/* ── SECTION 3: Substitution Ciphers ───────────────────────────────── */}
            <h2 id="substitution-ciphers" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Substitution Ciphers — A Deep Dive
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Substitution ciphers divide into four major sub-families based on how many cipher alphabets they use, and whether they operate on single letters or groups of letters.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3a. Monoalphabetic Substitution — One Cipher Alphabet</h3>
            <p className="text-base text-muted-foreground mb-4">
              In a <strong className="text-foreground">monoalphabetic substitution cipher</strong>, a single fixed mapping transforms every letter in the plaintext. The letter A always becomes the same cipher letter; B always becomes the same cipher letter; and so on throughout the entire message. This consistency is both its defining feature and its fatal weakness: frequency analysis works perfectly against it.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Caesar Cipher.</strong> The oldest documented cipher, attributed to Julius Caesar by Suetonius (writing c. 121 AD) and reportedly used by Caesar in his Gallic campaigns around 58 BC. The algorithm shifts every letter forward in the alphabet by a fixed amount. With a shift of 3 — Caesar&apos;s own preferred shift — <span className="font-mono text-foreground font-bold">HELLO</span> becomes <span className="font-mono text-green-600 font-bold">KHOOR</span> (H+3=K, E+3=H, L+3=O, L+3=O, O+3=R). There are only 25 possible non-trivial shifts, making it trivially vulnerable to brute force even without frequency analysis. Despite this, it remained in occasional military use for centuries because most people were illiterate, let alone capable of cryptanalysis. You can experiment with it using our <Link href="/tools/caesar-cipher-decoder" className="text-primary hover:underline">Caesar Cipher Decoder</Link>.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">ROT13.</strong> A special case of Caesar with a shift of 13. Because the English alphabet has 26 letters, ROT13 is its own inverse — applying it twice returns the original text. This makes it computationally trivial: encoding and decoding use identical operations. ROT13 was widely used on early internet forums and is still used on Reddit and news sites to obscure spoilers. It provides zero cryptographic security and is not intended to — it is purely an obfuscation convenience. Try it with our <Link href="/tools/rot13-decoder" className="text-primary hover:underline">ROT13 Decoder</Link>.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Atbash Cipher.</strong> One of the oldest ciphers in written history, originating in the Hebrew scribal tradition. Atbash maps each letter to its mirror image across the alphabet: A↔Z, B↔Y, C↔X, and so on. The name encodes its own logic: <em>Aleph</em> (first Hebrew letter) maps to <em>Tav</em> (last), <em>Beth</em> (second) maps to <em>Shin</em> (second-to-last) — Aleph-Tav-Beth-Shin = Atbash. The cipher appears in the Hebrew Bible itself: the Book of Jeremiah uses &ldquo;SHESHACH&rdquo; as an Atbash encoding of &ldquo;BABEL&rdquo; (Babylon), apparently to avoid a politically dangerous direct reference. It is monoalphabetic and thus trivially broken by frequency analysis. Our <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">Atbash Cipher Decoder</Link> will decode any Atbash message instantly.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Simple Substitution Cipher.</strong> Rather than using a structured shift, a simple substitution cipher uses a completely random mapping from the 26 plaintext letters to 26 cipher letters. There are <strong className="text-foreground">26! ≈ 4 × 10<sup>26</sup></strong> possible such mappings — vastly more than the 25 possible Caesar shifts. This sounds impressive; it is not sufficient protection. A message of any reasonable length (50+ characters) can be broken by a skilled analyst using frequency analysis, digraph analysis, and pattern matching in a matter of minutes. It remains a popular puzzle cipher precisely because it is solvable without a computer by a dedicated solver.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Affine Cipher.</strong> A mathematically structured monoalphabetic cipher that encrypts each letter using the formula <strong className="text-foreground">E(x) = (ax + b) mod 26</strong>, where x is the numeric value of the plaintext letter (A=0, B=1, ..., Z=25), a is the multiplicative key, and b is the additive key (shift). The constraint is that <strong className="text-foreground">gcd(a, 26) = 1</strong> — a must be coprime to 26 — otherwise some letters would map to the same ciphertext letter and decryption would be impossible. The valid values of a are: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25 (12 choices), and b can be any of 26 values, giving 12 × 26 = 312 distinct non-trivial affine ciphers. Still a monoalphabetic substitution, still vulnerable to frequency analysis.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3b. Polyalphabetic Substitution — Multiple Cipher Alphabets</h3>
            <p className="text-base text-muted-foreground mb-4">
              The decisive response to frequency analysis was the <strong className="text-foreground">polyalphabetic substitution cipher</strong> — a system that uses multiple different cipher alphabets, switching between them throughout the message. The same plaintext letter enciphered at different positions produces different ciphertext letters, destroying the frequency signature that makes monoalphabetic ciphers breakable.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Vigenère Cipher.</strong> Often misattributed to Blaise de Vigenère (who described it in 1586 but did not invent it), the cipher was actually invented by Giovan Battista Bellaso and published in 1553. It uses a repeating keyword to determine which of 26 Caesar alphabets to apply to each letter. If the keyword is <span className="font-mono text-foreground font-bold">LEMON</span>, then the first plaintext letter is shifted by L (11), the second by E (4), the third by M (12), the fourth by O (14), the fifth by N (13), and then the keyword repeats. The message <span className="font-mono text-foreground font-bold">HELLO</span> with keyword <span className="font-mono text-foreground font-bold">LEMON</span> becomes: H+L=S, E+E=I, L+M=X, L+O=Z, O+N=B — ciphertext <span className="font-mono text-green-600 font-bold">SIXZB</span>. The cipher was called &ldquo;le chiffre indéchiffrable&rdquo; (the unbreakable cipher) for nearly 300 years — until Friedrich Kasiski published his attack in 1863. Kasiski noticed that when a keyword repeats and happens to align with a repeated word in the plaintext, it produces repeated ciphertext sequences. By finding those repetitions and measuring the distances between them, an analyst can determine the probable keyword length — at which point the cipher decomposes into multiple independent Caesar ciphers, each trivially solved.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Enigma Machine.</strong> Germany&apos;s electromechanical cipher device used extensively in World War II represents the apotheosis of polyalphabetic substitution. Three to five rotors, each implementing a monoalphabetic substitution but rotating with each keypress (so that pressing A twice produces two different outputs), combined with a plugboard that performed an additional substitution, created a cipher with approximately <strong className="text-foreground">158 quintillion (1.58 × 10<sup>20</sup>) possible settings</strong> — reconfigured daily. The critical operational security failures that enabled Allied codebreakers at Bletchley Park to crack it were not mathematical weaknesses in the cipher itself, but procedural ones: repeated message keys, clichéd opening phrases (&ldquo;HEIL HITLER&rdquo;, weather reports always beginning with &ldquo;WETTER&rdquo;), and the fact that Enigma could never encipher a letter as itself. Alan Turing&apos;s <em>Bombe</em> machines exploited these patterns to reconstruct daily settings. You can explore the Enigma system with our <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">Enigma Machine Emulator</Link>.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">One-Time Pad.</strong> The theoretical endpoint of the polyalphabetic progression. Invented by Gilbert Vernam in 1917 and proved mathematically unbreakable by Claude Shannon in 1949, the one-time pad (OTP) uses a key that is: (1) truly random, (2) at least as long as the message, and (3) used only once. Each plaintext letter (or bit) is combined with the corresponding key letter (or bit) using modular addition (XOR for binary). With a truly random key used only once, the ciphertext reveals <em>zero</em> information about the plaintext — any plaintext of that length is equally consistent with the observed ciphertext, depending on what key was used. The OTP is the only cipher ever proven to be perfectly secure in the information-theoretic sense. The Moscow-Washington direct communication hotline established in 1963 (the famous &ldquo;hotline&rdquo;) originally used one-time pad encryption. The fatal practical weakness: distributing the pads securely is as hard as distributing the messages themselves.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3c. Polygraphic Substitution — Encrypting Groups of Letters</h3>
            <p className="text-base text-muted-foreground mb-4">
              Rather than encrypting single letters, <strong className="text-foreground">polygraphic ciphers</strong> encrypt pairs (digraphs) or larger groups of letters simultaneously. This eliminates single-letter frequency patterns and also destroys digraph frequencies, making frequency analysis significantly harder.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Playfair Cipher.</strong> Invented by Charles Wheatstone in 1854 (and named after Lord Playfair, who promoted it to the British government), the Playfair cipher encrypts pairs of letters using a 5×5 grid populated with the keyword followed by the remaining alphabet letters (I and J share a cell). Each pair of plaintext letters is encrypted by locating them in the grid and applying three simple geometric rules depending on whether they share a row, a column, or neither. Playfair was used by the British Army in World War I and World War II, and by Australian forces into the 1940s. It was considered more secure than simple substitution but is vulnerable to analysis of digraph frequencies. Our <Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">Playfair Cipher Solver</Link> can encode and decode Playfair messages.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Hill Cipher.</strong> Invented by mathematician Lester Hill in 1929, the Hill cipher uses linear algebra: it treats blocks of n plaintext letters as an n-dimensional vector and multiplies by an n×n key matrix (modulo 26). For a 2×2 matrix, it encrypts pairs of letters simultaneously. The Hill cipher is resistant to single-letter frequency analysis because each ciphertext letter depends on two or more plaintext letters. However, it is vulnerable to a <em>known-plaintext attack</em> — if an adversary has any plaintext-ciphertext pairs, they can solve for the key matrix using linear algebra. The Hill cipher is pedagogically important as it introduced matrix mathematics into mainstream cryptography.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3d. Homophonic Substitution — Many Symbols for Common Letters</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Homophonic substitution</strong> directly attacks the weakness that frequency analysis exploits. Rather than mapping each plaintext letter to exactly one ciphertext symbol, common letters (E, T, A, O, N) are given <em>multiple</em> possible ciphertext equivalents — homophones — while rare letters (Q, Z, X) may receive only one. An encipherer randomly selects from among the available equivalents for each letter, flattening the frequency distribution of the ciphertext. For example, the letter E (the most common in English, ~12.7%) might map to any of 12 different symbols (numbered 01–12), while Z might map to only one (symbol 53). A competent implementation makes the ciphertext frequencies nearly uniform, foiling standard frequency analysis.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The most famous real-world example is the <strong className="text-foreground">Zodiac Killer&apos;s Z408 cipher</strong>, a homophonic substitution cipher sent to San Francisco Bay Area newspapers in 1969. It used 54 distinct symbols to represent 26 letters, with symbols allocated proportionally to English letter frequency. Married school teachers Donald and Bettye Harden cracked it within a week using educated guesses and pattern matching, demonstrating that even homophonic ciphers are breakable given enough ciphertext and ingenuity. The Zodiac&apos;s second cipher, Z340, sent in 1969, resisted all attempts for 51 years until a team of amateur cryptanalysts cracked it in December 2020, discovering it used an additional transposition step that scrambled the rows of the homophonic substitution.
            </p>

            {/* ── SECTION 4: Transposition Ciphers ──────────────────────────────── */}
            <h2 id="transposition-ciphers" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Transposition Ciphers — A Deep Dive
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Where substitution changes what the letters <em>are</em>, transposition changes <em>where</em> they sit. The letters themselves remain identical; only their positions are shuffled. The key insight — demonstrated in the Zodiac Z340 example above — is that combining transposition with substitution creates systems far stronger than either alone.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Scytale — The First Military Cipher Device</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">scytale</strong> (pronounced skee-tah-lee) was used by Sparta from at least the 7th century BC, making it the oldest documented cipher device in military history. A strip of parchment or leather was wound in a tight helix around a cylindrical staff of a specific diameter. The message was written lengthwise along the staff — one letter per revolution of the strip. When the parchment was unwound, the letters appeared in a scrambled order, readable only when re-wound around a staff of identical diameter. The cipher is purely a transposition — every letter in the original message appears in the ciphertext; they are simply reordered by the geometry of the unwound parchment. It is trivially broken by modern analysis, but it was militarily effective in an era where very few people could read at all.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rail Fence Cipher</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">rail fence cipher</strong> writes the plaintext in a zigzag across a number of &ldquo;rails&rdquo; (imaginary horizontal lines) and then reads off the letters row by row. With two rails, the message <span className="font-mono text-foreground font-bold">HELLO WORLD</span> (ignoring the space) looks like this:
            </p>
            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 not-prose">
              <pre className="font-mono text-sm text-foreground whitespace-pre">{`Rail 1:  H . L . O . O . L .
Rail 2:  . E . L . W . R . D

Reading Rail 1: H L O O L
Reading Rail 2: E L W R D
Ciphertext:     `}<span className="font-mono text-green-600 font-bold">HLOOLEL WRD</span></pre>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              With more rails the pattern becomes more complex, but the security remains modest — the number of possible keys equals the number of rails, which is small. Rail fence is often used in puzzle books and escape rooms precisely because it is solvable by hand.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Columnar Transposition</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Columnar transposition</strong> writes the plaintext across the rows of a grid with a fixed column width, then reads off the columns in an order determined by a keyword. If the keyword is <span className="font-mono text-foreground font-bold">ZEBRA</span>, the columns are numbered 5-2-1-4-3 (alphabetical order of the keyword letters), and the ciphertext reads column 1 first, then column 2, then 3, then 4, then 5. This was a workhorse military cipher — the German Army used it in World War I, and the Union Army used a variant called the &ldquo;route cipher&rdquo; extensively during the American Civil War, where operators would read the grid in various patterns (spiral, diagonal, back-and-forth) for additional security.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Double columnar transposition</strong> — applying columnar transposition twice with potentially different keywords — was the workhorse of pre-computer military field cryptography. Used by British, French, and German forces in World War I and early World War II, it provided reasonable security against manual cryptanalysis even though it is vulnerable to mathematical attack. The German <em>Übchi</em> cipher used in WWI was a double columnar transposition that proved extremely difficult to crack under battlefield time pressure.
            </p>

            {/* ── SECTION 5: Famous Historical Codes ────────────────────────────── */}
            <h2 id="famous-historical-codes" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Famous Historical Codes (Not Ciphers)
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              With the code-versus-cipher distinction firmly established, here are the most significant historical <em>codes</em> — systems that operated at the word or concept level, not the letter level.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Navajo Code Talkers</h3>
            <p className="text-base text-muted-foreground mb-4">
              Developed for the United States Marine Corps from 1942, the Navajo code was a two-layer system. First, a set of code terms were created in Navajo — military concepts were assigned Navajo words drawn from nature and daily life (tank = tortoise, submarine = iron fish, fighter plane = humming bird, general = war chief). Second, for words not in the code vocabulary, the code talkers could spell out words letter by letter using a set of Navajo words that had been assigned to each English letter — similar to how aviation uses Alpha, Bravo, Charlie for letters, but with Navajo words and unpredictable assignments. The Navajo language&apos;s tonal complexity, its lack of any written form, and the impossibility of finding anyone outside the Navajo Nation who could understand it made it effectively unbreakable. Japanese signals intelligence never penetrated it. Major Howard Connor, who commanded Marine signal operations at Iwo Jima, said afterwards: &ldquo;Were it not for the Navajos, the Marines would never have taken Iwo Jima.&rdquo;
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Benedict Arnold&apos;s Book Cipher</h3>
            <p className="text-base text-muted-foreground mb-4">
              During the American Revolutionary War, Benedict Arnold and British Major John André communicated using a <strong className="text-foreground">book cipher</strong> based on Blackstone&apos;s <em>Commentaries on the Laws of England</em>. Each encoded word was represented by three numbers: the page number, the line number, and the position of the word in that line. This is a code in the strict sense — each reference replaced an entire word — and the security rested entirely on the secrecy of which book was being used. When André was captured in 1780 with papers on his person, the cipher was immediately recognisable as a book cipher, and American forces needed only to identify the book to read everything. The capture led directly to the revelation of Arnold&apos;s planned betrayal of West Point.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Morse Code and Signal Flags</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">Morse code</strong> — developed by Samuel Morse and Alfred Vail in the 1830s-40s — is technically a code, not a cipher. It encodes letters and digits as sequences of short and long signals (dots and dashes), but it does not conceal the content of the message: anyone with the publicly known Morse table can read every transmission. Morse code is an <em>encoding</em> — a representation system — rather than an encryption system. It is included here because it is universally called a &ldquo;code&rdquo; in everyday speech, and it is, correctly. You can convert between text and Morse using our <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link>.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Similarly, maritime <strong className="text-foreground">signal flags</strong> and <strong className="text-foreground">semaphore</strong> are codes — each flag or arm position represents a letter, digit, or standard phrase, and the meanings are published in internationally available codebooks. Security was never the goal; efficient communication at a distance was.
            </p>

            {/* ── SECTION 6: Modern Symmetric Encryption ────────────────────────── */}
            <h2 id="modern-symmetric-encryption" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Modern Symmetric Encryption
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Modern symmetric encryption — where the same key encrypts and decrypts — is the direct descendant of classical cipher design, but operating on bits rather than letters, and subject to rigorous mathematical analysis that no classical system ever received.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Stream Ciphers</h3>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">stream cipher</strong> encrypts one bit or byte at a time, generating a pseudorandom keystream and XORing it with the plaintext — a mechanised, modern implementation of the one-time pad principle. The key seeds a deterministic pseudorandom number generator (PRNG); the keystream it produces is XORed with the plaintext byte by byte. Security requires that the keystream be computationally indistinguishable from true randomness.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">RC4</strong>, designed by Ron Rivest in 1987 and widely used in SSL/TLS and WEP (Wi-Fi encryption) for decades, has been cryptographically broken and is deprecated. <strong className="text-foreground">ChaCha20</strong>, designed by Daniel Bernstein and standardized in 2018, is the modern successor — used in TLS 1.3 (as ChaCha20-Poly1305) and in Google&apos;s QUIC protocol. It is particularly efficient in software on platforms without hardware AES acceleration.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Block Ciphers and DES</h3>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">block cipher</strong> encrypts fixed-size blocks of data — 64 bits, 128 bits — rather than one bit at a time. <strong className="text-foreground">DES (Data Encryption Standard)</strong>, adopted by NIST in 1977, was the world&apos;s first standardised public encryption algorithm and dominated commercial and government cryptography for two decades. It operates on 64-bit blocks with a 56-bit key. In 1998, the Electronic Frontier Foundation&apos;s &ldquo;Deep Crack&rdquo; machine broke a DES key in 22 hours. In 1999, a combined Deep Crack and distributed.net effort broke it in under 23 hours. The problem was never the algorithm&apos;s design — it was the key size. <strong className="text-foreground">3DES (Triple DES)</strong> addressed this by applying DES three times with different keys, achieving an effective security level of approximately 112 bits. It was widely used in banking (ATMs, payment terminals) and was only officially deprecated by NIST in 2023.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">AES — The Advanced Encryption Standard</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">AES</strong>, standardized in 2001 as FIPS 197, is the current gold standard of symmetric encryption. Based on the Rijndael algorithm by Joan Daemen and Vincent Rijmen, it operates on 128-bit blocks and supports 128-, 192-, and 256-bit key sizes. AES-256 provides 2<sup>256</sup> possible keys — a number that exceeds the estimated count of atoms in the observable universe. No practical attack against AES exists. It is the symmetric cipher in TLS, full-disk encryption (BitLocker, FileVault), password managers, VPNs, and virtually every secure communication system in the modern world. For a deep technical dive, see our guide: <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">What Is 256-Bit AES Encryption?</Link>
            </p>

            {/* ── SECTION 7: Modern Asymmetric Encryption ───────────────────────── */}
            <h2 id="modern-asymmetric-encryption" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Modern Asymmetric (Public-Key) Encryption
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The most revolutionary development in cryptographic history was the discovery, in the 1970s, that it is possible to have an encryption system where the encryption key can be <em>public</em> — freely distributed to anyone — while the decryption key remains private. This solved the fundamental key distribution problem that had plagued symmetric cryptography for thousands of years: if Alice and Bob want to communicate secretly, how do they agree on a key without the enemy intercepting it?
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Diffie-Hellman Key Exchange</h3>
            <p className="text-base text-muted-foreground mb-4">
              Published by Whitfield Diffie and Martin Hellman in 1976, the <strong className="text-foreground">Diffie-Hellman key exchange</strong> is not a cipher at all — it is a protocol that allows two parties to establish a shared secret over a completely public channel, with no prior shared information. It is based on the mathematical hardness of the discrete logarithm problem: given g<sup>a</sup> mod p, it is computationally infeasible to find a. Alice sends g<sup>a</sup> mod p to Bob (over a public channel); Bob sends g<sup>b</sup> mod p to Alice. Each can compute g<sup>ab</sup> mod p, but an eavesdropper who sees only g<sup>a</sup> mod p and g<sup>b</sup> mod p cannot compute g<sup>ab</sup> mod p without solving the discrete logarithm. This key is then used with a symmetric cipher like AES to encrypt the actual conversation.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">RSA</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">RSA</strong> — named for Rivest, Shamir, and Adleman who published it in 1977 (though it was independently discovered earlier by Clifford Cocks at GCHQ, declassified 1997) — is the most widely deployed public-key cryptosystem in history. It generates a public key (n, e) and a private key (n, d) where n is the product of two large prime numbers p and q. Encrypting a message m is done with m<sup>e</sup> mod n; decrypting ciphertext c is done with c<sup>d</sup> mod n. Security rests on the integer factorisation problem — given n, finding p and q is computationally infeasible for sufficiently large n. RSA-2048 (a 2048-bit key) is currently considered secure; RSA-4096 is used where long-term security is required. RSA is used in TLS certificates (to authenticate websites) and in older key exchange protocols.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Elliptic Curve Cryptography (ECC)</h3>
            <p className="text-base text-muted-foreground mb-4">
              <strong className="text-foreground">ECC</strong>, developed independently by Neal Koblitz and Victor Miller in 1985, provides the same security as RSA with dramatically smaller key sizes, based on the hardness of the elliptic curve discrete logarithm problem. A 256-bit ECC key provides approximately the same security as a 3072-bit RSA key. Bitcoin uses the secp256k1 elliptic curve for its digital signatures. TLS 1.3 exclusively uses ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) for key exchange, replacing RSA key exchange entirely. ECC&apos;s smaller key sizes mean faster operations and smaller certificates — critical for performance at internet scale.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">ElGamal</h3>
            <p className="text-base text-muted-foreground mb-4">
              Proposed by Taher Elgamal in 1985, the <strong className="text-foreground">ElGamal cryptosystem</strong> is based on the same discrete logarithm problem as Diffie-Hellman. It is used for both encryption and digital signatures. The ElGamal signature scheme is the basis for the Digital Signature Algorithm (DSA) standardized by NIST in 1994, and its elliptic curve variant (ECDSA) is one of the primary digital signature algorithms in modern use, including Bitcoin transaction signing.
            </p>

            {/* ── SECTION 8: Taxonomy Table ──────────────────────────────────────── */}
            <h2 id="taxonomy-table" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Complete Taxonomy Table
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The following table covers the major types of ciphers and codes discussed in this guide, with key attributes for quick reference.
            </p>
            <div className="overflow-x-auto not-prose">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Name</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Type</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Era</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Key Space</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Broken?</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Still Used?</th>
                    <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Notable Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Scytale</td>
                    <td className="py-2 px-3 text-muted-foreground">Transposition</td>
                    <td className="py-2 px-3 text-muted-foreground">7th c. BC</td>
                    <td className="py-2 px-3 text-muted-foreground">~10–20 staff diameters</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">No</td>
                    <td className="py-2 px-3 text-muted-foreground">Spartan military</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Atbash</td>
                    <td className="py-2 px-3 text-muted-foreground">Monoalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">~600 BC</td>
                    <td className="py-2 px-3 text-muted-foreground">1 (fixed)</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzles only</td>
                    <td className="py-2 px-3 text-muted-foreground">Hebrew Bible (Jeremiah)</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Caesar</td>
                    <td className="py-2 px-3 text-muted-foreground">Monoalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">~58 BC</td>
                    <td className="py-2 px-3 text-muted-foreground">25</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzles, ROT13</td>
                    <td className="py-2 px-3 text-muted-foreground">Julius Caesar&apos;s campaigns</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Affine</td>
                    <td className="py-2 px-3 text-muted-foreground">Monoalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">Classical</td>
                    <td className="py-2 px-3 text-muted-foreground">312</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzles only</td>
                    <td className="py-2 px-3 text-muted-foreground">Academic study</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Simple Substitution</td>
                    <td className="py-2 px-3 text-muted-foreground">Monoalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">Classical</td>
                    <td className="py-2 px-3 text-muted-foreground">26! ≈ 4×10²⁶</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes (freq. analysis)</td>
                    <td className="py-2 px-3 text-muted-foreground">Cryptograms</td>
                    <td className="py-2 px-3 text-muted-foreground">Newspaper puzzles</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Playfair</td>
                    <td className="py-2 px-3 text-muted-foreground">Polygraphic subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">1854</td>
                    <td className="py-2 px-3 text-muted-foreground">~25! keyword combos</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">No</td>
                    <td className="py-2 px-3 text-muted-foreground">British WWI/WWII</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Vigenère</td>
                    <td className="py-2 px-3 text-muted-foreground">Polyalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">1553</td>
                    <td className="py-2 px-3 text-muted-foreground">26<sup>n</sup> (key length n)</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes (Kasiski 1863)</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzles only</td>
                    <td className="py-2 px-3 text-muted-foreground">300 years of field use</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Enigma</td>
                    <td className="py-2 px-3 text-muted-foreground">Polyalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">1918–1945</td>
                    <td className="py-2 px-3 text-muted-foreground">~1.58 × 10²⁰ settings</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes (Bletchley Park)</td>
                    <td className="py-2 px-3 text-muted-foreground">Emulators/museums</td>
                    <td className="py-2 px-3 text-muted-foreground">German WWII military</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">One-Time Pad</td>
                    <td className="py-2 px-3 text-muted-foreground">Polyalph. subst.</td>
                    <td className="py-2 px-3 text-muted-foreground">1917</td>
                    <td className="py-2 px-3 text-muted-foreground">Infinite (random key)</td>
                    <td className="py-2 px-3 text-muted-foreground">No — provably secure</td>
                    <td className="py-2 px-3 text-muted-foreground">Rare (impractical)</td>
                    <td className="py-2 px-3 text-muted-foreground">Moscow-DC hotline</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Rail Fence</td>
                    <td className="py-2 px-3 text-muted-foreground">Transposition</td>
                    <td className="py-2 px-3 text-muted-foreground">Classical</td>
                    <td className="py-2 px-3 text-muted-foreground">Small (# of rails)</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzles only</td>
                    <td className="py-2 px-3 text-muted-foreground">Puzzle books, escape rooms</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">Columnar Transposition</td>
                    <td className="py-2 px-3 text-muted-foreground">Transposition</td>
                    <td className="py-2 px-3 text-muted-foreground">19th–20th c.</td>
                    <td className="py-2 px-3 text-muted-foreground">n! (column orderings)</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes</td>
                    <td className="py-2 px-3 text-muted-foreground">No</td>
                    <td className="py-2 px-3 text-muted-foreground">German WWI, US Civil War</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">DES</td>
                    <td className="py-2 px-3 text-muted-foreground">Block cipher (symm.)</td>
                    <td className="py-2 px-3 text-muted-foreground">1977</td>
                    <td className="py-2 px-3 text-muted-foreground">2⁵⁶ ≈ 7.2 × 10¹⁶</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes (1999, 22 hrs)</td>
                    <td className="py-2 px-3 text-muted-foreground">No (deprecated)</td>
                    <td className="py-2 px-3 text-muted-foreground">First public standard</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">3DES</td>
                    <td className="py-2 px-3 text-muted-foreground">Block cipher (symm.)</td>
                    <td className="py-2 px-3 text-muted-foreground">1998</td>
                    <td className="py-2 px-3 text-muted-foreground">~2¹¹² effective</td>
                    <td className="py-2 px-3 text-muted-foreground">Theoretically weak</td>
                    <td className="py-2 px-3 text-muted-foreground">Phased out (deprecated 2023)</td>
                    <td className="py-2 px-3 text-muted-foreground">Banking, ATMs</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">AES-256</td>
                    <td className="py-2 px-3 text-muted-foreground">Block cipher (symm.)</td>
                    <td className="py-2 px-3 text-muted-foreground">2001</td>
                    <td className="py-2 px-3 text-muted-foreground">2²⁵⁶ ≈ 1.16 × 10⁷⁷</td>
                    <td className="py-2 px-3 text-muted-foreground">No</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes — universal standard</td>
                    <td className="py-2 px-3 text-muted-foreground">TLS, BitLocker, HTTPS</td>
                  </tr>
                  <tr className="border-b border-border/40 bg-primary/5">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">RSA-2048</td>
                    <td className="py-2 px-3 text-muted-foreground">Asymmetric (public-key)</td>
                    <td className="py-2 px-3 text-muted-foreground">1977</td>
                    <td className="py-2 px-3 text-muted-foreground">~2¹¹² effective</td>
                    <td className="py-2 px-3 text-muted-foreground">Not classically</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes (TLS certs)</td>
                    <td className="py-2 px-3 text-muted-foreground">Web PKI, digital signing</td>
                  </tr>
                  <tr className="border-b border-border/40">
                    <td className="py-2 px-3 text-muted-foreground font-semibold">ECC (P-256)</td>
                    <td className="py-2 px-3 text-muted-foreground">Asymmetric (public-key)</td>
                    <td className="py-2 px-3 text-muted-foreground">1985</td>
                    <td className="py-2 px-3 text-muted-foreground">~2¹²⁸ effective</td>
                    <td className="py-2 px-3 text-muted-foreground">Not classically</td>
                    <td className="py-2 px-3 text-muted-foreground">Yes — TLS 1.3 standard</td>
                    <td className="py-2 px-3 text-muted-foreground">HTTPS, Bitcoin, TLS 1.3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ── SECTION 9: How to Identify Cipher Type ────────────────────────── */}
            <h2 id="how-to-identify-cipher-type" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              How to Identify Which Type of Cipher You Are Looking At
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              When confronted with an unfamiliar coded or ciphered message — in a puzzle, an escape room, an investigation — the following decision process will quickly narrow down the possibilities.
            </p>

            <div className="bg-muted/50 border border-border rounded-xl p-5 mb-6 not-prose">
              <p className="text-sm font-semibold text-foreground mb-3">Quick Identification Checklist</p>
              <ol className="space-y-3 text-sm list-decimal list-inside text-muted-foreground">
                <li><strong className="text-foreground">Dots and dashes?</strong> Almost certainly Morse code. Try our <Link href="/tools/morse-code-translator" className="text-primary hover:underline">Morse Code Translator</Link>.</li>
                <li><strong className="text-foreground">Numbers only?</strong> Could be A1Z26 (A=1, B=2...), Polybius square (two-digit numbers 11–55), or a diplomatic code. Try A1Z26 first on our <Link href="/tools/a1z26-decoder" className="text-primary hover:underline">A1Z26 Decoder</Link>.</li>
                <li><strong className="text-foreground">Same length as plaintext, only letters?</strong> Likely a substitution cipher. Check for Caesar shift first — try all 25 possibilities. If no shift yields readable text, try frequency analysis for a general substitution.</li>
                <li><strong className="text-foreground">Same letters as you&apos;d expect but scrambled?</strong> Suspect a transposition cipher. Try rail fence and columnar transposition.</li>
                <li><strong className="text-foreground">Grid of dots and lines?</strong> Probably Pigpen cipher — a geometric substitution using angles of lines and presence of dots to represent letters.</li>
                <li><strong className="text-foreground">Flat frequency distribution?</strong> If letter frequencies are unusually flat, suspect a polyalphabetic cipher (Vigenère) or homophonic substitution. Apply the Kasiski test to find the key length.</li>
                <li><strong className="text-foreground">Completely stumped?</strong> Use our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> tool, which analyses statistical properties of the ciphertext and suggests the most likely cipher type.</li>
              </ol>
            </div>

            <p className="text-base text-muted-foreground mb-4">
              The most important general principle: <strong className="text-foreground">letter frequency is always your first diagnostic tool</strong>. Count how often each symbol appears. If one symbol appears dramatically more often than all others, you are likely looking at a monoalphabetic substitution and the most common symbol is probably E or T. If all symbols appear with roughly equal frequency, you are looking at either a polyalphabetic cipher, a homophonic cipher, or modern encryption (in which case the message is not designed to be manually decoded).
            </p>

            {/* ── SECTION 10: FAQ ────────────────────────────────────────────────── */}
            <h2 id="faq" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 not-prose">
              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between a cipher and a code?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  A cipher operates at the character or bit level — it transforms individual letters or bytes using a mathematical rule and a key. A code replaces whole words, phrases, or concepts with substitute symbols from a shared codebook. Using a Caesar cipher, <span className="font-mono text-foreground font-bold">HELLO</span> becomes <span className="font-mono text-green-600 font-bold">KHOOR</span> by shifting each letter. Using a military code, the word HELLO might be replaced with a completely arbitrary number or word from a lookup table. The algorithm is public in ciphers; codes derive security from keeping the codebook secret.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What are the two main families of classical ciphers?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  All classical ciphers fall into one of two families: <strong className="text-foreground">substitution ciphers</strong> (which replace letters with different letters or symbols while keeping them in the same positions) and <strong className="text-foreground">transposition ciphers</strong> (which rearrange the positions of letters without changing them). Many real-world ciphers combine both techniques — these are called product ciphers. Modern block ciphers like AES apply multiple rounds of substitution and transposition at the bit level.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Was the Zimmermann Telegram a code or a cipher?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  The Zimmermann Telegram of 1917 used a <strong className="text-foreground">diplomatic code</strong> — specifically German codebook 13040 — in which numbers substituted for entire words and phrases. For example, the number 13850 represented &ldquo;Mexico.&rdquo; This is a classic code, not a cipher: it replaced whole concepts rather than transforming individual letters. British intelligence in Room 40 broke it by obtaining and partially reconstructing the German codebook.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is Morse code a cipher?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  No. Morse code is a code, not a cipher. It encodes letters and numbers as sequences of dots and dashes, but it does not hide the meaning of the message — anyone who knows Morse can read it. A cipher, by contrast, is specifically designed to conceal the message from unauthorised readers. Morse code transmissions were entirely readable by anyone with a receiver and the publicly known Morse table.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I identify which type of cipher I am looking at?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Start with letter frequency analysis. If one symbol appears far more frequently than others, suspect monoalphabetic substitution. If frequencies are flat, suspect polyalphabetic or homophonic substitution. If the characters are the same letters as the expected plaintext (just reordered), suspect transposition. Dots and dashes are Morse. Numbers substituting for letters usually indicate A1Z26 or a code. Our <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> can help automate this analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What cipher is used to protect internet traffic today?</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Modern HTTPS connections use TLS 1.3, which combines asymmetric cryptography (ECDHE for key exchange) with symmetric encryption (typically <strong className="text-foreground">AES-256-GCM</strong> for bulk data) and hash-based message authentication. So when you see the padlock icon in your browser, at least two cipher types are working in concert: a public-key cipher to establish the session key, and a symmetric block cipher to protect the actual data stream. For more detail on AES, see our guide: <Link href="/blog/what-is-256-bit-aes-encryption" className="text-primary hover:underline">What Is 256-Bit AES Encryption?</Link>
                </p>
              </div>
            </div>

            {/* ── SECTION 11: Conclusion ─────────────────────────────────────────── */}
            <h2 id="conclusion" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">
              Conclusion and Related Tools
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              The landscape of types of ciphers and codes stretches from ancient Spartan parchment wrapped around sticks to the AES-256-GCM protecting every HTTPS connection you make today. The through-line is a single human impulse: the need to communicate something that only the intended recipient should understand.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              The most important thing to take from this guide is the foundational distinction: <strong className="text-foreground">codes work at the word level; ciphers work at the letter or bit level</strong>. From that distinction, everything else follows logically. Codes require shared codebooks and collapse entirely when the codebook is captured. Ciphers can be publicly described — only the key must remain secret — and modern ciphers provide security guarantees that are mathematically proven rather than merely hoped for.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Classical ciphers divide into substitution (change the letters) and transposition (rearrange the letters), with real-world systems typically combining both. Modern symmetric ciphers like AES extend this into the bit-level world with mathematical rigour. Modern asymmetric cryptography solved the key distribution problem that plagued every pre-1970 cryptographic system and made the secure internet possible.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              If you want to explore these systems hands-on, our tool suite covers all the major classical ciphers:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {[
                { href: '/tools/caesar-cipher-decoder', label: 'Caesar Cipher Decoder', desc: 'Encode and decode Caesar shifts instantly' },
                { href: '/tools/rot13-decoder', label: 'ROT13 Decoder', desc: 'The self-inverse shift-13 cipher' },
                { href: '/tools/atbash-cipher-decoder', label: 'Atbash Cipher Decoder', desc: 'The ancient A↔Z reversal cipher' },
                { href: '/tools/enigma-machine-emulator', label: 'Enigma Machine Emulator', desc: 'The German WWII rotor cipher, emulated' },
                { href: '/tools/playfair-cipher-solver', label: 'Playfair Cipher Solver', desc: 'Digraph substitution via 5×5 grid' },
                { href: '/tools/morse-code-translator', label: 'Morse Code Translator', desc: 'Convert text to and from dots and dashes' },
                { href: '/tools/cipher-identifier', label: 'Cipher Identifier', desc: 'Analyse unknown ciphertexts automatically' },
                { href: '/blog/what-is-256-bit-aes-encryption', label: 'What Is 256-Bit AES Encryption?', desc: 'Deep dive into modern symmetric encryption' },
              ].map(({ href, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors p-4"
                >
                  <span className="text-sm font-semibold text-primary block mb-1">{label}</span>
                  <span className="text-xs text-muted-foreground">{desc}</span>
                </Link>
              ))}
            </div>

          </div>
        </article>
      </main>
    </>
  )
}
