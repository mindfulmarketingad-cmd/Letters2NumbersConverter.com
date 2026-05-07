import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { TapcodeTranslator } from "@/components/tapcode-translator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Instant Tapcode Translator | Letters2NumbersConverter.com",
  description: "Tapcode Translator - Convert messages to tap code patterns. Learn about this covert communication method used in POW camps. Encode/decode with dots, numbers, or knocks. Free online tool.",
  keywords: ["tapcode translator", "tap code encoder", "knock code", "Smitty code", "POW communication", "covert code"],
  openGraph: {
    title: "Tapcode Translator",
    description: "Convert messages to tap code using the 5x5 grid cipher. Instant translation with multiple code formats.",
    type: "website",
  },
}


const toolData: ToolData = getToolData("tapcode-translator")

export default function TapcodePage() {
  return (
    <ToolLayout
      toolId="tapcode-translator"
      toolName="Tapcode Translator"
      toolDescription="Convert your messages into rhythmic tap patterns using the tap code system. This simple yet effective communication method uses a 5×5 grid and was historically used by POW prisoners during the Vietnam War."
      toolComponent={<TapcodeTranslator />}
      toolData={toolData}
    />
  )
}
