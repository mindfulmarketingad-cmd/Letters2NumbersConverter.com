import { Metadata } from "next"
import { EquationSolver } from "@/components/equation-solver"

export const metadata: Metadata = {
  title: "Fill In The Blanks Equation Solver - Find Missing Digits & Operators",
  description: "Fill In The Blanks Equation Solver helps you solve math puzzles with missing digits or operators. Enter equations with ? and find all possible solutions instantly. Free online tool.",
  keywords: ["fill in the blanks equation solver", "missing digits", "missing operators", "equation solver", "math puzzle"],
  openGraph: {
    title: "Fill In The Blanks Equation Solver",
    description: "Solve math equations with missing digits or operators",
    type: "website",
  },
}

export default function EquationSolverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Fill In The Blanks Equation Solver",
    description: "Solve mathematical equations with missing digits or operators",
    url: "https://letters2numbersconverter.com/tools/fill-in-the-blanks-equation-solver",
    applicationCategory: "UtilityApplication",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="flex-1">
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Fill In The Blanks Equation Solver
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                The Fill In The Blanks Equation Solver Online helps you solve mathematical puzzles by finding missing digits or operators. Perfect for students, educators, and math enthusiasts looking to understand equation solving.
              </p>
            </div>

            <div className="w-full mx-auto bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg mb-12">
              <EquationSolver />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Who Is This For?</h2>
                <ul className="space-y-2 text-muted-foreground list-disc list-inside text-sm">
                  <li><strong>Mathematics Students</strong> - Practice solving equations with missing values</li>
                  <li><strong>Teachers & Educators</strong> - Create and solve math puzzles for lessons</li>
                  <li><strong>Parents</strong> - Help children with homework and problem-solving</li>
                  <li><strong>Math Enthusiasts</strong> - Challenge yourself with equation puzzles</li>
                  <li><strong>Test Prep</strong> - Prepare for standardized tests with similar problems</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">How It Works</h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p><strong>Step 1:</strong> Choose whether you're looking for missing digits (0-9) or missing operators (+, -, *, /)</p>
                  <p><strong>Step 2:</strong> Enter your equation with "?" representing the unknown value</p>
                  <p><strong>Step 3:</strong> Click "Calculate" to find all possible solutions</p>
                  <p><strong>Step 4:</strong> Use the generator to create practice exercises</p>
                  <p className="text-xs italic mt-2">Example: "127 + 756 = 77?" or "127 ? 756 = 883"</p>
                </div>
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-8 mb-12 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Understanding Fill In The Blanks</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fill-in-the-blanks equations are mathematical puzzles where one or more parts of an equation are missing and replaced with a question mark (?). Your task is to find the missing digit or operator that makes the equation true.
              </p>
              <div className="space-y-3 mt-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">Missing Digits Example:</p>
                  <p className="font-mono text-sm bg-background border border-border rounded p-2">1 2 7 + 7 5 6 = 7 7 ?</p>
                  <p className="text-sm text-muted-foreground mt-1">Answer: 127 + 756 = 883 (missing digit is 3)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Missing Operators Example:</p>
                  <p className="font-mono text-sm bg-background border border-border rounded p-2">1 2 7 ? 7 5 6 = 8 8 3</p>
                  <p className="text-sm text-muted-foreground mt-1">Answer: 127 + 756 = 883 (missing operator is +)</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 mb-12 space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Practice Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-2">Difficulty Levels</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li><strong>Easy:</strong> Single-digit numbers (1-9)</li>
                    <li><strong>Medium:</strong> Two-digit numbers (10-49)</li>
                    <li><strong>Hard:</strong> Three-digit numbers (100-499)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Supported Operations</p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li><strong>Addition (+)</strong> - Sum operations</li>
                    <li><strong>Subtraction (-)</strong> - Difference operations</li>
                    <li><strong>Multiplication (*)</strong> - Product operations</li>
                    <li><strong>Division (/)</strong> - Quotient operations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground">FAQ</h2>
              <div className="space-y-3">
                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    Can the equation have multiple missing values?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Currently, the solver finds one missing value at a time. For best results, use one "?" per equation.
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    What operators are supported?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    The solver supports four basic arithmetic operators: Addition (+), Subtraction (-), Multiplication (*), and Division (/).
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    How do I format my equation?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Enter equations in standard format with spaces: "number operator number = result". Use "?" for the missing value. Example: "127 + 756 = 77?"
                  </p>
                </details>

                <details className="bg-card border border-border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-foreground group-open:text-primary">
                    Can I generate practice problems?
                  </summary>
                  <p className="text-muted-foreground mt-3 text-sm">
                    Yes! Use the "Fill In The Blanks Generator" to create custom practice exercises with different difficulty levels.
                  </p>
                </details>
              </div>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Related Math Tools</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Explore other equation solving and math tools available on Letters2NumbersConverter:</p>
                <ul className="space-y-1 list-disc list-inside mt-3">
                  <li><a href="/tools/decimal-to-hexadecimal-converter-online" className="text-primary hover:underline">Decimal to Hexadecimal Converter</a> - Convert number systems</li>
                  <li><a href="/tools/cistercian-numerals-converter" className="text-primary hover:underline">Cistercian Numerals Converter</a> - Medieval number systems</li>
                  <li><a href="/tools/egyptian-numbers-converter" className="text-primary hover:underline">Egyptian Numbers Converter</a> - Ancient numeral systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
