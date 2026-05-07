import { Metadata } from "next"
import { YamlIniConverter } from "@/components/yaml-ini-converter"
import { ToolLayout } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "YAML to INI Converter",
  description: "YAML to INI Converter - Free online tool to transform YAML configuration files into INI format instantly. Supports bidirectional conversion for developers and system administrators.",
  keywords: ["YAML to INI converter", "INI converter", "YAML converter", "file format converter", "configuration converter", "online converter"],
  openGraph: {
    title: "YAML to INI Converter",
    description: "Convert YAML to INI format instantly with our free online converter. Perfect for developers managing configuration files.",
    type: "website",
  },
}

export default function YamlToIniConverterPage() {
  return (
    <ToolLayout
      toolId="yaml-to-ini-converter"
      toolName="YAML to INI Converter"
      toolDescription="Free online tool to convert between YAML and INI configuration file formats. Supports bidirectional conversion for developers and system administrators working with different configuration file standards."
      toolComponent={<YamlIniConverter />}
    />
  )
}
