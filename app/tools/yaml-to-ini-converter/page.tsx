import { Metadata } from "next"
import { YamlIniConverter } from "@/components/yaml-ini-converter"
import { ToolLayout, type ToolData } from "@/components/tool-layout"
import { ToolPageWrapper } from "@/components/tool-page-wrapper"
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'


const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/yaml-to-ini-converter`

const toolSchema = generateToolPageSchema(
  "YAML to INI Converter",
  "Free online YAML to INI converter. Paste your YAML or YML file and instantly convert it to INI format. Supports bidirectional conversion, nested structures, and one-click download.",
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: "YAML to INI Converter", url: PAGE_URL },
])

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert YAML to INI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paste your YAML (or YML) content into the converter above and click Convert. The tool maps each YAML key-value pair to the equivalent INI format, grouping nested objects as INI sections. You can then copy the result or download it as a .ini file."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between YAML and INI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "YAML is a human-readable data serialisation format that supports complex nested structures, lists, and data types. INI is a flat configuration format made up of sections ([section]) and key=value pairs. INI is simpler and widely supported by legacy applications; YAML is more expressive and common in modern DevOps tooling."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert a .yml file to .ini?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. YML and YAML are the same format — .yml is just a shorter file extension. Paste the contents of your .yml file into the converter and it will output valid .ini format that you can download directly."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool support bidirectional conversion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The converter automatically detects whether your input is YAML/YML or INI and converts in the appropriate direction. Paste either format and the tool handles the rest."
      }
    },
    {
      "@type": "Question",
      "name": "Are there limitations when converting YAML to INI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "INI is a flat format, so deeply nested YAML structures are flattened using dotted key notation (e.g. database.host=localhost). YAML lists and complex types that have no INI equivalent are converted to string representations."
      }
    },
  ]
}

export const metadata: Metadata = {
  title: "YAML to INI Converter — Free YML to INI Online Tool",
  description: "Free YAML to INI converter online. Paste any YAML or YML file and instantly convert it to INI format. Supports bidirectional conversion, nested structures, and direct download.",
  keywords: [
    "yaml to ini converter",
    "yml to ini converter",
    "convert yaml to ini",
    "yaml to ini online",
    "yml to ini online tool",
    "yaml to ini file converter",
    "yaml to ini",
    "yml to ini",
    "yaml ini converter",
    "configuration file converter",
    "yaml converter",
    "ini converter",
  ],
  openGraph: {
    title: "YAML to INI Converter — Free YML to INI Online Tool",
    description: "Convert YAML or YML files to INI format instantly. Free online tool with bidirectional support, nested structure handling, and one-click download.",
    type: "website",
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "YAML to INI Converter" }],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  twitter: { card: 'summary_large_image', title: "YAML to INI Converter — Free YML to INI Online Tool", description: "Convert YAML or YML files to INI format instantly. Free, no sign-up, bidirectional.", images: [`${BASE_URL}/og-image.png`] },
}

const toolData: ToolData = {
  howItWorks: "Paste your YAML (or YML) configuration into the left panel. The tool instantly converts it to INI format, mapping nested objects to INI sections and key-value pairs. Works bidirectionally — paste INI to get YAML back. Download the converted file or copy to clipboard with one click.",
  features: [
    "YAML to INI and INI to YAML bidirectional conversion",
    "Supports both .yaml and .yml file content",
    "Automatic format detection",
    "Nested structure flattening with dotted keys",
    "Format validation and error detection",
    "Download converted file as .ini or .yaml",
    "Copy to clipboard functionality",
    "Works entirely in the browser — no uploads",
  ],
  whoIsItFor: [
    {
      title: "DevOps Engineers",
      description: "Converting YAML config files (Ansible, Kubernetes, Docker Compose) to INI format for tools that require it"
    },
    {
      title: "System Administrators",
      description: "Migrating legacy INI-based configuration to modern YAML standards, or vice versa"
    },
    {
      title: "Developers",
      description: "Working across frameworks that use different config file formats — quickly converting between YAML and INI without manual rewriting"
    },
  ]
}

export default function YamlToIniConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolPageWrapper toolSlug="yaml-to-ini-converter">
        <ToolLayout
          toolId="yaml-to-ini-converter"
          toolName="YAML to INI Converter"
          toolDescription="Free online YAML to INI converter. Paste any YAML or YML configuration file and instantly convert it to INI format. Supports bidirectional conversion, nested structures, and direct .ini file download — no sign-up required."
          toolComponent={<YamlIniConverter />}
          toolData={toolData}
        />

        {/* SEO content section */}
        <section className="bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

            {/* What is YAML to INI conversion */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">YAML to INI Converter — What It Does</h2>
              <p className="text-muted-foreground mb-4">
                This free <strong className="text-foreground">YAML to INI converter</strong> transforms YAML and YML configuration files into the INI format used by thousands of applications and frameworks. Whether you need to <strong className="text-foreground">convert YAML to INI</strong> for a legacy deployment tool, migrate a config from modern infrastructure-as-code back to a classic settings file, or go in the other direction from INI to YAML, this online tool handles both instantly.
              </p>
              <p className="text-muted-foreground">
                The tool is fully browser-based — your configuration data never leaves your machine. Paste your content, click Convert, and download the result.
              </p>
            </div>

            {/* YML vs YAML */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">YML vs YAML — What&apos;s the Difference?</h2>
              <p className="text-muted-foreground mb-4">
                Nothing, functionally. <strong className="text-foreground">YML</strong> and <strong className="text-foreground">YAML</strong> refer to the same format — YAML Ain&apos;t Markup Language. The difference is only in the file extension: <code className="text-foreground bg-muted px-1 rounded">.yml</code> is a shortened version of <code className="text-foreground bg-muted px-1 rounded">.yaml</code> adopted by tools like Docker Compose, GitHub Actions, and Kubernetes because shorter extensions are easier to type.
              </p>
              <p className="text-muted-foreground">
                This <strong className="text-foreground">YML to INI converter</strong> accepts both extensions. If you have a <code className="text-foreground bg-muted px-1 rounded">.yml</code> file, just paste its contents directly — the converter treats them identically.
              </p>
            </div>

            {/* When to convert */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">When Do You Need to Convert YAML to INI?</h2>
              <div className="space-y-3">
                {[
                  ['Legacy application compatibility', 'Many older applications — Python\'s ConfigParser, Windows Registry tools, classic game engines, and PHP frameworks — read configuration exclusively from INI files. If your project generates YAML configs but needs to target one of these tools, a YML to INI conversion is the bridge.'],
                  ['Infrastructure migration', 'When moving from modern DevOps tooling (Ansible, Helm, Docker) to a system that uses INI-based configs, converting your YAML configuration files to INI saves hours of manual reformatting.'],
                  ['Standardising a mixed codebase', 'Monorepos and large projects often accumulate both YAML and INI config files across different services. A YAML to INI file converter helps you audit and consolidate into a single format.'],
                  ['Debugging config differences', 'Seeing the same configuration expressed in both YAML and INI side by side often reveals structure assumptions that aren\'t obvious in either format alone.'],
                ].map(([title, desc], i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Format comparison */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">YAML vs INI Format — Side-by-Side Comparison</h2>
              <p className="text-muted-foreground mb-4">
                The same configuration expressed in both formats:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">YAML / YML</p>
                  <pre className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-foreground overflow-x-auto">{`database:
  host: localhost
  port: 5432
  name: mydb

server:
  host: 0.0.0.0
  port: 8080
  debug: true`}</pre>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2">INI</p>
                  <pre className="bg-muted/50 border border-border rounded-lg p-4 text-sm text-foreground overflow-x-auto">{`[database]
host = localhost
port = 5432
name = mydb

[server]
host = 0.0.0.0
port = 8080
debug = true`}</pre>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                YAML nested objects map directly to INI sections. The <strong className="text-foreground">YAML to INI online</strong> converter handles this mapping automatically — including deeper nesting, which is flattened using dotted key notation (<code className="text-foreground bg-muted px-1 rounded">parent.child = value</code>).
              </p>
            </div>

            {/* How to use */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Use This YML to INI Online Tool</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Open your <code className="text-foreground bg-muted px-1 rounded">.yaml</code> or <code className="text-foreground bg-muted px-1 rounded">.yml</code> file in a text editor and copy the contents.</li>
                <li>Paste the YAML content into the input panel above.</li>
                <li>Click <strong className="text-foreground">Convert</strong> — the INI output appears instantly in the right panel.</li>
                <li>Click <strong className="text-foreground">Copy</strong> to copy the INI text to your clipboard, or <strong className="text-foreground">Download</strong> to save it as a <code className="text-foreground bg-muted px-1 rounded">.ini</code> file.</li>
              </ol>
              <p className="text-muted-foreground mt-4">
                To go in the other direction, paste an INI file — the <strong className="text-foreground">YAML to INI file converter</strong> automatically detects the input format and converts it to YAML.
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How do I convert YAML to INI?',
                    a: 'Paste your YAML or YML content into the converter above and click Convert. The tool maps each YAML key-value pair to the equivalent INI format, grouping nested objects as INI sections. Download or copy the result when done.',
                  },
                  {
                    q: 'What is the difference between YAML and INI?',
                    a: 'YAML supports complex nested structures, lists, and typed values. INI is a simpler flat format made of [sections] and key=value pairs. INI is widely supported by legacy applications; YAML is standard in modern DevOps tooling like Docker, Kubernetes, and Ansible.',
                  },
                  {
                    q: 'Can I convert a .yml file to .ini?',
                    a: 'Yes — .yml and .yaml are the same format. Paste the contents of your .yml file into the converter and download the resulting .ini file.',
                  },
                  {
                    q: 'Does this tool work as a bidirectional YAML to INI converter?',
                    a: 'Yes. Paste either YAML/YML or INI and the tool detects the format automatically and converts in the right direction.',
                  },
                  {
                    q: 'Are there limitations when converting YAML to INI?',
                    a: 'INI is a flat format, so deeply nested YAML is flattened using dotted key notation (e.g. database.host=localhost). YAML lists and complex types that have no INI equivalent are converted to string representations.',
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
      </ToolPageWrapper>
    </>
  )
}

