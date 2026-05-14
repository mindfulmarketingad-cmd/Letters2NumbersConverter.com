import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'How To URL Encode — Percent Encoding Explained with Examples',
  description:
    'How To URL Encode a string: a complete guide to percent-encoding (RFC 3986), reserved vs unreserved characters, encoding in JavaScript, Python, and PHP, plus the most common mistakes to avoid.',
  keywords: [
    'how to url encode',
    'url encoding',
    'percent encoding',
    'encodeURIComponent',
    'urllib.parse.quote',
    'rawurlencode php',
    'rfc 3986',
    'query string encoding',
    'url percent encoding',
    'encode url javascript',
    'encode url python',
    'encode url php',
  ],
  openGraph: {
    title: 'How To URL Encode — Percent Encoding Explained with Examples',
    description:
      'Learn how to URL encode a string using percent-encoding as defined in RFC 3986. Covers reserved characters, JavaScript, Python, PHP examples, and common mistakes.',
    type: 'article',
    publishedTime: '2026-05-14T00:00:00.000Z',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To URL Encode — Percent Encoding Explained with Examples',
  datePublished: '2026-05-14T00:00:00.000Z',
  dateModified: '2026-05-14T00:00:00.000Z',
  image: 'https://letters2numbersconverter.com/images/blog/ascii-encoding.jpg',
  author: { '@type': 'Person', name: 'John Reed' },
  publisher: {
    '@type': 'Organization',
    name: 'Letters to Numbers Converter',
    url: 'https://letters2numbersconverter.com',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://letters2numbersconverter.com/blog/how-to-url-encode',
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
        text: 'encodeURIComponent encodes everything except the unreserved characters (A-Z a-z 0-9 - _ . ~ ) plus ! * \' ( ), making it correct for encoding individual query parameter names and values. encodeURI is designed for a complete URL and deliberately leaves structural characters such as : / ? # [ ] @ & = + unencoded so the URL remains valid. Use encodeURIComponent on values, not full URLs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why must a space be encoded as %20 and not left as a raw space?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RFC 3986 defines the set of characters that are allowed in a URI without encoding. A space (ASCII 0x20) is not in that set. A raw space in a URL can cause parsers to truncate the URL or produce a 400 Bad Request error. The correct percent-encoded form is %20. In application/x-www-form-urlencoded form data, a space may also be represented as +, but %20 is the RFC 3986-compliant form for URLs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What characters do NOT need to be percent-encoded in a URL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RFC 3986 defines the unreserved character set as: uppercase letters A-Z, lowercase letters a-z, digits 0-9, hyphen (-), underscore (_), period (.), and tilde (~). These characters may appear in a URI without any encoding. All other characters — including reserved characters when used as data — must be percent-encoded.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is double-encoding and why is it a problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Double-encoding occurs when an already percent-encoded string is encoded a second time. Because the percent sign itself encodes as %25, a space that was correctly encoded as %20 becomes %2520 after a second pass. The server then decodes %2520 to the literal string %20 rather than a space, producing broken query parameters or unexpected results.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use rawurlencode vs urlencode in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use rawurlencode when you need RFC 3986-compliant encoding — it encodes spaces as %20 and is correct for URL path segments and RFC-compliant query strings. Use urlencode when building application/x-www-form-urlencoded data (HTML form submissions), where spaces are conventionally encoded as +. For building a complete query string from an array, http_build_query handles encoding automatically.',
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
      name: 'How To URL Encode',
      item: 'https://letters2numbersconverter.com/blog/how-to-url-encode',
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
              <li className="text-foreground font-medium truncate">How To URL Encode</li>
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
              How To URL Encode
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To URL Encode</strong> a string means replacing characters that are
              not safe in a URL with a percent sign followed by two hexadecimal digits representing that character&apos;s
              byte value — a mechanism formally called <em>percent-encoding</em> and defined in{' '}
              <strong className="text-foreground">RFC 3986</strong>. Whether you are building query strings in JavaScript,
              constructing API requests in Python, or assembling form submissions in PHP, understanding the rules of
              percent-encoding keeps your URLs valid and your data intact.
            </p>
          </header>

          {/* Hero image */}
          <Image
            src="/images/blog/ascii-encoding.jpg"
            alt="how to url encode — percent encoding diagram showing special characters converted to %XX sequences"
            width={800}
            height={450}
            className="w-full rounded-xl mb-10 object-cover"
          />

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* ── Section 1: What URL encoding is ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">What Is URL Encoding (Percent-Encoding)?</h2>
              <p className="text-base text-muted-foreground mb-4">
                Percent-encoding is defined in <strong className="text-foreground">RFC 3986</strong>, the specification
                that governs the syntax of Uniform Resource Identifiers. The rule is precise: any byte that is not
                permitted to appear literally in a URI must be represented as a percent sign{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> followed by exactly two
                uppercase hexadecimal digits giving that byte&apos;s value. For example, a space has the byte value 32
                decimal, which is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0x20</code> in
                hexadecimal, so it becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 divides characters into two groups that may appear unencoded:
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
                  <strong className="text-foreground">Reserved characters</strong> — carry structural meaning in a URI
                  and must be encoded when used as data:{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">; : @ &amp; = + $ , / ? # [ ] !</code>
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Everything else — spaces, non-ASCII characters, and control characters — must be percent-encoded.
                For multi-byte Unicode characters, RFC 3986 requires encoding each byte of the UTF-8 representation
                separately. The pound sign <code className="font-mono text-sm bg-secondary/60 px-1 rounded">£</code>{' '}
                (U+00A3) is encoded in UTF-8 as two bytes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0xC2 0xA3</code>, so it becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%C2%A3</code>.
              </p>
            </section>

            {/* ── Section 2: Character table ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">Characters That Must Be Encoded</h2>
              <p className="text-base text-muted-foreground mb-4">
                The table below lists the characters you will encounter most often when constructing query strings and
                URL values, along with their percent-encoded equivalents and context notes.
              </p>

              <div className="overflow-x-auto rounded-lg border border-border my-4">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Character</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Encoded As</th>
                      <th className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Space', '%20', 'RFC 3986 form. In application/x-www-form-urlencoded (HTML form POST), a space may also be encoded as +, but %20 is correct for URL paths and RFC-compliant query strings.'],
                      ['&', '%26', 'Must be encoded inside a query parameter value; left unencoded it acts as the key=value pair separator.'],
                      ['=', '%3D', 'Must be encoded inside a query parameter value; left unencoded it acts as the key=value assignment operator.'],
                      ['+', '%2B', 'In query strings decoded as form data, a bare + is interpreted as a space. A literal plus sign must be encoded as %2B.'],
                      ['#', '%23', '# marks the start of a fragment identifier. A literal # inside a query value must be encoded or everything after it is discarded by the browser before reaching the server.'],
                      ['%', '%25', 'The percent sign is the escape character itself. A literal % that is not part of a valid percent-encoded sequence must be encoded as %25.'],
                      ['/', '%2F', 'Must be encoded when used as data inside a path segment or query value; left unencoded it is the path component separator.'],
                      ['?', '%3F', 'Must be encoded when used inside a query value; left unencoded it marks the start of the query string.'],
                      ['@', '%40', 'Has structural meaning in the authority component (user@host). Must be encoded when used as data in a query value or path segment.'],
                      [':', '%3A', 'Separates the scheme from the host (https:) and the host from the port. Must be encoded when used as literal data.'],
                    ].map(([char, encoded, notes]) => (
                      <tr key={char} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-mono font-bold text-foreground text-sm align-top">{char}</td>
                        <td className="py-2 px-3 font-mono text-primary text-sm align-top whitespace-nowrap">{encoded}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs align-top">{notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Section 3: How URL encoding works step by step ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">How URL Encoding Works Step by Step</h2>
              <p className="text-base text-muted-foreground mb-4">
                The algorithm defined in RFC 3986 is straightforward. For each character in the string:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Check if it is an unreserved character</strong> (A–Z, a–z, 0–9,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">~</code>). If so, leave it as-is.
                </li>
                <li>
                  <strong className="text-foreground">Otherwise, convert the character to its UTF-8 byte sequence.</strong>{' '}
                  For ASCII characters this is a single byte. For characters outside the ASCII range it may be two, three,
                  or four bytes.
                </li>
                <li>
                  <strong className="text-foreground">Percent-encode each byte.</strong> Write a{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> followed by the two uppercase
                  hexadecimal digits of that byte&apos;s value.
                </li>
              </ol>
              <p className="text-base text-muted-foreground mb-4">
                Two concrete examples illustrate this process well. First, a space character: its ASCII (and UTF-8)
                byte value is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0x20</code>, so it
                encodes to <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> — just one
                byte, one percent-encoded triplet.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Second, the pound sign <code className="font-mono text-sm bg-secondary/60 px-1 rounded">£</code>{' '}
                (U+00A3): it lies outside ASCII, so we need its UTF-8 encoding. U+00A3 is encoded in UTF-8 as two
                bytes: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0xC2</code> and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0xA3</code>. Each byte is
                percent-encoded in turn, producing{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%C2%A3</code>. A string like{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">price: £10 &amp; tax</code> therefore
                becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">price%3A%20%C2%A310%20%26%20tax</code>.
              </p>
            </section>

            {/* ── Section 4: JavaScript ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">How To URL Encode in JavaScript</h2>
              <p className="text-base text-muted-foreground mb-4">
                JavaScript provides two built-in functions for URL encoding, and picking the wrong one is the most
                common source of encoding bugs in front-end and Node.js code.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">encodeURIComponent</h3>
              <p className="text-base text-muted-foreground mb-3">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent(str)</code> encodes
                everything except the unreserved characters{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">A–Z a–z 0–9 - _ . ! ~ * &apos; ( )</code>.
                This means it <em>will</em> encode{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">#</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">:</code>, and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code> — exactly what you need when
                encoding individual query parameter names and values before assembling them into a URL.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">encodeURI</h3>
              <p className="text-base text-muted-foreground mb-3">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI(str)</code> is intended for
                a complete URL. It deliberately does <em>not</em> encode characters that have structural meaning:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">: / ? # [ ] @ ! $ &amp; &apos; ( ) * + , ; =</code>.
                Use it when you already have a well-formed URL and simply want to sanitize any non-ASCII characters
                without disturbing the URL&apos;s structure.
              </p>
              <p className="text-base text-muted-foreground mb-3">
                The inverse functions are{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">decodeURIComponent(str)</code> and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">decodeURI(str)</code>. The legacy{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">escape()</code> function is{' '}
                <strong className="text-foreground">deprecated</strong> — it does not handle non-ASCII characters
                correctly and must not be used.
              </p>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">JavaScript</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`// Encode an individual query parameter value — use encodeURIComponent
const value = 'price: £10 & tax'
console.log(encodeURIComponent(value))
// → 'price%3A%20%C2%A310%20%26%20tax'

// Build a safe query string using URLSearchParams (handles encoding internally)
const params = new URLSearchParams({ q: 'café & tea', lang: 'fr' })
console.log(params.toString())
// → 'q=caf%C3%A9+%26+tea&lang=fr'

// Encode a full URL while keeping its structure — use encodeURI
const url = 'https://example.com/search?q=hello world'
console.log(encodeURI(url))
// → 'https://example.com/search?q=hello%20world'

// Decode a percent-encoded string
console.log(decodeURIComponent('price%3A%20%C2%A310%20%26%20tax'))
// → 'price: £10 & tax'

// DO NOT use the deprecated escape() function
// escape('café') → 'caf%E9'  ← wrong: not UTF-8, not RFC 3986`}</pre>
              </div>

              <p className="text-base text-muted-foreground mb-4">
                The practical rule: encode each query parameter name and value individually with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> (or let{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">URLSearchParams</code> do it for you),
                then join them with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> and
                append to the base URL. Never pass a complete URL into{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code>.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                For a deeper look at the broader topic, see our guide on{' '}
                <Link href="/blog/what-is-url-encoding" className="text-primary hover:underline">
                  what is URL encoding
                </Link>
                .
              </p>
            </section>

            {/* ── Section 5: Python ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">How To URL Encode in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                Python&apos;s <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse</code> module
                provides three functions that cover the full range of URL encoding needs:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.quote(str, safe='/')</code>{' '}
                  — RFC 3986-compliant; spaces become{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. The{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">safe</code> argument lists characters
                  that should <em>not</em> be encoded (forward slash by default). Pass{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">safe=''</code> to encode slashes too.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.quote_plus(str)</code>{' '}
                  — like <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote</code> but encodes spaces
                  as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> instead of{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. Use for individual query
                  string values in application/x-www-form-urlencoded data.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse.urlencode(dict)</code>{' '}
                  — encodes an entire dictionary into a complete query string, using{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote_plus</code> internally (spaces
                  become <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>).
                </li>
              </ul>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">Python</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`from urllib.parse import quote, quote_plus, urlencode

# RFC 3986 — spaces become %20
print(quote('price: £10 & tax', safe=''))
# → 'price%3A%20%C2%A310%20%26%20tax'

# Encode a URL path segment — keep / unencoded (the default safe value)
print(quote('/search/café latte'))
# → '/search/caf%C3%A9%20latte'

# Form-data style — spaces become +
print(quote_plus('hello world & more'))
# → 'hello+world+%26+more'

# Build a complete query string from a dict
params = {'q': 'hello world', 'lang': 'fr', 'page': 1}
print(urlencode(params))
# → 'q=hello+world&lang=fr&page=1'

# RFC 3986 query string with %20 instead of +
qs = '&'.join(
    f"{quote(k, safe='')}={quote(str(v), safe='')}"
    for k, v in params.items()
)
print(qs)
# → 'q=hello%20world&lang=fr&page=1'`}</pre>
              </div>
            </section>

            {/* ── Section 6: PHP ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">How To URL Encode in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                PHP provides three URL encoding functions, each suited to a different use case:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurlencode($str)</code> — RFC 3986
                  compliant; spaces become{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>. Use for URL path segments
                  and RFC-compliant query string values.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode($str)</code> — encodes for
                  application/x-www-form-urlencoded; spaces become{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>. Use for query string values
                  in HTML form submissions.
                </li>
                <li>
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query($array)</code> —
                  builds a complete query string from an associative array, handling all encoding internally (spaces
                  become <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>).
                </li>
              </ul>

              <div className="rounded-lg border border-border bg-secondary/20 p-4 my-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">PHP</p>
                <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`<?php

// RFC 3986 style — spaces become %20
echo rawurlencode('price: £10 & tax');
// → price%3A%20%C2%A310%20%26%20tax

// Form-data style — spaces become +
echo urlencode('price: £10 & tax');
// → price%3A+%C2%A310+%26+tax

// Build a complete query string from an array
$params = ['q' => 'hello world', 'lang' => 'fr', 'page' => 2];
echo http_build_query($params);
// → q=hello+world&lang=fr&page=2

// Assemble a URL with RFC 3986 encoding on each value
$base = 'https://example.com/search';
$qs = implode('&', array_map(
    fn($k, $v) => rawurlencode((string)$k) . '=' . rawurlencode((string)$v),
    array_keys($params),
    array_values($params)
));
echo $base . '?' . $qs;
// → https://example.com/search?q=hello%20world&lang=fr&page=2`}</pre>
              </div>

              <p className="text-base text-muted-foreground mb-4">
                You can find more encoding examples in our guide on{' '}
                <Link href="/blog/how-to-encode-php-code" className="text-primary hover:underline">
                  how to encode PHP code
                </Link>
                . For a broader look at how to encode HTML alongside URL values, see{' '}
                <Link href="/blog/how-to-encode-html-code" className="text-primary hover:underline">
                  how to encode HTML code
                </Link>
                .
              </p>
            </section>

            {/* ── Section 7: Common mistakes ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">Common URL Encoding Mistakes to Avoid</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Encoding the entire URL instead of just the values</h3>
              <p className="text-base text-muted-foreground mb-4">
                Passing a complete URL such as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">https://example.com/search?q=hello</code>{' '}
                into <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> encodes
                the colons, slashes, and question mark, producing a mangled string like{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dhello</code>.
                The fix is to encode only the individual parameter values, then assemble the URL — or to use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code>, which preserves
                structural characters.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Double-encoding</h3>
              <p className="text-base text-muted-foreground mb-4">
                Double-encoding occurs when you run an already percent-encoded string through an encoding function a
                second time. Because <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> itself
                encodes to <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%25</code>, the correctly
                encoded space <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code> on a second pass. The
                server then decodes <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code> back
                to the string <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> rather than a
                space. Always track whether your data is already encoded before encoding it again.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Using the deprecated escape() in JavaScript</h3>
              <p className="text-base text-muted-foreground mb-4">
                The <code className="font-mono text-sm bg-secondary/60 px-1 rounded">escape()</code> function is
                deprecated and must not be used. It does not encode non-ASCII characters as UTF-8 bytes — instead it
                uses a non-standard{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%uXXXX</code> format for code points
                above 127, which is not recognised by modern servers or the RFC 3986 specification.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">4. Confusing + with %20 in URL paths vs query strings</h3>
              <p className="text-base text-muted-foreground mb-4">
                A <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> sign in a URL path is a
                literal plus sign. In a query string decoded as application/x-www-form-urlencoded (the convention for
                HTML form submissions), a <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> is
                interpreted as a space. This means a literal plus sign in a query string value must be encoded as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2B</code>, and you should use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> (not{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>) for spaces in URL paths to
                avoid ambiguity.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-6">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between encodeURI and encodeURIComponent in JavaScript?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code> encodes
                everything except unreserved characters, making it correct for individual query parameter names and
                values.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURI</code> is designed for a
                complete URL and leaves structural characters such as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">: / ? # [ ] @ &amp; = +</code>{' '}
                unencoded. Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeURIComponent</code>{' '}
                on values, not full URLs.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Why must a space be encoded as %20 and not left as a raw space?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 does not include the space character in the set of characters that may appear unencoded in a
                URI. A raw space in a URL causes parsers to truncate the URL or return a 400 Bad Request error.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> is the correct
                percent-encoded form. In application/x-www-form-urlencoded bodies, a space may be encoded as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>, but that convention applies
                only to form data, not to URL paths.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What characters do NOT need to be percent-encoded in a URL?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                RFC 3986 defines the unreserved character set as:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">A–Z</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">a–z</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">0–9</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> (hyphen),{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code> (underscore),{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.</code> (period), and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">~</code> (tilde). These may appear in
                a URI without encoding. All other characters — including reserved characters when used as data — must
                be percent-encoded.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is double-encoding and why is it a problem?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Double-encoding happens when a percent-encoded string is encoded a second time. Because{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%</code> encodes to{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%25</code>, the correctly encoded
                space <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%2520</code>. The server decodes
                only one layer and receives the literal string{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> instead of a space.
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
                application/x-www-form-urlencoded data (HTML form submissions), where spaces are conventionally encoded
                as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>. For a complete query
                string from an array,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query</code> handles
                encoding automatically.
              </p>
            </section>

            {/* ── Related links grid ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-6">Related Tools &amp; Guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/tools/base64-encoder-decoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">Base64 Encoder / Decoder</h3>
                  <p className="text-xs text-muted-foreground">Encode or decode Base64 strings online — a complementary encoding scheme commonly used in data transfer and APIs.</p>
                </Link>
                <Link
                  href="/blog/what-is-url-encoding"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">What Is URL Encoding?</h3>
                  <p className="text-xs text-muted-foreground">A comprehensive overview of percent-encoding, its history, and why browsers and servers rely on it.</p>
                </Link>
                <Link
                  href="/blog/how-to-encode-a-url"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">How To Encode A URL</h3>
                  <p className="text-xs text-muted-foreground">Step-by-step guide to encoding full URLs — covering reserved characters, query strings, and best practices.</p>
                </Link>
                <Link
                  href="/blog/how-to-encode-html-code"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">How To Encode HTML Code</h3>
                  <p className="text-xs text-muted-foreground">Learn how to encode HTML entities so special characters render correctly in browsers and RSS feeds.</p>
                </Link>
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
