import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { HackathonTeamNameGenerator } from "@/components/hackathon-team-name-generator"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/hackathon-team-name-generator`

const toolSchema = generateToolPageSchema(
  "Hackathon Team Name Generator",
  "Generate creative hackathon team names instantly. Choose from tech, space, nature, mythology, animal, and pun themes. Copy your favourite name with one click.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Hackathon Team Name Generator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Hackathon Team Name Generator — Creative Team Names for Hackers",
  description: "Generate cool hackathon team names instantly. Tech, space, nature, mythology, animal, and pun themes. Pick a name, copy it, and get back to building.",
  keywords: [
    "hackathon team name generator",
    "hackathon team names",
    "team name generator",
    "cool team names for hackathon",
    "creative team names",
    "tech team names",
    "coding team names",
    "random team name generator",
  ],
  openGraph: {
    title: "Hackathon Team Name Generator — Creative Team Names for Hackers",
    description: "Generate cool hackathon team names instantly. Choose your theme, generate a list, and copy your favourite name in one click.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Hackathon Team Name Generator" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: {
    card: 'summary_large_image',
    title: "Hackathon Team Name Generator",
    description: "Generate creative hackathon team names in seconds. Tech, space, nature, mythology, animal, and pun themes.",
    images: [`${BASE_URL}/og-image.png`],
  },
}

const toolData = getToolData("hackathon-team-name-generator")

export default function HackathonTeamNameGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="hackathon-team-name-generator">
        <ToolLayout
          toolId="hackathon-team-name-generator"
          toolName="Hackathon Team Name Generator"
          toolDescription="Generate creative team names for your next hackathon. Choose a theme — tech, space, nature, mythology, animals, or puns — set how many names you want, and instantly get a fresh list. Click any name to copy it."
          toolComponent={<HackathonTeamNameGenerator />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
