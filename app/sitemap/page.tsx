import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: { absolute: "Sitemap" },
  description: "Browse all pages on Letters2NumbersConverter.com — your complete guide to letter-to-number conversion tools, cipher decoders, and resources.",
}

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <article className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Sitemap
          </h1>

          <div className="space-y-10">
            {/* Main Pages */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Main Pages</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-primary hover:underline">
                    Home - Letter to Number Converter Tool
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-primary hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-primary hover:underline">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-primary hover:underline">
                    Pricing
                  </Link>
                </li>
              </ul>
            </section>

            {/* Blog Posts */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Blog Posts</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog/letter-number-conversion-data-science" className="text-primary hover:underline">
                    Applications of Letter-Number Conversion in Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/blog/understanding-ascii-character-encoding" className="text-primary hover:underline">
                    Understanding ASCII and Character Encoding
                  </Link>
                </li>
                <li>
                  <Link href="/blog/puzzle-solving-letter-number-conversion" className="text-primary hover:underline">
                    Puzzle Solving with Letter-Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/educational-uses-letter-number-conversion" className="text-primary hover:underline">
                    Educational Uses of Letter-Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-number-converters-cryptography" className="text-primary hover:underline">
                    Uses of Letter to Number Converters in Cryptography
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-manually-check-letter-number-conversion" className="text-primary hover:underline">
                    How to Manually Check Letter to Number Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-to-numbers-code" className="text-primary hover:underline">
                    Letter to Numbers Code: Complete Guide to A1Z26 Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/blog/how-to-solve-letter-number-puzzles" className="text-primary hover:underline">
                    How to Solve Letter Number Puzzles: Expert Tips
                  </Link>
                </li>
                <li>
                  <Link href="/blog/letter-number-substitution-puzzles" className="text-primary hover:underline">
                    Letter Number Substitution Puzzles: Types & Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/blog/abc-to-number-code" className="text-primary hover:underline">
                    ABC to Number Code: Simple Guide for Everyone
                  </Link>
                </li>
              </ul>
            </section>

            {/* Tools */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Tools - Encoding & Conversion (71 Tools)</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tools" className="text-primary hover:underline font-semibold">
                    All Tools Directory
                  </Link>
                </li>
              </ul>
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Letter & Number Conversion</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/letter-number-converter" className="text-primary hover:underline">
                    Letter to Number Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/numbers-to-letters" className="text-primary hover:underline">
                    Numbers to Letters Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a1z26-translator" className="text-primary hover:underline">
                    A1Z26 Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a1z26-decoder-and-encoder" className="text-primary hover:underline">
                    A1Z26 Decoder and Encoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a0z25-cipher-translator" className="text-primary hover:underline">
                    A0Z25 Cipher Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a0z25-converter" className="text-primary hover:underline">
                    A0Z25 Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/a0z25-decoder" className="text-primary hover:underline">
                    A0Z25 Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/alphanumeric-conversion-tool" className="text-primary hover:underline">
                    Alphanumeric Conversion Tool
                  </Link>
                </li>
                <li>
                  <Link href="/tools/word-to-number-translator" className="text-primary hover:underline">
                    Word to Number Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/letter-to-phone-number-converter" className="text-primary hover:underline">
                    Letter to Phone Number Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/ivr-alphanumeric-conversion-tool" className="text-primary hover:underline">
                    IVR Alphanumeric Conversion Tool
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Cipher & Cryptography</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/nato-phonetic-alphabet" className="text-primary hover:underline">
                    NATO Phonetic Alphabet Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/morse-code-to-base64" className="text-primary hover:underline">
                    Morse Code to Base64
                  </Link>
                </li>
                <li>
                  <Link href="/tools/atbash-cipher-decoder" className="text-primary hover:underline">
                    Atbash Cipher Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/baconian-cipher" className="text-primary hover:underline">
                    Baconian Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/tools/hexahue-cipher" className="text-primary hover:underline">
                    Hexahue Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/tools/tapcode-translator" className="text-primary hover:underline">
                    Tapcode Translator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/skip-cipher" className="text-primary hover:underline">
                    Skip Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/tools/skip-cipher-decoder" className="text-primary hover:underline">
                    Skip Cipher Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/vernam-cipher-decoder" className="text-primary hover:underline">
                    Vernam Cipher Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cipher-identifier" className="text-primary hover:underline">
                    Cipher Identifier
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Advanced Ciphers & Cryptograms</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/playfair-cipher-solver" className="text-primary hover:underline">
                    Playfair Cipher Solver
                  </Link>
                </li>
                <li>
                  <Link href="/tools/monoalphabetic-substitution-cipher" className="text-primary hover:underline">
                    Monoalphabetic Substitution Cipher
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cryptogram-generator" className="text-primary hover:underline">
                    Cryptogram Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cryptogram-solver" className="text-primary hover:underline">
                    Cryptogram Solver
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cryptogram-solver-free" className="text-primary hover:underline">
                    Cryptogram Solver - Free
                  </Link>
                </li>
                <li>
                  <Link href="/tools/book-cipher-decoder" className="text-primary hover:underline">
                    Book Cipher Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/enigma-machine-emulator" className="text-primary hover:underline">
                    Enigma Machine Emulator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/steganography-image-decoder" className="text-primary hover:underline">
                    Steganography Image Decoder
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Number Systems & Numeral Converters</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/decimal-to-hexadecimal-converter-online" className="text-primary hover:underline">
                    Decimal to Hexadecimal Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/mayan-numeral-converter" className="text-primary hover:underline">
                    Mayan Numeral Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/babylonian-numeral-converter" className="text-primary hover:underline">
                    Babylonian Numeral Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cistercian-numerals-converter" className="text-primary hover:underline">
                    Cistercian Numerals Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/egyptian-numbers-converter" className="text-primary hover:underline">
                    Egyptian Numbers Converter
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Text & Data Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/text-frequency-analysis" className="text-primary hover:underline">
                    Text Frequency Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/tools/reverse-text-converter" className="text-primary hover:underline">
                    Reverse Text Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/camel-case-converter" className="text-primary hover:underline">
                    Camel Case Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/line-ending-converter" className="text-primary hover:underline">
                    Line Ending Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/online-url-decoder-encoder" className="text-primary hover:underline">
                    Online URL Decoder Encoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/url-percent-encoding-decoding" className="text-primary hover:underline">
                    URL Percent Encoding Decoding
                  </Link>
                </li>
                <li>
                  <Link href="/tools/html-encoder-decoder" className="text-primary hover:underline">
                    HTML Encoder Decoder
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">File & Data Conversion</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/yaml-to-ini-converter" className="text-primary hover:underline">
                    YAML to INI Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/json-to-ini-converter" className="text-primary hover:underline">
                    JSON to INI Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/txt-to-ini-converter" className="text-primary hover:underline">
                    TXT to INI Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/yaml-to-xml-converter" className="text-primary hover:underline">
                    YAML to XML Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/yaml-to-jpg-converter" className="text-primary hover:underline">
                    YAML to JPG Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/json-to-java-code-generator" className="text-primary hover:underline">
                    JSON to Java Code Generator
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Word Games & Solvers</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/anagram-solver" className="text-primary hover:underline">
                    Anagram Solver with Wildcard
                  </Link>
                </li>
                <li>
                  <Link href="/tools/longest-word-using-these-letters-solver" className="text-primary hover:underline">
                    Longest Word Using These Letters Solver
                  </Link>
                </li>
                <li>
                  <Link href="/tools/blossom-solver" className="text-primary hover:underline">
                    Blossom Solver
                  </Link>
                </li>
                <li>
                  <Link href="/tools/fill-in-the-blanks-equation-solver" className="text-primary hover:underline">
                    Fill In The Blanks Equation Solver
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Image & Media Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/base64-image-viewer" className="text-primary hover:underline">
                    Base64 Image Viewer
                  </Link>
                </li>
                <li>
                  <Link href="/tools/audio-spectrogram" className="text-primary hover:underline">
                    Audio Spectrogram
                  </Link>
                </li>
                <li>
                  <Link href="/tools/audio-spectrogram-decoder" className="text-primary hover:underline">
                    Audio Spectrogram Decoder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/black-and-white-photo-to-color-converter" className="text-primary hover:underline">
                    Black and White Photo to Color Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/make-grayscale-image-online" className="text-primary hover:underline">
                    Make Grayscale Image Online
                  </Link>
                </li>
                <li>
                  <Link href="/tools/scan-words-from-image" className="text-primary hover:underline">
                    Scan Words From Image
                  </Link>
                </li>
                <li>
                  <Link href="/tools/placeholder-image-creator" className="text-primary hover:underline">
                    Placeholder Image Creator
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">File Compression & Optimization</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/ppt-compressor" className="text-primary hover:underline">
                    PPT Compressor
                  </Link>
                </li>
                <li>
                  <Link href="/tools/webm-compressor" className="text-primary hover:underline">
                    WEBM Compressor
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Color & Design Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/cmyk-to-pantone-color-converter" className="text-primary hover:underline">
                    CMYK to Pantone Color Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/pantone-to-hex-converter" className="text-primary hover:underline">
                    Pantone to Hex Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/rgb-to-pantone-color-converter" className="text-primary hover:underline">
                    RGB to Pantone Color Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/pie-graph-maker" className="text-primary hover:underline">
                    Pie Graph Maker
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Utility Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/online-random-string-generator" className="text-primary hover:underline">
                    Online Random String Generator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/password-strength-tester" className="text-primary hover:underline">
                    Password Strength Tester
                  </Link>
                </li>
                <li>
                  <Link href="/tools/batch-file-editor" className="text-primary hover:underline">
                    Batch File Editor
                  </Link>
                </li>
                <li>
                  <Link href="/tools/px-vw-converter" className="text-primary hover:underline">
                    PX to VW Converter
                  </Link>
                </li>
                <li>
                  <Link href="/tools/cm-to-pixels-converter" className="text-primary hover:underline">
                    CM to Pixels Converter
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Puzzle & Game Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/escape-room-builder" className="text-primary hover:underline">
                    Escape Room Builder
                  </Link>
                </li>
                <li>
                  <Link href="/tools/tcg-proxy-creator" className="text-primary hover:underline">
                    TCG Proxy Creator
                  </Link>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Calculator Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tools/fill-in-the-blanks-equation-solver" className="text-primary hover:underline">
                    Fill In The Blanks Equation Solver
                  </Link>
                </li>
                <li>
                  <Link href="/tools/grade-curve-calculator" className="text-primary hover:underline">
                    Grade Curve Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/half-birthday-calculator" className="text-primary hover:underline">
                    Half Birthday Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/meq-to-mg-calculator" className="text-primary hover:underline">
                    MEQ to MG Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/tools/playback-speed-calculator" className="text-primary hover:underline">
                    Playback Speed Calculator
                  </Link>
                </li>
              </ul>
            </section>

            {/* Legal Pages */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-4">Legal</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-primary hover:underline">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-primary hover:underline">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  )
}
