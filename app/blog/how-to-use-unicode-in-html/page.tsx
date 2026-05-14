import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-use-unicode-in-html`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How To Use Unicode in HTML — Characters, Entities & UTF-8 Encoding',
  description:
    'Learn how to use Unicode in HTML: declare UTF-8 encoding, insert characters directly or via named and numeric HTML entities, and handle emoji and supplementary code points.',
  keywords: [
    'how to use unicode in html',
    'unicode in html',
    'utf-8 html encoding',
    'html character entities',
    'numeric character reference',
    'html unicode characters',
    'meta charset utf-8',
    'html named entities',
    'unicode code points html',
    'html emoji encoding',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Use Unicode in HTML — Characters, Entities & UTF-8 Encoding',
    description:
      'A complete guide to using Unicode in HTML: UTF-8 encoding, the charset meta tag, direct characters, named entities, and numeric character references — with comparison tables and code examples.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Use Unicode in HTML' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Use Unicode in HTML — Characters, Entities & UTF-8 Encoding',
    description:
      'How to use Unicode in HTML: declare UTF-8, use direct characters, named entities, and numeric references. Includes tables for common characters and emoji.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Use Unicode in HTML — Characters, Entities & UTF-8 Encoding',
  description:
    'A complete guide to using Unicode in HTML: UTF-8 encoding, the charset meta tag, direct character insertion, named HTML entities, and numeric character references.',
  url: PAGE_URL,
  datePublished: '2026-05-14T00:00:00.000Z',
  dateModified: '2026-05-14T00:00:00.000Z',
  image: `${BASE_URL}/images/blog/ascii-encoding.jpg`,
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
      name: 'What is the difference between UTF-8 and Unicode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unicode is the standard that assigns a unique code point (e.g. U+0041 for "A") to every character. UTF-8 is one of several encodings that specifies how those code points are stored as bytes. UTF-8 uses 1 to 4 bytes per code point and is the required encoding for HTML documents according to the WHATWG HTML Living Standard.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need the meta charset tag if my server sends the correct Content-Type header?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The HTTP Content-Type header takes precedence over the meta charset tag when both are present. However, you should still include <meta charset="UTF-8"> in every document because the meta tag ensures correct rendering when the file is opened locally (where there is no HTTP header) and serves as a clear in-document declaration for developers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use emoji directly in HTML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If your HTML file is saved as UTF-8 and declares <meta charset="UTF-8">, you can paste emoji directly into the source. Alternatively, use the hex numeric character reference — for example &#x1F600; renders 😀. Both methods produce the same result.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a numeric character reference in HTML?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A numeric character reference (NCR) is a way to include any Unicode code point in HTML using its code point number. The decimal form is &#N; (e.g. &#8364; for €) and the hexadecimal form is &#xN; (e.g. &#x20AC; for €). NCRs work in every browser regardless of the document\'s file encoding.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which method should I use — direct character, named entity, or numeric reference?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a UTF-8 HTML document, prefer direct characters for readability. Use named entities like &amp;, &lt;, and &gt; when the character has structural meaning in HTML or when clarity matters. Use numeric character references when no named entity exists (for example &#10003; for ✓ or &#128512; for 😀).',
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
    { '@type': 'ListItem', position: 3, name: 'How To Use Unicode in HTML', item: PAGE_URL },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">

          {/* Breadcrumb nav */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-foreground hover:underline">Home</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground hover:underline">Blog</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li className="text-foreground font-medium" aria-current="page">How To Use Unicode in HTML</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded px-2 py-0.5">
                {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              How To Use Unicode in HTML
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To Use Unicode in HTML</strong> starts with declaring the correct
              character encoding — without it, browsers may misread your characters and display garbled text. This guide
              walks through exactly what Unicode and UTF-8 are, why the{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>{' '}
              tag is non-negotiable, and the three methods for inserting any character into an HTML document: directly as a
              UTF-8 character, as a named HTML entity, or as a numeric character reference.
            </p>
          </header>

          {/* Hero Image */}
          <Image
            src="/images/blog/ascii-encoding.jpg"
            alt="how to use unicode in html — unicode character encoding chart showing UTF-8 code points in HTML"
            width={800}
            height={450}
            className="w-full rounded-xl mb-10 object-cover"
            priority
          />

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* ── What Unicode Is ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">What Unicode Is (and Why It Matters for HTML)</h2>
              <p className="text-base text-muted-foreground mb-4">
                Unicode is a character encoding standard that assigns a unique{' '}
                <strong className="text-foreground">code point</strong> to every character in every writing system. Code
                points are written in the form <code className="font-mono text-sm bg-secondary/60 px-1 rounded">U+XXXX</code>{' '}
                — for example, the letter A is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">U+0041</code> and the euro sign € is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">U+20AC</code>. As of Unicode 15.1, the
                standard covers <strong className="text-foreground">149,813 characters</strong> across 161 scripts,
                ranging from basic Latin letters to CJK ideographs, mathematical symbols, and emoji.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">UTF-8</strong> is the encoding that translates Unicode code points into
                the bytes that travel across a network or sit in a file. It is a variable-width encoding: ASCII characters
                (U+0000–U+007F) use a single byte identical to their ASCII value, while characters beyond that range use 2,
                3, or 4 bytes. This backwards-compatibility with ASCII is one reason UTF-8 has become the dominant encoding
                on the web — as of the WHATWG HTML Living Standard, all documents served as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">text/html</code> are required to use
                UTF-8.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                If you need to convert text or explore ASCII alongside Unicode, our{' '}
                <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">
                  guide to understanding ASCII character encoding
                </Link>{' '}
                covers the relationship between the two standards in depth.
              </p>
            </section>

            {/* ── The charset meta tag ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Charset Meta Tag — Why It Must Come First</h2>
              <p className="text-base text-muted-foreground mb-4">
                Before you can safely use any Unicode character in HTML, you need to tell the browser how to interpret the
                bytes it receives. That is exactly what the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset&gt;</code> tag does:
              </p>

              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <p>© 2026 — Unicode works here: 你好, こんにちは, مرحبا</p>
</body>
</html>`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                The WHATWG HTML Living Standard requires this tag to appear{' '}
                <strong className="text-foreground">within the first 1,024 bytes</strong> of the document. Placing it as
                the very first element inside{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;head&gt;</code> guarantees that the
                browser reads it before attempting to decode any other content on the page.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Without the charset declaration, browsers fall back to heuristic encoding detection — an algorithm that
                guesses the encoding by scanning the byte sequence of the file. On a document with mostly ASCII content the
                guess is often right, but once you add characters outside the ASCII range (accented letters, currency
                symbols, emoji) a wrong guess produces garbled output: the classic{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">â€™</code> in place of a right
                apostrophe.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                One more thing: never use the older verbose form{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">
                  &lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=utf-8&quot;&gt;
                </code>
                . That syntax comes from HTML4 and is deprecated. The short form{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>{' '}
                is the current HTML Living Standard.
              </p>
            </section>

            {/* ── Three Methods ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Three Ways to Include a Unicode Character in HTML</h2>
              <p className="text-base text-muted-foreground mb-4">
                There are exactly three methods for getting a Unicode character into your HTML markup. Each has trade-offs
                around readability, portability, and browser support.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Direct UTF-8 Character</h3>
              <p className="text-base text-muted-foreground mb-4">
                The simplest approach — just type or paste the character into your source file:
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<p>€ 10.00</p>
<p>© 2026 Acme Corp.</p>
<p>Temperature: 37°C</p>`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                This works perfectly as long as two conditions are met: the file is saved with UTF-8 encoding (most modern
                editors — VS Code, Sublime Text, JetBrains IDEs — default to UTF-8), and the document includes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>.
                When both are true, direct characters produce the most readable source code.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Named HTML Entity</h3>
              <p className="text-base text-muted-foreground mb-4">
                A named entity is a short mnemonic starting with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> and ending with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">;</code>:
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<p>&euro; 10.00</p>
<p>&copy; 2026 Acme Corp.</p>
<p>Protons &amp; Neutrons</p>`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                Named entities are human-readable, work in all browsers, and do not require the file to be saved as UTF-8.
                Their limitation is coverage: not every Unicode character has a named entity. The HTML Living Standard
                defines a fixed list of named character references — characters outside that list must use a numeric
                reference instead.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Numeric Character Reference (NCR)</h3>
              <p className="text-base text-muted-foreground mb-4">
                A numeric character reference encodes the Unicode code point directly — either as a decimal number or in
                hexadecimal:
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<!-- Decimal form: &#N; -->
<p>&#8364; 10.00</p>   <!-- € — U+20AC = 8364 decimal -->

<!-- Hexadecimal form: &#xN; -->
<p>&#x20AC; 10.00</p>  <!-- same character, hex code point -->

<!-- Emoji using hex NCR -->
<p>&#x1F600;</p>       <!-- 😀 — U+1F600 -->`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                NCRs work for every Unicode code point — including emoji and supplementary characters above U+FFFF — in
                every browser, regardless of the document&apos;s file encoding. The cost is readability:
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&#8364;</code> is much harder to
                recognise at a glance than{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&euro;</code> or a literal €.
              </p>

              {/* Three-methods comparison table */}
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Comparison of the Three Methods</h3>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Method', 'Example for €', 'Pros', 'Cons'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Direct UTF-8 char', '€', 'Most readable source code', 'File must be UTF-8; needs correct meta charset'],
                      ['Named entity', '&euro;', 'Always works; human-readable', 'Not every character has a named entity'],
                      ['Decimal NCR', '&#8364;', 'Works everywhere', 'Not human-readable'],
                      ['Hex NCR', '&#x20AC;', 'Works everywhere; matches U+ code point', 'Not human-readable'],
                    ].map(([method, example, pros, cons]) => (
                      <tr key={method} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-semibold text-foreground text-sm align-top">{method}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{example}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs align-top">{pros}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs align-top">{cons}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Common characters table ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Common Unicode Characters and Their HTML Codes</h2>
              <p className="text-base text-muted-foreground mb-4">
                These are the characters that come up most often in everyday HTML authoring. The named entity and decimal
                numeric reference are both valid; use whichever is clearest in context. You can also use our{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>{' '}
                to look up or convert any character on demand.
              </p>

              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Character', 'Code Point', 'Named Entity', 'Decimal NCR'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['© (copyright)', 'U+00A9', '&copy;', '&#169;'],
                      ['® (registered)', 'U+00AE', '&reg;', '&#174;'],
                      ['™ (trademark)', 'U+2122', '&trade;', '&#8482;'],
                      ['€ (euro)', 'U+20AC', '&euro;', '&#8364;'],
                      ['£ (pound)', 'U+00A3', '&pound;', '&#163;'],
                      ['— (em dash)', 'U+2014', '&mdash;', '&#8212;'],
                      ['– (en dash)', 'U+2013', '&ndash;', '&#8211;'],
                      ['" (left double quote)', 'U+201C', '&ldquo;', '&#8220;'],
                      ['" (right double quote)', 'U+201D', '&rdquo;', '&#8221;'],
                      ['(non-breaking space)', 'U+00A0', '&nbsp;', '&#160;'],
                      ['← (left arrow)', 'U+2190', '&larr;', '&#8592;'],
                      ['→ (right arrow)', 'U+2192', '&rarr;', '&#8594;'],
                      ['✓ (check mark)', 'U+2713', '— none —', '&#10003;'],
                      ['★ (black star)', 'U+2605', '— none —', '&#9733;'],
                      ['😀 (grinning face)', 'U+1F600', '— none —', '&#128512;'],
                    ].map(([char, cp, named, decimal]) => (
                      <tr key={cp} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 text-foreground text-sm align-top">{char}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{cp}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{named}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{decimal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Emoji and supplementary characters ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Emoji and Characters Above U+FFFF</h2>
              <p className="text-base text-muted-foreground mb-4">
                The Unicode code space is divided into 17 planes. The first — the{' '}
                <strong className="text-foreground">Basic Multilingual Plane (BMP)</strong> — covers U+0000 through U+FFFF
                and contains the vast majority of commonly used characters. Emoji and many historic scripts live in the
                supplementary planes: U+10000 and above.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                In UTF-16 (the internal representation used by JavaScript strings), supplementary characters require two
                16-bit code units called a <strong className="text-foreground">surrogate pair</strong>. In UTF-8 they use 4
                bytes. In HTML you do not need to worry about surrogates at all — the hex numeric character reference
                handles them natively:
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<!-- Hex NCR — works for any code point including emoji -->
<p>&#x1F600;</p>  <!-- 😀 grinning face, U+1F600 -->
<p>&#x1F4A1;</p>  <!-- 💡 light bulb,    U+1F4A1 -->
<p>&#x1F680;</p>  <!-- 🚀 rocket,         U+1F680 -->

<!-- Direct UTF-8 — also works perfectly in a UTF-8 document -->
<p>😀 💡 🚀</p>`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                Both approaches produce identical output in the browser. The hex NCR is useful when your text editor or
                deployment pipeline might corrupt multi-byte characters; the direct form is more readable.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                For encoding and decoding HTML entities in your workflow, see our{' '}
                <Link href="/blog/how-to-encode-html-code" className="text-primary hover:underline">
                  guide on how to encode HTML code
                </Link>{' '}
                — it covers encoding reserved characters like{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>, and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> for XSS prevention.
              </p>
            </section>

            {/* ── HTTP Content-Type header ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The HTTP Content-Type Header</h2>
              <p className="text-base text-muted-foreground mb-4">
                The character encoding declaration has two locations: the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">meta charset</code> tag in the HTML and
                the <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Content-Type</code> HTTP response
                header sent by the server. When both are present, the HTTP header wins — it takes precedence over the
                in-document tag.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                For a correctly configured server, the response header should look like:
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`Content-Type: text/html; charset=utf-8`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                For nginx, add{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">charset utf-8;</code> to your server
                block. For Apache, use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">AddDefaultCharset UTF-8</code> in your
                configuration or <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.htaccess</code> file.
                Most CDNs and hosting platforms pass through whatever the origin server sends, so fixing it at the server
                level covers both the HTTP header and the cache.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Still include <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>{' '}
                even when the HTTP header is set correctly. When a user saves the page and opens it locally, there is no
                HTTP header — the meta tag is the only encoding declaration available.
              </p>
            </section>

            {/* ── Best practices ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Best Practices Summary</h2>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Always declare UTF-8.</strong> Put{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>{' '}
                  as the first element inside <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;head&gt;</code>,
                  within the first 1,024 bytes of the document.
                </li>
                <li>
                  <strong className="text-foreground">Save files as UTF-8.</strong> Modern editors default to UTF-8; verify
                  in the status bar or file settings if you are unsure.
                </li>
                <li>
                  <strong className="text-foreground">Use direct characters for readability.</strong> In a properly encoded
                  document, typing € directly is cleaner than{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;euro;</code> or{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#8364;</code>.
                </li>
                <li>
                  <strong className="text-foreground">Use named entities for reserved characters.</strong> Always write{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;amp;</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code>, and{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;gt;</code> when those characters
                  appear as content rather than markup.
                </li>
                <li>
                  <strong className="text-foreground">Use numeric references for characters with no named entity.</strong>{' '}
                  For example, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#10003;</code> (✓) or{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x1F600;</code> (😀).
                </li>
                <li>
                  <strong className="text-foreground">Configure the server Content-Type header.</strong> Set{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Content-Type: text/html; charset=utf-8</code>{' '}
                  at the server or CDN level so both the HTTP declaration and the meta tag are consistent.
                </li>
                <li>
                  <strong className="text-foreground">Do not use the deprecated verbose meta tag.</strong> The short form{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>{' '}
                  is the standard; the{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http-equiv</code> form is deprecated.
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                If you need to encode or decode text for URLs rather than HTML, see our{' '}
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">
                  Base64 encoder / decoder
                </Link>{' '}
                for binary-to-text encoding tasks.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between UTF-8 and Unicode?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Unicode is the standard that defines code points — the numbers assigned to characters. UTF-8 is one
                encoding that specifies how those code points are stored as bytes. There are other Unicode encodings (UTF-16,
                UTF-32), but UTF-8 is the required encoding for HTML documents per the WHATWG HTML Living Standard.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Do I need the meta charset tag if my server sends the correct Content-Type header?</h3>
              <p className="text-base text-muted-foreground mb-4">
                The HTTP header takes precedence, but you should still include the meta tag. When a file is opened locally —
                dragged into a browser from the desktop, or viewed via a{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">file://</code> URL — there is no HTTP
                header, and the meta tag is the only encoding declaration the browser sees.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can I use emoji directly in HTML?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Yes. Save your HTML file as UTF-8, include{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;meta charset=&quot;UTF-8&quot;&gt;</code>,
                and paste the emoji directly into the source. Alternatively, use the hex numeric character
                reference — <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x1F600;</code> — which
                works regardless of the file encoding.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is a numeric character reference in HTML?</h3>
              <p className="text-base text-muted-foreground mb-4">
                A numeric character reference (NCR) encodes a Unicode code point directly in HTML. The decimal form is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#N;</code> (e.g.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#8364;</code> for €) and the
                hexadecimal form is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#xN;</code> (e.g.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x20AC;</code> for the same
                character). NCRs work everywhere because they reference the code point directly rather than depending on the
                document&apos;s byte encoding.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Which method should I use — direct character, named entity, or numeric reference?</h3>
              <p className="text-base text-muted-foreground mb-4">
                In a modern UTF-8 HTML document: use direct characters for readability, named entities (
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;gt;</code>) for reserved characters,
                and numeric character references for any character that has no named entity — such as ✓ (
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#10003;</code>) or emoji.
              </p>
            </section>

            {/* ── Related links grid ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Tools &amp; Guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/tools/html-encoder-decoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">HTML Encoder / Decoder</h3>
                  <p className="text-xs text-muted-foreground">
                    Convert any character to its HTML entity or numeric reference instantly — no code required.
                  </p>
                </Link>
                <Link
                  href="/blog/understanding-ascii-character-encoding"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">Understanding ASCII Character Encoding</h3>
                  <p className="text-xs text-muted-foreground">
                    Learn how ASCII relates to Unicode and UTF-8, and how the first 128 code points map between both standards.
                  </p>
                </Link>
                <Link
                  href="/blog/how-to-encode-html-code"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">How To Encode HTML Code</h3>
                  <p className="text-xs text-muted-foreground">
                    Escape special characters like &lt;, &gt;, and &amp; to prevent XSS — with code examples in JavaScript, PHP, and Python.
                  </p>
                </Link>
                <Link
                  href="/tools/base64-encoder-decoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">Base64 Encoder / Decoder</h3>
                  <p className="text-xs text-muted-foreground">
                    Encode binary data or text to Base64 and decode Base64 strings back to plain text.
                  </p>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
