import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-encode-python-code`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Encode Python Code — Base64, URL, HTML, JSON & Unicode',
  description:
    'How To Encode Python Code: a practical guide to every major encoding module in the Python 3 standard library — base64, urllib.parse, html, json, and str.encode() — with real code examples.',
  keywords: [
    'how to encode python code',
    'python encode string',
    'python base64 encode',
    'python url encode',
    'python html escape',
    'python json dumps',
    'python utf-8 encode',
    'python urllib parse quote',
    'python hashlib sha256',
    'python encoding guide',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How To Encode Python Code — Base64, URL, HTML, JSON & Unicode',
    description:
      'How To Encode Python Code covers base64.b64encode(), urllib.parse.quote(), html.escape(), json.dumps(), str.encode(), and hashlib with real Python 3 examples.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Encode Python Code' }],
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Encode Python Code — Base64, URL, HTML, JSON & Unicode',
    description:
      'Python 3 encoding modules explained: Base64, URL, HTML, JSON, Unicode, and hashing — with real examples from the standard library.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Encode Python Code — Base64, URL, HTML, JSON & Unicode',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  image: `${BASE_URL}/images/blog/ascii-encoding.jpg`,
  author: { '@type': 'Person', name: 'John Reed' },
  publisher: { '@type': 'Organization', name: 'Letters to Numbers Converter', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between encoding and decoding in Python?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Python 3, encoding converts a str (Unicode text) into bytes using a specific encoding scheme such as UTF-8. Decoding is the reverse: it converts bytes back into a str. For example, "Hello".encode("utf-8") produces b\'Hello\', and b\'Hello\'.decode("utf-8") returns "Hello". This clean str/bytes separation is a core design feature of Python 3.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I Base64-encode a string in Python?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Import the base64 module and pass bytes to base64.b64encode(). Strings must first be converted to bytes: base64.b64encode("Hello".encode("utf-8")) returns b\'SGVsbG8=\'. To get a plain string result, call .decode("utf-8") on the output. For URLs, use base64.urlsafe_b64encode() instead, which replaces + with - and / with _.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between urllib.parse.quote() and quote_plus() in Python?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both functions percent-encode special characters, but they handle spaces differently. quote() follows RFC 3986 and encodes spaces as %20, making it correct for URL path segments. quote_plus() encodes spaces as + and is designed for HTML form data submitted as query strings. Use quote_plus() for query parameter values and quote() for path segments.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I prevent XSS when outputting user data in Python HTML templates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use html.escape(user_input) from Python\'s standard library. It converts the five HTML-special characters (&, <, >, ", \') into their entity equivalents, neutralising XSS injection vectors. Pass quote=True (the default) to also escape double and single quotes. Most Python web frameworks (Django, Jinja2) auto-escape template variables, but html.escape() is the right tool when building HTML strings manually.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hashing the same as encoding in Python?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Encoding (Base64, URL, JSON, UTF-8) is a reversible transformation — you can always decode back to the original value. Hashing with hashlib (e.g. hashlib.sha256(b"hello").hexdigest()) is a one-way operation: the original input cannot be recovered from the hash output. Never use base64.b64encode() to "protect" passwords or sensitive data.',
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
    { '@type': 'ListItem', position: 3, name: 'How To Encode Python Code', item: PAGE_URL },
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

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-1">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="select-none">/</li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li className="select-none">/</li>
              <li className="text-foreground font-medium">How To Encode Python Code</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-secondary/60 text-muted-foreground px-3 py-1 rounded-full">
                Python Encoding Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
              How To Encode Python Code
            </h1>
            <p className="text-base text-muted-foreground">
              By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
              {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* Lead paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To Encode Python Code</strong> is straightforward thanks to
              Python&apos;s standard library, which ships with built-in modules for every major encoding format — from
              Base64 binary data to URL percent-encoding, HTML entity escaping, JSON serialisation, and raw UTF-8
              byte conversion. You rarely need a third-party package. Python 3 also draws a clean line between{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">str</code> (Unicode text) and{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code> (raw bytes): encoding
              converts <code className="font-mono text-sm bg-secondary/60 px-1 rounded">str → bytes</code> and
              decoding converts{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes → str</code>. The sections
              below cover each encoding category with real function signatures, concrete examples, and notes on when
              to reach for one function over another.
            </p>

            {/* Hero Image */}
            <Image
              src="/images/blog/ascii-encoding.jpg"
              alt="how to encode python code — Python encoding functions for Base64 URL HTML and Unicode"
              width={800}
              height={450}
              className="w-full rounded-xl mb-10 object-cover"
            />

            {/* ── Base64 Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Base64 Encoding in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                Base64 encodes arbitrary binary data as a string of printable ASCII characters, making it safe to
                transmit through text-only channels such as JSON payloads, email, or data URIs. The{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64</code> module is part of
                Python&apos;s standard library and requires no installation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">base64.b64encode() and b64decode()</h3>
              <p className="text-base text-muted-foreground mb-4">
                The input to{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64.b64encode()</code> must be{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code>, not a string. To encode
                a plain string, first convert it with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.encode(&apos;utf-8&apos;)</code>.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import base64

# Encode bytes directly
base64.b64encode(b'Hello World')
# b'SGVsbG8gV29ybGQ='

# Encode a string — convert to bytes first
base64.b64encode('Hello'.encode('utf-8'))
# b'SGVsbG8='

# Decode back to bytes
base64.b64decode(b'SGVsbG8gV29ybGQ=')
# b'Hello World'

# Decode to a string
base64.b64decode(b'SGVsbG8gV29ybGQ=').decode('utf-8')
# 'Hello World'`}</pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">URL-safe Base64 variant</h3>
              <p className="text-base text-muted-foreground mb-4">
                Standard Base64 uses{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code>, which are reserved
                characters in URLs. The URL-safe variant replaces them with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code>, making the output safe for
                use in query strings and URL path segments — such as the header and payload segments of a JWT.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import base64

# URL-safe encoding — uses - and _ instead of + and /
base64.urlsafe_b64encode(b'Hello World')
# b'SGVsbG8gV29ybGQ='  (same here, but important when output contains + or /)

# URL-safe decoding
base64.urlsafe_b64decode(b'SGVsbG8gV29ybGQ=')`}</pre>

              <p className="text-base text-muted-foreground mb-2">
                Try encoding and decoding Base64 strings interactively with the{' '}
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">
                  Base64 Encoder / Decoder tool
                </Link>.
              </p>
            </section>

            {/* ── URL Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">URL Encoding in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                URL encoding (percent-encoding) converts characters that are not allowed in URLs into a safe{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%XX</code> hex representation.
                Python&apos;s <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urllib.parse</code>{' '}
                module provides three functions that cover every common use case.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">quote() and quote_plus()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`from urllib.parse import quote, quote_plus, urlencode

# quote() — follows RFC 3986, encodes spaces as %20
quote('hello world')
# 'hello%20world'

# quote_plus() — encodes spaces as + (for query strings)
quote_plus('hello world')
# 'hello+world'

# safe parameter — characters NOT to encode
quote('/path/to/file', safe='/')
# '/path/to/file'  (slashes preserved)

quote('hello world & goodbye', safe='')
# 'hello%20world%20%26%20goodbye'`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote()</code> for URL path
                segments — a <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> in a path
                means a literal plus sign, not a space. Use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote_plus()</code> for query
                parameter values, where a server receiving{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> in a query string will
                correctly decode it as a space.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">urlencode() — build a full query string from a dict</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`from urllib.parse import urlencode

params = {'name': 'John Doe', 'city': 'New York'}
urlencode(params)
# 'name=John+Doe&city=New+York'

# Append to a URL
base_url = 'https://api.example.com/search'
full_url = base_url + '?' + urlencode(params)
# 'https://api.example.com/search?name=John+Doe&city=New+York'`}</pre>

              <p className="text-base text-muted-foreground mb-2">
                For a deeper look at percent-encoding rules and reserved characters, read the{' '}
                <Link href="/blog/how-to-encode-a-url" className="text-primary hover:underline">
                  URL encoding guide
                </Link>.
              </p>
            </section>

            {/* ── HTML Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">HTML Encoding in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                Outputting untrusted user data directly into HTML creates cross-site scripting (XSS) vulnerabilities.
                Python&apos;s <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html</code> module
                provides two functions for converting characters with special meaning in HTML into their safe entity
                equivalents — and back again.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">html.escape() and html.unescape()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import html

# Escape dangerous characters for safe HTML output
html.escape('<script>alert("xss")</script>')
# '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'

# quote=True (default) — also encodes " and '
html.escape('<p class="note">It\'s here</p>', quote=True)
# '&lt;p class=&quot;note&quot;&gt;It&#x27;s here&lt;/p&gt;'

# Unescape entities back to characters
html.unescape('&lt;p&gt;')
# '<p>'

html.unescape('&amp;copy; 2026')
# '© 2026'`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                Most Python web frameworks — Django, Jinja2, Flask with Jinja2 — auto-escape template variables by
                default. But when you build HTML strings manually, always call{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html.escape()</code> on any
                user-supplied value before inserting it into HTML.
              </p>
              <p className="text-base text-muted-foreground mb-2">
                For more on HTML entity encoding and XSS prevention, see the{' '}
                <Link href="/blog/how-to-encode-html-code" className="text-primary hover:underline">
                  HTML encoding guide
                </Link>{' '}
                and the{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>.
              </p>
            </section>

            {/* ── JSON Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">JSON Encoding in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                JSON is the standard format for REST APIs and configuration files. Python&apos;s{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json</code> module serialises
                Python objects to JSON strings and deserialises JSON strings back to Python objects, with no
                external dependencies required.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">json.dumps() and json.loads()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import json

data = {'name': 'Alice', 'age': 30}

# Serialise to a JSON string
json.dumps(data)
# '{"name": "Alice", "age": 30}'

# Keep non-ASCII Unicode characters readable
json.dumps({'city': 'Héloïse'}, ensure_ascii=False)
# '{"city": "Héloïse"}'

# Pretty-print for debugging or log files
json.dumps(data, indent=2)
# '{\\n  "name": "Alice",\\n  "age": 30\\n}'

# Deserialise a JSON string back to a Python dict
json_string = '{"name": "Alice", "age": 30}'
json.loads(json_string)
# {'name': 'Alice', 'age': 30}`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                By default, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json.dumps()</code>{' '}
                converts non-ASCII characters to{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">\uXXXX</code> escape sequences.
                Pass <code className="font-mono text-sm bg-secondary/60 px-1 rounded">ensure_ascii=False</code> to
                keep them as-is, which produces smaller and more readable output when your data contains accented
                letters, CJK characters, or emoji.
              </p>
            </section>

            {/* ── String / Text Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">String and Text Encoding (str → bytes)</h2>
              <p className="text-base text-muted-foreground mb-4">
                Python 3&apos;s{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">str</code> type holds Unicode
                text. When you need raw bytes — to write to a file, send over a network socket, or pass to a
                function that expects <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code>{' '}
                — you must encode the string explicitly.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">str.encode() and bytes.decode()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`# Encode a plain ASCII string
'Hello'.encode('utf-8')
# b'Hello'

# Encode a string with a non-ASCII character
'Héllo'.encode('utf-8')
# b'H\\xc3\\xa9llo'

# Decode bytes back to str
b'H\\xc3\\xa9llo'.decode('utf-8')
# 'Héllo'

# Other common encodings
'Hello'.encode('utf-16')   # b'\\xff\\xfeH\\x00e\\x00l\\x00l\\x00o\\x00'
'Hello'.encode('latin-1')  # b'Hello'
'Hello'.encode('ascii')    # b'Hello'`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                UTF-8 is the right default for almost everything: it is backward-compatible with ASCII, handles
                every Unicode code point, and is the standard encoding for HTML, JSON, and most network protocols.
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">latin-1</code> only when
                interoperating with legacy systems, and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">ascii</code> only when you are
                certain the input contains no characters outside the ASCII range (0–127) — otherwise it will raise
                a <code className="font-mono text-sm bg-secondary/60 px-1 rounded">UnicodeEncodeError</code>.
              </p>
            </section>

            {/* ── Hashing ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Hashing in Python — One-Way Only</h2>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 my-6">
                <p className="text-sm font-semibold text-yellow-400 mb-1">Hashing is not encoding</p>
                <p className="text-sm text-muted-foreground">
                  Encoding (Base64, URL, JSON, UTF-8) is a <strong className="text-foreground">reversible</strong>{' '}
                  transformation. Hashing with{' '}
                  <code className="font-mono text-xs bg-secondary/60 px-1 rounded">hashlib</code> is{' '}
                  <strong className="text-foreground">one-way</strong>: you cannot recover the original input from
                  a hash output. Never use{' '}
                  <code className="font-mono text-xs bg-secondary/60 px-1 rounded">base64.b64encode()</code> to
                  &quot;protect&quot; passwords.
                </p>
              </div>

              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import hashlib

# SHA-256 hex digest — input must be bytes
hashlib.sha256(b'hello').hexdigest()
# '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'

# Hash a string
hashlib.sha256('hello'.encode('utf-8')).hexdigest()
# '2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'

# List available algorithms
hashlib.algorithms_guaranteed
# {'sha256', 'sha512', 'sha3_256', 'blake2b', ...}`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hashlib</code> for integrity
                verification and message authentication. For password storage, use a dedicated slow-hashing library
                such as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bcrypt</code> or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">argon2-cffi</code> — fast hashes
                like SHA-256 are not appropriate for passwords because they are trivially brute-forced by modern
                hardware.
              </p>
            </section>

            {/* ── Decision Table ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Choosing the Right Python Encoding Function</h2>
              <p className="text-base text-muted-foreground mb-4">
                The right choice depends entirely on the destination of the encoded output. Use this table as a
                quick reference.
              </p>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Use case', 'Python function'].map(h => (
                        <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Binary data in a text field or JSON', 'base64.b64encode()'],
                      ['Binary data in a URL', 'base64.urlsafe_b64encode()'],
                      ['Single query parameter value', 'urllib.parse.quote_plus()'],
                      ['URL path segment (RFC 3986)', 'urllib.parse.quote()'],
                      ['Full query string from a dict', 'urllib.parse.urlencode()'],
                      ['HTML output — prevent XSS', 'html.escape()'],
                      ['JSON API — serialise', 'json.dumps()'],
                      ['JSON API — deserialise', 'json.loads()'],
                      ['Text to bytes (str → bytes)', "str.encode('utf-8')"],
                      ['Integrity hash (not reversible)', 'hashlib.sha256(b).hexdigest()'],
                    ].map(([useCase, fn]) => (
                      <tr key={useCase} className="hover:bg-secondary/20">
                        <td className="py-2 px-4 text-foreground text-sm align-top">{useCase}</td>
                        <td className="py-2 px-4 font-mono text-muted-foreground text-xs align-top">{fn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between encoding and decoding in Python?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                In Python 3, encoding converts a{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">str</code> (Unicode text) into{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code> using a specific
                encoding scheme such as UTF-8. Decoding is the reverse — it converts{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">bytes</code> back into a{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">str</code>. For example,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&apos;Hello&apos;.encode(&apos;utf-8&apos;)</code>{' '}
                produces <code className="font-mono text-sm bg-secondary/60 px-1 rounded">b&apos;Hello&apos;</code>, and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">b&apos;Hello&apos;.decode(&apos;utf-8&apos;)</code>{' '}
                returns <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&apos;Hello&apos;</code>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                How do I Base64-encode a string in Python?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Import <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64</code> and pass
                bytes to <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64.b64encode()</code>.
                Strings must be converted to bytes first:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64.b64encode(&apos;Hello&apos;.encode(&apos;utf-8&apos;))</code>{' '}
                returns <code className="font-mono text-sm bg-secondary/60 px-1 rounded">b&apos;SGVsbG8=&apos;</code>.
                Call <code className="font-mono text-sm bg-secondary/60 px-1 rounded">.decode(&apos;utf-8&apos;)</code> on
                the result if you need a plain string. For URLs, use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64.urlsafe_b64encode()</code>{' '}
                instead.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between urllib.parse.quote() and quote_plus() in Python?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Both functions percent-encode special characters, but they handle spaces differently.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote()</code> follows RFC 3986
                and encodes spaces as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>, making it correct for
                URL path segments.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote_plus()</code> encodes spaces
                as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> and is designed for
                HTML form data sent as a query string.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                How do I prevent XSS when outputting user data in Python HTML templates?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html.escape(user_input)</code>.
                It converts the five HTML-special characters (
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&quot;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&apos;</code>) into safe HTML
                entities. Most Python web frameworks auto-escape template variables, but always call{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html.escape()</code> when building
                HTML strings manually.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Is hashing the same as encoding in Python?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                No. Encoding is always reversible — you can always decode back to the original value. Hashing with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hashlib</code> is a one-way
                transformation: you cannot recover the original input from the hash output. Use hashing for
                integrity verification, not for data storage or transmission where you need the original value back.
                Never use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64.b64encode()</code> to
                &quot;protect&quot; sensitive data or passwords.
              </p>
            </section>

            {/* ── Related links ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-6">Related Tools and Guides</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    href: '/tools/base64-encoder-decoder',
                    title: 'Base64 Encoder / Decoder',
                    desc: 'Encode and decode Base64 strings online — useful for testing base64.b64encode() output.',
                  },
                  {
                    href: '/tools/html-encoder-decoder',
                    title: 'HTML Encoder / Decoder',
                    desc: 'Convert HTML entities online — mirrors what html.escape() and html.unescape() produce.',
                  },
                  {
                    href: '/blog/how-to-encode-html-code',
                    title: 'How To Encode HTML Code',
                    desc: 'A deeper dive into HTML entity encoding, character references, and XSS prevention.',
                  },
                  {
                    href: '/blog/how-to-encode-a-url',
                    title: 'How To Encode a URL',
                    desc: 'Understand percent-encoding, reserved characters, and how to construct safe URLs.',
                  },
                ].map(({ href, title, desc }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                  >
                    <p className="font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

          </article>
        </div>
      </main>
    </>
  )
}
