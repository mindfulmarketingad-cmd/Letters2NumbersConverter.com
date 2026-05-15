import { Metadata } from 'next'
import { PdfGrayscaleConverter } from '@/components/pdf-grayscale-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/pdf-to-grayscale-converter`

const toolSchema = generateToolPageSchema(
  'PDF to Grayscale Converter',
  'Convert any PDF to grayscale online, free. All pages are converted using the luminosity method and bundled into a downloadable grayscale PDF. No upload required — runs in your browser.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'PDF to Grayscale Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "PDF To Grayscale Converter" },
  description: 'Convert any PDF to grayscale online for free. All pages rendered and converted using the luminosity formula, then bundled into a downloadable grayscale PDF. No sign-up, no upload — runs in your browser.',
  keywords: [
    'PDF to grayscale converter',
    'convert PDF to grayscale',
    'PDF to black and white',
    'grayscale PDF online',
    'PDF black white converter',
    'remove color from PDF',
    'PDF grayscale free',
    'convert PDF to black and white online',
    'PDF color to grayscale',
    'PDF desaturate online',
    'print PDF in black and white',
    'PDF grayscale converter free',
    'online PDF grayscale tool',
  ],
  openGraph: {
    title: 'PDF to Grayscale Converter — Convert PDF to Black & White Free',
    description: 'Upload any PDF and convert all pages to grayscale instantly in your browser. Download as a clean grayscale PDF. Free, private, no sign-up.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'PDF to Grayscale Converter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to Grayscale Converter — Free & Instant',
    description: 'Convert any PDF to black and white (grayscale) in seconds. All pages, any size. No upload to servers — runs entirely in your browser.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Upload any PDF file (up to 100 MB). The tool loads the PDF using PDF.js, renders each page to a canvas at 2× resolution for sharpness, and converts every pixel to grayscale using the luminosity formula (0.299 × R + 0.587 × G + 0.114 × B). The grayscale pages are then bundled into a new PDF using jsPDF and offered as a download. The entire process runs in your browser — your file is never sent to any server.',
  features: [
    'Converts all pages of any multi-page PDF to grayscale',
    'Luminosity formula for perceptually accurate grayscale (not just desaturation)',
    'Renders at 2× resolution for sharp, print-quality output',
    'Adjustable output quality — balance between file size and sharpness',
    'Preview of page 1 after conversion',
    'Progress bar showing page-by-page processing',
    'Runs 100% in the browser — PDF never leaves your device',
    'Supports PDFs up to 100 MB',
    'No sign-up required — free and instant',
  ],
  whoIsItFor: [
    {
      title: 'Office & Business Users',
      description: 'Printing color PDFs is often significantly more expensive than black-and-white. Convert reports, presentations, and documents to grayscale before printing to reduce costs.',
    },
    {
      title: 'Students & Educators',
      description: 'Convert colorful lecture slides and handouts to grayscale to save on printing costs or to share documents that look clean when printed on monochrome printers.',
    },
    {
      title: 'Designers & Publishers',
      description: 'Check how a designed PDF will look when printed in grayscale — a common requirement for publications that print some copies in color and others in black-and-white.',
    },
    {
      title: 'Accessibility & Compliance',
      description: 'Some document standards and accessibility guidelines require grayscale-compatible designs. Convert to grayscale to verify the document is readable without color.',
    },
    {
      title: 'Legal & Administrative',
      description: 'Many legal filings and administrative submissions require black-and-white documents. Convert color PDFs to grayscale to meet filing requirements.',
    },
    {
      title: 'Privacy-Conscious Users',
      description: 'Since the entire conversion happens in your browser with no server upload, this tool is safe for sensitive documents — contracts, tax forms, medical records, and more.',
    },
  ],
}

export default function PdfToGrayscaleConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="pdf-to-grayscale-converter">
        <ToolLayout
          toolId="pdf-to-grayscale-converter"
          toolName="PDF to Grayscale Converter"
          toolDescription="Convert any PDF to grayscale. All pages are processed in your browser — your file is never uploaded to a server."
          toolComponent={<PdfGrayscaleConverter />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Does Converting a PDF to Grayscale Mean?</h2>
              <p>
                Converting a PDF to grayscale means transforming every colored element in the document — text, images,
                backgrounds, charts, and graphics — into shades of gray ranging from pure white to pure black. The
                result is a PDF that contains no color information, only luminance values. This is sometimes called
                "black and white" conversion, though technically grayscale includes all the intermediate gray tones
                between black and white.
              </p>
              <p>
                Unlike simply printing a color PDF with a monochrome printer setting (which may produce inconsistent
                results depending on the printer driver), this tool performs the conversion at the document level,
                so the downloaded PDF is genuinely grayscale and will print consistently on any printer.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Why Convert a PDF to Grayscale?</h2>
              <p>There are several practical reasons to work with grayscale PDFs:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Printing cost reduction.</strong> Color ink and toner cartridges are significantly more
                  expensive than black ink. Converting documents to grayscale before printing — especially long
                  reports, presentations, or handouts — can meaningfully reduce printing costs over time.
                </li>
                <li>
                  <strong>Checking print readability.</strong> Designers often need to verify that a color document
                  is still legible when printed in black and white. Charts, infographics, and maps that rely on
                  color to distinguish between elements may become unreadable in grayscale. Converting to grayscale
                  lets you identify these issues before printing thousands of copies.
                </li>
                <li>
                  <strong>Filing requirements.</strong> Many legal systems, government agencies, and academic
                  institutions require document submissions to be in black and white. Converting to grayscale
                  ensures compliance.
                </li>
                <li>
                  <strong>Smaller file sizes.</strong> Grayscale images require less data than color images (roughly
                  one-third the storage for equivalent resolution). Documents with many color images often become
                  significantly smaller in file size after grayscale conversion.
                </li>
                <li>
                  <strong>Accessibility.</strong> Some readers are colorblind or print on monochrome devices.
                  A grayscale PDF guarantees that all content is accessible without relying on color to convey
                  meaning.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">The Luminosity Method vs. Simple Desaturation</h2>
              <p>
                There are multiple ways to mathematically convert a color pixel to grayscale, and they produce
                visibly different results. This tool uses the <strong>luminosity method</strong>, which is widely
                regarded as the most perceptually accurate approach.
              </p>
              <p>
                The luminosity formula weights the red, green, and blue channels according to how sensitive the
                human eye is to each color: <code>gray = 0.299 × R + 0.587 × G + 0.114 × B</code>.
              </p>
              <p>
                The key insight is that humans are most sensitive to green light and least sensitive to blue light.
                A pure blue pixel appears much darker to our eyes than a pure green pixel of the same theoretical
                brightness. The luminosity formula accounts for this, so the resulting grayscale image looks natural
                and faithful to the perceived brightness of the original.
              </p>
              <p>
                By contrast, simple desaturation (average of R, G, B ÷ 3) gives equal weight to all channels,
                producing results that look flat and sometimes inverted in brightness relative to what the eye
                expects. The luminosity method is used in professional imaging software including Photoshop,
                GIMP, and the CSS grayscale filter for the same reason.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">How the Browser-Based Conversion Works</h2>
              <p>
                Unlike most online PDF tools that upload your file to a remote server, this converter runs entirely
                in your browser using two open-source libraries:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>PDF.js</strong> — Mozilla&apos;s JavaScript PDF rendering engine, used here to read your
                  PDF and render each page onto an HTML canvas element at 2× resolution for sharp output.
                </li>
                <li>
                  <strong>jsPDF</strong> — A JavaScript library for generating PDF files in the browser, used to
                  bundle the grayscale page images into a downloadable PDF document.
                </li>
              </ul>
              <p>
                The conversion pipeline for each page is: render to canvas → read pixel data → apply luminosity
                formula → write back → export as high-quality JPEG → embed in new PDF. Your original PDF file
                stays in your browser&apos;s memory only and is never transmitted over a network.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Understanding the Quality Setting</h2>
              <p>
                The quality slider controls the JPEG compression used when embedding each page into the output PDF.
                Higher quality means less compression, better visual fidelity, and a larger output file. Lower quality
                means more compression, slightly softer visuals, and a smaller file.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Maximum quality (95%+):</strong> Best for documents where every detail matters —
                  technical drawings, small text, fine print. Produces the largest output file.
                </li>
                <li>
                  <strong>High quality (85–94%):</strong> The best default for most documents. Excellent visual
                  quality at a moderate file size. Text and images both look sharp.
                </li>
                <li>
                  <strong>Medium quality (75–84%):</strong> Good for documents with large images where file
                  size matters more than perfect sharpness. Text may show mild compression artifacts at very
                  small font sizes.
                </li>
                <li>
                  <strong>Compact (60–74%):</strong> Produces the smallest output. Suitable for documents that
                  will only be viewed on screen and not printed. Noticeable compression on complex images but
                  readable for most text.
                </li>
              </ul>
              <p>
                For most office documents and presentations, High quality (around 90%) produces a PDF that is
                visually indistinguishable from the original at normal viewing sizes while being significantly
                smaller than Maximum.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Limitations to Be Aware Of</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Password-protected PDFs.</strong> The tool cannot open encrypted or password-protected
                  PDFs. Remove the password protection first using a PDF editor, then convert.
                </li>
                <li>
                  <strong>Very large PDFs.</strong> PDFs with many high-resolution pages (100+ pages of detailed
                  content) may take a minute or more to process, since each page is individually rendered and
                  converted. Processing happens page by page, so the progress bar shows real-time status.
                </li>
                <li>
                  <strong>Complex vector graphics.</strong> The conversion works by rendering each PDF page as
                  a rasterized image and re-embedding it. This means the output is image-based rather than vector-
                  based — text in the output is no longer selectable or searchable. This is a trade-off inherent
                  to browser-based PDF rendering.
                </li>
                <li>
                  <strong>Interactive elements.</strong> Form fields, hyperlinks, embedded videos, and JavaScript
                  are not preserved in the output — only the visual appearance of each page is captured.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Is this tool completely free?</p>
                  <p>Yes. The PDF to Grayscale Converter is free with no account required. No usage limits apply since all processing happens locally in your browser.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is my PDF sent to a server?</p>
                  <p>No. The entire conversion happens in your browser using JavaScript. Your PDF never leaves your device. This makes the tool safe to use with sensitive, confidential, or personal documents.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">How large a PDF can I convert?</p>
                  <p>The tool accepts PDFs up to 100 MB. Very large files may take longer to process depending on your device&apos;s processing power. A 100-page, 50 MB PDF typically converts in 30–60 seconds on a modern laptop.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Will the output look different from the original?</p>
                  <p>The layout and visual structure of each page is preserved exactly. Colors become shades of gray. Text, images, tables, and graphics all convert faithfully using the luminosity formula. The main difference is that text is no longer selectable in the output PDF since pages are rasterized.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I convert specific pages only?</p>
                  <p>Currently the tool converts all pages. To convert specific pages, you can first split the PDF into individual pages using a PDF splitter tool, then convert the pages you need.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What formats does the tool accept?</p>
                  <p>The tool accepts standard PDF files (.pdf). It does not currently support converting Word documents, PowerPoint files, or image files directly — these should be converted to PDF first.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
