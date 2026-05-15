import { Metadata } from "next"
import { CMToPixelsConverter } from "@/components/cm-to-pixels-converter"
import { ToolLayout } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { getToolData } from "@/lib/tool-data"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "CM To Pixels Converter" },
  description: "Free CM to pixels converter. Instantly convert centimeters to pixels at 72, 96, 150, and 300 DPI/PPI. Essential for web design, print layout, UI design, and screen resolution work.",
  keywords: [
    "cm to pixels",
    "cm to pixels converter",
    "centimeters to pixels",
    "cm to px",
    "convert cm to pixels",
    "cm to px converter",
    "centimeter to pixel",
    "cm pixels calculator",
    "DPI converter",
    "PPI converter",
    "print resolution calculator",
    "web design unit converter",
    "screen resolution converter",
    "pixels per inch calculator",
    "cm to pixels 96 dpi",
    "cm to pixels 300 dpi",
    "cm to pixels 72 dpi",
  ],
  openGraph: {
    title: "CM to Pixels Converter — Convert Centimeters to Pixels (Any DPI/PPI)",
    description: "Free CM to pixels converter. Convert centimeters to pixels instantly at 72, 96, 150, and 300 DPI/PPI for web design, print, and UI work.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
    images: [{ url: 'https://www.letters2numbersconverter.com/og-image.png', width: 1200, height: 630, alt: 'CM to Pixels Converter' }],
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "CM to Pixels Converter",
  "description": "Free online tool to convert centimeters to pixels at any DPI/PPI. Supports 72, 96, 150, and 300 PPI standards for web design and print.",
  "url": "https://www.letters2numbersconverter.com/tools/cm-to-pixels-converter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "Letters2NumbersConverter.com", "url": "https://www.letters2numbersconverter.com" },
}

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many pixels is 1 cm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on your screen's resolution (DPI/PPI). At 96 DPI (standard web/screen), 1 cm ≈ 37.8 pixels. At 72 DPI (traditional print), 1 cm ≈ 28.35 pixels. At 300 DPI (high-resolution print), 1 cm ≈ 118.11 pixels.",
      },
    },
    {
      "@type": "Question",
      "name": "How do I convert cm to pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the formula: pixels = centimeters × (DPI ÷ 2.54). For example, at 96 DPI: 2 cm × (96 ÷ 2.54) = 2 × 37.795 ≈ 75.59 pixels. Our free tool does this calculation instantly for any DPI.",
      },
    },
    {
      "@type": "Question",
      "name": "What DPI should I use for web design?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use 96 DPI for standard web and screen design — this is the CSS reference pixel standard. For retina/HiDPI displays, use 192 DPI. For standard print, use 300 DPI.",
      },
    },
    {
      "@type": "Question",
      "name": "How many pixels is 2 cm at 96 DPI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2 cm at 96 DPI equals approximately 75.6 pixels (2 × 37.795).",
      },
    },
    {
      "@type": "Question",
      "name": "What is the formula for converting cm to pixels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pixels = Centimeters × (DPI ÷ 2.54). Since 1 inch = 2.54 cm, dividing DPI by 2.54 gives pixels per centimeter.",
      },
    },
  ],
}

// Reference conversion table data
const conversionTable = [
  { cm: 0.5, px72: 14, px96: 19, px150: 30, px300: 59 },
  { cm: 1, px72: 28, px96: 38, px150: 59, px300: 118 },
  { cm: 2, px72: 57, px96: 76, px150: 118, px300: 236 },
  { cm: 3, px72: 85, px96: 113, px150: 177, px300: 354 },
  { cm: 5, px72: 142, px96: 189, px150: 295, px300: 591 },
  { cm: 10, px72: 283, px96: 378, px150: 591, px300: 1181 },
  { cm: 15, px72: 425, px96: 567, px150: 886, px300: 1772 },
  { cm: 21, px72: 595, px96: 794, px150: 1240, px300: 2480 },
  { cm: 29.7, px72: 842, px96: 1123, px150: 1754, px300: 3508 },
]

export default function CMToPixelsPage() {
  const toolData = getToolData('cm-to-pixels-converter')

  return (
    <ToolPageWrapper toolSlug="cm-to-pixels-converter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <ToolLayout
        toolId="cm-to-pixels-converter"
        toolName="CM To Pixels Converter"
        toolDescription="Convert centimeters to pixels instantly at any DPI/PPI. Supports 72 PPI (print), 96 PPI (web/screen), 150 PPI (medium-res), and 300 PPI (high-res print) — the four standards used in web design, UI design, and professional print work."
        toolComponent={<CMToPixelsConverter />}
        toolData={toolData}
      >

      {/* ── SEO Article Section ────────────────────────────────────────────── */}
      <section className="bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

          {/* Formula */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">CM to Pixels Formula</h2>
            <p className="text-muted-foreground mb-4">
              To convert centimeters to pixels you need to know the resolution of your output device, measured in DPI (dots per inch) or PPI (pixels per inch). Since 1 inch equals exactly 2.54 cm, the conversion formula is:
            </p>
            <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 font-mono text-foreground text-sm">
              Pixels = Centimeters × (DPI ÷ 2.54)
            </div>
            <p className="text-muted-foreground mb-2">Quick examples at common resolutions:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>1 cm at <strong className="text-foreground">96 DPI</strong> (web standard) = 1 × (96 ÷ 2.54) ≈ <strong className="text-foreground">37.8 px</strong></li>
              <li>1 cm at <strong className="text-foreground">72 DPI</strong> (traditional print) = 1 × (72 ÷ 2.54) ≈ <strong className="text-foreground">28.3 px</strong></li>
              <li>1 cm at <strong className="text-foreground">300 DPI</strong> (high-res print) = 1 × (300 ÷ 2.54) ≈ <strong className="text-foreground">118.1 px</strong></li>
            </ul>
          </div>

          {/* Common Conversions Table */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">CM to Pixels Reference Table</h2>
            <p className="text-muted-foreground mb-4">
              The table below shows common centimeter values converted to pixels at four standard resolutions. Standard paper sizes (A4 = 21×29.7 cm) are included.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">CM</th>
                    <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">72 PPI</th>
                    <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">96 PPI (web)</th>
                    <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">150 PPI</th>
                    <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">300 PPI (print)</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionTable.map((row, i) => (
                    <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                      <td className="border border-border px-3 py-2 font-medium text-foreground">{row.cm} cm</td>
                      <td className="border border-border px-3 py-2 text-muted-foreground">{row.px72} px</td>
                      <td className="border border-border px-3 py-2 text-muted-foreground">{row.px96} px</td>
                      <td className="border border-border px-3 py-2 text-muted-foreground">{row.px150} px</td>
                      <td className="border border-border px-3 py-2 text-muted-foreground">{row.px300} px</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Values rounded to the nearest whole pixel.</p>
          </div>

          {/* Which DPI to use */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Which DPI Should You Use?</h2>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">96 DPI — Web & Screen Design</h3>
                <p className="text-sm text-muted-foreground">
                  The CSS standard pixel is defined at 96 DPI. Use this when designing websites, web apps, or any content that will be viewed on a screen. Most design tools (Figma, Sketch, Adobe XD) default to 96 DPI for screen work.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">72 DPI — Traditional Screen / Legacy Print</h3>
                <p className="text-sm text-muted-foreground">
                  72 DPI was the original standard for both Mac displays and laser printers. It is still used in some legacy print workflows and in certain PDF export settings. 72 DPI gives slightly fewer pixels per centimeter than 96 DPI.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">150 DPI — Medium-Resolution Print</h3>
                <p className="text-sm text-muted-foreground">
                  150 DPI is a common middle ground for everyday office printing, newsletters, and documents where print quality matters but file size must stay manageable.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">300 DPI — Professional / High-Resolution Print</h3>
                <p className="text-sm text-muted-foreground">
                  300 DPI is the professional print standard. Use this for brochures, magazines, business cards, posters, or any print output where crisp, sharp results are required. Images below 300 DPI may appear blurry when printed at full size.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">How many pixels is 1 cm?</h3>
                <p className="text-muted-foreground text-sm">
                  It depends on resolution. At <strong className="text-foreground">96 DPI</strong> (web standard), 1 cm ≈ <strong className="text-foreground">37.8 pixels</strong>. At 72 DPI, 1 cm ≈ 28.3 px. At 300 DPI (print), 1 cm ≈ 118.1 px. Use the converter above to get an exact value at any resolution.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How many pixels is 2 cm at 96 DPI?</h3>
                <p className="text-muted-foreground text-sm">
                  2 cm at 96 DPI = 2 × 37.795 ≈ <strong className="text-foreground">75.6 pixels</strong> (75 or 76 px rounded).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How many pixels is 5 cm?</h3>
                <p className="text-muted-foreground text-sm">
                  At 96 DPI: 5 × 37.795 ≈ <strong className="text-foreground">189 px</strong>. At 300 DPI: 5 × 118.11 ≈ <strong className="text-foreground">591 px</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">What is A4 size in pixels?</h3>
                <p className="text-muted-foreground text-sm">
                  A4 paper is 21 × 29.7 cm. At 96 DPI: <strong className="text-foreground">794 × 1123 px</strong>. At 300 DPI: <strong className="text-foreground">2480 × 3508 px</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Why do cm to px results differ between tools?</h3>
                <p className="text-muted-foreground text-sm">
                  Because different tools assume different default DPI values. Always check which resolution a tool is using. Our converter is explicit — you choose the DPI, so your results are always predictable.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I convert pixels back to centimeters?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes. The reverse formula is: <strong className="text-foreground">cm = pixels ÷ (DPI ÷ 2.54)</strong>. For example, 200 px at 96 DPI = 200 ÷ 37.795 ≈ 5.29 cm. Our tool supports both directions.
                </p>
              </div>
            </div>
          </div>

          {/* Why use this tool */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Use This CM to Pixels Converter?</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Supports four DPI standards</strong> — 72, 96, 150, and 300 PPI in one tool.</li>
              <li><strong className="text-foreground">Instant results</strong> — no page reload, no form submission. Type and get the answer immediately.</li>
              <li><strong className="text-foreground">Reference table included</strong> — common centimeter values pre-calculated for quick lookup.</li>
              <li><strong className="text-foreground">Free with no account required</strong> — open and use immediately.</li>
              <li><strong className="text-foreground">Works for any device</strong> — desktop, tablet, or phone.</li>
            </ul>
          </div>

        </div>
      </section>
    </ToolLayout>
    </ToolPageWrapper>
  )
}
