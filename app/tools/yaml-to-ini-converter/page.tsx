import { Metadata } from "next"
import { YamlIniConverter } from "@/components/yaml-ini-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

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

const toolData: ToolData = {
  howItWorks: "Paste your YAML configuration file or INI format file into the left panel. The tool instantly converts between formats, automatically detecting the input type. Download the converted file or copy to clipboard.",
  features: [
    "YAML to INI bidirectional conversion",
    "Automatic format detection",
    "Hierarchy and nested structure preservation",
    "Comment preservation during conversion",
    "Format validation and error detection",
    "Download converted file",
    "Copy to clipboard functionality",
    "Support for complex configuration structures"
  ],
  whoIsItFor: [
    {
      title: "DevOps Engineers",
      description: "Converting configuration file formats across different deployment systems"
    },
    {
      title: "System Administrators",
      description: "Migrating configuration systems and standardizing config file formats"
    },
    {
      title: "Developers",
      description: "Working across different configuration standards in various frameworks and tools"
    },
  ]
}

export default function YamlToIniConverterPage() {
  return (
    <ToolLayout
      toolId="yaml-to-ini-converter"
      toolName="YAML to INI Converter"
      toolDescription="Free online tool to convert between YAML and INI configuration file formats. Supports bidirectional conversion for developers and system administrators working with different configuration file standards."
      toolComponent={<YamlIniConverter />}
      toolData={toolData}
    />
  )
}
