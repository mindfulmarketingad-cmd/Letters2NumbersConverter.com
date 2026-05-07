import { Metadata } from "next"
import { PasswordStrengthTester } from "@/components/site-header"
import { ToolLayout } from "@/components/tool-layout"

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

export default function PAGEPassword Strength Tester() {
  return (
    <ToolLayout
      toolId="password-strength-tester"
      toolName="Password Strength Tester"
      toolDescription="Test and analyze password security"
      toolComponent={<PasswordStrengthTester />}
    />
  )
}
