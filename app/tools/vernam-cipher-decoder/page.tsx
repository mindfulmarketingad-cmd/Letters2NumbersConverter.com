import { Metadata } from "next"
import { VernamCipherDecoder } from "@/components/vernam-cipher-decoder"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Vernam Cipher Decoder | Letters2NumbersConverter.com",
  description: "Vernam Cipher Decoder - Decrypt Vernam (one-time pad) ciphertext with the original key. Supports Vigenere and XOR decryption modes for mathematically unbreakable cipher analysis.",
  keywords: [
    "vernam cipher decoder",
    "one-time pad decoder",
    "vernam cipher",
    "OTP decoder",
    "cipher decryption",
    "vigenere cipher",
    "XOR cipher decoder",
    "cryptography tool"
  ],
  openGraph: {
    title: "Vernam Cipher Decoder",
    description: "Decrypt Vernam (one-time pad) ciphertext with the original key. Supports Vigenere and XOR decryption modes.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/vernam-cipher-decoder",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/vernam-cipher-decoder",
  },
}

export default function VernamCipherDecoderPage() {
  const toolData = getToolData('vernam-cipher-decoder')

  return (
    <ToolPageWrapper toolSlug="vernam-cipher-decoder">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Vernam Cipher Decoder",
            "description": "Decrypt Vernam (one-time pad) ciphertext using the original encryption key. Supports both Vigenere and XOR decryption modes.",
            "url": "https://www.letters2numbersconverter.com/tools/vernam-cipher-decoder",
            "applicationCategory": "UtilityApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "author": {
              "@type": "Organization",
              "name": "Letters2Numbers Converter",
              "url": "https://www.letters2numbersconverter.com"
            }
          })
        }}
      />
      <ToolLayout
        toolId="vernam-cipher-decoder"
        toolName="Vernam Cipher Decoder"
        toolDescription="Vernam Cipher Decoder - Decrypt Vernam (one-time pad) ciphertext with the original key. This tool supports both Vigenere mode for alphabetic shift decryption and XOR mode for bitwise operations, providing mathematically unbreakable cipher decryption when used properly. All processing happens locally in your browser for maximum security."
        toolComponent={<VernamCipherDecoder />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
