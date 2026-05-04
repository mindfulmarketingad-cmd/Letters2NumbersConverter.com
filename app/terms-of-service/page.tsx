import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service for Letters to Numbers Converter Tool. Understand your rights and responsibilities when using our free letter-to-number conversion service.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <article className="py-12 sm:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Converter Tool
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            
            <p className="text-muted-foreground mb-8">
              Last updated: January 1, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By accessing and using Letters to Numbers Converter Tool (&quot;the Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Letters to Numbers Converter Tool provides a free online tool for converting letters to their numerical equivalents using various encoding systems including A1Z26, ASCII, hexadecimal, and binary formats. The Service is provided &quot;as is&quot; without warranties of any kind.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">3. Use of the Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Use the Service in any way that violates applicable laws or regulations</li>
                  <li>Attempt to interfere with or disrupt the Service or servers</li>
                  <li>Use automated systems to access the Service in a manner that sends more requests than a human can reasonably produce</li>
                  <li>Attempt to gain unauthorized access to any portion of the Service</li>
                  <li>Use the Service to transmit malicious code or harmful content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service and its original content, features, and functionality are owned by Letters to Numbers Converter Tool and are protected by international copyright, trademark, and other intellectual property laws. You may use the conversion results freely for personal or commercial purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">5. User Content</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Any text you input into the converter tool is processed locally or temporarily on our servers solely for the purpose of providing the conversion service. We do not store, collect, or retain any text you convert unless you explicitly contact us through our contact form.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In no event shall Letters to Numbers Converter Tool, its operators, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service. Our total liability for any claims arising from the use of the Service shall not exceed the amount you paid for the Service (which is zero, as the Service is free).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">8. Accuracy of Results</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While we strive to provide accurate conversion results, we do not guarantee the accuracy, completeness, or reliability of any conversions. Users are responsible for verifying results for critical applications. The Service should not be used as the sole source of truth for mission-critical operations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the Service after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We reserve the right to terminate or suspend access to our Service immediately, without prior notice, for any reason whatsoever, including without limitation if you breach these Terms of Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
