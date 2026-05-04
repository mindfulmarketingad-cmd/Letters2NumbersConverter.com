import { NatoAlphabetConverter } from "@/components/nato-alphabet-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "NATO Phonetic Alphabet Translator",
  description: "Free NATO phonetic alphabet translator. Convert text to NATO/ICAO spelling alphabet instantly. Also supports Dutch, German, Swedish, and Russian spelling alphabets.",
  keywords: ["NATO phonetic alphabet", "ICAO phonetic alphabet", "spelling alphabet", "alpha bravo charlie", "phonetic alphabet converter"],
}

const natoAlphabet = [
  { letter: "A", code: "Alfa" },
  { letter: "B", code: "Bravo" },
  { letter: "C", code: "Charlie" },
  { letter: "D", code: "Delta" },
  { letter: "E", code: "Echo" },
  { letter: "F", code: "Foxtrot" },
  { letter: "G", code: "Golf" },
  { letter: "H", code: "Hotel" },
  { letter: "I", code: "India" },
  { letter: "J", code: "Juliett" },
  { letter: "K", code: "Kilo" },
  { letter: "L", code: "Lima" },
  { letter: "M", code: "Mike" },
  { letter: "N", code: "November" },
  { letter: "O", code: "Oscar" },
  { letter: "P", code: "Papa" },
  { letter: "Q", code: "Quebec" },
  { letter: "R", code: "Romeo" },
  { letter: "S", code: "Sierra" },
  { letter: "T", code: "Tango" },
  { letter: "U", code: "Uniform" },
  { letter: "V", code: "Victor" },
  { letter: "W", code: "Whiskey" },
  { letter: "X", code: "X-ray" },
  { letter: "Y", code: "Yankee" },
  { letter: "Z", code: "Zulu" },
]

export default function NatoPhoneticAlphabetPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Free Online Tool
              </div>
              <h1 id="translator" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                NATO Phonetic Alphabet Translator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Convert text to NATO/ICAO phonetic alphabet instantly. Perfect for clear communication over radio, phone, or any situation where clarity is essential.
              </p>
            </div>

            <NatoAlphabetConverter />

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
              <div id="who-is-this-for" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">Who Is This Tool For?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This NATO phonetic alphabet translator is designed for anyone who needs to communicate letters clearly and unambiguously. Whether you work in aviation, emergency services, customer support, or simply want to spell something over a poor phone connection, this tool provides instant translations.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Pilots, air traffic controllers, and aviation professionals</li>
                  <li>Military personnel and first responders</li>
                  <li>Customer service representatives spelling out codes</li>
                  <li>Ham radio operators communicating callsigns</li>
                  <li>Anyone spelling over phone or radio</li>
                </ul>
              </div>

              <div id="how-it-works" className="bg-card/50 border border-border rounded-xl p-6 sm:p-8 mb-16">
                <h2 className="text-xl font-bold text-foreground mb-4">How Does It Work?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The NATO phonetic alphabet, officially known as the International Radiotelephony Spelling Alphabet, is the most widely used radiotelephone spelling alphabet. It assigns code words to the letters of the English alphabet (Alfa for A, Bravo for B, etc.) so that critical combinations of letters and numbers can be pronounced and understood by those who transmit and receive voice messages by radio or telephone, regardless of language barriers or connection quality.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Simply type your text in the input field and see the phonetic translation instantly. You can also decode phonetic words back to regular text using the decode mode.
                </p>
              </div>

              {/* NATO Alphabet Chart */}
              <section className="mb-16">
                <h2 id="chart" className="text-2xl font-bold text-foreground mb-6">Complete NATO Phonetic Alphabet Chart</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
                    {natoAlphabet.map(({ letter, code }) => (
                      <div key={letter} className="flex items-center gap-3 p-4 border-b border-r border-border last:border-r-0">
                        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary">
                          {letter}
                        </span>
                        <span className="text-foreground font-medium">{code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Uses */}
              <section className="mb-16">
                <h2 id="common-uses" className="text-2xl font-bold text-foreground mb-6">Common Uses of the NATO Phonetic Alphabet</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Military & Aviation</h3>
                    <p className="text-muted-foreground text-sm">
                      Used by armed forces worldwide and in civil aviation for clear radio communication, especially for spelling out callsigns, waypoints, and critical information.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Customer Service</h3>
                    <p className="text-muted-foreground text-sm">
                      Call centers use the phonetic alphabet to spell out confirmation codes, email addresses, and account numbers to ensure accuracy.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Emergency Services</h3>
                    <p className="text-muted-foreground text-sm">
                      Police, fire, and medical services use the alphabet to communicate license plates, addresses, and names clearly over radio.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-3">Ham Radio</h3>
                    <p className="text-muted-foreground text-sm">
                      Amateur radio operators use the NATO alphabet to spell out their callsigns and communicate with operators worldwide.
                    </p>
                  </div>
                </div>
              </section>

              {/* Link to other tools */}
              <div className="bg-card/50 border border-border rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">More Encoding Tools</h2>
                <p className="text-muted-foreground mb-4">
                  Looking for other encoding and decoding tools? Check out our letters to numbers converter for A1Z26, ASCII, hexadecimal, and binary encoding.
                </p>
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Try Letters to Numbers Converter
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
