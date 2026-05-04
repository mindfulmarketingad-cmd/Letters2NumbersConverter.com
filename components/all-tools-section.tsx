"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tools = [
  {
    title: "Letters to Numbers Converter",
    description: "Convert letters to numbers (A=1, B=2...Z=26) with A1Z26, ASCII, hex, and binary encoding.",
    href: "/",
    category: "Encoding"
  },
  {
    title: "NATO Phonetic Alphabet Translator",
    description: "Convert text to NATO/ICAO phonetic alphabet and other spelling alphabets.",
    href: "/tools/nato-phonetic-alphabet",
    category: "Encoding"
  },
  {
    title: "Phone Number Converter",
    description: "Convert vanity phone numbers like 1-800-FLOWERS to digits using the telephone keypad.",
    href: "/tools/letter-to-phone-number-converter",
    category: "Conversion"
  },
  {
    title: "Cipher Identifier",
    description: "Analyze encrypted text and identify the cipher or encoding type used.",
    href: "/tools/cipher-identifier",
    category: "Analysis"
  }
]

export function AllToolsSection() {
  return (
    <section className="mt-16 pt-10 border-t border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 id="all-tools" className="text-xl font-bold text-foreground">All Free Tools</h2>
        <Link href="/tools" className="text-sm text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium mb-2">
                {tool.category}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                {tool.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {tool.description}
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
          </Link>
        ))}
      </div>
    </section>
  )
}
