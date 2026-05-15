import { Metadata } from "next"
import { IVRAlphanumericConverter } from "@/components/ivr-alphanumeric-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"
import { generateToolPageSchema, generateBreadcrumbSchema } from "@/lib/schema-markup"

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ivr-alphanumeric-conversion-tool`

const toolSchema = generateToolPageSchema(
  "IVR Alphanumeric Conversion Tool",
  "Free IVR alphanumeric conversion tool. Convert Medicare MBI, PTAN, DCN, and other alphanumeric IDs to telephone keypad number sequences for Medicare IVR systems. Instant results.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "IVR Alphanumeric Conversion Tool", url: PAGE_URL },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an IVR alphanumeric conversion tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An IVR alphanumeric conversion tool translates letters in alphanumeric IDs (like Medicare MBI numbers, PTANs, or DCNs) into the telephone keypad number sequences those letters represent. When an IVR system asks you to 'enter your ID using the keypad', it expects numbers only — this tool converts the letters in your ID to their keypad equivalents so you can enter the full sequence."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Medicare IVR translator?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Medicare IVR translator converts Medicare alphanumeric IDs — specifically MBI (Medicare Beneficiary Identifier), PTAN (Provider Transaction Access Number), and DCN (Document Control Number) — to the number sequences needed to navigate Medicare's IVR phone systems. For example, the letter A on a phone keypad is button 2, so an MBI containing 'A' requires pressing 2 when entering that character."
      }
    },
    {
      "@type": "Question",
      "name": "How do I convert MBI to phone keypad numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the IVR conversion tool above. Enter your MBI (Medicare Beneficiary Identifier) and the tool instantly outputs the keypad sequence. For reference: A-B-C = 2, D-E-F = 3, G-H-I = 4, J-K-L = 5, M-N-O = 6, P-Q-R-S = 7, T-U-V = 8, W-X-Y-Z = 9. Digits in the MBI remain unchanged."
      }
    },
    {
      "@type": "Question",
      "name": "What is a PTAN converter tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A PTAN converter tool translates a Provider Transaction Access Number (PTAN) — which may contain letters — into the numeric keypad sequence needed when entering a PTAN through a Medicare IVR phone system. PTANs are issued by Medicare Administrative Contractors (MACs) to providers for billing and eligibility verification."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the Medicare IVR ask for numbers when my ID has letters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IVR (Interactive Voice Response) systems use touch-tone telephone keypads, which only have numeric buttons (0-9). Letters on keypads are grouped under numbers (e.g. ABC under 2). When Medicare's IVR asks you to 'enter your MBI', it expects you to press the keypad number that corresponds to each letter. The IVR alphanumeric conversion tool does this lookup for you."
      }
    },
  ]
}

export const metadata: Metadata = {
  title: { absolute: "IVR Alphanumeric Conversion Tool" },
  description: "Free IVR alphanumeric conversion tool. Convert Medicare MBI, PTAN, and DCN letters to telephone keypad numbers for Medicare IVR systems. Instant results — no sign-up needed.",
  keywords: [
    "ivr alphanumeric conversion tool",
    "ivr converter",
    "alphanumeric conversion tool",
    "ivr conversion tool",
    "ivr name conversion tool",
    "ivr tool",
    "ivr translator",
    "ivr translater",
    "ivr convert",
    "medicare ivr translator",
    "medicare ivr conversion tool",
    "medicare nj ivr conversion tool",
    "ptan converter tool",
    "mbi converter tool",
    "mbi converter",
    "medicare id converter",
    "medicare member id converter",
    "medicare prefix converter",
  ],
  openGraph: {
    title: "IVR Alphanumeric Conversion Tool — Medicare IVR Translator",
    description: "Convert Medicare MBI, PTAN, and DCN alphanumeric IDs to telephone keypad number sequences for IVR systems. Free, instant, no sign-up.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "IVR Alphanumeric Conversion Tool" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IVR Alphanumeric Conversion Tool — Medicare IVR Translator",
    description: "Convert Medicare MBI, PTAN, and DCN to IVR keypad sequences. Free online tool.",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

// Phone keypad mapping
const keypadMap: Record<string, string> = {
  ABC: '2', DEF: '3', GHI: '4', JKL: '5',
  MNO: '6', PQRS: '7', TUV: '8', WXYZ: '9',
}
const keypadRows = Object.entries(keypadMap).map(([letters, num]) => ({ letters, num }))

export default function IVRAlphanumericPage() {
  const toolData = getToolData('ivr-alphanumeric-converter')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolPageWrapper toolSlug="ivr-alphanumeric-conversion-tool">
        <ToolLayout
          toolId="ivr-alphanumeric-converter"
          toolName="IVR Alphanumeric Conversion Tool"
          toolDescription="Convert Medicare MBI, PTAN, DCN, and any other alphanumeric ID to the telephone keypad number sequence required by IVR systems. Enter the ID above and get the keypad sequence instantly — no more guessing which button to press for each letter."
          toolComponent={<IVRAlphanumericConverter />}
          toolData={toolData}
        >
        {/* SEO content */}
        <section className="bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

            {/* What is IVR */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">What Is an IVR Alphanumeric Conversion Tool?</h2>
              <p className="text-muted-foreground mb-4">
                An <strong className="text-foreground">IVR alphanumeric conversion tool</strong> translates letters in alphanumeric IDs — Medicare Beneficiary Identifiers (MBI), Provider Transaction Access Numbers (PTAN), Document Control Numbers (DCN), and similar codes — into the corresponding telephone keypad digit sequences.
              </p>
              <p className="text-muted-foreground mb-4">
                When you call a Medicare IVR system (Interactive Voice Response), it instructs you to &ldquo;enter your ID using your phone keypad.&rdquo; Phone keypads only have numeric buttons (0–9). Letters are grouped under numbers — A, B, and C share button 2; D, E, and F share button 3; and so on. An <strong className="text-foreground">IVR converter</strong> does this lookup for you automatically, so you can enter the full numeric sequence without manually decoding each letter.
              </p>
              <p className="text-muted-foreground">
                This is the same tool known as a <strong className="text-foreground">Medicare IVR translator</strong>, <strong className="text-foreground">IVR conversion tool</strong>, or <strong className="text-foreground">IVR name conversion tool</strong> — all describe the same process of converting alphanumeric characters to phone keypad numbers.
              </p>
            </div>

            {/* Keypad chart */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Telephone Keypad Alphanumeric Chart</h2>
              <p className="text-muted-foreground mb-4">
                This is the standard phone keypad letter-to-number mapping used by all <strong className="text-foreground">IVR systems</strong>. When an IVR asks you to enter an alphanumeric ID, each letter corresponds to its keypad button number:
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { num: '2', letters: 'ABC' },
                  { num: '3', letters: 'DEF' },
                  { num: '4', letters: 'GHI' },
                  { num: '5', letters: 'JKL' },
                  { num: '6', letters: 'MNO' },
                  { num: '7', letters: 'PQRS' },
                  { num: '8', letters: 'TUV' },
                  { num: '9', letters: 'WXYZ' },
                ].map(({ num, letters }) => (
                  <div key={num} className="bg-card border border-border rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-primary">{num}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{letters}</p>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letter</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Keypad Button</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letter</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Keypad Button</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Letter</th>
                      <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Keypad Button</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['A', '2', 'J', '5', 'S', '7'],
                      ['B', '2', 'K', '5', 'T', '8'],
                      ['C', '2', 'L', '5', 'U', '8'],
                      ['D', '3', 'M', '6', 'V', '8'],
                      ['E', '3', 'N', '6', 'W', '9'],
                      ['F', '3', 'O', '6', 'X', '9'],
                      ['G', '4', 'P', '7', 'Y', '9'],
                      ['H', '4', 'Q', '7', 'Z', '9'],
                      ['I', '4', 'R', '7', '0-9', 'unchanged'],
                    ].map(([l1, n1, l2, n2, l3, n3], i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                        <td className="border border-border px-3 py-2 font-mono font-bold text-primary">{l1}</td>
                        <td className="border border-border px-3 py-2 font-mono text-foreground">{n1}</td>
                        <td className="border border-border px-3 py-2 font-mono font-bold text-primary">{l2}</td>
                        <td className="border border-border px-3 py-2 font-mono text-foreground">{n2}</td>
                        <td className="border border-border px-3 py-2 font-mono font-bold text-primary">{l3}</td>
                        <td className="border border-border px-3 py-2 font-mono text-foreground">{n3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Numeric digits in your ID (0–9) are entered as-is. Only letters need to be converted.</p>
            </div>

            {/* Medicare IDs explained */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Medicare IDs This Tool Converts</h2>
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">MBI — Medicare Beneficiary Identifier</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    The MBI is an 11-character alphanumeric code (e.g. <code className="bg-muted px-1 rounded text-foreground">1EG4-TE5-MK72</code>) that replaced the Social Security Number-based HICN in 2018. It contains a mix of letters and numbers — making an <strong className="text-foreground">MBI converter tool</strong> essential when entering it through a Medicare IVR phone system. The IVR conversion tool above handles MBI format automatically.
                  </p>
                  <p className="text-xs text-muted-foreground">Format: Digit, letter, digit/letter, digit, letter, letter, digit, letter, digit, digit, digit</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">PTAN — Provider Transaction Access Number</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A PTAN is issued by a Medicare Administrative Contractor (MAC) to each enrolled healthcare provider for billing and eligibility verification purposes. PTANs may contain letters depending on the MAC region. The <strong className="text-foreground">PTAN converter tool</strong> translates those letters to keypad numbers for Medicare IVR entry.
                  </p>
                  <p className="text-xs text-muted-foreground">Format varies by MAC — typically 6–10 alphanumeric characters</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">DCN — Document Control Number</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    DCNs are assigned to Medicare claims for tracking purposes. Some IVR systems require DCN entry during claims status inquiries. The IVR alphanumeric conversion tool handles DCN format along with MBI and PTAN.
                  </p>
                </div>
              </div>
            </div>

            {/* Medicare IVR systems */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Using This Tool with Medicare IVR Systems</h2>
              <p className="text-muted-foreground mb-4">
                The <strong className="text-foreground">Medicare IVR conversion tool</strong> is particularly useful when calling Medicare Administrative Contractors (MACs) and their regional IVR systems. Specific systems where this tool is commonly needed:
              </p>
              <div className="space-y-3">
                {[
                  ['Medicare NJ IVR (Novitas Solutions J-L)', 'Providers in New Jersey, Pennsylvania, Maryland, Delaware, and nearby states often contact Novitas Solutions, whose Medicare IVR system requires MBI and PTAN entry in keypad format. This is frequently searched as "medicare nj ivr conversion tool".'],
                  ['CGS J15 IVR (Tennessee, Kentucky)', 'CGS Administrators serves Part A and Part B providers in this region. Their IVR requires alphanumeric ID entry for eligibility and claims status.'],
                  ['Palmetto GBA (J11 / J-M)', 'Palmetto serves providers across multiple southeastern states. Their IVR conversion requires the same MBI-to-keypad translation.'],
                  ['WPS Government Health Administrators', 'WPS serves providers in several midwestern states. Their IVR system requires PTAN and MBI entry using phone keypad sequences.'],
                  ['Noridian Healthcare Solutions', 'Noridian serves western US states and also requires keypad entry of alphanumeric Medicare IDs during IVR navigation.'],
                ].map(([title, desc]) => (
                  <div key={title} className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to use */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Use the IVR Converter</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                <li>Have your MBI, PTAN, or DCN ready (from the patient&apos;s Medicare card or provider enrollment documentation).</li>
                <li>Type or paste the alphanumeric ID into the input field above.</li>
                <li>The tool instantly shows the full keypad sequence — e.g. <code className="text-foreground bg-muted px-1 rounded">1EG4</code> becomes <code className="text-foreground bg-muted px-1 rounded">1342</code>.</li>
                <li>Keep the converted sequence on screen while you dial the Medicare IVR number and follow the prompts.</li>
                <li>When the system asks you to enter the ID, press the keypad numbers in the displayed sequence.</li>
              </ol>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-foreground mb-1">Tip: Special characters</p>
                <p className="text-sm text-muted-foreground">Hyphens and dashes in Medicare IDs (like the MBI format <code className="bg-muted px-1 rounded">1EG4-TE5-MK72</code>) are formatting only — do not enter them in the IVR. The tool strips hyphens from the output automatically.</p>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'What is an IVR alphanumeric conversion tool?',
                    a: 'It converts letters in alphanumeric Medicare IDs (MBI, PTAN, DCN) into the telephone keypad digit sequences needed to enter those IDs through a Medicare IVR phone system. Phone keypads group letters under numbers (A-B-C = 2, D-E-F = 3, etc.), so each letter must be converted to its button number.',
                  },
                  {
                    q: 'How do I convert an MBI for Medicare IVR entry?',
                    a: 'Enter the MBI in the tool above and it outputs the full keypad sequence. Or manually: use the chart where A/B/C=2, D/E/F=3, G/H/I=4, J/K/L=5, M/N/O=6, P/Q/R/S=7, T/U/V=8, W/X/Y/Z=9. Digits in the MBI are entered as-is.',
                  },
                  {
                    q: 'What is a PTAN converter?',
                    a: 'A PTAN converter translates a Provider Transaction Access Number (which may contain letters) into the keypad number sequence needed when entering a PTAN through a Medicare IVR system. PTANs are issued by MACs to enrolled providers.',
                  },
                  {
                    q: 'Why does the Medicare IVR ask for numbers when my ID has letters?',
                    a: 'IVR systems use touch-tone phone keypads, which only register numeric input. Letters are grouped under numbers on the keypad. The IVR expects you to press the keypad button that corresponds to each letter in your ID.',
                  },
                  {
                    q: 'Is this the same as a Medicare member ID converter?',
                    a: 'Yes. "Medicare member ID converter", "Medicare ID converter", "MBI converter tool", and "IVR translator" all describe the same process: converting alphanumeric Medicare IDs to keypad number sequences for IVR entry.',
                  },
                ].map(({ q, a }, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
