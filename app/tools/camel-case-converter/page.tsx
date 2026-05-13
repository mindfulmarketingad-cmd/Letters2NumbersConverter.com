import { Metadata } from "next"
import { CamelCaseConverter } from "@/components/camel-case-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/camel-case-converter`

const toolSchema = generateToolPageSchema(
  "Camel Case Converter - Convert to camelCase, PascalCase & More",
  "Free online Camel Case Converter tool. Convert text to camelCase, PascalCase, snake_case, kebab-case and other naming conventions. Supports batch processing, multiple formats, and is perfect for developers, programmers, and technical writers managing variable and function names.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Camel Case Converter - Convert to camelCase, PascalCase & More", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: "Camel Case Converter - Convert to camelCase, PascalCase & More",
  description: "Free online Camel Case Converter tool. Convert text to camelCase, PascalCase, snake_case, kebab-case and other naming conventions. Supports batch processing, multiple formats, and is perfect for developers, programmers, and technical writers managing variable and function names.",
  keywords: [
    "camel case converter",
    "camelCase converter",
    "PascalCase converter",
    "snake case to camel case",
    "kebab case converter",
    "text case converter",
    "naming convention converter",
    "camelCase to snake_case",
    "programming case converter",
    "code formatter",
    "text format converter",
    "variable name converter"
  ],
  openGraph: {
    title: "Camel Case Converter - Transform Text to camelCase Instantly",
    description: "Convert any text format to camelCase, PascalCase, snake_case, kebab-case and more. Free online camel case converter with batch processing support.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/camel-case-converter",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Camel Case Converter - Convert to camelCase, PascalCase & More" }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/camel-case-converter",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Camel Case Converter - Convert to camelCase, PascalCase & More", description: "Free online Camel Case Converter tool. Convert text to camelCase, PascalCase, snake_case, kebab-case and other naming conventions. Supports batch processing, multiple formats, and is perfect for devel", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = {
  howItWorks: "Our camel case converter transforms text between multiple naming conventions with a single click. Enter your text in any format—spaces, hyphens, underscores, or mixed case—and select your desired output format. The camelCase converter intelligently preserves word boundaries, removes special characters, and applies the correct casing pattern. You can convert to camelCase for variables, PascalCase for class names, snake_case for database columns, or kebab-case for URLs. Batch processing allows you to convert multiple lines simultaneously, making it perfect for renaming multiple variables or function names at once.",
  features: [
    "Convert text to camelCase naming convention",
    "Convert text to PascalCase format",
    "Convert text to snake_case for databases and APIs",
    "Convert text to kebab-case for URLs and CSS classes",
    "Convert UPPER_CASE, lower_case, and mixed formats",
    "Bidirectional conversion between all naming conventions",
    "Batch processing for converting multiple lines simultaneously",
    "Preserve word boundaries and meaning during conversion",
    "Intelligent removal of special characters",
    "Real-time live preview of camel case conversions",
    "Copy results to clipboard with one click",
    "Support for compound words and acronyms",
    "Undo and redo functionality for camel case changes",
    "Download converted text as file",
    "No character limit for camel case conversion",
  ],
  whoIsItFor: [
    {
      title: "Software Developers & Programmers",
      description: "Use the camel case converter to transform variable names, function names, and class names between camelCase, PascalCase, and snake_case conventions when working across different programming languages and coding standards."
    },
    {
      title: "Web Developers",
      description: "Convert text to kebab-case for CSS classes and URLs, or camelCase for JavaScript variables and React component props. The camel case converter streamlines naming convention transformations in web development."
    },
    {
      title: "Database Administrators & Data Engineers",
      description: "Convert column names and table identifiers to snake_case format using the camel case converter, ensuring consistency across database schemas and data pipelines."
    },
    {
      title: "Technical Writers & Documentation Specialists",
      description: "Maintain consistent formatting of variable names, function names, and code identifiers throughout technical documentation using the camel case converter for instant formatting."
    },
    {
      title: "API Developers",
      description: "Transform parameter names between camelCase and snake_case conventions to match API standards and ensure compatibility across REST APIs and different client libraries."
    },
    {
      title: "Code Refactoring Teams",
      description: "Efficiently rename multiple variables and functions during code refactoring projects using batch processing in the camel case converter for large-scale naming convention updates."
    },
  ]
}

export default function CamelCaseConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="camel-case-converter">
      <ToolLayout
        toolId="camel-case-converter"
        toolName="Camel Case Converter"
        toolDescription="Free Camel Case Converter tool for transforming text between camelCase, PascalCase, snake_case, kebab-case and other naming conventions. Convert variable names, function names, database columns, and URLs instantly. Perfect for developers, programmers, and technical writers who need to convert naming conventions quickly and accurately with batch processing support."
        toolComponent={<CamelCaseConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
    </>
  )
}
