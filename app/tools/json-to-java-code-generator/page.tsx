import { Metadata } from "next"
import { JsonToJavaGenerator } from "@/components/json-to-java-generator"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "JSON to Java Code Generator",
  description: "Generate Java code from JSON structure",
  keywords: [],
  openGraph: {
    title: "JSON to Java Code Generator",
    description: "Generate Java code from JSON structure",
    type: "website",
  },
}

export default function JsonToJavaGeneratorPage() {
  return (
    <ToolLayout
      toolId="json-to-java-code-generator"
      toolName="JSON to Java Code Generator"
      toolDescription="Generate Java code from JSON structure"
      toolComponent={<JsonToJavaGenerator />}
    />
  )
}
