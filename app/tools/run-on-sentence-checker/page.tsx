import { Metadata } from "next"
import { RunOnSentenceChecker } from "@/components/run-on-sentence-checker"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/run-on-sentence-checker`

const toolSchema = generateToolPageSchema(
  "Run On Sentence Checker",
  "Instantly detect run-on sentences, comma splices, and fused clauses in your text. Free browser-based grammar tool with fix suggestions.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Run On Sentence Checker', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Run On Sentence Checker" },
  description: "Free run on sentence checker that instantly detects comma splices and fused sentences in your text. Get clear explanations and fix suggestions for every issue found.",
  keywords: [
    "run on sentence checker",
    "run-on sentence detector",
    "comma splice checker",
    "fused sentence checker",
    "grammar checker",
    "sentence structure checker",
    "writing tool",
    "proofreading tool",
  ],
  openGraph: {
    title: "Run On Sentence Checker",
    description: "Instantly detect comma splices and run-on sentences with fix suggestions.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Run On Sentence Checker" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: "Run On Sentence Checker",
    description: "Free run on sentence checker — detect comma splices and fused sentences instantly.",
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: "Paste or type your text into the editor on the left. The checker scans every sentence in real time, detecting comma splices (two independent clauses joined by only a comma) and excessively long fused sentences. Each detected issue appears in the right panel with a badge, a quoted excerpt, a plain-English explanation of the problem, and three numbered suggestions for how to fix it. Use the arrow controls or the dot navigation to move through multiple issues.",
  features: [
    "Real-time run-on sentence detection as you type",
    "Comma splice detection with subject-verb pattern analysis",
    "Long/fused sentence detection for 45+ word sentences",
    "Numbered fix suggestions for every issue found",
    "Issue type badges: Comma Splice vs. Long Sentence",
    "Navigate multiple issues with arrow controls and dot indicators",
    "Sample text to demonstrate the tool instantly",
    "Word and character count in the footer",
    "Fully private — no text is ever sent to a server",
  ],
  whoIsItFor: [
    { title: 'Students', description: 'Catching run-on sentences in essays, reports, and assignments before submission.' },
    { title: 'ESL / EFL Learners', description: 'Learning the difference between independent clauses and how to punctuate them correctly.' },
    { title: 'Content Writers & Bloggers', description: 'Ensuring articles and blog posts are clear, readable, and grammatically sound.' },
    { title: 'Editors & Proofreaders', description: 'Quickly scanning client documents for structural sentence issues before final review.' },
  ],
}

export default function RunOnSentenceCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="run-on-sentence-checker">
        <ToolLayout
          toolId="run-on-sentence-checker"
          toolName="Run On Sentence Checker"
          toolDescription="The Run On Sentence Checker instantly flags comma splices and fused sentences in any text, showing exactly which sentences are problematic and giving you three concrete ways to fix each one. Paste your writing and get real-time feedback — no sign-up, no data sent to servers, completely free."
          toolComponent={<RunOnSentenceChecker />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
