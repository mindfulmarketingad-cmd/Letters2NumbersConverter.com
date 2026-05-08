import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { JsonToJavaGenerator } from "@/components/json-to-java-generator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

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


const toolData: ToolData = getToolData("json-to-java-code-generator")

export default function JsonToJavaGeneratorPage() {
  return (
    <ToolPageWrapper toolSlug="json-to-java-code-generator">
    <ToolLayout
      toolId="json-to-java-code-generator"
      toolName="JSON to Java Code Generator"
      toolDescription="Generate Java code from JSON structure"
      toolComponent={<JsonToJavaGenerator />}
      toolData={toolData}
    />
    </ToolPageWrapper>
  )
}
