import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PasswordStrengthTester } from "@/components/password-strength-tester"
import { AllToolsSection } from "@/components/all-tools-section"

export const metadata: Metadata = {
  title: "Password Strength Tester | Test Your Password Security",
  description: "Use our free password strength tester to check how secure your passwords are. See how long it would take hackers to crack your password and get tips for creating stronger passwords.",
  keywords: ["password strength tester", "password checker", "password security", "password meter", "check password strength", "password analyzer"],
  openGraph: {
    title: "Password Strength Tester | Test Your Password Security",
    description: "Test how secure your passwords are with our free password strength tester. See estimated crack times and get tips for stronger passwords.",
  },
}

export default function PasswordStrengthTesterPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link 
                href="/tools" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Tools
              </Link>

              {/* Header */}
              <div className="text-center mb-12">
                <h1 id="password-strength-tester" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Password Strength Tester
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                  Our password strength tester analyzes your password in real-time to show you exactly how secure it is. See how long it would take modern computers to crack your password and learn how to create unbreakable passwords.
                </p>
              </div>

              {/* Tool */}
              <div className="mb-16">
                <PasswordStrengthTester />
              </div>

              {/* Educational Content */}
              <article className="prose prose-invert max-w-none">
                <h2 id="how-it-works" className="text-2xl font-bold text-foreground mb-4">How the Password Strength Tester Works</h2>
                <p className="text-muted-foreground mb-6">
                  This password strength tester uses entropy-based calculations to estimate password security. It analyzes the character set diversity (lowercase, uppercase, numbers, symbols) and password length to calculate how many possible combinations exist. The crack time estimate assumes an attacker with access to modern GPU clusters capable of 10 billion guesses per second.
                </p>

                <h2 id="understanding-entropy" className="text-2xl font-bold text-foreground mb-4 mt-8">Understanding Password Entropy</h2>
                <p className="text-muted-foreground mb-4">
                  Entropy is a measure of randomness and unpredictability. Higher entropy means more possible password combinations:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li><strong className="text-foreground">Less than 28 bits:</strong> Very weak - can be cracked in seconds</li>
                  <li><strong className="text-foreground">28-35 bits:</strong> Weak - vulnerable to quick attacks</li>
                  <li><strong className="text-foreground">36-59 bits:</strong> Fair - offers some protection</li>
                  <li><strong className="text-foreground">60-79 bits:</strong> Strong - good for most purposes</li>
                  <li><strong className="text-foreground">80+ bits:</strong> Very strong - highly secure</li>
                </ul>

                <h2 id="why-password-strength-matters" className="text-2xl font-bold text-foreground mb-4 mt-8">Why Password Strength Matters</h2>
                <p className="text-muted-foreground mb-4">
                  Weak passwords are the leading cause of data breaches. Hackers use several attack methods:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li><strong className="text-foreground">Brute Force:</strong> Trying every possible combination</li>
                  <li><strong className="text-foreground">Dictionary Attacks:</strong> Testing common words and phrases</li>
                  <li><strong className="text-foreground">Rainbow Tables:</strong> Using precomputed password hashes</li>
                  <li><strong className="text-foreground">Credential Stuffing:</strong> Using passwords leaked from other sites</li>
                </ul>

                <h2 id="creating-strong-passwords" className="text-2xl font-bold text-foreground mb-4 mt-8">How to Create Strong Passwords</h2>
                <p className="text-muted-foreground mb-4">
                  Follow these best practices for maximum security:
                </p>
                <ol className="space-y-2 text-muted-foreground mb-6 list-decimal list-inside">
                  <li>Use at least 12-16 characters (longer is always better)</li>
                  <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
                  <li>Avoid personal information like names, birthdays, or addresses</li>
                  <li>Don&apos;t use common words or phrases from dictionaries</li>
                  <li>Consider using a passphrase - a series of random words with modifications</li>
                  <li>Use a unique password for every account</li>
                  <li>Consider using a password manager to generate and store complex passwords</li>
                </ol>

                <h2 id="passphrase-examples" className="text-2xl font-bold text-foreground mb-4 mt-8">Strong Password Examples</h2>
                <p className="text-muted-foreground mb-4">
                  Here are examples of strong password patterns (don&apos;t use these exact passwords!):
                </p>
                <div className="bg-card border border-border rounded-lg p-4 mb-6">
                  <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                    <li>Tr0ub4dor&3#Horse (modified words with substitutions)</li>
                    <li>Coffee$Monkey&Flying!42 (random word combination)</li>
                    <li>xK9#mP2@vL5nQ8$wR (random character string)</li>
                    <li>Purple-Elephant-Dances-789! (passphrase with numbers)</li>
                  </ul>
                </div>

                <h2 id="related-tools" className="text-2xl font-bold text-foreground mb-4 mt-8">Related Tools</h2>
                <p className="text-muted-foreground mb-4">
                  Check out our other encoding and security tools:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <Link href="/" className="text-primary hover:underline">Letters to Numbers Converter</Link> - Convert text to various numeric encodings
                  </li>
                  <li>
                    <Link href="/tools/cipher-identifier" className="text-primary hover:underline">Cipher Identifier</Link> - Identify encryption and encoding types
                  </li>
                  <li>
                    <Link href="/tools/book-cipher-decoder" className="text-primary hover:underline">Book Cipher Decoder</Link> - Decode messages hidden in book references
                  </li>
                </ul>
              </article>

              {/* FAQ Section */}
              <section className="mt-16">
                <h2 id="faq" className="text-2xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Is my password sent to your servers?</h3>
                    <p className="text-muted-foreground">No. This password strength tester runs entirely in your browser. Your password never leaves your device and is never transmitted over the internet.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">How accurate are the crack time estimates?</h3>
                    <p className="text-muted-foreground">The estimates assume an attacker with access to modern GPU clusters capable of 10 billion guesses per second. Actual crack times may vary based on the attacker&apos;s resources and whether your password contains common patterns.</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">What makes a password &quot;strong&quot;?</h3>
                    <p className="text-muted-foreground">A strong password has high entropy - meaning many possible combinations. This comes from using a mix of character types (uppercase, lowercase, numbers, symbols) and sufficient length (12+ characters).</p>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-2">Should I use a password manager?</h3>
                    <p className="text-muted-foreground">Yes! Password managers help you generate and securely store unique, complex passwords for every account. This is much more secure than reusing passwords or using simple ones you can remember.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* All Tools Section */}
        <AllToolsSection />
      </main>
      
      <SiteFooter />
    </div>
  )
}
