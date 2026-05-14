import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { GradientFromImage } from '@/components/gradient-from-image'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/gradient-maker-from-image`

export const metadata: Metadata = {
  title: 'Gradient Maker from Image — Extract Color Palette & CSS Free Online',
  description: 'Free gradient maker from image. Upload any photo and instantly extract dominant colors, generate a CSS gradient, and download a color palette. No sign-up. Runs 100% in your browser.',
  keywords: [
    'gradient maker from image',
    'image to gradient',
    'extract gradient from image',
    'color palette from image',
    'image color extractor',
    'gradient generator from photo',
    'dominant color extractor',
    'css gradient from image',
    'photo to gradient',
    'color palette extractor',
    'image color palette generator',
    'extract colors from image',
    'gradient color picker from image',
    'image to css gradient',
    'online color extractor',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Gradient Maker from Image — Extract Colors & CSS Free Online',
    description: 'Upload any image and instantly extract dominant colors into a smooth CSS gradient. Supports linear, radial, and conic gradients. Copy CSS in one click.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Gradient Maker from Image — Free Online Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gradient Maker from Image — Extract Colors & CSS Free Online',
    description: 'Upload a photo and extract its dominant colors into a CSS gradient palette instantly. No sign-up required.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Gradient Maker from Image',
  'Free online gradient maker from image. Upload any photo or illustration and the tool extracts the dominant colors using k-means clustering on the Canvas API. It builds a smooth CSS gradient from those colors, generates discrete palette swatches, and gives you a one-click copy of the CSS gradient string and hex palette. Everything runs in your browser — no data is uploaded.',
  PAGE_URL,
  'DesignApplication'
)

const howToSchema = generateHowToSchema(
  'How to Make a Gradient from an Image',
  'Use our free Gradient Maker from Image to extract colors from any photo and generate a CSS gradient in seconds.',
  [
    { name: 'Upload your image', description: 'Drag and drop any JPEG, PNG, WebP, or GIF image onto the upload area, or click to browse your files. The image is processed entirely in your browser — nothing is uploaded to a server.' },
    { name: 'Choose how many colors to extract', description: 'Use the "Colors to extract" slider (2–8) to control how many dominant colors are pulled from the image. More colors give a richer gradient; fewer give a cleaner, simpler one.' },
    { name: 'Review the extracted color stops', description: 'The tool displays each extracted hex color as a swatch. Click any swatch to copy its hex code to your clipboard instantly.' },
    { name: 'Select gradient type and direction', description: 'Choose Linear, Radial, or Conic. For linear gradients, pick from the 8-direction compass (→, ↘, ↓, etc.) to set the angle.' },
    { name: 'Adjust palette swatches', description: 'Drag the Palette Swatches slider (3–12) to control how many discrete color steps are interpolated from your gradient — useful for Figma, Tailwind, or design system palettes.' },
    { name: 'Copy the CSS or hex palette', description: 'Click "Copy" next to the CSS output to copy the full background gradient string. Click "Copy" next to the Hex Palette to copy all swatch values as a comma-separated list. Paste directly into your stylesheet, Tailwind config, or design tool.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'How does the gradient maker extract colors from an image?',
    answer: 'The tool draws your image onto an HTML5 Canvas element, reads the raw pixel data using getImageData(), and runs a k-means clustering algorithm on those pixels. K-means groups similar colors together and finds the centroid (average color) of each group. Those centroids become the color stops in your gradient. The process runs entirely in JavaScript inside your browser — no image data is ever sent to a server.',
  },
  {
    question: 'What image formats are supported?',
    answer: 'The tool accepts any image format your browser can decode, including JPEG, PNG, WebP, GIF, and AVIF. It does not support vector formats like SVG or PDF. For best results, use photos with distinct color regions — landscapes, product shots, and artwork tend to produce the most visually appealing gradients.',
  },
  {
    question: 'What does the "colors to extract" slider do?',
    answer: 'This controls the number of clusters in the k-means algorithm, which directly determines how many color stops appear in your gradient. Setting it to 2 extracts just the two most dominant hues (great for simple two-color gradients). Setting it to 8 captures more subtle tones from the image. Values between 4 and 6 usually produce the most balanced gradients for typical photos.',
  },
  {
    question: 'Is my image uploaded to a server?',
    answer: 'No. The entire process — image loading, pixel sampling, k-means clustering, CSS generation — runs inside your browser using the Canvas API and JavaScript. Your image is never sent to any external server. The tool works even if you disconnect from the internet after the page has loaded.',
  },
  {
    question: 'What is the difference between linear, radial, and conic gradients?',
    answer: 'A linear gradient transitions colors along a straight line (e.g., left to right). A radial gradient starts at a center point and radiates outward in a circle. A conic gradient sweeps colors around a central point like a color wheel. All three are standard CSS gradient functions (linear-gradient, radial-gradient, conic-gradient) that work in all modern browsers.',
  },
  {
    question: 'Can I use the extracted palette in Figma or Tailwind?',
    answer: 'Yes. Click "Copy" next to the Hex Palette to copy all swatch hex values as a comma-separated list. You can paste these directly into a Tailwind theme extension under "colors" as an array. In Figma, create color styles manually using each hex value. The CSS output can also be pasted straight into a Tailwind arbitrary value or any CSS property that accepts a gradient function.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Gradient Maker from Image', url: PAGE_URL },
])

const toolData: ToolData = getToolData('gradient-maker-from-image')

export default function GradientMakerFromImagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="gradient-maker-from-image">
        <ToolLayout
          toolId="gradient-maker-from-image"
          toolName="Gradient Maker from Image"
          toolDescription="Our free Gradient Maker from Image extracts dominant colors from any photo or illustration and turns them into a smooth CSS gradient in seconds. Upload a JPEG, PNG, WebP, or GIF — the tool samples the pixel data directly in your browser using the Canvas API, runs k-means clustering to find the most representative colors, and arranges them into gradient color stops sorted by luminance for a natural visual flow. Choose between 2 and 8 colors to extract, then select Linear, Radial, or Conic gradient type. For linear gradients, an 8-direction compass controls the angle. The Palette Swatches panel generates 3–12 discrete hex colors interpolated from your gradient — perfect for exporting to Figma, Tailwind, or any design system. Copy the full CSS background string or the complete hex palette list in one click. Every step runs entirely offline in your browser; no image data is ever uploaded."
          toolComponent={<GradientFromImage />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
