import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How To Encode A URL — Percent Encoding, Query Strings & Best Practices',
  description:
    'How To Encode A URL: a complete guide to percent-encoding, reserved vs unreserved characters (RFC 3986), encoding in JavaScript, Python, and PHP, and the most common mistakes to avoid.',
  keywords: [
    'how to encode a url',
    'url encoding',
    'percent encoding',
    'encodeURIComponent',
    'urllib.parse.quote',
    'urlencode php',
    'rfc 3986',
    'query string encoding',
    'url percent encoding',
    'encode url javascript',
    'encode url python',
  ],
  openGraph: {
    title: 'How To Encode A URL — Percent Encoding, Query Strings & Best Practices',
    description:
      'Learn how to encode a URL using percent-encoding as defined in RFC 3986. Covers reserved characters, JavaScript, Python, PHP examples, and common mistakes.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00.000Z',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Encode A URL — Percent Encoding, Query Strings & Best Practices',
  datePublished: '2026-05-14T00:00:00.000Z',
  dateModified: '2026-05-14T00:00:00.000Z',
  author: { '@type': 'Person', name: 'John Reed' },
  publisher: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
    url: 'https://letters2numbersconverter.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://letters2numbersconverter.com/blog/how-to-encode-a-url',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between encodeURI and encodeURIComponent in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'encodeURI encodes a full URL and leaves characters that have structural meaning in a URI intact — such as : / ? # [ ] @ — so the URL remains valid. encodeURIComponent encodes everything except letters, digits, and the unreserved characters - _ . ! ~ * \' ( ), making it safe for encoding individual query parameter names and values where those structural characters would otherwise break parsing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why must a space be encoded as %20 and not just left as a space?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RFC 3986 defines the set of characters that are allowed in a URI without encoding. A space (ASCII 32) is not in that set. Leaving a raw space in a URL can cause parsers to truncate the URL at the space or misinterpret the request. The correct percent-encoded representation is %20. In application/x-www-form-urlencoded bodies (HTML form POST, per RFC 1866), a space may also be represented as +, but %20 is the RFC 3986-compliant form for URLs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What characters do NOT need to be percent-encoded in a URL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RFC 3986 defines the unreserved characters as the only characters that are safe to use in a URI without encoding: uppercase letters A-Z, lowercase letters a-z, digits 0-9, hyphen (-), underscore (_), period (.), and tilde (~). All other characters — including reserved characters when used as data — must be percent-encoded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is double-encoding and why is it a problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Double-encoding occurs when an already percent-encoded string is encoded a second time. For example, a space encoded as %20 would become %2520 if encoded again, because the % character itself is encoded as %25. This causes the server to receive the literal string %2520 instead of a space, resulting in broken query parameters or 400 Bad Request errors.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use rawurlencode vs urlencode in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use rawurlencode when you need RFC 3986 compliant encoding — it encodes spaces as %20 and is correct for building URL path segments and query values that will be transmitted in a URL. Use urlencode when building application/x-www-form-urlencoded data (HTML form submissions) — it encodes spaces as + instead of %20, which matches the form encoding convention. For building complete query strings, http_build_query handles encoding automatically.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://letters2numbersconverter.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://letters2numbersconverter.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How To Encode A URL',
      item: 'https://letters2numbersconverter.com/blog/how-to-encode-a-url',
    },
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
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true" className="select-none">/</li>
              <li className="text-foreground font-medium truncate">How To Encode A URL</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full px-3 py-1">
                Web Development
              </span>
              <span className="ml-3 text-xs text-muted-foreground">May 14, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How To Encode A URL
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To Encode A URL</strong> means converting characters that are not
              allowed in a URL into a safe percent-encoded format — replacing each disallowed byte with a{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> sign followed by two uppercase
              hexadecimal digits representing that byte&apos;s value, as defined in RFC 3986.
            </p>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* ── Section 1: What is URL encoding ── */}
            <section>
                        <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-8" aria-label="Table of contents">
            <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
            <ol className="space-y-1.5 text-sm list-decimal list-inside">
            <li><a href="#what-is-url-encoding-percent-encoding" className="text-primary hover:underline">What Is URL Encoding (Percent-Encoding)?</a></li>
            <li><a href="#why-url-encoding-is-necessary" className="text-primary hover:underline">Why URL Encoding Is Necessary</a></li>
            <li><a href="#characters-that-must-be-encoded" className="text-primary hover:underline">Characters That Must Be Encoded</a></li>
            <li><a href="#how-to-encode-a-url-in-javascript" className="text-primary hover:underline">How to Encode a URL in JavaScript</a></li>
            <li><a href="#how-to-encode-a-url-in-python" className="text-primary hover:underline">How to Encode a URL in Python</a></li>
            <li><a href="#how-to-encode-a-url-in-php" className="text-primary hover:underline">How to Encode a URL in PHP</a></li>
            <li><a href="#common-mistakes-to-avoid" className="text-primary hover:underline">Common Mistakes to Avoid</a></li>
            <li><a href="#frequently-asked-questions" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#related-tools-amp-guides" className="text-primary hover:underline">Related Tools &amp; Guides</a></li>
            </ol>
          </nav>

<h2 id="what-is-url-encoding-percent-encoding" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">What Is URL Encoding (Percent-Encoding)?</h2>
              <p className="text-base text-muted-foreground mb-4">
                URL encoding — formally called <strong className="text-foreground">percent-encoding</strong> — is defined
                in <strong className="text-foreground">RFC 3986</strong>, the specification that governs the syntax of
                Uniform Resource Identifiers. The rule is straightforward: any byte that is not permitted to appear
                literally in a URI must be expressed as a percent sign followed by exactly two uppercase hexadecimal
                digits. For example, a space (byte value 32, or 0x20 in hex) becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 divides characters into two categories that can appear unencoded in a URI:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Unreserved characters</strong> — always safe without encoding:{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">A–Z</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">a–z</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0–9</code>, hyphen{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code>, underscore{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code>, period{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.</code>, and tilde{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">~</code>.
                </li>
                <li>
                  <strong className="text-foreground">Reserved characters</strong> — have special structural meaning in
                  a URI and must be encoded when used as data:{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">: / ? # [ ] @ ! $ &amp; &apos; ( ) * + , ; =</code>
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Everything else — including spaces, non-ASCII characters such as accented letters or CJK ideographs, and
                control characters — must be percent-encoded. For multi-byte Unicode characters the convention is to
                encode each byte of the UTF-8 representation separately. The character{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">é</code> (U+00E9) is encoded in UTF-8
                as the two bytes 0xC3 0xA9, so it becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%C3%A9</code>.
              </p>
            </section>

            {/* ── Section 2: Why is it necessary ── */}
            <section>
              <h2 id="why-url-encoding-is-necessary" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">Why URL Encoding Is Necessary</h2>
              <p className="text-base text-muted-foreground mb-4">
                URLs are transmitted as ASCII text. Any character outside the printable ASCII range — or inside it but
                carrying structural meaning — can break the URL in one of three ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Structural collision.</strong> Characters like{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code>, and{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">?</code> delimit query-string
                  parameters. If a parameter value contains a raw <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,
                  the parser will split it into two parameters at that point.
                </li>
                <li>
                  <strong className="text-foreground">Fragment collision.</strong> A raw{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">#</code> inside a query value tells
                  the browser that everything after it is a fragment identifier — the rest of the query is silently
                  discarded before the request reaches the server.
                </li>
                <li>
                  <strong className="text-foreground">Non-ASCII characters.</strong> HTTP requires headers and request
                  lines to be ASCII. Non-ASCII bytes in a URL must be percent-encoded before transmission.
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Proper encoding ensures that the server receives exactly the data you intended to send, regardless of
                what characters that data contains.
              </p>
            </section>

            {/* ── Section 3: Characters table ── */}
            <section>
              <h2 id="characters-that-must-be-encoded" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">Characters That Must Be Encoded</h2>
              <p className="text-base text-muted-foreground mb-4">
                The table below covers the characters you will most commonly need to encode when constructing query
                strings and URL values. The &quot;When&quot; column clarifies the context in which encoding is required.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Character</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Encoded As</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">When</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Space', '%20 (or + in form data)', 'Always — a raw space is not a valid URI character. In application/x-www-form-urlencoded bodies (RFC 1866) a + is also accepted, but %20 is the RFC 3986 form.'],
                      ['&', '%26', 'When used inside a query parameter value, not as the key=value separator.'],
                      ['=', '%3D', 'When used inside a query parameter value, not as the key=value assignment operator.'],
                      ['+', '%2B', 'In query strings, a bare + is interpreted as a space by form-data parsers, so a literal + must be encoded.'],
                      ['#', '%23', '# marks the start of a fragment; a literal # inside a query value must be encoded or it will be treated as a fragment delimiter.'],
                      ['%', '%25', 'The percent sign is the escape character itself; a literal % that is not part of an encoding sequence must be encoded.'],
                      ['/', '%2F', 'When used as data inside a path segment or query value, not as the path-component separator.'],
                      ['?', '%3F', 'When used inside a query value, not as the query-string delimiter.'],
                    ].map(([char, encoded, when]) => (
                      <tr key={char} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-mono font-bold text-foreground text-sm align-top">{char}</td>
                        <td className="py-2 px-3 font-mono text-primary text-sm align-top whitespace-nowrap">{encoded}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs align-top">{when}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 4: JavaScript ── */}
            <section>
              <h2 id="how-to-encode-a-url-in-javascript" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">How to Encode a URL in JavaScript</h2>
              <p className="text-base text-muted-foreground mb-4">
                JavaScript provides two built-in functions for URL encoding, and choosing the wrong one is a common
                source of bugs.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">encodeURIComponent</h3>
              <p className="text-base text-muted-foreground mb-3">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent(str)</code> encodes
                everything except the unreserved characters defined in RFC 3986 plus{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">! ~ * &apos; ( )</code>. This makes it
                correct for encoding individual query parameter names and values, because it will encode{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">#</code>, and all other reserved
                characters.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">encodeURI</h3>
              <p className="text-base text-muted-foreground mb-3">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI(str)</code> is intended for
                encoding a complete URL. It deliberately does <em>not</em> encode characters that are part of URI
                syntax: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">: / ? # [ ] @ ! $ &amp; &apos; ( ) * + , ; =</code>.
                Use it when you have a full URL whose structure you want to preserve but whose non-ASCII or invalid
                characters you want to sanitize.
              </p>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">JavaScript</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`// Encoding a single query parameter value — use encodeURIComponent
const value = 'hello world & more'
const encoded = encodeURIComponent(value)
console.log(encoded)
// → 'hello%20world%20%26%20more'

// Building a query string correctly
const params = new URLSearchParams({ q: 'café & tea', lang: 'fr' })
console.log(params.toString())
// → 'q=caf%C3%A9+%26+tea&lang=fr'

// Encoding a full URL while keeping its structure intact — use encodeURI
const url = 'https://example.com/search?q=hello world'
console.log(encodeURI(url))
// → 'https://example.com/search?q=hello%20world'
// Note: encodeURI does NOT encode & = ? : / so use encodeURIComponent
// for individual parameter values before assembling the URL.`}</pre>
              </div>

              <p className="text-base text-muted-foreground mb-4">
                The practical rule: build your query values with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> (or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">URLSearchParams</code>, which handles
                encoding internally), then concatenate them into the full URL. Never use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code> on a raw value that
                might contain <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code>.
              </p>

              <p className="text-base text-muted-foreground mb-4">
                If you need to encode HTML entities as well as URL characters — for example when embedding a URL inside
                an HTML attribute — see our{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>
                .
              </p>
            </section>

            {/* ── Section 5: Python ── */}
            <section>
              <h2 id="how-to-encode-a-url-in-python" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">How to Encode a URL in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                Python&apos;s standard library provides URL encoding through the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse</code> module. The three
                functions you will use most often are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.quote(string, safe='/')</code>{' '}
                  — encodes all characters except letters, digits, and{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_ . - ~</code>, plus any characters
                  listed in the <code className="font-mono text-sm bg-secondary/60 px-1 rounded">safe</code> argument.
                  The default <code className="font-mono text-sm bg-secondary/60 px-1 rounded">safe='/'</code> keeps
                  forward slashes unencoded so path segments remain intact. Pass{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">safe=''</code> to encode slashes too.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.quote_plus(string)</code>{' '}
                  — like <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote</code> but encodes
                  spaces as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> instead of{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. Use this for
                  application/x-www-form-urlencoded data.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.urlencode(query)</code>{' '}
                  — accepts a dict or list of pairs and returns a complete encoded query string using{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote_plus</code> internally (spaces
                  become <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>).
                </li>
              </ul>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Python</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`from urllib.parse import quote, quote_plus, urlencode

# RFC 3986 percent-encoding — spaces become %20
print(quote('hello world & more', safe=''))
# → 'hello%20world%20%26%20more'

# Encode a path segment — keep / unencoded (the default)
print(quote('/search/café latte'))
# → '/search/caf%C3%A9%20latte'

# Form-data style — spaces become +
print(quote_plus('hello world & more'))
# → 'hello+world+%26+more'

# Build a complete query string
params = {'q': 'hello world', 'lang': 'fr', 'page': 1}
print(urlencode(params))
# → 'q=hello+world&lang=fr&page=1'

# To get %20 instead of + in a query string, use quote with safe=''
# and assemble the string manually:
qs = '&'.join(f"{quote(k, safe='')}={quote(str(v), safe='')}"
              for k, v in params.items())
print(qs)
# → 'q=hello%20world&lang=fr&page=1'`}</pre>
              </div>
            </section>

            {/* ── Section 6: PHP ── */}
            <section>
              <h2 id="how-to-encode-a-url-in-php" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">How to Encode a URL in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                PHP ships three functions that cover URL encoding needs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode($str)</code> — encodes for
                  application/x-www-form-urlencoded: spaces become{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>. Use for query string
                  values when working with HTML form submissions.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurlencode($str)</code> — encodes
                  per RFC 3986: spaces become{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. Correct for URL path
                  segments and for building RFC-compliant query strings.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query(array $data)</code>{' '}
                  — encodes an associative array as a complete query string, handling all encoding internally using the
                  same convention as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode</code>.
                </li>
              </ul>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">PHP</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`<?php

// Form-data style — spaces become +
echo urlencode('hello world & more');
// → hello+world+%26+more

// RFC 3986 style — spaces become %20
echo rawurlencode('hello world & more');
// → hello%20world%20%26%20more

// Build a complete query string automatically
$params = ['key' => 'value', 'name' => 'hello world', 'page' => 2];
echo http_build_query($params);
// → key=value&name=hello+world&page=2

// Assemble a full URL with RFC 3986 encoding on each value
$base = 'https://example.com/search';
$qs = implode('&', array_map(
    fn($k, $v) => rawurlencode($k) . '=' . rawurlencode($v),
    array_keys($params),
    array_values($params)
));
echo $base . '?' . $qs;
// → https://example.com/search?key=value&name=hello%20world&page=2`}</pre>
              </div>
            </section>

            {/* ── Section 7: Common mistakes ── */}
            <section>
              <h2 id="common-mistakes-to-avoid" className="text-2xl font-bold text-foreground mt-0 mb-4 scroll-mt-20">Common Mistakes to Avoid</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Double-encoding</h3>
              <p className="text-base text-muted-foreground mb-4">
                Double-encoding happens when you run a percent-encoded string through an encoding function a second
                time. The <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> character is itself
                encoded as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%25</code>, so{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code>. The server then decodes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code> to the literal string{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> rather than a space. Always
                check whether a value is already encoded before encoding it again.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Encoding the entire URL instead of just the values</h3>
              <p className="text-base text-muted-foreground mb-4">
                Passing a full URL such as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">https://example.com/search?q=hello</code>{' '}
                into <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> will
                encode the colons, slashes, and question mark, producing a mangled string like{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello</code>.
                The fix is to encode only the parameter values and then assemble the URL — or use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code> which preserves
                structural characters.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Forgetting to encode + in query string values</h3>
              <p className="text-base text-muted-foreground mb-4">
                In query strings decoded as application/x-www-form-urlencoded, a bare{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> is treated as a space. If you
                need to pass a literal plus sign as data, it must be encoded as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2B</code>. Both{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> in JavaScript
                and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote(safe='')</code> in Python
                handle this correctly.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 id="frequently-asked-questions" className="text-2xl font-bold text-foreground mt-0 mb-6 scroll-mt-20">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between encodeURI and encodeURIComponent in JavaScript?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code> is designed for a
                complete URL: it leaves all characters that have structural meaning in a URI unencoded (including{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">: / ? # [ ] @ &amp; = +</code>).{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> is designed
                for an individual component value: it encodes everything except the unreserved characters. Use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> when encoding
                query parameter names and values; use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code> when sanitizing a
                pre-built URL you want to keep structurally intact.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Why must a space be encoded as %20 and not just left as a space?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 does not include the space character in the set of characters that may appear unencoded in a
                URI. A raw space in a URL causes parsers to truncate or misinterpret the request. The correct
                percent-encoded form is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. In
                application/x-www-form-urlencoded bodies (HTML form POST, as described in RFC 1866) a space may also
                be represented as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>, but that
                convention applies only to form data, not to URL paths.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What characters do NOT need to be percent-encoded in a URL?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 defines the unreserved character set as the only characters that are safe in a URI without any
                encoding: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">A–Z</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">a–z</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0–9</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> (hyphen),{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code> (underscore),{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.</code> (period), and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">~</code> (tilde). Reserved characters
                may appear in their designated structural roles — for example{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code> as a path separator — but
                must be encoded when used as data.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is double-encoding and why is it a problem?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Double-encoding occurs when an already percent-encoded string is encoded a second time, turning{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> into{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code> because{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> encodes to{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%25</code>. The server decodes the
                outer encoding and receives the literal string{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> rather than a space. The
                solution is to track whether data is already encoded and never encode it twice.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                When should I use rawurlencode vs urlencode in PHP?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurlencode</code> for RFC
                3986-compliant encoding — it encodes spaces as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> and is correct for URL path
                segments and RFC-compliant query strings. Use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode</code> when building
                application/x-www-form-urlencoded data (HTML form POST), where spaces are conventionally represented
                as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>. For building a full query
                string automatically,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query</code> handles
                encoding for you.
              </p>
            </section>

            {/* ── Related links grid ── */}
            <section>
              <h2 id="related-tools-amp-guides" className="text-2xl font-bold text-foreground mt-0 mb-6 scroll-mt-20">Related Tools &amp; Guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">Letters to Numbers Converter</h3>
                  <p className="text-xs text-muted-foreground">Convert letters to their numeric equivalents with our free online tool.</p>
                </Link>
                <Link
                  href="/tools/html-encoder-decoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">HTML Encoder / Decoder</h3>
                  <p className="text-xs text-muted-foreground">Encode and decode HTML entities online — useful when embedding URLs inside HTML attributes.</p>
                </Link>
                <Link
                  href="/blog/what-is-url-encoding"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">What Is URL Encoding?</h3>
                  <p className="text-xs text-muted-foreground">A comprehensive overview of percent-encoding, its history, and why it exists.</p>
                </Link>
                <Link
                  href="/tools/online-url-decoder-encoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">Online URL Decoder / Encoder</h3>
                  <p className="text-xs text-muted-foreground">Instantly encode or decode any URL string in your browser — no install required.</p>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
