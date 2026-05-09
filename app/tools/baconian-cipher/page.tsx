import { Metadata } from 'next'
import { BaconianCipher } from '@/components/baconian-cipher'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { ToolLayout } from '@/components/tool-layout'
import { getToolData } from '@/lib/tool-data'
import { toolRegistry } from '@/lib/tool-registry'

export const metadata: Metadata = {
  title: 'Baconian Cipher | Encode & Decode Text',
  description: 'Use the Baconian Cipher tool to encode messages using A/B patterns or decode encrypted text. Supports multiple versions and formats.',
  openGraph: {
    title: 'Baconian Cipher Encoder & Decoder',
    description: 'Encrypt and decrypt text using the Baconian Cipher - a substitution cipher using binary patterns.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baconian Cipher Tool',
    description: 'Free online Baconian Cipher encoder and decoder',
  },
}

export default function BaconianCipherPage() {
  const toolData = getToolData('baconian-cipher', toolRegistry)

  return (
    <ToolPageWrapper toolId="baconian-cipher">
      <ToolLayout tool={toolData}>
        <BaconianCipher />
      </ToolLayout>
    </ToolPageWrapper>
  )
}
