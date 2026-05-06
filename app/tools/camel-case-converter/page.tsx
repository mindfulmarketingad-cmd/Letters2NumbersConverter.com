import { CamelCaseConverter } from "@/components/camel-case-converter"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Camel Case Converter",
  description: "Camel Case Converter - Convert any text to camelCase or PascalCase format instantly. Supports snake_case, kebab-case, space-separated text, and batch processing for multiple lines.",
  keywords: ["camel case converter", "camelCase", "PascalCase", "text converter", "snake case to camel case", "kebab case converter"],
  openGraph: {
    title: "Camel Case Converter | Letters2NumbersConverter.com",
    description: "Free online Camel Case Converter - Transform text to camelCase or PascalCase with real-time conversion.",
    type: "website",
    url: "https://www.letters2numbersconverter.com/tools/camel-case-converter",
  },
  alternates: {
    canonical: "https://www.letters2numbersconverter.com/tools/camel-case-converter",
  },
}

export default function CamelCaseConverterPage() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Camel Case Converter",
    description: "Convert any text to camelCase or PascalCase format instantly with support for multiple input formats and batch processing",
    url: "https://www.letters2numbersconverter.com/tools/camel-case-converter",
    applicationCategory: "UtilityApplication",
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
        id="camel-case-schema"
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
                Text Formatting Tool
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Camel Case Converter
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                Camel Case Converter transforms any text to camelCase or PascalCase format instantly with our free online tool. Real-time conversion supports snake_case, kebab-case, space-separated text, and batch processing for multiple lines.
              </p>

              {/* Who is this for */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Developers</p>
                  <p className="text-sm text-muted-foreground">Writing code with consistent naming conventions</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Frontend Engineers</p>
                  <p className="text-sm text-muted-foreground">Converting variable and function names quickly</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">Content Creators</p>
                  <p className="text-sm text-muted-foreground">Formatting text for code snippets and documentation</p>
                </div>
              </div>
            </div>

            {/* Converter */}
            <div className="max-w-4xl mx-auto mb-12">
              <CamelCaseConverter />
            </div>

            {/* Features Section */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How the Camel Case Converter Works</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">camelCase Format:</strong> The first word starts lowercase, and each subsequent word is capitalized without spaces or separators. For example, &apos;hello world&apos; becomes &apos;helloWorld&apos;.
                  </p>
                  <p>
                    <strong className="text-foreground">PascalCase Format:</strong> Every word starts with a capital letter, with no spaces or separators between words. The same example becomes &apos;HelloWorld&apos;.
                  </p>
                  <p>
                    <strong className="text-foreground">Multiple Input Formats:</strong> The converter intelligently recognizes and processes space-separated text, snake_case (user_name), kebab-case (user-name), and mixed formats.
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
                      <span>Real-time camelCase and PascalCase conversion</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Supports multiple input formats (snake_case, kebab-case, spaces)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Batch processing for multiple lines at once</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Character count tracking</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>One-click copy to clipboard</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>100% free, no registration required</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Format Comparison</h3>
                  <div className="text-sm text-muted-foreground space-y-3 font-mono">
                    <div>
                      <p className="font-medium text-foreground mb-1">camelCase:</p>
                      <p>firstName, lastName, getUserData</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">PascalCase:</p>
                      <p>FirstName, LastName, GetUserData</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">snake_case:</p>
                      <p>first_name, last_name, get_user_data</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">kebab-case:</p>
                      <p>first-name, last-name, get-user-data</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Common Use Cases</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting variable names when migrating between programming languages</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Formatting API response field names for JavaScript objects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting SQL column names to JavaScript variable names</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Batch converting component names for React applications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Creating consistent naming conventions in code documentation</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Converting database field names to function/method names</span>
                  </li>
                </ul>
              </div>

              {/* Naming Conventions Guide */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Naming Conventions Guide</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground mb-1">✓ camelCase - Best for:</p>
                    <p>JavaScript variables, function names, CSS class names (in JavaScript), object properties</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">✓ PascalCase - Best for:</p>
                    <p>Class names (Java, C#, Python), React component names, TypeScript interfaces, constructor functions</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">✓ snake_case - Best for:</p>
                    <p>Python variables and functions, database table and column names, CSS class names (traditional)</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">✓ kebab-case - Best for:</p>
                    <p>CSS class names and IDs, HTML file and folder names, URL slugs and routes</p>
                  </div>
                </div>
              </div>

              {/* Examples */}
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Real-World Examples</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-mono">
                  <div>
                    <p className="font-semibold text-foreground mb-3">From snake_case (Python)</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto text-muted-foreground">
{`get_user_data
calculate_total_price
is_admin_user`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">To camelCase (JavaScript)</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto text-foreground">
{`getUserData
calculateTotalPrice
isAdminUser`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">From kebab-case (HTML/CSS)</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto text-muted-foreground">
{`get-header-element
is-active-button
user-profile-card`}
                    </pre>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-3">To PascalCase (React/TypeScript)</p>
                    <pre className="bg-background p-3 rounded text-xs overflow-x-auto text-foreground">
{`GetHeaderElement
IsActiveButton
UserProfileCard`}
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
                    <p className="text-sm text-muted-foreground">Transform letters to numbers with multiple encoding formats</p>
                  </Link>
                  <Link
                    href="/tools/json-to-java-code-generator"
                    className="p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-foreground">JSON to Java Code Generator</p>
                    <p className="text-sm text-muted-foreground">Convert JSON schemas to Java objects with getters and setters</p>
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
