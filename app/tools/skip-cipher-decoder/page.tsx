import { Metadata } from 'next'
import { SkipCipherDecoder } from '@/components/skip-cipher-decoder'

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

export default function SkipCipherDecoderPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tool */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/30 rounded-lg border border-border p-6 md:p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skip Cipher Decoder</h1>
              <p className="text-lg text-muted-foreground mb-6">
                The Skip Cipher Decoder is a powerful tool designed to decrypt messages encoded with skip cipher (also known as jump cipher) encryption instantly.
              </p>
              <SkipCipherDecoder />
            </div>
          </div>

          {/* Info Column */}
          <div className="space-y-6">
            {/* How It Works */}
            <div className="bg-secondary/30 rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">How It Works</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Automatic Mode:</strong> Our brute force algorithm tests all possible skip sizes and starting positions to find the original message.
                </p>
                <p>
                  <strong className="text-foreground">Manual Mode:</strong> If you know the cipher parameters, enter the skip size and starting position directly.
                </p>
                <p>
                  <strong className="text-foreground">Fast & Private:</strong> All decryption happens in your browser. Your data is never sent to any server.
                </p>
              </div>
            </div>

            {/* Who Uses It */}
            <div className="bg-secondary/30 rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">Perfect For</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Puzzle enthusiasts solving coded messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Cryptography students learning transposition ciphers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Security professionals testing cipher strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>Game players finding hidden messages</span>
                </li>
              </ul>
            </div>

            {/* About Skip Cipher */}
            <div className="bg-secondary/30 rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">About Skip Cipher</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Skip Cipher is a transposition cipher that extracts characters at regular intervals from the plaintext. It&apos;s defined by:
              </p>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>
                  <strong>Skip Size:</strong> The interval between extracted characters
                </li>
                <li>
                  <strong>Start Position:</strong> Where to begin extraction (typically 1)
                </li>
              </ul>
            </div>

            {/* Related Tools */}
            <div className="bg-secondary/30 rounded-lg border border-border p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">Related Tools</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/tools/skip-cipher" className="text-amber-600 hover:underline font-medium">
                    Skip Cipher Encoder
                  </a>
                </li>
                <li>
                  <a href="/tools/a1z26-translator" className="text-amber-600 hover:underline font-medium">
                    A1Z26 Translator
                  </a>
                </li>
                <li>
                  <a href="/tools/baconian-cipher" className="text-amber-600 hover:underline font-medium">
                    Baconian Cipher Tool
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
