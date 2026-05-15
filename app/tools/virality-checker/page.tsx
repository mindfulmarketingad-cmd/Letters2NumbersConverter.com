import { Metadata } from "next"
import { ViralityChecker } from "@/components/virality-checker"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/virality-checker`

const toolSchema = generateToolPageSchema(
  "Virality Checker",
  "Predict your content's viral potential with AI-powered scoring across hook strength, emotional power, shareability, trending potential, and engagement — free and instant.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Virality Checker', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Virality Checker" },
  description: "Free virality checker that scores your social media posts, headlines, captions, and scripts across 5 key dimensions. Get an instant virality score from 0–100 with actionable improvement tips.",
  keywords: [
    "virality checker",
    "viral content checker",
    "virality score",
    "viral post checker",
    "content virality score",
    "social media virality",
    "hook strength checker",
    "viral potential",
    "shareability score",
  ],
  openGraph: {
    title: "Virality Checker",
    description: "Score your content's viral potential across hook strength, emotion, shareability, and more. Free and instant.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Virality Checker" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: "Virality Checker",
    description: "Free virality checker — get your content's viral score across 5 dimensions instantly.",
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData: ToolData = {
  howItWorks: "Select your target platform (TikTok, Instagram, LinkedIn, X, YouTube, or Blog), then paste your headline, caption, script, or social media post into the editor. Click Check Virality Score and the tool analyses your text across five dimensions — Hook Strength, Emotional Power, Shareability, Trending Potential, and Engagement — and combines them into a single Virality Score from 0 to 100. Each dimension is shown as a colour-coded bar alongside a clear label (Low to Viral), and the panel includes up to four specific improvement tips so you know exactly what to fix.",
  features: [
    "Overall Virality Score from 0–100 with a circular progress display",
    "5 scored dimensions: Hook Strength, Emotional Power, Shareability, Trending Potential, Engagement",
    "Platform-aware scoring — calibrated separately for TikTok/Reels, Instagram, LinkedIn, X, YouTube, and Blog",
    "Up to 4 specific, actionable improvement tips per analysis",
    "Colour-coded score labels: Low / Fair / Good / Strong / Viral",
    "Sample texts for every platform to demonstrate the tool instantly",
    "Fully private — text never leaves your browser",
    "Word count tracker and re-analyse without clearing your text",
  ],
  whoIsItFor: [
    { title: 'Content Creators', description: 'Testing TikTok captions, Reels hooks, and YouTube scripts before hitting publish to maximise early engagement.' },
    { title: 'Social Media Managers', description: 'Scoring post copy across platforms and benchmarking virality before scheduling.' },
    { title: 'Copywriters & Marketers', description: 'Optimising headlines, email subjects, and ad copy for maximum share potential and emotional impact.' },
    { title: 'Bloggers & Journalists', description: 'Checking article titles and intros for hook strength and shareability before going live.' },
  ],
}

export default function ViralityCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="virality-checker">
        <ToolLayout
          toolId="virality-checker"
          toolName="Virality Checker"
          toolDescription="The Virality Checker scores any text — caption, headline, script, or social post — across five dimensions (Hook Strength, Emotional Power, Shareability, Trending Potential, and Engagement) and returns an overall Virality Score from 0 to 100. Select your platform, paste your content, and get instant feedback with specific tips to push your score higher before you publish."
          toolComponent={<ViralityChecker />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
