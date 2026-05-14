'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import {
  AlertCircle, Trash2, Check, X, Users, Clock, Briefcase, Send, Plus,
  Sparkles, Calendar, ExternalLink, ChevronDown, MapPin, Trophy, Star,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

// ── Constants ─────────────────────────────────────────────────────────────────

const SKILL_FILTERS = [
  'React', 'Python', 'TypeScript', 'Node.js', 'ML/AI', 'Design',
  'Go', 'Rust', 'iOS', 'Android', 'Web3', 'DevOps', 'Java', 'Vue',
  'Swift', 'Data Science', 'Figma', 'Solidity',
]

const HACKATHON_OPTIONS = [
  'CalHacks', 'ETHGlobal', 'HackDavis', 'HackGT', 'HackIllinois',
  'HackMIT', 'HackNY', 'Lablab.ai AI Hackathon', 'MHacks',
  'MLH Local Hack Day', 'PennApps', 'SBHacks', 'TreeHacks', 'Other',
]

interface HackathonEvent {
  name: string
  tagline: string
  dates: string
  location: string
  format: 'In-person' | 'Online' | 'Hybrid'
  prizes: string
  participants: string
  tags: string[]
  url: string
  description: string
}

const HACKATHON_EVENTS: HackathonEvent[] = [
  {
    name: 'HackMIT',
    tagline: "MIT's premier annual hackathon",
    dates: 'September 2025',
    location: 'MIT, Cambridge, MA',
    format: 'In-person',
    prizes: '$50,000+',
    participants: '1,000+',
    tags: ['General', 'Large-scale'],
    url: 'https://hackmit.org',
    description: "One of the world's most prestigious university hackathons. 24 hours of building alongside mentors from top tech companies.",
  },
  {
    name: 'TreeHacks',
    tagline: "Stanford's annual hackathon",
    dates: 'February 2026',
    location: 'Stanford University, CA',
    format: 'In-person',
    prizes: '$30,000+',
    participants: '1,500+',
    tags: ['General', 'Large-scale'],
    url: 'https://treehacks.com',
    description: "Stanford's flagship hackathon bringing together top hackers to build across any domain with world-class mentorship.",
  },
  {
    name: 'CalHacks',
    tagline: "UC Berkeley's world-class hackathon",
    dates: 'October 2025',
    location: 'UC Berkeley, Berkeley, CA',
    format: 'In-person',
    prizes: '$50,000+',
    participants: '2,000+',
    tags: ['General', 'Large-scale'],
    url: 'https://calhacks.io',
    description: 'One of the largest hackathons in North America, held at UC Berkeley with premier sponsors and mentors.',
  },
  {
    name: 'ETHGlobal',
    tagline: 'Ethereum hackathon series worldwide',
    dates: 'Multiple events 2025–2026',
    location: 'Global cities + Online',
    format: 'Hybrid',
    prizes: '$500,000+ total',
    participants: '5,000+ per event',
    tags: ['Web3', 'Blockchain', 'Large-scale'],
    url: 'https://ethglobal.com',
    description: 'ETHGlobal runs hackathons year-round in cities worldwide, all focused on building the next generation of Web3 applications.',
  },
  {
    name: 'Lablab.ai',
    tagline: 'Build with cutting-edge AI models',
    dates: 'Monthly events',
    location: 'Online',
    format: 'Online',
    prizes: 'Varies per event',
    participants: '10,000+',
    tags: ['AI/ML', 'Online', 'Beginner-friendly'],
    url: 'https://lablab.ai',
    description: 'Monthly AI hackathons using the latest models from Anthropic, OpenAI, Cohere, and more. Ideal for AI builders at any level.',
  },
  {
    name: 'HackGT',
    tagline: "Georgia Tech's flagship hackathon",
    dates: 'October 2025',
    location: 'Atlanta, GA',
    format: 'In-person',
    prizes: '$25,000+',
    participants: '1,000+',
    tags: ['General'],
    url: 'https://hack.gt',
    description: "Georgia Tech's annual hackathon drawing students from across the US with diverse tracks and strong industry mentorship.",
  },
  {
    name: 'PennApps',
    tagline: 'The original college hackathon',
    dates: 'September 2025',
    location: 'University of Pennsylvania, Philadelphia',
    format: 'In-person',
    prizes: '$20,000+',
    participants: '1,200+',
    tags: ['General', 'Historic'],
    url: 'https://pennapps.com',
    description: 'Started in 2009, PennApps is the original large college hackathon and remains one of the most competitive and storied events.',
  },
  {
    name: 'MHacks',
    tagline: "University of Michigan's hackathon",
    dates: 'April 2025',
    location: 'Ann Arbor, MI',
    format: 'In-person',
    prizes: '$20,000+',
    participants: '900+',
    tags: ['General'],
    url: 'https://mhacks.org',
    description: "University of Michigan's prestigious hackathon, open to students from all universities with high-quality mentorship.",
  },
  {
    name: 'HackIllinois',
    tagline: 'Open source hackathon at UIUC',
    dates: 'February 2026',
    location: 'Champaign-Urbana, IL',
    format: 'In-person',
    prizes: '$20,000+',
    participants: '1,000+',
    tags: ['Open Source', 'General'],
    url: 'https://hackillinois.org',
    description: "UIUC's hackathon with a distinctive open source focus — hackers contribute to real projects while competing for prizes.",
  },
  {
    name: 'MLH Local Hack Day',
    tagline: '24-hour community hack days worldwide',
    dates: 'Ongoing worldwide',
    location: 'Online + Local chapters globally',
    format: 'Hybrid',
    prizes: 'Swag + recognition',
    participants: '20,000+',
    tags: ['General', 'Beginner-friendly', 'Online'],
    url: 'https://localhackday.mlh.io',
    description: "Major League Hacking's community hack days — perfect for first-timers and veterans alike. Runs globally throughout the year.",
  },
  {
    name: 'HackDavis',
    tagline: 'Social good hackathon at UC Davis',
    dates: 'April 2026',
    location: 'UC Davis, Davis, CA',
    format: 'In-person',
    prizes: '$10,000+',
    participants: '800+',
    tags: ['Social Good', 'General'],
    url: 'https://hackdavis.io',
    description: 'UC Davis hackathon exclusively focused on technology for social good — health, environment, education, and community impact.',
  },
  {
    name: 'SBHacks',
    tagline: "UCSB's annual hackathon",
    dates: 'January 2026',
    location: 'Santa Barbara, CA',
    format: 'In-person',
    prizes: '$10,000+',
    participants: '500+',
    tags: ['General', 'Beginner-friendly'],
    url: 'https://sbhacks.com',
    description: "UC Santa Barbara's annual hackathon welcoming students from universities across California and beyond.",
  },
]

const EVENT_TAG_FILTERS = ['All', 'In-person', 'Online', 'Hybrid', 'AI/ML', 'Web3', 'Social Good', 'Beginner-friendly', 'Open Source']

// ── Types ─────────────────────────────────────────────────────────────────────

interface HackerProfile {
  id: string
  user_id: string
  name: string
  role: string
  skills: string[]
  looking_for: string
  hackathon?: string
  links?: {
    github?: string
    portfolio?: string
    linkedin?: string
    twitter?: string
    other?: string
  }
  created_at: string
  score?: number
  reason?: string
}

interface Project {
  id: string
  creator_id: string
  name: string
  description: string
  skills_needed: string[]
  team_size_needed: number
  current_team_size: number
  status: 'open' | 'closed'
  hackathon?: string
  created_at: string
  score?: number
  reason?: string
}

interface ProjectApplication {
  id: string
  project_id: string
  user_id: string
  applicant_name: string | null
  applicant_skills: string[] | null
  applicant_message: string | null
  status: 'pending' | 'accepted' | 'rejected'
  created_at: string
}

// ── Shared Utilities ──────────────────────────────────────────────────────────

function ErrorBanner({ message, onDismiss }: { message: string; onDismiss?: () => void }) {
  return (
    <div className="p-4 bg-destructive/10 text-destructive rounded-lg border border-destructive/20 flex gap-2 items-start">
      <AlertCircle size={17} className="mt-0.5 flex-shrink-0" />
      <p className="text-sm flex-1">{message}</p>
      {onDismiss && (
        <button onClick={onDismiss} className="text-destructive/70 hover:text-destructive flex-shrink-0">
          <X size={15} />
        </button>
      )}
    </div>
  )
}

function HackathonBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-medium">
      <Calendar size={10} />
      {name}
    </span>
  )
}

// ── Skill Filter Bar ───────────────────────────────────────────────────────────

function SkillFilterBar({
  selected,
  onChange,
}: {
  selected: string[]
  onChange: (s: string[]) => void
}) {
  const toggle = (skill: string) =>
    onChange(selected.includes(skill) ? selected.filter((s) => s !== skill) : [...selected, skill])

  return (
    <div className="flex flex-wrap gap-2">
      {SKILL_FILTERS.map((skill) => (
        <button
          key={skill}
          onClick={() => toggle(skill)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
            selected.includes(skill)
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
          }`}
        >
          {skill}
        </button>
      ))}
    </div>
  )
}

// ── Hacker Card ───────────────────────────────────────────────────────────────

function HackerCard({ hacker }: { hacker: HackerProfile }) {
  const initials = hacker.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      {hacker.score !== undefined && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400">
            <Star size={13} fill="currentColor" />
            {hacker.score}% match
          </div>
        </div>
      )}

      <div className="flex items-start gap-3">
        <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{hacker.name}</h3>
          <p className="text-sm text-muted-foreground">{hacker.role}</p>
        </div>
      </div>

      {hacker.reason && (
        <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed">
          {hacker.reason}
        </p>
      )}

      <div className="flex flex-wrap gap-1.5">
        {hacker.skills.map((skill) => (
          <span key={skill} className="inline-block bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {hacker.hackathon && <HackathonBadge name={hacker.hackathon} />}

      {hacker.looking_for && (
        <p className="text-xs text-muted-foreground line-clamp-2">{hacker.looking_for}</p>
      )}

      {hacker.links && Object.keys(hacker.links).length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
          {hacker.links.github && (
            <a href={hacker.links.github} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">GitHub</a>
          )}
          {hacker.links.portfolio && (
            <a href={hacker.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Portfolio</a>
          )}
          {hacker.links.linkedin && (
            <a href={hacker.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">LinkedIn</a>
          )}
          {hacker.links.twitter && (
            <a href={hacker.links.twitter} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Twitter</a>
          )}
          {hacker.links.other && (
            <a href={hacker.links.other} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">Website</a>
          )}
        </div>
      )}
    </div>
  )
}

// ── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  isLoggedIn,
  isCreator,
  hasApplied,
  onApplyClick,
  onDelete,
  onManageClick,
}: {
  project: Project
  isLoggedIn: boolean
  isCreator: boolean
  hasApplied: boolean
  onApplyClick: (project: Project) => void
  onDelete?: (projectId: string) => void
  onManageClick?: (projectId: string) => void
}) {
  const daysAgo = Math.floor((Date.now() - new Date(project.created_at).getTime()) / 86400000)
  const postedText = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
      {project.score !== undefined && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 mb-3">
          <Star size={13} fill="currentColor" />
          {project.score}% match
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
              project.status === 'open'
                ? 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400'
                : 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400'
            }`}>
              {project.status === 'open' ? 'Recruiting' : 'Closed'}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={11} />
              {postedText}
            </span>
            {isCreator && (
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">Your project</span>
            )}
          </div>
          <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors leading-snug">
            {project.name}
          </h3>
        </div>
      </div>

      {project.reason && (
        <p className="text-xs text-muted-foreground italic border-l-2 border-primary/30 pl-3 leading-relaxed mb-3">
          {project.reason}
        </p>
      )}

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>

      <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground flex-wrap">
        <span className="flex items-center gap-1">
          <Users size={13} />
          {project.current_team_size}/{project.team_size_needed} members
        </span>
        {project.hackathon && <HackathonBadge name={project.hackathon} />}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.skills_needed.map((skill) => (
          <span key={skill} className="inline-block bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-2 pt-4 border-t border-border mt-auto">
        {isCreator && onManageClick && onDelete ? (
          <>
            <button
              onClick={() => onManageClick(project.id)}
              className="flex-1 bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2"
            >
              <Users size={15} />
              View Applications
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="px-3 py-2.5 border border-border rounded-lg hover:bg-destructive/10 hover:border-destructive/50 transition-colors"
              title="Delete project"
            >
              <Trash2 size={15} className="text-destructive" />
            </button>
          </>
        ) : !isLoggedIn ? (
          <Link
            href="/sign-in"
            className="w-full font-medium py-2.5 rounded-lg transition-colors text-sm bg-primary text-primary-foreground hover:opacity-90 text-center flex items-center justify-center gap-2"
          >
            <Send size={15} />
            Sign In to Apply
          </Link>
        ) : hasApplied ? (
          <div className="w-full py-2.5 rounded-lg text-sm bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-center font-medium flex items-center justify-center gap-2">
            <Check size={15} />
            Application Submitted
          </div>
        ) : project.status !== 'open' ? (
          <div className="w-full py-2.5 rounded-lg text-sm bg-muted text-muted-foreground text-center font-medium">
            Applications Closed
          </div>
        ) : (
          <button
            onClick={() => onApplyClick(project)}
            className="w-full font-medium py-2.5 rounded-lg transition-all text-sm bg-primary text-primary-foreground hover:opacity-90 flex items-center justify-center gap-2"
          >
            <Send size={15} />
            Apply Now
          </button>
        )}
      </div>
    </div>
  )
}

// ── Application Modal ─────────────────────────────────────────────────────────

function ApplicationModal({
  project,
  onClose,
  onSubmit,
  isSubmitting,
}: {
  project: Project
  onClose: () => void
  onSubmit: (data: { applicant_name: string; applicant_skills: string[]; applicant_message: string }) => void
  isSubmitting: boolean
}) {
  const [name, setName] = useState('')
  const [skills, setSkills] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      applicant_name: name,
      applicant_skills: skills.split(',').map((s) => s.trim()).filter(Boolean),
      applicant_message: message,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border flex items-start justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Apply to Project</h2>
            <p className="text-sm text-muted-foreground mt-1">{project.name}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Your Name *</label>
            <input
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
            </label>
            <input
              type="text" required value={skills} onChange={(e) => setSkills(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="e.g. React, Python, UI Design"
            />
            <p className="text-xs text-muted-foreground mt-1.5">Looking for: {project.skills_needed.join(', ')}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Why do you want to join? <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <textarea
              value={message} onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              rows={3}
              placeholder="Tell the project creator why you'd be a great fit..."
            />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose}
              className="flex-1 py-2.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={isSubmitting}
              className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
              {isSubmitting ? 'Submitting...' : <><Send size={15} /> Submit Application</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── Applications Manager ──────────────────────────────────────────────────────

function ApplicationsManager({
  projectId,
  onBack,
  getToken,
}: {
  projectId: string
  onBack: () => void
  getToken: () => Promise<string | null>
}) {
  const [project, setProject] = useState<Project | null>(null)
  const [applications, setApplications] = useState<ProjectApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [actionError, setActionError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    const token = await getToken()
    if (!token) return
    const [projRes, appsRes] = await Promise.all([
      fetch('/api/hackathon/projects'),
      fetch(`/api/hackathon/projects/${projectId}/applications`, {
        headers: { Authorization: `Bearer ${token}` },
      }),
    ])
    const projects: Project[] = await projRes.json()
    const apps = await appsRes.json()
    setProject(projects.find((p) => p.id === projectId) ?? null)
    setApplications(Array.isArray(apps) ? apps : [])
    setLoading(false)
  }, [projectId, getToken])

  useEffect(() => { fetchData() }, [fetchData])

  const updateApplication = async (appId: string, status: 'accepted' | 'rejected') => {
    setActionError(null)
    const token = await getToken()
    if (!token) return
    const res = await fetch(`/api/hackathon/projects/${projectId}/applications/${appId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ status }),
    })
    if (!res.ok) {
      const err = await res.json()
      setActionError(err.error || 'Failed to update application')
      return
    }
    setApplications((prev) => prev.map((a) => a.id === appId ? { ...a, status } : a))
  }

  if (loading) return <p className="text-muted-foreground py-8 text-center">Loading applications...</p>
  if (!project) return <p className="text-muted-foreground">Project not found.</p>

  const pending = applications.filter((a) => a.status === 'pending').length
  const accepted = applications.filter((a) => a.status === 'accepted').length

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="text-primary hover:underline text-sm flex items-center gap-1">
        ← Back to projects
      </button>
      <div>
        <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">Manage applications for your project</p>
      </div>
      <div className="flex gap-3 flex-wrap">
        <div className="px-4 py-2 bg-amber-100 dark:bg-amber-950/30 rounded-lg">
          <p className="text-sm font-medium text-amber-700 dark:text-amber-400">{pending} Pending</p>
        </div>
        <div className="px-4 py-2 bg-green-100 dark:bg-green-950/30 rounded-lg">
          <p className="text-sm font-medium text-green-700 dark:text-green-400">{accepted} Accepted</p>
        </div>
        <div className="px-4 py-2 bg-secondary rounded-lg">
          <p className="text-sm font-medium text-muted-foreground">{applications.length} Total</p>
        </div>
      </div>
      {actionError && <ErrorBanner message={actionError} />}
      {applications.length === 0 ? (
        <div className="text-center py-12 bg-secondary/30 rounded-xl border border-border">
          <Users size={32} className="mx-auto text-muted-foreground mb-3" />
          <p className="text-muted-foreground font-medium">No applications yet</p>
          <p className="text-sm text-muted-foreground mt-1">Share your project to attract team members</p>
        </div>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => {
            const name = app.applicant_name || 'Unknown'
            const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
            return (
              <div key={app.id} className={`p-5 bg-background border rounded-xl transition-all ${
                app.status === 'pending' ? 'border-amber-200 dark:border-amber-900'
                : app.status === 'accepted' ? 'border-green-200 dark:border-green-900'
                : 'border-border opacity-60'
              }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{initials}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{name}</p>
                        <p className="text-xs text-muted-foreground">Applied {new Date(app.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                    {(app.applicant_skills ?? []).length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(app.applicant_skills ?? []).map((s) => (
                          <span key={s} className="bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-md font-medium">{s}</span>
                        ))}
                      </div>
                    )}
                    {app.applicant_message && (
                      <div className="p-3 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">&ldquo;{app.applicant_message}&rdquo;</p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {app.status === 'pending' && (
                      <>
                        <button onClick={() => updateApplication(app.id, 'accepted')}
                          className="px-4 py-2 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-950/50 transition-colors flex items-center gap-2 text-sm font-medium">
                          <Check size={15} /> Accept
                        </button>
                        <button onClick={() => updateApplication(app.id, 'rejected')}
                          className="px-4 py-2 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-950/50 transition-colors flex items-center gap-2 text-sm font-medium">
                          <X size={15} /> Decline
                        </button>
                      </>
                    )}
                    {app.status === 'accepted' && (
                      <span className="px-4 py-2 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium flex items-center gap-2">
                        <Check size={15} /> Accepted
                      </span>
                    )}
                    {app.status === 'rejected' && (
                      <span className="px-4 py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium">Declined</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

// ── Find Mode (Find Teammates + Find a Team with toggle) ──────────────────────

function FindMode({
  isLoggedIn,
  userId,
  getToken,
}: {
  isLoggedIn: boolean
  userId: string | undefined
  getToken: () => Promise<string | null>
}) {
  const [mode, setMode] = useState<'teammates' | 'team'>('teammates')
  const [skillFilters, setSkillFilters] = useState<string[]>([])
  const [hackathonFilter, setHackathonFilter] = useState('')
  const [search, setSearch] = useState('')

  // Hacker profiles data
  const [hackers, setHackers] = useState<HackerProfile[]>([])
  const [hackersLoading, setHackersLoading] = useState(true)
  const [hackersError, setHackersError] = useState<string | null>(null)

  // Open projects data
  const [projects, setProjects] = useState<Project[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)
  const [projectsError, setProjectsError] = useState<string | null>(null)
  const [applications, setApplications] = useState<ProjectApplication[]>([])
  const [applyingToProject, setApplyingToProject] = useState<Project | null>(null)
  const [applyingLoading, setApplyingLoading] = useState(false)
  const [applyError, setApplyError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hackathon/profiles')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setHackers(data); else setHackersError(data.error || 'Failed to load') })
      .catch(() => setHackersError('Failed to load profiles'))
      .finally(() => setHackersLoading(false))

    fetch('/api/hackathon/projects')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setProjects(data.filter((p: Project) => p.status === 'open')); else setProjectsError(data.error || 'Failed to load') })
      .catch(() => setProjectsError('Failed to load projects'))
      .finally(() => setProjectsLoading(false))
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return
    getToken().then((token) => {
      if (!token) return
      fetch('/api/hackathon/user-applications', { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => r.json())
        .then((data) => { if (Array.isArray(data)) setApplications(data) })
        .catch(() => {})
    })
  }, [isLoggedIn, getToken])

  const handleApplySubmit = async (appData: { applicant_name: string; applicant_skills: string[]; applicant_message: string }) => {
    if (!applyingToProject) return
    setApplyingLoading(true)
    setApplyError(null)
    const token = await getToken()
    if (!token) { setApplyError('Sign in to apply'); setApplyingLoading(false); return }
    const res = await fetch(`/api/hackathon/projects/${applyingToProject.id}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(appData),
    })
    const data = await res.json()
    if (!res.ok) { setApplyError(data.error || 'Failed to submit'); setApplyingLoading(false); return }
    setApplications((prev) => [...prev, data])
    setApplyingToProject(null)
    setApplyingLoading(false)
  }

  const matchesFilters = (skills: string[]) => {
    if (skillFilters.length === 0) return true
    return skillFilters.some((f) => skills.some((s) => s.toLowerCase().includes(f.toLowerCase())))
  }

  const filteredHackers = hackers.filter((h) => {
    const q = search.toLowerCase()
    const textMatch = !q || h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q) || h.skills.some((s) => s.toLowerCase().includes(q))
    const skillMatch = matchesFilters(h.skills)
    const hackathonMatch = !hackathonFilter || h.hackathon === hackathonFilter
    return textMatch && skillMatch && hackathonMatch
  })

  const filteredProjects = projects.filter((p) => {
    const q = search.toLowerCase()
    const textMatch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.skills_needed.some((s) => s.toLowerCase().includes(q))
    const skillMatch = matchesFilters(p.skills_needed)
    const hackathonMatch = !hackathonFilter || p.hackathon === hackathonFilter
    return textMatch && skillMatch && hackathonMatch
  })

  const loading = mode === 'teammates' ? hackersLoading : projectsLoading
  const error = mode === 'teammates' ? hackersError : projectsError

  return (
    <div className="space-y-5">
      {/* Mode toggle */}
      <div className="inline-flex rounded-lg border border-border bg-card p-1 gap-1">
        <button
          onClick={() => setMode('teammates')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            mode === 'teammates' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          👤 Find Teammates
        </button>
        <button
          onClick={() => setMode('team')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            mode === 'team' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          👥 Find a Team
        </button>
      </div>

      {/* Search + hackathon filter row */}
      <div className="flex gap-3 flex-col sm:flex-row">
        <input
          type="text"
          placeholder={mode === 'teammates' ? 'Search by name, role, or skill...' : 'Search projects by name, skill, or description...'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground text-sm"
        />
        <div className="relative flex-shrink-0">
          <select
            value={hackathonFilter}
            onChange={(e) => setHackathonFilter(e.target.value)}
            className="appearance-none pl-4 pr-8 py-2.5 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm w-full sm:w-auto"
          >
            <option value="">All Hackathons</option>
            {HACKATHON_OPTIONS.map((h) => <option key={h}>{h}</option>)}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* Skill filter chips */}
      <div>
        <p className="text-xs text-muted-foreground mb-2 font-medium">Filter by skill:</p>
        <SkillFilterBar selected={skillFilters} onChange={setSkillFilters} />
        {skillFilters.length > 0 && (
          <button onClick={() => setSkillFilters([])} className="text-xs text-muted-foreground hover:text-foreground mt-2 underline">
            Clear filters
          </button>
        )}
      </div>

      {error && <ErrorBanner message={error} />}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      ) : mode === 'teammates' ? (
        filteredHackers.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-xl border border-border">
            <Users size={36} className="mx-auto text-muted-foreground mb-3" />
            <p className="font-medium text-foreground mb-1">{hackers.length === 0 ? 'No hackers yet' : 'No results'}</p>
            <p className="text-sm text-muted-foreground">{hackers.length === 0 ? 'Be the first — create your profile in the Profile tab.' : 'Try different filters.'}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHackers.map((h) => <HackerCard key={h.id} hacker={h} />)}
          </div>
        )
      ) : (
        <>
          {applyError && <ErrorBanner message={applyError} onDismiss={() => setApplyError(null)} />}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-card rounded-xl border border-border">
              <Briefcase size={36} className="mx-auto text-muted-foreground mb-3" />
              <p className="font-medium text-foreground mb-1">{projects.length === 0 ? 'No open teams yet' : 'No results'}</p>
              <p className="text-sm text-muted-foreground">{projects.length === 0 ? 'Check back soon — teams post projects in the Projects tab.' : 'Try different filters.'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isLoggedIn={isLoggedIn}
                  isCreator={userId === project.creator_id}
                  hasApplied={applications.some((a) => a.project_id === project.id)}
                  onApplyClick={setApplyingToProject}
                />
              ))}
            </div>
          )}
          {applyingToProject && (
            <ApplicationModal
              project={applyingToProject}
              onClose={() => setApplyingToProject(null)}
              onSubmit={handleApplySubmit}
              isSubmitting={applyingLoading}
            />
          )}
        </>
      )}
    </div>
  )
}

// ── AI Match Tab ──────────────────────────────────────────────────────────────

function AIMatch({ isLoggedIn, getToken }: { isLoggedIn: boolean; getToken: () => Promise<string | null> }) {
  const [mySkillsText, setMySkillsText] = useState('')
  const [lookingFor, setLookingFor] = useState('')
  const [matchType, setMatchType] = useState<'people' | 'teams'>('people')
  const [matches, setMatches] = useState<(HackerProfile | Project)[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  // Pre-fill from profile if logged in
  useEffect(() => {
    if (!isLoggedIn) return
    getToken().then((token) => {
      if (!token) return
      fetch('/api/hackathon/profiles/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => r.json())
        .then((data) => {
          if (data?.skills?.length) setMySkillsText(data.skills.join(', '))
          if (data?.looking_for) setLookingFor(data.looking_for)
        })
        .catch(() => {})
    })
  }, [isLoggedIn, getToken])

  const handleMatch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    setHasSearched(true)

    const mySkills = mySkillsText.split(',').map((s) => s.trim()).filter(Boolean)
    if (mySkills.length === 0) {
      setError('Please enter at least one skill.')
      setLoading(false)
      return
    }

    const res = await fetch('/api/hackathon/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mySkills, lookingFor, matchType }),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error || 'Matching failed'); setLoading(false); return }
    setMatches(data.matches ?? [])
    setLoading(false)
  }

  return (
    <div className="max-w-3xl space-y-8">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-primary" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-foreground">AI Compatibility Matching</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Tell the AI your skills and what you&apos;re looking for — it surfaces your top 5 most compatible teammates or teams from everyone in HackMate.
          </p>
        </div>
      </div>

      <form onSubmit={handleMatch} className="bg-card border border-border rounded-xl p-6 space-y-5">
        {/* Match type toggle */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">I want to find...</label>
          <div className="inline-flex rounded-lg border border-border bg-background p-1 gap-1">
            <button type="button" onClick={() => setMatchType('people')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                matchType === 'people' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}>
              👤 Teammates
            </button>
            <button type="button" onClick={() => setMatchType('teams')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                matchType === 'teams' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}>
              👥 A Team to Join
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
          </label>
          <input
            type="text"
            required
            value={mySkillsText}
            onChange={(e) => setMySkillsText(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="e.g. React, Python, UI Design"
          />
          {isLoggedIn && (
            <p className="text-xs text-muted-foreground mt-1.5">Pre-filled from your profile — edit freely.</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            What are you looking for? <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <textarea
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
            rows={2}
            placeholder="e.g. Looking for a backend dev and a designer for an AI project"
          />
        </div>

        {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Analyzing compatibility...
            </>
          ) : (
            <><Sparkles size={17} /> Find My Top 5 Matches</>
          )}
        </button>
      </form>

      {hasSearched && !loading && (
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">
            {matches.length > 0 ? `Top ${matches.length} matches for you` : 'No matches found'}
          </h3>
          {matches.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No {matchType === 'teams' ? 'open teams' : 'hackers'} in HackMate yet. Check back as more people join!
            </p>
          ) : matchType === 'teams' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(matches as Project[]).map((p) => (
                <ProjectCard
                  key={p.id} project={p}
                  isLoggedIn={isLoggedIn} isCreator={false} hasApplied={false}
                  onApplyClick={() => {}}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(matches as HackerProfile[]).map((h) => <HackerCard key={h.id} hacker={h} />)}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Events Tab ────────────────────────────────────────────────────────────────

function Events() {
  const [activeTag, setActiveTag] = useState('All')

  const filtered = HACKATHON_EVENTS.filter((e) => {
    if (activeTag === 'All') return true
    if (activeTag === 'In-person') return e.format === 'In-person'
    if (activeTag === 'Online') return e.format === 'Online'
    if (activeTag === 'Hybrid') return e.format === 'Hybrid'
    return e.tags.includes(activeTag)
  })

  const formatBadgeClass = (format: HackathonEvent['format']) => {
    if (format === 'In-person') return 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400'
    if (format === 'Online') return 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400'
    return 'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400'
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground mb-1">Upcoming Hackathons</h2>
        <p className="text-sm text-muted-foreground">Browse major hackathon events and visit their websites to register and learn more.</p>
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2">
        {EVENT_TAG_FILTERS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              activeTag === tag
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/70'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((event) => (
          <div key={event.name} className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${formatBadgeClass(event.format)}`}>
                    {event.format}
                  </span>
                  {event.tags.filter((t) => !['General', 'Large-scale', 'Historic'].includes(t)).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-foreground text-xl">{event.name}</h3>
                <p className="text-sm text-muted-foreground">{event.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{event.description}</p>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-primary" />
                {event.dates}
              </span>
              <span className="flex items-center gap-1.5">
                <Trophy size={12} className="text-primary" />
                {event.prizes}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-primary" />
                {event.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={12} className="text-primary" />
                {event.participants}
              </span>
            </div>

            <a
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Visit Website <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Dates are approximate — always check the official website for confirmed dates and registration deadlines.
      </p>
    </div>
  )
}

// ── Projects Tab ──────────────────────────────────────────────────────────────

function Projects({
  isLoggedIn,
  userId,
  getToken,
}: {
  isLoggedIn: boolean
  userId: string | undefined
  getToken: () => Promise<string | null>
}) {
  const [projects, setProjects] = useState<Project[]>([])
  const [applications, setApplications] = useState<ProjectApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [managingProjectId, setManagingProjectId] = useState<string | null>(null)
  const [applyingToProject, setApplyingToProject] = useState<Project | null>(null)
  const [applyingLoading, setApplyingLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const [formData, setFormData] = useState({
    name: '', description: '', skills: '', teamSize: '3', hackathon: '',
  })

  useEffect(() => {
    fetch('/api/hackathon/projects')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setProjects(data); else setError(data.error || 'Failed to load projects') })
      .catch(() => setError('Failed to load projects'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!isLoggedIn) return
    getToken().then((token) => {
      if (!token) return
      fetch('/api/hackathon/user-applications', { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => r.json())
        .then((data) => { if (Array.isArray(data)) setApplications(data) })
        .catch(() => {})
    })
  }, [isLoggedIn, getToken])

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitLoading(true)
    setError(null)
    const skills = formData.skills.split(',').map((s) => s.trim()).filter(Boolean)
    if (skills.length === 0) { setError('Please add at least one skill'); setSubmitLoading(false); return }
    const token = await getToken()
    if (!token) { setError('You must be signed in to create a project'); setSubmitLoading(false); return }
    const res = await fetch('/api/hackathon/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: formData.name, description: formData.description,
        skills_needed: skills, team_size_needed: parseInt(formData.teamSize) || 3,
        hackathon: formData.hackathon || null,
      }),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error || 'Failed to create project'); setSubmitLoading(false); return }
    setProjects((prev) => [data, ...prev])
    setShowCreateForm(false)
    setFormData({ name: '', description: '', skills: '', teamSize: '3', hackathon: '' })
    setSubmitLoading(false)
  }

  const handleApplySubmit = async (appData: { applicant_name: string; applicant_skills: string[]; applicant_message: string }) => {
    if (!applyingToProject) return
    setApplyingLoading(true)
    const token = await getToken()
    if (!token) { setApplyingLoading(false); return }
    const res = await fetch(`/api/hackathon/projects/${applyingToProject.id}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(appData),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error || 'Failed to submit'); setApplyingLoading(false); return }
    setApplications((prev) => [...prev, data])
    setApplyingToProject(null)
    setApplyingLoading(false)
  }

  const handleDeleteProject = async (projectId: string) => {
    const token = await getToken()
    if (!token) return
    const res = await fetch(`/api/hackathon/projects/${projectId}`, {
      method: 'DELETE', headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) setProjects((prev) => prev.filter((p) => p.id !== projectId))
    else { const err = await res.json(); setError(err.error || 'Failed to delete') }
  }

  const filtered = projects.filter((p) => {
    const q = searchQuery.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.skills_needed.some((s) => s.toLowerCase().includes(q))
  })

  if (loading) return <div className="text-center py-12"><p className="text-muted-foreground">Loading projects...</p></div>
  if (managingProjectId) return <ApplicationsManager projectId={managingProjectId} onBack={() => setManagingProjectId(null)} getToken={getToken} />

  return (
    <div className="space-y-5">
      {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}
      {!isLoggedIn && (
        <div className="p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl flex items-center gap-3">
          <Users size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <Link href="/sign-in" className="font-semibold hover:underline">Sign in</Link> to create projects or apply to teams.
          </p>
        </div>
      )}
      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-4 py-2.5 border border-border rounded-xl bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground text-sm"
        />
        {isLoggedIn && (
          <button
            onClick={() => setShowCreateForm((v) => !v)}
            className="px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 text-sm whitespace-nowrap flex-shrink-0"
          >
            {showCreateForm ? <><X size={15} /> Cancel</> : <><Plus size={15} /> New Project</>}
          </button>
        )}
      </div>

      {showCreateForm && isLoggedIn && (
        <form onSubmit={handleCreateProject} className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-5">
          <div className="pb-3 border-b border-border">
            <h3 className="font-semibold text-foreground text-lg">Create a New Project</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Post your project to find talented teammates</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Name *</label>
            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="e.g. AI-powered Recipe Generator" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
            <textarea required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              rows={4} placeholder="Describe your project goals and what kind of help you need..." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Skills Needed * <span className="text-muted-foreground font-normal">(comma-separated)</span>
              </label>
              <input type="text" required value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                placeholder="e.g. React, Python, UI Design" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Team Size Needed *</label>
              <input type="number" required min="1" max="20" value={formData.teamSize} onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Hackathon <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <div className="relative">
              <select value={formData.hackathon} onChange={(e) => setFormData({ ...formData, hackathon: e.target.value })}
                className="appearance-none w-full px-4 pr-8 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Not specified</option>
                {HACKATHON_OPTIONS.map((h) => <option key={h}>{h}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="flex gap-3 pt-1">
            <button type="button" onClick={() => setShowCreateForm(false)}
              className="flex-1 py-2.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors text-sm">
              Cancel
            </button>
            <button type="submit" disabled={submitLoading}
              className="flex-1 bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm">
              {submitLoading ? 'Posting...' : <><Plus size={16} /> Post Project</>}
            </button>
          </div>
        </form>
      )}

      {projects.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-xl border border-border">
          <Briefcase size={40} className="mx-auto text-muted-foreground mb-4" />
          <p className="font-medium text-foreground text-lg mb-2">No projects yet</p>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
            {isLoggedIn ? 'Be the first to post a project and find your dream team.' : 'Sign in to create a project and start building with others.'}
          </p>
          {isLoggedIn && (
            <button onClick={() => setShowCreateForm(true)}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm">
              <Plus size={16} /> Create First Project
            </button>
          )}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center py-12 text-muted-foreground">No projects match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id} project={project}
              isLoggedIn={isLoggedIn} isCreator={userId === project.creator_id}
              hasApplied={applications.some((a) => a.project_id === project.id)}
              onApplyClick={setApplyingToProject}
              onDelete={handleDeleteProject}
              onManageClick={setManagingProjectId}
            />
          ))}
        </div>
      )}

      {applyingToProject && (
        <ApplicationModal project={applyingToProject} onClose={() => setApplyingToProject(null)} onSubmit={handleApplySubmit} isSubmitting={applyingLoading} />
      )}
    </div>
  )
}

// ── My Profile Tab ────────────────────────────────────────────────────────────

function MyProfile({ isLoggedIn, getToken }: { isLoggedIn: boolean; getToken: () => Promise<string | null> }) {
  const [profile, setProfile] = useState<HackerProfile | null>(null)
  const [formData, setFormData] = useState({
    name: '', role: 'Frontend', skills: '', lookingFor: '', hackathon: '',
    github: '', portfolio: '', linkedin: '', twitter: '', other: '',
  })
  const [loading, setLoading] = useState(true)
  const [submitLoading, setSubmitLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!isLoggedIn) { setLoading(false); return }
    getToken().then((token) => {
      if (!token) { setLoading(false); return }
      fetch('/api/hackathon/profiles/me', { headers: { Authorization: `Bearer ${token}` } })
        .then((r) => r.json())
        .then((data) => {
          if (data?.name) {
            setProfile(data)
            setFormData({
              name: data.name, role: data.role, skills: data.skills.join(', '),
              lookingFor: data.looking_for || '', hackathon: data.hackathon || '',
              github: data.links?.github || '', portfolio: data.links?.portfolio || '',
              linkedin: data.links?.linkedin || '', twitter: data.links?.twitter || '',
              other: data.links?.other || '',
            })
          }
        })
        .catch(() => {})
        .finally(() => setLoading(false))
    })
  }, [isLoggedIn, getToken])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSubmitLoading(true)
    const skills = formData.skills.split(',').map((s) => s.trim()).filter(Boolean)
    if (skills.length === 0) { setError('Please add at least one skill'); setSubmitLoading(false); return }
    const token = await getToken()
    if (!token) { setError('You must be signed in'); setSubmitLoading(false); return }
    const res = await fetch('/api/hackathon/profiles/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: formData.name, role: formData.role, skills, looking_for: formData.lookingFor,
        hackathon: formData.hackathon || null,
        links: {
          github: formData.github, portfolio: formData.portfolio,
          linkedin: formData.linkedin, twitter: formData.twitter, other: formData.other,
        },
      }),
    })
    const data = await res.json()
    if (!res.ok) { setError(data.error || 'Failed to save profile'); setSubmitLoading(false); return }
    setProfile(data)
    setSuccess(true)
    setSubmitLoading(false)
    setTimeout(() => setSuccess(false), 3000)
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">Sign in to create your hacker profile.</p>
        <Link href="/sign-in" className="text-primary hover:underline font-medium">Sign in now →</Link>
      </div>
    )
  }

  if (loading) return <div className="text-center py-12"><p className="text-muted-foreground">Loading profile...</p></div>

  return (
    <div className="max-w-2xl">
      {success && (
        <div className="mb-5 p-4 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-900 flex items-center gap-2">
          <Check size={16} />
          Profile {profile ? 'updated' : 'created'} — you now appear in Find Hackers!
        </div>
      )}
      {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}

      <form onSubmit={handleSubmit} className="space-y-5 bg-card p-6 rounded-xl border border-border">
        <div className="pb-3 border-b border-border">
          <h3 className="font-semibold text-foreground text-lg">{profile ? 'Edit Your Profile' : 'Create Your Profile'}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">Your profile is visible to everyone in Find</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="Your name" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Role *</label>
            <div className="relative">
              <select required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="appearance-none w-full px-4 pr-8 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                {['Frontend', 'Backend', 'Full Stack', 'ML/AI', 'Designer', 'Web3', 'Mobile', 'DevOps', 'Product', 'Other'].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Hackathon <span className="text-muted-foreground font-normal">(optional)</span>
            </label>
            <div className="relative">
              <select value={formData.hackathon} onChange={(e) => setFormData({ ...formData, hackathon: e.target.value })}
                className="appearance-none w-full px-4 pr-8 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Not specified</option>
                {HACKATHON_OPTIONS.map((h) => <option key={h}>{h}</option>)}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Top Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
          </label>
          <input type="text" required value={formData.skills} onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="e.g. React, Node.js, PostgreSQL" />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">What are you looking for?</label>
          <textarea value={formData.lookingFor} onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
            rows={3} placeholder="Describe what you're looking for in teammates or projects..." />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-foreground">
            Links <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <div className="space-y-2">
            {[
              { key: 'github', label: 'GitHub', placeholder: 'https://github.com/username' },
              { key: 'portfolio', label: 'Portfolio', placeholder: 'https://yoursite.com' },
              { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/in/username' },
              { key: 'twitter', label: 'Twitter / X', placeholder: 'https://x.com/username' },
              { key: 'other', label: 'Other', placeholder: 'Any other link' },
            ].map(({ key, label, placeholder }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground w-20 flex-shrink-0">{label}</span>
                <input type="url" value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground text-sm"
                  placeholder={placeholder} />
              </div>
            ))}
          </div>
        </div>

        <button type="submit" disabled={submitLoading}
          className="w-full bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
          {submitLoading ? 'Saving...' : profile ? 'Update Profile' : 'Create Profile'}
        </button>
      </form>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function HackMatePage() {
  const { user, loading, getAccessToken } = useAuth()

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />
        <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
          <p className="text-muted-foreground">Loading...</p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/images/hackmate-logo.svg"
              alt="HackMate logo"
              width={56}
              height={56}
              className="rounded-lg flex-shrink-0"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">HackMate</h1>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">New</span>
          </div>
          <p className="text-lg text-muted-foreground">
            Find hackathon teammates, browse open teams, get AI-matched, and discover upcoming events.
          </p>
        </div>

        <Tabs defaultValue="find" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="find">Find</TabsTrigger>
            <TabsTrigger value="ai-match">AI Match</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="find">
            <FindMode isLoggedIn={!!user} userId={user?.id} getToken={getAccessToken} />
          </TabsContent>

          <TabsContent value="ai-match">
            <AIMatch isLoggedIn={!!user} getToken={getAccessToken} />
          </TabsContent>

          <TabsContent value="events">
            <Events />
          </TabsContent>

          <TabsContent value="projects">
            <Projects isLoggedIn={!!user} userId={user?.id} getToken={getAccessToken} />
          </TabsContent>

          <TabsContent value="profile">
            <MyProfile isLoggedIn={!!user} getToken={getAccessToken} />
          </TabsContent>
        </Tabs>
      </main>

      <SiteFooter />
    </div>
  )
}
