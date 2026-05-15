import { Metadata } from 'next'
import { getToolData } from '@/lib/tool-data'
import { GradientPaletteGenerator } from '@/components/gradient-palette-generator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateFAQSchema, generateHowToSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/gradient-palette-generator`

export const metadata: Metadata = {
  title: { absolute: "Gradient Palette Generator" },
  description: 'Free gradient palette generator. Create beautiful 4 color gradients with up to 6 color stops, linear/radial/conic types, and export CSS instantly. No sign-up. Works in your browser.',
  keywords: [
    'gradient palette generator',
    '4 color gradient generator',
    'gradient palette maker',
    'css gradient generator',
    'color gradient maker',
    'gradient color palette',
    'multi color gradient',
    'linear gradient generator',
    'radial gradient generator',
    'gradient color picker',
    'css gradient maker',
    'palette generator online',
    'color palette generator',
    'gradient generator free',
    'gradient maker online',
  ],
  authors: [{ name: 'Letters2NumbersConverter.com' }],
  openGraph: {
    title: 'Gradient Palette Generator — Free 4 Color Gradient Maker',
    description: 'Generate stunning multi-color gradient palettes and copy the CSS in one click. Supports linear, radial, and conic gradients with up to 6 color stops.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Gradient Palette Generator — Free Online Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gradient Palette Generator — Free 4 Color Gradient Maker',
    description: 'Create beautiful multi-color gradient palettes and export CSS instantly. No sign-up required.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolSchema = generateToolPageSchema(
  'Gradient Palette Generator',
  'Free online gradient palette generator. Create 4-color gradients with up to 6 color stops, choose linear, radial, or conic types, generate palette swatches, and export CSS instantly. Everything runs in your browser.',
  PAGE_URL,
  'DesignApplication'
)

const howToSchema = generateHowToSchema(
  'How to Generate a 4 Color Gradient Palette',
  'Use our free Gradient Palette Generator to build a multi-color gradient and export the CSS in under a minute.',
  [
    { name: 'Choose a preset or start from scratch', description: 'Click one of the 6 presets (Sunset, Ocean, Forest, Aurora, 4-Stop, Neon) to load a ready-made palette, or adjust the default 4-color gradient directly.' },
    { name: 'Edit your color stops', description: 'Click each color swatch to open the native color picker. Type a hex code directly, or drag the position slider to control where each color sits along the gradient (0–100%).' },
    { name: 'Add or remove stops', description: 'Click + to add a color stop (up to 6 total). The new stop is placed at the midpoint of the largest gap with an interpolated color. Click − to remove any stop (minimum 2 required).' },
    { name: 'Select gradient type and direction', description: 'Choose Linear, Radial, or Conic. For linear gradients, use the 8-point compass to set the direction (→, ↘, ↓, etc.).' },
    { name: 'Adjust palette swatches', description: 'Drag the Palette Swatches slider from 3 to 12 to control how many discrete color steps are generated from your gradient.' },
    { name: 'Copy CSS or hex palette', description: 'Click "Copy" next to the CSS output to copy the complete background gradient string. Click "Copy" next to the Hex Palette to copy all swatch hex values. Click any individual swatch to copy its hex code.' },
  ]
)

const faqSchema = generateFAQSchema([
  {
    question: 'What is a gradient palette generator?',
    answer: 'A gradient palette generator is a tool that lets you define multiple color stops along a gradient, preview the smooth color transition, and generate both a CSS gradient string and a set of discrete color swatches (a palette). Our tool supports 2–6 color stops and generates up to 12 palette swatches through linear interpolation in RGB color space.',
  },
  {
    question: 'How do I make a 4 color gradient?',
    answer: 'The tool loads with a 4-color gradient by default (purple → violet → pink → rose). You can edit each of the 4 color stops by clicking the swatch to open the color picker or typing a hex code. Adjust the position of each stop with the slider. The CSS and palette update in real time. If you need a fresh starting point, click the "4-Stop" preset.',
  },
  {
    question: 'What is the difference between linear, radial, and conic gradients?',
    answer: 'A linear gradient transitions colors along a straight line (e.g., left to right). A radial gradient starts at a center point and radiates outward in a circle. A conic gradient sweeps colors around a central point like a color wheel. All three are supported standard CSS gradient functions (linear-gradient, radial-gradient, conic-gradient) and work in all modern browsers.',
  },
  {
    question: 'How do I copy the CSS gradient to use in my project?',
    answer: 'Click the "Copy" button next to the CSS section. The full background property string (e.g., background: linear-gradient(90deg, #6366f1 0%, #d946ef 100%);) is copied to your clipboard. Paste it directly into your CSS file, Tailwind config, or CSS-in-JS style object.',
  },
  {
    question: 'What does the palette swatches slider do?',
    answer: 'The palette swatches slider controls how many discrete color steps are extracted from the gradient (3–12). Each step is calculated by interpolating between your color stops in RGB space. This gives you a set of evenly-spaced hex values you can use as a color palette in design tools like Figma, Sketch, or Adobe XD, or in code as an array of colors for data visualizations.',
  },
  {
    question: 'Is my data uploaded anywhere?',
    answer: 'No. All gradient calculations, color interpolation, and CSS generation happen entirely in your browser using JavaScript. No color data, images, or any other information is uploaded to a server. The tool works offline once the page has loaded.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Gradient Palette Generator', url: PAGE_URL },
])

const toolData: ToolData = getToolData('gradient-palette-generator')

export default function GradientPaletteGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="gradient-palette-generator">
        <ToolLayout
          toolId="gradient-palette-generator"
          toolName="Gradient Palette Generator"
          toolDescription="Our free Gradient Palette Generator creates stunning multi-color gradient palettes and exports ready-to-paste CSS in seconds. Add up to 6 color stops, drag position sliders to control the transition, and choose between linear, radial, and conic gradient types. For linear gradients, pick from 8 compass directions. The palette swatches panel generates 3–12 discrete hex colors extracted from your gradient through RGB interpolation — perfect for exporting to Figma, Tailwind, or any design system. Six curated presets (Sunset, Ocean, Forest, Aurora, 4-Stop, Neon) get you started instantly, and the randomizer generates fresh palettes on demand. Click any swatch to copy its hex value, copy the full CSS gradient string, or copy the complete hex palette list — all in one click, no sign-up required."
          toolComponent={<GradientPaletteGenerator />}
          toolData={toolData}
        />
      </ToolPageWrapper>
    </>
  )
}
