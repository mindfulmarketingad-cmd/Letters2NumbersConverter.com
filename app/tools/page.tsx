import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ToolsSearchContainer } from "@/components/tools-search-container"
import { getToolRegistry } from "@/lib/tool-registry"

export const metadata: Metadata = {
  title: { absolute: "100+ Free Online Converter, Cipher & Encoding Tools" },
  description:
    "Browse 100+ free online tools — letters to numbers, A1Z26, ASCII, hex & binary converters, cipher decoders, Morse code, file and image utilities. No sign-up, runs in your browser.",
  keywords: [
    "free online tools",
    "letters to numbers converter",
    "cipher decoder",
    "encoding tools",
    "ascii converter",
    "morse code translator",
    "online converter tools",
  ],
  alternates: { canonical: "https://www.letters2numbersconverter.com/tools" },
  openGraph: {
    title: "100+ Free Online Converter, Cipher & Encoding Tools",
    description:
      "Letters to numbers, A1Z26, ASCII, hex, binary, cipher decoders, Morse code, and more — 100+ free browser-based tools, no sign-up.",
    url: "https://www.letters2numbersconverter.com/tools",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function ToolsPage() {
  const toolRegistry = getToolRegistry()

  // Convert registry format to tools format expected by ToolsSearchContainer
  const tools = toolRegistry.map(tool => ({
    title: tool.name,
    description: tool.description,
    href: tool.href,
    category: tool.category
  }))

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                100+ Free Online <span className="text-primary">Converter &amp; Cipher Tools</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of {tools.length}+ free encoding, decoding, and conversion tools — letters to numbers, A1Z26, ASCII, hex, binary, cipher decoders, and more. No signup required.
              </p>
            </div>

            {/* Search Component with Tools Grid */}
            <ToolsSearchContainer tools={tools} />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
