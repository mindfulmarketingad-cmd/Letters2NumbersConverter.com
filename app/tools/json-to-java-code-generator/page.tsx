import { JsonToJavaGenerator } from "@/components/json-to-java-generator"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "json to java code generator",
  description: "Free JSON to Java code generator - Convert your JSON schema into Java Object with private variables, getter/setter methods, and inner classes. Instantly generate production-ready Java code from JSON.",
  keywords: ["json to java", "JSON to Java code generator", "JSON to Java converter", "code generator", "Java class generator", "JSON parser"],
  openGraph: {
    title: "json to java code generator | Letters2NumbersConverter.com",
    description: "Free code generator that converts JSON schema to Java Object with getters, setters, and inner classes for nested objects.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/json-to-java-code-generator",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/json-to-java-code-generator",
  },
}

export default function JsonToJavaGeneratorPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "json to java code generator",
    description: "Free code generator which converts your JSON schema into Java Object with getter setter methods and inner classes",
    url: "https://www.letters2numbersconverter.com/tools/json-to-java-code-generator",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Organization",
      name: "Letters2Numbers",
      url: "https://www.letters2numbersconverter.com",
    },
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="json-java-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <SiteHeader />

      <main className="flex-1">
        <section className="py-12 sm:py-20 bg-gradient-to-b from-card/50 to-background">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Free Code Generation Tool
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                json to java code generator
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                The json to java code generator is a free code generator which converts your JSON (JavaScript Object Notation) schema into Java Object. The JSON keys are converted to private variables with getter setter methods for them. The inner objects in JSON are converted as inner classes in Java Object. Copy the converted JAVA code and make it work for you.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Java Developers</p>
                  <p className="text-sm text-muted-foreground">Working with JSON APIs and data models</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Backend Engineers</p>
                  <p className="text-sm text-muted-foreground">Building API response classes quickly</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Students</p>
                  <p className="text-sm text-muted-foreground">Learning Java and object-oriented programming</p>
                </div>
              </div>
            </div>

            {/* Generator */}
            <div className="max-w-6xl mx-auto mb-12">
              <JsonToJavaGenerator />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Step 1:</strong> Enter your desired Java class name (e.g., Employee, User, Product)
                  </p>
                  <p>
                    <strong className="text-foreground">Step 2:</strong> Paste your JSON schema into the input box
                  </p>
                  <p>
                    <strong className="text-foreground">Step 3:</strong> The generator automatically creates Java code with private fields, getters, and setters
                  </p>
                  <p>
                    <strong className="text-foreground">Step 4:</strong> Copy the generated Java code, download as a .java file, or clear and start over
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Automatic private field generation from JSON keys</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Getter and setter methods for all fields</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Inner classes for nested JSON objects</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Automatic type detection and conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Copy, paste, and download functionality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no sign-up required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Data Type Support</h3>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p className="font-medium text-foreground">Automatically converts to Java types:</p>
                    <ul className="space-y-1 ml-2">
                      <li>• String → String</li>
                      <li>• Numbers → int / double</li>
                      <li>• Booleans → boolean</li>
                      <li>• Arrays → List&lt;Type&gt;</li>
                      <li>• Objects → Custom inner classes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting REST API response schemas to Java POJOs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Generating data model classes from JSON configuration files</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Building JSON serialization/deserialization classes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Quickly scaffolding Java classes from API documentation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Teaching object-oriented programming with real-world data</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Prototyping Java applications from JSON schemas</span>
                  </li>
                </ul>
              </div>

              {/* Example Section */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Example Conversion</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Input JSON:</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono text-muted-foreground">{`{
  "name": "John",
  "salary": 56000,
  "married": true
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Generated Java Code:</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono text-muted-foreground">{`public class Employee {
  private String name;
  private int salary;
  private boolean married;

  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Related Tools */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Explore More Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    href="/"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">Letters to Numbers Converter</p>
                    <p className="text-sm text-muted-foreground">Transform letters to numbers with A1Z26, A0Z25, and more</p>
                  </Link>
                  <Link
                    href="/tools/yaml-to-ini-converter"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">YAML to INI Converter</p>
                    <p className="text-sm text-muted-foreground">Convert configuration files between formats</p>
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
