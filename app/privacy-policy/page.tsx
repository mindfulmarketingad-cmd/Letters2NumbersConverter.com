import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Letter2Num",
  description: "Learn about how Letter2Num collects, uses, and protects your personal information.",
}

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Last updated: January 1, 2026
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Introduction</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Welcome to Letter2Num. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Information We Collect</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We collect information that you voluntarily provide to us when you use our services or contact us:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2"><strong>Contact Information:</strong> If you contact us, we may collect your name, email address, and any other information you provide in your message.</li>
              <li className="mb-2"><strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and pages visited.</li>
              <li className="mb-2"><strong>Cookies:</strong> We use cookies and similar tracking technologies to collect information. See our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link> for more details.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How We Use Your Information</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We use the information we collect for the following purposes:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2">To provide and maintain our website and services</li>
              <li className="mb-2">To respond to your inquiries and provide customer support</li>
              <li className="mb-2">To analyze usage patterns and improve our website</li>
              <li className="mb-2">To protect against fraudulent or illegal activity</li>
              <li className="mb-2">To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Data Processing</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our letter-to-number conversion tool processes text entirely in your browser. We do not store, transmit, or save any text you enter into the converter. Your data remains on your device and is not sent to our servers.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Information Sharing</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2"><strong>Service Providers:</strong> We may share information with third-party vendors who provide services on our behalf, such as hosting and analytics.</li>
              <li className="mb-2"><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests.</li>
              <li className="mb-2"><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Data Security</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Your Rights</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="text-foreground mb-6 list-disc list-inside">
              <li className="mb-2">The right to access your personal information</li>
              <li className="mb-2">The right to correct inaccurate information</li>
              <li className="mb-2">The right to delete your personal information</li>
              <li className="mb-2">The right to object to processing</li>
              <li className="mb-2">The right to data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Children&apos;s Privacy</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-foreground leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Contact Us</h2>
            <p className="text-foreground leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our data practices, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
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
