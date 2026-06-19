import type { Metadata } from 'next'
import { ToolLayout } from '@/components/tool-layout'
import { TCGProxyCreator } from '@/components/tcg-proxy-creator'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/tcg-proxy-creator`

export const metadata: Metadata = {
  title: { absolute: 'TCG Proxy Creator — Print Proxy Cards for MTG, Pokémon & Yu-Gi-Oh!' },
  description:
    'Free TCG proxy creator. Design and print proxy card sheets for Magic: The Gathering, Pokémon, and Yu-Gi-Oh! with adjustable spacing and 300–600 DPI print quality. Browser-based, no sign-up.',
  keywords: [
    'tcg proxy creator',
    'proxy card maker',
    'mtg proxy generator',
    'pokemon proxy cards',
    'yugioh proxy printer',
    'print proxy cards',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'TCG Proxy Creator — Print Proxy Cards for MTG, Pokémon & Yu-Gi-Oh!',
    description:
      'Design and print proxy card sheets for MTG, Pokémon, and Yu-Gi-Oh! with adjustable spacing and high-DPI print quality. Free and browser-based.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'TCG Proxy Creator' }],
  },
  robots: { index: true, follow: true },
}

const toolSchema = generateToolPageSchema(
  'TCG Proxy Creator',
  'Free TCG proxy creator. Design and print proxy card sheets for Magic: The Gathering, Pokémon, and Yu-Gi-Oh! with adjustable spacing and high print quality.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'TCG Proxy Creator', url: PAGE_URL },
])

export default function TCGProxyCreatorPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <ToolLayout
      toolId="tcg-proxy-creator"
      toolName="TCG Proxy Creator"
      toolDescription="TCG Proxy Creator is a free online tool for creating trading card game proxy cards. Design and print professional proxy sheets for Yu-Gi-Oh!, Pokémon, MTG, and other TCGs with custom spacing and quality settings."
      toolComponent={<TCGProxyCreator />}
      toolData={{
        howItWorks:
          'Select your card type (Yu-Gi-Oh!, Pokémon, MTG), choose quality and spacing settings, upload card images to the 6-card grid, and download your proxy sheet as a high-resolution PNG ready for printing.',
        features: [
          'Multiple card game formats (Yu-Gi-Oh!, Pokémon, MTG)',
          'Adjustable card spacing (0-20mm)',
          'High-quality output (300-600 DPI)',
          'CMYK color conversion for print accuracy',
          'Drag-and-drop image upload',
          'Real-time preview grid',
          'Download as high-resolution PNG',
          'Works entirely in your browser',
          'No registration required',
          'Batch print support (6 cards per sheet)',
        ],
        whoIsItFor: [
          {
            title: 'TCG Collectors & Players',
            description:
              'Create proxy cards for testing deck builds, playtesting rare cards, or proxy copies of expensive cards before purchasing originals.',
          },
          {
            title: 'Game Store Owners',
            description:
              'Generate proxy sheets for in-store events, tournaments, and promotional demonstrations without handling expensive original cards.',
          },
          {
            title: 'Content Creators',
            description:
              'Design and print custom proxy cards for YouTube videos, Twitch streams, and educational TCG content production.',
          },
          {
            title: 'Casual Gamers',
            description:
              'Create affordable playsets of proxy cards for casual gaming, house rules testing, and homebrew card design projects.',
          },
          {
            title: 'Print Services',
            description:
              'Generate professional proxy sheets with proper DPI and CMYK conversion for high-quality commercial printing.',
          },
        ],
      }}
    />
    </>
  )
}
