import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Disclaimer" },
  description: "Disclaimer for Letters2NumbersConverter.com. Important information about the use of our free online tools and content.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 id="disclaimer" className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Disclaimer
            </h1>

            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Last updated: January 2024
              </p>

              <h2 id="website-disclaimer" className="text-xl font-bold text-foreground mt-8 mb-4">Website Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The information provided by Letters2NumbersConverter.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>

              <h2 id="no-liability" className="text-xl font-bold text-foreground mt-8 mb-4">No Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>

              <h2 id="tools-disclaimer" className="text-xl font-bold text-foreground mt-8 mb-4">Tools and Converters Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The tools and converters provided on this website, including but not limited to the Letters to Numbers Converter, NATO Phonetic Alphabet Translator, Phone Number Converter, and Cipher Identifier, are provided &quot;as is&quot; without any guarantees or warranty. While we strive to ensure accuracy in all conversions and analyses, we do not guarantee that the results will be error-free or suitable for any particular purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Users should independently verify any critical conversions or results obtained from our tools before relying on them for important applications.
              </p>

              <h2 id="educational-purposes" className="text-xl font-bold text-foreground mt-8 mb-4">Educational Purposes</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The content on this website, including information about ciphers, encoding methods, and cryptography, is provided for educational purposes only. This information should not be used for any illegal activities, including but not limited to unauthorized access to computer systems or data.
              </p>

              <h2 id="external-links" className="text-xl font-bold text-foreground mt-8 mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.
              </p>

              <h2 id="no-professional-advice" className="text-xl font-bold text-foreground mt-8 mb-4">No Professional Advice</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The site cannot and does not contain professional security or cryptography advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>

              <h2 id="errors-omissions" className="text-xl font-bold text-foreground mt-8 mb-4">Errors and Omissions</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Letters2NumbersConverter.com is not responsible for any errors or omissions or for the results obtained from the use of this information.
              </p>

              <h2 id="fair-use" className="text-xl font-bold text-foreground mt-8 mb-4">Fair Use Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of education, cryptography, and related topics. We believe this constitutes a &quot;fair use&quot; of any such copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>

              <h2 id="changes" className="text-xl font-bold text-foreground mt-8 mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We reserve the right to modify this disclaimer at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website.
              </p>

              <h2 id="contact" className="text-xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any questions about this Disclaimer, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
