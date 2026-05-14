import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/what-is-an-enigma-code`
const PUBLISHED = '2026-05-14T00:00:00.000Z'
const PUBLISHED_DISPLAY = '2026-05-14'

export const metadata: Metadata = {
  title: 'What Is an Enigma Code — How the WWII Cipher Worked & Was Broken',
  description:
    'What is an Enigma code? It is a ciphertext message produced by the Enigma machine — a polyalphabetic cipher used by the German military in WWII. Learn how Enigma messages were structured, why they seemed unbreakable, and how Polish and British cryptanalysts cracked them.',
  keywords: [
    'what is an enigma code',
    'enigma code',
    'enigma machine cipher',
    'how enigma code works',
    'enigma code broken',
    'bletchley park enigma',
    'alan turing enigma',
    'enigma machine ww2',
    'enigma cipher explained',
    'polyalphabetic substitution cipher',
    'enigma bombe machine',
    'ultra intelligence',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'What Is an Enigma Code — How the WWII Cipher Worked & Was Broken',
    description:
      "A complete guide to Enigma codes: how the machine generated ciphertext, how the daily key system worked, and how Polish mathematicians and Alan Turing's Bombe cracked one of history's most complex ciphers.",
    type: 'article',
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    images: [
      {
        url: `${BASE_URL}/images/blog/cryptography.jpg`,
        width: 800,
        height: 450,
        alt: 'what is an enigma code — encrypted World War II Enigma ciphertext on paper tape',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is an Enigma Code — How the WWII Cipher Worked & Was Broken',
  description:
    'What is an Enigma code? It is a ciphertext message produced by the Enigma machine — a polyalphabetic cipher used by the German military in WWII.',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: `${BASE_URL}/images/blog/cryptography.jpg`,
  url: PAGE_URL,
  author: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
    url: BASE_URL,
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an Enigma code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Enigma code is a ciphertext message produced by the Enigma machine — an electro-mechanical cipher device used by the German military during World War II. Because the machine\'s rotors advanced with every keypress, the same plaintext letter could produce a different ciphertext letter each time, making it a polyalphabetic substitution cipher.',
      },
    },
    {
      '@type': 'Question',
      name: 'How was the Enigma code structured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enigma messages were transmitted by radio as groups of four or five letters. Each message began with a preamble containing the date/time, operator\'s discriminant, message length, and an encrypted message key. The message body was then encrypted using the day\'s shared key settings — rotor selection and order, ring settings, plugboard connections, and ground settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was the Enigma code considered unbreakable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With 3 rotors chosen from 5, over 17,576 rotor starting positions, 10 plugboard pairs, and ring settings, the total keyspace was approximately 1.59 × 10²⁰ configurations. Settings changed every 24 hours, so even a compromised day\'s settings left all other days\' traffic secure. German signals officers considered it mathematically impossible to break without the key.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who first broke the Enigma code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Polish mathematicians Marian Rejewski, Jerzy Różycki, and Henryk Zygalski first broke Enigma traffic in December 1932, using mathematical group theory and a reconstructed wiring diagram obtained partly through a German spy named Hans-Thilo Schmidt. They exploited the cryptographic flaw in the double-encryption of the message key.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the Bombe and how did it crack Enigma?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Bombe was an electromechanical machine designed by Alan Turing and Gordon Welchman at Bletchley Park. It tested thousands of rotor positions per minute to find valid Enigma settings based on known plaintext fragments called cribs — common phrases such as "WETTER" (weather) or "KEINE BESONDEREN EREIGNISSE" (nothing to report). A fundamental flaw — that Enigma\'s reflector meant no letter could ever encrypt to itself — made crib-based testing possible.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'What Is an Enigma Code',
      item: PAGE_URL,
    },
  ],
}

const keyDates: [string, string][] = [
  ['Dec 1932', 'Marian Rejewski breaks Enigma mathematically using group theory and intercepted key sheets'],
  ['Jul 1939', 'Poland shares its Enigma breakthroughs with Britain and France at a meeting near Warsaw'],
  ['Sep 1939', 'Germany invades Poland; Bletchley Park officially opens as Britain\'s codebreaking centre'],
  ['Mar 1940', 'First British Bombe (designed by Turing) installed at Bletchley Park'],
  ['May 1941', 'HMS Bulldog captures U-110 with intact Enigma machine and Naval key materials'],
  ['Aug 1941', 'Weather ship Lauenburg captured, yielding Naval Enigma key books'],
  ['Dec 1942', 'Naval Enigma (Shark) broken; multiple Bombes operational at Bletchley Park'],
  ['Jun 1944', 'ULTRA intelligence from Enigma decrypts contributes to D-Day planning and execution'],
  ['Apr 1945', 'Germany surrenders; Enigma used operationally until the final weeks of the war'],
]

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">What Is an Enigma Code</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Cryptography History
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              What Is an Enigma Code
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              What Is an Enigma Code? It is a ciphertext message produced by the Enigma machine — an electro-mechanical cipher device used by the German military during World War II to encrypt radio communications across every theatre of the war, from U-boat orders in the Atlantic to Luftwaffe weather reports over occupied Europe.
            </p>
            <p className="text-sm text-muted-foreground">
              By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
              {new Date(PUBLISHED_DISPLAY).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          {/* Hero Image */}
          <Image
            src="/images/blog/cryptography.jpg"
            alt="what is an enigma code — encrypted World War II Enigma ciphertext on paper tape"
            width={800}
            height={450}
            className="w-full rounded-xl mb-10 object-cover"
            priority
          />

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* Section 1 — What an Enigma code is */}
            <section>
                        <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#what-exactly-is-an-enigma-code" className="text-primary hover:underline">What Exactly Is an Enigma Code?</a></li>
            <li><a href="#how-an-enigma-message-was-structured" className="text-primary hover:underline">How an Enigma Message Was Structured</a></li>
            <li><a href="#the-daily-key-tagesschlssel" className="text-primary hover:underline">The Daily Key — Tagesschlüssel</a></li>
            <li><a href="#why-enigma-codes-seemed-unbreakable" className="text-primary hover:underline">Why Enigma Codes Seemed Unbreakable</a></li>
            <li><a href="#how-enigma-codes-were-broken" className="text-primary hover:underline">How Enigma Codes Were Broken</a></li>
            <li><a href="#notable-enigma-operations-and-captures" className="text-primary hover:underline">Notable Enigma Operations and Captures</a></li>
            <li><a href="#key-dates-in-the-breaking-of-enigma" className="text-primary hover:underline">Key Dates in the Breaking of Enigma</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#explore-further" className="text-primary hover:underline">Explore Further</a></li>
            </ol>
          </nav>

<h2 id="what-exactly-is-an-enigma-code" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">What Exactly Is an Enigma Code?</h2>
              <p className="text-base text-muted-foreground mb-4">
                The term &ldquo;Enigma code&rdquo; is widely used but often misunderstood. It does not refer to a single secret password or a fixed cipher alphabet. Rather, it refers to any encrypted message produced by the Enigma machine — and every message was encrypted differently, even if two operators transmitted the same plaintext on the same day.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Technically, Enigma codes are <strong className="text-foreground">polyalphabetic substitution ciphers</strong>. In a simple substitution cipher — the kind used in newspaper puzzles — A always maps to X, B always maps to Q, and so on. The mapping is fixed, which means frequency analysis can crack it quickly. Enigma was fundamentally different: each letter in the plaintext mapped to a ciphertext letter determined by the machine&apos;s rotor positions <em>at that exact moment</em>. After every keypress, at least one rotor advanced one step, changing the substitution alphabet for the next letter.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The practical consequence was striking. If you typed the letter E five times in a row, you might get five completely different ciphertext letters: Q, A, Z, T, M. The same plaintext letter produced a different output each time — and this single property made Enigma incomparably harder to crack than anything that had come before it.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                To understand the machines that generated these codes, see our companion article{' '}
                <Link href="/blog/what-is-a-enigma-machine" className="text-primary hover:underline">
                  What Is an Enigma Machine
                </Link>.
              </p>
            </section>

            {/* Section 2 — Structure of a message */}
            <section>
              <h2 id="how-an-enigma-message-was-structured" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How an Enigma Message Was Structured</h2>
              <p className="text-base text-muted-foreground mb-4">
                Enigma messages were transmitted by radio as groups of four or five letters — a format that looked identical to random noise to anyone listening in. A typical intercept might read: <code className="font-mono text-foreground text-sm">BCMQL FVBSE DQHQF XVHLE YNRPQ</code>. Without the day&apos;s key settings, these groups were meaningless.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Each message followed a structured preamble before the encrypted body. The preamble contained:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>The <strong className="text-foreground">date and time</strong> of transmission</li>
                <li>The <strong className="text-foreground">operator&apos;s discriminant</strong> — a code identifying which network the message belonged to (Army, Luftwaffe, Naval, etc.)</li>
                <li>The <strong className="text-foreground">message length</strong> in letters, so the recipient knew when the body ended</li>
                <li>The <strong className="text-foreground">message indicator</strong> — the encrypted message key that told the recipient how to set their own rotors before decrypting</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                The message key system worked as follows. The sending operator chose a random three-letter key — say, <strong className="text-foreground">QCK</strong>. Using the day&apos;s ground settings, they encrypted that key <em>twice</em> in succession (so QCKQCK was encrypted, producing six ciphertext letters). They then set their rotors to <strong className="text-foreground">QCK</strong> and encrypted the message body.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                This double-encryption of the message key was intended as a security measure — a safeguard against transmission errors. In practice, it became one of the most important cryptographic weaknesses in the entire system, because it meant two positions in the ciphertext were always encryptions of the same underlying letter, just with the rotors in two predictable positions. Polish cryptanalysts exploited precisely this pattern to reconstruct the Enigma wiring in the early 1930s. The German Navy eliminated double-encryption in 1938; the Army followed in 1940 — too late to prevent the initial breakthroughs.
              </p>
            </section>

            {/* Section 3 — Daily key */}
            <section>
              <h2 id="the-daily-key-tagesschlssel" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Daily Key — Tagesschlüssel</h2>
              <p className="text-base text-muted-foreground mb-4">
                Every 24 hours, every Enigma operator on a given network received a new <em>Tagesschlüssel</em> — the daily key. These were printed on monthly key sheets, distributed physically to all stations in advance. At midnight, operators switched to the new settings. Yesterday&apos;s key was useless.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Each daily key specified:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><strong className="text-foreground">Rotor selection and order</strong> — which three rotors (from a set of five, later eight) to insert into the machine, and in what left-to-right sequence</li>
                <li><strong className="text-foreground">Ring settings (Ringstellung)</strong> — the offset of each rotor&apos;s internal wiring relative to its external alphabet ring, adding another layer of variation</li>
                <li><strong className="text-foreground">Plugboard connections (Steckerbrett)</strong> — typically 10 pairs of letters were swapped before and after the rotor scrambling, dramatically expanding the keyspace</li>
                <li><strong className="text-foreground">Ground settings</strong> — the starting rotor positions used to encrypt the message key indicator</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Because all operators on the same network used identical settings, any operator could decrypt any message sent on that network that day. The system was elegant and robust — provided the key sheets never fell into enemy hands.
              </p>
            </section>

            {/* Section 4 — Why it seemed unbreakable */}
            <section>
              <h2 id="why-enigma-codes-seemed-unbreakable" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Why Enigma Codes Seemed Unbreakable</h2>
              <p className="text-base text-muted-foreground mb-4">
                German signals officers were genuinely confident the Enigma cipher was beyond attack. Their confidence was not irrational. The arithmetic was staggering.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Consider just the Army Enigma (three rotors from five): there were 60 possible rotor selections and orderings, 26³ = 17,576 rotor starting positions, and a plugboard with 10 pairs swapping 20 of 26 letters — contributing roughly 150 trillion possible plugboard arrangements alone. Combined with ring settings, the total keyspace reached approximately <strong className="text-foreground">1.59 × 10²⁰ configurations</strong>.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Even if a codebreaker could test one million settings per second without rest, exhausting every possibility would take longer than the age of the universe. And the settings reset every midnight. Even brute force was hopeless — the codebreakers needed a smarter approach entirely.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                To understand how Enigma compares with other historical ciphers, see our guide to the{' '}
                <Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline">
                  Vigenère cipher
                </Link>{' '}
                — Enigma&apos;s most direct predecessor in the polyalphabetic tradition.
              </p>
            </section>

            {/* Section 5 — How it was broken */}
            <section>
              <h2 id="how-enigma-codes-were-broken" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How Enigma Codes Were Broken</h2>
              <p className="text-base text-muted-foreground mb-4">
                The breaking of Enigma was not a single event — it was a decade-long, multi-national effort built on mathematics, espionage, and engineering.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Polish Breakthrough (1932)</h3>
              <p className="text-base text-muted-foreground mb-4">
                In December 1932, the Polish mathematician <strong className="text-foreground">Marian Rejewski</strong> — working at the Biuro Szyfrów (Cipher Bureau) in Warsaw alongside colleagues Jerzy Różycki and Henryk Zygalski — became the first person to reconstruct the internal wiring of the Enigma machine mathematically. He used group theory to analyse the double-encrypted message keys, combined with actual Enigma operating manuals and key sheets that a German spy named <strong className="text-foreground">Hans-Thilo Schmidt</strong> had sold to French intelligence, who passed copies to Poland.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Rejewski and his team built mechanical devices called <em>bomby</em> (cyclometers) to search through rotor settings. For six years they read significant portions of German Enigma traffic — a fact the Germans never suspected. In July 1939, just weeks before Germany invaded Poland, the Polish team shared all their methods and reconstructed machines with their British and French counterparts at a meeting near Warsaw. This handover gave Bletchley Park the foundation it needed.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Fundamental Flaw — No Letter Encrypts to Itself</h3>
              <p className="text-base text-muted-foreground mb-4">
                Enigma&apos;s designers included a <strong className="text-foreground">reflector</strong> (Umkehrwalze) — a component that routed the electrical signal back through the rotors — to make the machine self-reciprocal: the same settings that encrypted a message would also decrypt it. The reflector introduced an absolute constraint: <em>no letter could ever encrypt to itself</em>. Press A, and the output was guaranteed to be something other than A.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                This seemingly minor property became the cipher&apos;s Achilles heel. Codebreakers could test whether a proposed piece of known plaintext — called a <strong className="text-foreground">crib</strong> — fit a particular position in the ciphertext by simply checking that no letter in the crib aligned with the same letter in the ciphertext at that position. Any alignment of identical letters proved the crib was wrongly placed; only alignments with no matching letters were potentially correct.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Bombe at Bletchley Park</h3>
              <p className="text-base text-muted-foreground mb-4">
                Building on the Polish <em>bomby</em>, <strong className="text-foreground">Alan Turing</strong> and <strong className="text-foreground">Gordon Welchman</strong> at Bletchley Park designed an improved electromechanical machine called the <strong className="text-foreground">Bombe</strong>. It tested thousands of rotor positions per minute, eliminating settings that violated the no-self-encryption rule. Welchman&apos;s crucial addition — the <em>diagonal board</em> — dramatically increased the machine&apos;s efficiency by propagating the logical consequences of each tested position simultaneously across all plugboard pairs.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Common cribs were essential. Stereotyped phrases appeared repeatedly in German military traffic: weather reports always began with <strong className="text-foreground">WETTER</strong> (weather) at a predictable position; status reports frequently ended with <strong className="text-foreground">KEINE BESONDEREN EREIGNISSE</strong> (nothing to report); and some operators obligingly sent a string of Ls at the start of a session — which always encrypted to something other than L, providing cribs that were pure gold.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                By late 1942, Bletchley Park had multiple Bombes running around the clock and was decrypting the majority of Luftwaffe and Army Enigma traffic, often within hours of interception.
              </p>
            </section>

            {/* Section 6 — Notable operations */}
            <section>
              <h2 id="notable-enigma-operations-and-captures" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Notable Enigma Operations and Captures</h2>
              <p className="text-base text-muted-foreground mb-4">
                Naval Enigma (the <em>Shark</em> key used by U-boats) was a separate and harder problem. U-boats used a four-rotor Enigma that the three-rotor Bombes could not attack directly. Breaking Naval Enigma required physical capture of key materials.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">May 1941 — U-110:</strong> HMS Bulldog captured the German submarine U-110 in the North Atlantic. A boarding party retrieved an intact Enigma machine, the Naval short weather cipher book, and crucially the Naval Enigma key settings for several upcoming days — materials that Bletchley Park used to break back into Naval traffic.
                </li>
                <li>
                  <strong className="text-foreground">May–August 1941 — Weather ships:</strong> The Royal Navy captured German weather ships <em>München</em> and <em>Lauenburg</em> specifically to obtain their Enigma key books. Both operations were conducted under tight secrecy to prevent Germany from realising their codes were compromised.
                </li>
                <li>
                  <strong className="text-foreground">ULTRA intelligence:</strong> The collective intelligence product of Enigma decrypts was code-named <strong className="text-foreground">ULTRA</strong>. It contributed to Allied decisions in North Africa (exposing Rommel&apos;s supply lines), the Battle of the Atlantic (routing convoys away from U-boat wolf packs), and the D-Day deception — where ULTRA revealed that Hitler believed the main Allied invasion would come at Pas-de-Calais rather than Normandy.
                </li>
              </ul>
            </section>

            {/* Timeline table */}
            <section>
              <h2 id="key-dates-in-the-breaking-of-enigma" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Key Dates in the Breaking of Enigma</h2>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-32">
                        Date
                      </th>
                      <th className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">
                        Event
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {keyDates.map(([date, event]) => (
                      <tr key={date} className="hover:bg-secondary/20 transition-colors">
                        <td className="py-2.5 px-4 font-mono font-bold text-primary text-xs align-top whitespace-nowrap">
                          {date}
                        </td>
                        <td className="py-2.5 px-4 text-muted-foreground text-sm">{event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-4 scroll-mt-20">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is an Enigma code?</h3>
              <p className="text-base text-muted-foreground mb-4">
                An Enigma code is a ciphertext message produced by the Enigma machine — a German electro-mechanical cipher device used throughout World War II. Each message was encrypted using a unique combination of rotor positions, plugboard settings, and a randomly chosen message key, making it a polyalphabetic substitution cipher where the same plaintext letter produced different ciphertext letters each time it was typed.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How was an Enigma message different from a simple substitution cipher?</h3>
              <p className="text-base text-muted-foreground mb-4">
                In a simple substitution cipher, every A is always encoded as the same letter — say, X — throughout the entire message. Frequency analysis can crack this in minutes. In an Enigma message, the rotor advanced after every keypress, so the same letter produced a different output each time. There was no stable letter-to-letter mapping to exploit.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Who first broke the Enigma code?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Polish mathematician Marian Rejewski, working with colleagues Jerzy Różycki and Henryk Zygalski, was the first to mathematically reconstruct Enigma&apos;s internal wiring and break Enigma traffic, in December 1932. British codebreakers at Bletchley Park — most famously Alan Turing — later extended these methods and industrialised them with the Bombe machine.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What was the Bombe machine?</h3>
              <p className="text-base text-muted-foreground mb-4">
                The Bombe was an electromechanical machine designed by Alan Turing and Gordon Welchman at Bletchley Park. It tested thousands of Enigma rotor settings per minute, eliminating configurations that violated the constraint that no letter could encrypt to itself. Given a crib — a piece of probable plaintext — the Bombe could narrow down valid settings from billions to a manageable few within hours.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How many Enigma configurations were there?</h3>
              <p className="text-base text-muted-foreground mb-4">
                For the standard three-rotor Army Enigma, the total keyspace was approximately 1.59 × 10²⁰ — around 159 quintillion configurations. This figure combines the choices of rotor selection and order (60 possibilities), rotor starting positions (17,576), ring settings, and plugboard wiring (roughly 150 trillion arrangements for 10 pairs). Brute-force attack was computationally impossible.
              </p>
            </section>

            {/* Related links */}
            <section>
              <h2 id="explore-further" className="text-2xl font-bold text-foreground mt-10 mb-6 scroll-mt-20">Explore Further</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">On this site</p>
                  <Link href="/blog/what-is-a-enigma-machine" className="text-primary hover:underline font-medium text-sm">
                    What Is an Enigma Machine →
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">How the rotors, plugboard, and reflector worked mechanically</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">On this site</p>
                  <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline font-medium text-sm">
                    Enigma Machine Emulator →
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Encrypt and decrypt messages with a virtual Enigma machine</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">On this site</p>
                  <Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline font-medium text-sm">
                    Vigenère Cipher Decoder →
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">Enigma&apos;s polyalphabetic predecessor — how it works and how to crack it</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">On this site</p>
                  <Link href="/blog/caesar-cipher-history" className="text-primary hover:underline font-medium text-sm">
                    Caesar Cipher History →
                  </Link>
                  <p className="text-xs text-muted-foreground mt-1">From Roman military dispatches to modern cryptography education</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">External resource</p>
                  <a
                    href="https://cryptii.com/pipes/enigma-machine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    Encode text with a virtual Enigma machine at Cryptii →
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Live Enigma encoder with configurable rotors and plugboard</p>
                </div>
                <div className="rounded-lg border border-border bg-secondary/20 p-4 hover:bg-secondary/40 transition-colors">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">External resource</p>
                  <a
                    href="https://www.boxentriq.com/code-breaking/enigma-machine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium text-sm"
                  >
                    Practice Enigma code-breaking at Boxentriq →
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">Interactive Enigma puzzles and code-breaking tools</p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
