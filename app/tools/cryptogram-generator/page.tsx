import CryptogramGenerator from "@/components/cryptogram-generator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cryptogram Generator | Create & Share Puzzle Cryptograms",
  description: "Free cryptogram generator to create custom puzzle cryptograms. Use famous quotes or custom text with adjustable difficulty levels. Share cryptograms with friends instantly.",
  keywords: ["cryptogram generator", "cryptogram puzzle", "cryptogram maker", "cipher puzzle generator", "substitution cipher"],
  openGraph: {
    title: "Cryptogram Generator | Create & Share Puzzle Cryptograms",
    description: "Create and share custom cryptogram puzzles with adjustable difficulty levels.",
    url: "https://www.letters2numbersconverter.com/tools/cryptogram-generator",
    type: "website",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/cryptogram-generator",
  },
}

export default function CryptogramGeneratorPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 py-12">
        <CryptogramGenerator />
      </main>
    </div>
  )
}
