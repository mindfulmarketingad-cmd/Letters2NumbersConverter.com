import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-encode-php-code`
const PUBLISHED = '2026-05-14T00:00:00.000Z'

export const metadata: Metadata = {
  title: 'How To Encode PHP Code — Base64, URL, HTML & JSON Encoding in PHP',
  description:
    'How To Encode PHP Code: a practical guide to every major encoding function built into PHP — urlencode, htmlspecialchars, base64_encode, json_encode, password_hash — with real code examples.',
  keywords: [
    'how to encode php code',
    'php encode string',
    'php urlencode',
    'php htmlspecialchars',
    'php base64_encode',
    'php json_encode',
    'php password_hash',
    'php url encoding',
    'php html encoding',
    'php base64 encoding',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'How To Encode PHP Code — Base64, URL, HTML & JSON Encoding in PHP',
    description:
      'How To Encode PHP Code covers urlencode, rawurlencode, htmlspecialchars, base64_encode, json_encode, and password_hash with real PHP examples.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Encode PHP Code' }],
    publishedTime: PUBLISHED,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Encode PHP Code — Base64, URL, HTML & JSON Encoding in PHP',
    description:
      'PHP built-in encoding functions explained: URL, HTML, Base64, JSON, and password hashing — with real examples.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Encode PHP Code — Base64, URL, HTML & JSON Encoding in PHP',
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Organization', name: 'Letters to Numbers Converter' },
  publisher: { '@type': 'Organization', name: 'Letters to Numbers Converter', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between urlencode() and rawurlencode() in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'urlencode() encodes spaces as "+" and is intended for query string values (application/x-www-form-urlencoded format). rawurlencode() encodes spaces as "%20" and follows RFC 3986, making it the correct choice for URL path segments where "+" is a literal character rather than a space.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which PHP function should I use to prevent XSS in HTML output?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, \'UTF-8\'). It converts the five characters that have special meaning in HTML (&, <, >, ", \') into their HTML entity equivalents, neutralising the most common XSS injection vectors. htmlentities() also works but converts every possible character to an entity, which is unnecessary for most use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I encode a file as Base64 in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Read the file contents with file_get_contents() and pass the result to base64_encode(). For example: $encoded = base64_encode(file_get_contents(\'image.png\')); This produces a Base64 string you can embed in a data URI, JSON payload, or database text column.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hashing the same as encoding in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Encoding (urlencode, base64_encode, json_encode) is a reversible transformation — you can always decode back to the original value. Hashing with hash() or password_hash() is a one-way operation: the original input cannot be recovered from the hash output. Always use password_hash() for passwords, never base64_encode() or md5().',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I build a URL query string from a PHP array?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use http_build_query(array $data). It accepts an associative array and returns a properly URL-encoded query string. For example, http_build_query([\'name\' => \'John Doe\', \'city\' => \'New York\']) returns \'name=John+Doe&city=New+York\'. It handles nested arrays, numeric indices, and all encoding automatically.',
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
    { '@type': 'ListItem', position: 3, name: 'How To Encode PHP Code', item: PAGE_URL },
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
              <li className="text-foreground font-medium">How To Encode PHP Code</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-3">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-secondary/60 text-muted-foreground px-3 py-1 rounded-full">
                PHP Encoding Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5 text-balance leading-tight">
              How To Encode PHP Code
            </h1>
            <p className="text-base text-muted-foreground">
              By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
              {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* Lead paragraph */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To Encode PHP Code</strong> covers the built-in functions PHP
              provides for every major encoding format — from URL-safe strings to Base64 binary data, HTML entity
              escaping, JSON serialisation, and one-way password hashing. PHP ships with all of these in its standard
              library, so you rarely need a third-party package. The sections below walk through each category with
              real function signatures, concrete examples, and notes on when to reach for one function over another.
            </p>

            {/* ── URL Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">URL Encoding in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                PHP provides two single-value encoding functions and one array-level helper for building query strings.
                The difference between the first two trips up developers more often than it should.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">urlencode() and urldecode()</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode($str)</code> is designed for
                query string values. It encodes spaces as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> and
                percent-encodes every character that is not an unreserved alphanumeric, a hyphen, an underscore, or a period.
                Its inverse is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urldecode($str)</code>.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$query = urlencode('hello world & goodbye');
// hello+world+%26+goodbye

echo urldecode($query);
// hello world & goodbye`}</pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">rawurlencode() and rawurldecode()</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurlencode($str)</code> follows{' '}
                <strong className="text-foreground">RFC 3986</strong> and encodes spaces as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> rather than{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>. Use this for URL{' '}
                <em>path segments</em>, where a literal <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> is
                not treated as a space. Its inverse is <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurldecode($str)</code>.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$slug = rawurlencode('San Francisco/CA');
// San%20Francisco%2FCA

// Use rawurlencode for path segments:
$url = 'https://example.com/cities/' . rawurlencode('New York');
// https://example.com/cities/New%20York`}</pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">http_build_query()</h3>
              <p className="text-base text-muted-foreground mb-4">
                When you need to assemble an entire query string from an array,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query(array $data)</code> is the
                right tool. It handles the encoding automatically, joins pairs with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>, and deals correctly with nested
                arrays and numeric keys.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$params = ['name' => 'John Doe', 'city' => 'New York'];
echo http_build_query($params);
// name=John+Doe&city=New+York

// Append it to a URL:
$url = 'https://api.example.com/search?' . http_build_query($params);`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                If you need <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code> instead of{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> for spaces, pass{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">PHP_QUERY_RFC3986</code> as the fourth
                argument:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query($params, '', '&amp;', PHP_QUERY_RFC3986)</code>.
              </p>

              <p className="text-base text-muted-foreground mb-2">
                For hands-on experimentation with URL encoding output, try the{' '}
                <Link href="/blog/how-to-encode-a-url" className="text-primary hover:underline">
                  URL encoding guide
                </Link>{' '}
                or use the interactive{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>.
              </p>
            </section>

            {/* ── HTML Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">HTML Encoding in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                Outputting untrusted user data directly into HTML is the root cause of the majority of XSS
                vulnerabilities. PHP&apos;s HTML encoding functions neutralise the characters that HTML parsers treat
                as special before the string ever reaches the browser.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">htmlspecialchars() — the right choice for XSS prevention</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, &apos;UTF-8&apos;)</code>{' '}
                converts the five characters with HTML special meaning into their safe entity equivalents:
              </p>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[340px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Character', 'Entity'].map(h => (
                        <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['&', '&amp;'],
                      ['<', '&lt;'],
                      ['>', '&gt;'],
                      ['"', '&quot;'],
                      ["'", '&#039;'],
                    ].map(([char, entity]) => (
                      <tr key={char} className="hover:bg-secondary/20">
                        <td className="py-2 px-4 font-mono font-bold text-foreground">{char}</td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">{entity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base text-muted-foreground mb-4">
                Always pass <code className="font-mono text-sm bg-secondary/60 px-1 rounded">ENT_QUOTES | ENT_HTML5</code> and
                an explicit charset of <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&apos;UTF-8&apos;</code> —
                the defaults have changed between PHP versions and omitting them silently misses single-quote encoding
                in older configurations.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$userInput = '<script>alert("xss")</script>';
$safe = htmlspecialchars($userInput, ENT_QUOTES | ENT_HTML5, 'UTF-8');
// &lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;

echo '<p>' . $safe . '</p>';
// Renders as literal text — no script executes.`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                The inverse function is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars_decode($str, ENT_QUOTES | ENT_HTML5)</code>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">htmlentities() — more aggressive, usually unnecessary</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlentities($str, ENT_QUOTES | ENT_HTML5, &apos;UTF-8&apos;)</code>{' '}
                goes further: it converts <em>every</em> character that has an HTML entity equivalent — accented
                letters, currency symbols, and so on. For most UTF-8 applications this is overkill.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars()</code> is sufficient and
                produces smaller, more readable output. The inverse is{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html_entity_decode()</code>.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">strip_tags() — when you want removal, not escaping</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">strip_tags($str)</code> removes HTML and
                PHP tags entirely from a string. This is different from encoding — it does not escape the tags, it
                deletes them. Use it when you want plain text output and have no need for the original markup. It does
                not protect against XSS on its own if the output is later placed inside a JavaScript context or an HTML
                attribute.
              </p>
              <p className="text-base text-muted-foreground mb-2">
                For more on HTML encoding, see the{' '}
                <Link href="/blog/how-to-encode-html-code" className="text-primary hover:underline">
                  HTML encoding guide
                </Link>{' '}
                and the{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>.
              </p>
            </section>

            {/* ── Base64 Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Base64 Encoding in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                Base64 encodes arbitrary binary data as a string of printable ASCII characters. PHP&apos;s built-in
                functions make it straightforward.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">base64_encode() and base64_decode()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
// Encode a plain string
$encoded = base64_encode('Hello World');
// SGVsbG8gV29ybGQ=

// Decode it back
$decoded = base64_decode($encoded);
// Hello World

// Encode a binary file for embedding in JSON or a data URI
$imageData = file_get_contents('image.png');
$base64Image = base64_encode($imageData);
$dataUri = 'data:image/png;base64,' . $base64Image;`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64_decode()</code> returns{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">false</code> on invalid input, so always
                check the return value before using the result. Pass{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">true</code> as the second argument
                (<code className="font-mono text-sm bg-secondary/60 px-1 rounded">$strict</code>) if you want it to return{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">false</code> for strings containing
                characters outside the Base64 alphabet, rather than silently ignoring them.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Common Base64 use cases in PHP</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Embedding binary data (images, PDFs) inline in a JSON API response</li>
                <li>Storing binary blobs in a database text column</li>
                <li>MIME email attachments (encoded by the mail library, but the underlying call is Base64)</li>
                <li>Encoding the header and payload segments of a JWT (using the URL-safe Base64URL variant)</li>
              </ul>
              <p className="text-base text-muted-foreground mb-2">
                Try encoding and decoding Base64 strings with the{' '}
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">
                  Base64 Encoder / Decoder tool
                </Link>.
              </p>
            </section>

            {/* ── JSON Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">JSON Encoding in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                JSON is the standard interchange format for REST APIs, and PHP&apos;s{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_encode()</code> /{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_decode()</code> pair handles
                serialisation and deserialisation without any external dependencies.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">json_encode()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$data = [
    'name'    => 'Héloïse',
    'website' => 'https://example.com/path/to/page',
    'score'   => 42,
];

// Default — escapes non-ASCII and slashes
echo json_encode($data);
// {"name":"H\\u00e9lo\\u00efse","website":"https:\\/\\/example.com\\/path\\/to\\/page","score":42}

// More readable — keep UTF-8 and unescaped slashes
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
// {"name":"Héloïse","website":"https://example.com/path/to/page","score":42}

// Pretty-print for debugging
echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);`}</pre>
              <p className="text-base text-muted-foreground mb-4">
                Key flags to know:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">JSON_PRETTY_PRINT</code> — adds newlines and indentation, useful for debugging and log files</li>
                <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">JSON_UNESCAPED_UNICODE</code> — keeps UTF-8 characters as-is instead of converting them to <code className="font-mono text-sm bg-secondary/60 px-1 rounded">\uXXXX</code> escape sequences</li>
                <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">JSON_UNESCAPED_SLASHES</code> — prevents forward slashes from being escaped as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">\/</code>, keeping URLs readable</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">json_decode()</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$json = '{"name":"Alice","roles":["admin","editor"]}';

// Decode to associative array (pass true as second arg)
$data = json_decode($json, true);
echo $data['name'];       // Alice
echo $data['roles'][0];   // admin

// Decode to object (default)
$obj = json_decode($json);
echo $obj->name;          // Alice`}</pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Error checking</h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_encode()</code> returns{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">false</code> on failure (for example, when
                the input contains non-UTF-8 sequences).{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_decode()</code> returns{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">null</code> on parse failure. Always check
                for errors using{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_last_error()</code> (returns an integer
                constant) or the more descriptive{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">json_last_error_msg()</code>.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
$result = json_decode('{ invalid json }', true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log('JSON decode failed: ' . json_last_error_msg());
}`}</pre>
            </section>

            {/* ── Hash Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Hash Encoding in PHP — One-Way Only</h2>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 my-6">
                <p className="text-sm font-semibold text-yellow-400 mb-1">Hashing is not encoding</p>
                <p className="text-sm text-muted-foreground">
                  Encoding (Base64, URL, JSON) is a <strong className="text-foreground">reversible</strong>{' '}
                  transformation. Hashing is <strong className="text-foreground">one-way</strong>: you cannot recover
                  the original value from a hash. Do not confuse the two, and never use{' '}
                  <code className="font-mono text-xs bg-secondary/60 px-1 rounded">base64_encode()</code> to &quot;protect&quot; passwords.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">hash() — general-purpose hashing</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
// SHA-256 hex digest of a string
$hash = hash('sha256', 'Hello World');
// a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

// List all available algorithms
$algorithms = hash_algos();`}</pre>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">password_hash() and password_verify() — for passwords</h3>
              <p className="text-base text-muted-foreground mb-4">
                For password storage, <strong className="text-foreground">never</strong> use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">md5()</code> or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">sha1()</code>. These produce fast hashes
                that are trivially crackable with pre-computed rainbow tables or GPU-accelerated brute force. PHP&apos;s{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">password_hash()</code> uses bcrypt
                (or Argon2 with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">PASSWORD_ARGON2ID</code>),
                automatically generating and embedding a random salt, and applying a work factor that makes brute-force
                attacks computationally expensive.
              </p>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php
// Hash a password before storing it
$hash = password_hash($plainPassword, PASSWORD_BCRYPT);
// $2y$10$... — a 60-character bcrypt string including the salt

// Verify a login attempt against the stored hash
if (password_verify($plainPassword, $hash)) {
    // Password is correct — log the user in
} else {
    // Invalid password
}

// Check if the hash needs rehashing (e.g. after a cost factor change)
if (password_needs_rehash($hash, PASSWORD_BCRYPT)) {
    $hash = password_hash($plainPassword, PASSWORD_BCRYPT);
    // Update the stored hash in the database
}`}</pre>
            </section>

            {/* ── Decision Table ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Choosing the Right PHP Encoding Function</h2>
              <p className="text-base text-muted-foreground mb-4">
                Use this table as a quick reference. The right choice depends entirely on where the output will be used.
              </p>
              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[520px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Use case', 'Function to use'].map(h => (
                        <th key={h} className="text-left py-2 px-4 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['Single query parameter value', 'urlencode() or rawurlencode()'],
                      ['Full query string from an array', 'http_build_query()'],
                      ['URL path segment (RFC 3986)', 'rawurlencode()'],
                      ['HTML output — prevent XSS', 'htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, \'UTF-8\')'],
                      ['Remove HTML tags entirely', 'strip_tags()'],
                      ['Binary data in a text field or JSON', 'base64_encode()'],
                      ['Data to/from a JSON API', 'json_encode() / json_decode()'],
                      ['General-purpose cryptographic hash', 'hash(\'sha256\', $str)'],
                      ['Password storage', 'password_hash() / password_verify()'],
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
                What is the difference between urlencode() and rawurlencode() in PHP?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">urlencode()</code> encodes spaces as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>, which is correct for the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">application/x-www-form-urlencoded</code>{' '}
                format used in query strings.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">rawurlencode()</code> encodes spaces as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">%20</code>, which is correct for URL path
                segments under RFC 3986. In a path, a literal{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> means a plus sign — not a space.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Which PHP function should I use to prevent XSS in HTML output?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, &apos;UTF-8&apos;)</code>.
                It converts the five characters that have special meaning in HTML (
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&quot;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&apos;</code>) to safe HTML entities.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlentities()</code> also works but
                encodes far more characters than necessary.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                How do I encode a file as Base64 in PHP?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Read the file with{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">file_get_contents()</code> and pass the
                result to{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">base64_encode()</code>:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">$encoded = base64_encode(file_get_contents(&apos;image.png&apos;));</code>.
                This produces a Base64 string you can embed in a data URI, a JSON payload, or a database text column.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                Is hashing the same as encoding in PHP?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                No. Encoding is always reversible — you can always decode back to the original. Hashing is a
                one-way transformation: you cannot recover the original input from a hash. Use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">password_hash()</code> for passwords
                and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">hash(&apos;sha256&apos;, $str)</code> for
                general integrity checks. Never use{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">md5()</code> or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">sha1()</code> for password storage.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                How do I build a URL query string from a PHP array?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                Use <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query(array $data)</code>.
                It handles all encoding, joining, and nested-array expansion automatically. For example,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">http_build_query([&apos;name&apos; =&gt; &apos;John Doe&apos;, &apos;city&apos; =&gt; &apos;New York&apos;])</code>{' '}
                returns <code className="font-mono text-sm bg-secondary/60 px-1 rounded">name=John+Doe&amp;city=New+York</code>.
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
                    desc: 'Encode and decode Base64 strings online — useful for testing base64_encode() output.',
                  },
                  {
                    href: '/tools/html-encoder-decoder',
                    title: 'HTML Encoder / Decoder',
                    desc: 'Convert HTML entities online — mirrors what htmlspecialchars() and htmlentities() produce.',
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
