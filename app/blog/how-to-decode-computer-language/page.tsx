import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-decode-computer-language`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Decode Computer Language — Hex, Binary, Base64 & Bytecode Guide',
  description:
    'A complete guide on how to decode computer language: hex, binary, Base64, URL percent-encoding, and bytecode. Includes step-by-step examples, Python code snippets, tool recommendations, and a quick-reference cheat sheet.',
  keywords: [
    'how to decode computer language',
    'decode hex to text',
    'decode binary to text',
    'decode base64',
    'read machine code',
    'computer encoding decoder',
    'decode bytecode',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Decode Computer Language — Hex, Binary, Base64 & Bytecode Guide',
    description:
      'Step-by-step guide to decoding hex, binary, Base64, URL encoding, and bytecode. Includes Python examples, tool recommendations, and a quick-reference cheat sheet.',
    type: 'article',
    url: PAGE_URL,
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Decode Computer Language — Hex, Binary, Base64 & Bytecode Guide',
    description:
      'Learn how to decode computer language: hex, binary, Base64, URL percent-encoding, and bytecode. Step-by-step with Python examples.',
  },
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Decode Computer Language: Hex, Binary, Base64, and Bytecode Explained',
  description:
    'A complete guide on how to decode computer language: hex, binary, Base64, URL percent-encoding, and bytecode. Includes step-by-step examples, Python code snippets, tool recommendations, and a quick-reference cheat sheet.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the easiest way to decode computer language for a beginner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by identifying the encoding type. Look for clues in the character set: only 0s and 1s in groups of 8 means binary; pairs of characters from 0-9 and A-F means hexadecimal; text ending in = or == with letters, numbers, +, and / means Base64; %XX patterns mean URL encoding. Once you know the type, use a tool like CyberChef (gchq.github.io/CyberChef) or the free decoders on this site to convert it instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between decoding and decryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Decoding reverses a publicly known encoding scheme — no secret key is needed. Hex, Base64, binary, and URL percent-encoding are all encodings that anyone can reverse. Decryption, by contrast, requires a secret key. AES-256, RSA, and similar algorithms produce ciphertext that cannot be reversed without the correct key, regardless of the tool used.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I decode compiled machine code back into readable source code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not perfectly. You can disassemble a compiled binary into assembly language using tools like objdump, and you can decompile it to approximate C-like pseudocode using Ghidra or IDA Pro. However, the original variable names, comments, and high-level structure are lost during compilation, so the recovered code is never identical to the original source.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "48 65 6C 6C 6F" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '"48 65 6C 6C 6F" is the word "Hello" written as a hexadecimal dump. Each two-digit pair is one byte expressed in base-16. 48 hex equals 72 in decimal, which maps to the letter H in the ASCII table. 65 hex is 101 decimal (e), 6C is 108 decimal (l), and 6F is 111 decimal (o). Converting every pair through the ASCII table spells Hello.',
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
      name: 'How To Decode Computer Language',
      item: PAGE_URL,
    },
  ],
}

export default function HowToDecodeComputerLanguage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="mx-auto max-w-3xl px-4 py-10 text-gray-900">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <ol className="flex flex-wrap gap-1">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-700">How To Decode Computer Language</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            How To Decode Computer Language: Hex, Binary, Base64, and Bytecode Explained
          </h1>
          <p className="text-sm text-gray-500">
            By <span className="font-medium text-gray-700">John Reed</span> &mdash;{' '}
            <time dateTime={PUBLISHED}>May 14, 2026</time>
          </p>
        </header>

        {/* Hero image */}
        <figure className="mb-8">
          <Image
            src="/images/blog/ascii-encoding.jpg"
            alt="how to decode computer language — binary hex and ASCII encoding chart"
            width={800}
            height={450}
            className="rounded-lg"
            priority
          />
        </figure>

        {/* Introduction */}
        <section className="mb-10 space-y-4 text-lg leading-relaxed">
          <p>
            Understanding how to decode computer language is one of the most practical skills a
            developer, security researcher, or curious technologist can develop. Computers store and
            transmit data as sequences of numbers, and those numbers get represented in several
            different formats depending on the context — raw binary in CPU registers, hexadecimal in
            memory dumps, Base64 in email attachments, and bytecode in compiled Python or Java
            programs. Each format has its own rules, and once you know the rules, decoding any of
            them becomes a straightforward mechanical process.
          </p>
          <p>
            This guide walks through every major encoding format you are likely to encounter, shows
            you how to identify each one at a glance, and provides step-by-step instructions and
            Python code snippets for decoding each type. By the end you will also know which tools
            — both command-line and browser-based — do the heavy lifting for you.
          </p>
        </section>

        {/* Table of Contents */}
        <nav aria-label="Table of contents" className="mb-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="mb-3 text-lg font-semibold">Table of Contents</h2>
          <ol className="list-decimal space-y-1 pl-5 text-blue-700">
            <li><a href="#layers-of-computer-language" className="hover:underline">The Layers of Computer Language: From Source Code to Machine Code</a></li>
            <li><a href="#identify-encoding-type" className="hover:underline">How to Identify What Type of Encoding You&apos;re Looking At</a></li>
            <li><a href="#decode-hex-to-text" className="hover:underline">How to Decode Hexadecimal (Hex) to Text</a></li>
            <li><a href="#decode-binary-to-text" className="hover:underline">Decoding Binary to Text</a></li>
            <li><a href="#decode-base64" className="hover:underline">Decoding Base64</a></li>
            <li><a href="#decode-url-encoding" className="hover:underline">Decoding URL Percent-Encoding</a></li>
            <li><a href="#decode-bytecode" className="hover:underline">Decoding Python and Java Bytecode</a></li>
            <li><a href="#tools-compiled-binaries" className="hover:underline">Tools for Decoding Compiled Binaries</a></li>
            <li><a href="#quick-reference" className="hover:underline">Quick Reference: Common Encoding Patterns at a Glance</a></li>
            <li><a href="#faq" className="hover:underline">FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="layers-of-computer-language" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">
            1. The Layers of Computer Language: From Source Code to Machine Code
          </h2>
          <p>
            &quot;Computer language&quot; is not a single thing. It is a stack of representations, each
            translated from the one above it. To decode something you first need to know which layer
            you are looking at.
          </p>

          <h3 className="text-xl font-semibold">Source code</h3>
          <p>
            Source code is the human-readable form that programmers write. Python, JavaScript, Java,
            and C are all source code. A Python file on disk is plain UTF-8 text that any text
            editor can open. This layer requires no decoding — it is already readable.
          </p>

          <h3 className="text-xl font-semibold">Bytecode</h3>
          <p>
            Languages like Python and Java do not compile directly to machine code. Instead they
            compile to bytecode — an intermediate representation. Python stores bytecode in{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.pyc</code> files
            inside the <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">__pycache__</code>{' '}
            directory. Java stores bytecode in{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.class</code>{' '}
            files. Bytecode is not raw machine code and does not run directly on the CPU — a
            runtime (the Python interpreter or the Java Virtual Machine) executes it. Bytecode can
            be disassembled back into a human-readable mnemonic form; we cover that in{' '}
            <a href="#decode-bytecode" className="text-blue-700 hover:underline">section 7</a>.
          </p>

          <h3 className="text-xl font-semibold">Assembly language</h3>
          <p>
            Assembly language is a thin, human-readable layer directly above machine code. Each
            assembly instruction corresponds to exactly one machine-code instruction. For example,
            on x86-64 you might write:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`MOV EAX, 1
SYSCALL`}</code>
          </pre>
          <p>
            That pair of instructions places the value 1 into the EAX register and then triggers a
            system call — the conventional way to invoke the Linux <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">exit(1)</code>{' '}
            system call in 64-bit mode. Humans can read and write assembly, but almost nobody does
            so for large programs. It is primarily used when inspecting compiled binaries.
          </p>

          <h3 className="text-xl font-semibold">Machine code</h3>
          <p>
            Machine code is binary instructions — sequences of 1s and 0s — that the CPU executes
            directly. A compiled C or C++ program (built with{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">gcc</code>,{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">clang</code>, or{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">MSVC</code>) is
            machine code. Nobody writes machine code by hand — compilers and assemblers produce it.
            When you open a compiled binary in a hex editor, what you see is machine code expressed
            as hexadecimal digits.
          </p>

          <h3 className="text-xl font-semibold">Data encodings</h3>
          <p>
            Separate from programming languages, there are encoding schemes used to represent raw
            data in printable or transmissible form. Hexadecimal, Base64, URL percent-encoding, and
            ASCII are all data encodings. They describe how bytes are written down, not how
            instructions are structured. Most of this article is about these encodings because they
            are what you encounter in day-to-day work — in HTTP headers, email MIME parts, log
            files, and data URIs.
          </p>
        </section>

        {/* Section 2 */}
        <section id="identify-encoding-type" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">
            2. How to Identify What Type of Encoding You&apos;re Looking At
          </h2>
          <p>
            Before you can decode something, you need to know what it is. The good news is that most
            encoding formats have distinctive fingerprints visible to the naked eye.
          </p>

          <ul className="space-y-3 pl-4">
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-blue-600">&#9656;</span>
              <span>
                <strong>Binary:</strong> The string contains only{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">0</code> and{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">1</code>, usually
                grouped into blocks of 8 (one byte per block). Example:{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                  01001000 01100101 01101100 01101100 01101111
                </code>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-blue-600">&#9656;</span>
              <span>
                <strong>Hexadecimal:</strong> Characters come only from{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">0–9</code> and{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">A–F</code>{' '}
                (case-insensitive) and appear in pairs, often space-separated. Example:{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">48 65 6C 6C 6F</code>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-blue-600">&#9656;</span>
              <span>
                <strong>Base64:</strong> Uses upper and lowercase letters, digits, plus{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">+</code> and{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">/</code>, and
                ends with one or two{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">=</code>{' '}
                padding characters. The length is always a multiple of 4. Example:{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">SGVsbG8=</code>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-blue-600">&#9656;</span>
              <span>
                <strong>URL encoding (percent-encoding):</strong> Contains{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">%</code>{' '}
                followed by exactly two hex digits. Example:{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                  Hello%20World%21
                </code>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 shrink-0 text-blue-600">&#9656;</span>
              <span>
                <strong>ASCII decimal:</strong> Numbers between 0 and 127 separated by spaces or
                commas. Example:{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                  72 101 108 108 111
                </code>
              </span>
            </li>
          </ul>

          <p>
            When in doubt, paste the string into{' '}
            <a
              href="https://gchq.github.io/CyberChef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              CyberChef
            </a>{' '}
            and use the &quot;Magic&quot; operation — it runs heuristics across all known encoding
            types and ranks the most likely interpretation.
          </p>
        </section>

        {/* Section 3 */}
        <section id="decode-hex-to-text" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">3. How to Decode Hexadecimal (Hex) to Text</h2>
          <p>
            Hexadecimal (base-16) is the most common way to display binary files because it is
            compact and human-scannable. Each byte — which holds a value from 0 to 255 — is
            represented as exactly two hex characters. Hex dumps appear in debuggers, network
            packet captures, and file-format documentation.
          </p>

          <h3 className="text-xl font-semibold">Step-by-step: decode hex to ASCII text</h3>
          <p>
            Take the hex string{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">48 65 6C 6C 6F</code>.
            Here is how to decode it manually:
          </p>

          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Split into byte pairs:</strong>{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">48</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">65</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">6C</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">6C</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">6F</code>
            </li>
            <li>
              <strong>Convert each pair from hex to decimal:</strong>{' '}
              72, 101, 108, 108, 111
            </li>
            <li>
              <strong>Look up each decimal value in the ASCII table:</strong>{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">H</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">e</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">l</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">l</code>,{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">o</code>
            </li>
            <li>
              <strong>Concatenate:</strong> <strong>Hello</strong>
            </li>
          </ol>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Hex</th>
                  <th className="px-4 py-2 font-semibold">Decimal</th>
                  <th className="px-4 py-2 font-semibold">ASCII character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-mono">48</td>
                  <td className="px-4 py-2">72</td>
                  <td className="px-4 py-2 font-mono">H</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">65</td>
                  <td className="px-4 py-2">101</td>
                  <td className="px-4 py-2 font-mono">e</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">6C</td>
                  <td className="px-4 py-2">108</td>
                  <td className="px-4 py-2 font-mono">l</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">6C</td>
                  <td className="px-4 py-2">108</td>
                  <td className="px-4 py-2 font-mono">l</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">6F</td>
                  <td className="px-4 py-2">111</td>
                  <td className="px-4 py-2 font-mono">o</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold">Decode hex in Python</h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`# Decode a hex string to UTF-8 text
result = bytes.fromhex('48656c6c6f').decode('utf-8')
print(result)  # Hello`}</code>
          </pre>
          <p>
            The{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">bytes.fromhex()</code>{' '}
            built-in accepts a string of hex characters (with or without spaces) and returns a{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">bytes</code>{' '}
            object. Calling{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.decode('utf-8')</code>{' '}
            on it converts the bytes to a Python string.
          </p>

          <p>
            For interactive use, the{' '}
            <Link href="/tools/ascii-decoder" className="text-blue-700 hover:underline">
              ASCII decoder tool
            </Link>{' '}
            on this site handles hex-to-ASCII conversion without any coding required.
          </p>
        </section>

        {/* Section 4 */}
        <section id="decode-binary-to-text" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">4. Decoding Binary to Text</h2>
          <p>
            Binary is the native language of every computer. Every piece of data — text, images,
            executables — is ultimately stored as a stream of bits. When binary is written out for
            humans it is usually grouped into 8-bit bytes, each byte representing one value from 0
            to 255.
          </p>

          <h3 className="text-xl font-semibold">How binary maps to ASCII</h3>
          <p>
            ASCII assigns a number to each printable character. Binary encoding simply writes that
            number in base 2. The letter{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">H</code> has ASCII
            value 72. In binary, 72 is{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">01001000</code>.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Binary</th>
                  <th className="px-4 py-2 font-semibold">Decimal</th>
                  <th className="px-4 py-2 font-semibold">ASCII character</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-mono">01001000</td>
                  <td className="px-4 py-2">72</td>
                  <td className="px-4 py-2 font-mono">H</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">01100101</td>
                  <td className="px-4 py-2">101</td>
                  <td className="px-4 py-2 font-mono">e</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">01101100</td>
                  <td className="px-4 py-2">108</td>
                  <td className="px-4 py-2 font-mono">l</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">01101100</td>
                  <td className="px-4 py-2">108</td>
                  <td className="px-4 py-2 font-mono">l</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">01101111</td>
                  <td className="px-4 py-2">111</td>
                  <td className="px-4 py-2 font-mono">o</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold">Manual decoding steps</h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Split the binary string into 8-bit groups.</li>
            <li>
              Convert each group to decimal. For{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">01001000</code>:{' '}
              0×128 + 1×64 + 0×32 + 0×16 + 1×8 + 0×4 + 0×2 + 0×1 = 72.
            </li>
            <li>Map the decimal value to its ASCII character.</li>
          </ol>

          <h3 className="text-xl font-semibold">Decode binary in Python</h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`binary_str = '01001000 01100101 01101100 01101100 01101111'
groups = binary_str.split()
chars = [chr(int(b, 2)) for b in groups]
print(''.join(chars))  # Hello`}</code>
          </pre>

          <p>
            Note that binary encoding of text is different from a compiled binary executable. A
            compiled binary contains machine code instructions, not ASCII characters — decoding it
            requires a disassembler rather than a simple binary-to-ASCII lookup.
          </p>

          <p>
            The{' '}
            <Link href="/tools/ascii-decoder" className="text-blue-700 hover:underline">
              ASCII decoder tool
            </Link>{' '}
            accepts binary input and converts it to readable text in one click.
          </p>
        </section>

        {/* Section 5 */}
        <section id="decode-base64" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">5. Decoding Base64</h2>
          <p>
            Base64 is an encoding scheme that represents arbitrary binary data using 64 printable
            ASCII characters: A–Z, a–z, 0–9, plus{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">+</code> and{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">/</code>. It was
            designed to safely transmit binary data through systems that only handle text, such as
            email. Base64 is not encryption — anyone can decode it instantly.
          </p>

          <h3 className="text-xl font-semibold">Recognising Base64</h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>The string contains only letters, digits, <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">+</code>, and <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">/</code>.</li>
            <li>It ends with one or two <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">=</code> padding characters (or none if the input length is a multiple of 3 bytes).</li>
            <li>The total character count is a multiple of 4.</li>
          </ul>

          <p>
            Example: the word &quot;Hello&quot; in Base64 is{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">SGVsbG8=</code>. The
            trailing <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">=</code> is
            padding added because the input (5 bytes) is not evenly divisible by 3.
          </p>

          <h3 className="text-xl font-semibold">Decode Base64 from the command line</h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`# Encode
echo "Hello" | base64
# Output: SGVsbG8K

# Decode
echo SGVsbG8K | base64 -d
# Output: Hello`}</code>
          </pre>
          <p>
            Note that when you pipe a string through{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">echo</code> a
            newline character is appended, so the encoded output includes that newline (which is why
            you see <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">SGVsbG8K</code>{' '}
            rather than <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">SGVsbG8=</code>).
          </p>

          <h3 className="text-xl font-semibold">Decode Base64 in Python</h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`import base64

# Decode Base64 to string
decoded = base64.b64decode('SGVsbG8=').decode()
print(decoded)  # Hello

# Encode a string to Base64
encoded = base64.b64encode(b'Hello').decode()
print(encoded)  # SGVsbG8=`}</code>
          </pre>

          <h3 className="text-xl font-semibold">URL-safe Base64</h3>
          <p>
            Some systems use a URL-safe variant of Base64 that replaces{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">+</code> with{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">-</code> and{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">/</code> with{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">_</code>. JSON Web
            Tokens (JWTs) use this variant. In Python, use{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
              base64.urlsafe_b64decode()
            </code>{' '}
            to handle those.
          </p>

          <p>
            Use the{' '}
            <Link href="/tools/base64-encoder-decoder" className="text-blue-700 hover:underline">
              Base64 encoder/decoder tool
            </Link>{' '}
            on this site to decode Base64 strings instantly in your browser.
          </p>
        </section>

        {/* Section 6 */}
        <section id="decode-url-encoding" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">6. Decoding URL Percent-Encoding</h2>
          <p>
            URLs can only contain a limited set of safe characters. When a URL needs to include
            characters outside that set — such as spaces, equals signs, or slashes — those
            characters are percent-encoded: replaced by a{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">%</code> sign
            followed by the character&apos;s two-digit hex ASCII value.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Encoded</th>
                  <th className="px-4 py-2 font-semibold">Decoded character</th>
                  <th className="px-4 py-2 font-semibold">ASCII decimal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-mono">%20</td>
                  <td className="px-4 py-2">space</td>
                  <td className="px-4 py-2">32</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">%3D</td>
                  <td className="px-4 py-2">= (equals sign)</td>
                  <td className="px-4 py-2">61</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">%2F</td>
                  <td className="px-4 py-2">/ (forward slash)</td>
                  <td className="px-4 py-2">47</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">%3A</td>
                  <td className="px-4 py-2">: (colon)</td>
                  <td className="px-4 py-2">58</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono">%40</td>
                  <td className="px-4 py-2">@ (at sign)</td>
                  <td className="px-4 py-2">64</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold">Decode a URL in Python</h3>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`from urllib.parse import unquote

encoded = 'Hello%20World%21%20It%27s%20a%20test%3D1'
decoded = unquote(encoded)
print(decoded)  # Hello World! It's a test=1`}</code>
          </pre>

          <h3 className="text-xl font-semibold">Decoding form data</h3>
          <p>
            HTML form submissions sent with the{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
              application/x-www-form-urlencoded
            </code>{' '}
            content type use percent-encoding with one additional rule: spaces may be encoded as{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">+</code> rather than{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">%20</code>. The
            Python function{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
              urllib.parse.unquote_plus()
            </code>{' '}
            handles this variant.
          </p>

          <p>
            Use the{' '}
            <Link
              href="/tools/url-percent-encoding-decoding"
              className="text-blue-700 hover:underline"
            >
              URL percent-encoding decoder tool
            </Link>{' '}
            on this site to decode percent-encoded URLs without writing any code.
          </p>
        </section>

        {/* Section 7 */}
        <section id="decode-bytecode" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">7. Decoding Python and Java Bytecode</h2>
          <p>
            Bytecode is the compiled, platform-independent form of programs written in Python or
            Java. It is not human-readable straight out of the file, but both ecosystems provide
            official tools to disassemble it into a readable mnemonic form.
          </p>

          <h3 className="text-xl font-semibold">Python bytecode with the dis module</h3>
          <p>
            Python compiles source files to bytecode and caches it in{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.pyc</code> files
            inside the{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">__pycache__</code>{' '}
            directory. The standard library&apos;s{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">dis</code> module
            disassembles Python functions or code objects into human-readable bytecode instructions:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`import dis

def greet(name):
    return "Hello, " + name

dis.dis(greet)

# Output (CPython 3.12, abbreviated):
#   2           0 RESUME                   0
#   3           2 LOAD_CONST               1 ('Hello, ')
#               4 LOAD_FAST                0 (name)
#               6 BINARY_OP                0 (+)
#              10 RETURN_VALUE`}</code>
          </pre>
          <p>
            Each line shows the source line number, the byte offset within the code object, the
            opcode name, and any arguments. This is the Python Virtual Machine&apos;s instruction set
            — not x86 machine code.
          </p>

          <h3 className="text-xl font-semibold">Java bytecode with javap</h3>
          <p>
            The JDK ships with{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">javap</code>, a
            class-file disassembler. Run it against any{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.class</code> file
            to see the JVM bytecode:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`javap -c ClassName.class

# Example output fragment:
#   public static void main(java.lang.String[]);
#     Code:
#        0: getstatic     #7  // Field java/lang/System.out
#        3: ldc           #13 // String Hello, World!
#        5: invokevirtual #15 // Method java/io/PrintStream.println
#        8: return`}</code>
          </pre>
          <p>
            The{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">-verbose</code>{' '}
            flag adds constant pool information, method signatures, and class metadata. For
            decompilation back to Java source code (rather than just bytecode mnemonics), tools like
            CFR or Fernflower produce readable Java from{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">.class</code> files.
          </p>
        </section>

        {/* Section 8 */}
        <section id="tools-compiled-binaries" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">8. Tools for Decoding Compiled Binaries</h2>
          <p>
            Compiled C and C++ programs are machine code — raw binary instructions for the CPU.
            Decoding them requires a disassembler (which converts machine code to assembly language)
            or a decompiler (which attempts to reconstruct higher-level pseudocode). Here are the
            tools professionals use.
          </p>

          <h3 className="text-xl font-semibold">GNU objdump</h3>
          <p>
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">objdump</code> is
            available on every Linux system with the GNU Binutils package installed. The{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">-d</code> flag
            disassembles executable sections:
          </p>
          <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-green-300">
            <code>{`objdump -d ./mybinary

# Example output fragment:
# 0000000000001149 <main>:
#     1149:       55                      push   %rbp
#     114a:       48 89 e5                mov    %rsp,%rbp
#     114d:       bf 01 00 00 00          mov    $0x1,%edi
#     1152:       e8 f9 fe ff ff          call   1050 <exit@plt>`}</code>
          </pre>
          <p>
            The left column is the memory address, the middle column is the raw machine code bytes
            in hex, and the right column is the human-readable assembly mnemonic.
          </p>

          <h3 className="text-xl font-semibold">Ghidra</h3>
          <p>
            Ghidra is a free, open-source reverse-engineering platform released by the NSA in 2019.
            It supports x86, ARM, MIPS, and many other architectures. Unlike{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">objdump</code>,
            which produces assembly, Ghidra includes a decompiler that reconstructs approximate
            C-like pseudocode from the binary. This makes it far easier to understand what a program
            does without reading thousands of assembly instructions.
          </p>
          <p>
            Ghidra is available at{' '}
            <a
              href="https://ghidra-sre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              ghidra-sre.org
            </a>
            . It requires Java 17 or later.
          </p>

          <h3 className="text-xl font-semibold">CyberChef</h3>
          <p>
            For data encodings (hex, Base64, binary, URL encoding, and many more),{' '}
            <a
              href="https://gchq.github.io/CyberChef"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              CyberChef
            </a>{' '}
            by GCHQ is the go-to browser-based tool. It supports chaining multiple decode operations
            in sequence — useful when data has been encoded multiple times (for example, a Base64
            string that itself contains a URL-encoded value).
          </p>

          <h3 className="text-xl font-semibold">Hex editors</h3>
          <p>
            A hex editor lets you view any file as a raw hex dump and edit individual bytes. Popular
            choices include{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">xxd</code> (command
            line, ships with Vim),{' '}
            <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">hexdump -C</code>{' '}
            (Linux), HxD (Windows), and ImHex (cross-platform, open-source).
          </p>
        </section>

        {/* Section 9 */}
        <section id="quick-reference" className="mb-12 space-y-4">
          <h2 className="text-3xl font-bold">9. Quick Reference: Common Encoding Patterns at a Glance</h2>
          <p>
            Use this table as a quick cheat sheet when you encounter an unfamiliar string and need
            to identify its encoding type before decoding it.
          </p>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 font-semibold">Encoding</th>
                  <th className="px-4 py-2 font-semibold">Visual clues</th>
                  <th className="px-4 py-2 font-semibold">Example</th>
                  <th className="px-4 py-2 font-semibold">Decode with</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2 font-semibold">Binary</td>
                  <td className="px-4 py-2">Only 0 and 1, groups of 8</td>
                  <td className="px-4 py-2 font-mono">01001000 01100101</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/ascii-decoder" className="text-blue-700 hover:underline">ASCII decoder</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Hexadecimal</td>
                  <td className="px-4 py-2">0–9 and A–F in pairs</td>
                  <td className="px-4 py-2 font-mono">48 65 6C 6C 6F</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/ascii-decoder" className="text-blue-700 hover:underline">ASCII decoder</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Base64</td>
                  <td className="px-4 py-2">A–Z, a–z, 0–9, +, /; ends with =</td>
                  <td className="px-4 py-2 font-mono">SGVsbG8=</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/base64-encoder-decoder" className="text-blue-700 hover:underline">Base64 tool</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">URL encoding</td>
                  <td className="px-4 py-2">%XX patterns</td>
                  <td className="px-4 py-2 font-mono">Hello%20World</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/url-percent-encoding-decoding" className="text-blue-700 hover:underline">URL decoder</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">ASCII decimal</td>
                  <td className="px-4 py-2">Numbers 0–127 separated by spaces</td>
                  <td className="px-4 py-2 font-mono">72 101 108 108 111</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/ascii-decoder" className="text-blue-700 hover:underline">ASCII decoder</Link>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">HTML entities</td>
                  <td className="px-4 py-2">&amp;amp;, &amp;lt;, &amp;#65; patterns</td>
                  <td className="px-4 py-2 font-mono">&amp;#72;&amp;#101;&amp;#108;</td>
                  <td className="px-4 py-2">
                    <Link href="/tools/html-encoder-decoder" className="text-blue-700 hover:underline">HTML decoder</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold">ASCII key values to memorise</h3>
          <p>
            ASCII was published in 1963 and defines 128 characters (0–127). Three anchor points
            make the rest easy to derive:
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">&apos;0&apos;</code> = 48 (digits
              48–57)
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">&apos;A&apos;</code> = 65 (uppercase
              letters 65–90)
            </li>
            <li>
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">&apos;a&apos;</code> = 97 (lowercase
              letters 97–122, exactly 32 more than uppercase)
            </li>
          </ul>
          <p>
            UTF-8 is the modern successor to ASCII. It is backward-compatible: any byte value below
            128 in a UTF-8 file has exactly the same meaning as in ASCII. Characters above 127 are
            encoded as multi-byte sequences (2–4 bytes each).
          </p>
        </section>

        {/* Section 10 — FAQ */}
        <section id="faq" className="mb-12 space-y-6">
          <h2 className="text-3xl font-bold">10. FAQ</h2>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              What is the easiest way to decode computer language for a beginner?
            </h3>
            <p>
              Start by identifying the encoding type using the visual clues in the quick-reference
              table above. Once you know whether you are looking at binary, hex, Base64, or URL
              encoding, use the corresponding tool on this site or paste the string into{' '}
              <a
                href="https://gchq.github.io/CyberChef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                CyberChef
              </a>
              . For programming-language bytecode, use{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">dis.dis()</code>{' '}
              in Python or{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">javap -c</code>{' '}
              in Java. You do not need to understand machine code to work with most encoding tasks.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              What is the difference between decoding and decryption?
            </h3>
            <p>
              Decoding reverses a publicly known encoding scheme — no secret key is needed. Hex,
              Base64, binary, and URL percent-encoding are all encodings that anyone can reverse.
              Decryption, by contrast, requires a secret key. AES-256 and RSA produce ciphertext
              that cannot be reversed without the correct key, regardless of which tool you use.
              Encoding schemes like Base64 are sometimes confused with encryption because the output
              looks scrambled — but they provide no security whatsoever.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">
              Can I decode compiled machine code back into readable source code?
            </h3>
            <p>
              Not perfectly. You can disassemble a compiled binary into assembly language using{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">objdump -d</code>,
              and you can decompile it to approximate C-like pseudocode using Ghidra. However,
              compilers discard variable names, comments, and most high-level structure during
              compilation. The recovered code will work similarly to the original but will not be
              identical to it.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">What does &quot;48 65 6C 6C 6F&quot; mean?</h3>
            <p>
              It is the word &quot;Hello&quot; written as a hexadecimal dump.{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">48</code> hex
              equals 72 decimal, which is the ASCII code for{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">H</code>.{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">65</code> hex is
              101 decimal (<code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">e</code>
              ),{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">6C</code> is 108
              decimal (<code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">l</code>
              ), and{' '}
              <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">6F</code> is 111
              decimal (<code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">o</code>
              ). Converting every pair through the ASCII table spells Hello.
            </p>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="rounded-lg border border-blue-100 bg-blue-50 p-6">
          <h2 className="mb-3 text-xl font-bold">Free encoding and decoding tools on this site</h2>
          <ul className="space-y-2 text-blue-800">
            <li>
              <Link href="/tools/ascii-decoder" className="font-medium hover:underline">
                ASCII decoder
              </Link>{' '}
              — convert hex, binary, or decimal numbers to ASCII characters
            </li>
            <li>
              <Link href="/tools/base64-encoder-decoder" className="font-medium hover:underline">
                Base64 encoder / decoder
              </Link>{' '}
              — encode text or files to Base64 and decode Base64 back to text
            </li>
            <li>
              <Link href="/tools/html-encoder-decoder" className="font-medium hover:underline">
                HTML encoder / decoder
              </Link>{' '}
              — convert HTML entities like &amp;amp; and &amp;#65; to plain text
            </li>
            <li>
              <Link
                href="/tools/url-percent-encoding-decoding"
                className="font-medium hover:underline"
              >
                URL percent-encoding decoder
              </Link>{' '}
              — decode %20, %3D, and other percent-encoded URL characters
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}
