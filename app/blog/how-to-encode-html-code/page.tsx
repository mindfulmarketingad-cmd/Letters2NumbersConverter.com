import type { Metadata } from 'next'
import Link from 'next/link'

const BASE_URL = 'https://letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-encode-html-code`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How To Encode HTML Code — Escape Special Characters & Entities',
  description:
    'Learn how to encode HTML code by converting special characters into HTML entities. Covers the five essential characters, XSS prevention, and code examples in JavaScript, PHP, and Python.',
  keywords: [
    'how to encode html code',
    'html encoding',
    'html entity encoding',
    'html escape special characters',
    'html entities',
    'xss prevention',
    'htmlspecialchars',
    'html encode javascript',
    'html encode php',
    'html encode python',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'How To Encode HTML Code — Escape Special Characters & Entities',
    description:
      'How to encode HTML code: convert special characters into HTML entities to prevent XSS, display reserved characters as text, and handle non-ASCII content. With code examples in JavaScript, PHP, and Python.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How To Encode HTML Code' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How To Encode HTML Code — Escape Special Characters & Entities',
    description:
      'Convert special characters into HTML entities to prevent XSS and display reserved characters as text. JavaScript, PHP, and Python code examples included.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How To Encode HTML Code — Escape Special Characters & Entities',
  description:
    'A complete guide to HTML encoding: what it is, the five essential characters that must always be encoded, why encoding prevents XSS attacks, and how to encode HTML in JavaScript, PHP, and Python.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean to encode HTML code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HTML encoding converts characters that have special meaning in HTML — such as &, <, >, ", and \' — into their HTML entity equivalents (e.g. & becomes &amp;). This tells the browser to display the character as visible text rather than interpret it as HTML markup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which characters must always be HTML-encoded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The five characters that must always be encoded are: & (ampersand) → &amp;, < (less-than) → &lt;, > (greater-than) → &gt;, " (double quote) → &quot;, and \' (single quote) → &#x27; or &apos;. Encoding these five is sufficient to prevent HTML injection in most contexts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does HTML encoding prevent XSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'XSS (Cross-Site Scripting) attacks work by injecting script tags or event handlers into a page through user-supplied input. When you HTML-encode untrusted input before inserting it into HTML, angle brackets become &lt; and &gt;, so the browser renders them as visible characters instead of tag delimiters. The injected script never executes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I HTML-encode a string in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'JavaScript has no built-in encodeHTML() function. The standard DOM trick is: const el = document.createElement("div"); el.textContent = str; return el.innerHTML; — this sets the text content of a div element and reads back the browser-encoded innerHTML.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between htmlspecialchars and htmlentities in PHP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'htmlspecialchars() encodes only the five characters that are critical for preventing HTML injection: &, <, >, ", and \'. htmlentities() encodes every character that has a named HTML entity equivalent, which includes many accented and special characters. For security purposes htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, "UTF-8") is recommended — it is both sufficient and less likely to corrupt well-formed UTF-8 content.',
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
    { '@type': 'ListItem', position: 3, name: 'How To Encode HTML Code', item: PAGE_URL },
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
              <li className="text-foreground font-medium" aria-current="page">How To Encode HTML Code</li>
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
              How To Encode HTML Code
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">How To Encode HTML Code</strong> means converting special characters
              into HTML entities so a browser renders them as text rather than interpreting them as markup — for
              example, turning <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code> into{' '}
              <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code> so the browser displays
              a literal less-than sign instead of opening a tag. This guide covers the HTML Living Standard
              (WHATWG) definition of entities, the five characters you must always encode, how encoding blocks XSS
              attacks, and practical code examples in JavaScript, PHP, and Python.
            </p>
          </header>

          <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

            {/* ── What is HTML Encoding ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mt-0 mb-4">What Is HTML Entity Encoding?</h2>
              <p className="text-base text-muted-foreground mb-4">
                The <strong className="text-foreground">HTML Living Standard</strong> (maintained by WHATWG at
                html.spec.whatwg.org) defines an <strong className="text-foreground">HTML character reference</strong> —
                commonly called an HTML entity — as either a{' '}
                <strong className="text-foreground">named character reference</strong> such as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;amp;</code>, or a{' '}
                <strong className="text-foreground">numeric character reference</strong> in decimal (e.g.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#38;</code>) or hexadecimal (e.g.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x26;</code>) form. Both notations
                are valid in HTML5 and tell the parser to produce a specific Unicode code point rather than act on the
                raw character.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                HTML encoding serves three distinct purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Security — prevent XSS.</strong> If user-supplied text is inserted
                  into an HTML document without encoding, an attacker can inject{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;script&gt;</code> tags or inline
                  event handlers that execute in the victim&apos;s browser.
                </li>
                <li>
                  <strong className="text-foreground">Display reserved characters as content.</strong> The characters{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>, and{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> have structural meaning
                  in HTML. To display them as visible text you must encode them.
                </li>
                <li>
                  <strong className="text-foreground">Non-ASCII characters in ASCII-only documents.</strong> Numeric
                  references let you embed any Unicode code point even in documents that use ASCII or Latin-1
                  character encoding.
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                Use our{' '}
                <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                  HTML Encoder / Decoder tool
                </Link>{' '}
                to encode or decode HTML entities instantly without writing any code.
              </p>
            </section>

            {/* ── The Five Essential Characters ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Five Characters You Must Always Encode</h2>
              <p className="text-base text-muted-foreground mb-4">
                Any content that may contain these five characters and is inserted into an HTML document must be encoded —
                no exceptions. They form the minimum safe set for preventing HTML injection in element content and
                attribute values.
              </p>

              <div className="overflow-x-auto my-4 rounded-lg border border-border">
                <table className="w-full text-sm border-collapse min-w-[480px]">
                  <thead>
                    <tr className="border-b border-border bg-secondary/50">
                      {['Character', 'Named Entity', 'Numeric Entity', 'Usage'].map(h => (
                        <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {[
                      ['& (ampersand)', '&amp;amp;', '&amp;#38; / &amp;#x26;', 'Starts every entity — must be encoded first'],
                      ['< (less-than)', '&amp;lt;', '&amp;#60; / &amp;#x3C;', 'Opens HTML tags'],
                      ['> (greater-than)', '&amp;gt;', '&amp;#62; / &amp;#x3E;', 'Closes HTML tags'],
                      ['" (double quote)', '&amp;quot;', '&amp;#34; / &amp;#x22;', 'Delimits attribute values in double quotes'],
                      ["\' (single quote)", '&amp;apos; (HTML5 / XML)', '&amp;#39; / &amp;#x27;', 'Delimits attribute values in single quotes'],
                    ].map(([char, named, numeric, usage]) => (
                      <tr key={char} className="hover:bg-secondary/20">
                        <td className="py-2 px-3 font-mono font-bold text-foreground text-sm align-top">{char}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{named}</td>
                        <td className="py-2 px-3 font-mono text-muted-foreground text-xs align-top">{numeric}</td>
                        <td className="py-2 px-3 text-muted-foreground text-xs align-top">{usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-base text-muted-foreground mb-4">
                One important note on the single quote: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;apos;</code> is
                defined in XML and was formally added to the HTML5 named character reference list, but it was not part of
                HTML4. For broadest compatibility, the numeric form{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x27;</code> is safer when targeting
                legacy parsers. Encode the ampersand (<code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>) first
                whenever you process a string — otherwise you will double-encode existing entities in the content.
              </p>
            </section>

            {/* ── Other Commonly Encoded Characters ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Other Commonly Encoded Characters</h2>
              <p className="text-base text-muted-foreground mb-4">
                Beyond the essential five, these named entities appear frequently in web content:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>
                  <strong className="text-foreground">Non-breaking space</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;nbsp;</code> — prevents a line
                  break between two words and produces a space that will not collapse.
                </li>
                <li>
                  <strong className="text-foreground">© (copyright sign)</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;copy;</code>
                </li>
                <li>
                  <strong className="text-foreground">® (registered trademark)</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;reg;</code>
                </li>
                <li>
                  <strong className="text-foreground">™ (trade mark sign)</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;trade;</code>
                </li>
                <li>
                  <strong className="text-foreground">€ (euro sign)</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;euro;</code>
                </li>
                <li>
                  <strong className="text-foreground">— (em dash)</strong> —{' '}
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;mdash;</code>
                </li>
              </ul>
              <p className="text-base text-muted-foreground mb-4">
                In modern UTF-8 HTML documents you can include these characters literally (the browser handles them
                correctly), but the named entities remain useful in templating systems, email HTML, or any environment
                where character encoding is uncertain.
              </p>
            </section>

            {/* ── XSS and Why Encoding Matters ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">XSS Attacks and Why HTML Encoding Is the Fix</h2>
              <p className="text-base text-muted-foreground mb-4">
                Cross-Site Scripting (XSS) is one of the most widespread web security vulnerabilities. It occurs when an
                application inserts untrusted data — typically something a user typed — directly into an HTML page without
                encoding it first. The browser cannot distinguish between the application&apos;s own markup and the
                attacker&apos;s injected markup, so it executes both.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Vulnerable output (do not do this)</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-red-500/30 p-4 overflow-x-auto whitespace-pre mb-4">{`<!-- User input: <script>alert('XSS')</script> -->
<!-- Server inserts it raw into the page: -->
<p>Hello, <script>alert('XSS')</script>!</p>
<!-- Result: the browser executes alert() -->`}</pre>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Safe output after HTML encoding</h3>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-green-500/30 p-4 overflow-x-auto whitespace-pre mb-4">{`<!-- Same user input, HTML-encoded before insertion: -->
<p>Hello, &lt;script&gt;alert('XSS')&lt;/script&gt;!</p>
<!-- Result: the browser displays the text literally -->`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                After encoding, the angle brackets become{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code> and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;gt;</code>. The browser renders
                them as visible characters instead of tag boundaries, and no script executes. The rule is
                simple: <strong className="text-foreground">always HTML-encode untrusted data before inserting it into
                an HTML context</strong> — element content, attribute values, JavaScript string literals, CSS, and
                URL parameters each require their own encoding scheme; HTML entity encoding handles the first two.
              </p>
            </section>

            {/* ── JavaScript ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How To HTML-Encode in JavaScript</h2>
              <p className="text-base text-muted-foreground mb-4">
                JavaScript (in a browser context) has no built-in{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeHTML()</code> function. The
                canonical approach uses the DOM: assign the string to the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">textContent</code> property of a
                temporary element, then read back{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">innerHTML</code>. The browser&apos;s own
                serialiser performs the encoding.
              </p>

              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`// Encode
function htmlEncode(str) {
  const el = document.createElement('div')
  el.textContent = str
  return el.innerHTML
}

// Decode
function htmlDecode(str) {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.textContent
}

// Examples
htmlEncode('<script>alert("xss")</script>')
// → '&lt;script&gt;alert("xss")&lt;/script&gt;'

htmlDecode('&lt;b&gt;Hello &amp; world&lt;/b&gt;')
// → '<b>Hello & world</b>'`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                The <code className="font-mono text-sm bg-secondary/60 px-1 rounded">DOMParser</code> API is not
                straightforward for encoding (it parses HTML rather than escaping it), so the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">textContent</code> /{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">innerHTML</code> trick above is the
                widely recommended DOM-based approach. In a Node.js environment — where{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">document</code> is not available — use
                a library such as{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">he</code> or{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">entities</code>, both of which implement
                the full WHATWG named character reference list.
              </p>
            </section>

            {/* ── PHP ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How To HTML-Encode in PHP</h2>
              <p className="text-base text-muted-foreground mb-4">
                PHP provides two built-in functions. Understanding the difference is important for choosing the right one:
              </p>

              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`<?php

// RECOMMENDED — encodes only the five essential characters
$safe = htmlspecialchars($input, ENT_QUOTES | ENT_HTML5, 'UTF-8');

// ENT_QUOTES  → encode both " (double) and ' (single) quotes
// ENT_HTML5   → use HTML5 entity names where available
// 'UTF-8'     → treat the input as UTF-8

// NOT recommended for security use — encodes every character
// that has a named entity equivalent (many more than the five)
$overEncoded = htmlentities($input, ENT_QUOTES | ENT_HTML5, 'UTF-8');

// Decoding
$original = html_entity_decode($safe, ENT_QUOTES | ENT_HTML5, 'UTF-8');

?>`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                <strong className="text-foreground">
                  <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars()</code>
                </strong>{' '}
                is sufficient to prevent XSS and is the standard recommendation. It encodes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">"</code>, and{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">'</code> (when{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">ENT_QUOTES</code> is passed).{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlentities()</code> encodes
                everything — including accented letters and currency symbols — which can produce unnecessarily verbose
                output and cause issues when the document is already correctly served as UTF-8.
              </p>
            </section>

            {/* ── Python ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How To HTML-Encode in Python</h2>
              <p className="text-base text-muted-foreground mb-4">
                Python&apos;s standard library includes the{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html</code> module, available since
                Python 3.2, which provides straightforward encode and decode functions.
              </p>

              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`import html

# RECOMMENDED — standard library, no dependencies
# quote=True also encodes " and ' (default is True)
safe = html.escape('<script>alert("xss")</script>', quote=True)
# → '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'

# Decoding
original = html.unescape('&lt;b&gt;Hello &amp; world&lt;/b&gt;')
# → '<b>Hello & world</b>'

# --- MarkupSafe (used by Jinja2) ---
# pip install markupsafe
from markupsafe import escape, Markup

safe_markup = escape('<b>User input</b>')
# → Markup('&lt;b&gt;User input&lt;/b&gt;')
# Returns a Markup object — won't be double-encoded if passed
# back into a Jinja2 template that already auto-escapes.`}</pre>

              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">html.escape()</code> encodes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code>,{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">"</code>, and (when{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">quote=True</code>){' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">'</code>. The{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">MarkupSafe.escape()</code> function
                produces an identical encoding but wraps the result in a{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Markup</code> type that Jinja2
                recognises as already safe — preventing the double-encoding that would otherwise occur if
                auto-escaping is enabled in the template.
              </p>

              <p className="text-base text-muted-foreground mb-4">
                For related encoding topics, see our guide on{' '}
                <Link href="/blog/what-is-url-encoding" className="text-primary hover:underline">
                  what is URL encoding
                </Link>
                , or try our{' '}
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">
                  Base64 encoder / decoder
                </Link>{' '}
                for Base64 encoding tasks.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What does it mean to encode HTML code?</h3>
              <p className="text-base text-muted-foreground mb-4">
                Encoding HTML means replacing characters that carry structural meaning in the HTML grammar with their
                entity equivalents. For instance, a raw{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code> character would start a new
                tag; after encoding it becomes{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code>, which the browser
                displays as a visible less-than sign.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Which characters must always be HTML-encoded?</h3>
              <p className="text-base text-muted-foreground mb-4">
                The five: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;</code> →{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;amp;</code>;{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&lt;</code> →{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;lt;</code>;{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&gt;</code> →{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;gt;</code>;{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">"</code> →{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;quot;</code>;{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">'</code> →{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">&amp;#x27;</code>. Encoding these five
                is the minimum requirement when inserting untrusted text into HTML element content or attribute values.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Why does HTML encoding prevent XSS?</h3>
              <p className="text-base text-muted-foreground mb-4">
                XSS injection relies on the attacker&apos;s input being parsed as HTML markup. When you encode the five
                essential characters first, angle brackets lose their ability to open tags, and quotes can no longer
                break out of attribute values. The malicious payload is displayed as inert text instead of being
                executed.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I HTML-encode a string in JavaScript?</h3>
              <p className="text-base text-muted-foreground mb-4">
                There is no native <code className="font-mono text-sm bg-secondary/60 px-1 rounded">encodeHTML()</code>{' '}
                function. Use the DOM:{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">const el = document.createElement(&apos;div&apos;); el.textContent = str; return el.innerHTML;</code>{' '}
                The browser serialiser handles all necessary escaping.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
                What is the difference between htmlspecialchars and htmlentities in PHP?
              </h3>
              <p className="text-base text-muted-foreground mb-4">
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlspecialchars()</code> encodes only
                the five security-critical characters and is the recommended function for XSS prevention.{' '}
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded">htmlentities()</code> additionally
                converts accented characters, currency symbols, and any other character with a named entity equivalent —
                which is unnecessary for security and can produce over-encoded output.
              </p>
            </section>

            {/* ── Related links grid ── */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Tools &amp; Guides</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/tools/html-encoder-decoder"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">HTML Encoder / Decoder</h3>
                  <p className="text-xs text-muted-foreground">
                    Instantly encode or decode HTML entities in your browser — no code required.
                  </p>
                </Link>
                <Link
                  href="/blog/what-is-url-encoding"
                  className="block p-5 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-foreground mb-1 text-sm">What Is URL Encoding?</h3>
                  <p className="text-xs text-muted-foreground">
                    Understand percent-encoding and how it differs from HTML entity encoding.
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
