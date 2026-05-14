import { Metadata } from 'next'
import { BubbleTextGenerator } from '@/components/bubble-text-generator'
import { ToolLayout, type ToolData } from '@/components/tool-layout'
import { ToolPageWrapper } from '@/components/tool-page-wrapper'
import { generateToolPageSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/tools/bubble-text-generator`

const toolSchema = generateToolPageSchema(
  'Bubble Text Generator',
  'Free bubble text generator. Convert any text into bubble letters, black bubble text, keycap style, fullwidth, double struck, and more. Copy instantly for Instagram, Twitter, Discord, and TikTok bios.',
  PAGE_URL,
  'Utility'
)

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Tools', url: `${BASE_URL}/tools` },
  { name: 'Bubble Text Generator', url: PAGE_URL },
])

export const metadata: Metadata = {
  title: 'Bubble Text Generator — Convert Text to ⓑⓤⓑⓑⓛⓔ Letters',
  description: 'Free bubble text generator. Instantly convert any text into circled bubble letters, black bubble text, keycap style, squared, fullwidth, and double struck. Copy & paste for Instagram, Twitter, Discord, and TikTok.',
  keywords: [
    'bubble text generator',
    'bubble letter generator',
    'bubble text',
    'circle text generator',
    'circled letters',
    'bubble font generator',
    'bubble letters copy paste',
    'fancy text generator',
    'black bubble text',
    'bubble text for instagram',
    'bubble text for twitter',
    'unicode bubble letters',
    'bubble text converter',
    'keycap text',
    'bubble alphabet',
  ],
  openGraph: {
    title: 'Bubble Text Generator — Convert Text to ⓑⓤⓑⓑⓛⓔ Letters',
    description: 'Free bubble text generator. Convert text into circled bubble letters, black bubbles, keycap style, and more. Copy for any social platform.',
    type: 'website',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Bubble Text Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bubble Text Generator — ⓑⓤⓑⓑⓛⓔ Letters',
    description: 'Convert text into bubble letters instantly. 8 styles including circled, black bubble, keycap, fullwidth, and double struck.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const toolData: ToolData = {
  howItWorks: 'Type or paste any text into the input field and the bubble text generator instantly converts it into 8 different bubble letter styles — circled outline, black filled bubbles, alternating, parenthesis, squared block letters, keycap style, fullwidth, and double struck. Click Copy next to any style to copy it to your clipboard, Preview to see it large, or Tweet to share it directly on Twitter/X.',
  features: [
    '8 unique bubble text styles in real time',
    'Circled outline bubble letters (ⓐⓑⓒ)',
    'Black filled bubble text (🅐🅑🅒)',
    'Alternating outline and filled bubbles',
    'Parenthesis style — (a)(b)(c)',
    'Squared block letters (🄰🄱🄲)',
    'Keycap bubble style (a⃣b⃣c⃣)',
    'Fullwidth aesthetic letters (ａｂｃ)',
    'Double struck mathematical letters (𝕒𝕓𝕔)',
    'One-click copy to clipboard',
    'Full-size Preview modal for each style',
    'Direct Tweet button for Twitter/X sharing',
    'Works on Instagram, Discord, TikTok, and more',
    'No sign-up required — instant and free',
  ],
  whoIsItFor: [
    {
      title: 'Instagram & TikTok Creators',
      description: 'Stand out with bubble letters in your bio, captions, and story text. Circled and fullwidth styles render perfectly on both platforms.',
    },
    {
      title: 'Twitter / X Users',
      description: 'Make your tweets and profile bio pop with bubble text that displays on every device. Use the Tweet button to share directly.',
    },
    {
      title: 'Discord Members & Server Owners',
      description: 'Use bubble letters in server names, channel descriptions, and messages to give your community a unique visual identity.',
    },
    {
      title: 'Content Creators & Streamers',
      description: 'Add bubble text to stream overlays, YouTube descriptions, Twitch bios, and panel headers for a stylish branded look.',
    },
    {
      title: 'Students & Educators',
      description: 'Create visually engaging notes, flashcards, and study materials with different bubble text styles to highlight key terms.',
    },
    {
      title: 'Designers & Marketers',
      description: 'Quickly prototype text treatments and visual effects using Unicode bubble characters without needing design software.',
    },
  ],
}

export default function BubbleTextGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolPageWrapper toolSlug="bubble-text-generator">
        <ToolLayout
          toolId="bubble-text-generator"
          toolName="Bubble Text Generator"
          toolDescription="Convert any text into bubble letters instantly. Choose from 8 styles — circled outline, black filled bubbles, alternating, parenthesis, squared block, keycap, fullwidth, and double struck. One click to copy or tweet."
          toolComponent={<BubbleTextGenerator />}
          toolData={toolData}
        >
          <section className="bg-background border-t border-border">
            <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What Is a Bubble Text Generator?</h2>
                <p className="text-muted-foreground mb-4">
                  A <strong className="text-foreground">bubble text generator</strong> converts ordinary letters and numbers into special Unicode characters that look like letters enclosed in circles, squares, or other decorative shapes. The result is text that looks entirely different from regular fonts but works in any plain-text field — social media bios, tweets, Discord messages, copy-paste notes, and more.
                </p>
                <p className="text-muted-foreground mb-4">
                  Unlike image-based text art or custom font files, <strong className="text-foreground">bubble letters</strong> are actual Unicode characters. That means they travel wherever plain text goes — you can paste ⓑⓤⓑⓑⓛⓔ ⓣⓔⓧⓣ into an Instagram bio, a Twitter profile, a WhatsApp message, or a Google Doc and it will display correctly for anyone who reads it, with no special software required.
                </p>
                <p className="text-muted-foreground">
                  Our free bubble text generator supports 8 distinct styles in a single tool so you can compare them side by side and pick the one that fits your aesthetic.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">The 8 Bubble Text Styles Explained</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Bubble Text (ⓐⓑⓒ)',
                      desc: 'The classic circled outline style. Each letter is wrapped in a thin circle, giving a light, airy look. Both uppercase and lowercase are supported — lowercase letters use the Unicode range U+24D0–U+24E9 and uppercase uses U+24B6–U+24CF. Numbers are converted to circled numerals (①②③). This is the most widely recognised bubble letter style and works on every major platform.',
                    },
                    {
                      name: 'Black Bubble Text (🅐🅑🅒)',
                      desc: 'The bold, filled counterpart to the outline style. Each letter appears as a dark circle with a white letter inside. These use the Unicode Negative Circled Latin range (U+1F150–U+1F169). Because the filled circles have strong visual weight, black bubble text is ideal for headings, emphasis, or making a statement in a bio or profile.',
                    },
                    {
                      name: 'Alternating Bubble (ⓐ🅑ⓒ🅓)',
                      desc: 'A creative mix that alternates between outline circles and filled black circles for every letter. The result is a checkerboard-like rhythm of light and dark that draws the eye. Great for usernames, titles, and anywhere you want a playful rhythm rather than uniform style.',
                    },
                    {
                      name: 'Parenthesis — (a)(b)(c)',
                      desc: 'A simpler but surprisingly effective style: every character is individually wrapped in parentheses. Because this uses standard ASCII characters, it renders identically on every platform and in every font. It has a retro, typewriter-like charm and is especially popular for listing items or emphasising individual words in Discord and Reddit.',
                    },
                    {
                      name: 'Big Bubbles / Squared (🄰🄱🄲)',
                      desc: 'Squared block letters from the Unicode Enclosed Alphanumeric Supplement range (U+1F130–U+1F149). Each letter sits inside a square frame, giving a bold, sign-like appearance. These are the closest Unicode equivalent to the block letters you might see on a wooden Scrabble tile or an airport departure board. Input is auto-uppercased since Unicode only defines squared capitals.',
                    },
                    {
                      name: 'Keycap Bubbles (a⃣b⃣c⃣)',
                      desc: 'Each letter is combined with the Unicode Combining Enclosing Keycap character (U+20E3), producing characters that resemble keys on a keyboard. This style renders slightly differently across platforms — on some it shows a distinct key cap outline, on others it appears similar to a bold bubble. Particularly popular on Slack and Discord.',
                    },
                    {
                      name: 'Fullwidth (ａｂｃ)',
                      desc: 'Fullwidth Latin letters (U+FF01–U+FF5E) are double-width versions of standard ASCII characters, originally designed for East Asian typography contexts where characters occupy a square grid. In practice they create the distinctive stretched, vaporwave or aesthetic look widely used on Tumblr, TikTok, and in Japanese internet culture. Every letter, number, and common punctuation mark has a fullwidth counterpart.',
                    },
                    {
                      name: 'Double Struck (𝕒𝕓𝕔)',
                      desc: 'Mathematical double-struck (or "blackboard bold") letters were originally designed for mathematical notation — think ℝ for real numbers or ℂ for complex numbers. As a text style they give a sophisticated, academic look. Characters come from the Mathematical Alphanumeric Symbols Unicode block. This style is particularly popular in math-themed social media posts, academic bios, and niche internet communities.',
                    },
                  ].map(({ name, desc }) => (
                    <div key={name} className="bg-card border border-border rounded-lg p-5">
                      <h3 className="font-semibold text-foreground mb-2">{name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Where to Use Bubble Text</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { platform: 'Instagram', tip: 'Paste bubble letters directly into your bio or caption. The circled and fullwidth styles render perfectly and make your profile stand out in search results.' },
                    { platform: 'Twitter / X', tip: 'Use bubble text in your display name, bio, or tweets. Use the Tweet button in the tool to share instantly. Character count: Unicode bubble chars each count as 1–2 Twitter characters.' },
                    { platform: 'Discord', tip: 'Bubble text works in usernames (where allowed by server), channel descriptions, and messages. Keycap and black bubble styles are especially popular in server branding.' },
                    { platform: 'TikTok', tip: 'Add bubble letters to your TikTok bio and link-in-bio pages. Fullwidth and alternating styles add visual rhythm that looks intentional rather than random.' },
                    { platform: 'WhatsApp & iMessage', tip: 'Copy bubble text and paste it directly into any chat. All 8 styles render on both iOS and Android without any special apps.' },
                    { platform: 'YouTube', tip: 'Use bubble letters in your channel description, about section, and video descriptions to make section headers stand out in plain text.' },
                    { platform: 'LinkedIn', tip: 'Double struck and fullwidth styles add subtle flair to LinkedIn headlines and about sections while remaining professional enough for a career context.' },
                    { platform: 'Reddit', tip: 'Parenthesis and circled styles work well in Reddit usernames (on supporting subreddits) and in post titles to draw attention.' },
                  ].map(({ platform, tip }) => (
                    <div key={platform} className="bg-card border border-border rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-1.5 text-sm">{platform}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Use the Bubble Text Generator</h2>
                <ol className="space-y-3">
                  {[
                    'Type or paste your text into the input field at the top of the tool. You\'ll see all 8 styles update instantly as you type.',
                    'Browse the style rows to find the look you want. The converted text is shown in full next to the style name.',
                    'Click Preview to open a large preview modal — useful for seeing exactly how the text will look in a bigger format.',
                    'Click Copy next to any style to copy the bubble text to your clipboard with one click.',
                    'Paste the copied bubble text anywhere — social media bios, chat apps, documents, or web forms.',
                    'Click Tweet to open Twitter/X with the bubble text pre-filled and ready to post.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex items-center justify-center">{i + 1}</span>
                      <p className="text-muted-foreground text-sm leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How Bubble Text Works — Unicode Explained</h2>
                <p className="text-muted-foreground mb-4">
                  Bubble text isn&apos;t a font change — it&apos;s a character substitution. Unicode, the international standard for encoding text, includes thousands of characters beyond the standard Latin alphabet. Among them are <strong className="text-foreground">enclosed alphanumerics</strong>: letters and numbers enclosed within circles, squares, parentheses, and other shapes.
                </p>
                <p className="text-muted-foreground mb-4">
                  When our generator converts "hello" to "ⓗⓔⓛⓛⓞ", each standard ASCII letter is replaced by its Unicode circled equivalent. The characters are stored as Unicode code points — ⓗ is U+24D7, ⓔ is U+24D4, and so on. Because these are real characters in the Unicode standard, any device that supports Unicode (which is essentially every modern device) can display them without any special fonts or software.
                </p>
                <p className="text-muted-foreground mb-4">
                  This is also why bubble text works in places where custom fonts don&apos;t — Twitter plain-text fields, Instagram bios, Discord usernames. The platform renders whatever Unicode characters you paste; it doesn&apos;t need to know it&apos;s a "bubble font."
                </p>
                <p className="text-muted-foreground">
                  The trade-off is coverage: Unicode circled letters exist for A–Z and 0–9, but punctuation and special characters mostly don&apos;t have circled equivalents. Our generator passes unsupported characters through unchanged so your full text remains readable even when not all characters transform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-5">
                  {[
                    {
                      q: 'Does bubble text work on Instagram?',
                      a: 'Yes. Paste bubble letters directly into your Instagram bio, caption, or comment. All Unicode circled and fullwidth styles render correctly on iOS and Android.',
                    },
                    {
                      q: 'Why does my bubble text show as boxes on some devices?',
                      a: 'Some older devices or operating systems may not have fonts that include all Unicode ranges. The squared (🄰) and negative circled (🅐) styles require emoji/extended Unicode font support. Try the standard circled style (ⓐ) which has the widest compatibility.',
                    },
                    {
                      q: 'Does bubble text affect Twitter character count?',
                      a: 'Yes. Each Unicode character counts as 1 or 2 characters toward Twitter\'s 280-character limit. Some emoji-based styles (like black bubble and squared) may use 2 characters per letter because they are outside the Basic Multilingual Plane.',
                    },
                    {
                      q: 'Can I use bubble text in a Discord username?',
                      a: 'Discord allows Unicode characters in display names and nicknames within servers. Many bubble text styles work in server nicknames and bios. Username availability depends on Discord\'s current policies for global usernames.',
                    },
                    {
                      q: 'Is there a bubble text keyboard for mobile?',
                      a: 'There\'s no dedicated keyboard, but you can bookmark this tool on your phone\'s browser, generate bubble text, copy it, and paste it into any app. Third-party custom keyboard apps also exist but our tool gives you more style variety.',
                    },
                    {
                      q: 'What is the difference between bubble text and fancy text?',
                      a: 'Bubble text specifically refers to the circled or enclosed character styles (ⓐⓑⓒ). Fancy text is a broader term covering all Unicode text transformations — bold, italic, script, upside-down, and more. Our generator focuses on the bubble and enclosure family of styles.',
                    },
                  ].map(({ q, a }, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </ToolLayout>
      </ToolPageWrapper>
    </>
  )
}
