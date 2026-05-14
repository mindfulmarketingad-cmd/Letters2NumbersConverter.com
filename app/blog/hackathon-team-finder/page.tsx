import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/hackathon-team-finder`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'Hackathon Team Finder — How to Find Teammates for Any Hackathon',
  description: 'Learn how to find a hackathon team fast. Covers Discord servers, LinkedIn, event platforms, skill matching, and our free HackMate tool for creating profiles and project listings.',
  keywords: [
    'hackathon team finder',
    'how to find a hackathon team',
    'find teammates for hackathon',
    'hackathon team matching',
    'hackathon networking',
    'hackathon team building',
    'hackmate',
    'hackathon project team',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Hackathon Team Finder — How to Find Teammates for Any Hackathon',
    description: 'A complete guide to finding hackathon teammates — from Discord and LinkedIn to our free HackMate platform where you can post a profile and apply to projects.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Hackathon Team Finder Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hackathon Team Finder — Find Teammates Fast',
    description: 'How to find a hackathon team: Discord, LinkedIn, skill matching, and the free HackMate platform.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hackathon Team Finder — How to Find Teammates for Any Hackathon',
  description: 'A complete guide to finding hackathon teammates using communities, platforms, and skill-matching strategies.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'How do I find a team for a hackathon?',
    answer: 'Join the event\'s Discord or Slack, post on LinkedIn with the hackathon hashtag, attend pre-event team-formation sessions, and use dedicated platforms like HackMate where you can create a profile listing your skills and browse open projects.',
  },
  {
    question: 'What should I put in a hackathon team-finder profile?',
    answer: 'Include your name, primary role (e.g. frontend developer, ML engineer, designer), key skills, what you\'re looking for in a team, and links to your GitHub or portfolio so potential teammates can assess your experience level.',
  },
  {
    question: 'How many people should a hackathon team have?',
    answer: 'Most hackathons cap teams at 3–5 people. The sweet spot is usually 3–4: enough to cover design, frontend, backend, and presentation without too many cooks. Solo participation is allowed at many events, but teaming up significantly improves your chances.',
  },
  {
    question: 'Can I join a hackathon without a team?',
    answer: 'Yes. Many hackathons have dedicated team-formation channels, pre-event meetups, and team-finder boards specifically for solo participants. Organisers actively encourage teaming up — it\'s part of the experience.',
  },
  {
    question: 'What is HackMate?',
    answer: 'HackMate is a free teammate-finder feature at letters2numbersconverter.com/hackathon. You can create a public profile listing your role and skills, post project ideas with the team size you need, and apply to open projects from other participants.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'Hackathon Team Finder', url: PAGE_URL },
])

export default function HackathonTeamFinderPage() {
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
          Hackathon Team Finder: How to Find the Right Teammates for Your Next Hackathon
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Finding a hackathon team is one of the most stressful parts of entering a competition — but it doesn&apos;t have to be. This guide covers every reliable hackathon team finder strategy, from Discord channels and LinkedIn posts to our free <Link href="/hackathon" className="text-primary hover:underline font-medium">HackMate platform</Link> where you can post your profile, list a project, and apply to open teams in minutes.
        </p>
      </header>

      {/* TOC */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-10" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
          <li><a href="#why-team-matters" className="hover:text-foreground hover:underline">Why Your Team Matters More Than Your Idea</a></li>
          <li><a href="#where-to-find" className="hover:text-foreground hover:underline">Where to Find Hackathon Teammates</a></li>
          <li><a href="#hackmate" className="hover:text-foreground hover:underline">HackMate: Free Team Finder & Project Board</a></li>
          <li><a href="#your-profile" className="hover:text-foreground hover:underline">Building a Great Team-Finder Profile</a></li>
          <li><a href="#reaching-out" className="hover:text-foreground hover:underline">How to Reach Out to Potential Teammates</a></li>
          <li><a href="#what-to-look-for" className="hover:text-foreground hover:underline">What Skills to Look for in a Hackathon Team</a></li>
          <li><a href="#red-flags" className="hover:text-foreground hover:underline">Red Flags to Avoid When Teaming Up</a></li>
          <li><a href="#solo" className="hover:text-foreground hover:underline">Going Solo vs. Joining a Team</a></li>
          <li><a href="#faq" className="hover:text-foreground hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

        {/* Section 1 */}
        <section id="why-team-matters">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Your Team Matters More Than Your Idea</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Judges at hackathons consistently say the same thing: they invest in teams, not projects. A mediocre idea executed brilliantly by a cohesive team beats a brilliant idea poorly executed every time. The right mix of skills, work ethic, and communication style can carry a project from concept to demo in 24–48 hours. The wrong team dynamic can derail even the most innovative concept.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That&apos;s why finding teammates early — ideally before the event begins — is one of the highest-leverage things you can do to improve your hackathon results. The earlier you form your team, the more time you have to discuss ideas, divide responsibilities, and align on your approach before the clock starts.
          </p>
        </section>

        {/* Section 2 */}
        <section id="where-to-find">
          <h2 className="text-2xl font-bold text-foreground mb-4">Where to Find Hackathon Teammates</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            There is no single best place to find a hackathon team — the right channel depends on the event size, format (in-person vs online), and how much lead time you have. Here are the most effective options:
          </p>

          <div className="space-y-5">
            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">1. The Event&apos;s Own Discord or Slack</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most hackathons — especially MLH, Devpost, and major university events — have a dedicated <code>#team-finder</code> or <code>#looking-for-team</code> channel. This is the most targeted pool: everyone there is registered for the same event. Post your role, skills, and what kind of project you&apos;re interested in, and read through other posts to reach out directly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">2. Devpost Event Page</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many hackathons hosted on Devpost have a team-formation feature built into the event page. Participants can list themselves as available and search for others. If your event is on Devpost, check the &ldquo;Looking for Team&rdquo; section before searching elsewhere.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">3. LinkedIn</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Post a short update mentioning the hackathon name and that you&apos;re looking for teammates. Use the event hashtag if one exists. LinkedIn&apos;s network effect means your post can reach people several degrees away. This works especially well for well-known events like ETHGlobal, Google&apos;s hackathons, or major university competitions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">4. GitHub</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you have a strong GitHub profile, mention the hackathon in your bio or pin a repository with a README explaining your availability. Developers often browse GitHub profiles when evaluating potential teammates, so an active commit history speaks for itself.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">5. University Clubs and Coding Groups</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For students, your university&apos;s CS club, AI society, or entrepreneurship club is often the fastest path to reliable teammates. These people already know your skill level and work ethic — trust is pre-established.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-5">
              <h3 className="font-semibold text-foreground mb-2">6. Reddit</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Subreddits like r/cscareerquestions, r/learnprogramming, r/MachineLearning, and event-specific communities frequently have team-finder threads in the weeks before large hackathons.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — HackMate */}
        <section id="hackmate">
          <h2 className="text-2xl font-bold text-foreground mb-4">HackMate: Free Team Finder & Project Board</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We built <Link href="/hackathon" className="text-primary hover:underline font-medium">HackMate</Link> — a free, no-signup-required team-finder available at <Link href="/hackathon" className="text-primary hover:underline font-medium">letters2numbersconverter.com/hackathon</Link> — specifically to address the gap between generic social platforms and event-specific Discord channels that disappear after the hackathon ends.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-4">
            Here&apos;s what HackMate lets you do for free:
          </p>

          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
            <li><strong className="text-foreground">Create a public profile</strong> — list your name, role, skills, what you&apos;re looking for, and links to your GitHub, portfolio, LinkedIn, or Twitter</li>
            <li><strong className="text-foreground">Post a project listing</strong> — describe your idea, list the skills you need, set your target team size, and open it for applications</li>
            <li><strong className="text-foreground">Apply to open projects</strong> — browse live project listings, read the description, and submit an application with a message about why you&apos;d be a good fit</li>
            <li><strong className="text-foreground">Accept or reject applications</strong> — project creators can review applicants and build their team directly through the platform</li>
          </ul>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
            <p className="text-sm text-foreground font-medium mb-2">Ready to find your team?</p>
            <p className="text-sm text-muted-foreground mb-3">
              Create a free HackMate profile in under two minutes. No account required — just sign in with email and fill in your details.
            </p>
            <Link
              href="/hackathon"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Open HackMate →
            </Link>
          </div>
        </section>

        {/* Section 4 */}
        <section id="your-profile">
          <h2 className="text-2xl font-bold text-foreground mb-4">Building a Great Team-Finder Profile</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Whether you&apos;re using HackMate, Devpost, or a Discord channel, a strong team-finder profile will get you more and better responses. Here&apos;s what to include:
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Field</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">What to Write</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Name', 'Your real first name (or handle if preferred)'],
                  ['Role', 'One primary title: Frontend Dev, ML Engineer, Backend Dev, Designer, PM, etc.'],
                  ['Skills', '4–8 specific technologies: React, Python, TensorFlow, Figma, Node.js…'],
                  ['Looking for', '1–2 sentences: "I want to build something in health-tech and need a backend dev and a designer"'],
                  ['GitHub/Portfolio', 'A live link — this is the most credible signal for technical teammates'],
                ].map(([field, desc], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{field}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            Keep it concise. Potential teammates skim dozens of profiles — a three-line profile that clearly communicates who you are and what you bring is far more effective than a wall of text.
          </p>
        </section>

        {/* Section 5 */}
        <section id="reaching-out">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Reach Out to Potential Teammates</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Once you&apos;ve spotted someone with complementary skills, a cold message is usually all it takes — but the message quality matters. A generic &ldquo;hey wanna team up?&rdquo; gets ignored. A specific, relevant message gets a response.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Template that works well:
          </p>
          <div className="bg-muted/50 border border-border rounded-lg p-4 mb-4 text-sm text-foreground font-mono leading-relaxed">
            &ldquo;Hey [Name], I saw your profile — I&apos;m a [your role] with experience in [relevant skill]. I&apos;m hoping to build something in [area] at [hackathon name]. Your [specific skill/project] stood out. Would you be interested in teaming up? Happy to jump on a quick call to discuss ideas.&rdquo;
          </div>
          <p className="text-muted-foreground leading-relaxed">
            The key elements: mention something specific about them, state your role clearly, share a rough project direction, and propose a low-commitment next step (a short call, not a full commitment).
          </p>
        </section>

        {/* Section 6 */}
        <section id="what-to-look-for">
          <h2 className="text-2xl font-bold text-foreground mb-4">What Skills to Look for in a Hackathon Team</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A well-balanced team covers all the bases needed to build and present a working product. For a typical 24–48 hour hackathon, the ideal 3–4 person team includes:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li><strong className="text-foreground">Frontend / UI developer</strong> — builds the interface users actually see</li>
            <li><strong className="text-foreground">Backend developer</strong> — handles APIs, data, and server logic</li>
            <li><strong className="text-foreground">Designer (or developer with design sense)</strong> — makes the demo look polished</li>
            <li><strong className="text-foreground">ML / data engineer</strong> — essential if your project uses AI, which most winning projects do now</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Beyond technical skills, look for people who communicate clearly, can work under pressure, and won&apos;t disappear at 3am when the deadline is approaching. Reliability under stress is rarer and more valuable than any single technical skill.
          </p>
        </section>

        {/* Section 7 */}
        <section id="red-flags">
          <h2 className="text-2xl font-bold text-foreground mb-4">Red Flags to Avoid When Teaming Up</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Not every teammate is the right teammate. Watch out for these warning signs:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Vague experience claims</strong> — &ldquo;I know a bit of everything&rdquo; often means shallow knowledge of everything</li>
            <li><strong className="text-foreground">No portfolio or GitHub</strong> — not a dealbreaker, but harder to assess their actual level</li>
            <li><strong className="text-foreground">Very specific idea attachment</strong> — &ldquo;I only want to build X&rdquo; can lead to conflict if the idea doesn&apos;t survive the first hour</li>
            <li><strong className="text-foreground">Poor communication before the event</strong> — if they&apos;re slow to respond during planning, expect the same during crunch time</li>
            <li><strong className="text-foreground">Mismatched commitment level</strong> — if you want to win and they want to network, that tension will surface under pressure</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="solo">
          <h2 className="text-2xl font-bold text-foreground mb-4">Going Solo vs. Joining a Team</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Some participants prefer going solo — full control, no coordination overhead, and the credibility of a one-person demo. Solo hacking can be impressive, and some events have a solo track.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            But the vast majority of winning teams are teams of 3–4. Here&apos;s a quick comparison:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Factor</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Solo</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Team of 3–4</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Scope', 'Limited by one person\'s bandwidth', 'Can tackle full-stack + design + ML'],
                  ['Speed', 'No coordination overhead', 'Faster on large features via parallelism'],
                  ['Quality', 'Single perspective', 'Peer review catches mistakes early'],
                  ['Presentation', 'Impressive but exhausting', 'Can split prep and demo roles'],
                  ['Winning odds', 'Lower in open categories', 'Higher — more skills, more polish'],
                ].map(([factor, solo, team], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{factor}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{solo}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            If you can&apos;t find the right team, it&apos;s better to go solo with a focused, well-executed idea than to join a dysfunctional team. But exhaust your team-finding options first — use <Link href="/hackathon" className="text-primary hover:underline font-medium">HackMate</Link>, the event Discord, and LinkedIn before resigning yourself to solo.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How do I find a team for a hackathon?',
                a: 'Join the event\'s Discord or Slack, post on LinkedIn with the hackathon hashtag, attend pre-event team-formation sessions, and use dedicated platforms like HackMate where you can create a profile and browse open projects.',
              },
              {
                q: 'What should I put in a hackathon team-finder profile?',
                a: 'Your name, primary role, key skills, what you\'re looking for in a team, and links to your GitHub or portfolio. Keep it concise — clear beats comprehensive.',
              },
              {
                q: 'How many people should a hackathon team have?',
                a: 'Most hackathons cap teams at 3–5. The sweet spot is 3–4: enough to cover design, frontend, backend, and presentation without coordination overhead becoming a problem.',
              },
              {
                q: 'Can I join a hackathon without a team?',
                a: 'Yes. Most hackathons have team-formation channels specifically for solo participants. You can also use HackMate to post a profile and get matched with open projects before the event starts.',
              },
              {
                q: 'What is HackMate?',
                a: 'HackMate is a free teammate-finder at letters2numbersconverter.com/hackathon. Create a public profile, post a project, or apply to open projects from other participants — all for free.',
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
