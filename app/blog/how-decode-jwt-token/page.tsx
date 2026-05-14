import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-decode-jwt-token`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How Decode JWT Token — Parse Header, Payload & Signature',
  description:
    'Learn how decode JWT token step by step: split on dots, Base64URL-decode the header and payload, read the claims, and understand why the signature must be verified — not just decoded.',
  keywords: [
    'how decode jwt token',
    'decode jwt token',
    'jwt decoder',
    'parse jwt token',
    'jwt header payload signature',
    'base64url decode jwt',
    'jwt claims explained',
    'jwt verification vs decoding',
    'json web token decode',
    'jwt security',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How Decode JWT Token — Parse Header, Payload & Signature',
    description:
      'Step-by-step guide to decoding a JWT token: split on dots, Base64URL-decode the header and payload, inspect claims, and understand the critical difference between decoding and verifying the signature.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How Decode JWT Token' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Decode JWT Token — Parse Header, Payload & Signature',
    description:
      'Step-by-step: split on dots, Base64URL-decode header and payload, read claims — and understand why the signature must be verified, not just decoded.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Decode JWT Token — Parse Header, Payload & Signature',
  description:
    'A complete step-by-step guide to decoding a JSON Web Token: how to split the three parts, Base64URL-decode the header and payload, interpret common claims, and understand why the signature must be verified rather than decoded.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'How do I decode a JWT token manually?',
    answer:
      'Split the JWT on its two dots to get three Base64URL-encoded segments. Take the first segment (header) or the second segment (payload), replace every "-" with "+" and every "_" with "/", pad the string with "=" characters until its length is a multiple of 4, then Base64-decode the result. The output is a JSON string you can parse to read the claims. The third segment (signature) cannot be meaningfully decoded without the server secret.',
  },
  {
    question: 'Can anyone decode a JWT token?',
    answer:
      'Yes — anyone who has the JWT string can decode its header and payload because they are only Base64URL-encoded, not encrypted. This is by design: JWTs are meant to be readable by any party that holds the token. However, only the server that owns the secret key can verify the signature, which is what proves the claims have not been tampered with.',
  },
  {
    question: 'What is the difference between decoding and verifying a JWT?',
    answer:
      'Decoding a JWT means reading the header and payload claims, which requires no secret. Verifying a JWT means recomputing the HMAC or RSA signature from the header and payload using the server\'s secret key and confirming it matches the signature in the token. A decoded JWT tells you what the claims say; a verified JWT tells you those claims are authentic and have not been tampered with. Never trust decoded JWT claims in a security context without verification.',
  },
  {
    question: 'What does the exp claim mean in a JWT?',
    answer:
      'The "exp" (expiration time) claim is a Unix timestamp (seconds since 1 January 1970 UTC) after which the token must no longer be accepted. When verifying a JWT, the server checks that the current time is before exp. If the token is expired, it should be rejected even if the signature is valid.',
  },
  {
    question: 'Is Base64URL the same as Base64?',
    answer:
      'Base64URL is a URL-safe variant of standard Base64. It replaces the "+" character with "-" and the "/" character with "_", and omits the "=" padding characters. This makes the encoded string safe to embed in URLs and HTTP headers without percent-encoding. To convert Base64URL back to standard Base64 (for decoding), reverse those substitutions and re-add the "=" padding.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'How Decode JWT Token', url: PAGE_URL },
])

// ── Example JWT (illustrative — signed with secret "mysecret") ────────────────
// Header:  {"alg":"HS256","typ":"JWT"}
// Payload: {"sub":"1234567890","name":"Jane Smith","email":"jane@example.com","iat":1716643200,"exp":1716729600,"iss":"api.example.com","aud":"app.example.com"}
const EXAMPLE_HEADER  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const EXAMPLE_PAYLOAD = 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgU21pdGgiLCJlbWFpbCI6ImphbmVAZXhhbXBsZS5jb20iLCJpYXQiOjE3MTY2NDMyMDAsImV4cCI6MTcxNjcyOTYwMCwiaXNzIjoiYXBpLmV4YW1wbGUuY29tIiwiYXVkIjoiYXBwLmV4YW1wbGUuY29tIn0'
const EXAMPLE_SIGNATURE = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="flex-1 w-full">
        <article className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="prose prose-invert max-w-none">

            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center text-balance">
              How Decode JWT Token
            </h1>
            <div className="mb-8 text-center">
              <p className="text-sm text-muted-foreground">
                By Letters2NumbersConverter.com &nbsp;·&nbsp;{' '}
                {new Date(PUBLISHED).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-6">
              <strong className="text-foreground">How Decode JWT Token</strong> step by step: split the token string on its two dot separators, Base64URL-decode the first segment to read the header, Base64URL-decode the second segment to read the payload claims, and understand that the third segment — the signature — is verified with a secret key, not decoded. This guide explains every step in plain language, covers the critical difference between decoding and verifying, and includes a worked example you can follow along with.
            </p>

            {/* ── What is a JWT ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Is a JWT Token?</h2>
            <p className="text-base text-muted-foreground mb-4">
              A <strong className="text-foreground">JSON Web Token (JWT)</strong> is a compact, URL-safe way to represent claims between two parties. It is defined in <strong className="text-foreground">RFC 7519</strong> and is the de facto standard for stateless authentication and authorization in modern web APIs. When a user logs in, the server creates a JWT containing claims (assertions about the user), signs it with a secret key, and returns it to the client. The client sends the JWT back with every subsequent request — typically in the <code className="font-mono text-sm bg-secondary/60 px-1 rounded">Authorization: Bearer &lt;token&gt;</code> header — and the server verifies the signature to authenticate the request without needing to look up a session in a database.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              A JWT looks like three Base64URL-encoded strings separated by dots:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre-wrap break-all mb-6">
              <span className="text-red-400">{EXAMPLE_HEADER}</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-green-400">{EXAMPLE_PAYLOAD}</span>
              <span className="text-muted-foreground">.</span>
              <span className="text-blue-400">{EXAMPLE_SIGNATURE}</span>
            </pre>
            <p className="text-base text-muted-foreground mb-4">
              The <span className="text-red-400 font-semibold">red</span> part is the <strong className="text-foreground">header</strong>, the <span className="text-green-400 font-semibold">green</span> part is the <strong className="text-foreground">payload</strong>, and the <span className="text-blue-400 font-semibold">blue</span> part is the <strong className="text-foreground">signature</strong>. JWT uses Base64URL encoding, which is a variant of Base64 — use our{' '}
              <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder and Decoder</Link>{' '}
              to experiment with encoding and decoding Base64URL strings manually.
            </p>

            {/* ── The Three Parts ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Three Parts of a JWT</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">1. Header</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">header</strong> is a JSON object that describes the token type and the signing algorithm. A typical header looks like this:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`{
  "alg": "HS256",
  "typ": "JWT"
}`}</pre>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-4">
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">alg</code> — the signing algorithm: <code className="font-mono text-sm bg-secondary/60 px-1 rounded">HS256</code> (HMAC-SHA256), <code className="font-mono text-sm bg-secondary/60 px-1 rounded">RS256</code> (RSA-SHA256), <code className="font-mono text-sm bg-secondary/60 px-1 rounded">ES256</code> (ECDSA), and others</li>
              <li><code className="font-mono text-sm bg-secondary/60 px-1 rounded">typ</code> — always <code className="font-mono text-sm bg-secondary/60 px-1 rounded">JWT</code> for JSON Web Tokens</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">2. Payload</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">payload</strong> is a JSON object containing <em>claims</em> — statements about the user and any additional metadata. The JWT specification defines a set of <strong className="text-foreground">registered claim names</strong> (short, standardised keys) alongside any custom claims your application needs:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`{
  "sub": "1234567890",
  "name": "Jane Smith",
  "email": "jane@example.com",
  "iat": 1716643200,
  "exp": 1716729600,
  "iss": "api.example.com",
  "aud": "app.example.com"
}`}</pre>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3. Signature</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <strong className="text-foreground">signature</strong> is computed by the server using the encoded header, the encoded payload, and a secret key — for example:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              The signature is also Base64URL-encoded. It protects against tampering: if anyone modifies the header or payload, the recomputed signature will not match and the server will reject the token. JWTs are similar to SAML tokens, which also{' '}
              <Link href="/tools/saml-encoder" className="text-primary hover:underline">use Base64 encoding</Link>{' '}
              to carry assertions between identity providers and service providers.
            </p>

            {/* ── How to Decode Header ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Decode the Header Step by Step</h2>
            <p className="text-base text-muted-foreground mb-4">
              The header is the first segment — the part before the first dot. Here is the exact process to decode it:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Extract the header segment.</strong> Split the JWT string on <code className="font-mono text-sm bg-secondary/60 px-1 rounded">"."</code> and take index 0. For the example token above, that is:<br />
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded text-red-400 block mt-1 p-2 rounded-lg break-all">{EXAMPLE_HEADER}</code>
              </li>
              <li>
                <strong className="text-foreground">Convert Base64URL to standard Base64.</strong> Replace every <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> character with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> and every <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code> character with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code>. This example header contains no URL-safe characters, so it stays the same.
              </li>
              <li>
                <strong className="text-foreground">Add Base64 padding.</strong> Pad the string with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code> characters until its length is a multiple of 4. Calculate <code className="font-mono text-sm bg-secondary/60 px-1 rounded">padding = (4 - length % 4) % 4</code> and append that many <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code> characters. The example header is already 36 characters (a multiple of 4), so no padding is needed.
              </li>
              <li>
                <strong className="text-foreground">Base64-decode the padded string.</strong> The result is a UTF-8 JSON string:<br />
                <code className="font-mono text-sm bg-secondary/60 px-1 rounded block mt-1 p-2 rounded-lg">{`{"alg":"HS256","typ":"JWT"}`}</code>
              </li>
              <li>
                <strong className="text-foreground">Parse the JSON.</strong> You now have a JavaScript/Python/Go object with the <code className="font-mono text-sm bg-secondary/60 px-1 rounded">alg</code> and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">typ</code> fields.
              </li>
            </ol>

            <div className="rounded-lg border border-border bg-secondary/20 p-4 my-6">
              <h4 className="text-base font-semibold text-foreground mb-2">JavaScript one-liner to decode any JWT header</h4>
              <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded p-3 overflow-x-auto whitespace-pre">{`const [headerB64] = token.split('.')
const header = JSON.parse(
  atob(headerB64.replace(/-/g, '+').replace(/_/g, '/'))
)
console.log(header) // { alg: 'HS256', typ: 'JWT' }`}</pre>
            </div>

            {/* ── How to Decode Payload ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Decode the Payload Step by Step</h2>
            <p className="text-base text-muted-foreground mb-4">
              The process for decoding the payload is identical to decoding the header — only the segment index changes. The payload is the second segment (index 1) after splitting on <code className="font-mono text-sm bg-secondary/60 px-1 rounded">"."</code>.
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-6">
              <li>
                <strong className="text-foreground">Extract the payload segment</strong> — everything between the first and second dots.
              </li>
              <li>
                <strong className="text-foreground">Replace Base64URL characters:</strong> <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> → <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code>, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code> → <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code>.
              </li>
              <li>
                <strong className="text-foreground">Pad with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code></strong> until the string length is divisible by 4.
              </li>
              <li>
                <strong className="text-foreground">Base64-decode</strong> to get the JSON string.
              </li>
              <li>
                <strong className="text-foreground">Parse the JSON</strong> to access individual claims such as <code className="font-mono text-sm bg-secondary/60 px-1 rounded">sub</code>, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">email</code>, and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">exp</code>.
              </li>
            </ol>
            <p className="text-base text-muted-foreground mb-4">
              Decoding the example token&apos;s payload yields:
            </p>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-6">{`{
  "sub":   "1234567890",
  "name":  "Jane Smith",
  "email": "jane@example.com",
  "iat":   1716643200,   // 2024-05-25 12:00:00 UTC
  "exp":   1716729600,   // 2024-05-26 12:00:00 UTC
  "iss":   "api.example.com",
  "aud":   "app.example.com"
}`}</pre>
            <p className="text-base text-muted-foreground mb-4">
              Note that <code className="font-mono text-sm bg-secondary/60 px-1 rounded">iat</code> and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">exp</code> are Unix timestamps (integer seconds since 1970-01-01 00:00:00 UTC). When a JWT is passed in a URL query string, URL-encoding is applied to the JWT — use our{' '}
              <Link href="/tools/online-url-decoder-encoder" className="text-primary hover:underline">online URL Decoder and Encoder</Link>{' '}
              if you need to decode a percent-encoded JWT before splitting it.
            </p>

            {/* ── The Signature ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Signature — Verified, Not Decoded</h2>
            <p className="text-base text-muted-foreground mb-4">
              The third segment is the <strong className="text-foreground">signature</strong>. Unlike the header and payload, the signature is <strong className="text-foreground">not decoded — it is verified</strong>. The distinction is fundamental:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li><strong className="text-foreground">Decoding</strong> converts Base64URL bytes into readable text. Anyone can do it with no knowledge of the secret.</li>
              <li><strong className="text-foreground">Verifying</strong> recomputes the HMAC or RSA signature from the header and payload using the secret key, then compares it to the signature in the token. Only the party that holds the secret can do this correctly.</li>
            </ul>
            <p className="text-base text-muted-foreground mb-4">
              If you Base64URL-decode the signature bytes, you get a raw binary HMAC or RSA digest — it is not a human-readable string, and there is nothing useful to &quot;read&quot; in it. The signature&apos;s purpose is purely cryptographic integrity protection, not information storage.
            </p>

            {/* ── Security Warning ── */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 my-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Security Warning: Decoded ≠ Trusted</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-yellow-300">Never trust the claims in a decoded JWT without verifying the signature.</strong> Because the header and payload are only Base64URL-encoded — not encrypted or signed on the client side — an attacker can craft a token with arbitrary claims and encode it correctly. For example, they could change <code className="font-mono text-xs bg-secondary/60 px-1 rounded">{"\"role\":\"user\""}</code> to <code className="font-mono text-xs bg-secondary/60 px-1 rounded">{"\"role\":\"admin\""}</code> and re-encode it.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                A <strong className="text-yellow-300">decoded JWT</strong> tells you what the claims <em>say</em>.<br />
                A <strong className="text-yellow-300">verified JWT</strong> tells you those claims are <em>authentic</em> and have not been tampered with.
              </p>
              <p className="text-sm text-muted-foreground">
                Always verify the signature on the server side using a trusted JWT library before acting on any claim. Never perform JWT verification in client-side JavaScript where the secret key would be exposed.
              </p>
            </div>

            {/* ── Claims Table ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Common JWT Payload Claims</h2>
            <p className="text-base text-muted-foreground mb-4">
              The JWT specification (RFC 7519) defines the following <strong className="text-foreground">registered claim names</strong>. Using these standard names ensures interoperability between different JWT libraries and frameworks.
            </p>

            <div className="overflow-x-auto my-4 rounded-lg border border-border">
              <table className="w-full text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    {['Claim', 'Full Name', 'Type', 'Description'].map(h => (
                      <th key={h} className="text-left py-2 px-3 text-muted-foreground font-semibold text-xs uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {[
                    ['iss', 'Issuer', 'String', 'Identifies the principal that issued the JWT — typically the domain of your authentication server, e.g. "auth.example.com".'],
                    ['sub', 'Subject', 'String', 'Identifies the principal that is the subject of the JWT — usually a unique user ID such as a database primary key.'],
                    ['aud', 'Audience', 'String / Array', 'Identifies the recipients the JWT is intended for. The validating server must check that it is in the audience list and reject the token if not.'],
                    ['exp', 'Expiration Time', 'Number (Unix timestamp)', 'The time after which the JWT must not be accepted. Expressed as seconds since Unix epoch (1970-01-01T00:00:00Z).'],
                    ['iat', 'Issued At', 'Number (Unix timestamp)', 'The time at which the JWT was issued. Useful for determining the age of a token.'],
                    ['nbf', 'Not Before', 'Number (Unix timestamp)', 'The time before which the JWT must not be accepted. Allows issuing tokens that become valid in the future.'],
                  ].map(([claim, full, type, desc]) => (
                    <tr key={claim} className="hover:bg-secondary/20">
                      <td className="py-2 px-3 font-mono font-bold text-foreground text-sm align-top">{claim}</td>
                      <td className="py-2 px-3 text-foreground text-xs align-top whitespace-nowrap">{full}</td>
                      <td className="py-2 px-3 text-muted-foreground text-xs align-top whitespace-nowrap">{type}</td>
                      <td className="py-2 px-3 text-muted-foreground text-xs align-top">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              In addition to these registered claims, you can add any <strong className="text-foreground">custom (private) claims</strong> relevant to your application — for example <code className="font-mono text-sm bg-secondary/60 px-1 rounded">role</code>, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">plan</code>, <code className="font-mono text-sm bg-secondary/60 px-1 rounded">org_id</code>, or <code className="font-mono text-sm bg-secondary/60 px-1 rounded">permissions</code>. Keep the payload small; every byte is transmitted with every request.
            </p>

            {/* ── Full Example ── */}
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Full Example — JWT and Its Decoded Parts</h2>
            <p className="text-base text-muted-foreground mb-4">
              The following is a complete worked example. The token is signed with HMAC-SHA256 (HS256). The three colour-coded segments are shown first, followed by each decoded part.
            </p>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Raw JWT</h3>
            <pre className="font-mono text-xs leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre-wrap break-all mb-4">
              <span className="text-red-400">{EXAMPLE_HEADER}</span>
              <span className="text-muted-foreground font-bold">.</span>
              <span className="text-green-400">{EXAMPLE_PAYLOAD}</span>
              <span className="text-muted-foreground font-bold">.</span>
              <span className="text-blue-400">{EXAMPLE_SIGNATURE}</span>
            </pre>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
              <span className="text-red-400">Decoded Header</span>
            </h3>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`{
  "alg": "HS256",
  "typ": "JWT"
}`}</pre>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
              <span className="text-green-400">Decoded Payload</span>
            </h3>
            <pre className="font-mono text-sm leading-relaxed bg-secondary/40 rounded-lg border border-border p-4 overflow-x-auto whitespace-pre mb-4">{`{
  "sub":   "1234567890",
  "name":  "Jane Smith",
  "email": "jane@example.com",
  "iat":   1716643200,
  "exp":   1716729600,
  "iss":   "api.example.com",
  "aud":   "app.example.com"
}`}</pre>

            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
              <span className="text-blue-400">Signature</span>
            </h3>
            <div className="bg-secondary/40 rounded-lg border border-border p-4 mb-6">
              <p className="font-mono text-blue-400 text-xs break-all mb-2">{EXAMPLE_SIGNATURE}</p>
              <p className="text-xs text-muted-foreground">
                This is an HMAC-SHA256 digest, Base64URL-encoded. It cannot be decoded to reveal the secret — it can only be <strong className="text-foreground">verified</strong> by recomputing it server-side with the secret key.
              </p>
            </div>

            {/* ── FAQ ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How do I decode a JWT token manually?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Split the JWT on its two dots to get three Base64URL-encoded segments. Take the first segment (header) or the second segment (payload), replace every <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> and every <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code> with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code>, add <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code> padding until the length is a multiple of 4, then Base64-decode to get the JSON string. Our{' '}
              <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder and Decoder</Link>{' '}
              can perform that Base64-decode step for you.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Can anyone decode a JWT token?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Yes — the header and payload are only Base64URL-encoded, not encrypted. Any party holding the JWT string can decode and read the claims. This is intentional: JWTs are designed to be readable by clients and servers alike. What only the issuing server can do is <em>verify</em> the signature, which is what proves the claims are authentic and unmodified.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What is the difference between decoding and verifying a JWT?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Decoding reads the Base64URL-encoded header and payload as JSON — no secret required. Verifying recomputes the HMAC or RSA signature from the header and payload using the server&apos;s secret key and confirms it matches the token&apos;s signature. A decoded JWT tells you what the claims <em>say</em>; a verified JWT tells you those claims are <em>authentic</em>. In a security context, never act on decoded claims alone — always verify first.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">What does the exp claim mean in a JWT?</h3>
            <p className="text-base text-muted-foreground mb-4">
              The <code className="font-mono text-sm bg-secondary/60 px-1 rounded">exp</code> (expiration time) claim is a Unix timestamp — the number of seconds since 1 January 1970 UTC — after which the token must not be accepted. When verifying a JWT, the server checks that the current time is before <code className="font-mono text-sm bg-secondary/60 px-1 rounded">exp</code>. If the token is expired, it must be rejected even if the signature is otherwise valid.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Is Base64URL the same as Base64?</h3>
            <p className="text-base text-muted-foreground mb-4">
              Base64URL is a URL-safe variant of standard Base64. It replaces <code className="font-mono text-sm bg-secondary/60 px-1 rounded">+</code> with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">-</code> and <code className="font-mono text-sm bg-secondary/60 px-1 rounded">/</code> with <code className="font-mono text-sm bg-secondary/60 px-1 rounded">_</code>, and omits trailing <code className="font-mono text-sm bg-secondary/60 px-1 rounded">=</code> padding. This makes JWT strings safe to embed in URLs and HTTP headers without percent-encoding. Use our{' '}
              <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder and Decoder</Link>{' '}
              to convert between standard Base64 and raw bytes.
            </p>

            {/* ── CTA / Related ── */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Tools and Guides</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>
                <Link href="/tools/base64-encoder-decoder" className="text-primary hover:underline">Base64 Encoder and Decoder</Link>{' '}
                — decode the Base64URL segments of any JWT manually
              </li>
              <li>
                <Link href="/tools/saml-encoder" className="text-primary hover:underline">SAML Encoder / Decoder</Link>{' '}
                — SAML assertions use Base64 encoding similarly to JWT; decode SAML responses online
              </li>
              <li>
                <Link href="/tools/online-url-decoder-encoder" className="text-primary hover:underline">URL Decoder and Encoder</Link>{' '}
                — decode percent-encoded JWTs when they appear in URL query strings
              </li>
            </ul>

          </div>
        </article>
      </main>
    </>
  )
}
