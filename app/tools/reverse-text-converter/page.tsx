import { Metadata } from 'next'
import { ReverseTextConverter } from '@/components/reverse-text-converter'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export async function generateMetadata(): Promise<Metadata> {
  const toolData = getToolData('reverse-text-converter')
  
  return {
    title: 'Reverse Text Converter',
    description: 'Free online Reverse Text Converter tool. Instantly reverse any text, strings, or messages. Perfect for coding, cryptography, palindromes, and text manipulation.',
    keywords: ['reverse text', 'text reverser', 'reverse string', 'online converter', 'free tool'],
    openGraph: {
      title: 'Reverse Text Converter​ Online Free',
      description: 'Reverse any text instantly with our free online tool. No installation required, works in your browser.',
      type: 'website',
      images: [
        {
          url: '/images/reverse-text-converter-preview.jpg',
          width: 1200,
          height: 630,
          alt: 'Reverse Text Converter tool preview',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Reverse Text Converter​ Online Free',
      description: 'Reverse any text instantly with our free online tool.',
      images: ['/images/reverse-text-converter-preview.jpg'],
    },
  }
}

export default function ReverseTextConverterPage() {
  const toolData = getToolData('reverse-text-converter')

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Reverse Text Converter',
    description: 'Free online Reverse Text Converter tool to instantly reverse any text, strings, or messages online.',
    url: 'https://letters2numbersconverter.com/tools/reverse-text-converter',
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Letters2Numbers Converter',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __stringify: JSON.stringify(schema) }}
      />
      <ToolPageWrapper toolName="Reverse Text Converter" toolId="reverse-text-converter">
        <ToolLayout
          toolName="Reverse Text Converter"
          toolDescription="A Reverse Text Converter is designed to instantly reverse any text, string, or message character by character. Whether you need to create palindromes, work with backward text, or prepare content for special formatting, this tool makes it simple."
          tool={<ReverseTextConverter />}
          relatedTools={['base64-encoder', 'letters-to-numbers-converter', 'morse-code-translator']}
        />
      </ToolPageWrapper>
    </>
  )
}
