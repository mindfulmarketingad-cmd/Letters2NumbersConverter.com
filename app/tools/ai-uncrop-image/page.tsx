import { Metadata } from 'next'
import { AIUncropImage } from '@/components/ai-uncrop-image'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ai-uncrop-image`

const toolSchema = generateToolPageSchema(
  'AI Uncrop Image',
  'Free AI image uncropper. Upload any photo and expand it in any direction — top, bottom, left, right — using AI outpainting. Add context with an optional prompt. No sign-up required.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'AI Uncrop Image', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "AI Uncrop Image" },
  description: 'Free AI image uncropper. Upload a photo, choose how much to expand each edge (up to 512px per side), add an optional prompt, and download the seamlessly extended result. Powered by AI outpainting.',
  keywords: [
    'AI uncrop image',
    'AI image uncrop',
    'AI outpainting',
    'image outpaint online',
    'expand image AI',
    'uncrop photo',
    'extend image borders',
    'AI image extension',
    'generative fill online',
    'outpaint image free',
    'widen photo AI',
    'AI expand background',
    'image background expander',
    'uncrop photo free',
    'AI photo extender',
  ],
  openGraph: {
    title: 'AI Uncrop Image — Expand Any Photo with AI Outpainting',
    description: 'Upload a photo and let AI extend it in any direction — seamlessly. Choose expansion size and guide the fill with a prompt. Free AI uncrop tool, no sign-up.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'AI Uncrop Image Tool' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Uncrop Image — Expand Any Photo Instantly',
    description: 'Expand photos in any direction using AI outpainting. Add 64–512px per side with a single click. Free and instant.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Upload any image (PNG, JPG, or WebP). Choose how many pixels to add to each edge — Top, Bottom, Left, and Right — in increments from 64 to 512 pixels. Optionally enter a prompt describing what should appear in the new space (e.g. "blurry forest background" or "white studio wall"). Set the creativity level: lower keeps the fill closely tied to the existing edges, higher allows more imaginative generation. Click "Uncrop Image" and AI outpainting generates seamless content to fill the expanded canvas. Download the result as a WebP file.',
  features: [
    'Expand any edge — top, bottom, left, or right — independently',
    'Pixel increments from 64px to 512px per side',
    'Optional text prompt to guide what fills the new space',
    'Creativity slider — conservative (follows edges) to creative (imaginative fill)',
    'Live dimension preview showing original → new pixel dimensions',
    'Before/after toggle to compare original and uncropped result',
    'Download result as high-quality WebP',
    'Supports PNG, JPG, and WebP uploads up to 20 MB',
    'No sign-up required',
  ],
  whoIsItFor: [
    {
      title: 'Photographers & Retouchers',
      description: 'Expand tightly cropped shots to give subjects more breathing room, extend a backdrop, or recover composition space that was cropped away.',
    },
    {
      title: 'Social Media Managers',
      description: 'Convert a portrait-cropped image to landscape (or vice versa) for different platforms without reshooting. Extend backgrounds to fit Instagram, LinkedIn, or Twitter banner dimensions.',
    },
    {
      title: 'E-commerce Sellers',
      description: 'Product photos often need more white-space padding for marketplace templates. Uncrop to add blank canvas around a product shot and match required image ratios.',
    },
    {
      title: 'Graphic Designers',
      description: 'Use outpainting to extend a hero image for a wider banner, add space for text overlays, or generate a larger background from a reference crop.',
    },
    {
      title: 'Content Creators',
      description: 'Repurpose existing visuals across formats. A square YouTube thumbnail can be uncropped into a 16:9 landscape for video intros, or a portrait into a wide blog header.',
    },
    {
      title: 'Real Estate & Architecture',
      description: 'Extend property photos to show more sky, lawn, or street context that was cut off during shooting — without reshooting the location.',
    },
  ],
}

export default function AIUncropImagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="ai-uncrop-image">
        <ToolLayout
          toolId="ai-uncrop-image"
          toolName="AI Uncrop Image"
          toolDescription="Upload a photo and expand it in any direction using AI outpainting. Add an optional prompt to guide the fill."
          toolComponent={<AIUncropImage />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is AI Image Uncropping?</h2>
              <p>
                AI image uncropping — also called <strong>outpainting</strong> or <strong>generative fill</strong> — is the
                process of using artificial intelligence to extend an image beyond its original borders, generating new
                content that blends seamlessly with the existing photo. Unlike traditional image scaling (which stretches
                pixels and degrades quality) or canvas padding (which adds blank space), AI uncropping generates
                plausible new imagery that matches the colors, textures, lighting, and style of your photo.
              </p>
              <p>
                This tool uses Stability AI&apos;s outpainting model to analyze the edges of your image and synthesize
                new content that fills the expanded canvas. The result is a larger image that looks like it was always
                that size — not stretched, blurred, or padded.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">When to Use Each Expansion Direction</h2>
              <p>
                You can expand any combination of Top, Bottom, Left, and Right edges — each independently. Here is
                how to think about each direction:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Top</strong> — Extends the sky, ceiling, or headroom above the subject. Useful when the
                  original crop cuts off the top of a landscape, building, or portrait and you need more vertical space
                  above the focal point.
                </li>
                <li>
                  <strong>Bottom</strong> — Adds foreground detail — ground, floor, water, grass, or pavement below
                  the existing image. Helpful for product shots that need more white space, or travel photos where
                  you want more foreground context.
                </li>
                <li>
                  <strong>Left / Right</strong> — Widens the image horizontally. This is the most common use case:
                  converting a portrait or square crop to landscape for banners, headers, or widescreen formats.
                  The AI extends whatever exists at the edges — trees, walls, street scenes, skies.
                </li>
              </ul>
              <p>
                You can combine directions: for example, expanding left and right simultaneously transforms a square
                image into a 16:9 widescreen without distorting the center subject.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Using the Prompt Field</h2>
              <p>
                The prompt field is optional but often significantly improves results. When left empty, the AI infers
                what to generate purely from the existing image edges. When you add a prompt, the AI balances what it
                sees in the image with what you describe in text.
              </p>
              <p>Good prompts are specific about content, not style:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Good:</strong> "blue sky with light clouds", "dark hardwood floor", "blurred city street at night"</li>
                <li><strong>Less useful:</strong> "beautiful", "photorealistic", "high quality"</li>
              </ul>
              <p>
                The prompt works best when it describes something plausible given the original image content. If your
                photo is an indoor portrait with warm lighting and you ask to extend the right side, prompting
                "white painted wall with soft shadows" will yield a more coherent result than "mountain forest."
                Match the prompt to what logically belongs at the edges of your image.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Understanding the Creativity Slider</h2>
              <p>
                The creativity slider controls how strictly the AI adheres to the existing image edges versus generating
                more independently. Think of it as a dial between <em>faithful extension</em> and
                <em>creative generation</em>:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Low creativity (0.1–0.3)</strong> — The AI closely follows the colors, textures, and patterns
                  at the edges of your image when generating new content. Use this for photos with strong, consistent
                  backgrounds (solid walls, clear skies, uniform floors) where you want a very smooth, almost invisible
                  extension.
                </li>
                <li>
                  <strong>Medium creativity (0.4–0.6)</strong> — Balanced mode. The AI uses edge information as a
                  strong guide but has enough freedom to generate coherent scene elements. This is the best default
                  setting for most photographs.
                </li>
                <li>
                  <strong>High creativity (0.7–0.9)</strong> — The AI treats the edges as inspiration rather than
                  constraint, potentially generating more varied or unexpected content. Use this when the prompt
                  describes something that needs to appear in the new space that isn&apos;t suggested by the edges
                  (for example, extending into a dramatically different environment).
                </li>
              </ul>
              <p>
                If the first result doesn&apos;t match your intent, try adjusting the creativity level and running
                the uncrop again — the model produces different outputs each run, so a few attempts often yields
                a significantly better result.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Changing Image Aspect Ratio with AI Uncrop</h2>
              <p>
                One of the most practical uses for AI uncropping is converting images between aspect ratios without
                losing the original content. Here are the most common conversions and how to achieve them:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Square (1:1) to Landscape (16:9):</strong> If your image is 1000×1000px and you need
                  16:9, you need a 1778×1000 output. Expand left by ~389px and right by ~389px (or any combination
                  totaling ~778px). Perfect for YouTube thumbnails, Twitter headers, and presentation slides.
                </li>
                <li>
                  <strong>Portrait (4:5) to Square (1:1):</strong> Expand left and right evenly until the width
                  matches the height. Instagram posts sometimes require square format when a portrait crop was used.
                </li>
                <li>
                  <strong>Landscape to Ultra-Wide (21:9):</strong> Extend left and right by large amounts to create
                  cinematic-width banner images for website headers and LinkedIn covers.
                </li>
                <li>
                  <strong>Portrait to Landscape:</strong> Extend both sides equally to turn a vertical phone photo
                  into a horizontal framing without losing the center subject.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Tips for Better Uncrop Results</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Start with clean edges.</strong> The AI extends what it sees at the edges. If your image
                  has strong color gradients, clear textures, or consistent patterns at the borders, results will
                  be better than if the edges are cluttered or have hard cuts.
                </li>
                <li>
                  <strong>Expand one side at a time for large expansions.</strong> If you need to add more than 256px
                  to a side, consider expanding 256px, downloading the result, and then running it again with another
                  256px. Smaller expansions per pass tend to be more coherent than very large single-pass expansions.
                </li>
                <li>
                  <strong>Use lower creativity for uniform backgrounds.</strong> Blue skies, white walls, concrete
                  floors, and similar surfaces extend most believably at low creativity values (0.2–0.3). The AI
                  can reliably continue simple, consistent textures without needing much creative latitude.
                </li>
                <li>
                  <strong>Use higher creativity with a guiding prompt.</strong> If your image has a complex background
                  (a busy street scene, a forest, an interior with furniture) and you want to extend into new
                  territory, set creativity higher and describe what should be there. The prompt gives the model
                  direction that low creativity alone can&apos;t provide.
                </li>
                <li>
                  <strong>Re-run for variation.</strong> The model generates a different result each time. If the
                  first output has an awkward seam or unexpected element, click Uncrop again with the same settings
                  for a fresh attempt. Most users find a good result within 2–3 tries.
                </li>
                <li>
                  <strong>Avoid expanding people at the edges.</strong> If a person is positioned right at the edge
                  of your image, extending in that direction may produce distorted body parts. Position the subject
                  toward the center before using this tool, or use the prompt to describe neutral background content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">AI Uncrop vs. Other Resizing Methods</h2>
              <p>
                When you need a larger image, there are several approaches, each with different trade-offs:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Scaling up (upscaling):</strong> Makes every pixel larger. Simple and fast, but produces
                  blurry results above about 2× original size. Best when you need the same content at higher
                  resolution, not a wider/taller frame.
                </li>
                <li>
                  <strong>Canvas padding:</strong> Adds blank (usually white or black) space at the edges. The
                  image itself is unchanged, but the extra space is empty. Useful for adding text margins, but
                  not for filling in background content.
                </li>
                <li>
                  <strong>Mirroring/reflection:</strong> Reflects the edge pixels outward. Creates a symmetric
                  extension that often looks artificial. Works for abstract or decorative uses, not for realistic
                  photos.
                </li>
                <li>
                  <strong>AI outpainting (this tool):</strong> Generates new, plausible content that matches the
                  existing image. Takes a few seconds and requires an API call, but produces results that look
                  like the photo was originally taken with the wider frame. Best for realistic photographs and
                  any case where the extended area needs to look natural.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Is AI Uncrop Image free?</p>
                  <p>Basic uncropping is free with no account required. Free accounts get 10 uses per day; Pro accounts get unlimited use.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What image formats are supported?</p>
                  <p>PNG, JPG (JPEG), and WebP files up to 20 MB. The output is always delivered as WebP, which gives excellent quality at a smaller file size than PNG.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is there a maximum expansion amount?</p>
                  <p>You can expand up to 512 pixels per side per uncrop operation. For larger expansions, run the tool on the output image repeatedly. The Stability AI outpainting model requires the original image to be at least 64×64 px and no larger than 10 megapixels (e.g., 4000×2500).</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Will the uncropped image look seamless?</p>
                  <p>For most photos with consistent backgrounds (skies, walls, ground surfaces, natural textures), the seam between original and generated content is effectively invisible. Very complex edges with detailed objects right at the boundary may show minor inconsistencies. Re-running the tool often resolves these.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is my image stored or used for AI training?</p>
                  <p>Your image is sent to the Stability AI API for outpainting and is not stored by this website beyond the duration of your request. Stability AI&apos;s data handling is governed by their privacy policy.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I uncrop illustrations and digital art, not just photos?</p>
                  <p>Yes. The outpainting model works on illustrations, digital paintings, graphic design assets, and screenshots — not just photographs. Results vary more with non-photographic content, so use a descriptive prompt and experiment with the creativity setting for best results.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
