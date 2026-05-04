import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Letter2Num",
  description: "Learn about how Letter2Num uses cookies and similar technologies on our website.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">A1</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:inline">
              Letter2Num
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
        </div>
      </header>

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Cookie Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Are Cookies</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies help us remember your preferences, understand how you use our site, and improve your overall experience.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How We Use Cookies</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Letter2Num uses cookies for the following purposes:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2"><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the website.</li>
              <li className="mb-2"><strong>Preference Cookies:</strong> These cookies remember your settings and preferences, such as your preferred language or theme (light/dark mode), to provide a more personalized experience.</li>
              <li className="mb-2"><strong>Analytics Cookies:</strong> We may use analytics cookies to understand how visitors interact with our website. This helps us improve our site and services.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Session Cookies</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Session cookies are temporary cookies that are deleted when you close your browser. They help our website remember what you have done on previous pages to avoid re-entering information.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Persistent Cookies</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Persistent cookies remain on your device for a set period of time or until you delete them. They help us recognize you as a returning visitor and remember your preferences.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Third-Party Cookies</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may use third-party services that place cookies on your device. These services help us analyze website traffic and understand user behavior. Third-party cookies are governed by the respective privacy policies of these third parties.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Managing Cookies</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. However, if you block or delete cookies, some features of our website may not function properly.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Here&apos;s how to manage cookies in popular browsers:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2">Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
              <li className="mb-2">Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
              <li className="mb-2">Safari: Preferences &gt; Privacy &gt; Cookies</li>
              <li className="mb-2">Edge: Settings &gt; Privacy &gt; Cookies</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the latest information about our use of cookies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you have any questions about our use of cookies, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </nav>
            <p className="text-muted-foreground text-sm">
              &copy; 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
