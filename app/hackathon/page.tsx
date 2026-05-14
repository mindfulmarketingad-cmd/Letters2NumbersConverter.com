'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { Mail, AlertCircle, Trash2, Check, X, Users, Clock, Briefcase, Send, Plus, ChevronDown } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useAuth } from '@/lib/auth-context'
import Link from 'next/link'

// ── Types ─────────────────────────────────────────────────────────────────────

interface HackerProfile {
  id: string
  user_id: string
  name: string
  role: string
  skills: string[]
  looking_for: string
  created_at: string
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
  created_at: string
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

// ── Hacker Card ───────────────────────────────────────────────────────────────

function HackerCard({ hacker }: { hacker: HackerProfile }) {
  const initials = hacker.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground truncate">{hacker.name}</h3>
          <p className="text-sm text-muted-foreground">{hacker.role}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {hacker.skills.map((skill) => (
          <span key={skill} className="inline-block bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
      {hacker.looking_for && (
        <p className="text-xs text-muted-foreground line-clamp-2">{hacker.looking_for}</p>
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
  onDelete: (projectId: string) => void
  onManageClick: (projectId: string) => void
}) {
  const daysAgo = Math.floor((Date.now() - new Date(project.created_at).getTime()) / 86400000)
  const postedText = daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo}d ago`

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all group flex flex-col">
      {/* Header */}
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

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">{project.description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Users size={13} />
          {project.current_team_size}/{project.team_size_needed} members
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.skills_needed.map((skill) => (
          <span key={skill} className="inline-block bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-md font-medium">
            {skill}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-4 border-t border-border mt-auto">
        {isCreator ? (
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
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
            </label>
            <input
              type="text"
              required
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              rows={3}
              placeholder="Tell the project creator why you'd be a great fit..."
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Submitting...' : <><Send size={15} /> Submit Application</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── Find Hackers Tab ──────────────────────────────────────────────────────────

function FindHackers() {
  const [hackers, setHackers] = useState<HackerProfile[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hackathon/profiles')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setHackers(data)
        else setError(data.error || 'Failed to load profiles')
      })
      .catch(() => setError('Failed to load profiles'))
      .finally(() => setLoading(false))
  }, [])

  const filtered = hackers.filter((h) => {
    const q = searchQuery.toLowerCase()
    return h.name.toLowerCase().includes(q) || h.role.toLowerCase().includes(q) || h.skills.some((s) => s.toLowerCase().includes(q))
  })

  if (loading) return <div className="text-center py-12"><p className="text-muted-foreground">Loading hackers...</p></div>
  if (error) return <ErrorBanner message={error} />

  return (
    <div className="space-y-6">
      <input
        type="text"
        placeholder="Search by name, role, or skill..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2.5 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
      />
      {hackers.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-xl border border-border">
          <Users size={36} className="mx-auto text-muted-foreground mb-3" />
          <p className="font-medium text-foreground mb-1">No hackers yet</p>
          <p className="text-sm text-muted-foreground">Be the first — create your profile in the My Profile tab.</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center py-12 text-muted-foreground">No hackers match your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((h) => <HackerCard key={h.id} hacker={h} />)}
        </div>
      )}
    </div>
  )
}

// ── Projects Applications Manager ─────────────────────────────────────────────

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
      fetch(`/api/hackathon/projects`),
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
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="text-primary hover:underline text-sm flex items-center gap-1">
          ← Back to projects
        </button>
      </div>

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
              <div
                key={app.id}
                className={`p-5 bg-background border rounded-xl transition-all ${
                  app.status === 'pending' ? 'border-amber-200 dark:border-amber-900'
                  : app.status === 'accepted' ? 'border-green-200 dark:border-green-900'
                  : 'border-border opacity-60'
                }`}
              >
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
                        <button
                          onClick={() => updateApplication(app.id, 'accepted')}
                          className="px-4 py-2 bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 rounded-lg hover:bg-green-200 dark:hover:bg-green-950/50 transition-colors flex items-center gap-2 text-sm font-medium"
                        >
                          <Check size={15} /> Accept
                        </button>
                        <button
                          onClick={() => updateApplication(app.id, 'rejected')}
                          className="px-4 py-2 bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-950/50 transition-colors flex items-center gap-2 text-sm font-medium"
                        >
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
                      <span className="px-4 py-2 bg-secondary text-muted-foreground rounded-lg text-sm font-medium">
                        Declined
                      </span>
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
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [managingProjectId, setManagingProjectId] = useState<string | null>(null)
  const [applyingToProject, setApplyingToProject] = useState<Project | null>(null)
  const [applyingLoading, setApplyingLoading] = useState(false)
  const [submitLoading, setSubmitLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    skills: '',
    teamSize: '3',
  })

  // Fetch projects (public)
  useEffect(() => {
    fetch('/api/hackathon/projects')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProjects(data)
        else setError(data.error || 'Failed to load projects')
      })
      .catch(() => setError('Failed to load projects'))
      .finally(() => setLoading(false))
  }, [])

  // Fetch user's own applications
  useEffect(() => {
    if (!isLoggedIn) return
    getToken().then((token) => {
      if (!token) return
      fetch('/api/hackathon/user-applications', {
        headers: { Authorization: `Bearer ${token}` },
      })
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
    if (skills.length === 0) {
      setError('Please add at least one skill')
      setSubmitLoading(false)
      return
    }

    const token = await getToken()
    if (!token) {
      setError('You must be signed in to create a project')
      setSubmitLoading(false)
      return
    }

    const res = await fetch('/api/hackathon/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description,
        skills_needed: skills,
        team_size_needed: parseInt(formData.teamSize) || 3,
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Failed to create project')
      setSubmitLoading(false)
      return
    }

    setProjects((prev) => [data, ...prev])
    setShowCreateForm(false)
    setFormData({ name: '', description: '', skills: '', teamSize: '3' })
    setSubmitLoading(false)
  }

  const handleApplySubmit = async (appData: { applicant_name: string; applicant_skills: string[]; applicant_message: string }) => {
    if (!applyingToProject) return
    setApplyingLoading(true)
    setError(null)

    const token = await getToken()
    if (!token) {
      setError('You must be signed in to apply')
      setApplyingLoading(false)
      return
    }

    const res = await fetch(`/api/hackathon/projects/${applyingToProject.id}/applications`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(appData),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.error || 'Failed to submit application')
      setApplyingLoading(false)
      return
    }

    setApplications((prev) => [...prev, data])
    setApplyingToProject(null)
    setApplyingLoading(false)
  }

  const handleDeleteProject = async (projectId: string) => {
    const token = await getToken()
    if (!token) return

    const res = await fetch(`/api/hackathon/projects/${projectId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    })

    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.id !== projectId))
    } else {
      const err = await res.json()
      setError(err.error || 'Failed to delete project')
    }
  }

  const filtered = projects.filter((p) => {
    const q = searchQuery.toLowerCase()
    return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.skills_needed.some((s) => s.toLowerCase().includes(q))
  })

  if (loading) return <div className="text-center py-12"><p className="text-muted-foreground">Loading projects...</p></div>

  if (managingProjectId) {
    return (
      <ApplicationsManager
        projectId={managingProjectId}
        onBack={() => setManagingProjectId(null)}
        getToken={getToken}
      />
    )
  }

  return (
    <div className="space-y-5">
      {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}

      {/* Auth banner */}
      {!isLoggedIn && (
        <div className="p-5 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-xl flex items-center gap-3">
          <Users size={20} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <p className="text-sm text-blue-700 dark:text-blue-400">
            <Link href="/sign-in" className="font-semibold hover:underline">Sign in</Link> to create projects or apply to teams.
          </p>
        </div>
      )}

      {/* Search + Create row */}
      <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search projects by name, description, or skills..."
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

      {/* Create project form */}
      {showCreateForm && isLoggedIn && (
        <form onSubmit={handleCreateProject} className="bg-card p-6 rounded-xl border border-border shadow-sm space-y-5">
          <div className="pb-3 border-b border-border">
            <h3 className="font-semibold text-foreground text-lg">Create a New Project</h3>
            <p className="text-sm text-muted-foreground mt-0.5">Post your project to find talented teammates</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              placeholder="e.g. AI-powered Recipe Generator"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Project Description *</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
              rows={4}
              placeholder="Describe your project goals and what kind of help you need..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Skills Needed * <span className="text-muted-foreground font-normal">(comma-separated)</span>
              </label>
              <input
                type="text"
                required
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                placeholder="e.g. React, Python, UI Design"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Team Size Needed *</label>
              <input
                type="number"
                required
                min="1"
                max="20"
                value={formData.teamSize}
                onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="flex-1 py-2.5 border border-border rounded-lg font-medium text-foreground hover:bg-secondary transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitLoading}
              className="flex-1 bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
            >
              {submitLoading ? 'Posting...' : <><Plus size={16} /> Post Project</>}
            </button>
          </div>
        </form>
      )}

      {/* Project list */}
      {projects.length === 0 ? (
        <div className="text-center py-16 bg-card rounded-xl border border-border">
          <Briefcase size={40} className="mx-auto text-muted-foreground mb-4" />
          <p className="font-medium text-foreground text-lg mb-2">No projects yet</p>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
            {isLoggedIn ? 'Be the first to post a project and find your dream team.' : 'Sign in to create a project and start building with others.'}
          </p>
          {isLoggedIn && (
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm"
            >
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
              key={project.id}
              project={project}
              isLoggedIn={isLoggedIn}
              isCreator={userId === project.creator_id}
              hasApplied={applications.some((a) => a.project_id === project.id)}
              onApplyClick={setApplyingToProject}
              onDelete={handleDeleteProject}
              onManageClick={setManagingProjectId}
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
    </div>
  )
}

// ── My Profile Tab ────────────────────────────────────────────────────────────

function MyProfile({ isLoggedIn, getToken }: { isLoggedIn: boolean; getToken: () => Promise<string | null> }) {
  const [profile, setProfile] = useState<HackerProfile | null>(null)
  const [formData, setFormData] = useState({ name: '', role: 'Frontend', skills: '', lookingFor: '' })
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
          if (data && data.name) {
            setProfile(data)
            setFormData({ name: data.name, role: data.role, skills: data.skills.join(', '), lookingFor: data.looking_for || '' })
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
      body: JSON.stringify({ name: formData.name, role: formData.role, skills, looking_for: formData.lookingFor }),
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
          <p className="text-sm text-muted-foreground mt-0.5">Your profile is visible to everyone in Find Hackers</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Role *</label>
          <select
            required
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {['Frontend', 'Backend', 'Full Stack', 'ML/AI', 'Designer', 'Web3', 'Mobile', 'DevOps', 'Product', 'Other'].map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Top Skills * <span className="text-muted-foreground font-normal">(comma-separated)</span>
          </label>
          <input
            type="text"
            required
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
            placeholder="e.g. React, Node.js, PostgreSQL"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">What are you looking for?</label>
          <textarea
            value={formData.lookingFor}
            onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
            className="w-full px-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground"
            rows={3}
            placeholder="Describe what you're looking for in teammates or projects..."
          />
        </div>

        <button
          type="submit"
          disabled={submitLoading}
          className="w-full bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitLoading ? 'Saving...' : profile ? 'Update Profile' : 'Create Profile'}
        </button>
      </form>
    </div>
  )
}

// ── Shared error banner ───────────────────────────────────────────────────────

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
            Find hackathon teammates, post your project, and build together.
          </p>
        </div>

        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="find-hackers">Find Hackers</TabsTrigger>
            <TabsTrigger value="my-profile">My Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <Projects
              isLoggedIn={!!user}
              userId={user?.id}
              getToken={getAccessToken}
            />
          </TabsContent>

          <TabsContent value="find-hackers">
            <FindHackers />
          </TabsContent>

          <TabsContent value="my-profile">
            <MyProfile isLoggedIn={!!user} getToken={getAccessToken} />
          </TabsContent>
        </Tabs>
      </main>

      <SiteFooter />
    </div>
  )
}
