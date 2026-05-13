import { Metadata } from "next"
import { TextFrequencyAnalyzer } from "@/components/text-frequency-analyzer"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/text-frequency-analysis`

const toolSchema = generateToolPageSchema(
  "Text Frequency Analysis | Character & Word Counter",
  "Analyze text frequency with our free online Text Frequency Analysis tool. Count characters, words, and their frequencies instantly. Perfect for linguistic analysis, cryptography, and data science.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Text Frequency Analysis | Character & Word Counter", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Text Frequency Analysis | Character & Word Counter",
  description: "Analyze text frequency with our free online Text Frequency Analysis tool. Count characters, words, and their frequencies instantly. Perfect for linguistic analysis, cryptography, and data science.",
  keywords: ["text frequency analysis", "character frequency", "word frequency", "text analysis", "frequency counter", "character counter", "linguistic analysis"],
  openGraph: {
    title: "Text Frequency Analysis",
    description: "Analyze the frequency of characters and words in any text instantly",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Text Frequency Analysis | Character & Word Counter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Text Frequency Analysis | Character & Word Counter", description: "Analyze text frequency with our free online Text Frequency Analysis tool. Count characters, words, and their frequencies instantly. Perfect for linguistic analysis, cryptography, and data science.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = {
  howItWorks: "Paste or type your text into the left panel and select whether you want to analyze character or word frequency. The tool instantly calculates the occurrence of each character or word, displays them sorted by frequency, and shows percentages. You can toggle case sensitivity and ignore spaces for more detailed analysis. Results include total count, unique items, and the most frequent element.",
  features: [
    "Dual analysis modes: analyze by characters or by words",
    "Real-time frequency calculation as you type",
    "Case-sensitive and case-insensitive analysis options",
    "Option to ignore spaces in character analysis",
    "Detailed frequency table with counts and percentages",
    "Summary statistics showing total, unique, and most frequent items",
    "Copy results to clipboard with one click",
    "Download analysis results as CSV for spreadsheet use",
    "Visual indicators for special characters (spaces, newlines)",
    "Works completely offline - no data sent to servers"
  ],
  whoIsItFor: [
    {
      title: "Linguists & Language Researchers",
      description: "Analyze text patterns and language frequencies for academic research and linguistic studies"
    },
    {
      title: "Cryptography Enthusiasts",
      description: "Perform frequency analysis on ciphered text to identify patterns and assist in breaking substitution ciphers"
    },
    {
      title: "Data Scientists & Analysts",
      description: "Explore text data patterns, identify common terms, and prepare data for natural language processing"
    },
    {
      title: "Content Writers & SEO Professionals",
      description: "Optimize keyword usage, analyze readability, and ensure balanced content distribution across topics"
    },
    {
      title: "Students & Educators",
      description: "Learn about statistical analysis, text patterns, and data visualization through hands-on text analysis"
    },
    {
      title: "Puzzle Solvers & Cryptogram Enthusiasts",
      description: "Decode cryptograms by analyzing character frequency patterns and solving text-based puzzles"
    }
  ]
}

export default function TextFrequencyAnalysisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="text-frequency-analysis">
      <ToolLayout
        toolId="text-frequency-analysis"
        toolName="Text Frequency Analysis"
        toolDescription="Analyze text frequency with our free online tool. Count character and word frequencies instantly with case sensitivity options, download results as CSV, and gain insights into text patterns. Perfect for linguistic analysis, cryptography, and data science research."
        toolComponent={<TextFrequencyAnalyzer />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
