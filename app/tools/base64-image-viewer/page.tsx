import { Metadata } from "next"
import { Base64ImageViewer } from "@/components/base64-image-viewer"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"

export const metadata: Metadata = {
  title: "Base64 Image Viewer | Letters2NumbersConverter.com",
  description: "Base64 Image Viewer - Instantly decode and display base64-encoded images. Paste your base64 string and view the image preview in real-time. Supports PNG, JPEG, GIF, SVG, and WebP formats.",
  keywords: [
    "base64 image viewer",
    "base64 decoder",
    "image decoder",
    "base64 to image",
    "view base64 images",
    "decode base64",
    "image converter",
    "base64 converter"
  ],
  openGraph: {
    title: "Base64 Image Viewer",
    description: "Decode and view base64-encoded images instantly with our free Base64 Image Viewer.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/base64-image-viewer",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/base64-image-viewer",
  },
}

export default function Base64ImageViewerPage() {
  const toolData = getToolData('base64-image-viewer')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Base64 Image Viewer",
            "description": "Decode and view base64-encoded images instantly. Paste your base64 string and view the image preview in real-time.",
            "url": "https://www.letters2numbersconverter.com/tools/base64-image-viewer",
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
    <ToolPageWrapper toolSlug="base64-image-viewer">
      <ToolLayout
        toolId="base64-image-viewer"
        toolName="Base64 Image Viewer"
        toolDescription="Base64 Image Viewer - Instantly decode and display base64-encoded images. Paste your base64 image string below and view the decoded image in real-time. Perfect for developers, designers, and anyone working with encoded image data from APIs, databases, or embedded images in code."
        toolComponent={<Base64ImageViewer />}
        toolData={toolData}
      />
    </>
  )
}
