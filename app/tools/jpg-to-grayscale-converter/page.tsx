import { Metadata } from 'next'
import { JpgGrayscaleConverter } from '@/components/jpg-grayscale-converter'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/jpg-to-grayscale-converter`

const toolSchema = generateToolPageSchema(
  'Convert JPG to Grayscale',
  'Free online JPG to grayscale converter. Upload any JPG, PNG, or WebP image and download it as a grayscale JPG instantly. Luminosity formula for accurate tones. No sign-up required.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'JPG to Grayscale Converter', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "JPG To Grayscale Converter" },
  description: 'Convert any JPG to grayscale online for free. Upload your image, adjust output quality, and download a high-quality grayscale JPG in seconds. No sign-up. 100% private — runs in your browser.',
  keywords: [
    'convert JPG to grayscale',
    'JPG to grayscale converter',
    'JPG to black and white',
    'image to grayscale online',
    'convert image to grayscale',
    'JPEG to grayscale',
    'grayscale image converter',
    'black and white photo converter',
    'remove color from image',
    'desaturate image online',
    'free grayscale converter',
    'online image grayscale',
    'JPG grayscale free',
    'make photo black and white online',
  ],
  openGraph: {
    title: 'Convert JPG to Grayscale — Free & Instant',
    description: 'Upload a JPG and convert it to grayscale instantly in your browser. Adjust output quality, preview side-by-side, and download. Free, private, no sign-up.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'JPG to Grayscale Converter' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert JPG to Grayscale — Free Online Tool',
    description: 'Turn any JPG into a grayscale image instantly. Adjust quality, see before/after, download your result. 100% browser-based — no upload to servers.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Upload any JPG, PNG, or WebP image. The tool renders your image to an HTML canvas and converts every pixel to grayscale using the luminosity formula (0.299 × R + 0.587 × G + 0.114 × B), which matches how the human eye perceives brightness. The grayscale result is displayed side-by-side with the original so you can compare instantly. Adjust the JPG quality slider to balance output file size against visual sharpness, then download your grayscale JPG. Everything runs in your browser — your image is never uploaded to a server.',
  features: [
    'Side-by-side before and after preview',
    'Luminosity formula for perceptually accurate grayscale (not flat desaturation)',
    'Adjustable JPG output quality — balance file size vs. sharpness',
    'Before/after file size comparison with percentage change',
    'Image dimensions displayed (width × height)',
    'Accepts JPG, PNG, WebP, and BMP input — always outputs JPG',
    '100% browser-based — image never leaves your device',
    'No sign-up required — free and instant',
  ],
  whoIsItFor: [
    {
      title: 'Photographers',
      description: 'Quickly convert color photos to black and white to achieve a classic or dramatic look, or to prepare images for publications that require monochrome photos.',
    },
    {
      title: 'Web Designers & Developers',
      description: 'Convert images to grayscale for UI mockups, placeholder images, hover effects, or to test how a design reads without color cues.',
    },
    {
      title: 'Graphic Designers',
      description: 'Check how design assets, illustrations, and photos look in black and white before finalizing a print or layout that will be reproduced monochromatically.',
    },
    {
      title: 'Social Media Content Creators',
      description: 'Create black-and-white posts, stories, or profile images quickly without opening a full photo editor.',
    },
    {
      title: 'Students & Educators',
      description: 'Prepare grayscale images for printed handouts, academic papers, and presentations where color printing is not available or is unnecessarily expensive.',
    },
    {
      title: 'Privacy-Conscious Users',
      description: 'Since conversion happens entirely in your browser, this tool is safe for photos that you do not want to share with external services — family photos, document scans, ID images.',
    },
  ],
}

export default function JpgToGrayscaleConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="jpg-to-grayscale-converter">
        <ToolLayout
          toolId="jpg-to-grayscale-converter"
          toolName="Convert JPG to Grayscale"
          toolDescription="Upload a JPG and download a high-quality grayscale version instantly. Adjust quality, preview side-by-side, and see file size changes."
          toolComponent={<JpgGrayscaleConverter />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is JPG to Grayscale Conversion?</h2>
              <p>
                Converting a JPG to grayscale means replacing the color information in every pixel with a single
                brightness value — a shade of gray ranging from pure white to pure black. The image loses all hue
                and saturation but retains the full range of luminance (lightness/darkness), which is what makes
                a grayscale image still look rich and detailed rather than flat.
              </p>
              <p>
                This is different from simply desaturating an image (which divides equally between red, green,
                and blue channels) or converting to "black and white" in the sense of a pure 1-bit image with no
                intermediate grays. A proper grayscale JPG uses the full 256-level gray scale from 0 (black) to
                255 (white) and preserves the tonal relationships of the original color photograph.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Why the Luminosity Formula Matters</h2>
              <p>
                Not all grayscale conversions look the same. The method used to calculate the gray value from the
                original red, green, and blue channels has a significant effect on how natural and accurate the
                result looks.
              </p>
              <p>
                This tool uses the <strong>luminosity formula</strong>:
              </p>
              <p className="font-mono text-xs bg-muted rounded px-3 py-2">
                Gray = 0.299 × Red + 0.587 × Green + 0.114 × Blue
              </p>
              <p>
                These coefficients reflect how the human visual system perceives brightness. We are most sensitive
                to green light (which makes up about 59% of perceived brightness), moderately sensitive to red
                (about 30%), and least sensitive to blue (about 11%). Using these weights means the grayscale
                conversion matches what you would actually <em>see</em> if you desaturated the image with your eyes.
              </p>
              <p>
                By contrast, simple averaging (R + G + B ÷ 3) gives equal weight to each channel, which makes
                blue elements appear far too bright and red/green elements appear flat. Red flowers look nearly
                as dark as the green leaves around them, which is the opposite of how the eye perceives the scene.
                The luminosity formula is used by professional imaging standards including sRGB, Photoshop, GIMP,
                and the CSS <code>grayscale()</code> filter.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">JPG Quality and File Size</h2>
              <p>
                When you download the grayscale result, it is saved as a JPEG file. JPEG uses lossy compression,
                which means the quality setting controls how much image data is discarded to reduce file size.
                The quality slider lets you choose the right trade-off for your use case:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>95–100% (Maximum):</strong> Near-lossless quality. Use this for archiving, professional
                  printing, or any case where you will edit the image further. File size will be similar to the
                  original.
                </li>
                <li>
                  <strong>85–94% (High):</strong> Excellent visual quality that is indistinguishable from maximum
                  in most viewing contexts, at meaningfully smaller file sizes. The best default for general use.
                </li>
                <li>
                  <strong>75–84% (Medium):</strong> Good quality for screen display, social media, and web use.
                  Some compression artifacts may appear on very sharp edges at high magnification, but the image
                  looks clean at normal sizes.
                </li>
                <li>
                  <strong>50–74% (Compact):</strong> Aggressive compression for the smallest file sizes. Suitable
                  for thumbnails, previews, or low-bandwidth applications. Not recommended for printing.
                </li>
              </ul>
              <p>
                Note that grayscale JPGs are typically significantly smaller than their color equivalents even at
                the same quality setting, because there is one-third as much color information to encode.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Grayscale vs. Black and White vs. Desaturate</h2>
              <p>
                These three terms are often used interchangeably but technically describe different things:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Grayscale</strong> — A color mode using 256 shades of gray. Each pixel has a single
                  brightness value instead of three (R, G, B). This is what this tool produces.
                </li>
                <li>
                  <strong>Black and white (1-bit)</strong> — A pure binary image where each pixel is either
                  fully black or fully white, with no intermediate grays. Used for line art and certain printing
                  techniques (halftone). Radically different from grayscale.
                </li>
                <li>
                  <strong>Desaturate</strong> — Removing color saturation while keeping the file in RGB color
                  mode. The file still contains three channels (R, G, B) but they all have equal values for
                  each pixel. Produces a gray-looking image but is technically not a true grayscale image.
                  Simple averaging desaturation does not use luminosity weighting and therefore looks less
                  natural.
                </li>
              </ul>
              <p>
                This tool performs a true luminosity-weighted grayscale conversion. The output is a standard
                RGB JPEG where all three channels contain the same luminosity value — universally compatible
                with all image viewers, browsers, and applications.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Common Use Cases</h2>
              <p>
                <strong>Portrait photography.</strong> Black-and-white portraits have a timeless, dramatic quality
                that color photos don&apos;t always achieve. Converting a well-lit portrait to grayscale often
                makes the subject&apos;s features more prominent by removing the distraction of skin tones and
                clothing colors.
              </p>
              <p>
                <strong>Product images for print catalogs.</strong> Printed catalogs sometimes include some
                pages in color and others in black and white for cost reasons. Converting product images to
                grayscale before the print run ensures consistent, predictable monochrome rendering rather than
                leaving it to the printer.
              </p>
              <p>
                <strong>Website performance.</strong> Grayscale images are a common lazy-loading pattern — the
                full-color image loads in after the smaller grayscale placeholder has rendered. This gives the
                appearance of a faster page load.
              </p>
              <p>
                <strong>Social media aesthetics.</strong> Monochrome feeds, stories, and posts have been a
                consistent aesthetic trend. Converting specific images to grayscale lets you achieve a
                consistent look without having to style everything in CSS.
              </p>
              <p>
                <strong>Document preparation.</strong> Forms, contracts, ID documents, and institutional
                paperwork are often required to be submitted in black and white. Converting any colored
                screenshots or scans to grayscale before submission meets these requirements without needing
                a full document editor.
              </p>
              <p>
                <strong>Checking design accessibility.</strong> Reviewing a design in grayscale is one of the
                fastest ways to identify accessibility issues — if elements that should be distinct become
                indistinguishable without color, they need additional visual differentiation (labels, patterns,
                shapes) to be accessible to colorblind users.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Is this tool free?</p>
                  <p>Yes, completely free. No account is required and there are no usage limits since all processing happens in your browser.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is my photo uploaded to a server?</p>
                  <p>No. The conversion runs entirely in your browser using the HTML Canvas API. Your image never leaves your device and is not transmitted to any server.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What image formats can I upload?</p>
                  <p>You can upload JPG, PNG, WebP, BMP, and GIF files. The output is always a JPEG file. If you need the output in PNG format, use a PNG converter after downloading.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is there a file size limit?</p>
                  <p>There is no enforced file size limit since processing is local. Very large images (above 20 megapixels) may take a few seconds to process depending on your device&apos;s performance.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Why is the output file smaller than the original?</p>
                  <p>Grayscale JPEG images require less data to encode than color images because there is effectively one channel of information instead of three. At the same quality setting, a grayscale JPEG is typically 30–60% smaller than the color original.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I convert multiple images at once?</p>
                  <p>Currently the tool processes one image at a time. Upload the next image after downloading the first.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
