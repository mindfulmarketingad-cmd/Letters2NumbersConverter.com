import { Metadata } from "next"
import { CamelCaseConverter } from "@/components/camel-case-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Camel Case Converter",
  description: "Camel Case Converter - Convert any text to camelCase or PascalCase format instantly. Supports snake_case, kebab-case, space-separated text, and batch processing for multiple lines.",
  keywords: ["camel case converter", "camelCase", "PascalCase", "text converter", "snake case to camel case", "kebab case converter"],
  openGraph: {
    title: "Camel Case Converter",
    description: "Free online Camel Case Converter - Transform text to camelCase or PascalCase with real-time conversion.",
    type: "website",
  },
}

const toolData: ToolData = {
  howItWorks: "Enter text in any format (spaces, hyphens, underscores) and select your target format: camelCase, PascalCase, snake_case, or kebab-case. The tool instantly converts and preserves word boundaries intelligently.",
  features: [
    "Convert to camelCase, PascalCase, snake_case, kebab-case",
    "Bidirectional conversion between formats",
    "Batch processing multiple lines",
    "Preserve word boundaries",
    "Remove special characters intelligently",
    "Copy results instantly",
    "Support for common programming conventions",
    "Real-time live preview"
  ],
  whoIsItFor: [
    {
      title: "Developers",
      description: "Converting between naming conventions in code (variables, functions, classes)"
    },
    {
      title: "Technical Writers",
      description: "Formatting variable and function names consistently in documentation"
    },
    {
      title: "Data Scientists",
      description: "Standardizing column names and variable names in datasets"
    },
  ]
}

export default function CamelCaseConverterPage() {
  return (
    <ToolPageWrapper toolSlug="camel-case-converter">
      <ToolLayout
        toolId="camel-case-converter"
        toolName="Camel Case Converter"
        toolDescription="Convert text to camelCase, PascalCase, snake_case, kebab-case and other formats. Supports batch processing of multiple lines and various input formats for developers and content creators."
        toolComponent={<CamelCaseConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
