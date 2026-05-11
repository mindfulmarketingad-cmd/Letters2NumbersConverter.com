import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { SkipCipherDecoder } from '@/components/skip-cipher-decoder'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'

export const metadata: Metadata = {
  title: 'Skip Cipher Decoder | Letters2NumbersConverter.com',
  description:
    'Decode skip cipher messages instantly with automatic brute force or manual parameters. Crack jump cipher codes online.',
  keywords: [
    'skip cipher decoder',
    'jump cipher decoder',
    'cipher decoder',
    'transposition cipher',
    'decode messages',
    'crack cipher',
  ],
  openGraph: {
    title: 'Skip Cipher Decoder',
    description: 'Instantly decode skip cipher messages with automatic detection or manual parameters',
    type: 'website',
  },
}

const toolData: ToolData = getToolData('skip-cipher-decoder')

export default function SkipCipherDecoderPage() {
  return (
    <ToolPageWrapper toolSlug="skip-cipher-decoder">
      <ToolLayout
        toolId="skip-cipher-decoder"
        toolName="Skip Cipher Decoder"
        toolDescription="Decrypt skip cipher (jump cipher) messages with automatic brute force detection. Discover the correct skip size and starting position, or manually specify parameters for precise decryption of transposition cipher text."
        toolComponent={<SkipCipherDecoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
