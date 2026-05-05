import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EnigmaMachineEmulator } from "@/components/enigma-machine-emulator"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "Enigma Machine Emulator | Simulate Historical Cipher Device",
  description: "Use our free enigma machine emulator to encrypt and decrypt messages. Configure rotors, reflectors, and plugboard settings for authentic World War II cipher simulation.",
  keywords: ["enigma machine emulator", "enigma simulator", "cipher machine", "rotor cipher", "historical encryption", "enigma rotor settings", "plugboard cipher"],
}

export default function EnigmaMachineEmulatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Enigma Machine Emulator
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An enigma machine emulator that simulates the historical World War II encryption device. Configure rotors, reflectors, ring settings, and plugboard to create authentic Enigma cipher messages. Understand how one of history's most famous encryption machines worked.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <EnigmaMachineEmulator />
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 border-t border-border bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How This Enigma Machine Emulator Works</h2>
                <div className="prose prose-invert max-w-none space-y-4">
                  <p className="text-muted-foreground">
                    This enigma machine emulator faithfully recreates the M3 rotor configuration used during World War II. The machine passes electrical signals through rotors and a reflector, scrambling your message using precise mechanical substitution cipher mechanics.
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">Key Features:</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>8 Historical Rotors:</strong> Choose from rotors I-VIII with authentic wiring patterns and notch positions</li>
                      <li><strong>Dual Reflectors:</strong> Configure reflector B or C to determine how signals are returned through rotors</li>
                      <li><strong>Ring Settings:</strong> Adjust ring positions for each rotor to shift the wiring relationships</li>
                      <li><strong>Plugboard Swaps:</strong> Enter up to 10 letter pair swaps to simulate the physical plugboard (Steckerbreit)</li>
                      <li><strong>Rotor Stepping:</strong> Watch rotors advance realistically, including the famous double-stepping mechanism</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Understanding Enigma Machine Settings</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rotors</h3>
                    <p>The enigma machine uses three or more rotors. Each rotor contains internal wiring that substitutes letters. Rotors step forward with each key press, changing the substitution pattern continuously.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Reflector</h3>
                    <p>After passing through the rotors, electrical current hits the reflector which sends it back through a different rotor path, creating the reversible encryption property of Enigma machines.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ring Settings & Positions</h3>
                    <p>Ring settings adjust the internal wiring relationship, while position determines the starting orientation. These settings are crucial for configuring which rotor notch steps each rotor.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Plugboard</h3>
                    <p>The plugboard (Steckerbreit) swaps letters before and after rotor processing. It adds extra complexity to the cipher and is a crucial part of Enigma security.</p>
                  </div>
                </div>
              </div>

              <div className="bg-background/50 border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Historical Note</h3>
                <p className="text-sm text-muted-foreground">
                  The Enigma machine was the encryption device used by Nazi Germany during WWII. The famous crackers at Bletchley Park, including Alan Turing, developed mechanical and computational methods to break Enigma-encrypted messages, which significantly contributed to the Allied war effort.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AllToolsSection />
      </main>
      <SiteFooter />
    </div>
  )
}
