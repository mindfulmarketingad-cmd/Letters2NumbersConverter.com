import { Metadata } from 'next'
import { AISlopChecker } from '@/components/ai-slop-checker'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ai-slop-checker`

const toolSchema = generateToolPageSchema(
  'AI Slop Checker',
  'Free AI content detector for text and images. Instantly check whether text was written by ChatGPT, Gemini, or other AI, and whether images are AI-generated deepfakes.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'AI Slop Checker', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "AI Slop Checker" },
  description: 'Check if text or images are AI-generated. Our free AI slop detector analyzes writing for ChatGPT, Gemini, and GPT-4 patterns, detects deepfake images, shows readability scores, and strips hidden AI fingerprints.',
  keywords: [
    'AI slop checker',
    'AI content detector',
    'AI text detector',
    'ChatGPT detector',
    'AI writing detector',
    'deepfake image detector',
    'AI image detector',
    'is this AI written',
    'AI generated text checker',
    'free AI detector',
    'GPT detector',
    'AI slop detector',
    'detect AI content',
    'AI or human text',
    'ai generated checker',
  ],
  openGraph: {
    title: 'AI Slop Checker — Free AI Text & Image Detector',
    description: 'Instantly detect AI-written text and AI-generated images. Check for ChatGPT, Gemini, and deepfake patterns with our free online AI slop detector.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'AI Slop Checker' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Slop Checker — Free AI Text & Image Detector',
    description: 'Detect AI-written text and deepfake images instantly. Free online tool — no sign-up needed.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Paste any text or upload an image into the AI Slop Checker and click "Check." The tool sends your content to an advanced AI model that analyzes linguistic patterns, stylistic fingerprints, and visual artifacts to determine whether a human or AI created it. Results include a 0–100 confidence score, a clear verdict label, specific detected patterns, and — for text — full readability scores.',
  features: [
    'AI text detection — identifies ChatGPT, Gemini, Claude, and GPT-4 writing patterns',
    'AI image detection — spots deepfakes, AI faces, and synthetic photography',
    '0–100 AI confidence score with color-coded verdict',
    'Detected patterns list — specific linguistic or visual signals found',
    'Flesch Reading Ease score for any pasted text',
    'Flesch-Kincaid Grade Level readability metric',
    'Clean AI Fingerprints — strips zero-width spaces, homoglyphs, and invisible characters',
    'Word count, sentence count, and average sentence length stats',
    'Two-tab interface: Text analysis and Image analysis',
    'Instant results — no waiting, no queue',
    'No account required for basic checks',
    'Drag-and-drop image upload',
  ],
  whoIsItFor: [
    {
      title: 'Teachers & Professors',
      description: 'Detect AI-written student essays and homework submissions quickly without expensive plagiarism services. Paste any length of text for an instant AI score.',
    },
    {
      title: 'Journalists & Fact-Checkers',
      description: 'Verify whether quotes, press releases, or articles were human-authored. Check profile photos and supplied images for AI generation before publishing.',
    },
    {
      title: 'Online Daters',
      description: 'Check profile photos for AI-generated faces and detect chatbot-written messages. Spot romance scam accounts using deepfake selfies before matching.',
    },
    {
      title: 'HR & Hiring Teams',
      description: 'Screen cover letters and application essays for AI writing. Verify headshots and ID documents for AI generation artifacts.',
    },
    {
      title: 'Content Moderators',
      description: 'Flag AI-generated spam, synthetic reviews, and deepfake images in user-submitted content to keep communities trustworthy.',
    },
    {
      title: 'Students & Researchers',
      description: 'Check your own writing to ensure it reads as authentically human before submitting. Verify whether sources and cited papers contain AI-generated content.',
    },
  ],
}

export default function AISlopCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="ai-slop-checker">
        <ToolLayout
          toolId="ai-slop-checker"
          toolName="AI Slop Checker"
          toolDescription="Detect whether text or images were generated by AI. Paste text for an AI writing score or upload a photo to check for deepfake patterns."
          toolComponent={<AISlopChecker />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is AI Slop?</h2>
              <p>
                "AI slop" refers to content — text, images, audio, or video — that was generated by artificial intelligence
                and passed off as human-made work. The term captures the idea that AI outputs, while often superficially
                polished, frequently lack the authentic voice, lived experience, and creative specificity of human expression.
                A student submitting a ChatGPT essay, a scammer using a Midjourney face as a dating profile photo, or
                a business flooding review sites with GPT-written five-star feedback — all of these are forms of AI slop.
              </p>
              <p>
                Our free AI Slop Checker gives you a fast, reliable second opinion on any text or image you encounter.
                It scores content on a 0–100 scale where 0 is confidently human and 100 is confidently AI-generated,
                and it explains the specific patterns that led to that verdict.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">How the AI Text Detector Works</h2>
              <p>
                When you paste text into the AI text detector and click "Check Text," the tool sends your content
                to a large language model trained to recognize the stylistic fingerprints that separate human and
                AI writing. These fingerprints include things like:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Perplexity patterns</strong> — AI models consistently choose high-probability word sequences, producing text that is statistically "safe" but often feels bland or overly hedged.</li>
                <li><strong>Burstiness</strong> — Human writing varies dramatically in sentence length and complexity within a passage. AI writing tends to be more uniform.</li>
                <li><strong>Filler phrases</strong> — AI models are trained on web content and absorb its clichés. Phrases like "In today's fast-paced world," "It's worth noting that," and "In conclusion" are disproportionately common in AI output.</li>
                <li><strong>Hedging language</strong> — ChatGPT and similar models add qualifiers at a higher rate than most humans writing about the same topic with confidence.</li>
                <li><strong>Structural predictability</strong> — AI-generated essays almost always follow an introduction-body-conclusion template with numbered lists, even when the prompt didn't ask for one.</li>
                <li><strong>Vocabulary uniformity</strong> — AI writing tends to use a consistent, moderate vocabulary register throughout, while human writers shift register based on emotion, audience, and context.</li>
              </ul>
              <p>
                The detector also checks for hidden technical fingerprints: zero-width spaces, Unicode homoglyphs,
                and invisible formatting characters that "AI humanizer" tools sometimes insert to try to fool
                automated detectors. The Clean AI Fingerprints button removes all of these in one click.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">How the AI Image Detector Works</h2>
              <p>
                Upload any photo to the Image tab and the AI image detector will analyze it for the telltale artifacts
                of synthetic generation. AI image generators — including DALL·E, Midjourney, Stable Diffusion, and
                newer portrait-specific tools used in romance scams — leave characteristic traces:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Face artifacts</strong> — AI faces often have subtle asymmetries, unnaturally smooth skin texture, inconsistent lighting direction, or jewelry/glasses that fade into the skin.</li>
                <li><strong>Background inconsistencies</strong> — Objects in AI-generated backgrounds tend to be blurry, repeated, or logically incoherent (bookshelves with illegible spines, signs with nonsense text).</li>
                <li><strong>Texture uniformity</strong> — Natural photos have noise and grain from the lens and sensor. Fully synthetic images can look "too clean" or have a characteristic over-smoothed quality.</li>
                <li><strong>Finger and hand artifacts</strong> — AI models have historically struggled to generate realistic hands, and though newer models are better, subtle errors remain visible on close inspection.</li>
                <li><strong>Lighting coherence</strong> — Natural photographs have consistent light sources. AI images sometimes show highlight/shadow inconsistencies across different objects in the same scene.</li>
              </ul>
              <p>
                The image detector also notes when standard AI generation metadata (C2PA or IPTC watermarks) is present,
                since tools like OpenAI's image generation and Google Gemini embed provenance signals that allow 100%
                accurate identification when present.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Understanding the Confidence Score</h2>
              <p>
                The AI Slop Checker returns a score from 0 to 100 alongside a five-level verdict label:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>0–20 — Human Written / Real Photo:</strong> Strong signals of authentic human creation. Very unlikely to be AI-generated.</li>
                <li><strong>21–40 — Likely Human / Likely Real:</strong> Mostly human characteristics with a few ambiguous features. Probably authentic.</li>
                <li><strong>41–60 — Uncertain:</strong> Mixed signals. Could be AI-assisted editing, a human imitating AI style, or a borderline case the model cannot confidently classify.</li>
                <li><strong>61–80 — Likely AI:</strong> More AI fingerprints than human ones. Treat with appropriate skepticism.</li>
                <li><strong>81–100 — AI Generated:</strong> Strong indicators of fully machine-generated content.</li>
              </ul>
              <p>
                No AI detector is perfect. AI models are improving rapidly, and sophisticated techniques — like training
                AI on more human-like corpora, or using post-processing to strip linguistic fingerprints — can reduce
                detection accuracy. Use the score as a useful data point, not a court verdict.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Readability Scores Explained</h2>
              <p>
                Alongside the AI detection verdict, the AI Slop Checker calculates two standard readability metrics
                for any text you paste. These scores measure how difficult the text is to read — they are not
                part of the AI detection signal, but they're useful context, since AI writing often clusters in
                a particular readability range.
              </p>
              <p>
                <strong>Flesch Reading Ease</strong> scores text on a 0–100 scale. Higher scores mean easier reading.
                A score of 90–100 is at roughly a 5th-grade level; 60–70 is standard for most web content; below 30
                is considered very difficult and appropriate for professional or academic audiences.
              </p>
              <p>
                <strong>Flesch-Kincaid Grade Level</strong> expresses reading difficulty as a U.S. school grade.
                A score of 8 means the text is appropriate for an 8th grader. Most popular news writing targets
                a grade level of 6–8; literary fiction typically sits around 6–12; academic papers often exceed 14.
              </p>
              <p>
                AI writing tools like ChatGPT tend to produce text with Flesch Reading Ease scores in the 50–70 range
                and grade levels of 10–13 — readable but formally structured, echoing the "authoritative web content"
                style they were trained on.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Stripping Hidden AI Fingerprints</h2>
              <p>
                A growing cottage industry of "AI humanizer" services promises to make AI-written text undetectable
                by rewriting it or inserting tricks to confuse automated detectors. One of the most common techniques
                is hiding non-printable Unicode characters inside the text — zero-width spaces, soft hyphens,
                word joiners, and Cyrillic or Greek letters that look identical to their Latin counterparts
                (homoglyphs) but have different Unicode code points.
              </p>
              <p>
                This technique was famously used in reverse by Elon Musk in 2008 to identify a Tesla employee who
                was leaking internal information: by sending slightly different versions of the same document with
                subtle Unicode variations, he could trace which version was shared publicly.
              </p>
              <p>
                The <strong>Clean AI Fingerprints</strong> button in the AI Slop Checker removes all known zero-width
                characters, invisible Unicode operators, soft hyphens, and common homoglyph substitutions in a
                single click, restoring the text to clean, standard ASCII-compatible encoding.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Real-World Use Cases</h2>
              <p>
                <strong>Academic integrity:</strong> A 2023 survey found that nearly 90% of students admitted to
                using ChatGPT for homework at least once. Teachers and professors can paste any submission directly
                into the text tab — there are no word limits. The tool works equally well on a paragraph and on
                a 50-page essay.
              </p>
              <p>
                <strong>Romance scam prevention:</strong> The FTC reported that romance scams cost consumers $1.14 billion
                in 2023, with a significant share involving AI-generated faces on dating platforms. Before connecting
                with someone you met online, upload their profile photo to the image tab. The detector flags synthetic
                faces and profile images that show the characteristic smoothness and symmetry of AI generation.
              </p>
              <p>
                <strong>Content moderation:</strong> Community managers and platform trust-and-safety teams can use
                the API-accessible tool to quickly triage large volumes of user-submitted content, flagging likely
                AI-generated posts for human review.
              </p>
              <p>
                <strong>Journalism and fact-checking:</strong> Viral images and quotes are frequently AI-generated
                or AI-edited. Paste the quote or upload the image before including it in an article or sharing it
                on social media. A few seconds of verification is all it takes.
              </p>
              <p>
                <strong>Hiring and HR:</strong> AI-generated cover letters and résumé summaries are increasingly
                common. While a polished cover letter isn't disqualifying on its own, knowing whether a candidate
                authored their materials authentically is useful context for interviews and reference checks.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Is the AI Slop Checker free to use?</p>
                  <p>Yes. Basic checks are completely free with no account required. Free accounts get 25 checks per day; Pro accounts get unlimited checks.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can it detect GPT-4, Claude, and Gemini text?</p>
                  <p>Yes. The detector recognizes the characteristic writing patterns of all major AI language models, including ChatGPT (GPT-3.5 and GPT-4), Claude, Gemini, Llama, and Mistral variants.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What image formats are supported?</p>
                  <p>JPEG, PNG, WebP, and GIF files up to 5 MB are supported for image analysis.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is my text or image stored?</p>
                  <p>Your content is sent to our API for analysis and is not stored or used for model training. We do not retain uploaded images or pasted text beyond the duration of the request.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">How accurate is the AI detector?</p>
                  <p>Accuracy varies by content type and how recently AI models have been updated. The detector performs best on longer texts (200+ words) and clearly AI-generated content. Heavily edited AI text and content from very new models may score lower than expected. Always treat scores as one signal among many.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I use this to check my own AI-assisted writing?</p>
                  <p>Absolutely. Many writers use AI tools for a first draft, then edit substantially. Running your final text through the AI Slop Checker lets you see whether your editing has successfully humanized it enough to read authentically.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
