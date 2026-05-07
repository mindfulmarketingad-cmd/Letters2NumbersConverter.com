import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EnigmaMachineEmulator } from "@/components/enigma-machine-emulator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"

export const metadata: Metadata = {
  title: "Enigma Machine Emulator",
  description: "Simulate the historical Enigma machine cipher device",
  keywords: [],
  openGraph: {
    title: "Enigma Machine Emulator",
    description: "Simulate the historical Enigma machine cipher device",
    type: "website",
  },
}


const toolData: ToolData = getToolData("enigma-machine-emulator")

export default function EnigmaMachineEmulatorPage() {
  return (
    <ToolLayout
      toolId="enigma-machine-emulator"
      toolName="Enigma Machine Emulator"
      toolDescription="Simulate the historical Enigma machine cipher device"
      toolComponent={<EnigmaMachineEmulator />}
      toolData={toolData}
    />
  )
}
