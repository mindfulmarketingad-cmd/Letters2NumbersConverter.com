import { Metadata } from "next"
import { EnigmaMachineEmulator } from "@/components/enigmamachineemulator"
import { ToolLayout } from "@/components/tool-layout"

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

export default function EnigmaMachineEmulatorPage() {
  return (
    <ToolLayout
      toolId="enigma-machine-emulator"
      toolName="Enigma Machine Emulator"
      toolDescription="Simulate the historical Enigma machine cipher device"
      toolComponent={<EnigmaMachineEmulator />}
    />
  )
}
