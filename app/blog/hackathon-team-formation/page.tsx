import type { Metadata } from 'next'
import Link from 'next/link'
import { generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema-markup'

const BASE_URL = 'https://www.letters2numbersconverter.com'
const PAGE_URL = `${BASE_URL}/blog/hackathon-team-formation`
const PUBLISHED = '2026-05-14'

export const metadata: Metadata = {
  title: 'Hackathon Team Formation — How to Build a Winning Team from Scratch',
  description: 'Master hackathon team formation: how to assemble balanced skills, assign roles, set norms, and stay cohesive under pressure. Includes a role matrix and step-by-step formation guide.',
  keywords: [
    'hackathon team formation',
    'how to form a hackathon team',
    'hackathon team structure',
    'hackathon roles',
    'hackathon team building',
    'hackathon team strategy',
    'best hackathon team size',
    'hackathon team tips',
  ],
  authors: [{ name: 'John Reed' }],
  openGraph: {
    title: 'Hackathon Team Formation — How to Build a Winning Team from Scratch',
    description: 'A complete guide to hackathon team formation: skills matrix, role assignments, team norms, and strategies for staying cohesive when things get stressful.',
    type: 'article',
    url: PAGE_URL,
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Hackathon Team Formation Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hackathon Team Formation Guide',
    description: 'Build a balanced hackathon team: roles, skills, norms, and strategies that win.',
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Hackathon Team Formation — How to Build a Winning Team from Scratch',
  description: 'A complete guide to hackathon team formation: skills matrix, role assignments, team norms, and strategies for staying cohesive when things get stressful.',
  url: PAGE_URL,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  author: { '@type': 'Person', name: 'John Reed', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'Letters2NumbersConverter.com', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
}

const faqSchema = generateFAQSchema([
  {
    question: 'What is the ideal hackathon team formation?',
    answer: 'An ideal hackathon team of 3–4 covers: a frontend/UI developer, a backend developer, a designer or developer with design skills, and (for AI-heavy events) an ML/data engineer. Each person should have one clear primary role to avoid duplicated effort and missed responsibilities.',
  },
  {
    question: 'How do you assign roles in a hackathon team?',
    answer: 'During a 30-minute kick-off before hacking starts, have each person state their strongest skill and preferred area. Map those to project needs (frontend, backend, ML, design, pitch). If two people want the same role, have the stronger candidate take it and the other provide support.',
  },
  {
    question: 'Should hackathon teams have a leader?',
    answer: 'A light-touch leader — someone who keeps the group aligned without micro-managing — helps tremendously. The leader\'s job is to track progress, make final calls when the team disagrees, and manage the demo/presentation. It doesn\'t have to be the most experienced person; it should be whoever is best at coordination.',
  },
  {
    question: 'What are common hackathon team formation mistakes?',
    answer: 'The most common mistakes: (1) forming too late and rushing team dynamics, (2) all members having the same skill set, (3) no clear role ownership leading to duplicated or missed work, (4) skipping team norms and experiencing communication breakdown under pressure.',
  },
  {
    question: 'How do I find people to form a hackathon team with?',
    answer: 'Use the event\'s Discord, LinkedIn, or a dedicated platform like HackMate (letters2numbersconverter.com/hackathon) where you can post a profile listing your skills and browse open projects from other participants.',
  },
])

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: BASE_URL },
  { name: 'Blog', url: `${BASE_URL}/blog` },
  { name: 'Hackathon Team Formation', url: PAGE_URL },
])

export default function HackathonTeamFormationPage() {
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
          Hackathon Team Formation: How to Build a Winning Team from Scratch
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Hackathon team formation is the single decision that most determines whether you&apos;ll ship a polished product or spend Sunday fixing last-minute merge conflicts. This guide covers everything: the optimal team size and skill mix, how to assign roles without conflict, the norms every team should set before hacking starts, and what separates teams that win from teams that barely finish.
        </p>
      </header>

      {/* TOC */}
      <nav className="bg-muted/50 border border-border rounded-xl p-5 mb-10" aria-label="Table of contents">
        <p className="text-sm font-semibold text-foreground mb-3">Table of Contents</p>
        <ol className="space-y-1.5 text-sm list-decimal list-inside text-muted-foreground">
          <li><a href="#team-size" className="hover:text-foreground hover:underline">Optimal Hackathon Team Size</a></li>
          <li><a href="#skills-matrix" className="hover:text-foreground hover:underline">The Hackathon Skills Matrix</a></li>
          <li><a href="#roles" className="hover:text-foreground hover:underline">Core Roles and Responsibilities</a></li>
          <li><a href="#assigning-roles" className="hover:text-foreground hover:underline">How to Assign Roles Without Conflict</a></li>
          <li><a href="#team-norms" className="hover:text-foreground hover:underline">Setting Team Norms Before You Start</a></li>
          <li><a href="#finding-members" className="hover:text-foreground hover:underline">Where to Find Team Members</a></li>
          <li><a href="#managing-stress" className="hover:text-foreground hover:underline">Keeping the Team Cohesive Under Pressure</a></li>
          <li><a href="#common-mistakes" className="hover:text-foreground hover:underline">Common Team Formation Mistakes</a></li>
          <li><a href="#faq" className="hover:text-foreground hover:underline">FAQ</a></li>
        </ol>
      </nav>

      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-10">

        <section id="team-size">
          <h2 className="text-2xl font-bold text-foreground mb-4">Optimal Hackathon Team Size</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most hackathons allow teams of 1–5. The optimal size for a competitive team is <strong className="text-foreground">3–4 people</strong>. Here&apos;s why:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li><strong className="text-foreground">2 people</strong> — fast to coordinate, but the scope is severely limited. One person gets sick or stuck and the project stalls.</li>
            <li><strong className="text-foreground">3 people</strong> — the sweet spot for most events. Enough to cover frontend, backend, and design/ML, with minimal coordination overhead.</li>
            <li><strong className="text-foreground">4 people</strong> — adds a specialist (AI engineer, DevOps, or a dedicated pitch person). Coordination takes slightly more effort but the output quality is higher.</li>
            <li><strong className="text-foreground">5 people</strong> — works well when roles are crystal clear. At 5, there&apos;s a real risk of someone feeling underutilised or excluded from key decisions.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Solo hacking is impressive but disadvantaged in most categories. If you&apos;re going solo, choose a very focused problem and an MVP scope you can actually complete in the time available.
          </p>
        </section>

        <section id="skills-matrix">
          <h2 className="text-2xl font-bold text-foreground mb-4">The Hackathon Skills Matrix</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Before finalising your team, map the skills you have against the skills the project will need. A simple skills matrix prevents the most common formation failure: everyone knows the same stack.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Skill Area</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Why It Matters</th>
                  <th className="border border-border px-3 py-2 text-left text-foreground font-semibold">Tools / Languages</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Frontend / UI', 'Users see and interact with this — polish wins demos', 'React, Vue, Tailwind, HTML/CSS'],
                  ['Backend / APIs', 'Data, logic, integrations, authentication', 'Node, Python, Go, FastAPI, Supabase'],
                  ['ML / AI', 'Increasingly essential for judged categories', 'Python, PyTorch, OpenAI API, LangChain'],
                  ['Design / UX', 'A polished UI signals craftsmanship to judges', 'Figma, design systems, typography basics'],
                  ['DevOps / Infra', 'Fast deployments, reliable demo environment', 'Docker, Vercel, Railway, Fly.io'],
                  ['Pitch / Comms', 'A compelling presentation can win as much as the code', 'Slides, storytelling, time management'],
                ].map(([area, why, tools], i) => (
                  <tr key={i} className={i % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="border border-border px-3 py-2 font-medium text-foreground">{area}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground">{why}</td>
                    <td className="border border-border px-3 py-2 text-muted-foreground text-xs">{tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            You don&apos;t need a specialist in every row — many developers can cover 2–3 areas. But if your whole team is backend-only, your demo will suffer.
          </p>
        </section>

        <section id="roles">
          <h2 className="text-2xl font-bold text-foreground mb-4">Core Roles and Responsibilities</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Clear role ownership is the difference between a team that ships and one that spends the last 4 hours arguing about who owns the database schema.
          </p>
          <div className="space-y-4">
            {[
              {
                title: 'Tech Lead',
                desc: 'Owns architecture decisions, sets up the repo, and resolves technical blockers. Not necessarily the most senior person — just the one who can make fast, confident technical decisions and unblock others.',
              },
              {
                title: 'Frontend Developer',
                desc: 'Builds the UI from either the designer\'s mockups or their own design sense. Responsible for the demo looking polished. This person often drives the final presentation experience.',
              },
              {
                title: 'Backend Developer',
                desc: 'Builds the API, handles data models, integrations, and any server-side logic. Works closely with the frontend developer to agree on contract (endpoints, data shapes) early.',
              },
              {
                title: 'ML / AI Engineer',
                desc: 'Required for AI/ML track submissions. Builds and integrates the model or AI pipeline. Often the most bottlenecked role — give them scope to work independently.',
              },
              {
                title: 'Designer (or Design-aware Dev)',
                desc: 'Creates the visual language — color palette, typography, component style. Even a basic Figma frame before coding starts prevents inconsistent UI later.',
              },
              {
                title: 'Pitch Lead',
                desc: 'Owns the deck and the verbal presentation. Often doubles as a team member in another role but takes responsibility for the narrative, timing, and Q&A prep.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="assigning-roles">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Assign Roles Without Conflict</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Role assignment works best when it&apos;s explicit, not assumed. Spend the first 20–30 minutes of your hack doing a team kick-off:
          </p>
          <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
            <li>Each person shares their <strong className="text-foreground">strongest skill</strong> and their <strong className="text-foreground">preferred focus</strong> for this event.</li>
            <li>Map those preferences to what the project needs.</li>
            <li>If there are conflicts (two people want frontend), discuss openly — who has stronger frontend experience, and is the other happy taking another role?</li>
            <li>Agree on a <strong className="text-foreground">decision-maker</strong> for each domain. When there&apos;s a disagreement about the backend architecture, the backend developer decides.</li>
            <li>Write the agreed roles in a shared doc or Notion page. Invisible expectations become visible disagreements.</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            The goal isn&apos;t perfect role fit — it&apos;s role clarity. Everyone should know exactly what they own and who to ask when they hit a blocker.
          </p>
        </section>

        <section id="team-norms">
          <h2 className="text-2xl font-bold text-foreground mb-4">Setting Team Norms Before You Start</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Teams that set explicit norms in the first hour perform better than teams that wing it. Norms take 10 minutes to agree on and prevent hours of misalignment:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong className="text-foreground">Communication channel</strong> — Discord, WhatsApp, or Slack? Pick one.</li>
            <li><strong className="text-foreground">Check-in cadence</strong> — short sync every 3–4 hours keeps everyone aligned without constant interruption.</li>
            <li><strong className="text-foreground">MVP scope</strong> — agree on the minimum you need to demo before adding features. Feature creep kills hackathon projects.</li>
            <li><strong className="text-foreground">Branching strategy</strong> — even a simple &ldquo;each person uses a feature branch, merge to main before demo&rdquo; prevents last-minute conflict hell.</li>
            <li><strong className="text-foreground">Sleep policy</strong> — counterintuitively, a team that sleeps for 4–5 hours ships better than one that pulls an all-nighter. Decide this up front.</li>
            <li><strong className="text-foreground">Conflict resolution</strong> — if we can&apos;t agree, who has the final call? Agree on the process, not just the answer.</li>
          </ul>
        </section>

        <section id="finding-members">
          <h2 className="text-2xl font-bold text-foreground mb-4">Where to Find Team Members</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you still need to form your team, these are the most effective channels:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
            <li><strong className="text-foreground">Event Discord/Slack</strong> — #team-finder channels are purpose-built for this</li>
            <li><strong className="text-foreground">Devpost event page</strong> — has a built-in team-formation section for registered participants</li>
            <li><strong className="text-foreground">LinkedIn</strong> — post with the event hashtag to reach your extended network</li>
            <li><strong className="text-foreground">HackMate</strong> — our free platform at <Link href="/hackathon" className="text-primary hover:underline">letters2numbersconverter.com/hackathon</Link> where you can create a profile, post a project, and apply to open teams</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Start forming your team at least a week before the event. Last-minute teams skip the norming phase and often pay for it during the event.
          </p>
        </section>

        <section id="managing-stress">
          <h2 className="text-2xl font-bold text-foreground mb-4">Keeping the Team Cohesive Under Pressure</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The final 6 hours of any hackathon are the highest-stress period. Features get cut, bugs appear, and fatigue sets in. Teams that stay cohesive in this window almost always out-perform teams that fragment.
          </p>
          <div className="space-y-4">
            {[
              ['Celebrate small wins', 'When the API goes live or the UI looks polished, say so. Positive reinforcement sustains energy.'],
              ['Cut scope early, not late', 'When you\'re behind, cut a feature at hour 12, not hour 22. Late cuts panic the team; early cuts free them.'],
              ['Pair on hard problems', 'If someone is stuck, have a teammate join for 20 minutes instead of waiting. Two minds unblock faster than one.'],
              ['Take breaks', 'A 15-minute walk at hour 18 restores more productivity than an extra hour of grinding. Build in breaks.'],
              ['Freeze features before the demo', 'Stop new development 2–3 hours before judging. Use the time to polish, rehearse, and document.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3">
                <div className="w-1.5 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="common-mistakes">
          <h2 className="text-2xl font-bold text-foreground mb-4">Common Hackathon Team Formation Mistakes</h2>
          <div className="space-y-4">
            {[
              ['Forming the team the day of the event', 'You skip norming entirely. Form your team at least a few days early so you can do a brief kick-off before the clock starts.'],
              ['All members with the same skill set', 'Five backend developers cannot build a compelling demo. Ensure your team covers design and frontend even if it means recruiting outside your immediate circle.'],
              ['No clear role ownership', 'When everyone is responsible for something, nobody is. Explicit role assignment prevents duplicated and missed work.'],
              ['Picking friends over fit', 'Comfortable dynamics are valuable, but if your group of friends is all data scientists, you still need a frontend developer. Add skills before adding friends.'],
              ['Ignoring the pitch', 'Many technically impressive projects lose to projects with better presentations. Assign someone to own the pitch from day one, not at hour 22.'],
            ].map(([mistake, fix], i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{mistake}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the ideal hackathon team formation?',
                a: 'A team of 3–4 covering frontend/UI, backend, design (or a developer with design skills), and an ML engineer for AI-heavy tracks. Each person should have one clear primary role.',
              },
              {
                q: 'How do you assign roles in a hackathon team?',
                a: 'Hold a 20-minute kick-off where each person states their strongest skill and preferred focus. Map those to project needs and write the agreed roles down somewhere visible.',
              },
              {
                q: 'Should hackathon teams have a leader?',
                a: 'A light-touch coordinator helps. Their job is to track progress, make final calls on disagreements, and own the presentation timeline. It doesn\'t have to be the most experienced person.',
              },
              {
                q: 'What are common hackathon team formation mistakes?',
                a: 'Forming too late, all members having the same skill set, no clear role ownership, and ignoring the pitch until the last hour. All are avoidable with a brief pre-event kick-off.',
              },
              {
                q: 'How do I find people to form a hackathon team with?',
                a: 'Use the event\'s Discord, LinkedIn, or HackMate (letters2numbersconverter.com/hackathon) — a free platform where you can post a profile listing your skills and browse open projects.',
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
