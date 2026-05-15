import { Metadata } from 'next'
import { AIParagraphExpander } from '@/components/ai-paragraph-expander'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/ai-paragraph-expander`

const toolSchema = generateToolPageSchema(
  'AI Paragraph Expander',
  'Free AI paragraph expander. Expand short text into longer, richer paragraphs with your choice of tone, style, and target length. No sign-up required.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'AI Paragraph Expander', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: { absolute: "AI Paragraph Expander" },
  description: 'Free AI paragraph expander. Paste any text and expand it 2×, 3×, or 4× longer in seconds. Choose your tone (professional, casual, academic, creative) and expansion style. No sign-up needed.',
  keywords: [
    'AI paragraph expander',
    'paragraph expander',
    'text expander AI',
    'expand paragraph online',
    'AI text expander',
    'make paragraph longer',
    'expand text AI',
    'paragraph lengthener',
    'text elaborator',
    'AI writing expander',
    'paragraph extender',
    'expand sentences online',
    'free paragraph expander',
    'essay expander AI',
    'content expander',
  ],
  openGraph: {
    title: 'AI Paragraph Expander — Expand Text Instantly, Free',
    description: 'Expand short text into longer, richer paragraphs instantly. Choose your tone, style, and target length. Free AI writing tool — no sign-up.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'AI Paragraph Expander' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Paragraph Expander — Expand Text Instantly',
    description: 'Turn a short paragraph into a full, polished piece. Choose tone, style, and target length. Free and instant.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Paste any text into the input field, choose your desired tone (professional, casual, academic, creative, or persuasive), expansion style (natural, descriptive, add examples, add context, more formal, or simplified), and target length (2×, 3×, or 4× the original). Click "Expand Paragraph" and the AI rewrites your text into a longer, richer version while preserving the original meaning. Copy the result, regenerate for a fresh take, or use the output as new input to expand further.',
  features: [
    '5 tone options — professional, casual, academic, creative, and persuasive',
    '6 expansion styles — natural, descriptive, add examples, add context, formal, and simplified',
    '3 target length multipliers — 2×, 3×, or 4× the original word count',
    'Real-time word count comparison (before vs. after)',
    'Expansion ratio display (e.g. 1.9× expansion)',
    'One-click copy to clipboard',
    'Regenerate button for a fresh alternative expansion',
    'Chain expand — use the output as input for further expansion',
    'Preserves the core meaning and key facts of the original',
    'No sign-up required — free and instant',
    'Works on any type of text — emails, essays, product descriptions, social posts, and more',
  ],
  whoIsItFor: [
    {
      title: 'Students & Academic Writers',
      description: 'Expand thesis statements, body paragraphs, and essay drafts to meet word count requirements without losing academic tone or introducing unsupported claims.',
    },
    {
      title: 'Content Marketers & Bloggers',
      description: 'Turn bullet points and brief notes into full paragraphs. Expand short-form content into long-form blog posts, articles, and product pages.',
    },
    {
      title: 'Business Professionals',
      description: 'Expand concise email drafts, executive summaries, and proposal outlines into full professional communications with the right tone for your audience.',
    },
    {
      title: 'Social Media Managers',
      description: 'Expand short captions and post ideas into longer LinkedIn articles, Twitter threads, or email newsletters while keeping the original message intact.',
    },
    {
      title: 'Authors & Creative Writers',
      description: 'Expand scene descriptions, character introductions, and plot summaries using the creative tone for richer, more evocative prose.',
    },
    {
      title: 'Non-Native English Speakers',
      description: 'Write a simple version of what you want to say, then expand it into natural, fluent English with professional tone — a fast way to polish business writing.',
    },
  ],
}

export default function AIParagraphExpanderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="ai-paragraph-expander">
        <ToolLayout
          toolId="ai-paragraph-expander"
          toolName="AI Paragraph Expander"
          toolDescription="Expand any paragraph into a longer, richer version. Choose your tone, expansion style, and target length."
          toolComponent={<AIParagraphExpander />}
          toolData={toolData}
        >
          {/* SEO Content */}
          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">

            <section>
              <h2 className="text-base font-semibold text-foreground">What Is an AI Paragraph Expander?</h2>
              <p>
                An AI paragraph expander takes a short piece of text and rewrites it into a longer, more detailed version
                while preserving the original meaning and intent. Unlike paraphrasers (which change words without changing
                length) or AI writers (which generate content from scratch), an expander specifically adds substance to
                what you have already written. It is one of the most practical AI writing tools because it works
                with your ideas rather than replacing them.
              </p>
              <p>
                Our free AI Paragraph Expander uses Claude, one of the most capable large language models available,
                to intelligently expand your text with the specific tone and style you choose. Whether you need a
                quick 2× expansion to meet a word count or a 4× expansion to turn a bullet point into a full section,
                the tool delivers a polished result in seconds.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Choosing the Right Tone</h2>
              <p>
                The most important setting in the AI Paragraph Expander is the tone. Tone shapes the vocabulary,
                sentence structure, and register of the expanded text, and choosing the wrong tone for your
                audience will undermine even well-expanded content.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Professional</strong> — Formal business language with precise vocabulary and clear structure.
                  Best for corporate emails, reports, proposals, LinkedIn content, and any professional context where
                  you need to project competence and credibility.
                </li>
                <li>
                  <strong>Casual</strong> — Friendly, conversational language that reads like a message from a
                  knowledgeable friend. Use it for social media posts, personal blogs, newsletters with a warm brand
                  voice, and any content where approachability matters more than formality.
                </li>
                <li>
                  <strong>Academic</strong> — Scholarly language with precise terminology, hedged claims, and structured
                  argumentation. Appropriate for research papers, essays, literature reviews, and academic writing
                  where rigorous evidence-based reasoning is expected.
                </li>
                <li>
                  <strong>Creative</strong> — Vivid, expressive language with figurative elements, sensory details,
                  and engaging prose rhythms. Use for fiction, creative non-fiction, travel writing, brand storytelling,
                  and any content that benefits from a distinctive voice.
                </li>
                <li>
                  <strong>Persuasive</strong> — Compelling language that builds toward a conclusion and motivates
                  the reader to act or agree. Best for marketing copy, opinion pieces, sales content, grant proposals,
                  and any writing where you need to influence the reader's belief or behavior.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Choosing the Right Expansion Style</h2>
              <p>
                Beyond tone, the expansion style controls what kind of content the AI adds to lengthen your text.
                Different writing situations call for different approaches to expansion:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Natural</strong> — The AI expands your text in whatever way feels most organic, preserving
                  your original writing style as closely as possible. Good default for most situations.
                </li>
                <li>
                  <strong>Descriptive</strong> — Adds sensory details, rich adjectives, and vivid descriptions.
                  Particularly effective for creative writing, travel content, and product descriptions where evoking
                  a mental image is the goal.
                </li>
                <li>
                  <strong>Add Examples</strong> — Expands by incorporating concrete examples, analogies, case studies,
                  and real-world illustrations that make abstract ideas tangible. Best for how-to content, educational
                  writing, and persuasive pieces that need supporting evidence.
                </li>
                <li>
                  <strong>Add Context</strong> — Adds background information, historical context, and related concepts
                  that help readers understand why the topic matters. Ideal for explainer articles, product descriptions,
                  and introductory sections of longer pieces.
                </li>
                <li>
                  <strong>More Formal</strong> — Elevates the writing's formality by using more precise vocabulary,
                  restructuring sentences for clarity, and adding logical connectors that signal well-organized thinking.
                </li>
                <li>
                  <strong>Simplified</strong> — Expands while breaking down complex ideas into more digestible language,
                  using shorter sentences and more straightforward vocabulary. Excellent for technical writing aimed
                  at non-expert audiences.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">How Many Times Can You Expand?</h2>
              <p>
                The AI Paragraph Expander supports up to 4× expansion in a single pass, which turns a
                50-word sentence into a 200-word paragraph, or a 150-word paragraph into a 600-word section.
                For larger expansions, use the <strong>Chain Expand</strong> feature: after the first expansion,
                click "Use this as input to expand further" to send the output back through the tool for another pass.
              </p>
              <p>
                Chaining works well because the expanded text is already richer and more detailed than the original,
                giving the AI more material to work with on subsequent passes. The result tends to be more coherent
                than trying to do a very large expansion in one shot, because each pass can add a focused layer of
                elaboration rather than generating content that feels padded.
              </p>
              <p>
                Keep in mind that very long text (4× expansion of already-expanded content) may start to drift from
                the original ideas or become repetitive. Reviewing and editing the output before adding another round
                of expansion will keep the result focused.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Common Use Cases</h2>
              <p>
                <strong>Meeting word count requirements.</strong> Students and content writers often have a minimum
                word count they need to reach. The AI Paragraph Expander is the most honest way to expand content
                — it adds genuine substance rather than just inflating word count with filler phrases. Choose the
                "Add Context" style to add background and explanation, or "Add Examples" to illustrate each point
                with a concrete case.
              </p>
              <p>
                <strong>Expanding bullet points into prose.</strong> Many writers plan in bullet points and then
                need to turn those bullets into full paragraphs. Paste a single bullet into the expander and
                choose "Natural" or "Descriptive" style to get a polished prose version in seconds.
              </p>
              <p>
                <strong>Fleshing out email drafts.</strong> You know what you want to say but haven't found the
                words. Write a rough, short version — even just a sentence or two — then expand it with
                "Professional" tone to get a properly formatted email ready to send or lightly edit.
              </p>
              <p>
                <strong>Turning social posts into blog content.</strong> A tweet or LinkedIn post contains the
                seed of a much longer idea. Paste it into the expander with "Creative" or "Add Context" style
                and 3× or 4× length to get a solid first draft of a blog post or newsletter section.
              </p>
              <p>
                <strong>Accessibility rewrites.</strong> If you have technical documentation or academic text that
                needs to reach a broader audience, paste it with "Simplified" style selected. The expansion will
                make the content longer while simultaneously making it easier to read — the opposite of what you
                might expect, but effective because accessible writing uses more words to explain less.
              </p>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Tips for Better Expansions</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Start with your best sentence.</strong> If you have a paragraph and only one sentence
                  truly captures your point, expand that sentence alone rather than the whole paragraph. You'll
                  get a tighter result.
                </li>
                <li>
                  <strong>Match tone to audience, not to preference.</strong> Choose the tone your reader expects,
                  not the one you find most comfortable to write in. A casual tone in a formal business proposal
                  can undermine your credibility even if the content is excellent.
                </li>
                <li>
                  <strong>Edit after expanding.</strong> The AI Paragraph Expander produces a solid first draft, not
                  a finished product. Read through the expanded text and remove anything that doesn't ring true,
                  add any specific details the AI couldn't know (names, dates, proprietary data), and adjust any
                  phrasing that doesn't match your voice.
                </li>
                <li>
                  <strong>Use regenerate when the first result isn't right.</strong> The AI will produce a different
                  expansion each time. If the first expansion goes in a direction you don't like, click Regenerate
                  before editing — it's often faster to find a better starting point than to fix a version you don't like.
                </li>
                <li>
                  <strong>Don't include facts you can't verify.</strong> The AI may add plausible-sounding context
                  and background that sounds accurate but isn't. Always fact-check any expanded content before
                  publishing, especially statistics, dates, and named examples.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base font-semibold text-foreground">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground">Is the AI Paragraph Expander free?</p>
                  <p>Yes. Basic expansions are free with no account required. Free accounts get 25 uses per day; Pro accounts get unlimited use.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">What's the maximum text length I can expand?</p>
                  <p>You can expand up to 5,000 characters (approximately 800–1,000 words) at once. For longer documents, expand section by section.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Will the AI change the meaning of my text?</p>
                  <p>The expander is designed to preserve your original meaning, key facts, and message. It adds elaboration, context, and detail — not new claims or altered conclusions. That said, always review the output before using it in anything important.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Can I expand text in other languages?</p>
                  <p>The tool works best with English text. It can process content in other languages but the quality of expansion may vary, particularly for less common languages.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Is my text stored or used for training?</p>
                  <p>Your text is sent to our API for processing and is not stored or used for AI model training. We do not retain your input beyond the duration of the request.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">How is this different from an AI writer?</p>
                  <p>An AI writer creates content from scratch based on a prompt. The paragraph expander starts with your existing text and makes it longer while keeping your ideas — it builds on what you've written rather than replacing it.</p>
                </div>
              </div>
            </section>

          </div>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
