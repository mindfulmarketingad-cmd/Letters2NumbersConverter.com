import { Metadata } from "next"
import { PlaceholderImageCreator } from "@/components/placeholder-image-creator"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Placeholder Image Creator | Letters2NumbersConverter.com",
  description: "Placeholder Image Creator - Generate custom placeholder images with custom dimensions, text, colors, and fonts. Download or get Data URI for direct embedding.",
  keywords: [
    "placeholder image creator",
    "image generator",
    "placeholder image generator",
    "create placeholder images",
    "image creation tool",
    "web design placeholder",
    "mockup image generator",
    "image data URI"
  ],
  openGraph: {
    title: "Placeholder Image Creator",
    description: "Generate custom placeholder images with text, colors, and download options",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/placeholder-image-creator",
  images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'Placeholder Image Creator | Letters2NumbersConverter.com' }],
    },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/placeholder-image-creator",
  },
}

export default function PlaceholderImageCreatorPage() {
  const toolData = getToolData('placeholder-image-creator')

  return (
    <ToolPageWrapper toolSlug="placeholder-image-creator">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Placeholder Image Creator",
            "description": "Create custom placeholder images with specific dimensions, text, colors, and fonts. Download as PNG, JPG, or WebP or copy as Data URI.",
            "url": "https://www.letters2numbersconverter.com/tools/placeholder-image-creator",
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
        toolId="placeholder-image-creator"
        toolName="Placeholder Image Creator"
        toolDescription="Placeholder Image Creator - Create custom placeholder images with any dimensions, custom text, colors, and fonts. Download your generated images in PNG, JPG, or WebP format, or copy the Data URI for direct embedding in HTML and CSS. Perfect for web designers, developers, and mockup creation."
        toolComponent={<PlaceholderImageCreator />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
