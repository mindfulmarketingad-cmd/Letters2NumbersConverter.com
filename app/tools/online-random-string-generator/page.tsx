'use client'

import { ToolLayout } from '@/components/tool-layout'
import { RandomStringGenerator } from '@/components/random-string-generator'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

export default function RandomStringGeneratorPage() {
  return (
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
  )
}
