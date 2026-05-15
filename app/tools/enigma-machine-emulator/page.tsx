import { Metadata } from "next"
import { getToolData } from "@/lib/tool-data"
import { EnigmaMachineEmulator } from "@/components/enigma-machine-emulator"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/enigma-machine-emulator`

const toolSchema = generateToolPageSchema(
  "Enigma Machine Emulator",
  "Simulate the historical Enigma machine cipher device",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "Enigma Machine Emulator", url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Enigma Machine Emulator" },
  description: "Simulate the historical Enigma machine cipher device",
  keywords: [],
  openGraph: {
    title: "Enigma Machine Emulator",
    description: "Simulate the historical Enigma machine cipher device",
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "Enigma Machine Emulator" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "Enigma Machine Emulator", description: "Simulate the historical Enigma machine cipher device", images: [`${BASE_URL}/og-image.png`] },
}


const toolData: ToolData = getToolData("enigma-machine-emulator")

export default function EnigmaMachineEmulatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="enigma-machine-emulator">
    <ToolLayout
      toolId="enigma-machine-emulator"
      toolName="Enigma Machine Emulator"
      toolDescription="The Enigma Machine Emulator faithfully replicates the electromechanical cipher device used by Nazi Germany during World War II, whose breaking by Alan Turing and the codebreakers at Bletchley Park is credited with shortening the war by years. Configure the three-rotor assembly, select a reflector, and set your plugboard connections exactly as a wartime operator would have done, then type any message to watch it transform through the machine's famously complex substitution process. Because the Enigma cipher is symmetric, the same settings can decode messages just as easily as encoding them, demonstrating the elegant but ultimately flawed logic that Allied cryptanalysts exploited. Whether you are a history enthusiast, a cryptography student, or an educator building lessons around WWII intelligence, this emulator brings a pivotal chapter of computing history to life in your browser."
      toolComponent={<EnigmaMachineEmulator />}
      toolData={toolData}
    />
    </ToolPageWrapper>
    </>
  )
}
