'use client'

import type { Metadata } from 'next'
import { ToolLayout } from '@/components/tool-layout'
import { TCGProxyCreator } from '@/components/tcg-proxy-creator'

export default function TCGProxyCreatorPage() {
  return (
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
  )
}
