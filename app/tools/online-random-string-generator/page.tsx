import type { Metadata } from 'next'
import { ToolLayout } from '@/components/tool-layout'
import { RandomStringGenerator } from '@/components/random-string-generator'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/online-random-string-generator`

export const metadata: Metadata = {
  title: { absolute: 'Random String Generator — Passwords, API Keys & Tokens (Free)' },
  description:
    'Free online random string generator. Create secure random strings, passwords, API keys, and tokens with custom length and character sets. Runs in your browser — nothing is uploaded.',
  keywords: [
    'random string generator',
    'random password generator',
    'api key generator',
    'random token generator',
    'secure string generator',
    'online random string',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Random String Generator — Passwords, API Keys & Tokens',
    description:
      'Generate secure random strings, passwords, API keys, and tokens with custom length and character sets. Free, private, browser-based.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Random String Generator' }],
  },
  robots: { index: true, follow: true },
}

const toolSchema = generateToolPageSchema(
  'Online Random String Generator',
  'Free online random string generator. Create secure random strings, passwords, API keys, and tokens with custom length and character sets.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Online Random String Generator', url: PAGE_URL },
])

export default function RandomStringGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolLayout
        toolId="online-random-string-generator"
        toolName="Online Random String Generator"
        toolDescription="Generate unlimited random strings with customizable characters, length, and formatting options. Perfect for passwords, API keys, testing, and more."
        toolComponent={<RandomStringGenerator />}
        toolData={{
          howItWorks: 'Select which character types to include (lowercase, uppercase, digits, symbols), set the number of strings and their length, choose your output format, and generate instantly.',
          features: [
            'Customize character sets (lowercase, uppercase, digits, symbols)',
            'Generate any number of random strings',
            'Adjustable string length (1-1000 characters)',
            'Multiple output formats (one line or separate lines)',
            'Custom separator support',
            'Copy, select, and download functionality',
            'Open results in new tab/window',
            'Browser-based - no server uploads',
            'Works offline - 100% private',
            'No file size limits',
          ],
          whoIsItFor: [
            {
              title: 'Developers & Programmers',
              description:
                'Generate random strings for testing, API keys, tokens, session IDs, and development purposes. Create test data sets quickly without external dependencies.',
            },
            {
              title: 'Security & IT Professionals',
              description:
                'Generate strong random passwords, salts, and cryptographic keys for security implementations and compliance testing.',
            },
            {
              title: 'Data Scientists & QA Engineers',
              description:
                'Create random test data for applications, databases, and quality assurance testing. Generate batches of random strings for bulk testing scenarios.',
            },
            {
              title: 'Content Creators & Marketers',
              description:
                'Generate unique coupon codes, promotional IDs, or random identifiers for campaigns and contests.',
            },
            {
              title: 'Students & Educators',
              description:
                'Learn about randomization, cryptography, and data generation. Use for computer science projects and algorithms education.',
            },
          ],
        }}
      />
    </>
  )
}
