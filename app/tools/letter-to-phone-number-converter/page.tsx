import { PhoneNumberConverter } from "@/components/phone-number-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Phone Number Converter - Letters to Numbers Converter",
  description: "Free phone number converter tool. Convert vanity phone numbers like 1-800-FLOWERS to digits or see letter options for any phone number. Uses standard telephone keypad mapping.",
  keywords: ["phone number converter", "vanity phone number", "letter to phone number", "phone keypad converter", "1-800 number converter"],
}

// Phone keypad reference
const phoneKeypad = [
  { digit: '2', letters: 'ABC' },
  { digit: '3', letters: 'DEF' },
  { digit: '4', letters: 'GHI' },
  { digit: '5', letters: 'JKL' },
  { digit: '6', letters: 'MNO' },
  { digit: '7', letters: 'PQRS' },
  { digit: '8', letters: 'TUV' },
  { digit: '9', letters: 'WXYZ' },
]

export default function PhoneNumberConverterPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="tool" className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Free Online Tool
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Phone Number Converter - Letters to Numbers Converter
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Convert vanity phone numbers like 1-800-FLOWERS to their numeric equivalent, or enter digits to see possible letter combinations using the standard telephone keypad.
              </p>
            </div>

            <PhoneNumberConverter />

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>No Data Stored</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Who is this for */}
              <div id="who-is-this-for" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">Who Is This Tool For?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This phone number converter is perfect for anyone who needs to work with vanity phone numbers. Whether you are a marketer creating memorable 1-800 numbers, a customer trying to dial a business with a word-based number, or someone exploring creative phone number options for your business, this tool makes conversion instant and easy.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Business owners creating vanity numbers</li>
                  <li>Marketers analyzing competitor phone numbers</li>
                  <li>Customers dialing word-based numbers</li>
                  <li>Call center staff verifying phone numbers</li>
                  <li>Anyone curious about phone number letter mappings</li>
                </ul>
              </div>

              {/* How it works */}
              <div id="how-it-works" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">How Does the Phone Number Converter Work?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The phone number converter uses the standard telephone keypad mapping that has been in use since the mid-20th century. Each digit from 2-9 corresponds to specific letters:
                </p>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {phoneKeypad.map(({ digit, letters }) => (
                    <div key={digit} className="flex flex-col items-center p-3 bg-muted rounded-lg">
                      <span className="text-xl font-bold text-foreground">{digit}</span>
                      <span className="text-xs text-muted-foreground tracking-wider">{letters}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  In <strong>Letters to Numbers</strong> mode, each letter you type is converted to its corresponding digit. In <strong>Numbers to Letters</strong> mode, each digit shows all possible letters it could represent, helping you decode or create vanity numbers.
                </p>
              </div>

              {/* Phone Keypad Chart */}
              <section id="phone-keypad" className="mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Complete Phone Keypad Reference</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Digit</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Letters</th>
                        <th className="px-4 py-3 text-left font-semibold text-foreground">Example Words</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr><td className="px-4 py-3 font-mono text-lg">1</td><td className="px-4 py-3 text-muted-foreground">(none)</td><td className="px-4 py-3 text-muted-foreground">-</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">2</td><td className="px-4 py-3 font-semibold">A B C</td><td className="px-4 py-3 text-muted-foreground">CAB, ACE, CAR</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">3</td><td className="px-4 py-3 font-semibold">D E F</td><td className="px-4 py-3 text-muted-foreground">FED, DEW, EEL</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">4</td><td className="px-4 py-3 font-semibold">G H I</td><td className="px-4 py-3 text-muted-foreground">GIG, HIT, ICE</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">5</td><td className="px-4 py-3 font-semibold">J K L</td><td className="px-4 py-3 text-muted-foreground">JOLT, KILO, LUCK</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">6</td><td className="px-4 py-3 font-semibold">M N O</td><td className="px-4 py-3 text-muted-foreground">MOON, NOON, MONO</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">7</td><td className="px-4 py-3 font-semibold">P Q R S</td><td className="px-4 py-3 text-muted-foreground">PROS, QUIZ, STAR</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">8</td><td className="px-4 py-3 font-semibold">T U V</td><td className="px-4 py-3 text-muted-foreground">TUTU, VIVA, UNIT</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">9</td><td className="px-4 py-3 font-semibold">W X Y Z</td><td className="px-4 py-3 text-muted-foreground">WAXY, ZERO, YOYO</td></tr>
                      <tr><td className="px-4 py-3 font-mono text-lg">0</td><td className="px-4 py-3 text-muted-foreground">(none)</td><td className="px-4 py-3 text-muted-foreground">-</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Examples */}
              <section id="examples" className="mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-6">Famous Vanity Phone Number Examples</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="font-mono text-lg text-foreground mb-1">1-800-FLOWERS</p>
                    <p className="text-sm text-muted-foreground">= 1-800-356-9377</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="font-mono text-lg text-foreground mb-1">1-800-CONTACTS</p>
                    <p className="text-sm text-muted-foreground">= 1-800-266-8228</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="font-mono text-lg text-foreground mb-1">1-800-GO-FEDEX</p>
                    <p className="text-sm text-muted-foreground">= 1-800-463-3339</p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5">
                    <p className="font-mono text-lg text-foreground mb-1">1-800-MATTRES</p>
                    <p className="text-sm text-muted-foreground">= 1-800-628-8737</p>
                  </div>
                </div>
              </section>

              {/* Link to other tools */}
              <div id="more-tools" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">More Encoding Tools</h2>
                <p className="text-muted-foreground mb-4">
                  Looking for other encoding and decoding tools? Check out our letters to numbers converter for A1Z26, ASCII, hexadecimal, and binary encoding.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/" 
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Letters to Numbers Converter
                  </Link>
                  <Link 
                    href="/tools/nato-phonetic-alphabet" 
                    className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    NATO Phonetic Alphabet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
