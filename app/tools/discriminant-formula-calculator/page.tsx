import { Metadata } from 'next'
import { DiscriminantCalculator } from '@/components/discriminant-calculator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/discriminant-formula-calculator`

const toolSchema = generateToolPageSchema(
  'Discriminant Formula Calculator',
  'Free discriminant calculator for quadratic equations. Enter a, b, c — instantly see the discriminant value, nature of roots, step-by-step working, and exact or decimal roots. No sign-up required.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Discriminant Formula Calculator', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "Discriminant Formula Calculator" },
  description: 'Calculate the discriminant of any quadratic equation instantly. Enter a, b, c values to get the discriminant (b² − 4ac), nature of roots, full step-by-step working, and exact or decimal roots. Free, no sign-up.',
  keywords: [
    'discriminant calculator',
    'discriminant formula calculator',
    'b squared minus 4ac',
    'b² - 4ac calculator',
    'quadratic discriminant',
    'nature of roots calculator',
    'quadratic formula calculator',
    'discriminant of quadratic equation',
    'find discriminant',
    'calculate discriminant online',
    'discriminant math calculator',
    'quadratic equation solver',
    'discriminant formula',
    'two real roots calculator',
    'complex roots calculator',
  ],
  openGraph: {
    title: 'Discriminant Formula Calculator — b² − 4ac with Step-by-Step Working',
    description: 'Enter a, b, c for any quadratic equation and instantly see the discriminant, nature of roots, step-by-step calculation, and the roots themselves. Free online math tool.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Discriminant Formula Calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discriminant Formula Calculator — Instant b² − 4ac',
    description: 'Calculate the discriminant of any quadratic equation. See step-by-step working, root nature, and exact or decimal roots. Free.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Enter the three coefficients of your quadratic equation in the form ax² + bx + c = 0. The calculator instantly computes the discriminant using the formula D = b² − 4ac, shows a full step-by-step breakdown of the calculation, identifies the nature of the roots (two distinct real roots, one repeated root, or two complex roots), and then solves for the roots using the quadratic formula. Exact rational roots are shown as fractions; irrational roots are shown as decimal approximations to 6 decimal places.',
  features: [
    'Instant real-time calculation — updates as you type',
    'Full step-by-step discriminant working (6 numbered steps)',
    'Nature of roots with color-coded result (real, repeated, or complex)',
    'Exact rational roots shown as simplified fractions when possible',
    'Decimal approximations for irrational roots (6 d.p.)',
    'Complex root display in a ± bi form',
    'Quadratic formula shown with substituted values',
    'Parabola interpretation (opens up/down, x-axis crossings)',
    'Copy individual results or copy all results at once',
    'Handles negative coefficients, fractions, and decimals',
  ],
  whoIsItFor: [
    {
      title: 'High School Students',
      description: 'Check your discriminant calculations for algebra homework, verify the nature of roots before solving, and follow the step-by-step working to understand the method.',
    },
    {
      title: 'University & College Students',
      description: 'Quickly evaluate discriminants for quadratic equations that appear in calculus, linear algebra, and engineering mathematics problems.',
    },
    {
      title: 'Teachers & Tutors',
      description: 'Generate step-by-step worked examples for any quadratic equation to use in lessons, or quickly check student work during marking.',
    },
    {
      title: 'Exam Preparation',
      description: 'Practice identifying the nature of roots across many equations efficiently — enter coefficients, check your answer against the calculator, and move on.',
    },
    {
      title: 'Engineers & Scientists',
      description: 'Evaluate discriminants that arise in characteristic equations, signal processing, and systems analysis without manual calculation.',
    },
    {
      title: 'Self-Learners',
      description: 'Learn the discriminant formula by experimenting with different values of a, b, and c and observing how the discriminant and root nature change in real time.',
    },
  ],
}

export default function DiscriminantFormulaCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="discriminant-formula-calculator">
        <ToolLayout
          toolId="discriminant-formula-calculator"
          toolName="Discriminant Formula Calculator"
          toolDescription="Enter a, b, c for ax² + bx + c = 0 — instantly get the discriminant (b² − 4ac), nature of roots, step-by-step working, and the roots themselves."
          toolComponent={<DiscriminantCalculator />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is the Discriminant?</h2>
              <p>
                The discriminant is the expression <strong>b² − 4ac</strong> that appears under the square root
                sign in the quadratic formula. For a quadratic equation in the standard form
                <strong> ax² + bx + c = 0</strong>, the discriminant tells you how many real solutions the
                equation has — and what type they are — before you go through the full effort of solving it.
              </p>
              <p>
                The name comes from the Latin <em>discriminare</em>, meaning to distinguish or separate, because
                the discriminant distinguishes between the three possible cases for the roots of a quadratic equation.
                It was named and studied by mathematicians including Arthur Cayley and James Sylvester in the
                19th century, though the underlying relationship had been known since at least the work of
                Al-Khwarizmi in the 9th century.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">The Discriminant Formula</h2>
              <p>
                For any quadratic equation <strong>ax² + bx + c = 0</strong> (where a ≠ 0):
              </p>
              <p className="font-mono text-sm bg-muted rounded px-4 py-3 font-semibold">
                D = b² − 4ac
              </p>
              <p>
                This formula comes directly from the quadratic formula. When you write out
                x = (−b ± √(b² − 4ac)) / (2a), the expression under the square root is the discriminant.
                The square root of the discriminant must be a real number for the equation to have real roots,
                which is only possible when D ≥ 0.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">The Three Cases: What the Discriminant Tells You</h2>

              <h3 className="text-sm font-semibold text-foreground mt-4">Case 1: D &gt; 0 — Two Distinct Real Roots</h3>
              <p>
                When the discriminant is positive, the equation has two different real number solutions.
                The square root of D is a positive real number, so adding and subtracting it from −b gives
                two different values for x.
              </p>
              <p>
                If D is also a perfect square (4, 9, 16, 25, …), then √D is rational, and both roots are
                rational numbers — they can be expressed as exact fractions. If D is not a perfect square,
                the roots are irrational (like 2 + √3) and cannot be expressed as exact fractions.
              </p>

              <h3 className="text-sm font-semibold text-foreground mt-4">Case 2: D = 0 — One Repeated Real Root</h3>
              <p>
                When the discriminant is exactly zero, both roots are equal — the equation has one solution
                repeated twice. This happens because √0 = 0, so both ±0 give the same result: x = −b / (2a).
              </p>
              <p>
                Geometrically, this means the parabola y = ax² + bx + c is tangent to the x-axis — it just
                touches it at exactly one point without crossing. This unique point is called a "double root"
                or "repeated root."
              </p>

              <h3 className="text-sm font-semibold text-foreground mt-4">Case 3: D &lt; 0 — Two Complex (Non-Real) Roots</h3>
              <p>
                When the discriminant is negative, the equation has no real solutions. You cannot take the
                square root of a negative number in the real number system, so both roots are complex numbers
                of the form a ± bi (where i = √−1).
              </p>
              <p>
                Complex roots always come in conjugate pairs: if one root is p + qi, the other is always p − qi.
                Geometrically, this means the parabola y = ax² + bx + c does not intersect the x-axis at all —
                it either lies entirely above it (when a &gt; 0) or entirely below it (when a &lt; 0).
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">How to Calculate the Discriminant: Step-by-Step</h2>
              <p>
                Given the quadratic equation <strong>3x² + 5x − 2 = 0</strong>, here is the full working:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Identify coefficients: a = 3, b = 5, c = −2</li>
                <li>Write the formula: D = b² − 4ac</li>
                <li>Substitute: D = (5)² − 4(3)(−2)</li>
                <li>Calculate b²: (5)² = 25</li>
                <li>Calculate 4ac: 4 × 3 × (−2) = −24</li>
                <li>Subtract: D = 25 − (−24) = 25 + 24 = 49</li>
              </ol>
              <p>
                D = 49 &gt; 0, so there are two distinct real roots. Since 49 is a perfect square (7² = 49),
                both roots are rational: x = (−5 ± 7) / 6, giving x₁ = 2/6 = 1/3 and x₂ = −12/6 = −2.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">The Discriminant and the Quadratic Formula</h2>
              <p>
                The full quadratic formula is:
              </p>
              <p className="font-mono text-sm bg-muted rounded px-4 py-3">
                x = (−b ± √(b² − 4ac)) / (2a)
              </p>
              <p>
                The discriminant D = b² − 4ac is the expression under the radical sign. Once you know D,
                finding the roots is straightforward:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>If D &gt; 0: x = (−b ± √D) / (2a) — two different values</li>
                <li>If D = 0: x = −b / (2a) — one value (since ±0 = 0)</li>
                <li>If D &lt; 0: x = (−b ± i√|D|) / (2a) — two complex values</li>
              </ul>
              <p>
                Calculating the discriminant first is useful because it tells you what type of answer to expect
                before you finish the full quadratic formula, saving you from discovering at the end that you
                need to take the square root of a negative number.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Discriminant in the Context of Parabolas</h2>
              <p>
                The quadratic equation ax² + bx + c = 0 can be interpreted as asking where the parabola
                y = ax² + bx + c crosses the x-axis (where y = 0). The discriminant tells you exactly what
                the parabola looks like relative to the x-axis:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>D &gt; 0:</strong> The parabola crosses the x-axis at two distinct points. The roots
                  are the x-coordinates of those intersection points.
                </li>
                <li>
                  <strong>D = 0:</strong> The parabola is tangent to the x-axis — it touches but does not cross.
                  The vertex of the parabola sits exactly on the x-axis.
                </li>
                <li>
                  <strong>D &lt; 0:</strong> The parabola does not touch the x-axis at all. If a &gt; 0, it
                  floats entirely above; if a &lt; 0, it lies entirely below.
                </li>
              </ul>
              <p>
                This geometric interpretation is why the discriminant is so powerful: it summarizes the
                relationship between a parabola and the x-axis in a single number.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">What does it mean when the discriminant is negative?</p>
                  <p>A negative discriminant means the quadratic equation has no real solutions. The roots exist in the complex number system as a pair of complex conjugates (a + bi and a − bi), but there are no real numbers that satisfy the equation. On a graph, the parabola does not cross the x-axis.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can the discriminant be zero?</p>
                  <p>Yes. When D = 0, the equation has exactly one real solution, called a double or repeated root. The root is x = −b / (2a). This happens when the parabola is tangent to the x-axis — it touches it at exactly one point (the vertex).</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What is a perfect square discriminant?</p>
                  <p>When D is a positive perfect square (1, 4, 9, 16, 25, …), √D is a whole number, so both roots are rational. This means you can express the exact roots as fractions. When D is positive but not a perfect square, the roots are irrational (they involve a square root that cannot be simplified to a fraction).</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Does the discriminant work for equations with fractional or decimal coefficients?</p>
                  <p>Yes. The formula D = b² − 4ac works for any real values of a, b, and c. This calculator accepts decimals and negative values. The roots may be harder to express exactly, but the discriminant calculation is identical.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is there a discriminant for higher-degree polynomials?</p>
                  <p>Yes — discriminants can be defined for polynomials of any degree, though the formulas become much more complex. For a cubic equation ax³ + bx² + cx + d = 0, the discriminant is D = 18abcd − 4b³d + b²c² − 4ac³ − 27a²d². For quadratics, the discriminant is the most commonly encountered version in education.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What happens when a = 0?</p>
                  <p>When a = 0, the equation is no longer quadratic — it becomes a linear equation bx + c = 0 (if b ≠ 0) or has no solution (if b = 0 and c ≠ 0) or infinitely many solutions (if b = 0 and c = 0). The discriminant formula does not apply; this calculator will warn you if you enter a = 0.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
