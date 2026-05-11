import { Metadata } from "next"
import { MedicarePrefixConverter } from "@/components/medicare-prefix-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"

export const metadata: Metadata = {
  title: "Medicare Prefix Converter - Decode Medicare ID Prefixes",
  description: "Free Medicare prefix converter to identify and decode Medicare prefixes (A-T letters). Understand what each Medicare prefix means, beneficiary types, and eligibility information with our easy-to-use converter tool.",
  keywords: [
    "medicare prefix converter",
    "medicare prefix decoder",
    "medicare ID prefix",
    "medicare letter codes",
    "beneficiary type code",
    "medicare identification prefix",
    "health insurance prefix",
    "social security medicare",
    "medicare coverage type",
    "insurance prefix meaning"
  ],
  openGraph: {
    title: "Medicare Prefix Converter - Decode Medicare ID Prefixes",
    description: "Convert and identify Medicare prefixes with our free online tool. Understand beneficiary types and coverage eligibility.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/medicare-prefix-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/medicare-prefix-converter",
  },
}

const toolData: ToolData = {
  howItWorks: "Our medicare prefix converter helps you decode and understand the letter prefixes used on Medicare identification cards. Medicare prefixes are single letters (A through T) that indicate the beneficiary's relationship to Social Security benefits and their type of Medicare coverage. Simply enter a single letter or select from our comprehensive reference chart, and the medicare prefix converter instantly displays the beneficiary type, meaning, and detailed description. Use this tool to understand eligibility status, coverage types, and relationship categories for Medicare benefits.",
  features: [
    "Convert single Medicare prefix letters instantly",
    "Medicare prefix decoder with comprehensive reference",
    "Identifies beneficiary type from prefix letter",
    "Displays coverage eligibility information",
    "Social Security relationship identification",
    "Full descriptive information for each prefix",
    "Interactive reference chart with all Medicare prefixes",
    "Click-to-select from prefix chart",
    "Copy beneficiary type information to clipboard",
    "Works offline - no personal data transmission",
    "Covers all standard Medicare prefix codes (A-T)",
    "Includes retired workers, spouses, children, and special categories"
  ],
  whoIsItFor: [
    {
      title: "Medicare Beneficiaries",
      description: "Understand what your Medicare prefix letter means and verify your coverage type and eligibility status using our medicare prefix converter."
    },
    {
      title: "Healthcare Providers & Medical Office Staff",
      description: "Quickly decode Medicare prefixes when verifying patient insurance coverage and eligibility using the medicare prefix converter."
    },
    {
      title: "Insurance & Benefits Specialists",
      description: "Use the medicare prefix converter to identify beneficiary types and coverage categories for claims processing and insurance verification."
    },
    {
      title: "Social Security & Medicare Employees",
      description: "Reference tool for customer service representatives explaining Medicare coverage types and prefix meanings with our medicare prefix converter."
    },
    {
      title: "Caregivers & Family Members",
      description: "Understand a loved one's Medicare coverage type and beneficiary status using the medicare prefix converter."
    },
    {
      title: "Seniors & Retirees",
      description: "Learn about Medicare coverage categories and understand your own Medicare prefix letter with our easy-to-use medicare prefix converter."
    }
  ]
}

export default function MedicarePrefixConverterPage() {
  return (
    <ToolPageWrapper toolSlug="medicare-prefix-converter">
      <ToolLayout
        toolId="medicare-prefix-converter"
        toolName="Medicare Prefix Converter"
        toolDescription="Free Medicare prefix converter tool for decoding Medicare ID prefix letters. Identify beneficiary types, coverage eligibility, and Social Security relationships. Understand what A-T Medicare prefixes mean for coverage, enrollment status, and benefits eligibility with our comprehensive reference guide."
        toolComponent={<MedicarePrefixConverter />}
        toolData={toolData}
      />
    </ToolPageWrapper>
  )
}
