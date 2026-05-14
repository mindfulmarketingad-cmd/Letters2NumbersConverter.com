'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Zap, Lock, Globe, Users, BookOpen, Code2, Puzzle, Compass, FlaskConical } from 'lucide-react'
import { TestimonialsCarousel } from '@/components/testimonials-carousel'

const TOOL_SCREENSHOTS = [
  {
    src: '/images/screenshots/converter-tool.jpg',
    alt: 'Letters to Numbers Converter tool showing real-time A1Z26 encoding',
    caption: 'A1Z26 Converter',
    desc: 'Convert any letter to its number instantly — A=1, B=2 … Z=26',
  },
  {
    src: '/images/screenshots/cipher-identifier.jpg',
    alt: 'Cipher Identifier tool identifying a substitution cipher automatically',
    caption: 'Cipher Identifier',
    desc: 'Paste unknown ciphertext and get the cipher type identified automatically',
  },
  {
    src: '/images/screenshots/nato-alphabet.jpg',
    alt: 'NATO Phonetic Alphabet converter translating text to Alpha Bravo Charlie',
    caption: 'NATO Phonetic Alphabet',
    desc: 'Spell any word using the official NATO phonetic alphabet',
  },
]

const WHO_FOR = [
  {
    icon: <Puzzle className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Puzzle & Escape Room Solvers',
    desc: 'Stuck on a cipher clue? Our decoders handle A1Z26, Atbash, Baconian, Morse, Playfair, and dozens more — no guessing required.',
    link: '/tools/cipher-identifier',
    linkLabel: 'Try the Cipher Identifier →',
  },
  {
    icon: <Code2 className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Developers & Engineers',
    desc: 'Encode, decode, and convert between Base32, Base64, URL encoding, HTML entities, binary, hex, JSON, YAML, and more — without leaving your browser.',
    link: '/tools/html-encoder-decoder',
    linkLabel: 'Try HTML Encoder/Decoder →',
  },
  {
    icon: <BookOpen className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Students & Educators',
    desc: 'Learn cryptography, number systems, and encoding from Babylonian numerals to modern Base64 — with interactive tools for every lesson.',
    link: '/tools/a1z26-translator',
    linkLabel: 'Try the A1Z26 Translator →',
  },
  {
    icon: <Compass className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Geocachers',
    desc: 'Decode waypoint coordinates hidden in A1Z26, Morse code, NATO alphabet, and cipher clues. Crack the code and claim the cache.',
    link: '/tools/morse-code-translator',
    linkLabel: 'Try Morse Code Translator →',
  },
  {
    icon: <FlaskConical className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Data Scientists & Analysts',
    desc: 'Convert text to ASCII, hex, and binary formats for data preprocessing and NLP pipelines without spinning up a Python environment.',
    link: '/tools/letter-number-converter',
    linkLabel: 'Try Letters to Numbers →',
  },
  {
    icon: <Globe className="w-6 h-6" style={{ color: '#11a099' }} />,
    title: 'Designers & Content Creators',
    desc: 'Generate placeholder images, convert image formats, apply grayscale effects, and create TCG proxies — all free, all instant.',
    link: '/tools/placeholder-image-creator',
    linkLabel: 'Try Placeholder Image Creator →',
  },
]

const TOOL_CATEGORIES = [
  {
    name: 'Letters & Numbers',
    tools: ['A1Z26 Translator', 'Letters to Numbers', 'Numbers to Letters', 'Alphanumeric Converter', 'Text to Roman Numerals'],
    href: '/tools/a1z26-translator',
    color: '#11a099',
  },
  {
    name: 'Cipher & Encoding',
    tools: ['Atbash Cipher', 'Morse Code Translator', 'Baconian Cipher', 'Base32 Converter', 'HTML Encoder/Decoder'],
    href: '/tools/atbash-cipher-decoder',
    color: '#0e7d77',
  },
  {
    name: 'Number Systems',
    tools: ['Binary ↔ Decimal', 'Hex Converter', 'Babylonian Numerals', 'Mayan Numerals', 'Egyptian Numbers'],
    href: '/tools/decimal-to-hexadecimal-converter-online',
    color: '#0b5e5a',
  },
  {
    name: 'Image Tools',
    tools: ['Grayscale Converter', 'Photo Colorizer', 'Placeholder Creator', 'Base64 Image Viewer', 'WebP to GIF'],
    href: '/tools/make-grayscale-image-online',
    color: '#0d8a84',
  },
  {
    name: 'Document & File',
    tools: ['PDF to Word', 'Word to PDF', 'YAML to XML', 'JSON to INI', 'Line Ending Converter'],
    href: '/tools/pdf-to-word-converter',
    color: '#0a6b66',
  },
  {
    name: 'Word Games & Text',
    tools: ['Anagram Solver', 'Blossom Solver', 'Sentence Unscrambler', 'Reverse Text', 'Frequency Analysis'],
    href: '/tools/anagram-solver',
    color: '#12b5ae',
  },
]

const FAQS = [
  {
    q: 'What is a Letters to Numbers Converter?',
    a: 'A Letters to Numbers Converter is a tool that transforms alphabetical characters into their numeric equivalents. The most common standard is A1Z26, where A=1, B=2, and so on up to Z=26. Our free Letters to Numbers Converter supports A1Z26, A0Z25, ASCII, hexadecimal, binary, and many more encoding formats — all in real time.',
  },
  {
    q: 'How do I convert letters to numbers?',
    a: 'Simply open our Letters to Numbers Converter, type or paste your text, and the tool instantly converts each letter to its corresponding number. Use A1Z26 mode for the classic A=1 cipher, or switch to ASCII for computer-standard encoding. Results update as you type — no button needed.',
  },
  {
    q: 'Can I decode numbers back to letters?',
    a: 'Yes. All our converter tools are bidirectional. Enter a number sequence and select the same encoding standard (A1Z26, ASCII, etc.) in decode mode to get the original letters back instantly.',
  },
  {
    q: 'Is this just a letters to numbers converter?',
    a: 'No — while our main Letters to Numbers Converter is our flagship tool, we offer over 100 free online tools covering ciphers, image processing, file conversion, word games, number systems, and document tools. The same fast, browser-based experience applies to every tool.',
  },
  {
    q: 'Are all the tools completely free?',
    a: 'Yes. Every tool on Letters2NumbersConverter.com is free to use with no registration required. A Pro plan is available for power users who need unlimited daily usage.',
  },
  {
    q: 'Is my data private and secure?',
    a: 'Absolutely. All processing happens entirely in your browser using JavaScript. Your text, files, and data never leave your device and are never sent to our servers.',
  },
  {
    q: 'What cipher tools do you offer?',
    a: 'We offer Atbash, Baconian, Playfair, Morse Code, Enigma Machine, Skip Cipher, Book Cipher, Vernam Cipher, Cryptogram Solver, and a Cipher Identifier that automatically detects the encryption type from ciphertext.',
  },
  {
    q: 'Can I use these tools on mobile?',
    a: 'Yes. All tools are fully responsive and work on smartphones and tablets. The two-column layout stacks vertically on smaller screens so you always have a clear view of both input and output.',
  },
]

export function SeoPanel() {
  return (
    <div className="space-y-16">

      {/* ── 1. H1 + Problem Statement ─────────────────────────── */}
      <div className="space-y-4">
        <h1 id="letters-to-numbers-converter" className="text-4xl md:text-5xl font-bold leading-tight">
          <span style={{ color: '#11a099' }}>Letters To Numbers Converter</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Letters To Numbers Converter is a free, browser-based tool that converts letters to numbers instantly using A1Z26 (A=1, B=2 … Z=26) and 100+ other encoding formats — no sign-up, no software required.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/tools/letter-number-converter"
            className="px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#11a099' }}>
            Try the Converter Free →
          </Link>
          <Link href="/tools"
            className="px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors">
            Browse All 100+ Tools
          </Link>
        </div>
      </div>

      {/* ── 2. Problem / Solution strip ───────────────────────── */}
      <div className="rounded-xl p-6 md:p-8 border" style={{ backgroundColor: 'rgba(17,160,153,0.07)', borderColor: 'rgba(17,160,153,0.2)' }}>
        <div className="flex items-start gap-4">
          <Zap className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#11a099' }} />
          <div>
            <h2 className="text-xl font-bold mb-2">You need an answer fast. We get it.</h2>
            <p className="text-muted-foreground">
              Whether you&apos;re mid-puzzle, debugging an encoding bug at 2 am, or trying
              to open a file your client sent — our tools load instantly, work offline,
              and never ask you to create an account. Paste your input, get your output.
              That&apos;s it.
            </p>
          </div>
        </div>
      </div>

      {/* ── 3. Product Screenshots ────────────────────────────── */}
      <div>
        <h2 id="tools-in-action" className="text-2xl md:text-3xl font-bold mb-2">See the tools in action</h2>
        <p className="text-muted-foreground mb-6">Every tool has a clean two-column workspace — your input on the left, your result on the right. No clutter, no ads covering the controls.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOOL_SCREENSHOTS.map((s) => (
            <div key={s.caption} className="rounded-xl overflow-hidden border border-border shadow-sm group">
              <div className="relative aspect-video bg-secondary/30 overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-3 bg-card">
                <p className="font-semibold text-sm text-foreground">{s.caption}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Who Is It For ──────────────────────────────────── */}
      <div>
        <h2 id="who-is-it-for" className="text-2xl md:text-3xl font-bold mb-2">Who is this website for?</h2>
        <p className="text-muted-foreground mb-6">
          Letters2NumbersConverter.com started as a Letters to Numbers Converter and grew into a full toolkit. Here&apos;s who uses it every day:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHO_FOR.map((item) => (
            <div key={item.title} className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
              <Link href={item.link} className="text-sm font-medium transition-colors hover:underline" style={{ color: '#11a099' }}>
                {item.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Tool Categories Grid ───────────────────────────── */}
      <div>
        <h2 id="more-tools" className="text-2xl md:text-3xl font-bold mb-2">More than a Letters to Numbers Converter</h2>
        <p className="text-muted-foreground mb-6">
          Our toolkit covers six major categories. Every tool is free, instant, and runs entirely in your browser.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TOOL_CATEGORIES.map((cat) => (
            <Link key={cat.name} href={cat.href}
              className="p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group">
              <h3 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors" style={{ color: cat.color }}>
                {cat.name}
              </h3>
              <ul className="space-y-1">
                {cat.tools.map(t => (
                  <li key={t} className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-muted-foreground/40" />
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:underline" style={{ color: '#11a099' }}>
            View all 100+ free tools →
          </Link>
        </div>
      </div>

      {/* ── 6. Why Us (checklist) ─────────────────────────────── */}
      <div>
        <h2 id="why-choose-us" className="text-2xl md:text-3xl font-bold mb-6">Why people choose Letters2NumbersConverter.com</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            ['Instant results — no page reloads', 'Output updates as you type across all tools.'],
            ['100% private', 'Nothing leaves your browser. No server processing, no logging.'],
            ['No account required', 'Every free tool is available immediately, no email needed.'],
            ['Works offline', 'Once loaded, tools continue working without an internet connection.'],
            ['100+ tools in one place', 'From A1Z26 to PDF conversion — one bookmark covers everything.'],
            ['Mobile-friendly', 'Fully responsive design works on phones, tablets, and desktops.'],
            ['Google-friendly schemas', 'Every tool page includes structured data for better search visibility.'],
            ['Constantly growing', 'New tools added every week based on what users actually need.'],
          ].map(([title, desc]) => (
            <div key={title} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
              <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#11a099' }} />
              <div>
                <p className="font-semibold text-sm text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. How It Works ───────────────────────────────────── */}
      <div>
        <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold mb-6">How it works — 3 steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Find your tool', body: 'Search by name or browse by category. With 100+ tools organised across six categories, your tool is never more than a few seconds away.' },
            { step: '2', title: 'Paste your input', body: 'Type, paste, or upload your text, file, or image into the left-hand workspace panel. Results appear instantly in the right panel.' },
            { step: '3', title: 'Copy or download', body: 'Copy the output to clipboard, download the result as a file, or share a link — depending on the tool.' },
          ].map(({ step, title, body }) => (
            <div key={step} className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-3"
                style={{ backgroundColor: '#11a099' }}>
                {step}
              </div>
              <h3 className="font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. Testimonials ───────────────────────────────────── */}
      <div>
        <TestimonialsCarousel />
      </div>

      {/* ── 9. FAQ ────────────────────────────────────────────── */}
      <div>
        <h2 id="faq" className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {FAQS.map((item) => (
            <div key={item.q} className="border-b border-border/50 pb-5 last:border-0">
              <h3 className="font-semibold mb-1.5 text-foreground">{item.q}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 10. Final CTA ─────────────────────────────────────── */}
      <div className="rounded-xl p-8 text-center border" style={{ backgroundColor: 'rgba(17,160,153,0.08)', borderColor: 'rgba(17,160,153,0.25)' }}>
        <h2 className="text-2xl font-bold mb-2">Ready to convert something?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Pick any tool and get your answer in seconds — no account, no software, no waiting.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/tools/letter-number-converter"
            className="px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#11a099' }}>
            Letters to Numbers Converter
          </Link>
          <Link href="/tools"
            className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
            Browse All Tools
          </Link>
        </div>
      </div>

    </div>
  )
}
