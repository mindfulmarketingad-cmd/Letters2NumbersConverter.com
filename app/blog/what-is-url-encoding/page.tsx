import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is URL Encoding? | Letters2NumbersConverter.com',
  description: 'What Is URL Encoding? Comprehensive guide to URL encoding, percent encoding, special characters, and how to encode/decode URLs. Learn why URL encoding is essential for web development.',
  keywords: ['URL encoding', 'percent encoding', 'URL decode', 'URL encode', 'special characters', 'web development', 'percent-encoded'],
  authors: [{ name: 'Neo' }],
  creator: 'Neo',
  openGraph: {
    title: 'What Is URL Encoding? | Letters2NumbersConverter.com',
    description: 'Comprehensive guide to URL encoding and percent encoding - Learn what it is, why it matters, and how to use it.',
    type: 'article',
    url: 'https://www.letters2numbersconverter.com/blog/what-is-url-encoding',
    images: [
      {
        url: '/images/what-is-url-encoding-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'URL Encoding visualization showing special characters converted to percent-encoded format',
      },
    ],
    authors: ['Neo'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is URL Encoding?',
    description: 'Learn about URL encoding, percent encoding, and how to encode/decode URLs for web development.',
    images: ['/images/what-is-url-encoding-blog.jpg'],
    creator: '@neo',
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/blog/what-is-url-encoding',
  },
}

export default function WhatIsUrlEncodingBlog() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'What Is URL Encoding?',
    description: 'What Is URL Encoding? Comprehensive guide to URL encoding, percent encoding, special characters, and how to encode/decode URLs.',
    image: '/images/what-is-url-encoding-blog.jpg',
    author: {
      '@type': 'Person',
      name: 'Neo',
    },
    datePublished: new Date().toISOString().split('T')[0],
    dateModified: new Date().toISOString().split('T')[0],
    publisher: {
      '@type': 'Organization',
      name: 'Letters2NumbersConverter.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.letters2numbersconverter.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is URL encoding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'URL encoding is a method of converting text into a format that is safe for transmission over the internet. It replaces special characters with percent signs (%) followed by two hexadecimal digits that represent the character\'s ASCII value.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is percent encoding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Percent encoding, also known as URL encoding, is a mechanism for encoding text where certain characters are represented by a percent symbol (%) followed by a two-digit hexadecimal number. For example, a space becomes %20 and a forward slash becomes %2F.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is URL encoding important?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'URL encoding is important because URLs can only contain a limited set of characters. Special characters like spaces, slashes, and symbols need to be encoded to be safely transmitted in URLs and HTTP requests.',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white text-center">
            What Is URL Encoding?
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            What Is URL Encoding? Learn how URLs encode special characters, why it matters for web development, and how to work with encoded data effectively.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>By Neo</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/what-is-url-encoding-blog.jpg"
            alt="URL Encoding visualization showing special characters converted to percent-encoded format"
            width={1200}
            height={630}
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 bg-secondary/50 p-6 rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#what-is-url-encoding" className="text-primary hover:underline">What Is URL Encoding?</a></li>
            <li><a href="#percent-encoding" className="text-primary hover:underline">What Is Percent Encoding</a></li>
            <li><a href="#why-important" className="text-primary hover:underline">Why URL Encoding Is Important</a></li>
            <li><a href="#common-characters" className="text-primary hover:underline">Common URL Encoded Characters</a></li>
            <li><a href="#examples" className="text-primary hover:underline">URL Encoding Examples</a></li>
            <li><a href="#tools" className="text-primary hover:underline">Using URL Encoding Tools</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="space-y-8 text-lg text-foreground leading-relaxed">
          
          {/* Section 1 */}
          <section id="what-is-url-encoding">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What Is URL Encoding?</h2>
            <p>
              What Is URL Encoding? URL encoding is a standardized method of converting text into a format that can be safely transmitted over the internet. Also known as percent encoding or application/x-www-form-urlencoded, it transforms special characters into a representation that web browsers and servers can reliably process.
            </p>
            <p className="mt-4">
              In URL encoding, characters that have special meaning in URLs or that cannot be directly represented are replaced with a percent sign (%) followed by two hexadecimal digits. For example, a space character becomes %20, and an ampersand (&) becomes %26. This ensures that data can be transmitted through URLs, query strings, and HTTP requests without causing parsing errors or data corruption.
            </p>
            <p className="mt-4">
              URLs are limited to ASCII characters, but we often need to transmit text containing spaces, special characters, non-ASCII characters, and other symbols. URL encoding solves this problem by creating a safe, standardized representation of any text that needs to be transmitted in a URL.
            </p>
          </section>

          {/* Section 2 */}
          <section id="percent-encoding">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">What Is Percent Encoding</h2>
            <p>
              Percent encoding is the technical term for the encoding scheme used in URLs. Every character is encoded as a percent symbol followed by its hexadecimal value. The hexadecimal value represents the character's ASCII code or its UTF-8 byte sequence.
            </p>
            <p className="mt-4">
              For single-byte ASCII characters, the process is straightforward. For example:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Space → %20 (ASCII 32)</li>
              <li>! → %21 (ASCII 33)</li>
              <li>" → %22 (ASCII 34)</li>
              <li># → %23 (ASCII 35)</li>
              <li>$ → %24 (ASCII 36)</li>
              <li>% → %25 (ASCII 37)</li>
            </ul>
            <p className="mt-4">
              Certain characters are always safe in URLs and don't need encoding:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Letters (A-Z, a-z)</li>
              <li>Digits (0-9)</li>
              <li>Hyphen (-), Underscore (_), Period (.), and Tilde (~)</li>
            </ul>
            <p className="mt-4">
              All other characters must be percent-encoded to ensure safe transmission through URLs and web protocols.
            </p>
          </section>

          {/* Section 3 */}
          <section id="why-important">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Why URL Encoding Is Important</h2>
            <p>
              URL encoding is crucial for several reasons in web development and internet communication:
            </p>
            <ul className="mt-4 ml-6 space-y-3 list-disc">
              <li>
                <strong>Safety and Reliability:</strong> Ensures that special characters don't interfere with URL parsing or cause unexpected behavior in web applications.
              </li>
              <li>
                <strong>Standards Compliance:</strong> Follows RFC 3986 and other web standards that define how URLs should be formatted and transmitted.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Allows data to be shared between different systems, browsers, and servers without corruption.
              </li>
              <li>
                <strong>International Character Support:</strong> Enables non-ASCII characters (like accented letters and symbols) to be safely transmitted in URLs through UTF-8 encoding.
              </li>
              <li>
                <strong>Query String Safety:</strong> Prevents special characters in form data from breaking the query string structure (e.g., & is reserved for separating parameters).
              </li>
              <li>
                <strong>Security:</strong> Helps prevent injection attacks and other security vulnerabilities by ensuring data integrity.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="common-characters">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Common URL Encoded Characters</h2>
            <p>
              Here are some of the most commonly encoded characters you'll encounter when working with URLs:
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="border border-border p-3 text-left">Character</th>
                    <th className="border border-border p-3 text-left">Encoded Value</th>
                    <th className="border border-border p-3 text-left">ASCII Code</th>
                    <th className="border border-border p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Space</td>
                    <td className="border border-border p-3 font-mono">%20</td>
                    <td className="border border-border p-3">32</td>
                    <td className="border border-border p-3">Separates words in URLs</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="border border-border p-3">/</td>
                    <td className="border border-border p-3 font-mono">%2F</td>
                    <td className="border border-border p-3">47</td>
                    <td className="border border-border p-3">Reserved for path separation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">?</td>
                    <td className="border border-border p-3 font-mono">%3F</td>
                    <td className="border border-border p-3">63</td>
                    <td className="border border-border p-3">Reserved for query string</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="border border-border p-3">&</td>
                    <td className="border border-border p-3 font-mono">%26</td>
                    <td className="border border-border p-3">38</td>
                    <td className="border border-border p-3">Reserved for parameter separation</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">=</td>
                    <td className="border border-border p-3 font-mono">%3D</td>
                    <td className="border border-border p-3">61</td>
                    <td className="border border-border p-3">Reserved for key-value pairs</td>
                  </tr>
                  <tr className="bg-secondary/30">
                    <td className="border border-border p-3">#</td>
                    <td className="border border-border p-3 font-mono">%23</td>
                    <td className="border border-border p-3">35</td>
                    <td className="border border-border p-3">Reserved for fragments</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">@</td>
                    <td className="border border-border p-3 font-mono">%40</td>
                    <td className="border border-border p-3">64</td>
                    <td className="border border-border p-3">User information separator</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section id="examples">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">URL Encoding Examples</h2>
            <p>
              Let's look at some practical examples of URL encoding:
            </p>
            <div className="mt-6 space-y-4">
              <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Example 1: Simple Query String</p>
                <p className="font-mono text-sm mb-2">Original: https://example.com/search?q=hello world</p>
                <p className="font-mono text-sm text-green-600 dark:text-green-400">Encoded: https://example.com/search?q=hello%20world</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Example 2: Special Characters</p>
                <p className="font-mono text-sm mb-2">Original: https://example.com/search?email=john@example.com&name=John Doe</p>
                <p className="font-mono text-sm text-green-600 dark:text-green-400">Encoded: https://example.com/search?email=john%40example.com&name=John%20Doe</p>
              </div>
              <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Example 3: International Characters</p>
                <p className="font-mono text-sm mb-2">Original: https://example.com/search?q=café</p>
                <p className="font-mono text-sm text-green-600 dark:text-green-400">Encoded: https://example.com/search?q=caf%C3%A9</p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="tools">
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Using URL Encoding Tools</h2>
            <p>
              While you can manually encode and decode URLs, it's much more efficient to use specialized tools. Our <Link href="/tools/online-url-decoder-encoder" className="text-primary hover:underline font-semibold">Online URL Decoder Encoder</Link> tool makes it simple to:
            </p>
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              <li>Instantly decode URL-encoded strings to readable text</li>
              <li>Encode plain text to URL-safe format</li>
              <li>Handle multiple encoding layers with recursive decoding</li>
              <li>Process multiple entries in batch mode</li>
              <li>Copy results directly to your clipboard</li>
            </ul>
            <p className="mt-6">
              Whether you're debugging API calls, analyzing encoded parameters, or preparing data for web transmission, our tool provides fast, accurate, and reliable URL encoding and decoding capabilities without requiring any programming knowledge.
            </p>
            <div className="mt-6 bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-2">Try It Now</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                Need to encode or decode URLs? Use our free online tool right now:
              </p>
              <Link href="/tools/online-url-decoder-encoder" className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                Open URL Decoder Encoder Tool
              </Link>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Conclusion</h2>
            <p>
              URL encoding is a fundamental aspect of web development and internet communication. Understanding how it works and when to use it helps you build more robust and reliable applications. Whether you're working with API calls, form submissions, or query strings, proper URL encoding ensures that your data is transmitted safely and reliably across the web.
            </p>
            <p className="mt-4">
              For developers, content creators, and anyone working with URLs, having access to quick encoding and decoding tools can save significant time and prevent errors. Our suite of <Link href="/tools" className="text-primary hover:underline font-semibold">conversion tools</Link> makes working with encoded data simpler than ever.
            </p>
          </section>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Related Tools & Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/tools/online-url-decoder-encoder" className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary hover:bg-secondary transition">
              <h4 className="font-bold text-black dark:text-white mb-2">Online URL Decoder Encoder</h4>
              <p className="text-sm text-muted-foreground">Instantly encode and decode URLs with support for recursive decoding and batch processing.</p>
            </Link>
            <Link href="/blog/a1z26-chart" className="p-6 bg-secondary/50 rounded-lg border border-border hover:border-primary hover:bg-secondary transition">
              <h4 className="font-bold text-black dark:text-white mb-2">A1Z26 Chart</h4>
              <p className="text-sm text-muted-foreground">Learn about the A1Z26 encoding system and how letters convert to numbers.</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
