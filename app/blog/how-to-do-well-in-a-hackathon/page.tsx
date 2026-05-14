import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/how-to-do-well-in-a-hackathon`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'How to Do Well in a Hackathon — Tips from Winners',
  description: 'Learn how to do well in a hackathon: pick a scoped idea, build a strong team, ship an MVP early, nail the demo, and avoid the common mistakes that derail most teams.',
  keywords: [
    'how to do well in a hackathon',
    'hackathon tips',
    'how to win a hackathon',
    'hackathon strategies',
    'hackathon advice',
    'hackathon preparation',
    'hackathon best practices',
    'hackathon winning tips',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'How to Do Well in a Hackathon — Tips from Winners',
    description: 'Everything you need to do well in a hackathon: idea scoping, team formation, time management, MVP strategy, demo tips, and post-event steps.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'How to Do Well in a Hackathon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Do Well in a Hackathon',
    description: 'Proven tips for hackathon success: scoped ideas, strong teams, early MVPs, and polished demos.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Do Well in a Hackathon — Tips from Winners',
  description: 'A comprehensive guide on how to do well in a hackathon: idea selection, team formation, time management, shipping an MVP, and presenting a compelling demo.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'How do you do well in a hackathon?',
    answer: 'Pick a focused, scoped idea. Form a balanced team early with clear role ownership. Build to an MVP first, then polish. Freeze new features 2–3 hours before the deadline. Rehearse your pitch. Sleep — even 4 hours — because fatigue kills presentation quality.',
  },
  {
    question: 'What makes a good hackathon project?',
    answer: 'A good hackathon project solves a real, specific problem for a clearly defined audience. It has a working demo (not slides), a memorable name and pitch, and uses technology in a way that impresses judges — whether that\'s elegant simplicity or impressive AI capability.',
  },
  {
    question: 'How do you prepare for a hackathon?',
    answer: 'Form your team in advance. Set up your development environment before the event starts. Research the judging criteria and any sponsor APIs. Prepare boilerplate code you\'re allowed to bring. Get good sleep the night before.',
  },
  {
    question: 'What do hackathon judges look for?',
    answer: 'Judges typically look for: (1) impact — does this solve a real problem?, (2) innovation — is the approach novel?, (3) technical execution — does it actually work?, (4) design — is it polished?, (5) presentation — is the pitch clear and compelling?',
  },
  {
    question: 'Is it better to have a complex or simple hackathon project?',
    answer: 'Simple and working beats complex and broken every time. The best hackathon projects are laser-focused on one core feature that works flawlessly during the demo. Complexity impresses nobody if the demo crashes.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'How to Do Well in a Hackathon', url: PAGE_URL },
])

export default function HowToDoWellInAHackathonPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <header className="mb-8">
        <p className="text-sm text-muted-foreground mb-3">
          By <span className="text-foreground font-medium">John Reed</span> · {PUBLISHED}
        </p>
        <h1 className="text-4xl font-bold text-foreground leading-tight mb-4">
          How to Do Well in a Hackathon: The Complete Guide to Winning (or Just Finishing Strong)
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Knowing how to do well in a hackathon is part strategy, part execution, and a small part luck. The good news: strategy and execution are learnable, and they account for the vast majority of outcomes. This guide covers everything — from picking a scoped idea and forming the right team, to shipping an MVP, presenting a compelling demo, and avoiding the mistakes that derail most teams.
        </p>
      </header>

      {/* TOC */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-10" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
          <li><a href="#before-the-event" className="hover:text-foreground hover:underline">Before the Event: Preparation That Pays Off</a></li>
          <li><a href="#pick-your-idea" className="hover:text-foreground hover:underline">Picking the Right Idea</a></li>
          <li><a href="#team-formation" className="hover:text-foreground hover:underline">Team Formation and Role Assignment</a></li>
          <li><a href="#first-hours" className="hover:text-foreground hover:underline">The First Two Hours: Set Up for Success</a></li>
          <li><a href="#mvp-strategy" className="hover:text-foreground hover:underline">Build Your MVP First, Features Second</a></li>
          <li><a href="#time-management" className="hover:text-foreground hover:underline">Time Management During the Hackathon</a></li>
          <li><a href="#the-demo" className="hover:text-foreground hover:underline">Nailing the Demo and Pitch</a></li>
          <li><a href="#what-judges-want" className="hover:text-foreground hover:underline">What Hackathon Judges Actually Look For</a></li>
          <li><a href="#mistakes" className="hover:text-foreground hover:underline">The Most Common Mistakes (and How to Avoid Them)</a></li>
          <li><a href="#after-the-event" className="hover:text-foreground hover:underline">After the Hackathon: Making It Count</a></li>
          <li><a href="#faq" className="hover:text-foreground hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

        <section id="before-the-event">
          <h2 className="text-2xl font-bold text-foreground mb-4">Before the Event: Preparation That Pays Off</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The teams that look freshest at hour 20 are often the ones who prepared the most at hour -48. Pre-event preparation doesn&apos;t mean cheating — it means not wasting hackathon hours on avoidable setup.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Form your team before the event.</strong> Team chemistry is hard to build during crunch time. Meet beforehand, discuss interests and skills, and align on a rough project direction.</li>
            <li><strong className="text-foreground">Set up your dev environment.</strong> Node, Python, Docker, whatever stack you plan to use — have it installed and tested before you walk through the door.</li>
            <li><strong className="text-foreground">Read the judging criteria.</strong> Most hackathons publish them in advance. Know whether impact, innovation, technical complexity, or design weighs most.</li>
            <li><strong className="text-foreground">Review sponsor APIs.</strong> Sponsor prizes often require using a specific API. Skim the docs, test authentication, and identify gotchas before the clock starts.</li>
            <li><strong className="text-foreground">Prepare allowed boilerplate.</strong> Auth scaffolding, database setup scripts, and UI component libraries are often allowed. Bring what you can.</li>
            <li><strong className="text-foreground">Sleep well the night before.</strong> You will make better decisions, write cleaner code, and present more confidently when you&apos;re rested.</li>
          </ul>
        </section>

        <section id="pick-your-idea">
          <h2 className="text-2xl font-bold text-foreground mb-4">Picking the Right Idea</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Idea selection is the highest-leverage decision you&apos;ll make. The wrong idea — too broad, too ambitious, or solving a problem nobody has — can doom the project before a line of code is written.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A good hackathon idea has these properties:
          </p>
          <div className="space-y-3 mb-4">
            {[
              ['Solves a real, specific problem', 'Not "improve healthcare" but "help patients track medication adherence via SMS". The more specific, the more credible.'],
              ['Demonstrable in 2 minutes', 'You need a live demo. If the core value proposition can\'t be shown in 2 minutes, the scope is too large.'],
              ['Achievable given your team\'s stack', 'An idea requiring a skill nobody has is a bad idea, no matter how clever. Play to your team\'s strengths.'],
              ['Has a clear target user', '"Everyone" is not a user. Name a specific person who has this problem today.'],
              ['Uses the event theme or sponsor APIs strategically', 'Aligning with sponsor APIs can win bonus prizes and score points with judges even if your main idea is modest.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            One useful test: can you explain the idea and its value to a non-technical person in 30 seconds? If not, simplify until you can.
          </p>
        </section>

        <section id="team-formation">
          <h2 className="text-2xl font-bold text-foreground mb-4">Team Formation and Role Assignment</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A balanced team of 3–4 with clear role ownership consistently outperforms larger teams with fuzzy responsibilities. At minimum, cover: frontend/UI, backend/API, and either a designer or ML engineer depending on your project type.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Spend your first 20 minutes on a team kick-off: each person states their strongest skill and preferred focus. Agree on roles and write them down. Invisible role expectations become visible conflicts under pressure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Need to find teammates? Use the event Discord, Devpost&apos;s team-finder, or our free <Link href="/hackathon" className="text-primary hover:underline font-medium">HackMate platform</Link> where you can post a profile, list your project, and apply to open teams before the event starts.
          </p>
        </section>

        <section id="first-hours">
          <h2 className="text-2xl font-bold text-foreground mb-4">The First Two Hours: Set Up for Success</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The first two hours set the tone for everything that follows. Teams that spend this time well are still building productively at hour 22. Teams that spend it arguing about stack choices or chasing a new idea are behind by noon.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-2">Checklist for your first two hours:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
            <li>Lock in the idea — decide by consensus, then commit</li>
            <li>Create a shared repository and agree on branching strategy</li>
            <li>Set up your communication channel (Discord voice, Slack, or in-person)</li>
            <li>Define the MVP: the absolute minimum that demonstrates the core value</li>
            <li>Assign tasks — each person should have a clear first task within 30 minutes of the hack starting</li>
            <li>Agree on check-in cadence (every 3–4 hours works well)</li>
          </ul>
        </section>

        <section id="mvp-strategy">
          <h2 className="text-2xl font-bold text-foreground mb-4">Build Your MVP First, Features Second</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The MVP rule is the most violated principle in hackathons. Teams spend the first 18 hours building features and then scramble to wire everything together in the last 6. The correct order is: make the core flow work end-to-end first, then add features if time permits.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A working MVP means a user can: input something → something meaningful happens → a result is shown. Everything else is a feature. Build the skeleton before the flesh.
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-foreground mb-2">The MVP Test</p>
            <p className="text-sm text-muted-foreground">If you demoed what you have right now, would judges understand the core value proposition? If yes, you have an MVP. Now polish it instead of adding features.</p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Cut scope aggressively and early — it&apos;s always better to have one feature that works perfectly than five features that half-work.
          </p>
        </section>

        <section id="time-management">
          <h2 className="text-2xl font-bold text-foreground mb-4">Time Management During the Hackathon</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Time is the scarcest resource at a hackathon. Here is a rough time allocation for a 24-hour event:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Hours</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['0–2', 'Team kick-off, idea lock, repo setup, task assignment'],
                  ['2–10', 'MVP build — core feature, end-to-end working'],
                  ['10–14', 'Polish MVP, add highest-priority secondary features'],
                  ['14–18', 'Bug fixing, integration, UI polish'],
                  ['18–20', 'Feature freeze — stop adding, start testing'],
                  ['20–22', 'Demo prep, pitch rehearsal, slide deck'],
                  ['22–24', 'Final polish, dry run, rest if possible'],
                ].map(([hours, focus], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{hours}h</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The feature freeze at hour 18 is non-negotiable for teams serious about winning. The last 6 hours are for presentation quality, not feature count.
          </p>
        </section>

        <section id="the-demo">
          <h2 className="text-2xl font-bold text-foreground mb-4">Nailing the Demo and Pitch</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The demo is where your project either lands or gets forgotten. Judges see dozens of projects — a clear, confident, well-rehearsed presentation stands out immediately.
          </p>
          <div className="space-y-4">
            {[
              ['Open with the problem, not the solution', 'Start with one sentence describing who has this problem and what it costs them. Judges need context before they can appreciate your solution.'],
              ['Show, don\'t tell', 'Live demo beats slides every time. Click through the actual working product. If there\'s a risk of failure, have a recorded backup video ready.'],
              ['Narrate what the user is experiencing', 'As you demo, say "a user lands here and sees..." — this helps judges follow the flow and visualises real usage.'],
              ['State the technical innovation', 'Briefly explain the interesting technical decision: "we used X to achieve Y, which normally requires Z". Judges include technical evaluators.'],
              ['End with impact', 'Close with the potential reach or impact of the solution. Make judges feel like the problem is bigger than a hackathon project.'],
              ['Rehearse at least twice', 'Timed rehearsals reveal what needs cutting. Most teams talk too fast when nervous — rehearsal fixes this.'],
            ].map(([title, desc]) => (
              <div key={title} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="what-judges-want">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Hackathon Judges Actually Look For</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Judging criteria vary by event, but the following factors appear in almost every rubric. Weight your effort accordingly:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Criterion</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">What Judges Are Asking</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">How to Signal It</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Impact', 'Does this solve a real problem?', 'Name a specific user + quantify the problem if possible'],
                  ['Innovation', 'Is this approach novel?', 'Explain what makes your approach different from existing solutions'],
                  ['Technical execution', 'Does it work? Is the code quality reasonable?', 'Live demo; mention any interesting technical decisions'],
                  ['Design', 'Is it polished and usable?', 'Clean UI, consistent visual language, smooth demo flow'],
                  ['Presentation', 'Is the pitch clear and compelling?', 'Strong opening hook, clear value prop, rehearsed delivery'],
                  ['Feasibility', 'Could this be built into a real product?', 'Mention a realistic path to an MVP or beta'],
                ].map(([criterion, question, signal], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{criterion}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{question}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="mistakes">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Most Common Mistakes (and How to Avoid Them)</h2>
          <div className="space-y-4">
            {[
              ['Idea scope too large', 'Ambition is good; overscoping is fatal. Halve your initial scope. You can always add more if time permits — you cannot halve your scope at hour 20.'],
              ['No working demo at presentation time', 'The most common and most damaging mistake. Prioritise a working demo over every feature. A broken demo is worse than no demo.'],
              ['Skipping the pitch preparation', 'Allocate at least 2 hours to the pitch. Assign one person to own it from hour one, not from hour 22.'],
              ['All-nighter thinking', 'Most people make significantly worse technical decisions after 20+ hours awake. A 4-hour sleep block often produces more productive output in the remaining hours than grinding through the night.'],
              ['Premature optimisation', 'Don\'t spend 3 hours making your database queries faster when the UI is still broken. Demo-correctness before performance.'],
              ['Ignoring the judging criteria', 'Read the rubric and design your pitch to address each criterion explicitly. Judges scoring on a rubric give credit for what they can see.'],
            ].map(([mistake, fix], i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{mistake}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="after-the-event">
          <h2 className="text-2xl font-bold text-foreground mb-4">After the Hackathon: Making It Count</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The hackathon ends, but the value doesn&apos;t have to. Teams that capitalise on the momentum often build real products, launch on Product Hunt, or turn the project into a portfolio piece that gets them hired.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Clean up the repo and write a good README.</strong> You will thank yourself when you revisit it in six months.</li>
            <li><strong className="text-foreground">Post the project on Devpost, LinkedIn, and Twitter/X.</strong> Document what you built, what you learned, and what you&apos;d do differently.</li>
            <li><strong className="text-foreground">Debrief with your team.</strong> What went well? What slowed you down? A 20-minute retro improves every subsequent hackathon.</li>
            <li><strong className="text-foreground">Keep in touch with your teammates.</strong> Hackathon teams that stay connected often collaborate again — or refer each other for jobs.</li>
            <li><strong className="text-foreground">Consider continuing the project.</strong> If you got positive feedback from judges or users, the hackathon version is often a solid starting point for a real product.</li>
          </ul>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do you do well in a hackathon?',
                a: 'Pick a focused, scoped idea. Form a balanced team with clear role ownership. Ship an MVP first, then polish. Freeze features 2–3 hours before the deadline. Rehearse the pitch. Sleep at least 4 hours.',
              },
              {
                q: 'What makes a good hackathon project?',
                a: 'It solves a real, specific problem. It has a working live demo. It\'s explainable to a non-technical person in 30 seconds. The technical approach is interesting or novel enough to impress judges.',
              },
              {
                q: 'How do you prepare for a hackathon?',
                a: 'Form your team in advance. Set up your dev environment. Read the judging criteria and sponsor API docs. Bring allowed boilerplate. Sleep well the night before.',
              },
              {
                q: 'What do hackathon judges look for?',
                a: 'Impact (real problem), innovation (novel approach), technical execution (working demo), design (polish), and presentation (clear compelling pitch). Most rubrics score all five — address each one explicitly.',
              },
              {
                q: 'Is it better to have a complex or simple hackathon project?',
                a: 'Simple and working beats complex and broken every time. The best projects are laser-focused on one core feature that works flawlessly during the demo.',
              },
            ].map(({ q, a }, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </article>
    </main>
  )
}
