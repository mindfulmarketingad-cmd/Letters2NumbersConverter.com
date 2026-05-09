import { Metadata } from 'next'
import { BaconianCipher } from '@/components/baconian-cipher'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'

export const metadata: Metadata = {
  title: 'Baconian Cipher | Encode & Decode Text',
  description: 'Use the Baconian Cipher tool to encode messages using A/B patterns or decode A/B sequences back to plaintext. Support for original 24-letter alphabet and modern variants.',
  keywords: ['Baconian cipher', 'Baconian cipher encoder', 'Baconian cipher decoder', 'A/B cipher', 'classical cipher'],
  openGraph: {
    title: 'Baconian Cipher | Letters2NumbersConverter.com',
    description: 'Encode and decode text using the Baconian Cipher with A/B pattern support.',
    type: 'website',
    url: 'https://www.letters2numbersconverter.com/tools/baconian-cipher',
  },
  alternates: {
    canonical: 'https://www.letters2numbersconverter.com/tools/baconian-cipher',
  },
}

const toolData: ToolData = getToolData('baconian-cipher')

export default function BaconianCipherPage() {
  return (
    <ToolPageWrapper toolSlug="baconian-cipher">
      <ToolLayout
        toolId="baconian-cipher"
        toolName="Baconian Cipher"
        toolDescription="The Baconian Cipher is a classic encoding method that represents each letter as a sequence of A and B characters. This tool allows you to encode plaintext messages into A/B patterns or decode A/B sequences back to readable text. Perfect for cryptography enthusiasts, puzzle solvers, and security professionals."
        toolComponent={<BaconianCipher />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
