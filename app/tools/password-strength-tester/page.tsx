import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { PasswordStrengthTester } from "@/components/password-strength-tester"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Password Strength Tester",
  description: "Test and analyze password security",
  keywords: [],
  openGraph: {
    title: "Password Strength Tester",
    description: "Test and analyze password security",
    type: "website",
  },
}


const toolData: ToolData = getToolData("password-strength-tester")

export default function PasswordStrengthTesterPage() {
  return (
    <ToolLayout
      toolId="password-strength-tester"
      toolName="Password Strength Tester"
      toolDescription="Test and analyze password security"
      toolComponent={<PasswordStrengthTester />}
      toolData={toolData}
    />
  )
}
