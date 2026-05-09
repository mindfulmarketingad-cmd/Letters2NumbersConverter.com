import { Metadata } from 'next'
import { HtmlEncoderDecoder } from '@/components/html-encoder-decoder'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'HTML Encoder and Decoder | Instantly Encode/Decode HTML Entities',
  description: 'HTML Encoder and Decoder - Instantly encode and decode HTML entities. Free tool for web developers, content creators, and anyone working with HTML markup. Supports named and numeric entities.',
  keywords: ['HTML encoder', 'HTML decoder', 'HTML entity encoder', 'encode HTML', 'decode HTML', 'HTML entities', 'HTML encoding tool'],
  openGraph: {
    title: 'HTML Encoder and Decoder | Letters2NumbersConverter.com',
    description: 'Instantly encode and decode HTML entities with this free online tool.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/html-encoder-decoder',
    images: [
      {
        url: '/images/html-encoder-decoder-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'HTML Encoder and Decoder tool preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML Encoder and Decoder',
    description: 'Instantly encode and decode HTML entities.',
    images: ['/images/html-encoder-decoder-preview.jpg'],
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/html-encoder-decoder',
  },
}

const toolData: ToolData = getToolData('html-encoder-decoder')

export default function HtmlEncoderDecoderPage() {
  return (
    <ToolPageWrapper toolSlug="html-encoder-decoder">
      <ToolLayout
        toolId="html-encoder-decoder"
        toolName="HTML Encoder and Decoder"
        toolDescription="The HTML Encoder and Decoder is an essential tool for web developers, content creators, security professionals, and anyone working with HTML markup. This free online tool allows you to instantly encode special characters to safe HTML entities and decode HTML entities back to their original characters. With support for both named entities (like &amp;lt;, &amp;gt;, &amp;amp;) and numeric entities (like &#39;, &#x2F;), this tool ensures your code is properly formatted and safe for web publication. Perfect for preventing XSS attacks, displaying user-generated content safely, and preparing code for web deployment."
        toolComponent={<HtmlEncoderDecoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
