import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/what-is-a-enigma-machine`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'What Is a Enigma Machine — History, Mechanics & How It Worked',
  description:
    'Learn what the Enigma machine is: the electro-mechanical rotor cipher used by Nazi Germany in World War II. Covers rotors, the plugboard, how encryption worked, and how Allied codebreakers at Bletchley Park cracked it.',
  keywords: [
    'what is a enigma machine',
    'enigma machine',
    'enigma cipher',
    'how does the enigma machine work',
    'enigma machine history',
    'world war 2 encryption',
    'bletchley park enigma',
    'alan turing enigma',
    'enigma rotors',
    'enigma plugboard',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'What Is a Enigma Machine — History, Mechanics & How It Worked',
    description:
      'A complete guide to the Enigma machine: its invention, mechanical components, how it encrypted messages, the staggering number of possible configurations, and how Polish and British codebreakers finally broke it.',
    type: 'article',
    url: PAGE_URL,
    publishedTime: PUBLISHED,
    images: [
      {
        url: `${BASE_URL}/images/blog/cryptography.jpg`,
        width: 800,
        height: 450,
        alt: 'what is a enigma machine — World War II Enigma cipher machine with rotors and keyboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Enigma Machine — History, Mechanics & How It Worked',
    description:
      'Rotors, plugboards, reflectors, and the breaking of Enigma at Bletchley Park — a complete guide.',
    images: [`${BASE_URL}/images/blog/cryptography.jpg`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is a Enigma Machine — History, Mechanics & How It Worked',
  description:
    'A complete guide to the Enigma machine: its invention, mechanical components, how it encrypted messages, the staggering number of possible configurations, and how Allied codebreakers finally cracked it.',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: `${BASE_URL}/images/blog/cryptography.jpg`,
  url: PAGE_URL,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters to Numbers Converter', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Enigma machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Enigma machine is an electro-mechanical rotor cipher device invented by German engineer Arthur Scherbius and first sold commercially in 1923. The German military adopted modified versions from the late 1920s onward and used it extensively throughout World War II to encrypt communications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many possible configurations did the Enigma machine have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard three-rotor Army/Air Force Enigma had approximately 158,962,555,217,826,360,000 (roughly 1.59 × 10²⁰) possible starting configurations when accounting for rotor selection, ring settings, rotor start positions, and plugboard connections. This enormous number is why German operators believed Enigma was unbreakable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who broke the Enigma machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Polish mathematicians Marian Rejewski, Jerzy Różycki, and Henryk Zygalski first broke early Enigma traffic in 1932. In 1939 they shared their findings with Britain and France. British codebreakers at Bletchley Park, including Alan Turing and Gordon Welchman, then developed the electromechanical Bombe to break daily Enigma settings throughout the war.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the critical weakness of the Enigma machine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Enigma machine had two key cryptographic weaknesses. First, the reflector design meant a letter could never encrypt to itself — the "no self-encryption" rule — which codebreakers exploited using known-plaintext cribs. Second, reciprocity meant that if A encoded to T, then T encoded to A, which constrained the cipher mathematically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What was the ULTRA intelligence program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ULTRA was the Allied codename for the intelligence gathered by decrypting Axis communications, primarily Enigma traffic broken at Bletchley Park. By 1942 the codebreakers were decrypting thousands of messages per day. ULTRA intelligence is credited with shortening the war by an estimated two to four years.',
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
      name: 'What Is a Enigma Machine',
      item: PAGE_URL,
    },
  ],
}

// ── Timeline data ─────────────────────────────────────────────────────────────

const timeline: { year: string; event: string }[] = [
  { year: '1918', event: 'Arthur Scherbius patents the commercial Enigma A machine in Germany.' },
  { year: '1923', event: 'Commercial Enigma machines go on sale to businesses seeking secure communications.' },
  { year: '1926', event: 'The German Navy (Kriegsmarine) begins adopting a naval variant of Enigma.' },
  { year: '1928', event: 'The German Army (Reichswehr) introduces its own military Enigma with a plugboard.' },
  { year: '1930', event: 'The plugboard (Steckerbrett) is added to Army Enigma, vastly increasing key space.' },
  { year: '1932', event: 'Polish mathematician Marian Rejewski breaks early Enigma traffic using mathematical analysis.' },
  { year: '1939', event: 'Poland shares its Enigma findings with Britain and France weeks before the German invasion.' },
  { year: '1940', event: 'Alan Turing and Gordon Welchman at Bletchley Park improve the electromechanical Bombe.' },
  { year: '1941', event: 'Capture of naval Enigma materials from U-110 gives British codebreakers critical keys.' },
  { year: '1942', event: 'Bletchley Park decrypts thousands of Enigma messages per day; intelligence codenamed ULTRA.' },
  { year: '1945', event: 'World War II ends; the existence of Enigma decryption remains classified for decades.' },
  { year: '1974', event: 'F. W. Winterbotham publishes "The ULTRA Secret," revealing the codebreaking effort to the public.' },
  { year: '2014', event: 'The film "The Imitation Game" dramatises Alan Turing\'s work at Bletchley Park.' },
]

// ── Component ─────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* ── Breadcrumb ── */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true" className="mx-1">/</li>
              <li className="text-foreground font-medium">What Is a Enigma Machine</li>
            </ol>
          </nav>

          {/* ── Header ── */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1">
                Cryptography History
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              What Is a Enigma Machine
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">What Is a Enigma Machine?</strong> It is an electro-mechanical cipher device used by Nazi Germany before and during World War II to encrypt military communications — and it came closer to winning the war for the Axis powers than almost any weapon ever built. Understanding how it worked, why it seemed unbreakable, and how it was finally cracked is one of the most compelling stories in the history of science.
            </p>
            <p className="text-sm text-muted-foreground">
              By Letters to Numbers Converter &nbsp;·&nbsp;{' '}
              {new Date(PUBLISHED).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </header>

          {/* ── Hero Image ── */}
          <Image
            src="/images/blog/cryptography.jpg"
            alt="what is a enigma machine — World War II Enigma cipher machine with rotors and keyboard"
            width={800}
            height={450}
            className="w-full rounded-xl mb-10 object-cover"
            priority
          />

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* ── What the Enigma Machine Is ── */}
            <section>
                        <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#the-enigma-machine-an-overview" className="text-primary hover:underline">The Enigma Machine: An Overview</a></li>
            <li><a href="#the-mechanical-components-explained" className="text-primary hover:underline">The Mechanical Components Explained</a></li>
            <li><a href="#how-encryption-worked-step-by-step" className="text-primary hover:underline">How Encryption Worked: Step by Step</a></li>
            <li><a href="#the-staggering-number-of-possible-configurations" className="text-primary hover:underline">The Staggering Number of Possible Configurations</a></li>
            <li><a href="#breaking-the-enigma-from-warsaw-to-bletchley-park" className="text-primary hover:underline">Breaking the Enigma: From Warsaw to Bletchley Park</a></li>
            <li><a href="#enigma-rotor-configurations-by-service" className="text-primary hover:underline">Enigma Rotor Configurations by Service</a></li>
            <li><a href="#legacy-enigmaaposs-impact-on-computing-and-cryptography" className="text-primary hover:underline">Legacy: Enigma&apos;s Impact on Computing and Cryptography</a></li>
            <li><a href="#enigma-history-timeline" className="text-primary hover:underline">Enigma History Timeline</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#explore-further" className="text-primary hover:underline">Explore Further</a></li>
            </ol>
          </nav>

<h2 id="the-enigma-machine-an-overview" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Enigma Machine: An Overview</h2>
              <p className="text-base text-muted-foreground mb-4">
                The Enigma machine was invented by German engineer <strong className="text-foreground">Arthur Scherbius</strong>. He patented the commercial Enigma A in 1918 and began selling it in 1923, initially marketing it to banks and businesses that wanted to protect sensitive correspondence. The machine performed <strong className="text-foreground">polyalphabetic substitution</strong> — meaning that the same plaintext letter produced a different ciphertext letter every time it was typed, because the rotors advanced with each keypress. This made frequency analysis, the classical tool for breaking substitution ciphers, essentially useless against it.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Physically, an Enigma machine resembled a chunky typewriter. It had a standard QWERTZ keyboard, a lampboard of 26 lettered bulbs that lit to show the encrypted output, a set of rotors (the scrambling heart of the machine), and — in the military versions — a plugboard at the front. The machine weighed roughly 12 kilograms (26 pounds) and could be carried in a wooden case to field positions.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The <strong className="text-foreground">German Wehrmacht, Luftwaffe, and Kriegsmarine</strong> each adopted and modified versions of Enigma from the late 1920s onward. The Navy&apos;s version, the Enigma M4, added a fourth rotor in 1942, making it significantly harder to crack. Different branches used different rotor sets and daily key sheets, compartmentalising the cipher system so that a break in one network did not automatically compromise others.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                To try a working simulation of the machine, the{' '}
                <a href="https://cryptii.com/pipes/enigma-machine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Enigma machine simulator on Cryptii
                </a>{' '}
                lets you set rotors, plugboard pairs, and ring settings and type messages in real time — an excellent way to build intuition for how the machine behaved.
              </p>
            </section>

            {/* ── Mechanical Components ── */}
            <section>
              <h2 id="the-mechanical-components-explained" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Mechanical Components Explained</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Rotors (Scrambler Wheels)</h3>
              <p className="text-base text-muted-foreground mb-4">
                Each rotor was a disc approximately 10 cm in diameter, with <strong className="text-foreground">26 electrical contacts on each face</strong> — one per letter of the alphabet. The contacts on both faces were connected internally in a scrambled, non-trivial wiring pattern. When a key was pressed, an electrical signal entered the right face of the rightmost rotor, was rerouted through the internal wiring, exited the left face, passed into the next rotor, and so on.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The critical mechanical detail: with each keypress, the <strong className="text-foreground">rightmost rotor advanced one position</strong> (like the units digit of an odometer). After it completed a full 26-position rotation, it triggered the middle rotor to advance one step — and eventually the left rotor. Army and Air Force Enigmas used <strong className="text-foreground">3 rotors selected from a set of 5</strong>; the naval Enigma M4 chose from a set of 8 rotors. The specific rotors selected, their order in the machine, and their starting positions were all part of the daily key.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Reflector (Umkehrwalze)</h3>
              <p className="text-base text-muted-foreground mb-4">
                At the left end of the rotor stack sat the <strong className="text-foreground">reflector</strong>, a fixed half-rotor that connected the 26 contacts in 13 reciprocal pairs. The signal arriving from the rotors was sent back through the rotor stack in the opposite direction. This design had one crucial consequence: the machine was <em>self-reciprocal</em>. The same machine settings used for encryption could decrypt the message — the operator simply typed the ciphertext and the plaintext lit up on the lampboard. No separate decryption mode was needed.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The reflector also introduced a famous cryptographic flaw: because it connected contacts in pairs, a letter <strong className="text-foreground">could never encrypt to itself</strong>. If you pressed A, the result was guaranteed to be some other letter. Allied codebreakers exploited this &ldquo;no self-encryption&rdquo; rule relentlessly.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Plugboard (Steckerbrett)</h3>
              <p className="text-base text-muted-foreground mb-4">
                Added to military Enigmas from 1930, the <strong className="text-foreground">plugboard</strong> sat at the front of the machine. Short cables were used to connect pairs of letters — swapping them electrically before the signal entered the rotors and again after it returned. A standard daily setting used <strong className="text-foreground">10 letter pairs</strong>, leaving 6 letters unplugged. The plugboard alone multiplied the number of possible machine configurations by a factor of roughly 150 trillion, dwarfing even the contribution of the rotors. It was the plugboard, more than any other component, that made Enigma feel impenetrable to its operators.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">The Lampboard</h3>
              <p className="text-base text-muted-foreground mb-4">
                Above the keyboard, 26 small bulbs were arranged in QWERTZ order. When a key was pressed and the electrical signal had completed its journey through the plugboard, rotors, reflector, and back, one bulb lit up showing the encrypted output letter. A second operator would read and record the lit letter; the resulting sequence of letters was the ciphertext to be transmitted by radio in Morse code.
              </p>
            </section>

            {/* ── How Encryption Worked ── */}
            <section>
              <h2 id="how-encryption-worked-step-by-step" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">How Encryption Worked: Step by Step</h2>
              <p className="text-base text-muted-foreground mb-4">
                Each morning, every Enigma operator on a given network received a <strong className="text-foreground">key sheet</strong> listing the day&apos;s settings: which three rotors to use and in which order, the ring settings (an internal offset for each rotor), the plugboard pairs, and the ground setting (the starting rotor positions). Operators had to destroy used key sheets immediately.
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
                <li>
                  <strong className="text-foreground">Set the machine.</strong> The operator inserted the correct rotors in the specified order, set the ring settings, connected the plugboard cables, and then rotated the rotor windows to the ground setting.
                </li>
                <li>
                  <strong className="text-foreground">Choose a message key.</strong> The operator picked a random three-letter starting position for that specific message (e.g., QKR) and transmitted it at the start of the encrypted message so the recipient could set their rotors to match.
                </li>
                <li>
                  <strong className="text-foreground">Type the plaintext.</strong> Each keypress sent a current through the plugboard, into the rightmost rotor, through all three rotors, into the reflector, back through the three rotors in reverse, out through the plugboard again, and finally lit a lamp. The right rotor advanced one step before each character, ensuring a different scrambling path for every letter typed.
                </li>
                <li>
                  <strong className="text-foreground">Transmit the ciphertext.</strong> A second operator recorded each lit lamp letter and passed the ciphertext string to a radio operator, who transmitted it in Morse code.
                </li>
                <li>
                  <strong className="text-foreground">Decrypt at the other end.</strong> The receiving operator, using an identically configured machine, typed the ciphertext. Because of the reflector&apos;s reciprocal design, the plaintext letters lit up — no separate decryption procedure was required.
                </li>
              </ol>
              <p className="text-base text-muted-foreground mb-4">
                The guarantee that <strong className="text-foreground">no letter could encrypt to itself</strong> was baked into the hardware by the reflector. This seems like a minor detail, but it was a catastrophic weakness: when Allied analysts found a message that had to contain a known phrase — a weather report always starting &ldquo;WETTER&rdquo; (weather), for instance — they could instantly eliminate any rotor position where any letter of that phrase mapped to itself. This process of using known plaintext fragments was called a <strong className="text-foreground">crib</strong>, and it drove the Bombe machines that broke Enigma day after day.
              </p>
            </section>

            {/* ── Number of configurations ── */}
            <section>
              <h2 id="the-staggering-number-of-possible-configurations" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">The Staggering Number of Possible Configurations</h2>
              <p className="text-base text-muted-foreground mb-4">
                German cryptographers calculated — correctly — that the number of possible Enigma settings was astronomically large. For the standard three-rotor Army/Air Force machine, accounting for rotor selection from a set of five, rotor order, ring settings, starting positions, and 10 plugboard pairs, the total comes to approximately:
              </p>
              <div className="rounded-lg border border-border bg-secondary/20 p-5 my-6 text-center">
                <p className="font-mono text-2xl font-bold text-foreground mb-2">158,962,555,217,826,360,000</p>
                <p className="text-sm text-muted-foreground">≈ 1.59 × 10²⁰ possible configurations</p>
              </div>
              <p className="text-base text-muted-foreground mb-4">
                To put that number in perspective: if a person tested one configuration per second without sleeping, it would take roughly <strong className="text-foreground">five billion years</strong> — more than the current age of the universe — to try them all. This is why German military command was confident that Enigma was unbreakable by brute force. They were right about brute force. What they underestimated was the power of mathematics and operational security failures.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Want to experiment with the machine settings yourself? The{' '}
                <a href="https://www.boxentriq.com/code-breaking/enigma-machine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Boxentriq Enigma machine tool
                </a>{' '}
                provides an interactive simulator with full rotor and plugboard configuration. Our own{' '}
                <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">
                  Enigma machine emulator
                </Link>{' '}
                is another option for quick experiments.
              </p>
            </section>

            {/* ── Breaking Enigma ── */}
            <section>
              <h2 id="breaking-the-enigma-from-warsaw-to-bletchley-park" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Breaking the Enigma: From Warsaw to Bletchley Park</h2>
              <p className="text-base text-muted-foreground mb-4">
                The story of Enigma&apos;s defeat begins not in Britain but in Poland. In 1932, mathematician <strong className="text-foreground">Marian Rejewski</strong> — working for the Polish Cipher Bureau — made the first mathematical break into Enigma traffic. Working with barely any information, Rejewski used the algebraic structure of the cipher and the German practice of repeating message keys (a procedural weakness, not a hardware one) to deduce the rotor wiring. He was joined by colleagues <strong className="text-foreground">Jerzy Różycki</strong> and <strong className="text-foreground">Henryk Zygalski</strong>; together they built mechanical aids called <em>bomby</em> (bombas) and devised perforated paper sheets to search through possible settings.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                In July 1939, with German invasion imminent, Polish intelligence made a decision of historic generosity: they invited British and French intelligence officers to Warsaw and handed over everything — their mathematical findings, reconstructed Enigma machines, and the bomba designs. This gift gave Bletchley Park a multi-year head start.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                At <strong className="text-foreground">Bletchley Park</strong>, the British Government Code and Cypher School assembled a remarkable collection of mathematicians, linguists, and chess champions. <strong className="text-foreground">Alan Turing</strong> designed an improved electromechanical Bombe machine that systematically tested rotor positions against cribs, discarding positions where any letter in the crib would encrypt to itself. <strong className="text-foreground">Gordon Welchman</strong> added the &ldquo;diagonal board&rdquo; improvement that dramatically reduced the time required per run. By 1942, over 200 Bombes were operating around the clock.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The intelligence product — codenamed <strong className="text-foreground">ULTRA</strong> — was so sensitive that the British government went to extraordinary lengths to conceal its existence. Intercepts were sometimes acted on only after a fake reconnaissance mission was staged to provide an alternative explanation for how the British &ldquo;knew&rdquo; something. ULTRA intelligence contributed to Allied successes in the North African campaign, the Battle of the Atlantic, and the Normandy landings.
              </p>
            </section>

            {/* ── Key Rotor Configurations Table ── */}
            <section>
              <h2 id="enigma-rotor-configurations-by-service" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Enigma Rotor Configurations by Service</h2>
              <p className="text-base text-muted-foreground mb-4">
                Different branches of the German military used different rotor sets, giving each network a measure of independence. The table below summarises the principal configurations:
              </p>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Service', 'Machine Model', 'Rotor Count', 'Rotors Available', 'Notes'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Army (Wehrmacht)', 'Enigma I', '3 active + reflector', 'I, II, III, IV, V (choose 3)', 'Standard military Enigma from 1930; 10 plugboard pairs'],
                      ['Air Force (Luftwaffe)', 'Enigma I', '3 active + reflector', 'I, II, III, IV, V (choose 3)', 'Same hardware as Army; shared key distribution network'],
                      ['Navy (Kriegsmarine)', 'Enigma M3', '3 active + reflector', 'I–VIII (choose 3)', 'Added rotors VI, VII, VIII; naval procedures more secure'],
                      ['Navy (Kriegsmarine)', 'Enigma M4', '4 active + thin reflector', 'I–VIII + Beta/Gamma', 'Introduced Feb 1942; fourth rotor temporarily blinded Bletchley'],
                      ['Railway / Abwehr', 'Enigma G', '3 active, no plugboard', 'Various', 'Counter-intelligence use; no plugboard made it easier to break'],
                    ].map(row => (
                      <tr key={row[0] + row[1]} className="hover:bg-secondary/20">
                        {row.map((cell, i) => (
                          <td key={i} className={`py-2 px-3 text-xs ${i === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Legacy ── */}
            <section>
              <h2 id="legacy-enigmaaposs-impact-on-computing-and-cryptography" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Legacy: Enigma&apos;s Impact on Computing and Cryptography</h2>
              <p className="text-base text-muted-foreground mb-4">
                The Enigma story did not end with the war. Alan Turing&apos;s work at Bletchley Park — particularly his conceptual framework for the Bombe and his earlier theoretical paper on computable numbers — helped lay the intellectual foundations of modern computer science. The Bombe was not a general-purpose computer, but the problem it solved (systematically searching a structured problem space using mechanised logic) was a direct precursor to computational thinking.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                The Enigma story also established several principles that remain central to modern cryptanalysis:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                <li><strong className="text-foreground">Known-plaintext attacks</strong> are often more powerful than brute-force searches — the crib technique is still studied today.</li>
                <li><strong className="text-foreground">Operational security matters as much as cipher strength</strong> — many Enigma breaks came from German operators reusing keys, choosing predictable message keys (e.g., AAA or their girlfriend&apos;s initials), or sending standardised opening phrases.</li>
                <li><strong className="text-foreground">No cipher is unbreakable given sufficient information</strong> — complexity is not the same as security.</li>
                <li><strong className="text-foreground">Hardware design decisions have cryptographic consequences</strong> — the reflector&apos;s reciprocity was a deliberate usability choice that became an exploitable flaw.</li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Today, approximately <strong className="text-foreground">300 Enigma machines</strong> survive in museums and private collections worldwide. The Bletchley Park Trust operates the original site as a museum; the rebuilt Bombe replicas there demonstrate exactly how the decryption process worked. The 2014 film <em>The Imitation Game</em>, starring Benedict Cumberbatch as Alan Turing, brought the story to a wide audience, though historians note it compresses and fictionalises several events.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                If you are interested in exploring how classical ciphers like Enigma relate to modern cryptographic concepts, our guides on the{' '}
                <Link href="/blog/caesar-cipher-history" className="text-primary hover:underline">
                  history of the Caesar cipher
                </Link>{' '}
                and the{' '}
                <Link href="/blog/vigenere-cipher-decoder" className="text-primary hover:underline">
                  Vigenère cipher decoder
                </Link>{' '}
                trace the lineage from ancient substitution ciphers to the electromechanical era that Enigma represented.
              </p>
            </section>

            {/* ── Timeline ── */}
            <section>
              <h2 id="enigma-history-timeline" className="text-2xl font-bold text-foreground mt-8 mb-4 scroll-mt-20">Enigma History Timeline</h2>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider w-20">Year</th>
                      <th className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Event</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {timeline.map(({ year, event }) => (
                      <tr key={year + event} className="hover:bg-secondary/20">
                        <td className="py-2 px-4 font-mono font-bold text-foreground text-sm align-top">{year}</td>
                        <td className="py-2 px-4 text-muted-foreground text-sm">{event}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-10 mb-6 scroll-mt-20">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is a Enigma machine?</h3>
              <p className="text-base text-muted-foreground mb-4">
                The Enigma machine is an electro-mechanical rotor cipher device invented by Arthur Scherbius and first sold commercially in 1923. The German military adopted modified versions and used it to encrypt all major communications throughout World War II. It performed polyalphabetic substitution via rotating scrambler wheels, a reflector, and (in military versions) a plugboard.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How many possible configurations did the Enigma have?</h3>
              <p className="text-base text-muted-foreground mb-4">
                The standard three-rotor Army/Air Force Enigma had approximately 158,962,555,217,826,360,000 (roughly 1.59 × 10²⁰) possible starting configurations. This number accounts for rotor selection from a set of five, rotor order, ring settings, starting positions, and the 10 plugboard pairs used in a standard daily key.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Who broke the Enigma machine, and how?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Polish mathematician Marian Rejewski, working with colleagues Jerzy Różycki and Henryk Zygalski, first broke Enigma traffic in 1932 using mathematical analysis of repeated message keys. They shared their findings with Britain in 1939. At Bletchley Park, Alan Turing and Gordon Welchman built the electromechanical Bombe, which exploited the no-self-encryption rule and known-plaintext cribs to identify the daily key settings.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What was ULTRA?</h3>
              <p className="text-base text-muted-foreground mb-4">
                ULTRA was the Allied codename for intelligence derived from decrypted Axis communications — primarily Enigma traffic. By 1942 Bletchley Park was decrypting thousands of messages per day. The existence of ULTRA was kept secret until 1974, which is why Allied commanders sometimes appeared to make uncannily well-informed decisions during the war.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can I try an Enigma machine simulator online?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Yes. Our{' '}
                <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">
                  Enigma machine emulator
                </Link>{' '}
                lets you configure rotors, plugboard pairs, and ring settings and encrypt or decrypt messages instantly. For a feature-rich alternative, the{' '}
                <a href="https://cryptii.com/pipes/enigma-machine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Cryptii Enigma simulator
                </a>{' '}
                and the{' '}
                <a href="https://www.boxentriq.com/code-breaking/enigma-machine" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Boxentriq Enigma tool
                </a>{' '}
                are also excellent.
              </p>
            </section>

            {/* ── Related Links Grid ── */}
            <section>
              <h2 id="explore-further" className="text-2xl font-bold text-foreground mt-10 mb-6 scroll-mt-20">Explore Further</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    href: '/tools/enigma-machine-emulator',
                    label: 'Enigma Machine Emulator',
                    desc: 'Configure rotors and plugboard pairs and encrypt messages in your browser.',
                    external: false,
                  },
                  {
                    href: '/blog/caesar-cipher-history',
                    label: 'Caesar Cipher History',
                    desc: 'From Julius Caesar to modern cryptography — the origin of letter substitution.',
                    external: false,
                  },
                  {
                    href: '/blog/vigenere-cipher-decoder',
                    label: 'Vigenère Cipher Decoder Guide',
                    desc: 'The polyalphabetic cipher that resisted attack for 300 years before Enigma.',
                    external: false,
                  },
                  {
                    href: 'https://cryptii.com/pipes/enigma-machine',
                    label: 'Cryptii Enigma Simulator',
                    desc: 'Try an Enigma machine simulator on Cryptii with full rotor configuration.',
                    external: true,
                  },
                  {
                    href: 'https://www.boxentriq.com/code-breaking/enigma-machine',
                    label: "Boxentriq's Enigma Machine Tool",
                    desc: 'Interactive Enigma encoder and decoder with step-by-step output.',
                    external: true,
                  },
                ].map(({ href, label, desc, external }) => (
                  external ? (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-lg border border-border bg-secondary/10 hover:bg-secondary/30 transition-colors p-4"
                    >
                      <p className="font-semibold text-primary text-sm mb-1">{label} ↗</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </a>
                  ) : (
                    <Link
                      key={href}
                      href={href}
                      className="block rounded-lg border border-border bg-secondary/10 hover:bg-secondary/30 transition-colors p-4"
                    >
                      <p className="font-semibold text-primary text-sm mb-1">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </Link>
                  )
                ))}
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
