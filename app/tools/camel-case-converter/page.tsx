import { Metadata } from "next"
import { CamelCaseConverter } from "@/components/camel-case-converter"
import { ToolLayout } from "@/components/tool-layout"

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

export default function CamelCaseConverterPage() {
  return (
    <ToolLayout
      toolId="camel-case-converter"
      toolName="Camel Case Converter"
      toolDescription="Convert text to camelCase, PascalCase, snake_case, kebab-case and other formats. Supports batch processing of multiple lines and various input formats for developers and content creators."
      toolComponent={<CamelCaseConverter />}
    />
  )
}
